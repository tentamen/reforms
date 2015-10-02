// Compiled by ClojureScript 1.7.122 {}
goog.provide('examples.simple');
goog.require('cljs.core');
goog.require('reforms.reagent');
goog.require('reagent.core');
goog.require('examples.shared.utils');
examples.simple.customer = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"private","private",-558947994)], null));
if(typeof examples.simple.render_details !== 'undefined'){
} else {
examples.simple.render_details = (function (){var method_table__5506__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5507__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5508__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5509__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5510__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"examples.simple","render-details"),cljs.core.comp.call(null,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.deref),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5510__auto__,method_table__5506__auto__,prefer_table__5507__auto__,method_cache__5508__auto__,cached_hierarchy__5509__auto__));
})();
}
cljs.core._add_method.call(null,examples.simple.render_details,new cljs.core.Keyword(null,"private","private",-558947994),(function (customer){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,reforms.reagent.text.call(null,"Last name",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last","last",1105735132)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter last name")),reforms.reagent.text.call(null,"First name",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first","first",-644103046)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter first name"));
}));
cljs.core._add_method.call(null,examples.simple.render_details,new cljs.core.Keyword(null,"corporate","corporate",2037871850),(function (customer){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,reforms.reagent.select.call(null,"Country",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"country","country",312965309)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"us","us",746429226),"USA"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gb","gb",1226072392),"United Kingdom"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pl","pl",-1690940563),"Poland"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"de","de",1547124116),"Germany"], null)], null))),reforms.reagent.text.call(null,"Reg number",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reg-no","reg-no",1596254887)], null))),reforms.reagent.text.call(null,"Company name",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"company-name","company-name",1213910953)], null)));
}));
examples.simple.render_address = (function examples$simple$render_address(customer){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,reforms.reagent.text.call(null,"City",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"city","city",-393302614)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter city name")),reforms.reagent.text.call(null,customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address2","address2",1133017811)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter address line 2")),reforms.reagent.text.call(null,"Address",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address1","address1",1491072176)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter address line 1"));
});
examples.simple.customer_form_view = (function examples$simple$customer_form_view(customer){
return reforms.reagent.form.call(null,reforms.reagent.group_title.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"group-title-main"], null),"Customer info"),reforms.reagent.select.call(null,"Customer type",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"private","private",-558947994),"Private"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"corporate","corporate",2037871850),"Corporate"], null)], null)),reforms.reagent.group_title.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"group-title-minor"], null),"Details"),examples.simple.render_details.call(null,customer),reforms.reagent.group_title.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"group-title-minor"], null),"Address"),examples.simple.render_address.call(null,customer),reforms.reagent.group_title.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"group-title-main"], null),"Access credentials"),reforms.reagent.text.call(null,"Login",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter login"),reforms.reagent.password.call(null,"Password",customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password","password",417022471)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter password"),reforms.reagent.form_buttons.call(null,reforms.reagent.button.call(null,"Save",(function (){
return alert("clicked");
}))));
});
examples.simple.main_view = (function examples$simple$main_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-view","div.main-view",1657317201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.simple.customer_form_view,examples.simple.customer], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.shared.utils.inspector_view,examples.simple.customer], null)], null);
});
reforms.reagent.set_options_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),true,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #BBB",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"5px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#EFEFEF",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px"], null)], null)], null),new cljs.core.Keyword(null,"group-title","group-title",392188964),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#666"], null)], null)], null)], null));
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.simple.main_view], null),document.getElementById("app"));

//# sourceMappingURL=simple.js.map