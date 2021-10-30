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

},{"qinpel-cps":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinString = exports.QinPath = exports.QinPanel = exports.QinLine = exports.QinLabel = exports.QinIcon = exports.QinField = exports.QinExplorer = exports.QinCombo = exports.QinColumn = exports.QinChooser = exports.QinCheck = exports.QinButton = exports.qinAssetUrl = exports.QinAsset = void 0;
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
var qin_combo_1 = require("./src/qin-combo");
Object.defineProperty(exports, "QinCombo", { enumerable: true, get: function () { return qin_combo_1.QinCombo; } });
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

},{"./src/qin-assets":3,"./src/qin-button":5,"./src/qin-check":6,"./src/qin-chooser":7,"./src/qin-column":8,"./src/qin-combo":9,"./src/qin-explorer":11,"./src/qin-field":12,"./src/qin-icon":13,"./src/qin-label":14,"./src/qin-line":15,"./src/qin-panel":16,"./src/qin-path":17,"./src/qin-string":18}],3:[function(require,module,exports){
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
    QinAsset["FaceAdd"] = "face-add.png";
    QinAsset["FaceArrowDown"] = "face-arrow-down.png";
    QinAsset["FaceArrowLeft"] = "face-arrow-left.png";
    QinAsset["FaceArrowRight"] = "face-arrow-right.png";
    QinAsset["FaceArrowUp"] = "face-arrow-up.png";
    QinAsset["FaceAttach"] = "face-attach.png";
    QinAsset["FaceBag"] = "face-bag.png";
    QinAsset["FaceBellDisable"] = "face-bell-disable.png";
    QinAsset["FaceBell"] = "face-bell.png";
    QinAsset["FaceCalendar"] = "face-calendar.png";
    QinAsset["FaceCameraDisable"] = "face-camera-disable.png";
    QinAsset["FaceCamera"] = "face-camera.png";
    QinAsset["FaceCancel"] = "face-cancel.png";
    QinAsset["FaceCart"] = "face-cart.png";
    QinAsset["FaceCheck"] = "face-check.png";
    QinAsset["FaceClock"] = "face-clock.png";
    QinAsset["FaceClose"] = "face-close.png";
    QinAsset["FaceCog"] = "face-cog.png";
    QinAsset["FaceCompass"] = "face-compass.png";
    QinAsset["FaceConfirm"] = "face-confirm.png";
    QinAsset["FaceContact"] = "face-contact.png";
    QinAsset["FaceControl"] = "face-control.png";
    QinAsset["FaceCopy"] = "face-copy.png";
    QinAsset["FaceDel"] = "face-del.png";
    QinAsset["FaceDownload"] = "face-download.png";
    QinAsset["FaceEnlarge"] = "face-enlarge.png";
    QinAsset["FaceEnter"] = "face-enter.png";
    QinAsset["FaceErase"] = "face-erase.png";
    QinAsset["FaceExit"] = "face-exit.png";
    QinAsset["FaceEyeDisable"] = "face-eye-disable.png";
    QinAsset["FaceEye"] = "face-eye.png";
    QinAsset["FaceFile"] = "face-file.png";
    QinAsset["FaceFilter"] = "face-filter.png";
    QinAsset["FaceFolder"] = "face-folder.png";
    QinAsset["FaceGear"] = "face-gear.png";
    QinAsset["FaceHeart"] = "face-heart.png";
    QinAsset["FaceHome"] = "face-home.png";
    QinAsset["FaceImage"] = "face-image.png";
    QinAsset["FaceLabel"] = "face-label.png";
    QinAsset["FaceLink"] = "face-link.png";
    QinAsset["FaceLock"] = "face-lock.png";
    QinAsset["FaceMail"] = "face-mail.png";
    QinAsset["FaceMapDisable"] = "face-map-disable.png";
    QinAsset["FaceMap"] = "face-map.png";
    QinAsset["FaceMessage"] = "face-message.png";
    QinAsset["FaceMicDisable"] = "face-mic-disable.png";
    QinAsset["FaceMic"] = "face-mic.png";
    QinAsset["FaceMinus"] = "face-minus.png";
    QinAsset["FaceMovie"] = "face-movie.png";
    QinAsset["FaceNews"] = "face-news.png";
    QinAsset["FacePaste"] = "face-paste.png";
    QinAsset["FacePencil"] = "face-pencil.png";
    QinAsset["FacePerson"] = "face-person.png";
    QinAsset["FacePhoneDisable"] = "face-phone-disable.png";
    QinAsset["FacePhone"] = "face-phone.png";
    QinAsset["FacePin"] = "face-pin.png";
    QinAsset["FacePlus"] = "face-plus.png";
    QinAsset["FaceRedo"] = "face-redo.png";
    QinAsset["FaceSave"] = "face-save.png";
    QinAsset["FaceSearch"] = "face-search.png";
    QinAsset["FaceSend"] = "face-send.png";
    QinAsset["FaceSettings"] = "face-settings.png";
    QinAsset["FaceShare"] = "face-share.png";
    QinAsset["FaceShield"] = "face-shield.png";
    QinAsset["FaceShrink"] = "face-shrink.png";
    QinAsset["FaceSpeakerDisable"] = "face-speaker-disable.png";
    QinAsset["FaceSpeaker"] = "face-speaker.png";
    QinAsset["FaceStar"] = "face-star.png";
    QinAsset["FaceTrash"] = "face-trash.png";
    QinAsset["FaceUndo"] = "face-undo.png";
    QinAsset["FaceUnlink"] = "face-unlink.png";
    QinAsset["FaceUnlock"] = "face-unlock.png";
    QinAsset["FaceUpload"] = "face-upload.png";
    QinAsset["FaceWifiDisable"] = "face-wifi-disable.png";
    QinAsset["FaceWifi"] = "face-wifi.png";
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
var qinpel_res_1 = require("qinpel-res");
var refQinpel = window.frameElement.qinpel;
var QinBase = (function () {
    function QinBase() {
        this.baseParent = null;
        this.baseChildren = [];
        this.baseDisplay = "initial";
        this.baseVisibility = "initial";
    }
    QinBase.prototype.qinpel = function () {
        return refQinpel;
    };
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
        qinpel_res_1.QinSoul.arm.addAction(this.getMain(), action);
    };
    return QinBase;
}());
exports.QinBase = QinBase;

},{"qinpel-res":24}],5:[function(require,module,exports){
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
var qinpel_res_1 = require("qinpel-res");
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
        qinpel_res_1.QinSoul.skin.styleAsEdit(_this.inputCheck);
        return _this;
    }
    QinCheck.prototype.getMain = function () {
        return this.inputCheck;
    };
    QinCheck.prototype.getData = function () {
        return this.inputCheck.checked;
    };
    QinCheck.prototype.setData = function (data) {
        this.inputCheck.checked = data;
    };
    return QinCheck;
}(qin_edit_1.QinEdit));
exports.QinCheck = QinCheck;

},{"./qin-edit":10,"qinpel-res":24}],7:[function(require,module,exports){
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
var qinpel_res_1 = require("qinpel-res");
var qin_edit_1 = require("./qin-edit");
var qin_column_1 = require("./qin-column");
var qin_explorer_1 = require("./qin-explorer");
var qin_line_1 = require("./qin-line");
var qin_string_1 = require("./qin-string");
var qin_combo_1 = require("./qin-combo");
var qin_button_1 = require("./qin-button");
var qin_icon_1 = require("./qin-icon");
var qin_assets_1 = require("./qin-assets");
var QinChooser = (function (_super) {
    __extends(QinChooser, _super);
    function QinChooser(nature, operation, descriptors) {
        var _this = _super.call(this) || this;
        _this.qinBody = new qin_column_1.QinColumn();
        _this.qinExplorer = new qin_explorer_1.QinExplorer();
        _this.qinBottom = new qin_line_1.QinLine();
        _this.qinName = new qin_string_1.QinString();
        _this.qinExtensions = new qin_combo_1.QinCombo();
        _this.qinAction = new qin_button_1.QinButton(new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceCog, qinpel_res_1.QinGrandeur.SMALL));
        _this.nature = nature ? nature : qinpel_res_1.QinFilesNature.BOTH;
        _this.operation = operation ? operation : qinpel_res_1.QinFilesOperation.OPEN;
        _this.descriptors = descriptors ? descriptors : [];
        _this.initBody();
        _this.initBottom();
        return _this;
    }
    QinChooser.prototype.initBody = function () {
        this.qinExplorer.install(this.qinBody);
        this.qinExplorer.setNature(this.nature);
        this.qinBottom.install(this.qinBody);
    };
    QinChooser.prototype.initBottom = function () {
        var _this = this;
        this.qinName.install(this.qinBottom);
        qinpel_res_1.QinSoul.skin.styleFlexMax(this.qinName.getMain());
        this.qinAction.addAction(function (qinEvent) {
            if (qinEvent.fromTyping && qinEvent.isEnter) {
                _this.qinExplorer.load(_this.qinName.getData(), function (loaded) {
                    _this.qinName.setData(loaded);
                });
                qinEvent.stop();
            }
        });
        this.qinExtensions.install(this.qinBottom);
        this.initExtensions();
        this.qinAction.install(this.qinBottom);
    };
    QinChooser.prototype.initExtensions = function () {
        if (this.descriptors.length == 0) {
            this.qinExtensions.addOption("All Files (*.*)", "*", true);
            this.qinExplorer.setExtensions([]);
        }
        else {
            for (var index = 0; index < this.descriptors.length; index++) {
                var descriptor = this.descriptors[index];
                this.qinExtensions.addOption(descriptor.description, descriptor.extensions.join(";"), index == 0);
            }
            this.qinExplorer.setExtensions(this.descriptors[0].extensions);
        }
    };
    QinChooser.prototype.getMain = function () {
        return this.qinBody.getMain();
    };
    QinChooser.prototype.getData = function () {
        return this.qinExplorer.getData();
    };
    QinChooser.prototype.setData = function (data) {
        this.qinExplorer.setData(data);
    };
    return QinChooser;
}(qin_edit_1.QinEdit));
exports.QinChooser = QinChooser;

},{"./qin-assets":3,"./qin-button":5,"./qin-column":8,"./qin-combo":9,"./qin-edit":10,"./qin-explorer":11,"./qin-icon":13,"./qin-line":15,"./qin-string":18,"qinpel-res":24}],8:[function(require,module,exports){
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
var qin_base_1 = require("./qin-base");
var qinpel_res_1 = require("qinpel-res");
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
        qinpel_res_1.QinSoul.skin.styleAsBody(this.divPanel);
    };
    QinColumn.prototype.getMain = function () {
        return this.divPanel;
    };
    return QinColumn;
}(qin_base_1.QinBase));
exports.QinColumn = QinColumn;

},{"./qin-base":4,"./styles/qin-column-styles":20,"qinpel-res":24}],9:[function(require,module,exports){
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
exports.QinCombo = void 0;
var qinpel_res_1 = require("qinpel-res");
var qin_edit_1 = require("./qin-edit");
var QinCombo = (function (_super) {
    __extends(QinCombo, _super);
    function QinCombo() {
        var _this = _super.call(this) || this;
        _this.selectCombo = document.createElement("select");
        qinpel_res_1.QinSoul.skin.styleAsEdit(_this.selectCombo);
        return _this;
    }
    QinCombo.prototype.getMain = function () {
        return this.selectCombo;
    };
    QinCombo.prototype.getData = function () {
        return this.selectCombo.value;
    };
    QinCombo.prototype.setData = function (data) {
        this.selectCombo.value = data;
    };
    QinCombo.prototype.addOption = function (title, value, selected) {
        var option = document.createElement("option");
        option.text = title;
        option.value = value;
        if (selected != undefined && selected != null) {
            option.selected = selected;
        }
        this.selectCombo.appendChild(option);
    };
    return QinCombo;
}(qin_edit_1.QinEdit));
exports.QinCombo = QinCombo;

},{"./qin-edit":10,"qinpel-res":24}],10:[function(require,module,exports){
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

},{"./qin-base":4}],11:[function(require,module,exports){
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
var qin_edit_1 = require("./qin-edit");
var qin_explorer_styles_1 = require("./styles/qin-explorer-styles");
var qinpel_res_1 = require("qinpel-res");
function getIconName(fromExtension) {
    var result = "explorer-file.png";
    if (qinpel_res_1.QinSoul.foot.isFileApp(fromExtension)) {
        result = "explorer-apps.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileCmd(fromExtension)) {
        result = "explorer-cmds.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileExec(fromExtension)) {
        result = "explorer-exec.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileImage(fromExtension)) {
        result = "explorer-image.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileVector(fromExtension)) {
        result = "explorer-image.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileMusic(fromExtension)) {
        result = "explorer-music.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileMovie(fromExtension)) {
        result = "explorer-movie.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileZipped(fromExtension)) {
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
        qinpel_res_1.QinSoul.arm.addAction(this.divItem, function (qinEvent) {
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
        _this.nature = nature ? nature : qinpel_res_1.QinFilesNature.BOTH;
        _this.extensions = extensions ? extensions : [];
        _this.initBody();
        return _this;
    }
    QinExplorer.prototype.initBody = function () {
        var _this = this;
        qin_explorer_styles_1.default.applyOnDivBody(this.divBody);
        qinpel_res_1.QinSoul.arm.addAction(this.divBody, function (qe) {
            if (qe.fromPointing) {
                _this.cleanSelection();
            }
        });
        qinpel_res_1.QinSoul.skin.disableSelection(this.divBody);
    };
    QinExplorer.prototype.getMain = function () {
        return this.divBody;
    };
    QinExplorer.prototype.getData = function () {
        var result = [];
        return result;
    };
    QinExplorer.prototype.setData = function (data) {
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
        this.qinpel().post("/dir/list", { path: folder })
            .then(function (res) {
            _this.actualFolder = folder;
            for (var _i = 0, _a = qinpel_res_1.QinSoul.body.getTextLines(res.data); _i < _a.length; _i++) {
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
                    if (_this.nature == qinpel_res_1.QinFilesNature.BOTH ||
                        _this.nature == qinpel_res_1.QinFilesNature.DIRECTORIES) {
                        _this.newDir(lineValue);
                    }
                }
                else if (line.indexOf("F: ") === 0) {
                    if (_this.nature == qinpel_res_1.QinFilesNature.BOTH ||
                        _this.nature == qinpel_res_1.QinFilesNature.FILES) {
                        var extension = qinpel_res_1.QinSoul.foot.getFileExtension(lineValue);
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
            _this.divBody.innerText = qinpel_res_1.QinSoul.head.getErrorMessage(err);
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

},{"./qin-edit":10,"./styles/qin-explorer-styles":21,"qinpel-res":24}],12:[function(require,module,exports){
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
    QinField.prototype.setData = function (data) {
        this.qinEdit.setData(data);
    };
    return QinField;
}(qin_edit_1.QinEdit));
exports.QinField = QinField;

},{"./qin-column":8,"./qin-edit":10,"./qin-label":14}],13:[function(require,module,exports){
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
var qin_base_1 = require("./qin-base");
var qin_assets_1 = require("./qin-assets");
var qinpel_res_1 = require("qinpel-res");
var QinIcon = (function (_super) {
    __extends(QinIcon, _super);
    function QinIcon(asset, size) {
        var _this = _super.call(this) || this;
        _this.imgIcon = document.createElement("img");
        _this.imgIcon.src = (0, qin_assets_1.qinAssetUrl)(asset);
        qinpel_res_1.QinSoul.skin.styleSize(_this.imgIcon, size);
        return _this;
    }
    QinIcon.prototype.getMain = function () {
        return this.imgIcon;
    };
    return QinIcon;
}(qin_base_1.QinBase));
exports.QinIcon = QinIcon;

},{"./qin-assets":3,"./qin-base":4,"qinpel-res":24}],14:[function(require,module,exports){
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

},{"./qin-base":4}],15:[function(require,module,exports){
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
var qin_base_1 = require("./qin-base");
var qinpel_res_1 = require("qinpel-res");
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
        qinpel_res_1.QinSoul.skin.styleAsBody(this.divPanel);
    };
    QinLine.prototype.getMain = function () {
        return this.divPanel;
    };
    return QinLine;
}(qin_base_1.QinBase));
exports.QinLine = QinLine;

},{"./qin-base":4,"./styles/qin-line-styles":22,"qinpel-res":24}],16:[function(require,module,exports){
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
var qin_base_1 = require("./qin-base");
var qinpel_res_1 = require("qinpel-res");
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
        qinpel_res_1.QinSoul.skin.styleAsBody(this.divPanel);
    };
    QinPanel.prototype.getMain = function () {
        return this.divPanel;
    };
    return QinPanel;
}(qin_base_1.QinBase));
exports.QinPanel = QinPanel;

},{"./qin-base":4,"./styles/qin-panel-styles":23,"qinpel-res":24}],17:[function(require,module,exports){
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
var qin_edit_1 = require("./qin-edit");
var qin_line_1 = require("./qin-line");
var qin_string_1 = require("./qin-string");
var qin_button_1 = require("./qin-button");
var qin_assets_1 = require("./qin-assets");
var qin_icon_1 = require("./qin-icon");
var qin_chooser_1 = require("./qin-chooser");
var qinpel_res_1 = require("qinpel-res");
var QinPath = (function (_super) {
    __extends(QinPath, _super);
    function QinPath() {
        var _this = _super.call(this) || this;
        _this.qinLine = new qin_line_1.QinLine();
        _this.qinPath = new qin_string_1.QinString();
        _this.qinAction = new qin_button_1.QinButton(new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceCog, qinpel_res_1.QinGrandeur.SMALL));
        _this.qinChooser = new qin_chooser_1.QinChooser();
        _this.qinPath.install(_this.qinLine);
        _this.initAction();
        return _this;
    }
    QinPath.prototype.initAction = function () {
        this.qinAction.install(this.qinLine);
        var popup = this.qinpel().frame.newPopup(this.qinAction.getMain(), this.qinChooser.getMain());
        this.qinAction.addAction(function () {
            popup.toggle();
        });
    };
    QinPath.prototype.getMain = function () {
        return this.qinLine.getMain();
    };
    QinPath.prototype.getData = function () {
        return this.qinPath.getData();
    };
    QinPath.prototype.setData = function (data) {
        this.qinPath.setData(data);
    };
    return QinPath;
}(qin_edit_1.QinEdit));
exports.QinPath = QinPath;

},{"./qin-assets":3,"./qin-button":5,"./qin-chooser":7,"./qin-edit":10,"./qin-icon":13,"./qin-line":15,"./qin-string":18,"qinpel-res":24}],18:[function(require,module,exports){
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
var qinpel_res_1 = require("qinpel-res");
var qin_edit_1 = require("./qin-edit");
var QinString = (function (_super) {
    __extends(QinString, _super);
    function QinString() {
        var _this = _super.call(this) || this;
        _this.inputString = document.createElement("input");
        _this.inputString.type = "text";
        qinpel_res_1.QinSoul.skin.styleAsEdit(_this.inputString);
        return _this;
    }
    QinString.prototype.getMain = function () {
        return this.inputString;
    };
    QinString.prototype.getData = function () {
        return this.inputString.value;
    };
    QinString.prototype.setData = function (data) {
        this.inputString.value = data;
    };
    return QinString;
}(qin_edit_1.QinEdit));
exports.QinString = QinString;

},{"./qin-edit":10,"qinpel-res":24}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qinpel_res_1 = require("qinpel-res");
exports.default = {
    applyOnButton: function (el) {
        qinpel_res_1.QinSoul.skin.styleAsEdit(el);
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.alignItems = "center";
    }
};

},{"qinpel-res":24}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    applyOnPanel: function (el) {
        el.style.display = "flex";
        el.style.flexDirection = "column";
        el.style.flexWrap = "nowrap";
    },
};

},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qinpel_res_1 = require("qinpel-res");
exports.default = {
    applyOnDivBody: function (el) {
        qinpel_res_1.QinSoul.skin.styleAsEdit(el);
        el.style.overflow = "auto";
        el.style.minHeight = "84px";
        el.style.minWidth = "140px";
        el.tabIndex = 0;
    },
    applyOnDivItem: function (el) {
        qinpel_res_1.QinSoul.skin.styleAsEdit(el);
        el.style.display = "inline-block";
        el.style.padding = "9px";
        el.style.margin = "2px";
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

},{"qinpel-res":24}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    applyOnPanel: function (el) {
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.flexWrap = "wrap";
    }
};

},{}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    applyOnPanel: function (el) {
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.flexWrap = "nowrap";
    },
};

},{}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSoul = exports.QinSkin = exports.QinStyles = exports.QinHead = exports.QinGrandeur = exports.QinBounds = exports.QinDimension = exports.QinPoint = exports.QinFoot = exports.QinFilesDescriptor = exports.QinFilesOperation = exports.QinFilesNature = exports.QinBody = exports.QinArm = exports.QinEvent = exports.QinDragCalls = void 0;
var qin_arm_1 = require("./src/qin-arm");
Object.defineProperty(exports, "QinDragCalls", { enumerable: true, get: function () { return qin_arm_1.QinDragCalls; } });
Object.defineProperty(exports, "QinEvent", { enumerable: true, get: function () { return qin_arm_1.QinEvent; } });
Object.defineProperty(exports, "QinArm", { enumerable: true, get: function () { return qin_arm_1.QinArm; } });
var qin_body_1 = require("./src/qin-body");
Object.defineProperty(exports, "QinBody", { enumerable: true, get: function () { return qin_body_1.QinBody; } });
var qin_foot_1 = require("./src/qin-foot");
Object.defineProperty(exports, "QinFilesNature", { enumerable: true, get: function () { return qin_foot_1.QinFilesNature; } });
Object.defineProperty(exports, "QinFilesOperation", { enumerable: true, get: function () { return qin_foot_1.QinFilesOperation; } });
Object.defineProperty(exports, "QinFilesDescriptor", { enumerable: true, get: function () { return qin_foot_1.QinFilesDescriptor; } });
Object.defineProperty(exports, "QinFoot", { enumerable: true, get: function () { return qin_foot_1.QinFoot; } });
var qin_head_1 = require("./src/qin-head");
Object.defineProperty(exports, "QinPoint", { enumerable: true, get: function () { return qin_head_1.QinPoint; } });
Object.defineProperty(exports, "QinDimension", { enumerable: true, get: function () { return qin_head_1.QinDimension; } });
Object.defineProperty(exports, "QinBounds", { enumerable: true, get: function () { return qin_head_1.QinBounds; } });
Object.defineProperty(exports, "QinGrandeur", { enumerable: true, get: function () { return qin_head_1.QinGrandeur; } });
Object.defineProperty(exports, "QinHead", { enumerable: true, get: function () { return qin_head_1.QinHead; } });
var qin_skin_1 = require("./src/qin-skin");
Object.defineProperty(exports, "QinStyles", { enumerable: true, get: function () { return qin_skin_1.QinStyles; } });
Object.defineProperty(exports, "QinSkin", { enumerable: true, get: function () { return qin_skin_1.QinSkin; } });
var qin_soul_1 = require("./src/qin-soul");
Object.defineProperty(exports, "QinSoul", { enumerable: true, get: function () { return qin_soul_1.QinSoul; } });

},{"./src/qin-arm":25,"./src/qin-body":26,"./src/qin-foot":27,"./src/qin-head":28,"./src/qin-skin":29,"./src/qin-soul":30}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinArm = exports.QinEvent = exports.QinDragCalls = void 0;
var qin_skin_1 = require("./qin-skin");
var QinDragCalls = (function () {
    function QinDragCalls() {
    }
    return QinDragCalls;
}());
exports.QinDragCalls = QinDragCalls;
var QinEvent = (function () {
    function QinEvent() {
        this.fromTyping = false;
        this.fromPointing = false;
        this.hasAlt = false;
        this.hasCtrl = false;
        this.hasShift = false;
        this.hasMeta = false;
        this.isEnter = false;
        this.isEscape = false;
        this.isDouble = false;
        this.isLong = false;
        this.keyTyped = "";
        this.pointOnX = -1;
        this.pointOnY = -1;
        this.stopEvent = false;
    }
    QinEvent.prototype.setFromKeyboard = function (ev) {
        this.fromTyping = true;
        this.hasAlt = ev.altKey;
        this.hasCtrl = ev.ctrlKey;
        this.hasShift = ev.shiftKey;
        this.hasMeta = ev.metaKey;
        this.isEnter = isKeyEnter(ev);
        this.isEscape = isKeyEscape(ev);
        this.isSpace = isKeySpace(ev);
        this.keyTyped = ev.key;
        return this;
    };
    QinEvent.prototype.setFromMouse = function (ev) {
        this.fromPointing = true;
        this.hasAlt = ev.altKey;
        this.hasCtrl = ev.ctrlKey;
        this.hasShift = ev.shiftKey;
        this.hasMeta = ev.metaKey;
        this.pointOnX = ev.clientX;
        this.pointOnY = ev.clientY;
        return this;
    };
    QinEvent.prototype.setFromTouch = function (ev) {
        this.fromPointing = true;
        this.hasAlt = ev.altKey;
        this.hasCtrl = ev.ctrlKey;
        this.hasShift = ev.shiftKey;
        this.hasMeta = ev.metaKey;
        if (ev.touches.length > 0) {
            this.pointOnX = ev.touches[0].clientX;
            this.pointOnY = ev.touches[0].clientY;
        }
        return this;
    };
    QinEvent.prototype.stop = function () {
        this.stopEvent = true;
    };
    return QinEvent;
}());
exports.QinEvent = QinEvent;
;
function stopEvent(event) {
    if (event.preventDefault) {
        event.preventDefault();
    }
    if (event.stopPropagation) {
        event.stopPropagation();
    }
    event.cancelBubble = true;
    return false;
}
var lastEventPointer = null;
function makeEventPointer(isDown, ev) {
    var result = {
        posX: 0,
        posY: 0,
    };
    if (ev instanceof MouseEvent) {
        if (ev.clientX || ev.clientY) {
            result.posX = ev.clientX;
            result.posY = ev.clientY;
        }
    }
    else if (ev instanceof TouchEvent) {
        if (ev.touches &&
            ev.touches[0] &&
            (ev.touches[0].clientX || ev.touches[0].clientY)) {
            result.posX = ev.touches[0].clientX;
            result.posY = ev.touches[0].clientY;
        }
    }
    if (isDown) {
        lastEventPointer = ev;
    }
    return result;
}
function isEventPointerDouble(isDown, ev) {
    if (!isDown || lastEventPointer == null || ev == null) {
        return false;
    }
    var timeDif = ev.timeStamp - lastEventPointer.timeStamp;
    return timeDif < 450;
}
function isEventPointerLong(isDown, ev) {
    if (!isDown || lastEventPointer == null || ev == null) {
        return false;
    }
    var timeDif = ev.timeStamp - lastEventPointer.timeStamp;
    return timeDif > 840;
}
function isKeyInList(ev, list) {
    var keyLower = ev.key.toLowerCase();
    return list.indexOf(keyLower) > -1;
}
function isKeyEnter(ev) {
    return isKeyInList(ev, ["enter", "return"]) || ev.keyCode === 13;
}
function isKeyEscape(ev) {
    return isKeyInList(ev, ["esc", "escape"]) || ev.keyCode === 27;
}
function isKeySpace(ev) {
    return isKeyInList(ev, [" ", "space", "spacebar"]) || ev.keyCode === 32;
}
function addKeyAction(element, action) {
    element.onkeydown = actionKeyboard;
    function actionKeyboard(ev) {
        if (isKeyEnter(ev)) {
            action(new QinEvent().setFromKeyboard(ev));
            return stopEvent(ev);
        }
    }
}
function addAction(element, action) {
    element.onkeydown = actionKeyboard;
    element.onmouseup = actionMouse;
    element.ontouchend = actionTouch;
    function actionKeyboard(ev) {
        var qinEvent = new QinEvent().setFromKeyboard(ev);
        action(qinEvent);
        if (qinEvent.stopEvent) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actionMouse(ev) {
        var qinEvent = new QinEvent().setFromMouse(ev);
        action(qinEvent);
        if (qinEvent.stopEvent) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actionTouch(ev) {
        var qinEvent = new QinEvent().setFromTouch(ev);
        action(qinEvent);
        if (qinEvent.stopEvent) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
}
function addMover(sources, target, dragCalls) {
    var dragInitEventX = 0;
    var dragInitEventY = 0;
    var dragInitPosX = 0;
    var dragInitPosY = 0;
    for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
        var source = sources_1[_i];
        source.onmousedown = onMoverInit;
        source.ontouchstart = onMoverInit;
        source.ondragstart = stopEvent;
    }
    function onMoverInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventPointerDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventPointerLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        var pointer = makeEventPointer(true, ev);
        dragInitEventX = pointer.posX;
        dragInitEventY = pointer.posY;
        dragInitPosX = parseInt(target.style.left, 10);
        dragInitPosY = parseInt(target.style.top, 10);
        document.ontouchmove = onMoverMove;
        document.onmousemove = onMoverMove;
        document.ontouchend = onMoverClose;
        document.onmouseup = onMoverClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onMoverMove(ev) {
        var pointer = makeEventPointer(false, ev);
        var dragDifX = pointer.posX - dragInitEventX;
        var dragDifY = pointer.posY - dragInitEventY;
        var dragFinalX = dragInitPosX + dragDifX;
        var dragFinalY = dragInitPosY + dragDifY;
        target.style.left = (dragFinalX > 0 ? dragFinalX : 0) + "px";
        target.style.top = (dragFinalY > 0 ? dragFinalY : 0) + "px";
        if (dragCalls && dragCalls.onMove) {
            dragCalls.onMove();
        }
        return stopEvent(ev);
    }
    function onMoverClose(ev) {
        document.ontouchmove = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.onmouseup = null;
        qin_skin_1.QinSkin.showAllIFrames();
        qin_skin_1.QinSkin.clearSelection();
        if (dragCalls && dragCalls.onEnd) {
            dragCalls.onEnd();
        }
        return stopEvent(ev);
    }
}
function addResizer(sources, target, dragCalls) {
    var dragInitEventX = 0;
    var dragInitEventY = 0;
    var dragInitWidth = 0;
    var dragInitHeight = 0;
    for (var _i = 0, sources_2 = sources; _i < sources_2.length; _i++) {
        var source = sources_2[_i];
        source.onmousedown = onResizerInit;
        source.ontouchstart = onResizerInit;
        source.ondragstart = stopEvent;
    }
    function onResizerInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventPointerDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventPointerLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        var pointer = makeEventPointer(true, ev);
        dragInitEventX = pointer.posX;
        dragInitEventY = pointer.posY;
        dragInitWidth = parseInt(target.style.width, 10);
        dragInitHeight = parseInt(target.style.height, 10);
        document.ontouchmove = onResizerMove;
        document.onmousemove = onResizerMove;
        document.ontouchend = onResizerClose;
        document.onmouseup = onResizerClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onResizerMove(ev) {
        var pointer = makeEventPointer(false, ev);
        var frameDragDifX = pointer.posX - dragInitEventX;
        var frameDragDifY = pointer.posY - dragInitEventY;
        var frameDragFinalWidth = dragInitWidth + frameDragDifX;
        var frameDragFinalHeight = dragInitHeight + frameDragDifY;
        target.style.width = (frameDragFinalWidth > 0 ? frameDragFinalWidth : 0) + "px";
        target.style.height =
            (frameDragFinalHeight > 0 ? frameDragFinalHeight : 0) + "px";
        if (dragCalls && dragCalls.onMove) {
            dragCalls.onMove();
        }
        return stopEvent(ev);
    }
    function onResizerClose(ev) {
        document.ontouchmove = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.onmouseup = null;
        qin_skin_1.QinSkin.showAllIFrames();
        qin_skin_1.QinSkin.clearSelection();
        if (dragCalls && dragCalls.onEnd) {
            dragCalls.onEnd();
        }
        return stopEvent(ev);
    }
}
function addScroller(target, dragCalls) {
    var dragInitX = 0;
    var dragInitY = 0;
    var dragScrollX = 0;
    var dragScrollY = 0;
    target.ondragstart = stopEvent;
    target.ontouchstart = onScrollerInit;
    target.onmousedown = onScrollerInit;
    function onScrollerInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventPointerDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventPointerLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        var pointer = makeEventPointer(true, ev);
        dragInitX = pointer.posX;
        dragInitY = pointer.posY;
        dragScrollX = target.scrollLeft;
        dragScrollY = target.scrollTop;
        document.ontouchmove = onScrollerMove;
        document.onmousemove = onScrollerMove;
        document.ontouchend = onScrollerClose;
        document.onmouseup = onScrollerClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onScrollerMove(ev) {
        var pointer = makeEventPointer(false, ev);
        var dragDifX = pointer.posX - dragInitX;
        var dragDifY = pointer.posY - dragInitY;
        var dragNewX = dragScrollX - dragDifX;
        var dragNewY = dragScrollY - dragDifY;
        target.scrollTo(dragNewX, dragNewY);
        if (dragCalls && dragCalls.onMove) {
            dragCalls.onMove();
        }
        return stopEvent(ev);
    }
    function onScrollerClose(ev) {
        document.ontouchmove = null;
        document.ontouchend = null;
        document.onmousemove = null;
        document.onmouseup = null;
        qin_skin_1.QinSkin.showAllIFrames();
        qin_skin_1.QinSkin.clearSelection();
        if (dragCalls && dragCalls.onEnd) {
            dragCalls.onEnd();
        }
        return stopEvent(ev);
    }
}
exports.QinArm = {
    stopEvent: stopEvent,
    makeEventPointer: makeEventPointer,
    isEventPointerDouble: isEventPointerDouble,
    isEventPointerLong: isEventPointerLong,
    isKeyInList: isKeyInList,
    isKeyEnter: isKeyEnter,
    isKeySpace: isKeySpace,
    addKeyAction: addKeyAction,
    addAction: addAction,
    addMover: addMover,
    addResizer: addResizer,
    addScroller: addScroller,
};

},{"./qin-skin":29}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBody = void 0;
function getTextLines(fromText) {
    return fromText.match(/[^\r\n]+/g);
}
function getCSVRows(fromText, names) {
    var lines = getTextLines(fromText);
    var result = [];
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        var row = (!names) ? [] : {};
        var inside_quotes = false;
        var column_value = "";
        var column_index = 0;
        for (var char_index = 0; char_index < line.length; char_index++) {
            var actual = line.charAt(char_index);
            if (inside_quotes) {
                if (actual == '"') {
                    var next = char_index < line.length - 1 ? line.charAt(char_index + 1) : "";
                    if (next == '"') {
                        column_value += actual;
                        char_index++;
                    }
                    else {
                        inside_quotes = false;
                    }
                }
                else {
                    column_value += actual;
                }
            }
            else {
                if (actual == '"') {
                    inside_quotes = true;
                }
                else if (actual == ',') {
                    column_value = unmaskSpecialChars(column_value);
                    if (!names) {
                        row.push(column_value);
                    }
                    else {
                        var column_name = "col_" + column_index;
                        if (column_index < names.length) {
                            column_name = names[column_index];
                        }
                        row[column_name] = column_value;
                    }
                    column_value = "";
                    column_index++;
                }
                else {
                    column_value += actual;
                }
            }
        }
        column_value = unmaskSpecialChars(column_value);
        if (!names) {
            row.push(column_value);
            result.push(row);
        }
        else {
            var column_name = "col_" + column_index;
            if (column_index < names.length) {
                column_name = names[column_index];
            }
            row[column_name] = column_value;
            result.push(row);
        }
    }
    return result;
}
function maskSpecialChars(fromText) {
    return fromText
        .replace("\\", "\\\\")
        .replace("\r", "\\r")
        .replace("\n", "\\n")
        .replace("\t", "\\t");
}
function unmaskSpecialChars(fromText) {
    return fromText
        .replace("\\\\", "\\")
        .replace("\\r", "\r")
        .replace("\\n", "\n")
        .replace("\\t", "\t");
}
exports.QinBody = {
    getTextLines: getTextLines,
    getCSVRows: getCSVRows,
    maskSpecialChars: maskSpecialChars,
    unmaskSpecialChars: unmaskSpecialChars,
};

},{}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinFoot = exports.QinFilesDescriptor = exports.QinFilesOperation = exports.QinFilesNature = void 0;
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
function getLocation() {
    return window.location.href;
}
function isLocalHost() {
    var location = getLocation();
    var start = location.indexOf("://");
    if (start == -1) {
        start = 0;
    }
    else {
        start += 3;
    }
    location = location.substring(start);
    return location.indexOf("localhost") === 0 || location.indexOf("127.0.0.1") === 0;
}
function getPathJoin(pathA, pathB) {
    if (pathA == null || pathA == undefined) {
        pathA = "";
    }
    if (pathB == null || pathB == undefined) {
        pathB = "";
    }
    if (pathA.length == 0) {
        return pathB;
    }
    else if (pathB.length == 0) {
        return pathA;
    }
    else {
        var union = "/";
        if (pathA.indexOf("\\") > -1 || pathB.indexOf("\\") > -1) {
            union = "\\";
        }
        var pathAEnd = pathA.substring(pathA.length - 1, pathA.length);
        var pathBStart = pathB.substring(0, 1);
        if (pathAEnd == union || pathBStart == union) {
            union = "";
        }
        return pathA + union + pathB;
    }
}
function getFileExtension(name) {
    var position = name.lastIndexOf(".");
    if (position > -1) {
        return name.substring(position + 1);
    }
    else {
        return "";
    }
}
var appsExtensions = [
    "htm", "html", "css", "js", "jsx", "ts", "tsx", "phtml"
];
function isFileApp(extension) {
    return appsExtensions.indexOf(extension) > -1;
}
var cmdsExtensions = [
    "h", "c", "hpp", "cpp", "rs", "jl",
    "cs", "csproj", "fs", "ml", "fsi", "mli", "fsx", "fsscript",
    "java", "gy", "gvy", "groovy", "sc", "scala", "clj",
    "py", "ruby", "php", "phtml",
];
function isFileCmd(extension) {
    return cmdsExtensions.indexOf(extension) > -1;
}
var execExtensions = [
    "exe", "jar", "com", "bat", "sh"
];
function isFileExec(extension) {
    return execExtensions.indexOf(extension) > -1;
}
var imageExtensions = [
    "jpg", "jpeg", "png", "gif", "bmp"
];
function isFileImage(extension) {
    return imageExtensions.indexOf(extension) > -1;
}
var vectorExtensions = [
    "svg"
];
function isFileVector(extension) {
    return vectorExtensions.indexOf(extension) > -1;
}
var movieExtensions = [
    "avi", "mp4"
];
function isFileMovie(extension) {
    return movieExtensions.indexOf(extension) > -1;
}
var musicExtensions = [
    "wav", "mp3"
];
function isFileMusic(extension) {
    return musicExtensions.indexOf(extension) > -1;
}
var zippedExtensions = [
    "zip", "rar", "7z", "tar", "gz"
];
function isFileZipped(extension) {
    return zippedExtensions.indexOf(extension) > -1;
}
exports.QinFoot = {
    getLocation: getLocation,
    isLocalHost: isLocalHost,
    getPathJoin: getPathJoin,
    getFileExtension: getFileExtension,
    isFileApp: isFileApp,
    isFileCmd: isFileCmd,
    isFileExec: isFileExec,
    isFileImage: isFileImage,
    isFileVector: isFileVector,
    isFileMovie: isFileMovie,
    isFileMusic: isFileMusic,
    isFileZipped: isFileZipped,
};

},{}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinHead = exports.QinGrandeur = exports.QinBounds = exports.QinDimension = exports.QinPoint = void 0;
var QinPoint = (function () {
    function QinPoint() {
    }
    return QinPoint;
}());
exports.QinPoint = QinPoint;
;
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
function getDeskAPI() {
    var win = window;
    if (win.deskAPI) {
        return win.deskAPI;
    }
    else {
        win = window.parent;
    }
    if (win.deskAPI) {
        return win.deskAPI;
    }
    else {
        win = window.top;
    }
    if (win.deskAPI) {
        return win.deskAPI;
    }
    return undefined;
}
function log(message) {
    try {
        console.log(message);
    }
    catch (_) { }
    try {
        getDeskAPI().send("logOnMain", message);
    }
    catch (_) { }
}
function getErrorMessage(error, origin) {
    var result = "Problem with " + error;
    if (error.response && error.response.data) {
        result += " - Data: " + error.response.data;
    }
    if (origin) {
        result += " - Origin: " + origin;
    }
    return result;
}
function toggleDevTools() {
    try {
        getDeskAPI().send("toggleDevTools");
    }
    catch (e) {
        log("Problem on toggle DevTools: " + getErrorMessage(e));
    }
}
exports.QinHead = {
    getDeskAPI: getDeskAPI,
    log: log,
    getErrorMessage: getErrorMessage,
    toggleDevTools: toggleDevTools,
};

},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSkin = exports.QinStyles = void 0;
var qin_arm_1 = require("./qin-arm");
var qin_head_1 = require("./qin-head");
exports.QinStyles = {
    ColorBack: "#fffaef",
    ColorMenu: "#faefff",
    ColorFont: "#270036",
    FontName: "Poppins",
    FontSize: "12px",
};
function styleAsBody(el) {
    el.style.position = "absolute";
    el.style.top = "0px";
    el.style.right = "0px";
    el.style.bottom = "0px";
    el.style.left = "0px";
    el.style.padding = "9px";
    el.style.overflow = "auto";
}
function styleAsEdit(el) {
    el.style.margin = "1px";
    el.style.padding = "3px";
    el.style.outline = "none";
    el.style.border = "2px solid #270036";
    el.style.borderRadius = "3px";
    el.style.color = "#270036";
    el.style.backgroundColor = "#ffffff";
    el.style.fontFamily = "Poppins";
    el.style.fontSize = "15px";
    el.addEventListener("focus", function () {
        el.style.outline = "none";
        el.style.backgroundColor = "#faefff";
        el.style.border = "2px solid #ae0000";
    });
    el.addEventListener("focusout", function () {
        el.style.outline = "none";
        el.style.backgroundColor = "#ffffff";
        el.style.border = "2px solid #270036";
    });
}
function styleSize(el, size) {
    if (size) {
        if (size instanceof qin_head_1.QinDimension) {
            el.style.width = size.width + "px";
            el.style.height = size.height + "px";
        }
        else {
            var dim = getDimensionSize(size);
            el.style.width = dim.width + "px";
            el.style.height = dim.height + "px";
        }
    }
}
function styleFlexMax(el) {
    el.style.flex = "1";
}
function styleFlexMin(el) {
    el.style.flex = "0";
}
function getWindowSize() {
    return {
        width: document.body.clientWidth,
        height: document.body.clientHeight,
    };
}
function getWindowSizeStyle() {
    var width = getWindowSize().width;
    if (width < 600) {
        return qin_head_1.QinGrandeur.SMALL;
    }
    else if (width < 1000) {
        return qin_head_1.QinGrandeur.MEDIUM;
    }
    else {
        return qin_head_1.QinGrandeur.LARGE;
    }
}
function hideAllIFrames() {
    var doc_iframes = document.getElementsByTagName("iframe");
    for (var i = 0; i < doc_iframes.length; i++) {
        var doc_iframe = doc_iframes[i];
        doc_iframe.style.visibility = "hidden";
    }
}
function showAllIFrames() {
    var doc_iframes = document.getElementsByTagName("iframe");
    for (var i = 0; i < doc_iframes.length; i++) {
        var doc_iframe = doc_iframes[i];
        doc_iframe.style.visibility = "visible";
    }
}
function disableSelection(element) {
    element.style.userSelect = "none";
    element.style.webkitUserSelect = "none";
    element.onselectstart = qin_arm_1.QinArm.stopEvent;
}
function clearSelection() {
    setTimeout(function () {
        if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }
    }, 360);
}
function isElementVisibleInScroll(element) {
    if (element.offsetTop < element.parentElement.scrollTop) {
        return false;
    }
    if (element.offsetLeft < element.parentElement.scrollLeft) {
        return false;
    }
    if (element.clientWidth >
        element.parentElement.clientWidth -
            (element.offsetLeft - element.parentElement.scrollLeft)) {
        return false;
    }
    if (element.clientHeight >
        element.parentElement.clientHeight -
            (element.offsetTop - element.parentElement.scrollTop)) {
        return false;
    }
    return true;
}
function getDimensionSize(size) {
    if (size == qin_head_1.QinGrandeur.LARGE) {
        return getDimensionLarge();
    }
    else if (size == qin_head_1.QinGrandeur.MEDIUM) {
        return getDimensionMedium();
    }
    else {
        return getDimensionSmall();
    }
}
var dimensionSmall = {
    width: 16,
    height: 16,
};
function getDimensionSmall() {
    return dimensionSmall;
}
var dimensionMedium = {
    width: 32,
    height: 32,
};
function getDimensionMedium() {
    return dimensionMedium;
}
var dimensionLarge = {
    width: 64,
    height: 64,
};
function getDimensionLarge() {
    return dimensionLarge;
}
exports.QinSkin = {
    styles: exports.QinStyles,
    styleAsBody: styleAsBody,
    styleAsEdit: styleAsEdit,
    styleSize: styleSize,
    styleFlexMax: styleFlexMax,
    styleFlexMin: styleFlexMin,
    getWindowSize: getWindowSize,
    getWindowSizeStyle: getWindowSizeStyle,
    hideAllIFrames: hideAllIFrames,
    showAllIFrames: showAllIFrames,
    disableSelection: disableSelection,
    clearSelection: clearSelection,
    isElementVisibleInScroll: isElementVisibleInScroll,
    getDimensionSize: getDimensionSize,
    getDimensionSmall: getDimensionSmall,
    getDimensionMedium: getDimensionMedium,
    getDimensionLarge: getDimensionLarge,
};

},{"./qin-arm":25,"./qin-head":28}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSoul = void 0;
var qin_arm_1 = require("./qin-arm");
var qin_body_1 = require("./qin-body");
var qin_foot_1 = require("./qin-foot");
var qin_head_1 = require("./qin-head");
var qin_skin_1 = require("./qin-skin");
exports.QinSoul = {
    arm: qin_arm_1.QinArm,
    body: qin_body_1.QinBody,
    foot: qin_foot_1.QinFoot,
    head: qin_head_1.QinHead,
    skin: qin_skin_1.QinSkin,
};

},{"./qin-arm":25,"./qin-body":26,"./qin-foot":27,"./qin-head":28,"./qin-skin":29}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1VzZXJzL2V2ZXJ0L0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9pbmRleC5qcyIsIi4uL3FpbnBlbC1jcHMvYWxsLmpzIiwiLi4vcWlucGVsLWNwcy9zcmMvcWluLWFzc2V0cy5qcyIsIi4uL3FpbnBlbC1jcHMvc3JjL3Fpbi1iYXNlLmpzIiwiLi4vcWlucGVsLWNwcy9zcmMvcWluLWJ1dHRvbi5qcyIsIi4uL3FpbnBlbC1jcHMvc3JjL3Fpbi1jaGVjay5qcyIsIi4uL3FpbnBlbC1jcHMvc3JjL3Fpbi1jaG9vc2VyLmpzIiwiLi4vcWlucGVsLWNwcy9zcmMvcWluLWNvbHVtbi5qcyIsIi4uL3FpbnBlbC1jcHMvc3JjL3Fpbi1jb21iby5qcyIsIi4uL3FpbnBlbC1jcHMvc3JjL3Fpbi1lZGl0LmpzIiwiLi4vcWlucGVsLWNwcy9zcmMvcWluLWV4cGxvcmVyLmpzIiwiLi4vcWlucGVsLWNwcy9zcmMvcWluLWZpZWxkLmpzIiwiLi4vcWlucGVsLWNwcy9zcmMvcWluLWljb24uanMiLCIuLi9xaW5wZWwtY3BzL3NyYy9xaW4tbGFiZWwuanMiLCIuLi9xaW5wZWwtY3BzL3NyYy9xaW4tbGluZS5qcyIsIi4uL3FpbnBlbC1jcHMvc3JjL3Fpbi1wYW5lbC5qcyIsIi4uL3FpbnBlbC1jcHMvc3JjL3Fpbi1wYXRoLmpzIiwiLi4vcWlucGVsLWNwcy9zcmMvcWluLXN0cmluZy5qcyIsIi4uL3FpbnBlbC1jcHMvc3JjL3N0eWxlcy9xaW4tYnV0dG9uLXN0eWxlcy5qcyIsIi4uL3FpbnBlbC1jcHMvc3JjL3N0eWxlcy9xaW4tY29sdW1uLXN0eWxlcy5qcyIsIi4uL3FpbnBlbC1jcHMvc3JjL3N0eWxlcy9xaW4tZXhwbG9yZXItc3R5bGVzLmpzIiwiLi4vcWlucGVsLWNwcy9zcmMvc3R5bGVzL3Fpbi1saW5lLXN0eWxlcy5qcyIsIi4uL3FpbnBlbC1jcHMvc3JjL3N0eWxlcy9xaW4tcGFuZWwtc3R5bGVzLmpzIiwiLi4vcWlucGVsLXJlcy9hbGwuanMiLCIuLi9xaW5wZWwtcmVzL3NyYy9xaW4tYXJtLmpzIiwiLi4vcWlucGVsLXJlcy9zcmMvcWluLWJvZHkuanMiLCIuLi9xaW5wZWwtcmVzL3NyYy9xaW4tZm9vdC5qcyIsIi4uL3FpbnBlbC1yZXMvc3JjL3Fpbi1oZWFkLmpzIiwiLi4vcWlucGVsLXJlcy9zcmMvcWluLXNraW4uanMiLCIuLi9xaW5wZWwtcmVzL3NyYy9xaW4tc291bC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9OQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBxaW5wZWxfY3BzXzEgPSByZXF1aXJlKFwicWlucGVsLWNwc1wiKTtcclxudmFyIFBhY2tBbGwgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFBhY2tBbGwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBQYWNrQWxsKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucWluTGluZSA9IG5ldyBxaW5wZWxfY3BzXzEuUWluTGluZSgpO1xyXG4gICAgICAgIF90aGlzLnFpbkJvZHkgPSBuZXcgcWlucGVsX2Nwc18xLlFpblBhdGgoKTtcclxuICAgICAgICBfdGhpcy5xaW5MaW5lLmluc3RhbGwoX3RoaXMpO1xyXG4gICAgICAgIF90aGlzLnFpbkJvZHkuaW5zdGFsbChfdGhpcy5xaW5MaW5lKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUGFja0FsbDtcclxufShxaW5wZWxfY3BzXzEuUWluQ29sdW1uKSk7XHJcbm5ldyBQYWNrQWxsKCkucHV0QXNCb2R5KCk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluU3RyaW5nID0gZXhwb3J0cy5RaW5QYXRoID0gZXhwb3J0cy5RaW5QYW5lbCA9IGV4cG9ydHMuUWluTGluZSA9IGV4cG9ydHMuUWluTGFiZWwgPSBleHBvcnRzLlFpbkljb24gPSBleHBvcnRzLlFpbkZpZWxkID0gZXhwb3J0cy5RaW5FeHBsb3JlciA9IGV4cG9ydHMuUWluQ29tYm8gPSBleHBvcnRzLlFpbkNvbHVtbiA9IGV4cG9ydHMuUWluQ2hvb3NlciA9IGV4cG9ydHMuUWluQ2hlY2sgPSBleHBvcnRzLlFpbkJ1dHRvbiA9IGV4cG9ydHMucWluQXNzZXRVcmwgPSBleHBvcnRzLlFpbkFzc2V0ID0gdm9pZCAwO1xyXG52YXIgcWluX2Fzc2V0c18xID0gcmVxdWlyZShcIi4vc3JjL3Fpbi1hc3NldHNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkFzc2V0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYXNzZXRzXzEuUWluQXNzZXQ7IH0gfSk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInFpbkFzc2V0VXJsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYXNzZXRzXzEucWluQXNzZXRVcmw7IH0gfSk7XHJcbnZhciBxaW5fYnV0dG9uXzEgPSByZXF1aXJlKFwiLi9zcmMvcWluLWJ1dHRvblwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQnV0dG9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYnV0dG9uXzEuUWluQnV0dG9uOyB9IH0pO1xyXG52YXIgcWluX2NoZWNrXzEgPSByZXF1aXJlKFwiLi9zcmMvcWluLWNoZWNrXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5DaGVja1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2NoZWNrXzEuUWluQ2hlY2s7IH0gfSk7XHJcbnZhciBxaW5fY2hvb3Nlcl8xID0gcmVxdWlyZShcIi4vc3JjL3Fpbi1jaG9vc2VyXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5DaG9vc2VyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fY2hvb3Nlcl8xLlFpbkNob29zZXI7IH0gfSk7XHJcbnZhciBxaW5fY29sdW1uXzEgPSByZXF1aXJlKFwiLi9zcmMvcWluLWNvbHVtblwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQ29sdW1uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fY29sdW1uXzEuUWluQ29sdW1uOyB9IH0pO1xyXG52YXIgcWluX2NvbWJvXzEgPSByZXF1aXJlKFwiLi9zcmMvcWluLWNvbWJvXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Db21ib1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2NvbWJvXzEuUWluQ29tYm87IH0gfSk7XHJcbnZhciBxaW5fZXhwbG9yZXJfMSA9IHJlcXVpcmUoXCIuL3NyYy9xaW4tZXhwbG9yZXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkV4cGxvcmVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZXhwbG9yZXJfMS5RaW5FeHBsb3JlcjsgfSB9KTtcclxudmFyIHFpbl9maWVsZF8xID0gcmVxdWlyZShcIi4vc3JjL3Fpbi1maWVsZFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRmllbGRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9maWVsZF8xLlFpbkZpZWxkOyB9IH0pO1xyXG52YXIgcWluX2ljb25fMSA9IHJlcXVpcmUoXCIuL3NyYy9xaW4taWNvblwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluSWNvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2ljb25fMS5RaW5JY29uOyB9IH0pO1xyXG52YXIgcWluX2xhYmVsXzEgPSByZXF1aXJlKFwiLi9zcmMvcWluLWxhYmVsXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5MYWJlbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2xhYmVsXzEuUWluTGFiZWw7IH0gfSk7XHJcbnZhciBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vc3JjL3Fpbi1saW5lXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5MaW5lXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fbGluZV8xLlFpbkxpbmU7IH0gfSk7XHJcbnZhciBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3NyYy9xaW4tcGFuZWxcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblBhbmVsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fcGFuZWxfMS5RaW5QYW5lbDsgfSB9KTtcclxudmFyIHFpbl9wYXRoXzEgPSByZXF1aXJlKFwiLi9zcmMvcWluLXBhdGhcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblBhdGhcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9wYXRoXzEuUWluUGF0aDsgfSB9KTtcclxudmFyIHFpbl9zdHJpbmdfMSA9IHJlcXVpcmUoXCIuL3NyYy9xaW4tc3RyaW5nXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5TdHJpbmdcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9zdHJpbmdfMS5RaW5TdHJpbmc7IH0gfSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFsbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnFpbkFzc2V0VXJsID0gZXhwb3J0cy5RaW5Bc3NldCA9IHZvaWQgMDtcclxudmFyIFFpbkFzc2V0O1xyXG4oZnVuY3Rpb24gKFFpbkFzc2V0KSB7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTBcIl0gPSBcImJhY2tncm91bmQtZGFyay0xMC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxMVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTExLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazEyXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTNcIl0gPSBcImJhY2tncm91bmQtZGFyay0xMy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxNFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTE0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazE1XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTZcIl0gPSBcImJhY2tncm91bmQtZGFyay0xNi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxN1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTE3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazE4XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTlcIl0gPSBcImJhY2tncm91bmQtZGFyay0xOS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyMFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTIwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazIxXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjJcIl0gPSBcImJhY2tncm91bmQtZGFyay0yMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyM1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTIzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazI0XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjVcIl0gPSBcImJhY2tncm91bmQtZGFyay0yNS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyNlwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTI2LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazI3XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjhcIl0gPSBcImJhY2tncm91bmQtZGFyay0yOC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyOVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTI5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazNcIl0gPSBcImJhY2tncm91bmQtZGFyay0zLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazRcIl0gPSBcImJhY2tncm91bmQtZGFyay00LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazVcIl0gPSBcImJhY2tncm91bmQtZGFyay01LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazZcIl0gPSBcImJhY2tncm91bmQtZGFyay02LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazdcIl0gPSBcImJhY2tncm91bmQtZGFyay03LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazhcIl0gPSBcImJhY2tncm91bmQtZGFyay04LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazlcIl0gPSBcImJhY2tncm91bmQtZGFyay05LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFya1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQwXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDFcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTBcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDExXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTExLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxMlwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTNcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDE0XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTE0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxNVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xNS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTZcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTYucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDE3XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTE3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxOFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xOC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTlcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDJcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjBcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDIxXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTIxLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyMlwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjNcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDI0XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTI0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyNVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yNS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjZcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjYucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDI3XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTI3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyOFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yOC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjlcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDNcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0NFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC00LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQ1XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDZcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtNi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0N1wiXSA9IFwiYmFja2dyb3VuZC1saWdodC03LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQ4XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDlcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtOS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDFcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxMFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxMVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxMlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxM1wiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxNFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxNVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxNlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTYucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxN1wiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxOFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxOVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjBcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjFcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIxLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjJcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjNcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjRcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjVcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI1LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjZcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI2LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjdcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjhcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI4LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjlcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsM1wiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDRcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWw1XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC01LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsNlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtNi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDdcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWw4XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC04LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsOVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtOS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyQXBwc1wiXSA9IFwiZXhwbG9yZXItYXBwcy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJDbWRzXCJdID0gXCJleHBsb3Jlci1jbWRzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJFeHBsb3JlckRpclwiXSA9IFwiZXhwbG9yZXItZGlyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJFeHBsb3JlckV4ZWNcIl0gPSBcImV4cGxvcmVyLWV4ZWMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyRmlsZVwiXSA9IFwiZXhwbG9yZXItZmlsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJJbWFnZVwiXSA9IFwiZXhwbG9yZXItaW1hZ2UucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyTW92aWVcIl0gPSBcImV4cGxvcmVyLW1vdmllLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJFeHBsb3Jlck11c2ljXCJdID0gXCJleHBsb3Jlci1tdXNpYy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJaaXBwZWRcIl0gPSBcImV4cGxvcmVyLXppcHBlZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUFkZFwiXSA9IFwiZmFjZS1hZGQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VBcnJvd0Rvd25cIl0gPSBcImZhY2UtYXJyb3ctZG93bi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUFycm93TGVmdFwiXSA9IFwiZmFjZS1hcnJvdy1sZWZ0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQXJyb3dSaWdodFwiXSA9IFwiZmFjZS1hcnJvdy1yaWdodC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUFycm93VXBcIl0gPSBcImZhY2UtYXJyb3ctdXAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VBdHRhY2hcIl0gPSBcImZhY2UtYXR0YWNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQmFnXCJdID0gXCJmYWNlLWJhZy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUJlbGxEaXNhYmxlXCJdID0gXCJmYWNlLWJlbGwtZGlzYWJsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUJlbGxcIl0gPSBcImZhY2UtYmVsbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNhbGVuZGFyXCJdID0gXCJmYWNlLWNhbGVuZGFyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2FtZXJhRGlzYWJsZVwiXSA9IFwiZmFjZS1jYW1lcmEtZGlzYWJsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNhbWVyYVwiXSA9IFwiZmFjZS1jYW1lcmEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDYW5jZWxcIl0gPSBcImZhY2UtY2FuY2VsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2FydFwiXSA9IFwiZmFjZS1jYXJ0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2hlY2tcIl0gPSBcImZhY2UtY2hlY2sucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDbG9ja1wiXSA9IFwiZmFjZS1jbG9jay5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNsb3NlXCJdID0gXCJmYWNlLWNsb3NlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ29nXCJdID0gXCJmYWNlLWNvZy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNvbXBhc3NcIl0gPSBcImZhY2UtY29tcGFzcy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNvbmZpcm1cIl0gPSBcImZhY2UtY29uZmlybS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNvbnRhY3RcIl0gPSBcImZhY2UtY29udGFjdC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNvbnRyb2xcIl0gPSBcImZhY2UtY29udHJvbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNvcHlcIl0gPSBcImZhY2UtY29weS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZURlbFwiXSA9IFwiZmFjZS1kZWwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VEb3dubG9hZFwiXSA9IFwiZmFjZS1kb3dubG9hZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUVubGFyZ2VcIl0gPSBcImZhY2UtZW5sYXJnZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUVudGVyXCJdID0gXCJmYWNlLWVudGVyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRXJhc2VcIl0gPSBcImZhY2UtZXJhc2UucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VFeGl0XCJdID0gXCJmYWNlLWV4aXQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VFeWVEaXNhYmxlXCJdID0gXCJmYWNlLWV5ZS1kaXNhYmxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRXllXCJdID0gXCJmYWNlLWV5ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUZpbGVcIl0gPSBcImZhY2UtZmlsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUZpbHRlclwiXSA9IFwiZmFjZS1maWx0ZXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VGb2xkZXJcIl0gPSBcImZhY2UtZm9sZGVyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlR2VhclwiXSA9IFwiZmFjZS1nZWFyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlSGVhcnRcIl0gPSBcImZhY2UtaGVhcnQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VIb21lXCJdID0gXCJmYWNlLWhvbWUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VJbWFnZVwiXSA9IFwiZmFjZS1pbWFnZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUxhYmVsXCJdID0gXCJmYWNlLWxhYmVsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTGlua1wiXSA9IFwiZmFjZS1saW5rLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTG9ja1wiXSA9IFwiZmFjZS1sb2NrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTWFpbFwiXSA9IFwiZmFjZS1tYWlsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTWFwRGlzYWJsZVwiXSA9IFwiZmFjZS1tYXAtZGlzYWJsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU1hcFwiXSA9IFwiZmFjZS1tYXAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VNZXNzYWdlXCJdID0gXCJmYWNlLW1lc3NhZ2UucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VNaWNEaXNhYmxlXCJdID0gXCJmYWNlLW1pYy1kaXNhYmxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTWljXCJdID0gXCJmYWNlLW1pYy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU1pbnVzXCJdID0gXCJmYWNlLW1pbnVzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTW92aWVcIl0gPSBcImZhY2UtbW92aWUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VOZXdzXCJdID0gXCJmYWNlLW5ld3MucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQYXN0ZVwiXSA9IFwiZmFjZS1wYXN0ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVBlbmNpbFwiXSA9IFwiZmFjZS1wZW5jaWwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQZXJzb25cIl0gPSBcImZhY2UtcGVyc29uLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUGhvbmVEaXNhYmxlXCJdID0gXCJmYWNlLXBob25lLWRpc2FibGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQaG9uZVwiXSA9IFwiZmFjZS1waG9uZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVBpblwiXSA9IFwiZmFjZS1waW4ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQbHVzXCJdID0gXCJmYWNlLXBsdXMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSZWRvXCJdID0gXCJmYWNlLXJlZG8ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTYXZlXCJdID0gXCJmYWNlLXNhdmUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTZWFyY2hcIl0gPSBcImZhY2Utc2VhcmNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2VuZFwiXSA9IFwiZmFjZS1zZW5kLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2V0dGluZ3NcIl0gPSBcImZhY2Utc2V0dGluZ3MucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTaGFyZVwiXSA9IFwiZmFjZS1zaGFyZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNoaWVsZFwiXSA9IFwiZmFjZS1zaGllbGQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTaHJpbmtcIl0gPSBcImZhY2Utc2hyaW5rLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3BlYWtlckRpc2FibGVcIl0gPSBcImZhY2Utc3BlYWtlci1kaXNhYmxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3BlYWtlclwiXSA9IFwiZmFjZS1zcGVha2VyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3RhclwiXSA9IFwiZmFjZS1zdGFyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVHJhc2hcIl0gPSBcImZhY2UtdHJhc2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VVbmRvXCJdID0gXCJmYWNlLXVuZG8ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VVbmxpbmtcIl0gPSBcImZhY2UtdW5saW5rLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVW5sb2NrXCJdID0gXCJmYWNlLXVubG9jay5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVwbG9hZFwiXSA9IFwiZmFjZS11cGxvYWQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VXaWZpRGlzYWJsZVwiXSA9IFwiZmFjZS13aWZpLWRpc2FibGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VXaWZpXCJdID0gXCJmYWNlLXdpZmkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZyYW1lQ2xvc2VcIl0gPSBcImZyYW1lLWNsb3NlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGcmFtZU1heGltaXplXCJdID0gXCJmcmFtZS1tYXhpbWl6ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRnJhbWVNZW51XCJdID0gXCJmcmFtZS1tZW51LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGcmFtZU1pbmltaXplXCJdID0gXCJmcmFtZS1taW5pbWl6ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRnJhbWVSZXNpemVcIl0gPSBcImZyYW1lLXJlc2l6ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRnJhbWVTdGF0dXNFcnJvclwiXSA9IFwiZnJhbWUtc3RhdHVzLWVycm9yLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGcmFtZVN0YXR1c0luZm9cIl0gPSBcImZyYW1lLXN0YXR1cy1pbmZvLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJMb2dpbktleVwiXSA9IFwibG9naW4ta2V5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJNZW51RGV2dG9vbHNcIl0gPSBcIm1lbnUtZGV2dG9vbHMuaWNvXCI7XHJcbiAgICBRaW5Bc3NldFtcIlBvcHBpbnNcIl0gPSBcInBvcHBpbnMudHRmXCI7XHJcbiAgICBRaW5Bc3NldFtcIlFpbnBlbFwiXSA9IFwicWlucGVsLnBuZ1wiO1xyXG59KShRaW5Bc3NldCA9IGV4cG9ydHMuUWluQXNzZXQgfHwgKGV4cG9ydHMuUWluQXNzZXQgPSB7fSkpO1xyXG5mdW5jdGlvbiBxaW5Bc3NldFVybChhc3NldCkge1xyXG4gICAgcmV0dXJuIFwiL3J1bi9hcHAvcWlucGVsLWFwcC9hc3NldHMvXCIgKyBhc3NldDtcclxufVxyXG5leHBvcnRzLnFpbkFzc2V0VXJsID0gcWluQXNzZXRVcmw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1hc3NldHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5CYXNlID0gdm9pZCAwO1xyXG52YXIgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbnZhciByZWZRaW5wZWwgPSB3aW5kb3cuZnJhbWVFbGVtZW50LnFpbnBlbDtcclxudmFyIFFpbkJhc2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUWluQmFzZSgpIHtcclxuICAgICAgICB0aGlzLmJhc2VQYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYmFzZUNoaWxkcmVuID0gW107XHJcbiAgICAgICAgdGhpcy5iYXNlRGlzcGxheSA9IFwiaW5pdGlhbFwiO1xyXG4gICAgICAgIHRoaXMuYmFzZVZpc2liaWxpdHkgPSBcImluaXRpYWxcIjtcclxuICAgIH1cclxuICAgIFFpbkJhc2UucHJvdG90eXBlLnFpbnBlbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gcmVmUWlucGVsO1xyXG4gICAgfTtcclxuICAgIFFpbkJhc2UucHJvdG90eXBlLmluc3RhbGwgPSBmdW5jdGlvbiAob24pIHtcclxuICAgICAgICB0aGlzLmJhc2VQYXJlbnQgPSBvbjtcclxuICAgICAgICB0aGlzLmJhc2VQYXJlbnQuYXBwZW5kKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIFFpbkJhc2UucHJvdG90eXBlLnVuSW5zdGFsbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmJhc2VQYXJlbnQucmVtb3ZlKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIFFpbkJhc2UucHJvdG90eXBlLnJlSW5zdGFsbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmJhc2VQYXJlbnQuYXBwZW5kKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIFFpbkJhc2UucHJvdG90eXBlLnVuRGlzcGxheSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRNYWluKCkuc3R5bGUuZGlzcGxheSAhPT0gXCJub25lXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlRGlzcGxheSA9IHRoaXMuZ2V0TWFpbigpLnN0eWxlLmRpc3BsYXk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUWluQmFzZS5wcm90b3R5cGUucmVEaXNwbGF5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmJhc2VEaXNwbGF5O1xyXG4gICAgfTtcclxuICAgIFFpbkJhc2UucHJvdG90eXBlLnVuVmlzaWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRNYWluKCkuc3R5bGUuZGlzcGxheSAhPT0gXCJoaWRkZW5cIikge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VWaXNpYmlsaXR5ID0gdGhpcy5nZXRNYWluKCkuc3R5bGUudmlzaWJpbGl0eTtcclxuICAgICAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFFpbkJhc2UucHJvdG90eXBlLnJlVmlzaWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS52aXNpYmlsaXR5ID0gdGhpcy5iYXNlVmlzaWJpbGl0eTtcclxuICAgIH07XHJcbiAgICBRaW5CYXNlLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICB0aGlzLmJhc2VDaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuICAgICAgICB0aGlzLmdldE1haW4oKS5hcHBlbmRDaGlsZChjaGlsZC5nZXRNYWluKCkpO1xyXG4gICAgfTtcclxuICAgIFFpbkJhc2UucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuYmFzZUNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZUNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLnJlbW92ZUNoaWxkKGNoaWxkLmdldE1haW4oKSk7XHJcbiAgICB9O1xyXG4gICAgUWluQmFzZS5wcm90b3R5cGUuY2hpbGRyZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZUNoaWxkcmVuO1xyXG4gICAgfTtcclxuICAgIFFpbkJhc2UucHJvdG90eXBlLmFkZEFjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU291bC5hcm0uYWRkQWN0aW9uKHRoaXMuZ2V0TWFpbigpLCBhY3Rpb24pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBRaW5CYXNlO1xyXG59KCkpO1xyXG5leHBvcnRzLlFpbkJhc2UgPSBRaW5CYXNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tYmFzZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5CdXR0b24gPSB2b2lkIDA7XHJcbnZhciBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XHJcbnZhciBxaW5fYnV0dG9uX3N0eWxlc18xID0gcmVxdWlyZShcIi4vc3R5bGVzL3Fpbi1idXR0b24tc3R5bGVzXCIpO1xyXG52YXIgUWluQnV0dG9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhRaW5CdXR0b24sIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBRaW5CdXR0b24oaWNvbiwgbGFiZWwpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgX3RoaXMucWluSWNvbiA9IG51bGw7XHJcbiAgICAgICAgX3RoaXMucWluTGFiZWwgPSBudWxsO1xyXG4gICAgICAgIHFpbl9idXR0b25fc3R5bGVzXzEuZGVmYXVsdC5hcHBseU9uQnV0dG9uKF90aGlzLmJ1dHRvbik7XHJcbiAgICAgICAgaWYgKGljb24pIHtcclxuICAgICAgICAgICAgX3RoaXMucWluSWNvbiA9IGljb247XHJcbiAgICAgICAgICAgIF90aGlzLnFpbkljb24uaW5zdGFsbChfdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsYWJlbCkge1xyXG4gICAgICAgICAgICBfdGhpcy5xaW5MYWJlbCA9IGxhYmVsO1xyXG4gICAgICAgICAgICBfdGhpcy5xaW5MYWJlbC5pbnN0YWxsKF90aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgUWluQnV0dG9uLnByb3RvdHlwZS5nZXRNYWluID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJ1dHRvbjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUWluQnV0dG9uO1xyXG59KHFpbl9iYXNlXzEuUWluQmFzZSkpO1xyXG5leHBvcnRzLlFpbkJ1dHRvbiA9IFFpbkJ1dHRvbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWJ1dHRvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5DaGVjayA9IHZvaWQgMDtcclxudmFyIHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG52YXIgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG52YXIgUWluQ2hlY2sgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFFpbkNoZWNrLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUWluQ2hlY2sodGl0bGUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmlucHV0Q2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgX3RoaXMuaW5wdXRDaGVjay50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgIGlmICh0aXRsZSkge1xyXG4gICAgICAgICAgICBfdGhpcy5pbnB1dENoZWNrLmlubmVyVGV4dCA9IHRpdGxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU291bC5za2luLnN0eWxlQXNFZGl0KF90aGlzLmlucHV0Q2hlY2spO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFFpbkNoZWNrLnByb3RvdHlwZS5nZXRNYWluID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0Q2hlY2s7XHJcbiAgICB9O1xyXG4gICAgUWluQ2hlY2sucHJvdG90eXBlLmdldERhdGEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRDaGVjay5jaGVja2VkO1xyXG4gICAgfTtcclxuICAgIFFpbkNoZWNrLnByb3RvdHlwZS5zZXREYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmlucHV0Q2hlY2suY2hlY2tlZCA9IGRhdGE7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFFpbkNoZWNrO1xyXG59KHFpbl9lZGl0XzEuUWluRWRpdCkpO1xyXG5leHBvcnRzLlFpbkNoZWNrID0gUWluQ2hlY2s7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1jaGVjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5DaG9vc2VyID0gdm9pZCAwO1xyXG52YXIgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbnZhciBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XHJcbnZhciBxaW5fY29sdW1uXzEgPSByZXF1aXJlKFwiLi9xaW4tY29sdW1uXCIpO1xyXG52YXIgcWluX2V4cGxvcmVyXzEgPSByZXF1aXJlKFwiLi9xaW4tZXhwbG9yZXJcIik7XHJcbnZhciBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XHJcbnZhciBxaW5fc3RyaW5nXzEgPSByZXF1aXJlKFwiLi9xaW4tc3RyaW5nXCIpO1xyXG52YXIgcWluX2NvbWJvXzEgPSByZXF1aXJlKFwiLi9xaW4tY29tYm9cIik7XHJcbnZhciBxaW5fYnV0dG9uXzEgPSByZXF1aXJlKFwiLi9xaW4tYnV0dG9uXCIpO1xyXG52YXIgcWluX2ljb25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uXCIpO1xyXG52YXIgcWluX2Fzc2V0c18xID0gcmVxdWlyZShcIi4vcWluLWFzc2V0c1wiKTtcclxudmFyIFFpbkNob29zZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFFpbkNob29zZXIsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBRaW5DaG9vc2VyKG5hdHVyZSwgb3BlcmF0aW9uLCBkZXNjcmlwdG9ycykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucWluQm9keSA9IG5ldyBxaW5fY29sdW1uXzEuUWluQ29sdW1uKCk7XHJcbiAgICAgICAgX3RoaXMucWluRXhwbG9yZXIgPSBuZXcgcWluX2V4cGxvcmVyXzEuUWluRXhwbG9yZXIoKTtcclxuICAgICAgICBfdGhpcy5xaW5Cb3R0b20gPSBuZXcgcWluX2xpbmVfMS5RaW5MaW5lKCk7XHJcbiAgICAgICAgX3RoaXMucWluTmFtZSA9IG5ldyBxaW5fc3RyaW5nXzEuUWluU3RyaW5nKCk7XHJcbiAgICAgICAgX3RoaXMucWluRXh0ZW5zaW9ucyA9IG5ldyBxaW5fY29tYm9fMS5RaW5Db21ibygpO1xyXG4gICAgICAgIF90aGlzLnFpbkFjdGlvbiA9IG5ldyBxaW5fYnV0dG9uXzEuUWluQnV0dG9uKG5ldyBxaW5faWNvbl8xLlFpbkljb24ocWluX2Fzc2V0c18xLlFpbkFzc2V0LkZhY2VDb2csIHFpbnBlbF9yZXNfMS5RaW5HcmFuZGV1ci5TTUFMTCkpO1xyXG4gICAgICAgIF90aGlzLm5hdHVyZSA9IG5hdHVyZSA/IG5hdHVyZSA6IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5CT1RIO1xyXG4gICAgICAgIF90aGlzLm9wZXJhdGlvbiA9IG9wZXJhdGlvbiA/IG9wZXJhdGlvbiA6IHFpbnBlbF9yZXNfMS5RaW5GaWxlc09wZXJhdGlvbi5PUEVOO1xyXG4gICAgICAgIF90aGlzLmRlc2NyaXB0b3JzID0gZGVzY3JpcHRvcnMgPyBkZXNjcmlwdG9ycyA6IFtdO1xyXG4gICAgICAgIF90aGlzLmluaXRCb2R5KCk7XHJcbiAgICAgICAgX3RoaXMuaW5pdEJvdHRvbSgpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFFpbkNob29zZXIucHJvdG90eXBlLmluaXRCb2R5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucWluRXhwbG9yZXIuaW5zdGFsbCh0aGlzLnFpbkJvZHkpO1xyXG4gICAgICAgIHRoaXMucWluRXhwbG9yZXIuc2V0TmF0dXJlKHRoaXMubmF0dXJlKTtcclxuICAgICAgICB0aGlzLnFpbkJvdHRvbS5pbnN0YWxsKHRoaXMucWluQm9keSk7XHJcbiAgICB9O1xyXG4gICAgUWluQ2hvb3Nlci5wcm90b3R5cGUuaW5pdEJvdHRvbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucWluTmFtZS5pbnN0YWxsKHRoaXMucWluQm90dG9tKTtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU291bC5za2luLnN0eWxlRmxleE1heCh0aGlzLnFpbk5hbWUuZ2V0TWFpbigpKTtcclxuICAgICAgICB0aGlzLnFpbkFjdGlvbi5hZGRBY3Rpb24oZnVuY3Rpb24gKHFpbkV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5mcm9tVHlwaW5nICYmIHFpbkV2ZW50LmlzRW50ZXIpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnFpbkV4cGxvcmVyLmxvYWQoX3RoaXMucWluTmFtZS5nZXREYXRhKCksIGZ1bmN0aW9uIChsb2FkZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5xaW5OYW1lLnNldERhdGEobG9hZGVkKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcWluRXZlbnQuc3RvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5xaW5FeHRlbnNpb25zLmluc3RhbGwodGhpcy5xaW5Cb3R0b20pO1xyXG4gICAgICAgIHRoaXMuaW5pdEV4dGVuc2lvbnMoKTtcclxuICAgICAgICB0aGlzLnFpbkFjdGlvbi5pbnN0YWxsKHRoaXMucWluQm90dG9tKTtcclxuICAgIH07XHJcbiAgICBRaW5DaG9vc2VyLnByb3RvdHlwZS5pbml0RXh0ZW5zaW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5kZXNjcmlwdG9ycy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnFpbkV4dGVuc2lvbnMuYWRkT3B0aW9uKFwiQWxsIEZpbGVzICgqLiopXCIsIFwiKlwiLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5xaW5FeHBsb3Jlci5zZXRFeHRlbnNpb25zKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmRlc2NyaXB0b3JzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSB0aGlzLmRlc2NyaXB0b3JzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIHRoaXMucWluRXh0ZW5zaW9ucy5hZGRPcHRpb24oZGVzY3JpcHRvci5kZXNjcmlwdGlvbiwgZGVzY3JpcHRvci5leHRlbnNpb25zLmpvaW4oXCI7XCIpLCBpbmRleCA9PSAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnFpbkV4cGxvcmVyLnNldEV4dGVuc2lvbnModGhpcy5kZXNjcmlwdG9yc1swXS5leHRlbnNpb25zKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUWluQ2hvb3Nlci5wcm90b3R5cGUuZ2V0TWFpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5xaW5Cb2R5LmdldE1haW4oKTtcclxuICAgIH07XHJcbiAgICBRaW5DaG9vc2VyLnByb3RvdHlwZS5nZXREYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnFpbkV4cGxvcmVyLmdldERhdGEoKTtcclxuICAgIH07XHJcbiAgICBRaW5DaG9vc2VyLnByb3RvdHlwZS5zZXREYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnFpbkV4cGxvcmVyLnNldERhdGEoZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFFpbkNob29zZXI7XHJcbn0ocWluX2VkaXRfMS5RaW5FZGl0KSk7XHJcbmV4cG9ydHMuUWluQ2hvb3NlciA9IFFpbkNob29zZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1jaG9vc2VyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkNvbHVtbiA9IHZvaWQgMDtcclxudmFyIHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcclxudmFyIHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG52YXIgcWluX2NvbHVtbl9zdHlsZXNfMSA9IHJlcXVpcmUoXCIuL3N0eWxlcy9xaW4tY29sdW1uLXN0eWxlc1wiKTtcclxudmFyIFFpbkNvbHVtbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUWluQ29sdW1uLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUWluQ29sdW1uKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuZGl2UGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIF90aGlzLmluaXRQYW5lbCgpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFFpbkNvbHVtbi5wcm90b3R5cGUuaW5pdFBhbmVsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHFpbl9jb2x1bW5fc3R5bGVzXzEuZGVmYXVsdC5hcHBseU9uUGFuZWwodGhpcy5kaXZQYW5lbCk7XHJcbiAgICB9O1xyXG4gICAgUWluQ29sdW1uLnByb3RvdHlwZS5wdXRBc0JvZHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRpdlBhbmVsKTtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU291bC5za2luLnN0eWxlQXNCb2R5KHRoaXMuZGl2UGFuZWwpO1xyXG4gICAgfTtcclxuICAgIFFpbkNvbHVtbi5wcm90b3R5cGUuZ2V0TWFpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXZQYW5lbDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUWluQ29sdW1uO1xyXG59KHFpbl9iYXNlXzEuUWluQmFzZSkpO1xyXG5leHBvcnRzLlFpbkNvbHVtbiA9IFFpbkNvbHVtbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWNvbHVtbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Db21ibyA9IHZvaWQgMDtcclxudmFyIHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG52YXIgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG52YXIgUWluQ29tYm8gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFFpbkNvbWJvLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUWluQ29tYm8oKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5zZWxlY3RDb21ibyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNvdWwuc2tpbi5zdHlsZUFzRWRpdChfdGhpcy5zZWxlY3RDb21ibyk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgUWluQ29tYm8ucHJvdG90eXBlLmdldE1haW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0Q29tYm87XHJcbiAgICB9O1xyXG4gICAgUWluQ29tYm8ucHJvdG90eXBlLmdldERhdGEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0Q29tYm8udmFsdWU7XHJcbiAgICB9O1xyXG4gICAgUWluQ29tYm8ucHJvdG90eXBlLnNldERhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Q29tYm8udmFsdWUgPSBkYXRhO1xyXG4gICAgfTtcclxuICAgIFFpbkNvbWJvLnByb3RvdHlwZS5hZGRPcHRpb24gPSBmdW5jdGlvbiAodGl0bGUsIHZhbHVlLCBzZWxlY3RlZCkge1xyXG4gICAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgIG9wdGlvbi50ZXh0ID0gdGl0bGU7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkICE9IHVuZGVmaW5lZCAmJiBzZWxlY3RlZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHNlbGVjdGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbGVjdENvbWJvLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFFpbkNvbWJvO1xyXG59KHFpbl9lZGl0XzEuUWluRWRpdCkpO1xyXG5leHBvcnRzLlFpbkNvbWJvID0gUWluQ29tYm87XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1jb21iby5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5FZGl0ID0gdm9pZCAwO1xyXG52YXIgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xyXG52YXIgUWluRWRpdCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUWluRWRpdCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFFpbkVkaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFFpbkVkaXQ7XHJcbn0ocWluX2Jhc2VfMS5RaW5CYXNlKSk7XHJcbmV4cG9ydHMuUWluRWRpdCA9IFFpbkVkaXQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1lZGl0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkV4cGxvcmVyID0gdm9pZCAwO1xyXG52YXIgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG52YXIgcWluX2V4cGxvcmVyX3N0eWxlc18xID0gcmVxdWlyZShcIi4vc3R5bGVzL3Fpbi1leHBsb3Jlci1zdHlsZXNcIik7XHJcbnZhciBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuZnVuY3Rpb24gZ2V0SWNvbk5hbWUoZnJvbUV4dGVuc2lvbikge1xyXG4gICAgdmFyIHJlc3VsdCA9IFwiZXhwbG9yZXItZmlsZS5wbmdcIjtcclxuICAgIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZUFwcChmcm9tRXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItYXBwcy5wbmdcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlQ21kKGZyb21FeHRlbnNpb24pKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci1jbWRzLnBuZ1wiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVFeGVjKGZyb21FeHRlbnNpb24pKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci1leGVjLnBuZ1wiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVJbWFnZShmcm9tRXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItaW1hZ2UucG5nXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZVZlY3Rvcihmcm9tRXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItaW1hZ2UucG5nXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZU11c2ljKGZyb21FeHRlbnNpb24pKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci1tdXNpYy5wbmdcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlTW92aWUoZnJvbUV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLW1vdmllLnBuZ1wiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVaaXBwZWQoZnJvbUV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLXppcHBlZC5wbmdcIjtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxudmFyIEl0ZW0gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSXRlbShmaWxlTmFtZSwgaWNvbk5hbWUpIHtcclxuICAgICAgICB0aGlzLmRpdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuZGl2SXRlbUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuc3Bhbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICB0aGlzLmltZ0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIHRoaXMuc3BhblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5maWxlTmFtZSA9IGZpbGVOYW1lO1xyXG4gICAgICAgIHRoaXMuaWNvbk5hbWUgPSBpY29uTmFtZTtcclxuICAgICAgICB0aGlzLmluaXRJdGVtKCk7XHJcbiAgICB9XHJcbiAgICBJdGVtLnByb3RvdHlwZS5pbml0SXRlbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHFpbl9leHBsb3Jlcl9zdHlsZXNfMS5kZWZhdWx0LmFwcGx5T25EaXZJdGVtKHRoaXMuZGl2SXRlbSk7XHJcbiAgICAgICAgdGhpcy5kaXZJdGVtLnRhYkluZGV4ID0gMDtcclxuICAgICAgICBxaW5fZXhwbG9yZXJfc3R5bGVzXzEuZGVmYXVsdC5hcHBseU9uRGl2SXRlbUJvZHkodGhpcy5kaXZJdGVtQm9keSk7XHJcbiAgICAgICAgdGhpcy5kaXZJdGVtLmFwcGVuZENoaWxkKHRoaXMuZGl2SXRlbUJvZHkpO1xyXG4gICAgICAgIHFpbl9leHBsb3Jlcl9zdHlsZXNfMS5kZWZhdWx0LmFwcGx5T25TcGFuSWNvbih0aGlzLnNwYW5JY29uKTtcclxuICAgICAgICB0aGlzLmRpdkl0ZW1Cb2R5LmFwcGVuZENoaWxkKHRoaXMuc3Bhbkljb24pO1xyXG4gICAgICAgIHRoaXMuaW1nSWNvbi5zcmMgPSBcIi9ydW4vYXBwL3FpbnBlbC1hcHAvYXNzZXRzL1wiICsgdGhpcy5pY29uTmFtZTtcclxuICAgICAgICB0aGlzLnNwYW5JY29uLmFwcGVuZENoaWxkKHRoaXMuaW1nSWNvbik7XHJcbiAgICAgICAgdGhpcy5zcGFuVGV4dC5pbm5lclRleHQgPSB0aGlzLmZpbGVOYW1lO1xyXG4gICAgICAgIHFpbl9leHBsb3Jlcl9zdHlsZXNfMS5kZWZhdWx0LmFwcGx5T25TcGFuVGV4dCh0aGlzLnNwYW5UZXh0KTtcclxuICAgICAgICB0aGlzLmRpdkl0ZW1Cb2R5LmFwcGVuZENoaWxkKHRoaXMuc3BhblRleHQpO1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmFybS5hZGRBY3Rpb24odGhpcy5kaXZJdGVtLCBmdW5jdGlvbiAocWluRXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKHFpbkV2ZW50LmZyb21Qb2ludGluZ1xyXG4gICAgICAgICAgICAgICAgfHwgKHFpbkV2ZW50LmZyb21UeXBpbmcgJiYgcWluRXZlbnQuaXNTcGFjZSkpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmRpdkl0ZW0uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICAgICAgcWluRXZlbnQuc3RvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgSXRlbS5wcm90b3R5cGUuaW5zdGFsbCA9IGZ1bmN0aW9uIChvbikge1xyXG4gICAgICAgIG9uLmFwcGVuZENoaWxkKHRoaXMuZGl2SXRlbSk7XHJcbiAgICB9O1xyXG4gICAgSXRlbS5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHFpbl9leHBsb3Jlcl9zdHlsZXNfMS5kZWZhdWx0LmFwcGx5T25EaXZTZWxlY3QodGhpcy5kaXZJdGVtKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBJdGVtLnByb3RvdHlwZS51bnNlbGVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBxaW5fZXhwbG9yZXJfc3R5bGVzXzEuZGVmYXVsdC5hcHBseU9uRGl2VW5TZWxlY3QodGhpcy5kaXZJdGVtKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgSXRlbS5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51bnNlbGVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBJdGVtLnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVOYW1lO1xyXG4gICAgfTtcclxuICAgIEl0ZW0ucHJvdG90eXBlLmlzU2VsZWN0ZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEl0ZW07XHJcbn0oKSk7XHJcbnZhciBRaW5FeHBsb3JlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUWluRXhwbG9yZXIsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBRaW5FeHBsb3JlcihuYXR1cmUsIGV4dGVuc2lvbnMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmRpdkJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIF90aGlzLmFjdHVhbEZvbGRlciA9IFwiXCI7XHJcbiAgICAgICAgX3RoaXMuc2VydmVyRm9sZGVyID0gXCJcIjtcclxuICAgICAgICBfdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgICAgIF90aGlzLm5hdHVyZSA9IG5hdHVyZSA/IG5hdHVyZSA6IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5CT1RIO1xyXG4gICAgICAgIF90aGlzLmV4dGVuc2lvbnMgPSBleHRlbnNpb25zID8gZXh0ZW5zaW9ucyA6IFtdO1xyXG4gICAgICAgIF90aGlzLmluaXRCb2R5KCk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgUWluRXhwbG9yZXIucHJvdG90eXBlLmluaXRCb2R5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcWluX2V4cGxvcmVyX3N0eWxlc18xLmRlZmF1bHQuYXBwbHlPbkRpdkJvZHkodGhpcy5kaXZCb2R5KTtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU291bC5hcm0uYWRkQWN0aW9uKHRoaXMuZGl2Qm9keSwgZnVuY3Rpb24gKHFlKSB7XHJcbiAgICAgICAgICAgIGlmIChxZS5mcm9tUG9pbnRpbmcpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNsZWFuU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU291bC5za2luLmRpc2FibGVTZWxlY3Rpb24odGhpcy5kaXZCb2R5KTtcclxuICAgIH07XHJcbiAgICBRaW5FeHBsb3Jlci5wcm90b3R5cGUuZ2V0TWFpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXZCb2R5O1xyXG4gICAgfTtcclxuICAgIFFpbkV4cGxvcmVyLnByb3RvdHlwZS5nZXREYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuICAgIFFpbkV4cGxvcmVyLnByb3RvdHlwZS5zZXREYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIH07XHJcbiAgICBRaW5FeHBsb3Jlci5wcm90b3R5cGUuc2V0TmF0dXJlID0gZnVuY3Rpb24gKG5hdHVyZSkge1xyXG4gICAgICAgIHRoaXMubmF0dXJlID0gbmF0dXJlO1xyXG4gICAgfTtcclxuICAgIFFpbkV4cGxvcmVyLnByb3RvdHlwZS5zZXRFeHRlbnNpb25zID0gZnVuY3Rpb24gKGV4dGVuc2lvbnMpIHtcclxuICAgICAgICB0aGlzLmV4dGVuc2lvbnMgPSBleHRlbnNpb25zO1xyXG4gICAgfTtcclxuICAgIFFpbkV4cGxvcmVyLnByb3RvdHlwZS5nZXRBY3R1YWxGb2xkZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0dWFsRm9sZGVyO1xyXG4gICAgfTtcclxuICAgIFFpbkV4cGxvcmVyLnByb3RvdHlwZS5nZXRTZXJ2ZXJGb2xkZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmVyRm9sZGVyO1xyXG4gICAgfTtcclxuICAgIFFpbkV4cGxvcmVyLnByb3RvdHlwZS5uZXdEaXIgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmV3SXRlbShuYW1lLCBcImV4cGxvcmVyLWRpci5wbmdcIik7XHJcbiAgICB9O1xyXG4gICAgUWluRXhwbG9yZXIucHJvdG90eXBlLm5ld0ZpbGUgPSBmdW5jdGlvbiAobmFtZSwgZXh0ZW5zaW9uKSB7XHJcbiAgICAgICAgdGhpcy5uZXdJdGVtKG5hbWUsIGdldEljb25OYW1lKGV4dGVuc2lvbikpO1xyXG4gICAgfTtcclxuICAgIFFpbkV4cGxvcmVyLnByb3RvdHlwZS5uZXdJdGVtID0gZnVuY3Rpb24gKG5hbWUsIGljb24pIHtcclxuICAgICAgICB2YXIgaXRlbSA9IG5ldyBJdGVtKG5hbWUsIGljb24pO1xyXG4gICAgICAgIGl0ZW0uaW5zdGFsbCh0aGlzLmRpdkJvZHkpO1xyXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcclxuICAgIH07XHJcbiAgICBRaW5FeHBsb3Jlci5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uIChmb2xkZXIsIG9uTG9hZCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jbGVhbigpO1xyXG4gICAgICAgIHRoaXMucWlucGVsKCkucG9zdChcIi9kaXIvbGlzdFwiLCB7IHBhdGg6IGZvbGRlciB9KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmFjdHVhbEZvbGRlciA9IGZvbGRlcjtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmJvZHkuZ2V0VGV4dExpbmVzKHJlcy5kYXRhKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBsaW5lID0gX2FbX2ldO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpbmVWYWx1ZSA9IGxpbmUuc3Vic3RyaW5nKDMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsaW5lVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChsaW5lLmluZGV4T2YoXCJQOiBcIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXJ2ZXJGb2xkZXIgPSBsaW5lVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uTG9hZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxvYWQobGluZVZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsaW5lLmluZGV4T2YoXCJEOiBcIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMubmF0dXJlID09IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5CT1RIIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm5hdHVyZSA9PSBxaW5wZWxfcmVzXzEuUWluRmlsZXNOYXR1cmUuRElSRUNUT1JJRVMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubmV3RGlyKGxpbmVWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobGluZS5pbmRleE9mKFwiRjogXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLm5hdHVyZSA9PSBxaW5wZWxfcmVzXzEuUWluRmlsZXNOYXR1cmUuQk9USCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5uYXR1cmUgPT0gcWlucGVsX3Jlc18xLlFpbkZpbGVzTmF0dXJlLkZJTEVTKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHRlbnNpb24gPSBxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmdldEZpbGVFeHRlbnNpb24obGluZVZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhc3NlZEV4dGVuc2lvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5leHRlbnNpb25zICYmIF90aGlzLmV4dGVuc2lvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc2VkRXh0ZW5zaW9uID0gX3RoaXMuZXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFzc2VkRXh0ZW5zaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5uZXdGaWxlKGxpbmVWYWx1ZSwgZXh0ZW5zaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmRpdkJvZHkuaW5uZXJUZXh0ID0gcWlucGVsX3Jlc18xLlFpblNvdWwuaGVhZC5nZXRFcnJvck1lc3NhZ2UoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBRaW5FeHBsb3Jlci5wcm90b3R5cGUuY2xlYW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kaXZCb2R5LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYWN0dWFsRm9sZGVyID0gXCJcIjtcclxuICAgICAgICB0aGlzLnNlcnZlckZvbGRlciA9IFwiXCI7XHJcbiAgICB9O1xyXG4gICAgUWluRXhwbG9yZXIucHJvdG90eXBlLmNsZWFuU2VsZWN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLml0ZW1zOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IF9hW19pXTtcclxuICAgICAgICAgICAgaXRlbS51bnNlbGVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gUWluRXhwbG9yZXI7XHJcbn0ocWluX2VkaXRfMS5RaW5FZGl0KSk7XHJcbmV4cG9ydHMuUWluRXhwbG9yZXIgPSBRaW5FeHBsb3JlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWV4cGxvcmVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkZpZWxkID0gdm9pZCAwO1xyXG52YXIgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG52YXIgcWluX2NvbHVtbl8xID0gcmVxdWlyZShcIi4vcWluLWNvbHVtblwiKTtcclxudmFyIHFpbl9sYWJlbF8xID0gcmVxdWlyZShcIi4vcWluLWxhYmVsXCIpO1xyXG52YXIgUWluRmllbGQgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFFpbkZpZWxkLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUWluRmllbGQodGl0bGUsIGVkaXQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnFpbkZpZWxkID0gbmV3IHFpbl9jb2x1bW5fMS5RaW5Db2x1bW4oKTtcclxuICAgICAgICBfdGhpcy5xaW5MYWJlbCA9IG5ldyBxaW5fbGFiZWxfMS5RaW5MYWJlbCgpO1xyXG4gICAgICAgIF90aGlzLnFpbkVkaXQgPSBudWxsO1xyXG4gICAgICAgIF90aGlzLnFpbkxhYmVsLnNldFRpdGxlKHRpdGxlKTtcclxuICAgICAgICBfdGhpcy5xaW5MYWJlbC5pbnN0YWxsKF90aGlzLnFpbkZpZWxkKTtcclxuICAgICAgICBfdGhpcy5xaW5FZGl0ID0gZWRpdDtcclxuICAgICAgICBfdGhpcy5xaW5FZGl0Lmluc3RhbGwoX3RoaXMucWluRmllbGQpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFFpbkZpZWxkLnByb3RvdHlwZS5nZXRNYWluID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnFpbkZpZWxkLmdldE1haW4oKTtcclxuICAgIH07XHJcbiAgICBRaW5GaWVsZC5wcm90b3R5cGUuZ2V0RGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5xaW5FZGl0LmdldERhdGEoKTtcclxuICAgIH07XHJcbiAgICBRaW5GaWVsZC5wcm90b3R5cGUuc2V0RGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5xaW5FZGl0LnNldERhdGEoZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFFpbkZpZWxkO1xyXG59KHFpbl9lZGl0XzEuUWluRWRpdCkpO1xyXG5leHBvcnRzLlFpbkZpZWxkID0gUWluRmllbGQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1maWVsZC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5JY29uID0gdm9pZCAwO1xyXG52YXIgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xyXG52YXIgcWluX2Fzc2V0c18xID0gcmVxdWlyZShcIi4vcWluLWFzc2V0c1wiKTtcclxudmFyIHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG52YXIgUWluSWNvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUWluSWNvbiwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFFpbkljb24oYXNzZXQsIHNpemUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmltZ0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIF90aGlzLmltZ0ljb24uc3JjID0gKDAsIHFpbl9hc3NldHNfMS5xaW5Bc3NldFVybCkoYXNzZXQpO1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLnNraW4uc3R5bGVTaXplKF90aGlzLmltZ0ljb24sIHNpemUpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFFpbkljb24ucHJvdG90eXBlLmdldE1haW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1nSWNvbjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUWluSWNvbjtcclxufShxaW5fYmFzZV8xLlFpbkJhc2UpKTtcclxuZXhwb3J0cy5RaW5JY29uID0gUWluSWNvbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWljb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluTGFiZWwgPSB2b2lkIDA7XHJcbnZhciBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XHJcbnZhciBRaW5MYWJlbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUWluTGFiZWwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBRaW5MYWJlbCh0aXRsZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuc3BhbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgaWYgKHRpdGxlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnNwYW5MYWJlbC50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBRaW5MYWJlbC5wcm90b3R5cGUuZ2V0TWFpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcGFuTGFiZWw7XHJcbiAgICB9O1xyXG4gICAgUWluTGFiZWwucHJvdG90eXBlLnNldFRpdGxlID0gZnVuY3Rpb24gKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy5zcGFuTGFiZWwudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgIH07XHJcbiAgICBRaW5MYWJlbC5wcm90b3R5cGUuZ2V0VGl0bGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BhbkxhYmVsLnRleHRDb250ZW50O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBRaW5MYWJlbDtcclxufShxaW5fYmFzZV8xLlFpbkJhc2UpKTtcclxuZXhwb3J0cy5RaW5MYWJlbCA9IFFpbkxhYmVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tbGFiZWwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluTGluZSA9IHZvaWQgMDtcclxudmFyIHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcclxudmFyIHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG52YXIgcWluX2xpbmVfc3R5bGVzXzEgPSByZXF1aXJlKFwiLi9zdHlsZXMvcWluLWxpbmUtc3R5bGVzXCIpO1xyXG52YXIgUWluTGluZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUWluTGluZSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFFpbkxpbmUoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5kaXZQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgX3RoaXMuaW5pdFBhbmVsKCk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgUWluTGluZS5wcm90b3R5cGUuaW5pdFBhbmVsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHFpbl9saW5lX3N0eWxlc18xLmRlZmF1bHQuYXBwbHlPblBhbmVsKHRoaXMuZGl2UGFuZWwpO1xyXG4gICAgfTtcclxuICAgIFFpbkxpbmUucHJvdG90eXBlLnB1dEFzQm9keSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZGl2UGFuZWwpO1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLnNraW4uc3R5bGVBc0JvZHkodGhpcy5kaXZQYW5lbCk7XHJcbiAgICB9O1xyXG4gICAgUWluTGluZS5wcm90b3R5cGUuZ2V0TWFpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXZQYW5lbDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUWluTGluZTtcclxufShxaW5fYmFzZV8xLlFpbkJhc2UpKTtcclxuZXhwb3J0cy5RaW5MaW5lID0gUWluTGluZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWxpbmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluUGFuZWwgPSB2b2lkIDA7XHJcbnZhciBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XHJcbnZhciBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxudmFyIHFpbl9wYW5lbF9zdHlsZXNfMSA9IHJlcXVpcmUoXCIuL3N0eWxlcy9xaW4tcGFuZWwtc3R5bGVzXCIpO1xyXG52YXIgUWluUGFuZWwgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFFpblBhbmVsLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUWluUGFuZWwoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5kaXZQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgX3RoaXMuaW5pdFBhbmVsKCk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgUWluUGFuZWwucHJvdG90eXBlLmluaXRQYW5lbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBxaW5fcGFuZWxfc3R5bGVzXzEuZGVmYXVsdC5hcHBseU9uUGFuZWwodGhpcy5kaXZQYW5lbCk7XHJcbiAgICB9O1xyXG4gICAgUWluUGFuZWwucHJvdG90eXBlLnB1dEFzQm9keSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZGl2UGFuZWwpO1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLnNraW4uc3R5bGVBc0JvZHkodGhpcy5kaXZQYW5lbCk7XHJcbiAgICB9O1xyXG4gICAgUWluUGFuZWwucHJvdG90eXBlLmdldE1haW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGl2UGFuZWw7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFFpblBhbmVsO1xyXG59KHFpbl9iYXNlXzEuUWluQmFzZSkpO1xyXG5leHBvcnRzLlFpblBhbmVsID0gUWluUGFuZWw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1wYW5lbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5QYXRoID0gdm9pZCAwO1xyXG52YXIgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG52YXIgcWluX2xpbmVfMSA9IHJlcXVpcmUoXCIuL3Fpbi1saW5lXCIpO1xyXG52YXIgcWluX3N0cmluZ18xID0gcmVxdWlyZShcIi4vcWluLXN0cmluZ1wiKTtcclxudmFyIHFpbl9idXR0b25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1idXR0b25cIik7XHJcbnZhciBxaW5fYXNzZXRzXzEgPSByZXF1aXJlKFwiLi9xaW4tYXNzZXRzXCIpO1xyXG52YXIgcWluX2ljb25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uXCIpO1xyXG52YXIgcWluX2Nob29zZXJfMSA9IHJlcXVpcmUoXCIuL3Fpbi1jaG9vc2VyXCIpO1xyXG52YXIgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbnZhciBRaW5QYXRoID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhRaW5QYXRoLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUWluUGF0aCgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnFpbkxpbmUgPSBuZXcgcWluX2xpbmVfMS5RaW5MaW5lKCk7XHJcbiAgICAgICAgX3RoaXMucWluUGF0aCA9IG5ldyBxaW5fc3RyaW5nXzEuUWluU3RyaW5nKCk7XHJcbiAgICAgICAgX3RoaXMucWluQWN0aW9uID0gbmV3IHFpbl9idXR0b25fMS5RaW5CdXR0b24obmV3IHFpbl9pY29uXzEuUWluSWNvbihxaW5fYXNzZXRzXzEuUWluQXNzZXQuRmFjZUNvZywgcWlucGVsX3Jlc18xLlFpbkdyYW5kZXVyLlNNQUxMKSk7XHJcbiAgICAgICAgX3RoaXMucWluQ2hvb3NlciA9IG5ldyBxaW5fY2hvb3Nlcl8xLlFpbkNob29zZXIoKTtcclxuICAgICAgICBfdGhpcy5xaW5QYXRoLmluc3RhbGwoX3RoaXMucWluTGluZSk7XHJcbiAgICAgICAgX3RoaXMuaW5pdEFjdGlvbigpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFFpblBhdGgucHJvdG90eXBlLmluaXRBY3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5xaW5BY3Rpb24uaW5zdGFsbCh0aGlzLnFpbkxpbmUpO1xyXG4gICAgICAgIHZhciBwb3B1cCA9IHRoaXMucWlucGVsKCkuZnJhbWUubmV3UG9wdXAodGhpcy5xaW5BY3Rpb24uZ2V0TWFpbigpLCB0aGlzLnFpbkNob29zZXIuZ2V0TWFpbigpKTtcclxuICAgICAgICB0aGlzLnFpbkFjdGlvbi5hZGRBY3Rpb24oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBwb3B1cC50b2dnbGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBRaW5QYXRoLnByb3RvdHlwZS5nZXRNYWluID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnFpbkxpbmUuZ2V0TWFpbigpO1xyXG4gICAgfTtcclxuICAgIFFpblBhdGgucHJvdG90eXBlLmdldERhdGEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucWluUGF0aC5nZXREYXRhKCk7XHJcbiAgICB9O1xyXG4gICAgUWluUGF0aC5wcm90b3R5cGUuc2V0RGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5xaW5QYXRoLnNldERhdGEoZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFFpblBhdGg7XHJcbn0ocWluX2VkaXRfMS5RaW5FZGl0KSk7XHJcbmV4cG9ydHMuUWluUGF0aCA9IFFpblBhdGg7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1wYXRoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpblN0cmluZyA9IHZvaWQgMDtcclxudmFyIHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG52YXIgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG52YXIgUWluU3RyaW5nID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhRaW5TdHJpbmcsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBRaW5TdHJpbmcoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5pbnB1dFN0cmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBfdGhpcy5pbnB1dFN0cmluZy50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNvdWwuc2tpbi5zdHlsZUFzRWRpdChfdGhpcy5pbnB1dFN0cmluZyk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgUWluU3RyaW5nLnByb3RvdHlwZS5nZXRNYWluID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0U3RyaW5nO1xyXG4gICAgfTtcclxuICAgIFFpblN0cmluZy5wcm90b3R5cGUuZ2V0RGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dFN0cmluZy52YWx1ZTtcclxuICAgIH07XHJcbiAgICBRaW5TdHJpbmcucHJvdG90eXBlLnNldERhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRTdHJpbmcudmFsdWUgPSBkYXRhO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBRaW5TdHJpbmc7XHJcbn0ocWluX2VkaXRfMS5RaW5FZGl0KSk7XHJcbmV4cG9ydHMuUWluU3RyaW5nID0gUWluU3RyaW5nO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tc3RyaW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0ge1xyXG4gICAgYXBwbHlPbkJ1dHRvbjogZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNvdWwuc2tpbi5zdHlsZUFzRWRpdChlbCk7XHJcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xyXG4gICAgICAgIGVsLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xyXG4gICAgfVxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tYnV0dG9uLXN0eWxlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB7XHJcbiAgICBhcHBseU9uUGFuZWw6IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBlbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcclxuICAgICAgICBlbC5zdHlsZS5mbGV4V3JhcCA9IFwibm93cmFwXCI7XHJcbiAgICB9LFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tY29sdW1uLXN0eWxlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHtcclxuICAgIGFwcGx5T25EaXZCb2R5OiBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU291bC5za2luLnN0eWxlQXNFZGl0KGVsKTtcclxuICAgICAgICBlbC5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG4gICAgICAgIGVsLnN0eWxlLm1pbkhlaWdodCA9IFwiODRweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLm1pbldpZHRoID0gXCIxNDBweFwiO1xyXG4gICAgICAgIGVsLnRhYkluZGV4ID0gMDtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uRGl2SXRlbTogZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNvdWwuc2tpbi5zdHlsZUFzRWRpdChlbCk7XHJcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgZWwuc3R5bGUucGFkZGluZyA9IFwiOXB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUubWFyZ2luID0gXCIycHhcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uRGl2SXRlbUJvZHk6IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBlbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcclxuICAgICAgICBlbC5zdHlsZS53aWR0aCA9IFwiMTIwcHhcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uU3Bhbkljb246IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIGVsLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPblNwYW5UZXh0OiBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICBlbC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgIGVsLnN0eWxlLndvcmRXcmFwID0gXCJicmVhay13b3JkXCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkRpdlNlbGVjdDogZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjNmMwMGZmM2RcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uRGl2VW5TZWxlY3Q6IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaW5pdGlhbFwiO1xyXG4gICAgfVxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tZXhwbG9yZXItc3R5bGVzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHtcclxuICAgIGFwcGx5T25QYW5lbDogZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xyXG4gICAgICAgIGVsLnN0eWxlLmZsZXhXcmFwID0gXCJ3cmFwXCI7XHJcbiAgICB9XHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1saW5lLXN0eWxlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB7XHJcbiAgICBhcHBseU9uUGFuZWw6IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBlbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcclxuICAgICAgICBlbC5zdHlsZS5mbGV4V3JhcCA9IFwibm93cmFwXCI7XHJcbiAgICB9LFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tcGFuZWwtc3R5bGVzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluU291bCA9IGV4cG9ydHMuUWluU2tpbiA9IGV4cG9ydHMuUWluU3R5bGVzID0gZXhwb3J0cy5RaW5IZWFkID0gZXhwb3J0cy5RaW5HcmFuZGV1ciA9IGV4cG9ydHMuUWluQm91bmRzID0gZXhwb3J0cy5RaW5EaW1lbnNpb24gPSBleHBvcnRzLlFpblBvaW50ID0gZXhwb3J0cy5RaW5Gb290ID0gZXhwb3J0cy5RaW5GaWxlc0Rlc2NyaXB0b3IgPSBleHBvcnRzLlFpbkZpbGVzT3BlcmF0aW9uID0gZXhwb3J0cy5RaW5GaWxlc05hdHVyZSA9IGV4cG9ydHMuUWluQm9keSA9IGV4cG9ydHMuUWluQXJtID0gZXhwb3J0cy5RaW5FdmVudCA9IGV4cG9ydHMuUWluRHJhZ0NhbGxzID0gdm9pZCAwO1xyXG52YXIgcWluX2FybV8xID0gcmVxdWlyZShcIi4vc3JjL3Fpbi1hcm1cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkRyYWdDYWxsc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2FybV8xLlFpbkRyYWdDYWxsczsgfSB9KTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRXZlbnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9hcm1fMS5RaW5FdmVudDsgfSB9KTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQXJtXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYXJtXzEuUWluQXJtOyB9IH0pO1xyXG52YXIgcWluX2JvZHlfMSA9IHJlcXVpcmUoXCIuL3NyYy9xaW4tYm9keVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQm9keVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2JvZHlfMS5RaW5Cb2R5OyB9IH0pO1xyXG52YXIgcWluX2Zvb3RfMSA9IHJlcXVpcmUoXCIuL3NyYy9xaW4tZm9vdFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRmlsZXNOYXR1cmVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9mb290XzEuUWluRmlsZXNOYXR1cmU7IH0gfSk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZpbGVzT3BlcmF0aW9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZm9vdF8xLlFpbkZpbGVzT3BlcmF0aW9uOyB9IH0pO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5GaWxlc0Rlc2NyaXB0b3JcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9mb290XzEuUWluRmlsZXNEZXNjcmlwdG9yOyB9IH0pO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Gb290XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZm9vdF8xLlFpbkZvb3Q7IH0gfSk7XHJcbnZhciBxaW5faGVhZF8xID0gcmVxdWlyZShcIi4vc3JjL3Fpbi1oZWFkXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Qb2ludFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2hlYWRfMS5RaW5Qb2ludDsgfSB9KTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRGltZW5zaW9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faGVhZF8xLlFpbkRpbWVuc2lvbjsgfSB9KTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQm91bmRzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faGVhZF8xLlFpbkJvdW5kczsgfSB9KTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluR3JhbmRldXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9oZWFkXzEuUWluR3JhbmRldXI7IH0gfSk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkhlYWRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9oZWFkXzEuUWluSGVhZDsgfSB9KTtcclxudmFyIHFpbl9za2luXzEgPSByZXF1aXJlKFwiLi9zcmMvcWluLXNraW5cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblN0eWxlc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3NraW5fMS5RaW5TdHlsZXM7IH0gfSk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblNraW5cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9za2luXzEuUWluU2tpbjsgfSB9KTtcclxudmFyIHFpbl9zb3VsXzEgPSByZXF1aXJlKFwiLi9zcmMvcWluLXNvdWxcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblNvdWxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9zb3VsXzEuUWluU291bDsgfSB9KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWxsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluQXJtID0gZXhwb3J0cy5RaW5FdmVudCA9IGV4cG9ydHMuUWluRHJhZ0NhbGxzID0gdm9pZCAwO1xyXG52YXIgcWluX3NraW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1za2luXCIpO1xyXG52YXIgUWluRHJhZ0NhbGxzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFFpbkRyYWdDYWxscygpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBRaW5EcmFnQ2FsbHM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUWluRHJhZ0NhbGxzID0gUWluRHJhZ0NhbGxzO1xyXG52YXIgUWluRXZlbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUWluRXZlbnQoKSB7XHJcbiAgICAgICAgdGhpcy5mcm9tVHlwaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5mcm9tUG9pbnRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhhc0FsdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaGFzQ3RybCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaGFzU2hpZnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhhc01ldGEgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzRW50ZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzRXNjYXBlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0RvdWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNMb25nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5rZXlUeXBlZCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5wb2ludE9uWCA9IC0xO1xyXG4gICAgICAgIHRoaXMucG9pbnRPblkgPSAtMTtcclxuICAgICAgICB0aGlzLnN0b3BFdmVudCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgUWluRXZlbnQucHJvdG90eXBlLnNldEZyb21LZXlib2FyZCA9IGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIHRoaXMuZnJvbVR5cGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5oYXNBbHQgPSBldi5hbHRLZXk7XHJcbiAgICAgICAgdGhpcy5oYXNDdHJsID0gZXYuY3RybEtleTtcclxuICAgICAgICB0aGlzLmhhc1NoaWZ0ID0gZXYuc2hpZnRLZXk7XHJcbiAgICAgICAgdGhpcy5oYXNNZXRhID0gZXYubWV0YUtleTtcclxuICAgICAgICB0aGlzLmlzRW50ZXIgPSBpc0tleUVudGVyKGV2KTtcclxuICAgICAgICB0aGlzLmlzRXNjYXBlID0gaXNLZXlFc2NhcGUoZXYpO1xyXG4gICAgICAgIHRoaXMuaXNTcGFjZSA9IGlzS2V5U3BhY2UoZXYpO1xyXG4gICAgICAgIHRoaXMua2V5VHlwZWQgPSBldi5rZXk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgUWluRXZlbnQucHJvdG90eXBlLnNldEZyb21Nb3VzZSA9IGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIHRoaXMuZnJvbVBvaW50aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmhhc0FsdCA9IGV2LmFsdEtleTtcclxuICAgICAgICB0aGlzLmhhc0N0cmwgPSBldi5jdHJsS2V5O1xyXG4gICAgICAgIHRoaXMuaGFzU2hpZnQgPSBldi5zaGlmdEtleTtcclxuICAgICAgICB0aGlzLmhhc01ldGEgPSBldi5tZXRhS2V5O1xyXG4gICAgICAgIHRoaXMucG9pbnRPblggPSBldi5jbGllbnRYO1xyXG4gICAgICAgIHRoaXMucG9pbnRPblkgPSBldi5jbGllbnRZO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFFpbkV2ZW50LnByb3RvdHlwZS5zZXRGcm9tVG91Y2ggPSBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICB0aGlzLmZyb21Qb2ludGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5oYXNBbHQgPSBldi5hbHRLZXk7XHJcbiAgICAgICAgdGhpcy5oYXNDdHJsID0gZXYuY3RybEtleTtcclxuICAgICAgICB0aGlzLmhhc1NoaWZ0ID0gZXYuc2hpZnRLZXk7XHJcbiAgICAgICAgdGhpcy5oYXNNZXRhID0gZXYubWV0YUtleTtcclxuICAgICAgICBpZiAoZXYudG91Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRPblggPSBldi50b3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRPblkgPSBldi50b3VjaGVzWzBdLmNsaWVudFk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFFpbkV2ZW50LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3RvcEV2ZW50ID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUWluRXZlbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUWluRXZlbnQgPSBRaW5FdmVudDtcclxuO1xyXG5mdW5jdGlvbiBzdG9wRXZlbnQoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbnZhciBsYXN0RXZlbnRQb2ludGVyID0gbnVsbDtcclxuZnVuY3Rpb24gbWFrZUV2ZW50UG9pbnRlcihpc0Rvd24sIGV2KSB7XHJcbiAgICB2YXIgcmVzdWx0ID0ge1xyXG4gICAgICAgIHBvc1g6IDAsXHJcbiAgICAgICAgcG9zWTogMCxcclxuICAgIH07XHJcbiAgICBpZiAoZXYgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2LmNsaWVudFggfHwgZXYuY2xpZW50WSkge1xyXG4gICAgICAgICAgICByZXN1bHQucG9zWCA9IGV2LmNsaWVudFg7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wb3NZID0gZXYuY2xpZW50WTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChldiBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcclxuICAgICAgICBpZiAoZXYudG91Y2hlcyAmJlxyXG4gICAgICAgICAgICBldi50b3VjaGVzWzBdICYmXHJcbiAgICAgICAgICAgIChldi50b3VjaGVzWzBdLmNsaWVudFggfHwgZXYudG91Y2hlc1swXS5jbGllbnRZKSkge1xyXG4gICAgICAgICAgICByZXN1bHQucG9zWCA9IGV2LnRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICAgICAgcmVzdWx0LnBvc1kgPSBldi50b3VjaGVzWzBdLmNsaWVudFk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGlzRG93bikge1xyXG4gICAgICAgIGxhc3RFdmVudFBvaW50ZXIgPSBldjtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gaXNFdmVudFBvaW50ZXJEb3VibGUoaXNEb3duLCBldikge1xyXG4gICAgaWYgKCFpc0Rvd24gfHwgbGFzdEV2ZW50UG9pbnRlciA9PSBudWxsIHx8IGV2ID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB2YXIgdGltZURpZiA9IGV2LnRpbWVTdGFtcCAtIGxhc3RFdmVudFBvaW50ZXIudGltZVN0YW1wO1xyXG4gICAgcmV0dXJuIHRpbWVEaWYgPCA0NTA7XHJcbn1cclxuZnVuY3Rpb24gaXNFdmVudFBvaW50ZXJMb25nKGlzRG93biwgZXYpIHtcclxuICAgIGlmICghaXNEb3duIHx8IGxhc3RFdmVudFBvaW50ZXIgPT0gbnVsbCB8fCBldiA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdmFyIHRpbWVEaWYgPSBldi50aW1lU3RhbXAgLSBsYXN0RXZlbnRQb2ludGVyLnRpbWVTdGFtcDtcclxuICAgIHJldHVybiB0aW1lRGlmID4gODQwO1xyXG59XHJcbmZ1bmN0aW9uIGlzS2V5SW5MaXN0KGV2LCBsaXN0KSB7XHJcbiAgICB2YXIga2V5TG93ZXIgPSBldi5rZXkudG9Mb3dlckNhc2UoKTtcclxuICAgIHJldHVybiBsaXN0LmluZGV4T2Yoa2V5TG93ZXIpID4gLTE7XHJcbn1cclxuZnVuY3Rpb24gaXNLZXlFbnRlcihldikge1xyXG4gICAgcmV0dXJuIGlzS2V5SW5MaXN0KGV2LCBbXCJlbnRlclwiLCBcInJldHVyblwiXSkgfHwgZXYua2V5Q29kZSA9PT0gMTM7XHJcbn1cclxuZnVuY3Rpb24gaXNLZXlFc2NhcGUoZXYpIHtcclxuICAgIHJldHVybiBpc0tleUluTGlzdChldiwgW1wiZXNjXCIsIFwiZXNjYXBlXCJdKSB8fCBldi5rZXlDb2RlID09PSAyNztcclxufVxyXG5mdW5jdGlvbiBpc0tleVNwYWNlKGV2KSB7XHJcbiAgICByZXR1cm4gaXNLZXlJbkxpc3QoZXYsIFtcIiBcIiwgXCJzcGFjZVwiLCBcInNwYWNlYmFyXCJdKSB8fCBldi5rZXlDb2RlID09PSAzMjtcclxufVxyXG5mdW5jdGlvbiBhZGRLZXlBY3Rpb24oZWxlbWVudCwgYWN0aW9uKSB7XHJcbiAgICBlbGVtZW50Lm9ua2V5ZG93biA9IGFjdGlvbktleWJvYXJkO1xyXG4gICAgZnVuY3Rpb24gYWN0aW9uS2V5Ym9hcmQoZXYpIHtcclxuICAgICAgICBpZiAoaXNLZXlFbnRlcihldikpIHtcclxuICAgICAgICAgICAgYWN0aW9uKG5ldyBRaW5FdmVudCgpLnNldEZyb21LZXlib2FyZChldikpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uKGVsZW1lbnQsIGFjdGlvbikge1xyXG4gICAgZWxlbWVudC5vbmtleWRvd24gPSBhY3Rpb25LZXlib2FyZDtcclxuICAgIGVsZW1lbnQub25tb3VzZXVwID0gYWN0aW9uTW91c2U7XHJcbiAgICBlbGVtZW50Lm9udG91Y2hlbmQgPSBhY3Rpb25Ub3VjaDtcclxuICAgIGZ1bmN0aW9uIGFjdGlvbktleWJvYXJkKGV2KSB7XHJcbiAgICAgICAgdmFyIHFpbkV2ZW50ID0gbmV3IFFpbkV2ZW50KCkuc2V0RnJvbUtleWJvYXJkKGV2KTtcclxuICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5zdG9wRXZlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhY3Rpb25Nb3VzZShldikge1xyXG4gICAgICAgIHZhciBxaW5FdmVudCA9IG5ldyBRaW5FdmVudCgpLnNldEZyb21Nb3VzZShldik7XHJcbiAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICBpZiAocWluRXZlbnQuc3RvcEV2ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWN0aW9uVG91Y2goZXYpIHtcclxuICAgICAgICB2YXIgcWluRXZlbnQgPSBuZXcgUWluRXZlbnQoKS5zZXRGcm9tVG91Y2goZXYpO1xyXG4gICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LnN0b3BFdmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRNb3Zlcihzb3VyY2VzLCB0YXJnZXQsIGRyYWdDYWxscykge1xyXG4gICAgdmFyIGRyYWdJbml0RXZlbnRYID0gMDtcclxuICAgIHZhciBkcmFnSW5pdEV2ZW50WSA9IDA7XHJcbiAgICB2YXIgZHJhZ0luaXRQb3NYID0gMDtcclxuICAgIHZhciBkcmFnSW5pdFBvc1kgPSAwO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBzb3VyY2VzXzEgPSBzb3VyY2VzOyBfaSA8IHNvdXJjZXNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgc291cmNlID0gc291cmNlc18xW19pXTtcclxuICAgICAgICBzb3VyY2Uub25tb3VzZWRvd24gPSBvbk1vdmVySW5pdDtcclxuICAgICAgICBzb3VyY2Uub250b3VjaHN0YXJ0ID0gb25Nb3ZlckluaXQ7XHJcbiAgICAgICAgc291cmNlLm9uZHJhZ3N0YXJ0ID0gc3RvcEV2ZW50O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25Nb3ZlckluaXQoZXYpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQub25tb3VzZW1vdmUgfHwgZG9jdW1lbnQub250b3VjaG1vdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkRvdWJsZSAmJiBpc0V2ZW50UG9pbnRlckRvdWJsZSh0cnVlLCBldikpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRG91YmxlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Mb25nICYmIGlzRXZlbnRQb2ludGVyTG9uZyh0cnVlLCBldikpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTG9uZygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwb2ludGVyID0gbWFrZUV2ZW50UG9pbnRlcih0cnVlLCBldik7XHJcbiAgICAgICAgZHJhZ0luaXRFdmVudFggPSBwb2ludGVyLnBvc1g7XHJcbiAgICAgICAgZHJhZ0luaXRFdmVudFkgPSBwb2ludGVyLnBvc1k7XHJcbiAgICAgICAgZHJhZ0luaXRQb3NYID0gcGFyc2VJbnQodGFyZ2V0LnN0eWxlLmxlZnQsIDEwKTtcclxuICAgICAgICBkcmFnSW5pdFBvc1kgPSBwYXJzZUludCh0YXJnZXQuc3R5bGUudG9wLCAxMCk7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBvbk1vdmVyTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG9uTW92ZXJNb3ZlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBvbk1vdmVyQ2xvc2U7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gb25Nb3ZlckNsb3NlO1xyXG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5oaWRlQWxsSUZyYW1lcygpO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uU3RhcnQpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uU3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvbk1vdmVyTW92ZShldikge1xyXG4gICAgICAgIHZhciBwb2ludGVyID0gbWFrZUV2ZW50UG9pbnRlcihmYWxzZSwgZXYpO1xyXG4gICAgICAgIHZhciBkcmFnRGlmWCA9IHBvaW50ZXIucG9zWCAtIGRyYWdJbml0RXZlbnRYO1xyXG4gICAgICAgIHZhciBkcmFnRGlmWSA9IHBvaW50ZXIucG9zWSAtIGRyYWdJbml0RXZlbnRZO1xyXG4gICAgICAgIHZhciBkcmFnRmluYWxYID0gZHJhZ0luaXRQb3NYICsgZHJhZ0RpZlg7XHJcbiAgICAgICAgdmFyIGRyYWdGaW5hbFkgPSBkcmFnSW5pdFBvc1kgKyBkcmFnRGlmWTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUubGVmdCA9IChkcmFnRmluYWxYID4gMCA/IGRyYWdGaW5hbFggOiAwKSArIFwicHhcIjtcclxuICAgICAgICB0YXJnZXQuc3R5bGUudG9wID0gKGRyYWdGaW5hbFkgPiAwID8gZHJhZ0ZpbmFsWSA6IDApICsgXCJweFwiO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTW92ZSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Nb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25Nb3ZlckNsb3NlKGV2KSB7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBudWxsO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xyXG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5zaG93QWxsSUZyYW1lcygpO1xyXG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5jbGVhclNlbGVjdGlvbigpO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRW5kKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRSZXNpemVyKHNvdXJjZXMsIHRhcmdldCwgZHJhZ0NhbGxzKSB7XHJcbiAgICB2YXIgZHJhZ0luaXRFdmVudFggPSAwO1xyXG4gICAgdmFyIGRyYWdJbml0RXZlbnRZID0gMDtcclxuICAgIHZhciBkcmFnSW5pdFdpZHRoID0gMDtcclxuICAgIHZhciBkcmFnSW5pdEhlaWdodCA9IDA7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIHNvdXJjZXNfMiA9IHNvdXJjZXM7IF9pIDwgc291cmNlc18yLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzXzJbX2ldO1xyXG4gICAgICAgIHNvdXJjZS5vbm1vdXNlZG93biA9IG9uUmVzaXplckluaXQ7XHJcbiAgICAgICAgc291cmNlLm9udG91Y2hzdGFydCA9IG9uUmVzaXplckluaXQ7XHJcbiAgICAgICAgc291cmNlLm9uZHJhZ3N0YXJ0ID0gc3RvcEV2ZW50O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25SZXNpemVySW5pdChldikge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5vbm1vdXNlbW92ZSB8fCBkb2N1bWVudC5vbnRvdWNobW92ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRG91YmxlICYmIGlzRXZlbnRQb2ludGVyRG91YmxlKHRydWUsIGV2KSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Eb3VibGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkxvbmcgJiYgaXNFdmVudFBvaW50ZXJMb25nKHRydWUsIGV2KSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Mb25nKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBvaW50ZXIgPSBtYWtlRXZlbnRQb2ludGVyKHRydWUsIGV2KTtcclxuICAgICAgICBkcmFnSW5pdEV2ZW50WCA9IHBvaW50ZXIucG9zWDtcclxuICAgICAgICBkcmFnSW5pdEV2ZW50WSA9IHBvaW50ZXIucG9zWTtcclxuICAgICAgICBkcmFnSW5pdFdpZHRoID0gcGFyc2VJbnQodGFyZ2V0LnN0eWxlLndpZHRoLCAxMCk7XHJcbiAgICAgICAgZHJhZ0luaXRIZWlnaHQgPSBwYXJzZUludCh0YXJnZXQuc3R5bGUuaGVpZ2h0LCAxMCk7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBvblJlc2l6ZXJNb3ZlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gb25SZXNpemVyTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gb25SZXNpemVyQ2xvc2U7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gb25SZXNpemVyQ2xvc2U7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmhpZGVBbGxJRnJhbWVzKCk7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25TdGFydCkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25TdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uUmVzaXplck1vdmUoZXYpIHtcclxuICAgICAgICB2YXIgcG9pbnRlciA9IG1ha2VFdmVudFBvaW50ZXIoZmFsc2UsIGV2KTtcclxuICAgICAgICB2YXIgZnJhbWVEcmFnRGlmWCA9IHBvaW50ZXIucG9zWCAtIGRyYWdJbml0RXZlbnRYO1xyXG4gICAgICAgIHZhciBmcmFtZURyYWdEaWZZID0gcG9pbnRlci5wb3NZIC0gZHJhZ0luaXRFdmVudFk7XHJcbiAgICAgICAgdmFyIGZyYW1lRHJhZ0ZpbmFsV2lkdGggPSBkcmFnSW5pdFdpZHRoICsgZnJhbWVEcmFnRGlmWDtcclxuICAgICAgICB2YXIgZnJhbWVEcmFnRmluYWxIZWlnaHQgPSBkcmFnSW5pdEhlaWdodCArIGZyYW1lRHJhZ0RpZlk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLndpZHRoID0gKGZyYW1lRHJhZ0ZpbmFsV2lkdGggPiAwID8gZnJhbWVEcmFnRmluYWxXaWR0aCA6IDApICsgXCJweFwiO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPVxyXG4gICAgICAgICAgICAoZnJhbWVEcmFnRmluYWxIZWlnaHQgPiAwID8gZnJhbWVEcmFnRmluYWxIZWlnaHQgOiAwKSArIFwicHhcIjtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbk1vdmUpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uUmVzaXplckNsb3NlKGV2KSB7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBudWxsO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xyXG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5zaG93QWxsSUZyYW1lcygpO1xyXG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5jbGVhclNlbGVjdGlvbigpO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRW5kKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRTY3JvbGxlcih0YXJnZXQsIGRyYWdDYWxscykge1xyXG4gICAgdmFyIGRyYWdJbml0WCA9IDA7XHJcbiAgICB2YXIgZHJhZ0luaXRZID0gMDtcclxuICAgIHZhciBkcmFnU2Nyb2xsWCA9IDA7XHJcbiAgICB2YXIgZHJhZ1Njcm9sbFkgPSAwO1xyXG4gICAgdGFyZ2V0Lm9uZHJhZ3N0YXJ0ID0gc3RvcEV2ZW50O1xyXG4gICAgdGFyZ2V0Lm9udG91Y2hzdGFydCA9IG9uU2Nyb2xsZXJJbml0O1xyXG4gICAgdGFyZ2V0Lm9ubW91c2Vkb3duID0gb25TY3JvbGxlckluaXQ7XHJcbiAgICBmdW5jdGlvbiBvblNjcm9sbGVySW5pdChldikge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5vbm1vdXNlbW92ZSB8fCBkb2N1bWVudC5vbnRvdWNobW92ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRG91YmxlICYmIGlzRXZlbnRQb2ludGVyRG91YmxlKHRydWUsIGV2KSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Eb3VibGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkxvbmcgJiYgaXNFdmVudFBvaW50ZXJMb25nKHRydWUsIGV2KSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Mb25nKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBvaW50ZXIgPSBtYWtlRXZlbnRQb2ludGVyKHRydWUsIGV2KTtcclxuICAgICAgICBkcmFnSW5pdFggPSBwb2ludGVyLnBvc1g7XHJcbiAgICAgICAgZHJhZ0luaXRZID0gcG9pbnRlci5wb3NZO1xyXG4gICAgICAgIGRyYWdTY3JvbGxYID0gdGFyZ2V0LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgZHJhZ1Njcm9sbFkgPSB0YXJnZXQuc2Nyb2xsVG9wO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gb25TY3JvbGxlck1vdmU7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBvblNjcm9sbGVyTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gb25TY3JvbGxlckNsb3NlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG9uU2Nyb2xsZXJDbG9zZTtcclxuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uaGlkZUFsbElGcmFtZXMoKTtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vblN0YXJ0KSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vblN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25TY3JvbGxlck1vdmUoZXYpIHtcclxuICAgICAgICB2YXIgcG9pbnRlciA9IG1ha2VFdmVudFBvaW50ZXIoZmFsc2UsIGV2KTtcclxuICAgICAgICB2YXIgZHJhZ0RpZlggPSBwb2ludGVyLnBvc1ggLSBkcmFnSW5pdFg7XHJcbiAgICAgICAgdmFyIGRyYWdEaWZZID0gcG9pbnRlci5wb3NZIC0gZHJhZ0luaXRZO1xyXG4gICAgICAgIHZhciBkcmFnTmV3WCA9IGRyYWdTY3JvbGxYIC0gZHJhZ0RpZlg7XHJcbiAgICAgICAgdmFyIGRyYWdOZXdZID0gZHJhZ1Njcm9sbFkgLSBkcmFnRGlmWTtcclxuICAgICAgICB0YXJnZXQuc2Nyb2xsVG8oZHJhZ05ld1gsIGRyYWdOZXdZKTtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbk1vdmUpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsZXJDbG9zZShldikge1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGw7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbDtcclxuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uc2hvd0FsbElGcmFtZXMoKTtcclxuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uY2xlYXJTZWxlY3Rpb24oKTtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkVuZCkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25FbmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5Bcm0gPSB7XHJcbiAgICBzdG9wRXZlbnQ6IHN0b3BFdmVudCxcclxuICAgIG1ha2VFdmVudFBvaW50ZXI6IG1ha2VFdmVudFBvaW50ZXIsXHJcbiAgICBpc0V2ZW50UG9pbnRlckRvdWJsZTogaXNFdmVudFBvaW50ZXJEb3VibGUsXHJcbiAgICBpc0V2ZW50UG9pbnRlckxvbmc6IGlzRXZlbnRQb2ludGVyTG9uZyxcclxuICAgIGlzS2V5SW5MaXN0OiBpc0tleUluTGlzdCxcclxuICAgIGlzS2V5RW50ZXI6IGlzS2V5RW50ZXIsXHJcbiAgICBpc0tleVNwYWNlOiBpc0tleVNwYWNlLFxyXG4gICAgYWRkS2V5QWN0aW9uOiBhZGRLZXlBY3Rpb24sXHJcbiAgICBhZGRBY3Rpb246IGFkZEFjdGlvbixcclxuICAgIGFkZE1vdmVyOiBhZGRNb3ZlcixcclxuICAgIGFkZFJlc2l6ZXI6IGFkZFJlc2l6ZXIsXHJcbiAgICBhZGRTY3JvbGxlcjogYWRkU2Nyb2xsZXIsXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1hcm0uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Cb2R5ID0gdm9pZCAwO1xyXG5mdW5jdGlvbiBnZXRUZXh0TGluZXMoZnJvbVRleHQpIHtcclxuICAgIHJldHVybiBmcm9tVGV4dC5tYXRjaCgvW15cXHJcXG5dKy9nKTtcclxufVxyXG5mdW5jdGlvbiBnZXRDU1ZSb3dzKGZyb21UZXh0LCBuYW1lcykge1xyXG4gICAgdmFyIGxpbmVzID0gZ2V0VGV4dExpbmVzKGZyb21UZXh0KTtcclxuICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgbGluZXNfMSA9IGxpbmVzOyBfaSA8IGxpbmVzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGxpbmUgPSBsaW5lc18xW19pXTtcclxuICAgICAgICB2YXIgcm93ID0gKCFuYW1lcykgPyBbXSA6IHt9O1xyXG4gICAgICAgIHZhciBpbnNpZGVfcXVvdGVzID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGNvbHVtbl92YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgdmFyIGNvbHVtbl9pbmRleCA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgY2hhcl9pbmRleCA9IDA7IGNoYXJfaW5kZXggPCBsaW5lLmxlbmd0aDsgY2hhcl9pbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHZhciBhY3R1YWwgPSBsaW5lLmNoYXJBdChjaGFyX2luZGV4KTtcclxuICAgICAgICAgICAgaWYgKGluc2lkZV9xdW90ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3R1YWwgPT0gJ1wiJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0ID0gY2hhcl9pbmRleCA8IGxpbmUubGVuZ3RoIC0gMSA/IGxpbmUuY2hhckF0KGNoYXJfaW5kZXggKyAxKSA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQgPT0gJ1wiJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5fdmFsdWUgKz0gYWN0dWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyX2luZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNpZGVfcXVvdGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uX3ZhbHVlICs9IGFjdHVhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3R1YWwgPT0gJ1wiJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGluc2lkZV9xdW90ZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYWN0dWFsID09ICcsJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbl92YWx1ZSA9IHVubWFza1NwZWNpYWxDaGFycyhjb2x1bW5fdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbmFtZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93LnB1c2goY29sdW1uX3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2x1bW5fbmFtZSA9IFwiY29sX1wiICsgY29sdW1uX2luZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sdW1uX2luZGV4IDwgbmFtZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5fbmFtZSA9IG5hbWVzW2NvbHVtbl9pbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93W2NvbHVtbl9uYW1lXSA9IGNvbHVtbl92YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uX3ZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5faW5kZXgrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbl92YWx1ZSArPSBhY3R1YWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29sdW1uX3ZhbHVlID0gdW5tYXNrU3BlY2lhbENoYXJzKGNvbHVtbl92YWx1ZSk7XHJcbiAgICAgICAgaWYgKCFuYW1lcykge1xyXG4gICAgICAgICAgICByb3cucHVzaChjb2x1bW5fdmFsdWUpO1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChyb3cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGNvbHVtbl9uYW1lID0gXCJjb2xfXCIgKyBjb2x1bW5faW5kZXg7XHJcbiAgICAgICAgICAgIGlmIChjb2x1bW5faW5kZXggPCBuYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbl9uYW1lID0gbmFtZXNbY29sdW1uX2luZGV4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByb3dbY29sdW1uX25hbWVdID0gY29sdW1uX3ZhbHVlO1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChyb3cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gbWFza1NwZWNpYWxDaGFycyhmcm9tVGV4dCkge1xyXG4gICAgcmV0dXJuIGZyb21UZXh0XHJcbiAgICAgICAgLnJlcGxhY2UoXCJcXFxcXCIsIFwiXFxcXFxcXFxcIilcclxuICAgICAgICAucmVwbGFjZShcIlxcclwiLCBcIlxcXFxyXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJcXG5cIiwgXCJcXFxcblwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiXFx0XCIsIFwiXFxcXHRcIik7XHJcbn1cclxuZnVuY3Rpb24gdW5tYXNrU3BlY2lhbENoYXJzKGZyb21UZXh0KSB7XHJcbiAgICByZXR1cm4gZnJvbVRleHRcclxuICAgICAgICAucmVwbGFjZShcIlxcXFxcXFxcXCIsIFwiXFxcXFwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiXFxcXHJcIiwgXCJcXHJcIilcclxuICAgICAgICAucmVwbGFjZShcIlxcXFxuXCIsIFwiXFxuXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJcXFxcdFwiLCBcIlxcdFwiKTtcclxufVxyXG5leHBvcnRzLlFpbkJvZHkgPSB7XHJcbiAgICBnZXRUZXh0TGluZXM6IGdldFRleHRMaW5lcyxcclxuICAgIGdldENTVlJvd3M6IGdldENTVlJvd3MsXHJcbiAgICBtYXNrU3BlY2lhbENoYXJzOiBtYXNrU3BlY2lhbENoYXJzLFxyXG4gICAgdW5tYXNrU3BlY2lhbENoYXJzOiB1bm1hc2tTcGVjaWFsQ2hhcnMsXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1ib2R5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluRm9vdCA9IGV4cG9ydHMuUWluRmlsZXNEZXNjcmlwdG9yID0gZXhwb3J0cy5RaW5GaWxlc09wZXJhdGlvbiA9IGV4cG9ydHMuUWluRmlsZXNOYXR1cmUgPSB2b2lkIDA7XHJcbnZhciBRaW5GaWxlc05hdHVyZTtcclxuKGZ1bmN0aW9uIChRaW5GaWxlc05hdHVyZSkge1xyXG4gICAgUWluRmlsZXNOYXR1cmVbXCJESVJFQ1RPUklFU1wiXSA9IFwiZGlyZWN0b3JpZXNcIjtcclxuICAgIFFpbkZpbGVzTmF0dXJlW1wiRklMRVNcIl0gPSBcImZpbGVzXCI7XHJcbiAgICBRaW5GaWxlc05hdHVyZVtcIkJPVEhcIl0gPSBcImJvdGhcIjtcclxufSkoUWluRmlsZXNOYXR1cmUgPSBleHBvcnRzLlFpbkZpbGVzTmF0dXJlIHx8IChleHBvcnRzLlFpbkZpbGVzTmF0dXJlID0ge30pKTtcclxudmFyIFFpbkZpbGVzT3BlcmF0aW9uO1xyXG4oZnVuY3Rpb24gKFFpbkZpbGVzT3BlcmF0aW9uKSB7XHJcbiAgICBRaW5GaWxlc09wZXJhdGlvbltcIk9QRU5cIl0gPSBcIm9wZW5cIjtcclxuICAgIFFpbkZpbGVzT3BlcmF0aW9uW1wiU0FWRVwiXSA9IFwic2F2ZVwiO1xyXG59KShRaW5GaWxlc09wZXJhdGlvbiA9IGV4cG9ydHMuUWluRmlsZXNPcGVyYXRpb24gfHwgKGV4cG9ydHMuUWluRmlsZXNPcGVyYXRpb24gPSB7fSkpO1xyXG52YXIgUWluRmlsZXNEZXNjcmlwdG9yID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFFpbkZpbGVzRGVzY3JpcHRvcigpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBRaW5GaWxlc0Rlc2NyaXB0b3I7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUWluRmlsZXNEZXNjcmlwdG9yID0gUWluRmlsZXNEZXNjcmlwdG9yO1xyXG5mdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcclxuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxufVxyXG5mdW5jdGlvbiBpc0xvY2FsSG9zdCgpIHtcclxuICAgIHZhciBsb2NhdGlvbiA9IGdldExvY2F0aW9uKCk7XHJcbiAgICB2YXIgc3RhcnQgPSBsb2NhdGlvbi5pbmRleE9mKFwiOi8vXCIpO1xyXG4gICAgaWYgKHN0YXJ0ID09IC0xKSB7XHJcbiAgICAgICAgc3RhcnQgPSAwO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgc3RhcnQgKz0gMztcclxuICAgIH1cclxuICAgIGxvY2F0aW9uID0gbG9jYXRpb24uc3Vic3RyaW5nKHN0YXJ0KTtcclxuICAgIHJldHVybiBsb2NhdGlvbi5pbmRleE9mKFwibG9jYWxob3N0XCIpID09PSAwIHx8IGxvY2F0aW9uLmluZGV4T2YoXCIxMjcuMC4wLjFcIikgPT09IDA7XHJcbn1cclxuZnVuY3Rpb24gZ2V0UGF0aEpvaW4ocGF0aEEsIHBhdGhCKSB7XHJcbiAgICBpZiAocGF0aEEgPT0gbnVsbCB8fCBwYXRoQSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBwYXRoQSA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBpZiAocGF0aEIgPT0gbnVsbCB8fCBwYXRoQiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBwYXRoQiA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBpZiAocGF0aEEubGVuZ3RoID09IDApIHtcclxuICAgICAgICByZXR1cm4gcGF0aEI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwYXRoQi5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHJldHVybiBwYXRoQTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHZhciB1bmlvbiA9IFwiL1wiO1xyXG4gICAgICAgIGlmIChwYXRoQS5pbmRleE9mKFwiXFxcXFwiKSA+IC0xIHx8IHBhdGhCLmluZGV4T2YoXCJcXFxcXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgdW5pb24gPSBcIlxcXFxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBhdGhBRW5kID0gcGF0aEEuc3Vic3RyaW5nKHBhdGhBLmxlbmd0aCAtIDEsIHBhdGhBLmxlbmd0aCk7XHJcbiAgICAgICAgdmFyIHBhdGhCU3RhcnQgPSBwYXRoQi5zdWJzdHJpbmcoMCwgMSk7XHJcbiAgICAgICAgaWYgKHBhdGhBRW5kID09IHVuaW9uIHx8IHBhdGhCU3RhcnQgPT0gdW5pb24pIHtcclxuICAgICAgICAgICAgdW5pb24gPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGF0aEEgKyB1bmlvbiArIHBhdGhCO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldEZpbGVFeHRlbnNpb24obmFtZSkge1xyXG4gICAgdmFyIHBvc2l0aW9uID0gbmFtZS5sYXN0SW5kZXhPZihcIi5cIik7XHJcbiAgICBpZiAocG9zaXRpb24gPiAtMSkge1xyXG4gICAgICAgIHJldHVybiBuYW1lLnN1YnN0cmluZyhwb3NpdGlvbiArIDEpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbn1cclxudmFyIGFwcHNFeHRlbnNpb25zID0gW1xyXG4gICAgXCJodG1cIiwgXCJodG1sXCIsIFwiY3NzXCIsIFwianNcIiwgXCJqc3hcIiwgXCJ0c1wiLCBcInRzeFwiLCBcInBodG1sXCJcclxuXTtcclxuZnVuY3Rpb24gaXNGaWxlQXBwKGV4dGVuc2lvbikge1xyXG4gICAgcmV0dXJuIGFwcHNFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG59XHJcbnZhciBjbWRzRXh0ZW5zaW9ucyA9IFtcclxuICAgIFwiaFwiLCBcImNcIiwgXCJocHBcIiwgXCJjcHBcIiwgXCJyc1wiLCBcImpsXCIsXHJcbiAgICBcImNzXCIsIFwiY3Nwcm9qXCIsIFwiZnNcIiwgXCJtbFwiLCBcImZzaVwiLCBcIm1saVwiLCBcImZzeFwiLCBcImZzc2NyaXB0XCIsXHJcbiAgICBcImphdmFcIiwgXCJneVwiLCBcImd2eVwiLCBcImdyb292eVwiLCBcInNjXCIsIFwic2NhbGFcIiwgXCJjbGpcIixcclxuICAgIFwicHlcIiwgXCJydWJ5XCIsIFwicGhwXCIsIFwicGh0bWxcIixcclxuXTtcclxuZnVuY3Rpb24gaXNGaWxlQ21kKGV4dGVuc2lvbikge1xyXG4gICAgcmV0dXJuIGNtZHNFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG59XHJcbnZhciBleGVjRXh0ZW5zaW9ucyA9IFtcclxuICAgIFwiZXhlXCIsIFwiamFyXCIsIFwiY29tXCIsIFwiYmF0XCIsIFwic2hcIlxyXG5dO1xyXG5mdW5jdGlvbiBpc0ZpbGVFeGVjKGV4dGVuc2lvbikge1xyXG4gICAgcmV0dXJuIGV4ZWNFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG59XHJcbnZhciBpbWFnZUV4dGVuc2lvbnMgPSBbXHJcbiAgICBcImpwZ1wiLCBcImpwZWdcIiwgXCJwbmdcIiwgXCJnaWZcIiwgXCJibXBcIlxyXG5dO1xyXG5mdW5jdGlvbiBpc0ZpbGVJbWFnZShleHRlbnNpb24pIHtcclxuICAgIHJldHVybiBpbWFnZUV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XHJcbn1cclxudmFyIHZlY3RvckV4dGVuc2lvbnMgPSBbXHJcbiAgICBcInN2Z1wiXHJcbl07XHJcbmZ1bmN0aW9uIGlzRmlsZVZlY3RvcihleHRlbnNpb24pIHtcclxuICAgIHJldHVybiB2ZWN0b3JFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG59XHJcbnZhciBtb3ZpZUV4dGVuc2lvbnMgPSBbXHJcbiAgICBcImF2aVwiLCBcIm1wNFwiXHJcbl07XHJcbmZ1bmN0aW9uIGlzRmlsZU1vdmllKGV4dGVuc2lvbikge1xyXG4gICAgcmV0dXJuIG1vdmllRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcclxufVxyXG52YXIgbXVzaWNFeHRlbnNpb25zID0gW1xyXG4gICAgXCJ3YXZcIiwgXCJtcDNcIlxyXG5dO1xyXG5mdW5jdGlvbiBpc0ZpbGVNdXNpYyhleHRlbnNpb24pIHtcclxuICAgIHJldHVybiBtdXNpY0V4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XHJcbn1cclxudmFyIHppcHBlZEV4dGVuc2lvbnMgPSBbXHJcbiAgICBcInppcFwiLCBcInJhclwiLCBcIjd6XCIsIFwidGFyXCIsIFwiZ3pcIlxyXG5dO1xyXG5mdW5jdGlvbiBpc0ZpbGVaaXBwZWQoZXh0ZW5zaW9uKSB7XHJcbiAgICByZXR1cm4gemlwcGVkRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcclxufVxyXG5leHBvcnRzLlFpbkZvb3QgPSB7XHJcbiAgICBnZXRMb2NhdGlvbjogZ2V0TG9jYXRpb24sXHJcbiAgICBpc0xvY2FsSG9zdDogaXNMb2NhbEhvc3QsXHJcbiAgICBnZXRQYXRoSm9pbjogZ2V0UGF0aEpvaW4sXHJcbiAgICBnZXRGaWxlRXh0ZW5zaW9uOiBnZXRGaWxlRXh0ZW5zaW9uLFxyXG4gICAgaXNGaWxlQXBwOiBpc0ZpbGVBcHAsXHJcbiAgICBpc0ZpbGVDbWQ6IGlzRmlsZUNtZCxcclxuICAgIGlzRmlsZUV4ZWM6IGlzRmlsZUV4ZWMsXHJcbiAgICBpc0ZpbGVJbWFnZTogaXNGaWxlSW1hZ2UsXHJcbiAgICBpc0ZpbGVWZWN0b3I6IGlzRmlsZVZlY3RvcixcclxuICAgIGlzRmlsZU1vdmllOiBpc0ZpbGVNb3ZpZSxcclxuICAgIGlzRmlsZU11c2ljOiBpc0ZpbGVNdXNpYyxcclxuICAgIGlzRmlsZVppcHBlZDogaXNGaWxlWmlwcGVkLFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tZm9vdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkhlYWQgPSBleHBvcnRzLlFpbkdyYW5kZXVyID0gZXhwb3J0cy5RaW5Cb3VuZHMgPSBleHBvcnRzLlFpbkRpbWVuc2lvbiA9IGV4cG9ydHMuUWluUG9pbnQgPSB2b2lkIDA7XHJcbnZhciBRaW5Qb2ludCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBRaW5Qb2ludCgpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBRaW5Qb2ludDtcclxufSgpKTtcclxuZXhwb3J0cy5RaW5Qb2ludCA9IFFpblBvaW50O1xyXG47XHJcbnZhciBRaW5EaW1lbnNpb24gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUWluRGltZW5zaW9uKCkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFFpbkRpbWVuc2lvbjtcclxufSgpKTtcclxuZXhwb3J0cy5RaW5EaW1lbnNpb24gPSBRaW5EaW1lbnNpb247XHJcbjtcclxudmFyIFFpbkJvdW5kcyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBRaW5Cb3VuZHMoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUWluQm91bmRzO1xyXG59KCkpO1xyXG5leHBvcnRzLlFpbkJvdW5kcyA9IFFpbkJvdW5kcztcclxuO1xyXG52YXIgUWluR3JhbmRldXI7XHJcbihmdW5jdGlvbiAoUWluR3JhbmRldXIpIHtcclxuICAgIFFpbkdyYW5kZXVyW1wiU01BTExcIl0gPSBcInNtYWxsXCI7XHJcbiAgICBRaW5HcmFuZGV1cltcIk1FRElVTVwiXSA9IFwibWVkaXVtXCI7XHJcbiAgICBRaW5HcmFuZGV1cltcIkxBUkdFXCJdID0gXCJsYXJnZVwiO1xyXG59KShRaW5HcmFuZGV1ciA9IGV4cG9ydHMuUWluR3JhbmRldXIgfHwgKGV4cG9ydHMuUWluR3JhbmRldXIgPSB7fSkpO1xyXG5mdW5jdGlvbiBnZXREZXNrQVBJKCkge1xyXG4gICAgdmFyIHdpbiA9IHdpbmRvdztcclxuICAgIGlmICh3aW4uZGVza0FQSSkge1xyXG4gICAgICAgIHJldHVybiB3aW4uZGVza0FQSTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHdpbiA9IHdpbmRvdy5wYXJlbnQ7XHJcbiAgICB9XHJcbiAgICBpZiAod2luLmRlc2tBUEkpIHtcclxuICAgICAgICByZXR1cm4gd2luLmRlc2tBUEk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB3aW4gPSB3aW5kb3cudG9wO1xyXG4gICAgfVxyXG4gICAgaWYgKHdpbi5kZXNrQVBJKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbi5kZXNrQVBJO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5mdW5jdGlvbiBsb2cobWVzc2FnZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChfKSB7IH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZ2V0RGVza0FQSSgpLnNlbmQoXCJsb2dPbk1haW5cIiwgbWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoXykgeyB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0RXJyb3JNZXNzYWdlKGVycm9yLCBvcmlnaW4pIHtcclxuICAgIHZhciByZXN1bHQgPSBcIlByb2JsZW0gd2l0aCBcIiArIGVycm9yO1xyXG4gICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgICByZXN1bHQgKz0gXCIgLSBEYXRhOiBcIiArIGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICB9XHJcbiAgICBpZiAob3JpZ2luKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IFwiIC0gT3JpZ2luOiBcIiArIG9yaWdpbjtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gdG9nZ2xlRGV2VG9vbHMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGdldERlc2tBUEkoKS5zZW5kKFwidG9nZ2xlRGV2VG9vbHNcIik7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGxvZyhcIlByb2JsZW0gb24gdG9nZ2xlIERldlRvb2xzOiBcIiArIGdldEVycm9yTWVzc2FnZShlKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5IZWFkID0ge1xyXG4gICAgZ2V0RGVza0FQSTogZ2V0RGVza0FQSSxcclxuICAgIGxvZzogbG9nLFxyXG4gICAgZ2V0RXJyb3JNZXNzYWdlOiBnZXRFcnJvck1lc3NhZ2UsXHJcbiAgICB0b2dnbGVEZXZUb29sczogdG9nZ2xlRGV2VG9vbHMsXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1oZWFkLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluU2tpbiA9IGV4cG9ydHMuUWluU3R5bGVzID0gdm9pZCAwO1xyXG52YXIgcWluX2FybV8xID0gcmVxdWlyZShcIi4vcWluLWFybVwiKTtcclxudmFyIHFpbl9oZWFkXzEgPSByZXF1aXJlKFwiLi9xaW4taGVhZFwiKTtcclxuZXhwb3J0cy5RaW5TdHlsZXMgPSB7XHJcbiAgICBDb2xvckJhY2s6IFwiI2ZmZmFlZlwiLFxyXG4gICAgQ29sb3JNZW51OiBcIiNmYWVmZmZcIixcclxuICAgIENvbG9yRm9udDogXCIjMjcwMDM2XCIsXHJcbiAgICBGb250TmFtZTogXCJQb3BwaW5zXCIsXHJcbiAgICBGb250U2l6ZTogXCIxMnB4XCIsXHJcbn07XHJcbmZ1bmN0aW9uIHN0eWxlQXNCb2R5KGVsKSB7XHJcbiAgICBlbC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgIGVsLnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcbiAgICBlbC5zdHlsZS5yaWdodCA9IFwiMHB4XCI7XHJcbiAgICBlbC5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xyXG4gICAgZWwuc3R5bGUubGVmdCA9IFwiMHB4XCI7XHJcbiAgICBlbC5zdHlsZS5wYWRkaW5nID0gXCI5cHhcIjtcclxuICAgIGVsLnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XHJcbn1cclxuZnVuY3Rpb24gc3R5bGVBc0VkaXQoZWwpIHtcclxuICAgIGVsLnN0eWxlLm1hcmdpbiA9IFwiMXB4XCI7XHJcbiAgICBlbC5zdHlsZS5wYWRkaW5nID0gXCIzcHhcIjtcclxuICAgIGVsLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcclxuICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkICMyNzAwMzZcIjtcclxuICAgIGVsLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiM3B4XCI7XHJcbiAgICBlbC5zdHlsZS5jb2xvciA9IFwiIzI3MDAzNlwiO1xyXG4gICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmZmZmXCI7XHJcbiAgICBlbC5zdHlsZS5mb250RmFtaWx5ID0gXCJQb3BwaW5zXCI7XHJcbiAgICBlbC5zdHlsZS5mb250U2l6ZSA9IFwiMTVweFwiO1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBlbC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XHJcbiAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmFlZmZmXCI7XHJcbiAgICAgICAgZWwuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgI2FlMDAwMFwiO1xyXG4gICAgfSk7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGVsLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcclxuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmZmZcIjtcclxuICAgICAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCAjMjcwMDM2XCI7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBzdHlsZVNpemUoZWwsIHNpemUpIHtcclxuICAgIGlmIChzaXplKSB7XHJcbiAgICAgICAgaWYgKHNpemUgaW5zdGFuY2VvZiBxaW5faGVhZF8xLlFpbkRpbWVuc2lvbikge1xyXG4gICAgICAgICAgICBlbC5zdHlsZS53aWR0aCA9IHNpemUud2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IHNpemUuaGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGRpbSA9IGdldERpbWVuc2lvblNpemUoc2l6ZSk7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLndpZHRoID0gZGltLndpZHRoICsgXCJweFwiO1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSBkaW0uaGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzdHlsZUZsZXhNYXgoZWwpIHtcclxuICAgIGVsLnN0eWxlLmZsZXggPSBcIjFcIjtcclxufVxyXG5mdW5jdGlvbiBzdHlsZUZsZXhNaW4oZWwpIHtcclxuICAgIGVsLnN0eWxlLmZsZXggPSBcIjBcIjtcclxufVxyXG5mdW5jdGlvbiBnZXRXaW5kb3dTaXplKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aWR0aDogZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCxcclxuICAgICAgICBoZWlnaHQ6IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LFxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBnZXRXaW5kb3dTaXplU3R5bGUoKSB7XHJcbiAgICB2YXIgd2lkdGggPSBnZXRXaW5kb3dTaXplKCkud2lkdGg7XHJcbiAgICBpZiAod2lkdGggPCA2MDApIHtcclxuICAgICAgICByZXR1cm4gcWluX2hlYWRfMS5RaW5HcmFuZGV1ci5TTUFMTDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHdpZHRoIDwgMTAwMCkge1xyXG4gICAgICAgIHJldHVybiBxaW5faGVhZF8xLlFpbkdyYW5kZXVyLk1FRElVTTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBxaW5faGVhZF8xLlFpbkdyYW5kZXVyLkxBUkdFO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGhpZGVBbGxJRnJhbWVzKCkge1xyXG4gICAgdmFyIGRvY19pZnJhbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpZnJhbWVcIik7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY19pZnJhbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGRvY19pZnJhbWUgPSBkb2NfaWZyYW1lc1tpXTtcclxuICAgICAgICBkb2NfaWZyYW1lLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHNob3dBbGxJRnJhbWVzKCkge1xyXG4gICAgdmFyIGRvY19pZnJhbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpZnJhbWVcIik7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY19pZnJhbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGRvY19pZnJhbWUgPSBkb2NfaWZyYW1lc1tpXTtcclxuICAgICAgICBkb2NfaWZyYW1lLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBkaXNhYmxlU2VsZWN0aW9uKGVsZW1lbnQpIHtcclxuICAgIGVsZW1lbnQuc3R5bGUudXNlclNlbGVjdCA9IFwibm9uZVwiO1xyXG4gICAgZWxlbWVudC5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gXCJub25lXCI7XHJcbiAgICBlbGVtZW50Lm9uc2VsZWN0c3RhcnQgPSBxaW5fYXJtXzEuUWluQXJtLnN0b3BFdmVudDtcclxufVxyXG5mdW5jdGlvbiBjbGVhclNlbGVjdGlvbigpIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCAzNjApO1xyXG59XHJcbmZ1bmN0aW9uIGlzRWxlbWVudFZpc2libGVJblNjcm9sbChlbGVtZW50KSB7XHJcbiAgICBpZiAoZWxlbWVudC5vZmZzZXRUb3AgPCBlbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsVG9wKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGVsZW1lbnQub2Zmc2V0TGVmdCA8IGVsZW1lbnQucGFyZW50RWxlbWVudC5zY3JvbGxMZWZ0KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGVsZW1lbnQuY2xpZW50V2lkdGggPlxyXG4gICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5jbGllbnRXaWR0aCAtXHJcbiAgICAgICAgICAgIChlbGVtZW50Lm9mZnNldExlZnQgLSBlbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsTGVmdCkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZWxlbWVudC5jbGllbnRIZWlnaHQgPlxyXG4gICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5jbGllbnRIZWlnaHQgLVxyXG4gICAgICAgICAgICAoZWxlbWVudC5vZmZzZXRUb3AgLSBlbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsVG9wKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmZ1bmN0aW9uIGdldERpbWVuc2lvblNpemUoc2l6ZSkge1xyXG4gICAgaWYgKHNpemUgPT0gcWluX2hlYWRfMS5RaW5HcmFuZGV1ci5MQVJHRSkge1xyXG4gICAgICAgIHJldHVybiBnZXREaW1lbnNpb25MYXJnZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc2l6ZSA9PSBxaW5faGVhZF8xLlFpbkdyYW5kZXVyLk1FRElVTSkge1xyXG4gICAgICAgIHJldHVybiBnZXREaW1lbnNpb25NZWRpdW0oKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBnZXREaW1lbnNpb25TbWFsbCgpO1xyXG4gICAgfVxyXG59XHJcbnZhciBkaW1lbnNpb25TbWFsbCA9IHtcclxuICAgIHdpZHRoOiAxNixcclxuICAgIGhlaWdodDogMTYsXHJcbn07XHJcbmZ1bmN0aW9uIGdldERpbWVuc2lvblNtYWxsKCkge1xyXG4gICAgcmV0dXJuIGRpbWVuc2lvblNtYWxsO1xyXG59XHJcbnZhciBkaW1lbnNpb25NZWRpdW0gPSB7XHJcbiAgICB3aWR0aDogMzIsXHJcbiAgICBoZWlnaHQ6IDMyLFxyXG59O1xyXG5mdW5jdGlvbiBnZXREaW1lbnNpb25NZWRpdW0oKSB7XHJcbiAgICByZXR1cm4gZGltZW5zaW9uTWVkaXVtO1xyXG59XHJcbnZhciBkaW1lbnNpb25MYXJnZSA9IHtcclxuICAgIHdpZHRoOiA2NCxcclxuICAgIGhlaWdodDogNjQsXHJcbn07XHJcbmZ1bmN0aW9uIGdldERpbWVuc2lvbkxhcmdlKCkge1xyXG4gICAgcmV0dXJuIGRpbWVuc2lvbkxhcmdlO1xyXG59XHJcbmV4cG9ydHMuUWluU2tpbiA9IHtcclxuICAgIHN0eWxlczogZXhwb3J0cy5RaW5TdHlsZXMsXHJcbiAgICBzdHlsZUFzQm9keTogc3R5bGVBc0JvZHksXHJcbiAgICBzdHlsZUFzRWRpdDogc3R5bGVBc0VkaXQsXHJcbiAgICBzdHlsZVNpemU6IHN0eWxlU2l6ZSxcclxuICAgIHN0eWxlRmxleE1heDogc3R5bGVGbGV4TWF4LFxyXG4gICAgc3R5bGVGbGV4TWluOiBzdHlsZUZsZXhNaW4sXHJcbiAgICBnZXRXaW5kb3dTaXplOiBnZXRXaW5kb3dTaXplLFxyXG4gICAgZ2V0V2luZG93U2l6ZVN0eWxlOiBnZXRXaW5kb3dTaXplU3R5bGUsXHJcbiAgICBoaWRlQWxsSUZyYW1lczogaGlkZUFsbElGcmFtZXMsXHJcbiAgICBzaG93QWxsSUZyYW1lczogc2hvd0FsbElGcmFtZXMsXHJcbiAgICBkaXNhYmxlU2VsZWN0aW9uOiBkaXNhYmxlU2VsZWN0aW9uLFxyXG4gICAgY2xlYXJTZWxlY3Rpb246IGNsZWFyU2VsZWN0aW9uLFxyXG4gICAgaXNFbGVtZW50VmlzaWJsZUluU2Nyb2xsOiBpc0VsZW1lbnRWaXNpYmxlSW5TY3JvbGwsXHJcbiAgICBnZXREaW1lbnNpb25TaXplOiBnZXREaW1lbnNpb25TaXplLFxyXG4gICAgZ2V0RGltZW5zaW9uU21hbGw6IGdldERpbWVuc2lvblNtYWxsLFxyXG4gICAgZ2V0RGltZW5zaW9uTWVkaXVtOiBnZXREaW1lbnNpb25NZWRpdW0sXHJcbiAgICBnZXREaW1lbnNpb25MYXJnZTogZ2V0RGltZW5zaW9uTGFyZ2UsXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1za2luLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluU291bCA9IHZvaWQgMDtcclxudmFyIHFpbl9hcm1fMSA9IHJlcXVpcmUoXCIuL3Fpbi1hcm1cIik7XHJcbnZhciBxaW5fYm9keV8xID0gcmVxdWlyZShcIi4vcWluLWJvZHlcIik7XHJcbnZhciBxaW5fZm9vdF8xID0gcmVxdWlyZShcIi4vcWluLWZvb3RcIik7XHJcbnZhciBxaW5faGVhZF8xID0gcmVxdWlyZShcIi4vcWluLWhlYWRcIik7XHJcbnZhciBxaW5fc2tpbl8xID0gcmVxdWlyZShcIi4vcWluLXNraW5cIik7XHJcbmV4cG9ydHMuUWluU291bCA9IHtcclxuICAgIGFybTogcWluX2FybV8xLlFpbkFybSxcclxuICAgIGJvZHk6IHFpbl9ib2R5XzEuUWluQm9keSxcclxuICAgIGZvb3Q6IHFpbl9mb290XzEuUWluRm9vdCxcclxuICAgIGhlYWQ6IHFpbl9oZWFkXzEuUWluSGVhZCxcclxuICAgIHNraW46IHFpbl9za2luXzEuUWluU2tpbixcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXNvdWwuanMubWFwIl19
