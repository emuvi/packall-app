(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qinpel = window.frameElement.qinpel;
var all_1 = require("qinpel-cps/all");
var PackAll = (function () {
    function PackAll() {
        this.divBody = document.createElement("div");
        this.chooser = new all_1.Chooser(all_1.FilesNature.DIRECTORIES);
        this.chooser.install(this.divBody);
    }
    PackAll.prototype.install = function (on) {
        on.appendChild(this.divBody);
    };
    return PackAll;
}());
new PackAll().install(document.body);

},{"qinpel-cps/all":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesDescriptor = exports.FilesOperation = exports.FilesNature = exports.Chooser = exports.Explorer = void 0;
var explorer_1 = require("./src/explorer");
Object.defineProperty(exports, "Explorer", { enumerable: true, get: function () { return explorer_1.Explorer; } });
var chooser_1 = require("./src/chooser");
Object.defineProperty(exports, "Chooser", { enumerable: true, get: function () { return chooser_1.Chooser; } });
var files_1 = require("./src/files");
Object.defineProperty(exports, "FilesNature", { enumerable: true, get: function () { return files_1.FilesNature; } });
Object.defineProperty(exports, "FilesOperation", { enumerable: true, get: function () { return files_1.FilesOperation; } });
Object.defineProperty(exports, "FilesDescriptor", { enumerable: true, get: function () { return files_1.FilesDescriptor; } });

},{"./src/chooser":4,"./src/explorer":7,"./src/files":8}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_styles_1 = require("./common-styles");
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
        common_styles_1.default.applyOnEdit(inputName);
        inputName.style.flex = "1";
    },
    applyOnSelectType: function (selectType) {
        common_styles_1.default.applyOnEdit(selectType);
    },
};

},{"./common-styles":5}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chooser = void 0;
var qinpel = window.frameElement.qinpel;
var explorer_1 = require("./explorer");
var chooser_styles_1 = require("./chooser-styles");
var files_1 = require("./files");
var Chooser = (function () {
    function Chooser(nature, operation, descriptors) {
        this.divBody = document.createElement("div");
        this.explorer = new explorer_1.Explorer();
        this.divBottom = document.createElement("div");
        this.inputName = document.createElement("input");
        this.selectType = document.createElement("select");
        this.nature = nature ? nature : files_1.FilesNature.BOTH;
        this.operation = operation ? operation : files_1.FilesOperation.OPEN;
        this.descriptors = descriptors ? descriptors : [];
        this.initBody();
        this.initBottom();
    }
    Chooser.prototype.initBody = function () {
        chooser_styles_1.default.applyOnDivBody(this.divBody);
        this.explorer.install(this.divBody);
        this.explorer.setNature(this.nature);
        this.divBody.appendChild(this.divBottom);
    };
    Chooser.prototype.initBottom = function () {
        chooser_styles_1.default.applyOnDivBottom(this.divBottom);
        this.initInput();
        this.initSelect();
    };
    Chooser.prototype.initInput = function () {
        var _this = this;
        chooser_styles_1.default.applyOnInputName(this.inputName);
        this.divBottom.appendChild(this.inputName);
        qinpel.util.addAction(this.inputName, function (_) {
            _this.explorer.load(_this.inputName.value, function (loaded) {
                _this.inputName.value = loaded;
            });
        });
    };
    Chooser.prototype.initSelect = function () {
        if (this.descriptors.length == 0) {
            var optionAll = document.createElement("option");
            optionAll.text = "All Files (*.*)";
            optionAll.value = "*";
            optionAll.selected = true;
            this.selectType.appendChild(optionAll);
            this.explorer.setExtensions([]);
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
            this.explorer.setExtensions(this.descriptors[0].extensions);
        }
        chooser_styles_1.default.applyOnSelectType(this.selectType);
        this.divBottom.appendChild(this.selectType);
    };
    Chooser.prototype.install = function (on) {
        on.appendChild(this.divBody);
    };
    return Chooser;
}());
exports.Chooser = Chooser;

},{"./chooser-styles":3,"./explorer":7,"./files":8}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    applyOnEdit: function (edit) {
        edit.style.border = "1px solid #848484";
        edit.style.borderRadius = "2px";
        edit.style.padding = "3px";
    }
};

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_styles_1 = require("./common-styles");
exports.default = {
    applyOnDivBody: function (divBody) {
        common_styles_1.default.applyOnEdit(divBody);
        divBody.style.overflow = "auto";
        divBody.style.minHeight = "64px";
        divBody.style.minWidth = "64px";
    },
    applyOnDivItem: function (divItem) {
        divItem.style.display = "inline-block";
        divItem.style.padding = "9px";
        divItem.style.margin = "1px";
        divItem.style.borderRadius = "2px";
    },
    applyOnDivItemBody: function (divItemBody) {
        divItemBody.style.display = "flex";
        divItemBody.style.flexDirection = "column";
        divItemBody.style.cursor = "pointer";
        divItemBody.style.width = "84px";
    },
    applyOnSpanIcon: function (spanIcon) {
        spanIcon.style.textAlign = "center";
    },
    applyOnSpanText: function (spanText) {
        spanText.style.textAlign = "center";
        spanText.style.wordWrap = "break-word";
    },
    applyOnDivSelect: function (divItem) {
        divItem.style.backgroundColor = "rgba(108, 0, 255, 0.3)";
    },
    applyOnDivUnSelect: function (divItem) {
        divItem.style.backgroundColor = "initial";
    }
};

},{"./common-styles":5}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Explorer = void 0;
var qinpel = window.frameElement.qinpel;
var explorer_styles_1 = require("./explorer-styles");
var files_1 = require("./files");
var appsExtensions = ["htm", "html", "css", "js", "jsx", "ts", "tsx"];
var cmdsExtensions = [
    "h", "c", "hpp", "cpp", "rs", "jl",
    "cs", "csproj", "fs", "ml", "fsi", "mli", "fsx", "fsscript",
    "java", "gy", "gvy", "groovy", "sc", "scala", "clj",
    "py", "ruby", "php", "phtml",
];
var execExtensions = ["exe", "jar", "com", "bat", "sh"];
var imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp"];
var movieExtensions = ["avi", "mp4"];
var musicExtensions = ["wav", "mp3"];
var zippedExtensions = ["zip", "rar", "7z", "tar", "gz"];
var Explorer = (function () {
    function Explorer(nature, extensions) {
        this.divBody = document.createElement("div");
        this.actualFolder = "";
        this.serverFolder = "";
        this.nature = nature ? nature : files_1.FilesNature.BOTH;
        this.extensions = extensions ? extensions : [];
        this.initBody();
    }
    Explorer.prototype.initBody = function () {
        explorer_styles_1.default.applyOnDivBody(this.divBody);
        qinpel.util.disableSelection(this.divBody);
    };
    Explorer.prototype.install = function (on) {
        on.appendChild(this.divBody);
    };
    Explorer.prototype.setNature = function (nature) {
        this.nature = nature;
    };
    Explorer.prototype.setExtensions = function (extensions) {
        this.extensions = extensions;
    };
    Explorer.prototype.getActualFolder = function () {
        return this.actualFolder;
    };
    Explorer.prototype.getServerFolder = function () {
        return this.serverFolder;
    };
    Explorer.prototype.load = function (folder, callBack) {
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
                    if (callBack) {
                        callBack(lineValue);
                    }
                }
                else if (line.indexOf("D: ") === 0) {
                    if (_this.nature == files_1.FilesNature.BOTH ||
                        _this.nature == files_1.FilesNature.DIRECTORIES) {
                        _this.newDir(lineValue);
                    }
                }
                else if (line.indexOf("F: ") === 0) {
                    if (_this.nature == files_1.FilesNature.BOTH ||
                        _this.nature == files_1.FilesNature.FILES) {
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
    Explorer.prototype.clean = function () {
        this.divBody.innerHTML = "";
    };
    Explorer.prototype.newDir = function (name) {
        this.newItem(name, "explorer-dir.png");
    };
    Explorer.prototype.newFile = function (name, extension) {
        this.newItem(name, getIconName());
        function getIconName() {
            if (appsExtensions.indexOf(extension) > -1) {
                return "explorer-apps.png";
            }
            else if (cmdsExtensions.indexOf(extension) > -1) {
                return "explorer-cmds.png";
            }
            else if (execExtensions.indexOf(extension) > -1) {
                return "explorer-exec.png";
            }
            else if (imageExtensions.indexOf(extension) > -1) {
                return "explorer-image.png";
            }
            else if (movieExtensions.indexOf(extension) > -1) {
                return "explorer-movie.png";
            }
            else if (musicExtensions.indexOf(extension) > -1) {
                return "explorer-music.png";
            }
            else if (zippedExtensions.indexOf(extension) > -1) {
                return "explorer-zipped.png";
            }
            else {
                return "explorer-file.png";
            }
        }
    };
    Explorer.prototype.newItem = function (name, icon) {
        var divItem = document.createElement("div");
        explorer_styles_1.default.applyOnDivItem(divItem);
        this.divBody.appendChild(divItem);
        var divItemBody = document.createElement("div");
        explorer_styles_1.default.applyOnDivItemBody(divItemBody);
        divItem.appendChild(divItemBody);
        var spanIcon = document.createElement("span");
        explorer_styles_1.default.applyOnSpanIcon(spanIcon);
        divItemBody.appendChild(spanIcon);
        var imgIcon = document.createElement("img");
        imgIcon.src = "/run/app/qinpel-app/assets/" + icon;
        spanIcon.appendChild(imgIcon);
        var spanText = document.createElement("span");
        explorer_styles_1.default.applyOnSpanText(spanText);
        spanText.innerText = name;
        divItemBody.appendChild(spanText);
        var selected = false;
        qinpel.util.addAction(divItem, function () {
            if (!selected) {
                explorer_styles_1.default.applyOnDivSelect(divItem);
                selected = true;
            }
            else {
                explorer_styles_1.default.applyOnDivUnSelect(divItem);
                selected = false;
            }
        });
    };
    return Explorer;
}());
exports.Explorer = Explorer;

},{"./explorer-styles":6,"./files":8}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesDescriptor = exports.FilesOperation = exports.FilesNature = void 0;
var FilesNature;
(function (FilesNature) {
    FilesNature[FilesNature["DIRECTORIES"] = 0] = "DIRECTORIES";
    FilesNature[FilesNature["FILES"] = 1] = "FILES";
    FilesNature[FilesNature["BOTH"] = 2] = "BOTH";
})(FilesNature = exports.FilesNature || (exports.FilesNature = {}));
var FilesOperation;
(function (FilesOperation) {
    FilesOperation[FilesOperation["OPEN"] = 0] = "OPEN";
    FilesOperation[FilesOperation["SAVE"] = 1] = "SAVE";
})(FilesOperation = exports.FilesOperation || (exports.FilesOperation = {}));
var FilesDescriptor = (function () {
    function FilesDescriptor() {
    }
    return FilesDescriptor;
}());
exports.FilesDescriptor = FilesDescriptor;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1VzZXJzL2V2ZXJ0L0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9pbmRleC5qcyIsIi4uL3FpbnBlbC1jcHMvYWxsLmpzIiwiLi4vcWlucGVsLWNwcy9zcmMvY2hvb3Nlci1zdHlsZXMuanMiLCIuLi9xaW5wZWwtY3BzL3NyYy9jaG9vc2VyLmpzIiwiLi4vcWlucGVsLWNwcy9zcmMvY29tbW9uLXN0eWxlcy5qcyIsIi4uL3FpbnBlbC1jcHMvc3JjL2V4cGxvcmVyLXN0eWxlcy5qcyIsIi4uL3FpbnBlbC1jcHMvc3JjL2V4cGxvcmVyLmpzIiwiLi4vcWlucGVsLWNwcy9zcmMvZmlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHFpbnBlbCA9IHdpbmRvdy5mcmFtZUVsZW1lbnQucWlucGVsO1xyXG52YXIgYWxsXzEgPSByZXF1aXJlKFwicWlucGVsLWNwcy9hbGxcIik7XHJcbnZhciBQYWNrQWxsID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBhY2tBbGwoKSB7XHJcbiAgICAgICAgdGhpcy5kaXZCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLmNob29zZXIgPSBuZXcgYWxsXzEuQ2hvb3NlcihhbGxfMS5GaWxlc05hdHVyZS5ESVJFQ1RPUklFUyk7XHJcbiAgICAgICAgdGhpcy5jaG9vc2VyLmluc3RhbGwodGhpcy5kaXZCb2R5KTtcclxuICAgIH1cclxuICAgIFBhY2tBbGwucHJvdG90eXBlLmluc3RhbGwgPSBmdW5jdGlvbiAob24pIHtcclxuICAgICAgICBvbi5hcHBlbmRDaGlsZCh0aGlzLmRpdkJvZHkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQYWNrQWxsO1xyXG59KCkpO1xyXG5uZXcgUGFja0FsbCgpLmluc3RhbGwoZG9jdW1lbnQuYm9keSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuRmlsZXNEZXNjcmlwdG9yID0gZXhwb3J0cy5GaWxlc09wZXJhdGlvbiA9IGV4cG9ydHMuRmlsZXNOYXR1cmUgPSBleHBvcnRzLkNob29zZXIgPSBleHBvcnRzLkV4cGxvcmVyID0gdm9pZCAwO1xyXG52YXIgZXhwbG9yZXJfMSA9IHJlcXVpcmUoXCIuL3NyYy9leHBsb3JlclwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRXhwbG9yZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGV4cGxvcmVyXzEuRXhwbG9yZXI7IH0gfSk7XHJcbnZhciBjaG9vc2VyXzEgPSByZXF1aXJlKFwiLi9zcmMvY2hvb3NlclwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ2hvb3NlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2hvb3Nlcl8xLkNob29zZXI7IH0gfSk7XHJcbnZhciBmaWxlc18xID0gcmVxdWlyZShcIi4vc3JjL2ZpbGVzXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJGaWxlc05hdHVyZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmlsZXNfMS5GaWxlc05hdHVyZTsgfSB9KTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRmlsZXNPcGVyYXRpb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZpbGVzXzEuRmlsZXNPcGVyYXRpb247IH0gfSk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkZpbGVzRGVzY3JpcHRvclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmlsZXNfMS5GaWxlc0Rlc2NyaXB0b3I7IH0gfSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFsbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29tbW9uX3N0eWxlc18xID0gcmVxdWlyZShcIi4vY29tbW9uLXN0eWxlc1wiKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0ge1xyXG4gICAgYXBwbHlPbkRpdkJvZHk6IGZ1bmN0aW9uIChkaXZCb2R5KSB7XHJcbiAgICAgICAgZGl2Qm9keS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgZGl2Qm9keS5zdHlsZS5mbGV4RmxvdyA9IFwiY29sdW1uIG5vd3JhcFwiO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25EaXZCb3R0b206IGZ1bmN0aW9uIChkaXZCb3R0b20pIHtcclxuICAgICAgICBkaXZCb3R0b20uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIGRpdkJvdHRvbS5zdHlsZS5mbGV4RmxvdyA9IFwicm93IHdyYXBcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uSW5wdXROYW1lOiBmdW5jdGlvbiAoaW5wdXROYW1lKSB7XHJcbiAgICAgICAgY29tbW9uX3N0eWxlc18xLmRlZmF1bHQuYXBwbHlPbkVkaXQoaW5wdXROYW1lKTtcclxuICAgICAgICBpbnB1dE5hbWUuc3R5bGUuZmxleCA9IFwiMVwiO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25TZWxlY3RUeXBlOiBmdW5jdGlvbiAoc2VsZWN0VHlwZSkge1xyXG4gICAgICAgIGNvbW1vbl9zdHlsZXNfMS5kZWZhdWx0LmFwcGx5T25FZGl0KHNlbGVjdFR5cGUpO1xyXG4gICAgfSxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2hvb3Nlci1zdHlsZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5DaG9vc2VyID0gdm9pZCAwO1xyXG52YXIgcWlucGVsID0gd2luZG93LmZyYW1lRWxlbWVudC5xaW5wZWw7XHJcbnZhciBleHBsb3Jlcl8xID0gcmVxdWlyZShcIi4vZXhwbG9yZXJcIik7XHJcbnZhciBjaG9vc2VyX3N0eWxlc18xID0gcmVxdWlyZShcIi4vY2hvb3Nlci1zdHlsZXNcIik7XHJcbnZhciBmaWxlc18xID0gcmVxdWlyZShcIi4vZmlsZXNcIik7XHJcbnZhciBDaG9vc2VyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENob29zZXIobmF0dXJlLCBvcGVyYXRpb24sIGRlc2NyaXB0b3JzKSB7XHJcbiAgICAgICAgdGhpcy5kaXZCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLmV4cGxvcmVyID0gbmV3IGV4cGxvcmVyXzEuRXhwbG9yZXIoKTtcclxuICAgICAgICB0aGlzLmRpdkJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5pbnB1dE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICAgICAgICB0aGlzLm5hdHVyZSA9IG5hdHVyZSA/IG5hdHVyZSA6IGZpbGVzXzEuRmlsZXNOYXR1cmUuQk9USDtcclxuICAgICAgICB0aGlzLm9wZXJhdGlvbiA9IG9wZXJhdGlvbiA/IG9wZXJhdGlvbiA6IGZpbGVzXzEuRmlsZXNPcGVyYXRpb24uT1BFTjtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0b3JzID0gZGVzY3JpcHRvcnMgPyBkZXNjcmlwdG9ycyA6IFtdO1xyXG4gICAgICAgIHRoaXMuaW5pdEJvZHkoKTtcclxuICAgICAgICB0aGlzLmluaXRCb3R0b20oKTtcclxuICAgIH1cclxuICAgIENob29zZXIucHJvdG90eXBlLmluaXRCb2R5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNob29zZXJfc3R5bGVzXzEuZGVmYXVsdC5hcHBseU9uRGl2Qm9keSh0aGlzLmRpdkJvZHkpO1xyXG4gICAgICAgIHRoaXMuZXhwbG9yZXIuaW5zdGFsbCh0aGlzLmRpdkJvZHkpO1xyXG4gICAgICAgIHRoaXMuZXhwbG9yZXIuc2V0TmF0dXJlKHRoaXMubmF0dXJlKTtcclxuICAgICAgICB0aGlzLmRpdkJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kaXZCb3R0b20pO1xyXG4gICAgfTtcclxuICAgIENob29zZXIucHJvdG90eXBlLmluaXRCb3R0b20gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2hvb3Nlcl9zdHlsZXNfMS5kZWZhdWx0LmFwcGx5T25EaXZCb3R0b20odGhpcy5kaXZCb3R0b20pO1xyXG4gICAgICAgIHRoaXMuaW5pdElucHV0KCk7XHJcbiAgICAgICAgdGhpcy5pbml0U2VsZWN0KCk7XHJcbiAgICB9O1xyXG4gICAgQ2hvb3Nlci5wcm90b3R5cGUuaW5pdElucHV0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgY2hvb3Nlcl9zdHlsZXNfMS5kZWZhdWx0LmFwcGx5T25JbnB1dE5hbWUodGhpcy5pbnB1dE5hbWUpO1xyXG4gICAgICAgIHRoaXMuZGl2Qm90dG9tLmFwcGVuZENoaWxkKHRoaXMuaW5wdXROYW1lKTtcclxuICAgICAgICBxaW5wZWwudXRpbC5hZGRBY3Rpb24odGhpcy5pbnB1dE5hbWUsIGZ1bmN0aW9uIChfKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmV4cGxvcmVyLmxvYWQoX3RoaXMuaW5wdXROYW1lLnZhbHVlLCBmdW5jdGlvbiAobG9hZGVkKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5pbnB1dE5hbWUudmFsdWUgPSBsb2FkZWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIENob29zZXIucHJvdG90eXBlLmluaXRTZWxlY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVzY3JpcHRvcnMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdmFyIG9wdGlvbkFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgICAgIG9wdGlvbkFsbC50ZXh0ID0gXCJBbGwgRmlsZXMgKCouKilcIjtcclxuICAgICAgICAgICAgb3B0aW9uQWxsLnZhbHVlID0gXCIqXCI7XHJcbiAgICAgICAgICAgIG9wdGlvbkFsbC5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0VHlwZS5hcHBlbmRDaGlsZChvcHRpb25BbGwpO1xyXG4gICAgICAgICAgICB0aGlzLmV4cGxvcmVyLnNldEV4dGVuc2lvbnMoW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuZGVzY3JpcHRvcnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGVzY3JpcHRvciA9IHRoaXMuZGVzY3JpcHRvcnNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IGRlc2NyaXB0b3IuZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBkZXNjcmlwdG9yLmV4dGVuc2lvbnMuam9pbihcIjtcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gMClcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RUeXBlLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5leHBsb3Jlci5zZXRFeHRlbnNpb25zKHRoaXMuZGVzY3JpcHRvcnNbMF0uZXh0ZW5zaW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNob29zZXJfc3R5bGVzXzEuZGVmYXVsdC5hcHBseU9uU2VsZWN0VHlwZSh0aGlzLnNlbGVjdFR5cGUpO1xyXG4gICAgICAgIHRoaXMuZGl2Qm90dG9tLmFwcGVuZENoaWxkKHRoaXMuc2VsZWN0VHlwZSk7XHJcbiAgICB9O1xyXG4gICAgQ2hvb3Nlci5wcm90b3R5cGUuaW5zdGFsbCA9IGZ1bmN0aW9uIChvbikge1xyXG4gICAgICAgIG9uLmFwcGVuZENoaWxkKHRoaXMuZGl2Qm9keSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENob29zZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ2hvb3NlciA9IENob29zZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNob29zZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0ge1xyXG4gICAgYXBwbHlPbkVkaXQ6IGZ1bmN0aW9uIChlZGl0KSB7XHJcbiAgICAgICAgZWRpdC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjODQ4NDg0XCI7XHJcbiAgICAgICAgZWRpdC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjJweFwiO1xyXG4gICAgICAgIGVkaXQuc3R5bGUucGFkZGluZyA9IFwiM3B4XCI7XHJcbiAgICB9XHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbW1vbi1zdHlsZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvbW1vbl9zdHlsZXNfMSA9IHJlcXVpcmUoXCIuL2NvbW1vbi1zdHlsZXNcIik7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHtcclxuICAgIGFwcGx5T25EaXZCb2R5OiBmdW5jdGlvbiAoZGl2Qm9keSkge1xyXG4gICAgICAgIGNvbW1vbl9zdHlsZXNfMS5kZWZhdWx0LmFwcGx5T25FZGl0KGRpdkJvZHkpO1xyXG4gICAgICAgIGRpdkJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxuICAgICAgICBkaXZCb2R5LnN0eWxlLm1pbkhlaWdodCA9IFwiNjRweFwiO1xyXG4gICAgICAgIGRpdkJvZHkuc3R5bGUubWluV2lkdGggPSBcIjY0cHhcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uRGl2SXRlbTogZnVuY3Rpb24gKGRpdkl0ZW0pIHtcclxuICAgICAgICBkaXZJdGVtLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgIGRpdkl0ZW0uc3R5bGUucGFkZGluZyA9IFwiOXB4XCI7XHJcbiAgICAgICAgZGl2SXRlbS5zdHlsZS5tYXJnaW4gPSBcIjFweFwiO1xyXG4gICAgICAgIGRpdkl0ZW0uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIycHhcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uRGl2SXRlbUJvZHk6IGZ1bmN0aW9uIChkaXZJdGVtQm9keSkge1xyXG4gICAgICAgIGRpdkl0ZW1Cb2R5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBkaXZJdGVtQm9keS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcclxuICAgICAgICBkaXZJdGVtQm9keS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICBkaXZJdGVtQm9keS5zdHlsZS53aWR0aCA9IFwiODRweFwiO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25TcGFuSWNvbjogZnVuY3Rpb24gKHNwYW5JY29uKSB7XHJcbiAgICAgICAgc3Bhbkljb24uc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uU3BhblRleHQ6IGZ1bmN0aW9uIChzcGFuVGV4dCkge1xyXG4gICAgICAgIHNwYW5UZXh0LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgc3BhblRleHQuc3R5bGUud29yZFdyYXAgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uRGl2U2VsZWN0OiBmdW5jdGlvbiAoZGl2SXRlbSkge1xyXG4gICAgICAgIGRpdkl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDEwOCwgMCwgMjU1LCAwLjMpXCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkRpdlVuU2VsZWN0OiBmdW5jdGlvbiAoZGl2SXRlbSkge1xyXG4gICAgICAgIGRpdkl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJpbml0aWFsXCI7XHJcbiAgICB9XHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV4cGxvcmVyLXN0eWxlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkV4cGxvcmVyID0gdm9pZCAwO1xyXG52YXIgcWlucGVsID0gd2luZG93LmZyYW1lRWxlbWVudC5xaW5wZWw7XHJcbnZhciBleHBsb3Jlcl9zdHlsZXNfMSA9IHJlcXVpcmUoXCIuL2V4cGxvcmVyLXN0eWxlc1wiKTtcclxudmFyIGZpbGVzXzEgPSByZXF1aXJlKFwiLi9maWxlc1wiKTtcclxudmFyIGFwcHNFeHRlbnNpb25zID0gW1wiaHRtXCIsIFwiaHRtbFwiLCBcImNzc1wiLCBcImpzXCIsIFwianN4XCIsIFwidHNcIiwgXCJ0c3hcIl07XHJcbnZhciBjbWRzRXh0ZW5zaW9ucyA9IFtcclxuICAgIFwiaFwiLCBcImNcIiwgXCJocHBcIiwgXCJjcHBcIiwgXCJyc1wiLCBcImpsXCIsXHJcbiAgICBcImNzXCIsIFwiY3Nwcm9qXCIsIFwiZnNcIiwgXCJtbFwiLCBcImZzaVwiLCBcIm1saVwiLCBcImZzeFwiLCBcImZzc2NyaXB0XCIsXHJcbiAgICBcImphdmFcIiwgXCJneVwiLCBcImd2eVwiLCBcImdyb292eVwiLCBcInNjXCIsIFwic2NhbGFcIiwgXCJjbGpcIixcclxuICAgIFwicHlcIiwgXCJydWJ5XCIsIFwicGhwXCIsIFwicGh0bWxcIixcclxuXTtcclxudmFyIGV4ZWNFeHRlbnNpb25zID0gW1wiZXhlXCIsIFwiamFyXCIsIFwiY29tXCIsIFwiYmF0XCIsIFwic2hcIl07XHJcbnZhciBpbWFnZUV4dGVuc2lvbnMgPSBbXCJqcGdcIiwgXCJqcGVnXCIsIFwicG5nXCIsIFwiZ2lmXCIsIFwiYm1wXCJdO1xyXG52YXIgbW92aWVFeHRlbnNpb25zID0gW1wiYXZpXCIsIFwibXA0XCJdO1xyXG52YXIgbXVzaWNFeHRlbnNpb25zID0gW1wid2F2XCIsIFwibXAzXCJdO1xyXG52YXIgemlwcGVkRXh0ZW5zaW9ucyA9IFtcInppcFwiLCBcInJhclwiLCBcIjd6XCIsIFwidGFyXCIsIFwiZ3pcIl07XHJcbnZhciBFeHBsb3JlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFeHBsb3JlcihuYXR1cmUsIGV4dGVuc2lvbnMpIHtcclxuICAgICAgICB0aGlzLmRpdkJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuYWN0dWFsRm9sZGVyID0gXCJcIjtcclxuICAgICAgICB0aGlzLnNlcnZlckZvbGRlciA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5uYXR1cmUgPSBuYXR1cmUgPyBuYXR1cmUgOiBmaWxlc18xLkZpbGVzTmF0dXJlLkJPVEg7XHJcbiAgICAgICAgdGhpcy5leHRlbnNpb25zID0gZXh0ZW5zaW9ucyA/IGV4dGVuc2lvbnMgOiBbXTtcclxuICAgICAgICB0aGlzLmluaXRCb2R5KCk7XHJcbiAgICB9XHJcbiAgICBFeHBsb3Jlci5wcm90b3R5cGUuaW5pdEJvZHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZXhwbG9yZXJfc3R5bGVzXzEuZGVmYXVsdC5hcHBseU9uRGl2Qm9keSh0aGlzLmRpdkJvZHkpO1xyXG4gICAgICAgIHFpbnBlbC51dGlsLmRpc2FibGVTZWxlY3Rpb24odGhpcy5kaXZCb2R5KTtcclxuICAgIH07XHJcbiAgICBFeHBsb3Jlci5wcm90b3R5cGUuaW5zdGFsbCA9IGZ1bmN0aW9uIChvbikge1xyXG4gICAgICAgIG9uLmFwcGVuZENoaWxkKHRoaXMuZGl2Qm9keSk7XHJcbiAgICB9O1xyXG4gICAgRXhwbG9yZXIucHJvdG90eXBlLnNldE5hdHVyZSA9IGZ1bmN0aW9uIChuYXR1cmUpIHtcclxuICAgICAgICB0aGlzLm5hdHVyZSA9IG5hdHVyZTtcclxuICAgIH07XHJcbiAgICBFeHBsb3Jlci5wcm90b3R5cGUuc2V0RXh0ZW5zaW9ucyA9IGZ1bmN0aW9uIChleHRlbnNpb25zKSB7XHJcbiAgICAgICAgdGhpcy5leHRlbnNpb25zID0gZXh0ZW5zaW9ucztcclxuICAgIH07XHJcbiAgICBFeHBsb3Jlci5wcm90b3R5cGUuZ2V0QWN0dWFsRm9sZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdHVhbEZvbGRlcjtcclxuICAgIH07XHJcbiAgICBFeHBsb3Jlci5wcm90b3R5cGUuZ2V0U2VydmVyRm9sZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZlckZvbGRlcjtcclxuICAgIH07XHJcbiAgICBFeHBsb3Jlci5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uIChmb2xkZXIsIGNhbGxCYWNrKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNsZWFuKCk7XHJcbiAgICAgICAgcWlucGVsLnBvc3QoXCIvZGlyL2xpc3RcIiwgeyBwYXRoOiBmb2xkZXIgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBfdGhpcy5hY3R1YWxGb2xkZXIgPSBmb2xkZXI7XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBxaW5wZWwudXRpbC5nZXRUZXh0TGluZXMocmVzLmRhdGEpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpbmUgPSBfYVtfaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgbGluZVZhbHVlID0gbGluZS5zdWJzdHJpbmcoMyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWxpbmVWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGxpbmUuaW5kZXhPZihcIlA6IFwiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNlcnZlckZvbGRlciA9IGxpbmVWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbEJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbEJhY2sobGluZVZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsaW5lLmluZGV4T2YoXCJEOiBcIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMubmF0dXJlID09IGZpbGVzXzEuRmlsZXNOYXR1cmUuQk9USCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5uYXR1cmUgPT0gZmlsZXNfMS5GaWxlc05hdHVyZS5ESVJFQ1RPUklFUykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5uZXdEaXIobGluZVZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsaW5lLmluZGV4T2YoXCJGOiBcIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMubmF0dXJlID09IGZpbGVzXzEuRmlsZXNOYXR1cmUuQk9USCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5uYXR1cmUgPT0gZmlsZXNfMS5GaWxlc05hdHVyZS5GSUxFUykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh0ZW5zaW9uID0gcWlucGVsLnV0aWwuZ2V0RmlsZUV4dGVuc2lvbihsaW5lVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFzc2VkRXh0ZW5zaW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmV4dGVuc2lvbnMgJiYgX3RoaXMuZXh0ZW5zaW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzZWRFeHRlbnNpb24gPSBfdGhpcy5leHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXNzZWRFeHRlbnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm5ld0ZpbGUobGluZVZhbHVlLCBleHRlbnNpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgX3RoaXMuZGl2Qm9keS5pbm5lclRleHQgPSBxaW5wZWwudXRpbC5nZXRFcnJvck1lc3NhZ2UoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBFeHBsb3Jlci5wcm90b3R5cGUuY2xlYW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kaXZCb2R5LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB9O1xyXG4gICAgRXhwbG9yZXIucHJvdG90eXBlLm5ld0RpciA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uZXdJdGVtKG5hbWUsIFwiZXhwbG9yZXItZGlyLnBuZ1wiKTtcclxuICAgIH07XHJcbiAgICBFeHBsb3Jlci5wcm90b3R5cGUubmV3RmlsZSA9IGZ1bmN0aW9uIChuYW1lLCBleHRlbnNpb24pIHtcclxuICAgICAgICB0aGlzLm5ld0l0ZW0obmFtZSwgZ2V0SWNvbk5hbWUoKSk7XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0SWNvbk5hbWUoKSB7XHJcbiAgICAgICAgICAgIGlmIChhcHBzRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiZXhwbG9yZXItYXBwcy5wbmdcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjbWRzRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiZXhwbG9yZXItY21kcy5wbmdcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChleGVjRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiZXhwbG9yZXItZXhlYy5wbmdcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpbWFnZUV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImV4cGxvcmVyLWltYWdlLnBuZ1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG1vdmllRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiZXhwbG9yZXItbW92aWUucG5nXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobXVzaWNFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJleHBsb3Jlci1tdXNpYy5wbmdcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh6aXBwZWRFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJleHBsb3Jlci16aXBwZWQucG5nXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJleHBsb3Jlci1maWxlLnBuZ1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEV4cGxvcmVyLnByb3RvdHlwZS5uZXdJdGVtID0gZnVuY3Rpb24gKG5hbWUsIGljb24pIHtcclxuICAgICAgICB2YXIgZGl2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZXhwbG9yZXJfc3R5bGVzXzEuZGVmYXVsdC5hcHBseU9uRGl2SXRlbShkaXZJdGVtKTtcclxuICAgICAgICB0aGlzLmRpdkJvZHkuYXBwZW5kQ2hpbGQoZGl2SXRlbSk7XHJcbiAgICAgICAgdmFyIGRpdkl0ZW1Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBleHBsb3Jlcl9zdHlsZXNfMS5kZWZhdWx0LmFwcGx5T25EaXZJdGVtQm9keShkaXZJdGVtQm9keSk7XHJcbiAgICAgICAgZGl2SXRlbS5hcHBlbmRDaGlsZChkaXZJdGVtQm9keSk7XHJcbiAgICAgICAgdmFyIHNwYW5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgZXhwbG9yZXJfc3R5bGVzXzEuZGVmYXVsdC5hcHBseU9uU3Bhbkljb24oc3Bhbkljb24pO1xyXG4gICAgICAgIGRpdkl0ZW1Cb2R5LmFwcGVuZENoaWxkKHNwYW5JY29uKTtcclxuICAgICAgICB2YXIgaW1nSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgaW1nSWNvbi5zcmMgPSBcIi9ydW4vYXBwL3FpbnBlbC1hcHAvYXNzZXRzL1wiICsgaWNvbjtcclxuICAgICAgICBzcGFuSWNvbi5hcHBlbmRDaGlsZChpbWdJY29uKTtcclxuICAgICAgICB2YXIgc3BhblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBleHBsb3Jlcl9zdHlsZXNfMS5kZWZhdWx0LmFwcGx5T25TcGFuVGV4dChzcGFuVGV4dCk7XHJcbiAgICAgICAgc3BhblRleHQuaW5uZXJUZXh0ID0gbmFtZTtcclxuICAgICAgICBkaXZJdGVtQm9keS5hcHBlbmRDaGlsZChzcGFuVGV4dCk7XHJcbiAgICAgICAgdmFyIHNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgcWlucGVsLnV0aWwuYWRkQWN0aW9uKGRpdkl0ZW0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgZXhwbG9yZXJfc3R5bGVzXzEuZGVmYXVsdC5hcHBseU9uRGl2U2VsZWN0KGRpdkl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZXhwbG9yZXJfc3R5bGVzXzEuZGVmYXVsdC5hcHBseU9uRGl2VW5TZWxlY3QoZGl2SXRlbSk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEV4cGxvcmVyO1xyXG59KCkpO1xyXG5leHBvcnRzLkV4cGxvcmVyID0gRXhwbG9yZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV4cGxvcmVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuRmlsZXNEZXNjcmlwdG9yID0gZXhwb3J0cy5GaWxlc09wZXJhdGlvbiA9IGV4cG9ydHMuRmlsZXNOYXR1cmUgPSB2b2lkIDA7XHJcbnZhciBGaWxlc05hdHVyZTtcclxuKGZ1bmN0aW9uIChGaWxlc05hdHVyZSkge1xyXG4gICAgRmlsZXNOYXR1cmVbRmlsZXNOYXR1cmVbXCJESVJFQ1RPUklFU1wiXSA9IDBdID0gXCJESVJFQ1RPUklFU1wiO1xyXG4gICAgRmlsZXNOYXR1cmVbRmlsZXNOYXR1cmVbXCJGSUxFU1wiXSA9IDFdID0gXCJGSUxFU1wiO1xyXG4gICAgRmlsZXNOYXR1cmVbRmlsZXNOYXR1cmVbXCJCT1RIXCJdID0gMl0gPSBcIkJPVEhcIjtcclxufSkoRmlsZXNOYXR1cmUgPSBleHBvcnRzLkZpbGVzTmF0dXJlIHx8IChleHBvcnRzLkZpbGVzTmF0dXJlID0ge30pKTtcclxudmFyIEZpbGVzT3BlcmF0aW9uO1xyXG4oZnVuY3Rpb24gKEZpbGVzT3BlcmF0aW9uKSB7XHJcbiAgICBGaWxlc09wZXJhdGlvbltGaWxlc09wZXJhdGlvbltcIk9QRU5cIl0gPSAwXSA9IFwiT1BFTlwiO1xyXG4gICAgRmlsZXNPcGVyYXRpb25bRmlsZXNPcGVyYXRpb25bXCJTQVZFXCJdID0gMV0gPSBcIlNBVkVcIjtcclxufSkoRmlsZXNPcGVyYXRpb24gPSBleHBvcnRzLkZpbGVzT3BlcmF0aW9uIHx8IChleHBvcnRzLkZpbGVzT3BlcmF0aW9uID0ge30pKTtcclxudmFyIEZpbGVzRGVzY3JpcHRvciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBGaWxlc0Rlc2NyaXB0b3IoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRmlsZXNEZXNjcmlwdG9yO1xyXG59KCkpO1xyXG5leHBvcnRzLkZpbGVzRGVzY3JpcHRvciA9IEZpbGVzRGVzY3JpcHRvcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmlsZXMuanMubWFwIl19
