(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29d4058c"],{"0611":function(e,t,a){"use strict";var s=a("e2e0"),l=a.n(s);l.a},5458:function(e,t,a){"use strict";var s=a("b4b1"),l=a.n(s);l.a},"9c15":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("clusterbar",{attrs:{titleName:e.titleName,nsFunc:e.nsSearch,nameFunc:e.nameSearch,delFunc:e.delFunc,createFunc:e.createFunc,createDisplay:"创建"}}),a("div",{staticClass:"dashboard-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.statefulsets,"tooltip-effect":"dark","max-height":e.maxHeight,"cell-style":e.cellStyle,"default-sort":{prop:"name"},"row-key":"uid"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"45"}}),a("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"100","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"name-class",on:{click:function(a){return e.nameClick(t.row.namespace,t.row.name)}}},[e._v(" "+e._s(t.row.name)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"namespace",label:"命名空间","min-width":"60","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"ready_replicas",label:"Pods","min-width":"40","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.ready_replicas)+"/"+e._s(t.row.status_replicas)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"replicas",label:"副本","min-width":"30","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"strategy",label:"更新策略","min-width":"55","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"conditions",label:"状态","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.conditions&&t.row.conditions.length>0?e._l(t.row.conditions,(function(t){return a("span",{key:t},[e._v(" "+e._s(t)+" ")])})):a("span",[e._v("—")])]}}])}),a("el-table-column",{attrs:{prop:"created",label:"创建时间","min-width":"70","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"","show-overflow-tooltip":"",width:"45"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-dropdown",{attrs:{size:"medium"}},[a("el-link",{attrs:{underline:!1}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em"},attrs:{"icon-class":"operate"}})],1),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.nameClick(t.row.namespace,t.row.name)}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"detail"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("详情")])],1),e.$editorRole()?a("el-dropdown-item",{nativeOn:{click:function(a){a.preventDefault(),e.update_replicas_statefulset=t.row,e.update_replicas=t.row.replicas,e.replicaDialog=!0}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"scale"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("副本")])],1):e._e(),e.$editorRole()?a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.getStatefulSetYaml(t.row.namespace,t.row.name)}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"edit"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("修改")])],1):e._e(),e.$editorRole()?a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.deleteStatefulSets([{namespace:t.row.namespace,name:t.row.name}])}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"delete"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("删除")])],1):e._e()],1)],1)]}}])})],1)],1),a("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?a("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updateStatefulSet()}}},[e._v("确 定")])],1)],1),a("el-dialog",{staticClass:"replicaDialog",attrs:{title:"扩缩容",visible:e.replicaDialog,"close-on-click-modal":!1,width:"380px",top:"14%"},on:{"update:visible":function(t){e.replicaDialog=t}}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("span",{staticStyle:{"line-height":"24px","font-size":"18px",color:"#303133"}},[e._v("扩缩容:")]),a("span",{staticStyle:{"line-height":"24px","font-size":"15px",color:"#606266"}},[e._v(e._s(e.update_replicas_statefulset?e.update_replicas_statefulset.name:""))])]),a("el-form",{ref:"form",attrs:{"label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"当前副本数"}},[a("label",[e._v(e._s(e.update_replicas_statefulset?e.update_replicas_statefulset.replicas:0))])])],1),a("el-form",{ref:"form",attrs:{"label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"期望副本数"}},[a("el-input-number",{attrs:{size:"medium",min:1,max:100},model:{value:e.update_replicas,callback:function(t){e.update_replicas=t},expression:"update_replicas"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.replicaDialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updateStatefulSetObj({statefulset:e.update_replicas_statefulset,replicas:e.update_replicas})}}},[e._v("确 定")])],1)],1)],1)},l=[],i=(a("4de4"),a("caad"),a("c975"),a("b0c0"),a("b64b"),a("2532"),a("b85c")),n=a("61b2"),r=a("f321"),o=a("5c96"),c={name:"StatefulSet",components:{Clusterbar:n["a"],Yaml:n["g"]},data:function(){return{replicaDialog:!1,yamlDialog:!1,yamlNamespace:"",yamlName:"",yamlValue:"",yamlLoading:!0,cellStyle:{border:0},titleName:["StatefulSets"],maxHeight:window.innerHeight-150,loading:!0,originStatefulSets:[],search_ns:[],search_name:"",delFunc:void 0,delStatefulSets:[],update_replicas:0,update_replicas_statefulset:null}},created:function(){this.fetchData()},mounted:function(){var e=this;window.onresize=function(){return function(){var t=window.innerHeight-150;e.maxHeight=t}()}},watch:{statefulsetsWatch:function(e){if(e){var t=e.resource.metadata.uid,a=e.resource.metadata.resourceVersion;if("add"===e.event)this.originStatefulSets.push(this.buildStatefulSets(e.resource));else if("update"===e.event)for(var s in this.originStatefulSets){var l=this.originStatefulSets[s];if(l.uid===t){if(l.resource_version<a){var i=this.buildStatefulSets(e.resource);this.$set(this.originStatefulSets,s,i)}break}}else"delete"===e.event&&(this.originStatefulSets=this.originStatefulSets.filter((function(e){var a=e.uid;return a!==t})))}}},computed:{statefulsets:function(){var e,t=[],a=Object(i["a"])(this.originStatefulSets);try{for(a.s();!(e=a.n()).done;){var s=e.value;this.search_ns.length>0&&this.search_ns.indexOf(s.namespace)<0||(this.search_name&&!s.name.includes(this.search_name)||(s.conditions&&s.conditions.length>0?s.conditions.sort():s.conditions=[],t.push(s)))}}catch(l){a.e(l)}finally{a.f()}return t},statefulsetsWatch:function(){return this.$store.getters["ws/statefulsetsWatch"]}},methods:{fetchData:function(){var e=this;this.loading=!0,this.originStatefulSets=[];var t=this.$store.state.cluster;t?Object(r["c"])(t).then((function(t){e.loading=!1,e.originStatefulSets=t.data||[]})).catch((function(){e.loading=!1})):(this.loading=!1,o["Message"].error("获取集群异常，请刷新重试"))},nsSearch:function(e){this.search_ns=[];var t,a=Object(i["a"])(e);try{for(a.s();!(t=a.n()).done;){var s=t.value;this.search_ns.push(s)}}catch(l){a.e(l)}finally{a.f()}},nameSearch:function(e){this.search_name=e},buildStatefulSets:function(e){if(e){var t=[];if(e.status.conditions){var a,s=Object(i["a"])(e.status.conditions);try{for(s.s();!(a=s.n()).done;){var l=a.value;"True"===l.status&&t.push(l.type)}}catch(r){s.e(r)}finally{s.f()}}var n={uid:e.metadata.uid,namespace:e.metadata.namespace,name:e.metadata.name,replicas:e.spec.replicas,status_replicas:e.status.replicas||0,ready_replicas:e.status.readyReplicas||0,resource_version:e.metadata.resourceVersion,strategy:e.spec.updateStrategy.type,conditions:t,created:e.metadata.creationTimestamp};return n}},nameClick:function(e,t){this.$router.push({name:"statefulsetDetail",params:{namespace:e,statefulsetName:t}})},getStatefulSetYaml:function(e,t){var a=this;this.yamlNamespace="",this.yamlName="";var s=this.$store.state.cluster;s?e?t?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(r["b"])(s,e,t,"yaml").then((function(s){a.yamlLoading=!1,a.yamlValue=s.data,a.yamlNamespace=e,a.yamlName=t})).catch((function(){a.yamlLoading=!1}))):o["Message"].error("获取StatefulSet名称参数异常，请刷新重试"):o["Message"].error("获取命名空间参数异常，请刷新重试"):o["Message"].error("获取集群参数异常，请刷新重试")},deleteStatefulSets:function(e){var t=this.$store.state.cluster;if(t)if(e.length<=0)o["Message"].error("请选择要删除的StatefulSets");else{var a={resources:e};Object(r["a"])(t,a).then((function(){o["Message"].success("删除成功")})).catch((function(){}))}else o["Message"].error("获取集群参数异常，请刷新重试")},updateStatefulSet:function(){var e=this.$store.state.cluster;e?this.yamlNamespace?this.yamlName?(console.log(this.yamlValue),Object(r["d"])(e,this.yamlNamespace,this.yamlName,this.yamlValue).then((function(){o["Message"].success("更新成功")})).catch((function(){}))):o["Message"].error("获取StatefulSet参数异常，请刷新重试"):o["Message"].error("获取命名空间参数异常，请刷新重试"):o["Message"].error("获取集群参数异常，请刷新重试")},updateStatefulSetObj:function(e){var t=this;console.log(e);var a=this.$store.state.cluster;if(a)if(e&&e.statefulset){var s=e.statefulset;if(s.namespace)if(s.name){var l={};if(e.replicas){if(e.replicas<1)return void o["Message"].error("副本数不能小于1，请重新输入");if(parseInt(e.replicas)===parseInt(s.replicas))return void o["Message"].error("副本数与当前值相同，请重新输入");l["replicas"]=e.replicas}0!==Object.keys(l).length?Object(r["e"])(a,s.namespace,s.name,l).then((function(){o["Message"].success("更新成功"),t.replicaDialog=!1})).catch((function(){})):o["Message"].error("更新参数为空")}else o["Message"].error("获取StatefulSet参数异常，请刷新重试");else o["Message"].error("获取命名空间参数异常，请刷新重试")}else o["Message"].error("获取更新参数异常，请刷新重试");else o["Message"].error("获取集群参数异常，请刷新重试")},_delStatefulSetsFunc:function(){if(this.delStatefulSets.length>0){var e,t=[],a=Object(i["a"])(this.delStatefulSets);try{for(a.s();!(e=a.n()).done;){var s=e.value;t.push({namespace:s.namespace,name:s.name})}}catch(l){a.e(l)}finally{a.f()}this.deleteStatefulSets(t)}},handleSelectionChange:function(e){this.delStatefulSets=e,e.length>0?this.delFunc=this._delStatefulSetsFunc:this.delFunc=void 0},createFunc:function(){this.$router.push({name:"statefulsetCreate"})}}},u=c,f=(a("0611"),a("5458"),a("2877")),d=Object(f["a"])(u,s,l,!1,null,"25ef5760",null);t["default"]=d.exports},b4b1:function(e,t,a){},e2e0:function(e,t,a){},f321:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return n})),a.d(t,"d",(function(){return r})),a.d(t,"e",(function(){return o}));a("99af");var s=a("b775");function l(e){return Object(s["a"])({url:"statefulset/".concat(e),method:"get"})}function i(e,t,a){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(s["a"])({url:"statefulset/".concat(e,"/").concat(t,"/").concat(a),method:"get",params:{output:l}})}function n(e,t){return Object(s["a"])({url:"statefulset/".concat(e,"/delete"),method:"post",data:t})}function r(e,t,a,l){return Object(s["a"])({url:"statefulset/".concat(e,"/update/").concat(t,"/").concat(a),method:"post",data:{yaml:l}})}function o(e,t,a,l){return Object(s["a"])({url:"statefulset/".concat(e,"/update_obj/").concat(t,"/").concat(a),method:"post",data:l})}}}]);