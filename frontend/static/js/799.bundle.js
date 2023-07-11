"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[799],{4212:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(3366),o=n(7462),a=n(7294),i=n(6010),l=n(4780),c=n(1796),u=n(2207),s=n(5949),d=n(5893);const f=(0,s.Z)((0,d.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=(0,s.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),p=(0,s.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var h=n(8216),v=n(1657),b=n(948),g=n(1588),y=n(4867);function Z(e){return(0,y.Z)("MuiCheckbox",e)}const E=(0,g.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),S=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],x=(0,b.ZP)(u.Z,{shouldForwardProp:e=>(0,b.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t[`color${(0,h.Z)(n.color)}`]]}})((({theme:e,ownerState:t})=>(0,o.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${E.checked}, &.${E.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${E.disabled}`]:{color:(e.vars||e).palette.action.disabled}}))),k=(0,d.jsx)(m,{}),w=(0,d.jsx)(f,{}),C=(0,d.jsx)(p,{}),j=a.forwardRef((function(e,t){var n,c;const u=(0,v.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:s=k,color:f="primary",icon:m=w,indeterminate:p=!1,indeterminateIcon:b=C,inputProps:g,size:y="medium",className:E}=u,j=(0,r.Z)(u,S),O=p?b:m,P=p?b:s,A=(0,o.Z)({},u,{color:f,indeterminate:p,size:y}),I=(e=>{const{classes:t,indeterminate:n,color:r}=e,a={root:["root",n&&"indeterminate",`color${(0,h.Z)(r)}`]},i=(0,l.Z)(a,Z,t);return(0,o.Z)({},t,i)})(A);return(0,d.jsx)(x,(0,o.Z)({type:"checkbox",inputProps:(0,o.Z)({"data-indeterminate":p},g),icon:a.cloneElement(O,{fontSize:null!=(n=O.props.fontSize)?n:y}),checkedIcon:a.cloneElement(P,{fontSize:null!=(c=P.props.fontSize)?c:y}),ownerState:A,ref:t,className:(0,i.Z)(I.root,E)},j,{classes:I}))}))},2207:(e,t,n)=>{n.d(t,{Z:()=>Z});var r=n(3366),o=n(7462),a=n(7294),i=n(6010),l=n(4780),c=n(8216),u=n(948),s=n(9327),d=n(4423),f=n(9438),m=n(1588),p=n(4867);function h(e){return(0,p.Z)("PrivateSwitchBase",e)}(0,m.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var v=n(5893);const b=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],g=(0,u.ZP)(f.Z)((({ownerState:e})=>(0,o.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12}))),y=(0,u.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Z=a.forwardRef((function(e,t){const{autoFocus:n,checked:a,checkedIcon:u,className:f,defaultChecked:m,disabled:p,disableFocusRipple:Z=!1,edge:E=!1,icon:S,id:x,inputProps:k,inputRef:w,name:C,onBlur:j,onChange:O,onFocus:P,readOnly:A,required:I=!1,tabIndex:z,type:F,value:R}=e,N=(0,r.Z)(e,b),[B,D]=(0,s.Z)({controlled:a,default:Boolean(m),name:"SwitchBase",state:"checked"}),_=(0,d.Z)();let H=p;_&&void 0===H&&(H=_.disabled);const M="checkbox"===F||"radio"===F,T=(0,o.Z)({},e,{checked:B,disabled:H,disableFocusRipple:Z,edge:E}),$=(e=>{const{classes:t,checked:n,disabled:r,edge:o}=e,a={root:["root",n&&"checked",r&&"disabled",o&&`edge${(0,c.Z)(o)}`],input:["input"]};return(0,l.Z)(a,h,t)})(T);return(0,v.jsxs)(g,(0,o.Z)({component:"span",className:(0,i.Z)($.root,f),centerRipple:!0,focusRipple:!Z,disabled:H,tabIndex:null,role:void 0,onFocus:e=>{P&&P(e),_&&_.onFocus&&_.onFocus(e)},onBlur:e=>{j&&j(e),_&&_.onBlur&&_.onBlur(e)},ownerState:T,ref:t},N,{children:[(0,v.jsx)(y,(0,o.Z)({autoFocus:n,checked:a,defaultChecked:m,className:$.input,disabled:H,id:M?x:void 0,name:C,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const t=e.target.checked;D(t),O&&O(e,t)},readOnly:A,ref:w,required:I,ownerState:T,tabIndex:z,type:F},"checkbox"===F&&void 0===R?{}:{value:R},k)),B?u:S]}))}))},9799:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});var r=n(7294),o=n(9250),a=n(52),i=n(2861),l=n(7957),c=n(948),u=n(7896),s=n(6089),d=n(5725),f=n(6914),m=n(4680),p=n(9573),h=n(6011),v=n(3694),b=n(6926),g=n(8732),y=n(6867),Z=n(4776),E=n(9647),S=n(3720),x=n(4386),k=n(2658),w=n(2440),C=n(799),j=n(5116),O=n(4212),P=n(594);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){F(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==A(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===A(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}var D=(0,r.forwardRef)((function(e,t){return r.createElement(Z.Z,B({direction:"up",ref:t},e))}));const _=function(e){var t=e.open,n=e.dialogHandleClose,o=e.dialogHandleSave,a=e.dialogHandleDelete,i=e.rowData,l=R((0,r.useState)({}),2),c=l[0],u=l[1],d=R((0,r.useState)(""),2),m=d[0],p=d[1];(0,r.useEffect)((function(){u({id:(null==i?void 0:i.id)||null,department:(null==i?void 0:i.department)||"",status:(null==i?void 0:i.status)||!1})}),[i]);var h=function(e){var t="";for(var n in e)"department"==e[n].field&&(t+=" ".concat(e[n].error_message));p(t)};return r.createElement(E.Z,{fullScreen:!0,open:t,onClose:n,TransitionComponent:D},r.createElement(S.Z,{sx:{position:"relative",backgroundColor:"#00755f"}},r.createElement(x.Z,null,r.createElement(y.Z,{edge:"start",color:"inherit",onClick:n,"aria-label":"close"},r.createElement(P.Z,null)),r.createElement(k.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div"},i?"Edit Group Settings":"Add Group Settings"),i?r.createElement(f.Z,{autoFocus:!0,color:"inherit",onClick:function(){return a(c,h)}},"Delete"):null)),r.createElement(s.Z,{maxWidth:"sm",style:{height:"100vh",display:"flex",justifyContent:"center",marginTop:50}},r.createElement(w.Z,{sx:{height:"100vh",display:"grid",width:600,maxWidth:"sm",bgcolor:"background.paper",alignContent:"baseline"}},r.createElement(C.ZP,null,r.createElement(j.Z,{id:"outlined-basic",label:"Department",variant:"outlined",name:"department",value:null==c?void 0:c.department,onChange:function(e){var t=e.target,n=t.name,r=t.value;u((function(e){return z(z({},e),{},F({},n,r))}))},sx:{width:"100%"}})),m&&r.createElement(C.ZP,null,r.createElement(k.Z,{variant:"subtitle2",color:"error",sx:{width:"100%"}},m)),i?r.createElement(C.ZP,null,r.createElement(O.Z,{onChange:function(){var e=event.target,t=e.name,n=e.checked;u((function(e){return z(z({},e),{},F({},t,n))}))},checked:(null==c?void 0:c.status)||!1,name:"status",sx:{"& .MuiSvgIcon-root":{fontSize:28}}})," Status Active"):null,r.createElement(C.ZP,{sx:{display:"block",marginTop:"50px",textAlign:"right"}},r.createElement(f.Z,{autoFocus:!0,variant:"contained",onClick:function(){return o(c,h)}},"save")))))};function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var T=(0,c.ZP)(u.Z)({width:"100%","& .sCell":{width:"0 auto"}});const $=function(){var e=H((0,r.useState)({}),2),t=e[0],n=e[1],c=H((0,r.useState)(!1),2),u=c[0],Z=c[1],E=H((0,r.useState)([]),2),S=E[0],x=E[1],k=(0,r.useContext)(a.S),w=k.accountProfile,C=k.setAccountProfile,j=H((0,r.useState)(!1),2),O=j[0],P=j[1],A=H((0,r.useState)(!1),2),I=A[0],z=A[1],F=(0,o.s0)();(0,r.useEffect)((function(){w.initialize&&(w.is_logged_in||F("/login"))}),[w]),(0,r.useEffect)((function(){w.initialize&&w.is_logged_in&&i.Z.get("/be-api/get-groups/",{withCredentials:!0}).then((function(e){x(e.data.rows)})).catch((function(e){}))}),[w,I]);var R=function(e){P(arguments.length>1&&void 0!==arguments[1]&&arguments[1]),n(e),Z(!0)};return r.createElement(s.Z,{sx:{width:"90%",margin:"50px auto"}},r.createElement(d.ZP,{container:!0,spacing:2},r.createElement(d.ZP,{item:!0,xs:8},r.createElement("h1",null,"Groups")),r.createElement(d.ZP,{item:!0,xs:4,sx:{textAlign:"right"}},r.createElement(f.Z,{variant:"contained",onClick:function(){return R(null)}},"Add New")),r.createElement(d.ZP,{item:!0,xs:12},r.createElement(T,{component:m.Z},r.createElement(p.Z,{sx:{minWidth:650}},r.createElement(h.Z,null,r.createElement(v.Z,null,r.createElement(b.Z,{className:"sCell"}),r.createElement(b.Z,{className:"sCell"},"ID"),r.createElement(b.Z,{className:"sCell"},"DEPARTMENT"),r.createElement(b.Z,{className:"sCell"},"STATUS"))),r.createElement(g.Z,null,null==S?void 0:S.map((function(e){return r.createElement(v.Z,{key:e.id},r.createElement(b.Z,null,r.createElement(y.Z,{onClick:function(){return R(e,!0)}},r.createElement(l.Z,null))),r.createElement(b.Z,null,e.id),r.createElement(b.Z,null,e.department),r.createElement(b.Z,null,e.status?"Active":"Not-active"))}))))))),r.createElement(_,{open:u,dialogHandleClose:function(){Z(!1)},dialogHandleSave:function(e,t){e.for_update=O,i.Z.post("/be-api/save-group-settings/",e).then((function(e){Z(!1),z(!I)})).catch((function(e){var n,r;401===e.response.status&&(C({email:"",access_level:0,is_logged_in:!1,initialize:!0}),F("/login")),t(null===(n=e.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.errors)}))},dialogHandleDelete:function(e,t){i.Z.post("/be-api/delete-group-settings/",e).then((function(e){Z(!1),z(!I)})).catch((function(e){401===e.response.status&&(C({email:"",access_level:0,is_logged_in:!1,initialize:!0}),F("/login")),t(e.response.data.errors)}))},rowData:t}))}}}]);
//# sourceMappingURL=799.bundle.js.map