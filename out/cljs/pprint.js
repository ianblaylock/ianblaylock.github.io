// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__5160__auto__ = [];
var len__5154__auto___1441 = arguments.length;
var i__5155__auto___1442 = (0);
while(true){
if((i__5155__auto___1442 < len__5154__auto___1441)){
args__5160__auto__.push((arguments[i__5155__auto___1442]));

var G__1443 = (i__5155__auto___1442 + (1));
i__5155__auto___1442 = G__1443;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.print.cljs$lang$applyTo = (function (seq1440){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1440));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__5160__auto__ = [];
var len__5154__auto___1445 = arguments.length;
var i__5155__auto___1446 = (0);
while(true){
if((i__5155__auto___1446 < len__5154__auto___1445)){
args__5160__auto__.push((arguments[i__5155__auto___1446]));

var G__1447 = (i__5155__auto___1446 + (1));
i__5155__auto___1446 = G__1447;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.print,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.println.cljs$lang$applyTo = (function (seq1444){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1444));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,(function (){var pred__1448 = cljs.core._EQ_;
var expr__1449 = c;
if(cljs.core.truth_(pred__1448.call(null,"\b",expr__1449))){
return "\\backspace";
} else {
if(cljs.core.truth_(pred__1448.call(null,"\t",expr__1449))){
return "\\tab";
} else {
if(cljs.core.truth_(pred__1448.call(null,"\n",expr__1449))){
return "\\newline";
} else {
if(cljs.core.truth_(pred__1448.call(null,"\f",expr__1449))){
return "\\formfeed";
} else {
if(cljs.core.truth_(pred__1448.call(null,"\r",expr__1449))){
return "\\return";
} else {
if(cljs.core.truth_(pred__1448.call(null,"\"",expr__1449))){
return "\\\"";
} else {
if(cljs.core.truth_(pred__1448.call(null,"\\",expr__1449))){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__5160__auto__ = [];
var len__5154__auto___1452 = arguments.length;
var i__5155__auto___1453 = (0);
while(true){
if((i__5155__auto___1453 < len__5154__auto___1452)){
args__5160__auto__.push((arguments[i__5155__auto___1453]));

var G__1454 = (i__5155__auto___1453 + (1));
i__5155__auto___1453 = G__1454;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.pr.cljs$lang$applyTo = (function (seq1451){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1451));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__5160__auto__ = [];
var len__5154__auto___1456 = arguments.length;
var i__5155__auto___1457 = (0);
while(true){
if((i__5155__auto___1457 < len__5154__auto___1456)){
args__5160__auto__.push((arguments[i__5155__auto___1457]));

var G__1458 = (i__5155__auto___1457 + (1));
i__5155__auto___1457 = G__1458;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((0) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5161__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.pr,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.prn.cljs$lang$applyTo = (function (seq1455){
var self__5140__auto__ = this;
return self__5140__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1455));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return ((typeof n === 'number') && ((!(isNaN(n)))) && ((!((n === Infinity)))) && ((!((parseFloat(n) === parseInt(n,(10)))))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if(((typeof c === 'string') && ((c.length === (1))))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first.call(null,lis__$1);
var remainder = cljs.core.next.call(null,lis__$1);
var vec__1459 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.call(null,vec__1459,(0),null);
var new_context = cljs.core.nth.call(null,vec__1459,(1),null);
var G__1462 = new_context;
var G__1463 = remainder;
var G__1464 = cljs.core.conj.call(null,acc,result);
context = G__1462;
lis__$1 = G__1463;
acc = G__1464;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__1465 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__1465,(0),null);
var new_context = cljs.core.nth.call(null,vec__1465,(1),null);
if(cljs.core.not.call(null,result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__1468 = new_context;
var G__1469 = cljs.core.conj.call(null,acc,result);
context = G__1468;
acc = G__1469;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__1470 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__1470,(0),null);
var continue$ = cljs.core.nth.call(null,vec__1470,(1),null);
var new_context = cljs.core.nth.call(null,vec__1470,(2),null);
if(cljs.core.not.call(null,continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__1473 = new_context;
var G__1474 = cljs.core.conj.call(null,acc,result);
context = G__1473;
acc = G__1474;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4913__auto__ = (function cljs$pprint$unzip_map_$_iter__1475(s__1476){
return (new cljs.core.LazySeq(null,(function (){
var s__1476__$1 = s__1476;
while(true){
var temp__5535__auto__ = cljs.core.seq.call(null,s__1476__$1);
if(temp__5535__auto__){
var s__1476__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1476__$2)){
var c__4911__auto__ = cljs.core.chunk_first.call(null,s__1476__$2);
var size__4912__auto__ = cljs.core.count.call(null,c__4911__auto__);
var b__1478 = cljs.core.chunk_buffer.call(null,size__4912__auto__);
if((function (){var i__1477 = (0);
while(true){
if((i__1477 < size__4912__auto__)){
var vec__1479 = cljs.core._nth.call(null,c__4911__auto__,i__1477);
var k = cljs.core.nth.call(null,vec__1479,(0),null);
var vec__1482 = cljs.core.nth.call(null,vec__1479,(1),null);
var v1 = cljs.core.nth.call(null,vec__1482,(0),null);
var v2 = cljs.core.nth.call(null,vec__1482,(1),null);
cljs.core.chunk_append.call(null,b__1478,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__1507 = (i__1477 + (1));
i__1477 = G__1507;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1478),cljs$pprint$unzip_map_$_iter__1475.call(null,cljs.core.chunk_rest.call(null,s__1476__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1478),null);
}
} else {
var vec__1485 = cljs.core.first.call(null,s__1476__$2);
var k = cljs.core.nth.call(null,vec__1485,(0),null);
var vec__1488 = cljs.core.nth.call(null,vec__1485,(1),null);
var v1 = cljs.core.nth.call(null,vec__1488,(0),null);
var v2 = cljs.core.nth.call(null,vec__1488,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__1475.call(null,cljs.core.rest.call(null,s__1476__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4913__auto__.call(null,m);
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4913__auto__ = (function cljs$pprint$unzip_map_$_iter__1491(s__1492){
return (new cljs.core.LazySeq(null,(function (){
var s__1492__$1 = s__1492;
while(true){
var temp__5535__auto__ = cljs.core.seq.call(null,s__1492__$1);
if(temp__5535__auto__){
var s__1492__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1492__$2)){
var c__4911__auto__ = cljs.core.chunk_first.call(null,s__1492__$2);
var size__4912__auto__ = cljs.core.count.call(null,c__4911__auto__);
var b__1494 = cljs.core.chunk_buffer.call(null,size__4912__auto__);
if((function (){var i__1493 = (0);
while(true){
if((i__1493 < size__4912__auto__)){
var vec__1495 = cljs.core._nth.call(null,c__4911__auto__,i__1493);
var k = cljs.core.nth.call(null,vec__1495,(0),null);
var vec__1498 = cljs.core.nth.call(null,vec__1495,(1),null);
var v1 = cljs.core.nth.call(null,vec__1498,(0),null);
var v2 = cljs.core.nth.call(null,vec__1498,(1),null);
cljs.core.chunk_append.call(null,b__1494,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__1508 = (i__1493 + (1));
i__1493 = G__1508;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1494),cljs$pprint$unzip_map_$_iter__1491.call(null,cljs.core.chunk_rest.call(null,s__1492__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1494),null);
}
} else {
var vec__1501 = cljs.core.first.call(null,s__1492__$2);
var k = cljs.core.nth.call(null,vec__1501,(0),null);
var vec__1504 = cljs.core.nth.call(null,vec__1501,(1),null);
var v1 = cljs.core.nth.call(null,vec__1504,(0),null);
var v2 = cljs.core.nth.call(null,vec__1504,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__1491.call(null,cljs.core.rest.call(null,s__1492__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4913__auto__.call(null,m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4913__auto__ = (function cljs$pprint$tuple_map_$_iter__1509(s__1510){
return (new cljs.core.LazySeq(null,(function (){
var s__1510__$1 = s__1510;
while(true){
var temp__5535__auto__ = cljs.core.seq.call(null,s__1510__$1);
if(temp__5535__auto__){
var s__1510__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1510__$2)){
var c__4911__auto__ = cljs.core.chunk_first.call(null,s__1510__$2);
var size__4912__auto__ = cljs.core.count.call(null,c__4911__auto__);
var b__1512 = cljs.core.chunk_buffer.call(null,size__4912__auto__);
if((function (){var i__1511 = (0);
while(true){
if((i__1511 < size__4912__auto__)){
var vec__1513 = cljs.core._nth.call(null,c__4911__auto__,i__1511);
var k = cljs.core.nth.call(null,vec__1513,(0),null);
var v = cljs.core.nth.call(null,vec__1513,(1),null);
cljs.core.chunk_append.call(null,b__1512,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__1519 = (i__1511 + (1));
i__1511 = G__1519;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1512),cljs$pprint$tuple_map_$_iter__1509.call(null,cljs.core.chunk_rest.call(null,s__1510__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1512),null);
}
} else {
var vec__1516 = cljs.core.first.call(null,s__1510__$2);
var k = cljs.core.nth.call(null,vec__1516,(0),null);
var v = cljs.core.nth.call(null,vec__1516,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__1509.call(null,cljs.core.rest.call(null,s__1510__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4913__auto__.call(null,m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count.call(null,s);
if((((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1))),c)))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if((!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c)))){
return cljs.core.subs.call(null,s,(0),(n + (1)));
} else {
var G__1520 = (n - (1));
n = G__1520;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count.call(null,s);
if((((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(0)),c)))){
var n = (0);
while(true){
if(((cljs.core._EQ_.call(null,n,len)) || ((!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c)))))){
return cljs.core.subs.call(null,s,n);
} else {
var G__1521 = (n + (1));
n = G__1521;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_.call(null,val))?cljs.core.set.call(null,val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if(((cljs.core._EQ_.call(null,pos,cljs.core.count.call(null,aseq))) || (cljs.core.not.call(null,test.call(null,cljs.core.nth.call(null,aseq,pos)))))){
return pos;
} else {
var G__1522 = (pos + (1));
pos = G__1522;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((((!((pp == null)))) && ((!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__4802__auto__ = (((pp == null))?null:pp);
var m__4803__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__4802__auto__)]);
if((!((m__4803__auto__ == null)))){
return m__4803__auto__.call(null,pp);
} else {
var m__4803__auto____$1 = (cljs.pprint._ppflush["_"]);
if((!((m__4803__auto____$1 == null)))){
return m__4803__auto____$1.call(null,pp);
} else {
throw cljs.core.missing_protocol.call(null,"IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
return sym.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599));
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235));
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"max","max",61366548));
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"max","max",61366548),new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",185279322));
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.call(null,c,"\n")){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(0));

cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235)) + (1)));
} else {
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599)) + (1)));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",185279322)),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__1525 = arguments.length;
switch (G__1525) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.call(null,writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max","max",61366548),max_columns,new cljs.core.Keyword(null,"cur","cur",1153190599),(0),new cljs.core.Keyword(null,"line","line",212345235),(0),new cljs.core.Keyword(null,"base","base",185279322),writer], null));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint1526 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint1526 = (function (writer,max_columns,fields,meta1527){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta1527 = meta1527;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint1526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_1528,meta1527__$1){
var self__ = this;
var _1528__$1 = this;
return (new cljs.pprint.t_cljs$pprint1526(self__.writer,self__.max_columns,self__.fields,meta1527__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint1526.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_1528){
var self__ = this;
var _1528__$1 = this;
return self__.meta1527;
});})(fields))
;

cljs.pprint.t_cljs$pprint1526.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint1526.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint1526.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__1529 = cljs.core._EQ_;
var expr__1530 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__1529.call(null,String,expr__1530))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599)) + cljs.core.count.call(null,s)));
} else {
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),((cljs.core.count.call(null,s) - nl) - (1)));

cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235)) + cljs.core.count.call(null,cljs.core.filter.call(null,((function (s,nl,pred__1529,expr__1530,this$__$1,fields){
return (function (p1__1523_SHARP_){
return cljs.core._EQ_.call(null,p1__1523_SHARP_,"\n");
});})(s,nl,pred__1529,expr__1530,this$__$1,fields))
,s))));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"base","base",185279322)),s);
} else {
if(cljs.core.truth_(pred__1529.call(null,Number,expr__1530))){
return cljs.pprint.c_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1530)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint1526.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta1527","meta1527",1670398626,null)], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint1526.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint1526.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint1526";

cljs.pprint.t_cljs$pprint1526.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__4741__auto__,writer__4742__auto__,opt__4743__auto__){
return cljs.core._write.call(null,writer__4742__auto__,"cljs.pprint/t_cljs$pprint1526");
});})(fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint1526.
 */
cljs.pprint.__GT_t_cljs$pprint1526 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint1526(writer__$1,max_columns__$1,fields__$1,meta1527){
return (new cljs.pprint.t_cljs$pprint1526(writer__$1,max_columns__$1,fields__$1,meta1527));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint1526(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4754__auto__,k__4755__auto__){
var self__ = this;
var this__4754__auto____$1 = this;
return this__4754__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4755__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4756__auto__,k1534,else__4757__auto__){
var self__ = this;
var this__4756__auto____$1 = this;
var G__1538 = k1534;
var G__1538__$1 = (((G__1538 instanceof cljs.core.Keyword))?G__1538.fqn:null);
switch (G__1538__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1534,else__4757__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4773__auto__,f__4774__auto__,init__4775__auto__){
var self__ = this;
var this__4773__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4773__auto____$1){
return (function (ret__4776__auto__,p__1539){
var vec__1540 = p__1539;
var k__4777__auto__ = cljs.core.nth.call(null,vec__1540,(0),null);
var v__4778__auto__ = cljs.core.nth.call(null,vec__1540,(1),null);
return f__4774__auto__.call(null,ret__4776__auto__,k__4777__auto__,v__4778__auto__);
});})(this__4773__auto____$1))
,init__4775__auto__,this__4773__auto____$1);
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4768__auto__,writer__4769__auto__,opts__4770__auto__){
var self__ = this;
var this__4768__auto____$1 = this;
var pr_pair__4771__auto__ = ((function (this__4768__auto____$1){
return (function (keyval__4772__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4769__auto__,cljs.core.pr_writer,""," ","",opts__4770__auto__,keyval__4772__auto__);
});})(this__4768__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4769__auto__,pr_pair__4771__auto__,"#cljs.pprint.logical-block{",", ","}",opts__4770__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1533){
var self__ = this;
var G__1533__$1 = this;
return (new cljs.core.RecordIter((0),G__1533__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4752__auto__){
var self__ = this;
var this__4752__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4749__auto__){
var self__ = this;
var this__4749__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4758__auto__){
var self__ = this;
var this__4758__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4750__auto__){
var self__ = this;
var this__4750__auto____$1 = this;
var h__4566__auto__ = self__.__hash;
if((!((h__4566__auto__ == null)))){
return h__4566__auto__;
} else {
var h__4566__auto____$1 = ((function (h__4566__auto__,this__4750__auto____$1){
return (function (coll__4751__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll.call(null,coll__4751__auto__));
});})(h__4566__auto__,this__4750__auto____$1))
.call(null,this__4750__auto____$1);
self__.__hash = h__4566__auto____$1;

return h__4566__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1535,other1536){
var self__ = this;
var this1535__$1 = this;
return (((!((other1536 == null)))) && ((this1535__$1.constructor === other1536.constructor)) && (cljs.core._EQ_.call(null,this1535__$1.parent,other1536.parent)) && (cljs.core._EQ_.call(null,this1535__$1.section,other1536.section)) && (cljs.core._EQ_.call(null,this1535__$1.start_col,other1536.start_col)) && (cljs.core._EQ_.call(null,this1535__$1.indent,other1536.indent)) && (cljs.core._EQ_.call(null,this1535__$1.done_nl,other1536.done_nl)) && (cljs.core._EQ_.call(null,this1535__$1.intra_block_nl,other1536.intra_block_nl)) && (cljs.core._EQ_.call(null,this1535__$1.prefix,other1536.prefix)) && (cljs.core._EQ_.call(null,this1535__$1.per_line_prefix,other1536.per_line_prefix)) && (cljs.core._EQ_.call(null,this1535__$1.suffix,other1536.suffix)) && (cljs.core._EQ_.call(null,this1535__$1.logical_block_callback,other1536.logical_block_callback)) && (cljs.core._EQ_.call(null,this1535__$1.__extmap,other1536.__extmap)));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4763__auto__,k__4764__auto__){
var self__ = this;
var this__4763__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"indent","indent",-148200125),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),null,new cljs.core.Keyword(null,"start-col","start-col",668080143),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),null], null), null),k__4764__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4763__auto____$1),self__.__meta),k__4764__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4764__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4761__auto__,k__4762__auto__,G__1533){
var self__ = this;
var this__4761__auto____$1 = this;
var pred__1543 = cljs.core.keyword_identical_QMARK_;
var expr__1544 = k__4762__auto__;
if(cljs.core.truth_(pred__1543.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__1544))){
return (new cljs.pprint.logical_block(G__1533,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1543.call(null,new cljs.core.Keyword(null,"section","section",-300141526),expr__1544))){
return (new cljs.pprint.logical_block(self__.parent,G__1533,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1543.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__1544))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__1533,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1543.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125),expr__1544))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__1533,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1543.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__1544))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__1533,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1543.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__1544))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__1533,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1543.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__1544))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__1533,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1543.call(null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__1544))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__1533,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1543.call(null,new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__1544))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__1533,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1543.call(null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__1544))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__1533,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4762__auto__,G__1533),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4766__auto__){
var self__ = this;
var this__4766__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"section","section",-300141526),self__.section,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback,null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4753__auto__,G__1533){
var self__ = this;
var this__4753__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__1533,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4759__auto__,entry__4760__auto__){
var self__ = this;
var this__4759__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4760__auto__)){
return this__4759__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4760__auto__,(0)),cljs.core._nth.call(null,entry__4760__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4759__auto____$1,entry__4760__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"start-col","start-col",-1986355626,null),new cljs.core.Symbol(null,"indent","indent",1492331402,null),new cljs.core.Symbol(null,"done-nl","done-nl",1259507187,null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",-845608894,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",-1807493956,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",-1041744575,null)], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__4799__auto__){
return (new cljs.core.List(null,"cljs.pprint/logical-block",null,(1),null));
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.pprint/logical-block");
});

/**
 * Positional factory function for cljs.pprint/logical-block.
 */
cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

/**
 * Factory function for cljs.pprint/logical-block, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__1537){
var extmap__4795__auto__ = (function (){var G__1546 = cljs.core.dissoc.call(null,G__1537,new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194));
if(cljs.core.record_QMARK_.call(null,G__1537)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__1546);
} else {
return G__1546;
}
})();
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__1537),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(G__1537),new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(G__1537),new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(G__1537),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(G__1537),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(G__1537),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__1537),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(G__1537),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__1537),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(G__1537),null,cljs.core.not_empty.call(null,extmap__4795__auto__),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__1548 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__1548;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq.call(null,l);
if(l__$1){
return (new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,l__$1)) - new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4754__auto__,k__4755__auto__){
var self__ = this;
var this__4754__auto____$1 = this;
return this__4754__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4755__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4756__auto__,k1550,else__4757__auto__){
var self__ = this;
var this__4756__auto____$1 = this;
var G__1554 = k1550;
var G__1554__$1 = (((G__1554 instanceof cljs.core.Keyword))?G__1554.fqn:null);
switch (G__1554__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1550,else__4757__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4773__auto__,f__4774__auto__,init__4775__auto__){
var self__ = this;
var this__4773__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4773__auto____$1){
return (function (ret__4776__auto__,p__1555){
var vec__1556 = p__1555;
var k__4777__auto__ = cljs.core.nth.call(null,vec__1556,(0),null);
var v__4778__auto__ = cljs.core.nth.call(null,vec__1556,(1),null);
return f__4774__auto__.call(null,ret__4776__auto__,k__4777__auto__,v__4778__auto__);
});})(this__4773__auto____$1))
,init__4775__auto__,this__4773__auto____$1);
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4768__auto__,writer__4769__auto__,opts__4770__auto__){
var self__ = this;
var this__4768__auto____$1 = this;
var pr_pair__4771__auto__ = ((function (this__4768__auto____$1){
return (function (keyval__4772__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4769__auto__,cljs.core.pr_writer,""," ","",opts__4770__auto__,keyval__4772__auto__);
});})(this__4768__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4769__auto__,pr_pair__4771__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__4770__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1549){
var self__ = this;
var G__1549__$1 = this;
return (new cljs.core.RecordIter((0),G__1549__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4752__auto__){
var self__ = this;
var this__4752__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4749__auto__){
var self__ = this;
var this__4749__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4758__auto__){
var self__ = this;
var this__4758__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4750__auto__){
var self__ = this;
var this__4750__auto____$1 = this;
var h__4566__auto__ = self__.__hash;
if((!((h__4566__auto__ == null)))){
return h__4566__auto__;
} else {
var h__4566__auto____$1 = ((function (h__4566__auto__,this__4750__auto____$1){
return (function (coll__4751__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll.call(null,coll__4751__auto__));
});})(h__4566__auto__,this__4750__auto____$1))
.call(null,this__4750__auto____$1);
self__.__hash = h__4566__auto____$1;

return h__4566__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1551,other1552){
var self__ = this;
var this1551__$1 = this;
return (((!((other1552 == null)))) && ((this1551__$1.constructor === other1552.constructor)) && (cljs.core._EQ_.call(null,this1551__$1.type_tag,other1552.type_tag)) && (cljs.core._EQ_.call(null,this1551__$1.data,other1552.data)) && (cljs.core._EQ_.call(null,this1551__$1.trailing_white_space,other1552.trailing_white_space)) && (cljs.core._EQ_.call(null,this1551__$1.start_pos,other1552.start_pos)) && (cljs.core._EQ_.call(null,this1551__$1.end_pos,other1552.end_pos)) && (cljs.core._EQ_.call(null,this1551__$1.__extmap,other1552.__extmap)));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4763__auto__,k__4764__auto__){
var self__ = this;
var this__4763__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4764__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4763__auto____$1),self__.__meta),k__4764__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4764__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4761__auto__,k__4762__auto__,G__1549){
var self__ = this;
var this__4761__auto____$1 = this;
var pred__1559 = cljs.core.keyword_identical_QMARK_;
var expr__1560 = k__4762__auto__;
if(cljs.core.truth_(pred__1559.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__1560))){
return (new cljs.pprint.buffer_blob(G__1549,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1559.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__1560))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__1549,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1559.call(null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__1560))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__1549,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1559.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__1560))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__1549,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1559.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__1560))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__1549,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4762__auto__,G__1549),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4766__auto__){
var self__ = this;
var this__4766__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4753__auto__,G__1549){
var self__ = this;
var this__4753__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__1549,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4759__auto__,entry__4760__auto__){
var self__ = this;
var this__4759__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4760__auto__)){
return this__4759__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4760__auto__,(0)),cljs.core._nth.call(null,entry__4760__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4759__auto____$1,entry__4760__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",-1158428773,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__4799__auto__){
return (new cljs.core.List(null,"cljs.pprint/buffer-blob",null,(1),null));
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.pprint/buffer-blob");
});

/**
 * Positional factory function for cljs.pprint/buffer-blob.
 */
cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/buffer-blob, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__1553){
var extmap__4795__auto__ = (function (){var G__1562 = cljs.core.dissoc.call(null,G__1553,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__1553)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__1562);
} else {
return G__1562;
}
})();
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__1553),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__1553),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(G__1553),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__1553),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__1553),null,cljs.core.not_empty.call(null,extmap__4795__auto__),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__8825__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__8825__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4754__auto__,k__4755__auto__){
var self__ = this;
var this__4754__auto____$1 = this;
return this__4754__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4755__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4756__auto__,k1565,else__4757__auto__){
var self__ = this;
var this__4756__auto____$1 = this;
var G__1569 = k1565;
var G__1569__$1 = (((G__1569 instanceof cljs.core.Keyword))?G__1569.fqn:null);
switch (G__1569__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1565,else__4757__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4773__auto__,f__4774__auto__,init__4775__auto__){
var self__ = this;
var this__4773__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4773__auto____$1){
return (function (ret__4776__auto__,p__1570){
var vec__1571 = p__1570;
var k__4777__auto__ = cljs.core.nth.call(null,vec__1571,(0),null);
var v__4778__auto__ = cljs.core.nth.call(null,vec__1571,(1),null);
return f__4774__auto__.call(null,ret__4776__auto__,k__4777__auto__,v__4778__auto__);
});})(this__4773__auto____$1))
,init__4775__auto__,this__4773__auto____$1);
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4768__auto__,writer__4769__auto__,opts__4770__auto__){
var self__ = this;
var this__4768__auto____$1 = this;
var pr_pair__4771__auto__ = ((function (this__4768__auto____$1){
return (function (keyval__4772__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4769__auto__,cljs.core.pr_writer,""," ","",opts__4770__auto__,keyval__4772__auto__);
});})(this__4768__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4769__auto__,pr_pair__4771__auto__,"#cljs.pprint.nl-t{",", ","}",opts__4770__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1564){
var self__ = this;
var G__1564__$1 = this;
return (new cljs.core.RecordIter((0),G__1564__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4752__auto__){
var self__ = this;
var this__4752__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4749__auto__){
var self__ = this;
var this__4749__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4758__auto__){
var self__ = this;
var this__4758__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4750__auto__){
var self__ = this;
var this__4750__auto____$1 = this;
var h__4566__auto__ = self__.__hash;
if((!((h__4566__auto__ == null)))){
return h__4566__auto__;
} else {
var h__4566__auto____$1 = ((function (h__4566__auto__,this__4750__auto____$1){
return (function (coll__4751__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll.call(null,coll__4751__auto__));
});})(h__4566__auto__,this__4750__auto____$1))
.call(null,this__4750__auto____$1);
self__.__hash = h__4566__auto____$1;

return h__4566__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1566,other1567){
var self__ = this;
var this1566__$1 = this;
return (((!((other1567 == null)))) && ((this1566__$1.constructor === other1567.constructor)) && (cljs.core._EQ_.call(null,this1566__$1.type_tag,other1567.type_tag)) && (cljs.core._EQ_.call(null,this1566__$1.type,other1567.type)) && (cljs.core._EQ_.call(null,this1566__$1.logical_block,other1567.logical_block)) && (cljs.core._EQ_.call(null,this1566__$1.start_pos,other1567.start_pos)) && (cljs.core._EQ_.call(null,this1566__$1.end_pos,other1567.end_pos)) && (cljs.core._EQ_.call(null,this1566__$1.__extmap,other1567.__extmap)));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4763__auto__,k__4764__auto__){
var self__ = this;
var this__4763__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4764__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4763__auto____$1),self__.__meta),k__4764__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4764__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4761__auto__,k__4762__auto__,G__1564){
var self__ = this;
var this__4761__auto____$1 = this;
var pred__1574 = cljs.core.keyword_identical_QMARK_;
var expr__1575 = k__4762__auto__;
if(cljs.core.truth_(pred__1574.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__1575))){
return (new cljs.pprint.nl_t(G__1564,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1574.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__1575))){
return (new cljs.pprint.nl_t(self__.type_tag,G__1564,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1574.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__1575))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__1564,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1574.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__1575))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__1564,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1574.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__1575))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__1564,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4762__auto__,G__1564),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4766__auto__){
var self__ = this;
var this__4766__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4753__auto__,G__1564){
var self__ = this;
var this__4753__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__1564,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4759__auto__,entry__4760__auto__){
var self__ = this;
var this__4759__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4760__auto__)){
return this__4759__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4760__auto__,(0)),cljs.core._nth.call(null,entry__4760__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4759__auto____$1,entry__4760__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__4799__auto__){
return (new cljs.core.List(null,"cljs.pprint/nl-t",null,(1),null));
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.pprint/nl-t");
});

/**
 * Positional factory function for cljs.pprint/nl-t.
 */
cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/nl-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__1568){
var extmap__4795__auto__ = (function (){var G__1577 = cljs.core.dissoc.call(null,G__1568,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__1568)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__1577);
} else {
return G__1577;
}
})();
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__1568),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__1568),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__1568),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__1568),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__1568),null,cljs.core.not_empty.call(null,extmap__4795__auto__),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__8825__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__8825__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4754__auto__,k__4755__auto__){
var self__ = this;
var this__4754__auto____$1 = this;
return this__4754__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4755__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4756__auto__,k1580,else__4757__auto__){
var self__ = this;
var this__4756__auto____$1 = this;
var G__1584 = k1580;
var G__1584__$1 = (((G__1584 instanceof cljs.core.Keyword))?G__1584.fqn:null);
switch (G__1584__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1580,else__4757__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4773__auto__,f__4774__auto__,init__4775__auto__){
var self__ = this;
var this__4773__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4773__auto____$1){
return (function (ret__4776__auto__,p__1585){
var vec__1586 = p__1585;
var k__4777__auto__ = cljs.core.nth.call(null,vec__1586,(0),null);
var v__4778__auto__ = cljs.core.nth.call(null,vec__1586,(1),null);
return f__4774__auto__.call(null,ret__4776__auto__,k__4777__auto__,v__4778__auto__);
});})(this__4773__auto____$1))
,init__4775__auto__,this__4773__auto____$1);
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4768__auto__,writer__4769__auto__,opts__4770__auto__){
var self__ = this;
var this__4768__auto____$1 = this;
var pr_pair__4771__auto__ = ((function (this__4768__auto____$1){
return (function (keyval__4772__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4769__auto__,cljs.core.pr_writer,""," ","",opts__4770__auto__,keyval__4772__auto__);
});})(this__4768__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4769__auto__,pr_pair__4771__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__4770__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1579){
var self__ = this;
var G__1579__$1 = this;
return (new cljs.core.RecordIter((0),G__1579__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4752__auto__){
var self__ = this;
var this__4752__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4749__auto__){
var self__ = this;
var this__4749__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4758__auto__){
var self__ = this;
var this__4758__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4750__auto__){
var self__ = this;
var this__4750__auto____$1 = this;
var h__4566__auto__ = self__.__hash;
if((!((h__4566__auto__ == null)))){
return h__4566__auto__;
} else {
var h__4566__auto____$1 = ((function (h__4566__auto__,this__4750__auto____$1){
return (function (coll__4751__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll.call(null,coll__4751__auto__));
});})(h__4566__auto__,this__4750__auto____$1))
.call(null,this__4750__auto____$1);
self__.__hash = h__4566__auto____$1;

return h__4566__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1581,other1582){
var self__ = this;
var this1581__$1 = this;
return (((!((other1582 == null)))) && ((this1581__$1.constructor === other1582.constructor)) && (cljs.core._EQ_.call(null,this1581__$1.type_tag,other1582.type_tag)) && (cljs.core._EQ_.call(null,this1581__$1.logical_block,other1582.logical_block)) && (cljs.core._EQ_.call(null,this1581__$1.start_pos,other1582.start_pos)) && (cljs.core._EQ_.call(null,this1581__$1.end_pos,other1582.end_pos)) && (cljs.core._EQ_.call(null,this1581__$1.__extmap,other1582.__extmap)));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4763__auto__,k__4764__auto__){
var self__ = this;
var this__4763__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4764__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4763__auto____$1),self__.__meta),k__4764__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4764__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4761__auto__,k__4762__auto__,G__1579){
var self__ = this;
var this__4761__auto____$1 = this;
var pred__1589 = cljs.core.keyword_identical_QMARK_;
var expr__1590 = k__4762__auto__;
if(cljs.core.truth_(pred__1589.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__1590))){
return (new cljs.pprint.start_block_t(G__1579,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1589.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__1590))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__1579,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1589.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__1590))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__1579,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1589.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__1590))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__1579,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4762__auto__,G__1579),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4766__auto__){
var self__ = this;
var this__4766__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4753__auto__,G__1579){
var self__ = this;
var this__4753__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__1579,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4759__auto__,entry__4760__auto__){
var self__ = this;
var this__4759__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4760__auto__)){
return this__4759__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4760__auto__,(0)),cljs.core._nth.call(null,entry__4760__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4759__auto____$1,entry__4760__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__4799__auto__){
return (new cljs.core.List(null,"cljs.pprint/start-block-t",null,(1),null));
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.pprint/start-block-t");
});

/**
 * Positional factory function for cljs.pprint/start-block-t.
 */
cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/start-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__1583){
var extmap__4795__auto__ = (function (){var G__1592 = cljs.core.dissoc.call(null,G__1583,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__1583)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__1592);
} else {
return G__1592;
}
})();
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__1583),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__1583),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__1583),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__1583),null,cljs.core.not_empty.call(null,extmap__4795__auto__),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__8825__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__8825__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4754__auto__,k__4755__auto__){
var self__ = this;
var this__4754__auto____$1 = this;
return this__4754__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4755__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4756__auto__,k1595,else__4757__auto__){
var self__ = this;
var this__4756__auto____$1 = this;
var G__1599 = k1595;
var G__1599__$1 = (((G__1599 instanceof cljs.core.Keyword))?G__1599.fqn:null);
switch (G__1599__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1595,else__4757__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4773__auto__,f__4774__auto__,init__4775__auto__){
var self__ = this;
var this__4773__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4773__auto____$1){
return (function (ret__4776__auto__,p__1600){
var vec__1601 = p__1600;
var k__4777__auto__ = cljs.core.nth.call(null,vec__1601,(0),null);
var v__4778__auto__ = cljs.core.nth.call(null,vec__1601,(1),null);
return f__4774__auto__.call(null,ret__4776__auto__,k__4777__auto__,v__4778__auto__);
});})(this__4773__auto____$1))
,init__4775__auto__,this__4773__auto____$1);
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4768__auto__,writer__4769__auto__,opts__4770__auto__){
var self__ = this;
var this__4768__auto____$1 = this;
var pr_pair__4771__auto__ = ((function (this__4768__auto____$1){
return (function (keyval__4772__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4769__auto__,cljs.core.pr_writer,""," ","",opts__4770__auto__,keyval__4772__auto__);
});})(this__4768__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4769__auto__,pr_pair__4771__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__4770__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1594){
var self__ = this;
var G__1594__$1 = this;
return (new cljs.core.RecordIter((0),G__1594__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4752__auto__){
var self__ = this;
var this__4752__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4749__auto__){
var self__ = this;
var this__4749__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4758__auto__){
var self__ = this;
var this__4758__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4750__auto__){
var self__ = this;
var this__4750__auto____$1 = this;
var h__4566__auto__ = self__.__hash;
if((!((h__4566__auto__ == null)))){
return h__4566__auto__;
} else {
var h__4566__auto____$1 = ((function (h__4566__auto__,this__4750__auto____$1){
return (function (coll__4751__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll.call(null,coll__4751__auto__));
});})(h__4566__auto__,this__4750__auto____$1))
.call(null,this__4750__auto____$1);
self__.__hash = h__4566__auto____$1;

return h__4566__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1596,other1597){
var self__ = this;
var this1596__$1 = this;
return (((!((other1597 == null)))) && ((this1596__$1.constructor === other1597.constructor)) && (cljs.core._EQ_.call(null,this1596__$1.type_tag,other1597.type_tag)) && (cljs.core._EQ_.call(null,this1596__$1.logical_block,other1597.logical_block)) && (cljs.core._EQ_.call(null,this1596__$1.start_pos,other1597.start_pos)) && (cljs.core._EQ_.call(null,this1596__$1.end_pos,other1597.end_pos)) && (cljs.core._EQ_.call(null,this1596__$1.__extmap,other1597.__extmap)));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4763__auto__,k__4764__auto__){
var self__ = this;
var this__4763__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4764__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4763__auto____$1),self__.__meta),k__4764__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4764__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4761__auto__,k__4762__auto__,G__1594){
var self__ = this;
var this__4761__auto____$1 = this;
var pred__1604 = cljs.core.keyword_identical_QMARK_;
var expr__1605 = k__4762__auto__;
if(cljs.core.truth_(pred__1604.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__1605))){
return (new cljs.pprint.end_block_t(G__1594,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1604.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__1605))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__1594,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1604.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__1605))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__1594,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1604.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__1605))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__1594,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4762__auto__,G__1594),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4766__auto__){
var self__ = this;
var this__4766__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4753__auto__,G__1594){
var self__ = this;
var this__4753__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__1594,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4759__auto__,entry__4760__auto__){
var self__ = this;
var this__4759__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4760__auto__)){
return this__4759__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4760__auto__,(0)),cljs.core._nth.call(null,entry__4760__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4759__auto____$1,entry__4760__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__4799__auto__){
return (new cljs.core.List(null,"cljs.pprint/end-block-t",null,(1),null));
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.pprint/end-block-t");
});

/**
 * Positional factory function for cljs.pprint/end-block-t.
 */
cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/end-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__1598){
var extmap__4795__auto__ = (function (){var G__1607 = cljs.core.dissoc.call(null,G__1598,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__1598)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__1607);
} else {
return G__1607;
}
})();
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__1598),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__1598),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__1598),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__1598),null,cljs.core.not_empty.call(null,extmap__4795__auto__),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__8825__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__8825__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4754__auto__,k__4755__auto__){
var self__ = this;
var this__4754__auto____$1 = this;
return this__4754__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4755__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4756__auto__,k1610,else__4757__auto__){
var self__ = this;
var this__4756__auto____$1 = this;
var G__1614 = k1610;
var G__1614__$1 = (((G__1614 instanceof cljs.core.Keyword))?G__1614.fqn:null);
switch (G__1614__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1610,else__4757__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4773__auto__,f__4774__auto__,init__4775__auto__){
var self__ = this;
var this__4773__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4773__auto____$1){
return (function (ret__4776__auto__,p__1615){
var vec__1616 = p__1615;
var k__4777__auto__ = cljs.core.nth.call(null,vec__1616,(0),null);
var v__4778__auto__ = cljs.core.nth.call(null,vec__1616,(1),null);
return f__4774__auto__.call(null,ret__4776__auto__,k__4777__auto__,v__4778__auto__);
});})(this__4773__auto____$1))
,init__4775__auto__,this__4773__auto____$1);
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4768__auto__,writer__4769__auto__,opts__4770__auto__){
var self__ = this;
var this__4768__auto____$1 = this;
var pr_pair__4771__auto__ = ((function (this__4768__auto____$1){
return (function (keyval__4772__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4769__auto__,cljs.core.pr_writer,""," ","",opts__4770__auto__,keyval__4772__auto__);
});})(this__4768__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4769__auto__,pr_pair__4771__auto__,"#cljs.pprint.indent-t{",", ","}",opts__4770__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1609){
var self__ = this;
var G__1609__$1 = this;
return (new cljs.core.RecordIter((0),G__1609__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4752__auto__){
var self__ = this;
var this__4752__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4749__auto__){
var self__ = this;
var this__4749__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4758__auto__){
var self__ = this;
var this__4758__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4750__auto__){
var self__ = this;
var this__4750__auto____$1 = this;
var h__4566__auto__ = self__.__hash;
if((!((h__4566__auto__ == null)))){
return h__4566__auto__;
} else {
var h__4566__auto____$1 = ((function (h__4566__auto__,this__4750__auto____$1){
return (function (coll__4751__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll.call(null,coll__4751__auto__));
});})(h__4566__auto__,this__4750__auto____$1))
.call(null,this__4750__auto____$1);
self__.__hash = h__4566__auto____$1;

return h__4566__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1611,other1612){
var self__ = this;
var this1611__$1 = this;
return (((!((other1612 == null)))) && ((this1611__$1.constructor === other1612.constructor)) && (cljs.core._EQ_.call(null,this1611__$1.type_tag,other1612.type_tag)) && (cljs.core._EQ_.call(null,this1611__$1.logical_block,other1612.logical_block)) && (cljs.core._EQ_.call(null,this1611__$1.relative_to,other1612.relative_to)) && (cljs.core._EQ_.call(null,this1611__$1.offset,other1612.offset)) && (cljs.core._EQ_.call(null,this1611__$1.start_pos,other1612.start_pos)) && (cljs.core._EQ_.call(null,this1611__$1.end_pos,other1612.end_pos)) && (cljs.core._EQ_.call(null,this1611__$1.__extmap,other1612.__extmap)));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4763__auto__,k__4764__auto__){
var self__ = this;
var this__4763__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4764__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4763__auto____$1),self__.__meta),k__4764__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4764__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4761__auto__,k__4762__auto__,G__1609){
var self__ = this;
var this__4761__auto____$1 = this;
var pred__1619 = cljs.core.keyword_identical_QMARK_;
var expr__1620 = k__4762__auto__;
if(cljs.core.truth_(pred__1619.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__1620))){
return (new cljs.pprint.indent_t(G__1609,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1619.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__1620))){
return (new cljs.pprint.indent_t(self__.type_tag,G__1609,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1619.call(null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__1620))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__1609,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1619.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__1620))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__1609,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1619.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__1620))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__1609,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1619.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__1620))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__1609,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4762__auto__,G__1609),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4766__auto__){
var self__ = this;
var this__4766__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4753__auto__,G__1609){
var self__ = this;
var this__4753__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__1609,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4759__auto__,entry__4760__auto__){
var self__ = this;
var this__4759__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4760__auto__)){
return this__4759__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4760__auto__,(0)),cljs.core._nth.call(null,entry__4760__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4759__auto____$1,entry__4760__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"relative-to","relative-to",1170431476,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__4799__auto__){
return (new cljs.core.List(null,"cljs.pprint/indent-t",null,(1),null));
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.pprint/indent-t");
});

/**
 * Positional factory function for cljs.pprint/indent-t.
 */
cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/indent-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__1613){
var extmap__4795__auto__ = (function (){var G__1622 = cljs.core.dissoc.call(null,G__1613,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__1613)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__1622);
} else {
return G__1622;
}
})();
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__1613),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__1613),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(G__1613),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__1613),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__1613),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__1613),null,cljs.core.not_empty.call(null,extmap__4795__auto__),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"indent-t","indent-t",528318969),logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__8825__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__8825__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",528318969));
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.write_token !== 'undefined')){
} else {
cljs.pprint.write_token = (function (){var method_table__5027__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5028__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5029__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5030__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5031__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","write-token"),((function (method_table__5027__auto__,prefer_table__5028__auto__,method_cache__5029__auto__,cached_hierarchy__5030__auto__,hierarchy__5031__auto__){
return (function (p1__1625_SHARP_,p2__1624_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(p2__1624_SHARP_);
});})(method_table__5027__auto__,prefer_table__5028__auto__,method_cache__5029__auto__,cached_hierarchy__5030__auto__,hierarchy__5031__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5031__auto__,method_table__5027__auto__,prefer_table__5028__auto__,method_cache__5029__auto__,cached_hierarchy__5030__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),(function (this$,token){
var temp__5535__auto___1626 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5535__auto___1626)){
var cb_1627 = temp__5535__auto___1626;
cb_1627.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
} else {
}

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
var temp__5535__auto___1628 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5535__auto___1628)){
var prefix_1629 = temp__5535__auto___1628;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix_1629);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),(function (this$,token){
var temp__5535__auto___1630 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5535__auto___1630)){
var cb_1631 = temp__5535__auto___1630;
cb_1631.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}

var temp__5535__auto__ = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5535__auto__)){
var suffix = temp__5535__auto__;
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"indent-t","indent-t",528318969),(function (this$,token){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__1632 = cljs.core._EQ_;
var expr__1633 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(pred__1632.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__1633))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__1632.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__1633))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1633)].join('')));
}
}
})()));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),(function (this$,token){
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),(function (this$,token){
if(cljs.core.truth_((function (){var or__4452__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"mandatory","mandatory",542802336));
if(or__4452__auto__){
return or__4452__auto__;
} else {
var and__4441__auto__ = (!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"fill","fill",883462889))));
if(and__4441__auto__){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__4441__auto__;
}
}
})())){
cljs.pprint.emit_nl.call(null,this$,token);
} else {
var temp__5533__auto___1635 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5533__auto___1635)){
var tws_1636 = temp__5533__auto___1635;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_1636);
} else {
}
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__1637 = cljs.core.seq.call(null,tokens);
var chunk__1638 = null;
var count__1639 = (0);
var i__1640 = (0);
while(true){
if((i__1640 < count__1639)){
var token = cljs.core._nth.call(null,chunk__1638,i__1640);
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5533__auto___1641 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5533__auto___1641)){
var tws_1642 = temp__5533__auto___1641;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_1642);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_1643 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__4441__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4441__auto__)){
return tws_1643;
} else {
return and__4441__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_1643);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__1644 = seq__1637;
var G__1645 = chunk__1638;
var G__1646 = count__1639;
var G__1647 = (i__1640 + (1));
seq__1637 = G__1644;
chunk__1638 = G__1645;
count__1639 = G__1646;
i__1640 = G__1647;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq.call(null,seq__1637);
if(temp__5535__auto__){
var seq__1637__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1637__$1)){
var c__4958__auto__ = cljs.core.chunk_first.call(null,seq__1637__$1);
var G__1648 = cljs.core.chunk_rest.call(null,seq__1637__$1);
var G__1649 = c__4958__auto__;
var G__1650 = cljs.core.count.call(null,c__4958__auto__);
var G__1651 = (0);
seq__1637 = G__1648;
chunk__1638 = G__1649;
count__1639 = G__1650;
i__1640 = G__1651;
continue;
} else {
var token = cljs.core.first.call(null,seq__1637__$1);
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5533__auto___1652 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5533__auto___1652)){
var tws_1653 = temp__5533__auto___1652;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_1653);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_1654 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__4441__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4441__auto__)){
return tws_1654;
} else {
return and__4441__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_1654);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__1655 = cljs.core.next.call(null,seq__1637__$1);
var G__1656 = null;
var G__1657 = (0);
var G__1658 = (0);
seq__1637 = G__1655;
chunk__1638 = G__1656;
count__1639 = G__1657;
i__1640 = G__1658;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
return (((maxcol == null)) || (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))) + cljs.pprint.buffer_length.call(null,tokens)) < maxcol)));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__4452__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__4452__auto__)){
return or__4452__auto__;
} else {
return (!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,section)));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width.call(null,this$);
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
var and__4441__auto__ = miser_width;
if(cljs.core.truth_(and__4441__auto__)){
var and__4441__auto____$1 = maxcol;
if(cljs.core.truth_(and__4441__auto____$1)){
var and__4441__auto____$2 = (cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__4441__auto____$2){
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
} else {
return and__4441__auto____$2;
}
} else {
return and__4441__auto____$1;
}
} else {
return and__4441__auto__;
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined')){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__5027__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5028__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5029__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5030__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5031__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","emit-nl?"),((function (method_table__5027__auto__,prefer_table__5028__auto__,method_cache__5029__auto__,cached_hierarchy__5030__auto__,hierarchy__5031__auto__){
return (function (t,_,___$1,___$2){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__5027__auto__,prefer_table__5028__auto__,method_cache__5029__auto__,cached_hierarchy__5030__auto__,hierarchy__5031__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5031__auto__,method_table__5027__auto__,prefer_table__5028__auto__,method_cache__5029__auto__,cached_hierarchy__5030__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"linear","linear",872268697),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"miser","miser",-556060186),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"fill","fill",883462889),(function (newl,this$,section,subsection){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
var or__4452__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__4452__auto__)){
return or__4452__auto__;
} else {
var or__4452__auto____$1 = (!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,subsection)));
if(or__4452__auto____$1){
return or__4452__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}
}
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"mandatory","mandatory",542802336),(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__1659_SHARP_){
return (!(((cljs.pprint.nl_t_QMARK_.call(null,p1__1659_SHARP_)) && (cljs.pprint.ancestor_QMARK_.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__1659_SHARP_),lb)))));
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq.call(null,cljs.core.drop.call(null,(cljs.core.count.call(null,section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__1660_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__1660_SHARP_);
return (!(((cljs.pprint.nl_t_QMARK_.call(null,p1__1660_SHARP_)) && (((cljs.core._EQ_.call(null,nl_lb,lb)) || (cljs.pprint.ancestor_QMARK_.call(null,nl_lb,lb)))))));
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__1661 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__1661;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var istr_1662 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(cljs.core.deref.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count.call(null,prefix))," "));
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),istr_1662);

return cljs.pprint.update_nl_state.call(null,lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq.call(null,cljs.core.take_while.call(null,(function (p1__1663_SHARP_){
return (!(cljs.pprint.nl_t_QMARK_.call(null,p1__1663_SHARP_)));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__1664 = cljs.pprint.split_at_newline.call(null,tokens);
var a = cljs.core.nth.call(null,vec__1664,(0),null);
var b = cljs.core.nth.call(null,vec__1664,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens.call(null,this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__1667 = cljs.pprint.get_section.call(null,b);
var section = cljs.core.nth.call(null,vec__1667,(0),null);
var remainder = cljs.core.nth.call(null,vec__1667,(1),null);
var newl = cljs.core.first.call(null,b);
var do_nl = cljs.pprint.emit_nl_QMARK_.call(null,newl,this$,section,cljs.pprint.get_sub_section.call(null,b));
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl.call(null,this$,newl);

return cljs.core.next.call(null,b);
})()
:b);
var long_section = (!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,result)));
var result__$1 = ((long_section)?(function (){var rem2 = cljs.pprint.write_token_string.call(null,this$,section);
if(cljs.core._EQ_.call(null,rem2,section)){
cljs.pprint.write_tokens.call(null,this$,section,false);

return remainder;
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
while(true){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,buffer));

if((!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,buffer)))){
var new_buffer = cljs.pprint.write_token_string.call(null,this$,buffer);
if((!((buffer === new_buffer)))){
var G__1670 = new_buffer;
buffer = G__1670;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj.call(null,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),token));

if((!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))))))){
return cljs.pprint.write_line.call(null,this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line.call(null,this$);

var temp__5533__auto__ = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5533__auto__)){
var buf = temp__5533__auto__;
cljs.pprint.write_tokens.call(null,this$,buf,true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5535__auto__ = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5535__auto__)){
var tws = temp__5535__auto__;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.call(null,s,"\n",(-1));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,lines),(1))){
return s;
} else {
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))));
var l = cljs.core.first.call(null,lines);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))))){
var oldpos_1675 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_1676 = (oldpos_1675 + cljs.core.count.call(null,l));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_1676);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,l,null,oldpos_1675,newpos_1676));

cljs.pprint.write_buffered_output.call(null,this$);
} else {
cljs.pprint.write_white_space.call(null,this$);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l);
}

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),"\n");

var seq__1671_1677 = cljs.core.seq.call(null,cljs.core.next.call(null,cljs.core.butlast.call(null,lines)));
var chunk__1672_1678 = null;
var count__1673_1679 = (0);
var i__1674_1680 = (0);
while(true){
if((i__1674_1680 < count__1673_1679)){
var l_1681__$1 = cljs.core._nth.call(null,chunk__1672_1678,i__1674_1680);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_1681__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}


var G__1682 = seq__1671_1677;
var G__1683 = chunk__1672_1678;
var G__1684 = count__1673_1679;
var G__1685 = (i__1674_1680 + (1));
seq__1671_1677 = G__1682;
chunk__1672_1678 = G__1683;
count__1673_1679 = G__1684;
i__1674_1680 = G__1685;
continue;
} else {
var temp__5535__auto___1686 = cljs.core.seq.call(null,seq__1671_1677);
if(temp__5535__auto___1686){
var seq__1671_1687__$1 = temp__5535__auto___1686;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1671_1687__$1)){
var c__4958__auto___1688 = cljs.core.chunk_first.call(null,seq__1671_1687__$1);
var G__1689 = cljs.core.chunk_rest.call(null,seq__1671_1687__$1);
var G__1690 = c__4958__auto___1688;
var G__1691 = cljs.core.count.call(null,c__4958__auto___1688);
var G__1692 = (0);
seq__1671_1677 = G__1689;
chunk__1672_1678 = G__1690;
count__1673_1679 = G__1691;
i__1674_1680 = G__1692;
continue;
} else {
var l_1693__$1 = cljs.core.first.call(null,seq__1671_1687__$1);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_1693__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}


var G__1694 = cljs.core.next.call(null,seq__1671_1687__$1);
var G__1695 = null;
var G__1696 = (0);
var G__1697 = (0);
seq__1671_1677 = G__1694;
chunk__1672_1678 = G__1695;
count__1673_1679 = G__1696;
i__1674_1680 = G__1697;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"writing","writing",-1486865108));

return cljs.core.last.call(null,lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),c);
} else {
if(cljs.core._EQ_.call(null,c,"\n")){
return cljs.pprint.write_initial_lines.call(null,this$,"\n");
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,cljs.core.char$.call(null,c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437),new cljs.core.Keyword(null,"buffer-block","buffer-block",-10937307),new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"buffer-level","buffer-level",928864731),new cljs.core.Keyword(null,"buffer","buffer",617295198)],[lb,miser_width,lb,true,null,new cljs.core.Keyword(null,"writing","writing",-1486865108),(0),null,cljs.pprint.column_writer.call(null,writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint1698 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint1698 = (function (writer,max_columns,miser_width,lb,fields,meta1699){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta1699 = meta1699;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint1698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_1700,meta1699__$1){
var self__ = this;
var _1700__$1 = this;
return (new cljs.pprint.t_cljs$pprint1698(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta1699__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint1698.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_1700){
var self__ = this;
var _1700__$1 = this;
return self__.meta1699;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint1698.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint1698.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__1701 = cljs.core._EQ_;
var expr__1702 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__1701.call(null,String,expr__1702))){
var s0 = cljs.pprint.write_initial_lines.call(null,this$__$1,x);
var s = clojure.string.replace_first.call(null,s0,/\s+$/,"");
var white_space = cljs.core.subs.call(null,s0,cljs.core.count.call(null,s));
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
if(cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),s);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),white_space);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
var newpos = (oldpos + cljs.core.count.call(null,s0));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$__$1,cljs.pprint.make_buffer_blob.call(null,s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_(pred__1701.call(null,Number,expr__1702))){
return cljs.pprint.p_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1702)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint1698.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.pprint._ppflush.call(null,this$__$1);

return cljs.core._flush.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint1698.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint1698.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),new cljs.core.Keyword(null,"buffering","buffering",-876713613))){
cljs.pprint.write_tokens.call(null,this$__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space.call(null,this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint1698.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null),new cljs.core.Symbol(null,"lb","lb",950310490,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta1699","meta1699",2051688800,null)], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint1698.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint1698.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint1698";

cljs.pprint.t_cljs$pprint1698.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__4741__auto__,writer__4742__auto__,opt__4743__auto__){
return cljs.core._write.call(null,writer__4742__auto__,"cljs.pprint/t_cljs$pprint1698");
});})(lb,fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint1698.
 */
cljs.pprint.__GT_t_cljs$pprint1698 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint1698(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta1699){
return (new cljs.pprint.t_cljs$pprint1698(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta1699));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint1698(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),lb);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

var temp__5535__auto___1704 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5535__auto___1704)){
var cb_1705 = temp__5535__auto___1704;
cb_1705.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count.call(null,prefix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_start_block_t.call(null,lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var suffix = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

if(cljs.core.truth_(suffix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
}

var temp__5535__auto___1706 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5535__auto___1706)){
var cb_1707 = temp__5535__auto___1706;
cb_1707.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}
} else {
var oldpos_1708 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_1709 = (oldpos_1708 + (cljs.core.truth_(suffix)?cljs.core.count.call(null,suffix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_1709);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_end_block_t.call(null,lb,oldpos_1708,newpos_1709));
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"buffering","buffering",-876713613));

var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_nl_t.call(null,type,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__1710 = cljs.core._EQ_;
var expr__1711 = relative_to;
if(cljs.core.truth_(pred__1710.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__1711))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__1710.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__1711))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1711)].join('')));
}
}
})()));
} else {
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_indent_t.call(null,lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined')){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p1__1713_SHARP_){
var temp__5535__auto__ = cljs.core.get.call(null,t,cljs.core.key.call(null,p1__1713_SHARP_));
if(cljs.core.truth_(temp__5535__auto__)){
var v = temp__5535__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val.call(null,p1__1713_SHARP_)], null);
} else {
return null;
}
}),m));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__4441__auto__ = (((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x));
if(and__4441__auto__){
return new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,x)));
} else {
return and__4441__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer.call(null,base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__4441__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__4441__auto__)){
var and__4441__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__4441__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__4441__auto____$1;
}
} else {
return and__4441__auto__;
}
})();
if((!(cljs.pprint._STAR_print_pretty_STAR_))){
cljs.pprint.pr.call(null,object);
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object);
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__5160__auto__ = [];
var len__5154__auto___1746 = arguments.length;
var i__5155__auto___1747 = (0);
while(true){
if((i__5155__auto___1747 < len__5154__auto___1746)){
args__5160__auto__.push((arguments[i__5155__auto___1747]));

var G__1748 = (i__5155__auto___1747 + (1));
i__5155__auto___1747 = G__1748;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((1) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5161__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream","stream",1534941648),true], null),cljs.core.apply.call(null,cljs.core.hash_map,kw_args));
var _STAR_print_base_STAR__orig_val__1718 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR__orig_val__1719 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR__orig_val__1720 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__1721 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR__orig_val__1722 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR__orig_val__1723 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR__orig_val__1724 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR__orig_val__1725 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR__orig_val__1726 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR__orig_val__1727 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR__orig_val__1728 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR__orig_val__1729 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
var _STAR_print_base_STAR__temp_val__1730 = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);
var _STAR_print_circle_STAR__temp_val__1731 = new cljs.core.Keyword(null,"circle","circle",1903212362).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);
var _STAR_print_length_STAR__temp_val__1732 = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);
var _STAR_print_level_STAR__temp_val__1733 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);
var _STAR_print_lines_STAR__temp_val__1734 = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);
var _STAR_print_miser_width_STAR__temp_val__1735 = new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);
var _STAR_print_pprint_dispatch_STAR__temp_val__1736 = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);
var _STAR_print_pretty_STAR__temp_val__1737 = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);
var _STAR_print_radix_STAR__temp_val__1738 = new cljs.core.Keyword(null,"radix","radix",857016463).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);
var _STAR_print_readably_STAR__temp_val__1739 = new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);
var _STAR_print_right_margin_STAR__temp_val__1740 = new cljs.core.Keyword(null,"right-margin","right-margin",-810413306).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);
var _STAR_print_suppress_namespaces_STAR__temp_val__1741 = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);
cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__temp_val__1730;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__temp_val__1731;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__1732;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__1733;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__temp_val__1734;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__temp_val__1735;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__1736;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__1737;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__temp_val__1738;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__1739;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__temp_val__1740;

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__temp_val__1741;

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"stream","stream",1534941648)))?new cljs.core.Keyword(null,"stream","stream",1534941648).cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = ((((optval === true) || ((optval == null))))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__8820__auto___1749 = base_writer;
var new_writer__8821__auto___1750 = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__8820__auto___1749));
var _STAR_out_STAR__orig_val__1742_1751 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__1743_1752 = ((new_writer__8821__auto___1750)?cljs.pprint.make_pretty_writer.call(null,base_writer__8820__auto___1749,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__8820__auto___1749);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__1743_1752;

try{cljs.pprint.write_out.call(null,object);

cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__1742_1751;
}} else {
var _STAR_out_STAR__orig_val__1744_1753 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__1745_1754 = base_writer;
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__1745_1754;

try{cljs.pprint.pr.call(null,object);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__1744_1753;
}}

if(optval === true){
cljs.core.string_print.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
}

if((optval == null)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__orig_val__1729;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__orig_val__1728;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__1727;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__orig_val__1726;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__1725;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__1724;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__orig_val__1723;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__orig_val__1722;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__1721;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__1720;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__orig_val__1719;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__orig_val__1718;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.pprint.write.cljs$lang$applyTo = (function (seq1716){
var G__1717 = cljs.core.first.call(null,seq1716);
var seq1716__$1 = cljs.core.next.call(null,seq1716);
var self__5139__auto__ = this;
return self__5139__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1717,seq1716__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__1756 = arguments.length;
switch (G__1756) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__1757 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__1758 = (new cljs.core.StringBufferWriter(sb));
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__1758;

try{cljs.pprint.pprint.call(null,object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__1757;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__8820__auto__ = writer;
var new_writer__8821__auto__ = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__8820__auto__));
var _STAR_out_STAR__orig_val__1759 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__1760 = ((new_writer__8821__auto__)?cljs.pprint.make_pretty_writer.call(null,base_writer__8820__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__8820__auto__);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__1760;

try{var _STAR_print_pretty_STAR__orig_val__1761_1764 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_pretty_STAR__temp_val__1762_1765 = true;
cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__1762_1765;

try{cljs.pprint.write_out.call(null,object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__1761_1764;
}
if((!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,cljs.core._STAR_out_STAR_))))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__1759;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not.call(null,choices.call(null,arg))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__4441__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__4441__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__4441__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mandatory","mandatory",542802336),null,new cljs.core.Keyword(null,"miser","miser",-556060186),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"linear","linear",872268697),null], null), null));

return cljs.pprint.nl.call(null,cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg.call(null,relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),null,new cljs.core.Keyword(null,"current","current",-1088038603),null], null), null));

return cljs.pprint.indent.call(null,cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"line-relative","line-relative",1149548219),null,new cljs.core.Keyword(null,"section-relative","section-relative",-658298724),null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__5160__auto__ = [];
var len__5154__auto___1769 = arguments.length;
var i__5155__auto___1770 = (0);
while(true){
if((i__5155__auto___1770 < len__5154__auto___1769)){
args__5160__auto__.push((arguments[i__5155__auto___1770]));

var G__1771 = (i__5155__auto___1770 + (1));
i__5155__auto___1770 = G__1771;
continue;
} else {
}
break;
}

var argseq__5161__auto__ = ((((2) < args__5160__auto__.length))?(new cljs.core.IndexedSeq(args__5160__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5161__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format.call(null,format_in):format_in);
var navigator = cljs.pprint.init_navigator.call(null,args);
return cljs.pprint.execute_format.call(null,writer,compiled_format,navigator);
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq1766){
var G__1767 = cljs.core.first.call(null,seq1766);
var seq1766__$1 = cljs.core.next.call(null,seq1766);
var G__1768 = cljs.core.first.call(null,seq1766__$1);
var seq1766__$2 = cljs.core.next.call(null,seq1766__$1);
var self__5139__auto__ = this;
return self__5139__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1767,G__1768,seq1766__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,offset," "))),"^",cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4754__auto__,k__4755__auto__){
var self__ = this;
var this__4754__auto____$1 = this;
return this__4754__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4755__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4756__auto__,k1773,else__4757__auto__){
var self__ = this;
var this__4756__auto____$1 = this;
var G__1777 = k1773;
var G__1777__$1 = (((G__1777 instanceof cljs.core.Keyword))?G__1777.fqn:null);
switch (G__1777__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1773,else__4757__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4773__auto__,f__4774__auto__,init__4775__auto__){
var self__ = this;
var this__4773__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4773__auto____$1){
return (function (ret__4776__auto__,p__1778){
var vec__1779 = p__1778;
var k__4777__auto__ = cljs.core.nth.call(null,vec__1779,(0),null);
var v__4778__auto__ = cljs.core.nth.call(null,vec__1779,(1),null);
return f__4774__auto__.call(null,ret__4776__auto__,k__4777__auto__,v__4778__auto__);
});})(this__4773__auto____$1))
,init__4775__auto__,this__4773__auto____$1);
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4768__auto__,writer__4769__auto__,opts__4770__auto__){
var self__ = this;
var this__4768__auto____$1 = this;
var pr_pair__4771__auto__ = ((function (this__4768__auto____$1){
return (function (keyval__4772__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4769__auto__,cljs.core.pr_writer,""," ","",opts__4770__auto__,keyval__4772__auto__);
});})(this__4768__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4769__auto__,pr_pair__4771__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__4770__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1772){
var self__ = this;
var G__1772__$1 = this;
return (new cljs.core.RecordIter((0),G__1772__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4752__auto__){
var self__ = this;
var this__4752__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4749__auto__){
var self__ = this;
var this__4749__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4758__auto__){
var self__ = this;
var this__4758__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4750__auto__){
var self__ = this;
var this__4750__auto____$1 = this;
var h__4566__auto__ = self__.__hash;
if((!((h__4566__auto__ == null)))){
return h__4566__auto__;
} else {
var h__4566__auto____$1 = ((function (h__4566__auto__,this__4750__auto____$1){
return (function (coll__4751__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll.call(null,coll__4751__auto__));
});})(h__4566__auto__,this__4750__auto____$1))
.call(null,this__4750__auto____$1);
self__.__hash = h__4566__auto____$1;

return h__4566__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1774,other1775){
var self__ = this;
var this1774__$1 = this;
return (((!((other1775 == null)))) && ((this1774__$1.constructor === other1775.constructor)) && (cljs.core._EQ_.call(null,this1774__$1.seq,other1775.seq)) && (cljs.core._EQ_.call(null,this1774__$1.rest,other1775.rest)) && (cljs.core._EQ_.call(null,this1774__$1.pos,other1775.pos)) && (cljs.core._EQ_.call(null,this1774__$1.__extmap,other1775.__extmap)));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4763__auto__,k__4764__auto__){
var self__ = this;
var this__4763__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"seq","seq",-1817803783),null,new cljs.core.Keyword(null,"rest","rest",-1241696419),null], null), null),k__4764__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4763__auto____$1),self__.__meta),k__4764__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4764__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4761__auto__,k__4762__auto__,G__1772){
var self__ = this;
var this__4761__auto____$1 = this;
var pred__1782 = cljs.core.keyword_identical_QMARK_;
var expr__1783 = k__4762__auto__;
if(cljs.core.truth_(pred__1782.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__1783))){
return (new cljs.pprint.arg_navigator(G__1772,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1782.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__1783))){
return (new cljs.pprint.arg_navigator(self__.seq,G__1772,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1782.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__1783))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__1772,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4762__auto__,G__1772),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4766__auto__){
var self__ = this;
var this__4766__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos,null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4753__auto__,G__1772){
var self__ = this;
var this__4753__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__1772,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4759__auto__,entry__4760__auto__){
var self__ = this;
var this__4759__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4760__auto__)){
return this__4759__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4760__auto__,(0)),cljs.core._nth.call(null,entry__4760__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4759__auto____$1,entry__4760__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__4799__auto__){
return (new cljs.core.List(null,"cljs.pprint/arg-navigator",null,(1),null));
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.pprint/arg-navigator");
});

/**
 * Positional factory function for cljs.pprint/arg-navigator.
 */
cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/arg-navigator, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__1776){
var extmap__4795__auto__ = (function (){var G__1785 = cljs.core.dissoc.call(null,G__1776,new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220));
if(cljs.core.record_QMARK_.call(null,G__1776)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__1785);
} else {
return G__1785;
}
})();
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__1776),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(G__1776),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__1776),null,cljs.core.not_empty.call(null,extmap__4795__auto__),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq.call(null,s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__1787 = cljs.pprint.next_arg.call(null,navigator);
var raw_format = cljs.core.nth.call(null,vec__1787,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__1787,(1),null);
var compiled_format = ((typeof raw_format === 'string')?cljs.pprint.compile_format.call(null,raw_format):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator))){
return cljs.pprint.relative_reposition.call(null,navigator,(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) - position));
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition.call(null,navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4754__auto__,k__4755__auto__){
var self__ = this;
var this__4754__auto____$1 = this;
return this__4754__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4755__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4756__auto__,k1791,else__4757__auto__){
var self__ = this;
var this__4756__auto____$1 = this;
var G__1795 = k1791;
var G__1795__$1 = (((G__1795 instanceof cljs.core.Keyword))?G__1795.fqn:null);
switch (G__1795__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1791,else__4757__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4773__auto__,f__4774__auto__,init__4775__auto__){
var self__ = this;
var this__4773__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4773__auto____$1){
return (function (ret__4776__auto__,p__1796){
var vec__1797 = p__1796;
var k__4777__auto__ = cljs.core.nth.call(null,vec__1797,(0),null);
var v__4778__auto__ = cljs.core.nth.call(null,vec__1797,(1),null);
return f__4774__auto__.call(null,ret__4776__auto__,k__4777__auto__,v__4778__auto__);
});})(this__4773__auto____$1))
,init__4775__auto__,this__4773__auto____$1);
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4768__auto__,writer__4769__auto__,opts__4770__auto__){
var self__ = this;
var this__4768__auto____$1 = this;
var pr_pair__4771__auto__ = ((function (this__4768__auto____$1){
return (function (keyval__4772__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4769__auto__,cljs.core.pr_writer,""," ","",opts__4770__auto__,keyval__4772__auto__);
});})(this__4768__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4769__auto__,pr_pair__4771__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__4770__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1790){
var self__ = this;
var G__1790__$1 = this;
return (new cljs.core.RecordIter((0),G__1790__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4752__auto__){
var self__ = this;
var this__4752__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4749__auto__){
var self__ = this;
var this__4749__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4758__auto__){
var self__ = this;
var this__4758__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4750__auto__){
var self__ = this;
var this__4750__auto____$1 = this;
var h__4566__auto__ = self__.__hash;
if((!((h__4566__auto__ == null)))){
return h__4566__auto__;
} else {
var h__4566__auto____$1 = ((function (h__4566__auto__,this__4750__auto____$1){
return (function (coll__4751__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll.call(null,coll__4751__auto__));
});})(h__4566__auto__,this__4750__auto____$1))
.call(null,this__4750__auto____$1);
self__.__hash = h__4566__auto____$1;

return h__4566__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1792,other1793){
var self__ = this;
var this1792__$1 = this;
return (((!((other1793 == null)))) && ((this1792__$1.constructor === other1793.constructor)) && (cljs.core._EQ_.call(null,this1792__$1.func,other1793.func)) && (cljs.core._EQ_.call(null,this1792__$1.def,other1793.def)) && (cljs.core._EQ_.call(null,this1792__$1.params,other1793.params)) && (cljs.core._EQ_.call(null,this1792__$1.offset,other1793.offset)) && (cljs.core._EQ_.call(null,this1792__$1.__extmap,other1793.__extmap)));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4763__auto__,k__4764__auto__){
var self__ = this;
var this__4763__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"func","func",-238706040),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"def","def",-1043430536),null], null), null),k__4764__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4763__auto____$1),self__.__meta),k__4764__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4764__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4761__auto__,k__4762__auto__,G__1790){
var self__ = this;
var this__4761__auto____$1 = this;
var pred__1800 = cljs.core.keyword_identical_QMARK_;
var expr__1801 = k__4762__auto__;
if(cljs.core.truth_(pred__1800.call(null,new cljs.core.Keyword(null,"func","func",-238706040),expr__1801))){
return (new cljs.pprint.compiled_directive(G__1790,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1800.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),expr__1801))){
return (new cljs.pprint.compiled_directive(self__.func,G__1790,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1800.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__1801))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__1790,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__1800.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__1801))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__1790,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4762__auto__,G__1790),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4766__auto__){
var self__ = this;
var this__4766__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"func","func",-238706040),self__.func,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"def","def",-1043430536),self__.def,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4753__auto__,G__1790){
var self__ = this;
var this__4753__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__1790,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4759__auto__,entry__4760__auto__){
var self__ = this;
var this__4759__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4760__auto__)){
return this__4759__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4760__auto__,(0)),cljs.core._nth.call(null,entry__4760__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4759__auto____$1,entry__4760__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__4799__auto__){
return (new cljs.core.List(null,"cljs.pprint/compiled-directive",null,(1),null));
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.pprint/compiled-directive");
});

/**
 * Positional factory function for cljs.pprint/compiled-directive.
 */
cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

/**
 * Factory function for cljs.pprint/compiled-directive, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__1794){
var extmap__4795__auto__ = (function (){var G__1803 = cljs.core.dissoc.call(null,G__1794,new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311));
if(cljs.core.record_QMARK_.call(null,G__1794)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__1803);
} else {
return G__1803;
}
})();
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(G__1794),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(G__1794),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__1794),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__1794),null,cljs.core.not_empty.call(null,extmap__4795__auto__),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__1805,navigator){
var vec__1806 = p__1805;
var param = cljs.core.nth.call(null,vec__1806,(0),null);
var vec__1809 = cljs.core.nth.call(null,vec__1806,(1),null);
var raw_val = cljs.core.nth.call(null,vec__1809,(0),null);
var offset = cljs.core.nth.call(null,vec__1809,(1),null);
var vec__1812 = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196)))?cljs.pprint.next_arg.call(null,navigator):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.call(null,vec__1812,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__1812,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__1815 = cljs.pprint.map_passing_context.call(null,cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.call(null,vec__1815,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__1815,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_.call(null,n)){
if(cljs.core._EQ_.call(null,cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__4452__auto__ = cljs.core.get.call(null,cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__4452__auto__)){
return or__4452__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__1818 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__1818,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__1818,(1),null);
var base_output = (function (){var or__4452__auto__ = cljs.pprint.format_simple_number.call(null,arg);
if(cljs.core.truth_(or__4452__auto__)){
return or__4452__auto__;
} else {
return print_func.call(null,arg);
}
})();
var base_width = base_output.length;
var min_width = (base_width + new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot.call(null,((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params)) + (1)) * new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(width - base_width),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join(''));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join(''));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_.call(null,x)){
return true;
} else {
if(cljs.pprint.float_QMARK_.call(null,x)){
return cljs.core._EQ_.call(null,x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (p1__1821_SHARP_){
if((p1__1821_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem.call(null,p1__1821_SHARP_,base),cljs.core.quot.call(null,p1__1821_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (xlated_val){
return (function (p1__1822_SHARP_){
if((p1__1822_SHARP_ < (10))){
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"0") + p1__1822_SHARP_));
} else {
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"a") + (p1__1822_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders.call(null,base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str.call(null,base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.reverse.call(null,cljs.core.take.call(null,unit,x))),cljs.core.seq.call(null,cljs.core.drop.call(null,unit,x))], null);
}),cljs.core.reverse.call(null,lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__1824 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__1824,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__1824,(1),null);
if(cljs.pprint.integral_QMARK_.call(null,arg)){
var neg_1827 = (arg < (0));
var pos_arg_1828 = ((neg_1827)?(- arg):arg);
var raw_str_1829 = cljs.pprint.opt_base_str.call(null,base,pos_arg_1828);
var group_str_1830 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.call(null,((function (neg_1827,pos_arg_1828,raw_str_1829,vec__1824,arg,arg_navigator__$1){
return (function (p1__1823_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__1823_SHARP_);
});})(neg_1827,pos_arg_1828,raw_str_1829,vec__1824,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_.call(null,new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083).cljs$core$IFn$_invoke$arity$1(params),raw_str_1829));
var commas = cljs.core.repeat.call(null,cljs.core.count.call(null,groups),new cljs.core.Keyword(null,"commachar","commachar",652859327).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.next.call(null,cljs.core.interleave.call(null,commas,groups)));
})():raw_str_1829);
var signed_str_1831 = ((neg_1827)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_1830)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_1830)].join(''):group_str_1830
));
var padded_str_1832 = (((signed_str_1831.length < new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - signed_str_1831.length),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_1831)].join(''):signed_str_1831);
cljs.pprint.print.call(null,padded_str_1832);
} else {
cljs.pprint.format_ascii.call(null,cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"colinc","colinc",-584873385),(1),new cljs.core.Keyword(null,"minpad","minpad",323570901),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((hundreds > (0))) && ((tens > (0)))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count.call(null,parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first.call(null,parts);
var remainder = cljs.core.next.call(null,parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((!(cljs.core.empty_QMARK_.call(null,this$)))) && ((!(cljs.core.empty_QMARK_.call(null,acc))))))?", ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((!(cljs.core.empty_QMARK_.call(null,this$)))) && (((pos + offset) > (0)))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__1833 = ((cljs.core.empty_QMARK_.call(null,this$))?acc:cljs.core.conj.call(null,acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__1834 = (pos - (1));
var G__1835 = cljs.core.first.call(null,remainder);
var G__1836 = cljs.core.next.call(null,remainder);
acc = G__1833;
pos = G__1834;
this$ = G__1835;
remainder = G__1836;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__1837 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__1837,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__1837,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zero");
} else {
var abs_arg_1840 = (((arg < (0)))?(- arg):arg);
var parts_1841 = cljs.pprint.remainders.call(null,(1000),abs_arg_1840);
if((cljs.core.count.call(null,parts_1841) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_1842 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,parts_1841);
var full_str_1843 = cljs.pprint.add_english_scales.call(null,parts_strs_1842,(0));
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_1843)].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((hundreds > (0))) && ((tens > (0)))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
if((((ten_digit > (0))) && ((!((unit_digit > (0))))))){
return cljs.core.nth.call(null,cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__1844 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__1844,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__1844,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zeroth");
} else {
var abs_arg_1847 = (((arg < (0)))?(- arg):arg);
var parts_1848 = cljs.pprint.remainders.call(null,(1000),abs_arg_1847);
if((cljs.core.count.call(null,parts_1848) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_1849 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,cljs.core.drop_last.call(null,parts_1848));
var head_str_1850 = cljs.pprint.add_english_scales.call(null,parts_strs_1849,(1));
var tail_str_1851 = cljs.pprint.format_simple_ordinal.call(null,cljs.core.last.call(null,parts_1848));
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((!(cljs.core.empty_QMARK_.call(null,head_str_1850)))) && ((!(cljs.core.empty_QMARK_.call(null,tail_str_1851))))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_1850),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_1851)].join(''):(((!(cljs.core.empty_QMARK_.call(null,head_str_1850))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_1850),"th"].join(''):tail_str_1851
)))].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));

var low_two_digits_1852 = cljs.core.rem.call(null,arg,(100));
var not_teens_1853 = ((((11) < low_two_digits_1852)) || (((19) > low_two_digits_1852)));
var low_digit_1854 = cljs.core.rem.call(null,low_two_digits_1852,(10));
cljs.pprint.print.call(null,(((((low_digit_1854 === (1))) && (not_teens_1853)))?"st":(((((low_digit_1854 === (2))) && (not_teens_1853)))?"nd":(((((low_digit_1854 === (3))) && (not_teens_1853)))?"rd":"th"
))));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__1855 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__1855,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__1855,(1),null);
if(((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000))))){
var digits_1858 = cljs.pprint.remainders.call(null,(10),arg);
var acc_1859 = cljs.core.PersistentVector.EMPTY;
var pos_1860 = (cljs.core.count.call(null,digits_1858) - (1));
var digits_1861__$1 = digits_1858;
while(true){
if(cljs.core.empty_QMARK_.call(null,digits_1861__$1)){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,acc_1859));
} else {
var digit_1862 = cljs.core.first.call(null,digits_1861__$1);
var G__1863 = ((cljs.core._EQ_.call(null,(0),digit_1862))?acc_1859:cljs.core.conj.call(null,acc_1859,cljs.core.nth.call(null,cljs.core.nth.call(null,table,pos_1860),(digit_1862 - (1)))));
var G__1864 = (pos_1860 - (1));
var G__1865 = cljs.core.next.call(null,digits_1861__$1);
acc_1859 = G__1863;
pos_1860 = G__1864;
digits_1861__$1 = G__1865;
continue;
}
break;
}
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__1866 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__1866,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__1866,(1),null);
var as_int = cljs.pprint.char_code.call(null,c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.call(null,cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.call(null,"Meta-");
} else {
}

cljs.pprint.print.call(null,(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(base_char + (64))))].join(''):((cljs.core._EQ_.call(null,base_char,(127)))?"Control-?":cljs.core.char$.call(null,base_char)
))));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__1869 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__1869,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__1869,(1),null);
var pred__1872_1875 = cljs.core._EQ_;
var expr__1873_1876 = new cljs.core.Keyword(null,"char-format","char-format",-1016499218).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(pred__1872_1875.call(null,"o",expr__1873_1876))){
cljs.pprint.cl_format.call(null,true,"\\o~3, '0o",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__1872_1875.call(null,"u",expr__1873_1876))){
cljs.pprint.cl_format.call(null,true,"\\u~4, '0x",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__1872_1875.call(null,null,expr__1873_1876))){
cljs.pprint.print_char.call(null,c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1873_1876)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__1877 = cljs.pprint.next_arg.call(null,navigator);
var char$ = cljs.core.nth.call(null,vec__1877,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__1877,(1),null);
cljs.pprint.print.call(null,char$);

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first.call(null,context);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),token)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),token)));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second.call(null,cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.pprint.abort_QMARK_.call(null,context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__1880 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__1880,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__1880,(1),null);
var vec__1883 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__1883,(0),null);
var offsets = cljs.core.nth.call(null,vec__1883,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(f));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count.call(null,s) - (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(dotloc + (1))))].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,(0),exploc),cljs.core.subs.call(null,s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(2),exploc))].join(''),cljs.core.subs.call(null,s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__1886 = cljs.pprint.float_parts_base.call(null,f);
var m = cljs.core.nth.call(null,vec__1886,(0),null);
var e = cljs.core.nth.call(null,vec__1886,(1),null);
var m1 = cljs.pprint.rtrim.call(null,m,"0");
var m2 = cljs.pprint.ltrim.call(null,m1,"0");
var delta = (cljs.core.count.call(null,m1) - cljs.core.count.call(null,m2));
var e__$1 = (((((cljs.core.count.call(null,e) > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,e,(0)),"+"))))?cljs.core.subs.call(null,e,(1)):e);
if(cljs.core.empty_QMARK_.call(null,m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count.call(null,s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.call(null,cljs.core.str,"1",cljs.core.repeat.call(null,(len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.call(null,"9",s.charAt(i))){
var G__1889 = (i - (1));
i = G__1889;
continue;
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.subs.call(null,s,(0),i),cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,s.charAt(i)) + (1))),cljs.core.repeat.call(null,(len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__4452__auto__ = d;
if(cljs.core.truth_(or__4452__auto__)){
return or__4452__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count.call(null,m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__4542__auto__ = (2);
var y__4543__auto__ = w;
return ((x__4542__auto__ > y__4543__auto__) ? x__4542__auto__ : y__4543__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__4542__auto__ = (e + (1));
var y__4543__auto__ = (w__$1 - (1));
return ((x__4542__auto__ > y__4543__auto__) ? x__4542__auto__ : y__4543__auto__);
})():(w__$1 + e)
));
var vec__1890 = ((cljs.core._EQ_.call(null,round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.call(null,vec__1890,(0),null);
var e1 = cljs.core.nth.call(null,vec__1890,(1),null);
var round_pos__$1 = cljs.core.nth.call(null,vec__1890,(2),null);
var len__$1 = cljs.core.nth.call(null,vec__1890,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.call(null,m1,round_pos__$1);
var result = cljs.core.subs.call(null,m1,(0),round_pos__$1);
if((cljs.pprint.char_code.call(null,round_char) >= cljs.pprint.char_code.call(null,"5"))){
var round_up_result = cljs.pprint.inc_s.call(null,result);
var expanded = (cljs.core.count.call(null,round_up_result) > cljs.core.count.call(null,result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.call(null,round_up_result,(0),(cljs.core.count.call(null,round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__1893 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.call(null,vec__1893,(0),null);
var e1 = cljs.core.nth.call(null,vec__1893,(1),null);
var len = cljs.core.count.call(null,m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,(0),loc)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal.call(null,cljs.pprint.expand_fixed.call(null,m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,(0),k)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var vec__1896 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__1896,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__1896,(1),null);
var vec__1899 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.call(null,vec__1899,(0),null);
var abs = cljs.core.nth.call(null,vec__1899,(1),null);
var abs__$1 = cljs.pprint.convert_ratio.call(null,abs);
var vec__1902 = cljs.pprint.float_parts.call(null,abs__$1);
var mantissa = cljs.core.nth.call(null,vec__1902,(0),null);
var exp = cljs.core.nth.call(null,vec__1902,(1),null);
var scaled_exp = (exp + new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__4452__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4452__auto__)){
return or__4452__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = ((cljs.core.not.call(null,d)) && (((cljs.core.count.call(null,mantissa) - (1)) <= scaled_exp)));
var vec__1905 = cljs.pprint.round_str.call(null,mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.call(null,vec__1905,(0),null);
var scaled_exp__$1 = cljs.core.nth.call(null,vec__1905,(1),null);
var expanded = cljs.core.nth.call(null,vec__1905,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__4441__auto__ = w;
if(cljs.core.truth_(and__4441__auto__)){
var and__4441__auto____$1 = d;
if(cljs.core.truth_(and__4441__auto____$1)){
return (((d >= (1))) && (cljs.core._EQ_.call(null,fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.call(null,fixed_repr.charAt((1)),".")) && ((cljs.core.count.call(null,fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0))))));
} else {
return and__4441__auto____$1;
}
} else {
return and__4441__auto__;
}
})())?cljs.core.subs.call(null,fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.call(null,cljs.core.first.call(null,fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_1908 = cljs.core.count.call(null,fixed_repr__$1);
var signed_len_1909 = (cljs.core.truth_(add_sign)?(len_1908 + (1)):len_1908);
var prepend_zero_1910__$1 = ((prepend_zero) && ((!((signed_len_1909 >= w)))));
var append_zero_1911__$1 = ((append_zero) && ((!((signed_len_1909 >= w)))));
var full_len_1912 = ((((prepend_zero_1910__$1) || (append_zero_1911__$1)))?(signed_len_1909 + (1)):signed_len_1909);
if(cljs.core.truth_((function (){var and__4441__auto__ = (full_len_1912 > w);
if(and__4441__auto__){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4441__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len_1912),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_1910__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_1911__$1)?"0":null))].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join(''));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__1913 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__1913,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__1913,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var G__1919_1929 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__1920_1930 = G__1919_1929;
var mantissa_1931 = cljs.core.nth.call(null,vec__1920_1930,(0),null);
var exp_1932 = cljs.core.nth.call(null,vec__1920_1930,(1),null);
var G__1919_1933__$1 = G__1919_1929;
while(true){
var vec__1923_1934 = G__1919_1933__$1;
var mantissa_1935__$1 = cljs.core.nth.call(null,vec__1923_1934,(0),null);
var exp_1936__$1 = cljs.core.nth.call(null,vec__1923_1934,(1),null);
var w_1937 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d_1938 = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e_1939 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var k_1940 = new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params);
var expchar_1941 = (function (){var or__4452__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4452__auto__)){
return or__4452__auto__;
} else {
return "E";
}
})();
var add_sign_1942 = (function (){var or__4452__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4452__auto__)){
return or__4452__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_1943 = (k_1940 <= (0));
var scaled_exp_1944 = (exp_1936__$1 - (k_1940 - (1)));
var scaled_exp_str_1945 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_1944));
var scaled_exp_str_1946__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_1941),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_1944 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_1939)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(e_1939 - cljs.core.count.call(null,scaled_exp_str_1945)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_1945)].join('');
var exp_width_1947 = cljs.core.count.call(null,scaled_exp_str_1946__$1);
var base_mantissa_width_1948 = cljs.core.count.call(null,mantissa_1935__$1);
var scaled_mantissa_1949 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(- k_1940),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_1935__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_1938)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((d_1938 - (base_mantissa_width_1948 - (1))) - (((k_1940 < (0)))?(- k_1940):(0))),"0")):null))].join('');
var w_mantissa_1950 = (cljs.core.truth_(w_1937)?(w_1937 - exp_width_1947):null);
var vec__1926_1951 = cljs.pprint.round_str.call(null,scaled_mantissa_1949,(0),((cljs.core._EQ_.call(null,k_1940,(0)))?(d_1938 - (1)):(((k_1940 > (0)))?d_1938:(((k_1940 < (0)))?(d_1938 - (1)):null))),(cljs.core.truth_(w_mantissa_1950)?(w_mantissa_1950 - (cljs.core.truth_(add_sign_1942)?(1):(0))):null));
var rounded_mantissa_1952 = cljs.core.nth.call(null,vec__1926_1951,(0),null);
var __1953 = cljs.core.nth.call(null,vec__1926_1951,(1),null);
var incr_exp_1954 = cljs.core.nth.call(null,vec__1926_1951,(2),null);
var full_mantissa_1955 = cljs.pprint.insert_scaled_decimal.call(null,rounded_mantissa_1952,k_1940);
var append_zero_1956 = ((cljs.core._EQ_.call(null,k_1940,cljs.core.count.call(null,rounded_mantissa_1952))) && ((d_1938 == null)));
if(cljs.core.not.call(null,incr_exp_1954)){
if(cljs.core.truth_(w_1937)){
var len_1957 = (cljs.core.count.call(null,full_mantissa_1955) + exp_width_1947);
var signed_len_1958 = (cljs.core.truth_(add_sign_1942)?(len_1957 + (1)):len_1957);
var prepend_zero_1959__$1 = ((prepend_zero_1943) && ((!(cljs.core._EQ_.call(null,signed_len_1958,w_1937)))));
var full_len_1960 = ((prepend_zero_1959__$1)?(signed_len_1958 + (1)):signed_len_1958);
var append_zero_1961__$1 = ((append_zero_1956) && ((full_len_1960 < w_1937)));
if(cljs.core.truth_((function (){var and__4441__auto__ = (function (){var or__4452__auto__ = (full_len_1960 > w_1937);
if(or__4452__auto__){
return or__4452__auto__;
} else {
var and__4441__auto__ = e_1939;
if(cljs.core.truth_(and__4441__auto__)){
return ((exp_width_1947 - (2)) > e_1939);
} else {
return and__4441__auto__;
}
}
})();
if(cljs.core.truth_(and__4441__auto__)){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4441__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w_1937,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((w_1937 - full_len_1960) - ((append_zero_1961__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_1942)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_1959__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_1955),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_1961__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_1946__$1)].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_1942)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_1943)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_1955),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_1956)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_1946__$1)].join(''));
}
} else {
var G__1962 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_1952,(exp_1936__$1 + (1))], null);
G__1919_1933__$1 = G__1962;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__1963 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__1963,(0),null);
var _ = cljs.core.nth.call(null,vec__1963,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var vec__1966 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.call(null,vec__1966,(0),null);
var exp = cljs.core.nth.call(null,vec__1966,(1),null);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.call(null,arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__4542__auto__ = cljs.core.count.call(null,mantissa);
var y__4543__auto__ = (function (){var x__4545__auto__ = n;
var y__4546__auto__ = (7);
return ((x__4545__auto__ < y__4546__auto__) ? x__4545__auto__ : y__4546__auto__);
})();
return ((x__4542__auto__ > y__4543__auto__) ? x__4542__auto__ : y__4543__auto__);
})());
var dd = (d__$1 - n);
if(((((0) <= dd)) && ((dd <= d__$1)))){
var navigator__$1 = cljs.pprint.fixed_float.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"w","w",354169001),ww,new cljs.core.Keyword(null,"d","d",1972142424),dd,new cljs.core.Keyword(null,"k","k",-2146297393),(0),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,ee," ")));

return navigator__$1;
} else {
return cljs.pprint.exponential_float.call(null,params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__1969 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__1969,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__1969,(1),null);
var vec__1972 = cljs.pprint.float_parts.call(null,Math.abs(arg));
var mantissa = cljs.core.nth.call(null,vec__1972,(0),null);
var exp = cljs.core.nth.call(null,vec__1972,(1),null);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__4452__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4452__auto__)){
return or__4452__auto__;
} else {
return (arg < (0));
}
})();
var vec__1975 = cljs.pprint.round_str.call(null,mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.call(null,vec__1975,(0),null);
var scaled_exp = cljs.core.nth.call(null,vec__1975,(1),null);
var expanded = cljs.core.nth.call(null,vec__1975,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - fixed_repr.indexOf(".")),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr)].join('');
var full_len = (cljs.core.count.call(null,full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__4441__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4441__auto__)){
return add_sign;
} else {
return and__4441__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__4441__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params));
if(and__4441__auto__){
return add_sign;
} else {
return and__4441__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_repr)].join(''));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(params);
var vec__1978 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg.call(null,arg_navigator));
var arg__$1 = cljs.core.nth.call(null,vec__1978,(0),null);
var navigator = cljs.core.nth.call(null,vec__1978,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count.call(null,clauses)))))?cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.call(null,clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__1981 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__1981,(0),null);
var navigator = cljs.core.nth.call(null,vec__1981,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second.call(null,clauses):cljs.core.first.call(null,clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__1984 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__1984,(0),null);
var navigator = cljs.core.nth.call(null,vec__1984,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first.call(null,clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,arg_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__1987 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__1987,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__1987,(1),null);
var vec__1990 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__1990,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__1990,(1),null);
var args = cljs.pprint.init_navigator.call(null,arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1))))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4452__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(args__$1))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4452__auto__){
return or__4452__auto__;
} else {
var and__4441__auto__ = max_count;
if(cljs.core.truth_(and__4441__auto__)){
return (count >= max_count);
} else {
return and__4441__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,args__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__1993 = (count + (1));
var G__1994 = iter_result;
var G__1995 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__1993;
args__$1 = G__1994;
last_pos = G__1995;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__1996 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__1996,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__1996,(1),null);
var vec__1999 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__1999,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__1999,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__4452__auto__ = ((cljs.core.empty_QMARK_.call(null,arg_list__$1)) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4452__auto__){
return or__4452__auto__;
} else {
var and__4441__auto__ = max_count;
if(cljs.core.truth_(and__4441__auto__)){
return (count >= max_count);
} else {
return and__4441__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,cljs.core.first.call(null,arg_list__$1)),cljs.pprint.init_navigator.call(null,cljs.core.next.call(null,arg_list__$1)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__2002 = (count + (1));
var G__2003 = cljs.core.next.call(null,arg_list__$1);
count = G__2002;
arg_list__$1 = G__2003;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__2004 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__2004,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__2004,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1))))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4452__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4452__auto__){
return or__4452__auto__;
} else {
var and__4441__auto__ = max_count;
if(cljs.core.truth_(and__4441__auto__)){
return (count >= max_count);
} else {
return and__4441__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return cljs.core.second.call(null,iter_result);
} else {
var G__2007 = (count + (1));
var G__2008 = iter_result;
var G__2009 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__2007;
navigator__$2 = G__2008;
last_pos = G__2009;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__2010 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__2010,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__2010,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__4452__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4452__auto__){
return or__4452__auto__;
} else {
var and__4441__auto__ = max_count;
if(cljs.core.truth_(and__4441__auto__)){
return (count >= max_count);
} else {
return and__4441__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__2013 = cljs.pprint.next_arg_or_nil.call(null,navigator__$2);
var sublist = cljs.core.nth.call(null,vec__2013,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__2013,(1),null);
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,sublist),navigator__$3);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$3;
} else {
var G__2016 = (count + (1));
var G__2017 = navigator__$3;
count = G__2016;
navigator__$2 = G__2017;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))){
return cljs.pprint.format_logical_block.call(null,params,navigator,offsets);
} else {
return cljs.pprint.justify_clauses.call(null,params,navigator,offsets);
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_.call(null,clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first.call(null,clauses__$1);
var vec__2018 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__2021 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__2022 = (new cljs.core.StringBufferWriter(sb));
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__2022;

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format.call(null,clause,navigator__$1,base_navigator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__2021;
}})();
var iter_result = cljs.core.nth.call(null,vec__2018,(0),null);
var result_str = cljs.core.nth.call(null,vec__2018,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second.call(null,iter_result)], null);
} else {
var G__2023 = cljs.core.next.call(null,clauses__$1);
var G__2024 = cljs.core.conj.call(null,acc,result_str);
var G__2025 = iter_result;
clauses__$1 = G__2023;
acc = G__2024;
navigator__$1 = G__2025;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__2026 = (function (){var temp__5535__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5535__auto__)){
var else$ = temp__5535__auto__;
return cljs.pprint.render_clauses.call(null,else$,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__2029 = cljs.core.nth.call(null,vec__2026,(0),null);
var eol_str = cljs.core.nth.call(null,vec__2029,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__2026,(1),null);
var navigator__$1 = (function (){var or__4452__auto__ = new_navigator;
if(cljs.core.truth_(or__4452__auto__)){
return or__4452__auto__;
} else {
return navigator;
}
})();
var vec__2032 = (function (){var temp__5535__auto__ = new cljs.core.Keyword(null,"else-params","else-params",-832171646).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5535__auto__)){
var p = temp__5535__auto__;
return cljs.pprint.realize_parameter_list.call(null,p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.call(null,vec__2032,(0),null);
var new_navigator__$1 = cljs.core.nth.call(null,vec__2032,(1),null);
var navigator__$2 = (function (){var or__4452__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__4452__auto__)){
return or__4452__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__4452__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4452__auto__)){
return or__4452__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__4452__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"max-columns","max-columns",1742323262).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4452__auto__)){
return or__4452__auto__;
} else {
return cljs.pprint.get_max_column.call(null,cljs.core._STAR_out_STAR_);
}
})();
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var vec__2035 = cljs.pprint.render_clauses.call(null,clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.call(null,vec__2035,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__2035,(1),null);
var slots = (function (){var x__4542__auto__ = (1);
var y__4543__auto__ = (((cljs.core.count.call(null,strs) - (1)) + (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__4542__auto__ > y__4543__auto__) ? x__4542__auto__ : y__4543__auto__);
})();
var chars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,strs));
var mincol = new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params);
var minpad = new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params);
var colinc = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot.call(null,((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__4542__auto__ = minpad;
var y__4543__auto__ = cljs.core.quot.call(null,total_pad,slots);
return ((x__4542__auto__ > y__4543__auto__) ? x__4542__auto__ : y__4543__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,pad,new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__4441__auto__ = eol_str;
if(cljs.core.truth_(and__4441__auto__)){
return (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__4441__auto__;
}
})())){
cljs.pprint.print.call(null,eol_str);
} else {
}

var slots_2038__$1 = slots;
var extra_pad_2039__$1 = extra_pad;
var strs_2040__$1 = strs;
var pad_only_2041 = (function (){var or__4452__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4452__auto__)){
return or__4452__auto__;
} else {
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,strs_2040__$1),(1))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))));
}
})();
while(true){
if(cljs.core.seq.call(null,strs_2040__$1)){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,pad_only_2041))?cljs.core.first.call(null,strs_2040__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__4452__auto__ = pad_only_2041;
if(cljs.core.truth_(or__4452__auto__)){
return or__4452__auto__;
} else {
var or__4452__auto____$1 = cljs.core.next.call(null,strs_2040__$1);
if(or__4452__auto____$1){
return or__4452__auto____$1;
} else {
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_2039__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params):null))].join(''));

var G__2042 = (slots_2038__$1 - (1));
var G__2043 = (extra_pad_2039__$1 - (1));
var G__2044 = (cljs.core.truth_(pad_only_2041)?strs_2040__$1:cljs.core.next.call(null,strs_2040__$1));
var G__2045 = false;
slots_2038__$1 = G__2042;
extra_pad_2039__$1 = G__2043;
strs_2040__$1 = G__2044;
pad_only_2041 = G__2045;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint2046 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint2046 = (function (writer,meta2047){
this.writer = writer;
this.meta2047 = meta2047;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint2046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2048,meta2047__$1){
var self__ = this;
var _2048__$1 = this;
return (new cljs.pprint.t_cljs$pprint2046(self__.writer,meta2047__$1));
});

cljs.pprint.t_cljs$pprint2046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2048){
var self__ = this;
var _2048__$1 = this;
return self__.meta2047;
});

cljs.pprint.t_cljs$pprint2046.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint2046.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__2049 = cljs.core._EQ_;
var expr__2050 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__2049.call(null,String,expr__2050))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
} else {
if(cljs.core.truth_(pred__2049.call(null,Number,expr__2050))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__2050)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint2046.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta2047","meta2047",-1964046275,null)], null);
});

cljs.pprint.t_cljs$pprint2046.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint2046.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint2046";

cljs.pprint.t_cljs$pprint2046.cljs$lang$ctorPrWriter = (function (this__4741__auto__,writer__4742__auto__,opt__4743__auto__){
return cljs.core._write.call(null,writer__4742__auto__,"cljs.pprint/t_cljs$pprint2046");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint2046.
 */
cljs.pprint.__GT_t_cljs$pprint2046 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint2046(writer__$1,meta2047){
return (new cljs.pprint.t_cljs$pprint2046(writer__$1,meta2047));
});

}

return (new cljs.pprint.t_cljs$pprint2046(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint2052 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint2052 = (function (writer,meta2053){
this.writer = writer;
this.meta2053 = meta2053;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint2052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2054,meta2053__$1){
var self__ = this;
var _2054__$1 = this;
return (new cljs.pprint.t_cljs$pprint2052(self__.writer,meta2053__$1));
});

cljs.pprint.t_cljs$pprint2052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2054){
var self__ = this;
var _2054__$1 = this;
return self__.meta2053;
});

cljs.pprint.t_cljs$pprint2052.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint2052.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__2055 = cljs.core._EQ_;
var expr__2056 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__2055.call(null,String,expr__2056))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,s));
} else {
if(cljs.core.truth_(pred__2055.call(null,Number,expr__2056))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__2056)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint2052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta2053","meta2053",1331399493,null)], null);
});

cljs.pprint.t_cljs$pprint2052.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint2052.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint2052";

cljs.pprint.t_cljs$pprint2052.cljs$lang$ctorPrWriter = (function (this__4741__auto__,writer__4742__auto__,opt__4743__auto__){
return cljs.core._write.call(null,writer__4742__auto__,"cljs.pprint/t_cljs$pprint2052");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint2052.
 */
cljs.pprint.__GT_t_cljs$pprint2052 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint2052(writer__$1,meta2053){
return (new cljs.pprint.t_cljs$pprint2052(writer__$1,meta2053));
});

}

return (new cljs.pprint.t_cljs$pprint2052(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first.call(null,s);
var s__$1 = (cljs.core.truth_((function (){var and__4441__auto__ = first_QMARK_;
if(cljs.core.truth_(and__4441__auto__)){
var and__4441__auto____$1 = f;
if(cljs.core.truth_(and__4441__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__4441__auto____$1;
}
} else {
return and__4441__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(1)))].join(''):s);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_.call(null,s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__4441__auto__ = m;
if(cljs.core.truth_(and__4441__auto__)){
return (m.index + (1));
} else {
return and__4441__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s__$2,offset)))].join(''),cljs.core.subs.call(null,s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint2058 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint2058 = (function (writer,last_was_whitespace_QMARK_,meta2059){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta2059 = meta2059;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint2058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_2060,meta2059__$1){
var self__ = this;
var _2060__$1 = this;
return (new cljs.pprint.t_cljs$pprint2058(self__.writer,self__.last_was_whitespace_QMARK_,meta2059__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint2058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_2060){
var self__ = this;
var _2060__$1 = this;
return self__.meta2059;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint2058.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint2058.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__2061 = cljs.core._EQ_;
var expr__2062 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__2061.call(null,String,expr__2062))){
var s = x;
cljs.core._write.call(null,self__.writer,cljs.pprint.capitalize_string.call(null,s.toLowerCase(),cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1)))));
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__2061.call(null,Number,expr__2062))){
var c = cljs.core.char$.call(null,x);
var mod_c = (cljs.core.truth_(cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_))?clojure.string.upper_case.call(null,c):c);
cljs.core._write.call(null,self__.writer,mod_c);

return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__2062)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint2058.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",-1073928093,null),new cljs.core.Symbol(null,"meta2059","meta2059",-2146973476,null)], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint2058.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint2058.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint2058";

cljs.pprint.t_cljs$pprint2058.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__4741__auto__,writer__4742__auto__,opt__4743__auto__){
return cljs.core._write.call(null,writer__4742__auto__,"cljs.pprint/t_cljs$pprint2058");
});})(last_was_whitespace_QMARK_))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint2058.
 */
cljs.pprint.__GT_t_cljs$pprint2058 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint2058(writer__$1,last_was_whitespace_QMARK___$1,meta2059){
return (new cljs.pprint.t_cljs$pprint2058(writer__$1,last_was_whitespace_QMARK___$1,meta2059));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint2058(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.call(null,false);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint2064 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint2064 = (function (writer,capped,meta2065){
this.writer = writer;
this.capped = capped;
this.meta2065 = meta2065;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint2064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_2066,meta2065__$1){
var self__ = this;
var _2066__$1 = this;
return (new cljs.pprint.t_cljs$pprint2064(self__.writer,self__.capped,meta2065__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint2064.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_2066){
var self__ = this;
var _2066__$1 = this;
return self__.meta2065;
});})(capped))
;

cljs.pprint.t_cljs$pprint2064.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint2064.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__2067 = cljs.core._EQ_;
var expr__2068 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__2067.call(null,String,expr__2068))){
var s = clojure.string.lower_case.call(null,x);
if(cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__4441__auto__ = m;
if(cljs.core.truth_(and__4441__auto__)){
return m.index;
} else {
return and__4441__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write.call(null,self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_.call(null,self__.capped,true);
} else {
return cljs.core._write.call(null,self__.writer,s);
}
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
}
} else {
if(cljs.core.truth_(pred__2067.call(null,Number,expr__2068))){
var c = cljs.core.char$.call(null,x);
if(cljs.core.truth_((function (){var and__4441__auto__ = cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped));
if(and__4441__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__4441__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,self__.capped,true);

return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,c));
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__2068)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint2064.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"capped","capped",-1650988402,null),new cljs.core.Symbol(null,"meta2065","meta2065",129744143,null)], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint2064.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint2064.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint2064";

cljs.pprint.t_cljs$pprint2064.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__4741__auto__,writer__4742__auto__,opt__4743__auto__){
return cljs.core._write.call(null,writer__4742__auto__,"cljs.pprint/t_cljs$pprint2064");
});})(capped))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint2064.
 */
cljs.pprint.__GT_t_cljs$pprint2064 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint2064(writer__$1,capped__$1,meta2065){
return (new cljs.pprint.t_cljs$pprint2064(writer__$1,capped__$1,meta2065));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint2064(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR__orig_val__2070 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__2071 = make_writer.call(null,cljs.core._STAR_out_STAR_);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__2071;

try{return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__2070;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_.call(null,writer))){
return writer;
} else {
return cljs.pprint.pretty_writer.call(null,writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if((((!((cljs.core._STAR_out_STAR_ == null))))?(((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$))))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if((!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))))))){
return cljs.pprint.prn.call(null);
} else {
return null;
}
} else {
return cljs.pprint.prn.call(null);
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_2073 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_2074 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var current_2075 = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))));
var space_count_2076 = (((current_2075 < colnum_2073))?(colnum_2073 - current_2075):((cljs.core._EQ_.call(null,colinc_2074,(0)))?(0):(colinc_2074 - cljs.core.rem.call(null,(current_2075 - colnum_2073),colinc_2074))
));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_2076," ")));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_2077 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_2078 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var start_col_2079 = (colrel_2077 + cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))));
var offset_2080 = (((colinc_2078 > (0)))?cljs.core.rem.call(null,start_col_2079,colinc_2078):(0));
var space_count_2081 = (colrel_2077 + ((cljs.core._EQ_.call(null,(0),offset_2080))?(0):(colinc_2078 - offset_2080)));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_2081," ")));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count.call(null,clauses);
var prefix = (((clause_count > (1)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.first.call(null,clauses)))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.call(null,clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,clauses,(2))))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__2082 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__2082,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__2082,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__2085_2089 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__2086_2090 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__2087_2091 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__2088_2092 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__2087_2091;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__2088_2092;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format.call(null,body,cljs.pprint.init_navigator.call(null,arg),new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__2086_2090;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__2085_2089;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"current","current",-1088038603):new cljs.core.Keyword(null,"block","block",664686210));
cljs.pprint.pprint_indent.call(null,relative_to,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"mandatory","mandatory",542802336):new cljs.core.Keyword(null,"fill","fill",883462889)):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"miser","miser",-556060186):new cljs.core.Keyword(null,"linear","linear",872268697)));
cljs.pprint.pprint_newline.call(null,kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"A",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__2093_SHARP_,p2__2094_SHARP_,p3__2095_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.print_str,p1__2093_SHARP_,p2__2094_SHARP_,p3__2095_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"S",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__2096_SHARP_,p2__2097_SHARP_,p3__2098_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.pr_str,p1__2096_SHARP_,p2__2097_SHARP_,p3__2098_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"D",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__2099_SHARP_,p2__2100_SHARP_,p3__2101_SHARP_){
return cljs.pprint.format_integer.call(null,(10),p1__2099_SHARP_,p2__2100_SHARP_,p3__2101_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"B",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__2102_SHARP_,p2__2103_SHARP_,p3__2104_SHARP_){
return cljs.pprint.format_integer.call(null,(2),p1__2102_SHARP_,p2__2103_SHARP_,p3__2104_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"O",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__2105_SHARP_,p2__2106_SHARP_,p3__2107_SHARP_){
return cljs.pprint.format_integer.call(null,(8),p1__2105_SHARP_,p2__2106_SHARP_,p3__2107_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"X",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__2108_SHARP_,p2__2109_SHARP_,p3__2110_SHARP_){
return cljs.pprint.format_integer.call(null,(16),p1__2108_SHARP_,p2__2109_SHARP_,p3__2110_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"R",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(cljs.core.first.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__2111_SHARP_,p2__2112_SHARP_,p3__2113_SHARP_){
return cljs.pprint.format_integer.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__2111_SHARP_),p1__2111_SHARP_,p2__2112_SHARP_,p3__2113_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__4441__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4441__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4441__auto__;
}
})())){
return (function (p1__2114_SHARP_,p2__2115_SHARP_,p3__2116_SHARP_){
return cljs.pprint.format_old_roman.call(null,p1__2114_SHARP_,p2__2115_SHARP_,p3__2116_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__2117_SHARP_,p2__2118_SHARP_,p3__2119_SHARP_){
return cljs.pprint.format_new_roman.call(null,p1__2117_SHARP_,p2__2118_SHARP_,p3__2119_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__2120_SHARP_,p2__2121_SHARP_,p3__2122_SHARP_){
return cljs.pprint.format_ordinal_english.call(null,p1__2120_SHARP_,p2__2121_SHARP_,p3__2122_SHARP_);
});
} else {
return (function (p1__2123_SHARP_,p2__2124_SHARP_,p3__2125_SHARP_){
return cljs.pprint.format_cardinal_english.call(null,p1__2123_SHARP_,p2__2124_SHARP_,p3__2125_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"P",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition.call(null,navigator,(-1)):navigator);
var strs = (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__2135 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg = cljs.core.nth.call(null,vec__2135,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__2135,(1),null);
cljs.pprint.print.call(null,((cljs.core._EQ_.call(null,arg,(1)))?cljs.core.first.call(null,strs):cljs.core.second.call(null,strs)));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"C",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"char-format","char-format",-1016499218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"F",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"E",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"G",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"$",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"%",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__5021__auto___2153 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_2154 = (0);
while(true){
if((i_2154 < n__5021__auto___2153)){
cljs.pprint.prn.call(null);

var G__2155 = (i_2154 + (1));
i_2154 = G__2155;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"&",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_2156 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_2156 > (0))){
cljs.pprint.fresh_line.call(null);
} else {
}

var n__5021__auto___2157 = (cnt_2156 - (1));
var i_2158 = (0);
while(true){
if((i_2158 < n__5021__auto___2157)){
cljs.pprint.prn.call(null);

var G__2159 = (i_2158 + (1));
i_2158 = G__2159;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"|",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__5021__auto___2160 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_2161 = (0);
while(true){
if((i_2161 < n__5021__auto___2160)){
cljs.pprint.print.call(null,"\f");

var G__2162 = (i_2161 + (1));
i_2161 = G__2162;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"~",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"~")));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"\n",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn.call(null);
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"T",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"colnum","colnum",2023796854),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__2126_SHARP_,p2__2127_SHARP_,p3__2128_SHARP_){
return cljs.pprint.relative_tabulation.call(null,p1__2126_SHARP_,p2__2127_SHARP_,p3__2128_SHARP_);
});
} else {
return (function (p1__2129_SHARP_,p2__2130_SHARP_,p3__2131_SHARP_){
return cljs.pprint.absolute_tabulation.call(null,p1__2129_SHARP_,p2__2130_SHARP_,p3__2131_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"*",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition.call(null,navigator,n);
} else {
return cljs.pprint.relative_reposition.call(null,navigator,(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"?",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__2138 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__2138,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__2138,(1),null);
return cljs.pprint.execute_sub_format.call(null,subformat,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__2141 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__2141,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__2141,(1),null);
var vec__2144 = cljs.pprint.next_arg.call(null,navigator__$1);
var subargs = cljs.core.nth.call(null,vec__2144,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__2144,(1),null);
var sub_navigator = cljs.pprint.init_navigator.call(null,subargs);
cljs.pprint.execute_sub_format.call(null,subformat,sub_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"(",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),")",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),null,new cljs.core.Keyword(null,"else","else",-1508377146),null], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__4441__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4441__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4441__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__2132_SHARP_,p2__2133_SHARP_,p3__2134_SHARP_){
return cljs.pprint.modify_case.call(null,mod_case_writer,p1__2132_SHARP_,p2__2133_SHARP_,p3__2134_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),")",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"[",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),"]",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"last","last",1105735132)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),";",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"max-columns","max-columns",1742323262),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator","separator",-1628749125),true], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"]",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"{",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),"}",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),false], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var and__4441__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4441__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4441__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"}",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"<",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),">",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"first","first",-644103046)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),">",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"^",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(3),[new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007):new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333));
if(cljs.core.truth_((function (){var and__4441__auto__ = arg1;
if(cljs.core.truth_(and__4441__auto__)){
var and__4441__auto____$1 = arg2;
if(cljs.core.truth_(and__4441__auto____$1)){
return arg3;
} else {
return and__4441__auto____$1;
}
} else {
return and__4441__auto__;
}
})())){
if((((arg1 <= arg2)) && ((arg2 <= arg3)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__4441__auto__ = arg1;
if(cljs.core.truth_(and__4441__auto__)){
return arg2;
} else {
return and__4441__auto__;
}
})())){
if(cljs.core._EQ_.call(null,arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.call(null,arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"W",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var or__4452__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4452__auto__)){
return or__4452__auto__;
} else {
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"length","length",588987862),null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__2147 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__2147,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__2147,(1),null);
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__2150 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__2150,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__2150,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out.call(null,arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"_",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"I",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335),null,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196),null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__2163){
var vec__2164 = p__2163;
var s = cljs.core.nth.call(null,vec__2164,(0),null);
var offset = cljs.core.nth.call(null,vec__2164,(1),null);
var saw_comma = cljs.core.nth.call(null,vec__2164,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first.call(null,param);
var remainder = cljs.core.subs.call(null,s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if((!(cljs.core._EQ_.call(null,",",cljs.core.nth.call(null,remainder,(0)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error.call(null,"Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume.call(null,cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__2167){
var vec__2168 = p__2167;
var p = cljs.core.nth.call(null,vec__2168,(0),null);
var offset = cljs.core.nth.call(null,vec__2168,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,p.length,(0)))?null:((((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.call(null,p,(0))))))?new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196):((((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core._EQ_.call(null,"#",cljs.core.nth.call(null,p,(0))))))?new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335):((((cljs.core._EQ_.call(null,p.length,(2))) && (cljs.core._EQ_.call(null,"'",cljs.core.nth.call(null,p,(0))))))?cljs.core.nth.call(null,p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",new cljs.core.Keyword(null,"colon","colon",-965200945),"@",new cljs.core.Keyword(null,"at","at",1476951349)], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume.call(null,(function (p__2171){
var vec__2172 = p__2171;
var s__$1 = cljs.core.nth.call(null,vec__2172,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__2172,(1),null);
var flags = cljs.core.nth.call(null,vec__2172,(2),null);
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.call(null,cljs.pprint.flag_defs,cljs.core.first.call(null,s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_.call(null,flags,flag)){
return cljs.pprint.format_error.call(null,["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.call(null,flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__4441__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__4441__auto__){
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4441__auto__;
}
})())){
cljs.pprint.format_error.call(null,["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__4441__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__4441__auto__){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4441__auto__;
}
})())){
cljs.pprint.format_error.call(null,["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__4441__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"both","both",-393648840).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__4441__auto__){
var and__4441__auto____$1 = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__4441__auto____$1)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4441__auto____$1;
}
} else {
return and__4441__auto__;
}
})())){
return cljs.pprint.format_error.call(null,["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__4545__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__4546__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__4545__auto__ < y__4546__auto__) ? x__4545__auto__ : y__4546__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags.call(null,def,flags);

if((cljs.core.count.call(null,params) > cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error.call(null,cljs.pprint.cl_format.call(null,null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def),cljs.core.count.call(null,params),cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def))),cljs.core.second.call(null,cljs.core.first.call(null,params)));
} else {
}

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2175_SHARP_,p2__2176_SHARP_){
var val = cljs.core.first.call(null,p1__2175_SHARP_);
if((!((((val == null)) || (cljs.core.contains_QMARK_.call(null,cljs.pprint.special_params,val)) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,cljs.core.second.call(null,p2__2176_SHARP_)),cljs.core.type.call(null,val))))))){
return cljs.pprint.format_error.call(null,["Parameter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.first.call(null,p2__2176_SHARP_)))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,val))].join(''),cljs.core.second.call(null,p1__2175_SHARP_));
} else {
return null;
}
}),params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,(function (){var iter__4913__auto__ = (function cljs$pprint$map_params_$_iter__2180(s__2181){
return (new cljs.core.LazySeq(null,(function (){
var s__2181__$1 = s__2181;
while(true){
var temp__5535__auto__ = cljs.core.seq.call(null,s__2181__$1);
if(temp__5535__auto__){
var s__2181__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2181__$2)){
var c__4911__auto__ = cljs.core.chunk_first.call(null,s__2181__$2);
var size__4912__auto__ = cljs.core.count.call(null,c__4911__auto__);
var b__2183 = cljs.core.chunk_buffer.call(null,size__4912__auto__);
if((function (){var i__2182 = (0);
while(true){
if((i__2182 < size__4912__auto__)){
var vec__2184 = cljs.core._nth.call(null,c__4911__auto__,i__2182);
var name = cljs.core.nth.call(null,vec__2184,(0),null);
var vec__2187 = cljs.core.nth.call(null,vec__2184,(1),null);
var default$ = cljs.core.nth.call(null,vec__2187,(0),null);
cljs.core.chunk_append.call(null,b__2183,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__2196 = (i__2182 + (1));
i__2182 = G__2196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2183),cljs$pprint$map_params_$_iter__2180.call(null,cljs.core.chunk_rest.call(null,s__2181__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2183),null);
}
} else {
var vec__2190 = cljs.core.first.call(null,s__2181__$2);
var name = cljs.core.nth.call(null,vec__2190,(0),null);
var vec__2193 = cljs.core.nth.call(null,vec__2190,(1),null);
var default$ = cljs.core.nth.call(null,vec__2193,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__2180.call(null,cljs.core.rest.call(null,s__2181__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4913__auto__.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.call(null,(function (p1__2177_SHARP_,p2__2178_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc,p1__2177_SHARP_,p2__2178_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__2179_SHARP_){
return cljs.core.first.call(null,cljs.core.nth.call(null,p1__2179_SHARP_,(1)));
}),cljs.core.zipmap.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)),params))),flags);
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__2197 = cljs.pprint.extract_params.call(null,s,offset);
var raw_params = cljs.core.nth.call(null,vec__2197,(0),null);
var vec__2200 = cljs.core.nth.call(null,vec__2197,(1),null);
var rest = cljs.core.nth.call(null,vec__2200,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__2200,(1),null);
var vec__2203 = cljs.pprint.extract_flags.call(null,rest,offset__$1);
var _ = cljs.core.nth.call(null,vec__2203,(0),null);
var vec__2206 = cljs.core.nth.call(null,vec__2203,(1),null);
var rest__$1 = cljs.core.nth.call(null,vec__2206,(0),null);
var offset__$2 = cljs.core.nth.call(null,vec__2206,(1),null);
var flags = cljs.core.nth.call(null,vec__2206,(2),null);
var directive = cljs.core.first.call(null,rest__$1);
var def = cljs.core.get.call(null,cljs.pprint.directive_table,clojure.string.upper_case.call(null,directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params.call(null,def,cljs.core.map.call(null,cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not.call(null,directive)){
cljs.pprint.format_error.call(null,"Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not.call(null,def)){
cljs.pprint.format_error.call(null,["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656).cljs$core$IFn$_invoke$arity$1(def).call(null,params,offset__$2),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.call(null,rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = ((cljs.core._EQ_.call(null,"\n",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count.call(null,remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.call(null,remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.call(null,s);

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__4441__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__4441__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__4441__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__2209 = cljs.pprint.collect_clauses.call(null,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.call(null,vec__2209,(0),null);
var remainder__$1 = cljs.core.nth.call(null,vec__2209,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map.call(null,subex,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$))),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume.call(null,(function (remainder__$1){
if(cljs.core.empty_QMARK_.call(null,remainder__$1)){
return cljs.pprint.format_error.call(null,"No closing bracket found.",offset);
} else {
var this$ = cljs.core.first.call(null,remainder__$1);
var remainder__$2 = cljs.core.next.call(null,remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket.call(null,this$))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket_info),new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",-1508377146),null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second.call(null,cljs.pprint.consume.call(null,(function (p__2212){
var vec__2213 = p__2212;
var clause_map = cljs.core.nth.call(null,vec__2213,(0),null);
var saw_else = cljs.core.nth.call(null,vec__2213,(1),null);
var remainder__$1 = cljs.core.nth.call(null,vec__2213,(2),null);
var vec__2216 = cljs.pprint.process_clause.call(null,bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.call(null,vec__2216,(0),null);
var vec__2219 = cljs.core.nth.call(null,vec__2216,(1),null);
var type = cljs.core.nth.call(null,vec__2219,(0),null);
var right_params = cljs.core.nth.call(null,vec__2219,(1),null);
var else_params = cljs.core.nth.call(null,vec__2219,(2),null);
var remainder__$2 = cljs.core.nth.call(null,vec__2219,(3),null);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?new cljs.core.Keyword(null,"else","else",-1508377146):new cljs.core.Keyword(null,"clauses","clauses",1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"right-params","right-params",-1790676237),right_params])),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"else","else",-1508377146))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error.call(null,"Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause_map))))){
return cljs.pprint.format_error.call(null,"The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"else-params","else-params",-832171646),else_params], null)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"separator","separator",-1628749125))){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error.call(null,"A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (remainder){
var this$ = cljs.core.first.call(null,remainder);
var remainder__$1 = cljs.core.next.call(null,remainder);
var bracket = new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR__orig_val__2222 = cljs.pprint._STAR_format_str_STAR_;
var _STAR_format_str_STAR__temp_val__2223 = format_str;
cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__temp_val__2223;

try{return cljs.pprint.process_nesting.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (_STAR_format_str_STAR__orig_val__2222,_STAR_format_str_STAR__temp_val__2223){
return (function (p__2224){
var vec__2225 = p__2224;
var s = cljs.core.nth.call(null,vec__2225,(0),null);
var offset = cljs.core.nth.call(null,vec__2225,(1),null);
if(cljs.core.empty_QMARK_.call(null,s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive.call(null,cljs.core.subs.call(null,s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,cljs.core.subs.call(null,s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR__orig_val__2222,_STAR_format_str_STAR__temp_val__2223))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__orig_val__2222;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_.call(null,format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__4452__auto__ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1))));
if(cljs.core.truth_(or__4452__auto__)){
return or__4452__auto__;
} else {
var or__4452__auto____$1 = cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
if(cljs.core.truth_(or__4452__auto____$1)){
return or__4452__auto____$1;
} else {
return cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
}
}
})())){
return true;
} else {
var G__2228 = cljs.core.next.call(null,format__$1);
format__$1 = G__2228;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__2230 = arguments.length;
switch (G__2230) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = ((((cljs.core.not.call(null,stream)) || (stream === true)))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = ((((cljs.pprint.needs_pretty.call(null,format)) && (cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,real_stream)))))?cljs.pprint.get_pretty_writer.call(null,real_stream):real_stream);
var _STAR_out_STAR__orig_val__2231 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__2232 = wrapped_stream;
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__2232;

try{try{cljs.pprint.execute_format.call(null,format,args);
}finally {if((!((real_stream === wrapped_stream)))){
cljs.core._flush.call(null,wrapped_stream);
} else {
}
}
if(cljs.core.not.call(null,stream)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if(stream === true){
return cljs.core.string_print.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__2231;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.pprint.abort_QMARK_.call(null,context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__2233 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__2233,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__2233,(1),null);
var vec__2236 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__2236,(0),null);
var offsets = cljs.core.nth.call(null,vec__2236,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize.call(null,cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method.call(null,multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"quote","quote",1377916282,null),"'",new cljs.core.Symbol(null,"var","var",870848730,null),"#'",new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),"@",new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),"~",new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),"@",new cljs.core.Symbol("cljs.core","unquote","cljs.core/unquote",1013085760,null),"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = cljs.pprint.reader_macros.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_((function (){var and__4441__auto__ = macro_char;
if(cljs.core.truth_(and__4441__auto__)){
return cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,alis));
} else {
return and__4441__auto__;
}
})())){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__2240_2245 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__2241_2246 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__2242_2247 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__2243_2248 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__2242_2247;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__2243_2248;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

var length_count2244_2249 = (0);
var alis_2250__$1 = cljs.core.seq.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count2244_2249 < cljs.core._STAR_print_length_STAR_)))){
if(alis_2250__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_2250__$1));

if(cljs.core.next.call(null,alis_2250__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__2251 = (length_count2244_2249 + (1));
var G__2252 = cljs.core.next.call(null,alis_2250__$1);
length_count2244_2249 = G__2251;
alis_2250__$1 = G__2252;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__2241_2246;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__2240_2245;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
return cljs.pprint.pprint_simple_list.call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__2253_2258 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__2254_2259 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__2255_2260 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__2256_2261 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__2255_2260;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__2256_2261;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count2257_2262 = (0);
var aseq_2263 = cljs.core.seq.call(null,avec);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count2257_2262 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_2263){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,aseq_2263));

if(cljs.core.next.call(null,aseq_2263)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__2264 = (length_count2257_2262 + (1));
var G__2265 = cljs.core.next.call(null,aseq_2263);
length_count2257_2262 = G__2264;
aseq_2263 = G__2265;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__2254_2259;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__2253_2258;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__8853__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__8854__auto__ = ((typeof format_in__8853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8853__auto__):format_in__8853__auto__);
return ((function (format_in__8853__auto__,cf__8854__auto__){
return (function() { 
var G__2266__delegate = function (args__8855__auto__){
var navigator__8856__auto__ = cljs.pprint.init_navigator.call(null,args__8855__auto__);
return cljs.pprint.execute_format.call(null,cf__8854__auto__,navigator__8856__auto__);
};
var G__2266 = function (var_args){
var args__8855__auto__ = null;
if (arguments.length > 0) {
var G__2267__i = 0, G__2267__a = new Array(arguments.length -  0);
while (G__2267__i < G__2267__a.length) {G__2267__a[G__2267__i] = arguments[G__2267__i + 0]; ++G__2267__i;}
  args__8855__auto__ = new cljs.core.IndexedSeq(G__2267__a,0,null);
} 
return G__2266__delegate.call(this,args__8855__auto__);};
G__2266.cljs$lang$maxFixedArity = 0;
G__2266.cljs$lang$applyTo = (function (arglist__2268){
var args__8855__auto__ = cljs.core.seq(arglist__2268);
return G__2266__delegate(args__8855__auto__);
});
G__2266.cljs$core$IFn$_invoke$arity$variadic = G__2266__delegate;
return G__2266;
})()
;
;})(format_in__8853__auto__,cf__8854__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__2269 = (((!(cljs.core.record_QMARK_.call(null,amap))))?new cljs.core.Var(function(){return cljs.core.lift_ns;},new cljs.core.Symbol("cljs.core","lift-ns","cljs.core/lift-ns",463499081,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"lift-ns","lift-ns",602311926,null),"cljs/core.cljs",(15),(1),(10127),(10127),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)])).call(null,amap):null);
var ns = cljs.core.nth.call(null,vec__2269,(0),null);
var lift_map = cljs.core.nth.call(null,vec__2269,(1),null);
var amap__$1 = (function (){var or__4452__auto__ = lift_map;
if(cljs.core.truth_(or__4452__auto__)){
return or__4452__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__2272_2281 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__2273_2282 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__2274_2283 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__2275_2284 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__2274_2283;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__2275_2284;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count2276_2285 = (0);
var aseq_2286 = cljs.core.seq.call(null,amap__$1);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count2276_2285 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_2286){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__2277_2287 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__2278_2288 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__2279_2289 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__2280_2290 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__2279_2289;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__2280_2290;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out.call(null,cljs.core.ffirst.call(null,aseq_2286));

cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out.call(null,cljs.core.fnext.call(null,cljs.core.first.call(null,aseq_2286)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__2278_2288;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__2277_2287;
}}


if(cljs.core.next.call(null,aseq_2286)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__2291 = (length_count2276_2285 + (1));
var G__2292 = cljs.core.next.call(null,aseq_2286);
length_count2276_2285 = G__2291;
aseq_2286 = G__2292;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__2273_2282;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__2272_2281;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,obj));
});
cljs.pprint.pprint_set = (function (){var format_in__8853__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__8854__auto__ = ((typeof format_in__8853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8853__auto__):format_in__8853__auto__);
return ((function (format_in__8853__auto__,cf__8854__auto__){
return (function() { 
var G__2293__delegate = function (args__8855__auto__){
var navigator__8856__auto__ = cljs.pprint.init_navigator.call(null,args__8855__auto__);
return cljs.pprint.execute_format.call(null,cf__8854__auto__,navigator__8856__auto__);
};
var G__2293 = function (var_args){
var args__8855__auto__ = null;
if (arguments.length > 0) {
var G__2294__i = 0, G__2294__a = new Array(arguments.length -  0);
while (G__2294__i < G__2294__a.length) {G__2294__a[G__2294__i] = arguments[G__2294__i + 0]; ++G__2294__i;}
  args__8855__auto__ = new cljs.core.IndexedSeq(G__2294__a,0,null);
} 
return G__2293__delegate.call(this,args__8855__auto__);};
G__2293.cljs$lang$maxFixedArity = 0;
G__2293.cljs$lang$applyTo = (function (arglist__2295){
var args__8855__auto__ = cljs.core.seq(arglist__2295);
return G__2293__delegate(args__8855__auto__);
});
G__2293.cljs$core$IFn$_invoke$arity$variadic = G__2293__delegate;
return G__2293;
})()
;
;})(format_in__8853__auto__,cf__8854__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__4452__auto__ = (function (){var temp__5535__auto__ = cljs.core.re_find.call(null,/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5535__auto__)){
var match = temp__5535__auto__;
return cljs.pprint.type_map.call(null,match);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4452__auto__)){
return or__4452__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type.call(null,cljs.core.type.call(null,o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__2296_2302 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__2297_2303 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__2298_2304 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__2299_2305 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__2298_2304;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__2299_2305;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(- (cljs.core.count.call(null,prefix) - (2))));

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint.write_out.call(null,(((function (){var and__4441__auto__ = (((!((o == null))))?(((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$))))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o));
if(and__4441__auto__){
return (!(cljs.core._realized_QMARK_.call(null,o)));
} else {
return and__4441__auto__;
}
})())?new cljs.core.Keyword(null,"not-delivered","not-delivered",1599158697):cljs.core.deref.call(null,o)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__2297_2303;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__2296_2302;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__8853__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__8854__auto__ = ((typeof format_in__8853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8853__auto__):format_in__8853__auto__);
return ((function (format_in__8853__auto__,cf__8854__auto__){
return (function() { 
var G__2306__delegate = function (args__8855__auto__){
var navigator__8856__auto__ = cljs.pprint.init_navigator.call(null,args__8855__auto__);
return cljs.pprint.execute_format.call(null,cf__8854__auto__,navigator__8856__auto__);
};
var G__2306 = function (var_args){
var args__8855__auto__ = null;
if (arguments.length > 0) {
var G__2307__i = 0, G__2307__a = new Array(arguments.length -  0);
while (G__2307__i < G__2307__a.length) {G__2307__a[G__2307__i] = arguments[G__2307__i + 0]; ++G__2307__i;}
  args__8855__auto__ = new cljs.core.IndexedSeq(G__2307__a,0,null);
} 
return G__2306__delegate.call(this,args__8855__auto__);};
G__2306.cljs$lang$maxFixedArity = 0;
G__2306.cljs$lang$applyTo = (function (arglist__2308){
var args__8855__auto__ = cljs.core.seq(arglist__2308);
return G__2306__delegate(args__8855__auto__);
});
G__2306.cljs$core$IFn$_invoke$arity$variadic = G__2306__delegate;
return G__2306;
})()
;
;})(format_in__8853__auto__,cf__8854__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return new cljs.core.Keyword(null,"queue","queue",1455835879);
} else {
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj))){
return new cljs.core.Keyword(null,"deref","deref",-145586795);
} else {
if((obj instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
if(cljs.core.seq_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.map_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.vector_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.set_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((obj == null)){
return null;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
}
}
}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.simple_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__5027__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5028__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5029__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5030__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5031__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5031__auto__,method_table__5027__auto__,prefer_table__5028__auto__,method_cache__5029__auto__,cached_hierarchy__5030__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_list);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,null));
}));
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_.call(null,form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_.call(null,reference)){
var vec__2310 = cljs.pprint.brackets.call(null,reference);
var start = cljs.core.nth.call(null,vec__2310,(0),null);
var end = cljs.core.nth.call(null,vec__2310,(1),null);
var vec__2313 = reference;
var seq__2314 = cljs.core.seq.call(null,vec__2313);
var first__2315 = cljs.core.first.call(null,seq__2314);
var seq__2314__$1 = cljs.core.next.call(null,seq__2314);
var keyw = first__2315;
var args = seq__2314__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__2316_2330 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__2317_2331 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__2318_2332 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__2319_2333 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__2318_2332;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__2319_2333;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__8853__auto__ = "~w~:i";
var cf__8854__auto__ = ((typeof format_in__8853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8853__auto__):format_in__8853__auto__);
return ((function (format_in__8853__auto__,cf__8854__auto__,_STAR_current_level_STAR__orig_val__2316_2330,_STAR_current_length_STAR__orig_val__2317_2331,_STAR_current_level_STAR__temp_val__2318_2332,_STAR_current_length_STAR__temp_val__2319_2333,vec__2310,start,end,vec__2313,seq__2314,first__2315,seq__2314__$1,keyw,args){
return (function() { 
var G__2334__delegate = function (args__8855__auto__){
var navigator__8856__auto__ = cljs.pprint.init_navigator.call(null,args__8855__auto__);
return cljs.pprint.execute_format.call(null,cf__8854__auto__,navigator__8856__auto__);
};
var G__2334 = function (var_args){
var args__8855__auto__ = null;
if (arguments.length > 0) {
var G__2335__i = 0, G__2335__a = new Array(arguments.length -  0);
while (G__2335__i < G__2335__a.length) {G__2335__a[G__2335__i] = arguments[G__2335__i + 0]; ++G__2335__i;}
  args__8855__auto__ = new cljs.core.IndexedSeq(G__2335__a,0,null);
} 
return G__2334__delegate.call(this,args__8855__auto__);};
G__2334.cljs$lang$maxFixedArity = 0;
G__2334.cljs$lang$applyTo = (function (arglist__2336){
var args__8855__auto__ = cljs.core.seq(arglist__2336);
return G__2334__delegate(args__8855__auto__);
});
G__2334.cljs$core$IFn$_invoke$arity$variadic = G__2334__delegate;
return G__2334;
})()
;
;})(format_in__8853__auto__,cf__8854__auto__,_STAR_current_level_STAR__orig_val__2316_2330,_STAR_current_length_STAR__orig_val__2317_2331,_STAR_current_level_STAR__temp_val__2318_2332,_STAR_current_length_STAR__temp_val__2319_2333,vec__2310,start,end,vec__2313,seq__2314,first__2315,seq__2314__$1,keyw,args))
})().call(null,keyw);

var args_2337__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_2337__$1)){
(function (){var format_in__8853__auto__ = " ";
var cf__8854__auto__ = ((typeof format_in__8853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8853__auto__):format_in__8853__auto__);
return ((function (args_2337__$1,format_in__8853__auto__,cf__8854__auto__,_STAR_current_level_STAR__orig_val__2316_2330,_STAR_current_length_STAR__orig_val__2317_2331,_STAR_current_level_STAR__temp_val__2318_2332,_STAR_current_length_STAR__temp_val__2319_2333,vec__2310,start,end,vec__2313,seq__2314,first__2315,seq__2314__$1,keyw,args){
return (function() { 
var G__2338__delegate = function (args__8855__auto__){
var navigator__8856__auto__ = cljs.pprint.init_navigator.call(null,args__8855__auto__);
return cljs.pprint.execute_format.call(null,cf__8854__auto__,navigator__8856__auto__);
};
var G__2338 = function (var_args){
var args__8855__auto__ = null;
if (arguments.length > 0) {
var G__2339__i = 0, G__2339__a = new Array(arguments.length -  0);
while (G__2339__i < G__2339__a.length) {G__2339__a[G__2339__i] = arguments[G__2339__i + 0]; ++G__2339__i;}
  args__8855__auto__ = new cljs.core.IndexedSeq(G__2339__a,0,null);
} 
return G__2338__delegate.call(this,args__8855__auto__);};
G__2338.cljs$lang$maxFixedArity = 0;
G__2338.cljs$lang$applyTo = (function (arglist__2340){
var args__8855__auto__ = cljs.core.seq(arglist__2340);
return G__2338__delegate(args__8855__auto__);
});
G__2338.cljs$core$IFn$_invoke$arity$variadic = G__2338__delegate;
return G__2338;
})()
;
;})(args_2337__$1,format_in__8853__auto__,cf__8854__auto__,_STAR_current_level_STAR__orig_val__2316_2330,_STAR_current_length_STAR__orig_val__2317_2331,_STAR_current_level_STAR__temp_val__2318_2332,_STAR_current_length_STAR__temp_val__2319_2333,vec__2310,start,end,vec__2313,seq__2314,first__2315,seq__2314__$1,keyw,args))
})().call(null);

var arg_2341 = cljs.core.first.call(null,args_2337__$1);
if(cljs.core.sequential_QMARK_.call(null,arg_2341)){
var vec__2320_2342 = cljs.pprint.brackets.call(null,arg_2341);
var start_2343__$1 = cljs.core.nth.call(null,vec__2320_2342,(0),null);
var end_2344__$1 = cljs.core.nth.call(null,vec__2320_2342,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__2323_2345 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__2324_2346 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__2325_2347 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__2326_2348 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__2325_2347;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__2326_2348;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start_2343__$1,null,end_2344__$1);

if(((cljs.core._EQ_.call(null,cljs.core.count.call(null,arg_2341),(3))) && ((cljs.core.second.call(null,arg_2341) instanceof cljs.core.Keyword)))){
var vec__2327_2349 = arg_2341;
var ns_2350 = cljs.core.nth.call(null,vec__2327_2349,(0),null);
var kw_2351 = cljs.core.nth.call(null,vec__2327_2349,(1),null);
var lis_2352 = cljs.core.nth.call(null,vec__2327_2349,(2),null);
(function (){var format_in__8853__auto__ = "~w ~w ";
var cf__8854__auto__ = ((typeof format_in__8853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8853__auto__):format_in__8853__auto__);
return ((function (args_2337__$1,format_in__8853__auto__,cf__8854__auto__,vec__2327_2349,ns_2350,kw_2351,lis_2352,_STAR_current_level_STAR__orig_val__2323_2345,_STAR_current_length_STAR__orig_val__2324_2346,_STAR_current_level_STAR__temp_val__2325_2347,_STAR_current_length_STAR__temp_val__2326_2348,vec__2320_2342,start_2343__$1,end_2344__$1,arg_2341,_STAR_current_level_STAR__orig_val__2316_2330,_STAR_current_length_STAR__orig_val__2317_2331,_STAR_current_level_STAR__temp_val__2318_2332,_STAR_current_length_STAR__temp_val__2319_2333,vec__2310,start,end,vec__2313,seq__2314,first__2315,seq__2314__$1,keyw,args){
return (function() { 
var G__2353__delegate = function (args__8855__auto__){
var navigator__8856__auto__ = cljs.pprint.init_navigator.call(null,args__8855__auto__);
return cljs.pprint.execute_format.call(null,cf__8854__auto__,navigator__8856__auto__);
};
var G__2353 = function (var_args){
var args__8855__auto__ = null;
if (arguments.length > 0) {
var G__2354__i = 0, G__2354__a = new Array(arguments.length -  0);
while (G__2354__i < G__2354__a.length) {G__2354__a[G__2354__i] = arguments[G__2354__i + 0]; ++G__2354__i;}
  args__8855__auto__ = new cljs.core.IndexedSeq(G__2354__a,0,null);
} 
return G__2353__delegate.call(this,args__8855__auto__);};
G__2353.cljs$lang$maxFixedArity = 0;
G__2353.cljs$lang$applyTo = (function (arglist__2355){
var args__8855__auto__ = cljs.core.seq(arglist__2355);
return G__2353__delegate(args__8855__auto__);
});
G__2353.cljs$core$IFn$_invoke$arity$variadic = G__2353__delegate;
return G__2353;
})()
;
;})(args_2337__$1,format_in__8853__auto__,cf__8854__auto__,vec__2327_2349,ns_2350,kw_2351,lis_2352,_STAR_current_level_STAR__orig_val__2323_2345,_STAR_current_length_STAR__orig_val__2324_2346,_STAR_current_level_STAR__temp_val__2325_2347,_STAR_current_length_STAR__temp_val__2326_2348,vec__2320_2342,start_2343__$1,end_2344__$1,arg_2341,_STAR_current_level_STAR__orig_val__2316_2330,_STAR_current_length_STAR__orig_val__2317_2331,_STAR_current_level_STAR__temp_val__2318_2332,_STAR_current_length_STAR__temp_val__2319_2333,vec__2310,start,end,vec__2313,seq__2314,first__2315,seq__2314__$1,keyw,args))
})().call(null,ns_2350,kw_2351);

if(cljs.core.sequential_QMARK_.call(null,lis_2352)){
(function (){var format_in__8853__auto__ = ((cljs.core.vector_QMARK_.call(null,lis_2352))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__8854__auto__ = ((typeof format_in__8853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8853__auto__):format_in__8853__auto__);
return ((function (args_2337__$1,format_in__8853__auto__,cf__8854__auto__,vec__2327_2349,ns_2350,kw_2351,lis_2352,_STAR_current_level_STAR__orig_val__2323_2345,_STAR_current_length_STAR__orig_val__2324_2346,_STAR_current_level_STAR__temp_val__2325_2347,_STAR_current_length_STAR__temp_val__2326_2348,vec__2320_2342,start_2343__$1,end_2344__$1,arg_2341,_STAR_current_level_STAR__orig_val__2316_2330,_STAR_current_length_STAR__orig_val__2317_2331,_STAR_current_level_STAR__temp_val__2318_2332,_STAR_current_length_STAR__temp_val__2319_2333,vec__2310,start,end,vec__2313,seq__2314,first__2315,seq__2314__$1,keyw,args){
return (function() { 
var G__2356__delegate = function (args__8855__auto__){
var navigator__8856__auto__ = cljs.pprint.init_navigator.call(null,args__8855__auto__);
return cljs.pprint.execute_format.call(null,cf__8854__auto__,navigator__8856__auto__);
};
var G__2356 = function (var_args){
var args__8855__auto__ = null;
if (arguments.length > 0) {
var G__2357__i = 0, G__2357__a = new Array(arguments.length -  0);
while (G__2357__i < G__2357__a.length) {G__2357__a[G__2357__i] = arguments[G__2357__i + 0]; ++G__2357__i;}
  args__8855__auto__ = new cljs.core.IndexedSeq(G__2357__a,0,null);
} 
return G__2356__delegate.call(this,args__8855__auto__);};
G__2356.cljs$lang$maxFixedArity = 0;
G__2356.cljs$lang$applyTo = (function (arglist__2358){
var args__8855__auto__ = cljs.core.seq(arglist__2358);
return G__2356__delegate(args__8855__auto__);
});
G__2356.cljs$core$IFn$_invoke$arity$variadic = G__2356__delegate;
return G__2356;
})()
;
;})(args_2337__$1,format_in__8853__auto__,cf__8854__auto__,vec__2327_2349,ns_2350,kw_2351,lis_2352,_STAR_current_level_STAR__orig_val__2323_2345,_STAR_current_length_STAR__orig_val__2324_2346,_STAR_current_level_STAR__temp_val__2325_2347,_STAR_current_length_STAR__temp_val__2326_2348,vec__2320_2342,start_2343__$1,end_2344__$1,arg_2341,_STAR_current_level_STAR__orig_val__2316_2330,_STAR_current_length_STAR__orig_val__2317_2331,_STAR_current_level_STAR__temp_val__2318_2332,_STAR_current_length_STAR__temp_val__2319_2333,vec__2310,start,end,vec__2313,seq__2314,first__2315,seq__2314__$1,keyw,args))
})().call(null,lis_2352);
} else {
cljs.pprint.write_out.call(null,lis_2352);
}
} else {
cljs.core.apply.call(null,(function (){var format_in__8853__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__8854__auto__ = ((typeof format_in__8853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8853__auto__):format_in__8853__auto__);
return ((function (args_2337__$1,format_in__8853__auto__,cf__8854__auto__,_STAR_current_level_STAR__orig_val__2323_2345,_STAR_current_length_STAR__orig_val__2324_2346,_STAR_current_level_STAR__temp_val__2325_2347,_STAR_current_length_STAR__temp_val__2326_2348,vec__2320_2342,start_2343__$1,end_2344__$1,arg_2341,_STAR_current_level_STAR__orig_val__2316_2330,_STAR_current_length_STAR__orig_val__2317_2331,_STAR_current_level_STAR__temp_val__2318_2332,_STAR_current_length_STAR__temp_val__2319_2333,vec__2310,start,end,vec__2313,seq__2314,first__2315,seq__2314__$1,keyw,args){
return (function() { 
var G__2359__delegate = function (args__8855__auto__){
var navigator__8856__auto__ = cljs.pprint.init_navigator.call(null,args__8855__auto__);
return cljs.pprint.execute_format.call(null,cf__8854__auto__,navigator__8856__auto__);
};
var G__2359 = function (var_args){
var args__8855__auto__ = null;
if (arguments.length > 0) {
var G__2360__i = 0, G__2360__a = new Array(arguments.length -  0);
while (G__2360__i < G__2360__a.length) {G__2360__a[G__2360__i] = arguments[G__2360__i + 0]; ++G__2360__i;}
  args__8855__auto__ = new cljs.core.IndexedSeq(G__2360__a,0,null);
} 
return G__2359__delegate.call(this,args__8855__auto__);};
G__2359.cljs$lang$maxFixedArity = 0;
G__2359.cljs$lang$applyTo = (function (arglist__2361){
var args__8855__auto__ = cljs.core.seq(arglist__2361);
return G__2359__delegate(args__8855__auto__);
});
G__2359.cljs$core$IFn$_invoke$arity$variadic = G__2359__delegate;
return G__2359;
})()
;
;})(args_2337__$1,format_in__8853__auto__,cf__8854__auto__,_STAR_current_level_STAR__orig_val__2323_2345,_STAR_current_length_STAR__orig_val__2324_2346,_STAR_current_level_STAR__temp_val__2325_2347,_STAR_current_length_STAR__temp_val__2326_2348,vec__2320_2342,start_2343__$1,end_2344__$1,arg_2341,_STAR_current_level_STAR__orig_val__2316_2330,_STAR_current_length_STAR__orig_val__2317_2331,_STAR_current_level_STAR__temp_val__2318_2332,_STAR_current_length_STAR__temp_val__2319_2333,vec__2310,start,end,vec__2313,seq__2314,first__2315,seq__2314__$1,keyw,args))
})(),arg_2341);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__2324_2346;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__2323_2345;
}}


if(cljs.core.next.call(null,args_2337__$1)){
(function (){var format_in__8853__auto__ = "~_";
var cf__8854__auto__ = ((typeof format_in__8853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8853__auto__):format_in__8853__auto__);
return ((function (args_2337__$1,format_in__8853__auto__,cf__8854__auto__,vec__2320_2342,start_2343__$1,end_2344__$1,arg_2341,_STAR_current_level_STAR__orig_val__2316_2330,_STAR_current_length_STAR__orig_val__2317_2331,_STAR_current_level_STAR__temp_val__2318_2332,_STAR_current_length_STAR__temp_val__2319_2333,vec__2310,start,end,vec__2313,seq__2314,first__2315,seq__2314__$1,keyw,args){
return (function() { 
var G__2362__delegate = function (args__8855__auto__){
var navigator__8856__auto__ = cljs.pprint.init_navigator.call(null,args__8855__auto__);
return cljs.pprint.execute_format.call(null,cf__8854__auto__,navigator__8856__auto__);
};
var G__2362 = function (var_args){
var args__8855__auto__ = null;
if (arguments.length > 0) {
var G__2363__i = 0, G__2363__a = new Array(arguments.length -  0);
while (G__2363__i < G__2363__a.length) {G__2363__a[G__2363__i] = arguments[G__2363__i + 0]; ++G__2363__i;}
  args__8855__auto__ = new cljs.core.IndexedSeq(G__2363__a,0,null);
} 
return G__2362__delegate.call(this,args__8855__auto__);};
G__2362.cljs$lang$maxFixedArity = 0;
G__2362.cljs$lang$applyTo = (function (arglist__2364){
var args__8855__auto__ = cljs.core.seq(arglist__2364);
return G__2362__delegate(args__8855__auto__);
});
G__2362.cljs$core$IFn$_invoke$arity$variadic = G__2362__delegate;
return G__2362;
})()
;
;})(args_2337__$1,format_in__8853__auto__,cf__8854__auto__,vec__2320_2342,start_2343__$1,end_2344__$1,arg_2341,_STAR_current_level_STAR__orig_val__2316_2330,_STAR_current_length_STAR__orig_val__2317_2331,_STAR_current_level_STAR__temp_val__2318_2332,_STAR_current_length_STAR__temp_val__2319_2333,vec__2310,start,end,vec__2313,seq__2314,first__2315,seq__2314__$1,keyw,args))
})().call(null);
} else {
}
} else {
cljs.pprint.write_out.call(null,arg_2341);

if(cljs.core.next.call(null,args_2337__$1)){
(function (){var format_in__8853__auto__ = "~:_";
var cf__8854__auto__ = ((typeof format_in__8853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8853__auto__):format_in__8853__auto__);
return ((function (args_2337__$1,format_in__8853__auto__,cf__8854__auto__,arg_2341,_STAR_current_level_STAR__orig_val__2316_2330,_STAR_current_length_STAR__orig_val__2317_2331,_STAR_current_level_STAR__temp_val__2318_2332,_STAR_current_length_STAR__temp_val__2319_2333,vec__2310,start,end,vec__2313,seq__2314,first__2315,seq__2314__$1,keyw,args){
return (function() { 
var G__2365__delegate = function (args__8855__auto__){
var navigator__8856__auto__ = cljs.pprint.init_navigator.call(null,args__8855__auto__);
return cljs.pprint.execute_format.call(null,cf__8854__auto__,navigator__8856__auto__);
};
var G__2365 = function (var_args){
var args__8855__auto__ = null;
if (arguments.length > 0) {
var G__2366__i = 0, G__2366__a = new Array(arguments.length -  0);
while (G__2366__i < G__2366__a.length) {G__2366__a[G__2366__i] = arguments[G__2366__i + 0]; ++G__2366__i;}
  args__8855__auto__ = new cljs.core.IndexedSeq(G__2366__a,0,null);
} 
return G__2365__delegate.call(this,args__8855__auto__);};
G__2365.cljs$lang$maxFixedArity = 0;
G__2365.cljs$lang$applyTo = (function (arglist__2367){
var args__8855__auto__ = cljs.core.seq(arglist__2367);
return G__2365__delegate(args__8855__auto__);
});
G__2365.cljs$core$IFn$_invoke$arity$variadic = G__2365__delegate;
return G__2365;
})()
;
;})(args_2337__$1,format_in__8853__auto__,cf__8854__auto__,arg_2341,_STAR_current_level_STAR__orig_val__2316_2330,_STAR_current_length_STAR__orig_val__2317_2331,_STAR_current_level_STAR__temp_val__2318_2332,_STAR_current_length_STAR__temp_val__2319_2333,vec__2310,start,end,vec__2313,seq__2314,first__2315,seq__2314__$1,keyw,args))
})().call(null);
} else {
}
}

var G__2368 = cljs.core.next.call(null,args_2337__$1);
args_2337__$1 = G__2368;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__2317_2331;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__2316_2330;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next.call(null,alis)){
var vec__2369 = alis;
var seq__2370 = cljs.core.seq.call(null,vec__2369);
var first__2371 = cljs.core.first.call(null,seq__2370);
var seq__2370__$1 = cljs.core.next.call(null,seq__2370);
var ns_sym = first__2371;
var first__2371__$1 = cljs.core.first.call(null,seq__2370__$1);
var seq__2370__$2 = cljs.core.next.call(null,seq__2370__$1);
var ns_name = first__2371__$1;
var stuff = seq__2370__$2;
var vec__2372 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__2372,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__2372,(1),null);
var vec__2375 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__2375,(0),null);
var references = cljs.core.nth.call(null,vec__2375,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__2378_2382 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__2379_2383 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__2380_2384 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__2381_2385 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__2380_2384;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__2381_2385;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__8853__auto__ = "~w ~1I~@_~w";
var cf__8854__auto__ = ((typeof format_in__8853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8853__auto__):format_in__8853__auto__);
return ((function (format_in__8853__auto__,cf__8854__auto__,_STAR_current_level_STAR__orig_val__2378_2382,_STAR_current_length_STAR__orig_val__2379_2383,_STAR_current_level_STAR__temp_val__2380_2384,_STAR_current_length_STAR__temp_val__2381_2385,vec__2369,seq__2370,first__2371,seq__2370__$1,ns_sym,first__2371__$1,seq__2370__$2,ns_name,stuff,vec__2372,doc_str,stuff__$1,vec__2375,attr_map,references){
return (function() { 
var G__2386__delegate = function (args__8855__auto__){
var navigator__8856__auto__ = cljs.pprint.init_navigator.call(null,args__8855__auto__);
return cljs.pprint.execute_format.call(null,cf__8854__auto__,navigator__8856__auto__);
};
var G__2386 = function (var_args){
var args__8855__auto__ = null;
if (arguments.length > 0) {
var G__2387__i = 0, G__2387__a = new Array(arguments.length -  0);
while (G__2387__i < G__2387__a.length) {G__2387__a[G__2387__i] = arguments[G__2387__i + 0]; ++G__2387__i;}
  args__8855__auto__ = new cljs.core.IndexedSeq(G__2387__a,0,null);
} 
return G__2386__delegate.call(this,args__8855__auto__);};
G__2386.cljs$lang$maxFixedArity = 0;
G__2386.cljs$lang$applyTo = (function (arglist__2388){
var args__8855__auto__ = cljs.core.seq(arglist__2388);
return G__2386__delegate(args__8855__auto__);
});
G__2386.cljs$core$IFn$_invoke$arity$variadic = G__2386__delegate;
return G__2386;
})()
;
;})(format_in__8853__auto__,cf__8854__auto__,_STAR_current_level_STAR__orig_val__2378_2382,_STAR_current_length_STAR__orig_val__2379_2383,_STAR_current_level_STAR__temp_val__2380_2384,_STAR_current_length_STAR__temp_val__2381_2385,vec__2369,seq__2370,first__2371,seq__2370__$1,ns_sym,first__2371__$1,seq__2370__$2,ns_name,stuff,vec__2372,doc_str,stuff__$1,vec__2375,attr_map,references))
})().call(null,ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__4452__auto__ = doc_str;
if(cljs.core.truth_(or__4452__auto__)){
return or__4452__auto__;
} else {
var or__4452__auto____$1 = attr_map;
if(cljs.core.truth_(or__4452__auto____$1)){
return or__4452__auto____$1;
} else {
return cljs.core.seq.call(null,references);
}
}
})())){
(function (){var format_in__8853__auto__ = "~@:_";
var cf__8854__auto__ = ((typeof format_in__8853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8853__auto__):format_in__8853__auto__);
return ((function (format_in__8853__auto__,cf__8854__auto__,_STAR_current_level_STAR__orig_val__2378_2382,_STAR_current_length_STAR__orig_val__2379_2383,_STAR_current_level_STAR__temp_val__2380_2384,_STAR_current_length_STAR__temp_val__2381_2385,vec__2369,seq__2370,first__2371,seq__2370__$1,ns_sym,first__2371__$1,seq__2370__$2,ns_name,stuff,vec__2372,doc_str,stuff__$1,vec__2375,attr_map,references){
return (function() { 
var G__2389__delegate = function (args__8855__auto__){
var navigator__8856__auto__ = cljs.pprint.init_navigator.call(null,args__8855__auto__);
return cljs.pprint.execute_format.call(null,cf__8854__auto__,navigator__8856__auto__);
};
var G__2389 = function (var_args){
var args__8855__auto__ = null;
if (arguments.length > 0) {
var G__2390__i = 0, G__2390__a = new Array(arguments.length -  0);
while (G__2390__i < G__2390__a.length) {G__2390__a[G__2390__i] = arguments[G__2390__i + 0]; ++G__2390__i;}
  args__8855__auto__ = new cljs.core.IndexedSeq(G__2390__a,0,null);
} 
return G__2389__delegate.call(this,args__8855__auto__);};
G__2389.cljs$lang$maxFixedArity = 0;
G__2389.cljs$lang$applyTo = (function (arglist__2391){
var args__8855__auto__ = cljs.core.seq(arglist__2391);
return G__2389__delegate(args__8855__auto__);
});
G__2389.cljs$core$IFn$_invoke$arity$variadic = G__2389__delegate;
return G__2389;
})()
;
;})(format_in__8853__auto__,cf__8854__auto__,_STAR_current_level_STAR__orig_val__2378_2382,_STAR_current_length_STAR__orig_val__2379_2383,_STAR_current_level_STAR__temp_val__2380_2384,_STAR_current_length_STAR__temp_val__2381_2385,vec__2369,seq__2370,first__2371,seq__2370__$1,ns_sym,first__2371__$1,seq__2370__$2,ns_name,stuff,vec__2372,doc_str,stuff__$1,vec__2375,attr_map,references))
})().call(null);
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.call(null,true,"\"~a\"~:[~;~:@_~]",doc_str,(function (){var or__4452__auto__ = attr_map;
if(cljs.core.truth_(or__4452__auto__)){
return or__4452__auto__;
} else {
return cljs.core.seq.call(null,references);
}
})());
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__8853__auto__ = "~w~:[~;~:@_~]";
var cf__8854__auto__ = ((typeof format_in__8853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8853__auto__):format_in__8853__auto__);
return ((function (format_in__8853__auto__,cf__8854__auto__,_STAR_current_level_STAR__orig_val__2378_2382,_STAR_current_length_STAR__orig_val__2379_2383,_STAR_current_level_STAR__temp_val__2380_2384,_STAR_current_length_STAR__temp_val__2381_2385,vec__2369,seq__2370,first__2371,seq__2370__$1,ns_sym,first__2371__$1,seq__2370__$2,ns_name,stuff,vec__2372,doc_str,stuff__$1,vec__2375,attr_map,references){
return (function() { 
var G__2392__delegate = function (args__8855__auto__){
var navigator__8856__auto__ = cljs.pprint.init_navigator.call(null,args__8855__auto__);
return cljs.pprint.execute_format.call(null,cf__8854__auto__,navigator__8856__auto__);
};
var G__2392 = function (var_args){
var args__8855__auto__ = null;
if (arguments.length > 0) {
var G__2393__i = 0, G__2393__a = new Array(arguments.length -  0);
while (G__2393__i < G__2393__a.length) {G__2393__a[G__2393__i] = arguments[G__2393__i + 0]; ++G__2393__i;}
  args__8855__auto__ = new cljs.core.IndexedSeq(G__2393__a,0,null);
} 
return G__2392__delegate.call(this,args__8855__auto__);};
G__2392.cljs$lang$maxFixedArity = 0;
G__2392.cljs$lang$applyTo = (function (arglist__2394){
var args__8855__auto__ = cljs.core.seq(arglist__2394);
return G__2392__delegate(args__8855__auto__);
});
G__2392.cljs$core$IFn$_invoke$arity$variadic = G__2392__delegate;
return G__2392;
})()
;
;})(format_in__8853__auto__,cf__8854__auto__,_STAR_current_level_STAR__orig_val__2378_2382,_STAR_current_length_STAR__orig_val__2379_2383,_STAR_current_level_STAR__temp_val__2380_2384,_STAR_current_length_STAR__temp_val__2381_2385,vec__2369,seq__2370,first__2371,seq__2370__$1,ns_sym,first__2371__$1,seq__2370__$2,ns_name,stuff,vec__2372,doc_str,stuff__$1,vec__2375,attr_map,references))
})().call(null,attr_map,cljs.core.seq.call(null,references));
} else {
}

var references_2395__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference.call(null,cljs.core.first.call(null,references_2395__$1));

var temp__5535__auto___2396 = cljs.core.next.call(null,references_2395__$1);
if(temp__5535__auto___2396){
var references_2397__$2 = temp__5535__auto___2396;
cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__2398 = references_2397__$2;
references_2395__$1 = G__2398;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__2379_2383;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__2378_2382;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__8853__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__8854__auto__ = ((typeof format_in__8853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8853__auto__):format_in__8853__auto__);
return ((function (format_in__8853__auto__,cf__8854__auto__){
return (function() { 
var G__2399__delegate = function (args__8855__auto__){
var navigator__8856__auto__ = cljs.pprint.init_navigator.call(null,args__8855__auto__);
return cljs.pprint.execute_format.call(null,cf__8854__auto__,navigator__8856__auto__);
};
var G__2399 = function (var_args){
var args__8855__auto__ = null;
if (arguments.length > 0) {
var G__2400__i = 0, G__2400__a = new Array(arguments.length -  0);
while (G__2400__i < G__2400__a.length) {G__2400__a[G__2400__i] = arguments[G__2400__i + 0]; ++G__2400__i;}
  args__8855__auto__ = new cljs.core.IndexedSeq(G__2400__a,0,null);
} 
return G__2399__delegate.call(this,args__8855__auto__);};
G__2399.cljs$lang$maxFixedArity = 0;
G__2399.cljs$lang$applyTo = (function (arglist__2401){
var args__8855__auto__ = cljs.core.seq(arglist__2401);
return G__2399__delegate(args__8855__auto__);
});
G__2399.cljs$core$IFn$_invoke$arity$variadic = G__2399__delegate;
return G__2399;
})()
;
;})(format_in__8853__auto__,cf__8854__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
(function (){var format_in__8853__auto__ = " ~_";
var cf__8854__auto__ = ((typeof format_in__8853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8853__auto__):format_in__8853__auto__);
return ((function (format_in__8853__auto__,cf__8854__auto__){
return (function() { 
var G__2402__delegate = function (args__8855__auto__){
var navigator__8856__auto__ = cljs.pprint.init_navigator.call(null,args__8855__auto__);
return cljs.pprint.execute_format.call(null,cf__8854__auto__,navigator__8856__auto__);
};
var G__2402 = function (var_args){
var args__8855__auto__ = null;
if (arguments.length > 0) {
var G__2403__i = 0, G__2403__a = new Array(arguments.length -  0);
while (G__2403__i < G__2403__a.length) {G__2403__a[G__2403__i] = arguments[G__2403__i + 0]; ++G__2403__i;}
  args__8855__auto__ = new cljs.core.IndexedSeq(G__2403__a,0,null);
} 
return G__2402__delegate.call(this,args__8855__auto__);};
G__2402.cljs$lang$maxFixedArity = 0;
G__2402.cljs$lang$applyTo = (function (arglist__2404){
var args__8855__auto__ = cljs.core.seq(arglist__2404);
return G__2402__delegate(args__8855__auto__);
});
G__2402.cljs$core$IFn$_invoke$arity$variadic = G__2402__delegate;
return G__2402;
})()
;
;})(format_in__8853__auto__,cf__8854__auto__))
})().call(null);
} else {
(function (){var format_in__8853__auto__ = " ~@_";
var cf__8854__auto__ = ((typeof format_in__8853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8853__auto__):format_in__8853__auto__);
return ((function (format_in__8853__auto__,cf__8854__auto__){
return (function() { 
var G__2405__delegate = function (args__8855__auto__){
var navigator__8856__auto__ = cljs.pprint.init_navigator.call(null,args__8855__auto__);
return cljs.pprint.execute_format.call(null,cf__8854__auto__,navigator__8856__auto__);
};
var G__2405 = function (var_args){
var args__8855__auto__ = null;
if (arguments.length > 0) {
var G__2406__i = 0, G__2406__a = new Array(arguments.length -  0);
while (G__2406__i < G__2406__a.length) {G__2406__a[G__2406__i] = arguments[G__2406__i + 0]; ++G__2406__i;}
  args__8855__auto__ = new cljs.core.IndexedSeq(G__2406__a,0,null);
} 
return G__2405__delegate.call(this,args__8855__auto__);};
G__2405.cljs$lang$maxFixedArity = 0;
G__2405.cljs$lang$applyTo = (function (arglist__2407){
var args__8855__auto__ = cljs.core.seq(arglist__2407);
return G__2405__delegate(args__8855__auto__);
});
G__2405.cljs$core$IFn$_invoke$arity$variadic = G__2405__delegate;
return G__2405;
})()
;
;})(format_in__8853__auto__,cf__8854__auto__))
})().call(null);
}

return (function (){var format_in__8853__auto__ = "~{~w~^ ~_~}";
var cf__8854__auto__ = ((typeof format_in__8853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8853__auto__):format_in__8853__auto__);
return ((function (format_in__8853__auto__,cf__8854__auto__){
return (function() { 
var G__2408__delegate = function (args__8855__auto__){
var navigator__8856__auto__ = cljs.pprint.init_navigator.call(null,args__8855__auto__);
return cljs.pprint.execute_format.call(null,cf__8854__auto__,navigator__8856__auto__);
};
var G__2408 = function (var_args){
var args__8855__auto__ = null;
if (arguments.length > 0) {
var G__2409__i = 0, G__2409__a = new Array(arguments.length -  0);
while (G__2409__i < G__2409__a.length) {G__2409__a[G__2409__i] = arguments[G__2409__i + 0]; ++G__2409__i;}
  args__8855__auto__ = new cljs.core.IndexedSeq(G__2409__a,0,null);
} 
return G__2408__delegate.call(this,args__8855__auto__);};
G__2408.cljs$lang$maxFixedArity = 0;
G__2408.cljs$lang$applyTo = (function (arglist__2410){
var args__8855__auto__ = cljs.core.seq(arglist__2410);
return G__2408__delegate(args__8855__auto__);
});
G__2408.cljs$core$IFn$_invoke$arity$variadic = G__2408__delegate;
return G__2408;
})()
;
;})(format_in__8853__auto__,cf__8854__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
return (function (){var format_in__8853__auto__ = " ~_~{~w~^ ~_~}";
var cf__8854__auto__ = ((typeof format_in__8853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8853__auto__):format_in__8853__auto__);
return ((function (format_in__8853__auto__,cf__8854__auto__){
return (function() { 
var G__2411__delegate = function (args__8855__auto__){
var navigator__8856__auto__ = cljs.pprint.init_navigator.call(null,args__8855__auto__);
return cljs.pprint.execute_format.call(null,cf__8854__auto__,navigator__8856__auto__);
};
var G__2411 = function (var_args){
var args__8855__auto__ = null;
if (arguments.length > 0) {
var G__2412__i = 0, G__2412__a = new Array(arguments.length -  0);
while (G__2412__i < G__2412__a.length) {G__2412__a[G__2412__i] = arguments[G__2412__i + 0]; ++G__2412__i;}
  args__8855__auto__ = new cljs.core.IndexedSeq(G__2412__a,0,null);
} 
return G__2411__delegate.call(this,args__8855__auto__);};
G__2411.cljs$lang$maxFixedArity = 0;
G__2411.cljs$lang$applyTo = (function (arglist__2413){
var args__8855__auto__ = cljs.core.seq(arglist__2413);
return G__2411__delegate(args__8855__auto__);
});
G__2411.cljs$core$IFn$_invoke$arity$variadic = G__2411__delegate;
return G__2411;
})()
;
;})(format_in__8853__auto__,cf__8854__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next.call(null,alis)){
var vec__2414 = alis;
var seq__2415 = cljs.core.seq.call(null,vec__2414);
var first__2416 = cljs.core.first.call(null,seq__2415);
var seq__2415__$1 = cljs.core.next.call(null,seq__2415);
var defn_sym = first__2416;
var first__2416__$1 = cljs.core.first.call(null,seq__2415__$1);
var seq__2415__$2 = cljs.core.next.call(null,seq__2415__$1);
var defn_name = first__2416__$1;
var stuff = seq__2415__$2;
var vec__2417 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__2417,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__2417,(1),null);
var vec__2420 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__2420,(0),null);
var stuff__$2 = cljs.core.nth.call(null,vec__2420,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__2423_2427 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__2424_2428 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__2425_2429 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__2426_2430 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__2425_2429;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__2426_2430;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__8853__auto__ = "~w ~1I~@_~w";
var cf__8854__auto__ = ((typeof format_in__8853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8853__auto__):format_in__8853__auto__);
return ((function (format_in__8853__auto__,cf__8854__auto__,_STAR_current_level_STAR__orig_val__2423_2427,_STAR_current_length_STAR__orig_val__2424_2428,_STAR_current_level_STAR__temp_val__2425_2429,_STAR_current_length_STAR__temp_val__2426_2430,vec__2414,seq__2415,first__2416,seq__2415__$1,defn_sym,first__2416__$1,seq__2415__$2,defn_name,stuff,vec__2417,doc_str,stuff__$1,vec__2420,attr_map,stuff__$2){
return (function() { 
var G__2431__delegate = function (args__8855__auto__){
var navigator__8856__auto__ = cljs.pprint.init_navigator.call(null,args__8855__auto__);
return cljs.pprint.execute_format.call(null,cf__8854__auto__,navigator__8856__auto__);
};
var G__2431 = function (var_args){
var args__8855__auto__ = null;
if (arguments.length > 0) {
var G__2432__i = 0, G__2432__a = new Array(arguments.length -  0);
while (G__2432__i < G__2432__a.length) {G__2432__a[G__2432__i] = arguments[G__2432__i + 0]; ++G__2432__i;}
  args__8855__auto__ = new cljs.core.IndexedSeq(G__2432__a,0,null);
} 
return G__2431__delegate.call(this,args__8855__auto__);};
G__2431.cljs$lang$maxFixedArity = 0;
G__2431.cljs$lang$applyTo = (function (arglist__2433){
var args__8855__auto__ = cljs.core.seq(arglist__2433);
return G__2431__delegate(args__8855__auto__);
});
G__2431.cljs$core$IFn$_invoke$arity$variadic = G__2431__delegate;
return G__2431;
})()
;
;})(format_in__8853__auto__,cf__8854__auto__,_STAR_current_level_STAR__orig_val__2423_2427,_STAR_current_length_STAR__orig_val__2424_2428,_STAR_current_level_STAR__temp_val__2425_2429,_STAR_current_length_STAR__temp_val__2426_2430,vec__2414,seq__2415,first__2416,seq__2415__$1,defn_sym,first__2416__$1,seq__2415__$2,defn_name,stuff,vec__2417,doc_str,stuff__$1,vec__2420,attr_map,stuff__$2))
})().call(null,defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__8853__auto__ = " ~_~w";
var cf__8854__auto__ = ((typeof format_in__8853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8853__auto__):format_in__8853__auto__);
return ((function (format_in__8853__auto__,cf__8854__auto__,_STAR_current_level_STAR__orig_val__2423_2427,_STAR_current_length_STAR__orig_val__2424_2428,_STAR_current_level_STAR__temp_val__2425_2429,_STAR_current_length_STAR__temp_val__2426_2430,vec__2414,seq__2415,first__2416,seq__2415__$1,defn_sym,first__2416__$1,seq__2415__$2,defn_name,stuff,vec__2417,doc_str,stuff__$1,vec__2420,attr_map,stuff__$2){
return (function() { 
var G__2434__delegate = function (args__8855__auto__){
var navigator__8856__auto__ = cljs.pprint.init_navigator.call(null,args__8855__auto__);
return cljs.pprint.execute_format.call(null,cf__8854__auto__,navigator__8856__auto__);
};
var G__2434 = function (var_args){
var args__8855__auto__ = null;
if (arguments.length > 0) {
var G__2435__i = 0, G__2435__a = new Array(arguments.length -  0);
while (G__2435__i < G__2435__a.length) {G__2435__a[G__2435__i] = arguments[G__2435__i + 0]; ++G__2435__i;}
  args__8855__auto__ = new cljs.core.IndexedSeq(G__2435__a,0,null);
} 
return G__2434__delegate.call(this,args__8855__auto__);};
G__2434.cljs$lang$maxFixedArity = 0;
G__2434.cljs$lang$applyTo = (function (arglist__2436){
var args__8855__auto__ = cljs.core.seq(arglist__2436);
return G__2434__delegate(args__8855__auto__);
});
G__2434.cljs$core$IFn$_invoke$arity$variadic = G__2434__delegate;
return G__2434;
})()
;
;})(format_in__8853__auto__,cf__8854__auto__,_STAR_current_level_STAR__orig_val__2423_2427,_STAR_current_length_STAR__orig_val__2424_2428,_STAR_current_level_STAR__temp_val__2425_2429,_STAR_current_length_STAR__temp_val__2426_2430,vec__2414,seq__2415,first__2416,seq__2415__$1,defn_sym,first__2416__$1,seq__2415__$2,defn_name,stuff,vec__2417,doc_str,stuff__$1,vec__2420,attr_map,stuff__$2))
})().call(null,doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__8853__auto__ = " ~_~w";
var cf__8854__auto__ = ((typeof format_in__8853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8853__auto__):format_in__8853__auto__);
return ((function (format_in__8853__auto__,cf__8854__auto__,_STAR_current_level_STAR__orig_val__2423_2427,_STAR_current_length_STAR__orig_val__2424_2428,_STAR_current_level_STAR__temp_val__2425_2429,_STAR_current_length_STAR__temp_val__2426_2430,vec__2414,seq__2415,first__2416,seq__2415__$1,defn_sym,first__2416__$1,seq__2415__$2,defn_name,stuff,vec__2417,doc_str,stuff__$1,vec__2420,attr_map,stuff__$2){
return (function() { 
var G__2437__delegate = function (args__8855__auto__){
var navigator__8856__auto__ = cljs.pprint.init_navigator.call(null,args__8855__auto__);
return cljs.pprint.execute_format.call(null,cf__8854__auto__,navigator__8856__auto__);
};
var G__2437 = function (var_args){
var args__8855__auto__ = null;
if (arguments.length > 0) {
var G__2438__i = 0, G__2438__a = new Array(arguments.length -  0);
while (G__2438__i < G__2438__a.length) {G__2438__a[G__2438__i] = arguments[G__2438__i + 0]; ++G__2438__i;}
  args__8855__auto__ = new cljs.core.IndexedSeq(G__2438__a,0,null);
} 
return G__2437__delegate.call(this,args__8855__auto__);};
G__2437.cljs$lang$maxFixedArity = 0;
G__2437.cljs$lang$applyTo = (function (arglist__2439){
var args__8855__auto__ = cljs.core.seq(arglist__2439);
return G__2437__delegate(args__8855__auto__);
});
G__2437.cljs$core$IFn$_invoke$arity$variadic = G__2437__delegate;
return G__2437;
})()
;
;})(format_in__8853__auto__,cf__8854__auto__,_STAR_current_level_STAR__orig_val__2423_2427,_STAR_current_length_STAR__orig_val__2424_2428,_STAR_current_level_STAR__temp_val__2425_2429,_STAR_current_length_STAR__temp_val__2426_2430,vec__2414,seq__2415,first__2416,seq__2415__$1,defn_sym,first__2416__$1,seq__2415__$2,defn_name,stuff,vec__2417,doc_str,stuff__$1,vec__2420,attr_map,stuff__$2))
})().call(null,attr_map);
} else {
}

if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,stuff__$2))){
cljs.pprint.single_defn.call(null,stuff__$2,(function (){var or__4452__auto__ = doc_str;
if(cljs.core.truth_(or__4452__auto__)){
return or__4452__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn.call(null,stuff__$2,(function (){var or__4452__auto__ = doc_str;
if(cljs.core.truth_(or__4452__auto__)){
return or__4452__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__2424_2428;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__2423_2427;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__2440_2449 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__2441_2450 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__2442_2451 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__2443_2452 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__2442_2451;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__2443_2452;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count2444_2453 = (0);
var binding_2454 = binding_vec;
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count2444_2453 < cljs.core._STAR_print_length_STAR_)))){
if(cljs.core.seq.call(null,binding_2454)){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__2445_2455 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__2446_2456 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__2447_2457 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__2448_2458 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__2447_2457;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__2448_2458;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,binding_2454));

if(cljs.core.next.call(null,binding_2454)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,binding_2454));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__2446_2456;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__2445_2455;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,binding_2454))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__2459 = (length_count2444_2453 + (1));
var G__2460 = cljs.core.next.call(null,cljs.core.rest.call(null,binding_2454));
length_count2444_2453 = G__2459;
binding_2454 = G__2460;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__2441_2450;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__2440_2449;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first.call(null,alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__2461_2465 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__2462_2466 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__2463_2467 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__2464_2468 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__2463_2467;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__2464_2468;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

if(((cljs.core.next.call(null,alis)) && (cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,alis))))){
(function (){var format_in__8853__auto__ = "~w ~1I~@_";
var cf__8854__auto__ = ((typeof format_in__8853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8853__auto__):format_in__8853__auto__);
return ((function (format_in__8853__auto__,cf__8854__auto__,_STAR_current_level_STAR__orig_val__2461_2465,_STAR_current_length_STAR__orig_val__2462_2466,_STAR_current_level_STAR__temp_val__2463_2467,_STAR_current_length_STAR__temp_val__2464_2468,base_sym){
return (function() { 
var G__2469__delegate = function (args__8855__auto__){
var navigator__8856__auto__ = cljs.pprint.init_navigator.call(null,args__8855__auto__);
return cljs.pprint.execute_format.call(null,cf__8854__auto__,navigator__8856__auto__);
};
var G__2469 = function (var_args){
var args__8855__auto__ = null;
if (arguments.length > 0) {
var G__2470__i = 0, G__2470__a = new Array(arguments.length -  0);
while (G__2470__i < G__2470__a.length) {G__2470__a[G__2470__i] = arguments[G__2470__i + 0]; ++G__2470__i;}
  args__8855__auto__ = new cljs.core.IndexedSeq(G__2470__a,0,null);
} 
return G__2469__delegate.call(this,args__8855__auto__);};
G__2469.cljs$lang$maxFixedArity = 0;
G__2469.cljs$lang$applyTo = (function (arglist__2471){
var args__8855__auto__ = cljs.core.seq(arglist__2471);
return G__2469__delegate(args__8855__auto__);
});
G__2469.cljs$core$IFn$_invoke$arity$variadic = G__2469__delegate;
return G__2469;
})()
;
;})(format_in__8853__auto__,cf__8854__auto__,_STAR_current_level_STAR__orig_val__2461_2465,_STAR_current_length_STAR__orig_val__2462_2466,_STAR_current_level_STAR__temp_val__2463_2467,_STAR_current_length_STAR__temp_val__2464_2468,base_sym))
})().call(null,base_sym);

cljs.pprint.pprint_binding_form.call(null,cljs.core.second.call(null,alis));

(function (){var format_in__8853__auto__ = " ~_~{~w~^ ~_~}";
var cf__8854__auto__ = ((typeof format_in__8853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8853__auto__):format_in__8853__auto__);
return ((function (format_in__8853__auto__,cf__8854__auto__,_STAR_current_level_STAR__orig_val__2461_2465,_STAR_current_length_STAR__orig_val__2462_2466,_STAR_current_level_STAR__temp_val__2463_2467,_STAR_current_length_STAR__temp_val__2464_2468,base_sym){
return (function() { 
var G__2472__delegate = function (args__8855__auto__){
var navigator__8856__auto__ = cljs.pprint.init_navigator.call(null,args__8855__auto__);
return cljs.pprint.execute_format.call(null,cf__8854__auto__,navigator__8856__auto__);
};
var G__2472 = function (var_args){
var args__8855__auto__ = null;
if (arguments.length > 0) {
var G__2473__i = 0, G__2473__a = new Array(arguments.length -  0);
while (G__2473__i < G__2473__a.length) {G__2473__a[G__2473__i] = arguments[G__2473__i + 0]; ++G__2473__i;}
  args__8855__auto__ = new cljs.core.IndexedSeq(G__2473__a,0,null);
} 
return G__2472__delegate.call(this,args__8855__auto__);};
G__2472.cljs$lang$maxFixedArity = 0;
G__2472.cljs$lang$applyTo = (function (arglist__2474){
var args__8855__auto__ = cljs.core.seq(arglist__2474);
return G__2472__delegate(args__8855__auto__);
});
G__2472.cljs$core$IFn$_invoke$arity$variadic = G__2472__delegate;
return G__2472;
})()
;
;})(format_in__8853__auto__,cf__8854__auto__,_STAR_current_level_STAR__orig_val__2461_2465,_STAR_current_length_STAR__orig_val__2462_2466,_STAR_current_level_STAR__temp_val__2463_2467,_STAR_current_length_STAR__temp_val__2464_2468,base_sym))
})().call(null,cljs.core.next.call(null,cljs.core.rest.call(null,alis)));
} else {
cljs.pprint.pprint_simple_code_list.call(null,alis);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__2462_2466;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__2461_2465;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__8853__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__8854__auto__ = ((typeof format_in__8853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8853__auto__):format_in__8853__auto__);
return ((function (format_in__8853__auto__,cf__8854__auto__){
return (function() { 
var G__2475__delegate = function (args__8855__auto__){
var navigator__8856__auto__ = cljs.pprint.init_navigator.call(null,args__8855__auto__);
return cljs.pprint.execute_format.call(null,cf__8854__auto__,navigator__8856__auto__);
};
var G__2475 = function (var_args){
var args__8855__auto__ = null;
if (arguments.length > 0) {
var G__2476__i = 0, G__2476__a = new Array(arguments.length -  0);
while (G__2476__i < G__2476__a.length) {G__2476__a[G__2476__i] = arguments[G__2476__i + 0]; ++G__2476__i;}
  args__8855__auto__ = new cljs.core.IndexedSeq(G__2476__a,0,null);
} 
return G__2475__delegate.call(this,args__8855__auto__);};
G__2475.cljs$lang$maxFixedArity = 0;
G__2475.cljs$lang$applyTo = (function (arglist__2477){
var args__8855__auto__ = cljs.core.seq(arglist__2477);
return G__2475__delegate(args__8855__auto__);
});
G__2475.cljs$core$IFn$_invoke$arity$variadic = G__2475__delegate;
return G__2475;
})()
;
;})(format_in__8853__auto__,cf__8854__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__2478_2487 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__2479_2488 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__2480_2489 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__2481_2490 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__2480_2489;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__2481_2490;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis));

if(cljs.core.next.call(null,alis)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var length_count2482_2491 = (0);
var alis_2492__$1 = cljs.core.next.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count2482_2491 < cljs.core._STAR_print_length_STAR_)))){
if(alis_2492__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__2483_2493 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__2484_2494 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__2485_2495 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__2486_2496 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__2485_2495;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__2486_2496;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_2492__$1));

if(cljs.core.next.call(null,alis_2492__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_2492__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__2484_2494;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__2483_2493;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_2492__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__2497 = (length_count2482_2491 + (1));
var G__2498 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_2492__$1));
length_count2482_2491 = G__2497;
alis_2492__$1 = G__2498;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__2479_2488;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__2478_2487;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count.call(null,alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__2499_2508 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__2500_2509 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__2501_2510 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__2502_2511 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__2501_2510;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__2502_2511;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.core.apply.call(null,(function (){var format_in__8853__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__8854__auto__ = ((typeof format_in__8853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8853__auto__):format_in__8853__auto__);
return ((function (format_in__8853__auto__,cf__8854__auto__,_STAR_current_level_STAR__orig_val__2499_2508,_STAR_current_length_STAR__orig_val__2500_2509,_STAR_current_level_STAR__temp_val__2501_2510,_STAR_current_length_STAR__temp_val__2502_2511){
return (function() { 
var G__2512__delegate = function (args__8855__auto__){
var navigator__8856__auto__ = cljs.pprint.init_navigator.call(null,args__8855__auto__);
return cljs.pprint.execute_format.call(null,cf__8854__auto__,navigator__8856__auto__);
};
var G__2512 = function (var_args){
var args__8855__auto__ = null;
if (arguments.length > 0) {
var G__2513__i = 0, G__2513__a = new Array(arguments.length -  0);
while (G__2513__i < G__2513__a.length) {G__2513__a[G__2513__i] = arguments[G__2513__i + 0]; ++G__2513__i;}
  args__8855__auto__ = new cljs.core.IndexedSeq(G__2513__a,0,null);
} 
return G__2512__delegate.call(this,args__8855__auto__);};
G__2512.cljs$lang$maxFixedArity = 0;
G__2512.cljs$lang$applyTo = (function (arglist__2514){
var args__8855__auto__ = cljs.core.seq(arglist__2514);
return G__2512__delegate(args__8855__auto__);
});
G__2512.cljs$core$IFn$_invoke$arity$variadic = G__2512__delegate;
return G__2512;
})()
;
;})(format_in__8853__auto__,cf__8854__auto__,_STAR_current_level_STAR__orig_val__2499_2508,_STAR_current_length_STAR__orig_val__2500_2509,_STAR_current_level_STAR__temp_val__2501_2510,_STAR_current_length_STAR__temp_val__2502_2511))
})(),alis);

var length_count2503_2515 = (0);
var alis_2516__$1 = cljs.core.seq.call(null,cljs.core.drop.call(null,(3),alis));
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count2503_2515 < cljs.core._STAR_print_length_STAR_)))){
if(alis_2516__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__2504_2517 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__2505_2518 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__2506_2519 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__2507_2520 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__2506_2519;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__2507_2520;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_2516__$1));

if(cljs.core.next.call(null,alis_2516__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_2516__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__2505_2518;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__2504_2517;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_2516__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__2521 = (length_count2503_2515 + (1));
var G__2522 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_2516__$1));
length_count2503_2515 = G__2521;
alis_2516__$1 = G__2522;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__2500_2509;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__2499_2508;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second.call(null,alis);
var nlis = cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,alis)));
if(cljs.core.vector_QMARK_.call(null,args)){
var _STAR_symbol_map_STAR__orig_val__2525 = cljs.pprint._STAR_symbol_map_STAR_;
var _STAR_symbol_map_STAR__temp_val__2526 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,args),"%"]):cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (_STAR_symbol_map_STAR__orig_val__2525,args,nlis){
return (function (p1__2523_SHARP_,p2__2524_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__2523_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__2524_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR__orig_val__2525,args,nlis))
,args,cljs.core.range.call(null,(1),(cljs.core.count.call(null,args) + (1))))));
cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__temp_val__2526;

try{return (function (){var format_in__8853__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__8854__auto__ = ((typeof format_in__8853__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8853__auto__):format_in__8853__auto__);
return ((function (format_in__8853__auto__,cf__8854__auto__,_STAR_symbol_map_STAR__orig_val__2525,_STAR_symbol_map_STAR__temp_val__2526,args,nlis){
return (function() { 
var G__2527__delegate = function (args__8855__auto__){
var navigator__8856__auto__ = cljs.pprint.init_navigator.call(null,args__8855__auto__);
return cljs.pprint.execute_format.call(null,cf__8854__auto__,navigator__8856__auto__);
};
var G__2527 = function (var_args){
var args__8855__auto__ = null;
if (arguments.length > 0) {
var G__2528__i = 0, G__2528__a = new Array(arguments.length -  0);
while (G__2528__i < G__2528__a.length) {G__2528__a[G__2528__i] = arguments[G__2528__i + 0]; ++G__2528__i;}
  args__8855__auto__ = new cljs.core.IndexedSeq(G__2528__a,0,null);
} 
return G__2527__delegate.call(this,args__8855__auto__);};
G__2527.cljs$lang$maxFixedArity = 0;
G__2527.cljs$lang$applyTo = (function (arglist__2529){
var args__8855__auto__ = cljs.core.seq(arglist__2529);
return G__2527__delegate(args__8855__auto__);
});
G__2527.cljs$core$IFn$_invoke$arity$variadic = G__2527__delegate;
return G__2527;
})()
;
;})(format_in__8853__auto__,cf__8854__auto__,_STAR_symbol_map_STAR__orig_val__2525,_STAR_symbol_map_STAR__temp_val__2526,args,nlis))
})().call(null,nlis);
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__orig_val__2525;
}} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__2530_2535 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__2531_2536 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__2532_2537 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__2533_2538 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__2532_2537;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__2533_2538;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

var length_count2534_2539 = (0);
var alis_2540__$1 = cljs.core.seq.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count2534_2539 < cljs.core._STAR_print_length_STAR_)))){
if(alis_2540__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_2540__$1));

if(cljs.core.next.call(null,alis_2540__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__2541 = (length_count2534_2539 + (1));
var G__2542 = cljs.core.next.call(null,alis_2540__$1);
length_count2534_2539 = G__2541;
alis_2540__$1 = G__2542;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__2531_2536;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__2530_2535;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__4913__auto__ = (function cljs$pprint$two_forms_$_iter__2543(s__2544){
return (new cljs.core.LazySeq(null,(function (){
var s__2544__$1 = s__2544;
while(true){
var temp__5535__auto__ = cljs.core.seq.call(null,s__2544__$1);
if(temp__5535__auto__){
var s__2544__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2544__$2)){
var c__4911__auto__ = cljs.core.chunk_first.call(null,s__2544__$2);
var size__4912__auto__ = cljs.core.count.call(null,c__4911__auto__);
var b__2546 = cljs.core.chunk_buffer.call(null,size__4912__auto__);
if((function (){var i__2545 = (0);
while(true){
if((i__2545 < size__4912__auto__)){
var x = cljs.core._nth.call(null,c__4911__auto__,i__2545);
cljs.core.chunk_append.call(null,b__2546,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null));

var G__2547 = (i__2545 + (1));
i__2545 = G__2547;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2546),cljs$pprint$two_forms_$_iter__2543.call(null,cljs.core.chunk_rest.call(null,s__2544__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2546),null);
}
} else {
var x = cljs.core.first.call(null,s__2544__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null),cljs$pprint$two_forms_$_iter__2543.call(null,cljs.core.rest.call(null,s__2544__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4913__auto__.call(null,amap);
})()));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (core){
return (function (p1__2548_SHARP_){
var vec__2549 = p1__2548_SHARP_;
var s = cljs.core.nth.call(null,vec__2549,(0),null);
var f = cljs.core.nth.call(null,vec__2549,(1),null);
if(cljs.core.not.call(null,(function (){var or__4452__auto__ = cljs.core.namespace.call(null,s);
if(cljs.core.truth_(or__4452__auto__)){
return or__4452__auto__;
} else {
return cljs.core.special_symbol_QMARK_.call(null,s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,core,cljs.core.name.call(null,s)),f], null);
} else {
return p1__2548_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms.call(null,cljs.pprint.add_core_ns.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"struct","struct",325972931,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),new cljs.core.Symbol(null,"locking","locking",1542862874,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null)],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
var temp__5533__auto__ = cljs.pprint._STAR_code_table_STAR_.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_(temp__5533__auto__)){
var special_form = temp__5533__auto__;
return special_form.call(null,alis);
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5533__auto__ = sym.call(null,cljs.pprint._STAR_symbol_map_STAR_);
if(cljs.core.truth_(temp__5533__auto__)){
var arg_num = temp__5533__auto__;
return cljs.pprint.print.call(null,arg_num);
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.call(null,cljs.core.name.call(null,sym));
} else {
return cljs.pprint.pr.call(null,sym);
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.code_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__5027__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5028__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5029__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5030__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5031__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5031__auto__,method_table__5027__auto__,prefer_table__5028__auto__,method_cache__5029__auto__,cached_hierarchy__5030__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_code_list);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.pprint.pprint_pqueue);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"deref","deref",-145586795),cljs.pprint.pprint_ideref);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__4542__auto__ = (0);
var y__4543__auto__ = (width - cljs.core.count.call(null,s));
return ((x__4542__auto__ > y__4543__auto__) ? x__4542__auto__ : y__4543__auto__);
})();
return cljs.core.apply.call(null,cljs.core.str,clojure.string.join.call(null,cljs.core.repeat.call(null,padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__2556 = arguments.length;
switch (G__2556) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
if(cljs.core.seq.call(null,rows)){
var widths = cljs.core.map.call(null,(function (k){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)),cljs.core.map.call(null,(function (p1__2552_SHARP_){
return cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,p1__2552_SHARP_,k)));
}),rows));
}),ks);
var spacers = cljs.core.map.call(null,((function (widths){
return (function (p1__2553_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,p1__2553_SHARP_,"-"));
});})(widths))
,widths);
var fmt_row = ((function (widths,spacers){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,divider,(function (){var iter__4913__auto__ = ((function (widths,spacers){
return (function cljs$pprint$iter__2557(s__2558){
return (new cljs.core.LazySeq(null,((function (widths,spacers){
return (function (){
var s__2558__$1 = s__2558;
while(true){
var temp__5535__auto__ = cljs.core.seq.call(null,s__2558__$1);
if(temp__5535__auto__){
var s__2558__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2558__$2)){
var c__4911__auto__ = cljs.core.chunk_first.call(null,s__2558__$2);
var size__4912__auto__ = cljs.core.count.call(null,c__4911__auto__);
var b__2560 = cljs.core.chunk_buffer.call(null,size__4912__auto__);
if((function (){var i__2559 = (0);
while(true){
if((i__2559 < size__4912__auto__)){
var vec__2561 = cljs.core._nth.call(null,c__4911__auto__,i__2559);
var col = cljs.core.nth.call(null,vec__2561,(0),null);
var width = cljs.core.nth.call(null,vec__2561,(1),null);
cljs.core.chunk_append.call(null,b__2560,cljs.pprint.add_padding.call(null,width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)));

var G__2572 = (i__2559 + (1));
i__2559 = G__2572;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2560),cljs$pprint$iter__2557.call(null,cljs.core.chunk_rest.call(null,s__2558__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2560),null);
}
} else {
var vec__2564 = cljs.core.first.call(null,s__2558__$2);
var col = cljs.core.nth.call(null,vec__2564,(0),null);
var width = cljs.core.nth.call(null,vec__2564,(1),null);
return cljs.core.cons.call(null,cljs.pprint.add_padding.call(null,width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),cljs$pprint$iter__2557.call(null,cljs.core.rest.call(null,s__2558__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers))
,null,null));
});})(widths,spacers))
;
return iter__4913__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,((function (iter__4913__auto__,widths,spacers){
return (function (p1__2554_SHARP_){
return cljs.core.get.call(null,row,p1__2554_SHARP_);
});})(iter__4913__auto__,widths,spacers))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers))
;
cljs.core.println.call(null);

cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",cljs.core.zipmap.call(null,ks,ks)));

cljs.core.println.call(null,fmt_row.call(null,"|-","-+-","-|",cljs.core.zipmap.call(null,ks,spacers)));

var seq__2567 = cljs.core.seq.call(null,rows);
var chunk__2568 = null;
var count__2569 = (0);
var i__2570 = (0);
while(true){
if((i__2570 < count__2569)){
var row = cljs.core._nth.call(null,chunk__2568,i__2570);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));


var G__2573 = seq__2567;
var G__2574 = chunk__2568;
var G__2575 = count__2569;
var G__2576 = (i__2570 + (1));
seq__2567 = G__2573;
chunk__2568 = G__2574;
count__2569 = G__2575;
i__2570 = G__2576;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq.call(null,seq__2567);
if(temp__5535__auto__){
var seq__2567__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2567__$1)){
var c__4958__auto__ = cljs.core.chunk_first.call(null,seq__2567__$1);
var G__2577 = cljs.core.chunk_rest.call(null,seq__2567__$1);
var G__2578 = c__4958__auto__;
var G__2579 = cljs.core.count.call(null,c__4958__auto__);
var G__2580 = (0);
seq__2567 = G__2577;
chunk__2568 = G__2578;
count__2569 = G__2579;
i__2570 = G__2580;
continue;
} else {
var row = cljs.core.first.call(null,seq__2567__$1);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));


var G__2581 = cljs.core.next.call(null,seq__2567__$1);
var G__2582 = null;
var G__2583 = (0);
var G__2584 = (0);
seq__2567 = G__2581;
chunk__2568 = G__2582;
count__2569 = G__2583;
i__2570 = G__2584;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=pprint.js.map