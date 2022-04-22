(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72213078"],{5384:function(e,t,r){},"60ef":function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return s})),r.d(t,"d",(function(){return a})),r.d(t,"b",(function(){return n}));var i=r("b775");function o(){return Object(i["a"])({url:"/settings/image_registry",method:"get"})}function s(e){return Object(i["a"])({url:"/settings/image_registry",method:"post",data:e})}function a(e,t){return Object(i["a"])({url:"/settings/image_registry/".concat(e),method:"put",data:t})}function n(e){return Object(i["a"])({url:"/settings/image_registry/".concat(e),method:"delete"})}},b59d:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("clusterbar",{attrs:{titleName:e.titleName,nameFunc:e.nameSearch,createFunc:e.openCreateFormDialog,createDisplay:"添加仓库"}}),r("div",{ref:"tableCot",staticClass:"dashboard-container"},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.originImageRegistry,"cell-style":e.cellStyle,"default-sort":{prop:"name"},"tooltip-effect":"dark"}},[r("el-table-column",{attrs:{prop:"registry",label:"仓库地址","show-overflow-tooltip":"","min-width":"15"}}),r("el-table-column",{attrs:{prop:"user",label:"认证用户","show-overflow-tooltip":"","min-width":"15"}}),r("el-table-column",{attrs:{prop:"update_user",label:"操作人","show-overflow-tooltip":"","min-width":"10"}}),r("el-table-column",{attrs:{prop:"update_time",label:"更新时间","show-overflow-tooltip":"","min-width":"15"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.$dateFormat(t.row.update_time))+" ")]}}])}),r("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"tableOperate"},[r("el-link",{staticStyle:{"margin-right":"15px"},attrs:{disabled:!e.$editorRole(),underline:!1,type:"primary"},on:{click:function(r){return e.openUpdateFormDialog(t.row)}}},[e._v("编辑")]),r("el-link",{attrs:{disabled:!e.$editorRole(),underline:!1,type:"danger"},on:{click:function(r){return e.handleDeleteImageRegistry(t.row.id,t.row.registry)}}},[e._v("删除")])],1)]}}])})],1),r("el-dialog",{attrs:{title:e.updateFormVisible?"修改仓库":"添加仓库",visible:e.createFormVisible,"destroy-on-close":!0},on:{"update:visible":function(t){e.createFormVisible=t},close:e.closeFormDialog}},[r("div",{staticClass:"dialogContent"},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-position":"left","label-width":"105px"}},[r("el-form-item",{attrs:{label:"仓库地址",prop:"registry",autofocus:""}},[r("el-input",{attrs:{autocomplete:"off",placeholder:"请输入镜像仓库地址，如: docker.io",size:"small"},model:{value:e.form.registry,callback:function(t){e.$set(e.form,"registry",t)},expression:"form.registry"}})],1),r("el-form-item",{attrs:{label:"用户",prop:"user"}},[r("el-input",{attrs:{autocomplete:"off",placeholder:"请输入认证用户",size:"small"},model:{value:e.form.user,callback:function(t){e.$set(e.form,"user",t)},expression:"form.user"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password",required:!0}},[r("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"请输入认证密码",size:"small"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1)],1),r("div",{staticClass:"dialogFooter",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{staticStyle:{"margin-right":"20px"},on:{click:function(t){e.createFormVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.updateFormVisible?e.handleUpdateImageRegistry():e.handleCreateImageRegistry()}}},[e._v("确 定")])],1)])],1)],1)},o=[],s=r("61b2"),a=r("60ef"),n=r("5c96"),l={name:"ImageRegistry",components:{Clusterbar:s["a"]},mounted:function(){var e=this;window.onresize=function(){return function(){var t=window.innerHeight-150;e.maxHeight=t}()}},data:function(){return{maxHeight:window.innerHeight-150,cellStyle:{border:0},titleName:["镜像仓库"],loading:!0,createFormVisible:!1,updateFormVisible:!1,form:{id:"",registry:"",user:"",password:""},rules:{registry:[{required:!0,message:"请输入镜像仓库地址",trigger:"blur"}],user:[{required:!0,message:"请输入镜像仓库认证用户",trigger:"blur"}],password:[{required:!0,message:"请输入镜像仓库认证密码",trigger:"blur"}]},originImageRegistry:[],search_name:""}},created:function(){this.fetchImageRegistry()},computed:{},methods:{fetchImageRegistry:function(){var e=this;this.loading=!0,Object(a["c"])().then((function(t){e.originImageRegistry=t.data?t.data:[],e.loading=!1})).catch((function(t){console.log(t),e.loading=!1}))},handleCreateImageRegistry:function(){var e=this;if(this.form.registry)if(this.form.user)if(this.form.password){var t={registry:this.form.registry,user:this.form.user,password:this.form.password};Object(a["a"])(t).then((function(){e.createFormVisible=!1,n["Message"].success("创建镜像仓库成功"),e.fetchImageRegistry()})).catch((function(e){console.log(e)}))}else n["Message"].error("请输入镜像仓库认证密码");else n["Message"].error("请输入镜像仓库认证用户");else n["Message"].error("镜像仓库地址不能为空")},handleUpdateImageRegistry:function(){var e=this;if(this.form.id){var t={user:this.form.user,password:this.form.password};Object(a["d"])(this.form.id,t).then((function(){e.createFormVisible=!1,n["Message"].success("更新镜像仓库成功"),e.fetchImageRegistry()})).catch((function(e){console.log(e)}))}else n["Message"].error("获取镜像仓库id参数异常，请刷新重试")},handleDeleteImageRegistry:function(e,t){var r=this;e?this.$confirm("请确认是否删除「".concat(t,"」镜像仓库?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(a["b"])(e).then((function(){n["Message"].success("删除镜像仓库成功"),r.fetchImageRegistry()})).catch((function(e){console.log(e)}))})).catch((function(){})):n["Message"].error("获取镜像仓库id参数异常，请刷新重试")},nameSearch:function(e){this.search_name=e},openCreateFormDialog:function(){this.createFormVisible=!0},openUpdateFormDialog:function(e){this.form={id:e.id,registry:e.registry,user:e.user,password:""},this.updateFormVisible=!0,this.createFormVisible=!0},closeFormDialog:function(){this.form={id:"",registry:"",user:"",password:""},this.updateFormVisible=!1,this.createFormVisible=!1}}},c=l,u=(r("ca2c"),r("2877")),d=Object(u["a"])(c,i,o,!1,null,"6964d1f2",null);t["default"]=d.exports},ca2c:function(e,t,r){"use strict";var i=r("5384"),o=r.n(i);o.a}}]);