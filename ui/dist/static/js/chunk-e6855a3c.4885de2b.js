(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e6855a3c"],{2978:function(e,t,o){"use strict";o.d(t,"k",(function(){return n})),o.d(t,"i",(function(){return r})),o.d(t,"j",(function(){return i})),o.d(t,"e",(function(){return s})),o.d(t,"b",(function(){return l})),o.d(t,"f",(function(){return p})),o.d(t,"a",(function(){return c})),o.d(t,"h",(function(){return u})),o.d(t,"c",(function(){return d})),o.d(t,"g",(function(){return m})),o.d(t,"d",(function(){return f}));var a=o("b775");function n(e){return Object(a["a"])({url:"project/apps",method:"get",params:e})}function r(e){return Object(a["a"])({url:"project/apps/status",method:"get",params:e})}function i(e){return Object(a["a"])({url:"project/apps/versions",method:"get",params:e})}function s(e){return Object(a["a"])({url:"project/apps/".concat(e),method:"get"})}function l(e){return Object(a["a"])({url:"project/apps/".concat(e),method:"delete"})}function p(e){return Object(a["a"])({url:"project/apps/version/".concat(e),method:"get"})}function c(e){return Object(a["a"])({url:"/project/apps",method:"post",data:e})}function u(e){return Object(a["a"])({url:"/project/apps/install",method:"post",data:e})}function d(e){return Object(a["a"])({url:"/project/apps/destroy",method:"post",data:e})}function m(e){return Object(a["a"])({url:"/project/apps/import_storeapp",method:"post",data:e})}function f(e){return Object(a["a"])({url:"/project/apps/duplicate_app",method:"post",data:e})}},"4bff":function(e,t,o){"use strict";o.d(t,"d",(function(){return n})),o.d(t,"c",(function(){return r})),o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return s}));o("99af");var a=o("b775");function n(e){return Object(a["a"])({url:"appstore",method:"get",params:e})}function r(e,t){return Object(a["a"])({url:"appstore/".concat(e),method:"get",params:t})}function i(e){return Object(a["a"])({url:"appstore/create",method:"post",data:e})}function s(e,t){return Object(a["a"])({url:"appstore/".concat(e,"/").concat(t),method:"delete"})}},"7cce":function(e,t,o){},"82d8":function(e,t,o){"use strict";o.r(t);var a,n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("clusterbar",{attrs:{titleName:e.titleName,nsFunc:e.nsSearch,nameFunc:e.nameSearch,createFunc:e.openImportStoreAppDialog,createDisplay:"导入集群组件"}}),o("div",{staticClass:"dashboard-container"},[o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.releases,"tooltip-effect":"dark","max-height":e.maxHeight,"cell-style":e.cellStyle,"default-sort":{prop:"name"},"row-key":"uid"}},[o("el-table-column",{attrs:{prop:"name",label:"名称","show-overflow-tooltip":"","min-width":"15"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",{staticClass:"name-class",on:{click:function(o){return e.nameClick(t.row.id)}}},[e._v(" "+e._s(t.row.name)+" ")])]}}])}),o("el-table-column",{attrs:{prop:"package_version",label:"版本","show-overflow-tooltip":"","min-width":"15"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s("space"==t.row.app_version.from?t.row.app_version.package_version:t.row.app_version.package_version+" / "+t.row.app_version.app_version)+" ")]}}])}),o("el-table-column",{attrs:{prop:"namespace",label:"命名空间","show-overflow-tooltip":"","min-width":"15"}}),o("el-table-column",{attrs:{prop:"update_user",label:"操作人","show-overflow-tooltip":"","min-width":"15"}}),o("el-table-column",{attrs:{prop:"update_time",label:"更新时间","show-overflow-tooltip":"","min-width":"20"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.$dateFormat(t.row.update_time))+" ")]}}])}),o("el-table-column",{attrs:{prop:"status",label:"状态","show-overflow-tooltip":"","min-width":"15"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("div",{staticClass:"status-class",style:{"border-color":e.statusColorMap[t.row.status],"background-color":e.statusColorMap[t.row.status]}}),o("span",{style:{"font-weight":430}},[e._v(e._s(e.statusNameMap[t.row.status]))])]}}])}),o("el-table-column",{attrs:{label:"操作",width:"170"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("div",{staticClass:"tableOperate"},["UnInstall"==t.row.status?o("el-link",{staticStyle:{"margin-right":"15px"},attrs:{disabled:!e.$editorRole(),underline:!1,type:"primary"},on:{click:function(o){return e.openInstallFormDialog(t.row)}}},[e._v("安装")]):e._e(),"UnInstall"!=t.row.status?o("el-link",{staticStyle:{"margin-right":"15px"},attrs:{disabled:!e.$editorRole(),underline:!1,type:"primary"},on:{click:function(o){return e.openInstallFormDialog(t.row,!0)}}},[e._v("升级")]):e._e(),o("el-dropdown",{staticStyle:{"font-size":"13px"}},[o("span",{staticClass:"el-dropdown-link operator-btn",style:{color:e.$editorRole()?"":"#a0cfff"}},[e._v(" 更多操作 ")]),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",["UnInstall"!=t.row.status?o("el-link",{staticStyle:{"font-weight":"400"},attrs:{disabled:!e.$editorRole(),underline:!1,type:"danger"},on:{click:function(o){return e.handleDestroyApp(t.row.id,t.row.name)}}},[e._v("销毁")]):e._e(),"UnInstall"==t.row.status?o("el-link",{staticStyle:{"font-weight":"400"},attrs:{disabled:!e.$editorRole(),underline:!1,type:"danger"},on:{click:function(o){return e.handleDeleteApp(t.row.id,t.row.name)}}},[e._v("删除")]):e._e()],1)],1)],1)],1)]}}])})],1)],1),o("el-dialog",{attrs:{title:"升级",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"45px"},on:{"update:visible":function(t){e.yamlDialog=t},close:function(t){e.yamlDialog=!1,e.updateValues={name:"",namespace:"",config:"",values:""},e.yamlChange=1}}},[o("el-button-group",{staticStyle:{"margin-bottom":"10px"}},[o("el-button",{attrs:{type:e.yamlChange?"primary":"",size:"small"},on:{click:function(t){e.yamlChange=1}}},[e._v("当前配置")]),o("el-button",{attrs:{type:e.yamlChange?"":"primary",size:"small"},on:{click:function(t){e.yamlChange=0,e.yamlValue=e.updateValues.values}}},[e._v("原始values(只读)")])],1),e.yamlDialog?[o("yaml",{directives:[{name:"show",rawName:"v-show",value:e.yamlChange,expression:"yamlChange"}],attrs:{loading:e.yamlLoading,readOnly:!1},model:{value:e.updateValues.config,callback:function(t){e.$set(e.updateValues,"config",t)},expression:"updateValues.config"}}),o("yaml",{directives:[{name:"show",rawName:"v-show",value:!e.yamlChange,expression:"!yamlChange"}],attrs:{loading:e.yamlLoading,readOnly:!0},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}})]:e._e(),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),o("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updateNode()}}},[e._v("确 定")])],1)],2),o("el-dialog",{attrs:{title:"应用商店导入",visible:e.importStoreFormVisible,"destroy-on-close":!0,"close-on-click-modal":!1},on:{"update:visible":function(t){e.importStoreFormVisible=t},close:function(t){e.importStoreFormVisible=!1,e.importStoreAppForm={}}}},[o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.dialogLoading,expression:"dialogLoading"}]},[o("div",{staticClass:"dialogContent"},[o("el-form",{ref:"form",attrs:{model:e.importStoreAppForm,rules:e.rules,"label-position":"left","label-width":"105px"}},[o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.fetchVersionLoading,expression:"fetchVersionLoading"}]},[o("el-form-item",{attrs:{label:"命名空间",prop:"",required:!0}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择要安装的命名空间",size:"small"},model:{value:e.importStoreAppForm.namespace,callback:function(t){e.$set(e.importStoreAppForm,"namespace",t)},expression:"importStoreAppForm.namespace"}},e._l(e.namespaces,(function(e){return o("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),1)],1),o("el-form-item",{attrs:{label:"应用名称",prop:"",required:!0}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择应用",size:"small",filterable:""},on:{change:e.storeAppChange},model:{value:e.importStoreAppForm.storeAppId,callback:function(t){e.$set(e.importStoreAppForm,"storeAppId",t)},expression:"importStoreAppForm.storeAppId"}},e._l(e.storeApps,(function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),o("el-form-item",{attrs:{label:"应用版本",prop:"",required:!0}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择应用版本",size:"small"},model:{value:e.importStoreAppForm.storeAppVersion,callback:function(t){e.$set(e.importStoreAppForm,"storeAppVersion",t)},expression:"importStoreAppForm.storeAppVersion"}},e._l(e.storeAppVersions||[],(function(e){return o("el-option",{key:e.id,attrs:{label:e.package_version+" / "+e.app_version,value:e.id}})})),1)],1)],1)])],1),o("div",{staticClass:"dialogFooter",staticStyle:{"padding-top":"10px"},attrs:{slot:"footer"},slot:"footer"},[o("el-button",{staticStyle:{"margin-right":"20px"},on:{click:function(t){e.importStoreFormVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.handelImportStoreApp}},[e._v("导 入")])],1)])]),o("el-dialog",{attrs:{title:e.updateFormVisible?"升级应用":"安装应用",visible:e.installFormVisible,"destroy-on-close":!0,"close-on-click-modal":!1,top:"2vh",width:"70%"},on:{"update:visible":function(t){e.installFormVisible=t},close:e.closeFormDialog}},[o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.dialogLoading,expression:"dialogLoading"}]},[o("div",{staticClass:"dialogContent",staticStyle:{"margin-top":"-10px"}},[o("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-position":"left","label-width":"105px"}},[o("el-form-item",{attrs:{label:"应用名称",prop:"",autofocus:""}},[o("span",[e._v(e._s(e.form.name))])]),o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.fetchVersionLoading,expression:"fetchVersionLoading"}]},[o("el-form-item",{staticStyle:{"margin-top":"0px"},attrs:{label:"安装版本",prop:"",required:!0}},[o("el-select",{staticStyle:{width:"50%"},attrs:{placeholder:"请选择应用版本",size:"small"},on:{change:e.changeInstallAppVersion},model:{value:e.form.app_version_id,callback:function(t){e.$set(e.form,"app_version_id",t)},expression:"form.app_version_id"}},e._l(e.appVersions,(function(e){return o("el-option",{key:e.id,attrs:{label:e.package_version+" / "+e.app_version,value:e.id}})})),1)],1),o("div",[o("yaml",{model:{value:e.form.values,callback:function(t){e.$set(e.form,"values",t)},expression:"form.values"}})],1)],1)],1)],1),o("div",{staticClass:"dialogFooter",staticStyle:{"padding-top":"20px"},attrs:{slot:"footer"},slot:"footer"},[o("el-button",{staticStyle:{"margin-right":"20px"},on:{click:function(t){e.installFormVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.updateFormVisible?e.handleInstallApp(!0):e.handleInstallApp()}}},[e._v(" "+e._s(e.updateFormVisible?"升 级":"安 装")+" ")])],1)])])],1)},r=[],i=(o("caad"),o("c975"),o("b0c0"),o("d3b7"),o("ac1f"),o("2532"),o("1276"),o("ddb0"),o("ade3")),s=o("b85c"),l=o("61b2"),p=o("2978"),c=o("5c96"),u=o("4bff"),d=o("aad4"),m=o("e2c1"),f={name:"Application",components:{Clusterbar:l["a"],Yaml:l["g"]},data:function(){return{yamlDialog:!1,yamlName:"",yamlValue:"",yamlLoading:!0,dialogLoading:!1,cellStyle:{border:0},titleName:["Components"],maxHeight:window.innerHeight-150,loading:!0,originApps:[],appVersions:[],namespaces:[],installFormVisible:!1,updateFormVisible:!1,search_ns:[],search_name:"",yamlChange:1,rules:{},form:{id:"",name:"",app_version_id:"",values_dict:{},values:"",from:""},updateValues:{name:"",namespace:"",config:"",values:""},importStoreFormVisible:!1,importStoreAppForm:{storeAppId:"",storeAppVersion:"",namespace:"default"},fetchVersionLoading:!1,storeApps:[],statusNameMap:{UnInstall:"未安装",NotReady:"未就绪",RunningFault:"运行故障",Running:"运行中"},statusColorMap:{UnInstall:"",NotReady:"#E6A23C",RunningFault:"#F56C6C",Running:"#67C23A"},typeNameMap:{ordinary_app:"普通应用",middleware:"中间件",import_app:"导入应用",component:"集群组件"}}},created:function(){this.fetchApps(),this.fetchNamespace()},mounted:function(){var e=this;window.onresize=function(){return function(){var t=window.innerHeight-150;e.maxHeight=t}()}},watch:{},computed:{releases:function(){var e,t=[],o=Object(s["a"])(this.originApps);try{for(o.s();!(e=o.n()).done;){var a=e.value;this.search_ns.length>0&&this.search_ns.indexOf(a.namespace)<0||(this.search_name&&!a.name.includes(this.search_name)||t.push(a))}}catch(n){o.e(n)}finally{o.f()}return t},clusterId:function(){return parseInt(this.$store.state.cluster)},storeAppVersions:function(){if(!this.importStoreAppForm.storeAppId)return[];if(0==this.storeApps.length)return[];var e,t=Object(s["a"])(this.storeApps);try{for(t.s();!(e=t.n()).done;){var o=e.value;if(o.id==this.importStoreAppForm.storeAppId&&o.versions)return o.versions}}catch(a){t.e(a)}finally{t.f()}return[]}},methods:(a={fetchApps:function(){var e=this;this.loading=!0,Object(p["k"])({scope_id:this.clusterId,scope:"component"}).then((function(t){var o=t.data?t.data:[];e.$set(e,"originApps",o),e.loading=!1})).catch((function(t){e.loading=!1}))},fetchNamespace:function(){var e=this;this.namespaces=[],this.$store.state.cluster?Object(d["b"])(this.$store.state.cluster).then((function(t){e.namespaces=t.data,e.namespaces.sort((function(e,t){return e.name>t.name?1:-1}))})).catch((function(e){console.log(e)})):c["Message"].error("获取集群异常，请刷新重试")},changeInstallAppVersion:function(e){if(this.form.values_dict={},this.appVersions&&!(this.appVersions.length<=0)){var t,o=Object(s["a"])(this.appVersions);try{for(o.s();!(t=o.n()).done;){var a=t.value;if(a.id==e){var n=m["default"].load(a.values);if(this.form.values=a.values,this.form.from=a.from,"space"==a.from)for(var r in n.workloads||{})for(var i in n.workloads[r].containers||{}){var l=n.workloads[r].containers[i].image;if(l){var p=l.split(":");n.workloads[r].containers[i].image=p[0],p.length>1&&(n.workloads[r].containers[i].tag=p[1])}}return void(this.form.values_dict=n)}}}catch(c){o.e(c)}finally{o.f()}}},openInstallFormDialog:function(e,t){var o=this;t&&(this.updateFormVisible=!0),this.appVersions=[],this.form={id:e.id,name:e.name,app_version_id:e.app_version_id,values_dict:{},values:"",from:e.app_version.from},this.installFormVisible=!0,this.fetchVersionLoading=!0,Object(p["j"])({scope:"project_app",scope_id:e.id}).then((function(t){o.appVersions=t.data?t.data:[],o.changeInstallAppVersion(e.app_version_id),o.fetchVersionLoading=!1})).catch((function(e){o.fetchVersionLoading=!1}))}},Object(i["a"])(a,"changeInstallAppVersion",(function(e){if(this.form.values_dict={},this.appVersions&&!(this.appVersions.length<=0)){var t,o=Object(s["a"])(this.appVersions);try{for(o.s();!(t=o.n()).done;){var a=t.value;if(a.id==e){var n=m["default"].load(a.values);if(this.form.values=a.values,this.form.from=a.from,"space"==a.from)for(var r in n.workloads||{})for(var i in n.workloads[r].containers||{}){var l=n.workloads[r].containers[i].image;if(l){var p=l.split(":");n.workloads[r].containers[i].image=p[0],p.length>1&&(n.workloads[r].containers[i].tag=p[1])}}return void(this.form.values_dict=n)}}}catch(c){o.e(c)}finally{o.f()}}})),Object(i["a"])(a,"closeFormDialog",(function(){this.updateFormVisible=!1,this.installFormVisible=!1})),Object(i["a"])(a,"handleInstallApp",(function(e){var t=this;if(this.form.id)if(this.form.app_version_id){var o=this.form.values,a={project_app_id:this.form.id,app_version_id:this.form.app_version_id,values:o,upgrade:!!e};this.dialogLoading=!0,Object(p["h"])(a).then((function(){t.dialogLoading=!1,t.installFormVisible=!1,c["Message"].success("安装应用成功"),t.fetchApps()})).catch((function(e){t.dialogLoading=!1}))}else c["Message"].error("请选择要安装的应用版本");else c["Message"].error("获取安装应用失败，请刷新重试")})),Object(i["a"])(a,"handleDestroyApp",(function(e,t){var o=this;e?this.$confirm("请确认是否销毁「".concat(t,"」此集群组件?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){o.loading=!0,Object(p["c"])({project_app_id:e}).then((function(){c["Message"].success("销毁应用成功"),o.fetchApps()})).catch((function(e){console.log(e),o.loading=!1}))})).catch((function(){})):c["Message"].error("获取销毁集群组件id失败，请刷新重试")})),Object(i["a"])(a,"handleDeleteApp",(function(e,t){var o=this;e?this.$confirm("请确认是否删除「".concat(t,"」此集群组件以及所有版本?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(p["b"])(e).then((function(){c["Message"].success("删除应用成功"),o.fetchApps()})).catch((function(e){console.log(e)}))})).catch((function(){})):c["Message"].error("获取应用id参数异常，请刷新重试")})),Object(i["a"])(a,"nsSearch",(function(e){this.search_ns=[];var t,o=Object(s["a"])(e);try{for(o.s();!(t=o.n()).done;){var a=t.value;this.search_ns.push(a)}}catch(n){o.e(n)}finally{o.f()}})),Object(i["a"])(a,"nameSearch",(function(e){this.search_name=e})),Object(i["a"])(a,"nameClick",(function(e,t){this.$router.push({name:"appDetail",params:{namespace:e,appName:t}})})),Object(i["a"])(a,"listStoreApps",(function(){var e=this;this.dialogLoading=!0,Object(u["d"])({with_versions:!0}).then((function(t){e.storeApps=[];var o,a=Object(s["a"])(t.data||[]);try{for(a.s();!(o=a.n()).done;){var n=o.value;"component"==n.type&&e.storeApps.push(n)}}catch(r){a.e(r)}finally{a.f()}e.storeApps.sort((function(e,t){return e.name>t.name?1:-1})),e.dialogLoading=!1})).catch((function(){e.dialogLoading=!1}))})),Object(i["a"])(a,"openImportStoreAppDialog",(function(){this.importStoreFormVisible=!0,0==this.storeApps.length&&this.listStoreApps()})),Object(i["a"])(a,"storeAppChange",(function(e){this.storeAppVersions.length>0?this.importStoreAppForm.storeAppVersion=this.storeAppVersions[0].id:this.importStoreAppForm.storeAppVersion=""})),Object(i["a"])(a,"handelImportStoreApp",(function(){var e=this,t={scope:"component",scope_id:this.clusterId,namespace:this.importStoreAppForm.namespace,store_app_id:this.importStoreAppForm.storeAppId,app_version_id:this.importStoreAppForm.storeAppVersion};t.store_app_id&&t.app_version_id?(this.dialogLoading=!0,Object(p["g"])(t).then((function(t){e.dialogLoading=!1,c["Message"].success("导入应用成功"),e.importStoreFormVisible=!1,e.fetchApps()})).catch((function(){e.dialogLoading=!1}))):c["Message"].error("请选择应用")})),a)},h=f,g=(o("a715"),o("92f8"),o("2877")),v=Object(g["a"])(h,n,r,!1,null,"b11b2a24",null);t["default"]=v.exports},"92f8":function(e,t,o){"use strict";var a=o("7cce"),n=o.n(a);n.a},a715:function(e,t,o){"use strict";var a=o("c25a"),n=o.n(a);n.a},c25a:function(e,t,o){}}]);