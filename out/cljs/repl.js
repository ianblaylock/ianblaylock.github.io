// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__931){
var map__932 = p__931;
var map__932__$1 = (((((!((map__932 == null))))?(((((map__932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__932):map__932);
var m = map__932__$1;
var n = cljs.core.get.call(null,map__932__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__932__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4452__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4452__auto__)){
return or__4452__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5535__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5535__auto__)){
var ns = temp__5535__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__934_956 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__935_957 = null;
var count__936_958 = (0);
var i__937_959 = (0);
while(true){
if((i__937_959 < count__936_958)){
var f_960 = cljs.core._nth.call(null,chunk__935_957,i__937_959);
cljs.core.println.call(null,"  ",f_960);


var G__961 = seq__934_956;
var G__962 = chunk__935_957;
var G__963 = count__936_958;
var G__964 = (i__937_959 + (1));
seq__934_956 = G__961;
chunk__935_957 = G__962;
count__936_958 = G__963;
i__937_959 = G__964;
continue;
} else {
var temp__5535__auto___965 = cljs.core.seq.call(null,seq__934_956);
if(temp__5535__auto___965){
var seq__934_966__$1 = temp__5535__auto___965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__934_966__$1)){
var c__4958__auto___967 = cljs.core.chunk_first.call(null,seq__934_966__$1);
var G__968 = cljs.core.chunk_rest.call(null,seq__934_966__$1);
var G__969 = c__4958__auto___967;
var G__970 = cljs.core.count.call(null,c__4958__auto___967);
var G__971 = (0);
seq__934_956 = G__968;
chunk__935_957 = G__969;
count__936_958 = G__970;
i__937_959 = G__971;
continue;
} else {
var f_972 = cljs.core.first.call(null,seq__934_966__$1);
cljs.core.println.call(null,"  ",f_972);


var G__973 = cljs.core.next.call(null,seq__934_966__$1);
var G__974 = null;
var G__975 = (0);
var G__976 = (0);
seq__934_956 = G__973;
chunk__935_957 = G__974;
count__936_958 = G__975;
i__937_959 = G__976;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_977 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4452__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4452__auto__)){
return or__4452__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_977);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_977)))?cljs.core.second.call(null,arglists_977):arglists_977));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__938_978 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__939_979 = null;
var count__940_980 = (0);
var i__941_981 = (0);
while(true){
if((i__941_981 < count__940_980)){
var vec__942_982 = cljs.core._nth.call(null,chunk__939_979,i__941_981);
var name_983 = cljs.core.nth.call(null,vec__942_982,(0),null);
var map__945_984 = cljs.core.nth.call(null,vec__942_982,(1),null);
var map__945_985__$1 = (((((!((map__945_984 == null))))?(((((map__945_984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__945_984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__945_984):map__945_984);
var doc_986 = cljs.core.get.call(null,map__945_985__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_987 = cljs.core.get.call(null,map__945_985__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_983);

cljs.core.println.call(null," ",arglists_987);

if(cljs.core.truth_(doc_986)){
cljs.core.println.call(null," ",doc_986);
} else {
}


var G__988 = seq__938_978;
var G__989 = chunk__939_979;
var G__990 = count__940_980;
var G__991 = (i__941_981 + (1));
seq__938_978 = G__988;
chunk__939_979 = G__989;
count__940_980 = G__990;
i__941_981 = G__991;
continue;
} else {
var temp__5535__auto___992 = cljs.core.seq.call(null,seq__938_978);
if(temp__5535__auto___992){
var seq__938_993__$1 = temp__5535__auto___992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__938_993__$1)){
var c__4958__auto___994 = cljs.core.chunk_first.call(null,seq__938_993__$1);
var G__995 = cljs.core.chunk_rest.call(null,seq__938_993__$1);
var G__996 = c__4958__auto___994;
var G__997 = cljs.core.count.call(null,c__4958__auto___994);
var G__998 = (0);
seq__938_978 = G__995;
chunk__939_979 = G__996;
count__940_980 = G__997;
i__941_981 = G__998;
continue;
} else {
var vec__947_999 = cljs.core.first.call(null,seq__938_993__$1);
var name_1000 = cljs.core.nth.call(null,vec__947_999,(0),null);
var map__950_1001 = cljs.core.nth.call(null,vec__947_999,(1),null);
var map__950_1002__$1 = (((((!((map__950_1001 == null))))?(((((map__950_1001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__950_1001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__950_1001):map__950_1001);
var doc_1003 = cljs.core.get.call(null,map__950_1002__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1004 = cljs.core.get.call(null,map__950_1002__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1000);

cljs.core.println.call(null," ",arglists_1004);

if(cljs.core.truth_(doc_1003)){
cljs.core.println.call(null," ",doc_1003);
} else {
}


var G__1005 = cljs.core.next.call(null,seq__938_993__$1);
var G__1006 = null;
var G__1007 = (0);
var G__1008 = (0);
seq__938_978 = G__1005;
chunk__939_979 = G__1006;
count__940_980 = G__1007;
i__941_981 = G__1008;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5535__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5535__auto__)){
var fnspec = temp__5535__auto__;
cljs.core.print.call(null,"Spec");

var seq__952 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__953 = null;
var count__954 = (0);
var i__955 = (0);
while(true){
if((i__955 < count__954)){
var role = cljs.core._nth.call(null,chunk__953,i__955);
var temp__5535__auto___1009__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5535__auto___1009__$1)){
var spec_1010 = temp__5535__auto___1009__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1010));
} else {
}


var G__1011 = seq__952;
var G__1012 = chunk__953;
var G__1013 = count__954;
var G__1014 = (i__955 + (1));
seq__952 = G__1011;
chunk__953 = G__1012;
count__954 = G__1013;
i__955 = G__1014;
continue;
} else {
var temp__5535__auto____$1 = cljs.core.seq.call(null,seq__952);
if(temp__5535__auto____$1){
var seq__952__$1 = temp__5535__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__952__$1)){
var c__4958__auto__ = cljs.core.chunk_first.call(null,seq__952__$1);
var G__1015 = cljs.core.chunk_rest.call(null,seq__952__$1);
var G__1016 = c__4958__auto__;
var G__1017 = cljs.core.count.call(null,c__4958__auto__);
var G__1018 = (0);
seq__952 = G__1015;
chunk__953 = G__1016;
count__954 = G__1017;
i__955 = G__1018;
continue;
} else {
var role = cljs.core.first.call(null,seq__952__$1);
var temp__5535__auto___1019__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5535__auto___1019__$2)){
var spec_1020 = temp__5535__auto___1019__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1020));
} else {
}


var G__1021 = cljs.core.next.call(null,seq__952__$1);
var G__1022 = null;
var G__1023 = (0);
var G__1024 = (0);
seq__952 = G__1021;
chunk__953 = G__1022;
count__954 = G__1023;
i__955 = G__1024;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
