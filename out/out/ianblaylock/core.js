// Compiled by ClojureScript 1.10.439 {}
goog.provide('ianblaylock.core');
goog.require('cljs.core');
ianblaylock.core.display_program_description = (function ianblaylock$core$display_program_description(elementId){
cljs.core.prn.call(null,elementId);

var seq__1644 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["obsMonitor","quickHydroBrief","hydroDataViewer"], null));
var chunk__1645 = null;
var count__1646 = (0);
var i__1647 = (0);
while(true){
if((i__1647 < count__1646)){
var id = cljs.core._nth.call(null,chunk__1645,i__1647);
document.getElementById([cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"Li"].join('')).style.backgroundColor = ((cljs.core._EQ_.call(null,elementId,id))?"#777777":"#aaaaaa");

document.getElementById(id).style.display = ((cljs.core._EQ_.call(null,elementId,id))?"block":"none");


var G__1648 = seq__1644;
var G__1649 = chunk__1645;
var G__1650 = count__1646;
var G__1651 = (i__1647 + (1));
seq__1644 = G__1648;
chunk__1645 = G__1649;
count__1646 = G__1650;
i__1647 = G__1651;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq.call(null,seq__1644);
if(temp__5535__auto__){
var seq__1644__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1644__$1)){
var c__4958__auto__ = cljs.core.chunk_first.call(null,seq__1644__$1);
var G__1652 = cljs.core.chunk_rest.call(null,seq__1644__$1);
var G__1653 = c__4958__auto__;
var G__1654 = cljs.core.count.call(null,c__4958__auto__);
var G__1655 = (0);
seq__1644 = G__1652;
chunk__1645 = G__1653;
count__1646 = G__1654;
i__1647 = G__1655;
continue;
} else {
var id = cljs.core.first.call(null,seq__1644__$1);
document.getElementById([cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"Li"].join('')).style.backgroundColor = ((cljs.core._EQ_.call(null,elementId,id))?"#777777":"#aaaaaa");

document.getElementById(id).style.display = ((cljs.core._EQ_.call(null,elementId,id))?"block":"none");


var G__1656 = cljs.core.next.call(null,seq__1644__$1);
var G__1657 = null;
var G__1658 = (0);
var G__1659 = (0);
seq__1644 = G__1656;
chunk__1645 = G__1657;
count__1646 = G__1658;
i__1647 = G__1659;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__1661_1679 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,(function (p1__1660_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__1660_SHARP_),"Li"].join('');
})),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["obsMonitor","quickHydroBrief","hydroDataViewer"], null)));
var chunk__1663_1680 = null;
var count__1664_1681 = (0);
var i__1665_1682 = (0);
while(true){
if((i__1665_1682 < count__1664_1681)){
var vec__1667_1683 = cljs.core._nth.call(null,chunk__1663_1680,i__1665_1682);
var id_1684 = cljs.core.nth.call(null,vec__1667_1683,(0),null);
var li_1685 = cljs.core.nth.call(null,vec__1667_1683,(1),null);
var vec__1670_1686 = cljs.core.map.call(null,((function (seq__1661_1679,chunk__1663_1680,count__1664_1681,i__1665_1682,vec__1667_1683,id_1684,li_1685){
return (function (){
return document.getElementById(li_1685);
});})(seq__1661_1679,chunk__1663_1680,count__1664_1681,i__1665_1682,vec__1667_1683,id_1684,li_1685))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_1684,li_1685], null));
var idElem_1687 = cljs.core.nth.call(null,vec__1670_1686,(0),null);
var liElem_1688 = cljs.core.nth.call(null,vec__1670_1686,(1),null);
liElem_1688.addEventListener("click",((function (seq__1661_1679,chunk__1663_1680,count__1664_1681,i__1665_1682,vec__1670_1686,idElem_1687,liElem_1688,vec__1667_1683,id_1684,li_1685){
return (function (){
return ianblaylock.core.display_program_description.call(null,id_1684);
});})(seq__1661_1679,chunk__1663_1680,count__1664_1681,i__1665_1682,vec__1670_1686,idElem_1687,liElem_1688,vec__1667_1683,id_1684,li_1685))
);


var G__1689 = seq__1661_1679;
var G__1690 = chunk__1663_1680;
var G__1691 = count__1664_1681;
var G__1692 = (i__1665_1682 + (1));
seq__1661_1679 = G__1689;
chunk__1663_1680 = G__1690;
count__1664_1681 = G__1691;
i__1665_1682 = G__1692;
continue;
} else {
var temp__5535__auto___1693 = cljs.core.seq.call(null,seq__1661_1679);
if(temp__5535__auto___1693){
var seq__1661_1694__$1 = temp__5535__auto___1693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1661_1694__$1)){
var c__4958__auto___1695 = cljs.core.chunk_first.call(null,seq__1661_1694__$1);
var G__1696 = cljs.core.chunk_rest.call(null,seq__1661_1694__$1);
var G__1697 = c__4958__auto___1695;
var G__1698 = cljs.core.count.call(null,c__4958__auto___1695);
var G__1699 = (0);
seq__1661_1679 = G__1696;
chunk__1663_1680 = G__1697;
count__1664_1681 = G__1698;
i__1665_1682 = G__1699;
continue;
} else {
var vec__1673_1700 = cljs.core.first.call(null,seq__1661_1694__$1);
var id_1701 = cljs.core.nth.call(null,vec__1673_1700,(0),null);
var li_1702 = cljs.core.nth.call(null,vec__1673_1700,(1),null);
var vec__1676_1703 = cljs.core.map.call(null,((function (seq__1661_1679,chunk__1663_1680,count__1664_1681,i__1665_1682,vec__1673_1700,id_1701,li_1702,seq__1661_1694__$1,temp__5535__auto___1693){
return (function (){
return document.getElementById(li_1702);
});})(seq__1661_1679,chunk__1663_1680,count__1664_1681,i__1665_1682,vec__1673_1700,id_1701,li_1702,seq__1661_1694__$1,temp__5535__auto___1693))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_1701,li_1702], null));
var idElem_1704 = cljs.core.nth.call(null,vec__1676_1703,(0),null);
var liElem_1705 = cljs.core.nth.call(null,vec__1676_1703,(1),null);
liElem_1705.addEventListener("click",((function (seq__1661_1679,chunk__1663_1680,count__1664_1681,i__1665_1682,vec__1676_1703,idElem_1704,liElem_1705,vec__1673_1700,id_1701,li_1702,seq__1661_1694__$1,temp__5535__auto___1693){
return (function (){
return ianblaylock.core.display_program_description.call(null,id_1701);
});})(seq__1661_1679,chunk__1663_1680,count__1664_1681,i__1665_1682,vec__1676_1703,idElem_1704,liElem_1705,vec__1673_1700,id_1701,li_1702,seq__1661_1694__$1,temp__5535__auto___1693))
);


var G__1706 = cljs.core.next.call(null,seq__1661_1694__$1);
var G__1707 = null;
var G__1708 = (0);
var G__1709 = (0);
seq__1661_1679 = G__1706;
chunk__1663_1680 = G__1707;
count__1664_1681 = G__1708;
i__1665_1682 = G__1709;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=core.js.map
