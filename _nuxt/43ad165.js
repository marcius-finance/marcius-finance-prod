(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{676:function(t,e,r){"use strict";var c=r(13),n=r(130),l=r(57),o=r(19),d=r(224),f=[],v=f.sort,_=o((function(){f.sort(void 0)})),h=o((function(){f.sort(null)})),m=d("sort");c({target:"Array",proto:!0,forced:_||!h||!m},{sort:function(t){return void 0===t?v.call(l(this)):v.call(l(this),n(t))}})},681:function(t,e,r){"use strict";r.r(e);r(50),r(223),r(42),r(17),r(86),r(101),r(37),r(676);var c={data:function(){return{nfts:[],search:""}},computed:{filtered:function(){var t=this.search.toLowerCase();return this.nfts.filter((function(i){return i.name.toLowerCase().includes(t)}))}},methods:{sort:function(){return this.nfts.sort((function(a,b){return a.rarity-b.rarity}))},color:function(t){switch(t){case 1:return"label__yellow";case 2:return"label__orange";case 3:return"label__red";default:return""}}},apollo:{nfts:r(129).e}},n=r(1),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("c-page",{attrs:{title:"NFT",subtitle:"Non-fungible token"}},[r("div",{staticClass:"columns mb"},[r("div",{staticClass:"column col-6 cols-md-12"},[r("c-input",{attrs:{placeholder:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]),t._v(" "),r("div",{staticClass:"columns"},t._l(t.filtered,(function(i,e){return r("div",{key:e,staticClass:"column col-4 col-md-6 col-sm-12 mb"},[r("NuxtLink",{staticClass:"c-hand",attrs:{to:"/nft/"+i._id,tag:"div"}},[r("c-card",[r("c-card-img",[r("img",{attrs:{src:i.image,alt:""}})]),t._v(" "),r("c-card-section",{staticClass:"pb0"},[i&&i.attributes&&i.attributes.length>1?r("div",[r("div",{staticClass:"label",class:t.color(i.attributes[0].value)},[t._v("Rarity\n                                "+t._s(i.attributes[0].value))]),t._v(" "),r("div",{staticClass:"label text-capitalize"},[t._v(t._s(i.attributes[1].value))])]):t._e(),t._v(" "),r("c-card-title",[t._v(t._s(i.name))])],1),t._v(" "),r("c-card-section",[r("c-btn",{attrs:{disabled:""}},[t._v("Trade")])],1)],1)],1)],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);