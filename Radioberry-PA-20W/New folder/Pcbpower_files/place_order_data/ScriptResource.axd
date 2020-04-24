Type.registerNamespace('AjaxControlToolkit');AjaxControlToolkit.FilteredTextBoxBehavior = function(element) {
AjaxControlToolkit.FilteredTextBoxBehavior.initializeBase(this, [element]);this._keypressHandler = null;this._changeHandler = null;this._intervalID = null;this._filterType = AjaxControlToolkit.FilterTypes.Custom;this._filterMode = AjaxControlToolkit.FilterModes.ValidChars;this._validChars = null;this._invalidChars = null;this.charTypes = { };this.charTypes.LowercaseLetters = "abcdefghijklmnopqrstuvwxyz";this.charTypes.UppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";this.charTypes.Numbers = "0123456789";}
AjaxControlToolkit.FilteredTextBoxBehavior.prototype = {
initialize : function() {
AjaxControlToolkit.FilteredTextBoxBehavior.callBaseMethod(this, 'initialize');var element = this.get_element();this._keypressHandler = Function.createDelegate(this, this._onkeypress);$addHandler(element, 'keypress', this._keypressHandler);this._changeHandler = Function.createDelegate(this, this._onchange);$addHandler(element, 'change', this._changeHandler);var callback = Function.createDelegate(this, this._intervalCallback);this._intervalID = window.setInterval(callback, 250);},
dispose : function() {
var element = this.get_element();$removeHandler(element, 'keypress', this._keypressHandler);this._keypressHandler = null;$removeHandler(element, 'change', this._changeHandler);this._changeHandler = null;window.clearInterval(this._intervalID);AjaxControlToolkit.FilteredTextBoxBehavior.callBaseMethod(this, 'dispose');},
_getValidChars : function() {
if (this._validChars) return this._validChars;this._validChars = "";for (type in this.charTypes) {
var filterType = AjaxControlToolkit.FilterTypes.toString(this._filterType);if (filterType.indexOf(type) != -1) {
this._validChars += this.charTypes[type];}
}
return this._validChars;},
_getInvalidChars : function() {
if (!this._invalidChars) {
this._invalidChars = this.charTypes.Custom;}
return this._invalidChars;},
_onkeypress : function(evt) {
var scanCode;if ((evt.charCode == Sys.UI.Key.pageUp) ||
(evt.charCode == Sys.UI.Key.pageDown) ||
(evt.charCode == Sys.UI.Key.up) ||
(evt.charCode == Sys.UI.Key.down) ||
(evt.charCode == Sys.UI.Key.left) ||
(evt.charCode == Sys.UI.Key.right) ||
(evt.charCode == Sys.UI.Key.home) ||
(evt.charCode == Sys.UI.Key.end) ||
(evt.charCode == 46 ) ||
(evt.ctrlKey )) {
return;}
if (evt.rawEvent.keyIdentifier) {
if (evt.rawEvent.ctrlKey || evt.rawEvent.altKey || evt.rawEvent.metaKey) {
return;}
if (evt.rawEvent.keyIdentifier.substring(0,2) != "U+") {
return;}
scanCode = evt.rawEvent.charCode;if (scanCode == 63272 ) {
return;}
} else {
scanCode = evt.charCode;} 
if (scanCode && scanCode >= 0x20 ) {
var c = String.fromCharCode(scanCode);if(!this._processKey(c)) {
evt.preventDefault();}
}
},
_processKey : function(key) {
var filter = "";var shouldFilter = false;if (this._filterMode == AjaxControlToolkit.FilterModes.ValidChars) {
filter = this._getValidChars();shouldFilter = filter && (filter.length > 0) && (filter.indexOf(key) == -1);} else {
filter = this._getInvalidChars();shouldFilter = filter && (filter.length > 0) && (filter.indexOf(key) > -1);}
var eventArgs = new AjaxControlToolkit.FilteredTextBoxProcessKeyEventArgs(key, this.get_element().value, shouldFilter);this.raiseProcessKey(eventArgs);if (eventArgs.get_allowKey()) {
return true;}
this.raiseFiltered(new AjaxControlToolkit.FilteredTextBoxEventArgs(key));return false;},
_onchange : function() {
var element = this.get_element();var text = element.value || '';var result = new Sys.StringBuilder();for (var i = 0;i < text.length;i++) {
var ch = text.substring(i, i+1);if (this._processKey(ch)) {
result.append(ch);}
}
if (element.value != result.toString()) {
element.value = result.toString();}
},
_intervalCallback : function() {
this._changeHandler();},
get_ValidChars : function() {
return this.charTypes.Custom;},
set_ValidChars : function(value) {
if (this._validChars != null || this.charTypes.Custom != value) {
this.charTypes.Custom = value;this._validChars = null;this.raisePropertyChanged('ValidChars');}
},
get_InvalidChars : function() {
return this.charTypes.Custom;},
set_InvalidChars : function(value) {
if (this._invalidChars != null || this.charTypes.Custom != value) {
this.charTypes.Custom = value;this._invalidChars = null;this.raisePropertyChanged('InvalidChars');}
},
get_FilterType : function() {
return this._filterType;}, 
set_FilterType : function(value) {
if (this._validChars != null || this._filterType != value) {
this._filterType = value;this._validChars = null;this.raisePropertyChanged('FilterType');}
},
get_FilterMode : function() {
return this._filterMode;}, 
set_FilterMode : function(value) {
if (this._validChars != null || this._invalidChars != null || this._filterMode != value) {
this._filterMode = value;this._validChars = null;this._invalidChars = null;this.raisePropertyChanged('FilterMode');}
},
add_processKey : function(handler) {
this.get_events().addHandler('processKey', handler);},
remove_processKey : function(handler) {
this.get_events().removeHandler('processKey', handler);},
raiseProcessKey : function(eventArgs) {
var handler = this.get_events().getHandler('processKey');if (handler) {
handler(this, eventArgs);}
},
add_filtered : function(handler) {
this.get_events().addHandler('filtered', handler);},
remove_filtered : function(handler) {
this.get_events().removeHandler('filtered', handler);},
raiseFiltered : function(eventArgs) {
var handler = this.get_events().getHandler('filtered');if (handler) {
handler(this, eventArgs);}
}
}
AjaxControlToolkit.FilteredTextBoxBehavior.registerClass('AjaxControlToolkit.FilteredTextBoxBehavior', AjaxControlToolkit.BehaviorBase);AjaxControlToolkit.FilterTypes = function() {
throw Error.invalidOperation();}
AjaxControlToolkit.FilterTypes.prototype = {
Custom : 0x1,
Numbers : 0x2,
UppercaseLetters : 0x4,
LowercaseLetters : 0x8
}
AjaxControlToolkit.FilterTypes.registerEnum('AjaxControlToolkit.FilterTypes', true);AjaxControlToolkit.FilterModes = function() {
throw Error.invalidOperation();}
AjaxControlToolkit.FilterModes.prototype = {
ValidChars : 0x1,
InvalidChars : 0x2
}
AjaxControlToolkit.FilterModes.registerEnum('AjaxControlToolkit.FilterModes', true);AjaxControlToolkit.FilteredTextBoxProcessKeyEventArgs = function(key, text, shouldFilter) {
AjaxControlToolkit.FilteredTextBoxProcessKeyEventArgs.initializeBase(this);this._key = key;this._text = text;this._shouldFilter = shouldFilter;this._allowKey = !shouldFilter;}
AjaxControlToolkit.FilteredTextBoxProcessKeyEventArgs.prototype = {
get_key : function() {
return this._key;},
get_text : function() {
return this._text;},
get_shouldFilter : function() {
return this._shouldFilter;},
get_allowKey : function() {
return this._allowKey;},
set_allowKey : function(value) {
this._allowKey = value;}
}
AjaxControlToolkit.FilteredTextBoxProcessKeyEventArgs.registerClass('AjaxControlToolkit.FilteredTextBoxProcessKeyEventArgs', Sys.EventArgs);AjaxControlToolkit.FilteredTextBoxEventArgs = function(key) {
AjaxControlToolkit.FilteredTextBoxEventArgs.initializeBase(this);this._key = key;}
AjaxControlToolkit.FilteredTextBoxEventArgs.prototype = {
get_key : function() {
return this._key;}
}
AjaxControlToolkit.FilteredTextBoxEventArgs.registerClass('AjaxControlToolkit.FilteredTextBoxEventArgs', Sys.EventArgs);
if(typeof(Sys)!=='undefined')Sys.Application.notifyScriptLoaded();