(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"7L87":function(n,l,t){"use strict";var e=t("7TIR"),a=t("s7rJ").keyof({lg:null,sm:null,xs:null}),i=t("nEsh");t.d(l,"a",function(){return o});var u=0,o=function(){function n(){this.id="button-"+u++,this._disabled=!1,this._outline=!1,this._block=!1}return Object.defineProperty(n.prototype,"disabled",{get:function(){return this._disabled},set:function(n){this._disabled=i.a.coerceBooleanProperty(n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"outline",{get:function(){return this._outline},set:function(n){this._outline=i.a.coerceBooleanProperty(n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"block",{get:function(){return this._block},set:function(n){this._block=i.a.coerceBooleanProperty(n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"color",{get:function(){return this._color},set:function(n){this._color=e.b.is(n)?n:void 0},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"size",{get:function(){return this._size},set:function(n){this._size=a.is(n)?n:void 0},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"buttonClass",{get:function(){var n="btn";return this.color&&(n+=this.outline?" btn-outline-"+this.color:" btn-"+this.color),this.size&&(n+=" btn-"+this.size),this.block&&(n+=" btn-block"),this.disabled&&(n+=" disabled"),n},enumerable:!0,configurable:!0}),n}()},A82G:function(n,l,t){"use strict";t.d(l,"a",function(){return i});var e=t("CcnG"),a=0,i=function(){function n(n){this._changeDetectorRef=n,this._checked=!1,this._disabled=!1,this.change=new e.m,this.inputId="checkbox-"+a++,this._onTouched=function(){},this._controlValueAccessorChangeFn=function(){}}return Object.defineProperty(n.prototype,"checked",{get:function(){return this._checked},set:function(n){n!==this.checked&&(this._checked=n,this._changeDetectorRef.markForCheck())},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"disabled",{get:function(){return this._disabled},set:function(n){n!==this.disabled&&(this._disabled=n,this._changeDetectorRef.markForCheck())},enumerable:!0,configurable:!0}),n.prototype.writeValue=function(n){this.checked=!!n},n.prototype.registerOnChange=function(n){this._controlValueAccessorChangeFn=n},n.prototype.registerOnTouched=function(n){this._onTouched=n},n.prototype.handleChange=function(n){n.stopPropagation(),this.disabled||(this._toggle(),this._emitChangeEvent())},n.prototype._toggle=function(){this.checked=!this.checked},n.prototype._emitChangeEvent=function(){var n=new function(){};n.source=this,n.checked=this.checked,this._controlValueAccessorChangeFn(this.checked),this.change.emit(n)},n}()},I2vm:function(n,l,t){"use strict";t.d(l,"a",function(){return i});var e=t("K9Ia"),a=t("nEsh"),i=function(){function n(){this.label="",this._disabled=!1,this.icon=null,this._labelChange=new e.a,this._disableChange=new e.a,this.position=null,this.isActive=!1}return Object.defineProperty(n.prototype,"disabled",{get:function(){return this._disabled},set:function(n){this._disabled=a.a.coerceBooleanProperty(n)},enumerable:!0,configurable:!0}),n.prototype.ngOnDestroy=function(){this._disableChange.complete(),this._labelChange.complete()},n.prototype.ngOnChanges=function(n){(n.hasOwnProperty("label")||n.hasOwnProperty("ariaLabel")||n.hasOwnProperty("ariaLabelledby"))&&this._labelChange.next(),n.hasOwnProperty("disabled")&&this._disableChange.next()},n}()},nEsh:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(){}return n.coerceBooleanProperty=function(n){return null!=n&&""+n!="false"},n.coerceNumberProperty=function(l,t){return void 0===t&&(t=0),n._isNumberValue(l)?Number(l):t},n._isNumberValue=function(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))},n}()},pKkm:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var e=t("CcnG"),a=t("pugT"),i=t("p0ib"),u=t("nEsh"),o=(t("I2vm"),0),s=function(){function n(n){this._changeDetectorRef=n,this._indexToSelect=0,this._tabsSubscription=a.a.EMPTY,this._tabLabelSubscription=a.a.EMPTY,this._isPill=!1,this._selectedIndex=null,this._dark=!1,this.selectedIndexChange=new e.m,this.selectedTabChange=new e.m(!0),this._groupId=o++}return Object.defineProperty(n.prototype,"pill",{get:function(){return this._isPill},set:function(n){this._isPill=u.a.coerceBooleanProperty(n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedIndex",{get:function(){return this._selectedIndex},set:function(n){this._indexToSelect=u.a.coerceNumberProperty(n,null)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"dark",{get:function(){return this._dark},set:function(n){this._dark=u.a.coerceBooleanProperty(n)},enumerable:!0,configurable:!0}),n.prototype.ngAfterContentChecked=function(){this.changeTab(this._indexToSelect)},n.prototype.changeTab=function(n){var l=this,t=this._indexToSelect=this._clampTabIndex(n);if(!(this._tabs&&this._tabs.length>0&&this._tabs.toArray()[t].disabled)){if(this._selectedIndex!==t&&null!=this._selectedIndex){var e=this._createChangeEvent(t);this.selectedTabChange.emit(e),Promise.resolve().then(function(){return l.selectedIndexChange.emit(t)})}this._tabs.forEach(function(n,l){n.position=l-t,n.isActive=l===t}),this._selectedIndex!==t&&(this._selectedIndex=t,this._changeDetectorRef.markForCheck())}},n.prototype.ngAfterContentInit=function(){var n=this;this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(function(){if(n._clampTabIndex(n._indexToSelect)===n._selectedIndex)for(var l=n._tabs.toArray(),t=0;t<l.length;t++)if(l[t].isActive){n._indexToSelect=n._selectedIndex=t;break}n._subscribeToTabLabels(),n._changeDetectorRef.markForCheck()})},n.prototype.ngOnDestroy=function(){this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe()},n.prototype._createChangeEvent=function(n){var l=new function(){};return l.index=n,this._tabs&&this._tabs.length&&(l.tab=this._tabs.toArray()[n]),l},n.prototype._subscribeToTabLabels=function(){var n=this;this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=i.a.apply(void 0,this._tabs.map(function(n){return n._disableChange}).concat(this._tabs.map(function(n){return n._labelChange}))).subscribe(function(){n._changeDetectorRef.markForCheck()})},n.prototype._clampTabIndex=function(n){return Math.min(this._tabs.length-1,Math.max(n||0,0))},n.prototype._getTabLabelId=function(n){return"it-tab-label-"+this._groupId+"-"+n},n.prototype._getTabContentId=function(n){return"it-tab-content-"+this._groupId+"-"+n},n.prototype._getTabIndex=function(n,l){return n.disabled?null:this.selectedIndex===l?0:-1},n.prototype._handleClick=function(n,l){n.preventDefault(),this.changeTab(l)},n}()},pZl2:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),a=function(){},i=t("M6iX"),u=t("5rr3"),o=t("pMnS"),s=t("RnHL"),c=t("2aLU"),r=t("I2vm"),b=e.La({encapsulation:2,styles:[[""]],data:{}});function d(n){return e.hb(0,[e.Wa(null,0),(n()(),e.Ea(0,null,null,0))],null,null)}function p(n){return e.hb(2,[e.db(402653184,1,{_implicitContent:0}),(n()(),e.Ea(0,[[1,2]],null,0,null,d))],null,null)}var h=t("Xhfm"),g=t("A82G"),m=t("gIcY"),f=t("Ip0R"),v=t("pKkm"),x=e.La({encapsulation:2,styles:[[""]],data:{}});function C(n){return e.hb(0,[(n()(),e.Na(0,0,null,null,1,"i",[["class","it-ico-lg d-block text-center"]],null,null,null,null,null)),e.Ma(1,278528,null,0,f.h,[e.q,e.r,e.k,e.B],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null)],function(n,l){n(l,1,0,"it-ico-lg d-block text-center",l.parent.context.$implicit.icon)},null)}function y(n){return e.hb(0,[(n()(),e.Na(0,0,null,null,6,"li",[["class","nav-item"]],null,null,null,null,null)),(n()(),e.Na(1,0,null,null,5,"a",[["href","#"],["role","tab"]],[[1,"aria-controls",0],[1,"aria-selected",0],[1,"aria-label",0],[1,"aria-labelledby",0],[8,"id",0]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component._handleClick(t,n.context.index)&&e),e},null,null)),e.Ma(2,278528,null,0,f.h,[e.q,e.r,e.k,e.B],{ngClass:[0,"ngClass"]},null),e.ab(3,{"nav-link":0,active:1,disabled:2}),(n()(),e.Ea(16777216,null,null,1,null,C)),e.Ma(5,16384,null,0,f.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.fb(6,null,[" "," "]))],function(n,l){n(l,2,0,n(l,3,0,!0,l.component.selectedIndex==l.context.index,l.context.$implicit.disabled)),n(l,5,0,l.context.$implicit.icon)},function(n,l){var t=l.component;n(l,1,0,t._getTabContentId(l.context.index),t.selectedIndex==l.context.index,l.context.$implicit.ariaLabel||null,!l.context.$implicit.ariaLabel&&l.context.$implicit.ariaLabelledby?l.context.$implicit.ariaLabelledby:null,t._getTabLabelId(l.context.index)),n(l,6,0,l.context.$implicit.label)})}function _(n){return e.hb(0,[(n()(),e.Na(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function k(n){return e.hb(0,[(n()(),e.Na(0,0,null,null,5,null,null,null,null,null,null,null)),(n()(),e.Na(1,0,null,null,4,"div",[["role","tabpanel"]],[[8,"id",0],[1,"aria-labelledby",0]],null,null,null,null)),e.Ma(2,278528,null,0,f.h,[e.q,e.r,e.k,e.B],{ngClass:[0,"ngClass"]},null),e.ab(3,{"tab-pane p-3":0,"show active":1}),(n()(),e.Ea(16777216,null,null,1,null,_)),e.Ma(5,540672,null,0,f.n,[e.M],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null)],function(n,l){n(l,2,0,n(l,3,0,!0,l.component.selectedIndex==l.context.index)),n(l,5,0,l.context.$implicit._implicitContent)},function(n,l){var t=l.component;n(l,1,0,t._getTabContentId(l.context.index),t._getTabLabelId(l.context.index))})}function T(n){return e.hb(2,[(n()(),e.Na(0,0,null,null,4,"ul",[["class","nav"],["role","tablist"]],null,null,null,null,null)),e.Ma(1,278528,null,0,f.h,[e.q,e.r,e.k,e.B],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.ab(2,{"nav-dark":0,"nav-tabs":1,"nav-pills mb-3":2}),(n()(),e.Ea(16777216,null,null,1,null,y)),e.Ma(4,278528,null,0,f.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.Na(5,0,null,null,2,"div",[["class","tab-content"]],null,null,null,null,null)),(n()(),e.Ea(16777216,null,null,1,null,k)),e.Ma(7,278528,null,0,f.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,1,0,"nav",n(l,2,0,t.dark,!t.pill,t.pill)),n(l,4,0,t._tabs),n(l,7,0,t._tabs)},null)}var N=t("qh0z"),M=function(){this.isDarkTheme=!1,this.isDisabled=!1,this.isPill=!1,this.tabs=[{label:"tab1",content:"content1",icon:"it-file"},{label:"tab2",content:"content2",icon:"it-calendar"},{label:"tab3",content:"content3",icon:"it-comment"}]},P=e.La({encapsulation:0,styles:[[""]],data:{}});function I(n){return e.hb(0,[(n()(),e.Na(0,0,null,null,2,"it-tab",[],null,null,null,p,b)),e.Ma(1,704512,[[1,4]],0,r.a,[],{label:[0,"label"],icon:[1,"icon"]},null),(n()(),e.fb(2,0,[" "," "]))],function(n,l){n(l,1,0,l.context.$implicit.label,l.context.$implicit.icon)},function(n,l){n(l,2,0,l.context.$implicit.content)})}function X(n){return e.hb(0,[(n()(),e.Na(0,0,null,null,24,"div",[["class","card w-50 mt-2"]],null,null,null,null,null)),(n()(),e.Na(1,0,null,null,23,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),e.Na(2,0,null,null,1,"h4",[["class","card-title"]],null,null,null,null,null)),(n()(),e.fb(-1,null,["Configurazione tabs"])),(n()(),e.Na(4,0,null,null,6,"p",[["class","example-section"]],null,null,null,null,null)),(n()(),e.Na(5,0,null,null,5,"it-checkbox",[["label","Tema scuro"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,t){var e=!0;return"ngModelChange"===l&&(e=!1!==(n.component.isDarkTheme=t)&&e),e},h.b,h.a)),e.Ma(6,49152,null,0,g.a,[e.h],{label:[0,"label"]},null),e.cb(1024,null,m.k,function(n){return[n]},[g.a]),e.Ma(8,671744,null,0,m.p,[[8,null],[8,null],[8,null],[6,m.k]],{model:[0,"model"]},{update:"ngModelChange"}),e.cb(2048,null,m.l,null,[m.p]),e.Ma(10,16384,null,0,m.m,[[4,m.l]],null,null),(n()(),e.Na(11,0,null,null,6,"p",[["class","example-section"]],null,null,null,null,null)),(n()(),e.Na(12,0,null,null,5,"it-checkbox",[["label","Disabilita tab custom"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,t){var e=!0;return"ngModelChange"===l&&(e=!1!==(n.component.isDisabled=t)&&e),e},h.b,h.a)),e.Ma(13,49152,null,0,g.a,[e.h],{label:[0,"label"]},null),e.cb(1024,null,m.k,function(n){return[n]},[g.a]),e.Ma(15,671744,null,0,m.p,[[8,null],[8,null],[8,null],[6,m.k]],{model:[0,"model"]},{update:"ngModelChange"}),e.cb(2048,null,m.l,null,[m.p]),e.Ma(17,16384,null,0,m.m,[[4,m.l]],null,null),(n()(),e.Na(18,0,null,null,6,"p",[["class","example-section"]],null,null,null,null,null)),(n()(),e.Na(19,0,null,null,5,"it-checkbox",[["label","Navigazione con pill"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,t){var e=!0;return"ngModelChange"===l&&(e=!1!==(n.component.isPill=t)&&e),e},h.b,h.a)),e.Ma(20,49152,null,0,g.a,[e.h],{label:[0,"label"]},null),e.cb(1024,null,m.k,function(n){return[n]},[g.a]),e.Ma(22,671744,null,0,m.p,[[8,null],[8,null],[8,null],[6,m.k]],{model:[0,"model"]},{update:"ngModelChange"}),e.cb(2048,null,m.l,null,[m.p]),e.Ma(24,16384,null,0,m.m,[[4,m.l]],null,null),(n()(),e.Na(25,0,null,null,16,"div",[["class","card w-50 mt-2"]],null,null,null,null,null)),(n()(),e.Na(26,0,null,null,15,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),e.Na(27,0,null,null,1,"h4",[["class","card-title"]],null,null,null,null,null)),(n()(),e.fb(-1,null,["Risultato tabs"])),(n()(),e.Na(29,0,null,null,12,"it-tab-group",[],null,null,null,T,x)),e.Ma(30,3325952,null,1,v.a,[e.h],{pill:[0,"pill"],dark:[1,"dark"]},null),e.db(603979776,1,{_tabs:1}),(n()(),e.Ea(16777216,null,null,1,null,I)),e.Ma(33,278528,null,0,f.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.Na(34,0,null,null,7,"it-tab",[["icon","it-settings"],["label","custom"]],null,null,null,p,b)),e.Ma(35,704512,[[1,4]],0,r.a,[],{label:[0,"label"],disabled:[1,"disabled"],icon:[2,"icon"]},null),(n()(),e.Na(36,0,null,0,1,"h4",[],null,null,null,null,null)),(n()(),e.fb(-1,null,["Titolo"])),(n()(),e.Na(38,0,null,0,3,"p",[],null,null,null,null,null)),(n()(),e.fb(-1,null,["Contenuto complesso "])),(n()(),e.Na(40,0,null,null,1,"span",[["it-badge","badge"]],[[8,"innerText",0],[8,"className",0]],null,null,null,null)),e.Ma(41,16384,null,0,N.a,[e.k],{badgeText:[0,"badgeText"]},null)],function(n,l){var t=l.component;n(l,6,0,"Tema scuro"),n(l,8,0,t.isDarkTheme),n(l,13,0,"Disabilita tab custom"),n(l,15,0,t.isDisabled),n(l,20,0,"Navigazione con pill"),n(l,22,0,t.isPill),n(l,30,0,t.isPill,t.isDarkTheme),n(l,33,0,t.tabs),n(l,35,0,"custom",t.isDisabled,"it-settings"),n(l,41,0,"badge")},function(n,l){n(l,5,0,e.Xa(l,10).ngClassUntouched,e.Xa(l,10).ngClassTouched,e.Xa(l,10).ngClassPristine,e.Xa(l,10).ngClassDirty,e.Xa(l,10).ngClassValid,e.Xa(l,10).ngClassInvalid,e.Xa(l,10).ngClassPending),n(l,12,0,e.Xa(l,17).ngClassUntouched,e.Xa(l,17).ngClassTouched,e.Xa(l,17).ngClassPristine,e.Xa(l,17).ngClassDirty,e.Xa(l,17).ngClassValid,e.Xa(l,17).ngClassInvalid,e.Xa(l,17).ngClassPending),n(l,19,0,e.Xa(l,24).ngClassUntouched,e.Xa(l,24).ngClassTouched,e.Xa(l,24).ngClassPristine,e.Xa(l,24).ngClassDirty,e.Xa(l,24).ngClassValid,e.Xa(l,24).ngClassInvalid,e.Xa(l,24).ngClassPending),n(l,40,0,e.Xa(l,41).badgeText,e.Xa(l,41).hostClasses)})}var A=t("xh2N"),D=t("HiJM"),w=t("l86Q"),O=t("7L87"),V=function(){function n(){this.tabs=["Primo","Secondo","Terzo"],this.selected=new m.e(0),this.selectAfterAdding=!1}return n.prototype.addTab=function(n){this.tabs.push("Nuovo"),n&&this.selected.setValue(this.tabs.length-1)},n.prototype.removeTab=function(n){this.tabs.splice(n,1)},n}(),L=e.La({encapsulation:0,styles:[[""]],data:{}});function z(n){return e.hb(0,[(n()(),e.Na(0,0,null,null,5,"it-tab",[],null,null,null,p,b)),e.Ma(1,704512,[[1,4]],0,r.a,[],{label:[0,"label"]},null),(n()(),e.fb(2,0,[" contenuto del "," tab "])),(n()(),e.Na(3,0,null,0,2,"it-button",[["color","primary"],["mat-raised-button",""]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.removeTab(n.context.index)&&e),e},w.b,w.a)),e.Ma(4,49152,null,0,O.a,[],{disabled:[0,"disabled"],color:[1,"color"]},null),(n()(),e.fb(-1,0,[" Cancella tab "]))],function(n,l){var t=l.component;n(l,1,0,l.context.$implicit),n(l,4,0,1===t.tabs.length,"primary")},function(n,l){n(l,2,0,l.context.$implicit)})}function E(n){return e.hb(0,[(n()(),e.Na(0,0,null,null,23,"div",[["class","card w-50 mt-2"]],null,null,null,null,null)),(n()(),e.Na(1,0,null,null,22,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),e.Na(2,0,null,null,1,"h4",[["class","card-title"]],null,null,null,null,null)),(n()(),e.fb(-1,null,["Configurazione tabs"])),(n()(),e.Na(4,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),e.Na(5,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.fb(-1,null,[" indice del tab selezionato: "])),(n()(),e.Na(7,0,null,null,6,"input",[["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(n,l,t){var a=!0;return"input"===l&&(a=!1!==e.Xa(n,8)._handleInput(t.target.value)&&a),"blur"===l&&(a=!1!==e.Xa(n,8).onTouched()&&a),"compositionstart"===l&&(a=!1!==e.Xa(n,8)._compositionStart()&&a),"compositionend"===l&&(a=!1!==e.Xa(n,8)._compositionEnd(t.target.value)&&a),"change"===l&&(a=!1!==e.Xa(n,9).onChange(t.target.value)&&a),"input"===l&&(a=!1!==e.Xa(n,9).onChange(t.target.value)&&a),"blur"===l&&(a=!1!==e.Xa(n,9).onTouched()&&a),a},null,null)),e.Ma(8,16384,null,0,m.c,[e.B,e.k,[2,m.a]],null,null),e.Ma(9,16384,null,0,m.u,[e.B,e.k],null,null),e.cb(1024,null,m.k,function(n,l){return[n,l]},[m.c,m.u]),e.Ma(11,540672,null,0,m.f,[[8,null],[8,null],[6,m.k],[2,m.x]],{form:[0,"form"]},null),e.cb(2048,null,m.l,null,[m.f]),e.Ma(13,16384,null,0,m.m,[[4,m.l]],null,null),(n()(),e.Na(14,0,null,null,9,"div",[],null,null,null,null,null)),(n()(),e.Na(15,0,null,null,2,"it-button",[["color","primary"]],null,[[null,"click"]],function(n,l,t){var e=!0,a=n.component;return"click"===l&&(e=!1!==a.addTab(a.selectAfterAdding)&&e),e},w.b,w.a)),e.Ma(16,49152,null,0,O.a,[],{color:[0,"color"]},null),(n()(),e.fb(-1,0,[" Aggiungi un nuovo tab "])),(n()(),e.Na(18,0,null,null,5,"it-checkbox",[["label","Seleziona il tab dopo averlo aggiunto"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,t){var e=!0;return"ngModelChange"===l&&(e=!1!==(n.component.selectAfterAdding=t)&&e),e},h.b,h.a)),e.Ma(19,49152,null,0,g.a,[e.h],{label:[0,"label"]},null),e.cb(1024,null,m.k,function(n){return[n]},[g.a]),e.Ma(21,671744,null,0,m.p,[[8,null],[8,null],[8,null],[6,m.k]],{model:[0,"model"]},{update:"ngModelChange"}),e.cb(2048,null,m.l,null,[m.p]),e.Ma(23,16384,null,0,m.m,[[4,m.l]],null,null),(n()(),e.Na(24,0,null,null,8,"div",[["class","card w-50 mt-2"]],null,null,null,null,null)),(n()(),e.Na(25,0,null,null,7,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),e.Na(26,0,null,null,1,"h4",[["class","card-title"]],null,null,null,null,null)),(n()(),e.fb(-1,null,["Risultato tabs"])),(n()(),e.Na(28,0,null,null,4,"it-tab-group",[["class","dynamic-tab-group"]],null,[[null,"selectedIndexChange"]],function(n,l,t){var e=!0;return"selectedIndexChange"===l&&(e=!1!==n.component.selected.setValue(t)&&e),e},T,x)),e.Ma(29,3325952,null,1,v.a,[e.h],{selectedIndex:[0,"selectedIndex"]},{selectedIndexChange:"selectedIndexChange"}),e.db(603979776,1,{_tabs:1}),(n()(),e.Ea(16777216,null,null,1,null,z)),e.Ma(32,278528,null,0,f.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,11,0,t.selected),n(l,16,0,"primary"),n(l,19,0,"Seleziona il tab dopo averlo aggiunto"),n(l,21,0,t.selectAfterAdding),n(l,29,0,t.selected.value),n(l,32,0,t.tabs)},function(n,l){n(l,7,0,e.Xa(l,13).ngClassUntouched,e.Xa(l,13).ngClassTouched,e.Xa(l,13).ngClassPristine,e.Xa(l,13).ngClassDirty,e.Xa(l,13).ngClassValid,e.Xa(l,13).ngClassInvalid,e.Xa(l,13).ngClassPending),n(l,18,0,e.Xa(l,23).ngClassUntouched,e.Xa(l,23).ngClassTouched,e.Xa(l,23).ngClassPristine,e.Xa(l,23).ngClassDirty,e.Xa(l,23).ngClassValid,e.Xa(l,23).ngClassInvalid,e.Xa(l,23).ngClassPending)})}var F=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),S=e.La({encapsulation:0,styles:[[""]],data:{}});function j(n){return e.hb(0,[(n()(),e.Na(0,0,null,null,1,"it-tabs-example",[],null,null,null,X,P)),e.Ma(1,49152,null,0,M,[],null,null),(n()(),e.Na(2,0,null,null,1,"it-source-display",[["html",'\n  \n  <div class="card w-50 mt-2">\n  <div class="card-body">\n    <h4 class="card-title">Configurazione tabs</h4>\n    <p class="card-text" class="example-section">\n      <it-checkbox [(ngModel)]="isDarkTheme" label="Tema scuro"></it-checkbox>\n    </p>\n    <p class="card-text" class="example-section">\n      <it-checkbox [(ngModel)]="isDisabled" label="Disabilita tab custom"></it-checkbox>\n    </p>\n    <p class="card-text" class="example-section">\n      <it-checkbox [(ngModel)]="isPill" label="Navigazione con pill"></it-checkbox>\n    </p>\n  </div>\n</div>\n\n<div class="card w-50 mt-2">\n  <div class="card-body">\n    <h4 class="card-title">Risultato tabs</h4>\n    <it-tab-group [dark]="isDarkTheme" [pill]="isPill">\n      <it-tab *ngFor="let tab of tabs" [label]="tab.label" [icon]="tab.icon">\n        /{/{tab.content/}/}\n      </it-tab>\n      <it-tab label="custom" [disabled]="isDisabled" icon="it-settings">\n        <h4>Titolo</h4>\n        <p>Contenuto complesso <span it-badge="badge"></span></p>\n      </it-tab>\n    </it-tab-group>\n  </div>\n</div>\n\n\n'],["typescript","\n  \n  import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-tabs-example',\n  templateUrl: './tabs-example.component.html',\n  styleUrls: ['./tabs-example.component.scss']\n})\nexport class TabsExampleComponent {\n\n  isDarkTheme = false;\n\n  isDisabled = false;\n\n  isPill = false;\n\n  tabs = [\n    {\n      label: 'tab1',\n      content: 'content1',\n      icon: 'it-file'\n    },\n    {\n      label: 'tab2',\n      content: 'content2',\n      icon: 'it-calendar'\n    },\n    {\n      label: 'tab3',\n      content: 'content3',\n      icon: 'it-comment'\n    }\n  ];\n}\n\n\n"]],null,null,null,A.b,A.a)),e.Ma(3,114688,null,0,D.a,[],{html:[0,"html"],typescript:[1,"typescript"]},null),(n()(),e.Na(4,0,null,null,1,"it-tabs-dynamic-example",[],null,null,null,E,L)),e.Ma(5,49152,null,0,V,[],null,null),(n()(),e.Na(6,0,null,null,1,"it-source-display",[["html",'\n  \n  <div class="card w-50 mt-2">\n    <div class="card-body">\n      <h4 class="card-title">Configurazione tabs</h4>\n      <div class="form-group">\n        <span> indice del tab selezionato: </span>\n        <input type="number" [formControl]="selected">\n      </div>\n      <div>\n        <it-button color="primary" (click)="addTab(selectAfterAdding)">\n          Aggiungi un nuovo tab\n        </it-button>\n        <it-checkbox [(ngModel)]="selectAfterAdding" label="Seleziona il tab dopo averlo aggiunto"></it-checkbox>\n      </div>\n    </div>\n  </div>\n\n  <div class="card w-50 mt-2">\n    <div class="card-body">\n      <h4 class="card-title">Risultato tabs</h4>\n      <it-tab-group [selectedIndex]="selected.value"\n                    (selectedIndexChange)="selected.setValue($event)"\n                    class="dynamic-tab-group">\n        <it-tab *ngFor="let tab of tabs; let index = index" [label]="tab">\n          contenuto del /{/{tab/}/} tab\n\n          <it-button mat-raised-button\n                  color="primary"\n                  [disabled]="tabs.length === 1"\n                  (click)="removeTab(index)">\n            Cancella tab\n          </it-button>\n        </it-tab>\n      </it-tab-group>\n    </div>\n  </div>\n\n\n'],["typescript","\n  \n  import { Component } from '@angular/core';\nimport { FormControl } from '@angular/forms';\n\n@Component({\n  selector: 'it-tabs-dynamic-example',\n  templateUrl: './tabs-dynamic-example.component.html',\n  styleUrls: ['./tabs-dynamic-example.component.scss']\n})\nexport class TabsDynamicExampleComponent {\n\n  tabs = ['Primo', 'Secondo', 'Terzo'];\n  selected = new FormControl(0);\n  selectAfterAdding = false;\n\n  addTab(selectAfterAdding: boolean) {\n    this.tabs.push('Nuovo');\n\n    if (selectAfterAdding) {\n      this.selected.setValue(this.tabs.length - 1);\n    }\n  }\n\n  removeTab(index: number) {\n    this.tabs.splice(index, 1);\n  }\n}\n\n\n"]],null,null,null,A.b,A.a)),e.Ma(7,114688,null,0,D.a,[],{html:[0,"html"],typescript:[1,"typescript"]},null)],function(n,l){n(l,3,0,'\n  \n  <div class="card w-50 mt-2">\n  <div class="card-body">\n    <h4 class="card-title">Configurazione tabs</h4>\n    <p class="card-text" class="example-section">\n      <it-checkbox [(ngModel)]="isDarkTheme" label="Tema scuro"></it-checkbox>\n    </p>\n    <p class="card-text" class="example-section">\n      <it-checkbox [(ngModel)]="isDisabled" label="Disabilita tab custom"></it-checkbox>\n    </p>\n    <p class="card-text" class="example-section">\n      <it-checkbox [(ngModel)]="isPill" label="Navigazione con pill"></it-checkbox>\n    </p>\n  </div>\n</div>\n\n<div class="card w-50 mt-2">\n  <div class="card-body">\n    <h4 class="card-title">Risultato tabs</h4>\n    <it-tab-group [dark]="isDarkTheme" [pill]="isPill">\n      <it-tab *ngFor="let tab of tabs" [label]="tab.label" [icon]="tab.icon">\n        /{/{tab.content/}/}\n      </it-tab>\n      <it-tab label="custom" [disabled]="isDisabled" icon="it-settings">\n        <h4>Titolo</h4>\n        <p>Contenuto complesso <span it-badge="badge"></span></p>\n      </it-tab>\n    </it-tab-group>\n  </div>\n</div>\n\n\n',"\n  \n  import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-tabs-example',\n  templateUrl: './tabs-example.component.html',\n  styleUrls: ['./tabs-example.component.scss']\n})\nexport class TabsExampleComponent {\n\n  isDarkTheme = false;\n\n  isDisabled = false;\n\n  isPill = false;\n\n  tabs = [\n    {\n      label: 'tab1',\n      content: 'content1',\n      icon: 'it-file'\n    },\n    {\n      label: 'tab2',\n      content: 'content2',\n      icon: 'it-calendar'\n    },\n    {\n      label: 'tab3',\n      content: 'content3',\n      icon: 'it-comment'\n    }\n  ];\n}\n\n\n"),n(l,7,0,'\n  \n  <div class="card w-50 mt-2">\n    <div class="card-body">\n      <h4 class="card-title">Configurazione tabs</h4>\n      <div class="form-group">\n        <span> indice del tab selezionato: </span>\n        <input type="number" [formControl]="selected">\n      </div>\n      <div>\n        <it-button color="primary" (click)="addTab(selectAfterAdding)">\n          Aggiungi un nuovo tab\n        </it-button>\n        <it-checkbox [(ngModel)]="selectAfterAdding" label="Seleziona il tab dopo averlo aggiunto"></it-checkbox>\n      </div>\n    </div>\n  </div>\n\n  <div class="card w-50 mt-2">\n    <div class="card-body">\n      <h4 class="card-title">Risultato tabs</h4>\n      <it-tab-group [selectedIndex]="selected.value"\n                    (selectedIndexChange)="selected.setValue($event)"\n                    class="dynamic-tab-group">\n        <it-tab *ngFor="let tab of tabs; let index = index" [label]="tab">\n          contenuto del /{/{tab/}/} tab\n\n          <it-button mat-raised-button\n                  color="primary"\n                  [disabled]="tabs.length === 1"\n                  (click)="removeTab(index)">\n            Cancella tab\n          </it-button>\n        </it-tab>\n      </it-tab-group>\n    </div>\n  </div>\n\n\n',"\n  \n  import { Component } from '@angular/core';\nimport { FormControl } from '@angular/forms';\n\n@Component({\n  selector: 'it-tabs-dynamic-example',\n  templateUrl: './tabs-dynamic-example.component.html',\n  styleUrls: ['./tabs-dynamic-example.component.scss']\n})\nexport class TabsDynamicExampleComponent {\n\n  tabs = ['Primo', 'Secondo', 'Terzo'];\n  selected = new FormControl(0);\n  selectAfterAdding = false;\n\n  addTab(selectAfterAdding: boolean) {\n    this.tabs.push('Nuovo');\n\n    if (selectAfterAdding) {\n      this.selected.setValue(this.tabs.length - 1);\n    }\n  }\n\n  removeTab(index: number) {\n    this.tabs.splice(index, 1);\n  }\n}\n\n\n")},null)}var R=t("dxD6"),B=function(){return function(){this.tabGroupComponent=R.a.find(function(n){return"TabGroupComponent"===n.name}),this.tabComponent=R.a.find(function(n){return"TabComponent"===n.name})}}(),$=e.La({encapsulation:0,styles:[[""]],data:{}});function U(n){return e.hb(0,[(n()(),e.Na(0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e.fb(-1,null,["Tabs"])),(n()(),e.Na(2,0,null,null,1,"h5",[],null,null,null,null,null)),(n()(),e.fb(-1,null,["Il componente Tabs"])),(n()(),e.Na(4,0,null,null,9,"ul",[["class","nav nav-tabs"],["id","tabs-tab"],["role","tablist"]],null,null,null,null,null)),(n()(),e.Na(5,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(n()(),e.Na(6,0,null,null,1,"a",[["aria-controls","tabs-description-tab-content"],["aria-selected","true"],["class","nav-link active"],["data-toggle","tab"],["href","#tabs-description-tab-content"],["id","tabs-description-tab"],["role","tab"]],null,null,null,null,null)),(n()(),e.fb(-1,null,["Descrizione"])),(n()(),e.Na(8,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(n()(),e.Na(9,0,null,null,1,"a",[["aria-controls","tabs-api-tab-content"],["aria-selected","false"],["class","nav-link"],["data-toggle","tab"],["href","#tabs-api-tab-content"],["id","tabs-api-tab"],["role","tab"]],null,null,null,null,null)),(n()(),e.fb(-1,null,["API"])),(n()(),e.Na(11,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(n()(),e.Na(12,0,null,null,1,"a",[["aria-controls","tabs-examples-tab-content"],["aria-selected","false"],["class","nav-link"],["data-toggle","tab"],["href","#tabs-examples-tab-content"],["id","tabs-examples-tab"],["role","tab"]],null,null,null,null,null)),(n()(),e.fb(-1,null,["Esempi"])),(n()(),e.Na(14,0,null,null,19,"div",[["class","tab-content"],["id","tabs-content-tab"]],null,null,null,null,null)),(n()(),e.Na(15,0,null,null,6,"div",[["aria-labelledby","tabs-description-tab-content"],["class","tab-pane p-3 fade show active"],["id","tabs-description-tab-content"],["role","tabpanel"]],null,null,null,null,null)),(n()(),e.Na(16,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.fb(-1,null,["Tab Group"])),(n()(),e.Na(18,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(n()(),e.Na(19,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.fb(-1,null,["Tab"])),(n()(),e.Na(21,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(n()(),e.Na(22,0,null,null,8,"div",[["aria-labelledby","tabs-api-tab-content"],["class","tab-pane p-3 fade"],["id","tabs-api-tab-content"],["role","tabpanel"]],null,null,null,null,null)),(n()(),e.Na(23,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),e.fb(-1,null,["Tab Group"])),(n()(),e.Na(25,0,null,null,1,"it-api-parameters",[],null,null,null,s.b,s.a)),e.Ma(26,49152,null,0,c.a,[],{component:[0,"component"]},null),(n()(),e.Na(27,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),e.fb(-1,null,["Tab"])),(n()(),e.Na(29,0,null,null,1,"it-api-parameters",[],null,null,null,s.b,s.a)),e.Ma(30,49152,null,0,c.a,[],{component:[0,"component"]},null),(n()(),e.Na(31,0,null,null,2,"div",[["aria-labelledby","tabs-examples-tab-content"],["class","tab-pane p-3 fade"],["id","tabs-examples-tab-content"],["role","tabpanel"]],null,null,null,null,null)),(n()(),e.Na(32,0,null,null,1,"it-tabs-examples",[],null,null,null,j,S)),e.Ma(33,114688,null,0,F,[],null,null)],function(n,l){var t=l.component;n(l,26,0,t.tabGroupComponent),n(l,30,0,t.tabComponent),n(l,33,0)},function(n,l){var t=l.component;n(l,18,0,t.tabGroupComponent.description),n(l,21,0,t.tabComponent.description)})}var G=e.Ja("it-tabs-index",B,function(n){return e.hb(0,[(n()(),e.Na(0,0,null,null,1,"it-tabs-index",[],null,null,null,U,$)),e.Ma(1,49152,null,0,B,[],null,null)],null,null)},{},{},[]),q=t("OQP5"),J=t("RyqK"),H=t("PCNd"),K=t("ZYCi"),Y=function(){};t.d(l,"TabsModuleNgFactory",function(){return Z});var Z=e.Ka(a,[],function(n){return e.Ua([e.Va(512,e.j,e.Z,[[8,[i.a,u.a,o.a,G]],[3,e.j],e.v]),e.Va(4608,f.l,f.k,[e.s,[2,f.t]]),e.Va(4608,m.w,m.w,[]),e.Va(4608,m.d,m.d,[]),e.Va(5120,q.b,q.d,[q.e]),e.Va(1073742336,f.b,f.b,[]),e.Va(1073742336,m.t,m.t,[]),e.Va(1073742336,m.g,m.g,[]),e.Va(1073742336,m.r,m.r,[]),e.Va(1073742336,J.a,J.a,[]),e.Va(1073742336,q.c,q.c,[]),e.Va(1073742336,H.a,H.a,[]),e.Va(1073742336,K.n,K.n,[[2,K.t],[2,K.k]]),e.Va(1073742336,Y,Y,[]),e.Va(1073742336,a,a,[]),e.Va(256,q.e,{theme:"agate"},[]),e.Va(1024,K.i,function(){return[[{path:"",component:B}]]},[])])})},qh0z:function(n,l,t){"use strict";t.d(l,"a",function(){return i});var e=t("7TIR"),a=t("nEsh"),i=function(){function n(n){this.el=n,this._badgeColor=e.a.LIGHT,this._badgeText="",this._isPill=!1}return Object.defineProperty(n.prototype,"badgeColor",{get:function(){return this._badgeColor},set:function(n){this._badgeColor=e.b.is(n)?n:e.a.LIGHT},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"badgeText",{get:function(){return this._badgeText},set:function(n){this._badgeText=n||""},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isPill",{get:function(){return this._isPill},set:function(n){this._isPill=a.a.coerceBooleanProperty(n)},enumerable:!0,configurable:!0}),n.prototype.getBadgeColorClassName=function(){return"badge-"+this._badgeColor},Object.defineProperty(n.prototype,"hostClasses",{get:function(){return["badge",this.getBadgeColorClassName(),this.isPill?"badge-pill":""].join(" ")},enumerable:!0,configurable:!0}),n}()}}]);