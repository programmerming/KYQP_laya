var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var mview;
(function (mview) {
    var WinView = /** @class */ (function (_super) {
        __extends(WinView, _super);
        function WinView() {
            var _this = _super.call(this) || this;
            _this._view_type = mview.ComView.WINDOW;
            _this.btnCloseInit();
            return _this;
        }
        WinView.prototype.layerInit = function () {
            this.centerX = 0;
            this.centerY = 0;
        };
        WinView.prototype.btnCloseInit = function () {
            this["btn_close"].on(Laya.Event.CLICK, this, this.onClose);
            this.on(Laya.Event.DISPLAY, this, this.onWinShow);
            this.on(Laya.Event.REMOVED, this, this.onWinHide);
        };
        WinView.prototype.onWinShow = function () {
            CFun.playSound("sounds/hall/window_open.mp3");
        };
        WinView.prototype.onWinHide = function () {
            CFun.playSound("sounds/hall/window_close.mp3");
        };
        WinView.prototype.onClose = function () {
            this.vm.closeNow();
        };
        return WinView;
    }(mview.ComView));
    mview.WinView = WinView;
})(mview || (mview = {}));
//# sourceMappingURL=WinView.js.map