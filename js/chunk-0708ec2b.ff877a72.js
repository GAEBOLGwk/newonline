(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0708ec2b"],{"508e":function(e,t,s){},"794a":function(e,t,s){"use strict";s("508e")},ff9b:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",[e._v("我的昵称是："+e._s(e.myNicakName))]),s("div",[s("input",{ref:"nikeName",attrs:{type:"text"}}),s("button",{on:{click:e.setMyNicakName}},[e._v("设置我的昵称")])]),s("br"),s("div",[s("input",{ref:"message",attrs:{type:"text"}}),s("button",{on:{click:e.submitVal}},[e._v("发送内容")])]),s("div",[s("p",[e._v("聊天内容：")]),s("ul",{staticClass:"el_content"},e._l(e.allMessages,(function(t,n){return s("li",{key:n,class:1==t.isMySay?"my":"other"},[e._v(" "+e._s(1==t.isMySay?"我：":(t.nickname||"匿名")+"：")+" "+e._s(t.content)+" ")])})),0)])])},a=[],i={data:function(){return{myNicakName:"",allMessages:[]}},sockets:{connect:function(){console.log("连接成功啦！！！")},test:function(e){var t={isMySay:!1,content:e.massage,nickname:e.nickname};this.allMessages.push(t)}},methods:{submitVal:function(){var e=this.$refs.message.value,t=this.myNicakName,s={val:e,nickName:t},n={isMySay:!0,content:e};this.allMessages.push(n),this.$socket.emit("test",s)},setMyNicakName:function(){this.myNicakName=this.$refs.nikeName.value}}},c=i,l=(s("794a"),s("2877")),u=Object(l["a"])(c,n,a,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-0708ec2b.ff877a72.js.map