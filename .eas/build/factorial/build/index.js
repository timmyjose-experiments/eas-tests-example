(()=>{"use strict";if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var e={};(()=>{var u=e;Object.defineProperty(u,"__esModule",{value:true});async function myFunction(e,{inputs:u,outputs:n}){e.logger.info(`num = ${u.num.value}`);const t=factorial(u.num.value);e.logger.info(`factorial(${u.num.value}) = ${t}`);n.factorial.set(t.toString())}const factorial=e=>{if(e<=0){return 1}return e*factorial(e-1)};u["default"]=myFunction})();module.exports=e})();