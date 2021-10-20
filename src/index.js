"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qinpel = window.frameElement.qinpel;
var all_1 = require("qinpel-cps/all");
var PackAll = (function () {
    function PackAll() {
        this.divBody = document.createElement("div");
        this.chooser = new all_1.Chooser();
        this.chooser.install(this.divBody);
    }
    PackAll.prototype.install = function (on) {
        on.appendChild(this.divBody);
    };
    return PackAll;
}());
new PackAll().install(document.body);
//# sourceMappingURL=index.js.map