(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reg/reg"],{1301:function(t,e,a){"use strict";a("209c");var n=i(a("b0ce")),s=i(a("62c3"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))},"3f4f":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("view",{staticClass:"input-group"},[a("view",{staticClass:"input-row border"},[a("text",{staticClass:"title"},[t._v("账号：")]),a("m-input",{attrs:{type:"text",focus:"",clearable:"",placeholder:"请输入账号",eventid:"41663269-0",mpcomid:"41663269-0"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1),a("view",{staticClass:"input-row border"},[a("text",{staticClass:"title"},[t._v("密码：")]),a("m-input",{attrs:{type:"password",displayable:"",placeholder:"请输入密码",eventid:"41663269-1",mpcomid:"41663269-1"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("view",{staticClass:"input-row"},[a("text",{staticClass:"title"},[t._v("邮箱：")]),a("m-input",{attrs:{type:"text",clearable:"",placeholder:"请输入邮箱",eventid:"41663269-2",mpcomid:"41663269-2"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)]),a("view",{staticClass:"btn-row"},[a("button",{staticClass:"primary",attrs:{type:"primary",eventid:"41663269-3"},on:{tap:t.register}},[t._v("注册")])],1)])},s=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})},"62c3":function(t,e,a){"use strict";a.r(e);var n=a("3f4f"),s=a("8c4d");for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);a("94de");var o=a("2877"),c=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},6701:function(t,e,a){},"8c4d":function(t,e,a){"use strict";a.r(e);var n=a("d1a7"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=s.a},"94de":function(t,e,a){"use strict";var n=a("6701"),s=a.n(n);s.a},d1a7:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("358a")),s=i(a("81d9"));function i(t){return t&&t.__esModule?t:{default:t}}var o={components:{mInput:s.default},data:function(){return{account:"",password:"",email:""}},methods:{register:function(){if(this.account.length<5)t.showToast({icon:"none",title:"账号最短为 5 个字符"});else if(this.password.length<6)t.showToast({icon:"none",title:"密码最短为 6 个字符"});else if(this.email.length<3||!~this.email.indexOf("@"))t.showToast({icon:"none",title:"邮箱地址不合法"});else{var e={account:this.account,password:this.password,email:this.email};n.default.addUser(e),t.showToast({title:"注册成功"}),t.navigateBack({delta:1})}}}};e.default=o}).call(this,a("6e42")["default"])}},[["1301","common/runtime","common/vendor"]]]);