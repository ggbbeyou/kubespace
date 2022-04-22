(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a384525"],{"5fa2":function(e,t,r){"use strict";var s=r("c2b8"),o=r.n(s);o.a},"91ad":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("clusterbar",{attrs:{titleName:e.titleName,nameFunc:e.nameSearch,createFunc:e.createSecretFormDialog,createDisplay:"创建密钥"}}),r("div",{ref:"tableCot",staticClass:"dashboard-container"},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.originSecrets,"cell-style":e.cellStyle,"default-sort":{prop:"name"},"tooltip-effect":"dark"}},[r("el-table-column",{attrs:{prop:"name",label:"名称","show-overflow-tooltip":"","min-width":"15"}}),r("el-table-column",{attrs:{prop:"description",label:"描述","show-overflow-tooltip":"","min-width":"15"}}),r("el-table-column",{attrs:{prop:"roles",label:"密钥类型","show-overflow-tooltip":"","min-width":"15"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.secretTypeMap[t.row.type])+" ")]}}])}),r("el-table-column",{attrs:{prop:"update_user",label:"操作人","show-overflow-tooltip":"","min-width":"10"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.update_user)+" ")]}}])}),r("el-table-column",{attrs:{prop:"update_time",label:"更新时间","show-overflow-tooltip":"","min-width":"15"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.$dateFormat(t.row.update_time))+" ")]}}])}),r("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"tableOperate"},[r("el-link",{staticStyle:{"margin-right":"15px"},attrs:{disabled:!e.$editorRole(),underline:!1,type:"primary"},on:{click:function(r){return e.updateSecretFormDialog(t.row)}}},[e._v("编辑")]),r("el-link",{attrs:{disabled:!e.$editorRole(),underline:!1,type:"danger"},on:{click:function(r){return e.handleDeleteSecret(t.row.id,t.row.name)}}},[e._v("删除")])],1)]}}])})],1),r("el-dialog",{attrs:{title:e.updateSecretVisible?"修改密钥":"创建密钥",visible:e.createSecretFormVisible,"destroy-on-close":!0},on:{"update:visible":function(t){e.createSecretFormVisible=t},close:e.closeSecretDialog}},[r("div",{staticClass:"dialogContent"},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-position":"left","label-width":"105px"}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{disabled:e.updateSecretVisible,autocomplete:"off",placeholder:"请输入密钥名称",size:"small"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"描述",prop:"description"}},[r("el-input",{attrs:{type:"textarea",autocomplete:"off",placeholder:"请输入密钥描述",size:"small"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),r("el-form-item",{attrs:{label:"密钥类型",prop:"secret_type"}},[r("el-radio-group",{model:{value:e.form.secret_type,callback:function(t){e.$set(e.form,"secret_type",t)},expression:"form.secret_type"}},[r("el-radio",{attrs:{label:"password"}},[e._v("用户密码")]),r("el-radio",{attrs:{label:"key"}},[e._v("私钥")]),r("el-radio",{attrs:{label:"token"}},[e._v("AccessToken")])],1)],1),"password"==e.form.secret_type?r("el-form-item",{attrs:{label:"用户",prop:"user"}},[r("el-input",{attrs:{autocomplete:"off",clearable:"",placeholder:"请输入用户",size:"small"},model:{value:e.form.user,callback:function(t){e.$set(e.form,"user",t)},expression:"form.user"}})],1):e._e(),"password"==e.form.secret_type?r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{autocomplete:"new-password",clearable:"",placeholder:"请输入密码",size:"small","show-password":""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1):e._e(),"key"==e.form.secret_type?r("el-form-item",{attrs:{label:"私钥",prop:"private_key"}},[r("el-input",{staticClass:"dialogTextarea",attrs:{type:"textarea",autocomplete:"off",placeholder:"请输入私钥",size:"small"},model:{value:e.form.private_key,callback:function(t){e.$set(e.form,"private_key",t)},expression:"form.private_key"}})],1):e._e(),"token"==e.form.secret_type?r("el-form-item",{attrs:{label:"AccessToken",prop:"access_token"}},[r("el-input",{staticClass:"dialogTextarea",attrs:{type:"textarea",autocomplete:"off",placeholder:"请输入私钥",size:"small"},model:{value:e.form.access_token,callback:function(t){e.$set(e.form,"access_token",t)},expression:"form.access_token"}})],1):e._e()],1)],1),r("div",{staticClass:"dialogFooter",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{staticStyle:{"margin-right":"20px"},on:{click:function(t){e.createSecretFormVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.updateSecretVisible?e.handleUpdateSecret():e.handleCreateSecret()}}},[e._v("确 定")])],1)])],1)],1)},o=[],a=(r("a4d3"),r("e01a"),r("b0c0"),r("61b2")),i=r("f7ec"),c=r("5c96"),n={name:"secret",components:{Clusterbar:a["a"]},mounted:function(){var e=this;window.onresize=function(){return function(){var t=window.innerHeight-150;e.maxHeight=t}()}},data:function(){return{maxHeight:window.innerHeight-150,cellStyle:{border:0},titleName:["密钥管理"],loading:!0,createSecretFormVisible:!1,updateSecretVisible:!1,form:{id:"",name:"",description:"",user:"",password:"",private_key:"",access_token:"",secret_type:"password"},rules:{name:[{required:!0,message:" ",trigger:"blur"}],secret_type:[{required:!0,message:" ",trigger:"blur"}],user:[{required:!0,message:" ",trigger:"blur"}],password:[{required:!0,message:" ",trigger:"blur"}],private_key:[{required:!0,message:" ",trigger:"blur"}],access_token:[{required:!0,message:" ",trigger:"blur"}]},originSecrets:[],search_name:"",secretTypeMap:{password:"密码",key:"密钥",token:"AccessToken"}}},created:function(){this.fetchSecrets()},computed:{secrets:function(){}},methods:{handleEdit:function(e,t){console.log(e,t)},fetchSecrets:function(){var e=this;this.loading=!0,Object(i["c"])().then((function(t){e.originSecrets=t.data?t.data:[],e.loading=!1})).catch((function(t){console.log(t),e.loading=!1}))},handleCreateSecret:function(){var e=this;if(this.form.name)if(this.form.secret_type){var t={name:this.form.name,secret_type:this.form.secret_type,description:this.form.description};if("password"==this.form.secret_type){if(!this.form.user)return void c["Message"].error("密钥用户不能为空");if(!this.form.password)return void c["Message"].error("密码不能为空");t["user"]=this.form.user,t["password"]=this.form.password}else if("key"==this.form.secret_type){if(!this.form.private_key)return void c["Message"].error("私钥不能为空");t["private_key"]=this.form.private_key}else if("token"==this.form.secret_type){if(!this.form.access_token)return void c["Message"].error("AccessToken不能为空");t["access_token"]=this.form.access_token}Object(i["a"])(t).then((function(){e.createSecretFormVisible=!1,c["Message"].success("创建密钥成功"),e.fetchSecrets()})).catch((function(e){console.log(e)}))}else c["Message"].error("密钥类别不能为空，请重新选择");else c["Message"].error("密钥名称不能为空")},handleUpdateSecret:function(){var e=this;if(this.form.id){var t={name:this.form.name,secret_type:this.form.secret_type,description:this.form.description};if("password"==this.form.secret_type){if(!this.form.user)return void c["Message"].error("密钥用户不能为空");if(!this.form.password)return void c["Message"].error("密码不能为空");t["user"]=this.form.user,t["password"]=this.form.password}else if("key"==this.form.secret_type){if(!this.form.private_key)return void c["Message"].error("私钥不能为空");t["private_key"]=this.form.private_key}else if("token"==this.form.secret_type){if(!this.form.access_token)return void c["Message"].error("AccessToken不能为空");t["access_token"]=this.form.access_token}Object(i["d"])(this.form.id,t).then((function(){e.createSecretFormVisible=!1,c["Message"].success("更新密钥成功"),e.fetchSecrets()})).catch((function(e){console.log(e)}))}else c["Message"].error("获取密钥id参数异常，请刷新重试")},handleDeleteSecret:function(e,t){var r=this;e?this.$confirm("请确认是否删除「".concat(t,"」此密钥?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["b"])(e).then((function(){c["Message"].success("删除密钥成功"),r.fetchSecrets()})).catch((function(e){console.log(e)}))})).catch((function(){})):c["Message"].error("获取密钥id参数异常，请刷新重试")},nameSearch:function(e){this.search_name=e},createSecretFormDialog:function(){this.createSecretFormVisible=!0},updateSecretFormDialog:function(e){this.form={id:e.id,name:e.name,description:e.description,secret_type:e.type||"password",user:e.user,password:"",private_key:"",access_token:""},this.updateSecretVisible=!0,this.createSecretFormVisible=!0},closeSecretDialog:function(){this.form={name:"",description:"",user:"",password:"",private_key:"",access_token:"",secret_type:"password"},this.updateSecretVisible=!1,this.createSecretFormVisible=!1}}},l=n,u=(r("5fa2"),r("2877")),f=Object(u["a"])(l,s,o,!1,null,"69bc60a9",null);t["default"]=f.exports},c2b8:function(e,t,r){},f7ec:function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return a})),r.d(t,"d",(function(){return i})),r.d(t,"b",(function(){return c}));var s=r("b775");function o(){return Object(s["a"])({url:"/settings/secret",method:"get"})}function a(e){return Object(s["a"])({url:"/settings/secret",method:"post",data:e})}function i(e,t){return Object(s["a"])({url:"/settings/secret/".concat(e),method:"put",data:t})}function c(e){return Object(s["a"])({url:"/settings/secret/".concat(e),method:"delete"})}}}]);