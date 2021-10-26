(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
var qinpel = window.frameElement.qinpel;
var all_1 = require("qinpel-cps/all");
var PackAll = (function (_super) {
    __extends(PackAll, _super);
    function PackAll() {
        var _this = _super.call(this) || this;
        _this.qinBody = new all_1.QinPath();
        _this.qinBody.install(_this);
        return _this;
    }
    return PackAll;
}(all_1.QinLine));
new PackAll().putAsBody();

},{"qinpel-cps/all":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinStyles = exports.QinGrandeur = exports.QinBounds = exports.QinDimension = exports.QinFilesDescriptor = exports.QinFilesOperation = exports.QinFilesNature = exports.QinString = exports.QinPath = exports.QinPanel = exports.QinLine = exports.QinLabel = exports.QinIcon = exports.QinField = exports.QinExplorer = exports.QinColumn = exports.QinChooser = exports.QinCheck = exports.QinButton = exports.qinAssetUrl = exports.QinAsset = void 0;
var qin_assets_1 = require("./src/qin-assets");
Object.defineProperty(exports, "QinAsset", { enumerable: true, get: function () { return qin_assets_1.QinAsset; } });
Object.defineProperty(exports, "qinAssetUrl", { enumerable: true, get: function () { return qin_assets_1.qinAssetUrl; } });
var qin_button_1 = require("./src/qin-button");
Object.defineProperty(exports, "QinButton", { enumerable: true, get: function () { return qin_button_1.QinButton; } });
var qin_check_1 = require("./src/qin-check");
Object.defineProperty(exports, "QinCheck", { enumerable: true, get: function () { return qin_check_1.QinCheck; } });
var qin_chooser_1 = require("./src/qin-chooser");
Object.defineProperty(exports, "QinChooser", { enumerable: true, get: function () { return qin_chooser_1.QinChooser; } });
var qin_column_1 = require("./src/qin-column");
Object.defineProperty(exports, "QinColumn", { enumerable: true, get: function () { return qin_column_1.QinColumn; } });
var qin_explorer_1 = require("./src/qin-explorer");
Object.defineProperty(exports, "QinExplorer", { enumerable: true, get: function () { return qin_explorer_1.QinExplorer; } });
var qin_field_1 = require("./src/qin-field");
Object.defineProperty(exports, "QinField", { enumerable: true, get: function () { return qin_field_1.QinField; } });
var qin_icon_1 = require("./src/qin-icon");
Object.defineProperty(exports, "QinIcon", { enumerable: true, get: function () { return qin_icon_1.QinIcon; } });
var qin_label_1 = require("./src/qin-label");
Object.defineProperty(exports, "QinLabel", { enumerable: true, get: function () { return qin_label_1.QinLabel; } });
var qin_line_1 = require("./src/qin-line");
Object.defineProperty(exports, "QinLine", { enumerable: true, get: function () { return qin_line_1.QinLine; } });
var qin_panel_1 = require("./src/qin-panel");
Object.defineProperty(exports, "QinPanel", { enumerable: true, get: function () { return qin_panel_1.QinPanel; } });
var qin_path_1 = require("./src/qin-path");
Object.defineProperty(exports, "QinPath", { enumerable: true, get: function () { return qin_path_1.QinPath; } });
var qin_string_1 = require("./src/qin-string");
Object.defineProperty(exports, "QinString", { enumerable: true, get: function () { return qin_string_1.QinString; } });
var qin_utils_1 = require("./src/qin-utils");
Object.defineProperty(exports, "QinFilesNature", { enumerable: true, get: function () { return qin_utils_1.QinFilesNature; } });
Object.defineProperty(exports, "QinFilesOperation", { enumerable: true, get: function () { return qin_utils_1.QinFilesOperation; } });
Object.defineProperty(exports, "QinFilesDescriptor", { enumerable: true, get: function () { return qin_utils_1.QinFilesDescriptor; } });
Object.defineProperty(exports, "QinDimension", { enumerable: true, get: function () { return qin_utils_1.QinDimension; } });
Object.defineProperty(exports, "QinBounds", { enumerable: true, get: function () { return qin_utils_1.QinBounds; } });
Object.defineProperty(exports, "QinGrandeur", { enumerable: true, get: function () { return qin_utils_1.QinGrandeur; } });
Object.defineProperty(exports, "QinStyles", { enumerable: true, get: function () { return qin_utils_1.QinStyles; } });

},{"./src/qin-assets":3,"./src/qin-button":5,"./src/qin-check":6,"./src/qin-chooser":7,"./src/qin-column":8,"./src/qin-explorer":10,"./src/qin-field":11,"./src/qin-icon":12,"./src/qin-label":13,"./src/qin-line":14,"./src/qin-panel":15,"./src/qin-path":16,"./src/qin-string":17,"./src/qin-utils":18}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qinAssetUrl = exports.QinAsset = void 0;
var QinAsset;
(function (QinAsset) {
    QinAsset["BackgroundDark0"] = "background-dark-0.png";
    QinAsset["BackgroundDark1"] = "background-dark-1.png";
    QinAsset["BackgroundDark10"] = "background-dark-10.png";
    QinAsset["BackgroundDark11"] = "background-dark-11.png";
    QinAsset["BackgroundDark12"] = "background-dark-12.png";
    QinAsset["BackgroundDark13"] = "background-dark-13.png";
    QinAsset["BackgroundDark14"] = "background-dark-14.png";
    QinAsset["BackgroundDark15"] = "background-dark-15.png";
    QinAsset["BackgroundDark16"] = "background-dark-16.png";
    QinAsset["BackgroundDark17"] = "background-dark-17.png";
    QinAsset["BackgroundDark18"] = "background-dark-18.png";
    QinAsset["BackgroundDark19"] = "background-dark-19.png";
    QinAsset["BackgroundDark2"] = "background-dark-2.png";
    QinAsset["BackgroundDark20"] = "background-dark-20.png";
    QinAsset["BackgroundDark21"] = "background-dark-21.png";
    QinAsset["BackgroundDark22"] = "background-dark-22.png";
    QinAsset["BackgroundDark23"] = "background-dark-23.png";
    QinAsset["BackgroundDark24"] = "background-dark-24.png";
    QinAsset["BackgroundDark25"] = "background-dark-25.png";
    QinAsset["BackgroundDark26"] = "background-dark-26.png";
    QinAsset["BackgroundDark27"] = "background-dark-27.png";
    QinAsset["BackgroundDark28"] = "background-dark-28.png";
    QinAsset["BackgroundDark29"] = "background-dark-29.png";
    QinAsset["BackgroundDark3"] = "background-dark-3.png";
    QinAsset["BackgroundDark4"] = "background-dark-4.png";
    QinAsset["BackgroundDark5"] = "background-dark-5.png";
    QinAsset["BackgroundDark6"] = "background-dark-6.png";
    QinAsset["BackgroundDark7"] = "background-dark-7.png";
    QinAsset["BackgroundDark8"] = "background-dark-8.png";
    QinAsset["BackgroundDark9"] = "background-dark-9.png";
    QinAsset["BackgroundDark"] = "background-dark.png";
    QinAsset["BackgroundLight0"] = "background-light-0.png";
    QinAsset["BackgroundLight1"] = "background-light-1.png";
    QinAsset["BackgroundLight10"] = "background-light-10.png";
    QinAsset["BackgroundLight11"] = "background-light-11.png";
    QinAsset["BackgroundLight12"] = "background-light-12.png";
    QinAsset["BackgroundLight13"] = "background-light-13.png";
    QinAsset["BackgroundLight14"] = "background-light-14.png";
    QinAsset["BackgroundLight15"] = "background-light-15.png";
    QinAsset["BackgroundLight16"] = "background-light-16.png";
    QinAsset["BackgroundLight17"] = "background-light-17.png";
    QinAsset["BackgroundLight18"] = "background-light-18.png";
    QinAsset["BackgroundLight19"] = "background-light-19.png";
    QinAsset["BackgroundLight2"] = "background-light-2.png";
    QinAsset["BackgroundLight20"] = "background-light-20.png";
    QinAsset["BackgroundLight21"] = "background-light-21.png";
    QinAsset["BackgroundLight22"] = "background-light-22.png";
    QinAsset["BackgroundLight23"] = "background-light-23.png";
    QinAsset["BackgroundLight24"] = "background-light-24.png";
    QinAsset["BackgroundLight25"] = "background-light-25.png";
    QinAsset["BackgroundLight26"] = "background-light-26.png";
    QinAsset["BackgroundLight27"] = "background-light-27.png";
    QinAsset["BackgroundLight28"] = "background-light-28.png";
    QinAsset["BackgroundLight29"] = "background-light-29.png";
    QinAsset["BackgroundLight3"] = "background-light-3.png";
    QinAsset["BackgroundLight4"] = "background-light-4.png";
    QinAsset["BackgroundLight5"] = "background-light-5.png";
    QinAsset["BackgroundLight6"] = "background-light-6.png";
    QinAsset["BackgroundLight7"] = "background-light-7.png";
    QinAsset["BackgroundLight8"] = "background-light-8.png";
    QinAsset["BackgroundLight9"] = "background-light-9.png";
    QinAsset["BackgroundLight"] = "background-light.png";
    QinAsset["BackgroundNormal0"] = "background-normal-0.png";
    QinAsset["BackgroundNormal1"] = "background-normal-1.png";
    QinAsset["BackgroundNormal10"] = "background-normal-10.png";
    QinAsset["BackgroundNormal11"] = "background-normal-11.png";
    QinAsset["BackgroundNormal12"] = "background-normal-12.png";
    QinAsset["BackgroundNormal13"] = "background-normal-13.png";
    QinAsset["BackgroundNormal14"] = "background-normal-14.png";
    QinAsset["BackgroundNormal15"] = "background-normal-15.png";
    QinAsset["BackgroundNormal16"] = "background-normal-16.png";
    QinAsset["BackgroundNormal17"] = "background-normal-17.png";
    QinAsset["BackgroundNormal18"] = "background-normal-18.png";
    QinAsset["BackgroundNormal19"] = "background-normal-19.png";
    QinAsset["BackgroundNormal2"] = "background-normal-2.png";
    QinAsset["BackgroundNormal20"] = "background-normal-20.png";
    QinAsset["BackgroundNormal21"] = "background-normal-21.png";
    QinAsset["BackgroundNormal22"] = "background-normal-22.png";
    QinAsset["BackgroundNormal23"] = "background-normal-23.png";
    QinAsset["BackgroundNormal24"] = "background-normal-24.png";
    QinAsset["BackgroundNormal25"] = "background-normal-25.png";
    QinAsset["BackgroundNormal26"] = "background-normal-26.png";
    QinAsset["BackgroundNormal27"] = "background-normal-27.png";
    QinAsset["BackgroundNormal28"] = "background-normal-28.png";
    QinAsset["BackgroundNormal29"] = "background-normal-29.png";
    QinAsset["BackgroundNormal3"] = "background-normal-3.png";
    QinAsset["BackgroundNormal4"] = "background-normal-4.png";
    QinAsset["BackgroundNormal5"] = "background-normal-5.png";
    QinAsset["BackgroundNormal6"] = "background-normal-6.png";
    QinAsset["BackgroundNormal7"] = "background-normal-7.png";
    QinAsset["BackgroundNormal8"] = "background-normal-8.png";
    QinAsset["BackgroundNormal9"] = "background-normal-9.png";
    QinAsset["BackgroundNormal"] = "background-normal.png";
    QinAsset["ExplorerApps"] = "explorer-apps.png";
    QinAsset["ExplorerCmds"] = "explorer-cmds.png";
    QinAsset["ExplorerDir"] = "explorer-dir.png";
    QinAsset["ExplorerExec"] = "explorer-exec.png";
    QinAsset["ExplorerFile"] = "explorer-file.png";
    QinAsset["ExplorerImage"] = "explorer-image.png";
    QinAsset["ExplorerMovie"] = "explorer-movie.png";
    QinAsset["ExplorerMusic"] = "explorer-music.png";
    QinAsset["ExplorerZipped"] = "explorer-zipped.png";
    QinAsset["FaceCog"] = "face-cog.svg";
    QinAsset["FrameClose"] = "frame-close.png";
    QinAsset["FrameMaximize"] = "frame-maximize.png";
    QinAsset["FrameMenu"] = "frame-menu.png";
    QinAsset["FrameMinimize"] = "frame-minimize.png";
    QinAsset["FrameResize"] = "frame-resize.png";
    QinAsset["FrameStatusError"] = "frame-status-error.png";
    QinAsset["FrameStatusInfo"] = "frame-status-info.png";
    QinAsset["LoginKey"] = "login-key.png";
    QinAsset["MenuDevtools"] = "menu-devtools.ico";
    QinAsset["Poppins"] = "poppins.ttf";
    QinAsset["Qinpel"] = "qinpel.png";
})(QinAsset = exports.QinAsset || (exports.QinAsset = {}));
function qinAssetUrl(asset) {
    return "/run/app/qinpel-app/assets/" + asset;
}
exports.qinAssetUrl = qinAssetUrl;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBase = void 0;
var qinpel = window.frameElement.qinpel;
var QinBase = (function () {
    function QinBase() {
        this.baseParent = null;
        this.baseChildren = [];
        this.baseDisplay = "initial";
        this.baseVisibility = "initial";
    }
    QinBase.prototype.install = function (on) {
        this.baseParent = on;
        this.baseParent.append(this);
    };
    QinBase.prototype.unInstall = function () {
        this.baseParent.remove(this);
    };
    QinBase.prototype.reInstall = function () {
        this.baseParent.append(this);
    };
    QinBase.prototype.unDisplay = function () {
        if (this.getMain().style.display !== "none") {
            this.baseDisplay = this.getMain().style.display;
            this.getMain().style.display = "none";
        }
    };
    QinBase.prototype.reDisplay = function () {
        this.getMain().style.display = this.baseDisplay;
    };
    QinBase.prototype.unVisible = function () {
        if (this.getMain().style.display !== "hidden") {
            this.baseVisibility = this.getMain().style.visibility;
            this.getMain().style.visibility = "hidden";
        }
    };
    QinBase.prototype.reVisible = function () {
        this.getMain().style.visibility = this.baseVisibility;
    };
    QinBase.prototype.append = function (child) {
        this.baseChildren.push(child);
        this.getMain().appendChild(child.getMain());
    };
    QinBase.prototype.remove = function (child) {
        var index = this.baseChildren.indexOf(child);
        if (index > -1) {
            this.baseChildren.splice(index, 1);
        }
        this.getMain().removeChild(child.getMain());
    };
    QinBase.prototype.children = function () {
        return this.baseChildren;
    };
    QinBase.prototype.addAction = function (action) {
        qinpel.util.addAction(this.getMain(), action);
    };
    return QinBase;
}());
exports.QinBase = QinBase;

},{}],5:[function(require,module,exports){
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
exports.QinButton = void 0;
var qin_base_1 = require("./qin-base");
var qin_button_styles_1 = require("./styles/qin-button-styles");
var QinButton = (function (_super) {
    __extends(QinButton, _super);
    function QinButton(icon, label) {
        var _this = _super.call(this) || this;
        _this.button = document.createElement("button");
        _this.qinIcon = null;
        _this.qinLabel = null;
        qin_button_styles_1.default.applyOnButton(_this.button);
        if (icon) {
            _this.qinIcon = icon;
            _this.qinIcon.install(_this);
        }
        if (label) {
            _this.qinLabel = label;
            _this.qinLabel.install(_this);
        }
        return _this;
    }
    QinButton.prototype.getMain = function () {
        return this.button;
    };
    return QinButton;
}(qin_base_1.QinBase));
exports.QinButton = QinButton;

},{"./qin-base":4,"./styles/qin-button-styles":19}],6:[function(require,module,exports){
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
exports.QinCheck = void 0;
var qin_edit_1 = require("./qin-edit");
var QinCheck = (function (_super) {
    __extends(QinCheck, _super);
    function QinCheck(title) {
        var _this = _super.call(this) || this;
        _this.inputCheck = document.createElement("input");
        _this.inputCheck.type = "checkbox";
        if (title) {
            _this.inputCheck.innerText = title;
        }
        return _this;
    }
    QinCheck.prototype.getMain = function () {
        return this.inputCheck;
    };
    QinCheck.prototype.getData = function () {
        return this.inputCheck.checked;
    };
    return QinCheck;
}(qin_edit_1.QinEdit));
exports.QinCheck = QinCheck;

},{"./qin-edit":9}],7:[function(require,module,exports){
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
exports.QinChooser = void 0;
var qinpel = window.frameElement.qinpel;
var qin_edit_1 = require("./qin-edit");
var qin_explorer_1 = require("./qin-explorer");
var qin_chooser_styles_1 = require("./styles/qin-chooser-styles");
var qin_utils_1 = require("./qin-utils");
var QinChooser = (function (_super) {
    __extends(QinChooser, _super);
    function QinChooser(nature, operation, descriptors) {
        var _this = _super.call(this) || this;
        _this.divBody = document.createElement("div");
        _this.qinExplorer = new qin_explorer_1.QinExplorer();
        _this.divBottom = document.createElement("div");
        _this.inputName = document.createElement("input");
        _this.selectType = document.createElement("select");
        _this.nature = nature ? nature : qin_utils_1.QinFilesNature.BOTH;
        _this.operation = operation ? operation : qin_utils_1.QinFilesOperation.OPEN;
        _this.descriptors = descriptors ? descriptors : [];
        _this.initBody();
        _this.initBottom();
        return _this;
    }
    QinChooser.prototype.initBody = function () {
        qin_chooser_styles_1.default.applyOnDivBody(this.divBody);
        this.qinExplorer.install(this);
        this.qinExplorer.setNature(this.nature);
        this.divBody.appendChild(this.divBottom);
    };
    QinChooser.prototype.initBottom = function () {
        qin_chooser_styles_1.default.applyOnDivBottom(this.divBottom);
        this.initInput();
        this.initSelect();
    };
    QinChooser.prototype.initInput = function () {
        var _this = this;
        qin_chooser_styles_1.default.applyOnInputName(this.inputName);
        this.divBottom.appendChild(this.inputName);
        qinpel.util.addAction(this.inputName, function (qinEvent) {
            if (qinEvent.fromTyping && qinEvent.isEnter) {
                _this.qinExplorer.load(_this.inputName.value, function (loaded) {
                    _this.inputName.value = loaded;
                });
                qinEvent.stop();
            }
        });
    };
    QinChooser.prototype.initSelect = function () {
        if (this.descriptors.length == 0) {
            var optionAll = document.createElement("option");
            optionAll.text = "All Files (*.*)";
            optionAll.value = "*";
            optionAll.selected = true;
            this.selectType.appendChild(optionAll);
            this.qinExplorer.setExtensions([]);
        }
        else {
            for (var index = 0; index < this.descriptors.length; index++) {
                var descriptor = this.descriptors[index];
                var option = document.createElement("option");
                option.text = descriptor.description;
                option.value = descriptor.extensions.join(";");
                if (index == 0)
                    option.selected = true;
                this.selectType.appendChild(option);
            }
            this.qinExplorer.setExtensions(this.descriptors[0].extensions);
        }
        qin_chooser_styles_1.default.applyOnSelectType(this.selectType);
        this.divBottom.appendChild(this.selectType);
    };
    QinChooser.prototype.getMain = function () {
        return this.divBody;
    };
    QinChooser.prototype.getData = function () {
        return undefined;
    };
    return QinChooser;
}(qin_edit_1.QinEdit));
exports.QinChooser = QinChooser;

},{"./qin-edit":9,"./qin-explorer":10,"./qin-utils":18,"./styles/qin-chooser-styles":20}],8:[function(require,module,exports){
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
exports.QinColumn = void 0;
var qinpel = window.frameElement.qinpel;
var qin_base_1 = require("./qin-base");
var qin_column_styles_1 = require("./styles/qin-column-styles");
var QinColumn = (function (_super) {
    __extends(QinColumn, _super);
    function QinColumn() {
        var _this = _super.call(this) || this;
        _this.divPanel = document.createElement("div");
        _this.initPanel();
        return _this;
    }
    QinColumn.prototype.initPanel = function () {
        qin_column_styles_1.default.applyOnPanel(this.divPanel);
    };
    QinColumn.prototype.putAsBody = function () {
        document.body.appendChild(this.divPanel);
        qinpel.util.applyStyleAsBody(this.divPanel);
    };
    QinColumn.prototype.getMain = function () {
        return this.divPanel;
    };
    return QinColumn;
}(qin_base_1.QinBase));
exports.QinColumn = QinColumn;

},{"./qin-base":4,"./styles/qin-column-styles":21}],9:[function(require,module,exports){
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
exports.QinEdit = void 0;
var qin_base_1 = require("./qin-base");
var QinEdit = (function (_super) {
    __extends(QinEdit, _super);
    function QinEdit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QinEdit;
}(qin_base_1.QinBase));
exports.QinEdit = QinEdit;

},{"./qin-base":4}],10:[function(require,module,exports){
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
exports.QinExplorer = void 0;
var qinpel = window.frameElement.qinpel;
var qin_edit_1 = require("./qin-edit");
var qin_explorer_styles_1 = require("./styles/qin-explorer-styles");
var qin_utils_1 = require("./qin-utils");
function getIconName(fromExtension) {
    var result = "explorer-file.png";
    if (qinpel.util.isFileApp(fromExtension)) {
        result = "explorer-apps.png";
    }
    else if (qinpel.util.isFileCmd(fromExtension)) {
        result = "explorer-cmds.png";
    }
    else if (qinpel.util.isFileExec(fromExtension)) {
        result = "explorer-exec.png";
    }
    else if (qinpel.util.isFileImage(fromExtension)) {
        result = "explorer-image.png";
    }
    else if (qinpel.util.isFileVector(fromExtension)) {
        result = "explorer-image.png";
    }
    else if (qinpel.util.isFileMusic(fromExtension)) {
        result = "explorer-music.png";
    }
    else if (qinpel.util.isFileMovie(fromExtension)) {
        result = "explorer-movie.png";
    }
    else if (qinpel.util.isFileZipped(fromExtension)) {
        result = "explorer-zipped.png";
    }
    return result;
}
var Item = (function () {
    function Item(fileName, iconName) {
        this.divItem = document.createElement("div");
        this.divItemBody = document.createElement("div");
        this.spanIcon = document.createElement("span");
        this.imgIcon = document.createElement("img");
        this.spanText = document.createElement("span");
        this.selected = false;
        this.fileName = fileName;
        this.iconName = iconName;
        this.initItem();
    }
    Item.prototype.initItem = function () {
        var _this = this;
        qin_explorer_styles_1.default.applyOnDivItem(this.divItem);
        this.divItem.tabIndex = 0;
        qin_explorer_styles_1.default.applyOnDivItemBody(this.divItemBody);
        this.divItem.appendChild(this.divItemBody);
        qin_explorer_styles_1.default.applyOnSpanIcon(this.spanIcon);
        this.divItemBody.appendChild(this.spanIcon);
        this.imgIcon.src = "/run/app/qinpel-app/assets/" + this.iconName;
        this.spanIcon.appendChild(this.imgIcon);
        this.spanText.innerText = this.fileName;
        qin_explorer_styles_1.default.applyOnSpanText(this.spanText);
        this.divItemBody.appendChild(this.spanText);
        qinpel.util.addAction(this.divItem, function (qinEvent) {
            if (qinEvent.fromPointing
                || (qinEvent.fromTyping && qinEvent.isSpace)) {
                _this.divItem.focus();
                _this.toggle();
                qinEvent.stop();
            }
        });
    };
    Item.prototype.install = function (on) {
        on.appendChild(this.divItem);
    };
    Item.prototype.select = function () {
        qin_explorer_styles_1.default.applyOnDivSelect(this.divItem);
        this.selected = true;
    };
    Item.prototype.unselect = function () {
        qin_explorer_styles_1.default.applyOnDivUnSelect(this.divItem);
        this.selected = false;
    };
    Item.prototype.toggle = function () {
        if (!this.selected) {
            this.select();
        }
        else {
            this.unselect();
        }
    };
    Item.prototype.getName = function () {
        return this.fileName;
    };
    Item.prototype.isSelected = function () {
        return this.selected;
    };
    return Item;
}());
var QinExplorer = (function (_super) {
    __extends(QinExplorer, _super);
    function QinExplorer(nature, extensions) {
        var _this = _super.call(this) || this;
        _this.divBody = document.createElement("div");
        _this.actualFolder = "";
        _this.serverFolder = "";
        _this.items = [];
        _this.nature = nature ? nature : qin_utils_1.QinFilesNature.BOTH;
        _this.extensions = extensions ? extensions : [];
        _this.initBody();
        return _this;
    }
    QinExplorer.prototype.initBody = function () {
        var _this = this;
        qin_explorer_styles_1.default.applyOnDivBody(this.divBody);
        qinpel.util.addAction(this.divBody, function (qe) {
            if (qe.fromPointing) {
                _this.cleanSelection();
            }
        });
        qinpel.util.disableSelection(this.divBody);
    };
    QinExplorer.prototype.getMain = function () {
        return this.divBody;
    };
    QinExplorer.prototype.getData = function () {
        var result = [];
        return result;
    };
    QinExplorer.prototype.setNature = function (nature) {
        this.nature = nature;
    };
    QinExplorer.prototype.setExtensions = function (extensions) {
        this.extensions = extensions;
    };
    QinExplorer.prototype.getActualFolder = function () {
        return this.actualFolder;
    };
    QinExplorer.prototype.getServerFolder = function () {
        return this.serverFolder;
    };
    QinExplorer.prototype.newDir = function (name) {
        this.newItem(name, "explorer-dir.png");
    };
    QinExplorer.prototype.newFile = function (name, extension) {
        this.newItem(name, getIconName(extension));
    };
    QinExplorer.prototype.newItem = function (name, icon) {
        var item = new Item(name, icon);
        item.install(this.divBody);
        this.items.push(item);
    };
    QinExplorer.prototype.load = function (folder, onLoad) {
        var _this = this;
        this.clean();
        qinpel.post("/dir/list", { path: folder })
            .then(function (res) {
            _this.actualFolder = folder;
            for (var _i = 0, _a = qinpel.util.getTextLines(res.data); _i < _a.length; _i++) {
                var line = _a[_i];
                var lineValue = line.substring(3);
                if (!lineValue) {
                    continue;
                }
                if (line.indexOf("P: ") === 0) {
                    _this.serverFolder = lineValue;
                    if (onLoad) {
                        onLoad(lineValue);
                    }
                }
                else if (line.indexOf("D: ") === 0) {
                    if (_this.nature == qin_utils_1.QinFilesNature.BOTH ||
                        _this.nature == qin_utils_1.QinFilesNature.DIRECTORIES) {
                        _this.newDir(lineValue);
                    }
                }
                else if (line.indexOf("F: ") === 0) {
                    if (_this.nature == qin_utils_1.QinFilesNature.BOTH ||
                        _this.nature == qin_utils_1.QinFilesNature.FILES) {
                        var extension = qinpel.util.getFileExtension(lineValue);
                        var passedExtension = true;
                        if (_this.extensions && _this.extensions.length > 0) {
                            passedExtension = _this.extensions.indexOf(extension) > -1;
                        }
                        if (passedExtension) {
                            _this.newFile(lineValue, extension);
                        }
                    }
                }
            }
        })
            .catch(function (err) {
            _this.divBody.innerText = qinpel.util.getErrorMessage(err);
        });
    };
    QinExplorer.prototype.clean = function () {
        this.divBody.innerHTML = "";
        this.items = [];
        this.actualFolder = "";
        this.serverFolder = "";
    };
    QinExplorer.prototype.cleanSelection = function () {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            item.unselect();
        }
    };
    return QinExplorer;
}(qin_edit_1.QinEdit));
exports.QinExplorer = QinExplorer;

},{"./qin-edit":9,"./qin-utils":18,"./styles/qin-explorer-styles":23}],11:[function(require,module,exports){
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
exports.QinField = void 0;
var qin_edit_1 = require("./qin-edit");
var qin_column_1 = require("./qin-column");
var qin_label_1 = require("./qin-label");
var QinField = (function (_super) {
    __extends(QinField, _super);
    function QinField(title, edit) {
        var _this = _super.call(this) || this;
        _this.qinField = new qin_column_1.QinColumn();
        _this.qinLabel = new qin_label_1.QinLabel();
        _this.qinEdit = null;
        _this.qinLabel.setTitle(title);
        _this.qinLabel.install(_this.qinField);
        _this.qinEdit = edit;
        _this.qinEdit.install(_this.qinField);
        return _this;
    }
    QinField.prototype.getMain = function () {
        return this.qinField.getMain();
    };
    QinField.prototype.getData = function () {
        return this.qinEdit.getData();
    };
    return QinField;
}(qin_edit_1.QinEdit));
exports.QinField = QinField;

},{"./qin-column":8,"./qin-edit":9,"./qin-label":13}],12:[function(require,module,exports){
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
exports.QinIcon = void 0;
var qinpel = window.frameElement.qinpel;
var qin_base_1 = require("./qin-base");
var qin_assets_1 = require("./qin-assets");
var qin_utils_1 = require("./qin-utils");
var QinIcon = (function (_super) {
    __extends(QinIcon, _super);
    function QinIcon(asset, size, fill) {
        var _this = _super.call(this) || this;
        _this.elModel = null;
        var assetUrl = (0, qin_assets_1.qinAssetUrl)(asset);
        var extension = qinpel.util.getFileExtension(assetUrl);
        if (qinpel.util.isFileVector(extension)) {
            _this.initVector(assetUrl, size, fill);
        }
        else {
            _this.initImage(assetUrl, size);
        }
        return _this;
    }
    QinIcon.prototype.initVector = function (assetUrl, size, fill) {
        var obj = document.createElement("object");
        obj.data = assetUrl;
        obj.type = "image/svg+xml";
        this.applySize(obj, size);
        if (fill) {
            obj.style.fill = fill;
        }
        this.elModel = obj;
    };
    QinIcon.prototype.initImage = function (assetUrl, size) {
        var img = document.createElement("img");
        img.src = assetUrl;
        this.applySize(img, size);
        this.elModel = img;
    };
    QinIcon.prototype.applySize = function (el, size) {
        if (size) {
            if (size instanceof qin_utils_1.QinDimension) {
                el.style.width = size.width + "px";
                el.style.height = size.height + "px";
            }
            else {
                var dim = qinpel.util.getIconDimension(size);
                el.style.width = dim.width + "px";
                el.style.height = dim.height + "px";
            }
        }
    };
    QinIcon.prototype.getMain = function () {
        return this.elModel;
    };
    return QinIcon;
}(qin_base_1.QinBase));
exports.QinIcon = QinIcon;

},{"./qin-assets":3,"./qin-base":4,"./qin-utils":18}],13:[function(require,module,exports){
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
exports.QinLabel = void 0;
var qin_base_1 = require("./qin-base");
var QinLabel = (function (_super) {
    __extends(QinLabel, _super);
    function QinLabel(title) {
        var _this = _super.call(this) || this;
        _this.spanLabel = document.createElement("span");
        if (title) {
            _this.spanLabel.textContent = title;
        }
        return _this;
    }
    QinLabel.prototype.getMain = function () {
        return this.spanLabel;
    };
    QinLabel.prototype.setTitle = function (title) {
        this.spanLabel.textContent = title;
    };
    QinLabel.prototype.getTitle = function () {
        return this.spanLabel.textContent;
    };
    return QinLabel;
}(qin_base_1.QinBase));
exports.QinLabel = QinLabel;

},{"./qin-base":4}],14:[function(require,module,exports){
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
exports.QinLine = void 0;
var qinpel = window.frameElement.qinpel;
var qin_base_1 = require("./qin-base");
var qin_line_styles_1 = require("./styles/qin-line-styles");
var QinLine = (function (_super) {
    __extends(QinLine, _super);
    function QinLine() {
        var _this = _super.call(this) || this;
        _this.divPanel = document.createElement("div");
        _this.initPanel();
        return _this;
    }
    QinLine.prototype.initPanel = function () {
        qin_line_styles_1.default.applyOnPanel(this.divPanel);
    };
    QinLine.prototype.putAsBody = function () {
        document.body.appendChild(this.divPanel);
        qinpel.util.applyStyleAsBody(this.divPanel);
    };
    QinLine.prototype.getMain = function () {
        return this.divPanel;
    };
    return QinLine;
}(qin_base_1.QinBase));
exports.QinLine = QinLine;

},{"./qin-base":4,"./styles/qin-line-styles":24}],15:[function(require,module,exports){
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
exports.QinPanel = void 0;
var qinpel = window.frameElement.qinpel;
var qin_base_1 = require("./qin-base");
var qin_panel_styles_1 = require("./styles/qin-panel-styles");
var QinPanel = (function (_super) {
    __extends(QinPanel, _super);
    function QinPanel() {
        var _this = _super.call(this) || this;
        _this.divPanel = document.createElement("div");
        _this.initPanel();
        return _this;
    }
    QinPanel.prototype.initPanel = function () {
        qin_panel_styles_1.default.applyOnPanel(this.divPanel);
    };
    QinPanel.prototype.putAsBody = function () {
        document.body.appendChild(this.divPanel);
        qinpel.util.applyStyleAsBody(this.divPanel);
    };
    QinPanel.prototype.getMain = function () {
        return this.divPanel;
    };
    return QinPanel;
}(qin_base_1.QinBase));
exports.QinPanel = QinPanel;

},{"./qin-base":4,"./styles/qin-panel-styles":25}],16:[function(require,module,exports){
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
exports.QinPath = void 0;
var qin_utils_1 = require("./qin-utils");
var qin_edit_1 = require("./qin-edit");
var qin_line_1 = require("./qin-line");
var qin_string_1 = require("./qin-string");
var qin_button_1 = require("./qin-button");
var qin_assets_1 = require("./qin-assets");
var qin_icon_1 = require("./qin-icon");
var QinPath = (function (_super) {
    __extends(QinPath, _super);
    function QinPath() {
        var _this = _super.call(this) || this;
        _this.qinLine = new qin_line_1.QinLine();
        _this.qinPath = new qin_string_1.QinString();
        _this.qinAction = new qin_button_1.QinButton(new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceCog, qin_utils_1.QinGrandeur.SMALL, qin_utils_1.QinStyles.ColorFont));
        _this.qinPath.install(_this.qinLine);
        _this.qinAction.install(_this.qinLine);
        _this.qinAction.addAction(function () {
            console.log("OI!");
        });
        return _this;
    }
    QinPath.prototype.getMain = function () {
        return this.qinLine.getMain();
    };
    QinPath.prototype.getData = function () {
        return this.qinPath.getData();
    };
    return QinPath;
}(qin_edit_1.QinEdit));
exports.QinPath = QinPath;

},{"./qin-assets":3,"./qin-button":5,"./qin-edit":9,"./qin-icon":12,"./qin-line":14,"./qin-string":17,"./qin-utils":18}],17:[function(require,module,exports){
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
exports.QinString = void 0;
var qin_edit_1 = require("./qin-edit");
var QinString = (function (_super) {
    __extends(QinString, _super);
    function QinString() {
        var _this = _super.call(this) || this;
        _this.inputString = document.createElement("input");
        _this.inputString.type = "text";
        return _this;
    }
    QinString.prototype.getMain = function () {
        return this.inputString;
    };
    QinString.prototype.getData = function () {
        return this.inputString.value;
    };
    return QinString;
}(qin_edit_1.QinEdit));
exports.QinString = QinString;

},{"./qin-edit":9}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinStyles = exports.QinGrandeur = exports.QinBounds = exports.QinDimension = exports.QinFilesDescriptor = exports.QinFilesOperation = exports.QinFilesNature = void 0;
var QinFilesNature;
(function (QinFilesNature) {
    QinFilesNature["DIRECTORIES"] = "directories";
    QinFilesNature["FILES"] = "files";
    QinFilesNature["BOTH"] = "both";
})(QinFilesNature = exports.QinFilesNature || (exports.QinFilesNature = {}));
var QinFilesOperation;
(function (QinFilesOperation) {
    QinFilesOperation["OPEN"] = "open";
    QinFilesOperation["SAVE"] = "save";
})(QinFilesOperation = exports.QinFilesOperation || (exports.QinFilesOperation = {}));
var QinFilesDescriptor = (function () {
    function QinFilesDescriptor() {
    }
    return QinFilesDescriptor;
}());
exports.QinFilesDescriptor = QinFilesDescriptor;
var QinDimension = (function () {
    function QinDimension() {
    }
    return QinDimension;
}());
exports.QinDimension = QinDimension;
;
var QinBounds = (function () {
    function QinBounds() {
    }
    return QinBounds;
}());
exports.QinBounds = QinBounds;
;
var QinGrandeur;
(function (QinGrandeur) {
    QinGrandeur["SMALL"] = "small";
    QinGrandeur["MEDIUM"] = "medium";
    QinGrandeur["LARGE"] = "large";
})(QinGrandeur = exports.QinGrandeur || (exports.QinGrandeur = {}));
var QinStyles;
(function (QinStyles) {
    QinStyles["ColorBack"] = "#fff9ef";
    QinStyles["ColorFont"] = "#270036";
    QinStyles["FontName"] = "Poppins";
    QinStyles["FontSize"] = "12px";
})(QinStyles = exports.QinStyles || (exports.QinStyles = {}));

},{}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qin_common_styles_1 = require("./qin-common-styles");
exports.default = {
    applyOnButton: function (el) {
        qin_common_styles_1.default.applyOnEdit(el);
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.alignItems = "center";
    }
};

},{"./qin-common-styles":22}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qin_common_styles_1 = require("./qin-common-styles");
exports.default = {
    applyOnDivBody: function (divBody) {
        divBody.style.display = "flex";
        divBody.style.flexFlow = "column nowrap";
    },
    applyOnDivBottom: function (divBottom) {
        divBottom.style.display = "flex";
        divBottom.style.flexFlow = "row wrap";
    },
    applyOnInputName: function (inputName) {
        qin_common_styles_1.default.applyOnEdit(inputName);
        inputName.style.flex = "1";
    },
    applyOnSelectType: function (selectType) {
        qin_common_styles_1.default.applyOnEdit(selectType);
    },
};

},{"./qin-common-styles":22}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    applyOnPanel: function (el) {
        el.style.display = "flex";
        el.style.flexDirection = "column";
        el.style.flexWrap = "nowrap";
    },
};

},{}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    applyOnEdit: function (el) {
        el.style.margin = "1px";
        el.style.padding = "3px";
        el.style.outline = "none";
        el.style.border = "1px solid #270036";
        el.style.borderRadius = "3px";
        el.style.color = "#270036";
        el.style.backgroundColor = "#ffffff";
        el.style.fontFamily = "Poppins";
        el.style.fontSize = "15px";
        el.addEventListener("focus", function () {
            el.style.outline = "none";
            el.style.border = "1px solid #ae0000";
            el.style.backgroundColor = "#dfeeff";
        });
        el.addEventListener("focusout", function () {
            el.style.outline = "none";
            el.style.border = "1px solid #270036";
            el.style.backgroundColor = "#ffffff";
        });
    }
};

},{}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qin_common_styles_1 = require("./qin-common-styles");
exports.default = {
    applyOnDivBody: function (el) {
        qin_common_styles_1.default.applyOnEdit(el);
        el.style.overflow = "auto";
        el.style.minHeight = "84px";
        el.style.minWidth = "140px";
        el.tabIndex = 0;
    },
    applyOnDivItem: function (el) {
        el.style.display = "inline-block";
        el.style.padding = "9px";
        el.style.margin = "2px";
        el.style.border = "1px solid #ffffff00";
        el.style.borderRadius = "2px";
        el.addEventListener("focus", function () {
            el.style.outline = "none";
            el.style.border = "1px solid #ae0000";
        });
        el.addEventListener("focusout", function () {
            el.style.outline = "none";
            el.style.border = "1px solid #ffffff00";
        });
    },
    applyOnDivItemBody: function (el) {
        el.style.display = "flex";
        el.style.flexDirection = "column";
        el.style.width = "120px";
    },
    applyOnSpanIcon: function (el) {
        el.style.textAlign = "center";
    },
    applyOnSpanText: function (el) {
        el.style.textAlign = "center";
        el.style.wordWrap = "break-word";
    },
    applyOnDivSelect: function (el) {
        el.style.backgroundColor = "#6c00ff3d";
    },
    applyOnDivUnSelect: function (el) {
        el.style.backgroundColor = "initial";
    }
};

},{"./qin-common-styles":22}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    applyOnPanel: function (el) {
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.flexWrap = "wrap";
    }
};

},{}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    applyOnPanel: function (el) {
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.flexWrap = "nowrap";
    },
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1VzZXJzL2V2ZXJ0L0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9pbmRleC5qcyIsIi4uL3FpbnBlbC1jcHMvYWxsLmpzIiwiLi4vcWlucGVsLWNwcy9zcmMvcWluLWFzc2V0cy5qcyIsIi4uL3FpbnBlbC1jcHMvc3JjL3Fpbi1iYXNlLmpzIiwiLi4vcWlucGVsLWNwcy9zcmMvcWluLWJ1dHRvbi5qcyIsIi4uL3FpbnBlbC1jcHMvc3JjL3Fpbi1jaGVjay5qcyIsIi4uL3FpbnBlbC1jcHMvc3JjL3Fpbi1jaG9vc2VyLmpzIiwiLi4vcWlucGVsLWNwcy9zcmMvcWluLWNvbHVtbi5qcyIsIi4uL3FpbnBlbC1jcHMvc3JjL3Fpbi1lZGl0LmpzIiwiLi4vcWlucGVsLWNwcy9zcmMvcWluLWV4cGxvcmVyLmpzIiwiLi4vcWlucGVsLWNwcy9zcmMvcWluLWZpZWxkLmpzIiwiLi4vcWlucGVsLWNwcy9zcmMvcWluLWljb24uanMiLCIuLi9xaW5wZWwtY3BzL3NyYy9xaW4tbGFiZWwuanMiLCIuLi9xaW5wZWwtY3BzL3NyYy9xaW4tbGluZS5qcyIsIi4uL3FpbnBlbC1jcHMvc3JjL3Fpbi1wYW5lbC5qcyIsIi4uL3FpbnBlbC1jcHMvc3JjL3Fpbi1wYXRoLmpzIiwiLi4vcWlucGVsLWNwcy9zcmMvcWluLXN0cmluZy5qcyIsIi4uL3FpbnBlbC1jcHMvc3JjL3Fpbi11dGlscy5qcyIsIi4uL3FpbnBlbC1jcHMvc3JjL3N0eWxlcy9xaW4tYnV0dG9uLXN0eWxlcy5qcyIsIi4uL3FpbnBlbC1jcHMvc3JjL3N0eWxlcy9xaW4tY2hvb3Nlci1zdHlsZXMuanMiLCIuLi9xaW5wZWwtY3BzL3NyYy9zdHlsZXMvcWluLWNvbHVtbi1zdHlsZXMuanMiLCIuLi9xaW5wZWwtY3BzL3NyYy9zdHlsZXMvcWluLWNvbW1vbi1zdHlsZXMuanMiLCIuLi9xaW5wZWwtY3BzL3NyYy9zdHlsZXMvcWluLWV4cGxvcmVyLXN0eWxlcy5qcyIsIi4uL3FpbnBlbC1jcHMvc3JjL3N0eWxlcy9xaW4tbGluZS1zdHlsZXMuanMiLCIuLi9xaW5wZWwtY3BzL3NyYy9zdHlsZXMvcWluLXBhbmVsLXN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgcWlucGVsID0gd2luZG93LmZyYW1lRWxlbWVudC5xaW5wZWw7XHJcbnZhciBhbGxfMSA9IHJlcXVpcmUoXCJxaW5wZWwtY3BzL2FsbFwiKTtcclxudmFyIFBhY2tBbGwgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFBhY2tBbGwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBQYWNrQWxsKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucWluQm9keSA9IG5ldyBhbGxfMS5RaW5QYXRoKCk7XHJcbiAgICAgICAgX3RoaXMucWluQm9keS5pbnN0YWxsKF90aGlzKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUGFja0FsbDtcclxufShhbGxfMS5RaW5MaW5lKSk7XHJcbm5ldyBQYWNrQWxsKCkucHV0QXNCb2R5KCk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluU3R5bGVzID0gZXhwb3J0cy5RaW5HcmFuZGV1ciA9IGV4cG9ydHMuUWluQm91bmRzID0gZXhwb3J0cy5RaW5EaW1lbnNpb24gPSBleHBvcnRzLlFpbkZpbGVzRGVzY3JpcHRvciA9IGV4cG9ydHMuUWluRmlsZXNPcGVyYXRpb24gPSBleHBvcnRzLlFpbkZpbGVzTmF0dXJlID0gZXhwb3J0cy5RaW5TdHJpbmcgPSBleHBvcnRzLlFpblBhdGggPSBleHBvcnRzLlFpblBhbmVsID0gZXhwb3J0cy5RaW5MaW5lID0gZXhwb3J0cy5RaW5MYWJlbCA9IGV4cG9ydHMuUWluSWNvbiA9IGV4cG9ydHMuUWluRmllbGQgPSBleHBvcnRzLlFpbkV4cGxvcmVyID0gZXhwb3J0cy5RaW5Db2x1bW4gPSBleHBvcnRzLlFpbkNob29zZXIgPSBleHBvcnRzLlFpbkNoZWNrID0gZXhwb3J0cy5RaW5CdXR0b24gPSBleHBvcnRzLnFpbkFzc2V0VXJsID0gZXhwb3J0cy5RaW5Bc3NldCA9IHZvaWQgMDtcclxudmFyIHFpbl9hc3NldHNfMSA9IHJlcXVpcmUoXCIuL3NyYy9xaW4tYXNzZXRzXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Bc3NldFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Fzc2V0c18xLlFpbkFzc2V0OyB9IH0pO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJxaW5Bc3NldFVybFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Fzc2V0c18xLnFpbkFzc2V0VXJsOyB9IH0pO1xyXG52YXIgcWluX2J1dHRvbl8xID0gcmVxdWlyZShcIi4vc3JjL3Fpbi1idXR0b25cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkJ1dHRvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2J1dHRvbl8xLlFpbkJ1dHRvbjsgfSB9KTtcclxudmFyIHFpbl9jaGVja18xID0gcmVxdWlyZShcIi4vc3JjL3Fpbi1jaGVja1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQ2hlY2tcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9jaGVja18xLlFpbkNoZWNrOyB9IH0pO1xyXG52YXIgcWluX2Nob29zZXJfMSA9IHJlcXVpcmUoXCIuL3NyYy9xaW4tY2hvb3NlclwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQ2hvb3NlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Nob29zZXJfMS5RaW5DaG9vc2VyOyB9IH0pO1xyXG52YXIgcWluX2NvbHVtbl8xID0gcmVxdWlyZShcIi4vc3JjL3Fpbi1jb2x1bW5cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkNvbHVtblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2NvbHVtbl8xLlFpbkNvbHVtbjsgfSB9KTtcclxudmFyIHFpbl9leHBsb3Jlcl8xID0gcmVxdWlyZShcIi4vc3JjL3Fpbi1leHBsb3JlclwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRXhwbG9yZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9leHBsb3Jlcl8xLlFpbkV4cGxvcmVyOyB9IH0pO1xyXG52YXIgcWluX2ZpZWxkXzEgPSByZXF1aXJlKFwiLi9zcmMvcWluLWZpZWxkXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5GaWVsZFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2ZpZWxkXzEuUWluRmllbGQ7IH0gfSk7XHJcbnZhciBxaW5faWNvbl8xID0gcmVxdWlyZShcIi4vc3JjL3Fpbi1pY29uXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5JY29uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faWNvbl8xLlFpbkljb247IH0gfSk7XHJcbnZhciBxaW5fbGFiZWxfMSA9IHJlcXVpcmUoXCIuL3NyYy9xaW4tbGFiZWxcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkxhYmVsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fbGFiZWxfMS5RaW5MYWJlbDsgfSB9KTtcclxudmFyIHFpbl9saW5lXzEgPSByZXF1aXJlKFwiLi9zcmMvcWluLWxpbmVcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkxpbmVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9saW5lXzEuUWluTGluZTsgfSB9KTtcclxudmFyIHFpbl9wYW5lbF8xID0gcmVxdWlyZShcIi4vc3JjL3Fpbi1wYW5lbFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluUGFuZWxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9wYW5lbF8xLlFpblBhbmVsOyB9IH0pO1xyXG52YXIgcWluX3BhdGhfMSA9IHJlcXVpcmUoXCIuL3NyYy9xaW4tcGF0aFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluUGF0aFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3BhdGhfMS5RaW5QYXRoOyB9IH0pO1xyXG52YXIgcWluX3N0cmluZ18xID0gcmVxdWlyZShcIi4vc3JjL3Fpbi1zdHJpbmdcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblN0cmluZ1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3N0cmluZ18xLlFpblN0cmluZzsgfSB9KTtcclxudmFyIHFpbl91dGlsc18xID0gcmVxdWlyZShcIi4vc3JjL3Fpbi11dGlsc1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRmlsZXNOYXR1cmVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl91dGlsc18xLlFpbkZpbGVzTmF0dXJlOyB9IH0pO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5GaWxlc09wZXJhdGlvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3V0aWxzXzEuUWluRmlsZXNPcGVyYXRpb247IH0gfSk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZpbGVzRGVzY3JpcHRvclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3V0aWxzXzEuUWluRmlsZXNEZXNjcmlwdG9yOyB9IH0pO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5EaW1lbnNpb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl91dGlsc18xLlFpbkRpbWVuc2lvbjsgfSB9KTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQm91bmRzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fdXRpbHNfMS5RaW5Cb3VuZHM7IH0gfSk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkdyYW5kZXVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fdXRpbHNfMS5RaW5HcmFuZGV1cjsgfSB9KTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluU3R5bGVzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fdXRpbHNfMS5RaW5TdHlsZXM7IH0gfSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFsbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnFpbkFzc2V0VXJsID0gZXhwb3J0cy5RaW5Bc3NldCA9IHZvaWQgMDtcclxudmFyIFFpbkFzc2V0O1xyXG4oZnVuY3Rpb24gKFFpbkFzc2V0KSB7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTBcIl0gPSBcImJhY2tncm91bmQtZGFyay0xMC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxMVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTExLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazEyXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTNcIl0gPSBcImJhY2tncm91bmQtZGFyay0xMy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxNFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTE0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazE1XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTZcIl0gPSBcImJhY2tncm91bmQtZGFyay0xNi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxN1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTE3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazE4XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTlcIl0gPSBcImJhY2tncm91bmQtZGFyay0xOS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyMFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTIwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazIxXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjJcIl0gPSBcImJhY2tncm91bmQtZGFyay0yMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyM1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTIzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazI0XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjVcIl0gPSBcImJhY2tncm91bmQtZGFyay0yNS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyNlwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTI2LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazI3XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjhcIl0gPSBcImJhY2tncm91bmQtZGFyay0yOC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyOVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTI5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazNcIl0gPSBcImJhY2tncm91bmQtZGFyay0zLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazRcIl0gPSBcImJhY2tncm91bmQtZGFyay00LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazVcIl0gPSBcImJhY2tncm91bmQtZGFyay01LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazZcIl0gPSBcImJhY2tncm91bmQtZGFyay02LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazdcIl0gPSBcImJhY2tncm91bmQtZGFyay03LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazhcIl0gPSBcImJhY2tncm91bmQtZGFyay04LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazlcIl0gPSBcImJhY2tncm91bmQtZGFyay05LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFya1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQwXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDFcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTBcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDExXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTExLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxMlwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTNcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDE0XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTE0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxNVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xNS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTZcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTYucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDE3XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTE3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxOFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xOC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTlcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDJcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjBcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDIxXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTIxLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyMlwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjNcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDI0XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTI0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyNVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yNS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjZcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjYucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDI3XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTI3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyOFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yOC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjlcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDNcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0NFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC00LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQ1XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDZcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtNi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0N1wiXSA9IFwiYmFja2dyb3VuZC1saWdodC03LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQ4XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDlcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtOS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDFcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxMFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxMVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxMlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxM1wiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxNFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxNVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxNlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTYucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxN1wiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxOFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxOVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjBcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjFcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIxLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjJcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjNcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjRcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjVcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI1LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjZcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI2LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjdcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjhcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI4LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjlcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsM1wiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDRcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWw1XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC01LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsNlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtNi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDdcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWw4XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC04LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsOVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtOS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyQXBwc1wiXSA9IFwiZXhwbG9yZXItYXBwcy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJDbWRzXCJdID0gXCJleHBsb3Jlci1jbWRzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJFeHBsb3JlckRpclwiXSA9IFwiZXhwbG9yZXItZGlyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJFeHBsb3JlckV4ZWNcIl0gPSBcImV4cGxvcmVyLWV4ZWMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyRmlsZVwiXSA9IFwiZXhwbG9yZXItZmlsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJJbWFnZVwiXSA9IFwiZXhwbG9yZXItaW1hZ2UucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyTW92aWVcIl0gPSBcImV4cGxvcmVyLW1vdmllLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJFeHBsb3Jlck11c2ljXCJdID0gXCJleHBsb3Jlci1tdXNpYy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJaaXBwZWRcIl0gPSBcImV4cGxvcmVyLXppcHBlZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNvZ1wiXSA9IFwiZmFjZS1jb2cuc3ZnXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZyYW1lQ2xvc2VcIl0gPSBcImZyYW1lLWNsb3NlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGcmFtZU1heGltaXplXCJdID0gXCJmcmFtZS1tYXhpbWl6ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRnJhbWVNZW51XCJdID0gXCJmcmFtZS1tZW51LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGcmFtZU1pbmltaXplXCJdID0gXCJmcmFtZS1taW5pbWl6ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRnJhbWVSZXNpemVcIl0gPSBcImZyYW1lLXJlc2l6ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRnJhbWVTdGF0dXNFcnJvclwiXSA9IFwiZnJhbWUtc3RhdHVzLWVycm9yLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGcmFtZVN0YXR1c0luZm9cIl0gPSBcImZyYW1lLXN0YXR1cy1pbmZvLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJMb2dpbktleVwiXSA9IFwibG9naW4ta2V5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJNZW51RGV2dG9vbHNcIl0gPSBcIm1lbnUtZGV2dG9vbHMuaWNvXCI7XHJcbiAgICBRaW5Bc3NldFtcIlBvcHBpbnNcIl0gPSBcInBvcHBpbnMudHRmXCI7XHJcbiAgICBRaW5Bc3NldFtcIlFpbnBlbFwiXSA9IFwicWlucGVsLnBuZ1wiO1xyXG59KShRaW5Bc3NldCA9IGV4cG9ydHMuUWluQXNzZXQgfHwgKGV4cG9ydHMuUWluQXNzZXQgPSB7fSkpO1xyXG5mdW5jdGlvbiBxaW5Bc3NldFVybChhc3NldCkge1xyXG4gICAgcmV0dXJuIFwiL3J1bi9hcHAvcWlucGVsLWFwcC9hc3NldHMvXCIgKyBhc3NldDtcclxufVxyXG5leHBvcnRzLnFpbkFzc2V0VXJsID0gcWluQXNzZXRVcmw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1hc3NldHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5CYXNlID0gdm9pZCAwO1xyXG52YXIgcWlucGVsID0gd2luZG93LmZyYW1lRWxlbWVudC5xaW5wZWw7XHJcbnZhciBRaW5CYXNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFFpbkJhc2UoKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlUGFyZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmJhc2VDaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmFzZURpc3BsYXkgPSBcImluaXRpYWxcIjtcclxuICAgICAgICB0aGlzLmJhc2VWaXNpYmlsaXR5ID0gXCJpbml0aWFsXCI7XHJcbiAgICB9XHJcbiAgICBRaW5CYXNlLnByb3RvdHlwZS5pbnN0YWxsID0gZnVuY3Rpb24gKG9uKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlUGFyZW50ID0gb247XHJcbiAgICAgICAgdGhpcy5iYXNlUGFyZW50LmFwcGVuZCh0aGlzKTtcclxuICAgIH07XHJcbiAgICBRaW5CYXNlLnByb3RvdHlwZS51bkluc3RhbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlUGFyZW50LnJlbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgICBRaW5CYXNlLnByb3RvdHlwZS5yZUluc3RhbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlUGFyZW50LmFwcGVuZCh0aGlzKTtcclxuICAgIH07XHJcbiAgICBRaW5CYXNlLnByb3RvdHlwZS51bkRpc3BsYXkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0TWFpbigpLnN0eWxlLmRpc3BsYXkgIT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZURpc3BsYXkgPSB0aGlzLmdldE1haW4oKS5zdHlsZS5kaXNwbGF5O1xyXG4gICAgICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFFpbkJhc2UucHJvdG90eXBlLnJlRGlzcGxheSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS5kaXNwbGF5ID0gdGhpcy5iYXNlRGlzcGxheTtcclxuICAgIH07XHJcbiAgICBRaW5CYXNlLnByb3RvdHlwZS51blZpc2libGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0TWFpbigpLnN0eWxlLmRpc3BsYXkgIT09IFwiaGlkZGVuXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlVmlzaWJpbGl0eSA9IHRoaXMuZ2V0TWFpbigpLnN0eWxlLnZpc2liaWxpdHk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBRaW5CYXNlLnByb3RvdHlwZS5yZVZpc2libGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUudmlzaWJpbGl0eSA9IHRoaXMuYmFzZVZpc2liaWxpdHk7XHJcbiAgICB9O1xyXG4gICAgUWluQmFzZS5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlQ2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgICAgICAgdGhpcy5nZXRNYWluKCkuYXBwZW5kQ2hpbGQoY2hpbGQuZ2V0TWFpbigpKTtcclxuICAgIH07XHJcbiAgICBRaW5CYXNlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmJhc2VDaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VDaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdldE1haW4oKS5yZW1vdmVDaGlsZChjaGlsZC5nZXRNYWluKCkpO1xyXG4gICAgfTtcclxuICAgIFFpbkJhc2UucHJvdG90eXBlLmNoaWxkcmVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VDaGlsZHJlbjtcclxuICAgIH07XHJcbiAgICBRaW5CYXNlLnByb3RvdHlwZS5hZGRBY3Rpb24gPSBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsLnV0aWwuYWRkQWN0aW9uKHRoaXMuZ2V0TWFpbigpLCBhY3Rpb24pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBRaW5CYXNlO1xyXG59KCkpO1xyXG5leHBvcnRzLlFpbkJhc2UgPSBRaW5CYXNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tYmFzZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5CdXR0b24gPSB2b2lkIDA7XHJcbnZhciBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XHJcbnZhciBxaW5fYnV0dG9uX3N0eWxlc18xID0gcmVxdWlyZShcIi4vc3R5bGVzL3Fpbi1idXR0b24tc3R5bGVzXCIpO1xyXG52YXIgUWluQnV0dG9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhRaW5CdXR0b24sIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBRaW5CdXR0b24oaWNvbiwgbGFiZWwpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgX3RoaXMucWluSWNvbiA9IG51bGw7XHJcbiAgICAgICAgX3RoaXMucWluTGFiZWwgPSBudWxsO1xyXG4gICAgICAgIHFpbl9idXR0b25fc3R5bGVzXzEuZGVmYXVsdC5hcHBseU9uQnV0dG9uKF90aGlzLmJ1dHRvbik7XHJcbiAgICAgICAgaWYgKGljb24pIHtcclxuICAgICAgICAgICAgX3RoaXMucWluSWNvbiA9IGljb247XHJcbiAgICAgICAgICAgIF90aGlzLnFpbkljb24uaW5zdGFsbChfdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsYWJlbCkge1xyXG4gICAgICAgICAgICBfdGhpcy5xaW5MYWJlbCA9IGxhYmVsO1xyXG4gICAgICAgICAgICBfdGhpcy5xaW5MYWJlbC5pbnN0YWxsKF90aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgUWluQnV0dG9uLnByb3RvdHlwZS5nZXRNYWluID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJ1dHRvbjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUWluQnV0dG9uO1xyXG59KHFpbl9iYXNlXzEuUWluQmFzZSkpO1xyXG5leHBvcnRzLlFpbkJ1dHRvbiA9IFFpbkJ1dHRvbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWJ1dHRvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5DaGVjayA9IHZvaWQgMDtcclxudmFyIHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcclxudmFyIFFpbkNoZWNrID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhRaW5DaGVjaywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFFpbkNoZWNrKHRpdGxlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5pbnB1dENoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIF90aGlzLmlucHV0Q2hlY2sudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICBpZiAodGl0bGUpIHtcclxuICAgICAgICAgICAgX3RoaXMuaW5wdXRDaGVjay5pbm5lclRleHQgPSB0aXRsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgUWluQ2hlY2sucHJvdG90eXBlLmdldE1haW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRDaGVjaztcclxuICAgIH07XHJcbiAgICBRaW5DaGVjay5wcm90b3R5cGUuZ2V0RGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dENoZWNrLmNoZWNrZWQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFFpbkNoZWNrO1xyXG59KHFpbl9lZGl0XzEuUWluRWRpdCkpO1xyXG5leHBvcnRzLlFpbkNoZWNrID0gUWluQ2hlY2s7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1jaGVjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5DaG9vc2VyID0gdm9pZCAwO1xyXG52YXIgcWlucGVsID0gd2luZG93LmZyYW1lRWxlbWVudC5xaW5wZWw7XHJcbnZhciBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XHJcbnZhciBxaW5fZXhwbG9yZXJfMSA9IHJlcXVpcmUoXCIuL3Fpbi1leHBsb3JlclwiKTtcclxudmFyIHFpbl9jaG9vc2VyX3N0eWxlc18xID0gcmVxdWlyZShcIi4vc3R5bGVzL3Fpbi1jaG9vc2VyLXN0eWxlc1wiKTtcclxudmFyIHFpbl91dGlsc18xID0gcmVxdWlyZShcIi4vcWluLXV0aWxzXCIpO1xyXG52YXIgUWluQ2hvb3NlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUWluQ2hvb3NlciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFFpbkNob29zZXIobmF0dXJlLCBvcGVyYXRpb24sIGRlc2NyaXB0b3JzKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5kaXZCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBfdGhpcy5xaW5FeHBsb3JlciA9IG5ldyBxaW5fZXhwbG9yZXJfMS5RaW5FeHBsb3JlcigpO1xyXG4gICAgICAgIF90aGlzLmRpdkJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgX3RoaXMuaW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIF90aGlzLnNlbGVjdFR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgICAgIF90aGlzLm5hdHVyZSA9IG5hdHVyZSA/IG5hdHVyZSA6IHFpbl91dGlsc18xLlFpbkZpbGVzTmF0dXJlLkJPVEg7XHJcbiAgICAgICAgX3RoaXMub3BlcmF0aW9uID0gb3BlcmF0aW9uID8gb3BlcmF0aW9uIDogcWluX3V0aWxzXzEuUWluRmlsZXNPcGVyYXRpb24uT1BFTjtcclxuICAgICAgICBfdGhpcy5kZXNjcmlwdG9ycyA9IGRlc2NyaXB0b3JzID8gZGVzY3JpcHRvcnMgOiBbXTtcclxuICAgICAgICBfdGhpcy5pbml0Qm9keSgpO1xyXG4gICAgICAgIF90aGlzLmluaXRCb3R0b20oKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBRaW5DaG9vc2VyLnByb3RvdHlwZS5pbml0Qm9keSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBxaW5fY2hvb3Nlcl9zdHlsZXNfMS5kZWZhdWx0LmFwcGx5T25EaXZCb2R5KHRoaXMuZGl2Qm9keSk7XHJcbiAgICAgICAgdGhpcy5xaW5FeHBsb3Jlci5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucWluRXhwbG9yZXIuc2V0TmF0dXJlKHRoaXMubmF0dXJlKTtcclxuICAgICAgICB0aGlzLmRpdkJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kaXZCb3R0b20pO1xyXG4gICAgfTtcclxuICAgIFFpbkNob29zZXIucHJvdG90eXBlLmluaXRCb3R0b20gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcWluX2Nob29zZXJfc3R5bGVzXzEuZGVmYXVsdC5hcHBseU9uRGl2Qm90dG9tKHRoaXMuZGl2Qm90dG9tKTtcclxuICAgICAgICB0aGlzLmluaXRJbnB1dCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdFNlbGVjdCgpO1xyXG4gICAgfTtcclxuICAgIFFpbkNob29zZXIucHJvdG90eXBlLmluaXRJbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHFpbl9jaG9vc2VyX3N0eWxlc18xLmRlZmF1bHQuYXBwbHlPbklucHV0TmFtZSh0aGlzLmlucHV0TmFtZSk7XHJcbiAgICAgICAgdGhpcy5kaXZCb3R0b20uYXBwZW5kQ2hpbGQodGhpcy5pbnB1dE5hbWUpO1xyXG4gICAgICAgIHFpbnBlbC51dGlsLmFkZEFjdGlvbih0aGlzLmlucHV0TmFtZSwgZnVuY3Rpb24gKHFpbkV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5mcm9tVHlwaW5nICYmIHFpbkV2ZW50LmlzRW50ZXIpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnFpbkV4cGxvcmVyLmxvYWQoX3RoaXMuaW5wdXROYW1lLnZhbHVlLCBmdW5jdGlvbiAobG9hZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaW5wdXROYW1lLnZhbHVlID0gbG9hZGVkO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBxaW5FdmVudC5zdG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBRaW5DaG9vc2VyLnByb3RvdHlwZS5pbml0U2VsZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRlc2NyaXB0b3JzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHZhciBvcHRpb25BbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgICAgICBvcHRpb25BbGwudGV4dCA9IFwiQWxsIEZpbGVzICgqLiopXCI7XHJcbiAgICAgICAgICAgIG9wdGlvbkFsbC52YWx1ZSA9IFwiKlwiO1xyXG4gICAgICAgICAgICBvcHRpb25BbGwuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdFR5cGUuYXBwZW5kQ2hpbGQob3B0aW9uQWxsKTtcclxuICAgICAgICAgICAgdGhpcy5xaW5FeHBsb3Jlci5zZXRFeHRlbnNpb25zKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmRlc2NyaXB0b3JzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSB0aGlzLmRlc2NyaXB0b3JzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSBkZXNjcmlwdG9yLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gZGVzY3JpcHRvci5leHRlbnNpb25zLmpvaW4oXCI7XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VHlwZS5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucWluRXhwbG9yZXIuc2V0RXh0ZW5zaW9ucyh0aGlzLmRlc2NyaXB0b3JzWzBdLmV4dGVuc2lvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBxaW5fY2hvb3Nlcl9zdHlsZXNfMS5kZWZhdWx0LmFwcGx5T25TZWxlY3RUeXBlKHRoaXMuc2VsZWN0VHlwZSk7XHJcbiAgICAgICAgdGhpcy5kaXZCb3R0b20uYXBwZW5kQ2hpbGQodGhpcy5zZWxlY3RUeXBlKTtcclxuICAgIH07XHJcbiAgICBRaW5DaG9vc2VyLnByb3RvdHlwZS5nZXRNYWluID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpdkJvZHk7XHJcbiAgICB9O1xyXG4gICAgUWluQ2hvb3Nlci5wcm90b3R5cGUuZ2V0RGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBRaW5DaG9vc2VyO1xyXG59KHFpbl9lZGl0XzEuUWluRWRpdCkpO1xyXG5leHBvcnRzLlFpbkNob29zZXIgPSBRaW5DaG9vc2VyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tY2hvb3Nlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Db2x1bW4gPSB2b2lkIDA7XHJcbnZhciBxaW5wZWwgPSB3aW5kb3cuZnJhbWVFbGVtZW50LnFpbnBlbDtcclxudmFyIHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcclxudmFyIHFpbl9jb2x1bW5fc3R5bGVzXzEgPSByZXF1aXJlKFwiLi9zdHlsZXMvcWluLWNvbHVtbi1zdHlsZXNcIik7XHJcbnZhciBRaW5Db2x1bW4gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFFpbkNvbHVtbiwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFFpbkNvbHVtbigpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmRpdlBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBfdGhpcy5pbml0UGFuZWwoKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBRaW5Db2x1bW4ucHJvdG90eXBlLmluaXRQYW5lbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBxaW5fY29sdW1uX3N0eWxlc18xLmRlZmF1bHQuYXBwbHlPblBhbmVsKHRoaXMuZGl2UGFuZWwpO1xyXG4gICAgfTtcclxuICAgIFFpbkNvbHVtbi5wcm90b3R5cGUucHV0QXNCb2R5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kaXZQYW5lbCk7XHJcbiAgICAgICAgcWlucGVsLnV0aWwuYXBwbHlTdHlsZUFzQm9keSh0aGlzLmRpdlBhbmVsKTtcclxuICAgIH07XHJcbiAgICBRaW5Db2x1bW4ucHJvdG90eXBlLmdldE1haW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGl2UGFuZWw7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFFpbkNvbHVtbjtcclxufShxaW5fYmFzZV8xLlFpbkJhc2UpKTtcclxuZXhwb3J0cy5RaW5Db2x1bW4gPSBRaW5Db2x1bW47XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1jb2x1bW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluRWRpdCA9IHZvaWQgMDtcclxudmFyIHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcclxudmFyIFFpbkVkaXQgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFFpbkVkaXQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBRaW5FZGl0KCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBRaW5FZGl0O1xyXG59KHFpbl9iYXNlXzEuUWluQmFzZSkpO1xyXG5leHBvcnRzLlFpbkVkaXQgPSBRaW5FZGl0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tZWRpdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5FeHBsb3JlciA9IHZvaWQgMDtcclxudmFyIHFpbnBlbCA9IHdpbmRvdy5mcmFtZUVsZW1lbnQucWlucGVsO1xyXG52YXIgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG52YXIgcWluX2V4cGxvcmVyX3N0eWxlc18xID0gcmVxdWlyZShcIi4vc3R5bGVzL3Fpbi1leHBsb3Jlci1zdHlsZXNcIik7XHJcbnZhciBxaW5fdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi11dGlsc1wiKTtcclxuZnVuY3Rpb24gZ2V0SWNvbk5hbWUoZnJvbUV4dGVuc2lvbikge1xyXG4gICAgdmFyIHJlc3VsdCA9IFwiZXhwbG9yZXItZmlsZS5wbmdcIjtcclxuICAgIGlmIChxaW5wZWwudXRpbC5pc0ZpbGVBcHAoZnJvbUV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLWFwcHMucG5nXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChxaW5wZWwudXRpbC5pc0ZpbGVDbWQoZnJvbUV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLWNtZHMucG5nXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChxaW5wZWwudXRpbC5pc0ZpbGVFeGVjKGZyb21FeHRlbnNpb24pKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci1leGVjLnBuZ1wiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocWlucGVsLnV0aWwuaXNGaWxlSW1hZ2UoZnJvbUV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLWltYWdlLnBuZ1wiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocWlucGVsLnV0aWwuaXNGaWxlVmVjdG9yKGZyb21FeHRlbnNpb24pKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci1pbWFnZS5wbmdcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHFpbnBlbC51dGlsLmlzRmlsZU11c2ljKGZyb21FeHRlbnNpb24pKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci1tdXNpYy5wbmdcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHFpbnBlbC51dGlsLmlzRmlsZU1vdmllKGZyb21FeHRlbnNpb24pKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci1tb3ZpZS5wbmdcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHFpbnBlbC51dGlsLmlzRmlsZVppcHBlZChmcm9tRXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItemlwcGVkLnBuZ1wiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG52YXIgSXRlbSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBJdGVtKGZpbGVOYW1lLCBpY29uTmFtZSkge1xyXG4gICAgICAgIHRoaXMuZGl2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5kaXZJdGVtQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5zcGFuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHRoaXMuaW1nSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgdGhpcy5zcGFuVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZpbGVOYW1lID0gZmlsZU5hbWU7XHJcbiAgICAgICAgdGhpcy5pY29uTmFtZSA9IGljb25OYW1lO1xyXG4gICAgICAgIHRoaXMuaW5pdEl0ZW0oKTtcclxuICAgIH1cclxuICAgIEl0ZW0ucHJvdG90eXBlLmluaXRJdGVtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcWluX2V4cGxvcmVyX3N0eWxlc18xLmRlZmF1bHQuYXBwbHlPbkRpdkl0ZW0odGhpcy5kaXZJdGVtKTtcclxuICAgICAgICB0aGlzLmRpdkl0ZW0udGFiSW5kZXggPSAwO1xyXG4gICAgICAgIHFpbl9leHBsb3Jlcl9zdHlsZXNfMS5kZWZhdWx0LmFwcGx5T25EaXZJdGVtQm9keSh0aGlzLmRpdkl0ZW1Cb2R5KTtcclxuICAgICAgICB0aGlzLmRpdkl0ZW0uYXBwZW5kQ2hpbGQodGhpcy5kaXZJdGVtQm9keSk7XHJcbiAgICAgICAgcWluX2V4cGxvcmVyX3N0eWxlc18xLmRlZmF1bHQuYXBwbHlPblNwYW5JY29uKHRoaXMuc3Bhbkljb24pO1xyXG4gICAgICAgIHRoaXMuZGl2SXRlbUJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zcGFuSWNvbik7XHJcbiAgICAgICAgdGhpcy5pbWdJY29uLnNyYyA9IFwiL3J1bi9hcHAvcWlucGVsLWFwcC9hc3NldHMvXCIgKyB0aGlzLmljb25OYW1lO1xyXG4gICAgICAgIHRoaXMuc3Bhbkljb24uYXBwZW5kQ2hpbGQodGhpcy5pbWdJY29uKTtcclxuICAgICAgICB0aGlzLnNwYW5UZXh0LmlubmVyVGV4dCA9IHRoaXMuZmlsZU5hbWU7XHJcbiAgICAgICAgcWluX2V4cGxvcmVyX3N0eWxlc18xLmRlZmF1bHQuYXBwbHlPblNwYW5UZXh0KHRoaXMuc3BhblRleHQpO1xyXG4gICAgICAgIHRoaXMuZGl2SXRlbUJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zcGFuVGV4dCk7XHJcbiAgICAgICAgcWlucGVsLnV0aWwuYWRkQWN0aW9uKHRoaXMuZGl2SXRlbSwgZnVuY3Rpb24gKHFpbkV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5mcm9tUG9pbnRpbmdcclxuICAgICAgICAgICAgICAgIHx8IChxaW5FdmVudC5mcm9tVHlwaW5nICYmIHFpbkV2ZW50LmlzU3BhY2UpKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5kaXZJdGVtLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy50b2dnbGUoKTtcclxuICAgICAgICAgICAgICAgIHFpbkV2ZW50LnN0b3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEl0ZW0ucHJvdG90eXBlLmluc3RhbGwgPSBmdW5jdGlvbiAob24pIHtcclxuICAgICAgICBvbi5hcHBlbmRDaGlsZCh0aGlzLmRpdkl0ZW0pO1xyXG4gICAgfTtcclxuICAgIEl0ZW0ucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBxaW5fZXhwbG9yZXJfc3R5bGVzXzEuZGVmYXVsdC5hcHBseU9uRGl2U2VsZWN0KHRoaXMuZGl2SXRlbSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgSXRlbS5wcm90b3R5cGUudW5zZWxlY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcWluX2V4cGxvcmVyX3N0eWxlc18xLmRlZmF1bHQuYXBwbHlPbkRpdlVuU2VsZWN0KHRoaXMuZGl2SXRlbSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIEl0ZW0ucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5zZWxlY3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSXRlbS5wcm90b3R5cGUuZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWxlTmFtZTtcclxuICAgIH07XHJcbiAgICBJdGVtLnByb3RvdHlwZS5pc1NlbGVjdGVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBJdGVtO1xyXG59KCkpO1xyXG52YXIgUWluRXhwbG9yZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFFpbkV4cGxvcmVyLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUWluRXhwbG9yZXIobmF0dXJlLCBleHRlbnNpb25zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5kaXZCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBfdGhpcy5hY3R1YWxGb2xkZXIgPSBcIlwiO1xyXG4gICAgICAgIF90aGlzLnNlcnZlckZvbGRlciA9IFwiXCI7XHJcbiAgICAgICAgX3RoaXMuaXRlbXMgPSBbXTtcclxuICAgICAgICBfdGhpcy5uYXR1cmUgPSBuYXR1cmUgPyBuYXR1cmUgOiBxaW5fdXRpbHNfMS5RaW5GaWxlc05hdHVyZS5CT1RIO1xyXG4gICAgICAgIF90aGlzLmV4dGVuc2lvbnMgPSBleHRlbnNpb25zID8gZXh0ZW5zaW9ucyA6IFtdO1xyXG4gICAgICAgIF90aGlzLmluaXRCb2R5KCk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgUWluRXhwbG9yZXIucHJvdG90eXBlLmluaXRCb2R5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcWluX2V4cGxvcmVyX3N0eWxlc18xLmRlZmF1bHQuYXBwbHlPbkRpdkJvZHkodGhpcy5kaXZCb2R5KTtcclxuICAgICAgICBxaW5wZWwudXRpbC5hZGRBY3Rpb24odGhpcy5kaXZCb2R5LCBmdW5jdGlvbiAocWUpIHtcclxuICAgICAgICAgICAgaWYgKHFlLmZyb21Qb2ludGluZykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2xlYW5TZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHFpbnBlbC51dGlsLmRpc2FibGVTZWxlY3Rpb24odGhpcy5kaXZCb2R5KTtcclxuICAgIH07XHJcbiAgICBRaW5FeHBsb3Jlci5wcm90b3R5cGUuZ2V0TWFpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXZCb2R5O1xyXG4gICAgfTtcclxuICAgIFFpbkV4cGxvcmVyLnByb3RvdHlwZS5nZXREYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuICAgIFFpbkV4cGxvcmVyLnByb3RvdHlwZS5zZXROYXR1cmUgPSBmdW5jdGlvbiAobmF0dXJlKSB7XHJcbiAgICAgICAgdGhpcy5uYXR1cmUgPSBuYXR1cmU7XHJcbiAgICB9O1xyXG4gICAgUWluRXhwbG9yZXIucHJvdG90eXBlLnNldEV4dGVuc2lvbnMgPSBmdW5jdGlvbiAoZXh0ZW5zaW9ucykge1xyXG4gICAgICAgIHRoaXMuZXh0ZW5zaW9ucyA9IGV4dGVuc2lvbnM7XHJcbiAgICB9O1xyXG4gICAgUWluRXhwbG9yZXIucHJvdG90eXBlLmdldEFjdHVhbEZvbGRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hY3R1YWxGb2xkZXI7XHJcbiAgICB9O1xyXG4gICAgUWluRXhwbG9yZXIucHJvdG90eXBlLmdldFNlcnZlckZvbGRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2ZXJGb2xkZXI7XHJcbiAgICB9O1xyXG4gICAgUWluRXhwbG9yZXIucHJvdG90eXBlLm5ld0RpciA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uZXdJdGVtKG5hbWUsIFwiZXhwbG9yZXItZGlyLnBuZ1wiKTtcclxuICAgIH07XHJcbiAgICBRaW5FeHBsb3Jlci5wcm90b3R5cGUubmV3RmlsZSA9IGZ1bmN0aW9uIChuYW1lLCBleHRlbnNpb24pIHtcclxuICAgICAgICB0aGlzLm5ld0l0ZW0obmFtZSwgZ2V0SWNvbk5hbWUoZXh0ZW5zaW9uKSk7XHJcbiAgICB9O1xyXG4gICAgUWluRXhwbG9yZXIucHJvdG90eXBlLm5ld0l0ZW0gPSBmdW5jdGlvbiAobmFtZSwgaWNvbikge1xyXG4gICAgICAgIHZhciBpdGVtID0gbmV3IEl0ZW0obmFtZSwgaWNvbik7XHJcbiAgICAgICAgaXRlbS5pbnN0YWxsKHRoaXMuZGl2Qm9keSk7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgfTtcclxuICAgIFFpbkV4cGxvcmVyLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKGZvbGRlciwgb25Mb2FkKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNsZWFuKCk7XHJcbiAgICAgICAgcWlucGVsLnBvc3QoXCIvZGlyL2xpc3RcIiwgeyBwYXRoOiBmb2xkZXIgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBfdGhpcy5hY3R1YWxGb2xkZXIgPSBmb2xkZXI7XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBxaW5wZWwudXRpbC5nZXRUZXh0TGluZXMocmVzLmRhdGEpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpbmUgPSBfYVtfaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgbGluZVZhbHVlID0gbGluZS5zdWJzdHJpbmcoMyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWxpbmVWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGxpbmUuaW5kZXhPZihcIlA6IFwiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNlcnZlckZvbGRlciA9IGxpbmVWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob25Mb2FkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9hZChsaW5lVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxpbmUuaW5kZXhPZihcIkQ6IFwiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5uYXR1cmUgPT0gcWluX3V0aWxzXzEuUWluRmlsZXNOYXR1cmUuQk9USCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5uYXR1cmUgPT0gcWluX3V0aWxzXzEuUWluRmlsZXNOYXR1cmUuRElSRUNUT1JJRVMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubmV3RGlyKGxpbmVWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobGluZS5pbmRleE9mKFwiRjogXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLm5hdHVyZSA9PSBxaW5fdXRpbHNfMS5RaW5GaWxlc05hdHVyZS5CT1RIIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm5hdHVyZSA9PSBxaW5fdXRpbHNfMS5RaW5GaWxlc05hdHVyZS5GSUxFUykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh0ZW5zaW9uID0gcWlucGVsLnV0aWwuZ2V0RmlsZUV4dGVuc2lvbihsaW5lVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFzc2VkRXh0ZW5zaW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmV4dGVuc2lvbnMgJiYgX3RoaXMuZXh0ZW5zaW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzZWRFeHRlbnNpb24gPSBfdGhpcy5leHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXNzZWRFeHRlbnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm5ld0ZpbGUobGluZVZhbHVlLCBleHRlbnNpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgX3RoaXMuZGl2Qm9keS5pbm5lclRleHQgPSBxaW5wZWwudXRpbC5nZXRFcnJvck1lc3NhZ2UoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBRaW5FeHBsb3Jlci5wcm90b3R5cGUuY2xlYW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kaXZCb2R5LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYWN0dWFsRm9sZGVyID0gXCJcIjtcclxuICAgICAgICB0aGlzLnNlcnZlckZvbGRlciA9IFwiXCI7XHJcbiAgICB9O1xyXG4gICAgUWluRXhwbG9yZXIucHJvdG90eXBlLmNsZWFuU2VsZWN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLml0ZW1zOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IF9hW19pXTtcclxuICAgICAgICAgICAgaXRlbS51bnNlbGVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gUWluRXhwbG9yZXI7XHJcbn0ocWluX2VkaXRfMS5RaW5FZGl0KSk7XHJcbmV4cG9ydHMuUWluRXhwbG9yZXIgPSBRaW5FeHBsb3JlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWV4cGxvcmVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkZpZWxkID0gdm9pZCAwO1xyXG52YXIgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG52YXIgcWluX2NvbHVtbl8xID0gcmVxdWlyZShcIi4vcWluLWNvbHVtblwiKTtcclxudmFyIHFpbl9sYWJlbF8xID0gcmVxdWlyZShcIi4vcWluLWxhYmVsXCIpO1xyXG52YXIgUWluRmllbGQgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFFpbkZpZWxkLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUWluRmllbGQodGl0bGUsIGVkaXQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnFpbkZpZWxkID0gbmV3IHFpbl9jb2x1bW5fMS5RaW5Db2x1bW4oKTtcclxuICAgICAgICBfdGhpcy5xaW5MYWJlbCA9IG5ldyBxaW5fbGFiZWxfMS5RaW5MYWJlbCgpO1xyXG4gICAgICAgIF90aGlzLnFpbkVkaXQgPSBudWxsO1xyXG4gICAgICAgIF90aGlzLnFpbkxhYmVsLnNldFRpdGxlKHRpdGxlKTtcclxuICAgICAgICBfdGhpcy5xaW5MYWJlbC5pbnN0YWxsKF90aGlzLnFpbkZpZWxkKTtcclxuICAgICAgICBfdGhpcy5xaW5FZGl0ID0gZWRpdDtcclxuICAgICAgICBfdGhpcy5xaW5FZGl0Lmluc3RhbGwoX3RoaXMucWluRmllbGQpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFFpbkZpZWxkLnByb3RvdHlwZS5nZXRNYWluID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnFpbkZpZWxkLmdldE1haW4oKTtcclxuICAgIH07XHJcbiAgICBRaW5GaWVsZC5wcm90b3R5cGUuZ2V0RGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5xaW5FZGl0LmdldERhdGEoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUWluRmllbGQ7XHJcbn0ocWluX2VkaXRfMS5RaW5FZGl0KSk7XHJcbmV4cG9ydHMuUWluRmllbGQgPSBRaW5GaWVsZDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWZpZWxkLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkljb24gPSB2b2lkIDA7XHJcbnZhciBxaW5wZWwgPSB3aW5kb3cuZnJhbWVFbGVtZW50LnFpbnBlbDtcclxudmFyIHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcclxudmFyIHFpbl9hc3NldHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XHJcbnZhciBxaW5fdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi11dGlsc1wiKTtcclxudmFyIFFpbkljb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFFpbkljb24sIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBRaW5JY29uKGFzc2V0LCBzaXplLCBmaWxsKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5lbE1vZGVsID0gbnVsbDtcclxuICAgICAgICB2YXIgYXNzZXRVcmwgPSAoMCwgcWluX2Fzc2V0c18xLnFpbkFzc2V0VXJsKShhc3NldCk7XHJcbiAgICAgICAgdmFyIGV4dGVuc2lvbiA9IHFpbnBlbC51dGlsLmdldEZpbGVFeHRlbnNpb24oYXNzZXRVcmwpO1xyXG4gICAgICAgIGlmIChxaW5wZWwudXRpbC5pc0ZpbGVWZWN0b3IoZXh0ZW5zaW9uKSkge1xyXG4gICAgICAgICAgICBfdGhpcy5pbml0VmVjdG9yKGFzc2V0VXJsLCBzaXplLCBmaWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIF90aGlzLmluaXRJbWFnZShhc3NldFVybCwgc2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFFpbkljb24ucHJvdG90eXBlLmluaXRWZWN0b3IgPSBmdW5jdGlvbiAoYXNzZXRVcmwsIHNpemUsIGZpbGwpIHtcclxuICAgICAgICB2YXIgb2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9iamVjdFwiKTtcclxuICAgICAgICBvYmouZGF0YSA9IGFzc2V0VXJsO1xyXG4gICAgICAgIG9iai50eXBlID0gXCJpbWFnZS9zdmcreG1sXCI7XHJcbiAgICAgICAgdGhpcy5hcHBseVNpemUob2JqLCBzaXplKTtcclxuICAgICAgICBpZiAoZmlsbCkge1xyXG4gICAgICAgICAgICBvYmouc3R5bGUuZmlsbCA9IGZpbGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZWxNb2RlbCA9IG9iajtcclxuICAgIH07XHJcbiAgICBRaW5JY29uLnByb3RvdHlwZS5pbml0SW1hZ2UgPSBmdW5jdGlvbiAoYXNzZXRVcmwsIHNpemUpIHtcclxuICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBpbWcuc3JjID0gYXNzZXRVcmw7XHJcbiAgICAgICAgdGhpcy5hcHBseVNpemUoaW1nLCBzaXplKTtcclxuICAgICAgICB0aGlzLmVsTW9kZWwgPSBpbWc7XHJcbiAgICB9O1xyXG4gICAgUWluSWNvbi5wcm90b3R5cGUuYXBwbHlTaXplID0gZnVuY3Rpb24gKGVsLCBzaXplKSB7XHJcbiAgICAgICAgaWYgKHNpemUpIHtcclxuICAgICAgICAgICAgaWYgKHNpemUgaW5zdGFuY2VvZiBxaW5fdXRpbHNfMS5RaW5EaW1lbnNpb24pIHtcclxuICAgICAgICAgICAgICAgIGVsLnN0eWxlLndpZHRoID0gc2l6ZS53aWR0aCArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IHNpemUuaGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpbSA9IHFpbnBlbC51dGlsLmdldEljb25EaW1lbnNpb24oc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICBlbC5zdHlsZS53aWR0aCA9IGRpbS53aWR0aCArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IGRpbS5oZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUWluSWNvbi5wcm90b3R5cGUuZ2V0TWFpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbE1vZGVsO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBRaW5JY29uO1xyXG59KHFpbl9iYXNlXzEuUWluQmFzZSkpO1xyXG5leHBvcnRzLlFpbkljb24gPSBRaW5JY29uO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4taWNvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5MYWJlbCA9IHZvaWQgMDtcclxudmFyIHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcclxudmFyIFFpbkxhYmVsID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhRaW5MYWJlbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFFpbkxhYmVsKHRpdGxlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5zcGFuTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBpZiAodGl0bGUpIHtcclxuICAgICAgICAgICAgX3RoaXMuc3BhbkxhYmVsLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFFpbkxhYmVsLnByb3RvdHlwZS5nZXRNYWluID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwYW5MYWJlbDtcclxuICAgIH07XHJcbiAgICBRaW5MYWJlbC5wcm90b3R5cGUuc2V0VGl0bGUgPSBmdW5jdGlvbiAodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnNwYW5MYWJlbC50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgfTtcclxuICAgIFFpbkxhYmVsLnByb3RvdHlwZS5nZXRUaXRsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcGFuTGFiZWwudGV4dENvbnRlbnQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFFpbkxhYmVsO1xyXG59KHFpbl9iYXNlXzEuUWluQmFzZSkpO1xyXG5leHBvcnRzLlFpbkxhYmVsID0gUWluTGFiZWw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1sYWJlbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5MaW5lID0gdm9pZCAwO1xyXG52YXIgcWlucGVsID0gd2luZG93LmZyYW1lRWxlbWVudC5xaW5wZWw7XHJcbnZhciBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XHJcbnZhciBxaW5fbGluZV9zdHlsZXNfMSA9IHJlcXVpcmUoXCIuL3N0eWxlcy9xaW4tbGluZS1zdHlsZXNcIik7XHJcbnZhciBRaW5MaW5lID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhRaW5MaW5lLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUWluTGluZSgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmRpdlBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBfdGhpcy5pbml0UGFuZWwoKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBRaW5MaW5lLnByb3RvdHlwZS5pbml0UGFuZWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcWluX2xpbmVfc3R5bGVzXzEuZGVmYXVsdC5hcHBseU9uUGFuZWwodGhpcy5kaXZQYW5lbCk7XHJcbiAgICB9O1xyXG4gICAgUWluTGluZS5wcm90b3R5cGUucHV0QXNCb2R5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kaXZQYW5lbCk7XHJcbiAgICAgICAgcWlucGVsLnV0aWwuYXBwbHlTdHlsZUFzQm9keSh0aGlzLmRpdlBhbmVsKTtcclxuICAgIH07XHJcbiAgICBRaW5MaW5lLnByb3RvdHlwZS5nZXRNYWluID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpdlBhbmVsO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBRaW5MaW5lO1xyXG59KHFpbl9iYXNlXzEuUWluQmFzZSkpO1xyXG5leHBvcnRzLlFpbkxpbmUgPSBRaW5MaW5lO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tbGluZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5QYW5lbCA9IHZvaWQgMDtcclxudmFyIHFpbnBlbCA9IHdpbmRvdy5mcmFtZUVsZW1lbnQucWlucGVsO1xyXG52YXIgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xyXG52YXIgcWluX3BhbmVsX3N0eWxlc18xID0gcmVxdWlyZShcIi4vc3R5bGVzL3Fpbi1wYW5lbC1zdHlsZXNcIik7XHJcbnZhciBRaW5QYW5lbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUWluUGFuZWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBRaW5QYW5lbCgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmRpdlBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBfdGhpcy5pbml0UGFuZWwoKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBRaW5QYW5lbC5wcm90b3R5cGUuaW5pdFBhbmVsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHFpbl9wYW5lbF9zdHlsZXNfMS5kZWZhdWx0LmFwcGx5T25QYW5lbCh0aGlzLmRpdlBhbmVsKTtcclxuICAgIH07XHJcbiAgICBRaW5QYW5lbC5wcm90b3R5cGUucHV0QXNCb2R5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kaXZQYW5lbCk7XHJcbiAgICAgICAgcWlucGVsLnV0aWwuYXBwbHlTdHlsZUFzQm9keSh0aGlzLmRpdlBhbmVsKTtcclxuICAgIH07XHJcbiAgICBRaW5QYW5lbC5wcm90b3R5cGUuZ2V0TWFpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXZQYW5lbDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUWluUGFuZWw7XHJcbn0ocWluX2Jhc2VfMS5RaW5CYXNlKSk7XHJcbmV4cG9ydHMuUWluUGFuZWwgPSBRaW5QYW5lbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXBhbmVsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpblBhdGggPSB2b2lkIDA7XHJcbnZhciBxaW5fdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi11dGlsc1wiKTtcclxudmFyIHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcclxudmFyIHFpbl9saW5lXzEgPSByZXF1aXJlKFwiLi9xaW4tbGluZVwiKTtcclxudmFyIHFpbl9zdHJpbmdfMSA9IHJlcXVpcmUoXCIuL3Fpbi1zdHJpbmdcIik7XHJcbnZhciBxaW5fYnV0dG9uXzEgPSByZXF1aXJlKFwiLi9xaW4tYnV0dG9uXCIpO1xyXG52YXIgcWluX2Fzc2V0c18xID0gcmVxdWlyZShcIi4vcWluLWFzc2V0c1wiKTtcclxudmFyIHFpbl9pY29uXzEgPSByZXF1aXJlKFwiLi9xaW4taWNvblwiKTtcclxudmFyIFFpblBhdGggPSAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFFpblBhdGgsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBRaW5QYXRoKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucWluTGluZSA9IG5ldyBxaW5fbGluZV8xLlFpbkxpbmUoKTtcclxuICAgICAgICBfdGhpcy5xaW5QYXRoID0gbmV3IHFpbl9zdHJpbmdfMS5RaW5TdHJpbmcoKTtcclxuICAgICAgICBfdGhpcy5xaW5BY3Rpb24gPSBuZXcgcWluX2J1dHRvbl8xLlFpbkJ1dHRvbihuZXcgcWluX2ljb25fMS5RaW5JY29uKHFpbl9hc3NldHNfMS5RaW5Bc3NldC5GYWNlQ29nLCBxaW5fdXRpbHNfMS5RaW5HcmFuZGV1ci5TTUFMTCwgcWluX3V0aWxzXzEuUWluU3R5bGVzLkNvbG9yRm9udCkpO1xyXG4gICAgICAgIF90aGlzLnFpblBhdGguaW5zdGFsbChfdGhpcy5xaW5MaW5lKTtcclxuICAgICAgICBfdGhpcy5xaW5BY3Rpb24uaW5zdGFsbChfdGhpcy5xaW5MaW5lKTtcclxuICAgICAgICBfdGhpcy5xaW5BY3Rpb24uYWRkQWN0aW9uKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPSSFcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgUWluUGF0aC5wcm90b3R5cGUuZ2V0TWFpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5xaW5MaW5lLmdldE1haW4oKTtcclxuICAgIH07XHJcbiAgICBRaW5QYXRoLnByb3RvdHlwZS5nZXREYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnFpblBhdGguZ2V0RGF0YSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBRaW5QYXRoO1xyXG59KHFpbl9lZGl0XzEuUWluRWRpdCkpO1xyXG5leHBvcnRzLlFpblBhdGggPSBRaW5QYXRoO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5TdHJpbmcgPSB2b2lkIDA7XHJcbnZhciBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XHJcbnZhciBRaW5TdHJpbmcgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFFpblN0cmluZywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFFpblN0cmluZygpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmlucHV0U3RyaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIF90aGlzLmlucHV0U3RyaW5nLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBRaW5TdHJpbmcucHJvdG90eXBlLmdldE1haW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRTdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgUWluU3RyaW5nLnByb3RvdHlwZS5nZXREYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0U3RyaW5nLnZhbHVlO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBRaW5TdHJpbmc7XHJcbn0ocWluX2VkaXRfMS5RaW5FZGl0KSk7XHJcbmV4cG9ydHMuUWluU3RyaW5nID0gUWluU3RyaW5nO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tc3RyaW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluU3R5bGVzID0gZXhwb3J0cy5RaW5HcmFuZGV1ciA9IGV4cG9ydHMuUWluQm91bmRzID0gZXhwb3J0cy5RaW5EaW1lbnNpb24gPSBleHBvcnRzLlFpbkZpbGVzRGVzY3JpcHRvciA9IGV4cG9ydHMuUWluRmlsZXNPcGVyYXRpb24gPSBleHBvcnRzLlFpbkZpbGVzTmF0dXJlID0gdm9pZCAwO1xyXG52YXIgUWluRmlsZXNOYXR1cmU7XHJcbihmdW5jdGlvbiAoUWluRmlsZXNOYXR1cmUpIHtcclxuICAgIFFpbkZpbGVzTmF0dXJlW1wiRElSRUNUT1JJRVNcIl0gPSBcImRpcmVjdG9yaWVzXCI7XHJcbiAgICBRaW5GaWxlc05hdHVyZVtcIkZJTEVTXCJdID0gXCJmaWxlc1wiO1xyXG4gICAgUWluRmlsZXNOYXR1cmVbXCJCT1RIXCJdID0gXCJib3RoXCI7XHJcbn0pKFFpbkZpbGVzTmF0dXJlID0gZXhwb3J0cy5RaW5GaWxlc05hdHVyZSB8fCAoZXhwb3J0cy5RaW5GaWxlc05hdHVyZSA9IHt9KSk7XHJcbnZhciBRaW5GaWxlc09wZXJhdGlvbjtcclxuKGZ1bmN0aW9uIChRaW5GaWxlc09wZXJhdGlvbikge1xyXG4gICAgUWluRmlsZXNPcGVyYXRpb25bXCJPUEVOXCJdID0gXCJvcGVuXCI7XHJcbiAgICBRaW5GaWxlc09wZXJhdGlvbltcIlNBVkVcIl0gPSBcInNhdmVcIjtcclxufSkoUWluRmlsZXNPcGVyYXRpb24gPSBleHBvcnRzLlFpbkZpbGVzT3BlcmF0aW9uIHx8IChleHBvcnRzLlFpbkZpbGVzT3BlcmF0aW9uID0ge30pKTtcclxudmFyIFFpbkZpbGVzRGVzY3JpcHRvciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBRaW5GaWxlc0Rlc2NyaXB0b3IoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUWluRmlsZXNEZXNjcmlwdG9yO1xyXG59KCkpO1xyXG5leHBvcnRzLlFpbkZpbGVzRGVzY3JpcHRvciA9IFFpbkZpbGVzRGVzY3JpcHRvcjtcclxudmFyIFFpbkRpbWVuc2lvbiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBRaW5EaW1lbnNpb24oKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUWluRGltZW5zaW9uO1xyXG59KCkpO1xyXG5leHBvcnRzLlFpbkRpbWVuc2lvbiA9IFFpbkRpbWVuc2lvbjtcclxuO1xyXG52YXIgUWluQm91bmRzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFFpbkJvdW5kcygpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBRaW5Cb3VuZHM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUWluQm91bmRzID0gUWluQm91bmRzO1xyXG47XHJcbnZhciBRaW5HcmFuZGV1cjtcclxuKGZ1bmN0aW9uIChRaW5HcmFuZGV1cikge1xyXG4gICAgUWluR3JhbmRldXJbXCJTTUFMTFwiXSA9IFwic21hbGxcIjtcclxuICAgIFFpbkdyYW5kZXVyW1wiTUVESVVNXCJdID0gXCJtZWRpdW1cIjtcclxuICAgIFFpbkdyYW5kZXVyW1wiTEFSR0VcIl0gPSBcImxhcmdlXCI7XHJcbn0pKFFpbkdyYW5kZXVyID0gZXhwb3J0cy5RaW5HcmFuZGV1ciB8fCAoZXhwb3J0cy5RaW5HcmFuZGV1ciA9IHt9KSk7XHJcbnZhciBRaW5TdHlsZXM7XHJcbihmdW5jdGlvbiAoUWluU3R5bGVzKSB7XHJcbiAgICBRaW5TdHlsZXNbXCJDb2xvckJhY2tcIl0gPSBcIiNmZmY5ZWZcIjtcclxuICAgIFFpblN0eWxlc1tcIkNvbG9yRm9udFwiXSA9IFwiIzI3MDAzNlwiO1xyXG4gICAgUWluU3R5bGVzW1wiRm9udE5hbWVcIl0gPSBcIlBvcHBpbnNcIjtcclxuICAgIFFpblN0eWxlc1tcIkZvbnRTaXplXCJdID0gXCIxMnB4XCI7XHJcbn0pKFFpblN0eWxlcyA9IGV4cG9ydHMuUWluU3R5bGVzIHx8IChleHBvcnRzLlFpblN0eWxlcyA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi11dGlscy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgcWluX2NvbW1vbl9zdHlsZXNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1jb21tb24tc3R5bGVzXCIpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB7XHJcbiAgICBhcHBseU9uQnV0dG9uOiBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICBxaW5fY29tbW9uX3N0eWxlc18xLmRlZmF1bHQuYXBwbHlPbkVkaXQoZWwpO1xyXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBlbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcclxuICAgICAgICBlbC5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcclxuICAgIH1cclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWJ1dHRvbi1zdHlsZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHFpbl9jb21tb25fc3R5bGVzXzEgPSByZXF1aXJlKFwiLi9xaW4tY29tbW9uLXN0eWxlc1wiKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0ge1xyXG4gICAgYXBwbHlPbkRpdkJvZHk6IGZ1bmN0aW9uIChkaXZCb2R5KSB7XHJcbiAgICAgICAgZGl2Qm9keS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgZGl2Qm9keS5zdHlsZS5mbGV4RmxvdyA9IFwiY29sdW1uIG5vd3JhcFwiO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25EaXZCb3R0b206IGZ1bmN0aW9uIChkaXZCb3R0b20pIHtcclxuICAgICAgICBkaXZCb3R0b20uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIGRpdkJvdHRvbS5zdHlsZS5mbGV4RmxvdyA9IFwicm93IHdyYXBcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uSW5wdXROYW1lOiBmdW5jdGlvbiAoaW5wdXROYW1lKSB7XHJcbiAgICAgICAgcWluX2NvbW1vbl9zdHlsZXNfMS5kZWZhdWx0LmFwcGx5T25FZGl0KGlucHV0TmFtZSk7XHJcbiAgICAgICAgaW5wdXROYW1lLnN0eWxlLmZsZXggPSBcIjFcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uU2VsZWN0VHlwZTogZnVuY3Rpb24gKHNlbGVjdFR5cGUpIHtcclxuICAgICAgICBxaW5fY29tbW9uX3N0eWxlc18xLmRlZmF1bHQuYXBwbHlPbkVkaXQoc2VsZWN0VHlwZSk7XHJcbiAgICB9LFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tY2hvb3Nlci1zdHlsZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0ge1xyXG4gICAgYXBwbHlPblBhbmVsOiBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XHJcbiAgICAgICAgZWwuc3R5bGUuZmxleFdyYXAgPSBcIm5vd3JhcFwiO1xyXG4gICAgfSxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWNvbHVtbi1zdHlsZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0ge1xyXG4gICAgYXBwbHlPbkVkaXQ6IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIGVsLnN0eWxlLm1hcmdpbiA9IFwiMXB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUucGFkZGluZyA9IFwiM3B4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICMyNzAwMzZcIjtcclxuICAgICAgICBlbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjNweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmNvbG9yID0gXCIjMjcwMDM2XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmZmZmXCI7XHJcbiAgICAgICAgZWwuc3R5bGUuZm9udEZhbWlseSA9IFwiUG9wcGluc1wiO1xyXG4gICAgICAgIGVsLnN0eWxlLmZvbnRTaXplID0gXCIxNXB4XCI7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjYWUwMDAwXCI7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2RmZWVmZlwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgZWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIzI3MDAzNlwiO1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmZmZcIjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWNvbW1vbi1zdHlsZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHFpbl9jb21tb25fc3R5bGVzXzEgPSByZXF1aXJlKFwiLi9xaW4tY29tbW9uLXN0eWxlc1wiKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0ge1xyXG4gICAgYXBwbHlPbkRpdkJvZHk6IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIHFpbl9jb21tb25fc3R5bGVzXzEuZGVmYXVsdC5hcHBseU9uRWRpdChlbCk7XHJcbiAgICAgICAgZWwuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxuICAgICAgICBlbC5zdHlsZS5taW5IZWlnaHQgPSBcIjg0cHhcIjtcclxuICAgICAgICBlbC5zdHlsZS5taW5XaWR0aCA9IFwiMTQwcHhcIjtcclxuICAgICAgICBlbC50YWJJbmRleCA9IDA7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkRpdkl0ZW06IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgIGVsLnN0eWxlLnBhZGRpbmcgPSBcIjlweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLm1hcmdpbiA9IFwiMnB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2ZmZmZmZjAwXCI7XHJcbiAgICAgICAgZWwuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIycHhcIjtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNhZTAwMDBcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNmZmZmZmYwMFwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25EaXZJdGVtQm9keTogZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xyXG4gICAgICAgIGVsLnN0eWxlLndpZHRoID0gXCIxMjBweFwiO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25TcGFuSWNvbjogZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgZWwuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uU3BhblRleHQ6IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIGVsLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgZWwuc3R5bGUud29yZFdyYXAgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uRGl2U2VsZWN0OiBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM2YzAwZmYzZFwiO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25EaXZVblNlbGVjdDogZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJpbml0aWFsXCI7XHJcbiAgICB9XHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1leHBsb3Jlci1zdHlsZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0ge1xyXG4gICAgYXBwbHlPblBhbmVsOiBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuZmxleFdyYXAgPSBcIndyYXBcIjtcclxuICAgIH1cclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWxpbmUtc3R5bGVzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHtcclxuICAgIGFwcGx5T25QYW5lbDogZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xyXG4gICAgICAgIGVsLnN0eWxlLmZsZXhXcmFwID0gXCJub3dyYXBcIjtcclxuICAgIH0sXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1wYW5lbC1zdHlsZXMuanMubWFwIl19
