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
var MModel = /** @class */ (function (_super) {
    __extends(MModel, _super);
    function MModel() {
        return _super.call(this) || this;
    }
    MModel.prototype.sendData = function (method_id, args) {
        if (args === void 0) { args = []; }
        var send2 = laya.utils.Pool.getItemByClass("tmpSend", SSend);
        send2.method_id = method_id;
        send2.args = args;
        send2.e_id = this["e_id"];
        send2.sendClass = this["wyz_class_name"];
        this.send(send2);
    };
    return MModel;
}(Model));
//# sourceMappingURL=MModel.js.map