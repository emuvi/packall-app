"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var qinpel_cps_1 = require("qinpel-cps");
var PackAll = (function (_super) {
    __extends(PackAll, _super);
    function PackAll() {
        var _this = _super.call(this) || this;
        _this.qinLine = new qinpel_cps_1.QinLine();
        _this.qinBody = new qinpel_cps_1.QinPath();
        _this.qinLine.install(_this);
        _this.qinBody.install(_this.qinLine);
        return _this;
    }
    return PackAll;
}(qinpel_cps_1.QinColumn));
new PackAll().putAsBody();
//# sourceMappingURL=index.js.map