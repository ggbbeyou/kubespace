(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6183973c"],{"1cb3":function(t,n,e){"use strict";e.d(n,"d",(function(){return a})),e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return s})),e.d(n,"c",(function(){return l})),e.d(n,"e",(function(){return r})),e.d(n,"f",(function(){return u}));e("99af");var i=e("b775");function a(t,n){return Object(i["a"])({url:"pipeline/build/list",method:"get",params:{pipeline_id:t,last_build_number:n}})}function o(t){return Object(i["a"])({url:"pipeline/build/".concat(t),method:"get"})}function s(t,n){return Object(i["a"])({url:"pipeline/build",method:"post",data:{pipeline_id:parseInt(t),params:n}})}function l(t,n){return Object(i["a"])({url:"pipeline/build/log/".concat(t).concat(n?"/sse":""),method:"get"})}function r(t){return Object(i["a"])({url:"pipeline/build/manual_execute",method:"post",data:t})}function u(t){return Object(i["a"])({url:"pipeline/build/retry",method:"post",data:t})}},3450:function(t,n,e){"use strict";var i=e("6649"),a=e.n(i);a.a},6649:function(t,n,e){},"9a6a":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("clusterbar",{attrs:{titleName:t.titleName,titleLink:["pipeline","pipelineBuilds"]}}),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"dashboard-container detail-dashboard dashboard-container-build-detail",staticStyle:{"margin-left":"20px","margin-right":"20px"},style:{height:t.maxHeight+"px"},attrs:{"max-height":t.maxHeight}},[e("div",{staticStyle:{padding:"5px 0px 0px"}},[e("el-form",{staticClass:"pod-item",staticStyle:{margin:"3px 0px 10px 0px",border:"1px solid #EBEEF5","box-shadow":"none",padding:"5px 20px"},attrs:{"label-position":"left",inline:"","label-width":"80px"}},[e("el-form-item",{attrs:{label:"构建号"}},[e("span",{style:{color:t.statusColorMap[t.build.pipeline_run.status],"font-size":"16px"}},["pause"!=t.build.pipeline_run.status?e("i",{class:t.statusIconMap[t.build.pipeline_run.status]}):e("svg-icon",{attrs:{"icon-class":"pause"}}),t._v(" #"+t._s(t.build.pipeline_run.build_number)+" ")],1)]),e("el-form-item",{attrs:{label:"构建时间"}},[e("span",[t._v(t._s(t.$dateFormat(t.build.pipeline_run.create_time)))])]),e("el-form-item",{attrs:{label:"CommitId"}},[e("span",[t._v(t._s(t.getBuildCommitId()))])]),e("el-form-item",{attrs:{label:"构建人"}},[e("span",{},[t._v(t._s(t.build.pipeline_run.operator))])]),e("el-form-item",{attrs:{label:"构建分支"}},[e("span",[t._v(t._s(t.build.pipeline_run.env?t.build.pipeline_run.env["PIPELINE_CODE_BRANCH"]:""))])]),e("el-form-item",{attrs:{label:"Comment"}},[e("span",[t._v(t._s(t.getBuildCommitComment()))])])],1)],1),e("div",[e("div",{staticClass:"pod-item",staticStyle:{margin:"0px",border:"1px solid #EBEEF5","box-shadow":"none","font-size":"14px",padding:"0px"},style:{height:t.maxHeight-80+"px"},attrs:{"label-position":"left",inline:"","label-width":"80px"}},[e("el-container",{staticStyle:{height:"100%"}},[e("el-aside",{staticStyle:{"border-right":"1px solid #EBEEF5",height:"100%",padding:"10px 20px","line-height":"25px",color:"#606266"},attrs:{width:"240px",hight:"100%"}},t._l(t.build.stages_run,(function(n){return e("div",{key:n.id,style:{color:t.statusColorMap[n.status]}},[e("div",{staticClass:"click-main-content",on:{click:function(e){return t.clickStage(n)}}},[t._v(" "+t._s(n.name)+" ")]),t._l(n.jobs,(function(i){return e("div",{key:i.id,staticClass:"click-main-content",staticStyle:{"margin-left":"15px"},on:{click:function(e){return t.clickStage(n,i)}}},[e("i",{class:t.statusIconMap[i.status]}),t._v(" "+t._s(i.name)+" ")])}))],2)})),0),"stage"==t.mainContent.type?e("el-main",{staticStyle:{padding:"3px 0px"}},[e("el-form",{staticClass:"pod-item",staticStyle:{margin:"3px 0px 0px 0px",border:"0px solid #EBEEF5","box-shadow":"none",padding:"5px 20px"},attrs:{"label-position":"left",inline:"","label-width":"80px"}},[e("el-form-item",{attrs:{label:"阶段"}},[e("span",{style:{color:t.statusColorMap[t.mainContent.mainStage.status],"font-size":"14px"}},[e("i",{class:t.statusIconMap[t.mainContent.mainStage.status]}),t._v(" "+t._s(t.mainContent.mainStage.name)+" ")])]),e("el-form-item",{attrs:{label:"执行时间"}},[e("span",[t._v(t._s(t.$dateFormat(t.mainContent.mainStage.exec_time)))])]),"ok"==t.mainContent.mainStage.status||"error"==t.mainContent.mainStage.status?e("el-form-item",{attrs:{label:"完成时间"}},[e("span",[t._v(t._s(t.$dateFormat(t.mainContent.mainStage.update_time)))])]):t._e()],1),e("div",{staticClass:"stage-params",staticStyle:{"margin-left":"20px","margin-right":"20px",color:"#99a9bf"}},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:t.mainStageEnvs,"tooltip-effect":"dark","max-height":t.maxHeight-135,"cell-style":t.cellStyle,"default-sort":{prop:"name"},"row-key":"name"}},[e("el-table-column",{attrs:{prop:"name",label:"流水线环境参数","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{prop:"value",label:"参数值"},scopedSlots:t._u([{key:"default",fn:function(n){return[t._v(" "+t._s(n.row.value)+" ")]}}],null,!1,4272015574)})],1)],1)],1):t._e(),"job"==t.mainContent.type?e("el-main",{staticStyle:{padding:"3px 0px"}},[e("el-form",{staticClass:"pod-item",staticStyle:{margin:"3px 0px 0px 0px",border:"0px solid #EBEEF5","box-shadow":"none",padding:"5px 20px"},attrs:{"label-position":"left",inline:"","label-width":"80px"}},[e("el-form-item",{attrs:{label:"任务"}},[e("span",{style:{color:t.statusColorMap[t.mainContent.mainJob.status],"font-size":"14px"}},[e("i",{class:t.statusIconMap[t.mainContent.mainJob.status]}),t._v(" "+t._s(t.mainContent.mainJob.name)+" ")])]),e("el-form-item",{attrs:{label:"执行时间"}},[e("span",[t._v(t._s(t.$dateFormat(t.mainContent.mainStage.exec_time)))])]),"ok"==t.mainContent.mainJob.status||"error"==t.mainContent.mainJob.status?e("el-form-item",{attrs:{label:"完成时间"}},[e("span",[t._v(t._s(t.$dateFormat(t.mainContent.mainJob.update_time)))])]):t._e()],1),e("div",{staticStyle:{overflow:"scroll",color:"#C0C4CC",margin:"0px 10px",padding:"10px 15px","line-height":"17px","white-space":"pre-wrap","background-color":"#303133"},style:{height:t.maxHeight-130+"px"},attrs:{id:"jobLogDiv"}},[e("div",[t._v(t._s("wait"==t.mainContent.mainJob.status?"待执行...":t.mainContent.jobLog?t.mainContent.jobLog:""))]),"doing"!=t.mainContent.mainJob.status&&"wait"!=t.mainContent.mainJob.status?e("div",[t._v("执行结果："),e("br"),t._v(t._s(t.mainContent.mainJob.result))]):t._e(),"doing"==t.mainContent.mainJob.status?e("div",[e("i",{staticClass:"el-icon-loading"})]):t._e()])],1):t._e()],1)],1)])])],1)},a=[],o=(e("c975"),e("b0c0"),e("b85c")),s=e("61b2"),l=e("1cb3"),r={name:"PipelineBuildDetail",components:{Clusterbar:s["a"]},data:function(){return{titleName:[],search_name:"",users:[],cellStyle:{border:0,padding:"6px 0"},maxHeight:window.innerHeight-130,loading:!0,build:{pipeline_run:{}},buildSSE:null,statusIconMap:{ok:"el-icon-success",error:"el-icon-error",wait:"el-icon-remove",doing:"el-icon-refresh refresh-rotate"},statusColorMap:{ok:"#67c23a",error:"#DC143C",doing:"#E6A23C"},pipelines:[{name:"PIPELINE_CODE_COMMIT_ID",value:"https://github.com/openspacee/osp"}],mainContent:{type:"",mainStage:{},mainJob:{},jobLog:""},jobLogSSE:null,jobLogId:"",runningStatus:["doing","wait"],scrollToBottom:!0}},created:function(){this.getBuild()},destroyed:function(){this.buildSSE&&this.buildSSE.close(),this.jobLogSSE&&this.jobLogSSE.close()},mounted:function(){var t=this;window.onresize=function(){return function(){var n=window.innerHeight-130;t.maxHeight=n}()}},computed:{buildId:function(){return this.$route.params.buildId},mainStageEnvs:function(){if(this.mainContent.mainStage.env){var t=[];for(var n in this.mainContent.mainStage.env)t.push({name:n,value:this.mainContent.mainStage.env[n]});return t}return[]}},methods:{getBuild:function(){var t=this;this.loading=!0,Object(l["b"])(this.buildId).then((function(n){t.build=n.data,t.titleName=["流水线",t.build.pipeline.name,"#"+t.build.pipeline_run.build_number],t.getMainContent(),t.runningStatus.indexOf(t.build.pipeline_run.status)>=0&&t.fetchBuildSSE(),t.loading=!1})).catch((function(){t.loading=!1}))},getMainContent:function(){var t,n=Object(o["a"])(this.build.stages_run);try{for(n.s();!(t=n.n()).done;){var e=t.value;if("ok"!=e.status){var i,a=Object(o["a"])(e.jobs);try{for(a.s();!(i=a.n()).done;){var s=i.value;if("ok"!=s.status)return this.mainContent={type:"job",mainStage:e,mainJob:s,jobLog:""},void this.getJobLog()}}catch(l){a.e(l)}finally{a.f()}}}}catch(l){n.e(l)}finally{n.f()}this.mainContent={type:"stage",mainStage:this.build.stages_run[0],mainJob:{},jobLog:""},this.getJobLog()},fetchBuildSSE:function(){var t=this,n="/api/v1/pipeline/build/".concat(this.buildId,"/sse");this.buildSSE=new EventSource(n),this.buildSSE.addEventListener("message",(function(n){if(n.data&&"\n"!=n.data){var e=JSON.parse(n.data);if(e.object){var i=e.object;console.log(i),i.pipeline_run&&t.$set(t.build,"pipeline_run",i.pipeline_run),i.stages_run&&t.$set(t.build,"stages_run",i.stages_run),-1==t.runningStatus.indexOf(t.build.pipeline_run.status)&&t.buildSSE.close();var a,s=Object(o["a"])(t.build.stages_run);try{for(s.s();!(a=s.n()).done;){var l=a.value;if(l.id==t.mainContent.mainStage.id){if(t.mainContent.mainStage=l,t.mainContent.mainJob.id){var r,u=Object(o["a"])(l.jobs);try{for(u.s();!(r=u.n()).done;){var d=r.value;d.id==t.mainContent.mainJob.id&&(t.mainContent.mainJob=d)}}catch(c){u.e(c)}finally{u.f()}}break}}}catch(c){s.e(c)}finally{s.f()}t.getJobLog()}}})),this.buildSSE.addEventListener("error",(function(t){t.readyState==EventSource.CLOSED&&console.log("event was closed")})),this.buildSSE.addEventListener("close",(function(n){console.log(n.type),t.buildSSE.close()}))},getBuildCommitId:function(){if(!this.build.pipeline_run)return"";if(!this.build.pipeline_run.env)return"";if(!this.build.pipeline_run.env["PIPELINE_CODE_COMMIT_ID"])return"";var t=this.build.pipeline_run.env["PIPELINE_CODE_COMMIT_ID"].substr(0,10),n=this.build.pipeline_run.env["PIPELINE_CODE_COMMIT_AUTHOR"];return t+" ("+n+")"},getBuildCommitComment:function(){return this.build.pipeline_run&&this.build.pipeline_run.env&&this.build.pipeline_run.env["PIPELINE_CODE_COMMIT_MESSAGE"]?this.build.pipeline_run.env["PIPELINE_CODE_COMMIT_MESSAGE"].substr(0,30):""},clickStage:function(t,n){this.mainContent.type=n?"job":"stage",this.mainContent.mainStage=t,this.mainContent.mainJob=n||{},this.getJobLog()},getJobLog:function(){var t=this;if("job"==this.mainContent.type)if(this.mainContent.mainJob.id!=this.jobLogId){this.mainContent.jobLog="",this.jobLogId=this.mainContent.mainJob.id,this.jobLogSSE&&this.jobLogSSE.close();var n=!1;this.runningStatus.indexOf(this.mainContent.mainJob.status)>=0&&(n=!0),n?this.fetchJobLogSSE(this.mainContent.mainJob.id):Object(l["c"])(this.mainContent.mainJob.id).then((function(n){t.$set(t.mainContent,"jobLog",n.data)})).catch((function(){}))}else-1==this.runningStatus.indexOf(this.mainContent.mainJob.status)&&this.jobLogSSE&&(this.jobLogSSE.close(),Object(l["c"])(this.mainContent.mainJob.id).then((function(n){t.$set(t.mainContent,"jobLog",n.data),t.$nextTick((function(){if(t.scrollToBottom){var n=document.getElementById("jobLogDiv");n.scrollTop=n.scrollHeight}}))})).catch((function(){})));else this.jobLogSSE&&this.jobLogSSE.close()},fetchJobLogSSE:function(t){var n=this,e="/api/v1/pipeline/build/log/".concat(t,"/sse");this.jobLogSSE=new EventSource(e),this.jobLogSSE.addEventListener("message",(function(t){if(t.data&&"\n"!=t.data&&"{}"!=t.data){n.$set(n.mainContent,"jobLog",t.data);var e=n;n.$nextTick((function(){if(e.scrollToBottom){var t=document.getElementById("jobLogDiv");t.scrollTop=t.scrollHeight}}))}})),this.jobLogSSE.addEventListener("error",(function(t){t.readyState==EventSource.CLOSED&&console.log("event was closed")})),this.jobLogSSE.addEventListener("close",(function(t){console.log(t.type),n.jobLogSSE.close()}))}}},u=r,d=(e("3450"),e("c85c"),e("2877")),c=Object(d["a"])(u,i,a,!1,null,"b2b7918c",null);n["default"]=c.exports},a77b:function(t,n,e){},c85c:function(t,n,e){"use strict";var i=e("a77b"),a=e.n(i);a.a}}]);