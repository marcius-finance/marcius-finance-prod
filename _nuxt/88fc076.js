(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3,4],{669:function(e,t,l){"use strict";l.r(t);l(69),l(49);var n={"":"",en:"🇺🇸 United States",ru:"🇷🇺 Russia",ukr:"🇺🇦 Ukraine",vnm:"🇻🇳 Vietnam",deu:"🇩🇪 Germany",sp:"🇪🇸 Spain",bra:"🇧🇷 Brazil",kor:"🇰🇷 Korea"},o=Object.keys(n).map((function(e){return{title:n[e],value:e}}));t.default={regions:{"":"",en:"🇺🇸",ru:"🇷🇺",ukr:"🇺🇦",vnm:"🇻🇳",deu:"🇩🇪",sp:"🇪🇸",bra:"🇧🇷",kor:"🇰🇷"},options:o}},670:function(e,t,l){"use strict";l.r(t);var n=l(669),o=[{title:"Polygonum Online",value:"polygonumonline"},{title:"Counter-Strike: Global Offensive",value:"csgo"},{title:"Dota 2",value:"dota2"}],r={props:["value"],data:function(){return{projects:o,regions:n.default.options,schema:[{label:"Tag",value:"tag",placeholder:"TAG",max:4},{label:"Name",value:"name",max:20},{label:"Treasury",value:"treasury",placeholder:"0x...00",max:50},{label:"URL",value:"url",placeholder:"http://example.com",max:50}],form:{region:""}}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},c=l(1),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"columns"},[e._l(e.schema,(function(i,t){return l("div",{key:t,staticClass:"column col-6 col-sm-12 mb"},[l("c-input-label",[e._v(e._s(i.label))]),e._v(" "),l("c-input",{attrs:{placeholder:i.placeholder,max:i.max,uppercase:"tag"==i.value},model:{value:e.model[i.value],callback:function(t){e.$set(e.model,i.value,t)},expression:"model[i.value]"}})],1)})),e._v(" "),l("div",{staticClass:"column col-6 col-sm-12"},[l("c-input-label",[e._v("Region")]),e._v(" "),l("c-select",{attrs:{items:e.regions},model:{value:e.model.region,callback:function(t){e.$set(e.model,"region",t)},expression:"model['region']"}})],1)],2)}),[],!1,null,null,null);t.default=component.exports},672:function(e,t,l){"use strict";l.r(t);var n,o=l(61),r=l(41),c={data:function(){return{form:{}}},watch:{"$store.state.blockchain.wallet":function(e){this.setTreasury()}},mounted:function(){this.setTreasury()},methods:{submit:function(){var e=this;this.$apollo.mutate({mutation:Object(r.a)(n||(n=Object(o.a)(["mutation createGuild($data: guildInputType!) { createGuild(data: $data) }"]))),variables:{data:this.form}}).then((function(){e.$loader().done(!0),e.$bus.$emit("createGuild")})).catch((function(t){return e.$toast.error(t.graphQLErrors[0].message)}))},setTreasury:function(){this.$store.getters["blockchain/isWalletConnected"]&&this.$set(this.form,"treasury",this.$store.state.blockchain.wallet)}},components:{tform:l(670).default}},m=l(1),component=Object(m.a)(c,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("c-modal",{attrs:{title:"Create Guild",event:"createGuild"}},[l("tform",{model:{value:e.form,callback:function(t){e.form=t},expression:"form"}}),e._v(" "),l("div",{attrs:{slot:"footer"},slot:"footer"},[l("c-btn",{nativeOn:{click:function(t){return e.submit.apply(null,arguments)}}},[e._v("Submit")])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);