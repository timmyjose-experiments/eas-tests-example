(()=>{"use strict";if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var e={};(()=>{var u=e;Object.defineProperty(u,"__esModule",{value:true});async function myFunction(e,{inputs:u,outputs:n}){e.logger.info(`num1: ${u.num1.value}`);e.logger.info(`num2: ${u.num2.value}`);const t=u.num1.value+u.num2.value;e.logger.info(`sum = ${t}`);n.sum.set(t.toString())}u["default"]=myFunction})();module.exports=e})();