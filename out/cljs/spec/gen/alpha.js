// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.Uri');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((!((self__.cached == null)))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__4741__auto__,writer__4742__auto__,opt__4743__auto__){
return cljs.core._write.call(null,writer__4742__auto__,"cljs.spec.gen.alpha/LazyVar");
});

/**
 * Positional factory function for cljs.spec.gen.alpha/LazyVar.
 */
cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')))){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__5160__auto__ = [];
var len__5154__auto___137 = arguments.length;
var i__5155__auto___138 = (0);
while(true){
if((i__5155__auto___138 < len__5154__auto___137)){
args__5160__auto__.push((arguments[i__5155__auto___138]));

var G__139 = (i__5155__auto___138 + (1));
i__5155__auto___138 = G__139;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq136){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq136));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')))){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__5160__auto__ = [];
var len__5154__auto___141 = arguments.length;
var i__5155__auto___142 = (0);
while(true){
if((i__5155__auto___142 < len__5154__auto___141)){
args__5160__auto__.push((arguments[i__5155__auto___142]));

var G__143 = (i__5155__auto___142 + (1));
i__5155__auto___142 = G__143;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq140){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq140));
});

var g_QMARK__144 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')))){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_145 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__144){
return (function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')))){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__144))
,null));
var mkg_146 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__144,g_145){
return (function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')))){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__144,g_145))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__144,g_145,mkg_146){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__144).call(null,x);
});})(g_QMARK__144,g_145,mkg_146))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__144,g_145,mkg_146){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_146).call(null,gfn);
});})(g_QMARK__144,g_145,mkg_146))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__144,g_145,mkg_146){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_145).call(null,generator);
});})(g_QMARK__144,g_145,mkg_146))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__8996__auto___167 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')))){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__8996__auto___167){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__5160__auto__ = [];
var len__5154__auto___168 = arguments.length;
var i__5155__auto___169 = (0);
while(true){
if((i__5155__auto___169 < len__5154__auto___168)){
args__5160__auto__.push((arguments[i__5155__auto___169]));

var G__170 = (i__5155__auto___169 + (1));
i__5155__auto___169 = G__170;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__8996__auto___167))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8996__auto___167){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8996__auto___167),args);
});})(g__8996__auto___167))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__8996__auto___167){
return (function (seq147){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq147));
});})(g__8996__auto___167))
;


var g__8996__auto___171 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')))){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__8996__auto___171){
return (function cljs$spec$gen$alpha$list(var_args){
var args__5160__auto__ = [];
var len__5154__auto___172 = arguments.length;
var i__5155__auto___173 = (0);
while(true){
if((i__5155__auto___173 < len__5154__auto___172)){
args__5160__auto__.push((arguments[i__5155__auto___173]));

var G__174 = (i__5155__auto___173 + (1));
i__5155__auto___173 = G__174;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__8996__auto___171))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8996__auto___171){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8996__auto___171),args);
});})(g__8996__auto___171))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__8996__auto___171){
return (function (seq148){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq148));
});})(g__8996__auto___171))
;


var g__8996__auto___175 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')))){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__8996__auto___175){
return (function cljs$spec$gen$alpha$map(var_args){
var args__5160__auto__ = [];
var len__5154__auto___176 = arguments.length;
var i__5155__auto___177 = (0);
while(true){
if((i__5155__auto___177 < len__5154__auto___176)){
args__5160__auto__.push((arguments[i__5155__auto___177]));

var G__178 = (i__5155__auto___177 + (1));
i__5155__auto___177 = G__178;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__8996__auto___175))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8996__auto___175){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8996__auto___175),args);
});})(g__8996__auto___175))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__8996__auto___175){
return (function (seq149){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq149));
});})(g__8996__auto___175))
;


var g__8996__auto___179 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')))){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__8996__auto___179){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__5160__auto__ = [];
var len__5154__auto___180 = arguments.length;
var i__5155__auto___181 = (0);
while(true){
if((i__5155__auto___181 < len__5154__auto___180)){
args__5160__auto__.push((arguments[i__5155__auto___181]));

var G__182 = (i__5155__auto___181 + (1));
i__5155__auto___181 = G__182;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__8996__auto___179))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8996__auto___179){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8996__auto___179),args);
});})(g__8996__auto___179))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__8996__auto___179){
return (function (seq150){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq150));
});})(g__8996__auto___179))
;


var g__8996__auto___183 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')))){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__8996__auto___183){
return (function cljs$spec$gen$alpha$set(var_args){
var args__5160__auto__ = [];
var len__5154__auto___184 = arguments.length;
var i__5155__auto___185 = (0);
while(true){
if((i__5155__auto___185 < len__5154__auto___184)){
args__5160__auto__.push((arguments[i__5155__auto___185]));

var G__186 = (i__5155__auto___185 + (1));
i__5155__auto___185 = G__186;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__8996__auto___183))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8996__auto___183){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8996__auto___183),args);
});})(g__8996__auto___183))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__8996__auto___183){
return (function (seq151){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151));
});})(g__8996__auto___183))
;


var g__8996__auto___187 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')))){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__8996__auto___187){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__5160__auto__ = [];
var len__5154__auto___188 = arguments.length;
var i__5155__auto___189 = (0);
while(true){
if((i__5155__auto___189 < len__5154__auto___188)){
args__5160__auto__.push((arguments[i__5155__auto___189]));

var G__190 = (i__5155__auto___189 + (1));
i__5155__auto___189 = G__190;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__8996__auto___187))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8996__auto___187){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8996__auto___187),args);
});})(g__8996__auto___187))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__8996__auto___187){
return (function (seq152){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq152));
});})(g__8996__auto___187))
;


var g__8996__auto___191 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')))){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__8996__auto___191){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__5160__auto__ = [];
var len__5154__auto___192 = arguments.length;
var i__5155__auto___193 = (0);
while(true){
if((i__5155__auto___193 < len__5154__auto___192)){
args__5160__auto__.push((arguments[i__5155__auto___193]));

var G__194 = (i__5155__auto___193 + (1));
i__5155__auto___193 = G__194;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__8996__auto___191))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8996__auto___191){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8996__auto___191),args);
});})(g__8996__auto___191))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__8996__auto___191){
return (function (seq153){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq153));
});})(g__8996__auto___191))
;


var g__8996__auto___195 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')))){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__8996__auto___195){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__5160__auto__ = [];
var len__5154__auto___196 = arguments.length;
var i__5155__auto___197 = (0);
while(true){
if((i__5155__auto___197 < len__5154__auto___196)){
args__5160__auto__.push((arguments[i__5155__auto___197]));

var G__198 = (i__5155__auto___197 + (1));
i__5155__auto___197 = G__198;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__8996__auto___195))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8996__auto___195){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8996__auto___195),args);
});})(g__8996__auto___195))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__8996__auto___195){
return (function (seq154){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq154));
});})(g__8996__auto___195))
;


var g__8996__auto___199 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')))){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__8996__auto___199){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__5160__auto__ = [];
var len__5154__auto___200 = arguments.length;
var i__5155__auto___201 = (0);
while(true){
if((i__5155__auto___201 < len__5154__auto___200)){
args__5160__auto__.push((arguments[i__5155__auto___201]));

var G__202 = (i__5155__auto___201 + (1));
i__5155__auto___201 = G__202;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__8996__auto___199))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8996__auto___199){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8996__auto___199),args);
});})(g__8996__auto___199))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__8996__auto___199){
return (function (seq155){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq155));
});})(g__8996__auto___199))
;


var g__8996__auto___203 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')))){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__8996__auto___203){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__5160__auto__ = [];
var len__5154__auto___204 = arguments.length;
var i__5155__auto___205 = (0);
while(true){
if((i__5155__auto___205 < len__5154__auto___204)){
args__5160__auto__.push((arguments[i__5155__auto___205]));

var G__206 = (i__5155__auto___205 + (1));
i__5155__auto___205 = G__206;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__8996__auto___203))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8996__auto___203){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8996__auto___203),args);
});})(g__8996__auto___203))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__8996__auto___203){
return (function (seq156){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156));
});})(g__8996__auto___203))
;


var g__8996__auto___207 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')))){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__8996__auto___207){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__5160__auto__ = [];
var len__5154__auto___208 = arguments.length;
var i__5155__auto___209 = (0);
while(true){
if((i__5155__auto___209 < len__5154__auto___208)){
args__5160__auto__.push((arguments[i__5155__auto___209]));

var G__210 = (i__5155__auto___209 + (1));
i__5155__auto___209 = G__210;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__8996__auto___207))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8996__auto___207){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8996__auto___207),args);
});})(g__8996__auto___207))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__8996__auto___207){
return (function (seq157){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq157));
});})(g__8996__auto___207))
;


var g__8996__auto___211 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')))){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__8996__auto___211){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__5160__auto__ = [];
var len__5154__auto___212 = arguments.length;
var i__5155__auto___213 = (0);
while(true){
if((i__5155__auto___213 < len__5154__auto___212)){
args__5160__auto__.push((arguments[i__5155__auto___213]));

var G__214 = (i__5155__auto___213 + (1));
i__5155__auto___213 = G__214;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__8996__auto___211))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8996__auto___211){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8996__auto___211),args);
});})(g__8996__auto___211))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__8996__auto___211){
return (function (seq158){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq158));
});})(g__8996__auto___211))
;


var g__8996__auto___215 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')))){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__8996__auto___215){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__5160__auto__ = [];
var len__5154__auto___216 = arguments.length;
var i__5155__auto___217 = (0);
while(true){
if((i__5155__auto___217 < len__5154__auto___216)){
args__5160__auto__.push((arguments[i__5155__auto___217]));

var G__218 = (i__5155__auto___217 + (1));
i__5155__auto___217 = G__218;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__8996__auto___215))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8996__auto___215){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8996__auto___215),args);
});})(g__8996__auto___215))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__8996__auto___215){
return (function (seq159){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq159));
});})(g__8996__auto___215))
;


var g__8996__auto___219 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')))){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__8996__auto___219){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__5160__auto__ = [];
var len__5154__auto___220 = arguments.length;
var i__5155__auto___221 = (0);
while(true){
if((i__5155__auto___221 < len__5154__auto___220)){
args__5160__auto__.push((arguments[i__5155__auto___221]));

var G__222 = (i__5155__auto___221 + (1));
i__5155__auto___221 = G__222;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__8996__auto___219))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8996__auto___219){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8996__auto___219),args);
});})(g__8996__auto___219))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__8996__auto___219){
return (function (seq160){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq160));
});})(g__8996__auto___219))
;


var g__8996__auto___223 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')))){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__8996__auto___223){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__5160__auto__ = [];
var len__5154__auto___224 = arguments.length;
var i__5155__auto___225 = (0);
while(true){
if((i__5155__auto___225 < len__5154__auto___224)){
args__5160__auto__.push((arguments[i__5155__auto___225]));

var G__226 = (i__5155__auto___225 + (1));
i__5155__auto___225 = G__226;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__8996__auto___223))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8996__auto___223){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8996__auto___223),args);
});})(g__8996__auto___223))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__8996__auto___223){
return (function (seq161){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq161));
});})(g__8996__auto___223))
;


var g__8996__auto___227 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')))){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__8996__auto___227){
return (function cljs$spec$gen$alpha$return(var_args){
var args__5160__auto__ = [];
var len__5154__auto___228 = arguments.length;
var i__5155__auto___229 = (0);
while(true){
if((i__5155__auto___229 < len__5154__auto___228)){
args__5160__auto__.push((arguments[i__5155__auto___229]));

var G__230 = (i__5155__auto___229 + (1));
i__5155__auto___229 = G__230;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__8996__auto___227))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8996__auto___227){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8996__auto___227),args);
});})(g__8996__auto___227))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__8996__auto___227){
return (function (seq162){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq162));
});})(g__8996__auto___227))
;


var g__8996__auto___231 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')))){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__8996__auto___231){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__5160__auto__ = [];
var len__5154__auto___232 = arguments.length;
var i__5155__auto___233 = (0);
while(true){
if((i__5155__auto___233 < len__5154__auto___232)){
args__5160__auto__.push((arguments[i__5155__auto___233]));

var G__234 = (i__5155__auto___233 + (1));
i__5155__auto___233 = G__234;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__8996__auto___231))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8996__auto___231){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8996__auto___231),args);
});})(g__8996__auto___231))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__8996__auto___231){
return (function (seq163){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq163));
});})(g__8996__auto___231))
;


var g__8996__auto___235 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')))){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__8996__auto___235){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__5160__auto__ = [];
var len__5154__auto___236 = arguments.length;
var i__5155__auto___237 = (0);
while(true){
if((i__5155__auto___237 < len__5154__auto___236)){
args__5160__auto__.push((arguments[i__5155__auto___237]));

var G__238 = (i__5155__auto___237 + (1));
i__5155__auto___237 = G__238;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__8996__auto___235))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8996__auto___235){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8996__auto___235),args);
});})(g__8996__auto___235))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__8996__auto___235){
return (function (seq164){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164));
});})(g__8996__auto___235))
;


var g__8996__auto___239 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')))){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__8996__auto___239){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__5160__auto__ = [];
var len__5154__auto___240 = arguments.length;
var i__5155__auto___241 = (0);
while(true){
if((i__5155__auto___241 < len__5154__auto___240)){
args__5160__auto__.push((arguments[i__5155__auto___241]));

var G__242 = (i__5155__auto___241 + (1));
i__5155__auto___241 = G__242;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__8996__auto___239))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8996__auto___239){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8996__auto___239),args);
});})(g__8996__auto___239))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__8996__auto___239){
return (function (seq165){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165));
});})(g__8996__auto___239))
;


var g__8996__auto___243 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.shuffle !== 'undefined')))){
return clojure.test.check.generators.shuffle;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",1032401055,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",1032401055,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/shuffle
 */
cljs.spec.gen.alpha.shuffle = ((function (g__8996__auto___243){
return (function cljs$spec$gen$alpha$shuffle(var_args){
var args__5160__auto__ = [];
var len__5154__auto___244 = arguments.length;
var i__5155__auto___245 = (0);
while(true){
if((i__5155__auto___245 < len__5154__auto___244)){
args__5160__auto__.push((arguments[i__5155__auto___245]));

var G__246 = (i__5155__auto___245 + (1));
i__5155__auto___245 = G__246;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__8996__auto___243))
;

cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8996__auto___243){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8996__auto___243),args);
});})(g__8996__auto___243))
;

cljs.spec.gen.alpha.shuffle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.shuffle.cljs$lang$applyTo = ((function (g__8996__auto___243){
return (function (seq166){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166));
});})(g__8996__auto___243))
;

var g__9001__auto___268 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')))){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__9001__auto___268){
return (function cljs$spec$gen$alpha$any(var_args){
var args__5160__auto__ = [];
var len__5154__auto___269 = arguments.length;
var i__5155__auto___270 = (0);
while(true){
if((i__5155__auto___270 < len__5154__auto___269)){
args__5160__auto__.push((arguments[i__5155__auto___270]));

var G__271 = (i__5155__auto___270 + (1));
i__5155__auto___270 = G__271;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__9001__auto___268))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9001__auto___268){
return (function (args){
return cljs.core.deref.call(null,g__9001__auto___268);
});})(g__9001__auto___268))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__9001__auto___268){
return (function (seq247){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq247));
});})(g__9001__auto___268))
;


var g__9001__auto___272 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')))){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__9001__auto___272){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__5160__auto__ = [];
var len__5154__auto___273 = arguments.length;
var i__5155__auto___274 = (0);
while(true){
if((i__5155__auto___274 < len__5154__auto___273)){
args__5160__auto__.push((arguments[i__5155__auto___274]));

var G__275 = (i__5155__auto___274 + (1));
i__5155__auto___274 = G__275;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__9001__auto___272))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9001__auto___272){
return (function (args){
return cljs.core.deref.call(null,g__9001__auto___272);
});})(g__9001__auto___272))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__9001__auto___272){
return (function (seq248){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq248));
});})(g__9001__auto___272))
;


var g__9001__auto___276 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')))){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__9001__auto___276){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__5160__auto__ = [];
var len__5154__auto___277 = arguments.length;
var i__5155__auto___278 = (0);
while(true){
if((i__5155__auto___278 < len__5154__auto___277)){
args__5160__auto__.push((arguments[i__5155__auto___278]));

var G__279 = (i__5155__auto___278 + (1));
i__5155__auto___278 = G__279;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__9001__auto___276))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9001__auto___276){
return (function (args){
return cljs.core.deref.call(null,g__9001__auto___276);
});})(g__9001__auto___276))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__9001__auto___276){
return (function (seq249){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq249));
});})(g__9001__auto___276))
;


var g__9001__auto___280 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')))){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__9001__auto___280){
return (function cljs$spec$gen$alpha$char(var_args){
var args__5160__auto__ = [];
var len__5154__auto___281 = arguments.length;
var i__5155__auto___282 = (0);
while(true){
if((i__5155__auto___282 < len__5154__auto___281)){
args__5160__auto__.push((arguments[i__5155__auto___282]));

var G__283 = (i__5155__auto___282 + (1));
i__5155__auto___282 = G__283;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__9001__auto___280))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9001__auto___280){
return (function (args){
return cljs.core.deref.call(null,g__9001__auto___280);
});})(g__9001__auto___280))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__9001__auto___280){
return (function (seq250){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq250));
});})(g__9001__auto___280))
;


var g__9001__auto___284 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')))){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__9001__auto___284){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__5160__auto__ = [];
var len__5154__auto___285 = arguments.length;
var i__5155__auto___286 = (0);
while(true){
if((i__5155__auto___286 < len__5154__auto___285)){
args__5160__auto__.push((arguments[i__5155__auto___286]));

var G__287 = (i__5155__auto___286 + (1));
i__5155__auto___286 = G__287;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__9001__auto___284))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9001__auto___284){
return (function (args){
return cljs.core.deref.call(null,g__9001__auto___284);
});})(g__9001__auto___284))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__9001__auto___284){
return (function (seq251){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq251));
});})(g__9001__auto___284))
;


var g__9001__auto___288 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')))){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__9001__auto___288){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__5160__auto__ = [];
var len__5154__auto___289 = arguments.length;
var i__5155__auto___290 = (0);
while(true){
if((i__5155__auto___290 < len__5154__auto___289)){
args__5160__auto__.push((arguments[i__5155__auto___290]));

var G__291 = (i__5155__auto___290 + (1));
i__5155__auto___290 = G__291;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__9001__auto___288))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9001__auto___288){
return (function (args){
return cljs.core.deref.call(null,g__9001__auto___288);
});})(g__9001__auto___288))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__9001__auto___288){
return (function (seq252){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq252));
});})(g__9001__auto___288))
;


var g__9001__auto___292 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')))){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__9001__auto___292){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__5160__auto__ = [];
var len__5154__auto___293 = arguments.length;
var i__5155__auto___294 = (0);
while(true){
if((i__5155__auto___294 < len__5154__auto___293)){
args__5160__auto__.push((arguments[i__5155__auto___294]));

var G__295 = (i__5155__auto___294 + (1));
i__5155__auto___294 = G__295;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__9001__auto___292))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9001__auto___292){
return (function (args){
return cljs.core.deref.call(null,g__9001__auto___292);
});})(g__9001__auto___292))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__9001__auto___292){
return (function (seq253){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq253));
});})(g__9001__auto___292))
;


var g__9001__auto___296 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')))){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__9001__auto___296){
return (function cljs$spec$gen$alpha$double(var_args){
var args__5160__auto__ = [];
var len__5154__auto___297 = arguments.length;
var i__5155__auto___298 = (0);
while(true){
if((i__5155__auto___298 < len__5154__auto___297)){
args__5160__auto__.push((arguments[i__5155__auto___298]));

var G__299 = (i__5155__auto___298 + (1));
i__5155__auto___298 = G__299;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__9001__auto___296))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9001__auto___296){
return (function (args){
return cljs.core.deref.call(null,g__9001__auto___296);
});})(g__9001__auto___296))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__9001__auto___296){
return (function (seq254){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq254));
});})(g__9001__auto___296))
;


var g__9001__auto___300 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')))){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__9001__auto___300){
return (function cljs$spec$gen$alpha$int(var_args){
var args__5160__auto__ = [];
var len__5154__auto___301 = arguments.length;
var i__5155__auto___302 = (0);
while(true){
if((i__5155__auto___302 < len__5154__auto___301)){
args__5160__auto__.push((arguments[i__5155__auto___302]));

var G__303 = (i__5155__auto___302 + (1));
i__5155__auto___302 = G__303;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__9001__auto___300))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9001__auto___300){
return (function (args){
return cljs.core.deref.call(null,g__9001__auto___300);
});})(g__9001__auto___300))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__9001__auto___300){
return (function (seq255){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq255));
});})(g__9001__auto___300))
;


var g__9001__auto___304 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')))){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__9001__auto___304){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__5160__auto__ = [];
var len__5154__auto___305 = arguments.length;
var i__5155__auto___306 = (0);
while(true){
if((i__5155__auto___306 < len__5154__auto___305)){
args__5160__auto__.push((arguments[i__5155__auto___306]));

var G__307 = (i__5155__auto___306 + (1));
i__5155__auto___306 = G__307;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__9001__auto___304))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9001__auto___304){
return (function (args){
return cljs.core.deref.call(null,g__9001__auto___304);
});})(g__9001__auto___304))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__9001__auto___304){
return (function (seq256){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq256));
});})(g__9001__auto___304))
;


var g__9001__auto___308 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')))){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__9001__auto___308){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__5160__auto__ = [];
var len__5154__auto___309 = arguments.length;
var i__5155__auto___310 = (0);
while(true){
if((i__5155__auto___310 < len__5154__auto___309)){
args__5160__auto__.push((arguments[i__5155__auto___310]));

var G__311 = (i__5155__auto___310 + (1));
i__5155__auto___310 = G__311;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__9001__auto___308))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9001__auto___308){
return (function (args){
return cljs.core.deref.call(null,g__9001__auto___308);
});})(g__9001__auto___308))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__9001__auto___308){
return (function (seq257){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq257));
});})(g__9001__auto___308))
;


var g__9001__auto___312 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')))){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__9001__auto___312){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__5160__auto__ = [];
var len__5154__auto___313 = arguments.length;
var i__5155__auto___314 = (0);
while(true){
if((i__5155__auto___314 < len__5154__auto___313)){
args__5160__auto__.push((arguments[i__5155__auto___314]));

var G__315 = (i__5155__auto___314 + (1));
i__5155__auto___314 = G__315;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__9001__auto___312))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9001__auto___312){
return (function (args){
return cljs.core.deref.call(null,g__9001__auto___312);
});})(g__9001__auto___312))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__9001__auto___312){
return (function (seq258){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq258));
});})(g__9001__auto___312))
;


var g__9001__auto___316 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')))){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__9001__auto___316){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__5160__auto__ = [];
var len__5154__auto___317 = arguments.length;
var i__5155__auto___318 = (0);
while(true){
if((i__5155__auto___318 < len__5154__auto___317)){
args__5160__auto__.push((arguments[i__5155__auto___318]));

var G__319 = (i__5155__auto___318 + (1));
i__5155__auto___318 = G__319;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__9001__auto___316))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9001__auto___316){
return (function (args){
return cljs.core.deref.call(null,g__9001__auto___316);
});})(g__9001__auto___316))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__9001__auto___316){
return (function (seq259){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq259));
});})(g__9001__auto___316))
;


var g__9001__auto___320 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')))){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__9001__auto___320){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__5160__auto__ = [];
var len__5154__auto___321 = arguments.length;
var i__5155__auto___322 = (0);
while(true){
if((i__5155__auto___322 < len__5154__auto___321)){
args__5160__auto__.push((arguments[i__5155__auto___322]));

var G__323 = (i__5155__auto___322 + (1));
i__5155__auto___322 = G__323;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__9001__auto___320))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9001__auto___320){
return (function (args){
return cljs.core.deref.call(null,g__9001__auto___320);
});})(g__9001__auto___320))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__9001__auto___320){
return (function (seq260){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq260));
});})(g__9001__auto___320))
;


var g__9001__auto___324 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')))){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__9001__auto___324){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__5160__auto__ = [];
var len__5154__auto___325 = arguments.length;
var i__5155__auto___326 = (0);
while(true){
if((i__5155__auto___326 < len__5154__auto___325)){
args__5160__auto__.push((arguments[i__5155__auto___326]));

var G__327 = (i__5155__auto___326 + (1));
i__5155__auto___326 = G__327;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__9001__auto___324))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9001__auto___324){
return (function (args){
return cljs.core.deref.call(null,g__9001__auto___324);
});})(g__9001__auto___324))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__9001__auto___324){
return (function (seq261){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq261));
});})(g__9001__auto___324))
;


var g__9001__auto___328 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')))){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__9001__auto___328){
return (function cljs$spec$gen$alpha$string(var_args){
var args__5160__auto__ = [];
var len__5154__auto___329 = arguments.length;
var i__5155__auto___330 = (0);
while(true){
if((i__5155__auto___330 < len__5154__auto___329)){
args__5160__auto__.push((arguments[i__5155__auto___330]));

var G__331 = (i__5155__auto___330 + (1));
i__5155__auto___330 = G__331;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__9001__auto___328))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9001__auto___328){
return (function (args){
return cljs.core.deref.call(null,g__9001__auto___328);
});})(g__9001__auto___328))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__9001__auto___328){
return (function (seq262){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq262));
});})(g__9001__auto___328))
;


var g__9001__auto___332 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')))){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__9001__auto___332){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__5160__auto__ = [];
var len__5154__auto___333 = arguments.length;
var i__5155__auto___334 = (0);
while(true){
if((i__5155__auto___334 < len__5154__auto___333)){
args__5160__auto__.push((arguments[i__5155__auto___334]));

var G__335 = (i__5155__auto___334 + (1));
i__5155__auto___334 = G__335;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__9001__auto___332))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9001__auto___332){
return (function (args){
return cljs.core.deref.call(null,g__9001__auto___332);
});})(g__9001__auto___332))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__9001__auto___332){
return (function (seq263){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq263));
});})(g__9001__auto___332))
;


var g__9001__auto___336 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')))){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__9001__auto___336){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__5160__auto__ = [];
var len__5154__auto___337 = arguments.length;
var i__5155__auto___338 = (0);
while(true){
if((i__5155__auto___338 < len__5154__auto___337)){
args__5160__auto__.push((arguments[i__5155__auto___338]));

var G__339 = (i__5155__auto___338 + (1));
i__5155__auto___338 = G__339;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__9001__auto___336))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9001__auto___336){
return (function (args){
return cljs.core.deref.call(null,g__9001__auto___336);
});})(g__9001__auto___336))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__9001__auto___336){
return (function (seq264){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq264));
});})(g__9001__auto___336))
;


var g__9001__auto___340 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')))){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__9001__auto___340){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__5160__auto__ = [];
var len__5154__auto___341 = arguments.length;
var i__5155__auto___342 = (0);
while(true){
if((i__5155__auto___342 < len__5154__auto___341)){
args__5160__auto__.push((arguments[i__5155__auto___342]));

var G__343 = (i__5155__auto___342 + (1));
i__5155__auto___342 = G__343;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__9001__auto___340))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9001__auto___340){
return (function (args){
return cljs.core.deref.call(null,g__9001__auto___340);
});})(g__9001__auto___340))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__9001__auto___340){
return (function (seq265){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq265));
});})(g__9001__auto___340))
;


var g__9001__auto___344 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')))){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__9001__auto___344){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__5160__auto__ = [];
var len__5154__auto___345 = arguments.length;
var i__5155__auto___346 = (0);
while(true){
if((i__5155__auto___346 < len__5154__auto___345)){
args__5160__auto__.push((arguments[i__5155__auto___346]));

var G__347 = (i__5155__auto___346 + (1));
i__5155__auto___346 = G__347;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__9001__auto___344))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9001__auto___344){
return (function (args){
return cljs.core.deref.call(null,g__9001__auto___344);
});})(g__9001__auto___344))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__9001__auto___344){
return (function (seq266){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq266));
});})(g__9001__auto___344))
;


var g__9001__auto___348 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')))){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__9001__auto___348){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__5160__auto__ = [];
var len__5154__auto___349 = arguments.length;
var i__5155__auto___350 = (0);
while(true){
if((i__5155__auto___350 < len__5154__auto___349)){
args__5160__auto__.push((arguments[i__5155__auto___350]));

var G__351 = (i__5155__auto___350 + (1));
i__5155__auto___350 = G__351;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});})(g__9001__auto___348))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9001__auto___348){
return (function (args){
return cljs.core.deref.call(null,g__9001__auto___348);
});})(g__9001__auto___348))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__9001__auto___348){
return (function (seq267){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq267));
});})(g__9001__auto___348))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__5160__auto__ = [];
var len__5154__auto___354 = arguments.length;
var i__5155__auto___355 = (0);
while(true){
if((i__5155__auto___355 < len__5154__auto___354)){
args__5160__auto__.push((arguments[i__5155__auto___355]));

var G__356 = (i__5155__auto___355 + (1));
i__5155__auto___355 = G__356;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__352_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__352_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq353){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq353));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return (!((cljs.core.namespace.call(null,ident) == null)));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.some_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.uri_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.such_that.call(null,cljs.core.some_QMARK_,cljs.spec.gen.alpha.any_printable.call(null)),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__358_SHARP_){
return (new Date(p1__358_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__357_SHARP_){
return (new goog.Uri(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__357_SHARP_),".com"].join('')));
});})(simple))
,cljs.spec.gen.alpha.uuid.call(null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
