(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8ee9b982"],{3887:function(e,t,n){},"3efd":function(e,t,n){"use strict";var a=n("3887"),s=n.n(a);s.a},"9ed6":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("div",{staticClass:"login-box"},[n("el-row",{staticStyle:{"margin-bottom":"25px"}},[n("el-col",{attrs:{span:16,offset:4,align:"center"}},[n("span",{staticClass:"login-title"},[e._v("KubeSpace")])])],1),n("el-row",[n("el-col",{attrs:{span:16,offset:4}},[n("el-input",{staticClass:"login-input",attrs:{placeholder:"请输入用户名",name:"username",tabindex:"1",clearable:"",autofocus:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}},[n("i",{staticClass:"el-input__icon el-icon-user",attrs:{slot:"prefix"},slot:"prefix"})])],1)],1),n("el-row",[n("el-col",{attrs:{span:16,offset:4}},[n("el-input",{attrs:{type:"password",autocomplete:"new-password",name:"password",tabindex:"2",placeholder:"请输入密码",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}},[n("i",{staticClass:"el-input__icon el-icon-lock",attrs:{slot:"prefix"},slot:"prefix"})])],1)],1),n("el-row",{staticStyle:{"margin-top":"30px"}},[n("el-col",{attrs:{span:16,offset:4,align:"center"}},[n("el-button",{staticStyle:{width:"100%"},attrs:{loading:e.loading,size:"medium",plain:""},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[n("span",{staticStyle:{"margin-right":"20px"}},[e._v("登")]),n("span",[e._v("录")])])],1)],1)],1)])},s=[],o=n("5c96"),i=n("c24f"),r={data:function(){return{username:"",password:"",loading:!1,redirect:void 0}},beforeRouteEnter:function(e,t,n){console.log(e),console.log(t),Object(i["f"])().then((function(e){var t=e.data,a=t.has;a?n():n("/ui/login/admin")})).catch((function(){n()}))},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{handleLogin:function(){var e=this,t={username:this.username,password:this.password};return console.log(t),t.username?t.password?(this.loading=!0,void this.$store.dispatch("user/login",t).then((function(){e.loading=!1,parent.location.href=e.redirect||"/"})).catch((function(){e.loading=!1}))):(o["Message"].error("密码不能为空！"),!1):(o["Message"].error("用户名不能为空！"),!1)}}},l=r,c=(n("3efd"),n("2877")),u=Object(c["a"])(l,a,s,!1,null,"51f9e346",null);t["default"]=u.exports}}]);