(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(e,t,n){"use strict";var o=n(3),r=n(125),l=n.n(r),d=n(238),c=n.n(d);l.a.use(c.a),l.a.container="#__nuxt",o.a.prototype.$uikit=l.a},228:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"navs"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"attributes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"Item"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:88}};n.loc.source={body:"query {\n  navs{\n    data {\n      id\n      attributes {\n        Item\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function o(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){o(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){o(e,t)})),e.definitions&&e.definitions.forEach((function(e){o(e,t)}))}var r={};n.definitions.forEach((function(e){if(e.name){var t=new Set;o(e,t),r[e.name.value]=t}})),e.exports=n},229:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"signins"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"attributes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"item"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:92}};n.loc.source={body:"query {\n  signins {\n    data {\n      id\n      attributes {\n        item\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function o(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){o(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){o(e,t)})),e.definitions&&e.definitions.forEach((function(e){o(e,t)}))}var r={};n.definitions.forEach((function(e){if(e.name){var t=new Set;o(e,t),r[e.name.value]=t}})),e.exports=n},241:function(e,t,n){"use strict";var o=[function(){var e=this._self._c;return e("div",{staticClass:"uk-navbar-left uk-width-1-1"},[e("ul",{staticClass:"uk-navbar-nav uk-padding-small"},[e("li",[e("a",{staticClass:"uk-hidden@s",attrs:{href:"#modal-full","uk-toggle":""}},[e("span",{attrs:{"uk-icon":"icon: table"}})])]),this._v(" "),e("li",[e("a",{attrs:{href:"/"}},[e("img",{staticClass:"toplogo",attrs:{src:n(316),alt:"Choose Nourish Logo."}})])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"uk-navbar-right uk-visible@s uk-width-1-4"},[t("ul",{staticClass:"uk-navbar-nav uk-child-width-1-8"},[t("li",[t("a",{attrs:{href:"/login"}},[e._v("Login")])]),e._v(" "),t("li",[t("a",{attrs:{href:"/signup"}},[e._v("Signup")])])])])}],r=n(228),l=n.n(r),d=n(229),c=n.n(d),v={data:function(){return{navs:{data:[]},signins:{data:[]},api_url:"http://localhost:1337"}},apollo:{navs:{prefetch:!0,query:l.a,variables:function(){return{id:parseInt(this.$route.params.id)}}},signins:{prefetch:!0,query:c.a,variables:function(){return{id:parseInt(this.$route.params.id)}}}}},m=n(55),component=Object(m.a)(v,(function(){var e=this,t=e._self._c;return t("div",{},[t("nav",{staticClass:"uk-navbar-container headerbg",attrs:{"uk-navbar":""}},[e._m(0),e._v(" "),t("div",{staticClass:"uk-navbar-center uk-visible@s uk-width-1-4"},[t("ul",{staticClass:"uk-navbar-nav"},e._l(e.navs.data,(function(nav){return t("li",{key:nav.id},[t("NuxtLink",{attrs:{to:{name:"navs-id",params:{id:nav.id}}}},[e._v(e._s(nav.attributes.Item)+"\n          ")])],1)})),0)]),e._v(" "),e._m(1)]),e._v(" "),t("div",{staticClass:"uk-modal-full",attrs:{id:"modal-full","uk-modal":""}},[t("div",{staticClass:"uk-modal-dialog"},[t("button",{staticClass:"uk-modal-close-full uk-close-large",attrs:{type:"button","uk-close":""}}),e._v(" "),t("div",{staticClass:"uk-grid-collapse uk-child-width-1-2@s uk-flex-middle",attrs:{"uk-grid":""}},[t("div",{staticClass:"uk-padding-large"},[t("h3",[e._v("The Collapsed Menu")]),e._v(" "),t("div",{staticClass:"uk-width-1-2@s"},[t("ul",{staticClass:"uk-nav-primary uk-nav-parent-icon",attrs:{"uk-nav":""}},[e._l(e.navs.data,(function(nav){return t("li",{key:nav.id},[t("NuxtLink",{staticClass:"uk-modal-close",attrs:{to:{name:"navs-id",params:{id:nav.id}}}},[e._v(e._s(nav.attributes.Item)+"\n                ")])],1)})),e._v(" "),e._l(e.signins.data,(function(n){return t("li",{key:n.id},[t("NuxtLink",{staticClass:"uk-modal-close",attrs:{to:{name:"signins-id",params:{id:n.id}}}},[e._v(e._s(n.attributes.item)+"\n                ")])],1)}))],2)]),e._v(" "),t("p",{staticClass:"uk-text-light"},[e._v("Bottom menu - default.vue - line 60")])])])])]),e._v(" "),t("Nuxt")],1)}),o,!1,null,null,null);t.a=component.exports},243:function(e,t,n){n(244),e.exports=n(245)},314:function(e,t,n){var content=n(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(97).default)("17bc9ac2",content,!0,{sourceMap:!1})},315:function(e,t,n){var o=n(96)((function(i){return i[1]}));o.push([e.i,"a{-webkit-text-decoration:none;text-decoration:none}h1{font-size:120px}#category,h1{font-family:Poppins}#category{font-weight:500}#title{font-size:22px;font-size:1.375rem;letter-spacing:.4px;line-height:1.13636}#banner{height:800px;margin:20px}#editor{font-size:16px;font-size:1rem;line-height:1.75}.uk-navbar-container{background:#031458!important;font-family:Poppins}.uk-navbar-container a{color:#fff!important}.uk-navbar-container a:hover{-webkit-text-decoration:underline!important;text-decoration:underline!important}img:hover{opacity:1;transition:opacity .25s cubic-bezier(.39,.575,.565,1)}.whitetext{color:#fff!important;letter-spacing:.3rem}.thintext{font-weight:100;letter-spacing:.1rem}.toplogo{max-height:5rem;max-width:20vw}.headerbg{background-color:#29539b;background-image:linear-gradient(315deg,#29539b,#1e3b70 74%)!important}.imageContainer{display:block;height:60vh;padding:1rem}.headerImage,.imageContainer{background-position:50%;background-repeat:no-repeat;margin:0 auto;width:auto}.headerImage{height:100%}",""]),o.locals={},e.exports=o},316:function(e,t,n){e.exports=n.p+"img/whitecnlogo.915bb19.png"},390:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=390}},[[243,12,1,13]]]);