webpackJsonp([6],{"+Lm8":function(e,t){},"3zWd":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"backs"},[n("div",{staticClass:"logheader"},[n("div",{staticClass:"return",on:{click:e.backHandle}}),e._v(" "),n("span",[e._v("注册账号")])]),e._v(" "),n("ul",[n("li",[n("span",[e._v("手机号：")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.LUserPhone,expression:"LUserPhone"}],attrs:{type:"text",name:""},domProps:{value:e.LUserPhone},on:{input:function(t){t.target.composing||(e.LUserPhone=t.target.value)}}})]),e._v(" "),n("li",[n("span",[e._v("密码：")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.LUserPsd,expression:"LUserPsd"}],attrs:{type:"password",name:""},domProps:{value:e.LUserPsd},on:{input:function(t){t.target.composing||(e.LUserPsd=t.target.value)}}})]),e._v(" "),n("li",[n("span",[e._v("确认密码：")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.LUserPsdTo,expression:"LUserPsdTo"}],attrs:{type:"password",name:""},domProps:{value:e.LUserPsdTo},on:{input:function(t){t.target.composing||(e.LUserPsdTo=t.target.value)}}})]),e._v(" "),n("li",{staticClass:"yzm"},[n("span",[e._v("图形验证码：")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.picLyanzhengma,expression:"picLyanzhengma"}],attrs:{type:"text",name:""},domProps:{value:e.picLyanzhengma},on:{input:function(t){t.target.composing||(e.picLyanzhengma=t.target.value)}}}),e._v(" "),n("img",{staticClass:"imgyzm",attrs:{src:s("jIMG"),alt:""}})]),e._v(" "),e._m(0)]),e._v(" "),n("div",{staticClass:"user_login",on:{click:e.Login}},[e._v("注册并登陆")])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("span",[this._v("短信验证码：")]),this._v(" "),t("input",{attrs:{type:"text",name:""}}),this._v(" "),t("input",{attrs:{type:"button",value:"获取验证码"}})])}]};var a=s("VU/8")({data:function(){return{LUserPhone:"",picLyanzhengma:"",LUserPsd:"",LUserPsdTo:""}},methods:{backHandle:function(){this.$router.back()},Login:function(){this.$checkLPsdTo(this.LUserPsdTo,this.LUserPsd),this.$checkLPsd(this.LUserPsd),this.$checkLPhone(this.LUserPhone)}}},n,!1,function(e){s("+Lm8")},"data-v-5c213718",null);t.default=a.exports}});
//# sourceMappingURL=6.4d87327a6157fae91d5d.js.map