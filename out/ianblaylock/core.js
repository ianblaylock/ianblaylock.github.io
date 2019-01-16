// Compiled by ClojureScript 1.10.439 {}
goog.provide('ianblaylock.core');
goog.require('cljs.core');
var li_id_map_54 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,(function (v){
return cljs.core.mapv.call(null,(function (p1__34_SHARP_){
return document.getElementById(p1__34_SHARP_);
}),v);
}),cljs.core.juxt.call(null,(function (p1__35_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35_SHARP_),"Li"].join('');
}),cljs.core.identity)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["obsMonitor","quickHydroBrief","hydroDataViewer"], null)));
cljs.core.prn.call(null,li_id_map_54);

var seq__36_55 = cljs.core.seq.call(null,li_id_map_54);
var chunk__37_56 = null;
var count__38_57 = (0);
var i__39_58 = (0);
while(true){
if((i__39_58 < count__38_57)){
var vec__40_59 = cljs.core._nth.call(null,chunk__37_56,i__39_58);
var li_60 = cljs.core.nth.call(null,vec__40_59,(0),null);
var div_61 = cljs.core.nth.call(null,vec__40_59,(1),null);
div_61.style.display = "none";

li_60.addEventListener("click",((function (seq__36_55,chunk__37_56,count__38_57,i__39_58,vec__40_59,li_60,div_61,li_id_map_54){
return (function (){
var seq__43 = cljs.core.seq.call(null,cljs.core.keys.call(null,li_id_map_54));
var chunk__44 = null;
var count__45 = (0);
var i__46 = (0);
while(true){
if((i__46 < count__45)){
var li_ = cljs.core._nth.call(null,chunk__44,i__46);
li_.style.backgroundColor = ((cljs.core._EQ_.call(null,li_,li_60))?"777777":"aaaaaa");

cljs.core.prn.call(null,li_id_map_54.call(null,li_));


var G__62 = seq__43;
var G__63 = chunk__44;
var G__64 = count__45;
var G__65 = (i__46 + (1));
seq__43 = G__62;
chunk__44 = G__63;
count__45 = G__64;
i__46 = G__65;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq.call(null,seq__43);
if(temp__5535__auto__){
var seq__43__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43__$1)){
var c__4958__auto__ = cljs.core.chunk_first.call(null,seq__43__$1);
var G__66 = cljs.core.chunk_rest.call(null,seq__43__$1);
var G__67 = c__4958__auto__;
var G__68 = cljs.core.count.call(null,c__4958__auto__);
var G__69 = (0);
seq__43 = G__66;
chunk__44 = G__67;
count__45 = G__68;
i__46 = G__69;
continue;
} else {
var li_ = cljs.core.first.call(null,seq__43__$1);
li_.style.backgroundColor = ((cljs.core._EQ_.call(null,li_,li_60))?"777777":"aaaaaa");

cljs.core.prn.call(null,li_id_map_54.call(null,li_));


var G__70 = cljs.core.next.call(null,seq__43__$1);
var G__71 = null;
var G__72 = (0);
var G__73 = (0);
seq__43 = G__70;
chunk__44 = G__71;
count__45 = G__72;
i__46 = G__73;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__36_55,chunk__37_56,count__38_57,i__39_58,vec__40_59,li_60,div_61,li_id_map_54))
);


var G__74 = seq__36_55;
var G__75 = chunk__37_56;
var G__76 = count__38_57;
var G__77 = (i__39_58 + (1));
seq__36_55 = G__74;
chunk__37_56 = G__75;
count__38_57 = G__76;
i__39_58 = G__77;
continue;
} else {
var temp__5535__auto___78 = cljs.core.seq.call(null,seq__36_55);
if(temp__5535__auto___78){
var seq__36_79__$1 = temp__5535__auto___78;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36_79__$1)){
var c__4958__auto___80 = cljs.core.chunk_first.call(null,seq__36_79__$1);
var G__81 = cljs.core.chunk_rest.call(null,seq__36_79__$1);
var G__82 = c__4958__auto___80;
var G__83 = cljs.core.count.call(null,c__4958__auto___80);
var G__84 = (0);
seq__36_55 = G__81;
chunk__37_56 = G__82;
count__38_57 = G__83;
i__39_58 = G__84;
continue;
} else {
var vec__47_85 = cljs.core.first.call(null,seq__36_79__$1);
var li_86 = cljs.core.nth.call(null,vec__47_85,(0),null);
var div_87 = cljs.core.nth.call(null,vec__47_85,(1),null);
div_87.style.display = "none";

li_86.addEventListener("click",((function (seq__36_55,chunk__37_56,count__38_57,i__39_58,vec__47_85,li_86,div_87,seq__36_79__$1,temp__5535__auto___78,li_id_map_54){
return (function (){
var seq__50 = cljs.core.seq.call(null,cljs.core.keys.call(null,li_id_map_54));
var chunk__51 = null;
var count__52 = (0);
var i__53 = (0);
while(true){
if((i__53 < count__52)){
var li_ = cljs.core._nth.call(null,chunk__51,i__53);
li_.style.backgroundColor = ((cljs.core._EQ_.call(null,li_,li_86))?"777777":"aaaaaa");

cljs.core.prn.call(null,li_id_map_54.call(null,li_));


var G__88 = seq__50;
var G__89 = chunk__51;
var G__90 = count__52;
var G__91 = (i__53 + (1));
seq__50 = G__88;
chunk__51 = G__89;
count__52 = G__90;
i__53 = G__91;
continue;
} else {
var temp__5535__auto____$1 = cljs.core.seq.call(null,seq__50);
if(temp__5535__auto____$1){
var seq__50__$1 = temp__5535__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50__$1)){
var c__4958__auto__ = cljs.core.chunk_first.call(null,seq__50__$1);
var G__92 = cljs.core.chunk_rest.call(null,seq__50__$1);
var G__93 = c__4958__auto__;
var G__94 = cljs.core.count.call(null,c__4958__auto__);
var G__95 = (0);
seq__50 = G__92;
chunk__51 = G__93;
count__52 = G__94;
i__53 = G__95;
continue;
} else {
var li_ = cljs.core.first.call(null,seq__50__$1);
li_.style.backgroundColor = ((cljs.core._EQ_.call(null,li_,li_86))?"777777":"aaaaaa");

cljs.core.prn.call(null,li_id_map_54.call(null,li_));


var G__96 = cljs.core.next.call(null,seq__50__$1);
var G__97 = null;
var G__98 = (0);
var G__99 = (0);
seq__50 = G__96;
chunk__51 = G__97;
count__52 = G__98;
i__53 = G__99;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__36_55,chunk__37_56,count__38_57,i__39_58,vec__47_85,li_86,div_87,seq__36_79__$1,temp__5535__auto___78,li_id_map_54))
);


var G__100 = cljs.core.next.call(null,seq__36_79__$1);
var G__101 = null;
var G__102 = (0);
var G__103 = (0);
seq__36_55 = G__100;
chunk__37_56 = G__101;
count__38_57 = G__102;
i__39_58 = G__103;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=core.js.map
