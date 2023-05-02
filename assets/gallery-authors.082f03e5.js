import{_ as k}from"./gallery-lazy.bcb33703.js";import{a as v}from"./gallery-search.64a36aa9.js";import{c as S}from"./gallery.3d8d6c96.js";import{f as x}from"./gallery-findSubPageSource.b5dbe77b.js";import{_ as w,c as u,b as c,a as p,F as T,j as O,g as h,d as m,i as $,r as C,o as i,e as N,k as d,t as g,h as R,s as B}from"./lodash.21348ef7.js";import"./jquery.050764e9.js";import"./vue.runtime.esm-bundler.a995c875.js";import"./gallery-page-title.2c997460.js";import"./gallery-timeStringToSeconds.9aa0cb6a.js";import"./gallery-makeCoverUrl.8378190f.js";import"./content-script-helpers.e49fc91b.js";import"./howler.22814ddb.js";import"./index.abab9d81.js";import"./tippy.f48e1c74.js";const A={name:"aleAuthors",mixins:[S,x],data:function(){return{collectionSource:"pageCollection",listReady:!1,pageTitle:"Authors",pageSubTitle:null}},computed:{optionsOpenMargin:function(){return this.$store.state.searchOptOpenHeight?{marginBottom:0}:!1},galleryStyle:function(){return this.$store.state.searchOptOpenHeight?{overflow:"hidden",height:this.$store.state.searchOptOpenHeight-this.$refs.wrapper.offsetTop*2+"px"}:!1}},methods:{makeCollection:function(){const r=this;let s=[],a=1;_.eachRight(r.subPageSource.collection,function(e){e.authors&&_.each(e.authors,function(t){if(t.name&&t.url){let n=_.find(s,{name:t.name});if(n)return n.books.push(e.title||e.shortTitle),!1;{const l={name:t.name,url:t.url,added:a,books:[e.title||e.shortTitle],narrators:e.narrators,publishers:e.publishers,series:e.series};s.push(l),++a}}})}),_.reverse(s),this.$store.commit("prop",{key:"pageCollection",value:s}),this.updateListRenderingOptions(),this.listReady=!0},updateListRenderingOptions:function(){let r=this;const s={scope:[{active:!0,key:"name",tippy:"Search authors by name",weight:5},{active:!0,key:"books",tippy:"Search authors by book titles",weight:1},{active:!0,key:"narrators.name",tippy:"Search authors by narrators",weight:1},{active:!0,key:"publishers.name",tippy:"Search authors by publishers",weight:1},{active:!0,key:"series.name",tippy:"Search authors by series",weight:1}],filter:[{active:!1,type:"filterExtras",label:"Number of books",key:"books",range:[1,function(){let a=_.get(r.$store.state,r.collectionSource),e=_.maxBy(a,function(t){if(t.books)return t.books.length});return e?e.books.length:1}()],rangeMinDist:0,rangeSuffix:"",rangeMin:function(){return 1},rangeMax:function(){let a=_.get(r.$store.state,r.collectionSource),e=_.maxBy(a,function(t){if(t.books)return t.books.length});return e?e.books.length:1},condition:function(a){if(a.books){let e=this.range[0],t=this.range[1];return a.books.length>=e&&a.books.length<=t}}}],sort:[{active:!1,key:"randomize",label:"Randomize",type:"sortExtras",tippy:"Ignores sorting and randomizes instead unless there's an active search."},{type:"divider",key:"divider1"},{active:!0,current:!0,key:"added",label:"Added",type:"sort",tippy:'<div style="text-align: left;"><small>&#9650;</small> Old at the top <br><small style="display: inline-block; transform: rotate(180deg);">&#9650;</small> New at the top</div>'},{active:!0,current:!1,key:"name",label:"Name",type:"sort",tippy:"Sort by author's name"},{active:!1,current:!1,key:"amount",label:"Number of books",type:"sort"}]};this.$setListRenderingOpts(s)}}},z={key:0,class:"books-total",content:"Total number of books with this author."};function M(r,s,a,e,t,n){const l=v,y=$("router-link"),f=k,b=C("tippy");return r.listReady?(i(),u("div",{key:0,id:"ale-authors",class:"box-layout-wrapper",style:h(n.optionsOpenMargin),ref:"wrapper"},[c(l,{collectionSource:r.collectionSource,pageTitle:r.pageTitle,pageSubTitle:r.pageSubTitle},null,8,["collectionSource","pageTitle","pageSubTitle"]),p("div",{style:h(n.galleryStyle),class:"page-content"},[(i(!0),u(T,null,O(r.$store.getters.collection,(o,D)=>(i(),N(f,{class:"single-box","data-name":o.name,key:"authors:"+o.name},{default:d(()=>[c(y,{to:{name:"author",params:{author:o.url},query:{subPageSource:r.subPageSource.name}}},{default:d(()=>[p("h2",null,g(o.name),1),o.books&&o.books.length?R((i(),u("div",z,[B(g(o.books.length),1)])),[[b,{placement:"right"}]]):m("",!0)]),_:2},1032,["to"])]),_:2},1032,["data-name"]))),128))],4)],4)):m("",!0)}var W=w(A,[["render",M],["__scopeId","data-v-36fc16a6"]]);export{W as default};
