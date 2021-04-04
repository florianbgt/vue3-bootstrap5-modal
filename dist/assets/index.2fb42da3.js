import{p as e,a as t,r as a,o as l,c as o,b as s,d as n,t as d,e as u,f as r,T as c,g as i,w as p,F as m,h as b}from"./vendor.0a8ff626.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const l=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,s)=>{const n=new URL(e,l);if(self[t].moduleMap[n])return a(self[t].moduleMap[n]);const d=new Blob([`import * as m from '${n}';`,`${t}.moduleMap['${n}']=m;`],{type:"text/javascript"}),u=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(d),onerror(){s(new Error(`Failed to import: ${e}`)),o(u)},onload(){a(self[t].moduleMap[n]),o(u)}});document.head.appendChild(u)})),self[t].moduleMap={}}}("/vue3-bootstrap5-modal/assets/");const f=p();e("data-v-043f36e4");const h={key:0,class:"pt-5 position-fixed top-0 start-0 h-100 w-100",style:{"background-color":"rgba(0, 0, 0, 0.25)"}},v={class:"modal1-dialog h-100 overflow-auto"},g={class:"card-header h2"},y=s("strong",null,"X",-1),V={class:"card-body"};t();const w={expose:[],props:{modelValue:{type:Boolean,required:!0,default:!1},closeable:{type:Boolean,required:!1,default:!1},header:{type:String,required:!1,default:null},container:{type:String,required:!1,default:null},maxwidth:{type:String,required:!1,default:null}},setup:e=>(a(!1),f(((t,a)=>(l(),o(i,{to:"body"},[s(c,{name:"fade"},{default:f((()=>[e.modelValue?(l(),o("div",h,[s("div",{onClick:a[1]||(a[1]=e=>t.$emit("update:modelValue",!1)),class:"backdrop"}),s("div",v,[s("div",{class:["card px-0",null==e.container?"container":`container-${e.container}`],style:null!=e.maxwidth?`max-width: ${e.maxwidth}`:null},[s("div",g,[n(d(e.header)+" ",1),e.closeable?(l(),o("button",{key:0,onClick:a[2]||(a[2]=e=>t.$emit("update:modelValue",!1)),class:"btn btn-text float-end"},[y])):u("",!0)]),s("div",V,[r(t.$slots,"default",{},void 0,!0)])],6)])])):u("",!0)])),_:3})]))))),__scopeId:"data-v-043f36e4"};const _=p();e("data-v-1aae0af6");const k=s("h2",null,"Vue 3 Bootstrap 5 simple modal component",-1),x=s("p",null,[s("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"},"Vite Documentation"),n(" | "),s("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Documentation")],-1),M=s("p",null,"This modal have to be closed from the parent",-1),$=s("p",null,"This modal will be close from the parent in 5 seconds",-1),U=s("br",null,null,-1),j=s("p",null,"You can close this modal using the close button on the top right corner",-1);t();const C={expose:[],props:{msg:String},setup(e){const t=a(!1),n=a(!1);return _(((a,u)=>(l(),o(m,null,[s("h1",null,d(e.msg),1),k,x,s("button",{onClick:u[1]||(u[1]=e=>(n.value=!0,void setTimeout((()=>{n.value=!1}),5e3))),type:"button",class:"btn btn-success mb-2"},"Open Modal"),s(w,{modelValue:n.value,"onUpdate:modelValue":u[2]||(u[2]=e=>n.value=e),header:"Modal"},{default:_((()=>[M,$])),_:1},8,["modelValue"]),U,s("button",{onClick:u[3]||(u[3]=e=>t.value=!0),type:"button",class:"btn btn-success mb-2"},"Open Closeable Modal"),s(w,{modelValue:t.value,"onUpdate:modelValue":u[4]||(u[4]=e=>t.value=e),closeable:"",header:"Closeable Modal"},{default:_((()=>[j])),_:1},8,["modelValue"])],64))))},__scopeId:"data-v-1aae0af6"};const L=s("img",{alt:"Vue logo",src:"/vue3-bootstrap5-modal/assets/logo.03d6d6da.png"},null,-1);b({expose:[],setup:e=>(e,t)=>(l(),o(m,null,[L,s(C,{msg:"Hello Vue 3 + Vite"})],64))}).mount("#app");