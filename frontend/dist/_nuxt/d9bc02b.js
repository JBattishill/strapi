(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{400:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"textures"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"attributes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:91}};t.loc.source={body:"query {\n  textures{\n    data {\n      id\n      attributes {\n        name\n      }\n    }\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var o={};t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),o[e.name.value]=n}})),e.exports=t},416:function(e,n,t){"use strict";t.r(n);t(38);var r=t(400),o={data:function(){return{textures:{data:[]},api_url:"http://localhost:1337"}},apollo:{textures:{prefetch:!0,query:t.n(r).a,variables:function(){return{id:parseInt(this.$route.params.id)}}}}},d=t(55),component=Object(d.a)(o,(function(){var e=this,n=e._self._c;return n("div",[n("div",{staticClass:"uk-section"},[n("div",{staticClass:"uk-container uk-container-small"},[n("h2",[e._v("Textures")]),e._v(" "),e._l(e.textures.data,(function(t){return n("li",{key:t.id},[e._v("\n                    "+e._s(t.attributes.name)+"\n            ")])}))],2)])])}),[],!1,null,null,null);n.default=component.exports}}]);