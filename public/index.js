(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"qinpel-cps/all":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chooser = exports.Explorer = void 0;
var explorer_1 = require("./src/explorer");
Object.defineProperty(exports, "Explorer", { enumerable: true, get: function () { return explorer_1.Explorer; } });
var chooser_1 = require("./src/chooser");
Object.defineProperty(exports, "Chooser", { enumerable: true, get: function () { return chooser_1.Chooser; } });

},{"./src/chooser":4,"./src/explorer":7}],3:[function(require,module,exports){
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
        chooser_styles_1.default.applyOnInputName(this.inputName);
        this.divBottom.appendChild(this.inputName);
        this.initSelect();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1VzZXJzL2V2ZXJ0L0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9pbmRleC5qcyIsIi4uL3FpbnBlbC1jcHMvYWxsLmpzIiwiLi4vcWlucGVsLWNwcy9zcmMvY2hvb3Nlci1zdHlsZXMuanMiLCIuLi9xaW5wZWwtY3BzL3NyYy9jaG9vc2VyLmpzIiwiLi4vcWlucGVsLWNwcy9zcmMvY29tbW9uLXN0eWxlcy5qcyIsIi4uL3FpbnBlbC1jcHMvc3JjL2V4cGxvcmVyLXN0eWxlcy5qcyIsIi4uL3FpbnBlbC1jcHMvc3JjL2V4cGxvcmVyLmpzIiwiLi4vcWlucGVsLWNwcy9zcmMvZmlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgcWlucGVsID0gd2luZG93LmZyYW1lRWxlbWVudC5xaW5wZWw7XHJcbnZhciBhbGxfMSA9IHJlcXVpcmUoXCJxaW5wZWwtY3BzL2FsbFwiKTtcclxudmFyIFBhY2tBbGwgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGFja0FsbCgpIHtcclxuICAgICAgICB0aGlzLmRpdkJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuY2hvb3NlciA9IG5ldyBhbGxfMS5DaG9vc2VyKCk7XHJcbiAgICAgICAgdGhpcy5jaG9vc2VyLmluc3RhbGwodGhpcy5kaXZCb2R5KTtcclxuICAgIH1cclxuICAgIFBhY2tBbGwucHJvdG90eXBlLmluc3RhbGwgPSBmdW5jdGlvbiAob24pIHtcclxuICAgICAgICBvbi5hcHBlbmRDaGlsZCh0aGlzLmRpdkJvZHkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQYWNrQWxsO1xyXG59KCkpO1xyXG5uZXcgUGFja0FsbCgpLmluc3RhbGwoZG9jdW1lbnQuYm9keSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQ2hvb3NlciA9IGV4cG9ydHMuRXhwbG9yZXIgPSB2b2lkIDA7XHJcbnZhciBleHBsb3Jlcl8xID0gcmVxdWlyZShcIi4vc3JjL2V4cGxvcmVyXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJFeHBsb3JlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZXhwbG9yZXJfMS5FeHBsb3JlcjsgfSB9KTtcclxudmFyIGNob29zZXJfMSA9IHJlcXVpcmUoXCIuL3NyYy9jaG9vc2VyXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDaG9vc2VyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjaG9vc2VyXzEuQ2hvb3NlcjsgfSB9KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWxsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb21tb25fc3R5bGVzXzEgPSByZXF1aXJlKFwiLi9jb21tb24tc3R5bGVzXCIpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB7XHJcbiAgICBhcHBseU9uRGl2Qm9keTogZnVuY3Rpb24gKGRpdkJvZHkpIHtcclxuICAgICAgICBkaXZCb2R5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBkaXZCb2R5LnN0eWxlLmZsZXhGbG93ID0gXCJjb2x1bW4gbm93cmFwXCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkRpdkJvdHRvbTogZnVuY3Rpb24gKGRpdkJvdHRvbSkge1xyXG4gICAgICAgIGRpdkJvdHRvbS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgZGl2Qm90dG9tLnN0eWxlLmZsZXhGbG93ID0gXCJyb3cgd3JhcFwiO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25JbnB1dE5hbWU6IGZ1bmN0aW9uIChpbnB1dE5hbWUpIHtcclxuICAgICAgICBjb21tb25fc3R5bGVzXzEuZGVmYXVsdC5hcHBseU9uRWRpdChpbnB1dE5hbWUpO1xyXG4gICAgICAgIGlucHV0TmFtZS5zdHlsZS5mbGV4ID0gXCIxXCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPblNlbGVjdFR5cGU6IGZ1bmN0aW9uIChzZWxlY3RUeXBlKSB7XHJcbiAgICAgICAgY29tbW9uX3N0eWxlc18xLmRlZmF1bHQuYXBwbHlPbkVkaXQoc2VsZWN0VHlwZSk7XHJcbiAgICB9LFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaG9vc2VyLXN0eWxlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkNob29zZXIgPSB2b2lkIDA7XHJcbnZhciBleHBsb3Jlcl8xID0gcmVxdWlyZShcIi4vZXhwbG9yZXJcIik7XHJcbnZhciBjaG9vc2VyX3N0eWxlc18xID0gcmVxdWlyZShcIi4vY2hvb3Nlci1zdHlsZXNcIik7XHJcbnZhciBmaWxlc18xID0gcmVxdWlyZShcIi4vZmlsZXNcIik7XHJcbnZhciBDaG9vc2VyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENob29zZXIobmF0dXJlLCBvcGVyYXRpb24sIGRlc2NyaXB0b3JzKSB7XHJcbiAgICAgICAgdGhpcy5kaXZCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLmV4cGxvcmVyID0gbmV3IGV4cGxvcmVyXzEuRXhwbG9yZXIoKTtcclxuICAgICAgICB0aGlzLmRpdkJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5pbnB1dE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICAgICAgICB0aGlzLm5hdHVyZSA9IG5hdHVyZSA/IG5hdHVyZSA6IGZpbGVzXzEuRmlsZXNOYXR1cmUuQk9USDtcclxuICAgICAgICB0aGlzLm9wZXJhdGlvbiA9IG9wZXJhdGlvbiA/IG9wZXJhdGlvbiA6IGZpbGVzXzEuRmlsZXNPcGVyYXRpb24uT1BFTjtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0b3JzID0gZGVzY3JpcHRvcnMgPyBkZXNjcmlwdG9ycyA6IFtdO1xyXG4gICAgICAgIHRoaXMuaW5pdEJvZHkoKTtcclxuICAgICAgICB0aGlzLmluaXRCb3R0b20oKTtcclxuICAgIH1cclxuICAgIENob29zZXIucHJvdG90eXBlLmluaXRCb2R5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNob29zZXJfc3R5bGVzXzEuZGVmYXVsdC5hcHBseU9uRGl2Qm9keSh0aGlzLmRpdkJvZHkpO1xyXG4gICAgICAgIHRoaXMuZXhwbG9yZXIuaW5zdGFsbCh0aGlzLmRpdkJvZHkpO1xyXG4gICAgICAgIHRoaXMuZXhwbG9yZXIuc2V0TmF0dXJlKHRoaXMubmF0dXJlKTtcclxuICAgICAgICB0aGlzLmRpdkJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kaXZCb3R0b20pO1xyXG4gICAgfTtcclxuICAgIENob29zZXIucHJvdG90eXBlLmluaXRCb3R0b20gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2hvb3Nlcl9zdHlsZXNfMS5kZWZhdWx0LmFwcGx5T25EaXZCb3R0b20odGhpcy5kaXZCb3R0b20pO1xyXG4gICAgICAgIGNob29zZXJfc3R5bGVzXzEuZGVmYXVsdC5hcHBseU9uSW5wdXROYW1lKHRoaXMuaW5wdXROYW1lKTtcclxuICAgICAgICB0aGlzLmRpdkJvdHRvbS5hcHBlbmRDaGlsZCh0aGlzLmlucHV0TmFtZSk7XHJcbiAgICAgICAgdGhpcy5pbml0U2VsZWN0KCk7XHJcbiAgICB9O1xyXG4gICAgQ2hvb3Nlci5wcm90b3R5cGUuaW5pdFNlbGVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5kZXNjcmlwdG9ycy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB2YXIgb3B0aW9uQWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICAgICAgb3B0aW9uQWxsLnRleHQgPSBcIkFsbCBGaWxlcyAoKi4qKVwiO1xyXG4gICAgICAgICAgICBvcHRpb25BbGwudmFsdWUgPSBcIipcIjtcclxuICAgICAgICAgICAgb3B0aW9uQWxsLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RUeXBlLmFwcGVuZENoaWxkKG9wdGlvbkFsbCk7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwbG9yZXIuc2V0RXh0ZW5zaW9ucyhbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5kZXNjcmlwdG9ycy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gdGhpcy5kZXNjcmlwdG9yc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gZGVzY3JpcHRvci5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGRlc2NyaXB0b3IuZXh0ZW5zaW9ucy5qb2luKFwiO1wiKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFR5cGUuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmV4cGxvcmVyLnNldEV4dGVuc2lvbnModGhpcy5kZXNjcmlwdG9yc1swXS5leHRlbnNpb25zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hvb3Nlcl9zdHlsZXNfMS5kZWZhdWx0LmFwcGx5T25TZWxlY3RUeXBlKHRoaXMuc2VsZWN0VHlwZSk7XHJcbiAgICAgICAgdGhpcy5kaXZCb3R0b20uYXBwZW5kQ2hpbGQodGhpcy5zZWxlY3RUeXBlKTtcclxuICAgIH07XHJcbiAgICBDaG9vc2VyLnByb3RvdHlwZS5pbnN0YWxsID0gZnVuY3Rpb24gKG9uKSB7XHJcbiAgICAgICAgb24uYXBwZW5kQ2hpbGQodGhpcy5kaXZCb2R5KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2hvb3NlcjtcclxufSgpKTtcclxuZXhwb3J0cy5DaG9vc2VyID0gQ2hvb3NlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2hvb3Nlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB7XHJcbiAgICBhcHBseU9uRWRpdDogZnVuY3Rpb24gKGVkaXQpIHtcclxuICAgICAgICBlZGl0LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICM4NDg0ODRcIjtcclxuICAgICAgICBlZGl0LnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMnB4XCI7XHJcbiAgICAgICAgZWRpdC5zdHlsZS5wYWRkaW5nID0gXCIzcHhcIjtcclxuICAgIH1cclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tbW9uLXN0eWxlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29tbW9uX3N0eWxlc18xID0gcmVxdWlyZShcIi4vY29tbW9uLXN0eWxlc1wiKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0ge1xyXG4gICAgYXBwbHlPbkRpdkJvZHk6IGZ1bmN0aW9uIChkaXZCb2R5KSB7XHJcbiAgICAgICAgY29tbW9uX3N0eWxlc18xLmRlZmF1bHQuYXBwbHlPbkVkaXQoZGl2Qm9keSk7XHJcbiAgICAgICAgZGl2Qm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG4gICAgICAgIGRpdkJvZHkuc3R5bGUubWluSGVpZ2h0ID0gXCI2NHB4XCI7XHJcbiAgICAgICAgZGl2Qm9keS5zdHlsZS5taW5XaWR0aCA9IFwiNjRweFwiO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25EaXZJdGVtOiBmdW5jdGlvbiAoZGl2SXRlbSkge1xyXG4gICAgICAgIGRpdkl0ZW0uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgZGl2SXRlbS5zdHlsZS5wYWRkaW5nID0gXCI5cHhcIjtcclxuICAgICAgICBkaXZJdGVtLnN0eWxlLm1hcmdpbiA9IFwiMXB4XCI7XHJcbiAgICAgICAgZGl2SXRlbS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjJweFwiO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25EaXZJdGVtQm9keTogZnVuY3Rpb24gKGRpdkl0ZW1Cb2R5KSB7XHJcbiAgICAgICAgZGl2SXRlbUJvZHkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIGRpdkl0ZW1Cb2R5LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xyXG4gICAgICAgIGRpdkl0ZW1Cb2R5LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgIGRpdkl0ZW1Cb2R5LnN0eWxlLndpZHRoID0gXCI4NHB4XCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPblNwYW5JY29uOiBmdW5jdGlvbiAoc3Bhbkljb24pIHtcclxuICAgICAgICBzcGFuSWNvbi5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25TcGFuVGV4dDogZnVuY3Rpb24gKHNwYW5UZXh0KSB7XHJcbiAgICAgICAgc3BhblRleHQuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICBzcGFuVGV4dC5zdHlsZS53b3JkV3JhcCA9IFwiYnJlYWstd29yZFwiO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25EaXZTZWxlY3Q6IGZ1bmN0aW9uIChkaXZJdGVtKSB7XHJcbiAgICAgICAgZGl2SXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMTA4LCAwLCAyNTUsIDAuMylcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uRGl2VW5TZWxlY3Q6IGZ1bmN0aW9uIChkaXZJdGVtKSB7XHJcbiAgICAgICAgZGl2SXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImluaXRpYWxcIjtcclxuICAgIH1cclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXhwbG9yZXItc3R5bGVzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuRXhwbG9yZXIgPSB2b2lkIDA7XHJcbnZhciBxaW5wZWwgPSB3aW5kb3cuZnJhbWVFbGVtZW50LnFpbnBlbDtcclxudmFyIGV4cGxvcmVyX3N0eWxlc18xID0gcmVxdWlyZShcIi4vZXhwbG9yZXItc3R5bGVzXCIpO1xyXG52YXIgZmlsZXNfMSA9IHJlcXVpcmUoXCIuL2ZpbGVzXCIpO1xyXG52YXIgYXBwc0V4dGVuc2lvbnMgPSBbXCJodG1cIiwgXCJodG1sXCIsIFwiY3NzXCIsIFwianNcIiwgXCJqc3hcIiwgXCJ0c1wiLCBcInRzeFwiXTtcclxudmFyIGNtZHNFeHRlbnNpb25zID0gW1xyXG4gICAgXCJoXCIsIFwiY1wiLCBcImhwcFwiLCBcImNwcFwiLCBcInJzXCIsIFwiamxcIixcclxuICAgIFwiY3NcIiwgXCJjc3Byb2pcIiwgXCJmc1wiLCBcIm1sXCIsIFwiZnNpXCIsIFwibWxpXCIsIFwiZnN4XCIsIFwiZnNzY3JpcHRcIixcclxuICAgIFwiamF2YVwiLCBcImd5XCIsIFwiZ3Z5XCIsIFwiZ3Jvb3Z5XCIsIFwic2NcIiwgXCJzY2FsYVwiLCBcImNsalwiLFxyXG4gICAgXCJweVwiLCBcInJ1YnlcIiwgXCJwaHBcIiwgXCJwaHRtbFwiLFxyXG5dO1xyXG52YXIgZXhlY0V4dGVuc2lvbnMgPSBbXCJleGVcIiwgXCJqYXJcIiwgXCJjb21cIiwgXCJiYXRcIiwgXCJzaFwiXTtcclxudmFyIGltYWdlRXh0ZW5zaW9ucyA9IFtcImpwZ1wiLCBcImpwZWdcIiwgXCJwbmdcIiwgXCJnaWZcIiwgXCJibXBcIl07XHJcbnZhciBtb3ZpZUV4dGVuc2lvbnMgPSBbXCJhdmlcIiwgXCJtcDRcIl07XHJcbnZhciBtdXNpY0V4dGVuc2lvbnMgPSBbXCJ3YXZcIiwgXCJtcDNcIl07XHJcbnZhciB6aXBwZWRFeHRlbnNpb25zID0gW1wiemlwXCIsIFwicmFyXCIsIFwiN3pcIiwgXCJ0YXJcIiwgXCJnelwiXTtcclxudmFyIEV4cGxvcmVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEV4cGxvcmVyKG5hdHVyZSwgZXh0ZW5zaW9ucykge1xyXG4gICAgICAgIHRoaXMuZGl2Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5hY3R1YWxGb2xkZXIgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuc2VydmVyRm9sZGVyID0gXCJcIjtcclxuICAgICAgICB0aGlzLm5hdHVyZSA9IG5hdHVyZSA/IG5hdHVyZSA6IGZpbGVzXzEuRmlsZXNOYXR1cmUuQk9USDtcclxuICAgICAgICB0aGlzLmV4dGVuc2lvbnMgPSBleHRlbnNpb25zID8gZXh0ZW5zaW9ucyA6IFtdO1xyXG4gICAgICAgIHRoaXMuaW5pdEJvZHkoKTtcclxuICAgIH1cclxuICAgIEV4cGxvcmVyLnByb3RvdHlwZS5pbml0Qm9keSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBleHBsb3Jlcl9zdHlsZXNfMS5kZWZhdWx0LmFwcGx5T25EaXZCb2R5KHRoaXMuZGl2Qm9keSk7XHJcbiAgICAgICAgcWlucGVsLnV0aWwuZGlzYWJsZVNlbGVjdGlvbih0aGlzLmRpdkJvZHkpO1xyXG4gICAgfTtcclxuICAgIEV4cGxvcmVyLnByb3RvdHlwZS5pbnN0YWxsID0gZnVuY3Rpb24gKG9uKSB7XHJcbiAgICAgICAgb24uYXBwZW5kQ2hpbGQodGhpcy5kaXZCb2R5KTtcclxuICAgIH07XHJcbiAgICBFeHBsb3Jlci5wcm90b3R5cGUuc2V0TmF0dXJlID0gZnVuY3Rpb24gKG5hdHVyZSkge1xyXG4gICAgICAgIHRoaXMubmF0dXJlID0gbmF0dXJlO1xyXG4gICAgfTtcclxuICAgIEV4cGxvcmVyLnByb3RvdHlwZS5zZXRFeHRlbnNpb25zID0gZnVuY3Rpb24gKGV4dGVuc2lvbnMpIHtcclxuICAgICAgICB0aGlzLmV4dGVuc2lvbnMgPSBleHRlbnNpb25zO1xyXG4gICAgfTtcclxuICAgIEV4cGxvcmVyLnByb3RvdHlwZS5nZXRBY3R1YWxGb2xkZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0dWFsRm9sZGVyO1xyXG4gICAgfTtcclxuICAgIEV4cGxvcmVyLnByb3RvdHlwZS5nZXRTZXJ2ZXJGb2xkZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmVyRm9sZGVyO1xyXG4gICAgfTtcclxuICAgIEV4cGxvcmVyLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKGZvbGRlciwgY2FsbEJhY2spIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY2xlYW4oKTtcclxuICAgICAgICBxaW5wZWwucG9zdChcIi9kaXIvbGlzdFwiLCB7IHBhdGg6IGZvbGRlciB9KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmFjdHVhbEZvbGRlciA9IGZvbGRlcjtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHFpbnBlbC51dGlsLmdldFRleHRMaW5lcyhyZXMuZGF0YSk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGluZSA9IF9hW19pXTtcclxuICAgICAgICAgICAgICAgIHZhciBsaW5lVmFsdWUgPSBsaW5lLnN1YnN0cmluZygzKTtcclxuICAgICAgICAgICAgICAgIGlmICghbGluZVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobGluZS5pbmRleE9mKFwiUDogXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2VydmVyRm9sZGVyID0gbGluZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsQmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsQmFjayhsaW5lVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxpbmUuaW5kZXhPZihcIkQ6IFwiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5uYXR1cmUgPT0gZmlsZXNfMS5GaWxlc05hdHVyZS5CT1RIIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm5hdHVyZSA9PSBmaWxlc18xLkZpbGVzTmF0dXJlLkRJUkVDVE9SSUVTKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm5ld0RpcihsaW5lVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxpbmUuaW5kZXhPZihcIkY6IFwiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5uYXR1cmUgPT0gZmlsZXNfMS5GaWxlc05hdHVyZS5CT1RIIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm5hdHVyZSA9PSBmaWxlc18xLkZpbGVzTmF0dXJlLkZJTEVTKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHRlbnNpb24gPSBxaW5wZWwudXRpbC5nZXRGaWxlRXh0ZW5zaW9uKGxpbmVWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXNzZWRFeHRlbnNpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuZXh0ZW5zaW9ucyAmJiBfdGhpcy5leHRlbnNpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NlZEV4dGVuc2lvbiA9IF90aGlzLmV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhc3NlZEV4dGVuc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubmV3RmlsZShsaW5lVmFsdWUsIGV4dGVuc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBfdGhpcy5kaXZCb2R5LmlubmVyVGV4dCA9IHFpbnBlbC51dGlsLmdldEVycm9yTWVzc2FnZShlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEV4cGxvcmVyLnByb3RvdHlwZS5jbGVhbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmRpdkJvZHkuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIH07XHJcbiAgICBFeHBsb3Jlci5wcm90b3R5cGUubmV3RGlyID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5ld0l0ZW0obmFtZSwgXCJleHBsb3Jlci1kaXIucG5nXCIpO1xyXG4gICAgfTtcclxuICAgIEV4cGxvcmVyLnByb3RvdHlwZS5uZXdGaWxlID0gZnVuY3Rpb24gKG5hbWUsIGV4dGVuc2lvbikge1xyXG4gICAgICAgIHRoaXMubmV3SXRlbShuYW1lLCBnZXRJY29uTmFtZSgpKTtcclxuICAgICAgICBmdW5jdGlvbiBnZXRJY29uTmFtZSgpIHtcclxuICAgICAgICAgICAgaWYgKGFwcHNFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJleHBsb3Jlci1hcHBzLnBuZ1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNtZHNFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJleHBsb3Jlci1jbWRzLnBuZ1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGV4ZWNFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJleHBsb3Jlci1leGVjLnBuZ1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGltYWdlRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiZXhwbG9yZXItaW1hZ2UucG5nXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobW92aWVFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJleHBsb3Jlci1tb3ZpZS5wbmdcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChtdXNpY0V4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImV4cGxvcmVyLW11c2ljLnBuZ1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHppcHBlZEV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImV4cGxvcmVyLXppcHBlZC5wbmdcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImV4cGxvcmVyLWZpbGUucG5nXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgRXhwbG9yZXIucHJvdG90eXBlLm5ld0l0ZW0gPSBmdW5jdGlvbiAobmFtZSwgaWNvbikge1xyXG4gICAgICAgIHZhciBkaXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBleHBsb3Jlcl9zdHlsZXNfMS5kZWZhdWx0LmFwcGx5T25EaXZJdGVtKGRpdkl0ZW0pO1xyXG4gICAgICAgIHRoaXMuZGl2Qm9keS5hcHBlbmRDaGlsZChkaXZJdGVtKTtcclxuICAgICAgICB2YXIgZGl2SXRlbUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGV4cGxvcmVyX3N0eWxlc18xLmRlZmF1bHQuYXBwbHlPbkRpdkl0ZW1Cb2R5KGRpdkl0ZW1Cb2R5KTtcclxuICAgICAgICBkaXZJdGVtLmFwcGVuZENoaWxkKGRpdkl0ZW1Cb2R5KTtcclxuICAgICAgICB2YXIgc3Bhbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBleHBsb3Jlcl9zdHlsZXNfMS5kZWZhdWx0LmFwcGx5T25TcGFuSWNvbihzcGFuSWNvbik7XHJcbiAgICAgICAgZGl2SXRlbUJvZHkuYXBwZW5kQ2hpbGQoc3Bhbkljb24pO1xyXG4gICAgICAgIHZhciBpbWdJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBpbWdJY29uLnNyYyA9IFwiL3J1bi9hcHAvcWlucGVsLWFwcC9hc3NldHMvXCIgKyBpY29uO1xyXG4gICAgICAgIHNwYW5JY29uLmFwcGVuZENoaWxkKGltZ0ljb24pO1xyXG4gICAgICAgIHZhciBzcGFuVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIGV4cGxvcmVyX3N0eWxlc18xLmRlZmF1bHQuYXBwbHlPblNwYW5UZXh0KHNwYW5UZXh0KTtcclxuICAgICAgICBzcGFuVGV4dC5pbm5lclRleHQgPSBuYW1lO1xyXG4gICAgICAgIGRpdkl0ZW1Cb2R5LmFwcGVuZENoaWxkKHNwYW5UZXh0KTtcclxuICAgICAgICB2YXIgc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICBxaW5wZWwudXRpbC5hZGRBY3Rpb24oZGl2SXRlbSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIXNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICBleHBsb3Jlcl9zdHlsZXNfMS5kZWZhdWx0LmFwcGx5T25EaXZTZWxlY3QoZGl2SXRlbSk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBleHBsb3Jlcl9zdHlsZXNfMS5kZWZhdWx0LmFwcGx5T25EaXZVblNlbGVjdChkaXZJdGVtKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRXhwbG9yZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuRXhwbG9yZXIgPSBFeHBsb3JlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXhwbG9yZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5GaWxlc0Rlc2NyaXB0b3IgPSBleHBvcnRzLkZpbGVzT3BlcmF0aW9uID0gZXhwb3J0cy5GaWxlc05hdHVyZSA9IHZvaWQgMDtcclxudmFyIEZpbGVzTmF0dXJlO1xyXG4oZnVuY3Rpb24gKEZpbGVzTmF0dXJlKSB7XHJcbiAgICBGaWxlc05hdHVyZVtGaWxlc05hdHVyZVtcIkRJUkVDVE9SSUVTXCJdID0gMF0gPSBcIkRJUkVDVE9SSUVTXCI7XHJcbiAgICBGaWxlc05hdHVyZVtGaWxlc05hdHVyZVtcIkZJTEVTXCJdID0gMV0gPSBcIkZJTEVTXCI7XHJcbiAgICBGaWxlc05hdHVyZVtGaWxlc05hdHVyZVtcIkJPVEhcIl0gPSAyXSA9IFwiQk9USFwiO1xyXG59KShGaWxlc05hdHVyZSA9IGV4cG9ydHMuRmlsZXNOYXR1cmUgfHwgKGV4cG9ydHMuRmlsZXNOYXR1cmUgPSB7fSkpO1xyXG52YXIgRmlsZXNPcGVyYXRpb247XHJcbihmdW5jdGlvbiAoRmlsZXNPcGVyYXRpb24pIHtcclxuICAgIEZpbGVzT3BlcmF0aW9uW0ZpbGVzT3BlcmF0aW9uW1wiT1BFTlwiXSA9IDBdID0gXCJPUEVOXCI7XHJcbiAgICBGaWxlc09wZXJhdGlvbltGaWxlc09wZXJhdGlvbltcIlNBVkVcIl0gPSAxXSA9IFwiU0FWRVwiO1xyXG59KShGaWxlc09wZXJhdGlvbiA9IGV4cG9ydHMuRmlsZXNPcGVyYXRpb24gfHwgKGV4cG9ydHMuRmlsZXNPcGVyYXRpb24gPSB7fSkpO1xyXG52YXIgRmlsZXNEZXNjcmlwdG9yID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEZpbGVzRGVzY3JpcHRvcigpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBGaWxlc0Rlc2NyaXB0b3I7XHJcbn0oKSk7XHJcbmV4cG9ydHMuRmlsZXNEZXNjcmlwdG9yID0gRmlsZXNEZXNjcmlwdG9yO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1maWxlcy5qcy5tYXAiXX0=
