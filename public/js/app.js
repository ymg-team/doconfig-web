'use strict';var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var DcAlert=function(){function a(){_classCallCheck(this,a),this.alert_el=document.getElementById('alert')}return _createClass(a,[{key:'open',value:function open(){var a=this,b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:'info',c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'tidak ada apa-apa...';this.close(),this.alert_el.classList.add('active'),this.alert_el.innerHTML='<div onClick="dc.alert.close()" class=\'alert-item alert-'+b+'\'>'+c+'</div>',setTimeout(function(){a.close()},4e3)}},{key:'close',value:function close(){this.alert_el.classList.remove('active'),this.alert_el.innerHTML=''}}]),a}();window.dc={alert:new DcAlert};