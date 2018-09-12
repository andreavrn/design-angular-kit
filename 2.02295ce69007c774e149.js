(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+2Ap":function(t,n,e){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t}).apply(this,arguments)};Object.defineProperty(n,"__esModule",{value:!0});var i=e("xjB9"),u=e("OvQW");n.URI="Either";var o=function(){function t(t){this.value=t,this._tag="Left"}return t.prototype.map=function(t){return this},t.prototype.ap=function(t){return t.isLeft()?t:this},t.prototype.ap_=function(t){return t.ap(this)},t.prototype.chain=function(t){return this},t.prototype.bimap=function(n,e){return new t(n(this.value))},t.prototype.alt=function(t){return t},t.prototype.orElse=function(t){return t(this.value)},t.prototype.extend=function(t){return this},t.prototype.reduce=function(t,n){return t},t.prototype.fold=function(t,n){return t(this.value)},t.prototype.getOrElse=function(t){return t},t.prototype.getOrElseL=function(t){return t(this.value)},t.prototype.mapLeft=function(n){return new t(n(this.value))},t.prototype.inspect=function(){return this.toString()},t.prototype.toString=function(){return"left("+u.toString(this.value)+")"},t.prototype.isLeft=function(){return!0},t.prototype.isRight=function(){return!1},t.prototype.swap=function(){return new a(this.value)},t.prototype.filterOrElse=function(t,n){return this},t.prototype.filterOrElseL=function(t,n){return this},t.prototype.refineOrElse=function(t,n){return this},t.prototype.refineOrElseL=function(t,n){return this},t}();n.Left=o;var a=function(){function t(t){this.value=t,this._tag="Right"}return t.prototype.map=function(n){return new t(n(this.value))},t.prototype.ap=function(t){return t.isRight()?this.map(t.value):n.left(t.value)},t.prototype.ap_=function(t){return t.ap(this)},t.prototype.chain=function(t){return t(this.value)},t.prototype.bimap=function(n,e){return new t(e(this.value))},t.prototype.alt=function(t){return this},t.prototype.orElse=function(t){return this},t.prototype.extend=function(n){return new t(n(this))},t.prototype.reduce=function(t,n){return n(t,this.value)},t.prototype.fold=function(t,n){return n(this.value)},t.prototype.getOrElse=function(t){return this.value},t.prototype.getOrElseL=function(t){return this.value},t.prototype.mapLeft=function(n){return new t(this.value)},t.prototype.inspect=function(){return this.toString()},t.prototype.toString=function(){return"right("+u.toString(this.value)+")"},t.prototype.isLeft=function(){return!1},t.prototype.isRight=function(){return!0},t.prototype.swap=function(){return new o(this.value)},t.prototype.filterOrElse=function(t,e){return t(this.value)?this:n.left(e)},t.prototype.filterOrElseL=function(t,e){return t(this.value)?this:n.left(e(this.value))},t.prototype.refineOrElse=function(t,e){return t(this.value)?this:n.left(e)},t.prototype.refineOrElseL=function(t,e){return t(this.value)?this:n.left(e(this.value))},t}();n.Right=a,n.getSetoid=function(t,n){return{equals:function(e,r){return e.isLeft()?r.isLeft()&&t.equals(e.value,r.value):r.isRight()&&n.equals(e.value,r.value)}}},n.getSemigroup=function(t){return{concat:function(e,r){return r.isLeft()?e:e.isLeft()?r:n.right(t.concat(e.value,r.value))}}},n.getApplySemigroup=function(t){return{concat:function(e,r){return e.isLeft()?e:r.isLeft()?r:n.right(t.concat(e.value,r.value))}}},n.getApplyMonoid=function(t){return r({},n.getApplySemigroup(t),{empty:n.right(t.empty)})};var c=function(t,n){return t.map(n)},f=function(t){return new a(t)},s=function(t,n,e){return t.reduce(n,e)},l=function(t){return function(e,r){return e.isLeft()?t.of(n.left(e.value)):t.map(r(e.value),f)}};function p(t){return{URI:n.URI,_L:u.phantom,compact:function(e){return e.isLeft()?e:e.value.isNone()?n.left(t.empty):n.right(e.value.value)},separate:function(e){return e.isLeft()?{left:e,right:e}:e.value.isLeft()?{left:n.right(e.value.value),right:n.left(t.empty)}:{left:n.left(t.empty),right:n.right(e.value.value)}}}}function y(t){var e=p(t);return r({},e,{map:c,partitionMap:function(e,r){if(e.isLeft())return{left:e,right:e};var i=r(e.value);return i.isLeft()?{left:n.right(i.value),right:n.left(t.empty)}:{left:n.left(t.empty),right:n.right(i.value)}},filterMap:function(e,r){if(e.isLeft())return e;var i=r(e.value);return i.isSome()?n.right(i.value):n.left(t.empty)},partition:function(e,r){return e.isLeft()?{left:e,right:e}:r(e.value)?{left:n.left(t.empty),right:n.right(e.value)}:{left:n.right(e.value),right:n.left(t.empty)}},filter:function(n,e){return n.filterOrElse(e,t.empty)}})}n.left=function(t){return new o(t)},n.right=f,n.fromPredicate=function(t,e){return function(r){return t(r)?n.right(r):n.left(e(r))}},n.fromRefinement=function(t,e){return function(r){return t(r)?n.right(r):n.left(e(r))}},n.fromOption=function(t){return function(e){return e.isNone()?n.left(t):n.right(e.value)}},n.fromOptionL=function(t){return function(e){return e.isNone()?n.left(t()):n.right(e.value)}},n.fromNullable=function(t){return function(e){return null==e?n.left(t):n.right(e)}},n.toError=function(t){return t instanceof Error?t:new Error(String(t))},n.tryCatch=function(t,e){void 0===e&&(e=n.toError);try{return n.right(t())}catch(t){return n.left(e(t))}},n.fromValidation=function(t){return t.isFailure()?n.left(t.value):n.right(t.value)},n.isLeft=function(t){return t.isLeft()},n.isRight=function(t){return t.isRight()},n.getCompactable=p,n.getFilterable=y,n.getWitherable=function(t){var n=y(t);return r({},n,{traverse:l,reduce:s,wither:function(t){var e=l(t);return function(r,i){return t.map(e(r,i),n.compact)}},wilt:function(t){var e=l(t);return function(r,i){return t.map(e(r,i),n.separate)}}})},n.either={URI:n.URI,map:c,of:f,ap:function(t,n){return n.ap(t)},chain:function(t,n){return t.chain(n)},reduce:s,traverse:l,bimap:function(t,n,e){return t.bimap(n,e)},alt:function(t,n){return t.alt(n)},extend:function(t,n){return t.extend(n)},chainRec:function(t,e){return i.tailRec(function(t){if(t.isLeft())return n.right(n.left(t.value));var r=t.value;return r.isLeft()?n.left(e(r.value)):n.right(n.right(r.value))},e(t))}}},"7TIR":function(t,n,e){"use strict";e.d(n,"b",function(){return r}),e.d(n,"a",function(){return i});var r=e("s7rJ").keyof({primary:null,secondary:null,danger:null,warning:null,info:null,success:null,light:null,dark:null}),i={PRIMARY:"primary",SECONDARY:"secondary",DANGER:"danger",WARNING:"warning",INFO:"info",SUCCESS:"success",LIGHT:"light",DARK:"dark"}},OvQW:function(t,n,e){"use strict";function r(t,e,i){return function(u){var o=n.concat(i,[u]);return 0===e?t.apply(this,o):r(t,e-1,o)}}Object.defineProperty(n,"__esModule",{value:!0}),n.identity=function(t){return t},n.unsafeCoerce=n.identity,n.not=function(t){return function(n){return!t(n)}},n.or=function(t,n){return function(e){return t(e)||n(e)}},n.and=function(t,n){return function(e){return t(e)&&n(e)}},n.constant=function(t){return function(){return t}},n.constTrue=function(){return!0},n.constFalse=function(){return!1},n.constNull=function(){return null},n.constUndefined=function(){},n.flip=function(t){return function(n){return function(e){return t(e)(n)}}},n.on=function(t){return function(n){return function(e,r){return t(n(e),n(r))}}},n.compose=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=t.length-1;return function(n){for(var r=n,i=e;i>-1;i--)r=t[i].call(this,r);return r}},n.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=t.length-1;return function(n){for(var r=n,i=0;i<=e;i++)r=t[i].call(this,r);return r}},n.concat=function(t,n){for(var e=t.length,r=n.length,i=Array(e+r),u=0;u<e;u++)i[u]=t[u];for(u=0;u<r;u++)i[u+e]=n[u];return i},n.curried=r,n.curry=function(t){return r(t,t.length-1,[])},n.toString=function(t){if("string"==typeof t)return JSON.stringify(t);if(t instanceof Date)return"new Date('"+t.toISOString()+"')";if(Array.isArray(t))return"["+t.map(n.toString).join(", ")+"]";if("function"==typeof t)return(e=t).displayName||e.name||"<function"+e.length+">";var e;if(null==t)return String(t);if(t.toString!==Object.prototype.toString)return t.toString();try{return JSON.stringify(t,null,2)}catch(n){return String(t)}},n.tuple=function(t,n){return[t,n]},n.tupleCurried=function(t){return function(n){return[t,n]}},n.apply=function(t){return function(n){return t(n)}},n.applyFlipped=function(t){return function(n){return n(t)}},n.phantom=void 0,n.constIdentity=function(){return n.identity}},s7rJ:function(t,n,e){"use strict";var r=e("mrSG").__extends,i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t}).apply(this,arguments)};Object.defineProperty(n,"__esModule",{value:!0});var u=e("+2Ap"),o=function(){function t(t,n,e,r){this.name=t,this.is=n,this.validate=e,this.encode=r}return t.prototype.pipe=function(e,r){var i=this;return new t(r||"pipe("+this.name+", "+e.name+")",e.is,function(t,n){var r=i.validate(t,n);return r.isLeft()?r:e.validate(r.value,n)},this.encode===n.identity&&e.encode===n.identity?n.identity:function(t){return i.encode(e.encode(t))})},t.prototype.asDecoder=function(){return this},t.prototype.asEncoder=function(){return this},t.prototype.decode=function(t){return this.validate(t,n.getDefaultContext(this))},t}();n.Type=o,n.identity=function(t){return t},n.getFunctionName=function(t){return t.displayName||t.name||"<function"+t.length+">"},n.getContextEntry=function(t,n){return{key:t,type:n}},n.getValidationError=function(t,n){return{value:t,context:n}},n.getDefaultContext=function(t){return[{key:"",type:t}]},n.appendContext=function(t,n,e){for(var r=t.length,i=Array(r+1),u=0;u<r;u++)i[u]=t[u];return i[r]={key:n,type:e},i},n.failures=function(t){return new u.Left(t)},n.failure=function(t,e){return n.failures([n.getValidationError(t,e)])},n.success=function(t){return new u.Right(t)};var a=function(t,n){for(var e=n.length,r=0;r<e;r++)t.push(n[r])},c=function(t){function e(){var e=t.call(this,"null",function(t){return null===t},function(t,r){return e.is(t)?n.success(t):n.failure(t,r)},n.identity)||this;return e._tag="NullType",e}return r(e,t),e}(o);n.NullType=c,n.nullType=new c,n.null=n.nullType;var f=function(t){function e(){var e=t.call(this,"undefined",function(t){return void 0===t},function(t,r){return e.is(t)?n.success(t):n.failure(t,r)},n.identity)||this;return e._tag="UndefinedType",e}return r(e,t),e}(o);n.UndefinedType=f;var s=new f;n.undefined=s;var l=function(t){function e(){var e=t.call(this,"void",s.is,s.validate,n.identity)||this;return e._tag="VoidType",e}return r(e,t),e}(o);n.VoidType=l,n.voidType=new l,n.void=n.voidType;var p=function(t){function e(){var e=t.call(this,"any",function(t){return!0},n.success,n.identity)||this;return e._tag="AnyType",e}return r(e,t),e}(o);n.AnyType=p,n.any=new p;var y=function(t){function e(){var e=t.call(this,"never",function(t){return!1},function(t,e){return n.failure(t,e)},function(){throw new Error("cannot encode never")})||this;return e._tag="NeverType",e}return r(e,t),e}(o);n.NeverType=y,n.never=new y;var v=function(t){function e(){var e=t.call(this,"string",function(t){return"string"==typeof t},function(t,r){return e.is(t)?n.success(t):n.failure(t,r)},n.identity)||this;return e._tag="StringType",e}return r(e,t),e}(o);n.StringType=v,n.string=new v;var h=function(t){function e(){var e=t.call(this,"number",function(t){return"number"==typeof t},function(t,r){return e.is(t)?n.success(t):n.failure(t,r)},n.identity)||this;return e._tag="NumberType",e}return r(e,t),e}(o);n.NumberType=h,n.number=new h;var d=function(t){function e(){var e=t.call(this,"boolean",function(t){return"boolean"==typeof t},function(t,r){return e.is(t)?n.success(t):n.failure(t,r)},n.identity)||this;return e._tag="BooleanType",e}return r(e,t),e}(o);n.BooleanType=d,n.boolean=new d;var g=function(t){function e(){var e=t.call(this,"Array",Array.isArray,function(t,r){return e.is(t)?n.success(t):n.failure(t,r)},n.identity)||this;return e._tag="AnyArrayType",e}return r(e,t),e}(o);n.AnyArrayType=g;var m=new g;n.Array=m;var T=function(t){function e(){var e=t.call(this,"Dictionary",function(t){return null!==t&&"object"==typeof t},function(t,r){return e.is(t)?n.success(t):n.failure(t,r)},n.identity)||this;return e._tag="AnyDictionaryType",e}return r(e,t),e}(o);n.AnyDictionaryType=T,n.Dictionary=new T;var w=function(t){function e(){var e=t.call(this,"object",n.Dictionary.is,n.Dictionary.validate,n.identity)||this;return e._tag="ObjectType",e}return r(e,t),e}(o);n.ObjectType=w,n.object=new w;var O=function(t){function e(){var e=t.call(this,"Function",function(t){return"function"==typeof t},function(t,r){return e.is(t)?n.success(t):n.failure(t,r)},n.identity)||this;return e._tag="FunctionType",e}return r(e,t),e}(o);n.FunctionType=O,n.Function=new O;var L=function(t){function n(n,e,r,i,u,o){var a=t.call(this,n,e,r,i)||this;return a.type=u,a.predicate=o,a._tag="RefinementType",a}return r(n,t),n}(o);n.RefinementType=L,n.refinement=function(t,e,r){return void 0===r&&(r="("+t.name+" | "+n.getFunctionName(e)+")"),new L(r,function(n){return t.is(n)&&e(n)},function(r,i){var u=t.validate(r,i);if(u.isLeft())return u;var o=u.value;return e(o)?n.success(o):n.failure(o,i)},t.encode,t,e)},n.Integer=n.refinement(n.number,function(t){return t%1==0},"Integer");var _=function(t){function n(n,e,r,i,u){var o=t.call(this,n,e,r,i)||this;return o.value=u,o._tag="LiteralType",o}return r(n,t),n}(o);n.LiteralType=_,n.literal=function(t,e){void 0===e&&(e=JSON.stringify(t));var r=function(n){return n===t};return new _(e,r,function(e,i){return r(e)?n.success(t):n.failure(e,i)},n.identity,t)};var b=function(t){function n(n,e,r,i,u){var o=t.call(this,n,e,r,i)||this;return o.keys=u,o._tag="KeyofType",o}return r(n,t),n}(o);n.KeyofType=b,n.keyof=function(t,e){void 0===e&&(e="(keyof "+JSON.stringify(Object.keys(t))+")");var r=function(e){return n.string.is(e)&&t.hasOwnProperty(e)};return new b(e,r,function(t,e){return r(t)?n.success(t):n.failure(t,e)},n.identity,t)};var S=function(t){function n(n,e,r,i,u){var o=t.call(this,n,e,r,i)||this;return o.runDefinition=u,o._tag="RecursiveType",o}return r(n,t),Object.defineProperty(n.prototype,"type",{get:function(){return this.runDefinition()},enumerable:!0,configurable:!0}),n}(o);n.RecursiveType=S,n.recursion=function(t,n){var e,r=function(){return e||(e=n(i)),e},i=new S(t,function(t){return r().is(t)},function(t,n){return r().validate(t,n)},function(t){return r().encode(t)},r);return i};var R=function(t){function n(n,e,r,i,u){var o=t.call(this,n,e,r,i)||this;return o.type=u,o._tag="ArrayType",o}return r(n,t),n}(o);n.ArrayType=R,n.array=function(t,e){return void 0===e&&(e="Array<"+t.name+">"),new R(e,function(n){return m.is(n)&&n.every(t.is)},function(e,r){var i=m.validate(e,r);if(i.isLeft())return i;for(var u=i.value,o=u.length,c=u,f=[],s=0;s<o;s++){var l=u[s],p=t.validate(l,n.appendContext(r,String(s),t));if(p.isLeft())a(f,p.value);else{var y=p.value;y!==l&&(c===u&&(c=u.slice()),c[s]=y)}}return f.length?n.failures(f):n.success(c)},t.encode===n.identity?n.identity:function(n){return n.map(t.encode)},t)};var j=function(t){function n(n,e,r,i,u){var o=t.call(this,n,e,r,i)||this;return o.props=u,o._tag="InterfaceType",o}return r(n,t),n}(o);n.InterfaceType=j;var A=function(t){return"{ "+Object.keys(t).map(function(n){return n+": "+t[n].name}).join(", ")+" }"},E=function(t,e){for(var r=0;r<e;r++)if(t[r].encode!==n.identity)return!1;return!0};n.type=function(t,e){void 0===e&&(e=A(t));var r=Object.keys(t),u=r.map(function(n){return t[n]}),o=r.length;return new j(e,function(t){if(!n.Dictionary.is(t))return!1;for(var e=0;e<o;e++)if(!u[e].is(t[r[e]]))return!1;return!0},function(t,e){var c=n.Dictionary.validate(t,e);if(c.isLeft())return c;for(var f=c.value,s=f,l=[],p=0;p<o;p++){var y=r[p],v=f[y],h=u[p],d=h.validate(v,n.appendContext(e,y,h));if(d.isLeft())a(l,d.value);else{var g=d.value;g!==v&&(s===f&&(s=i({},f)),s[y]=g)}}return l.length?n.failures(l):n.success(s)},E(u,o)?n.identity:function(t){for(var e=i({},t),a=0;a<o;a++){var c=r[a],f=u[a].encode;f!==n.identity&&(e[c]=f(t[c]))}return e},t)},n.interface=n.type;var x=function(t){function n(n,e,r,i,u){var o=t.call(this,n,e,r,i)||this;return o.props=u,o._tag="PartialType",o}return r(n,t),n}(o);n.PartialType=x,n.partial=function(t,e){void 0===e&&(e="PartialType<"+A(t)+">");for(var r=Object.keys(t),u=r.map(function(n){return t[n]}),o=r.length,a={},c=0;c<o;c++)a[r[c]]=n.union([u[c],s]);var f=n.type(a);return new x(e,f.is,f.validate,E(u,o)?n.identity:function(t){for(var n=i({},t),e=0;e<o;e++){var a=r[e],c=t[a];void 0!==c&&(n[a]=u[e].encode(c))}return n},t)};var N=function(t){function n(n,e,r,i,u,o){var a=t.call(this,n,e,r,i)||this;return a.domain=u,a.codomain=o,a._tag="DictionaryType",a}return r(n,t),n}(o);n.DictionaryType=N,n.dictionary=function(t,e,r){return void 0===r&&(r="{ [K in "+t.name+"]: "+e.name+" }"),new N(r,function(r){return n.Dictionary.is(r)&&Object.keys(r).every(function(n){return t.is(n)&&e.is(r[n])})},function(r,i){var u=n.Dictionary.validate(r,i);if(u.isLeft())return u;for(var o=u.value,c={},f=[],s=Object.keys(o),l=s.length,p=!1,y=0;y<l;y++){var v=s[y],h=o[v],d=t.validate(v,n.appendContext(i,v,t)),g=e.validate(h,n.appendContext(i,v,e));if(d.isLeft())a(f,d.value);else{var m=d.value;p=p||m!==v,v=m}if(g.isLeft())a(f,g.value);else{var T=g.value;p=p||T!==h,c[v]=T}}return f.length?n.failures(f):n.success(p?c:o)},t.encode===n.identity&&e.encode===n.identity?n.identity:function(n){for(var r={},i=Object.keys(n),u=i.length,o=0;o<u;o++){var a=i[o];r[String(t.encode(a))]=e.encode(n[a])}return r},t,e)};var D=function(t){function n(n,e,r,i,u){var o=t.call(this,n,e,r,i)||this;return o.types=u,o._tag="UnionType",o}return r(n,t),n}(o);n.UnionType=D,n.union=function(t,e){void 0===e&&(e="("+t.map(function(t){return t.name}).join(" | ")+")");var r=t.length;return new D(e,function(n){return t.some(function(t){return t.is(n)})},function(e,i){for(var u=[],o=0;o<r;o++){var c=t[o],f=c.validate(e,n.appendContext(i,String(o),c));if(f.isRight())return f;a(u,f.value)}return n.failures(u)},E(t,r)?n.identity:function(n){for(var e=0;e<r-1;e++){var i=t[e];if(i.is(n))return i.encode(n)}return t[e].encode(n)},t)};var I=function(t){function n(n,e,r,i,u){var o=t.call(this,n,e,r,i)||this;return o.types=u,o._tag="IntersectionType",o}return r(n,t),n}(o);n.IntersectionType=I,n.intersection=function(t,e){void 0===e&&(e="("+t.map(function(t){return t.name}).join(" & ")+")");var r=t.length;return new I(e,function(n){return t.every(function(t){return t.is(n)})},function(e,i){for(var u=e,o=[],c=0;c<r;c++){var f=t[c].validate(u,i);f.isLeft()?a(o,f.value):u=f.value}return o.length?n.failures(o):n.success(u)},E(t,r)?n.identity:function(n){for(var e=n,i=0;i<r;i++)e=t[i].encode(e);return e},t)};var C=function(t){function n(n,e,r,i,u){var o=t.call(this,n,e,r,i)||this;return o.types=u,o._tag="TupleType",o}return r(n,t),n}(o);n.TupleType=C,n.tuple=function(t,e){void 0===e&&(e="["+t.map(function(t){return t.name}).join(", ")+"]");var r=t.length;return new C(e,function(n){return m.is(n)&&n.length===r&&t.every(function(t,e){return t.is(n[e])})},function(e,i){var u=m.validate(e,i);if(u.isLeft())return u;for(var o=u.value,c=o,f=[],s=0;s<r;s++){var l=o[s],p=t[s],y=p.validate(l,n.appendContext(i,String(s),p));if(y.isLeft())a(f,y.value);else{var v=y.value;v!==l&&(c===o&&(c=o.slice()),c[s]=v)}}return o.length>r&&f.push(n.getValidationError(o[r],n.appendContext(i,String(r),n.never))),f.length?n.failures(f):n.success(c)},E(t,r)?n.identity:function(n){return t.map(function(t,e){return t.encode(n[e])})},t)};var P=function(t){function n(n,e,r,i,u){var o=t.call(this,n,e,r,i)||this;return o.type=u,o._tag="ReadonlyType",o}return r(n,t),n}(o);n.ReadonlyType=P,n.readonly=function(t,e){return void 0===e&&(e="Readonly<"+t.name+">"),new P(e,t.is,function(n,e){return t.validate(n,e).map(function(t){return t})},t.encode===n.identity?n.identity:t.encode,t)};var k=function(t){function n(n,e,r,i,u){var o=t.call(this,n,e,r,i)||this;return o.type=u,o._tag="ReadonlyArrayType",o}return r(n,t),n}(o);n.ReadonlyArrayType=k,n.readonlyArray=function(t,e){void 0===e&&(e="ReadonlyArray<"+t.name+">");var r=n.array(t);return new k(e,r.is,function(t,n){return r.validate(t,n).map(function(t){return t})},r.encode,t)};var U=function(t){function n(n,e,r,i,u){var o=t.call(this,n,e,r,i)||this;return o.props=u,o._tag="StrictType",o}return r(n,t),n}(o);n.StrictType=U,n.strict=function(t,e){void 0===e&&(e="StrictType<"+A(t)+">");var r=M(n.type(t));return new U(e,r.is,r.validate,r.encode,t)},n.isTagged=function(t){var n=function(e){return e instanceof j||e instanceof U?e.props.hasOwnProperty(t):e instanceof I?e.types.some(n):e instanceof D?e.types.every(n):(e instanceof L||e instanceof J)&&n(e.type)};return n},n.getTagValue=function(t){var e=function(r){switch(r._tag){case"InterfaceType":case"StrictType":return r.props[t].value;case"IntersectionType":return e(function(t,e){for(var r=e.length,i=n.isTagged(t),u=0;u<r-1;u++){var o=e[u];if(i(o))return o}return e[u]}(t,r.types));case"UnionType":return e(r.types[0]);case"RefinementType":case"ExactType":case"RecursiveType":return e(r.type)}};return e};var F=function(t){function n(n,e,r,i,u,o){var a=t.call(this,n,e,r,i,u)||this;return a.tag=o,a}return r(n,t),n}(D);n.TaggedUnionType=F,n.taggedUnion=function(t,e,r){void 0===r&&(r="("+e.map(function(t){return t.name}).join(" | ")+")");for(var i=e.length,u=new Array(i),a={},c=!0,f=n.getTagValue(t),s=0;s<i;s++){var l=f(e[s]);c=c&&n.string.is(l),u[s]=l,a[String(l)]=s}var p=c?function(t){return n.string.is(t)&&a.hasOwnProperty(t)}:function(t){return-1!==u.indexOf(t)},y=c?function(t){return a[t]}:function(t){for(var n=0;n<i-1&&u[n]!==t;n++);return n},v=new o(u.map(function(t){return JSON.stringify(t)}).join(" | "),p,function(t,e){return p(t)?n.success(t):n.failure(t,e)},n.identity);return new F(r,function(r){if(!n.Dictionary.is(r))return!1;var i=r[t];return v.is(i)&&e[y(i)].is(r)},function(r,i){var u=n.Dictionary.validate(r,i);if(u.isLeft())return u;var o=u.value,a=v.validate(o[t],n.appendContext(i,t,v));if(a.isLeft())return a;var c=y(a.value),f=e[c];return f.validate(o,n.appendContext(i,String(c),f))},E(e,i)?n.identity:function(n){return e[y(n[t])].encode(n)},e,t)};var J=function(t){function n(n,e,r,i,u){var o=t.call(this,n,e,r,i)||this;return o.type=u,o._tag="ExactType",o}return r(n,t),n}(o);n.ExactType=J;var V=function(t){switch(t._tag){case"RefinementType":case"ReadonlyType":return V(t.type);case"InterfaceType":case"StrictType":case"PartialType":return t.props;case"IntersectionType":return t.types.reduce(function(t,n){return Object.assign(t,V(n))},{})}};function M(t,e){void 0===e&&(e="ExactType<"+t.name+">");var r=V(t);return new J(e,function(n){return t.is(n)&&Object.getOwnPropertyNames(n).every(function(t){return r.hasOwnProperty(t)})},function(e,i){var u=t.validate(e,i);if(u.isLeft())return u;for(var o=u.value,a=Object.getOwnPropertyNames(o),c=a.length,f=[],s=0;s<c;s++){var l=a[s];r.hasOwnProperty(l)||f.push(n.getValidationError(o[l],n.appendContext(i,l,n.never)))}return f.length?n.failures(f):n.success(o)},t.encode,t)}n.exact=M,n.clean=function(t){return t},n.alias=function(t){return function(){return t}}},xjB9:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.tailRec=function(t,n){for(var e=t(n);e.isLeft();)e=t(e.value);return e.value}}}]);