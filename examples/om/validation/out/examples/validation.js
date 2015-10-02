// Compiled by ClojureScript 1.7.122 {}
goog.provide('examples.validation');
goog.require('cljs.core');
goog.require('reforms.validation');
goog.require('reforms.om');
goog.require('sablono.core');
goog.require('examples.shared.utils');
goog.require('om.core');
goog.require('clojure.string');
examples.validation.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"customers","customers",635915531),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"customer","customer",1742966319),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"city","city",-393302614),"New York"], null),new cljs.core.Keyword(null,"ui-state","ui-state",646932351),cljs.core.PersistentArrayMap.EMPTY], null));
examples.validation.positive_number_QMARK_ = (function examples$validation$positive_number_QMARK_(s){
return (parseInt(s) > (0));
});
examples.validation.positive_number = (function examples$validation$positive_number(korks,error_message){
return reforms.validation.is_true.call(null,korks,examples.validation.positive_number_QMARK_,error_message);
});
examples.validation.customer_validators = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first","first",-644103046)], null),"Enter first name"),reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last","last",1105735132)], null),"Enter last name"),examples.validation.positive_number.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"age","age",-604307804)], null),"Age must be a positive number"),reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null),"Enter login name"),reforms.validation.equal.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password1","password1",-1551287478)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password2","password2",557827521)], null),"Passwords do not match"),reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password1","password1",-1551287478)], null),"Choose password"),reforms.validation.present.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password2","password2",557827521)], null),"Re-enter password")], null);
examples.validation.sign_up_BANG_ = (function examples$validation$sign_up_BANG_(customers,customer,ui_state){
if(cljs.core.truth_(cljs.core.apply.call(null,reforms.validation.validate_BANG_,customer,ui_state,examples.validation.customer_validators))){
return om.core.transact_BANG_.call(null,customers,(function (xs){
return cljs.core.conj.call(null,xs,cljs.core.deref.call(null,customer));
}));
} else {
return null;
}
});
examples.validation.force_error_BANG_ = (function examples$validation$force_error_BANG_(customer,ui_state){
return reforms.validation.validate_BANG_.call(null,customer,ui_state,reforms.validation.force_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server-error","server-error",-426815993)], null),"An error has occurred"));
});
examples.validation.signup_form_view = (function examples$validation$signup_form_view(p__157911,_owner){
var vec__157917 = p__157911;
var customers = cljs.core.nth.call(null,vec__157917,(0),null);
var customer = cljs.core.nth.call(null,vec__157917,(1),null);
var ui_state = cljs.core.nth.call(null,vec__157917,(2),null);
if(typeof examples.validation.t_examples$validation157918 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
examples.validation.t_examples$validation157918 = (function (signup_form_view,p__157911,_owner,vec__157917,customers,customer,ui_state,meta157919){
this.signup_form_view = signup_form_view;
this.p__157911 = p__157911;
this._owner = _owner;
this.vec__157917 = vec__157917;
this.customers = customers;
this.customer = customer;
this.ui_state = ui_state;
this.meta157919 = meta157919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.validation.t_examples$validation157918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__157917,customers,customer,ui_state){
return (function (_157920,meta157919__$1){
var self__ = this;
var _157920__$1 = this;
return (new examples.validation.t_examples$validation157918(self__.signup_form_view,self__.p__157911,self__._owner,self__.vec__157917,self__.customers,self__.customer,self__.ui_state,meta157919__$1));
});})(vec__157917,customers,customer,ui_state))
;

examples.validation.t_examples$validation157918.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__157917,customers,customer,ui_state){
return (function (_157920){
var self__ = this;
var _157920__$1 = this;
return self__.meta157919;
});})(vec__157917,customers,customer,ui_state))
;

examples.validation.t_examples$validation157918.prototype.om$core$IRender$ = true;

examples.validation.t_examples$validation157918.prototype.om$core$IRender$render$arity$1 = ((function (vec__157917,customers,customer,ui_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret.call(null,reforms.om.panel.call(null,"Add customer",(function (){var _STAR_options_STAR_157921 = reforms.core.options._STAR_options_STAR_;
reforms.core.options._STAR_options_STAR_ = reforms.core.options.merge_options.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form-horizontal","form-horizontal",479603727),true,new cljs.core.Keyword(null,"label-column-class","label-column-class",-1193482589),"col-md-4",new cljs.core.Keyword(null,"input-column-class","input-column-class",717499433),"col-md-8"], null));

try{if(cljs.core.truth_(reforms.binding.core.valid_QMARK_.call(null,self__.ui_state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("The first argument to reforms.validation/form before optional attributes must be a valid binding target."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("reforms.binding.core","valid?","reforms.binding.core/valid?",-1432752474,null),new cljs.core.Symbol(null,"ui-state","ui-state",-2007503418,null))))].join('')));
}

return reforms.core.form.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (_STAR_options_STAR_157921,___$1,vec__157917,customers,customer,ui_state){
return (function (){
return examples.validation.sign_up_BANG_.call(null,self__.customers,self__.customer,self__.ui_state);
});})(_STAR_options_STAR_157921,___$1,vec__157917,customers,customer,ui_state))
], null),reforms.validation.validating_fields_fn.call(null,reforms.validation.validation_errors.call(null,self__.ui_state),((function (_STAR_options_STAR_157921,___$1,vec__157917,customers,customer,ui_state){
return (function (){
return reforms.validation.text.call(null,"First name",self__.customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first","first",-644103046)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter first name");
});})(_STAR_options_STAR_157921,___$1,vec__157917,customers,customer,ui_state))
,((function (_STAR_options_STAR_157921,___$1,vec__157917,customers,customer,ui_state){
return (function (){
return reforms.validation.text.call(null,"Last name",self__.customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last","last",1105735132)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter last name");
});})(_STAR_options_STAR_157921,___$1,vec__157917,customers,customer,ui_state))
,((function (_STAR_options_STAR_157921,___$1,vec__157917,customers,customer,ui_state){
return (function (){
return reforms.validation.text.call(null,"City",self__.customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"city","city",-393302614)], null),new cljs.core.Keyword(null,"warn-fn","warn-fn",1867170594),((function (_STAR_options_STAR_157921,___$1,vec__157917,customers,customer,ui_state){
return (function (p1__157910_SHARP_){
if(cljs.core._EQ_.call(null,"Kansas",p1__157910_SHARP_)){
return null;
} else {
return "We're not in Kansas anymore";
}
});})(_STAR_options_STAR_157921,___$1,vec__157917,customers,customer,ui_state))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Where are you?");
});})(_STAR_options_STAR_157921,___$1,vec__157917,customers,customer,ui_state))
,((function (_STAR_options_STAR_157921,___$1,vec__157917,customers,customer,ui_state){
return (function (){
return reforms.validation.number.call(null,"Age",self__.customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"age","age",-604307804)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter your age");
});})(_STAR_options_STAR_157921,___$1,vec__157917,customers,customer,ui_state))
,((function (_STAR_options_STAR_157921,___$1,vec__157917,customers,customer,ui_state){
return (function (){
return reforms.validation.text.call(null,"Login",self__.customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Choose login");
});})(_STAR_options_STAR_157921,___$1,vec__157917,customers,customer,ui_state))
,((function (_STAR_options_STAR_157921,___$1,vec__157917,customers,customer,ui_state){
return (function (){
return reforms.validation.password.call(null,"Password",self__.customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password1","password1",-1551287478)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter password");
});})(_STAR_options_STAR_157921,___$1,vec__157917,customers,customer,ui_state))
,((function (_STAR_options_STAR_157921,___$1,vec__157917,customers,customer,ui_state){
return (function (){
return reforms.validation.password.call(null,"Confirm password",self__.customer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password2","password2",557827521)], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Re-enter password");
});})(_STAR_options_STAR_157921,___$1,vec__157917,customers,customer,ui_state))
,((function (_STAR_options_STAR_157921,___$1,vec__157917,customers,customer,ui_state){
return (function (){
return reforms.validation.error_alert.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server-error","server-error",-426815993)], null));
});})(_STAR_options_STAR_157921,___$1,vec__157917,customers,customer,ui_state))
,((function (_STAR_options_STAR_157921,___$1,vec__157917,customers,customer,ui_state){
return (function (){
return reforms.om.form_buttons.call(null,reforms.om.button_primary.call(null,"Save",((function (_STAR_options_STAR_157921,___$1,vec__157917,customers,customer,ui_state){
return (function (){
return examples.validation.sign_up_BANG_.call(null,self__.customers,self__.customer,self__.ui_state);
});})(_STAR_options_STAR_157921,___$1,vec__157917,customers,customer,ui_state))
),reforms.om.button_default.call(null,"Simulate server error",((function (_STAR_options_STAR_157921,___$1,vec__157917,customers,customer,ui_state){
return (function (){
return examples.validation.force_error_BANG_.call(null,self__.customer,self__.ui_state);
});})(_STAR_options_STAR_157921,___$1,vec__157917,customers,customer,ui_state))
));
});})(_STAR_options_STAR_157921,___$1,vec__157917,customers,customer,ui_state))
));
}finally {reforms.core.options._STAR_options_STAR_ = _STAR_options_STAR_157921;
}})()));
});})(vec__157917,customers,customer,ui_state))
;

examples.validation.t_examples$validation157918.getBasis = ((function (vec__157917,customers,customer,ui_state){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"signup-form-view","signup-form-view",-2000434242,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"customers","customers",-2018520238,null),new cljs.core.Symbol(null,"customer","customer",-911469450,null),new cljs.core.Symbol(null,"ui-state","ui-state",-2007503418,null)], null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null)], null)))], null)),new cljs.core.Symbol(null,"p__157911","p__157911",1176032529,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"vec__157917","vec__157917",2041975055,null),new cljs.core.Symbol(null,"customers","customers",-2018520238,null),new cljs.core.Symbol(null,"customer","customer",-911469450,null),new cljs.core.Symbol(null,"ui-state","ui-state",-2007503418,null),new cljs.core.Symbol(null,"meta157919","meta157919",-801726894,null)], null);
});})(vec__157917,customers,customer,ui_state))
;

examples.validation.t_examples$validation157918.cljs$lang$type = true;

examples.validation.t_examples$validation157918.cljs$lang$ctorStr = "examples.validation/t_examples$validation157918";

examples.validation.t_examples$validation157918.cljs$lang$ctorPrWriter = ((function (vec__157917,customers,customer,ui_state){
return (function (this__5307__auto__,writer__5308__auto__,opt__5309__auto__){
return cljs.core._write.call(null,writer__5308__auto__,"examples.validation/t_examples$validation157918");
});})(vec__157917,customers,customer,ui_state))
;

examples.validation.__GT_t_examples$validation157918 = ((function (vec__157917,customers,customer,ui_state){
return (function examples$validation$signup_form_view_$___GT_t_examples$validation157918(signup_form_view__$1,p__157911__$1,_owner__$1,vec__157917__$1,customers__$1,customer__$1,ui_state__$1,meta157919){
return (new examples.validation.t_examples$validation157918(signup_form_view__$1,p__157911__$1,_owner__$1,vec__157917__$1,customers__$1,customer__$1,ui_state__$1,meta157919));
});})(vec__157917,customers,customer,ui_state))
;

}

return (new examples.validation.t_examples$validation157918(examples$validation$signup_form_view,p__157911,_owner,vec__157917,customers,customer,ui_state,cljs.core.PersistentArrayMap.EMPTY));
});
examples.validation.customer_list_view = (function examples$validation$customer_list_view(customers,_owner){
if(typeof examples.validation.t_examples$validation157942 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
examples.validation.t_examples$validation157942 = (function (customer_list_view,customers,_owner,meta157943){
this.customer_list_view = customer_list_view;
this.customers = customers;
this._owner = _owner;
this.meta157943 = meta157943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.validation.t_examples$validation157942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_157944,meta157943__$1){
var self__ = this;
var _157944__$1 = this;
return (new examples.validation.t_examples$validation157942(self__.customer_list_view,self__.customers,self__._owner,meta157943__$1));
});

examples.validation.t_examples$validation157942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_157944){
var self__ = this;
var _157944__$1 = this;
return self__.meta157943;
});

examples.validation.t_examples$validation157942.prototype.om$core$IRender$ = true;

examples.validation.t_examples$validation157942.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",{"className": "customers"},React.createElement("h3",null,"Customers"),(cljs.core.truth_(cljs.core.not_empty.call(null,self__.customers))?React.createElement("ul",{"className": "list-unstyled"},cljs.core.into_array.call(null,(function (){var iter__5481__auto__ = ((function (___$1){
return (function examples$validation$customer_list_view_$_iter__157950(s__157951){
return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){
var s__157951__$1 = s__157951;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__157951__$1);
if(temp__4425__auto__){
var s__157951__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__157951__$2)){
var c__5479__auto__ = cljs.core.chunk_first.call(null,s__157951__$2);
var size__5480__auto__ = cljs.core.count.call(null,c__5479__auto__);
var b__157953 = cljs.core.chunk_buffer.call(null,size__5480__auto__);
if((function (){var i__157952 = (0);
while(true){
if((i__157952 < size__5480__auto__)){
var map__157958 = cljs.core._nth.call(null,c__5479__auto__,i__157952);
var map__157958__$1 = ((((!((map__157958 == null)))?((((map__157958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157958):map__157958);
var first = cljs.core.get.call(null,map__157958__$1,new cljs.core.Keyword(null,"first","first",-644103046));
var last = cljs.core.get.call(null,map__157958__$1,new cljs.core.Keyword(null,"last","last",1105735132));
cljs.core.chunk_append.call(null,b__157953,(function (){var attrs157947 = clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,last], null));
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs157947))?sablono.interpreter.attributes.call(null,attrs157947):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs157947))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs157947)], null))));
})());

var G__157962 = (i__157952 + (1));
i__157952 = G__157962;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__157953),examples$validation$customer_list_view_$_iter__157950.call(null,cljs.core.chunk_rest.call(null,s__157951__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__157953),null);
}
} else {
var map__157960 = cljs.core.first.call(null,s__157951__$2);
var map__157960__$1 = ((((!((map__157960 == null)))?((((map__157960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157960):map__157960);
var first = cljs.core.get.call(null,map__157960__$1,new cljs.core.Keyword(null,"first","first",-644103046));
var last = cljs.core.get.call(null,map__157960__$1,new cljs.core.Keyword(null,"last","last",1105735132));
return cljs.core.cons.call(null,(function (){var attrs157947 = clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,last], null));
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs157947))?sablono.interpreter.attributes.call(null,attrs157947):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs157947))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs157947)], null))));
})(),examples$validation$customer_list_view_$_iter__157950.call(null,cljs.core.rest.call(null,s__157951__$2)));
}
} else {
return null;
}
break;
}
});})(___$1))
,null,null));
});})(___$1))
;
return iter__5481__auto__.call(null,self__.customers);
})())):React.createElement("em",null,"No customers.")));
});

examples.validation.t_examples$validation157942.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"customer-list-view","customer-list-view",-701607200,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"customers","customers",-2018520238,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null)], null)))], null)),new cljs.core.Symbol(null,"customers","customers",-2018520238,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta157943","meta157943",-607324562,null)], null);
});

examples.validation.t_examples$validation157942.cljs$lang$type = true;

examples.validation.t_examples$validation157942.cljs$lang$ctorStr = "examples.validation/t_examples$validation157942";

examples.validation.t_examples$validation157942.cljs$lang$ctorPrWriter = (function (this__5307__auto__,writer__5308__auto__,opt__5309__auto__){
return cljs.core._write.call(null,writer__5308__auto__,"examples.validation/t_examples$validation157942");
});

examples.validation.__GT_t_examples$validation157942 = (function examples$validation$customer_list_view_$___GT_t_examples$validation157942(customer_list_view__$1,customers__$1,_owner__$1,meta157943){
return (new examples.validation.t_examples$validation157942(customer_list_view__$1,customers__$1,_owner__$1,meta157943));
});

}

return (new examples.validation.t_examples$validation157942(examples$validation$customer_list_view,customers,_owner,cljs.core.PersistentArrayMap.EMPTY));
});
examples.validation.main_view = (function examples$validation$main_view(app_state,_owner){
if(typeof examples.validation.t_examples$validation157969 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
examples.validation.t_examples$validation157969 = (function (main_view,app_state,_owner,meta157970){
this.main_view = main_view;
this.app_state = app_state;
this._owner = _owner;
this.meta157970 = meta157970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
examples.validation.t_examples$validation157969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_157971,meta157970__$1){
var self__ = this;
var _157971__$1 = this;
return (new examples.validation.t_examples$validation157969(self__.main_view,self__.app_state,self__._owner,meta157970__$1));
});

examples.validation.t_examples$validation157969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_157971){
var self__ = this;
var _157971__$1 = this;
return self__.meta157970;
});

examples.validation.t_examples$validation157969.prototype.om$core$IRender$ = true;

examples.validation.t_examples$validation157969.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",null,React.createElement("div",{"className": "row"},(function (){var attrs157972 = om.core.build.call(null,examples.validation.signup_form_view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"customers","customers",635915531).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"customer","customer",1742966319).cljs$core$IFn$_invoke$arity$1(self__.app_state),new cljs.core.Keyword(null,"ui-state","ui-state",646932351).cljs$core$IFn$_invoke$arity$1(self__.app_state)], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs157972))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-md-4","col-md-offset-2"], null)], null),attrs157972)):{"className": "col-md-4 col-md-offset-2"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs157972))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs157972)], null))));
})(),(function (){var attrs157973 = om.core.build.call(null,examples.validation.customer_list_view,new cljs.core.Keyword(null,"customers","customers",635915531).cljs$core$IFn$_invoke$arity$1(self__.app_state));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs157973))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-md-4"], null)], null),attrs157973)):{"className": "col-md-4"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs157973))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs157973)], null))));
})()),React.createElement("div",{"className": "row"},(function (){var attrs157974 = om.core.build.call(null,examples.shared.utils.inspector_view,self__.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs157974))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-md-8","col-md-offset-2"], null)], null),attrs157974)):{"className": "col-md-8 col-md-offset-2"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs157974))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs157974)], null))));
})()));
});

examples.validation.t_examples$validation157969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null)], null)))], null)),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"_owner","_owner",1585448515,null),new cljs.core.Symbol(null,"meta157970","meta157970",592282596,null)], null);
});

examples.validation.t_examples$validation157969.cljs$lang$type = true;

examples.validation.t_examples$validation157969.cljs$lang$ctorStr = "examples.validation/t_examples$validation157969";

examples.validation.t_examples$validation157969.cljs$lang$ctorPrWriter = (function (this__5307__auto__,writer__5308__auto__,opt__5309__auto__){
return cljs.core._write.call(null,writer__5308__auto__,"examples.validation/t_examples$validation157969");
});

examples.validation.__GT_t_examples$validation157969 = (function examples$validation$main_view_$___GT_t_examples$validation157969(main_view__$1,app_state__$1,_owner__$1,meta157970){
return (new examples.validation.t_examples$validation157969(main_view__$1,app_state__$1,_owner__$1,meta157970));
});

}

return (new examples.validation.t_examples$validation157969(examples$validation$main_view,app_state,_owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,examples.validation.main_view,examples.validation.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=validation.js.map