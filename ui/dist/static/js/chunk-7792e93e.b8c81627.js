(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7792e93e"],{2978:function(t,e,a){"use strict";a.d(e,"k",(function(){return o})),a.d(e,"i",(function(){return r})),a.d(e,"j",(function(){return s})),a.d(e,"e",(function(){return i})),a.d(e,"b",(function(){return l})),a.d(e,"f",(function(){return c})),a.d(e,"a",(function(){return u})),a.d(e,"h",(function(){return p})),a.d(e,"c",(function(){return d})),a.d(e,"g",(function(){return m})),a.d(e,"d",(function(){return f}));var n=a("b775");function o(t){return Object(n["a"])({url:"project/apps",method:"get",params:t})}function r(t){return Object(n["a"])({url:"project/apps/status",method:"get",params:t})}function s(t){return Object(n["a"])({url:"project/apps/versions",method:"get",params:t})}function i(t){return Object(n["a"])({url:"project/apps/".concat(t),method:"get"})}function l(t){return Object(n["a"])({url:"project/apps/".concat(t),method:"delete"})}function c(t){return Object(n["a"])({url:"project/apps/version/".concat(t),method:"get"})}function u(t){return Object(n["a"])({url:"/project/apps",method:"post",data:t})}function p(t){return Object(n["a"])({url:"/project/apps/install",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/project/apps/destroy",method:"post",data:t})}function m(t){return Object(n["a"])({url:"/project/apps/import_storeapp",method:"post",data:t})}function f(t){return Object(n["a"])({url:"/project/apps/duplicate_app",method:"post",data:t})}},"517e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("clusterbar",{attrs:{titleName:t.titleName,titleLink:["workspaceApp"]}}),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"tableCot",staticClass:"dashboard-container detail-dashboard"},[a("div",{staticStyle:{padding:"10px 0px 0px"}},[a("div",[t._v("基本信息")]),a("el-form",{staticClass:"pod-item",staticStyle:{margin:"15px 10px 20px 10px"},attrs:{"label-position":"left",inline:"","label-width":"80px"}},[a("el-form-item",{attrs:{label:"应用名称"}},[a("span",[t._v(t._s(t.originApp.name))])]),a("el-form-item",{attrs:{label:"状态"}},[a("span",{style:{color:t.statusColorMap[t.originApp.status]}},[t._v(t._s(t.statusNameMap[t.originApp.status]))])]),a("el-form-item",{attrs:{label:"绑定集群"}},[a("span",[t._v(t._s(t.originApp.cluster?t.originApp.cluster.name1:""))])]),a("el-form-item",{attrs:{label:"应用版本"}},[a("span",[t._v(t._s("space"==t.originApp.from?t.originApp.package_version:t.originApp.package_version+" / "+t.originApp.app_version))])]),a("el-form-item",{attrs:{label:"更新时间"}},[a("span",[t._v(t._s(t.$dateFormat(t.originApp.update_time)))])]),a("el-form-item",{attrs:{label:"命名空间"}},[a("span",[t._v(t._s(t.originApp.namespace))])])],1)],1),["Running","RunningFault","NotReady"].indexOf(t.originApp.status)>-1?a("div",{staticStyle:{padding:"0px 0px"}},[a("div",[t._v("Pods")]),a("div",{staticClass:"msgClass",staticStyle:{margin:"15px 10px 20px 10px"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:t.pods,"tooltip-effect":"dark","cell-style":t.cellStyle,"default-sort":{prop:"name"}}},[a("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"150","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(" "+t._s(e.row.name)+" ")])]}}],null,!1,4089624609)}),a("el-table-column",{attrs:{prop:"containerNum",label:"容器","min-width":"45","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.initContainers?t._l(e.row.initContainers,(function(e){return a("el-tooltip",{key:e.name,attrs:{content:e.name+" ("+e.status+")",placement:"top"}},[a("svg-icon",{class:t.containerClass(e.status),staticStyle:{"margin-top":"7px"},attrs:{"icon-class":"square"}})],1)})):t._e(),t._l(e.row.containers,(function(e){return a("el-tooltip",{key:e.name,attrs:{content:e.name+" ("+e.status+")",placement:"top"}},[a("svg-icon",{class:t.containerClass(e.status),staticStyle:{"margin-top":"7px"},attrs:{"icon-class":"square"}})],1)}))]}}],null,!1,1047768735)}),a("el-table-column",{attrs:{prop:"restarts",label:"重启","min-width":"45","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"node_name",label:"节点","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"ip",label:"IP","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"created",label:"创建时间","min-width":"100","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"60","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"","show-overflow-tooltip":"",width:"45"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-dropdown",{attrs:{size:"medium"}},[a("el-link",{attrs:{underline:!1}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em"},attrs:{"icon-class":"operate"}})],1),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("div",{on:{mouseout:function(e){t.logContainerShow=!1}}},[a("el-dropdown-item",{nativeOn:{click:function(a){a.preventDefault(),t.selectContainer=e.row.containers[0].name,t.selectPodName=e.row.name,t.logDialog=!0}}},[a("div",{staticClass:"download"},[a("div",[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"log"}}),a("span",{staticStyle:{"margin-left":"5px"}},[t._v("日志")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.row.containerNum>1&&t.logContainerShow,expression:"scope.row.containerNum > 1 && logContainerShow"}],staticClass:"download-right"},[t._l(e.row.init_containers,(function(n){return a("div",{key:n.name,staticClass:"download-item",on:{click:function(a){t.selectContainer=n.name,t.selectPodName=e.row.name,t.logDialog=!0}}},[t._v(" "+t._s(n.name)+" ")])})),t._l(e.row.containers,(function(n){return a("div",{key:n.name,staticClass:"download-item",on:{click:function(a){t.selectContainer=n.name,t.selectPodName=e.row.name,t.logDialog=!0}}},[t._v(" "+t._s(n.name)+" ")])}))],2)])])],1),a("div",{on:{mouseover:function(e){t.termContainerShow=!0},mouseout:function(e){t.termContainerShow=!1}}},[a("el-dropdown-item",{nativeOn:{click:function(a){a.preventDefault(),t.selectContainer=e.row.containers[0].name,t.selectPodName=e.row.name,t.terminalDialog=!0}}},[a("div",{staticClass:"download"},[a("div",[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"terminal"}}),a("span",{staticStyle:{"margin-left":"5px"}},[t._v("终端")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.row.containers.length>1&&t.termContainerShow,expression:"scope.row.containers.length > 1 && termContainerShow"}],staticClass:"download-right"},t._l(e.row.containers,(function(n){return a("div",{key:n.name,staticClass:"download-item",on:{click:function(a){t.selectContainer=n.name,t.selectPodName=e.row.name,t.terminalDialog=!0}}},[t._v(" "+t._s(n.name)+" ")])})),0)])])],1),a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),t.deletePods([{namespace:e.row.namespace,name:e.row.name}])}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"delete"}}),a("span",{staticStyle:{"margin-left":"5px"}},[t._v("删除")])],1)],1)],1)]}}],null,!1,1962609625)})],1)],1)]):t._e(),a("el-tabs",{staticStyle:{padding:"0px 0px"},attrs:{value:"workloads"}},[a("el-tab-pane",{attrs:{label:"Workloads",name:"workloads"}},[a("div",{staticClass:"msgClass"},[a("el-table",{ref:"table",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:t.workloads,"tooltip-effect":"dark","cell-style":t.cellStyle,"default-sort":{prop:"name"}}},[a("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"10","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.metadata.name))])]}}])}),a("el-table-column",{attrs:{prop:"kind",label:"类型","min-width":"7","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.kind))])]}}])}),a("el-table-column",{attrs:{prop:"kind",label:"副本数","min-width":"4","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.spec.replicas?e.row.spec.replicas:"-"))])]}}])}),a("el-table-column",{attrs:{prop:"",label:"镜像","min-width":"17","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return["CronJob"!=e.row.kind?t._l(e.row.spec.template.spec.containers,(function(e){return a("span",{key:e.name,staticClass:"back-class"},[t._v(" "+t._s(e.image)+" ")])})):t._l(e.row.spec.jobTemplate.spec.template.spec.containers,(function(e){return a("span",{key:e.name,staticClass:"back-class"},[t._v(" "+t._s(e.image)+" ")])}))]}}])}),"UnInstall"!=t.originApp.status?a("el-table-column",{attrs:{prop:"image_pull_policy",label:"Pods","min-width":"5","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return["CronJob"!=e.row.kind||"Job"!=e.row.kind?[a("span",[t._v(t._s(e.row.status.readyReplicas||0)+"/"+t._s(e.row.status.replicas))])]:[t._v(" - ")]]}}],null,!1,2856047758)}):t._e(),"UnInstall"!=t.originApp.status?a("el-table-column",{attrs:{prop:"",label:"创建时间","min-width":"10","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.$dateFormat(e.row.metadata.creationTimestamp)))])]}}],null,!1,565507824)}):t._e()],1)],1)]),a("el-tab-pane",{attrs:{label:"Service",name:"service"}},[a("div",{staticClass:"msgClass"},[a("el-table",{ref:"table",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:t.services,"tooltip-effect":"dark","cell-style":t.cellStyle,"default-sort":{prop:"name"}}},[a("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"10","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.metadata.name))])]}}])}),a("el-table-column",{attrs:{prop:"kind",label:"类型","min-width":"7","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.spec.type))])]}}])}),a("el-table-column",{attrs:{prop:"",label:"端口","min-width":"10","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.spec.ports,(function(e){return a("span",{key:e.port,staticClass:"back-class"},[t._v(" "+t._s(e.port+(e.nodePort?":"+e.nodePort:""))+" ")])}))}}])}),a("el-table-column",{attrs:{prop:"",label:"ClusterIP","min-width":"9","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return["UnInstall"!=t.originApp.status?[a("span",[t._v(t._s(e.row.spec.clusterIP))])]:[t._v(" - ")]]}}])}),"UnInstall"!=t.originApp.status?a("el-table-column",{attrs:{prop:"",label:"创建时间","min-width":"10","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.$dateFormat(e.row.metadata.creationTimestamp)))])]}}],null,!1,565507824)}):t._e()],1)],1)]),a("el-tab-pane",{attrs:{label:"ConfigMap",name:"configmap"}},[a("div",{staticClass:"msgClass"},[a("el-table",{ref:"table",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:t.configmaps,"tooltip-effect":"dark","cell-style":t.cellStyle,"default-sort":{prop:"name"}}},[a("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"10","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.metadata.name))])]}}])}),a("el-table-column",{attrs:{prop:"kind",label:"Keys","min-width":"20","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._l(e.row.data,(function(e,n){return[a("el-tooltip",{key:n,staticClass:"item",attrs:{effect:"light",placement:"right-end"}},[a("div",{staticStyle:{"max-width":"400px","white-space":"pre-line"},attrs:{slot:"content"},slot:"content"},[t._v(" "+t._s(e)+" ")]),a("span",{staticClass:"back-class"},[t._v(" "+t._s(n)+" ")])])]}))]}}])})],1)],1)]),a("el-tab-pane",{attrs:{label:"Secret",name:"secret"}},[a("div",{staticClass:"msgClass"},[a("el-table",{ref:"table",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:t.secrets,"tooltip-effect":"dark","cell-style":t.cellStyle,"default-sort":{prop:"name"}}},[a("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"10","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.metadata.name))])]}}])}),a("el-table-column",{attrs:{prop:"kind",label:"Keys","min-width":"20","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._l(e.row.data,(function(e,n){return[a("el-tooltip",{key:n,staticClass:"item",attrs:{effect:"light",placement:"right-end"}},[a("div",{staticStyle:{"max-width":"400px","white-space":"pre-line"},attrs:{slot:"content"},slot:"content"},[t._v(" "+t._s(t.decodeBase(e))+" ")]),a("span",{staticClass:"back-class"},[t._v(" "+t._s(n)+" ")])])]}))]}}])})],1)],1)])],1),a("el-dialog",{attrs:{title:"终端",visible:t.terminalDialog,"close-on-click-modal":!1,width:"80%",top:"55px"},on:{"update:visible":function(e){t.terminalDialog=e}}},[t.terminalDialog?a("terminal",{attrs:{cluster:t.originApp.cluster_id,namespace:t.originApp.namespace,pod:t.selectPodName,container:t.selectContainer}}):t._e()],1),a("el-dialog",{attrs:{title:"日志",visible:t.logDialog,"close-on-click-modal":!1,width:"80%",top:"55px"},on:{"update:visible":function(e){t.logDialog=e}}},[t.logDialog?a("log",{attrs:{cluster:t.originApp.cluster_id,namespace:t.originApp.namespace,pod:t.selectPodName,container:t.selectContainer}}):t._e()],1)],1)],1)},o=[],r=(a("c975"),a("b0c0"),a("b85c")),s=a("61b2"),i=a("2978"),l=a("f492"),c=a("5c96"),u={name:"AppDetail",components:{Clusterbar:s["a"],Log:s["c"],Terminal:s["e"]},data:function(){return{titleName:["应用管理"],search_name:"",users:[],cellStyle:{border:0},maxHeight:window.innerHeight-150,loading:!0,originApp:{},containers:[],statusNameMap:{UnInstall:"未安装",NotReady:"未就绪",RunningFault:"运行故障",Running:"运行中"},statusColorMap:{UnInstall:"",NotReady:"#E6A23C",RunningFault:"#F56C6C",Running:"#67C23A"},selectorContainer:"",selectorPod:"",logDialog:!1,terminalDialog:!1}},created:function(){this.fetchData()},mounted:function(){var t=this;window.onresize=function(){return function(){var e=window.innerHeight-150;t.maxHeight=e}()}},computed:{projectId:function(){return this.$route.params.workspaceId},appId:function(){return this.$route.params.appId},pods:function(){var t=[];if(this.originApp.release){var e,a=Object(r["a"])(this.originApp.release.objects);try{for(a.s();!(e=a.n()).done;){var n=e.value;"Pod"==n.kind&&t.push(Object(l["b"])(n))}}catch(o){a.e(o)}finally{a.f()}}return t},workloads:function(){var t=[];if(this.originApp.release){var e,a=Object(r["a"])(this.originApp.release.objects);try{for(a.s();!(e=a.n()).done;){var n=e.value;["Deployment","StatefulSet","DaemonSet","CronJob","Job"].indexOf(n.kind)>-1&&t.push(n)}}catch(o){a.e(o)}finally{a.f()}}return t},services:function(){var t=[];if(this.originApp.release){var e,a=Object(r["a"])(this.originApp.release.objects);try{for(a.s();!(e=a.n()).done;){var n=e.value;"Service"==n.kind&&t.push(n)}}catch(o){a.e(o)}finally{a.f()}}return t},configmaps:function(){var t=[];if(this.originApp.release){var e,a=Object(r["a"])(this.originApp.release.objects);try{for(a.s();!(e=a.n()).done;){var n=e.value;"ConfigMap"==n.kind&&t.push(n)}}catch(o){a.e(o)}finally{a.f()}}return t},secrets:function(){var t=[];if(this.originApp.release){var e,a=Object(r["a"])(this.originApp.release.objects);try{for(a.s();!(e=a.n()).done;){var n=e.value;"Secret"==n.kind&&t.push(n)}}catch(o){a.e(o)}finally{a.f()}}return t}},methods:{containerClass:l["c"],decodeBase:function(t){try{return atob(t)}catch(e){return t}},fetchData:function(){var t=this;this.appId?(this.loading=!0,Object(i["e"])(this.appId).then((function(e){t.originApp=e.data||{},t.titleName=["应用管理",t.originApp.name],t.loading=!1})).catch((function(){t.loading=!1}))):c["Message"].error("获取应用id错误，请刷新重试")}}},p=u,d=a("2877"),m=Object(d["a"])(p,n,o,!1,null,"d90c8b16",null);e["default"]=m.exports},d63a:function(t,e,a){"use strict";const n=Function.call.bind(Object.prototype.hasOwnProperty);function o(t){const e=t.trim().split(" "),a=e[0],n=e[1],o=e[2],r=(o||"").slice(1,-1).split(",").map(t=>t.trim());switch(n){case void 0:return"!"===a[0]?{operator:"DoesNotExist",key:a.slice(1)}:{operator:"Exists",key:a};case"=":case"==":return{operator:"=",key:a,value:o};case"!=":return{operator:"NotIn",values:[o],key:a};case"in":return{operator:"In",key:a,values:r};case"notin":return{operator:"NotIn",key:a,values:r};default:}throw new Error("Invalid expression: "+t)}function r(t){const e=t.split(/,(?![^(]*\))/).map(o),a=e.filter(t=>n(t,"value")).reduce((t,e)=>Object.assign(t,{[e.key]:e.value}),{}),r=e.filter(t=>!n(t,"value"));return{matchLabels:a,matchExpressions:r}}function s(t){const e=t.operator.toLowerCase(),a=t.key,n=t.values;switch(e){case"exists":return a;case"doesnotexist":return"!"+a;default:}return`${a} ${e} (${n.join(",")})`}function i(t){const e=t.matchLabels||{},a=t.matchExpressions||[];return Object.keys(e).map(t=>`${t} = ${e[t]}`).concat(a.map(s)).join(",")}function l(t){if("string"===typeof t)return l(r(t));const e=t.matchExpressions||[],a=t.matchLabels||{};return Object.keys(a).map(t=>({operator:"In",key:t,values:[a[t]]})).concat(e)}function c(t,e){const a=t.operator,o=t.key,r=t.values,s=e[o];switch(a){case"Exists":return n(e,o);case"DoesNotExist":return!n(e,o);case"In":return r.indexOf(s)>=0;case"NotIn":return r.indexOf(s)<0;default:}throw new Error("Invalid operator: "+a)}function u(t){const e=l(t);return t=>e.every(e=>c(e,t||{}))}t.exports={stringify:i,parse:r,Selector:u}},f492:function(t,e,a){"use strict";a.d(e,"h",(function(){return i})),a.d(e,"g",(function(){return l})),a.d(e,"f",(function(){return c})),a.d(e,"d",(function(){return u})),a.d(e,"j",(function(){return p})),a.d(e,"c",(function(){return d})),a.d(e,"a",(function(){return m})),a.d(e,"b",(function(){return f})),a.d(e,"i",(function(){return v})),a.d(e,"e",(function(){return w}));a("99af"),a("b0c0");var n=a("b85c"),o=a("b775"),r=a("d63a"),s=a("fa7d");function i(t,e){var a=Object(r["Selector"])(t);return console.log(a,t,e),a(e)}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={};return e&&(n["label_selector"]=e),a&&(n["names"]=a),Object(o["a"])({url:"pods/".concat(t,"/list"),method:"post",data:n})}function c(t,e,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(o["a"])({url:"pods/".concat(t,"/").concat(e,"/").concat(a),method:"get",params:{output:n}})}function u(t,e){return Object(o["a"])({url:"pods/".concat(t,"/delete"),method:"post",data:e})}function p(t,e,a,n){return Object(o["a"])({url:"pods/".concat(t,"/update/").concat(e,"/").concat(a),method:"post",data:{yaml:n}})}function d(t){return"running"===t?"running-class":"terminated"===t?"terminate-class":"waiting"===t?"waiting-class":void 0}function m(t,e){if(!t)return{};var a={name:t.name,status:"unknown",image:t.image,restarts:0,command:t.command?t.command:[],args:t.args?t.args:[],ports:t.ports?t.ports:[],env:t.env?t.env:[],volume_mounts:t.volumeMounts?t.volumeMounts:[],image_pull_policy:t.imagePullPolicy?t.imagePullPolicy:"",resources:t.resources?t.resources:{},start_time:"",liveness_probe:t.livenessProbe,readiness_probe:t.readinessProbe};if(e){var o,r=Object(n["a"])(e);try{for(r.s();!(o=r.n()).done;){var s=o.value;if(s.name==t.name){a.restarts=s.restartCount,s.state.running?(a.status="running",a.start_time=s.state.running.startedAt):s.state.terminated?(a.status="terminated",a.start_time=s.state.terminated.startedAt):s.state.waiting&&(a.status="waiting"),a.ready=s.ready;break}}}catch(i){r.e(i)}finally{r.f()}}return a}function f(t){if(!t)return{};var e,a=[],o=Object(n["a"])(t.spec.containers);try{for(o.s();!(e=o.n()).done;){var r=e.value,i=m(r,t.status.containerStatuses);a.push(i)}}catch(b){o.e(b)}finally{o.f()}var l=[];if(t.spec.initContainers){var c,u=Object(n["a"])(t.spec.initContainers);try{for(u.s();!(c=u.n()).done;){var p=c.value;l.push(m(p,t.status.initContainerStatuses))}}catch(b){u.e(b)}finally{u.f()}}var d="",f="";t.metadata.ownerReferences&&t.metadata.ownerReferences.length>0&&(d=t.metadata.ownerReferences[0].kind,f=t.metadata.ownerReferences[0].name);var v={uid:t.metadata.uid,name:t.metadata.name,namespace:t.metadata.namespace,containers:a,init_containers:l,controlled:d,controlled_name:f,qos:t.status.qosClass,status:t.status.phase,ip:t.status.podIP,created:Object(s["a"])(t.metadata.creationTimestamp),node_name:t.spec.nodeName,resource_version:t.metadata.resourceVersion,labels:t.metadata.labels,annonations:t.metadata.annotations,service_account:t.spec.serviceAccountName||t.spec.serviceAccount,node_selector:t.spec.nodeSelector,volumes:t.spec.volumes,conditions:t.status.conditions};v["containerNum"]=v.containers.length,v.init_containers&&(v["containerNum"]+=v.init_containers.length),v["restarts"]=0;var w,h=Object(n["a"])(v.containers);try{for(h.s();!(w=h.n()).done;){var g=w.value;g.restarts>v["restarts"]&&(v["restarts"]=g.restarts)}}catch(b){h.e(b)}finally{h.f()}return v}function v(t,e,a){return e in t&&a in t[e]?t[e][a]:"-"}function w(t){var e=t.name+": ";return t.value?e+=t.value:t.valueFrom&&(t.valueFrom.configMapKeyRef?e+="configmap(".concat(t.valueFrom.configMapKeyRef.key,":").concat(t.valueFrom.configMapKeyRef.name,")"):t.valueFrom.fieldRef?e+="fieldRef(".concat(t.valueFrom.fieldRef.apiVersion,":").concat(t.valueFrom.fieldRef.fieldPath,")"):t.valueFrom.secretKeyRef?e+="secret(".concat(t.valueFrom.secretKeyRef.key,":").concat(t.valueFrom.secretKeyRef.name,")"):e+=String(t.valueFrom)),e}}}]);