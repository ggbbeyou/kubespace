package pipeline_trigger

import (
	"github.com/kubespace/kubespace/pkg/controller"
	"github.com/kubespace/kubespace/pkg/core/lock"
	"github.com/kubespace/kubespace/pkg/informer"
	pipelinelistwatcher "github.com/kubespace/kubespace/pkg/informer/listwatcher/pipeline"
	"github.com/kubespace/kubespace/pkg/model"
)

// PipelineTriggerController 流水线触发事件controller，对所有的触发配置进行监听，如果有触发条件满足，则生成触发事件
// 并监听未消费的触发事件，生成流水线构建
type PipelineTriggerController struct {
	models                       *model.Models
	pipelineTriggerInformer      informer.Informer
	pipelineTriggerEventInformer informer.Informer
	// 流水线构建时对其进行加锁，保证只有一个进行处理
	lock lock.Lock
}

func NewPipelineTriggerController(config *controller.Config) *PipelineTriggerController {

	// 定时监听所有的流水线触发配置
	pipelineTriggerInformer := config.InformerFactory.PipelineTriggerInformer(&pipelinelistwatcher.PipelineTriggerWatchCondition{})

	c := &PipelineTriggerController{
		models:                  config.Models,
		pipelineTriggerInformer: pipelineTriggerInformer,
		lock:                    lock.NewMemLock(),
	}
	// 流水线触发handler
	pipelineTriggerInformer.AddHandler(&informer.ResourceHandler{
		CheckFunc:  c.triggerCheck,
		HandleFunc: c.triggerHandle,
	})

	return c
}

func (p *PipelineTriggerController) Run(stopCh <-chan struct{}) {
	go p.pipelineTriggerInformer.Run(stopCh)
}