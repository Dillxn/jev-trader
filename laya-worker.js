var Ct=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var aa=Object.defineProperty,r0=Object.getOwnPropertyDescriptor,i0=Object.getOwnPropertyNames,n0=Object.prototype.hasOwnProperty,a0=(e=>typeof Ct<"u"?Ct:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof Ct<"u"?Ct:t)[r]}):e)(function(e){if(typeof Ct<"u")return Ct.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),P=(e,t,r)=>()=>{if(r)throw r[0];try{return e&&(t=e(e=0)),t}catch(i){throw r=[i],i}},er=(e,t)=>{for(var r in t)aa(e,r,{get:t[r],enumerable:!0})},s0=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of i0(t))!n0.call(e,n)&&n!==r&&aa(e,n,{get:()=>t[n],enumerable:!(i=r0(t,n))||i.enumerable});return e},$r=e=>s0(aa({},"__esModule",{value:!0}),e),sr,yt,Zt,No,$p,vp=P(()=>{"use strict";sr=new Map,yt=[],Zt=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=sr.get(e);if(i===void 0)sr.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=yt.indexOf(e);n!==-1&&yt.splice(n,1);for(let a=0;a<yt.length;a++)if(sr.get(yt[a]).priority<=r){yt.splice(a,0,e);return}yt.push(e)}return}throw new TypeError("not a valid backend")},No=async e=>{let t=sr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},$p=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?yt:r,n,a=[],s=new Set;for(let l of i){let d=await No(l);typeof d=="string"?a.push({name:l,err:d}):(n||(n=d),n===d&&s.add(l))}if(!n)throw new Error(`no available backend found. ERR: ${a.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of a)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let o=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[n,new Proxy(e,{get:(l,d)=>d==="executionProviders"?o:Reflect.get(l,d)})]}}),o0=P(()=>{"use strict";vp()}),xp,u0=P(()=>{"use strict";xp="1.30.0"}),Wi,Ce,kp=P(()=>{"use strict";u0(),Wi="warning",Ce={wasm:{},webgl:{},webgpu:{},versions:{common:xp},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Wi=e}},get logLevel(){return Wi}},Object.defineProperty(Ce,"logLevel",{enumerable:!0})}),ge,l0=P(()=>{"use strict";kp(),ge=Ce}),Sp,Tp,d0=P(()=>{"use strict";Sp=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let n,a;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[3]):(n=e.dims[3],a=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",o=t?.norm,l,d;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let h=a*n,c=0,g=h,y=h*2,_=-1;s==="RGBA"?(c=0,g=h,y=h*2,_=h*3):s==="RGB"?(c=0,g=h,y=h*2):s==="RBG"&&(c=0,y=h,g=h*2);for(let b=0;b<a;b++)for(let k=0;k<n;k++){let $=(e.data[c++]-d[0])*l[0],w=(e.data[g++]-d[1])*l[1],T=(e.data[y++]-d[2])*l[2],S=_===-1?255:(e.data[_++]-d[3])*l[3];i.fillStyle="rgba("+$+","+w+","+T+","+S+")",i.fillRect(k,b,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Tp=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let n,a,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[1],s=e.dims[3]):(n=e.dims[3],a=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t?.norm,d,h;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?h=[0,0,0,0]:typeof l.bias=="number"?h=[l.bias,l.bias,l.bias,l.bias]:(h=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(h[3]=l.bias[3]));let c=a*n;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,y=0,_=1,b=2,k=3,$=0,w=c,T=c*2,S=-1;o==="RGBA"?($=0,w=c,T=c*2,S=c*3):o==="RGB"?($=0,w=c,T=c*2):o==="RBG"&&($=0,T=c,w=c*2),i=r.createImageData(n,a);for(let I=0;I<a*n;y+=g,_+=g,b+=g,k+=g,I++)i.data[y]=(e.data[$++]-h[0])*d[0],i.data[_]=(e.data[w++]-h[1])*d[1],i.data[b]=(e.data[T++]-h[2])*d[2],i.data[k]=S===-1?255:(e.data[S++]-h[3])*d[3]}else throw new Error("Can not access image data");return i}}),qr,Ep,Ip,zp,Cp,Ap,p0=P(()=>{"use strict";sa(),qr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,n=t.norm??{mean:255,bias:0},a,s;typeof n.mean=="number"?a=[n.mean,n.mean,n.mean,n.mean]:a=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?s=[n.bias,n.bias,n.bias,n.bias]:s=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*i,h=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),c=4,g=0,y=1,_=2,b=3,k=0,$=d,w=d*2,T=-1;o==="RGB"&&(c=3,g=0,y=1,_=2,b=-1),l==="RGBA"?T=d*3:l==="RBG"?(k=0,w=d,$=d*2):l==="BGR"&&(w=0,$=d,k=d*2);for(let S=0;S<d;S++,g+=c,_+=c,y+=c,b+=c)h[k++]=(e[g]+s[0])/a[0],h[$++]=(e[y]+s[1])/a[1],h[w++]=(e[_]+s[2])/a[2],T!==-1&&b!==-1&&(h[T++]=(e[b]+s[3])/a[3]);return l==="RGBA"?new De("float32",h,[1,4,r,i]):new De("float32",h,[1,3,r,i])},Ep=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,o=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=h=>typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||h instanceof OffscreenCanvas?h.getContext("2d"):null;if(r){let h=l();h.width=e.width,h.height=e.height;let c=d(h);if(c!=null){let g=e.height,y=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,y=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=g,o.width=y}else o.tensorFormat="RGBA",o.height=g,o.width=y;c.drawImage(e,0,0),s=c.getImageData(0,0,y,g).data}else throw new Error("Can not access image data")}else if(i){let h,c;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(h=t.resizedHeight,c=t.resizedWidth):(h=e.height,c=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=h,o.width=c,t!==void 0){let g=l();g.width=c,g.height=h;let y=d(g);if(y!=null)y.putImageData(e,0,0),s=y.getImageData(0,0,c,h).data;else throw new Error("Can not access image data")}else s=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let h=l();h.width=e.width,h.height=e.height;let c=d(h);if(c!=null){let g=e.height,y=e.width;return c.drawImage(e,0,0,y,g),s=c.getImageData(0,0,y,g).data,o.height=g,o.width=y,qr(s,o)}else throw new Error("Can not access image data")}else{if(a)return new Promise((h,c)=>{let g=l(),y=d(g);if(!e||!y)return c();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{g.width=_.width,g.height=_.height,y.drawImage(_,0,0,g.width,g.height);let b=y.getImageData(0,0,g.width,g.height);o.height=g.height,o.width=g.width,h(qr(b.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return qr(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Ip=(e,t)=>{let{width:r,height:i,download:n,dispose:a}=t,s=[1,i,r,4];return new De({location:"texture",type:"float32",texture:e,dims:s,download:n,dispose:a})},zp=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new De({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:n,dispose:a})},Cp=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new De({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:n,dispose:a})},Ap=(e,t,r)=>new De({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Mt,_r,Vi,Op,c0=P(()=>{"use strict";Mt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),_r=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Vi=!1,Op=()=>{if(!Vi){Vi=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(Mt.set("int64",BigInt64Array),_r.set(BigInt64Array,"int64")),t&&(Mt.set("uint64",BigUint64Array),_r.set(BigUint64Array,"uint64")),i?(Mt.set("float16",r),_r.set(r,"float16")):Mt.set("float16",Uint16Array)}}}),Rp,Bp,h0=P(()=>{"use strict";sa(),Rp=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},Bp=(e,t)=>{switch(e.location){case"cpu":return new De(e.type,e.data,t);case"cpu-pinned":return new De({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new De({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new De({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new De({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),De,sa=P(()=>{"use strict";d0(),p0(),c0(),h0(),De=class{constructor(e,t,r){Op();let i,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,n=e.dims,e.location){case"cpu-pinned":{let s=Mt.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(i=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=Mt.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",s=e;else if(l==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let l=_r.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");n=o,this.cpuData=s,this.dataLocation="cpu"}let a=Rp(n);if(this.cpuData&&a!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=n,this.size=a}static async fromImage(e,t){return Ep(e,t)}static fromTexture(e,t){return Ip(e,t)}static fromGpuBuffer(e,t){return zp(e,t)}static fromMLTensor(e,t){return Cp(e,t)}static fromPinnedBuffer(e,t,r){return Ap(e,t,r)}toDataURL(e){return Sp(this,e)}toImageData(e){return Tp(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Bp(this,e)}}}),Re,Np=P(()=>{"use strict";sa(),Re=De}),ii,Fi,rt,Xe,Ut,Lt,Mp=P(()=>{"use strict";kp(),ii=(e,t)=>{(typeof Ce.trace>"u"?!Ce.wasm.trace:!Ce.trace)||console.timeStamp(`${e}::ORT::${t}`)},Fi=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let n=0;n<r.length;n++){if(i&&!r[n].includes("TRACE_FUNC")){let a=`FUNC_${e}::${r[n].trim().split(" ")[1]}`;t&&(a+=`::${t}`),ii("CPU",a);return}r[n].includes("TRACE_FUNC")&&(i=!0)}},rt=e=>{(typeof Ce.trace>"u"?!Ce.wasm.trace:!Ce.trace)||Fi("BEGIN",e)},Xe=e=>{(typeof Ce.trace>"u"?!Ce.wasm.trace:!Ce.trace)||Fi("END",e)},Ut=e=>{(typeof Ce.trace>"u"?!Ce.wasm.trace:!Ce.trace)||console.time(`ORT::${e}`)},Lt=e=>{(typeof Ce.trace>"u"?!Ce.wasm.trace:!Ce.trace)||console.timeEnd(`ORT::${e}`)}}),Dp,f0=P(()=>{"use strict";vp(),Np(),Mp(),Dp=class Pp{constructor(t){this.handler=t}async run(t,r,i){rt(),Ut("InferenceSession.run");let n={},a={};if(typeof t!="object"||t===null||t instanceof Re||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Re)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);n[d]=null}if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,h=Object.getOwnPropertyNames(r);for(let c of this.outputNames)if(h.indexOf(c)!==-1){let g=r[c];(g===null||g instanceof Re)&&(d=!0,s=!1,n[c]=g)}if(d){if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else a=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)n[d]=null;let o=await this.handler.run(t,n,a),l={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let h=o[d];h instanceof Re?l[d]=h:l[d]=new Re(h.type,h.data,h.dims)}return Lt("InferenceSession.run"),Xe(),l}async release(){return this.handler.dispose()}static async create(t,r,i,n){rt(),Ut("InferenceSession.create");let a,s={};if(typeof t=="string"){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let h=t,c=0,g=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(c=r,!Number.isSafeInteger(c))throw new RangeError("'byteOffset' must be an integer.");if(c<0||c>=h.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${h.byteLength}).`);if(g=t.byteLength-c,typeof i=="number"){if(g=i,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||c+g>h.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${h.byteLength-c}].`);if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(h,c,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await $p(s),d=await o.createInferenceSessionHandler(a,l);return Lt("InferenceSession.create"),Xe(),new Pp(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),xr,m0=P(()=>{"use strict";f0(),xr=Dp}),g0=P(()=>{"use strict"}),_0=P(()=>{"use strict"}),y0=P(()=>{"use strict"}),w0=P(()=>{"use strict"}),b0={};er(b0,{InferenceSession:()=>xr,TRACE:()=>ii,TRACE_EVENT_BEGIN:()=>Ut,TRACE_EVENT_END:()=>Lt,TRACE_FUNC_BEGIN:()=>rt,TRACE_FUNC_END:()=>Xe,Tensor:()=>Re,env:()=>ge,registerBackend:()=>Zt});var qe=P(()=>{"use strict";o0(),l0(),m0(),Np(),g0(),_0(),Mp(),y0(),w0()}),oa=P(()=>{"use strict"}),Up={};er(Up,{default:()=>Lp});var Gi,Hi,Lp,$0=P(()=>{"use strict";Xf(),Ft(),ua(),Gi="ort-wasm-proxy-worker",Hi=globalThis.self?.name===Gi,Hi&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":la(r.wasm).then(()=>{Ta(r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})})},i=>{postMessage({type:t,err:i})});break;case"init-ep":{let{epName:i,env:n}=r;Ea(n,i).then(()=>{postMessage({type:t})},a=>{postMessage({type:t,err:a})});break}case"copy-from":{let{buffer:i}=r,n=di(i);postMessage({type:t,out:n});break}case"create":{let{model:i,options:n}=r;Ia(i,n).then(a=>{postMessage({type:t,out:a})},a=>{postMessage({type:t,err:a})});break}case"release":za(r),postMessage({type:t});break;case"run":{let{sessionId:i,inputIndices:n,inputs:a,outputIndices:s,options:o}=r;Ca(i,n,a,s,new Array(s.length).fill(null),o).then(l=>{l.some(d=>d[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:l},Oa([...a,...l]))},l=>{postMessage({type:t,err:l})});break}case"end-profiling":Aa(r),postMessage({type:t});break;default:}}catch(i){postMessage({type:t,err:i})}}),Lp=Hi?null:e=>new Worker(e??Me,{type:"module",name:Gi})}),qp={};er(qp,{default:()=>Wp});async function Mo(e={}){var t=e,r=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,n=i&&self.name?.startsWith("em-pthread");t.mountExternalData=(u,p)=>{u.startsWith("./")&&(u=u.substring(2)),(t.ad||(t.ad=new Map)).set(u,p)},t.unmountExternalData=()=>{delete t.ad,delete t.Yd,delete t.Xd,delete t.be},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=u=>async(...p)=>{try{if(t.$c)throw Error("Session already started");let m=t.$c={Nd:p[0],errors:[]},f=await u(...p);if(t.$c!==m)throw Error("Session mismatch");t.hd?.flush();let v=m.errors;if(0<v.length){let E=await Promise.all(v);if(E=E.filter(A=>A),0<E.length)throw Error(E.join(`
`))}return f}finally{t.$c=null}};t.jsepInit=(u,p)=>{if(u==="webgpu"){[t.hd,t.Dd,t.Hd,t.jd,t.Gd,t.bc,t.Id,t.Kd,t.Ed,t.Fd,t.Jd]=p;let m=t.hd;t.jsepRegisterBuffer=(f,v,E,A)=>m.registerBuffer(f,v,E,A),t.jsepGetBuffer=f=>m.getBuffer(f),t.jsepCreateDownloader=(f,v,E)=>m.createDownloader(f,v,E),t.jsepOnCreateSession=f=>{m.onCreateSession(f)},t.jsepOnReleaseSession=f=>{m.onReleaseSession(f)},t.jsepOnRunStart=f=>m.onRunStart(f),t.Ld=(f,v)=>{m.upload(f,v)}}else if(u==="webnn"){let m=p[0];[t.Vd,t.vd,t.webnnEnsureTensor,t.wd,t.webnnDownloadTensor,t.Ud,t.webnnEnableTraceEvent]=p.slice(1),t.webnnReleaseTensorId=t.vd,t.webnnUploadTensor=t.wd,t.webnnRegisterMLContext=t.Ud,t.webnnOnRunStart=f=>m.onRunStart(f),t.webnnOnRunEnd=m.onRunEnd.bind(m),t.webnnOnReleaseSession=f=>{m.onReleaseSession(f)},t.webnnCreateMLTensorDownloader=(f,v)=>m.createMLTensorDownloader(f,v),t.webnnRegisterMLTensor=(f,v,E,A)=>m.registerMLTensor(f,v,E,A),t.webnnCreateMLContext=f=>m.createMLContext(f),t.webnnRegisterGraphInput=m.registerGraphInput.bind(m),t.webnnIsGraphInput=m.isGraphInput.bind(m),t.webnnRegisterGraphOutput=m.registerGraphOutput.bind(m),t.webnnIsGraphOutput=m.isGraphOutput.bind(m),t.webnnCreateTemporaryTensor=m.createTemporaryTensor.bind(m),t.webnnIsGraphInputOutputTypeSupported=m.isGraphInputOutputTypeSupported.bind(m)}};let s=()=>{let u=p=>(...m)=>{let f=Je;return m=p(...m),Je!=f?new Promise((v,E)=>{zi={resolve:v,reject:E}}):m};(()=>{for(let p of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[p]=u(t[p])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s?.()};var o,l,d=(u,p)=>{throw p},h=import.meta.url,c="";if(r||i){try{c=new URL(".",h).href}catch{}i&&(l=u=>{var p=new XMLHttpRequest;return p.open("GET",u,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),o=async u=>{if(C(u))return new Promise((m,f)=>{var v=new XMLHttpRequest;v.open("GET",u,!0),v.responseType="arraybuffer",v.onload=()=>{v.status==200||v.status==0&&v.response?m(v.response):f(v.status)},v.onerror=f,v.send(null)});var p=await fetch(u,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw Error(p.status+" : "+p.url)}}var g,y,_,b,k,$,w=console.log.bind(console),T=console.error.bind(console),S=w,I=T,z=!1,C=u=>u.startsWith("file://");function x(){ft.buffer!=Z.buffer&&K()}if(n){let u=function(p){try{var m=p.data,f=m.Vc;if(f==="load"){let v=[];self.onmessage=E=>v.push(E),$=()=>{postMessage({Vc:"loaded"});for(let E of v)u(E);self.onmessage=u};for(let E of m.Ad)t[E]&&!t[E].proxy||(t[E]=(...A)=>{postMessage({Vc:"callHandler",yd:E,args:A})},E=="print"&&(S=t[E]),E=="printErr"&&(I=t[E]));ft=m.Rd,K(),y=m.Sd,ve(),Lr()}else if(f==="run"){(function(v){var E=(x(),U)[v+52>>>2>>>0];v=(x(),U)[v+56>>>2>>>0],Vs(E,E-v),se(E)})(m.Uc),Bi(m.Uc,0,0,1,0,0),Va(),Ti(m.Uc),q||(Ds(),q=!0);try{Gm(m.Pd,m.ed)}catch(v){if(v!="unwind")throw v}}else m.target!=="setimmediate"&&(f==="checkMailbox"?q&&Rr():f&&(I(`worker: received unknown command ${f}`),I(m)))}catch(v){throw Ps(),v}};var M=u,q=!1;self.onunhandledrejection=p=>{throw p.reason||p},self.onmessage=u}var Z,W,H,oe,O,U,ee,te,Q,ne,D,Y=!1;function K(){var u=ft.buffer;t.HEAP8=Z=new Int8Array(u),H=new Int16Array(u),t.HEAPU8=W=new Uint8Array(u),oe=new Uint16Array(u),t.HEAP32=O=new Int32Array(u),t.HEAPU32=U=new Uint32Array(u),ee=new Float32Array(u),te=new Float64Array(u),Q=new BigInt64Array(u),ne=new BigUint64Array(u)}function G(){Y=!0,n?$():st.ub()}function $e(u){throw I(u="Aborted("+u+")"),z=!0,u=new WebAssembly.RuntimeError(u+". Build with -sASSERTIONS for more info."),k?.(u),u}function Oe(){return{a:{ma:g_,hb:m_,g:Hm,J:jm,f:Km,o:Xm,i:Zm,$:Qm,b:Ym,S:Jm,Ha:Xa,n:eg,aa:Ja,Ya:es,Da:ts,Fa:rs,Za:is,Wa:ns,Pa:as,Va:ss,ka:os,Ea:us,Ba:ls,Xa:ds,Ca:ps,cb:tg,fa:ig,wa:ng,ua:sg,ea:ug,N:lg,H:dg,va:pg,_:yg,xa:wg,Sa:bg,za:vg,Ia:xg,sa:kg,ga:Sg,Ra:Ti,$a:Tg,Q:Cg,r:Ng,c:ki,ib:Mg,y:Dg,M:Pg,D:Ug,l:Lg,s:ws,jb:qg,I:Wg,R:Vg,j:Fg,u:Gg,q:Hg,k:jg,Ma:Kg,Na:Xg,Oa:Zg,Ka:xs,La:ks,ta:Ss,eb:Yg,bb:t_,v:r_,ba:i_,ha:n_,ab:Jg,V:a_,_a:s_,Aa:o_,F:Qg,U:u_,la:Pr,ya:d_,gb:l_,fb:p_,Ta:zs,Ua:Cs,Ga:wi,T:As,Ja:Os,ja:Rs,Qa:Bs,ia:Ns,lb:J_,na:K_,mb:Y_,oa:j_,G:M_,e:b_,t:y_,w:__,B:C_,nb:F_,Z:V_,x:x_,pa:G_,X:X_,ca:W_,ob:q_,pb:L_,O:A_,qb:P_,qa:U_,rb:D_,L:B_,Y:H_,d:w_,A:v_,m:$_,kb:e0,p:S_,z:T_,C:k_,E:E_,K:O_,ra:N_,P:Z_,da:R_,W:Q_,sb:z_,tb:I_,h:h_,a:ft,db:yi}}}async function ve(){function u(f,v){var E=st=f.exports;f={};for(let[A,N]of Object.entries(E))typeof N=="function"?(E=Eg(N),f[A]=E):f[A]=N;return st=f,st=(function(){var A=st,N=V=>ae=>V(ae)>>>0,L=V=>()=>V()>>>0;return(A=Object.assign({},A)).vb=N(A.vb),A.Zb=L(A.Zb),A.$b=N(A.$b),A.nc=N(A.nc),A.oc=L(A.oc),A.sc=N(A.sc),A})(),qa.push(st.ac),Ms=(f=st).vb,Ds=f.wb,t._OrtInit=f.xb,t._OrtGetLastError=f.yb,t._OrtCreateSessionOptions=f.zb,t._OrtAppendExecutionProvider=f.Ab,t._OrtAddFreeDimensionOverride=f.Bb,t._OrtAddSessionConfigEntry=f.Cb,t._OrtReleaseSessionOptions=f.Db,t._OrtCreateSession=f.Eb,t._OrtReleaseSession=f.Fb,t._OrtGetInputOutputCount=f.Gb,t._OrtGetInputOutputMetadata=f.Hb,t._OrtFree=f.Ib,t._OrtCreateTensor=f.Jb,t._OrtGetTensorData=f.Kb,t._OrtReleaseTensor=f.Lb,t._OrtCreateRunOptions=f.Mb,t._OrtAddRunConfigEntry=f.Nb,t._OrtReleaseRunOptions=f.Ob,t._OrtCreateBinding=f.Pb,t._OrtBindInput=f.Qb,t._OrtBindOutput=f.Rb,t._OrtClearBoundOutputs=f.Sb,t._OrtReleaseBinding=f.Tb,t._OrtRunWithBinding=f.Ub,t._OrtRun=f.Vb,t._OrtEndProfiling=f.Wb,t._JsepOutput=f.Xb,t._JsepGetNodeName=f.Yb,Ur=f.Zb,et=t._free=f._b,nr=t._malloc=f.$b,Bi=f.cc,Ps=f.dc,Us=f.ec,Ls=f.fc,Ni=f.gc,qs=f.hc,Ws=f.ic,le=f.jc,ar=f.kc,Vs=f.lc,se=f.mc,Mi=f.nc,ue=f.oc,Fs=f.pc,Di=f.qc,Gs=f.rc,Hs=f.sc,js=f.tc,Pi=f.uc,Ks=f.vc,Xs=f.wc,Zs=f.xc,Qs=f.yc,Ys=f.zc,Js=f.Ac,eo=f.Bc,to=f.Cc,ro=f.Dc,io=f.Ec,no=f.Fc,ao=f.Gc,so=f.Hc,oo=f.Ic,uo=f.Jc,lo=f.Kc,po=f.Lc,co=f.Mc,ho=f.Nc,fo=f.Oc,mo=f.Pc,go=f.Qc,_o=f.Sc,yo=f.Tc,wo=f.cd,bo=f.dd,$o=f.id,vo=f.nd,xo=f.od,ko=f.pd,So=f.qd,To=f.rd,Eo=f.sd,Io=f.td,zo=f.ud,Co=f.zd,Ao=f.Zd,Oo=f._d,Ro=f.$d,Bo=f.ae,y=v,st}var p,m=Oe();return t.instantiateWasm?new Promise(f=>{t.instantiateWasm(m,(v,E)=>{f(u(v,E))})}):n?u(new WebAssembly.Instance(y,Oe()),y):(D??=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",c):c+"ort-wasm-simd-threaded.jsep.wasm":new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href,p=await(async function(f){var v=D;if(!g&&!C(v))try{var E=fetch(v,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(E,f)}catch(A){I(`wasm streaming compile failed: ${A}`),I("falling back to ArrayBuffer instantiation")}return(async function(A,N){try{var L=await(async function(V){if(!g)try{var ae=await o(V);return new Uint8Array(ae)}catch{}if(V==D&&g)V=new Uint8Array(g);else{if(!l)throw"both async and sync fetching of the wasm failed";V=l(V)}return V})(A);return await WebAssembly.instantiate(L,N)}catch(V){I(`failed to asynchronously prepare wasm: ${V}`),$e(V)}})(v,f)})(m),u(p.instance,p.module))}class ze{name="ExitStatus";constructor(p){this.message=`Program terminated with exit(${p})`,this.status=p}}var me=u=>{u.terminate(),u.onmessage=()=>{}},xe=[],Ne=0,Tt=null,Ir=u=>{ht.length==0&&(Ga(),Fa(ht[0]));var p=ht.pop();if(!p)return 6;rr.push(p),Et[u.Uc]=p,p.Uc=u.Uc;var m={Vc:"run",Pd:u.Od,ed:u.ed,Uc:u.Uc};return p.postMessage(m,u.md),0},ct=0,be=(u,p,...m)=>{var f,v=16*m.length,E=ue(),A=Mi(v),N=A>>>3;for(f of m)typeof f=="bigint"?((x(),Q)[N++>>>0]=1n,(x(),Q)[N++>>>0]=f):((x(),Q)[N++>>>0]=0n,(x(),te)[N++>>>0]=f);return u=Us(u,0,v,A,p),se(E),u};function yi(u){if(n)return be(0,1,u);if(_=u,!(0<ct)){for(var p of rr)me(p);for(p of ht)me(p);ht=[],rr=[],Et={},z=!0}d(0,new ze(u))}function La(u){if(n)return be(1,0,u);wi(u)}var wi=u=>{if(_=u,n)throw La(u),"unwind";yi(u)},ht=[],rr=[],qa=[],Et={},Wa=u=>{var p=u.Uc;delete Et[p],ht.push(u),rr.splice(rr.indexOf(u),1),u.Uc=0,Ls(p)};function Va(){qa.forEach(u=>u())}var Fa=u=>new Promise(p=>{u.onmessage=v=>{var E=v.data;if(v=E.Vc,E.bd&&E.bd!=Ur()){var A=Et[E.bd];A?A.postMessage(E,E.md):I(`Internal error! Worker sent a message "${v}" to target pthread ${E.bd}, but that thread no longer exists!`)}else v==="checkMailbox"?Rr():v==="spawnThread"?Ir(E):v==="cleanupThread"?Or(()=>{Wa(Et[E.Qd])}):v==="loaded"?(u.loaded=!0,p(u)):E.target==="setimmediate"?u.postMessage(E):v==="uncaughtException"?u.onerror(E.error):v==="callHandler"?t[E.yd](...E.args):v&&I(`worker sent an unknown command ${v}`)},u.onerror=v=>{throw I(`worker sent an error! ${v.filename}:${v.lineno}: ${v.message}`),v};var m,f=[];for(m of[])t.propertyIsEnumerable(m)&&f.push(m);u.postMessage({Vc:"load",Ad:f,Rd:ft,Sd:y})});function Ga(){var u=new Worker((()=>{let p=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new p("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});ht.push(u)}var ft,Gm=(u,p)=>{ct=0,u=Pi(u,p),0<ct?_=u:Ni(u)},zr=[],Cr=0;function Hm(u){var p=new bi(u>>>=0);return(x(),Z)[p.Wc+12>>>0]==0&&(Ha(p,!0),Cr--),ja(p,!1),zr.push(p),Hs(u)}var jt=0,jm=()=>{le(0,0);var u=zr.pop();Fs(u.gd),jt=0};function Ha(u,p){p=p?1:0,(x(),Z)[u.Wc+12>>>0]=p}function ja(u,p){p=p?1:0,(x(),Z)[u.Wc+13>>>0]=p}class bi{constructor(p){this.gd=p,this.Wc=p-24}}var $i=u=>{var p=jt;if(!p)return ar(0),0;var m=new bi(p);(x(),U)[m.Wc+16>>>2>>>0]=p;var f=(x(),U)[m.Wc+4>>>2>>>0];if(!f)return ar(0),p;for(var v of u){if(v===0||v===f)break;if(Gs(v,f,m.Wc+16))return ar(v),p}return ar(f),p};function Km(){return $i([])}function Xm(u){return $i([u>>>0])}function Zm(u,p,m,f){return $i([u>>>0,p>>>0,m>>>0,f>>>0])}var Qm=()=>{var u=zr.pop();u||$e("no exception to throw");var p=u.gd;throw(x(),Z)[u.Wc+13>>>0]==0&&(zr.push(u),ja(u,!0),Ha(u,!1),Cr++),Di(p),jt=p};function Ym(u,p,m){var f=new bi(u>>>=0);throw p>>>=0,m>>>=0,(x(),U)[f.Wc+16>>>2>>>0]=0,(x(),U)[f.Wc+4>>>2>>>0]=p,(x(),U)[f.Wc+8>>>2>>>0]=m,Di(u),Cr++,jt=u}var Jm=()=>Cr;function Ka(u,p,m,f){return n?be(2,1,u,p,m,f):Xa(u,p,m,f)}function Xa(u,p,m,f){if(u>>>=0,p>>>=0,m>>>=0,f>>>=0,!globalThis.SharedArrayBuffer)return 6;var v=[];return n&&v.length===0?Ka(u,p,m,f):(u={Od:m,Uc:u,ed:f,md:v},n?(u.Vc="spawnThread",postMessage(u,v),0):Ir(u))}function eg(u){throw jt||=u>>>0,jt}var Za=globalThis.TextDecoder&&new TextDecoder,Qa=(u,p,m,f)=>{if(m=p+m,f)return m;for(;u[p]&&!(p>=m);)++p;return p},Ya=(u,p=0,m,f)=>{if(16<(m=Qa(u,p>>>=0,m,f))-p&&u.buffer&&Za)return Za.decode(u.buffer instanceof ArrayBuffer?u.subarray(p,m):u.slice(p,m));for(f="";p<m;){var v=u[p++];if(128&v){var E=63&u[p++];if((224&v)==192)f+=String.fromCharCode((31&v)<<6|E);else{var A=63&u[p++];65536>(v=(240&v)==224?(15&v)<<12|E<<6|A:(7&v)<<18|E<<12|A<<6|63&u[p++])?f+=String.fromCharCode(v):(v-=65536,f+=String.fromCharCode(55296|v>>10,56320|1023&v))}}else f+=String.fromCharCode(v)}return f},Te=(u,p,m)=>(u>>>=0)?Ya((x(),W),u,p,m):"";function Ja(u,p,m){return n?be(3,1,u,p,m):0}function es(u,p){if(n)return be(4,1,u,p)}function ts(u,p){if(n)return be(5,1,u,p)}function rs(u,p,m){if(n)return be(6,1,u,p,m)}function is(u,p,m){return n?be(7,1,u,p,m):0}function ns(u,p){if(n)return be(8,1,u,p)}function as(u,p,m){if(n)return be(9,1,u,p,m)}function ss(u,p,m,f){if(n)return be(10,1,u,p,m,f)}function os(u,p,m,f){if(n)return be(11,1,u,p,m,f)}function us(u,p,m,f){if(n)return be(12,1,u,p,m,f)}function ls(u){if(n)return be(13,1,u)}function ds(u,p){if(n)return be(14,1,u,p)}function ps(u,p,m){if(n)return be(15,1,u,p,m)}var tg=()=>$e(""),Ye=u=>{u>>>=0;for(var p="";;){var m=(x(),W)[u++>>>0];if(!m)return p;p+=String.fromCharCode(m)}},vi={},xi={},rg={},Kt=class extends Error{constructor(u){super(u),this.name="BindingError"}};function at(u,p,m={}){return(function(f,v,E={}){var A=v.name;if(!f)throw new Kt(`type "${A}" must have a positive integer typeid pointer`);if(xi.hasOwnProperty(f)){if(E.Bd)return;throw new Kt(`Cannot register type '${A}' twice`)}xi[f]=v,delete rg[f],vi.hasOwnProperty(f)&&(v=vi[f],delete vi[f],v.forEach(N=>N()))})(u,p,m)}var cs=(u,p,m)=>{switch(p){case 1:return m?f=>(x(),Z)[f>>>0]:f=>(x(),W)[f>>>0];case 2:return m?f=>(x(),H)[f>>>1>>>0]:f=>(x(),oe)[f>>>1>>>0];case 4:return m?f=>(x(),O)[f>>>2>>>0]:f=>(x(),U)[f>>>2>>>0];case 8:return m?f=>(x(),Q)[f>>>3>>>0]:f=>(x(),ne)[f>>>3>>>0];default:throw new TypeError(`invalid integer width (${p}): ${u}`)}};function ig(u,p,m,f,v){u>>>=0,m>>>=0,p=Ye(p>>>0);let E=A=>A;if(f=f===0n){let A=8*m;E=N=>BigInt.asUintN(A,N),v=E(v)}at(u,{name:p,Rc:E,Yc:(A,N)=>(typeof N=="number"&&(N=BigInt(N)),N),Xc:cs(p,m,!f),Zc:null})}function ng(u,p,m,f){at(u>>>=0,{name:p=Ye(p>>>0),Rc:function(v){return!!v},Yc:function(v,E){return E?m:f},Xc:function(v){return this.Rc((x(),W)[v>>>0])},Zc:null})}var hs=[],It=[0,1,,1,null,1,!0,1,!1,1];function ki(u){9<(u>>>=0)&&--It[u+1]===0&&(It[u]=void 0,hs.push(u))}var Ue=u=>{if(!u)throw new Kt(`Cannot use deleted val. handle = ${u}`);return It[u]},We=u=>{switch(u){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let p=hs.pop()||It.length;return It[p]=u,It[p+1]=1,p}};function Si(u){return this.Rc((x(),U)[u>>>2>>>0])}var ag={name:"emscripten::val",Rc:u=>{var p=Ue(u);return ki(u),p},Yc:(u,p)=>We(p),Xc:Si,Zc:null};function sg(u){return at(u>>>0,ag)}var og=(u,p)=>{switch(p){case 4:return function(m){return this.Rc((x(),ee)[m>>>2>>>0])};case 8:return function(m){return this.Rc((x(),te)[m>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${u}`)}};function ug(u,p,m){m>>>=0,at(u>>>=0,{name:p=Ye(p>>>0),Rc:f=>f,Yc:(f,v)=>v,Xc:og(p,m),Zc:null})}function lg(u,p,m,f,v){u>>>=0,m>>>=0,p=Ye(p>>>0);let E=N=>N;if(f===0){var A=32-8*m;E=N=>N<<A>>>A,v=E(v)}at(u,{name:p,Rc:E,Yc:(N,L)=>L,Xc:cs(p,m,f!==0),Zc:null})}function dg(u,p,m){function f(E){var A=(x(),U)[E>>>2>>>0];return E=(x(),U)[E+4>>>2>>>0],new v((x(),Z).buffer,E,A)}var v=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][p];at(u>>>=0,{name:m=Ye(m>>>0),Rc:f,Xc:f},{Bd:!0})}var mt=(u,p,m)=>{var f=(x(),W);if(p>>>=0,0<m){var v=p;m=p+m-1;for(var E=0;E<u.length;++E){var A=u.codePointAt(E);if(127>=A){if(p>=m)break;f[p++>>>0]=A}else if(2047>=A){if(p+1>=m)break;f[p++>>>0]=192|A>>6,f[p++>>>0]=128|63&A}else if(65535>=A){if(p+2>=m)break;f[p++>>>0]=224|A>>12,f[p++>>>0]=128|A>>6&63,f[p++>>>0]=128|63&A}else{if(p+3>=m)break;f[p++>>>0]=240|A>>18,f[p++>>>0]=128|A>>12&63,f[p++>>>0]=128|A>>6&63,f[p++>>>0]=128|63&A,E++}}f[p>>>0]=0,u=p-v}else u=0;return u},Ar=u=>{for(var p=0,m=0;m<u.length;++m){var f=u.charCodeAt(m);127>=f?p++:2047>=f?p+=2:55296<=f&&57343>=f?(p+=4,++m):p+=3}return p};function pg(u,p){at(u>>>=0,{name:p=Ye(p>>>0),Rc(m){var f=(x(),U)[m>>>2>>>0];return f=Te(m+4,f,!0),et(m),f},Yc(m,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var v=typeof f=="string";if(!(v||ArrayBuffer.isView(f)&&f.BYTES_PER_ELEMENT==1))throw new Kt("Cannot pass non-string to std::string");var E=v?Ar(f):f.length,A=nr(4+E+1),N=A+4;return(x(),U)[A>>>2>>>0]=E,v?mt(f,N,E+1):(x(),W).set(f,N>>>0),m!==null&&m.push(et,A),A},Xc:Si,Zc(m){et(m)}})}var fs=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,cg=(u,p,m)=>{if(u>>>=1,16<(p=Qa((x(),oe),u,p/2,m))-u&&fs)return fs.decode((x(),oe).slice(u,p));for(m="";u<p;++u){var f=(x(),oe)[u>>>0];m+=String.fromCharCode(f)}return m},hg=(u,p,m)=>{if(m??=2147483647,2>m)return 0;var f=p;m=(m-=2)<2*u.length?m/2:u.length;for(var v=0;v<m;++v){var E=u.charCodeAt(v);(x(),H)[p>>>1>>>0]=E,p+=2}return(x(),H)[p>>>1>>>0]=0,p-f},fg=u=>2*u.length,mg=(u,p,m)=>{var f="";u>>>=2;for(var v=0;!(v>=p/4);v++){var E=(x(),U)[u+v>>>0];if(!E&&!m)break;f+=String.fromCodePoint(E)}return f},gg=(u,p,m)=>{if(p>>>=0,m??=2147483647,4>m)return 0;var f=p;m=f+m-4;for(var v=0;v<u.length;++v){var E=u.codePointAt(v);if(65535<E&&v++,(x(),O)[p>>>2>>>0]=E,(p+=4)+4>m)break}return(x(),O)[p>>>2>>>0]=0,p-f},_g=u=>{for(var p=0,m=0;m<u.length;++m)65535<u.codePointAt(m)&&m++,p+=4;return p};function yg(u,p,m){if(u>>>=0,p>>>=0,m=Ye(m>>>=0),p===2)var f=cg,v=hg,E=fg;else f=mg,v=gg,E=_g;at(u,{name:m,Rc:A=>{var N=(x(),U)[A>>>2>>>0];return N=f(A+4,N*p,!0),et(A),N},Yc:(A,N)=>{if(typeof N!="string")throw new Kt(`Cannot pass non-string to C++ string type ${m}`);var L=E(N),V=nr(4+L+p);return(x(),U)[V>>>2>>>0]=L/p,v(N,V+4,L+p),A!==null&&A.push(et,V),V},Xc:Si,Zc(A){et(A)}})}function wg(u,p){at(u>>>=0,{Cd:!0,name:p=Ye(p>>>0),Rc:()=>{},Yc:()=>{}})}function bg(u){Bi(u>>>0,!i,1,!r,131072,!1),Va()}var Or=u=>{if(!z)try{if(u(),!(0<ct))try{n?Ur()&&Ni(_):wi(_)}catch(p){p instanceof ze||p=="unwind"||d(0,p)}}catch(p){p instanceof ze||p=="unwind"||d(0,p)}},$g=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Ti(u){u>>>=0,$g||(Atomics.waitAsync((x(),O),u>>>2,u).value.then(Rr),u+=128,Atomics.store((x(),O),u>>>2,1))}var Rr=()=>Or(()=>{var u=Ur();u&&(Ti(u),Ws())});function vg(u,p){(u>>>=0)==p>>>0?setTimeout(Rr):n?postMessage({bd:u,Vc:"checkMailbox"}):(u=Et[u])&&u.postMessage({Vc:"checkMailbox"})}var Ei=[];function xg(u,p,m,f,v){for(p>>>=0,v>>>=0,Ei.length=0,m=v>>>3,f=v+f>>>3;m<f;){var E;E=(x(),Q)[m++>>>0]?(x(),Q)[m++>>>0]:(x(),te)[m++>>>0],Ei.push(E)}return(p?Ui[p]:f_[u])(...Ei)}var kg=()=>{ct=0};function Sg(u){u>>>=0,n?postMessage({Vc:"cleanupThread",Qd:u}):Wa(Et[u])}function Tg(u){}var Br=u=>{try{u()}catch(p){$e(p)}};function Eg(u){var p=(...m)=>{Nr.push(u);try{return u(...m)}finally{z||(Nr.pop(),Je&&gt===1&&Nr.length===0&&(gt=0,ct+=1,Br(Oo),typeof Fibers<"u"&&Fibers.de()))}};return _s.set(u,p),p}var gt=0,Je=null,ms=0,Nr=[],Ii=new Map,gs=new Map,_s=new Map,Ig=0,zi=null,zg=[],ys=u=>(function(p){if(!z){if(gt===0){var m=!1,f=!1;p((v=0)=>{if(!z&&(ms=v,m=!0,f)){gt=2,Br(()=>Ro(Je)),typeof MainLoop<"u"&&MainLoop.xd&&MainLoop.resume(),v=!1;try{var E=(function(){var L=(x(),O)[Je+8>>>2>>>0];return L=gs.get(L),L=_s.get(L),--ct,L()})()}catch(L){E=L,v=!0}var A=!1;if(!Je){var N=zi;N&&(zi=null,(v?N.reject:N.resolve)(E),A=!0)}if(v&&!A)throw E}}),f=!0,m||(gt=1,Je=(function(){var v=nr(65548),E=v+12;if((x(),U)[v>>>2>>>0]=E,(x(),U)[v+4>>>2>>>0]=E+65536,E=Nr[0],!Ii.has(E)){var A=Ig++;Ii.set(E,A),gs.set(A,E)}return E=Ii.get(E),(x(),O)[v+8>>>2>>>0]=E,v})(),typeof MainLoop<"u"&&MainLoop.xd&&MainLoop.pause(),Br(()=>Ao(Je)))}else gt===2?(gt=0,Br(Bo),et(Je),Je=null,zg.forEach(Or)):$e(`invalid state: ${gt}`);return ms}})(p=>{u().then(p)});function Cg(u){return u>>>=0,ys(async()=>{var p=await Ue(u);return We(p)})}var Ci=[],Ag=u=>{var p=Ci.length;return Ci.push(u),p},Og=(u,p)=>{for(var m=Array(u),f=0;f<u;++f){var v=f,E=(x(),U)[p+4*f>>>2>>>0],A=xi[E];if(A===void 0)throw u=`parameter ${f}`,E=Ms(E),p=Ye(E),et(E),new Kt(`${u} has unknown type ${p}`);m[v]=A}return m},Rg=(u,p,m)=>{var f=[];return u=u(f,m),f.length&&((x(),U)[p>>>2>>>0]=We(f)),u},Bg={},Mr=u=>{var p=Bg[u];return p===void 0?Ye(u):p};function Ng(u,p,m){var[f,...v]=Og(u,p>>>0);p=f.Yc.bind(f);var E=v.map(L=>L.Xc.bind(L));u--;var A={toValue:Ue};switch(u=E.map((L,V)=>{var ae=`argFromPtr${V}`;return A[ae]=L,`${ae}(args${V?"+"+8*V:""})`}),m){case 0:var N="toValue(handle)";break;case 2:N="new (toValue(handle))";break;case 3:N="";break;case 1:A.getStringOrSymbol=Mr,N="toValue(handle)[getStringOrSymbol(methodName)]"}return N+=`(${u})`,f.Cd||(A.toReturnWire=p,A.emval_returnValue=Rg,N=`return emval_returnValue(toReturnWire, destructorsRef, ${N})`),N=`return function (handle, methodName, destructorsRef, args) {
  ${N}
  }`,m=new Function(Object.keys(A),N)(...Object.values(A)),N=`methodCaller<(${v.map(L=>L.name)}) => ${f.name}>`,Ag(Object.defineProperty(m,"name",{value:N}))}function Mg(u,p){return p>>>=0,(u=Ue(u>>>0))==Ue(p)}function Dg(u){return(u>>>=0)?(u=Mr(u),We(globalThis[u])):We(globalThis)}function Pg(u){return u=Mr(u>>>0),We(t[u])}function Ug(u,p){return p>>>=0,u=Ue(u>>>0),p=Ue(p),We(u[p])}function Lg(u){9<(u>>>=0)&&(It[u+1]+=1)}function ws(u,p,m,f,v){return Ci[u>>>0](p>>>0,m>>>0,f>>>0,v>>>0)}function qg(u,p,m,f,v){return ws(u>>>0,p>>>0,m>>>0,f>>>0,v>>>0)}function Wg(){return We([])}function Vg(u){u=Ue(u>>>0);for(var p=Array(u.length),m=0;m<u.length;m++)p[m]=u[m];return We(p)}function Fg(u){return We(Mr(u>>>0))}function Gg(){return We({})}function Hg(u){for(var p=Ue(u>>>=0);p.length;){var m=p.pop();p.pop()(m)}ki(u)}function jg(u,p,m){p>>>=0,m>>>=0,u=Ue(u>>>0),p=Ue(p),m=Ue(m),u[p]=m}function Kg(u,p){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),p>>>=0,u=new Date(1e3*u),(x(),O)[p>>>2>>>0]=u.getUTCSeconds(),(x(),O)[p+4>>>2>>>0]=u.getUTCMinutes(),(x(),O)[p+8>>>2>>>0]=u.getUTCHours(),(x(),O)[p+12>>>2>>>0]=u.getUTCDate(),(x(),O)[p+16>>>2>>>0]=u.getUTCMonth(),(x(),O)[p+20>>>2>>>0]=u.getUTCFullYear()-1900,(x(),O)[p+24>>>2>>>0]=u.getUTCDay(),u=(u.getTime()-Date.UTC(u.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(x(),O)[p+28>>>2>>>0]=u}var bs=u=>u%4==0&&(u%100!=0||u%400==0),$s=[0,31,60,91,121,152,182,213,244,274,305,335],vs=[0,31,59,90,120,151,181,212,243,273,304,334];function Xg(u,p){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),p>>>=0,u=new Date(1e3*u),(x(),O)[p>>>2>>>0]=u.getSeconds(),(x(),O)[p+4>>>2>>>0]=u.getMinutes(),(x(),O)[p+8>>>2>>>0]=u.getHours(),(x(),O)[p+12>>>2>>>0]=u.getDate(),(x(),O)[p+16>>>2>>>0]=u.getMonth(),(x(),O)[p+20>>>2>>>0]=u.getFullYear()-1900,(x(),O)[p+24>>>2>>>0]=u.getDay();var m=(bs(u.getFullYear())?$s:vs)[u.getMonth()]+u.getDate()-1|0;(x(),O)[p+28>>>2>>>0]=m,(x(),O)[p+36>>>2>>>0]=-60*u.getTimezoneOffset(),m=new Date(u.getFullYear(),6,1).getTimezoneOffset();var f=new Date(u.getFullYear(),0,1).getTimezoneOffset();u=0|(m!=f&&u.getTimezoneOffset()==Math.min(f,m)),(x(),O)[p+32>>>2>>>0]=u}function Zg(u){u>>>=0;var p=new Date((x(),O)[u+20>>>2>>>0]+1900,(x(),O)[u+16>>>2>>>0],(x(),O)[u+12>>>2>>>0],(x(),O)[u+8>>>2>>>0],(x(),O)[u+4>>>2>>>0],(x(),O)[u>>>2>>>0],0),m=(x(),O)[u+32>>>2>>>0],f=p.getTimezoneOffset(),v=new Date(p.getFullYear(),6,1).getTimezoneOffset(),E=new Date(p.getFullYear(),0,1).getTimezoneOffset(),A=Math.min(E,v);return 0>m?(x(),O)[u+32>>>2>>>0]=+(v!=E&&A==f):0<m!=(A==f)&&(v=Math.max(E,v),p.setTime(p.getTime()+6e4*((0<m?A:v)-f))),(x(),O)[u+24>>>2>>>0]=p.getDay(),m=(bs(p.getFullYear())?$s:vs)[p.getMonth()]+p.getDate()-1|0,(x(),O)[u+28>>>2>>>0]=m,(x(),O)[u>>>2>>>0]=p.getSeconds(),(x(),O)[u+4>>>2>>>0]=p.getMinutes(),(x(),O)[u+8>>>2>>>0]=p.getHours(),(x(),O)[u+12>>>2>>>0]=p.getDate(),(x(),O)[u+16>>>2>>>0]=p.getMonth(),(x(),O)[u+20>>>2>>>0]=p.getYear(),u=p.getTime(),BigInt(isNaN(u)?-1:u/1e3)}function xs(u,p,m,f,v,E,A){return n?be(16,1,u,p,m,f,v,E,A):-52}function ks(u,p,m,f,v,E){if(n)return be(17,1,u,p,m,f,v,E)}var ir={},Qg=()=>performance.timeOrigin+performance.now();function Ss(u,p){if(n)return be(18,1,u,p);if(ir[u]&&(clearTimeout(ir[u].id),delete ir[u]),!p)return 0;var m=setTimeout(()=>{delete ir[u],Or(()=>qs(u,performance.timeOrigin+performance.now()))},p);return ir[u]={id:m,ce:p},0}function Yg(u,p,m,f){u>>>=0,p>>>=0,m>>>=0,f>>>=0;var v=new Date().getFullYear(),E=new Date(v,0,1).getTimezoneOffset();v=new Date(v,6,1).getTimezoneOffset();var A=Math.max(E,v);(x(),U)[u>>>2>>>0]=60*A,(x(),O)[p>>>2>>>0]=+(E!=v),u=(p=N=>{var L=Math.abs(N);return`UTC${0<=N?"-":"+"}${String(Math.floor(L/60)).padStart(2,"0")}${String(L%60).padStart(2,"0")}`})(E),p=p(v),v<E?(mt(u,m,17),mt(p,f,17)):(mt(u,f,17),mt(p,m,17))}var Jg=()=>Date.now(),e_=1;function t_(u,p,m){if(m>>>=0,!(0<=u&&3>=u))return 28;if(u===0)u=Date.now();else{if(!e_)return 52;u=performance.timeOrigin+performance.now()}return u=Math.round(1e6*u),(x(),Q)[m>>>3>>>0]=BigInt(u),0}var Ai=[],Ts=(u,p)=>{Ai.length=0;for(var m;m=(x(),W)[u++>>>0];){var f=m!=105;p+=(f&=m!=112)&&p%8?4:0,Ai.push(m==112?(x(),U)[p>>>2>>>0]:m==106?(x(),Q)[p>>>3>>>0]:m==105?(x(),O)[p>>>2>>>0]:(x(),te)[p>>>3>>>0]),p+=f?8:4}return Ai};function r_(u,p,m){return u>>>=0,p=Ts(p>>>0,m>>>0),Ui[u](...p)}function i_(u,p,m){return u>>>=0,p=Ts(p>>>0,m>>>0),Ui[u](...p)}var n_=()=>{};function a_(u,p){return I(Te(u>>>0,p>>>0))}var s_=()=>{throw ct+=1,"unwind"};function o_(){return 4294901760}var u_=()=>navigator.hardwareConcurrency,zt={},Dr=u=>{var p;return(p=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(u))?+p[1]:(p=/:(\d+):\d+(?:\)|$)/.exec(u))?2147483648|+p[1]:0},Es=u=>{for(var p of u)(u=Dr(p))&&(zt[u]=p)};function l_(){var u=Error().stack.toString().split(`
`);return u[0]=="Error"&&u.shift(),Es(u),zt.kd=Dr(u[3]),zt.Md=u,zt.kd}function Pr(u){if(!(u=zt[u>>>0]))return 0;var p;if(p=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(u))u=p[1];else if(p=/^\s+at (.*) \(.*\)$/.exec(u))u=p[1];else{if(!(p=/^(.+?)@/.exec(u)))return 0;u=p[1]}et(Pr.ld??0),p=Ar(u)+1;var m=nr(p);return m&&mt(u,m,p),Pr.ld=m,Pr.ld}function d_(u){u>>>=0;var p=(x(),W).length;if(u<=p||4294901760<u)return!1;for(var m=1;4>=m;m*=2){var f=p*(1+.2/m);f=Math.min(f,u+100663296);e:{f=(Math.min(4294901760,65536*Math.ceil(Math.max(u,f)/65536))-ft.buffer.byteLength+65535)/65536|0;try{ft.grow(f),K();var v=1;break e}catch{}v=void 0}if(v)return!0}return!1}function p_(u,p,m){if(u>>>=0,p>>>=0,zt.kd==u)var f=zt.Md;else(f=Error().stack.toString().split(`
`))[0]=="Error"&&f.shift(),Es(f);for(var v=3;f[v]&&Dr(f[v])!=u;)++v;for(u=0;u<m&&f[u+v];++u)(x(),O)[p+4*u>>>2>>>0]=Dr(f[u+v]);return u}var Oi,Ri={},Is=()=>{if(!Oi){var u,p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(u in Ri)Ri[u]===void 0?delete p[u]:p[u]=Ri[u];var m=[];for(u in p)m.push(`${u}=${p[u]}`);Oi=m}return Oi};function zs(u,p){if(n)return be(19,1,u,p);u>>>=0,p>>>=0;var m,f=0,v=0;for(m of Is()){var E=p+f;(x(),U)[u+v>>>2>>>0]=E,f+=mt(m,E,1/0)+1,v+=4}return 0}function Cs(u,p){if(n)return be(20,1,u,p);u>>>=0,p>>>=0;var m=Is();for(var f of((x(),U)[u>>>2>>>0]=m.length,u=0,m))u+=Ar(f)+1;return(x(),U)[p>>>2>>>0]=u,0}function As(u){return n?be(21,1,u):52}function Os(u,p,m,f,v){return n?be(22,1,u,p,m,f,v):52}function Rs(u,p,m,f){return n?be(23,1,u,p,m,f):52}function Bs(u,p,m,f){return n?be(24,1,u,p,m,f):70}var c_=[null,[],[]];function Ns(u,p,m,f){if(n)return be(25,1,u,p,m,f);p>>>=0,m>>>=0,f>>>=0;for(var v=0,E=0;E<m;E++){var A=(x(),U)[p>>>2>>>0],N=(x(),U)[p+4>>>2>>>0];p+=8;for(var L=0;L<N;L++){var V=u,ae=(x(),W)[A+L>>>0],pe=c_[V];ae===0||ae===10?((V===1?S:I)(Ya(pe)),pe.length=0):pe.push(ae)}v+=N}return(x(),U)[f>>>2>>>0]=v,0}function h_(u){return u>>>0}n||(function(){for(var u=t.numThreads-1;u--;)Ga();xe.push(async()=>{var p=(async function(){if(!n)return Promise.all(ht.map(Fa))})();Ne++,await p,--Ne==0&&Tt&&(p=Tt,Tt=null,p())})})(),n||(ft=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),K()),t.wasmBinary&&(g=t.wasmBinary),t.stackSave=()=>ue(),t.stackRestore=u=>se(u),t.stackAlloc=u=>Mi(u),t.setValue=function(u,p,m="i8"){switch(m.endsWith("*")&&(m="*"),m){case"i1":case"i8":(x(),Z)[u>>>0]=p;break;case"i16":(x(),H)[u>>>1>>>0]=p;break;case"i32":(x(),O)[u>>>2>>>0]=p;break;case"i64":(x(),Q)[u>>>3>>>0]=BigInt(p);break;case"float":(x(),ee)[u>>>2>>>0]=p;break;case"double":(x(),te)[u>>>3>>>0]=p;break;case"*":(x(),U)[u>>>2>>>0]=p;break;default:$e(`invalid type for setValue: ${m}`)}},t.getValue=function(u,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":return(x(),Z)[u>>>0];case"i16":return(x(),H)[u>>>1>>>0];case"i32":return(x(),O)[u>>>2>>>0];case"i64":return(x(),Q)[u>>>3>>>0];case"float":return(x(),ee)[u>>>2>>>0];case"double":return(x(),te)[u>>>3>>>0];case"*":return(x(),U)[u>>>2>>>0];default:$e(`invalid type for getValue: ${p}`)}},t.UTF8ToString=Te,t.stringToUTF8=mt,t.lengthBytesUTF8=Ar;var Ms,Ds,Ur,et,nr,Bi,Ps,Us,Ls,Ni,qs,Ws,le,ar,Vs,se,Mi,ue,Fs,Di,Gs,Hs,js,Pi,Ks,Xs,Zs,Qs,Ys,Js,eo,to,ro,io,no,ao,so,oo,uo,lo,po,co,ho,fo,mo,go,_o,yo,wo,bo,$o,vo,xo,ko,So,To,Eo,Io,zo,Co,Ao,Oo,Ro,Bo,st,f_=[yi,La,Ka,Ja,es,ts,rs,is,ns,as,ss,os,us,ls,ds,ps,xs,ks,Ss,zs,Cs,As,Os,Rs,Bs,Ns],Ui={1086876:(u,p,m,f,v)=>{if(t===void 0||!t.ad)return 1;if((u=Te(Number(u>>>0))).startsWith("./")&&(u=u.substring(2)),!(u=t.ad.get(u)))return 2;if(p=Number(p>>>0),m=Number(m>>>0),f=Number(f>>>0),p+m>u.byteLength)return 3;try{let E=u.subarray(p,p+m);switch(v){case 0:(x(),W).set(E,f>>>0);break;case 1:t.Td?t.Td(f,E):t.Ld(f,E);break;default:return 4}return 0}catch{return 4}},1087700:(u,p,m)=>{t.wd(u,(x(),W).subarray(p>>>0,p+m>>>0))},1087764:()=>t.Vd(),1087806:u=>{t.vd(u)},1087843:()=>{t.Ed()},1087874:()=>{t.Fd()},1087903:()=>{t.Jd()},1087928:u=>t.Dd(u),1087961:u=>t.Hd(u),1087993:(u,p,m)=>{t.jd(Number(u),Number(p),Number(m),!0)},1088056:(u,p,m)=>{t.jd(Number(u),Number(p),Number(m))},1088113:()=>typeof wasmOffsetConverter<"u",1088170:u=>{t.bc("Abs",u,void 0)},1088221:u=>{t.bc("Neg",u,void 0)},1088272:u=>{t.bc("Floor",u,void 0)},1088325:u=>{t.bc("Ceil",u,void 0)},1088377:u=>{t.bc("Reciprocal",u,void 0)},1088435:u=>{t.bc("Sqrt",u,void 0)},1088487:u=>{t.bc("Exp",u,void 0)},1088538:u=>{t.bc("Erf",u,void 0)},1088589:u=>{t.bc("Sigmoid",u,void 0)},1088644:(u,p,m)=>{t.bc("HardSigmoid",u,{alpha:p,beta:m})},1088723:u=>{t.bc("HardSwish",u,void 0)},1088780:u=>{t.bc("Log",u,void 0)},1088831:u=>{t.bc("Sin",u,void 0)},1088882:u=>{t.bc("Cos",u,void 0)},1088933:u=>{t.bc("Tan",u,void 0)},1088984:u=>{t.bc("Asin",u,void 0)},1089036:u=>{t.bc("Acos",u,void 0)},1089088:u=>{t.bc("Atan",u,void 0)},1089140:u=>{t.bc("Sinh",u,void 0)},1089192:u=>{t.bc("Cosh",u,void 0)},1089244:u=>{t.bc("Asinh",u,void 0)},1089297:u=>{t.bc("Acosh",u,void 0)},1089350:u=>{t.bc("Atanh",u,void 0)},1089403:u=>{t.bc("Tanh",u,void 0)},1089455:u=>{t.bc("Not",u,void 0)},1089506:(u,p,m)=>{t.bc("Clip",u,{min:p,max:m})},1089575:u=>{t.bc("Clip",u,void 0)},1089627:(u,p)=>{t.bc("Elu",u,{alpha:p})},1089685:u=>{t.bc("Gelu",u,void 0)},1089737:u=>{t.bc("Relu",u,void 0)},1089789:(u,p)=>{t.bc("LeakyRelu",u,{alpha:p})},1089853:(u,p)=>{t.bc("ThresholdedRelu",u,{alpha:p})},1089923:(u,p)=>{t.bc("Cast",u,{to:p})},1089981:u=>{t.bc("Add",u,void 0)},1090032:u=>{t.bc("Sub",u,void 0)},1090083:u=>{t.bc("Mul",u,void 0)},1090134:u=>{t.bc("Div",u,void 0)},1090185:u=>{t.bc("Pow",u,void 0)},1090236:u=>{t.bc("Equal",u,void 0)},1090289:u=>{t.bc("Greater",u,void 0)},1090344:u=>{t.bc("GreaterOrEqual",u,void 0)},1090406:u=>{t.bc("Less",u,void 0)},1090458:u=>{t.bc("LessOrEqual",u,void 0)},1090517:(u,p,m,f,v)=>{t.bc("ReduceMean",u,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((x(),O).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1090692:(u,p,m,f,v)=>{t.bc("ReduceMax",u,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((x(),O).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1090866:(u,p,m,f,v)=>{t.bc("ReduceMin",u,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((x(),O).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1091040:(u,p,m,f,v)=>{t.bc("ReduceProd",u,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((x(),O).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1091215:(u,p,m,f,v)=>{t.bc("ReduceSum",u,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((x(),O).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1091389:(u,p,m,f,v)=>{t.bc("ReduceL1",u,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((x(),O).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1091562:(u,p,m,f,v)=>{t.bc("ReduceL2",u,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((x(),O).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1091735:(u,p,m,f,v)=>{t.bc("ReduceLogSum",u,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((x(),O).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1091912:(u,p,m,f,v)=>{t.bc("ReduceSumSquare",u,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((x(),O).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1092092:(u,p,m,f,v)=>{t.bc("ReduceLogSumExp",u,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((x(),O).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1092272:u=>{t.bc("Where",u,void 0)},1092325:(u,p,m)=>{t.bc("Transpose",u,{perm:p?Array.from((x(),O).subarray(Number(p)>>>0,Number(m)>>>0)):[]})},1092449:(u,p,m,f)=>{t.bc("DepthToSpace",u,{blocksize:p,mode:Te(m),format:f?"NHWC":"NCHW"})},1092582:(u,p,m,f)=>{t.bc("DepthToSpace",u,{blocksize:p,mode:Te(m),format:f?"NHWC":"NCHW"})},1092715:(u,p,m,f)=>{t.bc("DFT",u,{axis:p,inverse:m,onesided:f})},1092807:(u,p,m,f,v,E,A,N,L,V,ae,pe,_e,we,_t)=>{t.bc("ConvTranspose",u,{format:L?"NHWC":"NCHW",autoPad:p,dilations:[m],group:f,kernelShape:[v],pads:[E,A],strides:[N],wIsConst:()=>!!(x(),Z)[V>>>0],outputPadding:ae?Array.from((x(),O).subarray(Number(ae)>>>0,Number(pe)>>>0)):[],outputShape:_e?Array.from((x(),O).subarray(Number(_e)>>>0,Number(we)>>>0)):[],activation:Te(_t)})},1093240:(u,p,m,f,v,E,A,N,L,V,ae,pe,_e,we)=>{t.bc("ConvTranspose",u,{format:N?"NHWC":"NCHW",autoPad:p,dilations:Array.from((x(),O).subarray(Number(m)>>>0,(Number(m)>>>0)+2>>>0)),group:f,kernelShape:Array.from((x(),O).subarray(Number(v)>>>0,(Number(v)>>>0)+2>>>0)),pads:Array.from((x(),O).subarray(Number(E)>>>0,(Number(E)>>>0)+4>>>0)),strides:Array.from((x(),O).subarray(Number(A)>>>0,(Number(A)>>>0)+2>>>0)),wIsConst:()=>!!(x(),Z)[L>>>0],outputPadding:V?Array.from((x(),O).subarray(Number(V)>>>0,Number(ae)>>>0)):[],outputShape:pe?Array.from((x(),O).subarray(Number(pe)>>>0,Number(_e)>>>0)):[],activation:Te(we)})},1093901:(u,p,m,f,v,E,A,N,L,V,ae,pe,_e,we,_t)=>{t.bc("ConvTranspose",u,{format:L?"NHWC":"NCHW",autoPad:p,dilations:[m],group:f,kernelShape:[v],pads:[E,A],strides:[N],wIsConst:()=>!!(x(),Z)[V>>>0],outputPadding:ae?Array.from((x(),O).subarray(Number(ae)>>>0,Number(pe)>>>0)):[],outputShape:_e?Array.from((x(),O).subarray(Number(_e)>>>0,Number(we)>>>0)):[],activation:Te(_t)})},1094334:(u,p,m,f,v,E,A,N,L,V,ae,pe,_e,we)=>{t.bc("ConvTranspose",u,{format:N?"NHWC":"NCHW",autoPad:p,dilations:Array.from((x(),O).subarray(Number(m)>>>0,(Number(m)>>>0)+2>>>0)),group:f,kernelShape:Array.from((x(),O).subarray(Number(v)>>>0,(Number(v)>>>0)+2>>>0)),pads:Array.from((x(),O).subarray(Number(E)>>>0,(Number(E)>>>0)+4>>>0)),strides:Array.from((x(),O).subarray(Number(A)>>>0,(Number(A)>>>0)+2>>>0)),wIsConst:()=>!!(x(),Z)[L>>>0],outputPadding:V?Array.from((x(),O).subarray(Number(V)>>>0,Number(ae)>>>0)):[],outputShape:pe?Array.from((x(),O).subarray(Number(pe)>>>0,Number(_e)>>>0)):[],activation:Te(we)})},1094995:(u,p)=>{t.bc("GlobalAveragePool",u,{format:p?"NHWC":"NCHW"})},1095086:(u,p,m,f,v,E,A,N,L,V,ae,pe,_e,we)=>{t.bc("AveragePool",u,{format:we?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:v,dilations:E?Array.from((x(),O).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:N?Array.from((x(),O).subarray(Number(N)>>>0,Number(L)>>>0)):[],pads:V?Array.from((x(),O).subarray(Number(V)>>>0,Number(ae)>>>0)):[],strides:pe?Array.from((x(),O).subarray(Number(pe)>>>0,Number(_e)>>>0)):[]})},1095565:(u,p)=>{t.bc("GlobalAveragePool",u,{format:p?"NHWC":"NCHW"})},1095656:(u,p,m,f,v,E,A,N,L,V,ae,pe,_e,we)=>{t.bc("AveragePool",u,{format:we?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:v,dilations:E?Array.from((x(),O).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:N?Array.from((x(),O).subarray(Number(N)>>>0,Number(L)>>>0)):[],pads:V?Array.from((x(),O).subarray(Number(V)>>>0,Number(ae)>>>0)):[],strides:pe?Array.from((x(),O).subarray(Number(pe)>>>0,Number(_e)>>>0)):[]})},1096135:(u,p)=>{t.bc("GlobalMaxPool",u,{format:p?"NHWC":"NCHW"})},1096222:(u,p,m,f,v,E,A,N,L,V,ae,pe,_e,we)=>{t.bc("MaxPool",u,{format:we?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:v,dilations:E?Array.from((x(),O).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:N?Array.from((x(),O).subarray(Number(N)>>>0,Number(L)>>>0)):[],pads:V?Array.from((x(),O).subarray(Number(V)>>>0,Number(ae)>>>0)):[],strides:pe?Array.from((x(),O).subarray(Number(pe)>>>0,Number(_e)>>>0)):[]})},1096697:(u,p)=>{t.bc("GlobalMaxPool",u,{format:p?"NHWC":"NCHW"})},1096784:(u,p,m,f,v,E,A,N,L,V,ae,pe,_e,we)=>{t.bc("MaxPool",u,{format:we?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:v,dilations:E?Array.from((x(),O).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:N?Array.from((x(),O).subarray(Number(N)>>>0,Number(L)>>>0)):[],pads:V?Array.from((x(),O).subarray(Number(V)>>>0,Number(ae)>>>0)):[],strides:pe?Array.from((x(),O).subarray(Number(pe)>>>0,Number(_e)>>>0)):[]})},1097259:(u,p,m,f,v)=>{t.bc("Gemm",u,{alpha:p,beta:m,transA:f,transB:v})},1097363:u=>{t.bc("MatMul",u,void 0)},1097417:(u,p,m,f)=>{t.bc("ArgMax",u,{keepDims:!!p,selectLastIndex:!!m,axis:f})},1097525:(u,p,m,f)=>{t.bc("ArgMin",u,{keepDims:!!p,selectLastIndex:!!m,axis:f})},1097633:(u,p)=>{t.bc("Softmax",u,{axis:p})},1097696:(u,p)=>{t.bc("Concat",u,{axis:p})},1097756:(u,p,m,f,v)=>{t.bc("Split",u,{axis:p,numOutputs:m,splitSizes:f?Array.from((x(),O).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1097912:u=>{t.bc("Expand",u,void 0)},1097966:(u,p)=>{t.bc("Gather",u,{axis:Number(p)})},1098037:(u,p)=>{t.bc("GatherElements",u,{axis:Number(p)})},1098116:(u,p)=>{t.bc("GatherND",u,{batch_dims:Number(p)})},1098195:(u,p,m,f,v,E,A,N,L,V,ae)=>{t.bc("Resize",u,{antialias:p,axes:m?Array.from((x(),O).subarray(Number(m)>>>0,Number(f)>>>0)):[],coordinateTransformMode:Te(v),cubicCoeffA:E,excludeOutside:A,extrapolationValue:N,keepAspectRatioPolicy:Te(L),mode:Te(V),nearestMode:Te(ae)})},1098557:(u,p,m,f,v,E,A)=>{t.bc("Slice",u,{starts:p?Array.from((x(),O).subarray(Number(p)>>>0,Number(m)>>>0)):[],ends:f?Array.from((x(),O).subarray(Number(f)>>>0,Number(v)>>>0)):[],axes:E?Array.from((x(),O).subarray(Number(E)>>>0,Number(A)>>>0)):[]})},1098821:u=>{t.bc("Tile",u,void 0)},1098873:(u,p,m)=>{t.bc("InstanceNormalization",u,{epsilon:p,format:m?"NHWC":"NCHW"})},1098987:(u,p,m)=>{t.bc("InstanceNormalization",u,{epsilon:p,format:m?"NHWC":"NCHW"})},1099101:u=>{t.bc("Range",u,void 0)},1099154:(u,p)=>{t.bc("Einsum",u,{equation:Te(p)})},1099235:(u,p,m,f,v)=>{t.bc("Pad",u,{mode:p,value:m,pads:f?Array.from((x(),O).subarray(Number(f)>>>0,Number(v)>>>0)):[]})},1099378:(u,p,m,f,v,E)=>{t.bc("BatchNormalization",u,{epsilon:p,momentum:m,spatial:!!v,trainingMode:!!f,format:E?"NHWC":"NCHW"})},1099547:(u,p,m,f,v,E)=>{t.bc("BatchNormalization",u,{epsilon:p,momentum:m,spatial:!!v,trainingMode:!!f,format:E?"NHWC":"NCHW"})},1099716:(u,p,m)=>{t.bc("CumSum",u,{exclusive:Number(p),reverse:Number(m)})},1099813:(u,p,m)=>{t.bc("DequantizeLinear",u,{axis:p,blockSize:m})},1099903:(u,p,m,f,v)=>{t.bc("GridSample",u,{align_corners:p,mode:Te(m),padding_mode:Te(f),format:v?"NHWC":"NCHW"})},1100073:(u,p,m,f,v)=>{t.bc("GridSample",u,{align_corners:p,mode:Te(m),padding_mode:Te(f),format:v?"NHWC":"NCHW"})},1100243:(u,p)=>{t.bc("ScatterND",u,{reduction:Te(p)})},1100328:(u,p,m,f,v,E,A,N,L)=>{t.bc("Attention",u,{numHeads:p,isUnidirectional:m,maskFilterValue:f,scale:v,doRotary:E,qkvHiddenSizes:A?Array.from((x(),O).subarray(Number(N)>>>0,Number(N)+A>>>0)):[],pastPresentShareBuffer:!!L})},1100600:u=>{t.bc("BiasAdd",u,void 0)},1100655:u=>{t.bc("BiasSplitGelu",u,void 0)},1100716:u=>{t.bc("FastGelu",u,void 0)},1100772:(u,p,m,f,v,E,A,N,L,V,ae,pe,_e,we,_t,Li)=>{t.bc("Conv",u,{format:pe?"NHWC":"NCHW",auto_pad:p,dilations:m?Array.from((x(),O).subarray(Number(m)>>>0,Number(f)>>>0)):[],group:v,kernel_shape:E?Array.from((x(),O).subarray(Number(E)>>>0,Number(A)>>>0)):[],pads:N?Array.from((x(),O).subarray(Number(N)>>>0,Number(L)>>>0)):[],strides:V?Array.from((x(),O).subarray(Number(V)>>>0,Number(ae)>>>0)):[],w_is_const:()=>!!(x(),Z)[Number(_e)>>>0],activation:Te(we),activation_params:_t?Array.from((x(),ee).subarray(Number(_t)>>>0,Number(Li)>>>0)):[]})},1101356:u=>{t.bc("Gelu",u,void 0)},1101408:(u,p,m,f,v,E,A,N,L)=>{t.bc("GroupQueryAttention",u,{numHeads:p,kvNumHeads:m,scale:f,softcap:v,doRotary:E,rotaryInterleaved:A,smoothSoftmax:N,localWindowSize:L})},1101625:(u,p,m,f)=>{t.bc("LayerNormalization",u,{axis:p,epsilon:m,simplified:!!f})},1101736:(u,p,m,f)=>{t.bc("LayerNormalization",u,{axis:p,epsilon:m,simplified:!!f})},1101847:(u,p,m,f,v,E)=>{t.bc("MatMulNBits",u,{k:p,n:m,accuracyLevel:f,bits:v,blockSize:E})},1101974:(u,p,m,f,v,E)=>{t.bc("MultiHeadAttention",u,{numHeads:p,isUnidirectional:m,maskFilterValue:f,scale:v,doRotary:E})},1102133:(u,p)=>{t.bc("QuickGelu",u,{alpha:p})},1102197:(u,p,m,f,v)=>{t.bc("RotaryEmbedding",u,{interleaved:!!p,numHeads:m,rotaryEmbeddingDim:f,scale:v})},1102336:(u,p,m)=>{t.bc("SkipLayerNormalization",u,{epsilon:p,simplified:!!m})},1102438:(u,p,m)=>{t.bc("SkipLayerNormalization",u,{epsilon:p,simplified:!!m})},1102540:(u,p,m,f)=>{t.bc("GatherBlockQuantized",u,{gatherAxis:p,quantizeAxis:m,blockSize:f})},1102661:u=>{t.Id(u)},1102695:(u,p)=>t.Kd(Number(u),Number(p),t.$c.Nd,t.$c.errors)};function m_(u,p,m){return ys(async()=>{await t.Gd(Number(u),Number(p),Number(m))})}function g_(){return typeof wasmOffsetConverter<"u"}function __(u,p,m,f){var v=ue();try{return to(u,p,m,f)}catch(E){if(se(v),E!==E+0)throw E;le(1,0)}}function y_(u,p,m){var f=ue();try{return Qs(u,p,m)}catch(v){if(se(f),v!==v+0)throw v;le(1,0)}}function w_(u){var p=ue();try{Ks(u)}catch(m){if(se(p),m!==m+0)throw m;le(1,0)}}function b_(u,p){var m=ue();try{return Pi(u,p)}catch(f){if(se(m),f!==f+0)throw f;le(1,0)}}function $_(u,p,m){var f=ue();try{js(u,p,m)}catch(v){if(se(f),v!==v+0)throw v;le(1,0)}}function v_(u,p){var m=ue();try{ro(u,p)}catch(f){if(se(m),f!==f+0)throw f;le(1,0)}}function x_(u,p,m,f,v,E,A){var N=ue();try{return Js(u,p,m,f,v,E,A)}catch(L){if(se(N),L!==L+0)throw L;le(1,0)}}function k_(u,p,m,f,v,E){var A=ue();try{Xs(u,p,m,f,v,E)}catch(N){if(se(A),N!==N+0)throw N;le(1,0)}}function S_(u,p,m,f){var v=ue();try{eo(u,p,m,f)}catch(E){if(se(v),E!==E+0)throw E;le(1,0)}}function T_(u,p,m,f,v){var E=ue();try{Zs(u,p,m,f,v)}catch(A){if(se(E),A!==A+0)throw A;le(1,0)}}function E_(u,p,m,f,v,E,A){var N=ue();try{no(u,p,m,f,v,E,A)}catch(L){if(se(N),L!==L+0)throw L;le(1,0)}}function I_(u,p,m,f,v,E,A){var N=ue();try{ao(u,p,m,f,v,E,A)}catch(L){if(se(N),L!==L+0)throw L;le(1,0)}}function z_(u,p,m,f,v,E,A,N){var L=ue();try{lo(u,p,m,f,v,E,A,N)}catch(V){if(se(L),V!==V+0)throw V;le(1,0)}}function C_(u,p,m,f,v){var E=ue();try{return io(u,p,m,f,v)}catch(A){if(se(E),A!==A+0)throw A;le(1,0)}}function A_(u,p,m){var f=ue();try{return po(u,p,m)}catch(v){if(se(f),v!==v+0)throw v;le(1,0)}}function O_(u,p,m,f,v,E,A,N){var L=ue();try{co(u,p,m,f,v,E,A,N)}catch(V){if(se(L),V!==V+0)throw V;le(1,0)}}function R_(u,p,m,f,v,E,A,N,L,V,ae,pe){var _e=ue();try{so(u,p,m,f,v,E,A,N,L,V,ae,pe)}catch(we){if(se(_e),we!==we+0)throw we;le(1,0)}}function B_(u,p,m){var f=ue();try{return ho(u,p,m)}catch(v){if(se(f),v!==v+0)throw v;return le(1,0),0n}}function N_(u,p,m,f,v,E,A,N,L){var V=ue();try{Ys(u,p,m,f,v,E,A,N,L)}catch(ae){if(se(V),ae!==ae+0)throw ae;le(1,0)}}function M_(u){var p=ue();try{return fo(u)}catch(m){if(se(p),m!==m+0)throw m;le(1,0)}}function D_(u,p){var m=ue();try{return Co(u,p)}catch(f){if(se(m),f!==f+0)throw f;return le(1,0),0n}}function P_(u,p,m,f){var v=ue();try{return mo(u,p,m,f)}catch(E){if(se(v),E!==E+0)throw E;le(1,0)}}function U_(u){var p=ue();try{return go(u)}catch(m){if(se(p),m!==m+0)throw m;return le(1,0),0n}}function L_(u,p,m,f){var v=ue();try{return vo(u,p,m,f)}catch(E){if(se(v),E!==E+0)throw E;le(1,0)}}function q_(u,p,m,f,v){var E=ue();try{return xo(u,p,m,f,v)}catch(A){if(se(E),A!==A+0)throw A;le(1,0)}}function W_(u,p,m,f,v,E){var A=ue();try{return ko(u,p,m,f,v,E)}catch(N){if(se(A),N!==N+0)throw N;le(1,0)}}function V_(u,p,m,f,v,E){var A=ue();try{return oo(u,p,m,f,v,E)}catch(N){if(se(A),N!==N+0)throw N;le(1,0)}}function F_(u,p,m,f,v,E){var A=ue();try{return So(u,p,m,f,v,E)}catch(N){if(se(A),N!==N+0)throw N;le(1,0)}}function G_(u,p,m,f,v,E,A,N){var L=ue();try{return uo(u,p,m,f,v,E,A,N)}catch(V){if(se(L),V!==V+0)throw V;le(1,0)}}function H_(u,p,m,f,v){var E=ue();try{return To(u,p,m,f,v)}catch(A){if(se(E),A!==A+0)throw A;return le(1,0),0n}}function j_(u,p,m,f){var v=ue();try{return Eo(u,p,m,f)}catch(E){if(se(v),E!==E+0)throw E;le(1,0)}}function K_(u,p,m,f){var v=ue();try{return Io(u,p,m,f)}catch(E){if(se(v),E!==E+0)throw E;le(1,0)}}function X_(u,p,m,f,v,E,A,N,L,V,ae,pe){var _e=ue();try{return zo(u,p,m,f,v,E,A,N,L,V,ae,pe)}catch(we){if(se(_e),we!==we+0)throw we;le(1,0)}}function Z_(u,p,m,f,v,E,A,N,L,V,ae){var pe=ue();try{bo(u,p,m,f,v,E,A,N,L,V,ae)}catch(_e){if(se(pe),_e!==_e+0)throw _e;le(1,0)}}function Q_(u,p,m,f,v,E,A,N,L,V,ae,pe,_e,we,_t,Li){var t0=ue();try{$o(u,p,m,f,v,E,A,N,L,V,ae,pe,_e,we,_t,Li)}catch(qi){if(se(t0),qi!==qi+0)throw qi;le(1,0)}}function Y_(u,p,m){var f=ue();try{return _o(u,p,m)}catch(v){if(se(f),v!==v+0)throw v;le(1,0)}}function J_(u,p,m){var f=ue();try{return yo(u,p,m)}catch(v){if(se(f),v!==v+0)throw v;le(1,0)}}function e0(u,p,m,f){var v=ue();try{wo(u,p,m,f)}catch(E){if(se(v),E!==E+0)throw E;le(1,0)}}function Lr(){if(0<Ne)Tt=Lr;else if(n)b?.(t),G();else{for(var u=xe;0<u.length;)u.shift()(t);0<Ne?Tt=Lr:(t.calledRun=!0,z||(G(),b?.(t)))}}return n||(st=await ve(),Lr()),t.PTR_SIZE=4,Y?t:new Promise((u,p)=>{b=u,k=p})}var Wp,Do,v0=P(()=>{"use strict";Wp=Mo,Do=globalThis.self?.name?.startsWith("em-pthread"),Do&&Mo()}),ji,Fn,Po,Me,Vp,Wr,Uo,Lo,Ki,qo,Xi,Fp,Zi,Gp,ua=P(()=>{"use strict";oa(),ji=typeof location>"u"?void 0:location.origin,Fn=import.meta.url>"file:"&&import.meta.url<"file;",Po=()=>{if(Fn){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,ji).href}return import.meta.url},Me=Po(),Vp=()=>{if(Me&&!Me.startsWith("blob:"))return Me.substring(0,Me.lastIndexOf("/")+1)},Wr=(e,t)=>{try{let r=t??Me;return(r?new URL(e,r):new URL(e)).origin===ji}catch{return!1}},Uo=(e,t)=>{let r=t??Me;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Lo=(e,t)=>`${t??"./"}${e}`,Ki=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},qo=async e=>(await import(e)).default,Xi=($0(),$r(Up)).default,Fp=async()=>{if(!Me)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Wr(Me))return[void 0,Xi()];let e=await Ki(Me);return[e,Xi(e)]},Zi=(v0(),$r(qp)).default,Gp=async(e,t,r,i)=>{let n=Zi&&!(e||t);if(n)if(Me)n=Wr(Me)||i&&!r;else if(i&&!r)n=!0;else throw new Error("cannot determine the script source URL.");if(n)return[void 0,Zi];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??Uo(a,t),o=r&&s&&!Wr(s,t),l=o?await Ki(s):s??Lo(a,t);return[o?l:void 0,await qo(l)]}}}),Qi,Vr,or,Yi,Wo,Vo,Fo,la,ye,Ft=P(()=>{"use strict";ua(),Vr=!1,or=!1,Yi=!1,Wo=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Vo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Fo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},la=async e=>{if(Vr)return Promise.resolve();if(or)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Yi)throw new Error("previous call to 'initializeWebAssembly()' failed.");or=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Fo())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Vo())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=Wo();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,a=typeof n=="string"?n:void 0,s=n?.mjs,o=s?.href??s,l=n?.wasm,d=l?.href??l,h=e.wasmBinary,[c,g]=await Gp(o,a,r>1,!!h||!!d),y=!1,_=[];if(t>0&&_.push(new Promise(b=>{setTimeout(()=>{y=!0,b()},t)})),_.push(new Promise((b,k)=>{let $={numThreads:r};if(h)$.wasmBinary=h,$.locateFile=w=>w;else if(d||a)$.locateFile=w=>d??a+w;else if(o&&o.indexOf("blob:")!==0)$.locateFile=w=>new URL(w,o).href;else if(c){let w=Vp();w&&($.locateFile=T=>w+T)}g($).then(w=>{or=!1,Vr=!0,Qi=w,b(),c&&URL.revokeObjectURL(c)},w=>{or=!1,Yi=!0,k(w)})})),await Promise.race(_),y)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},ye=()=>{if(Vr&&Qi)return Qi;throw new Error("WebAssembly is not initialized yet.")}}),Ke,ni,fe,da=P(()=>{"use strict";Ft(),Ke=(e,t)=>{let r=ye(),i=r.lengthBytesUTF8(e)+1,n=r._malloc(i);return r.stringToUTF8(e,n,i),t.push(n),n},ni=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,a])=>{let s=t?t+n:n;if(typeof a=="object")ni(a,s+".",r,i);else if(typeof a=="string"||typeof a=="number")i(s,a.toString());else if(typeof a=="boolean")i(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},fe=e=>{let t=ye(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetLastError(n,n+i);let a=Number(t.getValue(n,i===4?"i32":"i64")),s=t.getValue(n+i,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),Hp,x0=P(()=>{"use strict";Ft(),da(),Hp=e=>{let t=ye(),r=0,i=[],n=e||{};try{if(e?.logSeverityLevel===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(n.terminate=!1);let a=0;return e?.tag!==void 0&&(a=Ke(e.tag,i)),r=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,a),r===0&&fe("Can't create run options."),e?.extra!==void 0&&ni(e.extra,"",new WeakSet,(s,o)=>{let l=Ke(s,i),d=Ke(o,i);t._OrtAddRunConfigEntry(r,l,d)!==0&&fe(`Can't set a run config entry: ${s} - ${o}.`)}),[r,i]}catch(a){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),a}}}),Go,Ho,jo,At,Ko,jp,k0=P(()=>{"use strict";Ft(),da(),Go=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Ho=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},jo=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},At=(e,t,r,i)=>{let n=Ke(t,i),a=Ke(r,i);ye()._OrtAddSessionConfigEntry(e,n,a)!==0&&fe(`Can't set a session config entry: ${t} - ${r}.`)},Ko=async(e,t,r)=>{let i=t.executionProviders;for(let n of i){let a=typeof n=="string"?n:n.name,s=[];switch(a){case"webnn":if(a="WEBNN",At(e,"session.disable_quant_qdq","1",r),At(e,"session.disable_qdq_constant_folding","1",r),typeof n!="string"){let c=n?.deviceType;c&&At(e,"deviceType",c,r)}break;case"webgpu":if(a="JS",typeof n!="string"){let c=n;if(c?.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);At(e,"preferredLayout",c.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let o=Ke(a,r),l=s.length,d=0,h=0;if(l>0){d=ye()._malloc(l*ye().PTR_SIZE),r.push(d),h=ye()._malloc(l*ye().PTR_SIZE),r.push(h);for(let c=0;c<l;c++)ye().setValue(d+c*ye().PTR_SIZE,s[c][0],"*"),ye().setValue(h+c*ye().PTR_SIZE,s[c][1],"*")}await ye()._OrtAppendExecutionProvider(e,o,d,h,l)!==0&&fe(`Can't append execution provider: ${a}.`)}},jp=async e=>{let t=ye(),r=0,i=[],n=e||{};jo(n);try{let a=Go(n.graphOptimizationLevel??"all"),s=Ho(n.executionMode??"sequential"),o=typeof n.logId=="string"?Ke(n.logId,i):0,l=n.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let d=n.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let h=typeof n.optimizedModelFilePath=="string"?Ke(n.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(a,!!n.enableCpuMemArena,!!n.enableMemPattern,s,!!n.enableProfiling,0,o,l,d,h),r===0&&fe("Can't create session options."),n.executionProviders&&await Ko(r,n,i),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);At(r,"enableGraphCapture",n.enableGraphCapture.toString(),i)}if(n.freeDimensionOverrides)for(let[c,g]of Object.entries(n.freeDimensionOverrides)){if(typeof c!="string")throw new Error(`free dimension override name must be a string: ${c}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let y=Ke(c,i);t._OrtAddFreeDimensionOverride(r,y,g)!==0&&fe(`Can't set a free dimension override: ${c} - ${g}.`)}return n.extra!==void 0&&ni(n.extra,"",new WeakSet,(c,g)=>{At(r,c,g,i)}),[r,i]}catch(a){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&fe("Can't release session options."),i.forEach(s=>t._free(s)),a}}}),Dt,lt,Pt,pi,ai,pa,ca,Gn,J=P(()=>{"use strict";Dt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},lt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Pt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((n,a)=>n*a,1);return r>0?Math.ceil(i*r):void 0},pi=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},ai=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},pa=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ca=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Gn=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),ha,Kp=P(()=>{"use strict";oa(),ha=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),a;try{a=new ArrayBuffer(i)}catch(o){if(o instanceof RangeError){let l=Math.ceil(i/65536);a=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let s=0;for(;;){let{done:o,value:l}=await n.read();if(o)break;let d=l.byteLength;new Uint8Array(a,s,d).set(l),s+=d}return new Uint8Array(a,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Xo,Zo,Qo,Yo,fa,Jo,de,dt=P(()=>{"use strict";J(),Xo=["V","I","W","E","F"],Zo=(e,t)=>{console.log(`[${Xo[e]},${new Date().toISOString()}]${t}`)},fa=(e,t)=>{Qo=e,Yo=t},Jo=(e,t)=>{let r=ai(e),i=ai(Qo);r>=i&&Zo(r,typeof t=="function"?t():t)},de=(...e)=>{Yo&&Jo(...e)}}),eu,Yt,R,si,Xp,Zp,Qp,re=P(()=>{"use strict";eu=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Yt=class{static calcShape(e,t,r=!1){let i=e.length,n=t.length;if(i===0)return t;if(n===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(r){if(i<2||n<2)return;let o=eu.calcMatMulShape([e[i-2],e[i-1]],[t[n-2],t[n-1]]);if(o===void 0)return;[s[a-2],s[a-1]]=o}for(let o=r?3:1;o<=a;o++){let l=i-o<0?1:e[i-o],d=n-o<0?1:t[n-o];if(l!==d&&l>1&&d>1)return;let h=Math.max(l,d);if(l&&d)s[a-o]=Math.max(l,d);else{if(h>1)return;s[a-o]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[i-n])return!1;return!0}},R=class ti{static size(t){return ti.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let n=new Array(i),a=i-1;for(;a>=0;){if(t[a]%r===0){n[a]=t[a]/r;break}if(r%t[a]!==0)throw new Error("cannot convert shape");n[a]=1,r/=t[a],a--}for(a--;a>=0;a--)n[a]=t[a];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return ti.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return ti.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let n=1;for(let a=r;a<i;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[a])}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let n=r-3;n>=0;--n)i[n]=i[n+1]*t[n+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((n,a)=>n+r[a]+r[a+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,n)=>i===r[n])}},si=class vt{static adjustPoolAttributes(t,r,i,n,a,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=i.length?i.push(r[o+2]):i[o]=r[o+2];for(let o=0;o<i.length;o++)if(o<n.length){if(n[o]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let o=0;o<i.length;o++)if(o<a.length){if(a[o]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let o=0;o<i.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<i.length;o++){if(i[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=i[o]||s[o+i.length]>=i[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,n,a,s,o){if(o){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)vt.adjustPadAndReturnShape(t[l+(s?1:2)],r[l],i[l],n[l],a,l,l+t.length-2,o)}}static computePoolOutputShape(t,r,i,n,a,s,o,l=0){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let d=[r[0],r[1]];return vt.computeShapeHelper(t,r,d,i,n,a,s,o,l),d}static computeConvOutputShape(t,r,i,n,a,s,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return vt.computeShapeHelper(!1,t,l,i,n,a,s,o),l}static computeShapeHelper(t,r,i,n,a,s,o,l,d=0){if(t)for(let h=0;h<r.length-2;h++)i.push(1);else for(let h=0;h<r.length-2;h++)i.push(vt.adjustPadAndReturnShape(r[h+2],n[h],a[h],s[h],o,h,h+r.length-2,l,d))}static computeOutputSize(t,r,i,n,a){let s=Math.floor(t/r)+1;return a===1&&(s=Math.ceil(t/r)+1,(s-1)*r>=i+n&&(s-=1)),s}static adjustPadAndReturnShape(t,r,i,n,a,s,o,l,d=0){let h=i*(n-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return a[s]=0,a[o]=0,vt.computeOutputSize(t-h,r,t,0,d);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=(Math.floor((t+r-1)/r)-1)*r+n-t;return a[s]=Math.floor(l==="SAME_LOWER"?(c+1)/2:c/2),a[o]=c-a[s],vt.computeOutputSize(t+a[s]+a[o]-h,r,t,a[s],d)}default:throw new Error("Unsupported AutoPad type")}else return vt.computeOutputSize(t+a[s]+a[o]-h,r,t,a[s],d)}},Xp=class{static getShapeOfGemmResult(e,t,r,i,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let a,s,o;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let l=-1;if(i?(o=r[0],l=1):(o=r[1],l=0),r[l]!==s)throw new Error("dimension mismatch");if(a<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(n&&!Yt.isValidBroadcast(n,[a,o]))throw new Error("gemm: invalid bias shape for broadcast");return[a,o,s]}},Zp=-34028234663852886e22,Qp=34028234663852886e22}),ma,Yp=P(()=>{"use strict";J(),ma=(e,t)=>new(pi(t))(e)}),Ji,tu,en,ru,tn,iu,rn,nn,an,nu,Jp,S0=P(()=>{"use strict";J(),dt(),Ji=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),tu=(e,t)=>{if(t==="int32")return e;let r=Ji.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let n=e.byteLength/i,a=new(pi(t))(e.buffer,e.byteOffset,n);switch(t){case"int64":case"uint64":{let s=new Int32Array(n);for(let o=0;o<n;o++){let l=a[o];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(l)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},en=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let n=BigInt64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"uint64":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let n=BigUint64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"int8":{if(i.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let n=Int8Array.from(i,Number);return new Uint8Array(n.buffer)}case"uint8":{if(i.some(n=>n<0||n>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let n=Uint32Array.from(i,Number);return new Uint8Array(n.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},ru=1,tn=()=>ru++,iu=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),rn=(e,t)=>{let r=Ji.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,n)=>i*n)*r/8):0},nn=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:n,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=n,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return rn(this.dataType,this.tensorShape)}destroy(){de("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=en(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,n)=>i===r[n])}setIsDataConverted(e){this.isDataConverted=e}},an=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let n=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),s;if(!a?.input.dataTypes.includes(t)){if(s=iu.get(t),!s||!a?.input.dataTypes.includes(s))throw new Error(`WebNN backend does not support data type: ${t}`);de("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(n,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==rn(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,s),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=tu(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else de("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?en(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},nu=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=tn();return this.tensorTrackersById.set(e,new an(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,n){de("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${n}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,r,i,n)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){de("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let n=this.getMLContext(e),a=tn(),s=new nn({sessionId:e,context:n,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(a,new an(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,r,i,n,a,s){let o=this.getMLContext(e);for(let[d,h]of this.freeTensors.entries())if(h.canReuseTensor(o,t,r)){de("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let c=this.freeTensors.splice(d,1)[0];return c.sessionId=e,c}de("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let l=await o.createTensor({dataType:s??t,shape:r,dimensions:r,usage:i,writable:n,readable:a});return new nn({sessionId:e,context:o,tensor:l,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Jp=(...e)=>new nu(...e)}),ur,au,ec,T0=P(()=>{"use strict";J(),Ft(),Yp(),S0(),dt(),ur=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),au=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((n,a)=>n===i[a]&&e[n]===t[n])},ec=class{constructor(e){this.tensorManager=Jp(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,fa(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){de("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){de("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)de("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>au(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(n=>n.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){de("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,n){let a=ur.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,i,n)}async createTemporaryTensor(e,t,r){de("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=ur.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,i,r,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!ye().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");de("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return ma(r,t)}}registerMLTensor(e,t,r,i){let n=ur.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);let a=this.tensorManager.registerTensor(e,t,n,i);return de("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${i}} -> {tensorId: ${a}}`),a}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=ur.get(Dt(t)),n=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!n?.input.dataTypes.includes(i):!!n?.output.dataTypes.includes(i)}flush(){}}}),ga=P(()=>{"use strict"}),sn,Fr,Gr,su,ou,on,Hn,uu,tc,E0=P(()=>{"use strict";dt(),ga(),sn=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Fr=[],Gr=e=>Math.ceil(Number(e)/16)*16,su=e=>{for(let t=0;t<Fr.length;t++){let r=Fr[t];if(e<=r)return r}return Math.ceil(e/16)*16},ou=1,on=()=>ou++,Hn=async(e,t,r,i)=>{let n=Gr(r),a=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,n),e.flush(),await a.mapAsync(GPUMapMode.READ);let o=a.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(o,0,r)),l}else return new Uint8Array(o.slice(0,r))}finally{a.destroy()}},uu=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of sn)Fr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,n=t.byteLength,a=Gr(n),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${n}`);if(a===n&&i%4===0)this.backend.device.queue.writeBuffer(s.gpuData.buffer,0,r,i,n);else{let o=new Uint8Array(a);o.set(t),this.backend.device.queue.writeBuffer(s.gpuData.buffer,0,o,0,a)}de("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=Gr(r.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return de("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=on();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),de("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),de("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=su(e),i,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||a){let o=(n?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?i=o.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:on(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),de("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return de("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Hn(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=sn.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(de("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},tc=(...e)=>new uu(...e)}),lu,he,Se=P(()=>{"use strict";lu=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},he=e=>new lu(e)}),Jt,Hr,Ie,Ee,X,ke,jn,Qt,xt,j,lr,B,F,rc,_a,du,ic,ie=P(()=>{"use strict";J(),re(),Jt=64,Hr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ie=(e,t=1)=>{let r=Hr(e,t);return typeof r=="string"?r:r[0]},Ee=(e,t=1)=>{let r=Hr(e,t);return typeof r=="string"?r:r[1]},X=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:R.computeStrides(r)})}),t},ke=e=>e%4===0?4:e%2===0?2:1,jn=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Qt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,xt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,j=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,lr=(e,t,r,i,n)=>{let a=typeof r=="number",s=a?r:r.length,o=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=Hr(t,n),h=typeof d=="string"?d:d[1],c=typeof d=="string"?d:d[0],g={indices:l,value:h,storage:c,tensor:t},y=D=>typeof D=="string"?D:`${D}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=a?"uniforms.":"",k=`${b}${e}_shape`,$=`${b}${e}_strides`,w="";for(let D=0;D<s-1;D++)w+=`
    let dim${D} = current / ${j($,D,s)};
    let rest${D} = current % ${j($,D,s)};
    indices[${D}] = dim${D};
    current = rest${D};
    `;w+=`indices[${s-1}] = current;`;let T=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${w}
    return indices;
  }`,S=D=>(_.offsetToIndices=!0,s<2?D:`o2i_${e}(${D})`),I=[];if(s>=2)for(let D=s-1;D>=0;D--)I.push(`${j($,D,s)} * (indices[${D}])`);let z=s<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${I.join("+")};
  }`,C=D=>(_.indicesToOffset=!0,s<2?D:`i2o_${e}(${D})`),x=(...D)=>s===0?"0u":`${g.indices}(${D.map(y).join(",")})`,M=(D,Y)=>s<2?`${D}`:`${j(D,Y,s)}`,q=(D,Y,K)=>s<2?`${D}=${K};`:`${j(D,Y,s)}=${K};`,Z={},W=(D,Y)=>{_.broadcastedIndicesToOffset=!0;let K=`${Y.name}broadcastedIndicesTo${e}Offset`;if(K in Z)return`${K}(${D})`;let G=[];for(let $e=s-1;$e>=0;$e--){let Oe=Y.indicesGet("outputIndices",$e+Y.rank-s);G.push(`${M($,$e)} * (${Oe} % ${M(k,$e)})`)}return Z[K]=`fn ${K}(outputIndices: ${Y.type.indices}) -> u32 {
             return ${G.length>0?G.join("+"):"0u"};
           }`,`${K}(${D})`},H=(D,Y)=>(()=>{if(g.storage===g.value)return`${e}[${D}]=${Y};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${D}]=vec2<u32>(u32(${Y}), select(0u, 0xFFFFFFFFu, ${Y} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${D}]=vec2<u32>(u32(${Y}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${D}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${Y}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),oe=D=>(()=>{if(g.storage===g.value)return`${e}[${D}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${D}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${D}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${D}] & 0xFFu), bool(${e}[${D}] & 0xFF00u), bool(${e}[${D}] & 0xFF0000u), bool(${e}[${D}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),O=s<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${h} {
    return ${oe(`i2o_${e}(indices)`)};
  }`,U=s<2?"":(()=>{let D=o.map(K=>`d${K}: u32`).join(", "),Y=o.map(K=>`d${K}`).join(", ");return`
  fn get_${e}(${D}) -> ${h} {
    return get_${e}ByIndices(${x(Y)});
  }`})(),ee=(...D)=>{if(D.length!==s)throw new Error(`indices length must be ${s}`);let Y=D.map(y).join(",");return s===0?oe("0u"):s===1?oe(Y[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${Y})`)},te=D=>s<2?oe(D):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${D})`),Q=s<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${h}) {
    ${H(`i2o_${e}(indices)`,"value")}
  }`,ne=s<2?"":(()=>{let D=o.map(K=>`d${K}: u32`).join(", "),Y=o.map(K=>`d${K}`).join(", ");return`
  fn set_${e}(${D}, value: ${h}) {
    set_${e}ByIndices(${x(Y)}, value);
  }`})();return{impl:()=>{let D=[],Y=!1;return _.offsetToIndices&&(D.push(T),Y=!0),_.indicesToOffset&&(D.push(z),Y=!0),_.broadcastedIndicesToOffset&&(Object.values(Z).forEach(K=>D.push(K)),Y=!0),_.set&&(D.push(ne),Y=!0),_.setByIndices&&(D.push(Q),Y=!0),_.get&&(D.push(U),Y=!0),_.getByIndices&&(D.push(O),Y=!0),!a&&Y&&D.unshift(`const ${k} = ${g.indices}(${r.join(",")});`,`const ${$} = ${g.indices}(${R.computeStrides(r).join(",")});`),D.join(`
`)},type:g,offsetToIndices:S,indicesToOffset:C,broadcastedIndicesToOffset:W,indices:x,indicesGet:M,indicesSet:q,set:(...D)=>{if(D.length!==s+1)throw new Error(`indices length must be ${s}`);let Y=D[s];if(typeof Y!="string")throw new Error("value must be string");let K=D.slice(0,s).map(y).join(",");return s===0?H("0u",Y):s===1?H(K[0],Y):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${K}, ${Y})`)},setByOffset:H,setByIndices:(D,Y)=>s<2?H(D,Y):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${D}, ${Y});`),get:ee,getByOffset:oe,getByIndices:te,usage:i,name:e,strides:$,shape:k,rank:s}},B=(e,t,r,i=1)=>lr(e,t,r,"input",i),F=(e,t,r,i=1)=>lr(e,t,r,"output",i),rc=(e,t,r)=>lr(e,t,r,"atomicOutput",1),_a=(e,t,r,i=1)=>lr(e,t,r,"internal",i),du=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Jt){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${a}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let n=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},ic=(e,t)=>new du(e,t)}),pu,un,cu,hu,fu,mu,Pe,nc,ac,kt=P(()=>{"use strict";J(),re(),Se(),ie(),pu=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},un=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),cu=(e,t)=>R.sortBasedOnPerm(e,un(e.length,t)),hu=(e,t,r,i)=>{let n=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let a=0;a<t;++a)n+=`a[${e[a]}]=i[${a}];`;return n+="return a;}"},fu=(e,t)=>{let r=[],i=[];for(let n=0;n<e.length;++n)e[n]!==1&&r.push(e[n]),e[t[n]]!==1&&i.push(t[n]);return{newShape:r,newPerm:i}},mu=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},Pe=(e,t)=>{let r=e.dataType,i=e.dims.length,n=un(i,t),a=cu(e.dims,n),s=e.dims,o=a,l=i<2||mu(n,e.dims),d;if(l)return d=_=>{let b=B("input",r,s,4),k=F("output",r,o,4);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,k)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=R.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:d};let{newShape:h,newPerm:c}=fu(e.dims,n),g=R.areEqual(c,[2,3,1]),y=R.areEqual(c,[3,1,2]);if(h.length===2||g||y){s=g?[h[0],h[1]*h[2]]:y?[h[0]*h[1],h[2]]:h,o=[s[1],s[0]];let _=16;return d=b=>{let k=B("a",r,s.length),$=F("output",r,o.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(k,$)}
  var<workgroup> tile : array<array<${$.type.value}, ${_+1}>, ${_}>;
  ${b.mainStart([_,_,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${_} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${_}u + local_id.x;
    let input_row = workgroup_id_x * ${_}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${k.getByIndices(`${k.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${_}u + local_id.x;
    let output_row = workgroup_id_y * ${_}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${$.setByIndices(`${$.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=R.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/_),y:Math.ceil(o[0]/_)},programUniforms:[{type:12,data:b},...X(s,o)]}},getShaderSource:d}}return d=_=>{let b=B("a",r,s.length),k=F("output",r,o.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,k)}

  ${hu(n,i,b,k)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${k.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${k.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=R.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...X(s,o)]}},getShaderSource:d}},nc=(e,t)=>{pu(e.inputs,t.perm),e.compute(Pe(e.inputs[0],t.perm))},ac=e=>he({perm:e.perm})}),gu,_u,yu,wu,bu,$u,vu,xu,ku,Su,Ve,sc,oc,uc,lc,dc,pc,cc,hc,fc,mc,I0=P(()=>{"use strict";J(),re(),ie(),ya(),kt(),gu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},_u={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},yu={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},wu={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},bu=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},$u=(e,t)=>{let r=[],i=e.length;for(let a=0;a<i;a++)t.indexOf(a)===-1&&r.push(e[a]);let n=t.map(a=>e[a]);return[r,n]},vu=(e,t)=>{let r=e.length+t.length,i=[],n=0;for(let a=0;a<r;a++)t.indexOf(a)===-1?i.push(e[n++]):i.push(1);return i},xu=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},ku=(e,t)=>{let r=[];if(!xu(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},Su=(e,t,r,i,n,a,s)=>{let o=r[0].dims,l=R.size(a),d=R.size(s),h=B("_A",r[0].dataType,o),c=F("output",n,a),g=64;l===1&&(g=256);let y=`
          var<workgroup> aBestValues : array<f32, ${g}>;
       `,_=b=>`
        ${b.registerUniform("reduceSize","u32").declareVariables(h,c)}
        ${y}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${b.mainStart(g)}

          let outputIndex = global_idx / ${g};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${yu[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${g}) {
           let candidate = f32(${h.getByOffset("offset + k")});
           bestValue = ${gu[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${g}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${_u[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${c.setByOffset("outputIndex",`${i==="mean"?`${c.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${c.type.storage}(${wu[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},Ve=(e,t,r,i)=>{let n=e.inputs.length===1?r:Kn(e.inputs,r),a=n.axes;a.length===0&&!n.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((y,_)=>_));let s=R.normalizeAxes(a,e.inputs[0].dims.length),o=s,l=e.inputs[0],d=ku(o,e.inputs[0].dims.length);d.length>0&&(l=e.compute(Pe(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=bu(o.length,l.dims.length));let[h,c]=$u(l.dims,o),g=h;n.keepDims&&(g=vu(h,s)),e.compute(Su(t,n.cacheKey,[l],i,e.inputs[0].dataType,g,c),{inputs:[l]})},sc=(e,t)=>{Ve(e,"ReduceMeanShared",t,"mean")},oc=(e,t)=>{Ve(e,"ReduceL1Shared",t,"l1")},uc=(e,t)=>{Ve(e,"ReduceL2Shared",t,"l2")},lc=(e,t)=>{Ve(e,"ReduceLogSumExpShared",t,"logSumExp")},dc=(e,t)=>{Ve(e,"ReduceMaxShared",t,"max")},pc=(e,t)=>{Ve(e,"ReduceMinShared",t,"min")},cc=(e,t)=>{Ve(e,"ReduceProdShared",t,"prod")},hc=(e,t)=>{Ve(e,"ReduceSumShared",t,"sum")},fc=(e,t)=>{Ve(e,"ReduceSumSquareShared",t,"sumSquare")},mc=(e,t)=>{Ve(e,"ReduceLogSumShared",t,"logSum")}}),Fe,Tu,oi,Kn,Ge,Eu,Iu,zu,Cu,Au,Ou,Ru,Bu,Nu,Mu,He,gc,_c,yc,wc,bc,$c,vc,xc,kc,Sc,ya=P(()=>{"use strict";J(),re(),Se(),ie(),I0(),Fe=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Tu=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],oi=(e,t,r,i,n,a,s=!1,o=!1)=>{let l=[],d=r[0].dims,h=d.length,c=R.normalizeAxes(n,h),g=!o&&c.length===0;d.forEach((b,k)=>{g||c.indexOf(k)>=0?s&&l.push(1):l.push(b)});let y=l.length,_=R.size(l);return{name:e,shaderCache:t,getShaderSource:b=>{let k=[],$=B("_A",r[0].dataType,h),w=F("output",a,y),T=i($,w,c),S=T[2];for(let I=0,z=0;I<h;I++)g||c.indexOf(I)>=0?(s&&z++,S=`for(var j${I}: u32 = 0; j${I} < ${d[I]}; j${I}++) {
                  ${T[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${$.indicesSet("input_indices",I,`j${I}`)}
                  ${S}
                }`):(k.push(`${$.indicesSet("input_indices",I,w.indicesGet("output_indices",z))};`),z++);return`

        ${b.registerUniform("output_size","u32").declareVariables($,w)}

        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${$.type.indices};
          let output_indices = ${w.offsetToIndices("global_idx")};

          ${k.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${S}
          ${T[3]}
          ${T.length===4?w.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:a}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...X(d,l)]})}},Kn=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),he({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Ge=(e,t,r,i)=>{let n=e.inputs,a=n.length===1?r:Kn(n,r);e.compute(oi(t,{hint:a.cacheKey,inputDependencies:["rank"]},[n[0]],a.noopWithEmptyAxes&&a.axes.length===0?Tu:i,a.axes,n[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},Eu=(e,t)=>{Fe(e.inputs),Ge(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Iu=(e,t)=>{Fe(e.inputs),Ge(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},zu=(e,t)=>{Fe(e.inputs),Ge(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Cu=(e,t)=>{Fe(e.inputs),Ge(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Au=(e,t)=>{Fe(e.inputs),Ge(e,"ReduceMax",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(r.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Ou=(e,t)=>{Fe(e.inputs),Ge(e,"ReduceMean",t,(r,i,n)=>{let a=1;for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${a});`]})},Ru=(e,t)=>{Fe(e.inputs),Ge(e,"ReduceMin",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},Bu=(e,t)=>{Fe(e.inputs),Ge(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},Nu=(e,t)=>{Fe(e.inputs),Ge(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},Mu=(e,t)=>{Fe(e.inputs),Ge(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},He=(e,t,r)=>{if(t.length===0)return r;let i=1,n=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?i*=e[a]:n*=e[a];return n<32&&i>1024},gc=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ou(e,t):sc(e,t)},_c=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Iu(e,t):oc(e,t)},yc=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?zu(e,t):uc(e,t)},wc=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Cu(e,t):lc(e,t)},bc=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Au(e,t):dc(e,t)},$c=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ru(e,t):pc(e,t)},vc=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Bu(e,t):cc(e,t)},xc=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Nu(e,t):hc(e,t)},kc=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Mu(e,t):fc(e,t)},Sc=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Eu(e,t):mc(e,t)}}),ln,Tc,Ec,Xn,z0=P(()=>{"use strict";J(),Se(),ya(),ln=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Tc=(e,t)=>{ln(e.inputs);let r=(i,n,a)=>{let s=[];for(let o=0;o<i.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(oi("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Ec=(e,t)=>{ln(e.inputs);let r=(i,n,a)=>{let s=[];for(let o=0;o<i.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(oi("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Xn=e=>he(e)}),Du,jr,Pu,Uu,Lu,vr,qu,Ic,wa=P(()=>{"use strict";J(),re(),ga(),ie(),Du=(e,t)=>{let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],h=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==h)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let c=n.dims[0]/3,g=c,y=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");c=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],y=t.qkvHiddenSizes[2]}let _=d;if(c!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==c+g+y)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(s){if(g!==y)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(b=s.dims[3])}let k=_+b,$=-1,w=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==k)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:b,kvSequenceLength:_,totalSequenceLength:k,maxSequenceLength:$,inputHiddenSize:h,hiddenSize:c,vHiddenSize:y,headSize:Math.floor(c/t.numHeads),vHeadSize:Math.floor(y/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},jr=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Pu=(e,t,r,i,n,a,s,o)=>{let l=ke(s?1:a),d=64,h=a/l;h<d&&(d=32);let c=Math.ceil(a/l/d),g=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:h},{type:12,data:c}],y=Ie(e.dataType,l),_=Ee(1,l),b=["type"];s&&b.push("type"),o&&b.push("type");let k=$=>{let w=F("x",e.dataType,e.dims,l),T=[w],S=s?B("seq_lens",s.dataType,s.dims):void 0;S&&T.push(S);let I=o?B("total_sequence_length_input",o.dataType,o.dims):void 0;I&&T.push(I);let z=Ee(e.dataType),C=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${$.registerUniforms(C).declareVariables(...T)}
  ${$.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${jr(S,I,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${_}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${_}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${_}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${_}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${w.type.value}(${z}(1.0) / ${z}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${w.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${w.type.value}(${z}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${y};${l}`,inputDependencies:b},getShaderSource:k,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:n,z:t*r},programUniforms:g})}},Uu=(e,t,r,i,n,a,s,o,l)=>{let d=s+a.kvSequenceLength,h=[a.batchSize,a.numHeads,a.sequenceLength,d],c=e>1&&i,g=a.kvNumHeads?a.kvNumHeads:a.numHeads,y=c?[a.batchSize,g,d,a.headSize]:void 0,_=a.nReps?a.nReps:1,b=a.scale===0?1/Math.sqrt(a.headSize):a.scale,k=ke(a.headSize),$=a.headSize/k,w=12,T={x:Math.ceil(d/w),y:Math.ceil(a.sequenceLength/w),z:a.batchSize*a.numHeads},S=[{type:12,data:a.sequenceLength},{type:12,data:$},{type:12,data:d},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:b},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:_}],I=c&&i&&R.size(i.dims)>0,z=["type","type"];I&&z.push("type"),n&&z.push("type"),o&&z.push("type"),l&&z.push("type");let C=[{dims:h,dataType:t.dataType,gpuDataType:0}];c&&C.push({dims:y,dataType:t.dataType,gpuDataType:0});let x=M=>{let q=B("q",t.dataType,t.dims,k),Z=B("key",r.dataType,r.dims,k),W=[q,Z];if(I){let Q=B("past_key",i.dataType,i.dims,k);W.push(Q)}n&&W.push(B("attention_bias",n.dataType,n.dims));let H=o?B("seq_lens",o.dataType,o.dims):void 0;H&&W.push(H);let oe=l?B("total_sequence_length_input",l.dataType,l.dims):void 0;oe&&W.push(oe);let O=F("output",t.dataType,h),U=[O];c&&U.push(F("present_key",t.dataType,y,k));let ee=Ee(1,k),te=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;

  var<workgroup> tileQ: array<${q.type.storage}, ${w*w}>;
  var<workgroup> tileK: array<${q.type.storage}, ${w*w}>;
  ${M.registerUniforms(te).declareVariables(...W,...U)}
  ${M.mainStart([w,w,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${jr(H,oe,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${I&&c?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${c?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${ee}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${I&&c?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${c?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${ee}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(k){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${k}`)}})()};
        output[outputIdx] = ${O.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${k};${n!==void 0};${i!==void 0};${e}`,inputDependencies:z},getRunData:()=>({outputs:C,dispatchGroup:T,programUniforms:S}),getShaderSource:x}},Lu=(e,t,r,i,n,a,s=void 0,o=void 0)=>{let l=a+n.kvSequenceLength,d=n.nReps?n.nReps:1,h=n.vHiddenSize*d,c=e>1&&i,g=n.kvNumHeads?n.kvNumHeads:n.numHeads,y=c?[n.batchSize,g,l,n.headSize]:void 0,_=[n.batchSize,n.sequenceLength,h],b=12,k={x:Math.ceil(n.vHeadSize/b),y:Math.ceil(n.sequenceLength/b),z:n.batchSize*n.numHeads},$=[{type:12,data:n.sequenceLength},{type:12,data:l},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:h},{type:12,data:a},{type:12,data:n.kvSequenceLength},{type:12,data:d}],w=c&&i&&R.size(i.dims)>0,T=["type","type"];w&&T.push("type"),s&&T.push("type"),o&&T.push("type");let S=[{dims:_,dataType:t.dataType,gpuDataType:0}];c&&S.push({dims:y,dataType:t.dataType,gpuDataType:0});let I=z=>{let C=B("probs",t.dataType,t.dims),x=B("v",r.dataType,r.dims),M=[C,x];w&&M.push(B("past_value",i.dataType,i.dims));let q=s?B("seq_lens",s.dataType,s.dims):void 0;s&&M.push(q);let Z=o?B("total_sequence_length_input",o.dataType,o.dims):void 0;o&&M.push(Z);let W=[F("output",t.dataType,_)];c&&W.push(F("present_value",t.dataType,y));let H=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;
  var<workgroup> tileQ: array<${C.type.value}, ${b*b}>;
  var<workgroup> tileV: array<${C.type.value}, ${b*b}>;
  ${z.registerUniforms(H).declareVariables(...M,...W)}
  ${z.mainStart([b,b,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${jr(q,Z,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${w&&c?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${c?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${C.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${w&&c?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${c?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:S,dispatchGroup:k,programUniforms:$}),getShaderSource:I}},vr=(e,t,r,i,n,a,s,o,l,d,h=void 0,c=void 0)=>{let g=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),y=g>1?s:void 0,_=g>1?o:void 0,b=g>1?d.pastSequenceLength:0,k=b+d.kvSequenceLength,$=l&&R.size(l.dims)>0?l:void 0,w=[t,r];y&&R.size(y.dims)>0&&w.push(y),$&&w.push($),h&&w.push(h),c&&w.push(c);let T=e.compute(Uu(g,t,r,y,$,d,b,h,c),{inputs:w,outputs:g>1?[-1,1]:[-1]})[0];e.compute(Pu(T,d.batchSize,d.numHeads,b,d.sequenceLength,k,h,c),{inputs:h&&c?[T,h,c]:[T],outputs:[]});let S=[T,i];_&&R.size(_.dims)>0&&S.push(_),h&&S.push(h),c&&S.push(c),e.compute(Lu(g,T,i,_,d,b,h,c),{inputs:S,outputs:g>1?[0,2]:[0]})},qu=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,n=t.inputHiddenSize,a=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],h=c=>{let g=F("output_q",l[0].dataType,r),y=F("output_k",l[0].dataType,r),_=F("output_v",l[0].dataType,r),b=B("input",l[0].dataType,l[0].dims),k=B("weight",l[1].dataType,l[1].dims),$=B("bias",l[2].dataType,l[2].dims),w=b.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${w}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${w}, ${s*s}>;
  var<workgroup> tileWeightK: array<${w}, ${s*s}>;
  var<workgroup> tileWeightV: array<${w}, ${s*s}>;
  ${c.registerUniforms(T).declareVariables(b,k,$,g,y,_)}
  ${c.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${w}(0);
    var valueK = ${w}(0);
    var valueV = ${w}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:h},{inputs:l,outputs:[-1,-1,-1]})},Ic=(e,t)=>{let r=Du(e.inputs,t),[i,n,a]=qu(e,r);return vr(e,i,n,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Wu,Vu,Fu,zc,C0=P(()=>{"use strict";qe(),J(),re(),Se(),ie(),Wu=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,n,a)=>{let s=n.length;if(s!==i.length)throw new Error(`${a}: num dimensions != ${s}`);n.forEach((o,l)=>{if(o!==i[l])throw new Error(`${a}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Vu=(e,t)=>{let{epsilon:r,spatial:i,format:n}=t,a=e[0].dims,s=i?ke(a[a.length-1]):1,o=n==="NHWC"&&a.length>1?s:1,l=R.size(a)/s,d=i,h=d?a.length:a,c=B("x",e[0].dataType,e[0].dims,s),g=B("scale",e[1].dataType,e[1].dims,o),y=B("bias",e[2].dataType,e[2].dims,o),_=B("inputMean",e[3].dataType,e[3].dims,o),b=B("inputVar",e[4].dataType,e[4].dims,o),k=F("y",e[0].dataType,h,s),$=()=>{let T="";if(i)T=`let cOffset = ${a.length===1?"0u":n==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(n==="NCHW")T=`
            ${k.indicesSet("outputIndices","0","0")}
            let cOffset = ${k.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let S=1;S<g.rank;S++)T+=`cIndices[${S}] = outputIndices[${S}];`;T+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return T},w=T=>`
  const epsilon = ${r};
  ${T.registerUniform("outputSize","u32").declareVariables(c,g,y,_,b,k)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${k.offsetToIndices(`global_idx * ${s}`)};
    ${$()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${y.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${c.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${k.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...X(a)]:[{type:12,data:l}]})}},Fu=e=>he(e),zc=(e,t)=>{let{inputs:r,outputCount:i}=e,n=Fu({...t,outputCount:i});if(ge.webgpu.validateInputContent&&Wu(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Vu(r,n))}}),Gu,Hu,Cc,A0=P(()=>{"use strict";re(),ie(),Gu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Hu=e=>{let t=e[0].dims,r=e[0].dims[2],i=R.size(t)/4,n=e[0].dataType,a=B("input",n,t,4),s=B("bias",n,[r],4),o=B("residual",n,t,4),l=F("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(a,s,o,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},Cc=e=>{Gu(e.inputs),e.compute(Hu(e.inputs))}}),ju,ce,Ac,Oc,Rc,Bc,Nc,Mc,Dc,Pc,Uc,Ku,Lc,qc,Wc,Vc,yr,Fc,ri,Gc,Hc,jc,Kc,Xc,Zc,Qc,Yc,Jc,eh,th,rh,ih,nh,ah,sh,oh,dn,uh,Zn,Qn,lh,dh,ph,Xu,Zu,ch,ba=P(()=>{"use strict";J(),re(),Se(),ie(),ju=(e,t,r,i,n,a,s)=>{let o=Math.ceil(t/4),l="";typeof n=="string"?l=`${n}(a)`:l=n("a");let d=B("inputData",r,[o],4),h=F("outputData",i,[o],4),c=[{name:"vec_size",type:"u32"}];return s&&c.push(...s),`
      ${e.registerUniforms(c).declareVariables(d,h)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${h.setByOffset("global_idx",l)}
  }`},ce=(e,t,r,i,n,a=e.dataType,s,o)=>{let l=[{type:12,data:Math.ceil(R.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:d=>ju(d,R.size(e.dims),e.dataType,a,r,i,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(R.size(d[0].dims)/64/4)},programUniforms:l})}},Ac=e=>{e.compute(ce(e.inputs[0],"Abs","abs"))},Oc=e=>{e.compute(ce(e.inputs[0],"Acos","acos"))},Rc=e=>{e.compute(ce(e.inputs[0],"Acosh","acosh"))},Bc=e=>{e.compute(ce(e.inputs[0],"Asin","asin"))},Nc=e=>{e.compute(ce(e.inputs[0],"Asinh","asinh"))},Mc=e=>{e.compute(ce(e.inputs[0],"Atan","atan"))},Dc=e=>{e.compute(ce(e.inputs[0],"Atanh","atanh"))},Pc=e=>he(e),Uc=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ce(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Ku=e=>{let t,r,i=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return he({min:t,max:r})},Lc=(e,t)=>{let r=t||Ku(e.inputs),i=Ee(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},qc=e=>{e.compute(ce(e.inputs[0],"Ceil","ceil"))},Wc=e=>{e.compute(ce(e.inputs[0],"Cos","cos"))},Vc=e=>{e.compute(ce(e.inputs[0],"Cosh","cosh"))},yr=e=>he(e),Fc=(e,t)=>{let r=Ee(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},ri=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Gc=e=>{let t=Ee(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,ri(t)))},Hc=e=>{e.compute(ce(e.inputs[0],"Exp","exp"))},jc=e=>{e.compute(ce(e.inputs[0],"Floor","floor"))},Kc=e=>{let t=Ee(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,ri(t)))},Xc=(e,t)=>{let r=Ee(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Zc=e=>{e.compute(ce(e.inputs[0],"Not",t=>`!${t}`))},Qc=e=>{e.compute(ce(e.inputs[0],"Neg",t=>`-${t}`))},Yc=e=>{e.compute(ce(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Jc=e=>{let t=Ee(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},eh=e=>{e.compute(ce(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},th=e=>he(e),rh=(e,t)=>{let r=Ee(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},ih=e=>{let t=Ee(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"HardSwish",r=>`${r} * max(vec4<${t}>(0.0), min(vec4<${t}>(1.0), vec4<${t}>(${t}(1.0 / 6.0)) * ${r} + vec4<${t}>(0.5)))`))},nh=e=>{e.compute(ce(e.inputs[0],"Sin","sin"))},ah=e=>{e.compute(ce(e.inputs[0],"Sinh","sinh"))},sh=e=>{e.compute(ce(e.inputs[0],"Sqrt","sqrt"))},oh=e=>{e.compute(ce(e.inputs[0],"Tan","tan"))},dn=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,uh=e=>{e.compute(ce(e.inputs[0],"Tanh",dn))},Zn=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${dn("v")};
}
`,Qn=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,lh=e=>{let t=Ee(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"FastGelu",Qn,Zn(t),void 0,e.inputs[0].dataType))},dh=(e,t)=>{let r=Ee(e.inputs[0].dataType);return e.compute(ce(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},ph=e=>{e.compute(ce(e.inputs[0],"Log","log"))},Xu=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Zu=e=>`quick_gelu_impl(${e})`,ch=(e,t)=>{let r=Ee(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"QuickGelu",Zu,Xu(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Qu,Yu,hh,O0=P(()=>{"use strict";re(),ie(),ba(),Qu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Yu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=B("input",e[0].dataType,e[0].dims,4),i=B("bias",e[0].dataType,[e[0].dims[2]],4),n=F("output",e[0].dataType,t,4),a=R.size(t)/4,s=Ie(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,i,n)}

  ${ri(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},hh=e=>{Qu(e.inputs),e.compute(Yu(e.inputs))}}),Ju,el,je,fh,mh,gh,_h,yh,wh,bh,$h,vh,xh,R0=P(()=>{"use strict";J(),re(),ie(),Ju=(e,t,r,i,n,a,s,o,l,d,h,c)=>{let g,y;typeof o=="string"?g=y=(w,T)=>`${o}((${w}),(${T}))`:typeof o=="function"?g=y=o:(g=o.scalar,y=o.vector);let _=F("outputData",h,i.length,4),b=B("aData",l,t.length,4),k=B("bData",d,r.length,4),$;if(n)if(a){let w=R.size(t)===1,T=R.size(r)===1,S=t.length>0&&t[t.length-1]%4===0,I=r.length>0&&r[r.length-1]%4===0;w||T?$=_.setByOffset("global_idx",y(w?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),T?`${k.type.value}(${k.getByOffset("0")}.x)`:k.getByOffset("global_idx"))):$=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${b.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${k.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",y(s||S?b.getByOffset("offsetA / 4u"):`${b.type.value}(${b.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||I?k.getByOffset("offsetB / 4u"):`${k.type.value}(${k.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else $=_.setByOffset("global_idx",y(b.getByOffset("global_idx"),k.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let w=(T,S,I="")=>{let z=`aData[indexA${S}][componentA${S}]`,C=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${_.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${b.broadcastedIndicesToOffset(`outputIndices${S}`,_)};
            let offsetB${S} = ${k.broadcastedIndicesToOffset(`outputIndices${S}`,_)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${T}[${S}] = ${I}(${g(z,C)});
          `};h===9?$=`
            var data = vec4<u32>(0);
            ${w("data",0,"u32")}
            ${w("data",1,"u32")}
            ${w("data",2,"u32")}
            ${w("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:$=`
            ${w("outputData[global_idx]",0)}
            ${w("outputData[global_idx]",1)}
            ${w("outputData[global_idx]",2)}
            ${w("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(b,k,_)}

        ${c??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${$}
      }`},el=(e,t,r,i,n,a,s=r.dataType)=>{let o=r.dims.map(Number),l=i.dims.map(Number),d=!R.areEqual(o,l),h=o,c=R.size(o),g=!1,y=!1,_=[d];if(d){let b=Yt.calcShape(o,l,!1);if(!b)throw new Error("Can't perform binary op on the given tensors");h=b.slice(),c=R.size(h);let k=R.size(o)===1,$=R.size(l)===1,w=o.length>0&&o[o.length-1]%4===0,T=l.length>0&&l[l.length-1]%4===0;_.push(k),_.push($),_.push(w),_.push(T);let S=1;for(let I=1;I<h.length;I++){let z=o[o.length-I],C=l[l.length-I];if(z===C)S*=z;else break}S%4===0?(y=!0,g=!0):(k||$||w||T)&&(g=!0)}else g=!0;return _.push(g),{name:e,shaderCache:{hint:t+_.map(b=>b.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:b=>Ju(b,o,l,h,g,d,y,n,r.dataType,i.dataType,s,a),getRunData:()=>({outputs:[{dims:h,dataType:s}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:Math.ceil(R.size(h)/4)},...X(o,l,h)]})}},je=(e,t,r,i,n,a)=>{e.compute(el(t,n??"",e.inputs[0],e.inputs[1],r,i,a))},fh=e=>{je(e,"Add",(t,r)=>`${t}+${r}`)},mh=e=>{je(e,"Div",(t,r)=>`${t}/${r}`)},gh=e=>{je(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},_h=e=>{je(e,"Mul",(t,r)=>`${t}*${r}`)},yh=e=>{let t=B("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;je(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},wh=e=>{je(e,"Sub",(t,r)=>`${t}-${r}`)},bh=e=>{je(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},$h=e=>{je(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},vh=e=>{je(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},xh=e=>{je(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),tl,rl,il,nl,kh,Sh,B0=P(()=>{"use strict";J(),re(),Se(),ie(),tl=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],n=i.dataType,a=i.dims.length;e.forEach((s,o)=>{if(o!==r){if(s.dataType!==n)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((l,d)=>{if(d!==t&&l!==i.dims[d])throw new Error("non concat dimensions must match")})}})},rl=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,il=(e,t)=>{let r=e.length,i=[];for(let n=0;n<r;++n){let a=t.setByOffset("global_idx",e[n].getByIndices("indices"));r===1?i.push(a):n===0?i.push(`if (inputIndex == ${n}u) { ${a} }`):n===r-1?i.push(`else { ${a} }`):i.push(`else if (inputIndex == ${n}) { ${a} }`)}return i.join(`
`)},nl=(e,t,r,i)=>{let n=R.size(r),a=new Array(e.length),s=new Array(e.length),o=0,l=[],d=[],h=[{type:12,data:n}];for(let b=0;b<e.length;++b)o+=e[b].dims[t],a[b]=o,d.push(e[b].dims.length),s[b]=B(`input${b}`,i,d[b]),l.push("rank"),h.push({type:12,data:a[b]});for(let b=0;b<e.length;++b)h.push(...X(e[b].dims));h.push(...X(r));let c=F("output",i,r.length),g=c.indicesGet("indices",t),y=Array.from(Array(a.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),_=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let k=0;k<e.length;k++)b.registerUniform(`sizeInConcatAxis${k}`,"u32");return b.declareVariables(...s,c)})()}

  ${rl(a.length,y)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${c.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${g});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${y});
      ${g} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${il(s,c)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:h}),getShaderSource:_}},kh=(e,t)=>{let r=e.inputs,i=r[0].dims,n=R.normalizeAxis(t.axis,i.length);tl(r,n);let a=i.slice();a[n]=r.reduce((o,l)=>o+(l.dims.length>n?l.dims[n]:0),0);let s=r.filter(o=>R.size(o.dims)>0);e.compute(nl(s,n,a,r[0].dataType),{inputs:s})},Sh=e=>he({axis:e.axis})}),qt,Wt,Vt,$a,Gt=P(()=>{"use strict";J(),re(),qt=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Wt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Vt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},$a=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=e?.activation_params||[Zp,Qp];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ae,Th,va=P(()=>{"use strict";Ae=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Th=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Eh,N0=P(()=>{"use strict";Eh=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),br,xa,ka=P(()=>{"use strict";J(),re(),ie(),Gt(),br=(e,t,r,i,n)=>{let a=i-r;return`
      ${Array.from({length:r}).map((s,o)=>`
      if (${j(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,j(n,o+a,i))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},xa=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,o=e[1].dims,l=s[s.length-2],d=o[o.length-1],h=s[s.length-1],c=ke(d),g=ke(h),y=ke(l),_=R.size(r)/c/y,b=e.length>2,k=i?i.slice(0,-2):r.slice(0,-2),$=[R.size(k),l,d],w=[{type:12,data:_},{type:12,data:l},{type:12,data:d},{type:12,data:h}];Wt(t,w),w.push(...X(k,s,o)),b&&w.push(...X(e[2].dims)),w.push(...X($));let T=S=>{let I=_a("batch_dims",e[0].dataType,k.length),z=B("a",e[0].dataType,s.length,g),C=B("b",e[1].dataType,o.length,c),x=F("output",e[0].dataType,$.length,c),M=Ie(x.type.tensor),q=qt(t,x.type.value,M),Z=[z,C],W="";if(b){let O=n?c:1;Z.push(B("bias",e[2].dataType,e[2].dims.length,O)),W=`${n?`value += bias[col / ${O}];`:`value += ${x.type.value}(bias[row + i]);`}`}let H=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Vt(t,H);let oe=()=>{let O=`var a_data: ${z.type.value};`;for(let U=0;U<g;U++)O+=`
              let b_data${U} = b[(b_offset + (k + ${U}) * uniforms.N + col) / ${c}];`;for(let U=0;U<y;U++){O+=`a_data = a[(a_offset + (row + ${U}) * uniforms.K + k) / ${g}];`;for(let ee=0;ee<g;ee++)O+=`
            values[${U}] = fma(${C.type.value}(a_data${g===1?"":`[${ee}]`}), b_data${ee}, values[${U}]);
`}return O};return`
  ${S.registerUniforms(H).registerInternalVariables(I).declareVariables(...Z,x)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${c})) * ${c};
    var index1 = global_idx / (uniforms.N / ${c});
    let stride1 = uniforms.M / ${y};
    let row = (index1 % stride1) * ${y};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${z.type.indices};
    ${br("a_indices",z,z.rank-2,I.rank,"batch_indices")}
    ${z.indicesSet("a_indices",z.rank-2,0)}
    ${z.indicesSet("a_indices",z.rank-1,0)}
    let a_offset = ${z.indicesToOffset("a_indices")};

    var b_indices: ${C.type.indices};
    ${br("b_indices",C,C.rank-2,I.rank,"batch_indices")}
    ${C.indicesSet("b_indices",C.rank-2,0)}
    ${C.indicesSet("b_indices",C.rank-1,0)}
    let b_offset = ${C.indicesToOffset("b_indices")};
    var values: array<${x.type.value}, ${y}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${g}) {
      ${oe()}
    }
    for (var i = 0u; i < ${y}u; i++) {
      var value = values[i];
      ${W}
      ${q}
      let cur_indices = ${x.type.indices}(batch, row + i, col);
      let offset = ${x.indicesToOffset("cur_indices")};
      ${x.setByOffset(`offset / ${c}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${c};${g};${y};${n}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:w}),getShaderSource:T}}}),al,sl,Yn,pn,ol,Jn,ul,ui,Sa=P(()=>{"use strict";J(),re(),ie(),Gt(),ka(),va(),al=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,sl=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Yn=(e,t,r="f32",i,n=!1,a=32,s=!1,o=32)=>{let l=t[1]*e[1],d=t[0]*e[0],h=n?l:a,c=n?a:l,g=h/t[0],y=a/t[1];if(!((n&&g===4&&e[1]===4||!n&&(g===3||g===4))&&h%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${g} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${g} must be 3 or 4.
  tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${g}<${r}>, ${h/g}>, ${c}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${g};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${y};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${al(n,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${g===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${sl(n,g)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},pn=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,ol=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Jn=(e,t,r="f32",i,n=!1,a=32,s=!1,o=32,l=!1)=>{let d=e[1]*t[1],h=e[0]*t[0],c=n?d:a,g=n?a:d;if(!(g%t[1]===0&&c%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let y=g/t[1],_=c/t[0],b=a/t[1],k=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${h};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${g}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          ${pn(n,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${y};
let tileColA = i32(localId.x) * ${_};
let tileRowB = i32(localId.y) * ${b};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${pn(n,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${ol(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${c}>, ${g}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${h}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${k}
  }
`},ul=(e,t,r,i,n=!1)=>{let[a,s,o,l]=i,d=Ie(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ae(e,d)} {
      var value = ${Ae(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${br("aIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ae(e,d)} {
      var value = ${Ae(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${br("bIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ae(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${Ae(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},ui=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,o=e[1].dims,l=s.slice(0,-2),d=o.slice(0,-2),h=i?i.slice(0,-2):r.slice(0,-2),c=R.size(h),g=s[s.length-2],y=s[s.length-1],_=o[o.length-1],b=y%4===0&&_%4===0,k=g<=8?[4,1,1]:[4,4,1],$=[8,8,1],w=[Math.ceil(_/$[0]/k[0]),Math.ceil(g/$[1]/k[1]),Math.ceil(c/$[2]/k[2])],T=b?4:1,S=[...l,g,y/T],I=S.length,z=[...d,y,_/T],C=z.length,x=[c,g,_/T],M=[{type:6,data:g},{type:6,data:_},{type:6,data:y}];Wt(t,M),M.push(...X(h,S,z));let q=["rank","rank"],Z=e.length>2;Z&&(M.push(...X(e[2].dims)),q.push("rank")),M.push(...X(x));let W=H=>{let oe=h.length,O=_a("batchDims",e[0].dataType,oe,1),U=Ie(e[0].dataType),ee=B("a",e[0].dataType,I,T),te=B("b",e[1].dataType,C,T),Q=F("result",e[0].dataType,x.length,T),ne=[ee,te];if(Z){let $e=n?T:1;ne.push(B("bias",e[2].dataType,e[2].dims.length,$e))}let D=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Vt(t,D);let Y=Ie(Q.type.tensor),K=qt(t,Q.type.value,Y),G=ul(T,Z,K,[O,ee,te,Q],n);return`
  ${H.registerUniforms(D).registerInternalVariables(O).declareVariables(...ne,Q)}
  ${G}
  ${b?Yn(k,$,U,O):Jn(k,$,U,O)}
                   `};return{name:"MatMul",shaderCache:{hint:`${k};${t.activation};${b};${n}`,inputDependencies:q},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:M}),getShaderSource:W}}}),ll,Ih,M0=P(()=>{"use strict";J(),dt(),ie(),Gt(),va(),N0(),Sa(),ll=(e,t,r,i,n=!1,a,s=4,o=4,l=4,d="f32")=>{let h=M=>{switch(M){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${M} is not supported.`)}},c=M=>{switch(M){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${M} is not supported.`)}},g=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,y=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",b=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",k=e?"row":"col",$=e?"col":"row",w=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${k} / outWidth;
    let outCol = ${k} % outWidth;

    let WRow = ${$} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${$} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${$} % inChannels;
    var resData = ${Ae(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${b}) {
      ${g}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${h(s)}
    }
    return resData;`,T=e?t&&i?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${w}
    }
    return ${Ae(s,d)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w}
    }
    return ${Ae(s,d)}(0.0);`,S=e?i&&r?c(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${c(o)}
    }
    return ${Ae(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${c(o)}
    }
    return ${Ae(o,d)}(0.0);`,I=Ae(l,d),z=Ae(e?s:o,d),C=Ae(e?o:s,d),x=qt(a,I,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?T:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?S:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${I}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${y}
      ${Th(n)}
      ${x}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Ih=(e,t,r,i,n,a,s,o,l)=>{let d=t.format==="NHWC",h=d?e[0].dims[3]:e[0].dims[1],c=r[0],g=d?r[2]:r[3],y=d?r[1]:r[2],_=d?r[3]:r[1],b=d&&(h%4===0||h%3===0)&&_%4===0,k=d?_:g*y,$=d?g*y:_,w=[8,8,1],T=i<=8?[4,1,1]:[4,4,1],S=[Math.ceil(k/w[0]/T[0]),Math.ceil($/w[1]/T[1]),Math.ceil(c/w[2]/T[2])];de("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let I=b?d&&h%4!==0?3:4:1,z=w[1]*T[1],C=w[0]*T[0],x=Math.max(w[0]*I,w[1]),M=i%z===0,q=n%C===0,Z=a%x===0,W=b?[I,4,4]:[1,1,1],H=[{type:6,data:i},{type:6,data:n},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Wt(t,H),H.push(...X(e[0].dims,e[1].dims));let oe=["rank","rank"];s&&(H.push(...X(e[2].dims)),oe.push("rank")),H.push(...X(r));let O=U=>{let ee=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Vt(t,ee);let te=b?4:1,Q=Ie(e[0].dataType),ne=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${Q}>`:Q}) {
        result[flatIndex] = ${b?`vec4<${Q}>`:Q}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${Q}>`:Q}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,D=B("x",e[0].dataType,e[0].dims.length,I===3?1:I),Y=B("w",e[1].dataType,e[1].dims.length,te),K=[D,Y],G=F("result",e[0].dataType,r.length,te);if(s){let $e=B("bias",e[2].dataType,e[2].dims.length,te);K.push($e),ne+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${Q}>`:Q} {
          return bias[coords.${d?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${Eh("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${U.registerUniforms(ee).declareVariables(...K,G)}
        ${ne}
        ${ll(d,M,q,Z,s,t,W[0],W[1],W[2],Q)}
        ${b?Yn(T,w,Q,void 0,!d,x):Jn(T,w,Q,void 0,!d,x,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${b};${M};${q};${Z};${z};${C};${x}`,inputDependencies:oe},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:H}),getShaderSource:O}}}),dl,cn,dr,pl,hn,cl,zh,Ch,D0=P(()=>{"use strict";J(),dt(),re(),ie(),Gt(),va(),dl=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},cn=e=>typeof e=="number"?[e,e,e]:e,dr=(e,t)=>t<=1?e:e+(e-1)*(t-1),pl=(e,t,r,i=1)=>{let n=dr(t,i);return Math.floor((e[0]*(r-1)-r+n)/2)},hn=(e,t,r,i,n)=>{n==null&&(n=pl(e,t[0],i[0]));let a=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*n>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*n)/i[s]+1));return a},cl=(e,t,r,i,n,a,s,o,l,d)=>{let h,c,g,y;if(e==="VALID"&&(e=0),typeof e=="number"){h={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=hn([t,r,i,1],[o,l,d],1,[n,a,s],e);c=_[0],g=_[1],y=_[2]}else if(Array.isArray(e)){if(!e.every((b,k,$)=>b===$[0]))throw Error(`Unsupported padding parameter: ${e}`);h={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=hn([t,r,i,1],[o,l,d],1,[n,a,s],e[0]);c=_[0],g=_[1],y=_[2]}else if(e==="SAME_UPPER"){c=Math.ceil(t/n),g=Math.ceil(r/a),y=Math.ceil(i/s);let _=(c-1)*n+o-t,b=(g-1)*a+l-r,k=(y-1)*s+d-i,$=Math.floor(_/2),w=_-$,T=Math.floor(b/2),S=b-T,I=Math.floor(k/2),z=k-I;h={top:T,bottom:S,left:I,right:z,front:$,back:w}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:h,outDepth:c,outHeight:g,outWidth:y}},zh=(e,t,r,i,n,a=!1,s="channelsLast")=>{let o,l,d,h,c;if(s==="channelsLast")[o,l,d,h,c]=e;else if(s==="channelsFirst")[o,c,l,d,h]=e;else throw new Error(`Unknown dataFormat ${s}`);let[g,,y,_,b]=t,[k,$,w]=cn(r),[T,S,I]=cn(i),z=dr(y,T),C=dr(_,S),x=dr(b,I),{padInfo:M,outDepth:q,outHeight:Z,outWidth:W}=cl(n,l,d,h,k,$,w,z,C,x),H=a?g*c:g,oe=[0,0,0,0,0];return s==="channelsFirst"?oe=[o,H,q,Z,W]:s==="channelsLast"&&(oe=[o,q,Z,W,H]),{batchSize:o,dataFormat:s,inDepth:l,inHeight:d,inWidth:h,inChannels:c,outDepth:q,outHeight:Z,outWidth:W,outChannels:H,padInfo:M,strideDepth:k,strideHeight:$,strideWidth:w,filterDepth:y,filterHeight:_,filterWidth:b,effectiveFilterDepth:z,effectiveFilterHeight:C,effectiveFilterWidth:x,dilationDepth:T,dilationHeight:S,dilationWidth:I,inShape:e,outShape:oe,filterShape:t}},Ch=(e,t,r,i,n,a)=>{let s=a==="channelsLast",o=s?e[0].dims[3]:e[0].dims[1],l=!1,d=[64,1,1],h={x:r.map((w,T)=>T)},c=[Math.ceil(dl(h.x.map(w=>r[w]))/d[0]),1,1];de("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${c}`);let g=l?s&&o%4!==0?3:4:1,y=R.size(r),_=[{type:12,data:y},{type:12,data:i},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];Wt(t,_),_.push(...X(e[0].dims,e[1].dims));let b=["rank","rank"],k=e.length===3;k&&(_.push(...X(e[2].dims)),b.push("rank")),_.push(...X(r));let $=w=>{let T=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Vt(t,T);let S=l?4:1,I=Ie(e[0].dataType),z=B("x",e[0].dataType,e[0].dims.length,g===3?1:g),C=B("W",e[1].dataType,e[1].dims.length,S),x=[z,C],M=F("result",e[0].dataType,r.length,S),q="";if(k){let H=B("bias",e[2].dataType,e[2].dims.length,S);x.push(H),q+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${l?`vec4<${I}>`:I} {
          return bias[${s?j("coords",4,5):j("coords",1,5)}${l?"/ 4":""}];
        }`}let Z=Ae(g,I),W=qt(t,Z,I);return`
            ${q}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${I} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${z.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${I} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${C.getByIndices("aIndices")};
            }
          ${w.registerUniforms(T).declareVariables(...x,M)}
          ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${M.offsetToIndices("global_idx")};
              let batch = ${j("coords",0,z.rank)};
              let d2 = ${s?j("coords",z.rank-1,z.rank):j("coords",1,z.rank)};
              let xFRCCorner = vec3<u32>(${s?j("coords",1,z.rank):j("coords",2,z.rank)},
              ${s?j("coords",2,z.rank):j("coords",3,z.rank)},
              ${s?j("coords",3,z.rank):j("coords",4,z.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?j("uniforms.x_shape",1,z.rank):j("uniforms.x_shape",2,z.rank)};
              let xShapeZ = ${s?j("uniforms.x_shape",2,z.rank):j("uniforms.x_shape",3,z.rank)};
              let xShapeW = ${s?j("uniforms.x_shape",3,z.rank):j("uniforms.x_shape",4,z.rank)};
              let xShapeU = ${s?j("uniforms.x_shape",4,z.rank):j("uniforms.x_shape",1,z.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = ${I}(0);
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<${I}>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<${I}>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<${I}>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<${I}>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<${I}>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<${I}>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<${I}>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<${I}>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<${I}>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${k?"value = value + getBiasByOutputCoords(coords)":""};
              ${W}
              result[global_idx] = ${I}(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${g};${k}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:c[0],y:c[1],z:c[2]},programUniforms:_}),getShaderSource:$}}}),Ah,Oh,P0=P(()=>{"use strict";J(),re(),ie(),Gt(),Ah=(e,t,r,i)=>{let n=e.length>2,a=n?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],h=d/t.group,c=l&&h>=4?ke(d):1,g=R.size(r)/c,y=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:h}];Wt(t,y),y.push(...X(s,[o[0],o[1],o[2],o[3]/c]));let _=n?["rank","rank","rank"]:["rank","rank"];y.push(...X([r[0],r[1],r[2],r[3]/c]));let b=k=>{let $=F("output",e[0].dataType,r.length,c),w=Ie($.type.tensor),T=qt(t,$.type.value,w),S=B("x",e[0].dataType,s.length),I=B("w",e[1].dataType,o.length,c),z=[S,I];n&&z.push(B("b",e[2].dataType,e[2].dims,c));let C=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Vt(t,C);let x=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${S.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${I.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${S.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${I.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${k.registerUniforms(C).declareVariables(...z,$)}

  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${$.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${c} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${$.type.value} = ${$.type.value}(0);
    ${x}
    ${a}
    ${T}
    ${$.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${c}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:y}),getShaderSource:b}},Oh=(e,t,r,i)=>{let n=e.length>2,a=ke(r[3]),s=ke(r[2]),o=R.size(r)/a/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],h=[r[0],r[1],r[2],r[3]/a],c=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Wt(t,c),c.push(...X(l,d,h));let g=(s-1)*t.strides[1]+d[1],y=_=>{let b=F("output",e[0].dataType,h.length,a),k=Ie(b.type.tensor),$=qt(t,b.type.value,k),w=B("x",e[0].dataType,l.length,a),T=B("w",e[1].dataType,d.length,a),S=[w,T];n&&S.push(B("b",e[2].dataType,e[2].dims,a));let I=n?"value += b[output_channel];":"",z=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Vt(t,z),`
  ${_.registerUniforms(z).declareVariables(...S,b)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${w.type.value}, ${g}>;
    var values: array<${b.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${g}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${w.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${w.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${T.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${I}
      ${$}
      ${b.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${g};${d[0]};${d[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:c}),getShaderSource:y}}}),hl,Kr,fl,Xr,ea,fn,ml,gl,ta,U0=P(()=>{"use strict";re(),M0(),D0(),Sa(),P0(),Gt(),ka(),kt(),hl=(e,t,r,i,n,a)=>{let s=e[0],o=e.slice(a?1:2,a?3:4),l=o.length,d=t[0],h=t.slice(2).map((g,y)=>g+(g-1)*(r[y]-1)),c=o.map((g,y)=>g+i[y]+i[y+l]).map((g,y)=>Math.floor((g-h[y]+n[y])/n[y]));return c.splice(0,0,s),c.splice(a?3:1,0,d),c},Kr=[2,3,1,0],fl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Xr=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let a=2;a<t[1].dims.length;++a)r[a-2]===0&&(r[a-2]=t[1].dims[a]);let i=e.pads.slice();si.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:i}),n},ea=e=>{let t=$a(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,a=e.group,s=e.kernel_shape,o=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:i,format:r,dilations:n,group:a,kernelShape:s,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},fn=(e,t,r,i)=>{let n=r.format==="NHWC",a=hl(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,n);if(r.group!==1){let z=[t[0]];if(n){let C=e.kernelCustomData.wT??e.compute(Pe(t[1],Kr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=C),z.push(C)}else z.push(t[1]);t.length===3&&z.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(Oh(z,r,a,i),{inputs:z}):e.compute(Ah(z,r,a,i),{inputs:z});return}let s=t.length===3,o=t[0].dims[n?1:2],l=t[0].dims[n?2:3],d=t[0].dims[n?3:1],h=t[1].dims[2],c=t[1].dims[3],g=a[n?1:2],y=a[n?2:3],_=a[n?3:1],b=n&&h===o&&c===l&&r.pads[0]===0&&r.pads[1]===0;if(b||h===1&&c===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let z=a[0],C,x,M,q=[];if(n){let H=e.kernelCustomData.wT??e.compute(Pe(t[1],Kr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=H),b){let oe=o*l*d;C=t[0].reshape([1,z,oe]),x=H.reshape([1,oe,_]),M=[1,z,_]}else C=t[0].reshape([z,o*l,d]),x=H.reshape([1,d,_]),M=[z,g*y,_];q.push(C),q.push(x)}else C=t[0].reshape([z,d,o*l]),x=t[1].reshape([1,_,d]),M=[z,_,g*y],q.push(x),q.push(C);s&&q.push(t[2]);let Z=M[2],W=q[0].dims[q[0].dims.length-1];Z<8&&W<8?e.compute(xa(q,r,a,M,n,i),{inputs:q}):e.compute(ui(q,r,a,M,n,i),{inputs:q});return}let k=!0,$=e.kernelCustomData.wT??e.compute(Pe(t[1],Kr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=$);let w=[t[0],$];s&&w.push(t[2]);let T=n?g*y:_,S=n?_:g*y,I=h*c*d;e.compute(Ih(w,r,a,T,S,I,s,k,i),{inputs:w})},ml=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),l=Xr({...t,pads:n,strides:a,dilations:s,kernelShape:o},i);fn(e,i,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},gl=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",n=Xr(r,t),a=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=zh(t[0].dims,t[1].dims,r.strides,r.dilations,a,!1,i);e.compute(Ch(t,n,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},ta=(e,t)=>{if(fl(e.inputs,t),e.inputs[0].dims.length===3)ml(e,t);else if(e.inputs[0].dims.length===5)gl(e,e.inputs,t);else{let r=Xr(t,e.inputs);fn(e,e.inputs,r)}}}),Rh,L0=P(()=>{"use strict";J(),dt(),re(),ie(),Rh=(e,t,r)=>{let i=e.length>2,n=t.outputShape,a=t.format==="NHWC",s=t.group,o=e[1].dims,l=o[2]/s,d=o[3],h=a?ke(l):1,c=a&&d===1&&l>=4,g=c?Math.floor(l/4)*4:Math.floor(l/h)*h,y=l-g,_=a?ke(d):1,b=a?d===1?h:_:1,k=R.size(n)/_,$=[Math.ceil(k/64),1,1];de("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${$}`);let w=["rank","rank"],T=[t.strides[0],t.strides[1]],S=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],I=[t.dilations[0],t.dilations[1]],z=[S[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),S[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],C=[z[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),z[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],x=[{type:12,data:k},{type:12,data:T},{type:12,data:S},{type:12,data:I},{type:12,data:z},{type:6,data:C},{type:12,data:g},{type:12,data:l},{type:12,data:d},...X(e[0].dims,e[1].dims)];i&&(x.push(...X(e[2].dims)),w.push("rank")),x.push(...X(n));let M=q=>{let Z=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:z.length},{name:"pads",type:"i32",length:C.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],W=Ie(e[0].dataType),H=a?1:2,oe=a?2:3,O=a?3:1,U=B("W",e[1].dataType,e[1].dims.length,b),ee=B("Dy",e[0].dataType,e[0].dims.length,h),te=[ee,U];i&&te.push(B("bias",e[2].dataType,[n[O]].length,_));let Q=F("result",e[0].dataType,n.length,_),ne=()=>{let K="";if(c)h===4?K+=`
        let xValue = ${ee.getByOffset("x_offset")};
        let wValue = ${U.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:h===2?K+=`
          dotProd = dotProd + dot(vec4<${W}>(${ee.getByOffset("x_offset")}, ${ee.getByOffset("x_offset + 1u")}), vec4<${W}>(${U.getByOffset("w_offset")}, ${U.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:h===1&&(K+=`
          dotProd = dotProd + dot(vec4<${W}>(${ee.getByOffset("x_offset")}, ${ee.getByOffset("x_offset + 1u")}, ${ee.getByOffset("x_offset + 2u")}, ${ee.getByOffset("x_offset + 3u")}), vec4<${W}>(${U.getByOffset("w_offset")}, ${U.getByOffset("w_offset + 1u")}, ${U.getByOffset("w_offset + 2u")}, ${U.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(K+=`
                  let xValue = ${a?ee.getByOffset(`${ee.indicesToOffset(`${ee.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h}`):ee.get("batch","inputChannel","idyR","idyC")};
        `,h===1)K+=`
          let w_offset = ${U.indicesToOffset(`${U.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${U.getByOffset(`w_offset / ${b}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let G=0;G<h;G++)K+=`
            let wValue${G} = ${U.getByOffset(`${U.indicesToOffset(`${U.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${G}, wOutChannel)`)} / ${b}`)};
            dotProd = dotProd + xValue[${G}] * wValue${G};`;return K},D=()=>{if(y===0)return"";if(!c)throw new Error(`packInputAs4 ${c} is not true.`);let K="";if(h===1){K+="dotProd = dotProd";for(let G=0;G<y;G++)K+=`
            + ${ee.getByOffset(`x_offset + ${G}`)} * ${U.getByOffset(`w_offset + ${G}`)}`;K+=";"}else if(h===2){if(y!==2)throw new Error(`Invalid inputChannelsRemainder ${y}.`);K+=`
          let xValue = ${ee.getByOffset("x_offset")};
          let wValue = ${U.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return K},Y=`
            let outputIndices = ${Q.offsetToIndices(`global_idx * ${_}`)};
            let batch = ${Q.indicesGet("outputIndices",0)};
            let d1 = ${Q.indicesGet("outputIndices",O)};
            let r = ${Q.indicesGet("outputIndices",H)};
            let c = ${Q.indicesGet("outputIndices",oe)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${Q.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${W}(dyRCorner) + ${W}(wR)) / ${W}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${W}(uniforms.Dy_shape[${H}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${W}(dyCCorner) + ${W}(wC)) / ${W}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${W}(uniforms.Dy_shape[${oe}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${c?`
                var x_offset = ${ee.indicesToOffset(`${ee.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h};
                var w_offset = ${U.indicesToOffset(`${U.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${b};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${c?4:h}) {
                  ${ne()}
                  inputChannel = inputChannel + ${c?4:h};
                }
                ${D()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${_}]`:""};
            ${Q.setByOffset("global_idx","value")};
          `;return`
    ${q.registerUniforms(Z).declareVariables(...te,Q)}
      ${q.mainStart()}
      ${q.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${Y}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${h}${b}${_}${c}${y}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:$[0],y:$[1],z:$[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:x}),getShaderSource:M}}}),_l,yl,wl,mn,Bh,bl,gn,$l,Nh,q0=P(()=>{"use strict";L0(),Gt(),kt(),_l=(e,t,r,i,n,a)=>(e-1)*t+r+(i-1)*n+1-a,yl=(e,t,r,i,n)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=a,r[n]=e-a):t==="SAME_LOWER"&&(r[i]=e-a,r[n]=a)},wl=(e,t,r,i,n,a,s,o,l,d)=>{let h=e.length-2,c=d.length===0;l.length<h&&l.push(...Array(h-l.length).fill(0));let g=e[0],y=t[o?3:1]*n;for(let _=0,b=e.length-h-(o?1:0);_<h;++_,++b){let k=e[b],$=c?k*s[_]:d[_],w=_l(k,s[_],a[_],t[b],r[_],$);yl(w,i,a,_,_+h),c&&d.push(s[_]*(k-1)+l[_]+(t[b]-1)*r[_]+1-a[_]-a[_+h])}d.splice(0,0,g),d.splice(o?3:1,0,y)},mn=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((c,g)=>c*g,1)===0){r.length=0;for(let c=2;c<t[1].dims.length;++c)r.push(t[1].dims[c])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let n=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,l=e.dilations.slice();if(l.reduce((c,g)=>c+g,0)===0){let c=t[0].dims.length-2;l=new Array(c).fill(1)}let d=e.strides.slice();if(d.reduce((c,g)=>c+g,0)===0){let c=t[0].dims.length-2;d=new Array(c).fill(1)}wl(o,r,l,e.autoPad,e.group,n,d,i,s,a);let h=Object.assign({},e);return Object.assign(h,{kernelShape:r,pads:n,outputPadding:s,outputShape:a,dilations:l,strides:d}),h},Bh=e=>{let t=$a(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,a=e.group??1,s=e.kernelShape,o=e.pads,l=e.strides,d=e.wIsConst(),h=e.outputPadding,c=e.outputShape;return{autoPad:i,format:r,dilations:n,group:a,kernelShape:s,outputPadding:h,outputShape:c,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},bl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},gn=(e,t,r,i)=>{let n=e.kernelCustomData.wT??e.compute(Pe(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let a=[t[0],n];t.length===3&&a.push(t[2]),e.compute(Rh(a,r,i),{inputs:a})},$l=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),a=[1].concat(a),n=[1].concat(n);let l=t.outputPadding;l=[0].concat(l);let d=mn({...t,pads:o,strides:s,dilations:a,kernelShape:n,outputPadding:l},i);gn(e,i,d,h=>r?[h[0],h[2],h[3]]:[h[0],h[1],h[3]])},Nh=(e,t)=>{if(bl(e.inputs,t),e.inputs[0].dims.length===3)$l(e,t);else{let r=mn(t,e.inputs);gn(e,e.inputs,r)}}}),vl,Mh,Dh,W0=P(()=>{"use strict";J(),re(),Se(),ie(),vl=(e,t,r,i)=>{let n=R.size(t),a=t.length,s=B("input",e,a),o=F("output",e,a),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=R.normalizeAxis(l,a),h=c=>{let g=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,y=j("uniforms.input_shape","uniforms.axis",a),_=i.reverse?g+(i.exclusive?" + 1":""):"0",b=i.reverse?y:g+(i.exclusive?"":" + 1");return`
                ${c.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,o)}
                ${c.mainStart()}
                  ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${b};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:d},...X(t,t)]}),getShaderSource:h}},Mh=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,n=e.inputs[1];e.compute(vl(i,r,n,t),{inputs:[0]})},Dh=e=>{let t=e.exclusive===1,r=e.reverse===1;return he({exclusive:t,reverse:r})}}),xl,kl,Sl,Ph,Uh,V0=P(()=>{"use strict";J(),re(),Se(),ie(),xl=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},kl=(e,t,r,i)=>{let n=[];n.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let a=0;a<t;++a)n.push(r.indicesSet("a",e[a],`i[${a}]`));return n.push("return a;}"),n.join(`
`)},Sl=(e,t)=>{let r,i,n,a,s,o,l=t.format==="NHWC",d=t.blocksize,h=t.mode==="DCR";l?([r,i,n,a]=e.dims,s=h?[r,i,n,d,d,a/d**2]:[r,i,n,a/d**2,d,d],o=h?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,n,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=h?[r,d,d,a/d**2,i,n]:[r,a/d**2,d,d,i,n],o=h?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let c=e.reshape(s),g=c.dims.length,y=e.dataType,_=B("a",y,g),b=F("output",y,g),k=$=>`
  ${$.registerUniform("output_size","u32").declareVariables(_,b)}

  ${kl(o,g,_,b)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:$=>{let w=l?[r,i*d,n*d,a/d**2]:[r,a/d**2,i*d,n*d],T=R.size(w),S=c.dims,I=R.sortBasedOnPerm(S,o);return{outputs:[{dims:w,dataType:$[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...X(S,I)]}},getShaderSource:k}},Ph=(e,t)=>{xl(e.inputs),e.compute(Sl(e.inputs[0],t))},Uh=e=>he({blocksize:e.blocksize,mode:e.mode,format:e.format})}),ot,pr,Zr,_n,wt,Tl,El,Il,yn,wn,bn,zl,Cl,$n,Al,Lh,qh,F0=P(()=>{"use strict";J(),re(),Se(),ie(),ot=256,pr=512,Zr=2*Math.PI,_n=e=>{let t=[],r=e;for(let i of[4,2,3,5])for(;r%i===0;)t.push(i),r/=i;return r===1?t:void 0},wt=e=>{let t=e.toPrecision(9);return/[.eE]/.test(t)?t:`${t}.0`},Tl=(e,t,r,i,n)=>{let a=r/e,s=pr-i,o=d=>`smem[${s}u + base + ${d*t}u]`,l=`  for (var t = local_idx; t < ${a}u; t += ${ot}u) {
`;l+=`    let twiddleIndex = t % ${t}u;
    let angleUnit = f32(twiddleIndex);
`,l+=`    var leg: array<vec2<f32>, 5>;
`;for(let d=0;d<e;d++){let h=`${i}u + t + ${d*a}u`;if(d===0)l+=`    leg[0] = smem[${h}];
`;else{let c=n*Zr*d/(e*t);l+=`    { let a = ${wt(c)} * angleUnit; leg[${d}] = cmul(smem[${h}], vec2<f32>(cos(a), sin(a))); }
`}}if(l+=`    let base = (t / ${t}u) * ${t*e}u + twiddleIndex;
`,e===2)l+=`    ${o(0)} = leg[0] + leg[1];
    ${o(1)} = leg[0] - leg[1];
`;else if(e===4){let d=n<0?"vec2<f32>(oddDiff.y, -oddDiff.x)":"vec2<f32>(-oddDiff.y, oddDiff.x)";l+=`    let evenSum = leg[0] + leg[2]; let evenDiff = leg[0] - leg[2];
`,l+=`    let oddSum = leg[1] + leg[3]; let oddDiff = leg[1] - leg[3];
`,l+=`    let oddRot = ${d};
`,l+=`    ${o(0)} = evenSum + oddSum;
    ${o(1)} = evenDiff + oddRot;
`,l+=`    ${o(2)} = evenSum - oddSum;
    ${o(3)} = evenDiff - oddRot;
`}else for(let d=0;d<e;d++){let h=["leg[0]"];for(let c=1;c<e;c++){let g=n*Zr*(c*d)/e,y=wt(Math.cos(g)),_=wt(Math.sin(g));h.push(`vec2<f32>(leg[${c}].x*${y} - leg[${c}].y*${_}, leg[${c}].x*${_} + leg[${c}].y*${y})`)}l+=`    ${o(d)} = ${h.join(" + ")};
`}return`${l}  }
  workgroupBarrier();
`},El=(e,t,r)=>{let i="",n=1,a=0;for(let s of e)i+=Tl(s,n,t,a,r),n*=s,a=pr-a;return{code:i,resultOffset:a}},Il=(e,t,r,i,n)=>{let a=e.dims,s=a.length,o=a[s-1],l=a[t],d=r&&i?(l-1)*2:l;n!==void 0&&(d=n);let h=r&&i?1:2,c=i&&!r?Math.floor(d/2)+1:d,g=a.slice();g[t]=c,g[s-1]=h;let y=1;for(let b=t+1;b<s-1;b++)y*=a[b];let _=R.size(a)/o/l;return{dataType:e.dataType,outputDims:g,length:d,signalLength:l,inner:y,batch:_,inputComponents:o,outputComponents:h,outputLength:c,inverse:r,onesided:i}},yn=(e,t)=>[t,e.length,e.inputComponents,e.outputComponents,e.inverse,e.onesided].join(";"),wn=e=>[{type:12,data:e.batch},{type:12,data:e.signalLength},{type:12,data:e.inner},{type:12,data:e.outputLength}],bn=(e,t,r)=>e.registerUniform("batch","u32").registerUniform("signalLength","u32").registerUniform("inner","u32").registerUniform("outputLength","u32").declareVariables(t,r),zl=e=>{let{dataType:t,length:r,inputComponents:i,outputComponents:n,inverse:a,onesided:s}=e,o=Ee(t),l=a?1:-1,d=a?1/r:1,h=_n(r),c=g=>{let y=B("x",t,[1]),_=F("y",t,[1]),b=I=>{let z=`inBase + (${I}) * uniforms.inner * ${i}u`,C=`f32(${y.getByOffset(z)})`,x=i===2?`f32(${y.getByOffset(`${z} + 1u`)})`:"0.0";return`vec2<f32>(${C}, ${x})`},k;if(a&&s){let I=Math.floor(r/2)+1,z=r%2===0?`select(provided, provided - 1u, provided == ${I}u)`:"provided";k=`
    let provided = min(uniforms.signalLength, ${I}u);
    for (var i = local_idx; i < ${r}u; i += ${ot}u) {
      if (i < provided) { smem[i] = ${b("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();
    for (var k = local_idx + 1u; k < ${z}; k += ${ot}u) {
      let h = smem[k];
      smem[${r}u - k] = vec2<f32>(h.x, -h.y);
    }
    workgroupBarrier();`}else k=`
    let loadCount = min(uniforms.signalLength, ${r}u);
    for (var i = local_idx; i < ${r}u; i += ${ot}u) {
      if (i < loadCount) { smem[i] = ${b("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();`;let{code:$,resultOffset:w}=El(h,r,l),T=d===1?`smem[${w}u + i]`:`smem[${w}u + i] * ${wt(d)}`,S=n===2?_.setByOffset("off + 1u",`${o}(v.y)`):"";return`
  ${bn(g,y,_)}
  var<workgroup> smem: array<vec2<f32>, ${2*pr}>;
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${g.mainStart(ot)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${i}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${n}u;
    ${k}
${$}    for (var i = local_idx; i < uniforms.outputLength; i += ${ot}u) {
      let v = ${T};
      let off = outBase + i * uniforms.inner * ${n}u;
      ${_.setByOffset("off",`${o}(v.x)`)}
      ${S}
    }
  }`};return{name:"DFT",shaderCache:{hint:yn(e,"fft"),inputDependencies:["type"]},getShaderSource:c,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:wn(e),dispatchGroup:{x:e.batch}})}},Cl=e=>{let{dataType:t,length:r,inputComponents:i,outputComponents:n,inverse:a,onesided:s}=e,o=Ee(t),l=a?1:-1,d=a?1/r:1,h=c=>{let g=B("x",t,[1]),y=F("y",t,[1]),_=T=>{let S=`inBase + (${T}) * uniforms.inner * ${i}u`,I=`f32(${g.getByOffset(S)})`,z=i===2?`f32(${g.getByOffset(`${S} + 1u`)})`:"0.0";return`vec2<f32>(${I}, ${z})`},b=a&&s?`fn spectrum(inBase: u32, k: u32) -> vec2<f32> {
    let provided = min(uniforms.signalLength, ${Math.floor(r/2)+1}u);
    if (k < provided) { return ${_("k")}; }
    let m = ${r}u - k;
    if (m < provided) {
      let h = ${_("m")};
      return vec2<f32>(h.x, -h.y);
    }
    return vec2<f32>(0.0, 0.0);
  }`:`fn spectrum(inBase: u32, n: u32) -> vec2<f32> {
    if (n < uniforms.signalLength) { return ${_("n")}; }
    return vec2<f32>(0.0, 0.0);
  }`,k=`
      let angle = ${wt(l*Zr)} * f32(knMod) / ${wt(r)};
      acc += cmul(spectrum(inBase, n), vec2<f32>(cos(angle), sin(angle)));
      knMod += k;
      if (knMod >= ${r}u) { knMod -= ${r}u; }`,$=n===2?y.setByOffset("off + 1u",`${o}(v.y)`):"",w=d===1?"acc":`acc * ${wt(d)}`;return`
  ${bn(c,g,y)}
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${b}
  ${c.mainStart(ot)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${i}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${n}u;
    for (var k = local_idx; k < uniforms.outputLength; k += ${ot}u) {
      var acc = vec2<f32>(0.0, 0.0);
      var knMod = 0u;
      for (var n = 0u; n < ${r}u; n++) {${k}
      }
      let v = ${w};
      let off = outBase + k * uniforms.inner * ${n}u;
      ${y.setByOffset("off",`${o}(v.x)`)}
      ${$}
    }
  }`};return{name:"DFT",shaderCache:{hint:yn(e,"direct"),inputDependencies:["type"]},getShaderSource:h,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:wn(e),dispatchGroup:{x:e.batch}})}},$n=e=>{if(!e||e.dataType===0)return;if(R.size(e.dims)!==1)throw new Error("DFT optional scalar inputs must have exactly 1 element.");if(e.dataType===6)return e.getInt32Array()[0];let t=Number(e.getBigInt64Array()[0]);if(!Number.isSafeInteger(t))throw new Error("DFT optional scalar inputs are out of JavaScript safe integer range.");return t},Al=e=>{if(!e||e.length<1)throw new Error("DFT requires at least 1 input.");let t=e[0].dims;if(t.length<2)throw new Error("DFT input must have at least 2 dimensions.");let r=t[t.length-1];if(r!==1&&r!==2)throw new Error("DFT input's innermost dimension must be 1 (real) or 2 (complex).")},Lh=(e,t)=>{Al(e.inputs);let r=e.inputs[0],i=r.dims.length,n=t.inverse!==0,a=t.onesided!==0,s=$n(e.inputs[1]);if(s!==void 0&&s<=0)throw new Error("dft_length must be greater than zero.");let o=R.normalizeAxis($n(e.inputs[2])??t.axis,i);if(o===i-1)throw new Error("DFT axis must refer to a signal dimension, not the innermost (real/imaginary) dimension.");if(n&&a&&r.dims[i-1]!==2)throw new Error("Inverse one-sided DFT (IRFFT) requires complex-valued input (innermost dimension 2).");let l=Il(r,o,n,a,s);if(l.length<=0)throw new Error(`Invalid DFT length: ${l.length}`);let d=l.length<=pr&&_n(l.length)!==void 0?zl(l):Cl(l);e.compute(d,{inputs:[0]})},qh=e=>he({axis:e.axis??1,inverse:e.inverse??0,onesided:e.onesided??0})}),Qr,cr,vn,Ol,Rl,Bl,Nl,xn,Ml,Wh,Vh,G0=P(()=>{"use strict";J(),re(),Se(),ie(),Qr="[a-zA-Z]|\\.\\.\\.",cr="("+Qr+")+",vn="^"+cr+"$",Ol="("+cr+",)*"+cr,Rl="^"+Ol+"$",Bl=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Nl=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Rl)))throw new Error("Invalid LHS term");if(r.split(",").forEach((n,a)=>{let s=e[a].dims.slice();if(!n.match(RegExp(vn)))throw new Error("Invalid LHS term");let o=this.processTerm(n,!0,s,a);this.lhs.push(o)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([n,a])=>a.count===1||n==="...").map(([n])=>n).join("");else if(!i.match(RegExp(cr)))throw new Error("Invalid RHS");i.match(RegExp(Qr,"g"))?.forEach(n=>{if(n==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(n);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let n=r.length,a=!1,s=[],o=0;if(!e.match(RegExp(vn))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Qr,"g")),d=new Bl(i);return l?.forEach((h,c)=>{if(h==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let g=n-l.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(o,o+g),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let y=0;y<s.length;y++){let _=String.fromCharCode(48+y);d.addSymbol(_,c+y),this.addSymbol(_,r[o++],i)}}else d.addSymbol(h,c+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(h,r[o++],i)}),d}},xn=e=>e+"_max",Ml=(e,t,r,i)=>{let n=e.map(d=>d.length).map((d,h)=>B(`input${h}`,t,d)),a=R.size(i),s=F("output",t,i.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let h=[],c="var prod = 1.0;",g="var sum = 0.0;",y="sum += prod;",_=[],b=[],k=[],$=[],w=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((S,I)=>{if(r.rhs.symbolToIndices.has(I)){let z=r.rhs.symbolToIndices.get(I)?.[0];z!==void 0&&r.lhs.forEach((C,x)=>{if(S.inputIndices.includes(x)){let M=C.symbolToIndices.get(I);if(M===void 0)throw new Error("Invalid symbol error");M.forEach(q=>{h.push(`${n[x].indicesSet(`input${x}Indices`,q,s.indicesGet("outputIndices",z))}`)})}})}else r.lhs.forEach((z,C)=>{if(S.inputIndices.includes(C)){let x=z.symbolToIndices.get(I);if(x===void 0)throw new Error("Invalid symbol error");x.forEach(M=>{_.push(`${n[C].indicesSet(`input${C}Indices`,M,`${I}`)}`)}),$.push(`prod *= ${n[C].getByIndices(`input${C}Indices`)};`)}}),b.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${xn(I)}; ${I}++) {`),k.push("}")});let T=w?[...h,`let sum = ${n.map((S,I)=>S.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...h,g,...b,..._,c,...$,y,...k];return`
            ${d.registerUniforms(o.map(S=>({name:`${xn(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${n.map((S,I)=>`var input${I}Indices: ${n[I].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(c=>r.symbolToInfo.has(c)).map(c=>({type:12,data:r.symbolToInfo.get(c)?.dimValue||0}));d.push({type:12,data:a});let h=e.map((c,g)=>[...X(c)]).reduce((c,g)=>c.concat(g),d);return h.push(...X(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:h}},getShaderSource:l}},Wh=(e,t)=>{let r=new Nl(e.inputs,t.equation),i=r.outputDims,n=e.inputs.map((a,s)=>a.dims);e.compute(Ml(n,e.inputs[0].dataType,r,i))},Vh=e=>{let t=e.equation.replace(/\s+/g,"");return he({equation:t})}}),Dl,kn,Pl,Ul,Fh,H0=P(()=>{"use strict";J(),re(),ie(),Dl=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;i<r.length&&n<t.length;++i,++n)if(r[i]!==t[n]&&r[i]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},kn=(e,t)=>{let r=e.length-t.length,i=[];for(let n=0;n<r;++n)i.push(e[n]);for(let n=0;n<t.length;++n)i.push(t[n]===1?e[n+r]:t[n]);return i},Pl=(e,t)=>e.length>t.length?kn(e,t):kn(t,e),Ul=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=Pl(t,r),n=e[0].dataType,a=n===9||R.size(t)===1,s=n===9||t.length>0&&t[t.length-1]%4===0?4:1,o=a||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(R.size(i)/o),d=c=>{let g=B("input",n,t.length,s),y=F("output",n,i.length,o),_;if(n===9){let b=(k,$,w="")=>`
          let outputIndices${$} = ${y.offsetToIndices(`outputOffset + ${$}u`)};
          let offset${$} = ${g.broadcastedIndicesToOffset(`outputIndices${$}`,y)};
          let index${$} = offset${$} / 4u;
          let component${$} = offset${$} % 4u;
          ${k}[${$}] = ${w}(${g.getByOffset(`index${$}`)}[component${$}]);
        `;_=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${b("data",0,"u32")}
        ${b("data",1,"u32")}
        ${b("data",2,"u32")}
        ${b("data",3,"u32")}
        ${y.setByOffset("global_idx","data")}
      }`}else _=`
        let outputIndices = ${y.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${g.broadcastedIndicesToOffset("outputIndices",y)};
        let data = ${y.type.value}(${g.getByOffset(`inputOffset / ${s}`)});
        ${y.setByOffset("global_idx","data")}
      }`;return`
    ${c.registerUniform("vec_size","u32").declareVariables(g,y)}
    ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},h=[{type:12,data:l},...X(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h})}},Fh=e=>{Dl(e.inputs),e.compute(Ul(e.inputs),{inputs:[0]})}}),Ll,Gh,j0=P(()=>{"use strict";J(),re(),ie(),ba(),Ll=e=>{let t=e[0].dataType,r=R.size(e[0].dims),i=R.size(e[1].dims),n=i%4===0,a=s=>{let o=B("x",t,[1],4),l=B("bias",t,[1],4),d=F("y",t,[1],4),h=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],c=y=>`
      let bias${y}_offset: u32 = (global_idx * 4 + ${y}) % uniforms.bias_size;
      let bias${y} = ${l.getByOffset(`bias${y}_offset / 4`)}[bias${y}_offset % 4];`,g=n?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${c(0)}${c(1)}${c(2)}${c(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(h).declareVariables(o,l,d)}

    ${Zn(Ee(t))}

    ${s.mainStart(Jt)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",Qn("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/Jt/4)}})}},Gh=e=>{e.inputs.length<2||R.size(e.inputs[1].dims)===0?lh(e):e.compute(Ll(e.inputs))}}),ql,Wl,Hh,jh,K0=P(()=>{"use strict";J(),re(),Se(),ie(),ql=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Wl=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=R.normalizeAxis(t.axis,n),s=r.slice(0);s.splice(a,1,...i);let o=r[a],l=e[0].dataType===9?4:1,d=Math.ceil(R.size(s)/l),h=[{type:12,data:d},{type:6,data:o},{type:12,data:a},...X(e[0].dims,e[1].dims,s)],c=g=>{let y=B("data",e[0].dataType,e[0].dims.length,l),_=B("inputIndices",e[1].dataType,e[1].dims.length),b=F("output",e[0].dataType,s.length,l),k=w=>{let T=i.length,S=`var indicesIndices${w}  = ${_.type.indices}(0);`;for(let I=0;I<T;I++)S+=`${T>1?`indicesIndices${w}[${I}]`:`indicesIndices${w}`} = ${s.length>1?`outputIndices${w}[uniforms.axis + ${I}]`:`outputIndices${w}`};`;S+=`
          var idx${w} = ${_.getByIndices(`indicesIndices${w}`)};
          if (idx${w} < 0) {
            idx${w} = idx${w} + uniforms.axisDimLimit;
          }
          var dataIndices${w} : ${y.type.indices};
        `;for(let I=0,z=0;I<n;I++)I===a?(S+=`${n>1?`dataIndices${w}[${I}]`:`dataIndices${w}`} = u32(idx${w});`,z+=T):(S+=`${n>1?`dataIndices${w}[${I}]`:`dataIndices${w}`} = ${s.length>1?`outputIndices${w}[${z}]`:`outputIndices${w}`};`,z++);return S},$;if(e[0].dataType===9){let w=(T,S,I="")=>`
          let outputIndices${S} = ${b.offsetToIndices(`outputOffset + ${S}u`)};
          ${k(S)};
          let offset${S} = ${y.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${T}[${S}] = ${I}(${y.getByOffset(`index${S}`)}[component${S}]);
        `;$=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${w("value",0,"u32")}
        ${w("value",1,"u32")}
        ${w("value",2,"u32")}
        ${w("value",3,"u32")}
        ${b.setByOffset("global_idx","value")}
      `}else $=`
      let outputIndices = ${b.offsetToIndices("global_idx")};
      ${k("")};
      let value = ${y.getByIndices("dataIndices")};
      ${b.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(y,_,b)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${$}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:h}),getShaderSource:c}},Hh=e=>he({axis:e.axis}),jh=(e,t)=>{let r=e.inputs;ql(r),e.compute(Wl(e.inputs,t))}}),Vl,Kh,Xh,X0=P(()=>{"use strict";J(),re(),ie(),Vl=(e,t,r,i,n,a,s,o,l)=>{let d=[{type:12,data:a},{type:12,data:i},{type:12,data:n},{type:12,data:r},{type:12,data:s},{type:12,data:o},{type:12,data:l}],h=[a];d.push(...X(t.dims,h));let c=g=>{let y=B("indices_data",t.dataType,t.dims.length),_=F("input_slice_offsets_data",12,1,1),b=[y,_],k=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${g.registerUniforms(k).declareVariables(...b)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${n.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:h,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:c},{inputs:[t],outputs:[-1]})[0]},Kh=(e,t)=>{let r=e.inputs,i=r[0].dims,n=r[0].dataType,a=r[1].dims,s=a[a.length-1],o=R.sizeToDimension(a,a.length-1),l=R.sizeFromDimension(i,t.batchDims+s),d=R.sizeToDimension(i,t.batchDims),h=R.sizeFromDimension(i,t.batchDims),c=o/d,g=new Array(s),y=l;for(let S=0;S<s;++S)g[s-1-S]=y,y*=i[t.batchDims+s-1-S];let _=Vl(e,r[1],g,t.batchDims,i,o,c,h,s),b=t.batchDims+s;if(b>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let k=a.slice(0,-1).concat(i.slice(b)),$=R.size(k),w=[{type:12,data:$},{type:12,data:l},...X(r[0].dims,_.dims,k)],T=S=>{let I=B("data",r[0].dataType,r[0].dims.length),z=B("slice_offsets",12,_.dims.length),C=F("output",r[0].dataType,k.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,z,C)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:k,dataType:n}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:w}),getShaderSource:T},{inputs:[r[0],_]})},Xh=e=>({batchDims:e.batch_dims,cacheKey:""})}),Fl,Gl,Zh,Qh,Z0=P(()=>{"use strict";J(),re(),Se(),ie(),Fl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=R.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,n=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==n.dims.length||!n.dims.map((o,l)=>l===r?Math.ceil(o/i)===a.dims[l]:o===a.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((o,l)=>o===a.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Gl=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=R.normalizeAxis(t.gatherAxis,n),s=R.normalizeAxis(t.quantizeAxis,n),o=r.slice(0);o.splice(a,1,...i);let l=R.size(o),d=e[2].dataType,h=e[0].dataType===22,c=[{type:12,data:l},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...X(...e.map((y,_)=>y.dims),o)],g=y=>{let _=B("data",e[0].dataType,e[0].dims.length),b=B("inputIndices",e[1].dataType,e[1].dims.length),k=B("scales",e[2].dataType,e[2].dims.length),$=e.length>3?B("zeroPoint",e[3].dataType,e[3].dims.length):void 0,w=F("output",d,o.length),T=[_,b,k];$&&T.push($);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${y.registerUniforms(S).declareVariables(...T,w)}
        ${y.mainStart()}
        let output_indices = ${w.offsetToIndices("global_idx")};
        var indices_indices = ${b.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${w.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${b.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${w.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${w.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${b.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[a]};
        }
        ${_.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${w.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${_.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${_.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${_.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${k.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${k.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${k.getByIndices("scale_indices")};
        ${$?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${$.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${$.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Ee(d)}(quantized_data - zero_point) * scale;
        ${w.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((y,_)=>_!==1).map(y=>y.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(y,_)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:g}},Zh=(e,t)=>{let r=e.inputs;Fl(r,t),e.compute(Gl(e.inputs,t))},Qh=e=>he({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Hl,jl,Yh,Jh,Q0=P(()=>{"use strict";J(),re(),Se(),ie(),Hl=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},jl=(e,t)=>{let r=e[0].dims,i=e[0].dataType,n=r.length,a=e[1].dims,s=e[1].dataType,o=R.normalizeAxis(t.axis,n),l=r[o],d=a.slice(0),h=R.size(d),c=B("input",i,n),g=B("indicesInput",s,a.length),y=F("output",i,d.length),_=[{type:12,data:h},{type:6,data:l},{type:12,data:o}];return _.push(...X(r,a,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:_}),getShaderSource:b=>`
      ${b.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(c,g,y)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${y.offsetToIndices("global_idx")};

      var idx = ${g.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${c.type.indices}(outputIndices);
      ${c.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${c.getByIndices("inputIndices")};

      ${y.setByOffset("global_idx","value")};
  }`}},Yh=e=>he({axis:e.axis}),Jh=(e,t)=>{let r=e.inputs;Hl(r),e.compute(jl(e.inputs,t))}}),Kl,Xl,ef,tf,Y0=P(()=>{"use strict";J(),re(),ie(),Kl=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Xl=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[n,a,s]=Xp.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),o=[n,a];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(a/l),h=Math.ceil(n/l),c=!0,g=R.size(o),y=[{type:12,data:c?d:g},{type:12,data:n},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(y.push(...X(e[2].dims)),_.push("rank")),y.push(...X(o));let b=$=>{let w="";t.transA&&t.transB?w="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?w="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?w="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(w="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",S=B("a",e[0].dataType,e[0].dims),I=B("b",e[1].dataType,e[1].dims),z=S.type.value,C=null,x=[S,I];e.length===3&&(C=B("c",e[2].dataType,e[2].dims.length),x.push(C));let M=F("output",e[0].dataType,o.length);x.push(M);let q=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${$.registerUniforms(q).declareVariables(...x)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${z}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${w}
    }

    ${T}
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",M)}; value += ${z}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},k=$=>{let w=B("a",e[0].dataType,e[0].dims),T=B("b",e[1].dataType,e[1].dims),S=null,I=[w,T];e.length===3&&(S=B("c",e[2].dataType,e[2].dims.length),I.push(S));let z=F("output",e[0].dataType,o.length);I.push(z);let C=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],x="",M="";t.transA&&t.transB?(M=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,x="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(M=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,x="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(M=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,x="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(M=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,x="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let q=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${$.registerUniforms(C).declareVariables(...I)}
  var<workgroup> tile_a: array<array<${w.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${l}>, ${l}>;
  ${$.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${z.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${M}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${x}
      }
      workgroupBarrier();
    }

    ${q}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",z)}; value += ${z.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return c?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*h},programUniforms:y}),getShaderSource:k}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:y}),getShaderSource:b}},ef=e=>{let t=e.transA,r=e.transB,i=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:i,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},tf=(e,t)=>{Kl(e.inputs),e.compute(Xl(e.inputs,t))}}),tt,ut,Ot,Rt,Zl,Ql,Yl,Jl,ed,td,rd,id,rf,nf,J0=P(()=>{"use strict";J(),re(),Se(),ie(),[tt,ut,Ot,Rt]=[0,1,2,3],Zl=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Ql=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Yl=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Jl=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,ed=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,td=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${tt}] = batch;
     indices[${ut}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Ot}] = u32(r);
            indices[${Rt}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Ot}] = u32(clamp(r, 0, H - 1));
          indices[${Rt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Ot}] = gs_reflect(r, border[1], border[3]);
          indices[${Rt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,rd=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${tt}], indices[${ut}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${tt}], indices[${ut}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${tt}], indices[${ut}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${tt}], indices[${ut}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${tt}], indices[${ut}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${tt}], indices[${ut}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,id=(e,t)=>{let r=B("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=B("grid",e[1].dataType,i.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[tt,ut,Ot,Rt]=[0,3,1,2]);let s=F("output",e[0].dataType,a.length),o=r.type.value,l=R.size(a),d=[{type:12,data:l},...X(e[0].dims,i,a)],h=c=>`
  ${c.registerUniform("output_size","u32").declareVariables(r,n,s)}
  ${Ql}
  ${Yl(o)}
  ${Jl(t)}
  ${ed(t)}
  ${td(r,o,t)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Ot}]);
      let W_in = i32(uniforms.x_shape[${Rt}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${tt}], indices[${Ot}], indices[${Rt}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${rd(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:c=>{let g=R.size(a);return{outputs:[{dims:a,dataType:c[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:d}},getShaderSource:h}},rf=(e,t)=>{Zl(e.inputs),e.compute(id(e.inputs,t))},nf=e=>he({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Be,nd,af,Sn,ad,wr,sf,of=P(()=>{"use strict";J(),re(),Se(),ga(),wa(),ie(),kt(),Be=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,nd=(e,t)=>{let r=e[0],i=Be(e,1),n=Be(e,2),a=Be(e,3),s=Be(e,4),o=Be(e,5),l=Be(e,6),d=Be(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=r.dims[0],c=r.dims[1],g=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],y=c,_=0,b=0,k=Math.floor(g/t.numHeads);if(l&&d&&R.size(l.dims)&&R.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==h||l.dims[1]!==t.numHeads||l.dims[3]!==k)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==h||d.dims[1]!==t.numHeads||d.dims[3]!==k)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=l.dims[2],b=l.dims[2]}else if(l&&R.size(l.dims)||d&&R.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $;if(i&&R.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');$=2,y=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==k)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');$=5,y=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==k)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');$=0,y=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}if(a&&R.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let w=_+y,T=0;if(s&&R.size(s.dims)>0){T=8;let C=s.dims;throw C.length===1?C[0]===h?T=1:C[0]===3*h+2&&(T=3):C.length===2&&C[0]===h&&C[1]===w&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,I=g;if(n&&R.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(y!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=n.dims[2]}else{if(y!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=n.dims[1]*n.dims[3],S=!0}}let z=!1;if(s&&R.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&R.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==h||o.dims[1]!==t.numHeads||o.dims[2]!==c||o.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:c,pastSequenceLength:_,kvSequenceLength:y,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:g,vHiddenSize:I,headSize:k,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:z,passPastInKv:S,qkvFormat:$}},af=e=>he({...e}),Sn=he({perm:[0,2,1,3]}),ad=(e,t,r,i,n,a,s)=>{let o=[i,n,a],l=R.size(o),d=[{type:12,data:l},{type:12,data:s},{type:12,data:a}],h=c=>{let g=F("qkv_with_bias",t.dataType,o),y=B("qkv",t.dataType,o),_=B("bias",r.dataType,o),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${c.registerUniforms(b).declareVariables(y,_,g)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:h},{inputs:[t,r],outputs:[-1]})[0]},wr=(e,t,r,i,n,a,s,o)=>{let l=a;if(s&&R.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=ad(e,a,s,t,i,r*n,o),l=l.reshape([t,i,r,n]),r===1||i===1?l:e.compute(Pe(l,Sn.perm),{inputs:[l],outputs:[-1]})[0]}else return a.dims.length===3&&(l=a.reshape([t,i,r,n])),r===1||i===1?l:e.compute(Pe(l,Sn.perm),{inputs:[l],outputs:[-1]})[0]},sf=(e,t)=>{let r=nd(e.inputs,t),i=e.inputs[0],n=Be(e.inputs,1),a=Be(e.inputs,2),s=Be(e.inputs,3),o=Be(e.inputs,4),l=Be(e.inputs,5),d=Be(e.inputs,6),h=Be(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(n?.dims.length===5)throw new Error("Packed KV is not implemented");let c=n&&a&&n.dims.length===4&&a.dims.length===4,g=wr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(c)return vr(e,g,n,a,o,void 0,d,h,l,r);if(!n||!a)throw new Error("key and value must be provided");let y=wr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,s,r.hiddenSize),_=wr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,a,s,2*r.hiddenSize);vr(e,g,y,_,o,void 0,d,h,l,r)}}),sd,od,ud,ld,ra,uf,lf,df=P(()=>{"use strict";J(),re(),Se(),ie(),sd=e=>{if(!e||e.length<1)throw new Error("too few inputs")},od=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),i=r.length),he({numOutputs:i,axis:t.axis,splitSizes:r})},ud=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${j("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,ld=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let n=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(n):i===0?r.push(`if (output_number == ${i}u) { ${n} }`):i===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${i}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},ra=(e,t)=>{let r=e[0].dims,i=R.size(r),n=e[0].dataType,a=R.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),o=B("input",n,r.length),l=new Array(t.numOutputs),d=[],h=[],c=0,g=[{type:12,data:i}];for(let _=0;_<t.numOutputs;_++){c+=t.splitSizes[_],l[_]=c;let b=r.slice();b[a]=t.splitSizes[_],h.push(b),s[_]=F(`output${_}`,n,b.length),d.push({dims:h[_],dataType:e[0].dataType})}g.push({type:12,data:l},...X(r,...h));let y=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...s)}
  ${ud(l.length)}
  ${ld(s)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${j("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:g})}},uf=(e,t)=>{sd(e.inputs);let r=e.inputs.length===1?t:od(e.inputs,t);e.compute(ra(e.inputs,r),{inputs:[0]})},lf=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return he({axis:t,numOutputs:i,splitSizes:r})}}),dd,li,pf,cf=P(()=>{"use strict";J(),re(),Se(),ie(),dd=(e,t)=>{let[r,i,n,a]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!R.areEqual(i.dims,[])&&!R.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!R.areEqual(n.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],h=n.dims[0],c=R.sizeFromDimension(r.dims,1)/d,g=o===0?n.dims[1]*2:c/s;if(o>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(d!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(d>h)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(g/2!==n.dims[1]&&o/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`)},li=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:n,scale:a}=t,s=e[0].dims[0],o=R.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=o/l,h=e[2].dims[1],c=n===0?h*2:d/i,g=new Array(s,l,d/c,c-h),y=R.computeStrides(g),_=[{type:1,data:a},{type:12,data:g},{type:12,data:y},...e[0].dims.length===3?new Array({type:12,data:[o,d,c,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,c,l*c,1]}):[],...X(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=k=>{let $=B("input",e[0].dataType,e[0].dims.length),w=B("position_ids",e[1].dataType,e[1].dims.length),T=B("cos_cache",e[2].dataType,e[2].dims.length),S=B("sin_cache",e[3].dataType,e[3].dims.length),I=F("output",e[0].dataType,e[0].dims.length);return k.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:y.length},{name:"input_output_strides",type:"u32",length:y.length}]),`
        ${k.declareVariables($,w,T,S,I)}

        ${k.mainStart(Jt)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${w.broadcastedIndicesToOffset("bsnh.xy",F("",w.type.tensor,2))};
            let position_id =
                u32(${w.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${$.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${$.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${I.setByOffset("i","re")}
            let im = ${$.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${$.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${I.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${I.setByOffset("k",$.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:he({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(R.size(g)/Jt)},programUniforms:_})}},pf=(e,t)=>{dd(e.inputs,t),e.compute(li(e.inputs,t))}}),pd,cd,Tn,hd,hf,ey=P(()=>{"use strict";Se(),J(),wa(),of(),df(),kt(),cf(),ie(),pd=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=r.dims[0],d=r.dims[1],h=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],c=d,g=0,y=!i||i.dims.length===0,_=Math.floor(y?h/(t.numHeads+2*t.kvNumHeads):h/t.numHeads);y&&(h=_*t.numHeads);let b=a&&a.dims.length!==0,k=s&&s.dims.length!==0;if(b&&a.dims.length===4&&a.dims[0]===l&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if(b&&k){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=a.dims[2]}else if(b||k)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');c=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');c=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');c=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}let w=0,T=!1,S=t.kvNumHeads?_*t.kvNumHeads:h;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(c!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=n.dims[2]}else{if(c!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=n.dims[1]*n.dims[3],T=!0}}let I=e.length>4?e[5]:void 0;if(I){if(I.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let z=I.dims.reduce((C,x)=>C*x,1);if(z!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${z}.`);for(let C=0;C<I.dims.length;C++)if(I.dims[C]!==1&&I.dims[C]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${C}] = ${I.dims[C]}.`)}return{batchSize:l,sequenceLength:d,pastSequenceLength:g,kvSequenceLength:c,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:h,vHiddenSize:S,headSize:_,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:$}},cd=he({perm:[0,2,1,3]}),Tn=(e,t,r)=>{let i=t,n=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,n,r.headSize]),i=e.compute(Pe(i,cd.perm),{inputs:[i],outputs:[-1]})[0]),i},hd=(e,t,r,i)=>{let n=7,a=["type","type"],s=[e*t],o=e*t,l=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=h=>{let c=B("seq_lens",r.dataType,r.dims),g=B("total_seq_lens",i.dataType,i.dims),y=F("pos_ids",n,s),_=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${h.registerUniforms(_).declareVariables(c,g,y)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${g.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${c.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${y.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:d}},hf=(e,t)=>{if(e.inputs.length>14&&e.inputs[14]||e.inputs.length>15&&e.inputs[15])throw new Error("GroupQueryAttention (JSEP): q_norm_weight / k_norm_weight inputs are not supported. The per-head Q/K RMS normalization prologue is implemented only on the CUDA and native WebGPU EPs.");let r=pd(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,h=r.kvNumHeads?r.kvNumHeads:r.numHeads,c=he({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,h*r.headSize,h*r.headSize]}),[g,y,_]=!n&&!a?e.compute(ra([i],c),{inputs:[i],outputs:[-1,-1,-1]}):[i,n,a],b,k;if(t.doRotary){let S=e.compute(hd(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],I=e.inputs[7],z=e.inputs[8],C=he({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),x=[g,S,I,z],M=[-1];b=e.compute(li(x,C),{inputs:x,outputs:M})[0],x.splice(0,1,y);let q=he({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});k=e.compute(li(x,q),{inputs:x,outputs:M})[0]}let $=wr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?b:g,void 0,0),w=Tn(e,t.doRotary?k:y,r),T=Tn(e,_,r);vr(e,$,w,T,void 0,void 0,s,o,void 0,r,l,d)}}),En,fd,md,ff,ty=P(()=>{"use strict";J(),re(),kt(),ie(),En=(e,t,r,i,n,a,s,o)=>{let l=ke(a),d=l===1?"f32":`vec${l}f`,h=l===1?"vec2f":`mat2x${l}f`,c=n*s,g=64;c===1&&(g=256);let y=[n,s,a/l],_=[n,s,2],b=["rank","type","type"],k=[];k.push(...X(y,_));let $=w=>{let T=B("x",t.dataType,3,l),S=B("scale",r.dataType,r.dims),I=B("bias",i.dataType,i.dims),z=F("output",1,3,2),C=[T,S,I,z];return`
  var<workgroup> workgroup_shared : array<${h}, ${g}>;
  const workgroup_size = ${g}u;
  ${w.declareVariables(...C)}
  ${w.mainStart(g)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${T.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${h}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${xt("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${xt("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${g}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:c},programUniforms:k}),getShaderSource:$},{inputs:[t,r,i],outputs:[-1]})[0]},fd=(e,t,r)=>{let i=t[0].dims,n=i,a=2,s=i[0],o=i[1],l=R.sizeFromDimension(i,a),d=ke(l),h=R.size(n)/d,c=En(e,t[0],t[1],t[2],s,l,o,r.epsilon),g=[s,o,l/d],y=[s,o],_=["type","none"],b=k=>{let $=B("x",t[0].dataType,g.length,d),w=B("scale_shift",1,y.length,2),T=F("output",t[0].dataType,g.length,d),S=[$,w,T];return`
  ${k.registerUniform("output_size","u32").declareVariables(...S)}
  ${k.mainStart()}
  ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${w.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${$.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...X(g,y,g)]}),getShaderSource:b},{inputs:[t[0],c]})},md=(e,t,r)=>{let i=t[0].dims,n=i,a=i[0],s=i[i.length-1],o=R.sizeFromDimension(i,1)/s,l=ke(s),d=R.size(n)/l,h=[{type:12,data:o},{type:12,data:Math.floor(s/l)}],c=["type","type"],g=!1,y=[0,i.length-1];for(let $=0;$<i.length-2;$++)g=g||i[$+1]!==1,y.push($+1);g=g&&i[i.length-1]!==1;let _=g?e.compute(Pe(e.inputs[0],y),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},($,w)=>i[y[w]])),b=En(e,_,t[1],t[2],a,o,s,r.epsilon),k=$=>{let w=Ie(t[0].dataType),T=l===1?"vec2f":`mat${l}x2f`,S=C=>{let x=C===0?"x":"y",M=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${w}(${M}(scale.${x}))`;case 2:return`vec2<${w}>(${M}(scale[0].${x}, scale[1].${x}))`;case 4:return`vec4<${w}>(${M}(scale[0].${x}, scale[1].${x}, scale[2].${x}, scale[3].${x}))`;default:throw new Error(`Not supported compoents ${l}`)}},I=B("input",t[0].dataType,t[0].dims,l),z=F("output",t[0].dataType,n,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${I.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${z.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${$.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:h}),getShaderSource:k},{inputs:[t[0],b]})},ff=(e,t)=>{t.format==="NHWC"?md(e,e.inputs,t):fd(e,e.inputs,t)}}),gd,_d,mf,ry=P(()=>{"use strict";J(),re(),ie(),gd=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},_d=(e,t,r)=>{let i=t.simplified,n=e[0].dims,a=e[1],s=!i&&e[2],o=n,l=R.normalizeAxis(t.axis,n.length),d=R.sizeToDimension(n,l),h=R.sizeFromDimension(n,l),c=R.size(a.dims),g=s?R.size(s.dims):0;if(c!==h||s&&g!==h)throw new Error(`Size of X.shape()[axis:] == ${h}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${c} and bias size of ${g}`);let y=[];for(let I=0;I<n.length;++I)I<l?y.push(n[I]):y.push(1);let _=ke(h),b=["type","type"],k=[{type:12,data:d},{type:1,data:h},{type:12,data:Math.floor(h/_)},{type:1,data:t.epsilon}];s&&b.push("type");let $=r>1,w=r>2,T=I=>{let z=Ie(e[0].dataType),C=[B("x",e[0].dataType,e[0].dims,_),B("scale",a.dataType,a.dims,_)];s&&C.push(B("bias",s.dataType,s.dims,_)),C.push(F("output",e[0].dataType,o,_)),$&&C.push(F("mean_data_output",1,y)),w&&C.push(F("inv_std_output",1,y));let x=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms(x).declareVariables(...C)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${jn("f32",_)};
    var mean_square_vector = ${jn("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Qt(z,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${xt("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${xt("mean_square_vector",_)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Qt(z,_,"x[j + offset]")};
      let f32scale = ${Qt(z,_,"scale[j]")};
      output[j + offset] = ${C[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Qt(z,_,"bias[j]")}`:""}
      );
    }

    ${$?"mean_data_output[global_idx] = mean":""};
    ${w?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:o,dataType:e[0].dataType}];return $&&S.push({dims:y,dataType:1}),w&&S.push({dims:y,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${i}`,inputDependencies:b},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:k}),getShaderSource:T}},mf=(e,t)=>{gd(e.inputs),e.compute(_d(e.inputs,t,e.outputCount))}}),yd,gf,iy=P(()=>{"use strict";re(),ka(),Sa(),yd=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},gf=e=>{yd(e.inputs);let t=Yt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(xa(e.inputs,{activation:""},t));else{let n=t[t.length-2],a=R.size(e.inputs[0].dims.slice(0,-2)),s=R.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&n===1&&s===1){let o=e.inputs[0].reshape([1,a,i]),l=e.inputs[1].reshape([1,i,r]),d=[1,a,r],h=[o,l];e.compute(ui(h,{activation:""},t,d),{inputs:h})}else e.compute(ui(e.inputs,{activation:""},t))}}}),wd,bd,$d,_f,yf,ny=P(()=>{"use strict";J(),re(),Se(),ie(),wd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!R.areEqual(s.dims,[t.n,n,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(R.size(o)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.n*(t.bits===8?n:Math.floor((n*t.bits+7)/8));if(R.size(l)!==d)throw new Error("zeroPoints input size error.")}},bd=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,o=r.slice(0,i-2),l=R.size(o),d=e[1].dims[2]/4,h=e[0].dataType,c=ke(t.k),g=ke(d),y=ke(s),_=o.concat([n,s]),b=n>1&&s/y%2===0?2:1,k=R.size(_)/y/b,$=64,w=[],T=[l,n,a/c],S=R.convertShape(e[1].dims).slice();S.splice(-1,1,d/g),w.push(...X(T)),w.push(...X(S)),w.push(...X(e[2].dims)),e.length===4&&w.push(...X(R.convertShape(e[3].dims)));let I=[l,n,s/y];w.push(...X(I));let z=C=>{let x=T.length,M=B("a",e[0].dataType,x,c),q=B("b",12,S.length,g),Z=B("scales",e[2].dataType,e[2].dims.length),W=[M,q,Z],H=e.length===4?B("zero_points",12,e[3].dims.length):void 0;H&&W.push(H);let oe=I.length,O=F("output",e[0].dataType,oe,y),U=Ie(e[0].dataType),ee=(()=>{switch(c){case 1:return`array<${U}, 8>`;case 2:return`mat4x2<${U}>`;case 4:return`mat2x4<${U}>`;default:throw new Error(`${c}-component is not supported.`)}})(),te=Math.floor(32/t.bits),Q=Math.floor(te/8),ne=()=>{let K="";for(let G=0;G<Q;G++){let $e=G*t.bits*4,Oe=$e+t.bits;K+=`
          // reuse a data (pass ${G})
            var input_offset${G>0?G:""} = ${G===0?M.indicesToOffset(`${M.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${G>0?G:""}: ${ee};
            for (var j${G>0?G:""}: u32 = 0; j${G>0?G:""} < ${8/c}; j${G>0?G:""}++) {
              a_data${G>0?G:""}[j${G>0?G:""}] = ${M.getByOffset(`input_offset${G>0?G:""}`)};
              input_offset${G>0?G:""}++;
            }
          `;for(let ve=0;ve<y*b;ve++)K+=`
            b_value = ${g===1?`b${ve}_data`:`b${ve}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${G*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${$e}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Oe}u) & b_mask);`}
            b_quantized_values = ${ee}(${Array.from({length:4},(ze,me)=>`${U}(b_value_lower[${me}]), ${U}(b_value_upper[${me}])`).join(", ")});
            b_dequantized_values = ${c===1?`${ee}(${Array.from({length:8},(ze,me)=>`(b_quantized_values[${me}] - ${H?`zero_point${ve}`:"zero_point"}) * scale${ve}`).join(", ")});`:`(b_quantized_values - ${ee}(${Array(8).fill(`${H?`zero_point${ve}`:"zero_point"}`).join(",")})) * scale${ve};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(ve/y)}]${y>1?`[${ve%y}]`:""} += ${Array.from({length:8/c},(ze,me)=>`${c===1?`a_data${G>0?G:""}[${me}] * b_dequantized_values[${me}]`:`dot(a_data${G>0?G:""}[${me}], b_dequantized_values[${me}])`}`).join(" + ")};
          `}return K},D=()=>{let K=`
            var col_index = col * ${y};
            ${H?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${U}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let G=0;G<y*b;G++)K+=`
            let scale${G} = ${Z.getByOffset("col_index * nBlocksPerCol + block")};
            ${H?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${H.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${G} = ${U}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return K},Y=()=>{let K=`col_index = col * ${y};`;for(let G=0;G<y*b;G++)K+=`
            let b${G}_data = ${q.getByIndices(`${q.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return K+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${ee};
            var b_dequantized_values: ${ee};`,K};return`
        var<workgroup> workgroup_shared: array<${O.type.value}, ${b*$}>;
        ${C.declareVariables(...W,O)}
        ${C.mainStart([$,1,1])}
          let output_indices = ${O.offsetToIndices(`(global_idx / ${$}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${$}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/c};
            ${D()}
            for (var word: u32 = 0; word < ${d}; word += ${g}) {
              ${Y()}
              for (var i: u32 = 0; i < ${g}; i++) {
                ${ne()}
                word_offset += ${te/c};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${O.type.value} = ${O.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${$}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${O.setByIndices(`${O.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${c};${g};${y};${b};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:h}],dispatchGroup:{x:k},programUniforms:w}),getShaderSource:z}},$d=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,o=r.slice(0,i-2),l=R.size(o),d=e[1].dims[2]/4,h=e[0].dataType,c=ke(t.k),g=ke(d),y=o.concat([n,s]),_=128,b=s%8===0?8:s%4===0?4:1,k=_/b,$=Math.floor(32/t.bits),w=k*g*$,T=w/c,S=w/t.blockSize,I=R.size(y)/b,z=[],C=[l,n,a/c],x=R.convertShape(e[1].dims).slice();x.splice(-1,1,d/g),z.push(...X(C)),z.push(...X(x)),z.push(...X(e[2].dims)),e.length===4&&z.push(...X(R.convertShape(e[3].dims)));let M=[l,n,s];z.push(...X(M));let q=Z=>{let W=C.length,H=B("a",e[0].dataType,W,c),oe=B("b",12,x.length,g),O=B("scales",e[2].dataType,e[2].dims.length),U=[H,oe,O],ee=e.length===4?B("zero_points",12,e[3].dims.length):void 0;ee&&U.push(ee);let te=M.length,Q=F("output",e[0].dataType,te),ne=Ie(e[0].dataType),D=()=>{switch(c){case 1:return`
          let a_data0 = vec4<${ne}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ne}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ne}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ne}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${c}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${H.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${Q.type.value}, ${k}>, ${b}>;
        ${Z.declareVariables(...U,Q)}
        ${Z.mainStart([k,b,1])}
          let output_indices = ${Q.offsetToIndices(`workgroup_index * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${T};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${T}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${H.getByIndices(`${H.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${H.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${S} + local_id.x;
            ${ee?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${ee.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${ne}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${ne}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${O.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${oe.getByIndices(`${oe.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/c};
            for (var i: u32 = 0; i < ${g}; i++) {
              let b_value = ${g===1?"b_data":"b_data[i]"};
              ${(()=>{let Y=Math.floor($/8),K="";for(let G=0;G<Y;G++){let $e=G*t.bits*4,Oe=$e+t.bits;K+=`
              ${D()}
              {${t.bits===2?`
                let half_word = b_value >> ${G*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${$e}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Oe}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${ne}>(${Array.from({length:4},(ve,ze)=>`${ne}(b_value_lower[${ze}]), ${ne}(b_value_upper[${ze}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${ne}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(ve,ze)=>`${`dot(a_data${ze}, b_dequantized_values[${ze}])`}`).join(" + ")};
              }
              word_offset += ${8/c};`}return K})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${Q.type.value} = ${Q.type.value}(0);
            for (var b = 0u; b < ${k}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${Q.setByIndices(`${Q.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${c};${g};${k};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:h}],dispatchGroup:{x:I},programUniforms:z}),getShaderSource:q}},_f=(e,t)=>{wd(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute($d(e.inputs,t)):e.compute(bd(e.inputs,t))},yf=e=>he(e)}),vd,xd,kd,Sd,Td,Ed,Id,zd,wf,ay=P(()=>{"use strict";J(),re(),ie(),vd=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},xd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
            k = i32(${e.indicesGet("indices",n)}) - ${j("uniforms.pads",n,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${j("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${j("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},kd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${j("uniforms.pads",n,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${j("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${j("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${j("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Sd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${j("uniforms.pads",n,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${j("uniforms.x_shape",n,t)})) {
                  k = i32(${j("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${j("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Td=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${j("uniforms.pads",n,r)};
                if (k < 0)  {
                  k += i32(${j("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${j("uniforms.x_shape",n,t)})) {
                  k -= i32(${j("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${j("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Ed=(e,t,r)=>{switch(r.mode){case 0:return xd(e,t,r.pads.length);case 1:return kd(e,t,r.pads.length);case 2:return Sd(e,t,r.pads.length);case 3:return Td(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Id=(e,t)=>{let r=R.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,n=R.size(r),a=[{type:12,data:n},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...X(e[0].dims,r));let o=["rank"],l=d=>{let h=F("output",e[0].dataType,r.length),c=B("x",e[0].dataType,i.length),g=c.type.value,y=Ed(h,i.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:s?g:"f32"}),`
            ${d.registerUniforms(_).declareVariables(c,h)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${h.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${y}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(R.size(r)/64)},programUniforms:a}),getShaderSource:l}},zd=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,a=new Int32Array(2*n).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let l=0;l<o.length;l++)a[Number(o[l])]=Number(r[l]),a[Number(o[l])+n]=Number(r[l+o.length])}else r.forEach((o,l)=>a[Number(l)]=Number(o));let s=[];return a.forEach(o=>s.push(o)),{mode:t.mode,value:i,pads:s}}else return t},wf=(e,t)=>{vd(e.inputs);let r=zd(e.inputs,t);e.compute(Id(e.inputs,r),{inputs:[0]})}}),hr,In,zn,Cn,An,Cd,Ad,On,Rn,bf,$f,Bn,vf,xf,Nn,kf,Sf,Tf,Ef,sy=P(()=>{"use strict";qe(),J(),re(),ie(),hr=e=>{if(ge.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},In=(e,t,r)=>{let i=t.format==="NHWC",n=e.dims.slice();i&&n.splice(1,0,n.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),l=a?t.dilations.slice():[],d=t.pads.slice();si.adjustPoolAttributes(r,n,s,o,l,d);let h=si.computePoolOutputShape(r,n,o,l,s,d,t.autoPad,t.ceilMode),c=Object.assign({},t);a?Object.assign(c,{kernelShape:s,strides:o,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(c,{kernelShape:s,strides:o,pads:d,cacheKey:t.cacheKey});let g=h.slice();return g.push(g.splice(1,1)[0]),[c,i?g:h]},zn=(e,t)=>{let r=t.format==="NHWC",i=R.size(e),n=R.size(t.kernelShape),a=[{type:12,data:i},{type:12,data:n}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],h=t.pads[t.pads.length-1],c=!!(d+h);a.push({type:12,data:o},{type:12,data:l},{type:12,data:d},{type:12,data:h}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let y=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],b=t.pads[t.pads.length/2-2],k=t.pads[t.pads.length-2];g=!!(b+k),a.push({type:12,data:y},{type:12,data:_},{type:12,data:b},{type:12,data:k}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,c,g]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=R.computeStrides(t.kernelShape);a.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,h)=>d+h);return[a,s,!!l,!1,!1]}},Cn=(e,t,r,i,n,a,s,o,l,d,h,c)=>{let g=n.format==="NHWC",y=t.type.value,_=F("output",t.type.tensor,i);if(n.kernelShape.length<=2){let b="",k="",$="",w=r-(g?2:1);if(h?b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${w}] < 0 || xIndices[${w}]
                      >= uniforms.x_shape[${w}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`:b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`,n.kernelShape.length===2){let T=r-(g?3:2);c?k=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${T}] < 0 || xIndices[${T}] >= uniforms.x_shape[${T}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:k=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                `,$=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var value = ${y}(${o});
              var pad = 0;
              ${k}
              ${b}
              ${$}
              ${s}

              output[global_idx] = value;
            }`}else{if(g)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=n.kernelShape.length,k=n.pads.length,$="";return d?$=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${a}
              }`:$=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${a}
            `,`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var offsets: array<u32, ${b}>;

              var value = ${y}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${b-1}u; j++) {
                  offsets[j] = offset / ${j("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${j("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${r-b}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${j("uniforms.strides",`j - ${r-b}u`,b)}
                    + offsets[j - ${r-b}u] - ${j("uniforms.pads","j - 2u",k)};
                  ${$}
              }
              ${s}

              output[global_idx] = value;
            }`}},An=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Cd=e=>`${An(e)};${e.countIncludePad}`,Ad=e=>`${An(e)};${e.storageOrder};${e.dilations}`,On=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Rn=(e,t,r,i)=>{let[n,a]=In(t,i,r),s=B("x",t.dataType,t.dims.length),o=s.type.value,l="value += x_val;",d="";n.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[h,c,g,y,_]=zn(a,n);h.push(...X(t.dims,a));let b=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${g};${y};${_}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(R.size(a)/64)},programUniforms:h}),getShaderSource:k=>Cn(k,s,t.dims.length,a.length,n,l,d,0,c,g,y,_)}},bf=e=>{let t=e.count_include_pad!==0,r=On(e);if(r.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding/divisor) is not yet implemented in the WebGPU AveragePool kernel");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:Cd(i)}},$f=(e,t)=>{hr(e.inputs),e.compute(Rn("AveragePool",e.inputs[0],!1,t))},Bn={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},vf=e=>{let t=e.format;return{format:t,...Bn,cacheKey:t}},xf=(e,t)=>{hr(e.inputs),e.compute(Rn("GlobalAveragePool",e.inputs[0],!0,t))},Nn=(e,t,r,i)=>{let[n,a]=In(t,i,r),s=`
      value = max(x_val, value);
    `,o="",l=B("x",t.dataType,t.dims.length),d=["rank"],[h,c,g,y,_]=zn(a,n);return h.push(...X(t.dims,a)),{name:e,shaderCache:{hint:`${i.cacheKey};${g};${y};${_}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(R.size(a)/64)},programUniforms:h}),getShaderSource:b=>Cn(b,l,t.dims.length,a.length,n,s,o,t.dataType===10?-65504:-1e5,c,g,y,_)}},kf=(e,t)=>{hr(e.inputs),e.compute(Nn("MaxPool",e.inputs[0],!1,t))},Sf=e=>{let t=e.storage_order,r=e.dilations,i=On(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding) is not yet implemented in the WebGPU MaxPool kernel");let n={storageOrder:t,dilations:r,...i,cacheKey:""};return{...n,cacheKey:Ad(n)}},Tf=e=>{let t=e.format;return{format:t,...Bn,cacheKey:t}},Ef=(e,t)=>{hr(e.inputs),e.compute(Nn("GlobalMaxPool",e.inputs[0],!0,t))}}),Od,Rd,If,zf,oy=P(()=>{"use strict";J(),re(),Se(),ie(),Od=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,a)=>a===t.axis||n===e[0].dims[a]).reduce((n,a)=>n&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Rd=(e,t)=>{let r=R.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,n=i===3,a=e[0].dims,s=e[1].dataType,o=R.size(a),l=i===3||i===2,d=l?[Math.ceil(R.size(e[0].dims)/4)]:e[0].dims,h=e[1].dims,c=e.length>2?e[2]:void 0,g=c?l?[Math.ceil(R.size(c.dims)/4)]:c.dims:void 0,y=h.length===0||h.length===1&&h[0]===1,_=y===!1&&h.length===1,b=ke(o),k=y&&(!l||b===4),$=k?b:1,w=k&&!l?b:1,T=B("input",l?12:i,d.length,w),S=B("scale",s,h.length),I=c?B("zero_point",l?12:i,g.length):void 0,z=F("output",s,a.length,$),C=[T,S];I&&C.push(I);let x=[d,h];c&&x.push(g);let M=[{type:12,data:o/$},{type:12,data:r},{type:12,data:t.blockSize},...X(...x,a)],q=Z=>{let W=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Z.registerUniforms(W).declareVariables(...C,z)}
      ${Z.mainStart()}
          ${Z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${z.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${$===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${y?`let scale_value= ${S.getByOffset("0")}`:_?`
            let scale_index = ${z.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${S.getByOffset("scale_index")};`:`
            var scale_indices: ${S.type.indices} = output_indices;
            let index = ${S.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${S.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${S.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${I?y?l?`
                let zero_point_input = ${I.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${I.getByOffset("0")}`:_?l?`
                let zero_point_index = ${z.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${I.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${z.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${I.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${I.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${I.getByIndices("scale_indices")};`:`let zero_point_value = ${l?n?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${z.setByOffset("global_idx",`${z.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:q,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/$/64),y:1,z:1},programUniforms:M})}},If=(e,t)=>{Od(e.inputs,t),e.compute(Rd(e.inputs,t))},zf=e=>he({axis:e.axis,blockSize:e.blockSize})}),Bd,Nd,Cf,uy=P(()=>{"use strict";qe(),J(),ie(),Bd=(e,t,r)=>{let i=e===t,n=e<t&&r<0,a=e>t&&r>0;if(i||n||a)throw new Error("Range these inputs' contents are invalid.")},Nd=(e,t,r,i)=>{let n=Math.abs(Math.ceil((t-e)/r)),a=[n],s=n,o=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...X(a)],l=d=>{let h=F("output",i,a.length),c=h.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:c},{name:"delta",type:c}];return`
        ${d.registerUniforms(g).declareVariables(h)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${c}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},Cf=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),ge.webgpu.validateInputContent&&Bd(t,r,i),e.compute(Nd(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),Md,Dd,Af,Of,ly=P(()=>{"use strict";J(),re(),Se(),ie(),Md=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${n}bitcast<${i}>(oldValue) + (${r})${a}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${n}max(bitcast<f32>(oldValue), (${r}))${a}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${n}min(bitcast<${i}>(oldValue), (${r}))${a}`;case"mul":return`${n}(bitcast<${i}>(oldValue) * (${r}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Dd=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r,a=1,s=Math.ceil(R.sizeToDimension(i,i.length-1)/a),o=i[i.length-1],l=R.sizeFromDimension(r,o),d=[{type:12,data:s},{type:12,data:o},{type:12,data:l},...X(e[1].dims,e[2].dims,n)],h=c=>{let g=B("indices",e[1].dataType,e[1].dims.length),y=B("updates",e[2].dataType,e[2].dims.length,a),_=t.reduction!=="none"&&t.reduction!==""?rc("output",e[0].dataType,n.length):F("output",e[0].dataType,n.length,a);return`
      ${c.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,y,_)}
      ${c.mainStart()}
        ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Md(t.reduction,"output[data_offset + i]","value",_.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:h}},Af=e=>he({reduction:e.reduction}),Of=(e,t)=>{e.compute(Dd(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Pd,Ud,Ld,Mn,qd,Wd,Vd,Fd,Gd,Hd,jd,Kd,Dn,Xd,Zd,Qd,Yd,Jd,Rf,Bf,dy=P(()=>{"use strict";J(),re(),Se(),ie(),Pd=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Ud=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((n,a)=>i[n]=e[a]),i},Ld=(e,t,r,i,n,a)=>{let[s,o,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(h=>a.push(h));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(h=>i.push(h)),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Pd(i,t),t.axes.length>0&&Ud(i,t.axes,d).forEach((h,c)=>i[c]=h)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(h=>n.push(Number(h))),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof n<"u"&&i.length>0&&n.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},Mn=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,qd=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Mn("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Mn("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Wd=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Vd=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?i:e.slice();return t.length>0?(t.forEach((a,s)=>{i[a]=n[s],i[s+r]=n[t.length+s]}),i):n},Fd=(e,t,r,i)=>{let n=[];if(r.length>0)if(i.length>0){if(e.forEach(a=>n.push(a)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((a,s)=>n[a]=r[s])}else r.forEach(a=>n.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((a,s)=>Math.round(a*t[s]))}return n},Gd=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(a=>t[a]=i),r.axes.forEach(a=>n[a]=Math.round(e[a]*t[a]))):(t.fill(i,0,t.length),n.forEach((a,s)=>n[s]=Math.round(a*t[s]))),n},Hd=(e,t,r,i,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${j("uniforms.scales","i",i)};
        var roi_low = ${j("uniforms.roi","i",n)};
        var roi_hi = ${j("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${j("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${j("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,jd=(e,t,r,i,n,a,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${j("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${j("uniforms.roi","i",a)};
          var roi_hi = ${j("uniforms.roi",`i + ${r.length}`,a)};
          var input_shape_i = ${j("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${j("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Kd=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${j("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Dn=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Xd=(e,t,r,i,n)=>{let[a,s,o,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${Dn(e,l,a,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${o}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${a}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Zd=(e,t,r,i,n,a,s,o,l,d)=>{let h=r.length===2,c=!0,[g,y]=h?[0,1]:c?[2,3]:[1,2],_=e.type.value,b=k=>{let $=k===g?"row":"col";return`
      fn ${$}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${_} {
        var output_index = ${t.indicesGet("output_indices",k)};
        var originalIdx: ${_} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[k]},
        ${i[k]}, ${r[k]}, ${a[k]}, ${a[k]} + ${r.length});
        var fractOriginalIdx: ${_} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[k]} - 1))) {
          return ${l};
        }
        var data: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${$}: ${_} = originalIdx + ${_}(i);
          if (${$} < 0 || ${$} >= ${r[k]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${l};`:`${$} = max(0, min(${$}, ${r[k]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",k,`u32(${$})`)};
          data[i + 1] = ${k===g?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${b(g)};
    ${b(y)};
  fn getCubicInterpolationCoefs(s: ${_}) -> array<${_}, 4> {
    var absS = abs(s);
    var coeffs: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${_} = 1.0 - absS;
    var twoMinusAbsS: ${_} = 2.0 - absS;
    var onePlusAbsS: ${_} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${_}, 4>, coefs: array<${_}, 4>) -> ${_} {
    var coefsSum: ${_} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${_} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Qd=(e,t,r,i,n)=>{let[a,s,o,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],h=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${h} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${Dn(e,d,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${h} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${h} = originalIndices[${s}];
      var height:${h} = originalIndices[${o}];
      var width:${h} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${a}])`:"0"};

      var x111: ${h} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${h} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${h} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${h} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${h} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${h} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${h} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${h} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${h} = abs(depth - ${h}(depth1));
      var dx2: ${h} = abs(${h}(depth2) - depth);
      var dy1: ${h} = abs(height - ${h}(height1));
      var dy2: ${h} = abs(${h}(height2) - height);
      var dz1: ${h} = abs(width - ${h}(width1));
      var dz2: ${h} = abs(${h}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Yd=(e,t,r,i,n,a)=>{let s=e.dims,o=Vd(a,t.axes,s.length),l=Fd(s,i,n,t.axes),d=i.slice();i.length===0&&(d=s.map((w,T)=>w===0?1:l[T]/w),t.keepAspectRatioPolicy!=="stretch"&&(l=Gd(s,d,t)));let h=F("output",e.dataType,l.length),c=B("input",e.dataType,s.length),g=R.size(l),y=s.length===l.length&&s.every((w,T)=>w===l[T]),_=t.coordinateTransformMode==="tf_crop_and_resize",b=t.extrapolationValue,k=c.type.value,$=w=>`
      ${y?"":`
      ${qd(t.coordinateTransformMode,k)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Kd(c,s)};
              ${Wd(t.nearestMode,r,k)};
              ${jd(c,h,s,l,d.length,o.length,_)};
              `;case"linear":return`
              ${Hd(h,s,l,d.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Xd(c,h,s,_,b)}`;if(s.length===3||s.length===5)return`${Qd(c,h,s,_,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Zd(c,h,s,l,d,o,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${w.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(c,h)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${y?"output[global_idx] = input[global_idx];":`
        let output_indices = ${h.offsetToIndices("global_idx")};
        var input_indices: ${c.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${c.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${n.length>0?n:""}|${o.length>0?o:""}|${y}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:d},{type:1,data:o},...X(s,l)]})}},Jd=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Rf=(e,t)=>{let r=[],i=[],n=[],a=Jd(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Ld(e.inputs,t,a,r,i,n),e.compute(Yd(e.inputs[0],t,a,r,i,n),{inputs:[0]})},Bf=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,n=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return he({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:n,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:o,mode:l,nearestMode:d})}}),ep,tp,Nf,py=P(()=>{"use strict";J(),re(),ie(),ep=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},tp=(e,t,r,i)=>{let n=t.simplified,a=e[0].dims,s=R.size(a),o=a,l=s,d=a.slice(-1)[0],h=i?a.slice(0,-1).concat(1):[],c=!n&&e.length>3,g=e.length>4,y=i&&r>1,_=i&&r>2,b=r>3,k=64,$=ke(d),w=[{type:12,data:l},{type:12,data:$},{type:12,data:d},{type:1,data:t.epsilon}],T=I=>{let z=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],C=[B("x",e[0].dataType,e[0].dims,$),B("skip",e[1].dataType,e[1].dims,$),B("gamma",e[2].dataType,e[2].dims,$)];c&&C.push(B("beta",e[3].dataType,e[3].dims,$)),g&&C.push(B("bias",e[4].dataType,e[4].dims,$)),C.push(F("output",e[0].dataType,o,$)),y&&C.push(F("mean_output",1,h)),_&&C.push(F("inv_std_output",1,h)),b&&C.push(F("input_skip_bias_sum",e[0].dataType,o,$));let x=Ie(e[0].dataType),M=Ie(1,$);return`

      ${I.registerUniforms(z).declareVariables(...C)}
      var<workgroup> sum_shared : array<${M}, ${k}>;
      var<workgroup> sum_squared_shared : array<${M}, ${k}>;

      ${I.mainStart([k,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${k};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${k};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${k-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${g?"bias[offset1d + i]":x+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Qt(x,$,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${k};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${xt("sum",$)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${xt("square_sum",$)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${y?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${x}(mean)`}) *
            ${x}(inv_std_dev) * gamma[offset1d + i]
            ${c?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:o,dataType:e[0].dataType}];return r>1&&S.push({dims:h,dataType:1}),r>2&&S.push({dims:h,dataType:1}),r>3&&S.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${$};${y};${_};${b}`,inputDependencies:e.map((I,z)=>"type")},getShaderSource:T,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:w})}},Nf=(e,t)=>{ep(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(tp(e.inputs,t,e.outputCount,!1),{outputs:r})}}),rp,fr,ip,Pn,np,ap,Mf,Df,cy=P(()=>{"use strict";J(),re(),Se(),ie(),rp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},fr=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},ip=(e,t)=>{if(e.length>1){let r=fr(e,1),i=fr(e,2),n=fr(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),he({starts:r,ends:i,axes:n})}else return t},Pn=(e,t,r,i,n)=>{let a=e;return e<0&&(a+=r[i[t]]),n[t]<0?Math.max(0,Math.min(a,r[i[t]]-1)):Math.max(0,Math.min(a,r[i[t]]))},np=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${j("uniforms.input_shape","i",r.length)};
            let steps_i = ${j("uniforms.steps","i",r.length)};
            let signs_i = ${j("uniforms.signs","i",r.length)};
            let starts_i = ${j("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,ap=(e,t)=>{let r=e[0].dims,i=R.size(r),n=t.axes.length>0?R.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],a=fr(e,4);a.forEach($=>$!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(n.length).fill(1));let s=t.starts.map(($,w)=>Pn($,w,r,n,a)),o=t.ends.map(($,w)=>Pn($,w,r,n,a));if(n.length!==s.length||n.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let $=0;$<r.length;++$)n.includes($)||(s.splice($,0,0),o.splice($,0,r[$]),a.splice($,0,1));let l=a.map($=>Math.sign($));a.forEach(($,w,T)=>{if($<0){let S=(o[w]-s[w])/$,I=s[w],z=I+S*a[w];s[w]=z,o[w]=I,T[w]=-$}});let d=r.slice(0);n.forEach(($,w)=>{d[$]=Math.ceil((o[$]-s[$])/a[$])});let h={dims:d,dataType:e[0].dataType},c=F("output",e[0].dataType,d.length),g=B("input",e[0].dataType,e[0].dims.length),y=R.size(d),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:a.length}],b=[{type:12,data:y},{type:12,data:s},{type:6,data:l},{type:12,data:a},...X(e[0].dims,d)],k=$=>`
      ${$.registerUniforms(_).declareVariables(g,c)}
        ${np(g,c,r)}
        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${c.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${c.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:k,getRunData:()=>({outputs:[h],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:b})}},Mf=(e,t)=>{rp(e.inputs,t);let r=ip(e.inputs,t);e.compute(ap(e.inputs,r),{inputs:[0]})},Df=e=>{let t=e.starts,r=e.ends,i=e.axes;return he({starts:t,ends:r,axes:i})}}),sp,op,Pf,Uf,hy=P(()=>{"use strict";J(),re(),Se(),kt(),ie(),sp=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},op=(e,t)=>{let r=e.inputs[0],i=r.dims,n=R.size(i),a=i.length,s=R.normalizeAxis(t.axis,a),o=s<i.length-1,l,d=[];o?(d=Array.from({length:a},(C,x)=>x),d[s]=a-1,d[a-1]=s,l=e.compute(Pe(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let h=l.dims,c=h[a-1],g=n/c,y=ke(c),_=c/y,b=64;g===1&&(b=256);let k=(C,x)=>x===4?`max(max(${C}.x, ${C}.y), max(${C}.z, ${C}.w))`:x===2?`max(${C}.x, ${C}.y)`:x===3?`max(max(${C}.x, ${C}.y), ${C}.z)`:C,$=B("x",l.dataType,l.dims,y),w=F("result",l.dataType,l.dims,y),T=$.type.value,S=Ie(l.dataType)==="f32"?`var threadMax = ${T}(-3.4028234663852886e+38f);`:`var threadMax = ${T}(-65504.0h);`,I=C=>`
      var<workgroup> rowMaxShared : ${T};
      var<workgroup> rowSumShared : ${T};
      var<workgroup> threadShared : array<${T}, ${b}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${T} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${T}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${C.registerUniform("packedCols","i32").declareVariables($,w)}
      ${C.mainStart(b)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${b};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${S}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${T}(${k("threadShared[0]",y)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${T}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${T}(${xt("threadShared[0]",y)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${T}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,z=e.compute({name:"Softmax",shaderCache:{hint:`${y};${b}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:h,dataType:l.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:_}]}),getShaderSource:I},{inputs:[l],outputs:[o?-1:0]})[0];o&&e.compute(Pe(z,d),{inputs:[z]})},Pf=(e,t)=>{sp(e.inputs),op(e,t)},Uf=e=>he({axis:e.axis})}),Un,up,lp,dp,Lf,fy=P(()=>{"use strict";J(),re(),ie(),Un=e=>Array.from(e.getBigInt64Array(),Number),up=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Un(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},lp=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},dp=(e,t)=>{let r=e[0].dims,i=t??Un(e[1]),n=lp(r,i),a=R.size(n),s=e[0].dataType,o=B("input",s,r.length),l=F("output",s,n.length),d=h=>`
      const inputShape = ${o.indices(...r)};
      ${h.registerUniform("output_size","u32").declareVariables(o,l)}
      ${h.mainStart()}
      ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...X(e[0].dims,n)]}),getShaderSource:d}},Lf=e=>{up(e.inputs),e.compute(dp(e.inputs),{inputs:[0]})}}),pp,cp,qf,my=P(()=>{"use strict";J(),re(),ie(),pp=(e,t,r,i,n)=>{let a=F("output_data",n,r.length,4),s=B("a_data",t[1].dataType,t[1].dims.length,4),o=B("b_data",t[2].dataType,t[2].dims.length,4),l=B("c_data",t[0].dataType,t[0].dims.length,4),d,h=(c,g,y)=>`select(${g}, ${c}, ${y})`;if(!i)d=a.setByOffset("global_idx",h(s.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let c=(g,y,_="")=>{let b=`a_data[index_a${y}][component_a${y}]`,k=`b_data[index_b${y}][component_b${y}]`,$=`bool(c_data[index_c${y}] & (0xffu << (component_c${y} * 8)))`;return`
            let output_indices${y} = ${a.offsetToIndices(`global_idx * 4u + ${y}u`)};
            let offset_a${y} = ${s.broadcastedIndicesToOffset(`output_indices${y}`,a)};
            let offset_b${y} = ${o.broadcastedIndicesToOffset(`output_indices${y}`,a)};
            let offset_c${y} = ${l.broadcastedIndicesToOffset(`output_indices${y}`,a)};
            let index_a${y} = offset_a${y} / 4u;
            let index_b${y} = offset_b${y} / 4u;
            let index_c${y} = offset_c${y} / 4u;
            let component_a${y} = offset_a${y} % 4u;
            let component_b${y} = offset_b${y} % 4u;
            let component_c${y} = offset_c${y} % 4u;
            ${g}[${y}] = ${_}(${h(b,k,$)});
          `};n===9?d=`
            var data = vec4<u32>(0);
            ${c("data",0,"u32")}
            ${c("data",1,"u32")}
            ${c("data",2,"u32")}
            ${c("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${c("output_data[global_idx]",0)}
            ${c("output_data[global_idx]",1)}
            ${c("output_data[global_idx]",2)}
            ${c("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,o,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},cp=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,n=e[1].dataType,a=!(R.areEqual(t,r)&&R.areEqual(r,i)),s=t,o=R.size(t);if(a){let d=Yt.calcShape(Yt.calcShape(t,r,!1),i,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,o=R.size(s)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>pp(d,e,s,a,n),getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...X(i,t,r,s)]})}},qf=e=>{e.compute(cp(e.inputs))}}),Wf,gy=P(()=>{"use strict";z0(),wa(),C0(),A0(),O0(),R0(),B0(),U0(),q0(),W0(),V0(),F0(),G0(),H0(),j0(),K0(),X0(),Z0(),Q0(),Y0(),J0(),ey(),ty(),ry(),iy(),ny(),of(),ay(),sy(),oy(),uy(),ly(),ya(),dy(),cf(),py(),cy(),hy(),df(),fy(),kt(),ba(),my(),Wf=new Map([["Abs",[Ac]],["Acos",[Oc]],["Acosh",[Rc]],["Add",[fh]],["ArgMax",[Ec,Xn]],["ArgMin",[Tc,Xn]],["Asin",[Bc]],["Asinh",[Nc]],["Atan",[Mc]],["Atanh",[Dc]],["Attention",[Ic]],["AveragePool",[$f,bf]],["BatchNormalization",[zc]],["BiasAdd",[Cc]],["BiasSplitGelu",[hh]],["Cast",[Uc,Pc]],["Ceil",[qc]],["Clip",[Lc]],["Concat",[kh,Sh]],["Conv",[ta,ea]],["ConvTranspose",[Nh,Bh]],["Cos",[Wc]],["Cosh",[Vc]],["CumSum",[Mh,Dh]],["DepthToSpace",[Ph,Uh]],["DequantizeLinear",[If,zf]],["DFT",[Lh,qh]],["Div",[mh]],["Einsum",[Wh,Vh]],["Elu",[Fc,yr]],["Equal",[gh]],["Erf",[Gc]],["Exp",[Hc]],["Expand",[Fh]],["FastGelu",[Gh]],["Floor",[jc]],["FusedConv",[ta,ea]],["Gather",[jh,Hh]],["GatherElements",[Jh,Yh]],["GatherBlockQuantized",[Zh,Qh]],["GatherND",[Kh,Xh]],["Gelu",[Kc]],["Gemm",[tf,ef]],["GlobalAveragePool",[xf,vf]],["GlobalMaxPool",[Ef,Tf]],["Greater",[bh]],["GreaterOrEqual",[vh]],["GridSample",[rf,nf]],["GroupQueryAttention",[hf]],["HardSigmoid",[rh,th]],["HardSwish",[ih]],["InstanceNormalization",[ff]],["LayerNormalization",[mf]],["LeakyRelu",[Xc,yr]],["Less",[$h]],["LessOrEqual",[xh]],["Log",[ph]],["MatMul",[gf]],["MatMulNBits",[_f,yf]],["MaxPool",[kf,Sf]],["Mul",[_h]],["MultiHeadAttention",[sf,af]],["Neg",[Qc]],["Not",[Zc]],["Pad",[wf]],["Pow",[yh]],["QuickGelu",[ch,yr]],["Range",[Cf]],["Reciprocal",[Yc]],["ReduceMin",[$c]],["ReduceMean",[gc]],["ReduceMax",[bc]],["ReduceSum",[xc]],["ReduceProd",[vc]],["ReduceL1",[_c]],["ReduceL2",[yc]],["ReduceLogSum",[Sc]],["ReduceLogSumExp",[wc]],["ReduceSumSquare",[kc]],["Relu",[Jc]],["Resize",[Rf,Bf]],["RotaryEmbedding",[pf]],["ScatterND",[Of,Af]],["Sigmoid",[eh]],["Sin",[nh]],["Sinh",[ah]],["Slice",[Mf,Df]],["SkipLayerNormalization",[Nf]],["Split",[uf,lf]],["Sqrt",[sh]],["Softmax",[Pf,Uf]],["Sub",[wh]],["Tan",[oh]],["Tanh",[uh]],["ThresholdedRelu",[dh,yr]],["Tile",[Lf]],["Transpose",[nc,ac]],["Where",[qf]]])}),Vf,_y=P(()=>{"use strict";qe(),dt(),ie(),Vf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,n){rt(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});n&&o.push({binding:o.length,resource:n});let l=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Xe(e.programInfo.name)}dispose(){}build(e,t){rt(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&i.push(`enable ${d.extension};`)});let n=ic(t,this.backend.device.limits),a=e.getShaderSource(n),s=`${i.join(`
`)}
${n.additionalImplementations}
${a}`,o=r.createShaderModule({code:s,label:e.name});de("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Xe(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&i<=n)return[t,r,i];let a=t*r*i,s=Math.ceil(Math.sqrt(a));if(s>n){if(s=Math.ceil(Math.cbrt(a)),s>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Ff={};er(Ff,{WebGpuBackend:()=>Gf});var hp,fp,mp,Gf,yy=P(()=>{"use strict";qe(),J(),dt(),Yp(),E0(),gy(),_y(),hp=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let n=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let a=e[i].dims.length;r.push(`${n};${a}`);break}case"dims":{let a=e[i].dims.join(",");r.push(`${n};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},fp=(e,t,r)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${hp(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,i},mp=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Gf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},n=o=>t.features.has(o)&&r.push(o)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups"),this.device=await t.requestDevice(i);let a=t,s=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new mp(s),this.gpuDataManager=tc(this),this.programManager=new Vf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,fa(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;rt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let n=r[i],a=n.kernelId,s=this.kernels.get(a),o=s.kernelType,l=s.kernelName,d=n.programName,h=n.inputTensorViews,c=n.outputTensorViews,g=t[i*2],y=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=g);let _=Number(g-this.queryTimeBase),b=Number(y-this.queryTimeBase);if(!Number.isSafeInteger(_)||!Number.isSafeInteger(b))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:h.map(k=>({dims:k.dims,dataType:lt(k.dataType)})),outputsMetadata:c.map(k=>({dims:k.dims,dataType:lt(k.dataType)})),kernelId:a,kernelType:o,kernelName:l,programName:d,startTime:_,endTime:b});else{let k="";h.forEach((w,T)=>{k+=`input[${T}]: [${w.dims}] | ${lt(w.dataType)}, `});let $="";c.forEach((w,T)=>{$+=`output[${T}]: [${w.dims}] | ${lt(w.dataType)}, `}),console.log(`[profiling] kernel "${a}|${o}|${l}|${d}" ${k}${$}start time: ${_} ns, execution time: ${b-_} ns`)}ii("GPU",`${d}::${g}::${y}`)}e.unmap(),this.pendingQueries.delete(e)}),Xe()}run(e,t,r,i,n,a){rt(e.name);let s=[];for(let w=0;w<t.length;++w){let T=t[w].data;if(T===0)continue;let S=this.gpuDataManager.get(T);if(!S)throw new Error(`no GPU data for input: ${T}`);s.push(S)}let{outputs:o,dispatchGroup:l,programUniforms:d}=e.getRunData(t),h=r.length===0?o.map((w,T)=>T):r;if(h.length!==o.length)throw new Error(`Output size ${h.length} must be equal to ${o.length}.`);let c=[],g=[];for(let w=0;w<o.length;++w){if(!Number.isInteger(h[w])||h[w]<-3||h[w]>=a)throw new Error(`Invalid output index: ${h[w]}`);if(h[w]===-3)continue;let T=h[w]===-1,S=h[w]===-2,I=T||S?n(o[w].dataType,o[w].dims):i(h[w],o[w].dataType,o[w].dims);if(c.push(I),I.data===0)continue;let z=this.gpuDataManager.get(I.data);if(!z)throw new Error(`no GPU data for output: ${I.data}`);if(T&&this.temporaryData.push(z),S){let C=this.kernelPersistentData.get(this.currentKernelId);C||(C=[],this.kernelPersistentData.set(this.currentKernelId,C)),C.push(z)}g.push(z)}if(s.length!==t.length||g.length!==c.length){if(g.length===0)return Xe(e.name),c;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let y;if(d){let w=0,T=[];d.forEach(C=>{let x=typeof C.data=="number"?[C.data]:C.data;if(x.length===0)return;let M=C.type===10?2:4,q,Z;C.type===10?(Z=x.length>4?16:x.length>2?8:x.length*M,q=x.length>4?16:M*x.length):(Z=x.length<=2?x.length*M:16,q=16),w=Math.ceil(w/Z)*Z,T.push(w);let W=C.type===10?8:4;w+=x.length>4?Math.ceil(x.length/W)*q:x.length*M});let S=16;w=Math.ceil(w/S)*S;let I=new ArrayBuffer(w);d.forEach((C,x)=>{let M=T[x],q=typeof C.data=="number"?[C.data]:C.data;if(C.type===6)new Int32Array(I,M,q.length).set(q);else if(C.type===12)new Uint32Array(I,M,q.length).set(q);else if(C.type===10)new Uint16Array(I,M,q.length).set(q);else if(C.type===1)new Float32Array(I,M,q.length).set(q);else throw new Error(`Unsupported uniform type: ${lt(C.type)}`)});let z=this.gpuDataManager.create(w,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(z.buffer,0,I,0,w),this.gpuDataManager.release(z.id),y={offset:0,size:w,buffer:z.buffer}}let _=this.programManager.normalizeDispatchGroupSize(l),b=_[1]===1&&_[2]===1,k=fp(e,t,b),$=this.programManager.getArtifact(k);if($||($=this.programManager.build(e,_),this.programManager.setArtifact(k,$),de("info",()=>`[artifact] key: ${k}, programName: ${e.name}`)),d&&$.uniformVariablesInfo){if(d.length!==$.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${$.uniformVariablesInfo.length}, got ${d.length} in program "${$.programInfo.name}".`);for(let w=0;w<d.length;w++){let T=d[w],S=T.type,I=typeof T.data=="number"?1:T.data.length,[z,C]=$.uniformVariablesInfo[w];if(S!==z||I!==C)throw new Error(`Uniform variable ${w} mismatch: expect type ${z} with size ${C}, got type ${S} with size ${I} in program "${$.programInfo.name}".`)}}if(de("info",()=>`[ProgramManager] run "${e.name}" (key=${k}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let w={kernelId:this.currentKernelId,programName:$.programInfo.name,inputTensorViews:t,outputTensorViews:c};this.pendingKernels.push(w),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(w)}return this.programManager.run($,s,g,_,y),Xe(e.name),c}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let n=Wf.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:i,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let n=i.kernelType,a=i.kernelName,s=i.kernelEntry,o=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),de("info",()=>`[WebGPU] Start to run kernel "[${n}] ${a}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${a}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${n}] ${a}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let a=n.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,a);return n.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await Hn(this,e,t);return ma(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){de("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){de("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){de("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let n=this.getComputePassEncoder(),a=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(a.computePipeline),n.setBindGroup(0,a.bindGroup),n.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Hf={};er(Hf,{init:()=>jf});var Yr,gp,jf,wy=P(()=>{"use strict";J(),dt(),re(),T0(),Yr=class Kf{constructor(t,r,i,n){this.module=t,this.dataType=r,this.data=i,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(R.size(t)!==R.size(this.dims))throw new Error("Invalid new shape");return new Kf(this.module,this.dataType,this.data,t)}},gp=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,n=r/e.PTR_SIZE,a=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*n++,a));let s=Number(e.getValue(i*n++,a));this.outputCount=Number(e.getValue(i*n++,a)),this.customDataOffset=Number(e.getValue(i*n++,"*")),this.customDataSize=Number(e.getValue(i*n++,a));let o=[];for(let l=0;l<s;l++){let d=Number(e.getValue(i*n++,a)),h=Number(e.getValue(i*n++,"*")),c=Number(e.getValue(i*n++,a)),g=[];for(let y=0;y<c;y++)g.push(Number(e.getValue(i*n++,a)));o.push(new Yr(e,d,h,g))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,i=t?.outputs??[],n=(s,o,l)=>new Yr(this.module,o,this.output(s,l),l),a=(s,o)=>{let l=Pt(s,o);if(!l)throw new Error(`Unsupported data type: ${s}`);let d=l>0?this.backend.gpuDataManager.create(l).id:0;return new Yr(this.module,s,d,o)};return this.backend.run(e,r,i,n,a,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,n=i===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*i);this.module.setValue(a,t.length,n);for(let s=0;s<t.length;s++)this.module.setValue(a+i*(s+1),t[s],n);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},jf=async(e,t,r,i)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(yy(),$r(Ff)).WebGpuBackend,s=new a;await s.initialize(r,i),n("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,l,d,h=!1)=>{if(h)de("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(d)}`),s.memcpy(Number(o),Number(l));else{de("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let c=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));s.upload(Number(l),c)}},async(o,l,d)=>{de("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${d}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(o,l,d)=>s.createKernel(o,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),o=>s.releaseKernel(o),(o,l,d,h)=>{de("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${l}`);let c=new gp(t,s,Number(l));return s.computeKernel(Number(o),c,h)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new ec(r);n("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,o,l,d,h)=>a.ensureTensor(s,o,l,d,h),(s,o)=>{a.uploadTensor(s,o)},async(s,o)=>a.downloadTensor(s,o),(s,o)=>a.registerMLContext(s,o),!!r.trace])}}}),_p,Ta,Ea,bt,yp,Ln,di,Ia,za,qn,Ca,Aa,Oa,Xf=P(()=>{"use strict";qe(),x0(),k0(),J(),Ft(),da(),Kp(),_p=(e,t)=>{ye()._OrtInit(e,t)!==0&&fe("Can't initialize onnxruntime.")},Ta=async e=>{_p(e.wasm.numThreads,ai(e.logLevel))},Ea=async(e,t)=>{ye().asyncInit?.();let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let n=e.webgpu.forceFallbackAdapter;if(n!==void 0&&typeof n!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${n}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:n}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let i=(wy(),$r(Hf)).init;t==="webgpu"&&await i("webgpu",ye(),e,r),t==="webnn"&&await i("webnn",ye(),e)}},bt=new Map,yp=e=>{let t=ye(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,n,n+i)!==0&&fe("Can't get session input/output count.");let a=i===4?"i32":"i64";return[Number(t.getValue(n,a)),Number(t.getValue(n+i,a))]}finally{t.stackRestore(r)}},Ln=(e,t)=>{let r=ye(),i=r.stackSave(),n=0;try{let a=r.PTR_SIZE,s=r.stackAlloc(2*a);r._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&fe("Can't get session input/output metadata.");let o=Number(r.getValue(s,"*"));n=Number(r.getValue(s+a,"*"));let l=r.HEAP32[n/4];if(l===0)return[o,0];let d=r.HEAPU32[n/4+1],h=[];for(let c=0;c<d;c++){let g=Number(r.getValue(n+8+c*a,"*"));h.push(g!==0?r.UTF8ToString(g):Number(r.getValue(n+8+(c+d)*a,"*")))}return[o,l,h]}finally{r.stackRestore(i),n!==0&&r._OrtFree(n)}},di=e=>{let t=ye(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Ia=async(e,t)=>{let r,i,n=ye();Array.isArray(e)?[r,i]=e:e.buffer===n.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=di(e);let a=0,s=0,o=0,l=[],d=[],h=[];try{if([s,l]=await jp(t),t?.externalData&&n.mountExternalData){let S=[];for(let I of t.externalData){let z=typeof I=="string"?I:I.path,C=typeof I=="string"?I:I.data;S.push(ha(C).then(x=>{n.mountExternalData(z,x)}))}await Promise.all(S)}for(let S of t?.executionProviders??[])if((typeof S=="string"?S:S.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof S!="string"){let I=S,z=I?.context,C=I?.gpuDevice,x=I?.deviceType,M=I?.powerPreference;z?n.currentContext=z:C?n.currentContext=await n.webnnCreateMLContext(C):n.currentContext=await n.webnnCreateMLContext({deviceType:x,powerPreference:M})}else n.currentContext=await n.webnnCreateMLContext();break}a=await n._OrtCreateSession(r,i,s),n.webgpuOnCreateSession?.(a),a===0&&fe("Can't create a session."),n.jsepOnCreateSession?.(),n.currentContext&&(n.webnnRegisterMLContext(a,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[c,g]=yp(a),y=!!t?.enableGraphCapture,_=[],b=[],k=[],$=[],w=[];for(let S=0;S<c;S++){let[I,z,C]=Ln(a,S);I===0&&fe("Can't get an input name."),d.push(I);let x=n.UTF8ToString(I);_.push(x),k.push(z===0?{name:x,isTensor:!1}:{name:x,isTensor:!0,type:lt(z),shape:C})}for(let S=0;S<g;S++){let[I,z,C]=Ln(a,S+c);I===0&&fe("Can't get an output name."),h.push(I);let x=n.UTF8ToString(I);b.push(x),$.push(z===0?{name:x,isTensor:!1}:{name:x,isTensor:!0,type:lt(z),shape:C});{if(y&&t?.preferredOutputLocation===void 0){w.push("gpu-buffer");continue}let M=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[x]??"cpu",q=n.webnnIsGraphOutput;if(M==="cpu"&&q&&q(a,x)){w.push("ml-tensor-cpu-output");continue}if(M!=="cpu"&&M!=="cpu-pinned"&&M!=="gpu-buffer"&&M!=="ml-tensor")throw new Error(`Not supported preferred output location: ${M}.`);if(y&&M!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${M}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);w.push(M)}}let T=null;return w.some(S=>S==="gpu-buffer"||S==="ml-tensor"||S==="ml-tensor-cpu-output")&&(o=n._OrtCreateBinding(a),o===0&&fe("Can't create IO binding."),T={handle:o,outputPreferredLocations:w,outputPreferredLocationsEncoded:w.map(S=>S==="ml-tensor-cpu-output"?"ml-tensor":S).map(S=>Gn(S))}),bt.set(a,[a,d,h,T,y,!1]),[a,_,b,k,$]}catch(c){throw d.forEach(g=>n._OrtFree(g)),h.forEach(g=>n._OrtFree(g)),o!==0&&n._OrtReleaseBinding(o)!==0&&fe("Can't release IO binding."),a!==0&&n._OrtReleaseSession(a)!==0&&fe("Can't release session."),c}finally{n._free(r),s!==0&&n._OrtReleaseSessionOptions(s)!==0&&fe("Can't release session options."),l.forEach(c=>n._free(c)),n.unmountExternalData?.()}},za=e=>{let t=ye(),r=bt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,n,a,s,o]=r;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&fe("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&fe("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),n.forEach(l=>t._OrtFree(l)),a.forEach(l=>t._OrtFree(l)),t._OrtReleaseSession(i)!==0&&fe("Can't release session."),bt.delete(e)},qn=async(e,t,r,i,n,a,s=!1)=>{if(!e){t.push(0);return}let o=ye(),l=o.PTR_SIZE,d=e[0],h=e[1],c=e[3],g=c,y,_;if(d==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(c==="gpu-buffer"){let $=e[2].gpuBuffer;_=Pt(Dt(d),h);{let w=o.jsepRegisterBuffer;if(!w)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');y=w(i,a,$,_)}}else if(c==="ml-tensor"){let $=e[2].mlTensor;_=Pt(Dt(d),h);let w=o.webnnRegisterMLTensor;if(!w)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');y=w(i,$,Dt(d),h)}else{let $=e[2];if(Array.isArray($)){_=l*$.length,y=o._malloc(_),r.push(y);for(let w=0;w<$.length;w++){if(typeof $[w]!="string")throw new TypeError(`tensor data at index ${w} is not a string`);o.setValue(y+w*l,Ke($[w],r),"*")}}else{let w=o.webnnIsGraphInput,T=o.webnnIsGraphOutput;if(d!=="string"&&w&&T){let S=o.UTF8ToString(n);if(w(i,S)||T(i,S)){let I=Dt(d);_=Pt(I,h),g="ml-tensor";let z=o.webnnCreateTemporaryTensor,C=o.webnnUploadTensor;if(!z||!C)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let x=await z(i,I,h);C(x,new Uint8Array($.buffer,$.byteOffset,$.byteLength)),y=x}else _=$.byteLength,y=o._malloc(_),r.push(y),o.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,_),y)}else _=$.byteLength,y=o._malloc(_),r.push(y),o.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,_),y)}}let b=o.stackSave(),k=o.stackAlloc(4*h.length);try{h.forEach((w,T)=>o.setValue(k+T*l,w,l===4?"i32":"i64"));let $=o._OrtCreateTensor(Dt(d),y,_,k,h.length,Gn(g));$===0&&fe(`Can't create tensor for input/output. session=${i}, index=${a}.`),t.push($)}finally{o.stackRestore(b)}},Ca=async(e,t,r,i,n,a)=>{let s=ye(),o=s.PTR_SIZE,l=bt.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],h=l[1],c=l[2],g=l[3],y=l[4],_=l[5],b=t.length,k=i.length,$=0,w=[],T=[],S=[],I=[],z=[],C=s.stackSave(),x=s.stackAlloc(b*o),M=s.stackAlloc(b*o),q=s.stackAlloc(k*o),Z=s.stackAlloc(k*o);try{[$,w]=Hp(a),Ut("wasm prepareInputOutputTensor");for(let O=0;O<b;O++)await qn(r[O],T,I,e,h[t[O]],t[O],y);for(let O=0;O<k;O++)await qn(n[O],S,I,e,c[i[O]],b+i[O],y);Lt("wasm prepareInputOutputTensor");for(let O=0;O<b;O++)s.setValue(x+O*o,T[O],"*"),s.setValue(M+O*o,h[t[O]],"*");for(let O=0;O<k;O++)s.setValue(q+O*o,S[O],"*"),s.setValue(Z+O*o,c[i[O]],"*");if(g&&!_){let{handle:O,outputPreferredLocations:U,outputPreferredLocationsEncoded:ee}=g;if(h.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${h.length}).`);Ut("wasm bindInputsOutputs");for(let te=0;te<b;te++){let Q=t[te];await s._OrtBindInput(O,h[Q],T[te])!==0&&fe(`Can't bind input[${te}] for session=${e}.`)}for(let te=0;te<k;te++){let Q=i[te];n[te]?.[3]?(z.push(S[te]),s._OrtBindOutput(O,c[Q],S[te],0)!==0&&fe(`Can't bind pre-allocated output[${te}] for session=${e}.`)):s._OrtBindOutput(O,c[Q],0,ee[Q])!==0&&fe(`Can't bind output[${te}] to ${U[te]} for session=${e}.`)}Lt("wasm bindInputsOutputs"),bt.set(e,[d,h,c,g,y,!0])}s.jsepOnRunStart?.(d),s.webnnOnRunStart?.(d);let W;g?W=await s._OrtRunWithBinding(d,g.handle,k,q,$):W=await s._OrtRun(d,M,x,b,Z,k,q,$),W!==0&&fe("failed to call OrtRun().");let H=[],oe=[];Ut("wasm ProcessOutputTensor");for(let O=0;O<k;O++){let U=Number(s.getValue(q+O*o,"*"));if(U===S[O]||z.includes(S[O])){H.push(n[O]),U!==S[O]&&s._OrtReleaseTensor(U)!==0&&fe("Can't release tensor.");continue}let ee=s.stackSave(),te=s.stackAlloc(4*o),Q=!1,ne,D=0;try{s._OrtGetTensorData(U,te,te+o,te+2*o,te+3*o)!==0&&fe(`Can't access output tensor data on index ${O}.`);let Y=o===4?"i32":"i64",K=Number(s.getValue(te,Y));D=s.getValue(te+o,"*");let G=s.getValue(te+o*2,"*"),$e=Number(s.getValue(te+o*3,Y)),Oe=[];for(let me=0;me<$e;me++)Oe.push(Number(s.getValue(G+me*o,Y)));s._OrtFree(G)!==0&&fe("Can't free memory for tensor dims.");let ve=Oe.reduce((me,xe)=>me*xe,1);ne=lt(K);let ze=g?.outputPreferredLocations[i[O]];if(ne==="string"){if(ze==="gpu-buffer"||ze==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let me=[];for(let xe=0;xe<ve;xe++){let Ne=s.getValue(D+xe*o,"*"),Tt=s.getValue(D+(xe+1)*o,"*"),Ir=xe===ve-1?void 0:Tt-Ne;me.push(s.UTF8ToString(Ne,Ir))}H.push([ne,Oe,me,"cpu"])}else if(ze==="gpu-buffer"&&ve>0){let me=s.jsepGetBuffer;if(!me)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let xe=me(D),Ne=Pt(K,ve);if(Ne===void 0||!pa(ne))throw new Error(`Unsupported data type: ${ne}`);Q=!0,H.push([ne,Oe,{gpuBuffer:xe,download:s.jsepCreateDownloader(xe,Ne,ne),dispose:()=>{s._OrtReleaseTensor(U)!==0&&fe("Can't release tensor.")}},"gpu-buffer"])}else if(ze==="ml-tensor"&&ve>0){let me=s.webnnEnsureTensor,xe=s.webnnIsGraphInputOutputTypeSupported;if(!me||!xe)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Pt(K,ve)===void 0||!ca(ne))throw new Error(`Unsupported data type: ${ne}`);if(!xe(e,ne,!1))throw new Error(`preferredLocation "ml-tensor" for ${ne} output is not supported by current WebNN Context.`);let Ne=await me(e,D,K,Oe,!1);Q=!0,H.push([ne,Oe,{mlTensor:Ne,download:s.webnnCreateMLTensorDownloader(D,ne),dispose:()=>{s.webnnReleaseTensorId(D),s._OrtReleaseTensor(U)}},"ml-tensor"])}else if(ze==="ml-tensor-cpu-output"&&ve>0){let me=s.webnnCreateMLTensorDownloader(D,ne)(),xe=H.length;Q=!0,oe.push((async()=>{let Ne=[xe,await me];return s.webnnReleaseTensorId(D),s._OrtReleaseTensor(U),Ne})()),H.push([ne,Oe,[],"cpu"])}else{let me=pi(ne),xe=new me(ve);new Uint8Array(xe.buffer,xe.byteOffset,xe.byteLength).set(s.HEAPU8.subarray(D,D+xe.byteLength)),H.push([ne,Oe,xe,"cpu"])}}finally{s.stackRestore(ee),ne==="string"&&D&&s._free(D),Q||s._OrtReleaseTensor(U)}}g&&!y&&(s._OrtClearBoundOutputs(g.handle)!==0&&fe("Can't clear bound outputs."),bt.set(e,[d,h,c,g,y,!1]));for(let[O,U]of await Promise.all(oe))H[O][2]=U;return Lt("wasm ProcessOutputTensor"),H}finally{s.webnnOnRunEnd?.(d),s.stackRestore(C),T.forEach(W=>s._OrtReleaseTensor(W)),S.forEach(W=>s._OrtReleaseTensor(W)),I.forEach(W=>s._free(W)),$!==0&&s._OrtReleaseRunOptions($),w.forEach(W=>s._free(W))}},Aa=e=>{let t=ye(),r=bt.get(e);if(!r)throw new Error("invalid session id");let i=r[0],n=t._OrtEndProfiling(i);n===0&&fe("Can't get an profile file name."),t._OrtFree(n)},Oa=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),$t,Le,Xt,mr,gr,Jr,Wn,ei,Bt,Nt,wp,Zf,Qf,Yf,Jf,em,tm,rm,im=P(()=>{"use strict";qe(),Xf(),Ft(),ua(),$t=()=>!!ge.wasm.proxy&&typeof document<"u",Xt=!1,mr=!1,gr=!1,ei=new Map,Bt=(e,t)=>{let r=ei.get(e);r?r.push(t):ei.set(e,[t])},Nt=()=>{if(Xt||!mr||gr||!Le)throw new Error("worker not ready")},wp=e=>{switch(e.data.type){case"init-wasm":Xt=!1,e.data.err?(gr=!0,Wn[1](e.data.err)):(mr=!0,Wn[0]()),Jr&&(URL.revokeObjectURL(Jr),Jr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=ei.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},Zf=async()=>{if(!mr){if(Xt)throw new Error("multiple calls to 'initWasm()' detected.");if(gr)throw new Error("previous call to 'initWasm()' failed.");if(Xt=!0,$t())return new Promise((e,t)=>{Le?.terminate(),Fp().then(([r,i])=>{try{Le=i,Le.onerror=a=>t(a),Le.onmessage=wp,Wn=[e,t];let n={type:"init-wasm",in:ge};!n.in.wasm.wasmPaths&&(r||Fn)&&(n.in.wasm.wasmPaths={wasm:new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href}),Le.postMessage(n),Jr=r}catch(n){t(n)}},t)});try{await la(ge.wasm),await Ta(ge),mr=!0}catch(e){throw gr=!0,e}finally{Xt=!1}}},Qf=async e=>{if($t())return Nt(),new Promise((t,r)=>{Bt("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:ge}};Le.postMessage(i)});await Ea(ge,e)},Yf=async e=>$t()?(Nt(),new Promise((t,r)=>{Bt("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};Le.postMessage(i,[e.buffer])})):di(e),Jf=async(e,t)=>{if($t()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Nt(),new Promise((r,i)=>{Bt("create",[r,i]);let n={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),Le.postMessage(n,a)})}else return Ia(e,t)},em=async e=>{if($t())return Nt(),new Promise((t,r)=>{Bt("release",[t,r]);let i={type:"release",in:e};Le.postMessage(i)});za(e)},tm=async(e,t,r,i,n,a)=>{if($t()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Nt(),new Promise((s,o)=>{Bt("run",[s,o]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:i,options:a}};Le.postMessage(d,Oa(l))})}else return Ca(e,t,r,i,n,a)},rm=async e=>{if($t())return Nt(),new Promise((t,r)=>{Bt("end-profiling",[t,r]);let i={type:"end-profiling",in:e};Le.postMessage(i)});Aa(e)}}),Vn,bp,nm,by=P(()=>{"use strict";qe(),im(),J(),oa(),Kp(),Vn=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},bp=e=>{switch(e[3]){case"cpu":return new Re(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!pa(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:n}=e[2];return Re.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:n})}case"ml-tensor":{let t=e[0];if(!ca(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:n}=e[2];return Re.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},nm=class{async fetchModelAndCopyToWasmMemory(e){return Yf(await ha(e))}async loadModel(e,t){rt();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Jf(r,t),Xe()}async dispose(){return em(this.sessionId)}async run(e,t,r){rt();let i=[],n=[];Object.entries(e).forEach(c=>{let g=c[0],y=c[1],_=this.inputNames.indexOf(g);if(_===-1)throw new Error(`invalid input '${g}'`);i.push(y),n.push(_)});let a=[],s=[];Object.entries(t).forEach(c=>{let g=c[0],y=c[1],_=this.outputNames.indexOf(g);if(_===-1)throw new Error(`invalid output '${g}'`);a.push(y),s.push(_)});let o=i.map((c,g)=>Vn(c,()=>`input "${this.inputNames[n[g]]}"`)),l=a.map((c,g)=>c?Vn(c,()=>`output "${this.outputNames[s[g]]}"`):null),d=await tm(this.sessionId,n,o,s,l,r),h={};for(let c=0;c<d.length;c++)h[this.outputNames[s[c]]]=a[c]??bp(d[c]);return Xe(),h}startProfiling(){}endProfiling(){rm(this.sessionId)}}}),am={};er(am,{OnnxruntimeWebAssemblyBackend:()=>na,initializeFlags:()=>ia,wasmBackend:()=>sm});var ia,na,sm,$y=P(()=>{"use strict";qe(),im(),by(),ia=()=>{(typeof ge.wasm.initTimeout!="number"||ge.wasm.initTimeout<0)&&(ge.wasm.initTimeout=0);let e=ge.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),ge.wasm.simd=!1),typeof ge.wasm.proxy!="boolean"&&(ge.wasm.proxy=!1),typeof ge.wasm.trace!="boolean"&&(ge.wasm.trace=!1),typeof ge.wasm.numThreads!="number"||!Number.isInteger(ge.wasm.numThreads)||ge.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ge.wasm.numThreads=1;else{let t=typeof navigator>"u"?a0("node:os").cpus().length:navigator.hardwareConcurrency;ge.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},na=class{async init(e){ia(),await Zf(),await Qf(e)}async createInferenceSessionHandler(e,t){let r=new nm;return await r.loadModel(e,t),r}},sm=new na});qe();qe();qe();var vy="1.30.0";{let e=($y(),$r(am)).wasmBackend;Zt("webgpu",e,5),Zt("webnn",e,5),Zt("cpu",e,10),Zt("wasm",e,10)}Object.defineProperty(ge.versions,"web",{value:vy,enumerable:!0});var ky=class{constructor(e){this.trie=this._build_trie(e)}_build_trie(e){let t=Object.create(null);for(let r of e){let i=t;for(let n=0;n<r.length;++n){let a=r[n];i=i[a]??=Object.create(null)}i.end=r}return t}split(e){let t=[],r=e.length,i=0,n=0;for(;n<r;){let a=this.trie,s=null,o=n;for(;o<r&&(a=a[e[o]]);)a.end&&(s=a.end),++o;s?(n>i&&t.push(e.slice(i,n)),t.push(s),n+=s.length,i=n):++n}return i<r&&t.push(e.slice(i)),t}},om=ky,Sy=class{constructor(e){this.content=e.content,this.id=e.id,this.single_word=e.single_word??!1,this.lstrip=e.lstrip??!1,this.rstrip=e.rstrip??!1,this.special=e.special??!1,this.normalized=e.normalized??!this.special}},Ty=Sy,_m=(e,t)=>{try{return new RegExp(e,t)}catch(r){if(!(r instanceof SyntaxError))throw r;let i=new Map,n=e.replace(/(\\[pP])\{([^}=]+)\}/g,(a,s,o,l)=>{let d=0;for(let c=l-1;c>=0&&e[c]==="\\";--c)++d;if(d%2===1)return a;let h=i.get(o);if(h===void 0){try{new RegExp(`\\p{${o}}`,"u"),h=o}catch{h=`Script=${o}`}i.set(o,h)}return`${s}{${h}}`});if(n===e)throw r;try{return new RegExp(n,t)}catch{throw r}}},Ba=e=>e.replace(/ \./g,".").replace(/ \?/g,"?").replace(/ \!/g,"!").replace(/ ,/g,",").replace(/ \' /g,"'").replace(/ n't/g,"n't").replace(/ 'm/g,"'m").replace(/ 's/g,"'s").replace(/ 've/g,"'ve").replace(/ 're/g,"'re"),mi=(e,t=!0)=>{if(e.Regex!==void 0){let r=Vy(Ly(e.Regex));return _m(r,"gu")}else if(e.String!==void 0){let r=Fy(e.String);return new RegExp(t?r:`(${r})`,"gu")}else return console.warn("Unknown pattern type:",e),null},tr="\\p{Alphabetic}\\p{M}\\p{Nd}\\p{Pc}",ym=`${tr}\\u00B2\\u00B3\\u00B9\\u00BC-\\u00BE`,it=`[${ym}]`,wm=`[^${ym}]`,Ey=`(?:(?<!${it})(?=${it})|(?<=${it})(?!${it}))`,Iy=`(?:(?<!${it})(?!${it})|(?<=${it})(?=${it}))`,zy="(?:(?<![\\s\\S])|(?<=\\n))",Cy="(?:(?=\\n)|(?![\\s\\S]))",kr="0-9A-Fa-f",Ay=new Map([["A","(?<![\\s\\S])"],["z","(?![\\s\\S])"],["Z","(?=\\n?(?![\\s\\S]))"],["h",`[${kr}]`],["H",`[^${kr}]`],["w",it],["W",wm],["d","\\p{Nd}"],["D","\\P{Nd}"],["s","\\p{White_Space}"],["S","\\P{White_Space}"],["b",Ey],["B",Iy],["a","\\x07"],["e","\\x1B"]]),Oy=new Map([["h",kr],["w",tr],["d","\\p{Nd}"],["D","\\P{Nd}"],["s","\\p{White_Space}"],["S","\\P{White_Space}"],["a","\\x07"],["e","\\x1B"]]),Ry=new Map([["W",`[^${tr}]`],["H",`[^${kr}]`]]),bm=new Map([[`
`,"\\n"],["\r","\\r"],["	","\\t"],["\f","\\f"],["\v","\\v"]]),By=new Map([["alpha","\\p{Alphabetic}"],["alnum","\\p{Alphabetic}\\p{Nd}"],["digit","\\p{Nd}"],["lower","\\p{Lowercase}"],["upper","\\p{Uppercase}"],["space","\\p{White_Space}"],["blank","\\t\\p{Zs}"],["punct","\\p{P}\\p{S}"],["cntrl","\\p{Cc}"],["word",tr],["xdigit",kr]]),$m="^$\\.*+?()[]{}|/",Ny=/^\(\?(?:<[=!]|<[A-Za-z_][A-Za-z0-9_]*>|[:=!>])/,vm=/^\\([pPxu])\{([^}]*)\}/,My=/^\{(\d+(?:,\d*)?|,\d+)\}/,Dy=/^\[:(\^?)(\p{Alphabetic}+):\]/u,Py=/^\[:\^:\]/,Uy=/^\[(?:\.[^\]]*\.\]|=[^\]]*=\])/,xm=/^(?:\\x[0-9A-Fa-f]{2}|\\u[0-9A-Fa-f]{4}|\\c[A-Za-z])/,km=e=>e>="A"&&e<="Z"||e>="a"&&e<="z",ci=(e,t)=>String.fromCodePoint(e.codePointAt(t)),um=e=>{if(!/^[0-9A-Fa-f]{1,8}$/.test(e))return null;let t=Number.parseInt(e,16);if(t>127)return null;let r=String.fromCharCode(t);return km(r)?`[${r.toLowerCase()}${r.toUpperCase()}]`:null},Ly=e=>e.replace(/\[\^\(\\s\|\[([^\]]+)\]\)\]/g,"[^()|\\s$1]"),Sm="[\\s\\S]",lm=256,dm=()=>({fragment:"",alternatives:[],tail:null,contains_complex_set:!1}),Na=e=>{throw new SyntaxError(`Unsupported range with a set-valued character-class operand at index ${e}`)},hi=(e,t,r,i=!0)=>{e.tail==="range"&&Na(r),e.alternatives.push(t),e.tail="set",e.contains_complex_set=e.contains_complex_set||i},St=(e,t,r=!1,i=-1)=>{if(r&&e.tail==="range"&&Na(i),e.tail==="range"){e.fragment+=t,e.tail="complete_range";return}e.fragment+=t,e.tail=r?"set":"scalar",e.contains_complex_set=e.contains_complex_set||r},qy=(e,t,r)=>{let i=vm.exec(e.slice(t));if(i){let[g,y,_]=i;if(y==="P"&&_==="Word")hi(r,`[^${tr}]`,t);else{let b=y==="x"?`\\u{${_}}`:y==="p"&&_==="Word"?tr:g;St(r,b,y==="p"||y==="P",t)}return t+g.length}let n=xm.exec(e.slice(t));if(n)return St(r,n[0]),t+n[0].length;if(t+1>=e.length)throw new SyntaxError(`Unterminated escape in character class at index ${t}`);let a=ci(e,t+1),s=t+1+a.length,o=bm.get(a);if(o!==void 0)return St(r,o),s;let l=Ry.get(a);if(l!==void 0)return hi(r,l,t),s;let d=Oy.get(a),h,c=!1;return d!==void 0?(h=d,c=a!=="a"&&a!=="e"):/[A-Za-z0-9]/.test(a)?h=`\\${a}`:$m.includes(a)||a==="-"?h=`\\${a}`:h=a,St(r,h,c,t),s},Tm=e=>e.length===1?e[0]:`(?:(?=(?:${e.join("|")}))${Sm})`,pm=e=>{let t=e.fragment.length===0?e.alternatives:[`[${e.fragment}]`,...e.alternatives];return Tm(t)},Wy=e=>{let t=_m(`^(?:${e})$`,"u"),r="";for(let i=0;i<26;++i){let n=String.fromCharCode(65+i),a=String.fromCharCode(97+i),s=t.test(n),o=t.test(a);s!==o&&(r+=s?a:n)}return r},Em=(e,t,r,i=!0,n=1)=>{if(n>lm)throw new SyntaxError(`Maximum character-class nesting depth of ${lm} exceeded at index ${t}`);let a=t+1,s=e[a]==="^";s&&++a;let o=a,l=[dm()],d=l[0],h=!1;for(;a<e.length;){let c=ci(e,a);if(c==="\\"){a=qy(e,a,d);continue}if(c==="]"){if(a===o){St(d,"\\]"),++a;continue}if(d.tail===null)throw l.length>1?new SyntaxError(`Malformed character-class intersection with an empty operand at index ${a}`):new SyntaxError(`Empty character class at index ${t}`);let g=l.some(w=>w.contains_complex_set);if(s&&l.length>1&&h)throw new SyntaxError(`Unsupported outer-negated character-class intersection with a nested negated class containing a Unicode property, POSIX class, or shorthand at index ${t}`);let y=pm(l[0]),_=y;if(l.length>1){let w="";for(let T=1;T<l.length;++T)w+=`(?=${pm(l[T])})`;_=`(?:${w}${y})`}let b=l.length===1&&d.alternatives.length===0,k=d.fragment;if(r&&i){let w=Wy(_);w.length>0&&(b?(k+=w,_=`[${k}]`):_=Tm([_,`[${w}]`]))}return{atom:s?b?`[^${k}]`:`(?:(?!${_})${Sm})`:_,end:a+1,negated:s,contains_complex_set:g,contains_nested_negated_complex_set:h}}if(e.startsWith("&&",a)){if(d.tail===null)throw new SyntaxError(`Malformed character-class intersection with an empty operand at index ${a}`);d=dm(),l.push(d),a+=2;continue}if(c==="["){let g=e.slice(a);if(Py.test(g))throw new SyntaxError(`Malformed empty negated POSIX character class at index ${a}`);let y=Dy.exec(g);if(y){let[,b,k]=y,$=By.get(k);if($===void 0)throw new SyntaxError(`Unsupported POSIX character class "${k}" at index ${a}`);if(r&&b&&(k==="lower"||k==="upper"))throw new SyntaxError(`Unsupported negated POSIX ${k} class inside an inline case-insensitive group`);b?hi(d,`[^${$}]`,a):St(d,$,!0,a),a+=y[0].length;continue}if(Uy.test(g))throw new SyntaxError(`Unsupported POSIX collating or equivalence bracket expression at index ${a}`);let _=Em(e,a,r,!1,n+1);hi(d,_.atom,a,_.contains_complex_set),h||=_.contains_nested_negated_complex_set||_.negated&&_.contains_complex_set,a=_.end;continue}if(c==="-"){let g=e[a+1]==="]"||e.startsWith("&&",a+1);d.tail==="set"&&!g&&Na(a),d.tail===null||d.tail==="range"||d.tail==="complete_range"||g?St(d,"\\-"):(d.fragment+="-",d.tail="range"),++a;continue}St(d,c==="^"&&d.fragment.length===0?"\\^":c),a+=c.length}throw new SyntaxError(`${l.length>1?"Unterminated character-class intersection":"Unterminated character class"} at index ${t}`)},Vy=e=>{let t="",r=-1,i=!1,n=!1,a=[],s=o=>{r=t.length,t+=o,i=!1};for(let o=0;o<e.length;){let l=ci(e,o);if(l==="\\"){let d=vm.exec(e.slice(o));if(d){let[b,k,$]=d,w=b;if(k==="x"){let T=`\\u{${$}}`;w=n?um($)??T:T}else $==="Word"&&(w=k==="p"?it:wm);s(w),o+=b.length;continue}let h=xm.exec(e.slice(o));if(h){let b=h[0],k=n&&b[1]!=="c"?um(b.slice(2))??b:b;s(k),o+=b.length;continue}if(o+1>=e.length){t+=l;break}let c=ci(e,o+1);if(o+=1+c.length,c==="G")continue;let g=bm.get(c);if(g!==void 0){s(g);continue}let y=Ay.get(c),_;y!==void 0?_=y:/[A-Za-z0-9]/.test(c)?_=`\\${c}`:$m.includes(c)?_=`\\${c}`:_=c,s(_);continue}switch(l){case"[":{let d=Em(e,o,n);s(d.atom),o=d.end;continue}case"]":s("\\]"),++o;continue;case".":s("[^\\n]"),++o;continue;case"^":s(zy),++o;continue;case"$":s(Cy),++o;continue;case"(":{let d=e.startsWith("(?i:",o),h=d?"(?i:":Ny.exec(e.slice(o))?.[0]??"(",c=d||h==="(?>"?"(?:":h;a.push([t.length,n]),d&&(n=!0),t+=c,i=!1,o+=h.length;continue}case")":t+=l,[r,n]=a.pop()??[-1,!1],i=!1,++o;continue;case"|":t+=l,r=-1,i=!1,++o;continue;case"{":{let d=My.exec(e.slice(o));if(!d||r<0){s("\\{"),++o;continue}let h=d[1].startsWith(",")?`0${d[1]}`:d[1];o+=d[0].length;let c=e[o];c==="+"||c==="*"?(t=`${t.slice(0,r)}(?:${t.slice(r)}{${h}})${c}`,++o):t+=`{${h}}`,i=!0;continue}case"}":s("\\}"),++o;continue;case"+":if(i){++o;continue}t+=l,i=!0,++o;continue;case"*":case"?":t+=l,i=!0,++o;continue;default:s(n&&km(l)?`[${l.toLowerCase()}${l.toUpperCase()}]`:l),o+=l.length;continue}}return t},Fy=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),Gy=(e,t,r)=>{let i=[],n=0;for(;n<e.length;){if(i.push(e[n]),(t.get(e[n])??r)!==r){++n;continue}for(;++n<e.length&&(t.get(e[n])??r)===r;)t.get(i.at(-1))!==r&&(i[i.length-1]+=e[n])}return i},Hy=e=>e>=19968&&e<=40959||e>=13312&&e<=19903||e>=131072&&e<=173791||e>=173824&&e<=177983||e>=177984&&e<=178207||e>=178208&&e<=183983||e>=63744&&e<=64255||e>=194560&&e<=195103,jy=e=>Number.isInteger(e)||typeof e=="bigint",Ky=e=>{let t=0;for(let r of e)++t;return t},Xy=e=>Im(e.toLowerCase()),Ze=(...e)=>Array.prototype.concat.apply([],e),Ma=e=>new Map(Object.entries(e)),Zy=(e,t)=>{let r=[],i=0;for(let n of e.matchAll(t)){let a=n[0];i<n.index&&r.push(e.slice(i,n.index)),a.length>0&&r.push(a),i=n.index+a.length}return i<e.length&&r.push(e.slice(i)),r},Im=e=>e.replace(/\p{M}/gu,""),cm=(e,t,r=[])=>{if(!e||Array.isArray(e)||typeof e!="object")return`${t} must be a valid object`;for(let i of r)if(!(i in e))return`${t} must contain a "${i}" property`;return null},Qy=e=>e.match(/\S+/g)||[],Yy=class{constructor(){let e=function(...t){return e._call(...t)};return Object.setPrototypeOf(e,new.target.prototype)}},Sr=Yy,Jy=class extends Sr{constructor(e){super(),this.config=e}_call(e){return this.normalize(e)}},pt=Jy,ew=class extends pt{tokenize_chinese_chars(e){let t=[];for(let r=0;r<e.length;++r){let i=e[r],n=i.charCodeAt(0);Hy(n)?(t.push(" "),t.push(i),t.push(" ")):t.push(i)}return t.join("")}strip_accents(e){return e.normalize("NFD").replace(/\p{Mn}/gu,"")}is_control(e){switch(e){case"	":case`
`:case"\r":return!1;default:return/^\p{Cc}|\p{Cf}|\p{Co}|\p{Cs}$/u.test(e)}}clean_text(e){let t=[];for(let r of e){let i=r.charCodeAt(0);i===0||i===65533||this.is_control(r)||(/^\s$/.test(r)?t.push(" "):t.push(r))}return t.join("")}normalize(e){return this.config.clean_text&&(e=this.clean_text(e)),this.config.handle_chinese_chars&&(e=this.tokenize_chinese_chars(e)),this.config.lowercase?(e=e.toLowerCase(),this.config.strip_accents!==!1&&(e=this.strip_accents(e))):this.config.strip_accents&&(e=this.strip_accents(e)),e}},tw=ew,rw=class extends pt{constructor(e){super(e),this.charsmap=e.precompiled_charsmap??null}normalize(e){return e=e.replace(/[\u0001-\u0008\u000B\u000E-\u001F\u007F\u008F\u009F]/gm,""),e=e.replace(/[\u0009\u000A\u000C\u000D\u00A0\u1680\u2000-\u200F\u2028\u2029\u202F\u205F\u2581\u3000\uFEFF\uFFFD]/gm," "),e.includes("\uFF5E")?e=e.split("\uFF5E").map(r=>r.normalize("NFKC")).join("\uFF5E"):e=e.normalize("NFKC"),e}},iw=rw,nw=class extends pt{constructor(e){super(e),this.normalizers=(e.normalizers??[]).map(t=>zm(t))}normalize(e){return this.normalizers.reduce((t,r)=>r?r.normalize(t):t,e)}},aw=nw,sw=class extends pt{constructor(e){super(e),this.pattern=mi(this.config.pattern??{})}normalize(e){return this.pattern===null?e:e.replaceAll(this.pattern,this.config.content??"")}},ow=sw,uw=class extends pt{constructor(){super(...arguments),this.form="NFC"}normalize(e){return e=e.normalize(this.form),e}},gi=uw,lw=class extends gi{constructor(){super(...arguments),this.form="NFC"}},dw=lw,pw=class extends gi{constructor(){super(...arguments),this.form="NFD"}},cw=pw,hw=class extends gi{constructor(){super(...arguments),this.form="NFKC"}},fw=hw,mw=class extends gi{constructor(){super(...arguments),this.form="NFKD"}},gw=mw,_w=class extends pt{normalize(e){return this.config.strip_left&&this.config.strip_right?e=e.trim():(this.config.strip_left&&(e=e.trimStart()),this.config.strip_right&&(e=e.trimEnd())),e}},yw=_w,ww=class extends pt{normalize(e){return Im(e)}},bw=ww,$w=class extends pt{normalize(e){return e.toLowerCase()}},vw=$w,xw=class extends pt{normalize(e){return e=this.config.prepend+e,e}},kw=xw;function Sw(e){if(e===null)return null;switch(e.type){case"BertNormalizer":return new tw(e);case"Precompiled":return new iw(e);case"Sequence":return new aw(e);case"Replace":return new ow(e);case"NFC":return new dw(e);case"NFD":return new cw(e);case"NFKC":return new fw(e);case"NFKD":return new gw(e);case"Strip":return new yw(e);case"StripAccents":return new bw(e);case"Lowercase":return new vw(e);case"Prepend":return new kw(e);default:throw new Error(`Unknown Normalizer type: ${e.type}`)}}var zm=Sw,Tw=class extends Sr{pre_tokenize(e,t){return(Array.isArray(e)?e.map(r=>this.pre_tokenize_text(r,t)):this.pre_tokenize_text(e,t)).flat()}_call(e,t){return this.pre_tokenize(e,t)}},Qe=Tw,Cm=(()=>{let e=[...Array.from({length:94},(n,a)=>a+33),...Array.from({length:12},(n,a)=>a+161),...Array.from({length:82},(n,a)=>a+174)],t=e.slice(),r=0;for(let n=0;n<256;++n)e.includes(n)||(e.push(n),t.push(256+r),r+=1);let i=t.map(n=>String.fromCharCode(n));return Object.fromEntries(e.map((n,a)=>[n,i[a]]))})(),Ew=e=>Object.fromEntries(Object.entries(e).map(([t,r])=>[r,t])),Iw=Ew(Cm),fi="\\p{P}\\u0021-\\u002F\\u003A-\\u0040\\u005B-\\u0060\\u007B-\\u007E",zw=class extends Qe{constructor(e){super(),this.config=e,this.add_prefix_space=this.config.add_prefix_space??!1,this.trim_offsets=this.config.trim_offsets??!1,this.use_regex=this.config.use_regex??!0,this.pattern=/'s|'t|'re|'ve|'m|'ll|'d| ?\p{L}+| ?\p{N}+| ?[^\s\p{L}\p{N}]+|\s+(?!\S)|\s+/gu,this.byte_encoder=Cm,this.text_encoder=new TextEncoder}pre_tokenize_text(e,t){return this.add_prefix_space&&!e.startsWith(" ")&&(e=" "+e),(this.use_regex?e.match(this.pattern)||[]:[e]).map(i=>Array.from(this.text_encoder.encode(i),n=>this.byte_encoder[n]).join(""))}},Cw=zw,Aw=class extends Qe{pre_tokenize_text(e,t){return e.match(/\w+|[^\w\s]+/g)||[]}},Ow=Aw,Rw=class extends Qe{constructor(e){super(),this.replacement=e.replacement??"\u2581",this.str_rep=e.str_rep||this.replacement,this.prepend_scheme=e.prepend_scheme??"always"}pre_tokenize_text(e,t){let{section_index:r=void 0}=t??{},i=e.replaceAll(" ",this.str_rep);return!i.startsWith(this.replacement)&&(this.prepend_scheme==="always"||this.prepend_scheme==="first"&&r===0)&&(i=this.str_rep+i),[i]}},Bw=Rw,Nw=class extends Qe{constructor(e){super(),this.config=e,this.pattern=mi(this.config.pattern??{},this.config.invert??!0)}pre_tokenize_text(e){return this.pattern===null?[]:this.config.invert?(e.match(this.pattern)||[]).filter(t=>t):this.config.behavior?.toLowerCase()==="removed"?e.split(this.pattern).filter(t=>t):Zy(e,this.pattern)}},Mw=Nw,Dw=class extends Qe{constructor(e){super(),this.config=e,this.pattern=new RegExp(`[^${fi}]+|[${fi}]+`,"gu")}pre_tokenize_text(e){return e.match(this.pattern)||[]}},Pw=Dw,Uw=class extends Qe{constructor(e){super(),this.config=e;let t=`[^\\d]+|\\d${this.config.individual_digits?"":"+"}`;this.pattern=new RegExp(t,"gu")}pre_tokenize_text(e){return e.match(this.pattern)||[]}},Lw=Uw,qw=class extends Qe{constructor(){super(),this.pattern=new RegExp(`[^\\s${fi}]+|[${fi}]`,"gu")}pre_tokenize_text(e,t){return e.trim().match(this.pattern)||[]}},Ww=qw,Vw=class extends Qe{constructor(e){super(),this.config=e,this.pattern=mi(this.config.pattern??{}),this.content=this.config.content??""}pre_tokenize_text(e){return this.pattern===null?[e]:[e.replaceAll(this.pattern,this.config.content??"")]}},Fw=Vw,Gw=class extends Qe{constructor(e){super(),this.tokenizers=(e.pretokenizers??[]).map(t=>Am(t))}pre_tokenize_text(e,t){return this.tokenizers.reduce((r,i)=>i?i.pre_tokenize(r,t):r,[e])}},Hw=Gw,jw=class extends Qe{pre_tokenize_text(e){return Qy(e)}},Kw=jw,Xw=class extends Qe{constructor(e){super(),this.config=e,this._length=e.length}pre_tokenize_text(e){let t=[];for(let r=0;r<e.length;r+=this._length)t.push(e.slice(r,r+this._length));return t}},Zw=Xw;function Qw(e){if(e===null)return null;switch(e.type){case"BertPreTokenizer":return new Ww;case"Sequence":return new Hw(e);case"Whitespace":return new Ow;case"WhitespaceSplit":return new Kw;case"Metaspace":return new Bw(e);case"ByteLevel":return new Cw(e);case"Split":return new Mw(e);case"Punctuation":return new Pw(e);case"Digits":return new Lw(e);case"Replace":return new Fw(e);case"FixedLength":return new Zw(e);default:throw new Error(`Unknown PreTokenizer type: ${e.type}`)}}var Am=Qw,Yw=class extends Sr{constructor(e){super(),this.config=e,this.vocab=[],this.tokens_to_ids=new Map,this.unk_token_id=void 0,this.unk_token=void 0,this.end_of_word_suffix=void 0,this.fuse_unk=this.config.fuse_unk??!1}_call(e){let t=this.encode(e);return this.fuse_unk&&(t=Gy(t,this.tokens_to_ids,this.unk_token_id)),t}},_i=Yw,Jw=class extends _i{constructor(e){super(e),this.max_input_chars_per_word=100,this.tokens_to_ids=Ma(e.vocab),this.unk_token_id=this.tokens_to_ids.get(e.unk_token),this.unk_token=e.unk_token,this.max_input_chars_per_word=e.max_input_chars_per_word??100,this.vocab=new Array(this.tokens_to_ids.size);for(let[t,r]of this.tokens_to_ids)this.vocab[r]=t}encode(e){let t=[];for(let r of e){let i=[...r];if(i.length>this.max_input_chars_per_word){t.push(this.unk_token);continue}let n=!1,a=0,s=[];for(;a<i.length;){let o=i.length,l=null;for(;a<o;){let d=i.slice(a,o).join("");if(a>0&&(d=this.config.continuing_subword_prefix+d),this.tokens_to_ids.has(d)){l=d;break}--o}if(l===null){n=!0;break}s.push(l),a=o}n?t.push(this.unk_token):t.push(...s)}return t}},hm=Jw,fm=class Om{constructor(t,r){this.is_leaf=t,this.children=r}static default(){return new Om(!1,new Map)}},eb=class{constructor(){this.root=fm.default()}extend(e){for(let t of e)this.push(t)}push(e){let t=this.root;for(let r of e){let i=t.children.get(r);i===void 0&&(i=fm.default(),t.children.set(r,i)),t=i}t.is_leaf=!0}*common_prefix_search(e,t=0){let r=this.root;if(r===void 0)return;let i="";for(let n=t;n<e.length;++n){let a=e[n];if(i+=a,r=r.children.get(a),r===void 0)return;r.is_leaf&&(yield i)}}},tb=eb,Ra=class Rm{constructor(t,r,i,n,a){this.token_id=t,this.node_id=r,this.pos=i,this.length=n,this.score=a,this.prev=null,this.backtrace_score=0}clone(){let t=new Rm(this.token_id,this.node_id,this.pos,this.length,this.score);return t.prev=this.prev,t.backtrace_score=this.backtrace_score,t}},rb=class{constructor(e,t,r){this.chars=Array.from(e),this.len=this.chars.length,this.bos_token_id=t,this.eos_token_id=r,this.nodes=[],this.begin_nodes=Array.from({length:this.len+1},()=>[]),this.end_nodes=Array.from({length:this.len+1},()=>[]);let i=new Ra(this.bos_token_id??0,0,0,0,0),n=new Ra(this.eos_token_id??0,1,this.len,0,0);this.nodes.push(i.clone()),this.nodes.push(n.clone()),this.begin_nodes[this.len].push(n),this.end_nodes[0].push(i)}insert(e,t,r,i){let n=this.nodes.length,a=new Ra(i,n,e,t,r);this.begin_nodes[e].push(a),this.end_nodes[e+t].push(a),this.nodes.push(a)}viterbi(){let e=this.len,t=0;for(;t<=e;){if(this.begin_nodes[t].length==0)return[];for(let s of this.begin_nodes[t]){s.prev=null;let o=0,l=null;for(let d of this.end_nodes[t]){let h=d.backtrace_score+s.score;(l===null||h>o)&&(l=d.clone(),o=h)}if(l!==null)s.prev=l,s.backtrace_score=o;else return[]}++t}let r=[],n=this.begin_nodes[e][0].prev;if(n===null)return[];let a=n.clone();for(;a.prev!==null;)r.push(a.clone()),a=a.clone().prev.clone();return r.reverse(),r}piece(e){return this.chars.slice(e.pos,e.pos+e.length).join("")}tokens(){return this.viterbi().map(t=>this.piece(t))}token_ids(){return this.viterbi().map(t=>t.token_id)}},ib=rb;function nb(e){if(e.length===0)throw new Error("Array must not be empty");let t=e[0],r=0;for(let i=1;i<e.length;++i)e[i]<t&&(t=e[i],r=i);return[t,r]}var ab=class extends _i{constructor(e,t){super(e);let r=e.vocab.length;this.vocab=new Array(r),this.scores=new Array(r);for(let i=0;i<r;++i)[this.vocab[i],this.scores[i]]=e.vocab[i];this.unk_token_id=e.unk_id,this.unk_token=this.vocab[e.unk_id],this.tokens_to_ids=new Map(this.vocab.map((i,n)=>[i,n])),this.bos_token=" ",this.bos_token_id=this.tokens_to_ids.get(this.bos_token),this.eos_token=t,this.eos_token_id=this.tokens_to_ids.get(this.eos_token),this.unk_token=this.vocab[this.unk_token_id],this.min_score=nb(this.scores)[0],this.unk_score=this.min_score-10,this.scores[this.unk_token_id]=this.unk_score,this.trie=new tb,this.trie.extend(this.vocab),this.fuse_unk=!0}populate_nodes(e){let t=e.chars,r=1,i=0;for(;i<t.length;){let n=!1,a=this.trie.common_prefix_search(t,i);for(let s of a){let o=this.tokens_to_ids.get(s),l=this.scores[o],d=Ky(s);e.insert(i,d,l,o),!n&&d===r&&(n=!0)}n||e.insert(i,r,this.unk_score,this.unk_token_id),i+=r}}tokenize(e){let t=new ib(e,this.bos_token_id,this.eos_token_id);return this.populate_nodes(t),t.tokens()}encode(e){let t=[];for(let r of e){let i=this.tokenize(r);t.push(...i)}return t}},mm=ab,sb=class{constructor(e=(r,i)=>r>i,t=1/0){this._heap=[],this._comparator=e,this._max_size=t}get size(){return this._heap.length}is_empty(){return this.size===0}peek(){return this._heap[0]}push(...e){return this.extend(e)}extend(e){for(let t of e)if(this.size<this._max_size)this._heap.push(t),this._sift_up();else{let r=this._smallest();this._comparator(t,this._heap[r])&&(this._heap[r]=t,this._sift_up_from(r))}return this.size}pop(){let e=this.peek(),t=this.size-1;return t>0&&this._swap(0,t),this._heap.pop(),this._sift_down(),e}replace(e){let t=this.peek();return this._heap[0]=e,this._sift_down(),t}_parent(e){return(e+1>>>1)-1}_left(e){return(e<<1)+1}_right(e){return e+1<<1}_greater(e,t){return this._comparator(this._heap[e],this._heap[t])}_swap(e,t){let r=this._heap[e];this._heap[e]=this._heap[t],this._heap[t]=r}_sift_up(){this._sift_up_from(this.size-1)}_sift_up_from(e){for(;e>0&&this._greater(e,this._parent(e));)this._swap(e,this._parent(e)),e=this._parent(e)}_sift_down(){let e=0;for(;this._left(e)<this.size&&this._greater(this._left(e),e)||this._right(e)<this.size&&this._greater(this._right(e),e);){let t=this._right(e)<this.size&&this._greater(this._right(e),this._left(e))?this._right(e):this._left(e);this._swap(e,t),e=t}}_smallest(){return 2**Math.floor(Math.log2(this.size))-1}},ob=sb,ub=class{constructor(e){this.capacity=e,this.cache=new Map}get(e){if(!this.cache.has(e))return;let t=this.cache.get(e);return this.cache.delete(e),this.cache.set(e,t),t}put(e,t){this.cache.has(e)&&this.cache.delete(e),this.cache.set(e,t),this.cache.size>this.capacity&&this.cache.delete(this.cache.keys().next().value)}clear(){this.cache.clear()}},lb=ub,db=class extends _i{constructor(e){super(e),this.tokens_to_ids=Ma(e.vocab),this.unk_token_id=this.tokens_to_ids.get(e.unk_token),this.unk_token=e.unk_token,this.vocab=new Array(this.tokens_to_ids.size);for(let[r,i]of this.tokens_to_ids)this.vocab[i]=r;let t=Array.isArray(e.merges[0]);this.merges=t?e.merges:e.merges.map(r=>r.split(" ",2)),this.bpe_ranks=new Map(this.merges.map((r,i)=>[JSON.stringify(r),i])),this.end_of_word_suffix=e.end_of_word_suffix,this.continuing_subword_suffix=e.continuing_subword_suffix??null,this.byte_fallback=this.config.byte_fallback??!1,this.byte_fallback&&(this.text_encoder=new TextEncoder),this.ignore_merges=this.config.ignore_merges??!1,this.max_length_to_cache=256,this.cache_capacity=1e4,this.cache=new lb(this.cache_capacity)}clear_cache(){this.cache.clear()}bpe(e){if(e.length===0)return[];let t=this.cache.get(e);if(t!==void 0)return t;let r=Array.from(e);this.end_of_word_suffix&&(r[r.length-1]+=this.end_of_word_suffix);let i=[];if(r.length>1){let n=new ob((o,l)=>o.score<l.score),a={token:r[0],bias:0,prev:null,next:null},s=a;for(let o=1;o<r.length;++o){let l={bias:o/r.length,token:r[o],prev:s,next:null};s.next=l,this.add_node(n,s),s=l}for(;!n.is_empty();){let o=n.pop();if(o.deleted||!o.next||o.next.deleted)continue;if(o.deleted=!0,o.next.deleted=!0,o.prev){let d={...o.prev};o.prev.deleted=!0,o.prev=d,d.prev?d.prev.next=d:a=d}let l={token:o.token+o.next.token,bias:o.bias,prev:o.prev,next:o.next.next};l.prev?(l.prev.next=l,this.add_node(n,l.prev)):a=l,l.next&&(l.next.prev=l,this.add_node(n,l))}for(let o=a;o!==null;o=o.next)i.push(o.token)}else i=r;if(this.continuing_subword_suffix)for(let n=0;n<i.length-1;++n)i[n]+=this.continuing_subword_suffix;return e.length<this.max_length_to_cache&&this.cache.put(e,i),i}add_node(e,t){let r=this.bpe_ranks.get(JSON.stringify([t.token,t.next.token]));r!==void 0&&(t.score=r+t.bias,e.push(t))}encode(e){let t=[];for(let r of e){if(this.ignore_merges&&this.tokens_to_ids.has(r)){t.push(r);continue}let i=this.bpe(r);for(let n of i)if(this.tokens_to_ids.has(n))t.push(n);else if(this.byte_fallback){let a=Array.from(this.text_encoder.encode(n)).map(s=>`<0x${s.toString(16).toUpperCase().padStart(2,"0")}>`);a.every(s=>this.tokens_to_ids.has(s))?t.push(...a):this.unk_token!=null&&t.push(this.unk_token)}else this.unk_token!=null&&t.push(this.unk_token)}return t}},gm=db,pb=class extends _i{constructor(e,t){super(e);let r=e.vocab;this.tokens_to_ids=Ma(t.target_lang?r[t.target_lang]:r),this.bos_token=t.bos_token,this.bos_token_id=this.tokens_to_ids.get(this.bos_token),this.eos_token=t.eos_token,this.eos_token_id=this.tokens_to_ids.get(this.eos_token),this.pad_token=t.pad_token,this.pad_token_id=this.tokens_to_ids.get(this.pad_token),this.unk_token=t.unk_token,this.unk_token_id=this.tokens_to_ids.get(this.unk_token),this.vocab=new Array(this.tokens_to_ids.size);for(let[i,n]of this.tokens_to_ids)this.vocab[n]=i}encode(e){return e}},cb=pb;function hb(e,t){switch(e.type){case"WordPiece":return new hm(e);case"Unigram":return new mm(e,t.eos_token);case"BPE":return new gm(e);default:if(e.vocab)return Array.isArray(e.vocab)?new mm(e,t.eos_token):Object.hasOwn(e,"continuing_subword_prefix")&&Object.hasOwn(e,"unk_token")?Object.hasOwn(e,"merges")?new gm(e):new hm(e):new cb(e,{target_lang:t.target_lang,bos_token:t.bos_token,eos_token:t.eos_token,pad_token:t.pad_token,unk_token:t.unk_token});throw new Error(`Unknown TokenizerModel type: ${e?.type}`)}}var fb=hb,mb=class extends Sr{constructor(e){super(),this.config=e}_call(e,...t){return this.post_process(e,...t)}},Tr=mb,gb=class extends Tr{post_process(e,t=null,r=!0){let i=t===null?this.config.single:this.config.pair,n=[],a=[];for(let s of i)"SpecialToken"in s?r&&(n.push(s.SpecialToken.id),a.push(s.SpecialToken.type_id)):"Sequence"in s&&(s.Sequence.id==="A"?(n=Ze(n,e),a=Ze(a,new Array(e.length).fill(s.Sequence.type_id))):s.Sequence.id==="B"&&(n=Ze(n,t),a=Ze(a,new Array(t.length).fill(s.Sequence.type_id))));return{tokens:n,token_type_ids:a}}},_b=gb,yb=class extends Tr{post_process(e,t=null){return{tokens:e,tokens_pair:t}}},wb=yb,bb=class extends Tr{constructor(e){super(e),this.sep=e.sep,this.cls=e.cls}post_process(e,t=null,r=!0){r&&(e=Ze([this.cls[0]],e,[this.sep[0]]));let i=new Array(e.length).fill(0);if(t){let n=[],a=r?[this.sep[0]]:[];e=Ze(e,n,t,a),i=Ze(i,new Array(t.length+n.length+a.length).fill(1))}return{tokens:e,token_type_ids:i}}},$b=bb,vb=class extends Tr{constructor(e){super(e),this.sep=e.sep,this.cls=e.cls}post_process(e,t,r=!0){r&&(e=Ze([this.cls[0]],e,[this.sep[0]]));let i=new Array(e.length).fill(0);if(t){let n=r?[this.sep[0]]:[],a=r?[this.sep[0]]:[];e=Ze(e,n,t,a),i=Ze(i,new Array(t.length+n.length+a.length).fill(1))}return{tokens:e,token_type_ids:i}}},xb=vb,kb=class extends Tr{constructor(e){super(e),this.processors=(e.processors??[]).map(t=>Bm(t))}post_process(e,t=null,r=!0){let i={tokens:e,tokens_pair:t};for(let n of this.processors)i=n.post_process(i.tokens,i.tokens_pair,r);return i}},Sb=kb;function Tb(e){if(e===null)return null;switch(e.type){case"TemplateProcessing":return new _b(e);case"ByteLevel":return new wb(e);case"BertProcessing":return new $b(e);case"RobertaProcessing":return new xb(e);case"Sequence":return new Sb(e);default:throw new Error(`Unknown PostProcessor type: ${e.type}`)}}var Bm=Tb,Eb=class extends Sr{constructor(e){super(),this.config=e,this.added_tokens=[],this.end_of_word_suffix=null,this.trim_offsets="trim_offsets"in e?e.trim_offsets:!1}_call(e){return this.decode(e)}decode(e){return this.decode_chain(e).join("")}},nt=Eb,Ib=class extends nt{constructor(e){super(e),this.byte_decoder=Iw,this.text_decoder=new TextDecoder("utf-8",{fatal:!1,ignoreBOM:!0}),this.end_of_word_suffix=null}convert_tokens_to_string(e){let t=e.join(""),r=new Uint8Array([...t].map(i=>this.byte_decoder[i]));return this.text_decoder.decode(r)}decode_chain(e){let t=[],r=[];for(let i of e)this.added_tokens.find(n=>n.content===i)!==void 0?(r.length>0&&(t.push(this.convert_tokens_to_string(r)),r=[]),t.push(i)):r.push(i);return r.length>0&&t.push(this.convert_tokens_to_string(r)),t}},zb=Ib,Cb=class extends nt{constructor(e){super(e),this.cleanup=e.cleanup}decode_chain(e){return e.map((t,r)=>{if(r!==0){let i=this.config.prefix;i&&t.startsWith(i)?t=t.replace(i,""):t=" "+t}return this.cleanup&&(t=Ba(t)),t})}},Ab=Cb,Ob=class extends nt{constructor(e){super(e),this.replacement=e.replacement??"\u2581"}decode_chain(e){let t=[];for(let r=0;r<e.length;++r){let i=e[r].replaceAll(this.replacement," ");r==0&&i.startsWith(" ")&&(i=i.substring(1)),t.push(i)}return t}},Rb=Ob,Bb=class extends nt{constructor(e){super(e),this.suffix=e.suffix??""}decode_chain(e){return e.map((t,r)=>t.replaceAll(this.suffix,r===e.length-1?"":" "))}},Nb=Bb,Mb=class extends nt{constructor(e){super(e),this.pad_token=e.pad_token??"",this.word_delimiter_token=e.word_delimiter_token??"",this.cleanup=e.cleanup}convert_tokens_to_string(e){if(e.length===0)return"";let t=[e[0]];for(let n=1;n<e.length;++n)e[n]!==t.at(-1)&&t.push(e[n]);let i=t.filter(n=>n!==this.pad_token).join("");return this.cleanup&&(i=Ba(i).replaceAll(this.word_delimiter_token," ").trim()),i}decode_chain(e){return[this.convert_tokens_to_string(e)]}},Db=Mb,Pb=class extends nt{constructor(e){super(e),this.decoders=(e.decoders??[]).map(t=>Nm(t))}decode_chain(e){return this.decoders.reduce((t,r)=>r.decode_chain(t),e)}},Ub=Pb,Lb=class extends nt{constructor(e){super(e),this.pattern=mi(this.config.pattern)}decode_chain(e){let t=this.config.content??"",r=this.pattern;return r===null?e:e.map(i=>i.replaceAll(r,t))}},qb=Lb,Wb=class extends nt{decode_chain(e){return[e.join("")]}},Vb=Wb,Fb=class extends nt{constructor(e){super(e),this.content=e.content??"",this.start=e.start??0,this.stop=e.stop??0}decode_chain(e){return e.map(t=>{let r=0;for(let n=0;n<this.start&&t[n]===this.content;++n){r=n+1;continue}let i=t.length;for(let n=0;n<this.stop;++n){let a=t.length-n-1;if(t[a]===this.content){i=a;continue}else break}return t.slice(r,i)})}},Gb=Fb,Hb=class extends nt{constructor(e){super(e),this.text_decoder=new TextDecoder}decode_chain(e){let t=[],r=[];for(let i of e){let n=null;if(i.length===6&&i.startsWith("<0x")&&i.endsWith(">")){let a=parseInt(i.slice(3,5),16);isNaN(a)||(n=a)}if(n!==null)r.push(n);else{if(r.length>0){let a=this.text_decoder.decode(Uint8Array.from(r));t.push(a),r=[]}t.push(i)}}if(r.length>0){let i=this.text_decoder.decode(Uint8Array.from(r));t.push(i),r=[]}return t}},jb=Hb;function Kb(e){if(e===null)return null;switch(e.type){case"ByteLevel":return new zb(e);case"WordPiece":return new Ab(e);case"Metaspace":return new Rb(e);case"BPEDecoder":return new Nb(e);case"CTC":return new Db(e);case"Sequence":return new Ub(e);case"Replace":return new qb(e);case"Fuse":return new Vb(e);case"Strip":return new Gb(e);case"ByteFallback":return new jb(e);default:throw new Error(`Unknown Decoder type: ${e.type}`)}}var Nm=Kb,Xb=class{constructor(e,t){let r=cm(e,"Tokenizer",["model","decoder","post_processor","pre_tokenizer","normalizer"]);if(r)throw new Error(r);let i=cm(t,"Config");if(i)throw new Error(i);this.tokenizer=e,this.config=t,this.normalizer=zm(this.tokenizer.normalizer),this.pre_tokenizer=Am(this.tokenizer.pre_tokenizer),this.model=fb(this.tokenizer.model,this.config),this.post_processor=Bm(this.tokenizer.post_processor),this.decoder=Nm(this.tokenizer.decoder),this.special_tokens=[],this.all_special_ids=[],this.added_tokens=[];let n=[],a=[];this.added_tokens_map=new Map;for(let s of this.tokenizer.added_tokens){let o=new Ty(s);if(this.added_tokens.push(o),this.model.tokens_to_ids.set(o.content,o.id),this.model.vocab[o.id]=o.content,o.special&&(this.special_tokens.push(o.content),this.all_special_ids.push(o.id)),this.added_tokens_map.set(o.content,o),o.normalized&&this.normalizer!==null){let l=this.normalizer(o.content);a.push(l),this.added_tokens_map.set(l,o)}else n.push(o.content)}(this.config.additional_special_tokens??[]).forEach(s=>{this.special_tokens.includes(s)||this.special_tokens.push(s)}),this.decoder&&(this.decoder.added_tokens=this.added_tokens,this.decoder.end_of_word_suffix=this.model.end_of_word_suffix),this.splitter_unnormalized=new om(n),this.splitter_normalized=new om(a),this.remove_space=this.config.remove_space,this.clean_up_tokenization_spaces=this.config.clean_up_tokenization_spaces??!0,this.do_lowercase_and_remove_accent=this.config.do_lowercase_and_remove_accent??!1}encode(e,{text_pair:t=null,add_special_tokens:r=!0,return_token_type_ids:i=null}={}){let{tokens:n,token_type_ids:a}=this.tokenize_helper(e,{text_pair:t,add_special_tokens:r}),s=n.map(l=>this.added_tokens_map.get(l)?.id??this.model.tokens_to_ids.get(l)??this.model.unk_token_id),o={ids:s,tokens:n,attention_mask:new Array(s.length).fill(1)};return i&&a&&(o.token_type_ids=a),o}decode(e,t={}){if(!Array.isArray(e)||e.length===0||!jy(e[0]))throw Error("token_ids must be a non-empty array of integers.");let r=e.map(n=>this.model.vocab[Number(n)]??this.model.unk_token);t.skip_special_tokens&&(r=r.filter(n=>!this.special_tokens.includes(n)));let i=this.decoder?this.decoder(r):r.join(" ");return this.decoder&&this.decoder.end_of_word_suffix&&(i=i.replaceAll(this.decoder.end_of_word_suffix," "),t.skip_special_tokens&&(i=i.trim())),(t.clean_up_tokenization_spaces??this.clean_up_tokenization_spaces)&&(i=Ba(i)),i}tokenize(e,{text_pair:t=null,add_special_tokens:r=!1}={}){return this.tokenize_helper(e,{text_pair:t,add_special_tokens:r}).tokens}encode_text(e){if(e===null)return null;let t=this.splitter_unnormalized.split(e);return t.forEach((r,i)=>{let n=this.added_tokens_map.get(r);n&&(n.lstrip&&i>0&&(t[i-1]=t[i-1].trimEnd()),n.rstrip&&i<t.length-1&&(t[i+1]=t[i+1].trimStart()))}),t.flatMap((r,i)=>{if(r.length===0)return[];if(this.added_tokens_map.has(r))return[r];if(this.remove_space===!0&&(r=r.trim().split(/\s+/).join(" ")),this.do_lowercase_and_remove_accent&&(r=Xy(r)),this.normalizer!==null&&(r=this.normalizer(r)),r.length===0)return[];let n=this.splitter_normalized.split(r);return n.forEach((a,s)=>{let o=this.added_tokens_map.get(a);o&&(o.lstrip&&s>0&&(n[s-1]=n[s-1].trimEnd()),o.rstrip&&s<n.length-1&&(n[s+1]=n[s+1].trimStart()))}),n.flatMap(a=>{if(a.length===0)return[];if(this.added_tokens_map.has(a))return[a];let s=this.pre_tokenizer!==null?this.pre_tokenizer(a,{section_index:i}):[a];return this.model(s)})})}tokenize_helper(e,{text_pair:t=null,add_special_tokens:r=!0}){let i=this.encode_text(e),n=this.encode_text(t||null);return this.post_processor?this.post_processor(i,n,r):{tokens:Ze(i??[],n??[])}}token_to_id(e){return this.model.tokens_to_ids.get(e)}id_to_token(e){return this.model.vocab[e]}get_added_tokens_decoder(){let e=new Map;for(let t of this.added_tokens)e.set(t.id,t);return e}get_vocab(e=!0){let t=new Map;for(let r=0;r<this.model.vocab.length;++r){let i=this.model.vocab[r];(e||!this.added_tokens_map.has(i))&&t.set(i,r)}return t}},Mm=Xb;var Pm={max_len:512,head_max_len:192,temperature:[1.6369030475616455,1.2514300346374512,1.983399510383606],temperature_by_options:{"choice:3-5":1.7601518630981445,"choice:6-10":1.0000158548355103,"score:3-5":1.2514300346374512,"noul:2":1.983399510383606,"choice:11+":.10058280825614929,"choice:2":1.9063563346862793}},Zb={choice:0,score:1,noul:2},Qb=["choice","score","noul"];function Um(e,t){let r=(a,s)=>{let o=t[a];return typeof o=="string"?o:typeof o?.content=="string"?o.content:s},i=a=>{let s=e(a);if(s===void 0)throw new Error(`tokenizer has no ${a}`);return s},n=r("mask_token","[MASK]");return{cls:i(r("cls_token","[CLS]")),sep:i(r("sep_token","[SEP]")),mask:i(n),pad:i(r("pad_token","[PAD]")),maskTok:n}}function Yb(e){let t=e.type==="choice"&&Array.isArray(e.criteria)?Object.fromEntries(e.criteria.map(r=>[r,null])):e.criteria;return{t:e.type,ins:e.instructions,crit:t}}function Lm(e){if(e.t==="choice")return Object.entries(e.crit).map(([r,i])=>i?`${r}: ${i}`:r);if(e.t==="score")return e.crit.map((r,i)=>`level ${i}: ${r}`);let t=e.crit??{};return[`false: ${t.false||"no, the statement does not hold"}`,`true: ${t.true||"yes, the statement holds"}`]}function Da(e){return e==null?"null":typeof e=="string"?JSON.stringify(e):typeof e=="number"?Number.isInteger(e)?String(e):JSON.stringify(e):typeof e=="boolean"?e?"true":"false":Array.isArray(e)?`[${e.map(Da).join(", ")}]`:`{${Object.entries(e).map(([t,r])=>`${JSON.stringify(t)}: ${Da(r)}`).join(", ")}}`}var Jb=e=>e<=2?"2":e<=5?"3-5":e<=10?"6-10":"11+";function e$(e){let t=Math.max(...e),r=e.map(n=>Math.exp(n-t)),i=r.reduce((n,a)=>n+a,0);return r.map(n=>n/i)}function Dm(e){return e.length<2?1:1-e.reduce((r,i)=>r-i*Math.log(Math.max(i,1e-12)),0)/Math.log(e.length)}function t$(e,t,r,i,n,a){let s=b=>b.split(t.maskTok).join(" "),o=e(`${i.t} question: ${s(i.ins)}`),l=Lm(i).map(b=>[t.mask,...e(` ${s(b)}`).slice(0,48)]),d=b=>b.reduce((k,$)=>k+$.length,0),h=a-d(l);if(h<16){let b=Math.max(4,Math.floor((a-16)/Math.max(1,l.length)));l=l.map(k=>k.slice(0,b)),h=a-d(l)}o=o.slice(0,Math.max(8,h));let c=[t.cls,...o,t.sep],g=[];for(let b of l)g.push(c.length),c.push(...b);c.push(t.sep);let y=Math.max(0,n-c.length-1),_=typeof r=="string"?r:Da(r);return c.push(...e(s(_)).slice(0,y),t.sep),{ids:c.slice(0,n),markers:g.filter(b=>b<n)}}async function qm(e,t,r,i,n,a){let s=Object.keys(a);if(!s.length)throw new Error("at least one question is required");let o=s.map(k=>{let $=Yb(a[k]),w=t$(t,r,n,$,i.max_len,i.head_max_len);if(w.markers.length!==Lm($).length)throw new Error(`question ${k}: options do not fit in ${i.head_max_len} tokens`);return{q:$,...w,qtype:Zb[$.t]}}),l=o.length,d=Math.max(...o.map(k=>k.ids.length)),h=Math.max(...o.map(k=>k.markers.length)),c={n:l,L:d,K:h,inputIds:new BigInt64Array(l*d).fill(BigInt(r.pad)),attentionMask:new BigInt64Array(l*d),markerPos:new BigInt64Array(l*h),markerMask:new Uint8Array(l*h),qtype:new BigInt64Array(l)},g=0;o.forEach((k,$)=>{k.ids.forEach((w,T)=>{c.inputIds[$*d+T]=BigInt(w),c.attentionMask[$*d+T]=1n}),g+=k.ids.length,k.markers.forEach((w,T)=>{c.markerPos[$*h+T]=BigInt(w),c.markerMask[$*h+T]=1}),c.qtype[$]=BigInt(k.qtype)});let y=await e(c),_=k=>Math.round(k*1e4)/1e4,b={};return o.forEach((k,$)=>{let w=k.markers.length,T=i.temperature_by_options[`${Qb[k.qtype]}:${Jb(w)}`]??i.temperature[k.qtype]??1,S=e$(Array.from(y.subarray($*h,$*h+w),z=>z/T)),I=s[$];if(k.q.t==="choice"){let z=Object.keys(k.q.crit),C=S.indexOf(Math.max(...S));b[I]={type:"choice",choice:z[C],probabilities:Object.fromEntries(z.map((x,M)=>[x,_(S[M]??0)])),confidence:_(Dm(S))}}else k.q.t==="score"?b[I]={type:"score",score:_(S.reduce((z,C,x)=>z+x*C,0)),confidence:_(Dm(S))}:b[I]={type:"noul",noul:_(S[1]??0)}}),{answers:b,inputTokens:g}}var Vm="https://huggingface.co/onnx-community/laya-ONNX/resolve/42e2a6e3b3708c8ff5f61f4aa75c314b1449199b/",Er={model:"onnx/model_fp16.onnx",weights:"onnx/model_fp16.onnx_data",tokenizer:"tokenizer.json",tokenizerConfig:"tokenizer_config.json"},Fm="jev-trader-laya-en-fp16-v1",Ht=e=>self.postMessage(e),Ua,Wm;async function Pa(e,t){let r=Vm+e,i;try{i=await caches.open(Fm);let g=await i.match(r);if(g)return new Uint8Array(await g.arrayBuffer())}catch{i=void 0}let n=await fetch(r);if(!n.ok||!n.body)throw new Error(`${e}: HTTP ${n.status}`);let a=Number(n.headers.get("content-length"))||0,s=n.body.getReader(),o=[],l=0,d=0;for(;;){let{done:g,value:y}=await s.read();if(g)break;o.push(y),l+=y.byteLength,(l-d>8e6||l===a)&&(d=l,Ht({type:"progress",loaded:l,total:a,stage:t}))}let h=new Uint8Array(l),c=0;for(let g of o)h.set(g,c),c+=g.byteLength;try{await i?.put(r,new Response(h,{headers:{"content-type":"application/octet-stream"}}))}catch{}return h}async function r$(){let e=Date.now(),t=!1;try{t=!!await(await caches.open(Fm)).match(Vm+Er.weights)}catch{t=!1}let r=async b=>new TextDecoder().decode(await Pa(b,b)),[i,n]=await Promise.all([r(Er.tokenizer),r(Er.tokenizerConfig)]),a=JSON.parse(n),s=new Mm(JSON.parse(i),a),o=Um(b=>s.token_to_id(b)??void 0,a);t&&Ht({type:"progress",loaded:0,total:0,stage:"cache"});let l=await Pa(Er.model,"graph"),d=await Pa(Er.weights,"model");Ht({type:"progress",loaded:d.byteLength,total:d.byteLength,stage:"starting model"}),ge.wasm.wasmPaths="https://cdn.jsdelivr.net/npm/onnxruntime-web@1.30.0/dist/",ge.wasm.numThreads=self.crossOriginIsolated?Math.min(8,navigator.hardwareConcurrency||4):1;let h=[{path:"model_fp16.onnx_data",data:d}],c,g="wasm";if((await navigator.gpu?.requestAdapter().catch(()=>null))?.features.has("shader-f16"))try{c=await xr.create(l,{executionProviders:["webgpu"],graphOptimizationLevel:"all",externalData:h}),g="webgpu"}catch{c=void 0}c??=await xr.create(l,{executionProviders:["wasm"],graphOptimizationLevel:"all",externalData:h}),g==="wasm"&&(g=`wasm\xD7${ge.wasm.numThreads}`),Ua={session:c,tokenizer:s,ids:o,config:Pm},Ht({type:"ready",cached:t,loadMs:Date.now()-e,backend:g})}async function i$(e,t){let r=Ua;return qm(async a=>{let o=(await r.session.run({input_ids:new Re("int64",a.inputIds,[a.n,a.L]),attention_mask:new Re("int64",a.attentionMask,[a.n,a.L]),marker_pos:new Re("int64",a.markerPos,[a.n,a.K]),marker_mask:new Re("bool",a.markerMask,[a.n,a.K]),qtype:new Re("int64",a.qtype,[a.n])})).logits?.data;if(!(o instanceof Float32Array))throw new Error("unexpected model output");return o},a=>r.tokenizer.encode(a,{add_special_tokens:!1}).ids,r.ids,r.config,e,t)}self.onmessage=async e=>{let t=e.data;if(t.type==="load"){Wm??=r$().catch(i=>{Wm=void 0,Ht({type:"failed",message:i.message})});return}let r=Date.now();try{if(!Ua)throw new Error("model not loaded");Ht({type:"result",id:t.id,answers:await i$(t.state,t.questions),ms:Date.now()-r})}catch(i){Ht({type:"error",id:t.id,message:i.message})}};
/*! Bundled license information:

onnxruntime-web/dist/ort.bundle.min.mjs:
  (*!
   * ONNX Runtime Web v1.30.0
   * Copyright (c) Microsoft Corporation. All rights reserved.
   * Licensed under the MIT License.
   *)

onnxruntime-web/dist/ort.bundle.min.mjs:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
*/
