(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21f6207d"],{"1cb3":function(e,t,i){"use strict";i.d(t,"d",(function(){return s})),i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return r})),i.d(t,"c",(function(){return l})),i.d(t,"e",(function(){return o})),i.d(t,"f",(function(){return c}));i("99af");var a=i("b775");function s(e,t){return Object(a["a"])({url:"pipeline/build/list",method:"get",params:{pipeline_id:e,last_build_number:t}})}function n(e){return Object(a["a"])({url:"pipeline/build/".concat(e),method:"get"})}function r(e,t){return Object(a["a"])({url:"pipeline/build",method:"post",data:{pipeline_id:parseInt(e),params:t}})}function l(e,t){return Object(a["a"])({url:"pipeline/build/log/".concat(e).concat(t?"/sse":""),method:"get"})}function o(e){return Object(a["a"])({url:"pipeline/build/manual_execute",method:"post",data:e})}function c(e){return Object(a["a"])({url:"pipeline/build/retry",method:"post",data:e})}},"2ad9":function(e,t,i){"use strict";i.d(t,"d",(function(){return s})),i.d(t,"c",(function(){return n})),i.d(t,"e",(function(){return r})),i.d(t,"a",(function(){return l})),i.d(t,"b",(function(){return o}));var a=i("b775");function s(e){return Object(a["a"])({url:"pipeline/pipeline",method:"get",params:{workspace_id:e}})}function n(e){return Object(a["a"])({url:"pipeline/pipeline/".concat(e),method:"get"})}function r(e){return Object(a["a"])({url:"pipeline/pipeline",method:"put",data:e})}function l(e){return Object(a["a"])({url:"pipeline/pipeline",method:"post",data:e})}function o(e){return Object(a["a"])({url:"pipeline/pipeline/".concat(e),method:"delete"})}},"74ae":function(e,t,i){},7631:function(e,t,i){"use strict";var a=i("79c6"),s=i.n(a);s.a},"79c6":function(e,t,i){},"90a4":function(e,t,i){"use strict";var a=i("74ae"),s=i.n(a);s.a},a15b:function(e,t,i){"use strict";var a=i("23e7"),s=i("44ad"),n=i("fc6a"),r=i("a640"),l=[].join,o=s!=Object,c=r("join",",");a({target:"Array",proto:!0,forced:o||!c},{join:function(e){return l.call(n(this),void 0===e?",":e)}})},bd9f:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("clusterbar",{attrs:{titleName:e.titleName,nameFunc:e.nameSearch,createDisplay:"构建",titleLink:["pipeline"]}},[i("el-button",{attrs:{slot:"right-btn",size:"small",type:"primary"},on:{click:e.openBuildParams},slot:"right-btn"},[i("i",{staticClass:"el-icon-video-play"}),e._v(" 构 建 ")])],1),i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"dashboard-container dashboard-container-build",style:{"max-height":e.maxHeight+"px"},attrs:{"max-height":e.maxHeight}},[e._l(e.builds||[],(function(t){return i("div",{key:t.pipeline_run.id,staticClass:"build-list"},[i("div",{staticStyle:{"border-bottom":"1px solid #EBEEF5"}},[i("div",{staticClass:"build-info"},[i("div",{staticClass:"build-info__left",on:{click:function(i){return e.clickBuildDetail(t,"source")}}},[i("div",{staticClass:"build-info__left-number"},[i("div",{staticClass:"build-info__left-number-inner",style:{color:e.getBuildStatusColor(t.pipeline_run.status)}},["ok"==t.pipeline_run.status?[i("i",{staticClass:"el-icon-success"})]:e._e(),"error"==t.pipeline_run.status?[i("i",{staticClass:"el-icon-error"})]:e._e(),"wait"==t.pipeline_run.status?[i("i",{staticClass:"el-icon-remove"})]:e._e(),"doing"==t.pipeline_run.status?[i("i",{staticClass:"el-icon-refresh refresh-rotate"})]:e._e(),"pause"==t.pipeline_run.status?[i("svg-icon",{attrs:{"icon-class":"pause"}})]:e._e(),i("span",{staticClass:"build-info__left__number",on:{click:function(i){return e.clickBuildNumber(t)}}},[e._v(" #"+e._s(t.pipeline_run.build_number))])],2),i("div",{staticClass:"build-info__left-branch"},[i("svg-icon",{attrs:{"icon-class":"branch"}}),e._v(" "+e._s(t.pipeline_run.env.PIPELINE_CODE_BRANCH)+" ")],1)]),i("div",{staticClass:"build-info__left-op"},[i("div",{staticStyle:{height:"22px","line-height":"22px","vertical-align":"middle"}},[i("i",{staticClass:"el-icon-user"}),e._v(" "+e._s(t.pipeline_run.operator)+" ")]),i("div",{staticStyle:{"font-size":"12px","line-height":"22px",height:"22px","vertical-align":"middle"}},[i("i",{staticClass:"el-icon-date"}),e._v(" "+e._s(e.$dateFormat(t.pipeline_run.create_time))+" ")])])]),i("el-row",{staticStyle:{width:"100%"}},[i("el-steps",{staticClass:"el-steps",attrs:{simple:""}},e._l(t.stages_run,(function(a){return i("el-step",{key:a.id,attrs:{title:"",icon:"none",status:e.getStageStatus(a.status)}},[i("div",{staticClass:"el-steps-title",attrs:{slot:"title"},slot:"title"},[i("div",{staticStyle:{"margin-left":"1px"},on:{click:function(i){return e.clickBuildDetail(t,"stage",a)}}},[e._v(e._s(a.name)+e._s(e.releaseVersion(a)))]),i("div",{staticStyle:{"margin-top":"3px"}},["ok"==a.status?[i("i",{staticClass:"el-icon-circle-check",staticStyle:{"font-size":"18px"}}),i("div",{staticClass:"el-steps-stage-exectime"},[e._v(" "+e._s(e.getStageExecTime(a.exec_time,a.update_time))+" ")])]:e._e(),"doing"==a.status?[i("i",{staticClass:"el-icon-refresh refresh-rotate",staticStyle:{"font-size":"18px"}}),i("div",{staticClass:"el-steps-stage-exectime"},[e._v(" "+e._s(e.getStageExecTimeStr(e.refreshStages[a.id]))+" ")])]:e._e(),"error"==a.status?[i("i",{staticClass:"el-icon-circle-close",staticStyle:{"font-size":"18px"}}),i("div",{staticClass:"el-steps-stage-exectime"},[e._v(" "+e._s(e.getStageExecTime(a.exec_time,a.update_time))+" ")])]:e._e(),"wait"==a.status?[i("i",{staticClass:"el-icon-remove-outline",staticStyle:{"font-size":"18px"}}),i("div",{staticClass:"el-steps-stage-exectime"},[e._v(" -- ")])]:e._e(),"pause"==a.status?[i("div",[i("el-button",{staticStyle:{padding:"2px 5px"},attrs:{size:"mini",type:"primary",round:""},on:{click:function(t){return e.openManualStageDialog(a)}}},[i("i",{staticClass:"el-icon-video-play"}),e._v(" 执行 ")])],1)]:e._e()],2)])])})),1)],1)],1),t.clickDetail?i("div",{staticClass:"build-detail",staticStyle:{"border-top":"1px solid #EBEEF5",padding:"10px 15px 15px"}},[t.clickDetail&&"source"==t.clickDetail.type?[i("div",{staticStyle:{"font-size":"14px",padding:"4px 3px 8px"}},[e._v(" 构建源 ")]),i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.clickDetail&&t.clickDetail.commit||[],"cell-style":e.cellStyle}},[i("el-table-column",{attrs:{prop:"commitId",label:"CommitId",width:"330"}}),i("el-table-column",{attrs:{prop:"author",label:"Author",width:"100"}}),i("el-table-column",{attrs:{prop:"when",label:"When",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.when?e.$dateFormat(t.row.when):"")+" ")]}}],null,!0)}),i("el-table-column",{attrs:{prop:"message",label:"Comment",width:""}})],1)]:e._e(),t.clickDetail&&"stage"==t.clickDetail.type?[i("div",{staticStyle:{"font-size":"14px",padding:"4px 3px 8px"}},[e._v(" 阶段："+e._s(t.clickDetail&&t.clickDetail.stage?t.clickDetail.stage.name:"")+" ")]),i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.clickDetail&&t.clickDetail.stage?t.clickDetail.stage.jobs:[],"cell-style":e.cellStyle}},[i("el-table-column",{attrs:{prop:"name",label:"任务",width:"200"}}),i("el-table-column",{attrs:{prop:"result",label:"返回",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(" "+e._s(t.row.result)+" ")])]}}],null,!0)})],1)]:e._e(),i("el-button",{staticStyle:{"margin-top":"8px","border-radius":"0px",padding:"5px 15px"},attrs:{type:"primary",size:"mini",disabled:!("error"==t.pipeline_run.status)},on:{click:function(i){return e.stageRetry(t)}}},[e._v("失败重试")])],2):e._e()])])})),e.loadMore?i("div",{staticStyle:{"text-align":"center",margin:"15px 15px 5px"}},[i("el-button",{staticStyle:{"border-radius":"0px"},attrs:{type:"primary",size:"small"},on:{click:e.fetchBuilds}},[e._v("加 载 更 多")])],1):e._e(),e.builds&&0==e.builds.length?i("div",{staticStyle:{"text-align":"center","margin-top":"30px","margin-left":"-100px",color:"#606266","font-size":"14px"}},[e._v(" 暂无流水线构建记录，"),i("span",{staticClass:"build-span",staticStyle:{color:"#409EFF"},on:{click:e.openBuildParams}},[e._v("执行流水线")])]):e._e()],2),i("el-dialog",{attrs:{title:"执行流水线",visible:e.dialogVisible,"destroy-on-close":!0,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:function(t){e.buildParams={}}}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.dialogLoading,expression:"dialogLoading"}]},[i("div",{staticClass:"dialogContent",staticStyle:{padding:"0px 40px"}},[i("el-form",{ref:"",attrs:{model:e.buildParams,"label-position":"left","label-width":"105px"}},[i("el-form-item",{attrs:{label:"流水线",prop:"",required:!0}},[i("el-input",{staticStyle:{width:"100%"},attrs:{disabled:!0,placeholder:"",autocomplete:"off",size:"small"},model:{value:e.pipelineName,callback:function(t){e.pipelineName=t},expression:"pipelineName"}})],1),i("el-form-item",{attrs:{label:"构建分支",prop:"",required:!0}},[i("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入构建分支",autocomplete:"off",size:"small"},model:{value:e.buildParams.branch,callback:function(t){e.$set(e.buildParams,"branch",t)},expression:"buildParams.branch"}})],1)],1)],1),i("div",{staticClass:"dialogFooter",staticStyle:{"margin-top":"20px"},attrs:{slot:"footer"},slot:"footer"},[i("el-button",{staticStyle:{"margin-right":"20px"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.buildPipeline}},[e._v("确 定")])],1)])]),i("el-dialog",{attrs:{title:"执行阶段-"+e.manualStage.stage.name,visible:e.manualDialogVisible,"destroy-on-close":!0,"close-on-click-modal":!1},on:{"update:visible":function(t){e.manualDialogVisible=t},close:function(t){e.manualStage={stage:{},params:{}}}}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.dialogLoading,expression:"dialogLoading"}]},[i("div",{staticClass:"dialogContent",staticStyle:{padding:"0px 40px"}},[i("el-form",{ref:"",attrs:{model:e.manualStage,"label-position":"left","label-width":"105px"}},[i("el-form-item",{attrs:{label:"阶段参数",prop:""}},[i("el-row",{staticStyle:{"margin-bottom":"5px","margin-top":"2px"}},[i("el-col",{staticStyle:{"background-color":"#F5F7FA","padding-left":"10px"},attrs:{span:11}},[i("div",{staticClass:"border-span-header"},[e._v("参数")])]),i("el-col",{staticStyle:{"background-color":"#F5F7FA"},attrs:{span:13}},[i("div",{staticClass:"border-span-header"},[e._v("参数值")])])],1),e._l(e.manualStage.custom_params,(function(t,a){return i("el-row",{key:a,staticStyle:{"padding-bottom":"5px"}},[i("el-col",{attrs:{span:11}},[i("div",{staticClass:"border-span-header"},[i("el-input",{staticStyle:{"padding-right":"10px"},attrs:{disabled:"",size:"small",placeholder:"阶段参数"},model:{value:t.param,callback:function(i){e.$set(t,"param",i)},expression:"d.param"}})],1)]),i("el-col",{attrs:{span:13}},[i("div",{staticClass:"border-span-header"},[i("el-input",{attrs:{size:"small",placeholder:"请输入参数默认值"},model:{value:t.value,callback:function(i){e.$set(t,"value",i)},expression:"d.value"}})],1)])],1)}))],2)],1),e._l(e.manualStage.stage.jobs||[],(function(t,a){return[e.manualJobComponent[t.plugin_key]?i("div",{key:a},[e.manualStage.job_params[t.plugin_key]?i(e.manualJobComponent[t.plugin_key],{tag:"component",attrs:{params:e.manualStage.job_params[t.plugin_key]}}):e._e()],1):e._e()]}))],2),i("div",{staticClass:"dialogFooter",staticStyle:{"margin-top":"20px"},attrs:{slot:"footer"},slot:"footer"},[i("el-button",{staticStyle:{"margin-right":"20px"},on:{click:function(t){e.manualDialogVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.manualExec}},[e._v("执 行")])],1)])])],1)},s=[],n=(i("b0c0"),i("96cf"),i("1da1")),r=i("b85c"),l=i("61b2"),o=i("2ad9"),c=i("1cb3"),u=(i("d3b7"),i("ddb0"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[i("el-form",{ref:"job",attrs:{model:e.params,"label-position":"left","label-width":"105px"}},[i("el-form-item",{attrs:{label:"发布版本",prop:"",required:!0}},[i("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入发布版本",autocomplete:"off",size:"small"},model:{value:e.params.version,callback:function(t){e.$set(e.params,"version",t)},expression:"params.version"}})],1)],1)],1)}),p=[],d=(i("c975"),i("a15b"),i("a434"),i("ac1f"),i("1276"),i("6895")),m={name:"ManualRelease",data:function(){return{loading:!1,latestRelease:{}}},props:["pipeline","params"],computed:{workspaceId:function(){return this.$route.params.workspaceId}},beforeMount:function(){this.fetchLatestRelease()},methods:{fetchLatestRelease:function(){var e=this;Object(d["d"])({workspace_id:this.workspaceId}).then((function(t){e.latestRelease=t.data?t.data:{};var i="1.0.0";if(e.latestRelease.release_version){var a=e.latestRelease.release_version;if(a.indexOf(".")>-1){var s=a.split("."),n=s[s.length-1];s.splice(s.length-1,1),isNaN(n)||(n=parseInt(n)+1),s.push(n),i=s.join(".")}}e.$set(e.params,"version",i)})).catch((function(e){}))}}},f=m,g=i("2877"),h=Object(g["a"])(f,u,p,!1,null,"321342be",null),b=h.exports;function v(e,t,i){return _.apply(this,arguments)}function _(){return _=Object(n["a"])(regeneratorRuntime.mark((function e(t,i,a){var s,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:s={release:x},e.t0=regeneratorRuntime.keys(a);case 2:if((e.t1=e.t0()).done){e.next=10;break}if(n=e.t1.value,!s[n]){e.next=8;break}if(r=s[n](t,i,a[n]),!r){e.next=8;break}return e.abrupt("return",r);case 8:e.next=2;break;case 10:return e.abrupt("return");case 11:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}function x(e,t,i){return S.apply(this,arguments)}function S(){return S=Object(n["a"])(regeneratorRuntime.mark((function e(t,i,a){var s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s=a.version,s){e.next=3;break}return e.abrupt("return","发布版本号不能为空");case 3:return e.next=5,Object(d["c"])({version:s,workspace_id:t.workspace.id});case 5:if(n=e.sent,"Success"==n.code){e.next=8;break}return e.abrupt("return",n.msg);case 8:if(!n.data.exists){e.next=10;break}return e.abrupt("return","发布版本号已存在，请重新输入");case 10:return e.abrupt("return");case 11:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}var y=i("5c96"),k={name:"PipelineWorkspace",components:{Clusterbar:l["a"],Release:b},data:function(){return{titleName:[],search_name:"",users:[],cellStyle:{border:0,padding:"1px 0","line-height":"35px"},maxHeight:window.innerHeight-145,loading:!0,dialogVisible:!1,pipeline:{},pipelineName:"",builds:null,buildDetails:{},buildParams:{},pipelineSSE:null,refreshExecTimer:0,refreshStages:{},loadMore:!1,dialogLoading:!1,manualDialogVisible:!1,manualStage:{stage:{},job_params:{},custom_params:[]},manualJobComponent:{release:b}}},created:function(){this.loading=!0,this.fetchPipeline(),this.fetchBuilds(),this.fetchPipelineSSE()},destroyed:function(){this.pipelineSSE.close(),this.refreshExecTimer&&clearTimeout(this.refreshExecTimer)},mounted:function(){var e=this;window.onresize=function(){return function(){var t=window.innerHeight-145;console.log(t),e.maxHeight=t}()}},computed:{pipelineId:function(){return this.$route.params.pipelineId}},methods:{fetchPipeline:function(){var e=this;Object(o["c"])(this.pipelineId).then((function(t){e.pipeline=t.data||{},e.pipeline&&(e.titleName=["流水线",e.pipeline.pipeline.name],e.pipelineName=e.pipeline.pipeline.name)})).catch((function(){}))},fetchBuilds:function(e){var t=this;this.loading=!0,void 0==e&&(e=0,this.builds&&this.builds.length>0&&(e=this.builds[this.builds.length-1].pipeline_run.build_number)),Object(c["d"])(this.pipelineId,e).then((function(i){t.loading=!1;var a=i.data||[];if(0==e)t.$set(t,"builds",a);else{var s,n=Object(r["a"])(a);try{for(n.s();!(s=n.n()).done;){var l=s.value;t.builds.push(l)}}catch(o){n.e(o)}finally{n.f()}}20==a.length?t.loadMore=!0:t.loadMore=!1,t.processExecTime()})).catch((function(){t.loading=!1}))},processExecTime:function(){var e,t=!1,i=Object(r["a"])(this.builds);try{for(i.s();!(e=i.n()).done;){var a,s=e.value,n=Object(r["a"])(s.stages_run);try{for(n.s();!(a=n.n()).done;){var l=a.value;if("doing"==s.pipeline_run.status)if("doing"==l.status){if(!this.refreshStages[l.id]){var o=new Date,c=new Date(l.exec_time);this.$set(this.refreshStages,l.id,Math.floor((o.getTime()-c.getTime())/1e3))}t=!0}else this.refreshStages[l.id]&&this.$delete(this.refreshStages,l.id);else this.refreshStages[l.id]&&this.$delete(this.refreshStages,l.id)}}catch(u){n.e(u)}finally{n.f()}}}catch(u){i.e(u)}finally{i.f()}!this.refreshExecTimer&&t?this.refreshExecTime():!t&&this.refreshExecTimer&&(clearTimeout(this.refreshExecTimer),this.refreshExecTimer=0)},refreshExecTime:function(){var e=this;this.refreshExecTimer&&(clearTimeout(this.refreshExecTimer),this.refreshExecTimer=0),this.refreshExecTimer=setTimeout((function(){var t=e.refreshStages;for(var i in t){var a=t[i];void 0!=a&&e.$set(e.refreshStages,i,a+1)}e.refreshExecTime()}),1e3)},fetchPipelineSSE:function(){var e=this,t="/api/v1/pipeline/pipeline/".concat(this.pipelineId,"/sse");this.pipelineSSE=new EventSource(t),this.pipelineSSE.addEventListener("message",(function(t){if(t.data&&"\n"!=t.data){var i=JSON.parse(t.data);if(i.object){var a=i.object;for(var s in e.builds){var n=e.builds[s];if(n.pipeline_run.id==a.pipeline_run.id){e.$set(e.builds,s,a),e.processExecTime();break}}}}})),this.pipelineSSE.addEventListener("error",(function(e){e.readyState==EventSource.CLOSED&&console.log("event was closed"),console.log(e)})),this.pipelineSSE.addEventListener("close",(function(t){console.log(t.type),e.pipelineSSE.close()}))},releaseVersion:function(e){var t,i=Object(r["a"])(e.jobs);try{for(i.s();!(t=i.n()).done;){var a=t.value;if("release"==a.plugin_key&&a.params.version)return" - "+a.params.version}}catch(s){i.e(s)}finally{i.f()}},nameClick:function(e){this.$router.push({name:"pipelineBuilds",params:{pipelineId:e}})},nameSearch:function(e){this.search_name=e},openBuildParams:function(){this.dialogVisible=!0},buildPipeline:function(){var e=this;this.buildParams.branch?(this.dialogLoading=!0,Object(c["a"])(this.pipelineId,this.buildParams).then((function(t){e.$message({message:"构建成功",type:"success"}),e.dialogLoading=!1,e.fetchBuilds(0),e.dialogVisible=!1})).catch((function(t){e.dialogLoading=!1}))):y["Message"].error("请输入构建分支")},getStageStatus:function(e){return"ok"==e?"success":"error"==e?"error":"wait"==e?"wait":"doing"==e?"process":"cancel"==e?"wait":"pause"==e?"process":void 0},getBuildStatusColor:function(e){return"ok"==e?"#67c23a":"error"==e?"#DC143C":"doing"==e?"#E6A23C":""},getStageExecTime:function(e,t){if(t)i=new Date(t);else var i=new Date;var a=new Date(e),s=Math.floor((i.getTime()-a.getTime())/1e3);return this.getStageExecTimeStr(s)},getStageExecTimeStr:function(e){var t="",i=Math.floor(e/86400);i&&(t=i+"d");var a=e%86400,s=Math.floor(a/3600);s&&(t+=s+"h");var n=a%3600,r=Math.floor(n/60);r&&(t+=r+"m");var l=n%60,o=Math.round(l);return o&&(t+=o+"s"),t||(t="1s"),t},clickBuildDetail:function(e,t,i){var a=e.clickDetail;if(a){if("source"==t&&a.type==t)return void this.$set(e,"clickDetail",void 0);if("stage"==t&&a.stage&&a.stage.id==i.id)return void this.$set(e,"clickDetail",void 0)}if("source"==t){var s={commitId:e.pipeline_run.env.PIPELINE_CODE_COMMIT_ID,author:e.pipeline_run.env.PIPELINE_CODE_COMMIT_AUTHOR,message:e.pipeline_run.env.PIPELINE_CODE_COMMIT_MESSAGE,when:e.pipeline_run.env.PIPELINE_CODE_COMMIT_TIME};this.$set(e,"clickDetail",{type:t,commit:[s]})}else this.$set(e,"clickDetail",{type:t,stage:i})},clickBuildNumber:function(e){this.$router.push({name:"pipelineBuildDetail",params:{buildId:e.pipeline_run.id}})},openManualStageDialog:function(e){var t=[];if(e.custom_params)for(var i in e.custom_params)t.push({param:i,value:e.custom_params[i]});var a,s={},n=Object(r["a"])(e.jobs);try{for(n.s();!(a=n.n()).done;){var l=a.value;s[l.plugin_key]=l.params||{}}}catch(o){n.e(o)}finally{n.f()}this.$set(this.manualStage,"job_params",s),this.$set(this.manualStage,"custom_params",t),this.$set(this.manualStage,"stage",e),console.log(this.manualStage),this.manualDialogVisible=!0},manualExec:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var i,a,s,n,l,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i={stage_run_id:e.manualStage.stage.id,job_params:e.manualStage.job_params},a={},e.manualStage.custom_params){s=Object(r["a"])(e.manualStage.custom_params);try{for(s.s();!(n=s.n()).done;)l=n.value,a[l.param]=l.value}catch(o){s.e(o)}finally{s.f()}}if(i["custom_params"]=a,i.stage_run_id){t.next=7;break}return y["Message"].error("获取执行阶段id错误，请刷新重试"),t.abrupt("return");case 7:return e.dialogLoading=!0,t.next=10,v(e.pipeline,e.manualStage.stage,e.manualStage.job_params);case 10:if(o=t.sent,!o){t.next=15;break}return y["Message"].error(o),e.dialogLoading=!1,t.abrupt("return");case 15:Object(c["e"])(i).then((function(t){e.$message({message:"下发任务成功",type:"success"}),e.dialogLoading=!1,e.manualDialogVisible=!1})).catch((function(t){e.dialogLoading=!1}));case 16:case"end":return t.stop()}}),t)})))()},stageRetry:function(e){var t=this;if(e)if(e.stages_run){var i,a=0,s=Object(r["a"])(e.stages_run);try{for(s.s();!(i=s.n()).done;){var n=i.value;"error"==n.status&&(a=n.id)}}catch(o){s.e(o)}finally{s.f()}if(a){this.loading=!0;var l={stage_run_id:a};Object(c["f"])(l).then((function(e){t.$message({message:"重试成功",type:"success"}),t.loading=!1})).catch((function(e){t.loading=!1}))}else y["Message"].error("获取构建阶段失败，请刷新重试")}else y["Message"].error("获取构建阶段失败，请刷新重试");else y["Message"].error("获取构建信息失败，请刷新重试")}}},w=k,E=(i("90a4"),i("7631"),Object(g["a"])(w,a,s,!1,null,"f847a47e",null));t["default"]=E.exports}}]);