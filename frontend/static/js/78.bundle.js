"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[78],{1275:(e,t,r)=>{r.d(t,{Z:()=>C});var a=r(3366),n=r(7462),o=r(7294),l=r(6010),i=r(4780),s=r(1796),c=r(948),d=r(1657),u=r(9773),m=r(9438),p=r(8974),h=r(1705),f=r(1588);const b=(0,f.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const v=(0,f.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var g=r(6336),Z=r(4867);function y(e){return(0,Z.Z)("MuiMenuItem",e)}const w=(0,f.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var S=r(5893);const k=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],x=(0,c.ZP)(m.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.dense&&t.dense,r.divider&&t.divider,!r.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,n.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${w.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${w.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${w.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${w.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${w.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${b.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${b.inset}`]:{marginLeft:52},[`& .${g.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${g.Z.inset}`]:{paddingLeft:36},[`& .${v.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,n.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${v.root} svg`]:{fontSize:"1.25rem"}})))),C=o.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:s=!1,component:c="li",dense:m=!1,divider:f=!1,disableGutters:b=!1,focusVisibleClassName:v,role:g="menuitem",tabIndex:Z,className:w}=r,C=(0,a.Z)(r,k),E=o.useContext(u.Z),P=o.useMemo((()=>({dense:m||E.dense||!1,disableGutters:b})),[E.dense,m,b]),$=o.useRef(null);(0,p.Z)((()=>{s&&$.current&&$.current.focus()}),[s]);const O=(0,n.Z)({},r,{dense:P.dense,divider:f,disableGutters:b}),R=(e=>{const{disabled:t,dense:r,divider:a,disableGutters:o,selected:l,classes:s}=e,c={root:["root",r&&"dense",t&&"disabled",!o&&"gutters",a&&"divider",l&&"selected"]},d=(0,i.Z)(c,y,s);return(0,n.Z)({},s,d)})(r),j=(0,h.Z)($,t);let _;return r.disabled||(_=void 0!==Z?Z:-1),(0,S.jsx)(u.Z.Provider,{value:P,children:(0,S.jsx)(x,(0,n.Z)({ref:j,role:g,tabIndex:_,component:c,focusVisibleClassName:(0,l.Z)(R.focusVisible,v),className:(0,l.Z)(R.root,w)},C,{ownerState:O,classes:R}))})}))},2207:(e,t,r)=>{r.d(t,{Z:()=>y});var a=r(3366),n=r(7462),o=r(7294),l=r(6010),i=r(4780),s=r(8216),c=r(948),d=r(9327),u=r(4423),m=r(9438),p=r(1588),h=r(4867);function f(e){return(0,h.Z)("PrivateSwitchBase",e)}(0,p.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var b=r(5893);const v=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],g=(0,c.ZP)(m.Z)((({ownerState:e})=>(0,n.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12}))),Z=(0,c.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),y=o.forwardRef((function(e,t){const{autoFocus:r,checked:o,checkedIcon:c,className:m,defaultChecked:p,disabled:h,disableFocusRipple:y=!1,edge:w=!1,icon:S,id:k,inputProps:x,inputRef:C,name:E,onBlur:P,onChange:$,onFocus:O,readOnly:R,required:j=!1,tabIndex:_,type:F,value:A}=e,M=(0,a.Z)(e,v),[I,N]=(0,d.Z)({controlled:o,default:Boolean(p),name:"SwitchBase",state:"checked"}),q=(0,u.Z)();let z=h;q&&void 0===z&&(z=q.disabled);const B="checkbox"===F||"radio"===F,D=(0,n.Z)({},e,{checked:I,disabled:z,disableFocusRipple:y,edge:w}),L=(e=>{const{classes:t,checked:r,disabled:a,edge:n}=e,o={root:["root",r&&"checked",a&&"disabled",n&&`edge${(0,s.Z)(n)}`],input:["input"]};return(0,i.Z)(o,f,t)})(D);return(0,b.jsxs)(g,(0,n.Z)({component:"span",className:(0,l.Z)(L.root,m),centerRipple:!0,focusRipple:!y,disabled:z,tabIndex:null,role:void 0,onFocus:e=>{O&&O(e),q&&q.onFocus&&q.onFocus(e)},onBlur:e=>{P&&P(e),q&&q.onBlur&&q.onBlur(e)},ownerState:D,ref:t},M,{children:[(0,b.jsx)(Z,(0,n.Z)({autoFocus:r,checked:o,defaultChecked:p,className:L.input,disabled:z,id:B?k:void 0,name:E,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const t=e.target.checked;N(t),$&&$(e,t)},readOnly:R,ref:C,required:j,ownerState:D,tabIndex:_,type:F},"checkbox"===F&&void 0===A?{}:{value:A},x)),I?c:S]}))}))},6078:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Se});var a=r(7294),n=r(9250),o=r(52),l=r(2861),i=r(7957),s=r(948),c=r(7896),d=r(6089),u=r(5725),m=r(6914),p=r(4680),h=r(9573),f=r(6011),b=r(3694),v=r(6926),g=r(8732),Z=r(6867),y=r(4776),w=r(3366),S=r(7462),k=r(6010),x=r(4780),C=r(1796),E=r(8216),P=r(2207),$=r(1657),O=r(1588),R=r(4867);function j(e){return(0,R.Z)("MuiSwitch",e)}const _=(0,O.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);var F=r(5893);const A=["className","color","edge","size","sx"],M=(0,s.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.edge&&t[`edge${(0,E.Z)(r.edge)}`],t[`size${(0,E.Z)(r.size)}`]]}})((({ownerState:e})=>(0,S.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===e.edge&&{marginLeft:-8},"end"===e.edge&&{marginRight:-8},"small"===e.size&&{width:40,height:24,padding:7,[`& .${_.thumb}`]:{width:16,height:16},[`& .${_.switchBase}`]:{padding:4,[`&.${_.checked}`]:{transform:"translateX(16px)"}}}))),I=(0,s.ZP)(P.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.switchBase,{[`& .${_.input}`]:t.input},"default"!==r.color&&t[`color${(0,E.Z)(r.color)}`]]}})((({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${"light"===e.palette.mode?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${_.checked}`]:{transform:"translateX(20px)"},[`&.${_.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${_.checked} + .${_.track}`]:{opacity:.5},[`&.${_.disabled} + .${_.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:""+("light"===e.palette.mode?.12:.2)},[`& .${_.input}`]:{left:"-100%",width:"300%"}})),(({theme:e,ownerState:t})=>(0,S.Z)({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,C.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${_.checked}`]:{color:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,C.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${_.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t.color}DisabledColor`]:`${"light"===e.palette.mode?(0,C.$n)(e.palette[t.color].main,.62):(0,C._j)(e.palette[t.color].main,.55)}`}},[`&.${_.checked} + .${_.track}`]:{backgroundColor:(e.vars||e).palette[t.color].main}}))),N=(0,s.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})((({theme:e})=>({height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${"light"===e.palette.mode?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:""+("light"===e.palette.mode?.38:.3)}))),q=(0,s.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})((({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}))),z=a.forwardRef((function(e,t){const r=(0,$.Z)({props:e,name:"MuiSwitch"}),{className:a,color:n="primary",edge:o=!1,size:l="medium",sx:i}=r,s=(0,w.Z)(r,A),c=(0,S.Z)({},r,{color:n,edge:o,size:l}),d=(e=>{const{classes:t,edge:r,size:a,color:n,checked:o,disabled:l}=e,i={root:["root",r&&`edge${(0,E.Z)(r)}`,`size${(0,E.Z)(a)}`],switchBase:["switchBase",`color${(0,E.Z)(n)}`,o&&"checked",l&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},s=(0,x.Z)(i,j,t);return(0,S.Z)({},t,s)})(c),u=(0,F.jsx)(q,{className:d.thumb,ownerState:c});return(0,F.jsxs)(M,{className:(0,k.Z)(d.root,a),sx:i,ownerState:c,children:[(0,F.jsx)(I,(0,S.Z)({type:"checkbox",icon:u,checkedIcon:u,ref:t,ownerState:c},s,{classes:(0,S.Z)({},d,{root:d.switchBase})})),(0,F.jsx)(N,{className:d.track,ownerState:c})]})}));var B=r(9647),D=r(3720),L=r(4386),T=r(2658),G=r(2440),W=r(799),H=r(5116),V=r(6446),U=r(7666),X=r(243),J=r(1275);function K(e){return(0,R.Z)("MuiFormGroup",e)}(0,O.Z)("MuiFormGroup",["root","row","error"]);var Q=r(4423),Y=r(5704);const ee=["className","row"],te=(0,s.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.row&&t.row]}})((({ownerState:e})=>(0,S.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"}))),re=a.forwardRef((function(e,t){const r=(0,$.Z)({props:e,name:"MuiFormGroup"}),{className:a,row:n=!1}=r,o=(0,w.Z)(r,ee),l=(0,Q.Z)(),i=(0,Y.Z)({props:r,muiFormControl:l,states:["error"]}),s=(0,S.Z)({},r,{row:n,error:i.error}),c=(e=>{const{classes:t,row:r,error:a}=e,n={root:["root",r&&"row",a&&"error"]};return(0,x.Z)(n,K,t)})(s);return(0,F.jsx)(te,(0,S.Z)({className:(0,k.Z)(c.root,a),ownerState:s,ref:t},o))}));function ae(e){return(0,R.Z)("MuiFormControlLabel",e)}const ne=(0,O.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),oe=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],le=(0,s.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${ne.label}`]:t.label},t.root,t[`labelPlacement${(0,E.Z)(r.labelPlacement)}`]]}})((({theme:e,ownerState:t})=>(0,S.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${ne.disabled}`]:{cursor:"default"}},"start"===t.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===t.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===t.labelPlacement&&{flexDirection:"column",marginLeft:16},{[`& .${ne.label}`]:{[`&.${ne.disabled}`]:{color:(e.vars||e).palette.text.disabled}}}))),ie=(0,s.ZP)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})((({theme:e})=>({[`&.${ne.error}`]:{color:(e.vars||e).palette.error.main}}))),se=a.forwardRef((function(e,t){var r,n;const o=(0,$.Z)({props:e,name:"MuiFormControlLabel"}),{className:l,componentsProps:i={},control:s,disabled:c,disableTypography:d,label:u,labelPlacement:m="end",required:p,slotProps:h={}}=o,f=(0,w.Z)(o,oe),b=(0,Q.Z)(),v=null!=(r=null!=c?c:s.props.disabled)?r:null==b?void 0:b.disabled,g=null!=p?p:s.props.required,Z={disabled:v,required:g};["checked","name","onChange","value","inputRef"].forEach((e=>{void 0===s.props[e]&&void 0!==o[e]&&(Z[e]=o[e])}));const y=(0,Y.Z)({props:o,muiFormControl:b,states:["error"]}),C=(0,S.Z)({},o,{disabled:v,labelPlacement:m,required:g,error:y.error}),P=(e=>{const{classes:t,disabled:r,labelPlacement:a,error:n,required:o}=e,l={root:["root",r&&"disabled",`labelPlacement${(0,E.Z)(a)}`,n&&"error",o&&"required"],label:["label",r&&"disabled"],asterisk:["asterisk",n&&"error"]};return(0,x.Z)(l,ae,t)})(C),O=null!=(n=h.typography)?n:i.typography;let R=u;return null==R||R.type===T.Z||d||(R=(0,F.jsx)(T.Z,(0,S.Z)({component:"span"},O,{className:(0,k.Z)(P.label,null==O?void 0:O.className),children:R}))),(0,F.jsxs)(le,(0,S.Z)({className:(0,k.Z)(P.root,l),ownerState:C,ref:t},f,{children:[a.cloneElement(s,Z),R,g&&(0,F.jsxs)(ie,{ownerState:C,"aria-hidden":!0,className:P.asterisk,children:[" ","*"]})]}))}));var ce=r(594);function de(e){return de="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},de(e)}function ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function me(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(r),!0).forEach((function(t){pe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function pe(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==de(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!==de(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===de(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function he(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,o,l,i=[],s=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(a=o.call(r)).done)&&(i.push(a.value),i.length!==t);s=!0);}catch(e){c=!0,n=e}finally{try{if(!s&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(c)throw n}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return fe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return fe(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function fe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function be(){return be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},be.apply(this,arguments)}var ve=(0,a.forwardRef)((function(e,t){return a.createElement(y.Z,be({direction:"up",ref:t},e))}));const ge=function(e){var t=e.open,r=e.dialogHandleClose,n=e.dialogHandleSave,o=e.dialogHandleDelete,l=e.rowData,i=he((0,a.useState)({}),2),s=i[0],c=i[1],u=he((0,a.useState)(""),2),p=u[0],h=u[1],f=he((0,a.useState)(""),2),b=f[0],v=f[1];(0,a.useEffect)((function(){c({id:(null==l?void 0:l.id)||null,email:(null==l?void 0:l.email)||"",access_level:(null==l?void 0:l.access_level)||!1,reset_password_code:(null==l?void 0:l.reset_password_code)||"",request_reset:(null==l?void 0:l.request_reset)||!1})}),[l]);var g,y=function(e){var t=e.target,r=t.name,a=t.value;c((function(e){return me(me({},e),{},pe({},r,a))}))},w=function(e){var t=e.target,r=t.name,a=t.checked;c((function(e){return me(me({},e),{},pe({},r,a))}))},S=function(e){var t="",r="";for(var a in e)"email"==e[a].field&&(t+=" ".concat(e[a].error_message)),"reset_password_code"==e[a].field&&(r+=" ".concat(e[a].error_message));h(t),v(r)};return a.createElement(B.Z,{fullScreen:!0,open:t,onClose:r,TransitionComponent:ve},a.createElement(D.Z,{sx:{position:"relative",backgroundColor:"#00755f"}},a.createElement(L.Z,null,a.createElement(Z.Z,{edge:"start",color:"inherit",onClick:r,"aria-label":"close"},a.createElement(ce.Z,null)),a.createElement(T.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div"},l?"Edit Users's Settings":"Add New User Access"),l?a.createElement(m.Z,{autoFocus:!0,color:"inherit",onClick:function(){return o(s)}},"Delete"):null)),a.createElement(d.Z,{maxWidth:"sm",style:{height:"100vh",display:"flex",justifyContent:"center",marginTop:50}},a.createElement(G.Z,{sx:{height:"100vh",display:"grid",width:600,maxWidth:"sm",bgcolor:"background.paper",alignContent:"baseline"}},a.createElement(W.ZP,null,a.createElement(H.Z,{id:"outlined-basic",label:"Email",variant:"outlined",name:"email",value:null==s?void 0:s.email,error:!!p,fullWidth:!0,onChange:y})),p&&a.createElement(W.ZP,null,a.createElement(T.Z,{variant:"subtitle2",color:"error",sx:{width:"100%"}},p)),a.createElement(W.ZP,null,a.createElement(V.Z,{fullWidth:!0},a.createElement(U.Z,{id:"access_level-label"},"Access Level"),a.createElement(X.Z,{labelId:"access_level-label",id:"access_level",name:"access_level",value:(null==s?void 0:s.access_level)||"",label:"Access Level",onChange:y},[{id:1,title:"Super Admin"},{id:2,title:"Admin"},{id:3,title:"Management"}].map((function(e){return a.createElement(J.Z,{key:e.id,value:e.id},e.title)}))))),a.createElement(W.ZP,null,a.createElement(re,null,a.createElement(se,{control:(g=l,g?a.createElement(z,{name:"request_reset",checked:!(null==s||!s.request_reset),onChange:w}):a.createElement(z,{name:"request_reset",checked:!0,onChange:w,disabled:!0})),label:"Reset Password"}))),a.createElement(W.ZP,null,a.createElement(H.Z,{id:"outlined-basic",label:"Request Code Password Reset",variant:"outlined",name:"reset_password_code",value:null==s?void 0:s.reset_password_code,fullWidth:!0,disabled:!!l&&!(null!=s&&s.request_reset),onChange:y})),b&&a.createElement(W.ZP,null,a.createElement(T.Z,{variant:"subtitle2",color:"error",sx:{width:"100%"}},b)),a.createElement(W.ZP,{sx:{display:"block",marginTop:"50px",textAlign:"right"}},a.createElement(m.Z,{autoFocus:!0,variant:"contained",onClick:function(){return n(s,S)}},"save")))))};function Ze(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,o,l,i=[],s=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(a=o.call(r)).done)&&(i.push(a.value),i.length!==t);s=!0);}catch(e){c=!0,n=e}finally{try{if(!s&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(c)throw n}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ye(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ye(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ye(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var we=(0,s.ZP)(c.Z)({width:"100%","& .sCell":{width:"0 auto"}});const Se=function(){var e=Ze((0,a.useState)({}),2),t=e[0],r=e[1],s=Ze((0,a.useState)(!1),2),c=s[0],y=s[1],w=Ze((0,a.useState)([]),2),S=w[0],k=w[1],x=(0,a.useContext)(o.S),C=x.accountProfile,E=x.setAccountProfile,P=Ze((0,a.useState)(!1),2),$=P[0],O=P[1],R=Ze((0,a.useState)(!1),2),j=R[0],_=R[1],F=(0,n.s0)();(0,a.useEffect)((function(){C.initialize&&(C.is_logged_in||F("/login"))}),[C]),(0,a.useEffect)((function(){C.initialize&&C.is_logged_in&&l.Z.get("/admin/api/get-users/",{withCredentials:!0}).then((function(e){k(e.data.rows)})).catch((function(e){}))}),[C,j]);var A=function(e){O(arguments.length>1&&void 0!==arguments[1]&&arguments[1]),r(e),y(!0)};return a.createElement(d.Z,{sx:{width:"90%",margin:"50px auto"}},a.createElement(u.ZP,{container:!0,spacing:2},a.createElement(u.ZP,{item:!0,xs:8},a.createElement("h1",null,"Admin")),a.createElement(u.ZP,{item:!0,xs:4,sx:{textAlign:"right"}},a.createElement(m.Z,{variant:"contained",onClick:function(){return A(null)}},"Add New")),a.createElement(u.ZP,{item:!0,xs:12},a.createElement(we,{component:p.Z},a.createElement(h.Z,{sx:{minWidth:650}},a.createElement(f.Z,null,a.createElement(b.Z,null,a.createElement(v.Z,{className:"sCell"}),a.createElement(v.Z,{className:"sCell"},"EMAIL"),a.createElement(v.Z,{className:"sCell"},"ACCESS LEVEL"),a.createElement(v.Z,{className:"sCell"},"RESET PASSWORD"),a.createElement(v.Z,{className:"sCell"},"RESET CODE"))),a.createElement(g.Z,null,null==S?void 0:S.map((function(e){return a.createElement(b.Z,{key:e.id},a.createElement(v.Z,null,a.createElement(Z.Z,{onClick:function(){return A(e,!0)}},a.createElement(i.Z,null))),a.createElement(v.Z,null,e.email),a.createElement(v.Z,null,function(e){switch(e){case 1:return"Super Admin";case 2:return"Admin";case 3:return"Management"}}(e.access_level)),a.createElement(v.Z,null,e.request_reset?"Request Active":"False"),a.createElement(v.Z,null,e.reset_password_code))}))))))),a.createElement(ge,{open:c,dialogHandleClose:function(){y(!1)},dialogHandleSave:function(e,t){e.for_update=$,l.Z.post("/admin/api/save-user/",e).then((function(e){y(!1),_(!j)})).catch((function(e){401===e.response.status&&(E({email:"",access_level:0,is_logged_in:!1,initialize:!0}),F("/login")),t(e.response.data.errors)}))},dialogHandleDelete:function(e,t){l.Z.post("/admin/api/delete-user/",e).then((function(e){y(!1),_(!j)})).catch((function(e){401===e.response.status&&(E({email:"",access_level:0,is_logged_in:!1,initialize:!0}),F("/login")),t(e.response.data.errors)}))},rowData:t}))}}}]);
//# sourceMappingURL=78.bundle.js.map