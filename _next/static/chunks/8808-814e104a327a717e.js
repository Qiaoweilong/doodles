"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8808],{75924:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(64938)),i=n(85893),s=(0,r.default)((0,i.jsx)("path",{d:"M7 9v6h4l5 5V4l-5 5H7z"}),"VolumeMute");t.Z=s},68936:function(e,t,n){n.d(t,{xC:function(){return c}});var a=n(64146),r=n(8198),i=[{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"vault",type:"address"},{indexed:!1,internalType:"address",name:"delegate",type:"address"},{indexed:!1,internalType:"bool",name:"value",type:"bool"}],name:"DelegateForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"vault",type:"address"},{indexed:!1,internalType:"address",name:"delegate",type:"address"},{indexed:!1,internalType:"address",name:"contract_",type:"address"},{indexed:!1,internalType:"bool",name:"value",type:"bool"}],name:"DelegateForContract",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"vault",type:"address"},{indexed:!1,internalType:"address",name:"delegate",type:"address"},{indexed:!1,internalType:"address",name:"contract_",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"bool",name:"value",type:"bool"}],name:"DelegateForToken",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"vault",type:"address"}],name:"RevokeAllDelegates",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"vault",type:"address"},{indexed:!1,internalType:"address",name:"delegate",type:"address"}],name:"RevokeDelegate",type:"event"},{inputs:[{internalType:"address",name:"delegate",type:"address"},{internalType:"address",name:"vault",type:"address"}],name:"checkDelegateForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"delegate",type:"address"},{internalType:"address",name:"vault",type:"address"},{internalType:"address",name:"contract_",type:"address"}],name:"checkDelegateForContract",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"delegate",type:"address"},{internalType:"address",name:"vault",type:"address"},{internalType:"address",name:"contract_",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"checkDelegateForToken",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"delegate",type:"address"},{internalType:"bool",name:"value",type:"bool"}],name:"delegateForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"delegate",type:"address"},{internalType:"address",name:"contract_",type:"address"},{internalType:"bool",name:"value",type:"bool"}],name:"delegateForContract",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"delegate",type:"address"},{internalType:"address",name:"contract_",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bool",name:"value",type:"bool"}],name:"delegateForToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"vault",type:"address"}],name:"getContractLevelDelegations",outputs:[{components:[{internalType:"address",name:"contract_",type:"address"},{internalType:"address",name:"delegate",type:"address"}],internalType:"struct IDelegationRegistry.ContractDelegation[]",name:"contractDelegations",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"vault",type:"address"}],name:"getDelegatesForAll",outputs:[{internalType:"address[]",name:"delegates",type:"address[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"vault",type:"address"},{internalType:"address",name:"contract_",type:"address"}],name:"getDelegatesForContract",outputs:[{internalType:"address[]",name:"delegates",type:"address[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"vault",type:"address"},{internalType:"address",name:"contract_",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getDelegatesForToken",outputs:[{internalType:"address[]",name:"delegates",type:"address[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"delegate",type:"address"}],name:"getDelegationsByDelegate",outputs:[{components:[{internalType:"enum IDelegationRegistry.DelegationType",name:"type_",type:"uint8"},{internalType:"address",name:"vault",type:"address"},{internalType:"address",name:"delegate",type:"address"},{internalType:"address",name:"contract_",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],internalType:"struct IDelegationRegistry.DelegationInfo[]",name:"info",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"vault",type:"address"}],name:"getTokenLevelDelegations",outputs:[{components:[{internalType:"address",name:"contract_",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"address",name:"delegate",type:"address"}],internalType:"struct IDelegationRegistry.TokenDelegation[]",name:"tokenDelegations",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"revokeAllDelegates",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"delegate",type:"address"}],name:"revokeDelegate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"vault",type:"address"}],name:"revokeSelf",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"}],s=n(82169),o=n(241),l=n(34155);var d=function(e,t,n,a){var r=function(e){return t=e,(null!=(a=n)&&"undefined"!==typeof Symbol&&a[Symbol.hasInstance]?a[Symbol.hasInstance](t):t instanceof a)?e:new n((function(t){t(e)}));var t,a};return new(n||(n=Promise))((function(n,i){var s=function(e){try{l(a.next(e))}catch(t){i(t)}},o=function(e){try{l(a.throw(e))}catch(t){i(t)}},l=function(e){e.done?n(e.value):r(e.value).then(s,o)};l((a=a.apply(e,t||[])).next())}))},u=function(e,t){var n,a,r,i,s=function(e){return function(t){return o([e,t])}},o=function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,a=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(r=(r=l.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){l.label=i[1];break}if(6===i[0]&&l.label<r[1]){l.label=r[1],r=i;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(i);break}r[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(s){i=[6,s],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}},l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i},c=(new r.vU(i),function(e){void 0===e&&(e=null);var t=this;this.checkDelegateForAll=function(e,n){return d(t,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.delegationContract.callStatic.checkDelegateForAll(e,n)];case 1:return[2,t.sent()]}}))}))},this.checkDelegateForContract=function(e,n,a){return d(t,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.delegationContract.callStatic.checkDelegateForContract(e,n,a)];case 1:return[2,t.sent()]}}))}))},this.checkDelegateForToken=function(e,n,a,r){return d(t,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.delegationContract.callStatic.checkDelegateForToken(e,n,a,r)];case 1:return[2,t.sent()]}}))}))},this.getContractLevelDelegations=function(e){return d(t,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.delegationContract.callStatic.getContractLevelDelegations(e)];case 1:return[2,t.sent().map((function(e){return{contract:e[0],delegate:e[1]}}))]}}))}))},this.getDelegatesForAll=function(e){return d(t,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.delegationContract.callStatic.getDelegatesForAll(e)];case 1:return[2,t.sent()]}}))}))},this.getDelegatesForContract=function(e,n){return d(t,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.delegationContract.callStatic.getDelegatesForContract(e,n)];case 1:return[2,t.sent()]}}))}))},this.getDelegatesForToken=function(e,n,a){return d(t,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.delegationContract.callStatic.getDelegatesForToken(e,n,a)];case 1:return[2,t.sent()]}}))}))},this.getDelegationsByDelegate=function(e){return d(t,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.delegationContract.callStatic.getDelegationsByDelegate(e)];case 1:return[2,t.sent().map((function(e){return{type:(t=e[0],["NONE","ALL","CONTRACT","TOKEN"][t]||"NONE"),vault:e[1],delegate:e[2],contract:e[3],tokenId:Number(e[4])};var t}))]}}))}))},this.getTokenLevelDelegations=function(e){return d(t,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.delegationContract.callStatic.getTokenLevelDelegations(e)];case 1:return[2,t.sent().map((function(e){return{contract:e[0],tokenId:Number(e[1]),delegate:e[2]}}))]}}))}))},this.delegateForAll=function(e,n){return d(t,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.delegationContract.connect(this.signer).delegateForAll(e,n)];case 1:return[2,t.sent()]}}))}))},this.delegateForContract=function(e,n,a){return d(t,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.delegationContract.connect(this.signer).delegateForContract(e,n,a)];case 1:return[2,t.sent()]}}))}))},this.delegateForToken=function(e,n,a,r){return d(t,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.delegationContract.connect(this.signer).delegateForToken(e,n,a,r)];case 1:return[2,t.sent()]}}))}))},this.revokeAllDelegates=function(){return d(t,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,this.delegationContract.connect(this.signer).revokeAllDelegates()];case 1:return[2,e.sent()]}}))}))},this.revokeDelegate=function(e){return d(t,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.delegationContract.connect(this.signer).revokeDelegate(e)];case 1:return[2,t.sent()]}}))}))},this.revokeSelf=function(e){return d(t,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.delegationContract.connect(this.signer).revokeSelf(e)];case 1:return[2,t.sent()]}}))}))},this.provider=function(){var e;return"undefined"!==typeof l&&(null===(e=l.env)||void 0===e?void 0:e.PROVIDER_URL)?new s.r(l.env.PROVIDER_URL):window.ethereum?new o.Q(window.ethereum):null}(),this.signer=null,e&&(this.provider=e,this.signer=this.provider.getSigner()),this.delegationContract=new a.Contract("0x00000000000076a84fef008cdabe6409d2fe638b",i,this.provider)})}}]);