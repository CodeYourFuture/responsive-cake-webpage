(window.webpackJsonp=window.webpackJsonp||[]).push([["collection-route~editorial-route~explore-route~following-route~photos-route~search-photos-route~topi~b3c2ff5b"],{"35id":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("q1tI"),o=a.n(n),r=a("zPuE"),c=a("d8i8"),s=a("yQCG"),i=a("5aHv");var l=({photoId:e,children:t})=>{const a=Object(s.e)();return t(Object(c.a)(i.c.EditPhoto({value:{photoId:e}}))(a))},d=a("zrLP");var u=({photoId:e,type:t,className:a})=>o.a.createElement(l,{photoId:e},e=>o.a.createElement(d.a,{className:a,buttonType:"default"===t?r.a.Outline:r.a.Overlay,buttonSize:"small",to:e},"Edit"))},"4O7v":function(e,t,a){e.exports={button:"_3dBbn",addIcon:"_2rdbO"}},AvAO:function(e,t,a){"use strict";var n=a("GBJA");t.a=Object(n.a)("M14 3h4v26h-4zM29 14v4h-26v-4z")},CZna:function(e,t,a){e.exports={colorWhite:"#fff",colorPink:"#f15151",colorDarkPink:"#e04c4c",button:"_1EJJ-",liked:"_3hx1p",likeIcon:"BWSrD",likeIconLiked:"_1O_YD"}},CdAG:function(e,t,a){"use strict";a.d(t,"a",(function(){return le}));var n=a("mrSG"),o=a("SDew"),r=a("q1tI"),c=a.n(r),s=a("vosR"),i=a("ezCO"),l=a("OM6L"),d=a("jRy8"),u=a("QK6j"),m=a("XJg7"),b=a("NbrK"),h=a("HYc2"),p=a("QH2T"),O=a("mjVK"),j=a("1Fu1"),v=a("l/G7"),k=a("k0lW"),f=a("EqpS"),g=a("/MKj"),E=a("x4cj"),I=a("Tm5Z"),w=a("pq3u"),_=a("wOEu"),y=a("Jekn"),C=a("+nE3"),S=a("zT06"),L=a("kK5m"),N=a("GI5D"),B=a("TSYQ"),M=a.n(B),D=a("z6DF"),F=a("6l12"),q=a("IsKo"),T=a("QZHf"),U=a("wmOD"),x=a("A75h"),z=a("Wdkd"),A=a("M9j0"),G=a("KPJC"),P=a("35id"),W=a("dkli"),V=a("SqvM"),J=a("YqFJ"),K=a("5dpl"),R=a("SHX9"),H=a.n(R);const Y=H.a.showOnHover;var Q=a("QFtp");const Z=Object(Q.unionize)({EditButton:Object(Q.ofType)(),Sponsored:Object(Q.ofType)()});var X=a("SgDT"),$=a.n(X);class ee extends r.Component{constructor(){super(...arguments),this.renderOverlay=()=>{const e=M()($.a.overlayBackground,this.checkShouldRevealUserLinkOnHover()&&Y);return c.a.createElement("div",{className:$.a.overlay},c.a.createElement("div",{className:e}),c.a.createElement("div",{className:$.a.overlayForeground},this.renderTopActions(),this.renderBottomActions()))}}checkShouldRevealUserLinkOnHover(){const{routeData:e,maybeSponsorship:t}=this.props,a=Object(T.c)(z.a.Union.is.Editorial,z.a.Union.is.Search,z.a.Union.is.LandingPage,z.a.Union.is.Topic),n=Object(D.a)(a);return!Object(o.k)(t,d.A)||n(e)}renderUserLink(){const{routeData:e,photo:t}=this.props;return c.a.createElement("div",{className:M()($.a.userLinkContainer,this.checkShouldRevealUserLinkOnHover()&&Y)},c.a.createElement(K.b,{isAvatarVisible:!0,type:"alt",photo:t,renderNonSponsoredSecondaryLabel:({className:t,user:a})=>a.for_hire&&!1===z.a.Union.is.Users(e)&&c.a.createElement(K.a,{className:M()($.a.userLinkSecondaryLabel,t),userId:a.id})}))}renderTopActions(){const{maybeSponsorship:e,photoId:t,authUserOption:a,photo:n}=this.props,r=Object(o.k)(a,d.j(e=>e.id===n.userId))?d.I(Z.EditButton({})):Object(o.k)(e,d.B(e=>Z.Sponsored({sponsorship:e})));return c.a.createElement("div",{className:M()($.a.actionsTop,Y)},Object(o.k)(r,d.B(e=>Z.match(e,{Sponsored:({sponsorship:e})=>c.a.createElement("div",{className:M()($.a.enablePointerEvents,$.a.sponsorLabelContainer)},c.a.createElement(J.a,{sponsorship:e,photoUserId:n.userId})),EditButton:()=>c.a.createElement(P.a,{photoId:t,type:"alt",className:$.a.editPhotoButton})})),d.K),c.a.createElement("div",{className:$.a.actionsTopRight},c.a.createElement(W.a,{type:"alt",photoId:t,className:$.a.likeButton}),c.a.createElement(A.a,{type:"alt",photoId:t,className:$.a.addToCollectionButton})))}renderBottomActions(){const{photoId:e}=this.props;return c.a.createElement("div",{className:$.a.actionsBottom},this.renderUserLink(),c.a.createElement("div",{className:M()(Y,$.a.downloadButtonContainer)},c.a.createElement(G.a,{type:"alt",photoId:e,className:$.a.downloadButton})))}render(){const{device:e,isEnhanced:t,children:a}=this.props,n=t&&Object(x.c)(d.w(e));return c.a.createElement(V.a,{behind:a,overlayClassName:$.a.overlayContainer},n&&this.renderOverlay())}}const te=Object(w.d)()(()=>{const e=Object(F.a)(d.q);return(t,a)=>{const n=Object(y.a)(t,a.photoId);return{photo:n,maybeSponsorship:e(n.sponsorship),authUserOption:Object(U.g)(t),device:Object(x.d)(t)}}});var ae=Object(o.k)(ee,Object(g.c)(te),_.b,q.withIsEnhanced);const ne=Object(w.d)()(()=>{const e=Object(I.a)();return(t,a)=>({photo:Object(y.a)(t,a.photoId),showHiddenFromProfileOverlay:e(t,{photoId:a.photoId,routeData:a.routeData})})});var oe=Object(o.k)(({children:e,photo:t,showHiddenFromProfileOverlay:a})=>{const n=Object(o.k)(t,d.r(C.d),d.B(e=>e.evaluation_status),d.L);if("dmca_requested"===n)return c.a.createElement(S.a,null,e);{const r=Object(o.k)(n,L.b,d.B(e=>t=>c.a.createElement(L.a,{overlayClassName:H.a.overlayBase,status:e,withBackground:!1===a},t)),d.t(()=>e=>c.a.createElement(ae,{photoId:t.id},e))),s=a?d.I(e=>c.a.createElement(N.a,{overlayClassName:H.a.hideOnHover},e)):d.E,i=l.d([s,d.I(r)]),u=Object(o.k)(e,Object(E.a)(i));return c.a.createElement("div",{className:H.a.container},u)}},Object(g.c)(ne),_.b);const re=e=>{var{photoId:t,isVisible:a,children:o}=e,r=Object(n.d)(e,["photoId","isVisible","children"]);const s=c.a.createElement(k.a,Object.assign({photoId:t,testAttr:p.q.MULTI_COL_IMG,isVisible:a},r));return c.a.createElement(j.a,null,c.a.createElement(f.a,{photoId:t},c.a.createElement(v.a,Object.assign({photoId:t},Object(O.a)(p.q.MULTI_COL_FIGURE)),a?c.a.createElement(oe,{photoId:t},s):s)))};re.displayName="MasonryPhoto";const ce=Object(o.k)(re,Object(h.a)({rootMargin:b.j(200)}),e=>c.a.memo(e)),se=u.e.match({Two:()=>d.E,Three:()=>d.I(Object(O.a)(p.m.COUNT_THREE))}),ie=()=>[],le=Object(i.a)(e=>{var{photos:t,getFixedPlacementsForLayout:a=ie,columnCount:i,grid:b,enqueueUpdateFunction:h}=e,p=Object(n.d)(e,["photos","getFixedPlacementsForLayout","columnCount","grid","enqueueUpdateFunction"]);const O=Object(r.useMemo)(()=>({enqueueUpdateFunction:h}),[h]),j=c.a.useMemo(()=>Object(o.k)(t,l.z((e,t)=>({key:t.id,width:t.width,height:t.height,element:c.a.createElement(ce,{photoId:t.id,index:e,grid:b,linkProps:O,shouldDetectVisibility:Object(s.b)(e)})}))),[b,O,t]),v=c.a.useMemo(()=>{const e=u.a.Masonry({columns:i});return[...a(e),...j]},[i,a,j]);return c.a.createElement(m.a,Object.assign({columnGutter:b.columnGutter,items:v,dataTestAttribute:Object(o.k)(se(i),d.L),columnCount:u.f(i)},p))})},DKGh:function(e,t,a){e.exports={colorWhite:"#fff",container:"_3Dfms"}},EqpS:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("SDew"),o=a("q1tI"),r=a.n(o),c=a("/MKj"),s=a("jRy8"),i=a("Jekn"),l=a("VxeJ");var d=Object(n.k)(({children:e,photo:t})=>{const a=Object(n.k)(s.q(t.sponsorship),s.B(e=>e.impression_urls)),o=Object(n.k)(a,s.B(e=>e.map(e=>r.a.createElement(l.a,{key:e,url:e}))));return Object(n.k)(o,s.B(t=>r.a.createElement("div",null,e,t)),s.t(()=>r.a.createElement(r.a.Fragment,null,e)))},Object(c.c)((e,t)=>({photo:Object(i.a)(e,t.photoId)})))},FQeB:function(e,t,a){e.exports={container:"_2iTzD",containerWithBackground:"_1Iezi"}},GI5D:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("q1tI"),o=a.n(n),r=a("GBJA");var c=Object(r.a)("M13.6 9.8l-2.9-2.9c1.6-.6 3.4-.9 5.3-.9 6.7 0 12.4 4.1 14.7 10-1 2.5-2.6 4.7-4.6 6.3l-3.9-3.9c.3-.8.5-1.6.5-2.4 0-3.7-3-6.7-6.7-6.7-.9 0-1.7.2-2.4.5zm2.2 2.2l4.2 4.2V16c0-2.2-1.8-4-4-4h-.2zM4.4 4L28 27.6l-1.7 1.7-3.9-3.9-.6-.6C20 25.6 18.1 26 16 26 9.3 26 3.6 21.9 1.3 16c1-2.6 2.8-4.9 5-6.7l-.6-.6-3-3L4.4 4zm4.9 12c0 3.7 3 6.7 6.7 6.7 1.1 0 2-.3 2.9-.7l-2.1-2.1c-.2.1-.5.1-.8.1-2.2 0-4-1.8-4-4 0-.3 0-.6.1-.9l-2.1-2c-.4.9-.7 1.8-.7 2.9z"),s=a("SqvM"),i=a("iAiG"),l=a.n(i);var d=({overlayClassName:e,children:t})=>o.a.createElement(s.a,{behind:t,overlayClassName:e},o.a.createElement("div",{className:l.a.hiddenFromProfileOverlay},o.a.createElement(c,{className:l.a.hiddenFromProfileOverlayIcon}),o.a.createElement("span",null,"Hidden from profile")))},HYc2:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("mrSG"),o=a("fadw"),r=a("SDew"),c=a("q1tI"),s=a.n(c),i=a("eHHv"),l=a("uNqx");const d=({rootMargin:e,threshold:t})=>a=>{var r;return(r=class extends c.Component{constructor(){super(...arguments),this.state={isVisible:!1},this.handleChange=({isIntersecting:e})=>{const t=e;this.state.isVisible!==t&&this.setState({isVisible:t})}}render(){const r=this.props,{shouldDetectVisibility:c}=r,i=Object(n.d)(r,["shouldDetectVisibility"]);return c?s.a.createElement(o.a,{onChange:this.handleChange,rootMargin:e,threshold:t},s.a.createElement(a,Object.assign({},i,{isVisible:this.state.isVisible}))):s.a.createElement(a,Object.assign({},i,{isVisible:!0}))}}).displayName=`WithIsVisible(${Object(l.a)(a)})`,r},u=(...e)=>t=>Object(r.k)(t,i.b,d(...e))},KPJC:function(e,t,a){"use strict";a.d(t,"a",(function(){return H}));var n=a("mrSG"),o=a("m2xi"),r=a.n(o),c=a("TSYQ"),s=a.n(c),i=a("SDew"),l=a("eVnM"),d=a("B/Be"),u=a("15Rw"),m=a("q1tI"),b=a.n(m),h=a("/MKj"),p=a("dYt6"),O=a("b2r9"),j=a("pq3u"),v=a("2Fwo"),k=a("063O"),f=a("wicO"),g=a("GBJA");var E=Object(g.a)("M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"),I=a("QH2T"),w=a("Liqa"),_=a("OM6L"),y=a("jRy8"),C=a("D6yk"),S=a("mjVK"),L=a("47UL"),N=a("4YUS"),B=a("IVTL"),M=a("9XKv"),D=a("Jekn"),F=a("4pFq"),q=a("zPuE"),T=a("sCUw"),U=a("K8WX"),x=a("g38w"),z=a.n(x);const A=w.b,G=Object(B.b)()({type:"default",showSizesDropdown:!1}),P=Object(B.e)()([{size:"small",width:640},{size:"medium",width:1920},{size:"large",width:2400}]),W=e=>{var{photo:t,width:a}=e,o=Object(n.d)(e,["photo","width"]);const r=((e,t)=>{const a=e.width/t;return Math.trunc(e.height/a)})(t,a);return b.a.createElement("li",null,b.a.createElement(U.e,Object.assign({},o,{className:s()(z.a.link,o.className)}),o.text," ",b.a.createElement("span",{className:z.a.dimensionsText},"(",a,"x",r,")")))},V=Object(i.k)(T.f(),y.g(e=>e.should_enable_workaround_for_ios_download_request_blocking),y.t(()=>L.b())),J=e=>{const t=C.F(window,"blur"),a=C.F(window,"focus"),n=Object(i.k)(C.q(Object(i.k)(t,C.D()),Object(i.k)(a,C.D())),C.N(),C.T(Object(i.k)(C.h,C.D())));return Object(i.k)(n,C.T(C.V(e)))},K=(e,t)=>{const a=Object(k.a)(),[n,o]=Object(l.a)(i.i),r=Object(d.a)(()=>Object(i.k)(o,V?C.S(J):i.i));return Object(u.a)(r,()=>{a(Object(O.u)(t,e));const n=F.a.SayThanks({photoId:t.id});a(O.a.ShowFixedBottomCard({card:n}))}),n},R=Object(j.c)()((e,t)=>({photo:Object(D.a)(e,t.photoId)}));var H=Object(i.k)(({photo:e,type:t,className:a,label:n,showSizesDropdown:o})=>{const c=K("small",e),i=K("medium",e),l=K("large",e),d=K("original",e),u=e=>{switch(e){case"small":return c;case"medium":return i;case"large":return l}},h=Object(m.useMemo)(()=>{switch(t){case"default":return q.a.Outline;case"alt":return q.a.Overlay;case"green":return q.a.Confirm}},[t]),O=Object(m.useMemo)(()=>Object(q.b)({type:h,size:"small"}),[h]),j=A?"/a/img/tests/transparent_squarespace.png":Object(p.a)({force:"true"})(e.links.download),v=Object.assign({rel:"nofollow",download:!0,target:"_blank",className:M.a.UNTRACKED_LINK_CLASS_NAME},!1===Object(N.b)(e.sponsorship)?Object(S.a)(I.n):{}),k=b.a.createElement("a",Object.assign({},v,{className:s()(O,z.a.downloadButton,o&&z.a.downloadButtonShareBorder,a,v.className),title:"Download photo",href:j,onClick:d}),Object(N.b)(n)?b.a.createElement("span",{className:z.a.label},n):b.a.createElement(E,{className:s()(z.a.downloadIcon)}));if(!1===o)return k;{const t=P.filter(({width:t})=>t<e.width);return b.a.createElement("div",{className:z.a.buttonsContainer},k,h===q.a.Confirm&&b.a.createElement("div",{className:z.a.greenButtonSeparator}),b.a.createElement(U.k,{id:U.i.DownloadButton},b.a.createElement(U.j,{className:s()(O,z.a.dropdownButton,"outline"===h&&z.a.dropdownButtonOutline),title:"Choose your download size"},b.a.createElement(f.a,{className:z.a.chevronDownIcon})),b.a.createElement(U.b,{bgColor:"black",menuPosition:"top-right",arrowPropsOption:U.m,className:z.a.menu},b.a.createElement("ul",{className:z.a.list},t.map(({size:t,width:a})=>b.a.createElement(W,Object.assign({key:t,width:a,photo:e,href:Object(p.a)({w:a})(j),onClick:u(t),text:r()(t)},v)))),_.u(t)&&b.a.createElement(b.a.Fragment,null,b.a.createElement(U.a,null),b.a.createElement("ul",{className:z.a.list},b.a.createElement(W,Object.assign({photo:e,width:e.width,href:j,onClick:d,text:"Original Size"},v)))))))}},Object(h.c)(R),e=>Object(v.a)(e,G))},M9j0:function(e,t,a){"use strict";a.d(t,"a",(function(){return B}));var n=a("TSYQ"),o=a.n(n),r=a("SDew"),c=a("q1tI"),s=a.n(c),i=a("/MKj"),l=a("b2r9"),d=a("pq3u"),u=a("2Fwo"),m=a("AvAO"),b=a("4YUS"),h=a("IVTL"),p=a("wmOD"),O=a("Jekn"),j=a("zPuE"),v=a("zrLP"),k=a("d8i8"),f=a("OM6L"),g=a("jRy8"),E=a("5aHv"),I=a("f7R7");const w=({isLoggedIn:e,photo:t,photographerId:a})=>{const n=Object(I.b)({isLoggedIn:e,modal:()=>E.c.AddToCollection({value:{step:E.a.AddToCollection,photoId:t.id}}),loginAction:()=>E.b.AddToCollection({value:{photoId:t.id,userId:a}})});return Object(k.a)(n)},_=(e,t)=>Object(r.k)(g.q(t.current_user_collection_ids),g.j(f.u),t=>t?j.a.Confirm:e);var y=a("4O7v"),C=a.n(y);const S=Object(h.b)()({type:"default"}),L=Object(d.c)()((e,t)=>({photo:Object(O.a)(e,t.photoId),isLoggedIn:Object(p.j)(e)})),N=Object(d.b)()({trackCollectionButtonClick:l.o});var B=Object(r.k)(({photo:e,trackCollectionButtonClick:t,type:a,className:n,isLoggedIn:r,handleClick:c})=>{const i="default"===a?j.a.Outline:j.a.Overlay;return s.a.createElement(v.a,{className:o()(C.a.button,n),buttonType:_(i,e),buttonSize:"small",title:"Add to collection",to:w({isLoggedIn:r,photo:e,photographerId:e.userId}),onClick:()=>{t(e.id),Object(b.b)(c)&&c()}},s.a.createElement(m.a,{className:C.a.addIcon}))},Object(i.c)(L,N),e=>Object(u.a)(e,S))},SHX9:function(e,t,a){e.exports={transitionSpeedBase:"0.1s",transitionTimingFunction:"ease-in-out",container:"_6IG7",showOnHover:"_3q8hD",hideOnHover:"_1_rUw"}},SgDT:function(e,t,a){e.exports={colorWhite:"#fff",enablePointerEvents:"_1-fhO",overlayContainer:"_1-uEh",overlay:"_3xAjU",overlayBackground:"_1om9S",overlayForeground:"MlXUi",actionsTop:"_2QkfU",actionsTopRight:"_27NdB",actionsBottom:"_12y9E",editPhotoButton:"_3SH9f _1-fhO",addToCollectionButton:"_3jNQs _1-fhO",likeButton:"_1iSAa _1-fhO",userLinkContainer:"_2Lqh- _1-fhO",userLinkSecondaryLabel:"wlOve",downloadButtonContainer:"JMH5b",downloadButton:"VUgI1 _1-fhO",sponsorLabelContainer:"_1J2I3"}},Tm5Z:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("SDew"),o=a("G4qV"),r=a("jRy8"),c=a("wmOD"),s=a("Jekn"),i=a("+nE3"),l=a("Wdkd");const d=()=>Object(o.a)((e,{photoId:t})=>Object(s.a)(e,t),c.g,(e,{routeData:t})=>t,(e,t,a)=>Object(n.k)(t,r.B(e=>l.e(e)(a)),r.u(!1))&&i.c(e)&&!1===e.show_on_profile)},YqFJ:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("q1tI"),o=a.n(n),r=a("55Ip"),c=a("C8EU"),s=a("Ja2L"),i=a("Wdkd"),l=a("98Z2"),d=a("XoIJ"),u=a("QFtp");const m=a.n(u)()({Solo:Object(u.ofType)(),Collab:Object(u.ofType)()});var b=a("bV+o"),h=a.n(b);var p=({sponsorship:e,photoUserId:t})=>{const a=Object(c.a)(e=>Object(s.a)(e,t)),u=(({userId:e,sponsorship:t})=>t.sponsor_id!==e?m.Collab():m.Solo())({sponsorship:e,userId:a.id}),b=Object(n.useMemo)(d.b,[]),p=Object(c.a)(e=>b(e,a.id));return o.a.createElement("div",{className:h.a.sponsoredContainer},o.a.createElement(r.a,{to:i.b.brands({}),className:h.a.sponsoredLabelLink},"Sponsored"),m.is.Collab(u)?o.a.createElement("div",{className:h.a.collaboratorContainer},o.a.createElement("span",{className:h.a.collaboratorCopy},"Collaboration with"),o.a.createElement(r.a,{to:p,className:h.a.collaboratorPersonalLink},o.a.createElement(l.c,{size:16,userId:a.id,doNotWrapInALink:!0}),o.a.createElement("span",{className:h.a.collaboratorFullname},a.name))):null)}},"bV+o":function(e,t,a){e.exports={colorWhite:"#fff",resetAnchor:"_2WvKc",truncate:"_1ByhS",transitionSpeedBase:"0.1s",metaText:"_3qgtt",link:"_2sUYm",sponsoredContainer:"AfzaN",sponsoredLabelLink:"wwCnV _2WvKc _3qgtt _2sUYm",collaboratorContainer:"xT40y _3qgtt _1ByhS",collaboratorCopy:"_33_V1",collaboratorPersonalLink:"_1avZL _2WvKc",collaboratorFullname:"_1G9I5 wwCnV _2WvKc _3qgtt _2sUYm"}},biFG:function(e,t,a){e.exports={colorWhite:"#fff",transitionSpeedBase:"0.1s",container:"_3aQD2",icon:"_1MUHG",message:"_3Nkoi",link:"_2YrsD",fillFormLink:"_3PP_d _2YrsD",whyFillFormLink:"_3646i _2YrsD"}},dkli:function(e,t,a){"use strict";a.d(t,"a",(function(){return D}));var n=a("TSYQ"),o=a.n(n),r=a("SDew"),c=a("q1tI"),s=a.n(c),i=a("/MKj"),l=a("b2r9"),d=a("acyj"),u=a("ZfPj"),m=a("d8i8"),b=a("pq3u"),h=a("2Fwo"),p=a("GBJA");var O=Object(p.a)("M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"),j=a("cHeK"),v=a("uFXZ"),k=a("JzW6"),f=a("4YUS"),g=a("IVTL"),E=a("wmOD"),I=a("Jekn"),w=a("zPuE"),_=a("5aHv"),y=a("FXv3"),C=a("zrLP"),S=a("CZna"),L=a.n(S);const N=Object(g.b)()({type:"default"});class B extends c.Component{componentWillUnmount(){Object(f.b)(this.likesSubscription)&&this.likesSubscription.unsubscribe()}isLikedModifier(){const{photo:e,type:t}=this.props,a="default"===t?w.a.Outline:w.a.Overlay;return e.liked_by_user?w.a.Base:a}buildLoggedInClickHandler(){const{photo:e,dispatch:t}=this.props,a=e.liked_by_user,n=a?j.a.photos.unlike:j.a.photos.like,o=a?l.w:l.v,c=a?l.B:l.e,s=Object(r.k)(n({photoId:e.id}),v.a(d.a),k.l(3));return()=>{t(c(e.id)),t(o(e)),this.likesSubscription=s.subscribe(Object(u.d)({dispatch:t}))}}render(){const{photo:e,className:t,isLoggedIn:a,dispatch:n}=this.props,r=Object(g.b)()({className:o()(L.a.button,e.liked_by_user&&L.a.liked,t),buttonType:this.isLikedModifier(),title:"Like photo",buttonSize:"small",children:s.a.createElement(O,{className:o()(L.a.likeIcon,e.liked_by_user&&L.a.likeIconLiked)})});return a?s.a.createElement(y.a,Object.assign({},r,{tag:"button",onClick:this.buildLoggedInClickHandler(),type:"button"})):s.a.createElement(C.a,Object.assign({},r,{to:Object(m.a)(_.c.Login({value:_.b.Like({value:{photoId:e.id,userId:e.userId}})})),onClick:()=>{n(l.v(e))}}))}}const M=Object(b.c)()((e,t)=>({photo:Object(I.a)(e,t.photoId),isLoggedIn:Object(E.j)(e)}));var D=Object(r.k)(B,Object(i.c)(M),e=>Object(h.a)(e,N))},ezCO:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("SDew"),o=a("q1tI"),r=a.n(o),c=a("i8i4"),s=a("uNqx"),i=a("D6yk");const l=(e,{dueTime:t}={dueTime:1e3})=>{var a;const l=`ProvideUpdatesDebouncer(${Object(s.a)(e)})`;return(a=class extends o.Component{constructor(e){super(e),this.updateFunctionsDebounceSubject=new i.e,this.enqueueUpdateFunction=e=>this.updateFunctionsDebounceSubject.next(e),this.componentWillUnmountSubject=new i.e;const a=this.componentWillUnmountSubject.asObservable(),o=Object(n.k)(this.updateFunctionsDebounceSubject,i.l(t),i.O(e=>()=>{e.forEach(e=>e())}));Object(n.k)(o,i.mb(a)).subscribe(c.unstable_batchedUpdates)}componentWillUnmount(){this.componentWillUnmountSubject.next(),this.componentWillUnmountSubject.complete()}render(){return r.a.createElement(e,Object.assign({},Object.assign({enqueueUpdateFunction:this.enqueueUpdateFunction},this.props)))}}).displayName=l,a}},g38w:function(e,t,a){e.exports={resetBtn:"_3d86A",resetList:"_2Y-QM _1eXFm",colorGreen:"#3cb46e",downloadButton:"_1B083 _3d86A",downloadButtonShareBorder:"_22Rl1",downloadIcon:"Apljk",label:"_2Aga-",buttonsContainer:"_2vsJm",dropdownButton:"_3fdL5 _3d86A",chevronDownIcon:"fpkc9",dropdownButtonOutline:"ZI4uy",greenButtonSeparator:"_4422_",menu:"_12nqk",list:"_3-4mp _2Y-QM _1eXFm",link:"_1C5V3",dimensionsText:"_2S3TM"}},iAiG:function(e,t,a){e.exports={hiddenFromProfileOverlay:"qObJz",hiddenFromProfileOverlayIcon:"_2Vb8Z"}},k0lW:function(e,t,a){"use strict";a.d(t,"a",(function(){return Z}));var n=a("mrSG"),o=a("q1tI"),r=a.n(o),c=a("wRGn"),s=a("C8EU"),i=a("vnIM"),l=a("Jekn"),d=a("SDew"),u=a("jW5K"),m=a.n(u),b=a("bB8w"),h=a("DYbG"),p=a("jRy8"),O=a("4YUS"),j=a("+2WB"),v=a("dyzQ");const k=e=>e();var f=e=>{var{enqueueUpdateFunction:t,photoId:a,children:c}=e,s=Object(n.d)(e,["enqueueUpdateFunction","photoId","children"]);const i=Object(o.useRef)(null),[,l]=Object(b.a)(v.a),u=Object(o.useCallback)(()=>{const e=p.q(i.current),n=Object(d.k)(e,p.g(e=>e.currentSrc),p.k(h.i.is),p.L);Object(d.k)(t,p.q,p.u(k))(()=>{Object(O.b)(n)&&l({photoId:a,currentSrc:n})})},[t,a,l]),f=u;return m()(()=>{Object(d.k)(p.q(i.current),p.j(({complete:e})=>e))&&u()}),r.a.createElement(j.a,Object.assign({photoId:a},s),c({onLoad:f,ref:i}))},g=a("x4cj"),E=a("OM6L"),I=a("rnhN"),w=a("mjVK"),_=a("RC4B"),y=a("zCdt"),C=a("vosR"),S=a("OeG+");var L=a("POFe"),N=a("NbrK"),B=a("PCiO"),M=a("B/0t"),D=a("QK6j"),F=a("6mxo"),q=a.n(F);const T=2*N.h({key:"gutter",styles:q.a}),U=N.h({key:"maxWidth",styles:q.a}),x=U-T,z=({columns:e,columnGutter:t})=>t*(e-1),A=({columns:e,gridWidth:t,columnGutter:a})=>(t-z({columnGutter:a,columns:e}))/e,G=({columns:e,columnGutter:t})=>{const a=z({columnGutter:t,columns:e}),n=T+a,o=N.k(n);return N.b(N.d(N.b(N.n(N.f(1),o)),N.i(e)))},P=N.c(N.k(M.f)),W=N.c(N.k(M.d)),V=N.c(N.k(U+15)),J=[{width:N.f(1)}],K=e=>D.b.match({List:()=>(e=>[{width:G({columns:2,columnGutter:e})}])(e),Masonry:()=>J}),R=e=>[{mediaCondition:V,width:N.k(A({columns:3,gridWidth:x,columnGutter:e}))},{mediaCondition:W,width:G({columns:3,columnGutter:e})},{mediaCondition:P,width:G({columns:2,columnGutter:e})}],H=x,Y=({photo:e,mobileLayout:t,columnGutter:a})=>{const n=(e=>t=>{const a=K(e)(t);return[...R(e),...a]})(a)(t),o=Object(B.f)(n),r=Math.min(e.width,100),c=Math.min(e.width,H);var s;return{sizes:o,srcSet:Object(B.c)({baseUrl:e.urls.raw,interval:100,lowerBound:r,originalWidth:e.width,upperBound:c}),src:(s=e.urls.raw,Object(L.b)(s)({w:1e3,q:80}))}},Q=Object(o.memo)(({index:e,grid:t,testAttr:a,photo:n,onLoad:c,imgRef:s,containerClassName:i,isVisible:l})=>{const u=Object(o.useMemo)(()=>(({index:e})=>{if(Object(C.b)(e))return e===C.a?{onFirstLoad:S.a}:{};return{"data-perf":"eager-loaded-img"}})({index:e}),[e]),[m,b]=Object(o.useState)(!0),h=Object(o.useMemo)(()=>{const e=[p.q(c),p.I(e=>{m&&Object(O.b)(u.onFirstLoad)&&(b(!1),u.onFirstLoad(e))})];return Object(d.k)(e,E.d,g.b)},[u,m,c]),j=Object(o.useMemo)(()=>l?p.I(Object.assign(Object.assign(Object.assign({alt:Object(d.k)(p.q(n.alt_description),p.L),onLoad:h},Y(Object.assign({photo:n},t))),{imgRef:s,itemProp:"thumbnailUrl"}),Object(I.b)(u,"onFirstLoad"))):p.E,[l,n,h,t,s,u]),v=Object(o.useMemo)(()=>_.e(n),[n]),k=Object(o.useMemo)(()=>({width:n.width,height:n.height}),[n.width,n.height]);return r.a.createElement(y.a,Object.assign({},Object(w.a)(a),{aspectRatio:k,placeholderConfig:v,responseOption:j,containerClassName:i}))}),Z=e=>{var{photoId:t,linkProps:a,index:o}=e,d=Object(n.d)(e,["photoId","linkProps","index"]);const u=Object(s.a)(e=>Object(l.a)(e,t)),m=Object(c.a)({index:o,photo:u}),b=!1===i.c(m),h=Object.assign(Object.assign({},d),{index:o,photo:m});return b?r.a.createElement(f,Object.assign({photoId:m.id},a),({ref:e,onLoad:t})=>r.a.createElement(Q,Object.assign({},h,{imgRef:e,onLoad:t}))):r.a.createElement(Q,Object.assign({},h))}},kK5m:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return k}));var n=a("mrSG"),o=a("TSYQ"),r=a.n(o),c=a("q1tI"),s=a.n(c),i=a("SqvM"),l=a("1AVd"),d=a("tE3j"),u=a("kMwp"),m=a("nJbZ"),b=a.n(m);var h=({status:e})=>{const t=(()=>{switch(e){case"dmca_approved":case"dmca_pending_review":return{label:"DMCA in Review",href:l.b}}})();return s.a.createElement("a",{href:t.href,className:b.a.container},s.a.createElement(u.a,null,s.a.createElement(d.a,{className:b.a.icon}),t.label))},p=a("FQeB"),O=a.n(p);var j=e=>{var{overlayClassName:t,children:a,withBackground:o}=e,c=Object(n.d)(e,["overlayClassName","children","withBackground"]);return s.a.createElement(i.a,{behind:a,overlayClassName:t},s.a.createElement("div",{className:r()(O.a.container,o&&O.a.containerWithBackground)},s.a.createElement(h,Object.assign({},c))))},v=a("jRy8");const k=e=>{switch(e){case"dmca_pending_review":case"dmca_approved":return v.I(e);case"in_review":case"approved":case void 0:return v.E}}},kMwp:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("q1tI"),o=a.n(n),r=a("DKGh"),c=a.n(r);var s=({children:e})=>o.a.createElement("div",{className:c.a.container},e)},"l/G7":function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var n=a("mrSG"),o=a("SDew"),r=a("I7gL"),c=a("q1tI"),s=a.n(c),i=a("/MKj"),l=a("aOk/"),d=a("uDtJ"),u=a("pq3u"),m=a("2Fwo"),b=a("wOEu"),h=a("OM6L"),p=a("jRy8"),O=a("IVTL"),j=a("Jekn"),v=a("+nE3"),k=a("oWYe"),f=a("eSEV"),g=a("ogve"),E=a.n(g);const I=Object(O.b)()({extraInfoClassname:void 0}),w=e=>s.a.createElement("div",{className:E.a.gutterItem},e),_=Object(u.c)()((e,t)=>({photo:Object(j.a)(e,t.photoId),shouldShowExtraInfo:Object(k.a)(e,t.routeData)}));var y=Object(o.k)(e=>{var{extraInfoClassname:t,photo:a,shouldShowExtraInfo:c,children:i,photoId:u,dispatch:m,routeData:b}=e,O=Object(n.d)(e,["extraInfoClassname","photo","shouldShowExtraInfo","children","photoId","dispatch","routeData"]);return s.a.createElement("figure",Object.assign({itemProp:"image",itemScope:!0,itemType:"https://schema.org/ImageObject"},O),c?s.a.createElement("div",{className:E.a.gutterContainer},w(i),(({photo:e,extraInfoClassname:t})=>{return Object(o.k)(Object(d.c)({render:e=>s.a.createElement("div",{className:t},e),renderItem:w})([{key:"tags",maybeEl:v.b(e)?(a=e.tags,Object(o.k)(a,r.e,p.B(()=>s.a.createElement(f.a,{tags:Object(o.k)(a,h.L(3)),emplacement:l.a.PhotoSearchResult})))):p.E}]),p.K);var a})({photo:a,extraInfoClassname:t})):i)},Object(i.c)(_),b.b,e=>Object(m.a)(e,I))},nJbZ:function(e,t,a){e.exports={resetAnchor:"_2WvKc",colorWhite:"#fff",container:"_2mv_8 _2WvKc",icon:"_1196O"}},oWYe:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return m}));var n=a("QZHf"),o=a("QK6j"),r=a("wmOD"),c=a("A75h"),s=a("zPcV"),i=a.n(s),l=a("Wdkd");const d=({layoutMode:e})=>o.b.match({Masonry:()=>i.a.showUntilXsMax,List:()=>i.a.showFromSmMin})(e),u=c.a.match({Phone:()=>o.b.Masonry(),Tablet:()=>o.b.List(),Desktop:()=>o.b.List()}),m=(e,t)=>!1===Object(r.j)(e)&&Object(n.c)(l.a.Union.is.Search,l.a.Union.is.LandingPage)(t)},ogve:function(e,t,a){e.exports={fontWeightNormal:"_27Bp2",colorGrey700:"#767676",gutter:"13px",gutterItem:"_3A74U",gutterContainer:"_232xU"}},tE3j:function(e,t,a){"use strict";var n=a("GBJA");t.a=Object(n.a)("M16 2.7C8.6 2.7 2.7 8.6 2.7 16s6 13.3 13.3 13.3c7.4 0 13.3-6 13.3-13.3S23.4 2.7 16 2.7zm0 24c-5.9 0-10.7-4.8-10.7-10.7S10.1 5.3 16 5.3 26.7 10.1 26.7 16 21.9 26.7 16 26.7zm.7-10.4l6 3.6-1 1.6-7-4.2v-8h2v7z")},vosR:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return o}));const n=3,o=e=>e>=n},zT06:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a("TSYQ"),o=a.n(n),r=a("q1tI"),c=a.n(r),s=a("1AVd"),i=a("GBJA");var l=Object(i.a)("M16 2.7L1.3 28h29.3L16 2.7zM17.3 24h-2.7v-2.7h2.7V24zm-2.6-5.3v-5.3h2.7v5.3h-2.7z"),d=a("zPuE"),u=a("Wdkd"),m=a("SqvM"),b=a("0Jzb"),h=a("biFG"),p=a.n(h);var O=({children:e})=>c.a.createElement(m.a,{behind:e},c.a.createElement("div",{className:p.a.container},c.a.createElement("div",null,c.a.createElement(l,{className:p.a.icon}),c.a.createElement(b.a,{height:4}),c.a.createElement("div",{className:p.a.message},"You must fill out your ",c.a.createElement("abbr",{title:"Digital Millennium Copyright Act"},"DMCA")," form to make this photo public."),c.a.createElement(b.a,{height:16}),c.a.createElement("a",{href:u.b.DMCA_VERIFICATION,className:o()(Object(d.b)({type:d.a.Base,size:"small"}),p.a.fillFormLink)},"Fill form")),c.a.createElement("a",{href:s.b,className:p.a.whyFillFormLink},"Why do I need to fill out a form?")))}}]);
//# sourceMappingURL=collection-route~editorial-route~explore-route~following-route~photos-route~search-photos-route~topi~b3c2ff5b.2243e.js.map