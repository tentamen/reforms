// Compiled by ClojureScript 1.7.122 {}
goog.provide('reforms.validation');
goog.require('cljs.core');
goog.require('reforms.core');
goog.require('reforms.binding.core');
goog.require('clojure.string');
reforms.validation.valid_QMARK_;
reforms.validation.find_validation_error = (function reforms$validation$find_validation_error(kork,errors){
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__156312_SHARP_){
return new cljs.core.Keyword(null,"korks","korks",-1343842342).cljs$core$IFn$_invoke$arity$1(p1__156312_SHARP_).call(null,kork);
}),errors));
} else {
return null;
}
});
reforms.validation.sequable_QMARK_ = (function reforms$validation$sequable_QMARK_(x){
try{cljs.core.seq.call(null,x);

return true;
}catch (e156314){if((e156314 instanceof Error)){
var _ = e156314;
return false;
} else {
throw e156314;

}
}});
reforms.validation.present_QMARK_ = (function reforms$validation$present_QMARK_(x){
if(cljs.core.truth_((function (){var and__4697__auto__ = x;
if(cljs.core.truth_(and__4697__auto__)){
return (cljs.core.not.call(null,(function (){var and__4697__auto____$1 = typeof x === 'string';
if(and__4697__auto____$1){
return clojure.string.blank_QMARK_.call(null,x);
} else {
return and__4697__auto____$1;
}
})())) && (cljs.core.not.call(null,(function (){var and__4697__auto____$1 = reforms.validation.sequable_QMARK_.call(null,x);
if(cljs.core.truth_(and__4697__auto____$1)){
return cljs.core.empty_QMARK_.call(null,x);
} else {
return and__4697__auto____$1;
}
})()));
} else {
return and__4697__auto__;
}
})())){
return true;
} else {
return null;
}
});
reforms.validation._STAR_validation_errors_STAR_ = null;
reforms.validation.validating_field = (function reforms$validation$validating_field(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156317 = arguments.length;
var i__5768__auto___156318 = (0);
while(true){
if((i__5768__auto___156318 < len__5767__auto___156317)){
args__5774__auto__.push((arguments[i__5768__auto___156318]));

var G__156319 = (i__5768__auto___156318 + (1));
i__5768__auto___156318 = G__156319;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0))):null);
return reforms.validation.validating_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

reforms.validation.validating_field.cljs$core$IFn$_invoke$arity$variadic = (function (field_fn,args){
if(cljs.core.not_any_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"validation-error-fn","validation-error-fn",-625000244),null], null), null),args)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("The validating version uses :validation-error-fn internally."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-any?","not-any?",-2114707554,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"validation-error-fn","validation-error-fn",-625000244),null], null), null),new cljs.core.Symbol(null,"args","args",-1338879193,null))))].join('')));
}

return cljs.core.apply.call(null,field_fn,cljs.core.conj.call(null,cljs.core.vec.call(null,args),new cljs.core.Keyword(null,"valid?","valid?",-212412379),(function (korks){
return reforms.validation.valid_QMARK_.call(null,korks,reforms.validation._STAR_validation_errors_STAR_);
}),new cljs.core.Keyword(null,"validation-error-fn","validation-error-fn",-625000244),(function (korks){
var temp__4425__auto__ = reforms.validation.find_validation_error.call(null,korks,reforms.validation._STAR_validation_errors_STAR_);
if(cljs.core.truth_(temp__4425__auto__)){
var err = temp__4425__auto__;
return new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(err);
} else {
return null;
}
})));
});

reforms.validation.validating_field.cljs$lang$maxFixedArity = (1);

reforms.validation.validating_field.cljs$lang$applyTo = (function (seq156315){
var G__156316 = cljs.core.first.call(null,seq156315);
var seq156315__$1 = cljs.core.next.call(null,seq156315);
return reforms.validation.validating_field.cljs$core$IFn$_invoke$arity$variadic(G__156316,seq156315__$1);
});
/**
 * Used by [reforms.validation/validating-fields] macro.
 */
reforms.validation.validating_fields_fn = (function reforms$validation$validating_fields_fn(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156327 = arguments.length;
var i__5768__auto___156328 = (0);
while(true){
if((i__5768__auto___156328 < len__5767__auto___156327)){
args__5774__auto__.push((arguments[i__5768__auto___156328]));

var G__156329 = (i__5768__auto___156328 + (1));
i__5768__auto___156328 = G__156329;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0))):null);
return reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic = (function (validation_errors,fields){
var _STAR_validation_errors_STAR_156322 = reforms.validation._STAR_validation_errors_STAR_;
reforms.validation._STAR_validation_errors_STAR_ = validation_errors;

try{return cljs.core.doall.call(null,(function (){var iter__5481__auto__ = ((function (_STAR_validation_errors_STAR_156322){
return (function reforms$validation$iter__156323(s__156324){
return (new cljs.core.LazySeq(null,((function (_STAR_validation_errors_STAR_156322){
return (function (){
var s__156324__$1 = s__156324;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__156324__$1);
if(temp__4425__auto__){
var s__156324__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__156324__$2)){
var c__5479__auto__ = cljs.core.chunk_first.call(null,s__156324__$2);
var size__5480__auto__ = cljs.core.count.call(null,c__5479__auto__);
var b__156326 = cljs.core.chunk_buffer.call(null,size__5480__auto__);
if((function (){var i__156325 = (0);
while(true){
if((i__156325 < size__5480__auto__)){
var field = cljs.core._nth.call(null,c__5479__auto__,i__156325);
cljs.core.chunk_append.call(null,b__156326,field.call(null));

var G__156330 = (i__156325 + (1));
i__156325 = G__156330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__156326),reforms$validation$iter__156323.call(null,cljs.core.chunk_rest.call(null,s__156324__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__156326),null);
}
} else {
var field = cljs.core.first.call(null,s__156324__$2);
return cljs.core.cons.call(null,field.call(null),reforms$validation$iter__156323.call(null,cljs.core.rest.call(null,s__156324__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_validation_errors_STAR_156322))
,null,null));
});})(_STAR_validation_errors_STAR_156322))
;
return iter__5481__auto__.call(null,fields);
})());
}finally {reforms.validation._STAR_validation_errors_STAR_ = _STAR_validation_errors_STAR_156322;
}});

reforms.validation.validating_fields_fn.cljs$lang$maxFixedArity = (1);

reforms.validation.validating_fields_fn.cljs$lang$applyTo = (function (seq156320){
var G__156321 = cljs.core.first.call(null,seq156320);
var seq156320__$1 = cljs.core.next.call(null,seq156320);
return reforms.validation.validating_fields_fn.cljs$core$IFn$_invoke$arity$variadic(G__156321,seq156320__$1);
});
/**
 * Returns a validation error for a key sequence.
 * 
 * Arguments:
 * 
 * - korks         - key sequence the error refers to
 * - error-message - string containing the error message
 */
reforms.validation.validation_error = (function reforms$validation$validation_error(korks,error_message){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"korks","korks",-1343842342),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.seq.call(null,korks)),new cljs.core.Keyword(null,"error-message","error-message",1756021561),error_message], null);
});
/**
 * Validates data and returns a list of errors.
 * 
 * Arguments:
 * 
 * - data      - data to validate
 * - validators - seq of validators to use
 */
reforms.validation.validate = (function reforms$validation$validate(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156334 = arguments.length;
var i__5768__auto___156335 = (0);
while(true){
if((i__5768__auto___156335 < len__5767__auto___156334)){
args__5774__auto__.push((arguments[i__5768__auto___156335]));

var G__156336 = (i__5768__auto___156335 + (1));
i__5768__auto___156335 = G__156336;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0))):null);
return reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic = (function (data,validators){
return cljs.core.doall.call(null,cljs.core.distinct.call(null,cljs.core.flatten.call(null,cljs.core.keep.call(null,(function (p1__156331_SHARP_){
return p1__156331_SHARP_.call(null,data);
}),validators))));
});

reforms.validation.validate.cljs$lang$maxFixedArity = (1);

reforms.validation.validate.cljs$lang$applyTo = (function (seq156332){
var G__156333 = cljs.core.first.call(null,seq156332);
var seq156332__$1 = cljs.core.next.call(null,seq156332);
return reforms.validation.validate.cljs$core$IFn$_invoke$arity$variadic(G__156333,seq156332__$1);
});
/**
 * Returns true if there are no errors.
 * 
 * Arguments:
 * 
 * - errors - result of validation
 * - kork   - (optional) match against this key seq
 */
reforms.validation.valid_QMARK_ = (function reforms$validation$valid_QMARK_(var_args){
var args156337 = [];
var len__5767__auto___156340 = arguments.length;
var i__5768__auto___156341 = (0);
while(true){
if((i__5768__auto___156341 < len__5767__auto___156340)){
args156337.push((arguments[i__5768__auto___156341]));

var G__156342 = (i__5768__auto___156341 + (1));
i__5768__auto___156341 = G__156342;
continue;
} else {
}
break;
}

var G__156339 = args156337.length;
switch (G__156339) {
case 1:
return reforms.validation.valid_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reforms.validation.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args156337.length)].join('')));

}
});

reforms.validation.valid_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (errors){
return ((errors == null)) || (cljs.core.empty_QMARK_.call(null,errors));
});

reforms.validation.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (kork,errors){
return (reforms.validation.find_validation_error.call(null,kork,errors) == null);
});

reforms.validation.valid_QMARK_.cljs$lang$maxFixedArity = 2;
/**
 * Complement of [[valid?]]
 */
reforms.validation.invalid_QMARK_ = cljs.core.complement.call(null,reforms.validation.valid_QMARK_);
/**
 * Renders errors as unordered list.
 * 
 * Arguments:
 * 
 * - errors - results of validation
 */
reforms.validation.render_errors = (function reforms$validation$render_errors(errors){
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("error validation"),cljs.core.str(((cljs.core.seq.call(null,errors))?" validation-failed":null))].join('')], null),(function (){var iter__5481__auto__ = (function reforms$validation$render_errors_$_iter__156348(s__156349){
return (new cljs.core.LazySeq(null,(function (){
var s__156349__$1 = s__156349;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__156349__$1);
if(temp__4425__auto__){
var s__156349__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__156349__$2)){
var c__5479__auto__ = cljs.core.chunk_first.call(null,s__156349__$2);
var size__5480__auto__ = cljs.core.count.call(null,c__5479__auto__);
var b__156351 = cljs.core.chunk_buffer.call(null,size__5480__auto__);
if((function (){var i__156350 = (0);
while(true){
if((i__156350 < size__5480__auto__)){
var failure = cljs.core._nth.call(null,c__5479__auto__,i__156350);
cljs.core.chunk_append.call(null,b__156351,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(failure)], null));

var G__156352 = (i__156350 + (1));
i__156350 = G__156352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__156351),reforms$validation$render_errors_$_iter__156348.call(null,cljs.core.chunk_rest.call(null,s__156349__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__156351),null);
}
} else {
var failure = cljs.core.first.call(null,s__156349__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(failure)], null),reforms$validation$render_errors_$_iter__156348.call(null,cljs.core.rest.call(null,s__156349__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5481__auto__.call(null,errors);
})()], null);
} else {
return null;
}
});
/**
 * Equality validator.
 * 
 * Example:
 * 
 *     (equal [:user :password1] [:user :password2] "Passwords do not match"]
 */
reforms.validation.equal = (function reforms$validation$equal(korks1,korks2,error_message){
return (function (data){
var lhs = (function (){var or__4709__auto__ = cljs.core.get_in.call(null,data,korks1);
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return "";
}
})();
var rhs = (function (){var or__4709__auto__ = cljs.core.get_in.call(null,data,korks2);
if(cljs.core.truth_(or__4709__auto__)){
return or__4709__auto__;
} else {
return "";
}
})();
if(cljs.core._EQ_.call(null,lhs,rhs)){
return null;
} else {
return reforms.validation.validation_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks2], null),error_message);
}
});
});
/**
 * Presence validator.
 * 
 *   Example:
 * 
 *    (present [:user :login] "Enter the login"]
 */
reforms.validation.present = (function reforms$validation$present(korks,error_message){
return (function (data){
var x = cljs.core.get_in.call(null,data,korks);
if(cljs.core.truth_(reforms.validation.present_QMARK_.call(null,x))){
return null;
} else {
return reforms.validation.validation_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null),error_message);
}
});
});
/**
 * Regex validator.
 * 
 *   Example:
 * 
 *    (matches [:user :email] #"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$" "Invalid email address"]
 */
reforms.validation.matches = (function reforms$validation$matches(korks,re,error_message){
return (function (data){
var x = cljs.core.get_in.call(null,data,korks);
if(cljs.core.truth_(cljs.core.re_matches.call(null,re,x))){
return null;
} else {
return reforms.validation.validation_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null),error_message);
}
});
});
/**
 * Predicate-based validator.
 * 
 *   Example:
 * 
 *   (is-true [:user :email] #(nil? (find-by-email %)) "Email already exists"]
 */
reforms.validation.is_true = (function reforms$validation$is_true(korks,f,error_message){
return (function (data){
if(cljs.core.truth_(f.call(null,cljs.core.get_in.call(null,data,korks)))){
return null;
} else {
return reforms.validation.validation_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null),error_message);
}
});
});
/**
 * Generates an error. Useful for errors not coming from data but from external sources such as Ajax or RPC.
 * 
 * Example:
 * 
 *     (force-error [:server-error] "Problem connecting to the REST API server")
 */
reforms.validation.force_error = (function reforms$validation$force_error(korks,error_message){
return (function (_){
return reforms.validation.validation_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null),error_message);
});
});
/**
 * Generates a 'no error' placeholder.
 */
reforms.validation.no_error = (function reforms$validation$no_error(){
return (function (_){
return null;
});
});
/**
 * Groups validators using 'and' boolean logic.
 */
reforms.validation.all = (function reforms$validation$all(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156354 = arguments.length;
var i__5768__auto___156355 = (0);
while(true){
if((i__5768__auto___156355 < len__5767__auto___156354)){
args__5774__auto__.push((arguments[i__5768__auto___156355]));

var G__156356 = (i__5768__auto___156355 + (1));
i__5768__auto___156355 = G__156356;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.all.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.all.cljs$core$IFn$_invoke$arity$variadic = (function (validators){
return (function (data){
return cljs.core.apply.call(null,reforms.validation.validate,data,validators);
});
});

reforms.validation.all.cljs$lang$maxFixedArity = (0);

reforms.validation.all.cljs$lang$applyTo = (function (seq156353){
return reforms.validation.all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156353));
});
/**
 * Validates data and saves the result. **A stateful method.**
 * 
 * Arguments:
 * 
 * - cursor          - the data to validate
 * - ui-state-cursor - this is where validation result will be stored
 * - validators      - a seq of validators
 */
reforms.validation.validate_BANG_ = (function reforms$validation$validate_BANG_(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156360 = arguments.length;
var i__5768__auto___156361 = (0);
while(true){
if((i__5768__auto___156361 < len__5767__auto___156360)){
args__5774__auto__.push((arguments[i__5768__auto___156361]));

var G__156362 = (i__5768__auto___156361 + (1));
i__5768__auto___156361 = G__156362;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((2)),(0))):null);
return reforms.validation.validate_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);
});

reforms.validation.validate_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cursor,ui_state_cursor,validators){
var validation_errors = cljs.core.apply.call(null,reforms.validation.validate,reforms.binding.core.deref.call(null,cursor),validators);
reforms.binding.core.reset_BANG_.call(null,ui_state_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validation-errors","validation-errors",-13445981)], null),validation_errors);

return reforms.validation.valid_QMARK_.call(null,validation_errors);
});

reforms.validation.validate_BANG_.cljs$lang$maxFixedArity = (2);

reforms.validation.validate_BANG_.cljs$lang$applyTo = (function (seq156357){
var G__156358 = cljs.core.first.call(null,seq156357);
var seq156357__$1 = cljs.core.next.call(null,seq156357);
var G__156359 = cljs.core.first.call(null,seq156357__$1);
var seq156357__$2 = cljs.core.next.call(null,seq156357__$1);
return reforms.validation.validate_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__156358,G__156359,seq156357__$2);
});
/**
 * Returns validation errors saved by [[validate!]] into ui-state-cursor.
 */
reforms.validation.validation_errors = (function reforms$validation$validation_errors(ui_state_cursor){
return reforms.binding.core.get_in.call(null,ui_state_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validation-errors","validation-errors",-13445981)], null));
});
/**
 * Wrapper for [[reforms.core/html5-input]] adding support for validation.
 */
reforms.validation.html5_input = (function reforms$validation$html5_input(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156364 = arguments.length;
var i__5768__auto___156365 = (0);
while(true){
if((i__5768__auto___156365 < len__5767__auto___156364)){
args__5774__auto__.push((arguments[i__5768__auto___156365]));

var G__156366 = (i__5768__auto___156365 + (1));
i__5768__auto___156365 = G__156366;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.html5_input.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.html5_input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.html5_input,args);
});

reforms.validation.html5_input.cljs$lang$maxFixedArity = (0);

reforms.validation.html5_input.cljs$lang$applyTo = (function (seq156363){
return reforms.validation.html5_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156363));
});
/**
 * Wrapper for [[reforms.core/password]] adding support for validation.
 */
reforms.validation.password = (function reforms$validation$password(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156368 = arguments.length;
var i__5768__auto___156369 = (0);
while(true){
if((i__5768__auto___156369 < len__5767__auto___156368)){
args__5774__auto__.push((arguments[i__5768__auto___156369]));

var G__156370 = (i__5768__auto___156369 + (1));
i__5768__auto___156369 = G__156370;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.password.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.password.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.password,args);
});

reforms.validation.password.cljs$lang$maxFixedArity = (0);

reforms.validation.password.cljs$lang$applyTo = (function (seq156367){
return reforms.validation.password.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156367));
});
/**
 * Wrapper for [[reforms.core/text]] adding support for validation.
 */
reforms.validation.text = (function reforms$validation$text(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156372 = arguments.length;
var i__5768__auto___156373 = (0);
while(true){
if((i__5768__auto___156373 < len__5767__auto___156372)){
args__5774__auto__.push((arguments[i__5768__auto___156373]));

var G__156374 = (i__5768__auto___156373 + (1));
i__5768__auto___156373 = G__156374;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.text,args);
});

reforms.validation.text.cljs$lang$maxFixedArity = (0);

reforms.validation.text.cljs$lang$applyTo = (function (seq156371){
return reforms.validation.text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156371));
});
/**
 * Wrapper for [[reforms.core/textarea]] adding support for validation.
 */
reforms.validation.textarea = (function reforms$validation$textarea(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156376 = arguments.length;
var i__5768__auto___156377 = (0);
while(true){
if((i__5768__auto___156377 < len__5767__auto___156376)){
args__5774__auto__.push((arguments[i__5768__auto___156377]));

var G__156378 = (i__5768__auto___156377 + (1));
i__5768__auto___156377 = G__156378;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.textarea,args);
});

reforms.validation.textarea.cljs$lang$maxFixedArity = (0);

reforms.validation.textarea.cljs$lang$applyTo = (function (seq156375){
return reforms.validation.textarea.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156375));
});
/**
 * Wrapper for [[reforms.core/checkbox]] adding support for validation.
 */
reforms.validation.checkbox = (function reforms$validation$checkbox(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156380 = arguments.length;
var i__5768__auto___156381 = (0);
while(true){
if((i__5768__auto___156381 < len__5767__auto___156380)){
args__5774__auto__.push((arguments[i__5768__auto___156381]));

var G__156382 = (i__5768__auto___156381 + (1));
i__5768__auto___156381 = G__156382;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.checkbox,args);
});

reforms.validation.checkbox.cljs$lang$maxFixedArity = (0);

reforms.validation.checkbox.cljs$lang$applyTo = (function (seq156379){
return reforms.validation.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156379));
});
/**
 * Wrapper for [[reforms.core/select]] adding support for validation.
 */
reforms.validation.select = (function reforms$validation$select(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156384 = arguments.length;
var i__5768__auto___156385 = (0);
while(true){
if((i__5768__auto___156385 < len__5767__auto___156384)){
args__5774__auto__.push((arguments[i__5768__auto___156385]));

var G__156386 = (i__5768__auto___156385 + (1));
i__5768__auto___156385 = G__156386;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.select,args);
});

reforms.validation.select.cljs$lang$maxFixedArity = (0);

reforms.validation.select.cljs$lang$applyTo = (function (seq156383){
return reforms.validation.select.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156383));
});
/**
 * Wrapper for [[reforms.core/button]] adding support for validation.
 */
reforms.validation.button = (function reforms$validation$button(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156388 = arguments.length;
var i__5768__auto___156389 = (0);
while(true){
if((i__5768__auto___156389 < len__5767__auto___156388)){
args__5774__auto__.push((arguments[i__5768__auto___156389]));

var G__156390 = (i__5768__auto___156389 + (1));
i__5768__auto___156389 = G__156390;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.button,args);
});

reforms.validation.button.cljs$lang$maxFixedArity = (0);

reforms.validation.button.cljs$lang$applyTo = (function (seq156387){
return reforms.validation.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156387));
});
/**
 * Wrapper for [[reforms.core/button-primary]] adding support for validation.
 */
reforms.validation.button_primary = (function reforms$validation$button_primary(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156392 = arguments.length;
var i__5768__auto___156393 = (0);
while(true){
if((i__5768__auto___156393 < len__5767__auto___156392)){
args__5774__auto__.push((arguments[i__5768__auto___156393]));

var G__156394 = (i__5768__auto___156393 + (1));
i__5768__auto___156393 = G__156394;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.button_primary.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.button_primary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.button_primary,args);
});

reforms.validation.button_primary.cljs$lang$maxFixedArity = (0);

reforms.validation.button_primary.cljs$lang$applyTo = (function (seq156391){
return reforms.validation.button_primary.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156391));
});
/**
 * Wrapper for [[reforms.core/button-default]] adding support for validation.
 */
reforms.validation.button_default = (function reforms$validation$button_default(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156396 = arguments.length;
var i__5768__auto___156397 = (0);
while(true){
if((i__5768__auto___156397 < len__5767__auto___156396)){
args__5774__auto__.push((arguments[i__5768__auto___156397]));

var G__156398 = (i__5768__auto___156397 + (1));
i__5768__auto___156397 = G__156398;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.button_default.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.button_default.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.button_default,args);
});

reforms.validation.button_default.cljs$lang$maxFixedArity = (0);

reforms.validation.button_default.cljs$lang$applyTo = (function (seq156395){
return reforms.validation.button_default.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156395));
});
/**
 * Wrapper for [[reforms.core/datetime]] adding support for validation.
 */
reforms.validation.datetime = (function reforms$validation$datetime(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156400 = arguments.length;
var i__5768__auto___156401 = (0);
while(true){
if((i__5768__auto___156401 < len__5767__auto___156400)){
args__5774__auto__.push((arguments[i__5768__auto___156401]));

var G__156402 = (i__5768__auto___156401 + (1));
i__5768__auto___156401 = G__156402;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.datetime.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.datetime.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.datetime,args);
});

reforms.validation.datetime.cljs$lang$maxFixedArity = (0);

reforms.validation.datetime.cljs$lang$applyTo = (function (seq156399){
return reforms.validation.datetime.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156399));
});
/**
 * Wrapper for [[reforms.core/datetime-local]] adding support for validation.
 */
reforms.validation.datetime_local = (function reforms$validation$datetime_local(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156404 = arguments.length;
var i__5768__auto___156405 = (0);
while(true){
if((i__5768__auto___156405 < len__5767__auto___156404)){
args__5774__auto__.push((arguments[i__5768__auto___156405]));

var G__156406 = (i__5768__auto___156405 + (1));
i__5768__auto___156405 = G__156406;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.datetime_local.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.datetime_local.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.datetime_local,args);
});

reforms.validation.datetime_local.cljs$lang$maxFixedArity = (0);

reforms.validation.datetime_local.cljs$lang$applyTo = (function (seq156403){
return reforms.validation.datetime_local.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156403));
});
/**
 * Wrapper for [[reforms.core/date]] adding support for validation.
 */
reforms.validation.date = (function reforms$validation$date(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156408 = arguments.length;
var i__5768__auto___156409 = (0);
while(true){
if((i__5768__auto___156409 < len__5767__auto___156408)){
args__5774__auto__.push((arguments[i__5768__auto___156409]));

var G__156410 = (i__5768__auto___156409 + (1));
i__5768__auto___156409 = G__156410;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.date.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.date.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.date,args);
});

reforms.validation.date.cljs$lang$maxFixedArity = (0);

reforms.validation.date.cljs$lang$applyTo = (function (seq156407){
return reforms.validation.date.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156407));
});
/**
 * Wrapper for [[reforms.core/month]] adding support for validation.
 */
reforms.validation.month = (function reforms$validation$month(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156412 = arguments.length;
var i__5768__auto___156413 = (0);
while(true){
if((i__5768__auto___156413 < len__5767__auto___156412)){
args__5774__auto__.push((arguments[i__5768__auto___156413]));

var G__156414 = (i__5768__auto___156413 + (1));
i__5768__auto___156413 = G__156414;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.month.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.month.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.month,args);
});

reforms.validation.month.cljs$lang$maxFixedArity = (0);

reforms.validation.month.cljs$lang$applyTo = (function (seq156411){
return reforms.validation.month.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156411));
});
/**
 * Wrapper for [[reforms.core/time]] adding support for validation.
 */
reforms.validation.time = (function reforms$validation$time(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156416 = arguments.length;
var i__5768__auto___156417 = (0);
while(true){
if((i__5768__auto___156417 < len__5767__auto___156416)){
args__5774__auto__.push((arguments[i__5768__auto___156417]));

var G__156418 = (i__5768__auto___156417 + (1));
i__5768__auto___156417 = G__156418;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.time,args);
});

reforms.validation.time.cljs$lang$maxFixedArity = (0);

reforms.validation.time.cljs$lang$applyTo = (function (seq156415){
return reforms.validation.time.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156415));
});
/**
 * Wrapper for [[reforms.core/week]] adding support for validation.
 */
reforms.validation.week = (function reforms$validation$week(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156420 = arguments.length;
var i__5768__auto___156421 = (0);
while(true){
if((i__5768__auto___156421 < len__5767__auto___156420)){
args__5774__auto__.push((arguments[i__5768__auto___156421]));

var G__156422 = (i__5768__auto___156421 + (1));
i__5768__auto___156421 = G__156422;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.week.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.week.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.week,args);
});

reforms.validation.week.cljs$lang$maxFixedArity = (0);

reforms.validation.week.cljs$lang$applyTo = (function (seq156419){
return reforms.validation.week.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156419));
});
/**
 * Wrapper for [[reforms.core/number]] adding support for validation.
 */
reforms.validation.number = (function reforms$validation$number(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156424 = arguments.length;
var i__5768__auto___156425 = (0);
while(true){
if((i__5768__auto___156425 < len__5767__auto___156424)){
args__5774__auto__.push((arguments[i__5768__auto___156425]));

var G__156426 = (i__5768__auto___156425 + (1));
i__5768__auto___156425 = G__156426;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.number.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.number.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.number,args);
});

reforms.validation.number.cljs$lang$maxFixedArity = (0);

reforms.validation.number.cljs$lang$applyTo = (function (seq156423){
return reforms.validation.number.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156423));
});
/**
 * Wrapper for [[reforms.core/email]] adding support for validation.
 */
reforms.validation.email = (function reforms$validation$email(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156428 = arguments.length;
var i__5768__auto___156429 = (0);
while(true){
if((i__5768__auto___156429 < len__5767__auto___156428)){
args__5774__auto__.push((arguments[i__5768__auto___156429]));

var G__156430 = (i__5768__auto___156429 + (1));
i__5768__auto___156429 = G__156430;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.email.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.email.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.email,args);
});

reforms.validation.email.cljs$lang$maxFixedArity = (0);

reforms.validation.email.cljs$lang$applyTo = (function (seq156427){
return reforms.validation.email.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156427));
});
/**
 * Wrapper for [[reforms.core/url]] adding support for validation.
 */
reforms.validation.url = (function reforms$validation$url(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156432 = arguments.length;
var i__5768__auto___156433 = (0);
while(true){
if((i__5768__auto___156433 < len__5767__auto___156432)){
args__5774__auto__.push((arguments[i__5768__auto___156433]));

var G__156434 = (i__5768__auto___156433 + (1));
i__5768__auto___156433 = G__156434;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.url.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.url.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.url,args);
});

reforms.validation.url.cljs$lang$maxFixedArity = (0);

reforms.validation.url.cljs$lang$applyTo = (function (seq156431){
return reforms.validation.url.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156431));
});
/**
 * Wrapper for [[reforms.core/search]] adding support for validation.
 */
reforms.validation.search = (function reforms$validation$search(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156436 = arguments.length;
var i__5768__auto___156437 = (0);
while(true){
if((i__5768__auto___156437 < len__5767__auto___156436)){
args__5774__auto__.push((arguments[i__5768__auto___156437]));

var G__156438 = (i__5768__auto___156437 + (1));
i__5768__auto___156437 = G__156438;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.search.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.search.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.search,args);
});

reforms.validation.search.cljs$lang$maxFixedArity = (0);

reforms.validation.search.cljs$lang$applyTo = (function (seq156435){
return reforms.validation.search.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156435));
});
/**
 * Wrapper for [[reforms.core/tel]] adding support for validation.
 */
reforms.validation.tel = (function reforms$validation$tel(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156440 = arguments.length;
var i__5768__auto___156441 = (0);
while(true){
if((i__5768__auto___156441 < len__5767__auto___156440)){
args__5774__auto__.push((arguments[i__5768__auto___156441]));

var G__156442 = (i__5768__auto___156441 + (1));
i__5768__auto___156441 = G__156442;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.tel.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.tel.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.tel,args);
});

reforms.validation.tel.cljs$lang$maxFixedArity = (0);

reforms.validation.tel.cljs$lang$applyTo = (function (seq156439){
return reforms.validation.tel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156439));
});
/**
 * Wrapper for [[reforms.core/color]] adding support for validation.
 */
reforms.validation.color = (function reforms$validation$color(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156444 = arguments.length;
var i__5768__auto___156445 = (0);
while(true){
if((i__5768__auto___156445 < len__5767__auto___156444)){
args__5774__auto__.push((arguments[i__5768__auto___156445]));

var G__156446 = (i__5768__auto___156445 + (1));
i__5768__auto___156445 = G__156446;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.color.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.color.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,reforms.validation.validating_field,reforms.core.color,args);
});

reforms.validation.color.cljs$lang$maxFixedArity = (0);

reforms.validation.color.cljs$lang$applyTo = (function (seq156443){
return reforms.validation.color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156443));
});
/**
 * Renders errors for specified key seqs.
 * 
 *   Example:
 * 
 *    (render-errors [:user :name] [:my-custom-error])
 */
reforms.validation.error_alert = (function reforms$validation$error_alert(var_args){
var args__5774__auto__ = [];
var len__5767__auto___156448 = arguments.length;
var i__5768__auto___156449 = (0);
while(true){
if((i__5768__auto___156449 < len__5767__auto___156448)){
args__5774__auto__.push((arguments[i__5768__auto___156449]));

var G__156450 = (i__5768__auto___156449 + (1));
i__5768__auto___156449 = G__156450;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0))):null);
return reforms.validation.error_alert.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

reforms.validation.error_alert.cljs$core$IFn$_invoke$arity$variadic = (function (korks){
return reforms.validation.render_errors.call(null,cljs.core.keep.call(null,(function (kork){
var temp__4425__auto__ = reforms.validation.find_validation_error.call(null,kork,reforms.validation._STAR_validation_errors_STAR_);
if(cljs.core.truth_(temp__4425__auto__)){
var err = temp__4425__auto__;
return err;
} else {
return null;
}
}),korks));
});

reforms.validation.error_alert.cljs$lang$maxFixedArity = (0);

reforms.validation.error_alert.cljs$lang$applyTo = (function (seq156447){
return reforms.validation.error_alert.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156447));
});

//# sourceMappingURL=validation.js.map