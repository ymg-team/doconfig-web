'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// dc alert
var DcAlert = function () {
    function DcAlert() {
        _classCallCheck(this, DcAlert);

        this.alert_el = document.getElementById('alert');
    }

    _createClass(DcAlert, [{
        key: 'open',
        value: function open() {
            var _this = this;

            var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'info';
            var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'tidak ada apa-apa...';

            this.close();
            // added class active
            this.alert_el.classList.add('active');
            // set child content
            this.alert_el.innerHTML = '<div onClick="dc.alert.close()" class=\'alert-item alert-' + type + '\'>' + message + '</div>';
            setTimeout(function () {
                _this.close();
            }, 4000);
        }
    }, {
        key: 'close',
        value: function close() {
            // remove class active
            this.alert_el.classList.remove('active');
            // remove all child conten
            this.alert_el.innerHTML = '';
        }
    }]);

    return DcAlert;
}();

window.dc = {
    alert: new DcAlert()
};
