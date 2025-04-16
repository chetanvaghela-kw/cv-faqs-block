(()=>{"use strict";const e=window.React,t=window.wp.i18n,a=window.wp.blocks,c=window.wp.blockEditor,l=window.wp.element,n=window.wp.components,s=JSON.parse('{"UU":"cv-blocks/faqs-section"}'),i={blockId:{type:"string",default:""},blockHeading:{type:"string",default:(0,t.__)("Heading","pxd")},headingTag:{type:"string",default:"h2"},listData:{type:"array",default:[{heading:(0,t.__)("","pxd"),description:"",listItems:[""]}]}},o=(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg","shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision","image-rendering":"optimizeQuality","fill-rule":"evenodd","clip-rule":"evenodd",viewBox:"0 0 512 420.794"},(0,e.createElement)("path",{"fill-rule":"nonzero",d:"M365.115 411.466l-41.555-48.032H168.499c-8.77 0-16.722-3.669-22.406-9.542l-34.239 32.84a17.242 17.242 0 01-12.855 5.73c-9.545 0-17.285-7.74-17.285-17.285v-71.248H38.913C17.662 303.929 0 286.269 0 265.016V38.913C0 17.834 17.802 0 38.913 0h390.993c21.283 0 38.914 17.631 38.914 38.913v51.92h11.975c17.088 0 31.205 14.12 31.205 31.205v210.199c0 17.103-14.103 31.197-31.205 31.197h-78.294l-1.835 38.455c.012 10.605-8.657 18.905-19.061 18.905-8.201 0-11.857-3.969-16.49-9.328zM156.443 166.073h-28.111v41.447H95.263V95.864h67.793l-4.134 28.583h-30.59v15.007h28.111v26.619zm36.922 41.447h-31.046l26.786-111.656h51.092l26.787 111.656h-31.046l-3.806-17.686h-34.965l-3.802 17.686zm16.535-77.542l-6.778 31.449h22.893l-6.613-31.263-9.502-.186zm123.313 73.434l-14.057 4.108c-18.519 0-30.973-5.121-37.366-15.363-3.309-5.121-5.623-10.87-6.947-17.242-1.321-6.372-1.983-14.083-1.983-23.135 0-20.365 3.528-35.223 10.582-44.574 7.055-9.348 19.732-14.022 38.031-14.022 18.298 0 31.031 4.703 38.196 14.112 7.165 9.409 10.747 24.238 10.747 44.484 0 15.126-2.921 27.333-8.762 36.623l14.101 8.094-8.599 20.545-33.943-6.842v-6.788zm-24.805-23.762h13.727c4.517 0 7.8-.566 9.838-1.698 2.041-1.129 3.057-3.722 3.057-7.769v-46.45h-13.888c-4.41 0-7.633.567-9.674 1.696-2.038 1.132-3.06 3.722-3.06 7.771v46.45zM98.999 375.177l92.307-88.533h238.6c11.903 0 21.629-9.734 21.629-21.628V38.913c0-11.894-10.013-21.628-21.629-21.628H38.913c-11.615 0-21.628 10.007-21.628 21.628v226.103c0 11.697 9.726 21.628 21.628 21.628h60.086v88.533z"}));(0,a.registerBlockType)(s.UU,{icon:o,attributes:i,edit:function({attributes:a,setAttributes:s,clientId:i}){s({blockId:i});const o=(e,t,c)=>{const l=[...a.listData];l[t][c]=e,s({listData:l})},[r,m]=(0,l.useState)(0);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(c.InspectorControls,null,(0,e.createElement)(n.Panel,{header:(0,t.__)("Setting","cv-faqs-block")},(0,e.createElement)(React.Fragment,{key:".0"},(0,e.createElement)(n.PanelBody,{className:"cv-faqs-block-head",title:(0,t.__)("Genaral","cv-faqs-block")})))),(0,e.createElement)("div",{...(0,c.useBlockProps)({className:`cv-faqs-blocks-section-wrapper section-${a.blockId}`})},(0,e.createElement)("div",{class:"cv-container"},(0,e.createElement)("div",{class:"cv-faqs-blocks-heading"},(0,e.createElement)(c.RichText,{tagName:a.headingTag,value:a.blockHeading,className:`heading-${a.blockId}`,allowedFormats:[],placeholder:(0,t.__)("Heading"),onChange:e=>s({blockHeading:e})})),(0,e.createElement)("div",{"x-data":"{selected: 1}",class:"space-y-4"},(0,e.createElement)("ul",{className:`cv-faqs-block-faq-section cv-faqs-block-faq-id-${a.blockId}`},a.listData?.map(((l,i)=>(0,e.createElement)("li",{class:"cv-faqs-block-faq-item",key:i},(0,e.createElement)("button",{type:"button",class:"cv-faqs-block-faq-item-heading",onClick:()=>m(r===i?null:i)},(0,e.createElement)("div",{class:"cv-faqs-block-faq-item-title"},(0,e.createElement)(c.RichText,{tagName:"span",value:l.heading,allowedFormats:[],onChange:e=>o(e,i,"heading"),placeholder:(0,t.__)("Write Question..")}),(0,e.createElement)("span",null,(0,e.createElement)("svg",{width:"32",height:"32",class:"cv-faqs-icons "+(r===i?"cv-rotate-180":"")},(0,e.createElement)("use",{xlinkHref:`${SETTING?.themePath}assets/images/sprite.svg#menu-arrow`}))))),(0,e.createElement)("div",{class:"cv-faq-block-accordion-content  "+(r===i?"cv-max-h-screen":"cv-max-h-0")},(0,e.createElement)("div",{class:"cv-faq-block-accordion-content-inner"},(0,e.createElement)(c.RichText,{tagName:"div",className:"cv-faq-item-content",value:l.description,allowedFormats:[],onChange:e=>o(e,i,"description"),placeholder:(0,t.__)("Write Answer...")}),Array.isArray(l?.listItems)&&l.listItems.length>0&&(0,e.createElement)("ul",null,l.listItems?.map(((l,o)=>(0,e.createElement)("li",{className:"cv-faq-block-accordion-content-list-item",key:o},(0,e.createElement)(n.Button,{isDestructive:!0,className:"cv-list-item-delete-btn",variant:"primary",onClick:e=>((e,t)=>{const c=[...a.listData],l=c[e].listItems;l.splice(t,1),c[e].listItems=l,s({listData:c})})(i,o)},"X"),(0,e.createElement)(c.RichText,{className:"cv-faq-block-accordion-content-list-item-text",value:l,allowedFormats:["core/bold","core/italic"],placeholder:(0,t.__)("Add List Item Here...(optional)"),onChange:e=>((e,t,c)=>{const l=[...a.listData];l[t].listItems[c]=e,s({listData:l})})(e,i,o)}))))),(0,e.createElement)("div",{className:"cv-faq-block-accordion-content-list-item-btn"},(0,e.createElement)(n.Button,{isPressed:!0,variant:"primary",onClick:e=>o([...l.listItems,""],i,"listItems")},(0,t.__)("Add List Item","pzd"))))),(0,e.createElement)(n.Button,{isDestructive:!0,className:"cv-delete-question-btn",variant:"primary",onClick:()=>(e=>{const t=[...a.listData];t.splice(e,1),s({listData:t})})(i)},"Delete Question")))))),(0,e.createElement)("div",{style:{textAlign:"center",paddingTop:"20px",paddingBottom:"30px"}},(0,e.createElement)(n.Button,{isPressed:!0,variant:"primary",onClick:()=>{const e=[...a.listData,{heading:"",description:"",listItems:[""]}];s({listData:e})}},(0,t.__)("Add Question","cv-faqs-block"))))))},save:function({attributes:t}){return(0,e.createElement)("div",{...c.useBlockProps.save({class:`cv-faqs-blocks-section-wrapper section-${t.blockId}`})},(0,e.createElement)("div",{class:"cv-container"},(0,e.createElement)("div",{class:"cv-faqs-blocks-heading"},(0,e.createElement)(c.RichText.Content,{tagName:t.headingTag,value:t.blockHeading,class:`heading-${t.blockId}`})),t.listData&&(0,e.createElement)("div",{"x-data":"{selected: 1}",class:"space-y-4"},(0,e.createElement)("ul",{class:`cv-faqs-block-faq-section cv-faqs-block-faq-id-${t.blockId}`},t.listData?.map(((t,a)=>(0,e.createElement)("li",{key:a,class:"cv-faqs-block-faq-item"},(0,e.createElement)("button",{type:"button",class:"cv-faqs-block-faq-item-heading","aria-expanded":"false","aria-controls":`cv-faqs-accordion-content-${a}`,"data-index":a},(0,e.createElement)("div",{class:"cv-faqs-block-faq-item-title"},(0,e.createElement)(c.RichText.Content,{tagName:"span",value:t.heading}),(0,e.createElement)("span",null,(0,e.createElement)("svg",{width:"32",height:"32",class:"w-8 h-8 hover-transition lg:w-6 lg:h-6 toggle-icon-svg"},(0,e.createElement)("use",{xlinkHref:`${SETTING?.themePath}assets/images/sprite.svg#menu-arrow`}))))),(0,e.createElement)("div",{id:`cv-faqs-accordion-content-${a}`,class:"cv-faq-block-accordion-content"},(0,e.createElement)("div",{class:"cv-faq-block-accordion-content-inner"},t.description&&(0,e.createElement)(c.RichText.Content,{class:"cv-faq-item-content",tagName:"div",value:t.description}),Array.isArray(t?.listItems)&&t.listItems.length>0&&(0,e.createElement)("ul",null,t.listItems?.map((t=>t&&(0,e.createElement)(c.RichText.Content,{tagName:"li",class:"cv-faq-block-accordion-content-list-item",value:t})))))))))))))}})})();