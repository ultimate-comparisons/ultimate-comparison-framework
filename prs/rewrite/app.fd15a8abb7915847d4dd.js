webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const platform_browser_dynamic_1 = __webpack_require__(1);
	const core_1 = __webpack_require__(3);
	const app_module_1 = __webpack_require__(39);
	if (true) {
	    core_1.enableProdMode();
	}
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const platform_browser_1 = __webpack_require__(38);
	const app_component_1 = __webpack_require__(40);
	const index_1 = __webpack_require__(43);
	const angular_2_local_storage_1 = __webpack_require__(72);
	let AppModule = class AppModule {
	};
	AppModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule,
	            index_1.ComparisonModule,
	            angular_2_local_storage_1.LocalStorageModule.withConfig({
	                prefix: 'ultimate-comparison-base',
	                storageType: 'localStorage'
	            })
	        ],
	        declarations: [
	            app_component_1.AppComponent,
	        ],
	        bootstrap: [app_component_1.AppComponent]
	    })
	], AppModule);
	exports.AppModule = AppModule;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	let AppComponent = class AppComponent {
	};
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'myapp',
	        template: '<comparison></comparison>',
	        styles: [
	            __webpack_require__(41),
	            __webpack_require__(42)
	        ],
	        encapsulation: core_1.ViewEncapsulation.None
	    })
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports = "/*!\n * Bootstrap v3.3.6 (http://getbootstrap.com)\n * Copyright 2011-2015 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n *//*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{margin:.67em 0;font-size:2em}mark{color:#000;background:#ff0}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{height:0;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{margin:0;font:inherit;color:inherit}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}input{line-height:normal}input[type=checkbox],input[type=radio]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;-webkit-appearance:textfield}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{padding:.35em .625em .75em;margin:0 2px;border:1px solid silver}legend{padding:0;border:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-spacing:0;border-collapse:collapse}td,th{padding:0}/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */@media print{*,:after,:before{color:#000!important;text-shadow:none!important;background:0 0!important;-webkit-box-shadow:none!important;box-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"javascript:\"]:after,a[href^=\"#\"]:after{content:\"\"}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}.navbar{display:none}.btn>.caret,.dropup>.btn>.caret{border-top-color:#000!important}.label{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #ddd!important}}@font-face{font-family:'Glyphicons Halflings';src:url(../fonts/glyphicons-halflings-regular.eot);src:url(../fonts/glyphicons-halflings-regular.eot?#iefix) format('embedded-opentype'),url(../fonts/glyphicons-halflings-regular.woff2) format('woff2'),url(../fonts/glyphicons-halflings-regular.woff) format('woff'),url(../fonts/glyphicons-halflings-regular.ttf) format('truetype'),url(../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular) format('svg')}.glyphicon{position:relative;top:1px;display:inline-block;font-family:'Glyphicons Halflings';font-style:normal;font-weight:400;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.glyphicon-asterisk:before{content:\"\\002a\"}.glyphicon-plus:before{content:\"\\002b\"}.glyphicon-eur:before,.glyphicon-euro:before{content:\"\\20ac\"}.glyphicon-minus:before{content:\"\\2212\"}.glyphicon-cloud:before{content:\"\\2601\"}.glyphicon-envelope:before{content:\"\\2709\"}.glyphicon-pencil:before{content:\"\\270f\"}.glyphicon-glass:before{content:\"\\e001\"}.glyphicon-music:before{content:\"\\e002\"}.glyphicon-search:before{content:\"\\e003\"}.glyphicon-heart:before{content:\"\\e005\"}.glyphicon-star:before{content:\"\\e006\"}.glyphicon-star-empty:before{content:\"\\e007\"}.glyphicon-user:before{content:\"\\e008\"}.glyphicon-film:before{content:\"\\e009\"}.glyphicon-th-large:before{content:\"\\e010\"}.glyphicon-th:before{content:\"\\e011\"}.glyphicon-th-list:before{content:\"\\e012\"}.glyphicon-ok:before{content:\"\\e013\"}.glyphicon-remove:before{content:\"\\e014\"}.glyphicon-zoom-in:before{content:\"\\e015\"}.glyphicon-zoom-out:before{content:\"\\e016\"}.glyphicon-off:before{content:\"\\e017\"}.glyphicon-signal:before{content:\"\\e018\"}.glyphicon-cog:before{content:\"\\e019\"}.glyphicon-trash:before{content:\"\\e020\"}.glyphicon-home:before{content:\"\\e021\"}.glyphicon-file:before{content:\"\\e022\"}.glyphicon-time:before{content:\"\\e023\"}.glyphicon-road:before{content:\"\\e024\"}.glyphicon-download-alt:before{content:\"\\e025\"}.glyphicon-download:before{content:\"\\e026\"}.glyphicon-upload:before{content:\"\\e027\"}.glyphicon-inbox:before{content:\"\\e028\"}.glyphicon-play-circle:before{content:\"\\e029\"}.glyphicon-repeat:before{content:\"\\e030\"}.glyphicon-refresh:before{content:\"\\e031\"}.glyphicon-list-alt:before{content:\"\\e032\"}.glyphicon-lock:before{content:\"\\e033\"}.glyphicon-flag:before{content:\"\\e034\"}.glyphicon-headphones:before{content:\"\\e035\"}.glyphicon-volume-off:before{content:\"\\e036\"}.glyphicon-volume-down:before{content:\"\\e037\"}.glyphicon-volume-up:before{content:\"\\e038\"}.glyphicon-qrcode:before{content:\"\\e039\"}.glyphicon-barcode:before{content:\"\\e040\"}.glyphicon-tag:before{content:\"\\e041\"}.glyphicon-tags:before{content:\"\\e042\"}.glyphicon-book:before{content:\"\\e043\"}.glyphicon-bookmark:before{content:\"\\e044\"}.glyphicon-print:before{content:\"\\e045\"}.glyphicon-camera:before{content:\"\\e046\"}.glyphicon-font:before{content:\"\\e047\"}.glyphicon-bold:before{content:\"\\e048\"}.glyphicon-italic:before{content:\"\\e049\"}.glyphicon-text-height:before{content:\"\\e050\"}.glyphicon-text-width:before{content:\"\\e051\"}.glyphicon-align-left:before{content:\"\\e052\"}.glyphicon-align-center:before{content:\"\\e053\"}.glyphicon-align-right:before{content:\"\\e054\"}.glyphicon-align-justify:before{content:\"\\e055\"}.glyphicon-list:before{content:\"\\e056\"}.glyphicon-indent-left:before{content:\"\\e057\"}.glyphicon-indent-right:before{content:\"\\e058\"}.glyphicon-facetime-video:before{content:\"\\e059\"}.glyphicon-picture:before{content:\"\\e060\"}.glyphicon-map-marker:before{content:\"\\e062\"}.glyphicon-adjust:before{content:\"\\e063\"}.glyphicon-tint:before{content:\"\\e064\"}.glyphicon-edit:before{content:\"\\e065\"}.glyphicon-share:before{content:\"\\e066\"}.glyphicon-check:before{content:\"\\e067\"}.glyphicon-move:before{content:\"\\e068\"}.glyphicon-step-backward:before{content:\"\\e069\"}.glyphicon-fast-backward:before{content:\"\\e070\"}.glyphicon-backward:before{content:\"\\e071\"}.glyphicon-play:before{content:\"\\e072\"}.glyphicon-pause:before{content:\"\\e073\"}.glyphicon-stop:before{content:\"\\e074\"}.glyphicon-forward:before{content:\"\\e075\"}.glyphicon-fast-forward:before{content:\"\\e076\"}.glyphicon-step-forward:before{content:\"\\e077\"}.glyphicon-eject:before{content:\"\\e078\"}.glyphicon-chevron-left:before{content:\"\\e079\"}.glyphicon-chevron-right:before{content:\"\\e080\"}.glyphicon-plus-sign:before{content:\"\\e081\"}.glyphicon-minus-sign:before{content:\"\\e082\"}.glyphicon-remove-sign:before{content:\"\\e083\"}.glyphicon-ok-sign:before{content:\"\\e084\"}.glyphicon-question-sign:before{content:\"\\e085\"}.glyphicon-info-sign:before{content:\"\\e086\"}.glyphicon-screenshot:before{content:\"\\e087\"}.glyphicon-remove-circle:before{content:\"\\e088\"}.glyphicon-ok-circle:before{content:\"\\e089\"}.glyphicon-ban-circle:before{content:\"\\e090\"}.glyphicon-arrow-left:before{content:\"\\e091\"}.glyphicon-arrow-right:before{content:\"\\e092\"}.glyphicon-arrow-up:before{content:\"\\e093\"}.glyphicon-arrow-down:before{content:\"\\e094\"}.glyphicon-share-alt:before{content:\"\\e095\"}.glyphicon-resize-full:before{content:\"\\e096\"}.glyphicon-resize-small:before{content:\"\\e097\"}.glyphicon-exclamation-sign:before{content:\"\\e101\"}.glyphicon-gift:before{content:\"\\e102\"}.glyphicon-leaf:before{content:\"\\e103\"}.glyphicon-fire:before{content:\"\\e104\"}.glyphicon-eye-open:before{content:\"\\e105\"}.glyphicon-eye-close:before{content:\"\\e106\"}.glyphicon-warning-sign:before{content:\"\\e107\"}.glyphicon-plane:before{content:\"\\e108\"}.glyphicon-calendar:before{content:\"\\e109\"}.glyphicon-random:before{content:\"\\e110\"}.glyphicon-comment:before{content:\"\\e111\"}.glyphicon-magnet:before{content:\"\\e112\"}.glyphicon-chevron-up:before{content:\"\\e113\"}.glyphicon-chevron-down:before{content:\"\\e114\"}.glyphicon-retweet:before{content:\"\\e115\"}.glyphicon-shopping-cart:before{content:\"\\e116\"}.glyphicon-folder-close:before{content:\"\\e117\"}.glyphicon-folder-open:before{content:\"\\e118\"}.glyphicon-resize-vertical:before{content:\"\\e119\"}.glyphicon-resize-horizontal:before{content:\"\\e120\"}.glyphicon-hdd:before{content:\"\\e121\"}.glyphicon-bullhorn:before{content:\"\\e122\"}.glyphicon-bell:before{content:\"\\e123\"}.glyphicon-certificate:before{content:\"\\e124\"}.glyphicon-thumbs-up:before{content:\"\\e125\"}.glyphicon-thumbs-down:before{content:\"\\e126\"}.glyphicon-hand-right:before{content:\"\\e127\"}.glyphicon-hand-left:before{content:\"\\e128\"}.glyphicon-hand-up:before{content:\"\\e129\"}.glyphicon-hand-down:before{content:\"\\e130\"}.glyphicon-circle-arrow-right:before{content:\"\\e131\"}.glyphicon-circle-arrow-left:before{content:\"\\e132\"}.glyphicon-circle-arrow-up:before{content:\"\\e133\"}.glyphicon-circle-arrow-down:before{content:\"\\e134\"}.glyphicon-globe:before{content:\"\\e135\"}.glyphicon-wrench:before{content:\"\\e136\"}.glyphicon-tasks:before{content:\"\\e137\"}.glyphicon-filter:before{content:\"\\e138\"}.glyphicon-briefcase:before{content:\"\\e139\"}.glyphicon-fullscreen:before{content:\"\\e140\"}.glyphicon-dashboard:before{content:\"\\e141\"}.glyphicon-paperclip:before{content:\"\\e142\"}.glyphicon-heart-empty:before{content:\"\\e143\"}.glyphicon-link:before{content:\"\\e144\"}.glyphicon-phone:before{content:\"\\e145\"}.glyphicon-pushpin:before{content:\"\\e146\"}.glyphicon-usd:before{content:\"\\e148\"}.glyphicon-gbp:before{content:\"\\e149\"}.glyphicon-sort:before{content:\"\\e150\"}.glyphicon-sort-by-alphabet:before{content:\"\\e151\"}.glyphicon-sort-by-alphabet-alt:before{content:\"\\e152\"}.glyphicon-sort-by-order:before{content:\"\\e153\"}.glyphicon-sort-by-order-alt:before{content:\"\\e154\"}.glyphicon-sort-by-attributes:before{content:\"\\e155\"}.glyphicon-sort-by-attributes-alt:before{content:\"\\e156\"}.glyphicon-unchecked:before{content:\"\\e157\"}.glyphicon-expand:before{content:\"\\e158\"}.glyphicon-collapse-down:before{content:\"\\e159\"}.glyphicon-collapse-up:before{content:\"\\e160\"}.glyphicon-log-in:before{content:\"\\e161\"}.glyphicon-flash:before{content:\"\\e162\"}.glyphicon-log-out:before{content:\"\\e163\"}.glyphicon-new-window:before{content:\"\\e164\"}.glyphicon-record:before{content:\"\\e165\"}.glyphicon-save:before{content:\"\\e166\"}.glyphicon-open:before{content:\"\\e167\"}.glyphicon-saved:before{content:\"\\e168\"}.glyphicon-import:before{content:\"\\e169\"}.glyphicon-export:before{content:\"\\e170\"}.glyphicon-send:before{content:\"\\e171\"}.glyphicon-floppy-disk:before{content:\"\\e172\"}.glyphicon-floppy-saved:before{content:\"\\e173\"}.glyphicon-floppy-remove:before{content:\"\\e174\"}.glyphicon-floppy-save:before{content:\"\\e175\"}.glyphicon-floppy-open:before{content:\"\\e176\"}.glyphicon-credit-card:before{content:\"\\e177\"}.glyphicon-transfer:before{content:\"\\e178\"}.glyphicon-cutlery:before{content:\"\\e179\"}.glyphicon-header:before{content:\"\\e180\"}.glyphicon-compressed:before{content:\"\\e181\"}.glyphicon-earphone:before{content:\"\\e182\"}.glyphicon-phone-alt:before{content:\"\\e183\"}.glyphicon-tower:before{content:\"\\e184\"}.glyphicon-stats:before{content:\"\\e185\"}.glyphicon-sd-video:before{content:\"\\e186\"}.glyphicon-hd-video:before{content:\"\\e187\"}.glyphicon-subtitles:before{content:\"\\e188\"}.glyphicon-sound-stereo:before{content:\"\\e189\"}.glyphicon-sound-dolby:before{content:\"\\e190\"}.glyphicon-sound-5-1:before{content:\"\\e191\"}.glyphicon-sound-6-1:before{content:\"\\e192\"}.glyphicon-sound-7-1:before{content:\"\\e193\"}.glyphicon-copyright-mark:before{content:\"\\e194\"}.glyphicon-registration-mark:before{content:\"\\e195\"}.glyphicon-cloud-download:before{content:\"\\e197\"}.glyphicon-cloud-upload:before{content:\"\\e198\"}.glyphicon-tree-conifer:before{content:\"\\e199\"}.glyphicon-tree-deciduous:before{content:\"\\e200\"}.glyphicon-cd:before{content:\"\\e201\"}.glyphicon-save-file:before{content:\"\\e202\"}.glyphicon-open-file:before{content:\"\\e203\"}.glyphicon-level-up:before{content:\"\\e204\"}.glyphicon-copy:before{content:\"\\e205\"}.glyphicon-paste:before{content:\"\\e206\"}.glyphicon-alert:before{content:\"\\e209\"}.glyphicon-equalizer:before{content:\"\\e210\"}.glyphicon-king:before{content:\"\\e211\"}.glyphicon-queen:before{content:\"\\e212\"}.glyphicon-pawn:before{content:\"\\e213\"}.glyphicon-bishop:before{content:\"\\e214\"}.glyphicon-knight:before{content:\"\\e215\"}.glyphicon-baby-formula:before{content:\"\\e216\"}.glyphicon-tent:before{content:\"\\26fa\"}.glyphicon-blackboard:before{content:\"\\e218\"}.glyphicon-bed:before{content:\"\\e219\"}.glyphicon-apple:before{content:\"\\f8ff\"}.glyphicon-erase:before{content:\"\\e221\"}.glyphicon-hourglass:before{content:\"\\231b\"}.glyphicon-lamp:before{content:\"\\e223\"}.glyphicon-duplicate:before{content:\"\\e224\"}.glyphicon-piggy-bank:before{content:\"\\e225\"}.glyphicon-scissors:before{content:\"\\e226\"}.glyphicon-bitcoin:before{content:\"\\e227\"}.glyphicon-btc:before{content:\"\\e227\"}.glyphicon-xbt:before{content:\"\\e227\"}.glyphicon-yen:before{content:\"\\00a5\"}.glyphicon-jpy:before{content:\"\\00a5\"}.glyphicon-ruble:before{content:\"\\20bd\"}.glyphicon-rub:before{content:\"\\20bd\"}.glyphicon-scale:before{content:\"\\e230\"}.glyphicon-ice-lolly:before{content:\"\\e231\"}.glyphicon-ice-lolly-tasted:before{content:\"\\e232\"}.glyphicon-education:before{content:\"\\e233\"}.glyphicon-option-horizontal:before{content:\"\\e234\"}.glyphicon-option-vertical:before{content:\"\\e235\"}.glyphicon-menu-hamburger:before{content:\"\\e236\"}.glyphicon-modal-window:before{content:\"\\e237\"}.glyphicon-oil:before{content:\"\\e238\"}.glyphicon-grain:before{content:\"\\e239\"}.glyphicon-sunglasses:before{content:\"\\e240\"}.glyphicon-text-size:before{content:\"\\e241\"}.glyphicon-text-color:before{content:\"\\e242\"}.glyphicon-text-background:before{content:\"\\e243\"}.glyphicon-object-align-top:before{content:\"\\e244\"}.glyphicon-object-align-bottom:before{content:\"\\e245\"}.glyphicon-object-align-horizontal:before{content:\"\\e246\"}.glyphicon-object-align-left:before{content:\"\\e247\"}.glyphicon-object-align-vertical:before{content:\"\\e248\"}.glyphicon-object-align-right:before{content:\"\\e249\"}.glyphicon-triangle-right:before{content:\"\\e250\"}.glyphicon-triangle-left:before{content:\"\\e251\"}.glyphicon-triangle-bottom:before{content:\"\\e252\"}.glyphicon-triangle-top:before{content:\"\\e253\"}.glyphicon-console:before{content:\"\\e254\"}.glyphicon-superscript:before{content:\"\\e255\"}.glyphicon-subscript:before{content:\"\\e256\"}.glyphicon-menu-left:before{content:\"\\e257\"}.glyphicon-menu-right:before{content:\"\\e258\"}.glyphicon-menu-down:before{content:\"\\e259\"}.glyphicon-menu-up:before{content:\"\\e260\"}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#333;background-color:#fff}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#337ab7;text-decoration:none}a:focus,a:hover{color:#23527c;text-decoration:underline}a:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}figure{margin:0}img{vertical-align:middle}.carousel-inner>.item>a>img,.carousel-inner>.item>img,.img-responsive,.thumbnail a>img,.thumbnail>img{display:block;max-width:100%;height:auto}.img-rounded{border-radius:6px}.img-thumbnail{display:inline-block;max-width:100%;height:auto;padding:4px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.img-circle{border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}[role=button]{cursor:pointer}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{font-family:inherit;font-weight:500;line-height:1.1;color:inherit}.h1 .small,.h1 small,.h2 .small,.h2 small,.h3 .small,.h3 small,.h4 .small,.h4 small,.h5 .small,.h5 small,.h6 .small,.h6 small,h1 .small,h1 small,h2 .small,h2 small,h3 .small,h3 small,h4 .small,h4 small,h5 .small,h5 small,h6 .small,h6 small{font-weight:400;line-height:1;color:#777}.h1,.h2,.h3,h1,h2,h3{margin-top:20px;margin-bottom:10px}.h1 .small,.h1 small,.h2 .small,.h2 small,.h3 .small,.h3 small,h1 .small,h1 small,h2 .small,h2 small,h3 .small,h3 small{font-size:65%}.h4,.h5,.h6,h4,h5,h6{margin-top:10px;margin-bottom:10px}.h4 .small,.h4 small,.h5 .small,.h5 small,.h6 .small,.h6 small,h4 .small,h4 small,h5 .small,h5 small,h6 .small,h6 small{font-size:75%}.h1,h1{font-size:36px}.h2,h2{font-size:30px}.h3,h3{font-size:24px}.h4,h4{font-size:18px}.h5,h5{font-size:14px}.h6,h6{font-size:12px}p{margin:0 0 10px}.lead{margin-bottom:20px;font-size:16px;font-weight:300;line-height:1.4}@media (min-width:768px){.lead{font-size:21px}}.small,small{font-size:85%}.mark,mark{padding:.2em;background-color:#fcf8e3}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-justify{text-align:justify}.text-nowrap{white-space:nowrap}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.text-muted{color:#777}.text-primary{color:#337ab7}a.text-primary:focus,a.text-primary:hover{color:#286090}.text-success{color:#3c763d}a.text-success:focus,a.text-success:hover{color:#2b542c}.text-info{color:#31708f}a.text-info:focus,a.text-info:hover{color:#245269}.text-warning{color:#8a6d3b}a.text-warning:focus,a.text-warning:hover{color:#66512c}.text-danger{color:#a94442}a.text-danger:focus,a.text-danger:hover{color:#843534}.bg-primary{color:#fff;background-color:#337ab7}a.bg-primary:focus,a.bg-primary:hover{background-color:#286090}.bg-success{background-color:#dff0d8}a.bg-success:focus,a.bg-success:hover{background-color:#c1e2b3}.bg-info{background-color:#d9edf7}a.bg-info:focus,a.bg-info:hover{background-color:#afd9ee}.bg-warning{background-color:#fcf8e3}a.bg-warning:focus,a.bg-warning:hover{background-color:#f7ecb5}.bg-danger{background-color:#f2dede}a.bg-danger:focus,a.bg-danger:hover{background-color:#e4b9b9}.page-header{padding-bottom:9px;margin:40px 0 20px;border-bottom:1px solid #eee}ol,ul{margin-top:0;margin-bottom:10px}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;margin-left:-5px;list-style:none}.list-inline>li{display:inline-block;padding-right:5px;padding-left:5px}dl{margin-top:0;margin-bottom:20px}dd,dt{line-height:1.42857143}dt{font-weight:700}dd{margin-left:0}@media (min-width:768px){.dl-horizontal dt{float:left;width:160px;overflow:hidden;clear:left;text-align:right;text-overflow:ellipsis;white-space:nowrap}.dl-horizontal dd{margin-left:180px}}abbr[data-original-title],abbr[title]{cursor:help;border-bottom:1px dotted #777}.initialism{font-size:90%;text-transform:uppercase}blockquote{padding:10px 20px;margin:0 0 20px;font-size:17.5px;border-left:5px solid #eee}blockquote ol:last-child,blockquote p:last-child,blockquote ul:last-child{margin-bottom:0}blockquote .small,blockquote footer,blockquote small{display:block;font-size:80%;line-height:1.42857143;color:#777}blockquote .small:before,blockquote footer:before,blockquote small:before{content:'\\2014 \\00A0'}.blockquote-reverse,blockquote.pull-right{padding-right:15px;padding-left:0;text-align:right;border-right:5px solid #eee;border-left:0}.blockquote-reverse .small:before,.blockquote-reverse footer:before,.blockquote-reverse small:before,blockquote.pull-right .small:before,blockquote.pull-right footer:before,blockquote.pull-right small:before{content:''}.blockquote-reverse .small:after,.blockquote-reverse footer:after,.blockquote-reverse small:after,blockquote.pull-right .small:after,blockquote.pull-right footer:after,blockquote.pull-right small:after{content:'\\00A0 \\2014'}address{margin-bottom:20px;font-style:normal;line-height:1.42857143}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,\"Courier New\",monospace}code{padding:2px 4px;font-size:90%;color:#c7254e;background-color:#f9f2f4;border-radius:4px}kbd{padding:2px 4px;font-size:90%;color:#fff;background-color:#333;border-radius:3px;-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.25);box-shadow:inset 0 -1px 0 rgba(0,0,0,.25)}kbd kbd{padding:0;font-size:100%;font-weight:700;-webkit-box-shadow:none;box-shadow:none}pre{display:block;padding:9.5px;margin:0 0 10px;font-size:13px;line-height:1.42857143;color:#333;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}pre code{padding:0;font-size:inherit;color:inherit;white-space:pre-wrap;background-color:transparent;border-radius:0}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:768px){.container{width:750px}}@media (min-width:992px){.container{width:970px}}@media (min-width:1200px){.container{width:1170px}}.container-fluid{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{margin-right:-15px;margin-left:-15px}.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{position:relative;min-height:1px;padding-right:15px;padding-left:15px}.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{float:left}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666667%}.col-xs-pull-10{right:83.33333333%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666667%}.col-xs-pull-7{right:58.33333333%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666667%}.col-xs-pull-4{right:33.33333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.66666667%}.col-xs-pull-1{right:8.33333333%}.col-xs-pull-0{right:auto}.col-xs-push-12{left:100%}.col-xs-push-11{left:91.66666667%}.col-xs-push-10{left:83.33333333%}.col-xs-push-9{left:75%}.col-xs-push-8{left:66.66666667%}.col-xs-push-7{left:58.33333333%}.col-xs-push-6{left:50%}.col-xs-push-5{left:41.66666667%}.col-xs-push-4{left:33.33333333%}.col-xs-push-3{left:25%}.col-xs-push-2{left:16.66666667%}.col-xs-push-1{left:8.33333333%}.col-xs-push-0{left:auto}.col-xs-offset-12{margin-left:100%}.col-xs-offset-11{margin-left:91.66666667%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-0{margin-left:0}@media (min-width:768px){.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9{float:left}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666667%}.col-sm-pull-10{right:83.33333333%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666667%}.col-sm-pull-7{right:58.33333333%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666667%}.col-sm-pull-4{right:33.33333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.66666667%}.col-sm-pull-1{right:8.33333333%}.col-sm-pull-0{right:auto}.col-sm-push-12{left:100%}.col-sm-push-11{left:91.66666667%}.col-sm-push-10{left:83.33333333%}.col-sm-push-9{left:75%}.col-sm-push-8{left:66.66666667%}.col-sm-push-7{left:58.33333333%}.col-sm-push-6{left:50%}.col-sm-push-5{left:41.66666667%}.col-sm-push-4{left:33.33333333%}.col-sm-push-3{left:25%}.col-sm-push-2{left:16.66666667%}.col-sm-push-1{left:8.33333333%}.col-sm-push-0{left:auto}.col-sm-offset-12{margin-left:100%}.col-sm-offset-11{margin-left:91.66666667%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-0{margin-left:0}}@media (min-width:992px){.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666667%}.col-md-pull-10{right:83.33333333%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666667%}.col-md-pull-7{right:58.33333333%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666667%}.col-md-pull-4{right:33.33333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.66666667%}.col-md-pull-1{right:8.33333333%}.col-md-pull-0{right:auto}.col-md-push-12{left:100%}.col-md-push-11{left:91.66666667%}.col-md-push-10{left:83.33333333%}.col-md-push-9{left:75%}.col-md-push-8{left:66.66666667%}.col-md-push-7{left:58.33333333%}.col-md-push-6{left:50%}.col-md-push-5{left:41.66666667%}.col-md-push-4{left:33.33333333%}.col-md-push-3{left:25%}.col-md-push-2{left:16.66666667%}.col-md-push-1{left:8.33333333%}.col-md-push-0{left:auto}.col-md-offset-12{margin-left:100%}.col-md-offset-11{margin-left:91.66666667%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-9{margin-left:75%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-6{margin-left:50%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-3{margin-left:25%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-0{margin-left:0}}@media (min-width:1200px){.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9{float:left}.col-lg-12{width:100%}.col-lg-11{width:91.66666667%}.col-lg-10{width:83.33333333%}.col-lg-9{width:75%}.col-lg-8{width:66.66666667%}.col-lg-7{width:58.33333333%}.col-lg-6{width:50%}.col-lg-5{width:41.66666667%}.col-lg-4{width:33.33333333%}.col-lg-3{width:25%}.col-lg-2{width:16.66666667%}.col-lg-1{width:8.33333333%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666667%}.col-lg-pull-10{right:83.33333333%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666667%}.col-lg-pull-7{right:58.33333333%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666667%}.col-lg-pull-4{right:33.33333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.66666667%}.col-lg-pull-1{right:8.33333333%}.col-lg-pull-0{right:auto}.col-lg-push-12{left:100%}.col-lg-push-11{left:91.66666667%}.col-lg-push-10{left:83.33333333%}.col-lg-push-9{left:75%}.col-lg-push-8{left:66.66666667%}.col-lg-push-7{left:58.33333333%}.col-lg-push-6{left:50%}.col-lg-push-5{left:41.66666667%}.col-lg-push-4{left:33.33333333%}.col-lg-push-3{left:25%}.col-lg-push-2{left:16.66666667%}.col-lg-push-1{left:8.33333333%}.col-lg-push-0{left:auto}.col-lg-offset-12{margin-left:100%}.col-lg-offset-11{margin-left:91.66666667%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-0{margin-left:0}}table{background-color:transparent}caption{padding-top:8px;padding-bottom:8px;color:#777;text-align:left}th{text-align:left}.table{width:100%;max-width:100%;margin-bottom:20px}.table>tbody>tr>td,.table>tbody>tr>th,.table>tfoot>tr>td,.table>tfoot>tr>th,.table>thead>tr>td,.table>thead>tr>th{padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd}.table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.table>caption+thead>tr:first-child>td,.table>caption+thead>tr:first-child>th,.table>colgroup+thead>tr:first-child>td,.table>colgroup+thead>tr:first-child>th,.table>thead:first-child>tr:first-child>td,.table>thead:first-child>tr:first-child>th{border-top:0}.table>tbody+tbody{border-top:2px solid #ddd}.table .table{background-color:#fff}.table-condensed>tbody>tr>td,.table-condensed>tbody>tr>th,.table-condensed>tfoot>tr>td,.table-condensed>tfoot>tr>th,.table-condensed>thead>tr>td,.table-condensed>thead>tr>th{padding:5px}.table-bordered{border:1px solid #ddd}.table-bordered>tbody>tr>td,.table-bordered>tbody>tr>th,.table-bordered>tfoot>tr>td,.table-bordered>tfoot>tr>th,.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{border:1px solid #ddd}.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{border-bottom-width:2px}.table-striped>tbody>tr:nth-of-type(odd){background-color:#f9f9f9}.table-hover>tbody>tr:hover{background-color:#f5f5f5}table col[class*=col-]{position:static;display:table-column;float:none}table td[class*=col-],table th[class*=col-]{position:static;display:table-cell;float:none}.table>tbody>tr.active>td,.table>tbody>tr.active>th,.table>tbody>tr>td.active,.table>tbody>tr>th.active,.table>tfoot>tr.active>td,.table>tfoot>tr.active>th,.table>tfoot>tr>td.active,.table>tfoot>tr>th.active,.table>thead>tr.active>td,.table>thead>tr.active>th,.table>thead>tr>td.active,.table>thead>tr>th.active{background-color:#f5f5f5}.table-hover>tbody>tr.active:hover>td,.table-hover>tbody>tr.active:hover>th,.table-hover>tbody>tr:hover>.active,.table-hover>tbody>tr>td.active:hover,.table-hover>tbody>tr>th.active:hover{background-color:#e8e8e8}.table>tbody>tr.success>td,.table>tbody>tr.success>th,.table>tbody>tr>td.success,.table>tbody>tr>th.success,.table>tfoot>tr.success>td,.table>tfoot>tr.success>th,.table>tfoot>tr>td.success,.table>tfoot>tr>th.success,.table>thead>tr.success>td,.table>thead>tr.success>th,.table>thead>tr>td.success,.table>thead>tr>th.success{background-color:#dff0d8}.table-hover>tbody>tr.success:hover>td,.table-hover>tbody>tr.success:hover>th,.table-hover>tbody>tr:hover>.success,.table-hover>tbody>tr>td.success:hover,.table-hover>tbody>tr>th.success:hover{background-color:#d0e9c6}.table>tbody>tr.info>td,.table>tbody>tr.info>th,.table>tbody>tr>td.info,.table>tbody>tr>th.info,.table>tfoot>tr.info>td,.table>tfoot>tr.info>th,.table>tfoot>tr>td.info,.table>tfoot>tr>th.info,.table>thead>tr.info>td,.table>thead>tr.info>th,.table>thead>tr>td.info,.table>thead>tr>th.info{background-color:#d9edf7}.table-hover>tbody>tr.info:hover>td,.table-hover>tbody>tr.info:hover>th,.table-hover>tbody>tr:hover>.info,.table-hover>tbody>tr>td.info:hover,.table-hover>tbody>tr>th.info:hover{background-color:#c4e3f3}.table>tbody>tr.warning>td,.table>tbody>tr.warning>th,.table>tbody>tr>td.warning,.table>tbody>tr>th.warning,.table>tfoot>tr.warning>td,.table>tfoot>tr.warning>th,.table>tfoot>tr>td.warning,.table>tfoot>tr>th.warning,.table>thead>tr.warning>td,.table>thead>tr.warning>th,.table>thead>tr>td.warning,.table>thead>tr>th.warning{background-color:#fcf8e3}.table-hover>tbody>tr.warning:hover>td,.table-hover>tbody>tr.warning:hover>th,.table-hover>tbody>tr:hover>.warning,.table-hover>tbody>tr>td.warning:hover,.table-hover>tbody>tr>th.warning:hover{background-color:#faf2cc}.table>tbody>tr.danger>td,.table>tbody>tr.danger>th,.table>tbody>tr>td.danger,.table>tbody>tr>th.danger,.table>tfoot>tr.danger>td,.table>tfoot>tr.danger>th,.table>tfoot>tr>td.danger,.table>tfoot>tr>th.danger,.table>thead>tr.danger>td,.table>thead>tr.danger>th,.table>thead>tr>td.danger,.table>thead>tr>th.danger{background-color:#f2dede}.table-hover>tbody>tr.danger:hover>td,.table-hover>tbody>tr.danger:hover>th,.table-hover>tbody>tr:hover>.danger,.table-hover>tbody>tr>td.danger:hover,.table-hover>tbody>tr>th.danger:hover{background-color:#ebcccc}.table-responsive{min-height:.01%;overflow-x:auto}@media screen and (max-width:767px){.table-responsive{width:100%;margin-bottom:15px;overflow-y:hidden;-ms-overflow-style:-ms-autohiding-scrollbar;border:1px solid #ddd}.table-responsive>.table{margin-bottom:0}.table-responsive>.table>tbody>tr>td,.table-responsive>.table>tbody>tr>th,.table-responsive>.table>tfoot>tr>td,.table-responsive>.table>tfoot>tr>th,.table-responsive>.table>thead>tr>td,.table-responsive>.table>thead>tr>th{white-space:nowrap}.table-responsive>.table-bordered{border:0}.table-responsive>.table-bordered>tbody>tr>td:first-child,.table-responsive>.table-bordered>tbody>tr>th:first-child,.table-responsive>.table-bordered>tfoot>tr>td:first-child,.table-responsive>.table-bordered>tfoot>tr>th:first-child,.table-responsive>.table-bordered>thead>tr>td:first-child,.table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.table-responsive>.table-bordered>tbody>tr>td:last-child,.table-responsive>.table-bordered>tbody>tr>th:last-child,.table-responsive>.table-bordered>tfoot>tr>td:last-child,.table-responsive>.table-bordered>tfoot>tr>th:last-child,.table-responsive>.table-bordered>thead>tr>td:last-child,.table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.table-responsive>.table-bordered>tbody>tr:last-child>td,.table-responsive>.table-bordered>tbody>tr:last-child>th,.table-responsive>.table-bordered>tfoot>tr:last-child>td,.table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;padding:0;margin-bottom:20px;font-size:21px;line-height:inherit;color:#333;border:0;border-bottom:1px solid #e5e5e5}label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700}input[type=search]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}input[type=checkbox],input[type=radio]{margin:4px 0 0;margin-top:1px\\9;line-height:normal}input[type=file]{display:block}input[type=range]{display:block;width:100%}select[multiple],select[size]{height:auto}input[type=file]:focus,input[type=checkbox]:focus,input[type=radio]:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}output{display:block;padding-top:7px;font-size:14px;line-height:1.42857143;color:#555}.form-control{display:block;width:100%;height:34px;padding:6px 12px;font-size:14px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;-o-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s}.form-control:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.form-control::-moz-placeholder{color:#999;opacity:1}.form-control:-ms-input-placeholder{color:#999}.form-control::-webkit-input-placeholder{color:#999}.form-control::-ms-expand{background-color:transparent;border:0}.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{background-color:#eee;opacity:1}.form-control[disabled],fieldset[disabled] .form-control{cursor:not-allowed}textarea.form-control{height:auto}input[type=search]{-webkit-appearance:none}@media screen and (-webkit-min-device-pixel-ratio:0){input[type=date].form-control,input[type=time].form-control,input[type=datetime-local].form-control,input[type=month].form-control{line-height:34px}.input-group-sm input[type=date],.input-group-sm input[type=time],.input-group-sm input[type=datetime-local],.input-group-sm input[type=month],input[type=date].input-sm,input[type=time].input-sm,input[type=datetime-local].input-sm,input[type=month].input-sm{line-height:30px}.input-group-lg input[type=date],.input-group-lg input[type=time],.input-group-lg input[type=datetime-local],.input-group-lg input[type=month],input[type=date].input-lg,input[type=time].input-lg,input[type=datetime-local].input-lg,input[type=month].input-lg{line-height:46px}}.form-group{margin-bottom:15px}.checkbox,.radio{position:relative;display:block;margin-top:10px;margin-bottom:10px}.checkbox label,.radio label{min-height:20px;padding-left:20px;margin-bottom:0;font-weight:400;cursor:pointer}.checkbox input[type=checkbox],.checkbox-inline input[type=checkbox],.radio input[type=radio],.radio-inline input[type=radio]{position:absolute;margin-top:4px\\9;margin-left:-20px}.checkbox+.checkbox,.radio+.radio{margin-top:-5px}.checkbox-inline,.radio-inline{position:relative;display:inline-block;padding-left:20px;margin-bottom:0;font-weight:400;vertical-align:middle;cursor:pointer}.checkbox-inline+.checkbox-inline,.radio-inline+.radio-inline{margin-top:0;margin-left:10px}fieldset[disabled] input[type=checkbox],fieldset[disabled] input[type=radio],input[type=checkbox].disabled,input[type=checkbox][disabled],input[type=radio].disabled,input[type=radio][disabled]{cursor:not-allowed}.checkbox-inline.disabled,.radio-inline.disabled,fieldset[disabled] .checkbox-inline,fieldset[disabled] .radio-inline{cursor:not-allowed}.checkbox.disabled label,.radio.disabled label,fieldset[disabled] .checkbox label,fieldset[disabled] .radio label{cursor:not-allowed}.form-control-static{min-height:34px;padding-top:7px;padding-bottom:7px;margin-bottom:0}.form-control-static.input-lg,.form-control-static.input-sm{padding-right:0;padding-left:0}.input-sm{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-sm{height:30px;line-height:30px}select[multiple].input-sm,textarea.input-sm{height:auto}.form-group-sm .form-control{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.form-group-sm select.form-control{height:30px;line-height:30px}.form-group-sm select[multiple].form-control,.form-group-sm textarea.form-control{height:auto}.form-group-sm .form-control-static{height:30px;min-height:32px;padding:6px 10px;font-size:12px;line-height:1.5}.input-lg{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}select.input-lg{height:46px;line-height:46px}select[multiple].input-lg,textarea.input-lg{height:auto}.form-group-lg .form-control{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.form-group-lg select.form-control{height:46px;line-height:46px}.form-group-lg select[multiple].form-control,.form-group-lg textarea.form-control{height:auto}.form-group-lg .form-control-static{height:46px;min-height:38px;padding:11px 16px;font-size:18px;line-height:1.3333333}.has-feedback{position:relative}.has-feedback .form-control{padding-right:42.5px}.form-control-feedback{position:absolute;top:0;right:0;z-index:2;display:block;width:34px;height:34px;line-height:34px;text-align:center;pointer-events:none}.form-group-lg .form-control+.form-control-feedback,.input-group-lg+.form-control-feedback,.input-lg+.form-control-feedback{width:46px;height:46px;line-height:46px}.form-group-sm .form-control+.form-control-feedback,.input-group-sm+.form-control-feedback,.input-sm+.form-control-feedback{width:30px;height:30px;line-height:30px}.has-success .checkbox,.has-success .checkbox-inline,.has-success .control-label,.has-success .help-block,.has-success .radio,.has-success .radio-inline,.has-success.checkbox label,.has-success.checkbox-inline label,.has-success.radio label,.has-success.radio-inline label{color:#3c763d}.has-success .form-control{border-color:#3c763d;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-success .form-control:focus{border-color:#2b542c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168}.has-success .input-group-addon{color:#3c763d;background-color:#dff0d8;border-color:#3c763d}.has-success .form-control-feedback{color:#3c763d}.has-warning .checkbox,.has-warning .checkbox-inline,.has-warning .control-label,.has-warning .help-block,.has-warning .radio,.has-warning .radio-inline,.has-warning.checkbox label,.has-warning.checkbox-inline label,.has-warning.radio label,.has-warning.radio-inline label{color:#8a6d3b}.has-warning .form-control{border-color:#8a6d3b;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-warning .form-control:focus{border-color:#66512c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b}.has-warning .input-group-addon{color:#8a6d3b;background-color:#fcf8e3;border-color:#8a6d3b}.has-warning .form-control-feedback{color:#8a6d3b}.has-error .checkbox,.has-error .checkbox-inline,.has-error .control-label,.has-error .help-block,.has-error .radio,.has-error .radio-inline,.has-error.checkbox label,.has-error.checkbox-inline label,.has-error.radio label,.has-error.radio-inline label{color:#a94442}.has-error .form-control{border-color:#a94442;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-error .form-control:focus{border-color:#843534;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483}.has-error .input-group-addon{color:#a94442;background-color:#f2dede;border-color:#a94442}.has-error .form-control-feedback{color:#a94442}.has-feedback label~.form-control-feedback{top:25px}.has-feedback label.sr-only~.form-control-feedback{top:0}.help-block{display:block;margin-top:5px;margin-bottom:10px;color:#737373}@media (min-width:768px){.form-inline .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-static{display:inline-block}.form-inline .input-group{display:inline-table;vertical-align:middle}.form-inline .input-group .form-control,.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn{width:auto}.form-inline .input-group>.form-control{width:100%}.form-inline .control-label{margin-bottom:0;vertical-align:middle}.form-inline .checkbox,.form-inline .radio{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.form-inline .checkbox label,.form-inline .radio label{padding-left:0}.form-inline .checkbox input[type=checkbox],.form-inline .radio input[type=radio]{position:relative;margin-left:0}.form-inline .has-feedback .form-control-feedback{top:0}}.form-horizontal .checkbox,.form-horizontal .checkbox-inline,.form-horizontal .radio,.form-horizontal .radio-inline{padding-top:7px;margin-top:0;margin-bottom:0}.form-horizontal .checkbox,.form-horizontal .radio{min-height:27px}.form-horizontal .form-group{margin-right:-15px;margin-left:-15px}@media (min-width:768px){.form-horizontal .control-label{padding-top:7px;margin-bottom:0;text-align:right}}.form-horizontal .has-feedback .form-control-feedback{right:15px}@media (min-width:768px){.form-horizontal .form-group-lg .control-label{padding-top:11px;font-size:18px}}@media (min-width:768px){.form-horizontal .form-group-sm .control-label{padding-top:6px;font-size:12px}}.btn{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:1px solid transparent;border-radius:4px}.btn.active.focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn:active:focus,.btn:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.btn.focus,.btn:focus,.btn:hover{color:#333;text-decoration:none}.btn.active,.btn:active{background-image:none;outline:0;-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn.disabled,.btn[disabled],fieldset[disabled] .btn{cursor:not-allowed;filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:none;opacity:.65}a.btn.disabled,fieldset[disabled] a.btn{pointer-events:none}.btn-default{color:#333;background-color:#fff;border-color:#ccc}.btn-default.focus,.btn-default:focus{color:#333;background-color:#e6e6e6;border-color:#8c8c8c}.btn-default:hover{color:#333;background-color:#e6e6e6;border-color:#adadad}.btn-default.active,.btn-default:active,.open>.dropdown-toggle.btn-default{color:#333;background-color:#e6e6e6;border-color:#adadad}.btn-default.active.focus,.btn-default.active:focus,.btn-default.active:hover,.btn-default:active.focus,.btn-default:active:focus,.btn-default:active:hover,.open>.dropdown-toggle.btn-default.focus,.open>.dropdown-toggle.btn-default:focus,.open>.dropdown-toggle.btn-default:hover{color:#333;background-color:#d4d4d4;border-color:#8c8c8c}.btn-default.active,.btn-default:active,.open>.dropdown-toggle.btn-default{background-image:none}.btn-default.disabled.focus,.btn-default.disabled:focus,.btn-default.disabled:hover,.btn-default[disabled].focus,.btn-default[disabled]:focus,.btn-default[disabled]:hover,fieldset[disabled] .btn-default.focus,fieldset[disabled] .btn-default:focus,fieldset[disabled] .btn-default:hover{background-color:#fff;border-color:#ccc}.btn-default .badge{color:#fff;background-color:#333}.btn-primary{color:#fff;background-color:#337ab7;border-color:#2e6da4}.btn-primary.focus,.btn-primary:focus{color:#fff;background-color:#286090;border-color:#122b40}.btn-primary:hover{color:#fff;background-color:#286090;border-color:#204d74}.btn-primary.active,.btn-primary:active,.open>.dropdown-toggle.btn-primary{color:#fff;background-color:#286090;border-color:#204d74}.btn-primary.active.focus,.btn-primary.active:focus,.btn-primary.active:hover,.btn-primary:active.focus,.btn-primary:active:focus,.btn-primary:active:hover,.open>.dropdown-toggle.btn-primary.focus,.open>.dropdown-toggle.btn-primary:focus,.open>.dropdown-toggle.btn-primary:hover{color:#fff;background-color:#204d74;border-color:#122b40}.btn-primary.active,.btn-primary:active,.open>.dropdown-toggle.btn-primary{background-image:none}.btn-primary.disabled.focus,.btn-primary.disabled:focus,.btn-primary.disabled:hover,.btn-primary[disabled].focus,.btn-primary[disabled]:focus,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary.focus,fieldset[disabled] .btn-primary:focus,fieldset[disabled] .btn-primary:hover{background-color:#337ab7;border-color:#2e6da4}.btn-primary .badge{color:#337ab7;background-color:#fff}.btn-success{color:#fff;background-color:#5cb85c;border-color:#4cae4c}.btn-success.focus,.btn-success:focus{color:#fff;background-color:#449d44;border-color:#255625}.btn-success:hover{color:#fff;background-color:#449d44;border-color:#398439}.btn-success.active,.btn-success:active,.open>.dropdown-toggle.btn-success{color:#fff;background-color:#449d44;border-color:#398439}.btn-success.active.focus,.btn-success.active:focus,.btn-success.active:hover,.btn-success:active.focus,.btn-success:active:focus,.btn-success:active:hover,.open>.dropdown-toggle.btn-success.focus,.open>.dropdown-toggle.btn-success:focus,.open>.dropdown-toggle.btn-success:hover{color:#fff;background-color:#398439;border-color:#255625}.btn-success.active,.btn-success:active,.open>.dropdown-toggle.btn-success{background-image:none}.btn-success.disabled.focus,.btn-success.disabled:focus,.btn-success.disabled:hover,.btn-success[disabled].focus,.btn-success[disabled]:focus,.btn-success[disabled]:hover,fieldset[disabled] .btn-success.focus,fieldset[disabled] .btn-success:focus,fieldset[disabled] .btn-success:hover{background-color:#5cb85c;border-color:#4cae4c}.btn-success .badge{color:#5cb85c;background-color:#fff}.btn-info{color:#fff;background-color:#5bc0de;border-color:#46b8da}.btn-info.focus,.btn-info:focus{color:#fff;background-color:#31b0d5;border-color:#1b6d85}.btn-info:hover{color:#fff;background-color:#31b0d5;border-color:#269abc}.btn-info.active,.btn-info:active,.open>.dropdown-toggle.btn-info{color:#fff;background-color:#31b0d5;border-color:#269abc}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle.btn-info.focus,.open>.dropdown-toggle.btn-info:focus,.open>.dropdown-toggle.btn-info:hover{color:#fff;background-color:#269abc;border-color:#1b6d85}.btn-info.active,.btn-info:active,.open>.dropdown-toggle.btn-info{background-image:none}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{background-color:#5bc0de;border-color:#46b8da}.btn-info .badge{color:#5bc0de;background-color:#fff}.btn-warning{color:#fff;background-color:#f0ad4e;border-color:#eea236}.btn-warning.focus,.btn-warning:focus{color:#fff;background-color:#ec971f;border-color:#985f0d}.btn-warning:hover{color:#fff;background-color:#ec971f;border-color:#d58512}.btn-warning.active,.btn-warning:active,.open>.dropdown-toggle.btn-warning{color:#fff;background-color:#ec971f;border-color:#d58512}.btn-warning.active.focus,.btn-warning.active:focus,.btn-warning.active:hover,.btn-warning:active.focus,.btn-warning:active:focus,.btn-warning:active:hover,.open>.dropdown-toggle.btn-warning.focus,.open>.dropdown-toggle.btn-warning:focus,.open>.dropdown-toggle.btn-warning:hover{color:#fff;background-color:#d58512;border-color:#985f0d}.btn-warning.active,.btn-warning:active,.open>.dropdown-toggle.btn-warning{background-image:none}.btn-warning.disabled.focus,.btn-warning.disabled:focus,.btn-warning.disabled:hover,.btn-warning[disabled].focus,.btn-warning[disabled]:focus,.btn-warning[disabled]:hover,fieldset[disabled] .btn-warning.focus,fieldset[disabled] .btn-warning:focus,fieldset[disabled] .btn-warning:hover{background-color:#f0ad4e;border-color:#eea236}.btn-warning .badge{color:#f0ad4e;background-color:#fff}.btn-danger{color:#fff;background-color:#d9534f;border-color:#d43f3a}.btn-danger.focus,.btn-danger:focus{color:#fff;background-color:#c9302c;border-color:#761c19}.btn-danger:hover{color:#fff;background-color:#c9302c;border-color:#ac2925}.btn-danger.active,.btn-danger:active,.open>.dropdown-toggle.btn-danger{color:#fff;background-color:#c9302c;border-color:#ac2925}.btn-danger.active.focus,.btn-danger.active:focus,.btn-danger.active:hover,.btn-danger:active.focus,.btn-danger:active:focus,.btn-danger:active:hover,.open>.dropdown-toggle.btn-danger.focus,.open>.dropdown-toggle.btn-danger:focus,.open>.dropdown-toggle.btn-danger:hover{color:#fff;background-color:#ac2925;border-color:#761c19}.btn-danger.active,.btn-danger:active,.open>.dropdown-toggle.btn-danger{background-image:none}.btn-danger.disabled.focus,.btn-danger.disabled:focus,.btn-danger.disabled:hover,.btn-danger[disabled].focus,.btn-danger[disabled]:focus,.btn-danger[disabled]:hover,fieldset[disabled] .btn-danger.focus,fieldset[disabled] .btn-danger:focus,fieldset[disabled] .btn-danger:hover{background-color:#d9534f;border-color:#d43f3a}.btn-danger .badge{color:#d9534f;background-color:#fff}.btn-link{font-weight:400;color:#337ab7;border-radius:0}.btn-link,.btn-link.active,.btn-link:active,.btn-link[disabled],fieldset[disabled] .btn-link{background-color:transparent;-webkit-box-shadow:none;box-shadow:none}.btn-link,.btn-link:active,.btn-link:focus,.btn-link:hover{border-color:transparent}.btn-link:focus,.btn-link:hover{color:#23527c;text-decoration:underline;background-color:transparent}.btn-link[disabled]:focus,.btn-link[disabled]:hover,fieldset[disabled] .btn-link:focus,fieldset[disabled] .btn-link:hover{color:#777;text-decoration:none}.btn-group-lg>.btn,.btn-lg{padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.btn-group-sm>.btn,.btn-sm{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.btn-group-xs>.btn,.btn-xs{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:5px}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{opacity:0;-webkit-transition:opacity .15s linear;-o-transition:opacity .15s linear;transition:opacity .15s linear}.fade.in{opacity:1}.collapse{display:none}.collapse.in{display:block}tr.collapse.in{display:table-row}tbody.collapse.in{display:table-row-group}.collapsing{position:relative;height:0;overflow:hidden;-webkit-transition-timing-function:ease;-o-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-duration:.35s;-o-transition-duration:.35s;transition-duration:.35s;-webkit-transition-property:height,visibility;-o-transition-property:height,visibility;transition-property:height,visibility}.caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-top:4px solid\\9;border-right:4px solid transparent;border-left:4px solid transparent}.dropdown,.dropup{position:relative}.dropdown-toggle:focus{outline:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;font-size:14px;text-align:left;list-style:none;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.15);border-radius:4px;-webkit-box-shadow:0 6px 12px rgba(0,0,0,.175);box-shadow:0 6px 12px rgba(0,0,0,.175)}.dropdown-menu.pull-right{right:0;left:auto}.dropdown-menu .divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.dropdown-menu>li>a{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:nowrap}.dropdown-menu>li>a:focus,.dropdown-menu>li>a:hover{color:#262626;text-decoration:none;background-color:#f5f5f5}.dropdown-menu>.active>a,.dropdown-menu>.active>a:focus,.dropdown-menu>.active>a:hover{color:#fff;text-decoration:none;background-color:#337ab7;outline:0}.dropdown-menu>.disabled>a,.dropdown-menu>.disabled>a:focus,.dropdown-menu>.disabled>a:hover{color:#777}.dropdown-menu>.disabled>a:focus,.dropdown-menu>.disabled>a:hover{text-decoration:none;cursor:not-allowed;background-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.open>.dropdown-menu{display:block}.open>a{outline:0}.dropdown-menu-right{right:0;left:auto}.dropdown-menu-left{right:auto;left:0}.dropdown-header{display:block;padding:3px 20px;font-size:12px;line-height:1.42857143;color:#777;white-space:nowrap}.dropdown-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:990}.pull-right>.dropdown-menu{right:0;left:auto}.dropup .caret,.navbar-fixed-bottom .dropdown .caret{content:\"\";border-top:0;border-bottom:4px dashed;border-bottom:4px solid\\9}.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:2px}@media (min-width:768px){.navbar-right .dropdown-menu{right:0;left:auto}.navbar-right .dropdown-menu-left{right:auto;left:0}}.btn-group,.btn-group-vertical{position:relative;display:inline-block;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;float:left}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:2}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{margin-left:-5px}.btn-toolbar .btn,.btn-toolbar .btn-group,.btn-toolbar .input-group{float:left}.btn-toolbar>.btn,.btn-toolbar>.btn-group,.btn-toolbar>.input-group{margin-left:5px}.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.btn-group>.btn-group{float:left}.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-left-radius:0;border-bottom-left-radius:0}.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}.btn-group>.btn+.dropdown-toggle{padding-right:8px;padding-left:8px}.btn-group>.btn-lg+.dropdown-toggle{padding-right:12px;padding-left:12px}.btn-group.open .dropdown-toggle{-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn-group.open .dropdown-toggle.btn-link{-webkit-box-shadow:none;box-shadow:none}.btn .caret{margin-left:0}.btn-lg .caret{border-width:5px 5px 0;border-bottom-width:0}.dropup .btn-lg .caret{border-width:0 5px 5px}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group,.btn-group-vertical>.btn-group>.btn{display:block;float:none;width:100%;max-width:100%}.btn-group-vertical>.btn-group>.btn{float:none}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn:not(:first-child):not(:last-child){border-radius:0}.btn-group-vertical>.btn:first-child:not(:last-child){border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:last-child:not(:first-child){border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-left-radius:0;border-top-right-radius:0}.btn-group-justified{display:table;width:100%;table-layout:fixed;border-collapse:separate}.btn-group-justified>.btn,.btn-group-justified>.btn-group{display:table-cell;float:none;width:1%}.btn-group-justified>.btn-group .btn{width:100%}.btn-group-justified>.btn-group .dropdown-menu{left:auto}[data-toggle=buttons]>.btn input[type=checkbox],[data-toggle=buttons]>.btn input[type=radio],[data-toggle=buttons]>.btn-group>.btn input[type=checkbox],[data-toggle=buttons]>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:table;border-collapse:separate}.input-group[class*=col-]{float:none;padding-right:0;padding-left:0}.input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.input-group .form-control:focus{z-index:3}.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}select.input-group-lg>.form-control,select.input-group-lg>.input-group-addon,select.input-group-lg>.input-group-btn>.btn{height:46px;line-height:46px}select[multiple].input-group-lg>.form-control,select[multiple].input-group-lg>.input-group-addon,select[multiple].input-group-lg>.input-group-btn>.btn,textarea.input-group-lg>.form-control,textarea.input-group-lg>.input-group-addon,textarea.input-group-lg>.input-group-btn>.btn{height:auto}.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-group-sm>.form-control,select.input-group-sm>.input-group-addon,select.input-group-sm>.input-group-btn>.btn{height:30px;line-height:30px}select[multiple].input-group-sm>.form-control,select[multiple].input-group-sm>.input-group-addon,select[multiple].input-group-sm>.input-group-btn>.btn,textarea.input-group-sm>.form-control,textarea.input-group-sm>.input-group-addon,textarea.input-group-sm>.input-group-btn>.btn{height:auto}.input-group .form-control,.input-group-addon,.input-group-btn{display:table-cell}.input-group .form-control:not(:first-child):not(:last-child),.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child){border-radius:0}.input-group-addon,.input-group-btn{width:1%;white-space:nowrap;vertical-align:middle}.input-group-addon{padding:6px 12px;font-size:14px;font-weight:400;line-height:1;color:#555;text-align:center;background-color:#eee;border:1px solid #ccc;border-radius:4px}.input-group-addon.input-sm{padding:5px 10px;font-size:12px;border-radius:3px}.input-group-addon.input-lg{padding:10px 16px;font-size:18px;border-radius:6px}.input-group-addon input[type=checkbox],.input-group-addon input[type=radio]{margin-top:0}.input-group .form-control:first-child,.input-group-addon:first-child,.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group>.btn,.input-group-btn:first-child>.dropdown-toggle,.input-group-btn:last-child>.btn-group:not(:last-child)>.btn,.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.input-group-addon:first-child{border-right:0}.input-group .form-control:last-child,.input-group-addon:last-child,.input-group-btn:first-child>.btn-group:not(:first-child)>.btn,.input-group-btn:first-child>.btn:not(:first-child),.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group>.btn,.input-group-btn:last-child>.dropdown-toggle{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-addon:last-child{border-left:0}.input-group-btn{position:relative;font-size:0;white-space:nowrap}.input-group-btn>.btn{position:relative}.input-group-btn>.btn+.btn{margin-left:-1px}.input-group-btn>.btn:active,.input-group-btn>.btn:focus,.input-group-btn>.btn:hover{z-index:2}.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group{margin-right:-1px}.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group{z-index:2;margin-left:-1px}.nav{padding-left:0;margin-bottom:0;list-style:none}.nav>li{position:relative;display:block}.nav>li>a{position:relative;display:block;padding:10px 15px}.nav>li>a:focus,.nav>li>a:hover{text-decoration:none;background-color:#eee}.nav>li.disabled>a{color:#777}.nav>li.disabled>a:focus,.nav>li.disabled>a:hover{color:#777;text-decoration:none;cursor:not-allowed;background-color:transparent}.nav .open>a,.nav .open>a:focus,.nav .open>a:hover{background-color:#eee;border-color:#337ab7}.nav .nav-divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.nav>li>a>img{max-width:none}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs>li{float:left;margin-bottom:-1px}.nav-tabs>li>a{margin-right:2px;line-height:1.42857143;border:1px solid transparent;border-radius:4px 4px 0 0}.nav-tabs>li>a:hover{border-color:#eee #eee #ddd}.nav-tabs>li.active>a,.nav-tabs>li.active>a:focus,.nav-tabs>li.active>a:hover{color:#555;cursor:default;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent}.nav-tabs.nav-justified{width:100%;border-bottom:0}.nav-tabs.nav-justified>li{float:none}.nav-tabs.nav-justified>li>a{margin-bottom:5px;text-align:center}.nav-tabs.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-tabs.nav-justified>li{display:table-cell;width:1%}.nav-tabs.nav-justified>li>a{margin-bottom:0}}.nav-tabs.nav-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-tabs.nav-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border-bottom-color:#fff}}.nav-pills>li{float:left}.nav-pills>li>a{border-radius:4px}.nav-pills>li+li{margin-left:2px}.nav-pills>li.active>a,.nav-pills>li.active>a:focus,.nav-pills>li.active>a:hover{color:#fff;background-color:#337ab7}.nav-stacked>li{float:none}.nav-stacked>li+li{margin-top:2px;margin-left:0}.nav-justified{width:100%}.nav-justified>li{float:none}.nav-justified>li>a{margin-bottom:5px;text-align:center}.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-justified>li{display:table-cell;width:1%}.nav-justified>li>a{margin-bottom:0}}.nav-tabs-justified{border-bottom:0}.nav-tabs-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-tabs-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border-bottom-color:#fff}}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.navbar{position:relative;min-height:50px;margin-bottom:20px;border:1px solid transparent}@media (min-width:768px){.navbar{border-radius:4px}}@media (min-width:768px){.navbar-header{float:left}}.navbar-collapse{padding-right:15px;padding-left:15px;overflow-x:visible;-webkit-overflow-scrolling:touch;border-top:1px solid transparent;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.1);box-shadow:inset 0 1px 0 rgba(255,255,255,.1)}.navbar-collapse.in{overflow-y:auto}@media (min-width:768px){.navbar-collapse{width:auto;border-top:0;-webkit-box-shadow:none;box-shadow:none}.navbar-collapse.collapse{display:block!important;height:auto!important;padding-bottom:0;overflow:visible!important}.navbar-collapse.in{overflow-y:visible}.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse,.navbar-static-top .navbar-collapse{padding-right:0;padding-left:0}}.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse{max-height:340px}@media (max-device-width:480px) and (orientation:landscape){.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse{max-height:200px}}.container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header{margin-right:-15px;margin-left:-15px}@media (min-width:768px){.container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header{margin-right:0;margin-left:0}}.navbar-static-top{z-index:1000;border-width:0 0 1px}@media (min-width:768px){.navbar-static-top{border-radius:0}}.navbar-fixed-bottom,.navbar-fixed-top{position:fixed;right:0;left:0;z-index:1030}@media (min-width:768px){.navbar-fixed-bottom,.navbar-fixed-top{border-radius:0}}.navbar-fixed-top{top:0;border-width:0 0 1px}.navbar-fixed-bottom{bottom:0;margin-bottom:0;border-width:1px 0 0}.navbar-brand{float:left;height:50px;padding:15px 15px;font-size:18px;line-height:20px}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-brand>img{display:block}@media (min-width:768px){.navbar>.container .navbar-brand,.navbar>.container-fluid .navbar-brand{margin-left:-15px}}.navbar-toggle{position:relative;float:right;padding:9px 10px;margin-top:8px;margin-right:15px;margin-bottom:8px;background-color:transparent;background-image:none;border:1px solid transparent;border-radius:4px}.navbar-toggle:focus{outline:0}.navbar-toggle .icon-bar{display:block;width:22px;height:2px;border-radius:1px}.navbar-toggle .icon-bar+.icon-bar{margin-top:4px}@media (min-width:768px){.navbar-toggle{display:none}}.navbar-nav{margin:7.5px -15px}.navbar-nav>li>a{padding-top:10px;padding-bottom:10px;line-height:20px}@media (max-width:767px){.navbar-nav .open .dropdown-menu{position:static;float:none;width:auto;margin-top:0;background-color:transparent;border:0;-webkit-box-shadow:none;box-shadow:none}.navbar-nav .open .dropdown-menu .dropdown-header,.navbar-nav .open .dropdown-menu>li>a{padding:5px 15px 5px 25px}.navbar-nav .open .dropdown-menu>li>a{line-height:20px}.navbar-nav .open .dropdown-menu>li>a:focus,.navbar-nav .open .dropdown-menu>li>a:hover{background-image:none}}@media (min-width:768px){.navbar-nav{float:left;margin:0}.navbar-nav>li{float:left}.navbar-nav>li>a{padding-top:15px;padding-bottom:15px}}.navbar-form{padding:10px 15px;margin-top:8px;margin-right:-15px;margin-bottom:8px;margin-left:-15px;border-top:1px solid transparent;border-bottom:1px solid transparent;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.1);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.1)}@media (min-width:768px){.navbar-form .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.navbar-form .form-control{display:inline-block;width:auto;vertical-align:middle}.navbar-form .form-control-static{display:inline-block}.navbar-form .input-group{display:inline-table;vertical-align:middle}.navbar-form .input-group .form-control,.navbar-form .input-group .input-group-addon,.navbar-form .input-group .input-group-btn{width:auto}.navbar-form .input-group>.form-control{width:100%}.navbar-form .control-label{margin-bottom:0;vertical-align:middle}.navbar-form .checkbox,.navbar-form .radio{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.navbar-form .checkbox label,.navbar-form .radio label{padding-left:0}.navbar-form .checkbox input[type=checkbox],.navbar-form .radio input[type=radio]{position:relative;margin-left:0}.navbar-form .has-feedback .form-control-feedback{top:0}}@media (max-width:767px){.navbar-form .form-group{margin-bottom:5px}.navbar-form .form-group:last-child{margin-bottom:0}}@media (min-width:768px){.navbar-form{width:auto;padding-top:0;padding-bottom:0;margin-right:0;margin-left:0;border:0;-webkit-box-shadow:none;box-shadow:none}}.navbar-nav>li>.dropdown-menu{margin-top:0;border-top-left-radius:0;border-top-right-radius:0}.navbar-fixed-bottom .navbar-nav>li>.dropdown-menu{margin-bottom:0;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.navbar-btn{margin-top:8px;margin-bottom:8px}.navbar-btn.btn-sm{margin-top:10px;margin-bottom:10px}.navbar-btn.btn-xs{margin-top:14px;margin-bottom:14px}.navbar-text{margin-top:15px;margin-bottom:15px}@media (min-width:768px){.navbar-text{float:left;margin-right:15px;margin-left:15px}}@media (min-width:768px){.navbar-left{float:left!important}.navbar-right{float:right!important;margin-right:-15px}.navbar-right~.navbar-right{margin-right:0}}.navbar-default{background-color:#f8f8f8;border-color:#e7e7e7}.navbar-default .navbar-brand{color:#777}.navbar-default .navbar-brand:focus,.navbar-default .navbar-brand:hover{color:#5e5e5e;background-color:transparent}.navbar-default .navbar-text{color:#777}.navbar-default .navbar-nav>li>a{color:#777}.navbar-default .navbar-nav>li>a:focus,.navbar-default .navbar-nav>li>a:hover{color:#333;background-color:transparent}.navbar-default .navbar-nav>.active>a,.navbar-default .navbar-nav>.active>a:focus,.navbar-default .navbar-nav>.active>a:hover{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav>.disabled>a,.navbar-default .navbar-nav>.disabled>a:focus,.navbar-default .navbar-nav>.disabled>a:hover{color:#ccc;background-color:transparent}.navbar-default .navbar-toggle{border-color:#ddd}.navbar-default .navbar-toggle:focus,.navbar-default .navbar-toggle:hover{background-color:#ddd}.navbar-default .navbar-toggle .icon-bar{background-color:#888}.navbar-default .navbar-collapse,.navbar-default .navbar-form{border-color:#e7e7e7}.navbar-default .navbar-nav>.open>a,.navbar-default .navbar-nav>.open>a:focus,.navbar-default .navbar-nav>.open>a:hover{color:#555;background-color:#e7e7e7}@media (max-width:767px){.navbar-default .navbar-nav .open .dropdown-menu>li>a{color:#777}.navbar-default .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>li>a:hover{color:#333;background-color:transparent}.navbar-default .navbar-nav .open .dropdown-menu>.active>a,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#ccc;background-color:transparent}}.navbar-default .navbar-link{color:#777}.navbar-default .navbar-link:hover{color:#333}.navbar-default .btn-link{color:#777}.navbar-default .btn-link:focus,.navbar-default .btn-link:hover{color:#333}.navbar-default .btn-link[disabled]:focus,.navbar-default .btn-link[disabled]:hover,fieldset[disabled] .navbar-default .btn-link:focus,fieldset[disabled] .navbar-default .btn-link:hover{color:#ccc}.navbar-inverse{background-color:#222;border-color:#080808}.navbar-inverse .navbar-brand{color:#9d9d9d}.navbar-inverse .navbar-brand:focus,.navbar-inverse .navbar-brand:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-text{color:#9d9d9d}.navbar-inverse .navbar-nav>li>a{color:#9d9d9d}.navbar-inverse .navbar-nav>li>a:focus,.navbar-inverse .navbar-nav>li>a:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav>.active>a,.navbar-inverse .navbar-nav>.active>a:focus,.navbar-inverse .navbar-nav>.active>a:hover{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav>.disabled>a,.navbar-inverse .navbar-nav>.disabled>a:focus,.navbar-inverse .navbar-nav>.disabled>a:hover{color:#444;background-color:transparent}.navbar-inverse .navbar-toggle{border-color:#333}.navbar-inverse .navbar-toggle:focus,.navbar-inverse .navbar-toggle:hover{background-color:#333}.navbar-inverse .navbar-toggle .icon-bar{background-color:#fff}.navbar-inverse .navbar-collapse,.navbar-inverse .navbar-form{border-color:#101010}.navbar-inverse .navbar-nav>.open>a,.navbar-inverse .navbar-nav>.open>a:focus,.navbar-inverse .navbar-nav>.open>a:hover{color:#fff;background-color:#080808}@media (max-width:767px){.navbar-inverse .navbar-nav .open .dropdown-menu>.dropdown-header{border-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu .divider{background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a{color:#9d9d9d}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:hover{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#444;background-color:transparent}}.navbar-inverse .navbar-link{color:#9d9d9d}.navbar-inverse .navbar-link:hover{color:#fff}.navbar-inverse .btn-link{color:#9d9d9d}.navbar-inverse .btn-link:focus,.navbar-inverse .btn-link:hover{color:#fff}.navbar-inverse .btn-link[disabled]:focus,.navbar-inverse .btn-link[disabled]:hover,fieldset[disabled] .navbar-inverse .btn-link:focus,fieldset[disabled] .navbar-inverse .btn-link:hover{color:#444}.breadcrumb{padding:8px 15px;margin-bottom:20px;list-style:none;background-color:#f5f5f5;border-radius:4px}.breadcrumb>li{display:inline-block}.breadcrumb>li+li:before{padding:0 5px;color:#ccc;content:\"/\\00a0\"}.breadcrumb>.active{color:#777}.pagination{display:inline-block;padding-left:0;margin:20px 0;border-radius:4px}.pagination>li{display:inline}.pagination>li>a,.pagination>li>span{position:relative;float:left;padding:6px 12px;margin-left:-1px;line-height:1.42857143;color:#337ab7;text-decoration:none;background-color:#fff;border:1px solid #ddd}.pagination>li:first-child>a,.pagination>li:first-child>span{margin-left:0;border-top-left-radius:4px;border-bottom-left-radius:4px}.pagination>li:last-child>a,.pagination>li:last-child>span{border-top-right-radius:4px;border-bottom-right-radius:4px}.pagination>li>a:focus,.pagination>li>a:hover,.pagination>li>span:focus,.pagination>li>span:hover{z-index:2;color:#23527c;background-color:#eee;border-color:#ddd}.pagination>.active>a,.pagination>.active>a:focus,.pagination>.active>a:hover,.pagination>.active>span,.pagination>.active>span:focus,.pagination>.active>span:hover{z-index:3;color:#fff;cursor:default;background-color:#337ab7;border-color:#337ab7}.pagination>.disabled>a,.pagination>.disabled>a:focus,.pagination>.disabled>a:hover,.pagination>.disabled>span,.pagination>.disabled>span:focus,.pagination>.disabled>span:hover{color:#777;cursor:not-allowed;background-color:#fff;border-color:#ddd}.pagination-lg>li>a,.pagination-lg>li>span{padding:10px 16px;font-size:18px;line-height:1.3333333}.pagination-lg>li:first-child>a,.pagination-lg>li:first-child>span{border-top-left-radius:6px;border-bottom-left-radius:6px}.pagination-lg>li:last-child>a,.pagination-lg>li:last-child>span{border-top-right-radius:6px;border-bottom-right-radius:6px}.pagination-sm>li>a,.pagination-sm>li>span{padding:5px 10px;font-size:12px;line-height:1.5}.pagination-sm>li:first-child>a,.pagination-sm>li:first-child>span{border-top-left-radius:3px;border-bottom-left-radius:3px}.pagination-sm>li:last-child>a,.pagination-sm>li:last-child>span{border-top-right-radius:3px;border-bottom-right-radius:3px}.pager{padding-left:0;margin:20px 0;text-align:center;list-style:none}.pager li{display:inline}.pager li>a,.pager li>span{display:inline-block;padding:5px 14px;background-color:#fff;border:1px solid #ddd;border-radius:15px}.pager li>a:focus,.pager li>a:hover{text-decoration:none;background-color:#eee}.pager .next>a,.pager .next>span{float:right}.pager .previous>a,.pager .previous>span{float:left}.pager .disabled>a,.pager .disabled>a:focus,.pager .disabled>a:hover,.pager .disabled>span{color:#777;cursor:not-allowed;background-color:#fff}.label{display:inline;padding:.2em .6em .3em;font-size:75%;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25em}a.label:focus,a.label:hover{color:#fff;text-decoration:none;cursor:pointer}.label:empty{display:none}.btn .label{position:relative;top:-1px}.label-default{background-color:#777}.label-default[href]:focus,.label-default[href]:hover{background-color:#5e5e5e}.label-primary{background-color:#337ab7}.label-primary[href]:focus,.label-primary[href]:hover{background-color:#286090}.label-success{background-color:#5cb85c}.label-success[href]:focus,.label-success[href]:hover{background-color:#449d44}.label-info{background-color:#5bc0de}.label-info[href]:focus,.label-info[href]:hover{background-color:#31b0d5}.label-warning{background-color:#f0ad4e}.label-warning[href]:focus,.label-warning[href]:hover{background-color:#ec971f}.label-danger{background-color:#d9534f}.label-danger[href]:focus,.label-danger[href]:hover{background-color:#c9302c}.badge{display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:middle;background-color:#777;border-radius:10px}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.btn-group-xs>.btn .badge,.btn-xs .badge{top:0;padding:1px 5px}a.badge:focus,a.badge:hover{color:#fff;text-decoration:none;cursor:pointer}.list-group-item.active>.badge,.nav-pills>.active>a>.badge{color:#337ab7;background-color:#fff}.list-group-item>.badge{float:right}.list-group-item>.badge+.badge{margin-right:5px}.nav-pills>li>a>.badge{margin-left:3px}.jumbotron{padding-top:30px;padding-bottom:30px;margin-bottom:30px;color:inherit;background-color:#eee}.jumbotron .h1,.jumbotron h1{color:inherit}.jumbotron p{margin-bottom:15px;font-size:21px;font-weight:200}.jumbotron>hr{border-top-color:#d5d5d5}.container .jumbotron,.container-fluid .jumbotron{padding-right:15px;padding-left:15px;border-radius:6px}.jumbotron .container{max-width:100%}@media screen and (min-width:768px){.jumbotron{padding-top:48px;padding-bottom:48px}.container .jumbotron,.container-fluid .jumbotron{padding-right:60px;padding-left:60px}.jumbotron .h1,.jumbotron h1{font-size:63px}}.thumbnail{display:block;padding:4px;margin-bottom:20px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:border .2s ease-in-out;-o-transition:border .2s ease-in-out;transition:border .2s ease-in-out}.thumbnail a>img,.thumbnail>img{margin-right:auto;margin-left:auto}a.thumbnail.active,a.thumbnail:focus,a.thumbnail:hover{border-color:#337ab7}.thumbnail .caption{padding:9px;color:#333}.alert{padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:4px}.alert h4{margin-top:0;color:inherit}.alert .alert-link{font-weight:700}.alert>p,.alert>ul{margin-bottom:0}.alert>p+p{margin-top:5px}.alert-dismissable,.alert-dismissible{padding-right:35px}.alert-dismissable .close,.alert-dismissible .close{position:relative;top:-2px;right:-21px;color:inherit}.alert-success{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.alert-success hr{border-top-color:#c9e2b3}.alert-success .alert-link{color:#2b542c}.alert-info{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.alert-info hr{border-top-color:#a6e1ec}.alert-info .alert-link{color:#245269}.alert-warning{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.alert-warning hr{border-top-color:#f7e1b5}.alert-warning .alert-link{color:#66512c}.alert-danger{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.alert-danger hr{border-top-color:#e4b9c0}.alert-danger .alert-link{color:#843534}@-webkit-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@-o-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}.progress{height:20px;margin-bottom:20px;overflow:hidden;background-color:#f5f5f5;border-radius:4px;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}.progress-bar{float:left;width:0;height:100%;font-size:12px;line-height:20px;color:#fff;text-align:center;background-color:#337ab7;-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-transition:width .6s ease;-o-transition:width .6s ease;transition:width .6s ease}.progress-bar-striped,.progress-striped .progress-bar{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);-webkit-background-size:40px 40px;background-size:40px 40px}.progress-bar.active,.progress.active .progress-bar{-webkit-animation:progress-bar-stripes 2s linear infinite;-o-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}.progress-bar-success{background-color:#5cb85c}.progress-striped .progress-bar-success{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-info{background-color:#5bc0de}.progress-striped .progress-bar-info{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-warning{background-color:#f0ad4e}.progress-striped .progress-bar-warning{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-danger{background-color:#d9534f}.progress-striped .progress-bar-danger{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.media{margin-top:15px}.media:first-child{margin-top:0}.media,.media-body{overflow:hidden;zoom:1}.media-body{width:10000px}.media-object{display:block}.media-object.img-thumbnail{max-width:none}.media-right,.media>.pull-right{padding-left:10px}.media-left,.media>.pull-left{padding-right:10px}.media-body,.media-left,.media-right{display:table-cell;vertical-align:top}.media-middle{vertical-align:middle}.media-bottom{vertical-align:bottom}.media-heading{margin-top:0;margin-bottom:5px}.media-list{padding-left:0;list-style:none}.list-group{padding-left:0;margin-bottom:20px}.list-group-item{position:relative;display:block;padding:10px 15px;margin-bottom:-1px;background-color:#fff;border:1px solid #ddd}.list-group-item:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}a.list-group-item,button.list-group-item{color:#555}a.list-group-item .list-group-item-heading,button.list-group-item .list-group-item-heading{color:#333}a.list-group-item:focus,a.list-group-item:hover,button.list-group-item:focus,button.list-group-item:hover{color:#555;text-decoration:none;background-color:#f5f5f5}button.list-group-item{width:100%;text-align:left}.list-group-item.disabled,.list-group-item.disabled:focus,.list-group-item.disabled:hover{color:#777;cursor:not-allowed;background-color:#eee}.list-group-item.disabled .list-group-item-heading,.list-group-item.disabled:focus .list-group-item-heading,.list-group-item.disabled:hover .list-group-item-heading{color:inherit}.list-group-item.disabled .list-group-item-text,.list-group-item.disabled:focus .list-group-item-text,.list-group-item.disabled:hover .list-group-item-text{color:#777}.list-group-item.active,.list-group-item.active:focus,.list-group-item.active:hover{z-index:2;color:#fff;background-color:#337ab7;border-color:#337ab7}.list-group-item.active .list-group-item-heading,.list-group-item.active .list-group-item-heading>.small,.list-group-item.active .list-group-item-heading>small,.list-group-item.active:focus .list-group-item-heading,.list-group-item.active:focus .list-group-item-heading>.small,.list-group-item.active:focus .list-group-item-heading>small,.list-group-item.active:hover .list-group-item-heading,.list-group-item.active:hover .list-group-item-heading>.small,.list-group-item.active:hover .list-group-item-heading>small{color:inherit}.list-group-item.active .list-group-item-text,.list-group-item.active:focus .list-group-item-text,.list-group-item.active:hover .list-group-item-text{color:#c7ddef}.list-group-item-success{color:#3c763d;background-color:#dff0d8}a.list-group-item-success,button.list-group-item-success{color:#3c763d}a.list-group-item-success .list-group-item-heading,button.list-group-item-success .list-group-item-heading{color:inherit}a.list-group-item-success:focus,a.list-group-item-success:hover,button.list-group-item-success:focus,button.list-group-item-success:hover{color:#3c763d;background-color:#d0e9c6}a.list-group-item-success.active,a.list-group-item-success.active:focus,a.list-group-item-success.active:hover,button.list-group-item-success.active,button.list-group-item-success.active:focus,button.list-group-item-success.active:hover{color:#fff;background-color:#3c763d;border-color:#3c763d}.list-group-item-info{color:#31708f;background-color:#d9edf7}a.list-group-item-info,button.list-group-item-info{color:#31708f}a.list-group-item-info .list-group-item-heading,button.list-group-item-info .list-group-item-heading{color:inherit}a.list-group-item-info:focus,a.list-group-item-info:hover,button.list-group-item-info:focus,button.list-group-item-info:hover{color:#31708f;background-color:#c4e3f3}a.list-group-item-info.active,a.list-group-item-info.active:focus,a.list-group-item-info.active:hover,button.list-group-item-info.active,button.list-group-item-info.active:focus,button.list-group-item-info.active:hover{color:#fff;background-color:#31708f;border-color:#31708f}.list-group-item-warning{color:#8a6d3b;background-color:#fcf8e3}a.list-group-item-warning,button.list-group-item-warning{color:#8a6d3b}a.list-group-item-warning .list-group-item-heading,button.list-group-item-warning .list-group-item-heading{color:inherit}a.list-group-item-warning:focus,a.list-group-item-warning:hover,button.list-group-item-warning:focus,button.list-group-item-warning:hover{color:#8a6d3b;background-color:#faf2cc}a.list-group-item-warning.active,a.list-group-item-warning.active:focus,a.list-group-item-warning.active:hover,button.list-group-item-warning.active,button.list-group-item-warning.active:focus,button.list-group-item-warning.active:hover{color:#fff;background-color:#8a6d3b;border-color:#8a6d3b}.list-group-item-danger{color:#a94442;background-color:#f2dede}a.list-group-item-danger,button.list-group-item-danger{color:#a94442}a.list-group-item-danger .list-group-item-heading,button.list-group-item-danger .list-group-item-heading{color:inherit}a.list-group-item-danger:focus,a.list-group-item-danger:hover,button.list-group-item-danger:focus,button.list-group-item-danger:hover{color:#a94442;background-color:#ebcccc}a.list-group-item-danger.active,a.list-group-item-danger.active:focus,a.list-group-item-danger.active:hover,button.list-group-item-danger.active,button.list-group-item-danger.active:focus,button.list-group-item-danger.active:hover{color:#fff;background-color:#a94442;border-color:#a94442}.list-group-item-heading{margin-top:0;margin-bottom:5px}.list-group-item-text{margin-bottom:0;line-height:1.3}.panel{margin-bottom:20px;background-color:#fff;border:1px solid transparent;border-radius:4px;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.05);box-shadow:0 1px 1px rgba(0,0,0,.05)}.panel-body{padding:15px}.panel-heading{padding:10px 15px;border-bottom:1px solid transparent;border-top-left-radius:3px;border-top-right-radius:3px}.panel-heading>.dropdown .dropdown-toggle{color:inherit}.panel-title{margin-top:0;margin-bottom:0;font-size:16px;color:inherit}.panel-title>.small,.panel-title>.small>a,.panel-title>a,.panel-title>small,.panel-title>small>a{color:inherit}.panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.list-group,.panel>.panel-collapse>.list-group{margin-bottom:0}.panel>.list-group .list-group-item,.panel>.panel-collapse>.list-group .list-group-item{border-width:1px 0;border-radius:0}.panel>.list-group:first-child .list-group-item:first-child,.panel>.panel-collapse>.list-group:first-child .list-group-item:first-child{border-top:0;border-top-left-radius:3px;border-top-right-radius:3px}.panel>.list-group:last-child .list-group-item:last-child,.panel>.panel-collapse>.list-group:last-child .list-group-item:last-child{border-bottom:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.panel-heading+.panel-collapse>.list-group .list-group-item:first-child{border-top-left-radius:0;border-top-right-radius:0}.panel-heading+.list-group .list-group-item:first-child{border-top-width:0}.list-group+.panel-footer{border-top-width:0}.panel>.panel-collapse>.table,.panel>.table,.panel>.table-responsive>.table{margin-bottom:0}.panel>.panel-collapse>.table caption,.panel>.table caption,.panel>.table-responsive>.table caption{padding-right:15px;padding-left:15px}.panel>.table-responsive:first-child>.table:first-child,.panel>.table:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child,.panel>.table:first-child>thead:first-child>tr:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table:first-child>thead:first-child>tr:first-child th:first-child{border-top-left-radius:3px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table:first-child>thead:first-child>tr:first-child th:last-child{border-top-right-radius:3px}.panel>.table-responsive:last-child>.table:last-child,.panel>.table:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:first-child{border-bottom-left-radius:3px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:last-child{border-bottom-right-radius:3px}.panel>.panel-body+.table,.panel>.panel-body+.table-responsive,.panel>.table+.panel-body,.panel>.table-responsive+.panel-body{border-top:1px solid #ddd}.panel>.table>tbody:first-child>tr:first-child td,.panel>.table>tbody:first-child>tr:first-child th{border-top:0}.panel>.table-bordered,.panel>.table-responsive>.table-bordered{border:0}.panel>.table-bordered>tbody>tr>td:first-child,.panel>.table-bordered>tbody>tr>th:first-child,.panel>.table-bordered>tfoot>tr>td:first-child,.panel>.table-bordered>tfoot>tr>th:first-child,.panel>.table-bordered>thead>tr>td:first-child,.panel>.table-bordered>thead>tr>th:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:first-child,.panel>.table-responsive>.table-bordered>thead>tr>td:first-child,.panel>.table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.panel>.table-bordered>tbody>tr>td:last-child,.panel>.table-bordered>tbody>tr>th:last-child,.panel>.table-bordered>tfoot>tr>td:last-child,.panel>.table-bordered>tfoot>tr>th:last-child,.panel>.table-bordered>thead>tr>td:last-child,.panel>.table-bordered>thead>tr>th:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:last-child,.panel>.table-responsive>.table-bordered>thead>tr>td:last-child,.panel>.table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.panel>.table-bordered>tbody>tr:first-child>td,.panel>.table-bordered>tbody>tr:first-child>th,.panel>.table-bordered>thead>tr:first-child>td,.panel>.table-bordered>thead>tr:first-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>th,.panel>.table-responsive>.table-bordered>thead>tr:first-child>td,.panel>.table-responsive>.table-bordered>thead>tr:first-child>th{border-bottom:0}.panel>.table-bordered>tbody>tr:last-child>td,.panel>.table-bordered>tbody>tr:last-child>th,.panel>.table-bordered>tfoot>tr:last-child>td,.panel>.table-bordered>tfoot>tr:last-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>th,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>td,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}.panel>.table-responsive{margin-bottom:0;border:0}.panel-group{margin-bottom:20px}.panel-group .panel{margin-bottom:0;border-radius:4px}.panel-group .panel+.panel{margin-top:5px}.panel-group .panel-heading{border-bottom:0}.panel-group .panel-heading+.panel-collapse>.list-group,.panel-group .panel-heading+.panel-collapse>.panel-body{border-top:1px solid #ddd}.panel-group .panel-footer{border-top:0}.panel-group .panel-footer+.panel-collapse .panel-body{border-bottom:1px solid #ddd}.panel-default{border-color:#ddd}.panel-default>.panel-heading{color:#333;background-color:#f5f5f5;border-color:#ddd}.panel-default>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ddd}.panel-default>.panel-heading .badge{color:#f5f5f5;background-color:#333}.panel-default>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ddd}.panel-primary{border-color:#337ab7}.panel-primary>.panel-heading{color:#fff;background-color:#337ab7;border-color:#337ab7}.panel-primary>.panel-heading+.panel-collapse>.panel-body{border-top-color:#337ab7}.panel-primary>.panel-heading .badge{color:#337ab7;background-color:#fff}.panel-primary>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#337ab7}.panel-success{border-color:#d6e9c6}.panel-success>.panel-heading{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.panel-success>.panel-heading+.panel-collapse>.panel-body{border-top-color:#d6e9c6}.panel-success>.panel-heading .badge{color:#dff0d8;background-color:#3c763d}.panel-success>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#d6e9c6}.panel-info{border-color:#bce8f1}.panel-info>.panel-heading{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.panel-info>.panel-heading+.panel-collapse>.panel-body{border-top-color:#bce8f1}.panel-info>.panel-heading .badge{color:#d9edf7;background-color:#31708f}.panel-info>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#bce8f1}.panel-warning{border-color:#faebcc}.panel-warning>.panel-heading{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.panel-warning>.panel-heading+.panel-collapse>.panel-body{border-top-color:#faebcc}.panel-warning>.panel-heading .badge{color:#fcf8e3;background-color:#8a6d3b}.panel-warning>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#faebcc}.panel-danger{border-color:#ebccd1}.panel-danger>.panel-heading{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.panel-danger>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ebccd1}.panel-danger>.panel-heading .badge{color:#f2dede;background-color:#a94442}.panel-danger>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ebccd1}.embed-responsive{position:relative;display:block;height:0;padding:0;overflow:hidden}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-16by9{padding-bottom:56.25%}.embed-responsive-4by3{padding-bottom:75%}.well{min-height:20px;padding:19px;margin-bottom:20px;background-color:#f5f5f5;border:1px solid #e3e3e3;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.05);box-shadow:inset 0 1px 1px rgba(0,0,0,.05)}.well blockquote{border-color:#ddd;border-color:rgba(0,0,0,.15)}.well-lg{padding:24px;border-radius:6px}.well-sm{padding:9px;border-radius:3px}.close{float:right;font-size:21px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;filter:alpha(opacity=20);opacity:.2}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer;filter:alpha(opacity=50);opacity:.5}button.close{-webkit-appearance:none;padding:0;cursor:pointer;background:0 0;border:0}.modal-open{overflow:hidden}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;overflow:hidden;-webkit-overflow-scrolling:touch;outline:0}.modal.fade .modal-dialog{-webkit-transition:-webkit-transform .3s ease-out;-o-transition:-o-transform .3s ease-out;transition:transform .3s ease-out;-webkit-transform:translate(0,-25%);-ms-transform:translate(0,-25%);-o-transform:translate(0,-25%);transform:translate(0,-25%)}.modal.in .modal-dialog{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0)}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;outline:0;-webkit-box-shadow:0 3px 9px rgba(0,0,0,.5);box-shadow:0 3px 9px rgba(0,0,0,.5)}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{filter:alpha(opacity=0);opacity:0}.modal-backdrop.in{filter:alpha(opacity=50);opacity:.5}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.42857143}.modal-body{position:relative;padding:15px}.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}.modal-footer .btn+.btn{margin-bottom:0;margin-left:5px}.modal-footer .btn-group .btn+.btn{margin-left:-1px}.modal-footer .btn-block+.btn-block{margin-left:0}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{-webkit-box-shadow:0 5px 15px rgba(0,0,0,.5);box-shadow:0 5px 15px rgba(0,0,0,.5)}.modal-sm{width:300px}}@media (min-width:992px){.modal-lg{width:900px}}.tooltip{position:absolute;z-index:1070;display:block;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:12px;font-style:normal;font-weight:400;line-height:1.42857143;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;word-wrap:normal;white-space:normal;filter:alpha(opacity=0);opacity:0;line-break:auto}.tooltip.in{filter:alpha(opacity=90);opacity:.9}.tooltip.top{padding:5px 0;margin-top:-3px}.tooltip.right{padding:0 5px;margin-left:3px}.tooltip.bottom{padding:5px 0;margin-top:3px}.tooltip.left{padding:0 5px;margin-left:-3px}.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;background-color:#000;border-radius:4px}.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-left .tooltip-arrow{right:5px;bottom:0;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-right .tooltip-arrow{bottom:0;left:5px;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000}.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000}.tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-left .tooltip-arrow{top:0;right:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-right .tooltip-arrow{top:0;left:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.popover{position:absolute;top:0;left:0;z-index:1060;display:none;max-width:276px;padding:1px;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:1.42857143;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;word-wrap:normal;white-space:normal;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.2);border-radius:6px;-webkit-box-shadow:0 5px 10px rgba(0,0,0,.2);box-shadow:0 5px 10px rgba(0,0,0,.2);line-break:auto}.popover.top{margin-top:-10px}.popover.right{margin-left:10px}.popover.bottom{margin-top:10px}.popover.left{margin-left:-10px}.popover-title{padding:8px 14px;margin:0;font-size:14px;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-radius:5px 5px 0 0}.popover-content{padding:9px 14px}.popover>.arrow,.popover>.arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover>.arrow{border-width:11px}.popover>.arrow:after{content:\"\";border-width:10px}.popover.top>.arrow{bottom:-11px;left:50%;margin-left:-11px;border-top-color:#999;border-top-color:rgba(0,0,0,.25);border-bottom-width:0}.popover.top>.arrow:after{bottom:1px;margin-left:-10px;content:\" \";border-top-color:#fff;border-bottom-width:0}.popover.right>.arrow{top:50%;left:-11px;margin-top:-11px;border-right-color:#999;border-right-color:rgba(0,0,0,.25);border-left-width:0}.popover.right>.arrow:after{bottom:-10px;left:1px;content:\" \";border-right-color:#fff;border-left-width:0}.popover.bottom>.arrow{top:-11px;left:50%;margin-left:-11px;border-top-width:0;border-bottom-color:#999;border-bottom-color:rgba(0,0,0,.25)}.popover.bottom>.arrow:after{top:1px;margin-left:-10px;content:\" \";border-top-width:0;border-bottom-color:#fff}.popover.left>.arrow{top:50%;right:-11px;margin-top:-11px;border-right-width:0;border-left-color:#999;border-left-color:rgba(0,0,0,.25)}.popover.left>.arrow:after{right:1px;bottom:-10px;content:\" \";border-right-width:0;border-left-color:#fff}.carousel{position:relative}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner>.item{position:relative;display:none;-webkit-transition:.6s ease-in-out left;-o-transition:.6s ease-in-out left;transition:.6s ease-in-out left}.carousel-inner>.item>a>img,.carousel-inner>.item>img{line-height:1}@media all and (transform-3d),(-webkit-transform-3d){.carousel-inner>.item{-webkit-transition:-webkit-transform .6s ease-in-out;-o-transition:-o-transform .6s ease-in-out;transition:transform .6s ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;perspective:1000px}.carousel-inner>.item.active.right,.carousel-inner>.item.next{left:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.carousel-inner>.item.active.left,.carousel-inner>.item.prev{left:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.carousel-inner>.item.active,.carousel-inner>.item.next.left,.carousel-inner>.item.prev.right{left:0;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.carousel-inner>.active,.carousel-inner>.next,.carousel-inner>.prev{display:block}.carousel-inner>.active{left:0}.carousel-inner>.next,.carousel-inner>.prev{position:absolute;top:0;width:100%}.carousel-inner>.next{left:100%}.carousel-inner>.prev{left:-100%}.carousel-inner>.next.left,.carousel-inner>.prev.right{left:0}.carousel-inner>.active.left{left:-100%}.carousel-inner>.active.right{left:100%}.carousel-control{position:absolute;top:0;bottom:0;left:0;width:15%;font-size:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6);background-color:rgba(0,0,0,0);filter:alpha(opacity=50);opacity:.5}.carousel-control.left{background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);background-image:-o-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.0001)));background-image:linear-gradient(to right,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);background-repeat:repeat-x}.carousel-control.right{right:0;left:auto;background-image:-webkit-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);background-image:-o-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.0001)),to(rgba(0,0,0,.5)));background-image:linear-gradient(to right,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);background-repeat:repeat-x}.carousel-control:focus,.carousel-control:hover{color:#fff;text-decoration:none;filter:alpha(opacity=90);outline:0;opacity:.9}.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next,.carousel-control .icon-prev{position:absolute;top:50%;z-index:5;display:inline-block;margin-top:-10px}.carousel-control .glyphicon-chevron-left,.carousel-control .icon-prev{left:50%;margin-left:-10px}.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next{right:50%;margin-right:-10px}.carousel-control .icon-next,.carousel-control .icon-prev{width:20px;height:20px;font-family:serif;line-height:1}.carousel-control .icon-prev:before{content:'\\2039'}.carousel-control .icon-next:before{content:'\\203a'}.carousel-indicators{position:absolute;bottom:10px;left:50%;z-index:15;width:60%;padding-left:0;margin-left:-30%;text-align:center;list-style:none}.carousel-indicators li{display:inline-block;width:10px;height:10px;margin:1px;text-indent:-999px;cursor:pointer;background-color:#000\\9;background-color:rgba(0,0,0,0);border:1px solid #fff;border-radius:10px}.carousel-indicators .active{width:12px;height:12px;margin:0;background-color:#fff}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6)}.carousel-caption .btn{text-shadow:none}@media screen and (min-width:768px){.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next,.carousel-control .icon-prev{width:30px;height:30px;margin-top:-10px;font-size:30px}.carousel-control .glyphicon-chevron-left,.carousel-control .icon-prev{margin-left:-10px}.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next{margin-right:-10px}.carousel-caption{right:20%;left:20%;padding-bottom:30px}.carousel-indicators{bottom:20px}}.btn-group-vertical>.btn-group:after,.btn-group-vertical>.btn-group:before,.btn-toolbar:after,.btn-toolbar:before,.clearfix:after,.clearfix:before,.container-fluid:after,.container-fluid:before,.container:after,.container:before,.dl-horizontal dd:after,.dl-horizontal dd:before,.form-horizontal .form-group:after,.form-horizontal .form-group:before,.modal-footer:after,.modal-footer:before,.modal-header:after,.modal-header:before,.nav:after,.nav:before,.navbar-collapse:after,.navbar-collapse:before,.navbar-header:after,.navbar-header:before,.navbar:after,.navbar:before,.pager:after,.pager:before,.panel-body:after,.panel-body:before,.row:after,.row:before{display:table;content:\" \"}.btn-group-vertical>.btn-group:after,.btn-toolbar:after,.clearfix:after,.container-fluid:after,.container:after,.dl-horizontal dd:after,.form-horizontal .form-group:after,.modal-footer:after,.modal-header:after,.nav:after,.navbar-collapse:after,.navbar-header:after,.navbar:after,.pager:after,.panel-body:after,.row:after{clear:both}.center-block{display:block;margin-right:auto;margin-left:auto}.pull-right{float:right!important}.pull-left{float:left!important}.hide{display:none!important}.show{display:block!important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none!important}.affix{position:fixed}@-ms-viewport{width:device-width}.visible-lg,.visible-md,.visible-sm,.visible-xs{display:none!important}.visible-lg-block,.visible-lg-inline,.visible-lg-inline-block,.visible-md-block,.visible-md-inline,.visible-md-inline-block,.visible-sm-block,.visible-sm-inline,.visible-sm-inline-block,.visible-xs-block,.visible-xs-inline,.visible-xs-inline-block{display:none!important}@media (max-width:767px){.visible-xs{display:block!important}table.visible-xs{display:table!important}tr.visible-xs{display:table-row!important}td.visible-xs,th.visible-xs{display:table-cell!important}}@media (max-width:767px){.visible-xs-block{display:block!important}}@media (max-width:767px){.visible-xs-inline{display:inline!important}}@media (max-width:767px){.visible-xs-inline-block{display:inline-block!important}}@media (min-width:768px) and (max-width:991px){.visible-sm{display:block!important}table.visible-sm{display:table!important}tr.visible-sm{display:table-row!important}td.visible-sm,th.visible-sm{display:table-cell!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-block{display:block!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline{display:inline!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline-block{display:inline-block!important}}@media (min-width:992px) and (max-width:1199px){.visible-md{display:block!important}table.visible-md{display:table!important}tr.visible-md{display:table-row!important}td.visible-md,th.visible-md{display:table-cell!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-block{display:block!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline{display:inline!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline-block{display:inline-block!important}}@media (min-width:1200px){.visible-lg{display:block!important}table.visible-lg{display:table!important}tr.visible-lg{display:table-row!important}td.visible-lg,th.visible-lg{display:table-cell!important}}@media (min-width:1200px){.visible-lg-block{display:block!important}}@media (min-width:1200px){.visible-lg-inline{display:inline!important}}@media (min-width:1200px){.visible-lg-inline-block{display:inline-block!important}}@media (max-width:767px){.hidden-xs{display:none!important}}@media (min-width:768px) and (max-width:991px){.hidden-sm{display:none!important}}@media (min-width:992px) and (max-width:1199px){.hidden-md{display:none!important}}@media (min-width:1200px){.hidden-lg{display:none!important}}.visible-print{display:none!important}@media print{.visible-print{display:block!important}table.visible-print{display:table!important}tr.visible-print{display:table-row!important}td.visible-print,th.visible-print{display:table-cell!important}}.visible-print-block{display:none!important}@media print{.visible-print-block{display:block!important}}.visible-print-inline{display:none!important}@media print{.visible-print-inline{display:inline!important}}.visible-print-inline-block{display:none!important}@media print{.visible-print-inline-block{display:inline-block!important}}@media print{.hidden-print{display:none!important}}\n/*# sourceMappingURL=bootstrap.min.css.map */"

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	module.exports = "html {\n    overflow: auto;\n    overflow: initial;\n}"

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(44));
	__export(__webpack_require__(81));


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	// Provider imports
	const platform_browser_1 = __webpack_require__(38);
	const http_1 = __webpack_require__(45);
	const comparison_details_component_1 = __webpack_require__(46);
	const comparison_footnote_component_1 = __webpack_require__(79);
	const comparison_component_1 = __webpack_require__(81);
	const pipes_module_1 = __webpack_require__(91);
	const input_module_1 = __webpack_require__(97);
	const output_module_1 = __webpack_require__(111);
	const comparison_service_1 = __webpack_require__(70);
	const comparison_data_service_1 = __webpack_require__(69);
	const comparison_config_service_1 = __webpack_require__(68);
	const comparison_citation_service_1 = __webpack_require__(76);
	let ComparisonModule = class ComparisonModule {
	};
	ComparisonModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule,
	            http_1.HttpModule,
	            input_module_1.InputModule,
	            output_module_1.OutputModule,
	            pipes_module_1.PipesModule
	        ],
	        exports: [
	            comparison_component_1.ComparisonComponent
	        ],
	        declarations: [
	            comparison_component_1.ComparisonComponent,
	            comparison_details_component_1.ComparisonDetailsComponent,
	            comparison_footnote_component_1.ComparisonFootnoteComponent
	        ],
	        providers: [
	            comparison_service_1.ComparisonService,
	            comparison_data_service_1.ComparisonDataService,
	            comparison_config_service_1.ComparisonConfigService,
	            comparison_citation_service_1.ComparisonCitationService,
	            platform_browser_1.Title
	        ]
	    })
	], ComparisonModule);
	exports.ComparisonModule = ComparisonModule;


/***/ }),
/* 45 */,
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const index_1 = __webpack_require__(47);
	const comparison_config_service_1 = __webpack_require__(68);
	const comparison_data_service_1 = __webpack_require__(69);
	const comparison_service_1 = __webpack_require__(70);
	const comparison_citation_service_1 = __webpack_require__(76);
	const util_1 = __webpack_require__(49);
	let ComparisonDetailsComponent = class ComparisonDetailsComponent {
	    constructor(serv, dataServ, confServ, citationServ) {
	        this.serv = serv;
	        this.dataServ = dataServ;
	        this.confServ = confServ;
	        this.citationServ = citationServ;
	        this.opened = false;
	        this.header = {
	            html: '',
	            text: '',
	            label: {},
	            url: '',
	            column: new index_1.TableData(),
	        };
	        this.body = '';
	    }
	    getBody() {
	        let data = this.data.getProperty(this.confServ.comparison.details.body).plain;
	        if (util_1.isNullOrUndefined(data)) {
	            data = String(this.data.getProperty(this.confServ.comparison.details.body).plain);
	        }
	        const body = this.confServ.comparison ?
	            this.serv.converter.makeHtml(data) : '';
	        if (body && body !== this.body) {
	            this.body = body;
	        }
	        return this.body;
	    }
	    getHeaderText() {
	        const headerText = this.confServ.comparison ? this.data[this.confServ.comparison.details.header] : '';
	        if (headerText && headerText !== this.header.text) {
	            this.header.text = headerText;
	        }
	        return this.header.text;
	    }
	    getHeaderUrl() {
	        const headerUrl = this.confServ.comparison ? this.data[this.confServ.comparison.details.headerUrl] : '';
	        if (headerUrl && headerUrl !== this.header.url) {
	            this.header.url = headerUrl;
	        }
	        return this.header.url;
	    }
	    getHeaderColumn() {
	        const headerColumn = (this.confServ.comparison && this.confServ.tableDataSet) ?
	            this.confServ.tableDataSet.getTableData(this.confServ.comparison.details.headerLabel) :
	            new index_1.TableData();
	        if (headerColumn && headerColumn !== this.header.column) {
	            this.header.column = headerColumn;
	        }
	        return this.header.column;
	    }
	    getHeaderLabel() {
	        const headerLabel = (this.confServ.comparison && this.confServ.tableDataSet) ?
	            this.confServ.tableDataSet.getTableData(this.confServ.comparison.details.headerLabel).type :
	            new index_1.Type();
	        if (headerLabel && headerLabel !== this.header.label) {
	            this.header.label = headerLabel;
	        }
	        return headerLabel;
	    }
	    getTable(tag) {
	        return this.confServ.tableDataSet ? this.confServ.tableDataSet.getTableData(tag) : new index_1.TableData();
	    }
	};
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", index_1.Data)
	], ComparisonDetailsComponent.prototype, "data", void 0);
	ComparisonDetailsComponent = __decorate([
	    core_1.Component({
	        selector: 'comparison-details',
	        template: __webpack_require__(77),
	        styles: [__webpack_require__(78)]
	    }),
	    __metadata("design:paramtypes", [comparison_service_1.ComparisonService,
	        comparison_data_service_1.ComparisonDataService,
	        comparison_config_service_1.ComparisonConfigService,
	        comparison_citation_service_1.ComparisonCitationService])
	], ComparisonDetailsComponent);
	exports.ComparisonDetailsComponent = ComparisonDetailsComponent;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(48));
	__export(__webpack_require__(53));
	__export(__webpack_require__(54));
	__export(__webpack_require__(55));
	__export(__webpack_require__(56));
	__export(__webpack_require__(59));
	__export(__webpack_require__(57));
	__export(__webpack_require__(60));
	__export(__webpack_require__(61));
	__export(__webpack_require__(62));
	__export(__webpack_require__(63));
	__export(__webpack_require__(64));
	__export(__webpack_require__(65));
	__export(__webpack_require__(66));
	__export(__webpack_require__(67));


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const index_1 = __webpack_require__(47);
	const util_1 = __webpack_require__(49);
	class Data {
	    constructor(lss, dataService, comparisonService, tag = '', descr = '', url = '', properties = {}, rating = new index_1.RatingSet({}), enabled = true) {
	        this.lss = lss;
	        this.dataService = dataService;
	        this.comparisonService = comparisonService;
	        this.tag = tag;
	        this.descr = descr;
	        this.url = url;
	        this.properties = properties;
	        this.rating = rating;
	        this.enabled = enabled;
	        this.changeDetector = null;
	        const temp = this.lss.get('repoData') || null;
	        if (temp !== null) {
	            if (Data.repoData === null) {
	                Data.repoData = {};
	            }
	            for (const key in temp) {
	                if (!temp.hasOwnProperty(key)) {
	                    continue;
	                }
	                Data.repoData[key] = { lastCommit: new Date(temp[key].lastCommit), lastSync: new Date(temp[key].lastSync) };
	            }
	        }
	    }
	    getProperty(name) {
	        switch (name) {
	            case 'tag':
	                return new index_1.Property(this.tag, this.tag);
	            case 'descr':
	                return new index_1.Property(this.descr, this.descr);
	            case 'url':
	                return new index_1.Property(this.url, this.url);
	            case 'Rating':
	                return new index_1.Property(this.getRating() + '', this.getRating() + '');
	            default:
	                return this.properties[name] ? this.properties[name] : new index_1.Property();
	        }
	    }
	    getRepoLabels(td, change) {
	        if (this.changeDetector === null) {
	            this.changeDetector = change;
	        }
	        moment.relativeTimeThreshold('m', 60);
	        if (util_1.isNullOrUndefined(Data.repoData[this.tag]) ||
	            moment(Data.repoData[this.tag].lastSync).fromNow().endsWith('hour ago') ||
	            moment(Data.repoData[this.tag].lastSync).fromNow().endsWith('hours ago') ||
	            moment(Data.repoData[this.tag].lastSync).fromNow().endsWith('days ago')) {
	            this.dataService.getRepoData(this, this.properties['Repo'].plain);
	            this.updateRepoLabels(td);
	        }
	        if (util_1.isNullOrUndefined(this.properties[td.tag])) {
	            this.updateRepoLabels(td);
	        }
	        return this.properties[td.tag];
	    }
	    updateRepoLabels(td) {
	        if (util_1.isNullOrUndefined(Data.repoData[this.tag])) {
	            return;
	        }
	        const current = moment(Data.repoData[this.tag].lastCommit);
	        const now = moment();
	        if (!util_1.isNullOrUndefined(this.properties[td.tag])) {
	            this.properties[td.tag].list = [];
	        }
	        else {
	            this.properties[td.tag] = new index_1.Property();
	        }
	        for (const key in td.values) {
	            if (!td.values.hasOwnProperty(key)) {
	                continue;
	            }
	            const value = td.values[key];
	            let child = 'The last commit is ';
	            const dateStrings = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];
	            for (const s of dateStrings) {
	                const diff = Math.abs(now.diff(current, s));
	                if (diff !== 0) {
	                    child += diff;
	                    // append unit in singular or plural
	                    child += ' ' + (diff === 1 ? s.substr(0, s.length - 1) : s);
	                    break;
	                }
	            }
	            child += ' old';
	            const min = value['min-age'];
	            const minUnit = value['min-age-unit'];
	            const max = value['max-age'];
	            const maxUnit = value['max-age-unit'];
	            const minDiff = Math.abs(now.diff(current, minUnit));
	            const maxDiff = Math.abs(now.diff(current, maxUnit));
	            if ((min === -1 || minDiff >= min) && (max === -1 || maxDiff < max)) {
	                this.properties[td.tag].list.push(new index_1.ListItem(key, child, this.comparisonService.converter));
	                this.properties[td.tag].plain = Math.abs(now.diff(current));
	                return this.properties[td.tag];
	            }
	        }
	    }
	    setRepoData(data) {
	        if (Data.repoData === null) {
	            Data.repoData = {};
	        }
	        Data.repoData[this.tag] = data;
	        const saving = {};
	        for (const d in Data.repoData) {
	            if (Data.repoData.hasOwnProperty(d)) {
	                continue;
	            }
	            saving[d] = {
	                lastCommit: Data.repoData[d].lastCommit.getTime(),
	                lastSync: Data.repoData[d].lastSync.getTime()
	            };
	        }
	        this.lss.set('repoData', saving);
	        this.changeDetector.markForCheck();
	    }
	    getPropertyTags(name) {
	        const tagList = [];
	        const p = this.getProperty(name);
	        p.list.forEach(item => {
	            tagList.push(item.content);
	        });
	        return tagList;
	    }
	    getPropertyListItems(name) {
	        return this.getProperty(name).list;
	    }
	    getRating() {
	        return this.rating.getAverage();
	    }
	    getRatings() {
	        return this.rating.getRatings();
	    }
	}
	Data.repoData = {};
	exports.Data = Data;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }
	
	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};
	
	
	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }
	
	  if (process.noDeprecation === true) {
	    return fn;
	  }
	
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	
	  return deprecated;
	};
	
	
	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = ({"ENV":"production"}).NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};
	
	
	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;
	
	
	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};
	
	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};
	
	
	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];
	
	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}
	
	
	function stylizeNoColor(str, styleType) {
	  return str;
	}
	
	
	function arrayToHash(array) {
	  var hash = {};
	
	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });
	
	  return hash;
	}
	
	
	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }
	
	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }
	
	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);
	
	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }
	
	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }
	
	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }
	
	  var base = '', array = false, braces = ['{', '}'];
	
	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }
	
	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }
	
	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }
	
	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }
	
	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }
	
	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }
	
	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }
	
	  ctx.seen.push(value);
	
	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }
	
	  ctx.seen.pop();
	
	  return reduceToSingleString(output, base, braces);
	}
	
	
	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}
	
	
	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}
	
	
	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}
	
	
	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }
	
	  return name + ': ' + str;
	}
	
	
	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);
	
	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }
	
	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}
	
	
	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;
	
	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;
	
	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;
	
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;
	
	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;
	
	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;
	
	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;
	
	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;
	
	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;
	
	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;
	
	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;
	
	exports.isBuffer = __webpack_require__(51);
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}
	
	
	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}
	
	
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];
	
	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}
	
	
	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};
	
	
	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(52);
	
	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;
	
	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};
	
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(50)))

/***/ }),
/* 50 */,
/* 51 */
/***/ (function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ }),
/* 53 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	class LabelCls {
	    constructor(label_success = Array(), label_warning = Array(), label_danger = Array(), label_default = Array(), label_info = Array(), label_primary = Array()) {
	        this.label_success = label_success;
	        this.label_warning = label_warning;
	        this.label_danger = label_danger;
	        this.label_default = label_default;
	        this.label_info = label_info;
	        this.label_primary = label_primary;
	    }
	    getCls(item) {
	        if (this.label_success.some(it => it.name === item)) {
	            return 'label-success';
	        }
	        if (this.label_warning.some(it => it.name === item)) {
	            return 'label-warning';
	        }
	        if (this.label_danger.some(it => it.name === item)) {
	            return 'label-danger';
	        }
	        if (this.label_default.some(it => it.name === item)) {
	            return 'label-default';
	        }
	        if (this.label_info.some(it => it.name === item)) {
	            return 'label-info';
	        }
	        if (this.label_primary.some(it => it.name === item)) {
	            return 'label-primary';
	        }
	        return '';
	    }
	}
	exports.LabelCls = LabelCls;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	class ListItem {
	    constructor(content = '', plainChilds = '', converter) {
	        this.content = content;
	        this.plainChilds = plainChilds;
	        this.converter = converter;
	        this.htmlChilds = '';
	        this.latexChilds = '';
	        this.convertChilds();
	    }
	    convertChilds() {
	        if (this.plainChilds !== '') {
	            this.htmlChilds = this.converter.makeHtml(this.plainChilds.replace(/^[\s]{3}/gm, ''));
	            if (this.htmlChilds) {
	                this.latexChilds = this.htmlChilds.replace(/[\s]{2}/gm, ' ');
	                this.latexChilds = this.latexChilds.replace(/[\s]/gm, ' ');
	            }
	        }
	    }
	    getLabel() {
	        return this.content + this.htmlChilds;
	    }
	}
	exports.ListItem = ListItem;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	class Property {
	    constructor(plain = '', text = '', list = []) {
	        this.plain = plain;
	        this.text = text;
	        this.list = list;
	    }
	}
	exports.Property = Property;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const type_1 = __webpack_require__(57);
	class TableData {
	    constructor(name = '', tag = '', url = '', style = '', display = false, type = new type_1.Type(), values = {}, sort = 0, repo = false, order = 'asc') {
	        this.name = name;
	        this.tag = tag;
	        this.url = url;
	        this.style = style;
	        this.display = display;
	        this.type = type;
	        this.values = values;
	        this.sort = sort;
	        this.repo = repo;
	        this.order = order;
	    }
	}
	exports.TableData = TableData;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const labelcls_1 = __webpack_require__(53);
	const color_dictionary_1 = __webpack_require__(58);
	class Type {
	    constructor(tag = '', cls = '', labelCls = new labelcls_1.LabelCls(), colors = new color_dictionary_1.ColorDictionary(), foregroundColors = new color_dictionary_1.ColorDictionary()) {
	        this.tag = tag;
	        this.cls = cls;
	        this.labelCls = labelCls;
	        this.colors = colors;
	        this.foregroundColors = foregroundColors;
	    }
	    getCls(item) {
	        const labelClsString = this.labelCls.getCls(item);
	        if (this.cls === '' && labelClsString === '' && this.colors[item] === '') {
	            return 'label label-default';
	        }
	        else if (this.cls === '' && labelClsString === '') {
	            return 'label';
	        }
	        else if (labelClsString !== '') {
	            return 'label ' + labelClsString;
	        }
	        else {
	            // quick fix for old implementations
	            return this.cls !== 'label' ? this.cls : this.cls + 'label-default';
	        }
	    }
	}
	exports.Type = Type;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	class ColorDictionary {
	    constructor() {
	        this.colorDict = {};
	    }
	    setColor(label, color) {
	        this.colorDict[label] = color;
	    }
	    getColor(label) {
	        if (this.colorDict[label]) {
	            return this.colorDict[label];
	        }
	        else {
	            return '';
	        }
	    }
	    isEmpty() {
	        return Object.keys(this.colorDict).length === 0;
	    }
	}
	exports.ColorDictionary = ColorDictionary;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const index_1 = __webpack_require__(47);
	const color_dictionary_1 = __webpack_require__(58);
	const util_1 = __webpack_require__(49);
	class TableDataSet {
	    constructor() {
	        this.tableDataSet = {};
	        this.set = [];
	        this.ready = false;
	    }
	    load(jsonObj) {
	        jsonObj.forEach(obj => {
	            const lcls = new index_1.LabelCls();
	            const values = {};
	            if (obj.type.values) {
	                obj.type.values.forEach(val => {
	                    const value = new index_1.Value(val.name, val.description);
	                    if (util_1.isNullOrUndefined(val['min-age'])) {
	                        values[val.name] = { tag: val.description, weight: val.weight };
	                    }
	                    else {
	                        const v = {};
	                        v['min-age'] = val['min-age'];
	                        v['min-age-unit'] = val['min-age-unit'];
	                        v['max-age'] = val['max-age'];
	                        v['max-age-unit'] = val['max-age-unit'];
	                        v['description'] = val.description;
	                        values[val.name] = v;
	                    }
	                    switch (val.class) {
	                        case 'label-success':
	                            lcls.label_success.push(value);
	                            break;
	                        case 'label-warning':
	                            lcls.label_warning.push(value);
	                            break;
	                        case 'label-danger':
	                            lcls.label_danger.push(value);
	                            break;
	                        case 'label-default':
	                            lcls.label_default.push(value);
	                            break;
	                        case 'label-info':
	                            lcls.label_info.push(value);
	                            break;
	                        case 'label-primary':
	                            lcls.label_primary.push(value);
	                            break;
	                    }
	                });
	            }
	            const colors = new color_dictionary_1.ColorDictionary();
	            if (obj.type && obj.type.values) {
	                for (const v of obj.type.values) {
	                    if (v.color) {
	                        colors.setColor(v.name, v.color);
	                    }
	                }
	            }
	            const foregroundColors = new color_dictionary_1.ColorDictionary();
	            if (obj.type && obj.type.values) {
	                for (const v of obj.type.values) {
	                    if (v.foreground) {
	                        foregroundColors.setColor(v.name, v.foreground);
	                    }
	                }
	            }
	            const type = new index_1.Type(obj.type.tag, obj.type.class, lcls, colors, foregroundColors);
	            let order = obj.order;
	            if (!util_1.isNullOrUndefined(order)) {
	                order = order.toLowerCase();
	            }
	            const td = new index_1.TableData(obj.name, obj.tag, obj.urlTag, obj.style, obj.display, type, values, obj.sort, obj.repo, order);
	            this.tableDataSet[obj.tag] = td;
	        });
	        this.ready = true;
	    }
	    getTableData(tag) {
	        if (!this.ready) {
	            return new index_1.TableData();
	        }
	        return this.tableDataSet[tag] ? this.tableDataSet[tag] : new index_1.TableData();
	    }
	    getTableDataArray() {
	        if (!this.ready) {
	            return [];
	        }
	        let size = 0;
	        for (const key in this.tableDataSet) {
	            if (!this.tableDataSet.hasOwnProperty(key)) {
	                continue;
	            }
	            size++;
	        }
	        if (this.set.length !== size) {
	            for (const key in this.tableDataSet) {
	                if (!this.tableDataSet.hasOwnProperty(key)) {
	                    continue;
	                }
	                this.set.push(this.tableDataSet[key]);
	            }
	        }
	        return this.set;
	    }
	}
	exports.TableDataSet = TableDataSet;


/***/ }),
/* 60 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	class Value {
	    constructor(name = '', description = '', value = '', label = '', text = '', id = -1) {
	        this.name = name;
	        this.description = description;
	        this.value = value;
	        this.label = label;
	        this.text = text;
	        this.id = id;
	    }
	}
	exports.Value = Value;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	class Criteria {
	    constructor(name = '', tag = '', description = '', placeholder = '', and_search = true, values = [], range_search = false) {
	        this.name = name;
	        this.tag = tag;
	        this.description = description;
	        this.placeholder = placeholder;
	        this.and_search = and_search;
	        this.values = values;
	        this.range_search = range_search;
	    }
	    getSearchIndicator() {
	        if (this.and_search) {
	            return 'match all';
	        }
	        if (this.range_search) {
	            return 'match range';
	        }
	        return 'match one';
	    }
	}
	exports.Criteria = Criteria;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const index_1 = __webpack_require__(47);
	class CriteriaSet {
	    constructor(jsonObj) {
	        this.criteriaSet = {};
	        jsonObj.forEach(crit => {
	            const criteria = new index_1.Criteria();
	            criteria.name = crit.name ? crit.name : crit.tag;
	            criteria.tag = crit.tag;
	            criteria.description = crit.description ? crit.description : '';
	            criteria.and_search = typeof crit.and_search !== typeof undefined ? crit.and_search : true;
	            criteria.range_search = typeof crit.range_search !== typeof undefined ? crit.range_search : false;
	            if (!criteria.range_search) {
	                let id = 1;
	                crit.values.forEach(val => {
	                    const value = new index_1.Value();
	                    value.name = val.name ? val.name : 'undefined value';
	                    value.value = val.name ? val.name : 'undefined value';
	                    value.label = val.name ? val.name : 'undefined value';
	                    value.text = val.name ? val.name : 'undefined value';
	                    value.id = id;
	                    value.description = val.description ? val.description : '';
	                    criteria.values.push(value);
	                    id++;
	                });
	            }
	            criteria.placeholder = crit.placeholder ? crit.placeholder : '';
	            this.criteriaSet[crit.tag] = criteria;
	        });
	    }
	    getCriteriaArray() {
	        const set = [];
	        for (const key in this.criteriaSet) {
	            if (!this.criteriaSet.hasOwnProperty(key)) {
	                continue;
	            }
	            set.push(this.criteriaSet[key]);
	        }
	        return set;
	    }
	    getCriteria(tag) {
	        return this.criteriaSet[tag] ? this.criteriaSet[tag] : new index_1.Criteria();
	    }
	}
	exports.CriteriaSet = CriteriaSet;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const criteria_1 = __webpack_require__(61);
	class CriteriaSelection {
	    constructor(values = [], criteria = new criteria_1.Criteria()) {
	        this.values = values;
	        this.criteria = criteria;
	    }
	}
	exports.CriteriaSelection = CriteriaSelection;


/***/ }),
/* 64 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	class Details {
	    constructor(jsonObj) {
	        this.header = jsonObj.header ? jsonObj.header : 'tag';
	        this.headerLabel = jsonObj['header-label'] ? jsonObj['header-label'] : 'undefined';
	        this.headerUrl = jsonObj['header-url'] ? jsonObj['header-url'] : 'url';
	        this.bodyMainTitle = jsonObj['body-main-title'] ? jsonObj['body-main-title'] : 'Description';
	        this.body = jsonObj.body ? jsonObj.body : 'Description';
	        this.bodyAttachmentTags = jsonObj['body-attachment-tags'] ? jsonObj['body-attachment-tags'] : [];
	        this.tooltipAsText = jsonObj.tooltipAsText != null ? jsonObj.tooltipAsText : true;
	    }
	}
	exports.Details = Details;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const details_1 = __webpack_require__(64);
	class Comparison {
	    constructor(jsonObj) {
	        this.title = jsonObj.title ? jsonObj.title : 'Ultimate-Comparison';
	        this.subtitle = jsonObj.subtitle ? jsonObj.subtitle : 'Ultimate comparison framework';
	        this.selecttitle = jsonObj.selecttitle ? jsonObj.selecttitle : 'Criteria';
	        this.tabletitle = jsonObj.tabletitle ? jsonObj.tabletitle : 'Comparison of ...';
	        this.repository = jsonObj.repository ? jsonObj.repository : 'https://github.com/ultimate-comparisons/ultimate-comparison-BASE.git';
	        this.details = jsonObj.details ? new details_1.Details(jsonObj.details) : new details_1.Details({});
	        this.displaytemplate = jsonObj.displaytemplate ? jsonObj.displaytemplate : false;
	        this.displayall = jsonObj.displayall ? jsonObj.displayall : false;
	    }
	}
	exports.Comparison = Comparison;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	class RatingSet {
	    constructor(jsonObj) {
	        this.set = [];
	        this.average = 0;
	        this.sum = 0;
	        if (jsonObj.hasOwnProperty('childs')) {
	            jsonObj.childs[0][0].forEach(item => {
	                const starsString = /\[(\d*)\]/gm.exec(item.content)[1];
	                const stars = parseInt(starsString, 10);
	                const text = /(?:\[\d*\])((?:.|\n)*)/gm.exec(item.content)[1];
	                const rating = new Rating(stars, text);
	                this.set.push(rating);
	                this.sum += stars;
	            });
	        }
	        this.average = this.set.length > 0 ? this.sum / this.set.length : this.sum;
	    }
	    getRatings() {
	        return this.set;
	    }
	    getAverage() {
	        return this.average;
	    }
	}
	exports.RatingSet = RatingSet;
	class Rating {
	    constructor(stars = 0, text) {
	        this.stars = stars;
	        this.text = text;
	    }
	}
	exports.Rating = Rating;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	class RepositoryData {
	    constructor(repository, timestamp, latestCommit) {
	        this.repository = repository;
	        this.timestamp = timestamp;
	        this.latestCommit = latestCommit;
	    }
	}
	exports.RepositoryData = RepositoryData;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const http_1 = __webpack_require__(45);
	const platform_browser_1 = __webpack_require__(38);
	const index_1 = __webpack_require__(47);
	const comparison_data_service_1 = __webpack_require__(69);
	const comparison_service_1 = __webpack_require__(70);
	let ComparisonConfigService = class ComparisonConfigService {
	    constructor(title, http, comparisonDataService, comparisonService) {
	        this.title = title;
	        this.http = http;
	        this.comparisonDataService = comparisonDataService;
	        this.comparisonService = comparisonService;
	        this.tableDataSet = new index_1.TableDataSet();
	        this.displayAllName = 'All';
	    }
	    loadTableData(cd) {
	        this.http.request('comparison-configuration/table.json')
	            .subscribe(res => {
	            this.tableDataSet.load(res.json());
	            cd.markForCheck();
	            this.comparisonDataService.loadData(this.tableDataSet, cd);
	        });
	    }
	    loadCriteria(cd) {
	        this.http.request('comparison-configuration/criteria.json')
	            .subscribe(res => {
	            this.criteriaSet = new index_1.CriteriaSet(res.json());
	            cd.markForCheck();
	        });
	    }
	    loadComparison(cd) {
	        this.http.request('comparison-configuration/comparison.json')
	            .subscribe(res => {
	            this.comparison = new index_1.Comparison(res.json());
	            this.title.setTitle(this.comparison.title);
	            cd.markForCheck();
	        });
	    }
	    loadDescription(cd) {
	        this.http.request('comparison-configuration/description.md')
	            .subscribe(res => {
	            this.description = this.comparisonService.converter.makeHtml(res.text());
	            cd.markForCheck();
	        });
	    }
	    getBodyAttachmentTags() {
	        if (!this.comparison) {
	            return [];
	        }
	        let tags = this.comparison.details.bodyAttachmentTags;
	        if (tags.length === 0) {
	            tags = this.comparisonDataService.getDefaultAttachmentTags();
	        }
	        return tags;
	    }
	    displayAllChange(toggle, self) {
	        if (this.tableDataSet) {
	            this.tableDataSet.getTableDataArray().forEach((item) => {
	                item.display = toggle;
	            });
	            this.displayAllName = toggle ? 'None' : 'All';
	            self.change();
	        }
	    }
	    displayChange(column, self) {
	        column.display = !column.display;
	        self.change();
	    }
	};
	ComparisonConfigService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [platform_browser_1.Title,
	        http_1.Http,
	        comparison_data_service_1.ComparisonDataService,
	        comparison_service_1.ComparisonService])
	], ComparisonConfigService);
	exports.ComparisonConfigService = ComparisonConfigService;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const http_1 = __webpack_require__(45);
	const index_1 = __webpack_require__(47);
	const comparison_service_1 = __webpack_require__(70);
	const angular_2_local_storage_1 = __webpack_require__(72);
	let ComparisonDataService = class ComparisonDataService {
	    constructor(http, comparisonService, lss) {
	        this.http = http;
	        this.comparisonService = comparisonService;
	        this.lss = lss;
	        this.data = [];
	        this.tags = {};
	    }
	    loadData(tableDataSet, cd) {
	        const self = this;
	        this.http.request('app/components/comparison/data/data.json')
	            .subscribe(res => {
	            res.json().forEach(obj => {
	                const data = new index_1.Data(this.lss, this, this.comparisonService);
	                data.tag = obj.tag;
	                const regArray = /^((?:(?:\w+\s*)(?:-?\s*\w+.)*)+)\s*-?\s*((?:(?:http|ftp|https)(?::\/\/)(?:[\w_-]+(?:(?:\.[\w_-]+)+))|(?:www.))(?:[\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?)$/gi
	                    .exec(data.tag);
	                data.url = regArray ? regArray[2] : '';
	                if (/^(www)/.test(data.url)) {
	                    data.url = 'http://' + data.url;
	                }
	                data.tag = regArray ? regArray[1] : data.tag;
	                for (const key in obj) {
	                    if (!obj.hasOwnProperty(key)) {
	                        continue;
	                    }
	                    switch (key) {
	                        case 'tag':
	                            break;
	                        case 'descr':
	                            data.descr = obj[key];
	                            break;
	                        case 'Description':
	                            data.properties[key] = new index_1.Property(obj[key].plain);
	                            break;
	                        case 'Rating':
	                            data.rating = new index_1.RatingSet(obj[key]);
	                            break;
	                        default:
	                            const p = new index_1.Property();
	                            this.tags[key] = key;
	                            p.plain = obj[key].plain;
	                            if (tableDataSet.getTableData(key).type.tag === 'text') {
	                                p.text = obj[key].text;
	                            }
	                            else {
	                                if (typeof obj[key].childs[0][0] !== 'string') {
	                                    obj[key].childs[0][0].forEach(item => {
	                                        const content = item.content;
	                                        let plainChilds = item.plainChilds;
	                                        if (item.childs && item.childs.length === 1) {
	                                            plainChilds = item.childs[0].plain;
	                                        }
	                                        const itm = new index_1.ListItem(content, plainChilds, this.comparisonService.converter);
	                                        p.list.push(itm);
	                                    });
	                                }
	                            }
	                            data.properties[key] = p;
	                            break;
	                    }
	                }
	                this.data.push(data);
	            });
	            cd.markForCheck();
	        });
	    }
	    getRepoData(data, repo) {
	        repo = repo;
	        repo = repo.replace(/^-\s*/, "");
	        const url = this.repoQueryBuildUrl(repo);
	        if (url === null) {
	            return;
	        }
	        this.http.get(url).toPromise()
	            .then(function (res) {
	            const body = JSON.parse(res["_body"]);
	            const date = moment(body[0].commit.author.date);
	            const sync = moment();
	            data.setRepoData({ lastCommit: date.toDate(), lastSync: sync.toDate() });
	        })
	            .catch(function (error) {
	            console.log("GetRepoData() throws error for " + repo);
	        });
	    }
	    repoQueryBuildUrl(repoUrl) {
	        if (!repoUrl) {
	            return null;
	        }
	        let url;
	        if (/https?:\/\/github\.com.*/.test(repoUrl.trim())) {
	            url = repoUrl.trim().replace(/https?:\/\/github.com/, "https://api.github.com/repos");
	            url += url.endsWith("/") ? "commits" : "/commits";
	        }
	        return url;
	    }
	    getDefaultAttachmentTags() {
	        const tags = [];
	        for (const key in this.tags) {
	            if (!this.tags.hasOwnProperty(key) || key === 'tag' || key === 'url' || key === 'descr' || key === 'Rating') {
	                continue;
	            }
	            tags.push(this.tags[key]);
	        }
	        return tags;
	    }
	    getLength() {
	        return this.data.length;
	    }
	    getData() {
	        return this.data;
	    }
	};
	ComparisonDataService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http,
	        comparison_service_1.ComparisonService,
	        angular_2_local_storage_1.LocalStorageService])
	], ComparisonDataService);
	exports.ComparisonDataService = ComparisonDataService;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const platform_browser_1 = __webpack_require__(38);
	const showdown = __webpack_require__(71);
	let ComparisonService = class ComparisonService {
	    constructor(_sanitizer) {
	        this._sanitizer = _sanitizer;
	        this.footnotes = {};
	        this.findex = 0;
	        this.converter = new showdown.Converter();
	    }
	    getFootnotes() {
	        const fnotes = [];
	        let ind = 0;
	        for (const key in this.footnotes) {
	            if (!this.footnotes.hasOwnProperty(key)) {
	                continue;
	            }
	            if (this.footnotes[key].count < 1) {
	                continue;
	            }
	            const item = this.footnotes[key];
	            fnotes.push('\\footnotetext[\\numexpr\\snum+' +
	                (ind++) +
	                ']&#123;' +
	                item.value +
	                ' \\label&#123;' +
	                item.index +
	                '&#125; &#125;');
	        }
	        return fnotes;
	    }
	};
	ComparisonService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
	], ComparisonService);
	exports.ComparisonService = ComparisonService;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;;/*! showdown 05-08-2017 */
	(function(){
	/**
	 * Created by Tivie on 13-07-2015.
	 */
	
	function getDefaultOpts (simple) {
	  'use strict';
	
	  var defaultOptions = {
	    omitExtraWLInCodeBlocks: {
	      defaultValue: false,
	      describe: 'Omit the default extra whiteline added to code blocks',
	      type: 'boolean'
	    },
	    noHeaderId: {
	      defaultValue: false,
	      describe: 'Turn on/off generated header id',
	      type: 'boolean'
	    },
	    prefixHeaderId: {
	      defaultValue: false,
	      describe: 'Specify a prefix to generated header ids',
	      type: 'string'
	    },
	    ghCompatibleHeaderId: {
	      defaultValue: false,
	      describe: 'Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)',
	      type: 'boolean'
	    },
	    headerLevelStart: {
	      defaultValue: false,
	      describe: 'The header blocks level start',
	      type: 'integer'
	    },
	    parseImgDimensions: {
	      defaultValue: false,
	      describe: 'Turn on/off image dimension parsing',
	      type: 'boolean'
	    },
	    simplifiedAutoLink: {
	      defaultValue: false,
	      describe: 'Turn on/off GFM autolink style',
	      type: 'boolean'
	    },
	    excludeTrailingPunctuationFromURLs: {
	      defaultValue: false,
	      describe: 'Excludes trailing punctuation from links generated with autoLinking',
	      type: 'boolean'
	    },
	    literalMidWordUnderscores: {
	      defaultValue: false,
	      describe: 'Parse midword underscores as literal underscores',
	      type: 'boolean'
	    },
	    literalMidWordAsterisks: {
	      defaultValue: false,
	      describe: 'Parse midword asterisks as literal asterisks',
	      type: 'boolean'
	    },
	    strikethrough: {
	      defaultValue: false,
	      describe: 'Turn on/off strikethrough support',
	      type: 'boolean'
	    },
	    tables: {
	      defaultValue: false,
	      describe: 'Turn on/off tables support',
	      type: 'boolean'
	    },
	    tablesHeaderId: {
	      defaultValue: false,
	      describe: 'Add an id to table headers',
	      type: 'boolean'
	    },
	    ghCodeBlocks: {
	      defaultValue: true,
	      describe: 'Turn on/off GFM fenced code blocks support',
	      type: 'boolean'
	    },
	    tasklists: {
	      defaultValue: false,
	      describe: 'Turn on/off GFM tasklist support',
	      type: 'boolean'
	    },
	    smoothLivePreview: {
	      defaultValue: false,
	      describe: 'Prevents weird effects in live previews due to incomplete input',
	      type: 'boolean'
	    },
	    smartIndentationFix: {
	      defaultValue: false,
	      description: 'Tries to smartly fix indentation in es6 strings',
	      type: 'boolean'
	    },
	    disableForced4SpacesIndentedSublists: {
	      defaultValue: false,
	      description: 'Disables the requirement of indenting nested sublists by 4 spaces',
	      type: 'boolean'
	    },
	    simpleLineBreaks: {
	      defaultValue: false,
	      description: 'Parses simple line breaks as <br> (GFM Style)',
	      type: 'boolean'
	    },
	    requireSpaceBeforeHeadingText: {
	      defaultValue: false,
	      description: 'Makes adding a space between `#` and the header text mandatory (GFM Style)',
	      type: 'boolean'
	    },
	    ghMentions: {
	      defaultValue: false,
	      description: 'Enables github @mentions',
	      type: 'boolean'
	    },
	    ghMentionsLink: {
	      defaultValue: 'https://github.com/{u}',
	      description: 'Changes the link generated by @mentions. Only applies if ghMentions option is enabled.',
	      type: 'string'
	    },
	    encodeEmails: {
	      defaultValue: true,
	      description: 'Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities',
	      type: 'boolean'
	    },
	    openLinksInNewWindow: {
	      defaultValue: false,
	      description: 'Open all links in new windows',
	      type: 'boolean'
	    },
	    backslashEscapesHTMLTags: {
	      defaultValue: false,
	      description: 'Support for HTML Tag escaping. ex: \<div>foo\</div>',
	      type: 'boolean'
	    }
	  };
	  if (simple === false) {
	    return JSON.parse(JSON.stringify(defaultOptions));
	  }
	  var ret = {};
	  for (var opt in defaultOptions) {
	    if (defaultOptions.hasOwnProperty(opt)) {
	      ret[opt] = defaultOptions[opt].defaultValue;
	    }
	  }
	  return ret;
	}
	
	function allOptionsOn () {
	  'use strict';
	  var options = getDefaultOpts(true),
	      ret = {};
	  for (var opt in options) {
	    if (options.hasOwnProperty(opt)) {
	      ret[opt] = true;
	    }
	  }
	  return ret;
	}
	
	/**
	 * Created by Tivie on 06-01-2015.
	 */
	
	// Private properties
	var showdown = {},
	    parsers = {},
	    extensions = {},
	    globalOptions = getDefaultOpts(true),
	    setFlavor = 'vanilla',
	    flavor = {
	      github: {
	        omitExtraWLInCodeBlocks:              true,
	        simplifiedAutoLink:                   true,
	        excludeTrailingPunctuationFromURLs:   true,
	        literalMidWordUnderscores:            true,
	        strikethrough:                        true,
	        tables:                               true,
	        tablesHeaderId:                       true,
	        ghCodeBlocks:                         true,
	        tasklists:                            true,
	        disableForced4SpacesIndentedSublists: true,
	        simpleLineBreaks:                     true,
	        requireSpaceBeforeHeadingText:        true,
	        ghCompatibleHeaderId:                 true,
	        ghMentions:                           true
	      },
	      original: {
	        noHeaderId:                           true,
	        ghCodeBlocks:                         false
	      },
	      ghost: {
	        omitExtraWLInCodeBlocks:              true,
	        parseImgDimensions:                   true,
	        simplifiedAutoLink:                   true,
	        excludeTrailingPunctuationFromURLs:   true,
	        literalMidWordUnderscores:            true,
	        strikethrough:                        true,
	        tables:                               true,
	        tablesHeaderId:                       true,
	        ghCodeBlocks:                         true,
	        tasklists:                            true,
	        smoothLivePreview:                    true,
	        simpleLineBreaks:                     true,
	        requireSpaceBeforeHeadingText:        true,
	        ghMentions:                           false,
	        encodeEmails:                         true
	      },
	      vanilla: getDefaultOpts(true),
	      allOn: allOptionsOn()
	    };
	
	/**
	 * helper namespace
	 * @type {{}}
	 */
	showdown.helper = {};
	
	/**
	 * TODO LEGACY SUPPORT CODE
	 * @type {{}}
	 */
	showdown.extensions = {};
	
	/**
	 * Set a global option
	 * @static
	 * @param {string} key
	 * @param {*} value
	 * @returns {showdown}
	 */
	showdown.setOption = function (key, value) {
	  'use strict';
	  globalOptions[key] = value;
	  return this;
	};
	
	/**
	 * Get a global option
	 * @static
	 * @param {string} key
	 * @returns {*}
	 */
	showdown.getOption = function (key) {
	  'use strict';
	  return globalOptions[key];
	};
	
	/**
	 * Get the global options
	 * @static
	 * @returns {{}}
	 */
	showdown.getOptions = function () {
	  'use strict';
	  return globalOptions;
	};
	
	/**
	 * Reset global options to the default values
	 * @static
	 */
	showdown.resetOptions = function () {
	  'use strict';
	  globalOptions = getDefaultOpts(true);
	};
	
	/**
	 * Set the flavor showdown should use as default
	 * @param {string} name
	 */
	showdown.setFlavor = function (name) {
	  'use strict';
	  if (!flavor.hasOwnProperty(name)) {
	    throw Error(name + ' flavor was not found');
	  }
	  showdown.resetOptions();
	  var preset = flavor[name];
	  setFlavor = name;
	  for (var option in preset) {
	    if (preset.hasOwnProperty(option)) {
	      globalOptions[option] = preset[option];
	    }
	  }
	};
	
	/**
	 * Get the currently set flavor
	 * @returns {string}
	 */
	showdown.getFlavor = function () {
	  'use strict';
	  return setFlavor;
	};
	
	/**
	 * Get the options of a specified flavor. Returns undefined if the flavor was not found
	 * @param {string} name Name of the flavor
	 * @returns {{}|undefined}
	 */
	showdown.getFlavorOptions = function (name) {
	  'use strict';
	  if (flavor.hasOwnProperty(name)) {
	    return flavor[name];
	  }
	};
	
	/**
	 * Get the default options
	 * @static
	 * @param {boolean} [simple=true]
	 * @returns {{}}
	 */
	showdown.getDefaultOptions = function (simple) {
	  'use strict';
	  return getDefaultOpts(simple);
	};
	
	/**
	 * Get or set a subParser
	 *
	 * subParser(name)       - Get a registered subParser
	 * subParser(name, func) - Register a subParser
	 * @static
	 * @param {string} name
	 * @param {function} [func]
	 * @returns {*}
	 */
	showdown.subParser = function (name, func) {
	  'use strict';
	  if (showdown.helper.isString(name)) {
	    if (typeof func !== 'undefined') {
	      parsers[name] = func;
	    } else {
	      if (parsers.hasOwnProperty(name)) {
	        return parsers[name];
	      } else {
	        throw Error('SubParser named ' + name + ' not registered!');
	      }
	    }
	  }
	};
	
	/**
	 * Gets or registers an extension
	 * @static
	 * @param {string} name
	 * @param {object|function=} ext
	 * @returns {*}
	 */
	showdown.extension = function (name, ext) {
	  'use strict';
	
	  if (!showdown.helper.isString(name)) {
	    throw Error('Extension \'name\' must be a string');
	  }
	
	  name = showdown.helper.stdExtName(name);
	
	  // Getter
	  if (showdown.helper.isUndefined(ext)) {
	    if (!extensions.hasOwnProperty(name)) {
	      throw Error('Extension named ' + name + ' is not registered!');
	    }
	    return extensions[name];
	
	    // Setter
	  } else {
	    // Expand extension if it's wrapped in a function
	    if (typeof ext === 'function') {
	      ext = ext();
	    }
	
	    // Ensure extension is an array
	    if (!showdown.helper.isArray(ext)) {
	      ext = [ext];
	    }
	
	    var validExtension = validate(ext, name);
	
	    if (validExtension.valid) {
	      extensions[name] = ext;
	    } else {
	      throw Error(validExtension.error);
	    }
	  }
	};
	
	/**
	 * Gets all extensions registered
	 * @returns {{}}
	 */
	showdown.getAllExtensions = function () {
	  'use strict';
	  return extensions;
	};
	
	/**
	 * Remove an extension
	 * @param {string} name
	 */
	showdown.removeExtension = function (name) {
	  'use strict';
	  delete extensions[name];
	};
	
	/**
	 * Removes all extensions
	 */
	showdown.resetExtensions = function () {
	  'use strict';
	  extensions = {};
	};
	
	/**
	 * Validate extension
	 * @param {array} extension
	 * @param {string} name
	 * @returns {{valid: boolean, error: string}}
	 */
	function validate (extension, name) {
	  'use strict';
	
	  var errMsg = (name) ? 'Error in ' + name + ' extension->' : 'Error in unnamed extension',
	      ret = {
	        valid: true,
	        error: ''
	      };
	
	  if (!showdown.helper.isArray(extension)) {
	    extension = [extension];
	  }
	
	  for (var i = 0; i < extension.length; ++i) {
	    var baseMsg = errMsg + ' sub-extension ' + i + ': ',
	        ext = extension[i];
	    if (typeof ext !== 'object') {
	      ret.valid = false;
	      ret.error = baseMsg + 'must be an object, but ' + typeof ext + ' given';
	      return ret;
	    }
	
	    if (!showdown.helper.isString(ext.type)) {
	      ret.valid = false;
	      ret.error = baseMsg + 'property "type" must be a string, but ' + typeof ext.type + ' given';
	      return ret;
	    }
	
	    var type = ext.type = ext.type.toLowerCase();
	
	    // normalize extension type
	    if (type === 'language') {
	      type = ext.type = 'lang';
	    }
	
	    if (type === 'html') {
	      type = ext.type = 'output';
	    }
	
	    if (type !== 'lang' && type !== 'output' && type !== 'listener') {
	      ret.valid = false;
	      ret.error = baseMsg + 'type ' + type + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
	      return ret;
	    }
	
	    if (type === 'listener') {
	      if (showdown.helper.isUndefined(ext.listeners)) {
	        ret.valid = false;
	        ret.error = baseMsg + '. Extensions of type "listener" must have a property called "listeners"';
	        return ret;
	      }
	    } else {
	      if (showdown.helper.isUndefined(ext.filter) && showdown.helper.isUndefined(ext.regex)) {
	        ret.valid = false;
	        ret.error = baseMsg + type + ' extensions must define either a "regex" property or a "filter" method';
	        return ret;
	      }
	    }
	
	    if (ext.listeners) {
	      if (typeof ext.listeners !== 'object') {
	        ret.valid = false;
	        ret.error = baseMsg + '"listeners" property must be an object but ' + typeof ext.listeners + ' given';
	        return ret;
	      }
	      for (var ln in ext.listeners) {
	        if (ext.listeners.hasOwnProperty(ln)) {
	          if (typeof ext.listeners[ln] !== 'function') {
	            ret.valid = false;
	            ret.error = baseMsg + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + ln +
	              ' must be a function but ' + typeof ext.listeners[ln] + ' given';
	            return ret;
	          }
	        }
	      }
	    }
	
	    if (ext.filter) {
	      if (typeof ext.filter !== 'function') {
	        ret.valid = false;
	        ret.error = baseMsg + '"filter" must be a function, but ' + typeof ext.filter + ' given';
	        return ret;
	      }
	    } else if (ext.regex) {
	      if (showdown.helper.isString(ext.regex)) {
	        ext.regex = new RegExp(ext.regex, 'g');
	      }
	      if (!(ext.regex instanceof RegExp)) {
	        ret.valid = false;
	        ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' + typeof ext.regex + ' given';
	        return ret;
	      }
	      if (showdown.helper.isUndefined(ext.replace)) {
	        ret.valid = false;
	        ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
	        return ret;
	      }
	    }
	  }
	  return ret;
	}
	
	/**
	 * Validate extension
	 * @param {object} ext
	 * @returns {boolean}
	 */
	showdown.validateExtension = function (ext) {
	  'use strict';
	
	  var validateExtension = validate(ext, null);
	  if (!validateExtension.valid) {
	    console.warn(validateExtension.error);
	    return false;
	  }
	  return true;
	};
	
	/**
	 * showdownjs helper functions
	 */
	
	if (!showdown.hasOwnProperty('helper')) {
	  showdown.helper = {};
	}
	
	/**
	 * Check if var is string
	 * @static
	 * @param {string} a
	 * @returns {boolean}
	 */
	showdown.helper.isString = function (a) {
	  'use strict';
	  return (typeof a === 'string' || a instanceof String);
	};
	
	/**
	 * Check if var is a function
	 * @static
	 * @param {*} a
	 * @returns {boolean}
	 */
	showdown.helper.isFunction = function (a) {
	  'use strict';
	  var getType = {};
	  return a && getType.toString.call(a) === '[object Function]';
	};
	
	/**
	 * isArray helper function
	 * @static
	 * @param {*} a
	 * @returns {boolean}
	 */
	showdown.helper.isArray = function (a) {
	  'use strict';
	  return a.constructor === Array;
	};
	
	/**
	 * Check if value is undefined
	 * @static
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	 */
	showdown.helper.isUndefined = function (value) {
	  'use strict';
	  return typeof value === 'undefined';
	};
	
	/**
	 * ForEach helper function
	 * Iterates over Arrays and Objects (own properties only)
	 * @static
	 * @param {*} obj
	 * @param {function} callback Accepts 3 params: 1. value, 2. key, 3. the original array/object
	 */
	showdown.helper.forEach = function (obj, callback) {
	  'use strict';
	  // check if obj is defined
	  if (showdown.helper.isUndefined(obj)) {
	    throw new Error('obj param is required');
	  }
	
	  if (showdown.helper.isUndefined(callback)) {
	    throw new Error('callback param is required');
	  }
	
	  if (!showdown.helper.isFunction(callback)) {
	    throw new Error('callback param must be a function/closure');
	  }
	
	  if (typeof obj.forEach === 'function') {
	    obj.forEach(callback);
	  } else if (showdown.helper.isArray(obj)) {
	    for (var i = 0; i < obj.length; i++) {
	      callback(obj[i], i, obj);
	    }
	  } else if (typeof (obj) === 'object') {
	    for (var prop in obj) {
	      if (obj.hasOwnProperty(prop)) {
	        callback(obj[prop], prop, obj);
	      }
	    }
	  } else {
	    throw new Error('obj does not seem to be an array or an iterable object');
	  }
	};
	
	/**
	 * Standardidize extension name
	 * @static
	 * @param {string} s extension name
	 * @returns {string}
	 */
	showdown.helper.stdExtName = function (s) {
	  'use strict';
	  return s.replace(/[_?*+\/\\.^-]/g, '').replace(/\s/g, '').toLowerCase();
	};
	
	function escapeCharactersCallback (wholeMatch, m1) {
	  'use strict';
	  var charCodeToEscape = m1.charCodeAt(0);
	  return '¨E' + charCodeToEscape + 'E';
	}
	
	/**
	 * Callback used to escape characters when passing through String.replace
	 * @static
	 * @param {string} wholeMatch
	 * @param {string} m1
	 * @returns {string}
	 */
	showdown.helper.escapeCharactersCallback = escapeCharactersCallback;
	
	/**
	 * Escape characters in a string
	 * @static
	 * @param {string} text
	 * @param {string} charsToEscape
	 * @param {boolean} afterBackslash
	 * @returns {XML|string|void|*}
	 */
	showdown.helper.escapeCharacters = function (text, charsToEscape, afterBackslash) {
	  'use strict';
	  // First we have to escape the escape characters so that
	  // we can build a character class out of them
	  var regexString = '([' + charsToEscape.replace(/([\[\]\\])/g, '\\$1') + '])';
	
	  if (afterBackslash) {
	    regexString = '\\\\' + regexString;
	  }
	
	  var regex = new RegExp(regexString, 'g');
	  text = text.replace(regex, escapeCharactersCallback);
	
	  return text;
	};
	
	var rgxFindMatchPos = function (str, left, right, flags) {
	  'use strict';
	  var f = flags || '',
	      g = f.indexOf('g') > -1,
	      x = new RegExp(left + '|' + right, 'g' + f.replace(/g/g, '')),
	      l = new RegExp(left, f.replace(/g/g, '')),
	      pos = [],
	      t, s, m, start, end;
	
	  do {
	    t = 0;
	    while ((m = x.exec(str))) {
	      if (l.test(m[0])) {
	        if (!(t++)) {
	          s = x.lastIndex;
	          start = s - m[0].length;
	        }
	      } else if (t) {
	        if (!--t) {
	          end = m.index + m[0].length;
	          var obj = {
	            left: {start: start, end: s},
	            match: {start: s, end: m.index},
	            right: {start: m.index, end: end},
	            wholeMatch: {start: start, end: end}
	          };
	          pos.push(obj);
	          if (!g) {
	            return pos;
	          }
	        }
	      }
	    }
	  } while (t && (x.lastIndex = s));
	
	  return pos;
	};
	
	/**
	 * matchRecursiveRegExp
	 *
	 * (c) 2007 Steven Levithan <stevenlevithan.com>
	 * MIT License
	 *
	 * Accepts a string to search, a left and right format delimiter
	 * as regex patterns, and optional regex flags. Returns an array
	 * of matches, allowing nested instances of left/right delimiters.
	 * Use the "g" flag to return all matches, otherwise only the
	 * first is returned. Be careful to ensure that the left and
	 * right format delimiters produce mutually exclusive matches.
	 * Backreferences are not supported within the right delimiter
	 * due to how it is internally combined with the left delimiter.
	 * When matching strings whose format delimiters are unbalanced
	 * to the left or right, the output is intentionally as a
	 * conventional regex library with recursion support would
	 * produce, e.g. "<<x>" and "<x>>" both produce ["x"] when using
	 * "<" and ">" as the delimiters (both strings contain a single,
	 * balanced instance of "<x>").
	 *
	 * examples:
	 * matchRecursiveRegExp("test", "\\(", "\\)")
	 * returns: []
	 * matchRecursiveRegExp("<t<<e>><s>>t<>", "<", ">", "g")
	 * returns: ["t<<e>><s>", ""]
	 * matchRecursiveRegExp("<div id=\"x\">test</div>", "<div\\b[^>]*>", "</div>", "gi")
	 * returns: ["test"]
	 */
	showdown.helper.matchRecursiveRegExp = function (str, left, right, flags) {
	  'use strict';
	
	  var matchPos = rgxFindMatchPos (str, left, right, flags),
	      results = [];
	
	  for (var i = 0; i < matchPos.length; ++i) {
	    results.push([
	      str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
	      str.slice(matchPos[i].match.start, matchPos[i].match.end),
	      str.slice(matchPos[i].left.start, matchPos[i].left.end),
	      str.slice(matchPos[i].right.start, matchPos[i].right.end)
	    ]);
	  }
	  return results;
	};
	
	/**
	 *
	 * @param {string} str
	 * @param {string|function} replacement
	 * @param {string} left
	 * @param {string} right
	 * @param {string} flags
	 * @returns {string}
	 */
	showdown.helper.replaceRecursiveRegExp = function (str, replacement, left, right, flags) {
	  'use strict';
	
	  if (!showdown.helper.isFunction(replacement)) {
	    var repStr = replacement;
	    replacement = function () {
	      return repStr;
	    };
	  }
	
	  var matchPos = rgxFindMatchPos(str, left, right, flags),
	      finalStr = str,
	      lng = matchPos.length;
	
	  if (lng > 0) {
	    var bits = [];
	    if (matchPos[0].wholeMatch.start !== 0) {
	      bits.push(str.slice(0, matchPos[0].wholeMatch.start));
	    }
	    for (var i = 0; i < lng; ++i) {
	      bits.push(
	        replacement(
	          str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
	          str.slice(matchPos[i].match.start, matchPos[i].match.end),
	          str.slice(matchPos[i].left.start, matchPos[i].left.end),
	          str.slice(matchPos[i].right.start, matchPos[i].right.end)
	        )
	      );
	      if (i < lng - 1) {
	        bits.push(str.slice(matchPos[i].wholeMatch.end, matchPos[i + 1].wholeMatch.start));
	      }
	    }
	    if (matchPos[lng - 1].wholeMatch.end < str.length) {
	      bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
	    }
	    finalStr = bits.join('');
	  }
	  return finalStr;
	};
	
	/**
	 * Returns the index within the passed String object of the first occurrence of the specified regex,
	 * starting the search at fromIndex. Returns -1 if the value is not found.
	 *
	 * @param {string} str string to search
	 * @param {RegExp} regex Regular expression to search
	 * @param {int} [fromIndex = 0] Index to start the search
	 * @returns {Number}
	 * @throws InvalidArgumentError
	 */
	showdown.helper.regexIndexOf = function (str, regex, fromIndex) {
	  'use strict';
	  if (!showdown.helper.isString(str)) {
	    throw 'InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string';
	  }
	  if (regex instanceof RegExp === false) {
	    throw 'InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp';
	  }
	  var indexOf = str.substring(fromIndex || 0).search(regex);
	  return (indexOf >= 0) ? (indexOf + (fromIndex || 0)) : indexOf;
	};
	
	/**
	 * Splits the passed string object at the defined index, and returns an array composed of the two substrings
	 * @param {string} str string to split
	 * @param {int} index index to split string at
	 * @returns {[string,string]}
	 * @throws InvalidArgumentError
	 */
	showdown.helper.splitAtIndex = function (str, index) {
	  'use strict';
	  if (!showdown.helper.isString(str)) {
	    throw 'InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string';
	  }
	  return [str.substring(0, index), str.substring(index)];
	};
	
	/**
	 * Obfuscate an e-mail address through the use of Character Entities,
	 * transforming ASCII characters into their equivalent decimal or hex entities.
	 *
	 * Since it has a random component, subsequent calls to this function produce different results
	 *
	 * @param {string} mail
	 * @returns {string}
	 */
	showdown.helper.encodeEmailAddress = function (mail) {
	  'use strict';
	  var encode = [
	    function (ch) {
	      return '&#' + ch.charCodeAt(0) + ';';
	    },
	    function (ch) {
	      return '&#x' + ch.charCodeAt(0).toString(16) + ';';
	    },
	    function (ch) {
	      return ch;
	    }
	  ];
	
	  mail = mail.replace(/./g, function (ch) {
	    if (ch === '@') {
	      // this *must* be encoded. I insist.
	      ch = encode[Math.floor(Math.random() * 2)](ch);
	    } else {
	      var r = Math.random();
	      // roughly 10% raw, 45% hex, 45% dec
	      ch = (
	        r > 0.9 ? encode[2](ch) : r > 0.45 ? encode[1](ch) : encode[0](ch)
	      );
	    }
	    return ch;
	  });
	
	  return mail;
	};
	
	/**
	 * POLYFILLS
	 */
	// use this instead of builtin is undefined for IE8 compatibility
	if (typeof(console) === 'undefined') {
	  console = {
	    warn: function (msg) {
	      'use strict';
	      alert(msg);
	    },
	    log: function (msg) {
	      'use strict';
	      alert(msg);
	    },
	    error: function (msg) {
	      'use strict';
	      throw msg;
	    }
	  };
	}
	
	/**
	 * Common regexes.
	 * We declare some common regexes to improve performance
	 */
	showdown.helper.regexes = {
	  asteriskAndDash: /([*_])/g
	};
	
	/**
	 * Created by Estevao on 31-05-2015.
	 */
	
	/**
	 * Showdown Converter class
	 * @class
	 * @param {object} [converterOptions]
	 * @returns {Converter}
	 */
	showdown.Converter = function (converterOptions) {
	  'use strict';
	
	  var
	      /**
	       * Options used by this converter
	       * @private
	       * @type {{}}
	       */
	      options = {},
	
	      /**
	       * Language extensions used by this converter
	       * @private
	       * @type {Array}
	       */
	      langExtensions = [],
	
	      /**
	       * Output modifiers extensions used by this converter
	       * @private
	       * @type {Array}
	       */
	      outputModifiers = [],
	
	      /**
	       * Event listeners
	       * @private
	       * @type {{}}
	       */
	      listeners = {},
	
	      /**
	       * The flavor set in this converter
	       */
	      setConvFlavor = setFlavor;
	
	  _constructor();
	
	  /**
	   * Converter constructor
	   * @private
	   */
	  function _constructor () {
	    converterOptions = converterOptions || {};
	
	    for (var gOpt in globalOptions) {
	      if (globalOptions.hasOwnProperty(gOpt)) {
	        options[gOpt] = globalOptions[gOpt];
	      }
	    }
	
	    // Merge options
	    if (typeof converterOptions === 'object') {
	      for (var opt in converterOptions) {
	        if (converterOptions.hasOwnProperty(opt)) {
	          options[opt] = converterOptions[opt];
	        }
	      }
	    } else {
	      throw Error('Converter expects the passed parameter to be an object, but ' + typeof converterOptions +
	      ' was passed instead.');
	    }
	
	    if (options.extensions) {
	      showdown.helper.forEach(options.extensions, _parseExtension);
	    }
	  }
	
	  /**
	   * Parse extension
	   * @param {*} ext
	   * @param {string} [name='']
	   * @private
	   */
	  function _parseExtension (ext, name) {
	
	    name = name || null;
	    // If it's a string, the extension was previously loaded
	    if (showdown.helper.isString(ext)) {
	      ext = showdown.helper.stdExtName(ext);
	      name = ext;
	
	      // LEGACY_SUPPORT CODE
	      if (showdown.extensions[ext]) {
	        console.warn('DEPRECATION WARNING: ' + ext + ' is an old extension that uses a deprecated loading method.' +
	          'Please inform the developer that the extension should be updated!');
	        legacyExtensionLoading(showdown.extensions[ext], ext);
	        return;
	      // END LEGACY SUPPORT CODE
	
	      } else if (!showdown.helper.isUndefined(extensions[ext])) {
	        ext = extensions[ext];
	
	      } else {
	        throw Error('Extension "' + ext + '" could not be loaded. It was either not found or is not a valid extension.');
	      }
	    }
	
	    if (typeof ext === 'function') {
	      ext = ext();
	    }
	
	    if (!showdown.helper.isArray(ext)) {
	      ext = [ext];
	    }
	
	    var validExt = validate(ext, name);
	    if (!validExt.valid) {
	      throw Error(validExt.error);
	    }
	
	    for (var i = 0; i < ext.length; ++i) {
	      switch (ext[i].type) {
	
	        case 'lang':
	          langExtensions.push(ext[i]);
	          break;
	
	        case 'output':
	          outputModifiers.push(ext[i]);
	          break;
	      }
	      if (ext[i].hasOwnProperty('listeners')) {
	        for (var ln in ext[i].listeners) {
	          if (ext[i].listeners.hasOwnProperty(ln)) {
	            listen(ln, ext[i].listeners[ln]);
	          }
	        }
	      }
	    }
	
	  }
	
	  /**
	   * LEGACY_SUPPORT
	   * @param {*} ext
	   * @param {string} name
	   */
	  function legacyExtensionLoading (ext, name) {
	    if (typeof ext === 'function') {
	      ext = ext(new showdown.Converter());
	    }
	    if (!showdown.helper.isArray(ext)) {
	      ext = [ext];
	    }
	    var valid = validate(ext, name);
	
	    if (!valid.valid) {
	      throw Error(valid.error);
	    }
	
	    for (var i = 0; i < ext.length; ++i) {
	      switch (ext[i].type) {
	        case 'lang':
	          langExtensions.push(ext[i]);
	          break;
	        case 'output':
	          outputModifiers.push(ext[i]);
	          break;
	        default:// should never reach here
	          throw Error('Extension loader error: Type unrecognized!!!');
	      }
	    }
	  }
	
	  /**
	   * Listen to an event
	   * @param {string} name
	   * @param {function} callback
	   */
	  function listen (name, callback) {
	    if (!showdown.helper.isString(name)) {
	      throw Error('Invalid argument in converter.listen() method: name must be a string, but ' + typeof name + ' given');
	    }
	
	    if (typeof callback !== 'function') {
	      throw Error('Invalid argument in converter.listen() method: callback must be a function, but ' + typeof callback + ' given');
	    }
	
	    if (!listeners.hasOwnProperty(name)) {
	      listeners[name] = [];
	    }
	    listeners[name].push(callback);
	  }
	
	  function rTrimInputText (text) {
	    var rsp = text.match(/^\s*/)[0].length,
	        rgx = new RegExp('^\\s{0,' + rsp + '}', 'gm');
	    return text.replace(rgx, '');
	  }
	
	  /**
	   * Dispatch an event
	   * @private
	   * @param {string} evtName Event name
	   * @param {string} text Text
	   * @param {{}} options Converter Options
	   * @param {{}} globals
	   * @returns {string}
	   */
	  this._dispatch = function dispatch (evtName, text, options, globals) {
	    if (listeners.hasOwnProperty(evtName)) {
	      for (var ei = 0; ei < listeners[evtName].length; ++ei) {
	        var nText = listeners[evtName][ei](evtName, text, this, options, globals);
	        if (nText && typeof nText !== 'undefined') {
	          text = nText;
	        }
	      }
	    }
	    return text;
	  };
	
	  /**
	   * Listen to an event
	   * @param {string} name
	   * @param {function} callback
	   * @returns {showdown.Converter}
	   */
	  this.listen = function (name, callback) {
	    listen(name, callback);
	    return this;
	  };
	
	  /**
	   * Converts a markdown string into HTML
	   * @param {string} text
	   * @returns {*}
	   */
	  this.makeHtml = function (text) {
	    //check if text is not falsy
	    if (!text) {
	      return text;
	    }
	
	    var globals = {
	      gHtmlBlocks:     [],
	      gHtmlMdBlocks:   [],
	      gHtmlSpans:      [],
	      gUrls:           {},
	      gTitles:         {},
	      gDimensions:     {},
	      gListLevel:      0,
	      hashLinkCounts:  {},
	      langExtensions:  langExtensions,
	      outputModifiers: outputModifiers,
	      converter:       this,
	      ghCodeBlocks:    []
	    };
	
	    // This lets us use ¨ trema as an escape char to avoid md5 hashes
	    // The choice of character is arbitrary; anything that isn't
	    // magic in Markdown will work.
	    text = text.replace(/¨/g, '¨T');
	
	    // Replace $ with ¨D
	    // RegExp interprets $ as a special character
	    // when it's in a replacement string
	    text = text.replace(/\$/g, '¨D');
	
	    // Standardize line endings
	    text = text.replace(/\r\n/g, '\n'); // DOS to Unix
	    text = text.replace(/\r/g, '\n'); // Mac to Unix
	
	    // Stardardize line spaces (nbsp causes trouble in older browsers and some regex flavors)
	    text = text.replace(/\u00A0/g, ' ');
	
	    if (options.smartIndentationFix) {
	      text = rTrimInputText(text);
	    }
	
	    // Make sure text begins and ends with a couple of newlines:
	    text = '\n\n' + text + '\n\n';
	
	    // detab
	    text = showdown.subParser('detab')(text, options, globals);
	
	    /**
	     * Strip any lines consisting only of spaces and tabs.
	     * This makes subsequent regexs easier to write, because we can
	     * match consecutive blank lines with /\n+/ instead of something
	     * contorted like /[ \t]*\n+/
	     */
	    text = text.replace(/^[ \t]+$/mg, '');
	
	    //run languageExtensions
	    showdown.helper.forEach(langExtensions, function (ext) {
	      text = showdown.subParser('runExtension')(ext, text, options, globals);
	    });
	
	    // run the sub parsers
	    text = showdown.subParser('hashPreCodeTags')(text, options, globals);
	    text = showdown.subParser('githubCodeBlocks')(text, options, globals);
	    text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
	    text = showdown.subParser('hashCodeTags')(text, options, globals);
	    text = showdown.subParser('stripLinkDefinitions')(text, options, globals);
	    text = showdown.subParser('blockGamut')(text, options, globals);
	    text = showdown.subParser('unhashHTMLSpans')(text, options, globals);
	    text = showdown.subParser('unescapeSpecialChars')(text, options, globals);
	
	    // attacklab: Restore dollar signs
	    text = text.replace(/¨D/g, '$$');
	
	    // attacklab: Restore tremas
	    text = text.replace(/¨T/g, '¨');
	
	    // Run output modifiers
	    showdown.helper.forEach(outputModifiers, function (ext) {
	      text = showdown.subParser('runExtension')(ext, text, options, globals);
	    });
	
	    return text;
	  };
	
	  /**
	   * Set an option of this Converter instance
	   * @param {string} key
	   * @param {*} value
	   */
	  this.setOption = function (key, value) {
	    options[key] = value;
	  };
	
	  /**
	   * Get the option of this Converter instance
	   * @param {string} key
	   * @returns {*}
	   */
	  this.getOption = function (key) {
	    return options[key];
	  };
	
	  /**
	   * Get the options of this Converter instance
	   * @returns {{}}
	   */
	  this.getOptions = function () {
	    return options;
	  };
	
	  /**
	   * Add extension to THIS converter
	   * @param {{}} extension
	   * @param {string} [name=null]
	   */
	  this.addExtension = function (extension, name) {
	    name = name || null;
	    _parseExtension(extension, name);
	  };
	
	  /**
	   * Use a global registered extension with THIS converter
	   * @param {string} extensionName Name of the previously registered extension
	   */
	  this.useExtension = function (extensionName) {
	    _parseExtension(extensionName);
	  };
	
	  /**
	   * Set the flavor THIS converter should use
	   * @param {string} name
	   */
	  this.setFlavor = function (name) {
	    if (!flavor.hasOwnProperty(name)) {
	      throw Error(name + ' flavor was not found');
	    }
	    var preset = flavor[name];
	    setConvFlavor = name;
	    for (var option in preset) {
	      if (preset.hasOwnProperty(option)) {
	        options[option] = preset[option];
	      }
	    }
	  };
	
	  /**
	   * Get the currently set flavor of this converter
	   * @returns {string}
	   */
	  this.getFlavor = function () {
	    return setConvFlavor;
	  };
	
	  /**
	   * Remove an extension from THIS converter.
	   * Note: This is a costly operation. It's better to initialize a new converter
	   * and specify the extensions you wish to use
	   * @param {Array} extension
	   */
	  this.removeExtension = function (extension) {
	    if (!showdown.helper.isArray(extension)) {
	      extension = [extension];
	    }
	    for (var a = 0; a < extension.length; ++a) {
	      var ext = extension[a];
	      for (var i = 0; i < langExtensions.length; ++i) {
	        if (langExtensions[i] === ext) {
	          langExtensions[i].splice(i, 1);
	        }
	      }
	      for (var ii = 0; ii < outputModifiers.length; ++i) {
	        if (outputModifiers[ii] === ext) {
	          outputModifiers[ii].splice(i, 1);
	        }
	      }
	    }
	  };
	
	  /**
	   * Get all extension of THIS converter
	   * @returns {{language: Array, output: Array}}
	   */
	  this.getAllExtensions = function () {
	    return {
	      language: langExtensions,
	      output: outputModifiers
	    };
	  };
	};
	
	/**
	 * Turn Markdown link shortcuts into XHTML <a> tags.
	 */
	showdown.subParser('anchors', function (text, options, globals) {
	  'use strict';
	
	  text = globals.converter._dispatch('anchors.before', text, options, globals);
	
	  var writeAnchorTag = function (wholeMatch, linkText, linkId, url, m5, m6, title) {
	    if (showdown.helper.isUndefined(title)) {
	      title = '';
	    }
	    linkId = linkId.toLowerCase();
	
	    // Special case for explicit empty url
	    if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
	      url = '';
	    } else if (!url) {
	      if (!linkId) {
	        // lower-case and turn embedded newlines into spaces
	        linkId = linkText.toLowerCase().replace(/ ?\n/g, ' ');
	      }
	      url = '#' + linkId;
	
	      if (!showdown.helper.isUndefined(globals.gUrls[linkId])) {
	        url = globals.gUrls[linkId];
	        if (!showdown.helper.isUndefined(globals.gTitles[linkId])) {
	          title = globals.gTitles[linkId];
	        }
	      } else {
	        return wholeMatch;
	      }
	    }
	
	    //url = showdown.helper.escapeCharacters(url, '*_', false); // replaced line to improve performance
	    url = url.replace(showdown.helper.regexes.asteriskAndDash, showdown.helper.escapeCharactersCallback);
	
	    var result = '<a href="' + url + '"';
	
	    if (title !== '' && title !== null) {
	      title = title.replace(/"/g, '&quot;');
	      //title = showdown.helper.escapeCharacters(title, '*_', false); // replaced line to improve performance
	      title = title.replace(showdown.helper.regexes.asteriskAndDash, showdown.helper.escapeCharactersCallback);
	      result += ' title="' + title + '"';
	    }
	
	    if (options.openLinksInNewWindow) {
	      // escaped _
	      result += ' target="¨E95Eblank"';
	    }
	
	    result += '>' + linkText + '</a>';
	
	    return result;
	  };
	
	  // First, handle reference-style links: [link text] [id]
	  text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, writeAnchorTag);
	
	  // Next, inline-style links: [link text](url "optional title")
	  // cases with crazy urls like ./image/cat1).png
	  text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
	    writeAnchorTag);
	
	  // normal cases
	  text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
	                      writeAnchorTag);
	
	  // handle reference-style shortcuts: [link text]
	  // These must come last in case you've also got [link test][1]
	  // or [link test](/foo)
	  text = text.replace(/\[([^\[\]]+)]()()()()()/g, writeAnchorTag);
	
	  // Lastly handle GithubMentions if option is enabled
	  if (options.ghMentions) {
	    text = text.replace(/(^|\s)(\\)?(@([a-z\d\-]+))(?=[.!?;,[\]()]|\s|$)/gmi, function (wm, st, escape, mentions, username) {
	      if (escape === '\\') {
	        return st + mentions;
	      }
	
	      //check if options.ghMentionsLink is a string
	      if (!showdown.helper.isString(options.ghMentionsLink)) {
	        throw new Error('ghMentionsLink option must be a string');
	      }
	      var lnk = options.ghMentionsLink.replace(/\{u}/g, username),
	          target = '';
	      if (options.openLinksInNewWindow) {
	        target = ' target="¨E95Eblank"';
	      }
	      return st + '<a href="' + lnk + '"' + target + '>' + mentions + '</a>';
	    });
	  }
	
	  text = globals.converter._dispatch('anchors.after', text, options, globals);
	  return text;
	});
	
	// url allowed chars [a-z\d_.~:/?#[]@!$&'()*+,;=-]
	
	var simpleURLRegex  = /\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)()(?=\s|$)(?!["<>])/gi,
	    simpleURLRegex2 = /\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]]?)(?=\s|$)(?!["<>])/gi,
	    //simpleURLRegex3 = /\b(((https?|ftp):\/\/|www\.)[a-z\d.-]+\.[a-z\d_.~:/?#\[\]@!$&'()*+,;=-]+?)([.!?()]?)(?=\s|$)(?!["<>])/gi,
	    delimUrlRegex   = /<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>/gi,
	    simpleMailRegex = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,
	    delimMailRegex  = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
	
	    replaceLink = function (options) {
	      'use strict';
	
	      return function (wm, link, m2, m3, trailingPunctuation) {
	        var lnkTxt = link,
	            append = '',
	            target = '';
	        if (/^www\./i.test(link)) {
	          link = link.replace(/^www\./i, 'http://www.');
	        }
	        if (options.excludeTrailingPunctuationFromURLs && trailingPunctuation) {
	          append = trailingPunctuation;
	        }
	        if (options.openLinksInNewWindow) {
	          target = ' target="¨E95Eblank"';
	        }
	        return '<a href="' + link + '"' + target + '>' + lnkTxt + '</a>' + append;
	      };
	    },
	
	    replaceMail = function (options, globals) {
	      'use strict';
	      return function (wholeMatch, b, mail) {
	        var href = 'mailto:';
	        b = b || '';
	        mail = showdown.subParser('unescapeSpecialChars')(mail, options, globals);
	        if (options.encodeEmails) {
	          href = showdown.helper.encodeEmailAddress(href + mail);
	          mail = showdown.helper.encodeEmailAddress(mail);
	        } else {
	          href = href + mail;
	        }
	        return b + '<a href="' + href + '">' + mail + '</a>';
	      };
	    };
	
	showdown.subParser('autoLinks', function (text, options, globals) {
	  'use strict';
	
	  text = globals.converter._dispatch('autoLinks.before', text, options, globals);
	
	  text = text.replace(delimUrlRegex, replaceLink(options));
	  text = text.replace(delimMailRegex, replaceMail(options, globals));
	
	  text = globals.converter._dispatch('autoLinks.after', text, options, globals);
	
	  return text;
	});
	
	showdown.subParser('simplifiedAutoLinks', function (text, options, globals) {
	  'use strict';
	
	  if (!options.simplifiedAutoLink) {
	    return text;
	  }
	
	  text = globals.converter._dispatch('simplifiedAutoLinks.before', text, options, globals);
	
	  if (options.excludeTrailingPunctuationFromURLs) {
	    text = text.replace(simpleURLRegex2, replaceLink(options));
	  } else {
	    text = text.replace(simpleURLRegex, replaceLink(options));
	  }
	  text = text.replace(simpleMailRegex, replaceMail(options, globals));
	
	  text = globals.converter._dispatch('simplifiedAutoLinks.after', text, options, globals);
	
	  return text;
	});
	
	/**
	 * These are all the transformations that form block-level
	 * tags like paragraphs, headers, and list items.
	 */
	showdown.subParser('blockGamut', function (text, options, globals) {
	  'use strict';
	
	  text = globals.converter._dispatch('blockGamut.before', text, options, globals);
	
	  // we parse blockquotes first so that we can have headings and hrs
	  // inside blockquotes
	  text = showdown.subParser('blockQuotes')(text, options, globals);
	  text = showdown.subParser('headers')(text, options, globals);
	
	  // Do Horizontal Rules:
	  text = showdown.subParser('horizontalRule')(text, options, globals);
	
	  text = showdown.subParser('lists')(text, options, globals);
	  text = showdown.subParser('codeBlocks')(text, options, globals);
	  text = showdown.subParser('tables')(text, options, globals);
	
	  // We already ran _HashHTMLBlocks() before, in Markdown(), but that
	  // was to escape raw HTML in the original Markdown source. This time,
	  // we're escaping the markup we've just created, so that we don't wrap
	  // <p> tags around block-level tags.
	  text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
	  text = showdown.subParser('paragraphs')(text, options, globals);
	
	  text = globals.converter._dispatch('blockGamut.after', text, options, globals);
	
	  return text;
	});
	
	showdown.subParser('blockQuotes', function (text, options, globals) {
	  'use strict';
	
	  text = globals.converter._dispatch('blockQuotes.before', text, options, globals);
	
	  text = text.replace(/((^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm, function (wholeMatch, m1) {
	    var bq = m1;
	
	    // attacklab: hack around Konqueror 3.5.4 bug:
	    // "----------bug".replace(/^-/g,"") == "bug"
	    bq = bq.replace(/^[ \t]*>[ \t]?/gm, '¨0'); // trim one level of quoting
	
	    // attacklab: clean up hack
	    bq = bq.replace(/¨0/g, '');
	
	    bq = bq.replace(/^[ \t]+$/gm, ''); // trim whitespace-only lines
	    bq = showdown.subParser('githubCodeBlocks')(bq, options, globals);
	    bq = showdown.subParser('blockGamut')(bq, options, globals); // recurse
	
	    bq = bq.replace(/(^|\n)/g, '$1  ');
	    // These leading spaces screw with <pre> content, so we need to fix that:
	    bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (wholeMatch, m1) {
	      var pre = m1;
	      // attacklab: hack around Konqueror 3.5.4 bug:
	      pre = pre.replace(/^  /mg, '¨0');
	      pre = pre.replace(/¨0/g, '');
	      return pre;
	    });
	
	    return showdown.subParser('hashBlock')('<blockquote>\n' + bq + '\n</blockquote>', options, globals);
	  });
	
	  text = globals.converter._dispatch('blockQuotes.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Process Markdown `<pre><code>` blocks.
	 */
	showdown.subParser('codeBlocks', function (text, options, globals) {
	  'use strict';
	
	  text = globals.converter._dispatch('codeBlocks.before', text, options, globals);
	
	  // sentinel workarounds for lack of \A and \Z, safari\khtml bug
	  text += '¨0';
	
	  var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
	  text = text.replace(pattern, function (wholeMatch, m1, m2) {
	    var codeblock = m1,
	        nextChar = m2,
	        end = '\n';
	
	    codeblock = showdown.subParser('outdent')(codeblock, options, globals);
	    codeblock = showdown.subParser('encodeCode')(codeblock, options, globals);
	    codeblock = showdown.subParser('detab')(codeblock, options, globals);
	    codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
	    codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing newlines
	
	    if (options.omitExtraWLInCodeBlocks) {
	      end = '';
	    }
	
	    codeblock = '<pre><code>' + codeblock + end + '</code></pre>';
	
	    return showdown.subParser('hashBlock')(codeblock, options, globals) + nextChar;
	  });
	
	  // strip sentinel
	  text = text.replace(/¨0/, '');
	
	  text = globals.converter._dispatch('codeBlocks.after', text, options, globals);
	  return text;
	});
	
	/**
	 *
	 *   *  Backtick quotes are used for <code></code> spans.
	 *
	 *   *  You can use multiple backticks as the delimiters if you want to
	 *     include literal backticks in the code span. So, this input:
	 *
	 *         Just type ``foo `bar` baz`` at the prompt.
	 *
	 *       Will translate to:
	 *
	 *         <p>Just type <code>foo `bar` baz</code> at the prompt.</p>
	 *
	 *    There's no arbitrary limit to the number of backticks you
	 *    can use as delimters. If you need three consecutive backticks
	 *    in your code, use four for delimiters, etc.
	 *
	 *  *  You can use spaces to get literal backticks at the edges:
	 *
	 *         ... type `` `bar` `` ...
	 *
	 *       Turns to:
	 *
	 *         ... type <code>`bar`</code> ...
	 */
	showdown.subParser('codeSpans', function (text, options, globals) {
	  'use strict';
	
	  text = globals.converter._dispatch('codeSpans.before', text, options, globals);
	
	  if (typeof(text) === 'undefined') {
	    text = '';
	  }
	  text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
	    function (wholeMatch, m1, m2, m3) {
	      var c = m3;
	      c = c.replace(/^([ \t]*)/g, '');	// leading whitespace
	      c = c.replace(/[ \t]*$/g, '');	// trailing whitespace
	      c = showdown.subParser('encodeCode')(c, options, globals);
	      return m1 + '<code>' + c + '</code>';
	    }
	  );
	
	  text = globals.converter._dispatch('codeSpans.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Convert all tabs to spaces
	 */
	showdown.subParser('detab', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('detab.before', text, options, globals);
	
	  // expand first n-1 tabs
	  text = text.replace(/\t(?=\t)/g, '    '); // g_tab_width
	
	  // replace the nth with two sentinels
	  text = text.replace(/\t/g, '¨A¨B');
	
	  // use the sentinel to anchor our regex so it doesn't explode
	  text = text.replace(/¨B(.+?)¨A/g, function (wholeMatch, m1) {
	    var leadingText = m1,
	        numSpaces = 4 - leadingText.length % 4;  // g_tab_width
	
	    // there *must* be a better way to do this:
	    for (var i = 0; i < numSpaces; i++) {
	      leadingText += ' ';
	    }
	
	    return leadingText;
	  });
	
	  // clean up sentinels
	  text = text.replace(/¨A/g, '    ');  // g_tab_width
	  text = text.replace(/¨B/g, '');
	
	  text = globals.converter._dispatch('detab.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Smart processing for ampersands and angle brackets that need to be encoded.
	 */
	showdown.subParser('encodeAmpsAndAngles', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('encodeAmpsAndAngles.before', text, options, globals);
	
	  // Ampersand-encoding based entirely on Nat Irons's Amputator MT plugin:
	  // http://bumppo.net/projects/amputator/
	  text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, '&amp;');
	
	  // Encode naked <'s
	  text = text.replace(/<(?![a-z\/?$!])/gi, '&lt;');
	
	  // Encode <
	  text = text.replace(/</g, '&lt;');
	
	  // Encode >
	  text = text.replace(/>/g, '&gt;');
	
	  text = globals.converter._dispatch('encodeAmpsAndAngles.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Returns the string, with after processing the following backslash escape sequences.
	 *
	 * attacklab: The polite way to do this is with the new escapeCharacters() function:
	 *
	 *    text = escapeCharacters(text,"\\",true);
	 *    text = escapeCharacters(text,"`*_{}[]()>#+-.!",true);
	 *
	 * ...but we're sidestepping its use of the (slow) RegExp constructor
	 * as an optimization for Firefox.  This function gets called a LOT.
	 */
	showdown.subParser('encodeBackslashEscapes', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('encodeBackslashEscapes.before', text, options, globals);
	
	  text = text.replace(/\\(\\)/g, showdown.helper.escapeCharactersCallback);
	  text = text.replace(/\\([`*_{}\[\]()>#+.!~=|-])/g, showdown.helper.escapeCharactersCallback);
	
	  text = globals.converter._dispatch('encodeBackslashEscapes.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Encode/escape certain characters inside Markdown code runs.
	 * The point is that in code, these characters are literals,
	 * and lose their special Markdown meanings.
	 */
	showdown.subParser('encodeCode', function (text, options, globals) {
	  'use strict';
	
	  text = globals.converter._dispatch('encodeCode.before', text, options, globals);
	
	  // Encode all ampersands; HTML entities are not
	  // entities within a Markdown code span.
	  text = text
	    .replace(/&/g, '&amp;')
	  // Do the angle bracket song and dance:
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;')
	  // Now, escape characters that are magic in Markdown:
	    .replace(/([*_{}\[\]\\=~-])/g, showdown.helper.escapeCharactersCallback);
	
	  text = globals.converter._dispatch('encodeCode.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Within tags -- meaning between < and > -- encode [\ ` * _ ~ =] so they
	 * don't conflict with their use in Markdown for code, italics and strong.
	 */
	showdown.subParser('escapeSpecialCharsWithinTagAttributes', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('escapeSpecialCharsWithinTagAttributes.before', text, options, globals);
	
	  // Build a regex to find HTML tags and comments.  See Friedl's
	  // "Mastering Regular Expressions", 2nd Ed., pp. 200-201.
	  var regex = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;
	
	  text = text.replace(regex, function (wholeMatch) {
	    return wholeMatch
	      .replace(/(.)<\/?code>(?=.)/g, '$1`')
	      .replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
	  });
	
	  text = globals.converter._dispatch('escapeSpecialCharsWithinTagAttributes.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Handle github codeblocks prior to running HashHTML so that
	 * HTML contained within the codeblock gets escaped properly
	 * Example:
	 * ```ruby
	 *     def hello_world(x)
	 *       puts "Hello, #{x}"
	 *     end
	 * ```
	 */
	showdown.subParser('githubCodeBlocks', function (text, options, globals) {
	  'use strict';
	
	  // early exit if option is not enabled
	  if (!options.ghCodeBlocks) {
	    return text;
	  }
	
	  text = globals.converter._dispatch('githubCodeBlocks.before', text, options, globals);
	
	  text += '¨0';
	
	  text = text.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g, function (wholeMatch, language, codeblock) {
	    var end = (options.omitExtraWLInCodeBlocks) ? '' : '\n';
	
	    // First parse the github code block
	    codeblock = showdown.subParser('encodeCode')(codeblock, options, globals);
	    codeblock = showdown.subParser('detab')(codeblock, options, globals);
	    codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
	    codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing whitespace
	
	    codeblock = '<pre><code' + (language ? ' class="' + language + ' language-' + language + '"' : '') + '>' + codeblock + end + '</code></pre>';
	
	    codeblock = showdown.subParser('hashBlock')(codeblock, options, globals);
	
	    // Since GHCodeblocks can be false positives, we need to
	    // store the primitive text and the parsed text in a global var,
	    // and then return a token
	    return '\n\n¨G' + (globals.ghCodeBlocks.push({text: wholeMatch, codeblock: codeblock}) - 1) + 'G\n\n';
	  });
	
	  // attacklab: strip sentinel
	  text = text.replace(/¨0/, '');
	
	  return globals.converter._dispatch('githubCodeBlocks.after', text, options, globals);
	});
	
	showdown.subParser('hashBlock', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('hashBlock.before', text, options, globals);
	  text = text.replace(/(^\n+|\n+$)/g, '');
	  text = '\n\n¨K' + (globals.gHtmlBlocks.push(text) - 1) + 'K\n\n';
	  text = globals.converter._dispatch('hashBlock.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Hash and escape <code> elements that should not be parsed as markdown
	 */
	showdown.subParser('hashCodeTags', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('hashCodeTags.before', text, options, globals);
	
	  var repFunc = function (wholeMatch, match, left, right) {
	    var codeblock = left + showdown.subParser('encodeCode')(match, options, globals) + right;
	    return '¨C' + (globals.gHtmlSpans.push(codeblock) - 1) + 'C';
	  };
	
	  // Hash naked <code>
	  text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '<code\\b[^>]*>', '</code>', 'gim');
	
	  text = globals.converter._dispatch('hashCodeTags.after', text, options, globals);
	  return text;
	});
	
	showdown.subParser('hashElement', function (text, options, globals) {
	  'use strict';
	
	  return function (wholeMatch, m1) {
	    var blockText = m1;
	
	    // Undo double lines
	    blockText = blockText.replace(/\n\n/g, '\n');
	    blockText = blockText.replace(/^\n/, '');
	
	    // strip trailing blank lines
	    blockText = blockText.replace(/\n+$/g, '');
	
	    // Replace the element text with a marker ("¨KxK" where x is its key)
	    blockText = '\n\n¨K' + (globals.gHtmlBlocks.push(blockText) - 1) + 'K\n\n';
	
	    return blockText;
	  };
	});
	
	showdown.subParser('hashHTMLBlocks', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('hashHTMLBlocks.before', text, options, globals);
	
	  var blockTags = [
	        'pre',
	        'div',
	        'h1',
	        'h2',
	        'h3',
	        'h4',
	        'h5',
	        'h6',
	        'blockquote',
	        'table',
	        'dl',
	        'ol',
	        'ul',
	        'script',
	        'noscript',
	        'form',
	        'fieldset',
	        'iframe',
	        'math',
	        'style',
	        'section',
	        'header',
	        'footer',
	        'nav',
	        'article',
	        'aside',
	        'address',
	        'audio',
	        'canvas',
	        'figure',
	        'hgroup',
	        'output',
	        'video',
	        'p'
	      ],
	      repFunc = function (wholeMatch, match, left, right) {
	        var txt = wholeMatch;
	        // check if this html element is marked as markdown
	        // if so, it's contents should be parsed as markdown
	        if (left.search(/\bmarkdown\b/) !== -1) {
	          txt = left + globals.converter.makeHtml(match) + right;
	        }
	        return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
	      };
	
	  if (options.backslashEscapesHTMLTags) {
	    // encode backslash escaped HTML tags
	    text = text.replace(/\\<(\/?[^>]+?)>/g, function (wm, inside) {
	      return '&lt;' + inside + '&gt;';
	    });
	  }
	
	  // hash HTML Blocks
	  for (var i = 0; i < blockTags.length; ++i) {
	
	    var opTagPos,
	        rgx1     = new RegExp('^ {0,3}(<' + blockTags[i] + '\\b[^>]*>)', 'im'),
	        patLeft  = '<' + blockTags[i] + '\\b[^>]*>',
	        patRight = '</' + blockTags[i] + '>';
	    // 1. Look for the first position of the first opening HTML tag in the text
	    while ((opTagPos = showdown.helper.regexIndexOf(text, rgx1)) !== -1) {
	
	      // if the HTML tag is \ escaped, we need to escape it and break
	
	
	      //2. Split the text in that position
	      var subTexts = showdown.helper.splitAtIndex(text, opTagPos),
	      //3. Match recursively
	          newSubText1 = showdown.helper.replaceRecursiveRegExp(subTexts[1], repFunc, patLeft, patRight, 'im');
	
	      // prevent an infinite loop
	      if (newSubText1 === subTexts[1]) {
	        break;
	      }
	      text = subTexts[0].concat(newSubText1);
	    }
	  }
	  // HR SPECIAL CASE
	  text = text.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
	    showdown.subParser('hashElement')(text, options, globals));
	
	  // Special case for standalone HTML comments
	  text = showdown.helper.replaceRecursiveRegExp(text, function (txt) {
	    return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
	  }, '^ {0,3}<!--', '-->', 'gm');
	
	  // PHP and ASP-style processor instructions (<?...?> and <%...%>)
	  text = text.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
	    showdown.subParser('hashElement')(text, options, globals));
	
	  text = globals.converter._dispatch('hashHTMLBlocks.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Hash span elements that should not be parsed as markdown
	 */
	showdown.subParser('hashHTMLSpans', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('hashHTMLSpans.before', text, options, globals);
	
	  function hashHTMLSpan (html) {
	    return '¨C' + (globals.gHtmlSpans.push(html) - 1) + 'C';
	  }
	
	  // Hash Self Closing tags
	  text = text.replace(/<[^>]+?\/>/gi, function (wm) {
	    return hashHTMLSpan(wm);
	  });
	
	  // Hash tags without properties
	  text = text.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function (wm) {
	    return hashHTMLSpan(wm);
	  });
	
	  // Hash tags with properties
	  text = text.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function (wm) {
	    return hashHTMLSpan(wm);
	  });
	
	  // Hash self closing tags without />
	  text = text.replace(/<[^>]+?>/gi, function (wm) {
	    return hashHTMLSpan(wm);
	  });
	
	  /*showdown.helper.matchRecursiveRegExp(text, '<code\\b[^>]*>', '</code>', 'gi');*/
	
	  text = globals.converter._dispatch('hashHTMLSpans.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Unhash HTML spans
	 */
	showdown.subParser('unhashHTMLSpans', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('unhashHTMLSpans.before', text, options, globals);
	
	  for (var i = 0; i < globals.gHtmlSpans.length; ++i) {
	    var repText = globals.gHtmlSpans[i],
	        // limiter to prevent infinite loop (assume 10 as limit for recurse)
	        limit = 0;
	
	    while (/¨C(\d+)C/.test(repText)) {
	      var num = RegExp.$1;
	      repText = repText.replace('¨C' + num + 'C', globals.gHtmlSpans[num]);
	      if (limit === 10) {
	        break;
	      }
	      ++limit;
	    }
	    text = text.replace('¨C' + i + 'C', repText);
	  }
	
	  text = globals.converter._dispatch('unhashHTMLSpans.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Hash and escape <pre><code> elements that should not be parsed as markdown
	 */
	showdown.subParser('hashPreCodeTags', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('hashPreCodeTags.before', text, options, globals);
	
	  var repFunc = function (wholeMatch, match, left, right) {
	    // encode html entities
	    var codeblock = left + showdown.subParser('encodeCode')(match, options, globals) + right;
	    return '\n\n¨G' + (globals.ghCodeBlocks.push({text: wholeMatch, codeblock: codeblock}) - 1) + 'G\n\n';
	  };
	
	  // Hash <pre><code>
	  text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>', '^ {0,3}</code>\\s*</pre>', 'gim');
	
	  text = globals.converter._dispatch('hashPreCodeTags.after', text, options, globals);
	  return text;
	});
	
	showdown.subParser('headers', function (text, options, globals) {
	  'use strict';
	
	  text = globals.converter._dispatch('headers.before', text, options, globals);
	
	  var headerLevelStart = (isNaN(parseInt(options.headerLevelStart))) ? 1 : parseInt(options.headerLevelStart),
	      ghHeaderId = options.ghCompatibleHeaderId,
	
	  // Set text-style headers:
	  //	Header 1
	  //	========
	  //
	  //	Header 2
	  //	--------
	  //
	      setextRegexH1 = (options.smoothLivePreview) ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
	      setextRegexH2 = (options.smoothLivePreview) ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
	
	  text = text.replace(setextRegexH1, function (wholeMatch, m1) {
	
	    var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
	        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m1) + '"',
	        hLevel = headerLevelStart,
	        hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
	    return showdown.subParser('hashBlock')(hashBlock, options, globals);
	  });
	
	  text = text.replace(setextRegexH2, function (matchFound, m1) {
	    var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
	        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m1) + '"',
	        hLevel = headerLevelStart + 1,
	        hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
	    return showdown.subParser('hashBlock')(hashBlock, options, globals);
	  });
	
	  // atx-style headers:
	  //  # Header 1
	  //  ## Header 2
	  //  ## Header 2 with closing hashes ##
	  //  ...
	  //  ###### Header 6
	  //
	  var atxStyle = (options.requireSpaceBeforeHeadingText) ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
	
	  text = text.replace(atxStyle, function (wholeMatch, m1, m2) {
	    var hText = m2;
	    if (options.customizedHeaderId) {
	      hText = m2.replace(/\s?\{([^{]+?)}\s*$/, '');
	    }
	
	    var span = showdown.subParser('spanGamut')(hText, options, globals),
	        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m2) + '"',
	        hLevel = headerLevelStart - 1 + m1.length,
	        header = '<h' + hLevel + hID + '>' + span + '</h' + hLevel + '>';
	
	    return showdown.subParser('hashBlock')(header, options, globals);
	  });
	
	  function headerId (m) {
	    var title;
	
	    // It is separate from other options to allow combining prefix and customized
	    if (options.customizedHeaderId) {
	      var match = m.match(/\{([^{]+?)}\s*$/);
	      if (match && match[1]) {
	        m = match[1];
	      }
	    }
	
	    // Prefix id to prevent causing inadvertent pre-existing style matches.
	    if (showdown.helper.isString(options.prefixHeaderId)) {
	      title = options.prefixHeaderId + m;
	    } else if (options.prefixHeaderId === true) {
	      title = 'section ' + m;
	    } else {
	      title = m;
	    }
	
	    if (ghHeaderId) {
	      title = title
	        .replace(/ /g, '-')
	        // replace previously escaped chars (&, ¨ and $)
	        .replace(/&amp;/g, '')
	        .replace(/¨T/g, '')
	        .replace(/¨D/g, '')
	        // replace rest of the chars (&~$ are repeated as they might have been escaped)
	        // borrowed from github's redcarpet (some they should produce similar results)
	        .replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, '')
	        .toLowerCase();
	    } else {
	      title = title
	        .replace(/[^\w]/g, '')
	        .toLowerCase();
	    }
	
	    if (globals.hashLinkCounts[title]) {
	      title = title + '-' + (globals.hashLinkCounts[title]++);
	    } else {
	      globals.hashLinkCounts[title] = 1;
	    }
	    return title;
	  }
	
	  text = globals.converter._dispatch('headers.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Turn Markdown link shortcuts into XHTML <a> tags.
	 */
	showdown.subParser('horizontalRule', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('horizontalRule.before', text, options, globals);
	
	  var key = showdown.subParser('hashBlock')('<hr />', options, globals);
	  text = text.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, key);
	  text = text.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, key);
	  text = text.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, key);
	
	  text = globals.converter._dispatch('horizontalRule.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Turn Markdown image shortcuts into <img> tags.
	 */
	showdown.subParser('images', function (text, options, globals) {
	  'use strict';
	
	  text = globals.converter._dispatch('images.before', text, options, globals);
	
	  var inlineRegExp      = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
	      crazyRegExp       = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,
	      referenceRegExp   = /!\[([^\]]*?)] ?(?:\n *)?\[(.*?)]()()()()()/g,
	      refShortcutRegExp = /!\[([^\[\]]+)]()()()()()/g;
	
	  function writeImageTag (wholeMatch, altText, linkId, url, width, height, m5, title) {
	
	    var gUrls   = globals.gUrls,
	        gTitles = globals.gTitles,
	        gDims   = globals.gDimensions;
	
	    linkId = linkId.toLowerCase();
	
	    if (!title) {
	      title = '';
	    }
	    // Special case for explicit empty url
	    if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
	      url = '';
	
	    } else if (url === '' || url === null) {
	      if (linkId === '' || linkId === null) {
	        // lower-case and turn embedded newlines into spaces
	        linkId = altText.toLowerCase().replace(/ ?\n/g, ' ');
	      }
	      url = '#' + linkId;
	
	      if (!showdown.helper.isUndefined(gUrls[linkId])) {
	        url = gUrls[linkId];
	        if (!showdown.helper.isUndefined(gTitles[linkId])) {
	          title = gTitles[linkId];
	        }
	        if (!showdown.helper.isUndefined(gDims[linkId])) {
	          width = gDims[linkId].width;
	          height = gDims[linkId].height;
	        }
	      } else {
	        return wholeMatch;
	      }
	    }
	
	    altText = altText
	      .replace(/"/g, '&quot;')
	    //altText = showdown.helper.escapeCharacters(altText, '*_', false);
	      .replace(showdown.helper.regexes.asteriskAndDash, showdown.helper.escapeCharactersCallback);
	    //url = showdown.helper.escapeCharacters(url, '*_', false);
	    url = url.replace(showdown.helper.regexes.asteriskAndDash, showdown.helper.escapeCharactersCallback);
	    var result = '<img src="' + url + '" alt="' + altText + '"';
	
	    if (title) {
	      title = title
	        .replace(/"/g, '&quot;')
	      //title = showdown.helper.escapeCharacters(title, '*_', false);
	        .replace(showdown.helper.regexes.asteriskAndDash, showdown.helper.escapeCharactersCallback);
	      result += ' title="' + title + '"';
	    }
	
	    if (width && height) {
	      width  = (width === '*') ? 'auto' : width;
	      height = (height === '*') ? 'auto' : height;
	
	      result += ' width="' + width + '"';
	      result += ' height="' + height + '"';
	    }
	
	    result += ' />';
	
	    return result;
	  }
	
	  // First, handle reference-style labeled images: ![alt text][id]
	  text = text.replace(referenceRegExp, writeImageTag);
	
	  // Next, handle inline images:  ![alt text](url =<width>x<height> "optional title")
	  // cases with crazy urls like ./image/cat1).png
	  text = text.replace(crazyRegExp, writeImageTag);
	
	  // normal cases
	  text = text.replace(inlineRegExp, writeImageTag);
	
	  // handle reference-style shortcuts: |[img text]
	  text = text.replace(refShortcutRegExp, writeImageTag);
	
	  text = globals.converter._dispatch('images.after', text, options, globals);
	  return text;
	});
	
	showdown.subParser('italicsAndBold', function (text, options, globals) {
	  'use strict';
	
	  text = globals.converter._dispatch('italicsAndBold.before', text, options, globals);
	
	  // it's faster to have 3 separate regexes for each case than have just one
	  // because of backtracing, in some cases, it could lead to an exponential effect
	  // called "catastrophic backtrace". Ominous!
	
	  function parseInside (txt, left, right) {
	    if (options.simplifiedAutoLink) {
	      txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
	    }
	    return left + txt + right;
	  }
	
	  // Parse underscores
	  if (options.literalMidWordUnderscores) {
	    text = text.replace(/\b___(\S[\s\S]*)___\b/g, function (wm, txt) {
	      return parseInside (txt, '<strong><em>', '</em></strong>');
	    });
	    text = text.replace(/\b__(\S[\s\S]*)__\b/g, function (wm, txt) {
	      return parseInside (txt, '<strong>', '</strong>');
	    });
	    text = text.replace(/\b_(\S[\s\S]*?)_\b/g, function (wm, txt) {
	      return parseInside (txt, '<em>', '</em>');
	    });
	  } else {
	    text = text.replace(/___(\S[\s\S]*?)___/g, function (wm, m) {
	      return (/\S$/.test(m)) ? parseInside (m, '<strong><em>', '</em></strong>') : wm;
	    });
	    text = text.replace(/__(\S[\s\S]*?)__/g, function (wm, m) {
	      return (/\S$/.test(m)) ? parseInside (m, '<strong>', '</strong>') : wm;
	    });
	    text = text.replace(/_([^\s_][\s\S]*?)_/g, function (wm, m) {
	      // !/^_[^_]/.test(m) - test if it doesn't start with __ (since it seems redundant, we removed it)
	      return (/\S$/.test(m)) ? parseInside (m, '<em>', '</em>') : wm;
	    });
	  }
	
	  // Now parse asterisks
	  if (options.literalMidWordAsterisks) {
	    text = text.trim().replace(/(?:^| +)\*{3}(\S[\s\S]*?)\*{3}(?: +|$)/g, function (wm, txt) {
	      return parseInside (txt, ' <strong><em>', '</em></strong> ');
	    });
	    text = text.trim().replace(/(?:^| +)\*{2}(\S[\s\S]*?)\*{2}(?: +|$)/g, function (wm, txt) {
	      return parseInside (txt, ' <strong>', '</strong> ');
	    });
	    text = text.trim().replace(/(?:^| +)\*{1}(\S[\s\S]*?)\*{1}(?: +|$)/g, function (wm, txt) {
	      return parseInside (txt, ' <em>', '</em>' + (wm.slice(-1) === ' ' ? ' ' : ''));
	    });
	  } else {
	    text = text.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function (wm, m) {
	      return (/\S$/.test(m)) ? parseInside (m, '<strong><em>', '</em></strong>') : wm;
	    });
	    text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, function (wm, m) {
	      return (/\S$/.test(m)) ? parseInside (m, '<strong>', '</strong>') : wm;
	    });
	    text = text.replace(/\*([^\s*][\s\S]*?)\*/g, function (wm, m) {
	      // !/^\*[^*]/.test(m) - test if it doesn't start with ** (since it seems redundant, we removed it)
	      return (/\S$/.test(m)) ? parseInside (m, '<em>', '</em>') : wm;
	    });
	  }
	
	
	  text = globals.converter._dispatch('italicsAndBold.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Form HTML ordered (numbered) and unordered (bulleted) lists.
	 */
	showdown.subParser('lists', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('lists.before', text, options, globals);
	
	  /**
	   * Process the contents of a single ordered or unordered list, splitting it
	   * into individual list items.
	   * @param {string} listStr
	   * @param {boolean} trimTrailing
	   * @returns {string}
	   */
	  function processListItems (listStr, trimTrailing) {
	    // The $g_list_level global keeps track of when we're inside a list.
	    // Each time we enter a list, we increment it; when we leave a list,
	    // we decrement. If it's zero, we're not in a list anymore.
	    //
	    // We do this because when we're not inside a list, we want to treat
	    // something like this:
	    //
	    //    I recommend upgrading to version
	    //    8. Oops, now this line is treated
	    //    as a sub-list.
	    //
	    // As a single paragraph, despite the fact that the second line starts
	    // with a digit-period-space sequence.
	    //
	    // Whereas when we're inside a list (or sub-list), that line will be
	    // treated as the start of a sub-list. What a kludge, huh? This is
	    // an aspect of Markdown's syntax that's hard to parse perfectly
	    // without resorting to mind-reading. Perhaps the solution is to
	    // change the syntax rules such that sub-lists must start with a
	    // starting cardinal number; e.g. "1." or "a.".
	    globals.gListLevel++;
	
	    // trim trailing blank lines:
	    listStr = listStr.replace(/\n{2,}$/, '\n');
	
	    // attacklab: add sentinel to emulate \z
	    listStr += '¨0';
	
	    var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
	        isParagraphed = (/\n[ \t]*\n(?!¨0)/.test(listStr));
	
	    // Since version 1.5, nesting sublists requires 4 spaces (or 1 tab) indentation,
	    // which is a syntax breaking change
	    // activating this option reverts to old behavior
	    if (options.disableForced4SpacesIndentedSublists) {
	      rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
	    }
	
	    listStr = listStr.replace(rgx, function (wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
	      checked = (checked && checked.trim() !== '');
	
	      var item = showdown.subParser('outdent')(m4, options, globals),
	          bulletStyle = '';
	
	      // Support for github tasklists
	      if (taskbtn && options.tasklists) {
	        bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
	        item = item.replace(/^[ \t]*\[(x|X| )?]/m, function () {
	          var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
	          if (checked) {
	            otp += ' checked';
	          }
	          otp += '>';
	          return otp;
	        });
	      }
	
	      // ISSUE #312
	      // This input: - - - a
	      // causes trouble to the parser, since it interprets it as:
	      // <ul><li><li><li>a</li></li></li></ul>
	      // instead of:
	      // <ul><li>- - a</li></ul>
	      // So, to prevent it, we will put a marker (¨A)in the beginning of the line
	      // Kind of hackish/monkey patching, but seems more effective than overcomplicating the list parser
	      item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function (wm2) {
	        return '¨A' + wm2;
	      });
	
	      // m1 - Leading line or
	      // Has a double return (multi paragraph) or
	      // Has sublist
	      if (m1 || (item.search(/\n{2,}/) > -1)) {
	        item = showdown.subParser('githubCodeBlocks')(item, options, globals);
	        item = showdown.subParser('blockGamut')(item, options, globals);
	      } else {
	        // Recursion for sub-lists:
	        item = showdown.subParser('lists')(item, options, globals);
	        item = item.replace(/\n$/, ''); // chomp(item)
	        item = showdown.subParser('hashHTMLBlocks')(item, options, globals);
	
	        // Colapse double linebreaks
	        item = item.replace(/\n\n+/g, '\n\n');
	        if (isParagraphed) {
	          item = showdown.subParser('paragraphs')(item, options, globals);
	        } else {
	          item = showdown.subParser('spanGamut')(item, options, globals);
	        }
	      }
	
	      // now we need to remove the marker (¨A)
	      item = item.replace('¨A', '');
	      // we can finally wrap the line in list item tags
	      item =  '<li' + bulletStyle + '>' + item + '</li>\n';
	
	      return item;
	    });
	
	    // attacklab: strip sentinel
	    listStr = listStr.replace(/¨0/g, '');
	
	    globals.gListLevel--;
	
	    if (trimTrailing) {
	      listStr = listStr.replace(/\s+$/, '');
	    }
	
	    return listStr;
	  }
	
	  /**
	   * Check and parse consecutive lists (better fix for issue #142)
	   * @param {string} list
	   * @param {string} listType
	   * @param {boolean} trimTrailing
	   * @returns {string}
	   */
	  function parseConsecutiveLists (list, listType, trimTrailing) {
	    // check if we caught 2 or more consecutive lists by mistake
	    // we use the counterRgx, meaning if listType is UL we look for OL and vice versa
	    var olRgx = (options.disableForced4SpacesIndentedSublists) ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm,
	        ulRgx = (options.disableForced4SpacesIndentedSublists) ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm,
	        counterRxg = (listType === 'ul') ? olRgx : ulRgx,
	        result = '';
	
	    if (list.search(counterRxg) !== -1) {
	      (function parseCL (txt) {
	        var pos = txt.search(counterRxg);
	        if (pos !== -1) {
	          // slice
	          result += '\n<' + listType + '>\n' + processListItems(txt.slice(0, pos), !!trimTrailing) + '</' + listType + '>\n';
	
	          // invert counterType and listType
	          listType = (listType === 'ul') ? 'ol' : 'ul';
	          counterRxg = (listType === 'ul') ? olRgx : ulRgx;
	
	          //recurse
	          parseCL(txt.slice(pos));
	        } else {
	          result += '\n<' + listType + '>\n' + processListItems(txt, !!trimTrailing) + '</' + listType + '>\n';
	        }
	      })(list);
	    } else {
	      result = '\n<' + listType + '>\n' + processListItems(list, !!trimTrailing) + '</' + listType + '>\n';
	    }
	
	    return result;
	  }
	
	  // add sentinel to hack around khtml/safari bug:
	  // http://bugs.webkit.org/show_bug.cgi?id=11231
	  text += '¨0';
	
	  if (globals.gListLevel) {
	    text = text.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
	      function (wholeMatch, list, m2) {
	        var listType = (m2.search(/[*+-]/g) > -1) ? 'ul' : 'ol';
	        return parseConsecutiveLists(list, listType, true);
	      }
	    );
	  } else {
	    text = text.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
	      function (wholeMatch, m1, list, m3) {
	        var listType = (m3.search(/[*+-]/g) > -1) ? 'ul' : 'ol';
	        return parseConsecutiveLists(list, listType, false);
	      }
	    );
	  }
	
	  // strip sentinel
	  text = text.replace(/¨0/, '');
	  text = globals.converter._dispatch('lists.after', text, options, globals);
	  return text;
	});
	
	/**
	 * Remove one level of line-leading tabs or spaces
	 */
	showdown.subParser('outdent', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('outdent.before', text, options, globals);
	
	  // attacklab: hack around Konqueror 3.5.4 bug:
	  // "----------bug".replace(/^-/g,"") == "bug"
	  text = text.replace(/^(\t|[ ]{1,4})/gm, '¨0'); // attacklab: g_tab_width
	
	  // attacklab: clean up hack
	  text = text.replace(/¨0/g, '');
	
	  text = globals.converter._dispatch('outdent.after', text, options, globals);
	  return text;
	});
	
	/**
	 *
	 */
	showdown.subParser('paragraphs', function (text, options, globals) {
	  'use strict';
	
	  text = globals.converter._dispatch('paragraphs.before', text, options, globals);
	  // Strip leading and trailing lines:
	  text = text.replace(/^\n+/g, '');
	  text = text.replace(/\n+$/g, '');
	
	  var grafs = text.split(/\n{2,}/g),
	      grafsOut = [],
	      end = grafs.length; // Wrap <p> tags
	
	  for (var i = 0; i < end; i++) {
	    var str = grafs[i];
	    // if this is an HTML marker, copy it
	    if (str.search(/¨(K|G)(\d+)\1/g) >= 0) {
	      grafsOut.push(str);
	
	    // test for presence of characters to prevent empty lines being parsed
	    // as paragraphs (resulting in undesired extra empty paragraphs)
	    } else if (str.search(/\S/) >= 0) {
	      str = showdown.subParser('spanGamut')(str, options, globals);
	      str = str.replace(/^([ \t]*)/g, '<p>');
	      str += '</p>';
	      grafsOut.push(str);
	    }
	  }
	
	  /** Unhashify HTML blocks */
	  end = grafsOut.length;
	  for (i = 0; i < end; i++) {
	    var blockText = '',
	        grafsOutIt = grafsOut[i],
	        codeFlag = false;
	    // if this is a marker for an html block...
	    // use RegExp.test instead of string.search because of QML bug
	    while (/¨(K|G)(\d+)\1/.test(grafsOutIt)) {
	      var delim = RegExp.$1,
	          num   = RegExp.$2;
	
	      if (delim === 'K') {
	        blockText = globals.gHtmlBlocks[num];
	      } else {
	        // we need to check if ghBlock is a false positive
	        if (codeFlag) {
	          // use encoded version of all text
	          blockText = showdown.subParser('encodeCode')(globals.ghCodeBlocks[num].text, options, globals);
	        } else {
	          blockText = globals.ghCodeBlocks[num].codeblock;
	        }
	      }
	      blockText = blockText.replace(/\$/g, '$$$$'); // Escape any dollar signs
	
	      grafsOutIt = grafsOutIt.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, blockText);
	      // Check if grafsOutIt is a pre->code
	      if (/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(grafsOutIt)) {
	        codeFlag = true;
	      }
	    }
	    grafsOut[i] = grafsOutIt;
	  }
	  text = grafsOut.join('\n');
	  // Strip leading and trailing lines:
	  text = text.replace(/^\n+/g, '');
	  text = text.replace(/\n+$/g, '');
	  return globals.converter._dispatch('paragraphs.after', text, options, globals);
	});
	
	/**
	 * Run extension
	 */
	showdown.subParser('runExtension', function (ext, text, options, globals) {
	  'use strict';
	
	  if (ext.filter) {
	    text = ext.filter(text, globals.converter, options);
	
	  } else if (ext.regex) {
	    // TODO remove this when old extension loading mechanism is deprecated
	    var re = ext.regex;
	    if (!(re instanceof RegExp)) {
	      re = new RegExp(re, 'g');
	    }
	    text = text.replace(re, ext.replace);
	  }
	
	  return text;
	});
	
	/**
	 * These are all the transformations that occur *within* block-level
	 * tags like paragraphs, headers, and list items.
	 */
	showdown.subParser('spanGamut', function (text, options, globals) {
	  'use strict';
	
	  text = globals.converter._dispatch('spanGamut.before', text, options, globals);
	  text = showdown.subParser('codeSpans')(text, options, globals);
	  text = showdown.subParser('escapeSpecialCharsWithinTagAttributes')(text, options, globals);
	  text = showdown.subParser('encodeBackslashEscapes')(text, options, globals);
	
	  // Process anchor and image tags. Images must come first,
	  // because ![foo][f] looks like an anchor.
	  text = showdown.subParser('images')(text, options, globals);
	  text = showdown.subParser('anchors')(text, options, globals);
	
	  // Make links out of things like `<http://example.com/>`
	  // Must come after anchors, because you can use < and >
	  // delimiters in inline links like [this](<url>).
	  text = showdown.subParser('autoLinks')(text, options, globals);
	  text = showdown.subParser('italicsAndBold')(text, options, globals);
	  text = showdown.subParser('strikethrough')(text, options, globals);
	  text = showdown.subParser('simplifiedAutoLinks')(text, options, globals);
	
	  // we need to hash HTML tags inside spans
	  text = showdown.subParser('hashHTMLSpans')(text, options, globals);
	
	  // now we encode amps and angles
	  text = showdown.subParser('encodeAmpsAndAngles')(text, options, globals);
	
	  // Do hard breaks
	  if (options.simpleLineBreaks) {
	    // GFM style hard breaks
	    // only add line breaks if the text does not contain a block (special case for lists)
	    if (!/\n\n¨K/.test(text)) {
	      text = text.replace(/\n+/g, '<br />\n');
	    }
	  } else {
	    // Vanilla hard breaks
	    text = text.replace(/  +\n/g, '<br />\n');
	  }
	
	  text = globals.converter._dispatch('spanGamut.after', text, options, globals);
	  return text;
	});
	
	showdown.subParser('strikethrough', function (text, options, globals) {
	  'use strict';
	
	  function parseInside (txt) {
	    if (options.simplifiedAutoLink) {
	      txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
	    }
	    return '<del>' + txt + '</del>';
	  }
	
	  if (options.strikethrough) {
	    text = globals.converter._dispatch('strikethrough.before', text, options, globals);
	    text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function (wm, txt) { return parseInside(txt); });
	    text = globals.converter._dispatch('strikethrough.after', text, options, globals);
	  }
	
	  return text;
	});
	
	/**
	 * Strips link definitions from text, stores the URLs and titles in
	 * hash references.
	 * Link defs are in the form: ^[id]: url "optional title"
	 */
	showdown.subParser('stripLinkDefinitions', function (text, options, globals) {
	  'use strict';
	
	  var regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm;
	
	  // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
	  text += '¨0';
	
	  text = text.replace(regex, function (wholeMatch, linkId, url, width, height, blankLines, title) {
	    linkId = linkId.toLowerCase();
	    globals.gUrls[linkId] = showdown.subParser('encodeAmpsAndAngles')(url, options, globals);  // Link IDs are case-insensitive
	
	    if (blankLines) {
	      // Oops, found blank lines, so it's not a title.
	      // Put back the parenthetical statement we stole.
	      return blankLines + title;
	
	    } else {
	      if (title) {
	        globals.gTitles[linkId] = title.replace(/"|'/g, '&quot;');
	      }
	      if (options.parseImgDimensions && width && height) {
	        globals.gDimensions[linkId] = {
	          width:  width,
	          height: height
	        };
	      }
	    }
	    // Completely remove the definition from the text
	    return '';
	  });
	
	  // attacklab: strip sentinel
	  text = text.replace(/¨0/, '');
	
	  return text;
	});
	
	showdown.subParser('tables', function (text, options, globals) {
	  'use strict';
	
	  if (!options.tables) {
	    return text;
	  }
	
	  var tableRgx = /^ {0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|¨0)/gm;
	
	  function parseStyles (sLine) {
	    if (/^:[ \t]*--*$/.test(sLine)) {
	      return ' style="text-align:left;"';
	    } else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) {
	      return ' style="text-align:right;"';
	    } else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) {
	      return ' style="text-align:center;"';
	    } else {
	      return '';
	    }
	  }
	
	  function parseHeaders (header, style) {
	    var id = '';
	    header = header.trim();
	    // support both tablesHeaderId and tableHeaderId due to error in documention so we don't break backwards compatibility
	    if (options.tablesHeaderId || options.tableHeaderId) {
	      id = ' id="' + header.replace(/ /g, '_').toLowerCase() + '"';
	    }
	    header = showdown.subParser('spanGamut')(header, options, globals);
	
	    return '<th' + id + style + '>' + header + '</th>\n';
	  }
	
	  function parseCells (cell, style) {
	    var subText = showdown.subParser('spanGamut')(cell, options, globals);
	    return '<td' + style + '>' + subText + '</td>\n';
	  }
	
	  function buildTable (headers, cells) {
	    var tb = '<table>\n<thead>\n<tr>\n',
	        tblLgn = headers.length;
	
	    for (var i = 0; i < tblLgn; ++i) {
	      tb += headers[i];
	    }
	    tb += '</tr>\n</thead>\n<tbody>\n';
	
	    for (i = 0; i < cells.length; ++i) {
	      tb += '<tr>\n';
	      for (var ii = 0; ii < tblLgn; ++ii) {
	        tb += cells[i][ii];
	      }
	      tb += '</tr>\n';
	    }
	    tb += '</tbody>\n</table>\n';
	    return tb;
	  }
	
	  text = globals.converter._dispatch('tables.before', text, options, globals);
	
	  // find escaped pipe characters
	  text = text.replace(/\\(\|)/g, showdown.helper.escapeCharactersCallback);
	
	  // parse tables
	  text = text.replace(tableRgx, function (rawTable) {
	
	    var i, tableLines = rawTable.split('\n');
	
	    // strip wrong first and last column if wrapped tables are used
	    for (i = 0; i < tableLines.length; ++i) {
	      if (/^ {0,3}\|/.test(tableLines[i])) {
	        tableLines[i] = tableLines[i].replace(/^ {0,3}\|/, '');
	      }
	      if (/\|[ \t]*$/.test(tableLines[i])) {
	        tableLines[i] = tableLines[i].replace(/\|[ \t]*$/, '');
	      }
	    }
	
	    var rawHeaders = tableLines[0].split('|').map(function (s) { return s.trim();}),
	        rawStyles = tableLines[1].split('|').map(function (s) { return s.trim();}),
	        rawCells = [],
	        headers = [],
	        styles = [],
	        cells = [];
	
	    tableLines.shift();
	    tableLines.shift();
	
	    for (i = 0; i < tableLines.length; ++i) {
	      if (tableLines[i].trim() === '') {
	        continue;
	      }
	      rawCells.push(
	        tableLines[i]
	          .split('|')
	          .map(function (s) {
	            return s.trim();
	          })
	      );
	    }
	
	    if (rawHeaders.length < rawStyles.length) {
	      return rawTable;
	    }
	
	    for (i = 0; i < rawStyles.length; ++i) {
	      styles.push(parseStyles(rawStyles[i]));
	    }
	
	    for (i = 0; i < rawHeaders.length; ++i) {
	      if (showdown.helper.isUndefined(styles[i])) {
	        styles[i] = '';
	      }
	      headers.push(parseHeaders(rawHeaders[i], styles[i]));
	    }
	
	    for (i = 0; i < rawCells.length; ++i) {
	      var row = [];
	      for (var ii = 0; ii < headers.length; ++ii) {
	        if (showdown.helper.isUndefined(rawCells[i][ii])) {
	
	        }
	        row.push(parseCells(rawCells[i][ii], styles[ii]));
	      }
	      cells.push(row);
	    }
	
	    return buildTable(headers, cells);
	  });
	
	  text = globals.converter._dispatch('tables.after', text, options, globals);
	
	  return text;
	});
	
	/**
	 * Swap back in all the special characters we've hidden.
	 */
	showdown.subParser('unescapeSpecialChars', function (text, options, globals) {
	  'use strict';
	  text = globals.converter._dispatch('unescapeSpecialChars.before', text, options, globals);
	
	  text = text.replace(/¨E(\d+)E/g, function (wholeMatch, m1) {
	    var charCodeToReplace = parseInt(m1);
	    return String.fromCharCode(charCodeToReplace);
	  });
	
	  text = globals.converter._dispatch('unescapeSpecialChars.after', text, options, globals);
	  return text;
	});
	
	var root = this;
	
	// CommonJS/nodeJS Loader
	if (typeof module !== 'undefined' && module.exports) {
	  module.exports = showdown;
	
	// AMD Loader
	} else if (true) {
	  !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    'use strict';
	    return showdown;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	
	// Regular Browser loader
	} else {
	  root.showdown = showdown;
	}
	}).call(this);
	
	//# sourceMappingURL=showdown.js.map


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var local_storage_module_1 = __webpack_require__(73);
	exports.LocalStorageModule = local_storage_module_1.LocalStorageModule;
	var local_storage_service_1 = __webpack_require__(74);
	exports.LocalStorageService = local_storage_service_1.LocalStorageService;
	//# sourceMappingURL=index.js.map

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var local_storage_service_1 = __webpack_require__(74);
	var LocalStorageModule = (function () {
	    function LocalStorageModule() {
	    }
	    LocalStorageModule.withConfig = function (userConfig) {
	        if (userConfig === void 0) { userConfig = {}; }
	        return {
	            ngModule: LocalStorageModule,
	            providers: [
	                { provide: 'LOCAL_STORAGE_SERVICE_CONFIG', useValue: userConfig }
	            ]
	        };
	    };
	    LocalStorageModule = __decorate([
	        core_1.NgModule({
	            providers: [
	                local_storage_service_1.LocalStorageService
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], LocalStorageModule);
	    return LocalStorageModule;
	}());
	exports.LocalStorageModule = LocalStorageModule;
	//# sourceMappingURL=local-storage.module.js.map

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(3);
	var Observable_1 = __webpack_require__(4);
	var Subscriber_1 = __webpack_require__(7);
	__webpack_require__(75);
	var DEPRECATED = 'This function is deprecated.';
	var LOCAL_STORAGE_NOT_SUPPORTED = 'LOCAL_STORAGE_NOT_SUPPORTED';
	var LocalStorageService = (function () {
	    function LocalStorageService(config) {
	        var _this = this;
	        this.isSupported = false;
	        this.notifyOptions = {
	            setItem: false,
	            removeItem: false
	        };
	        this.prefix = 'ls';
	        this.storageType = 'localStorage';
	        this.errors = new Subscriber_1.Subscriber();
	        this.removeItems = new Subscriber_1.Subscriber();
	        this.setItems = new Subscriber_1.Subscriber();
	        this.warnings = new Subscriber_1.Subscriber();
	        var notifyOptions = config.notifyOptions, prefix = config.prefix, storageType = config.storageType;
	        if (notifyOptions != null) {
	            var setItem = notifyOptions.setItem, removeItem = notifyOptions.removeItem;
	            this.setNotify(!!setItem, !!removeItem);
	        }
	        if (prefix != null) {
	            this.setPrefix(prefix);
	        }
	        if (storageType != null) {
	            this.setStorageType(storageType);
	        }
	        this.errors$ = new Observable_1.Observable(function (observer) { return _this.errors = observer; }).share();
	        this.removeItems$ = new Observable_1.Observable(function (observer) { return _this.removeItems = observer; }).share();
	        this.setItems$ = new Observable_1.Observable(function (observer) { return _this.setItems = observer; }).share();
	        this.warnings$ = new Observable_1.Observable(function (observer) { return _this.warnings = observer; }).share();
	        this.isSupported = this.checkSupport();
	    }
	    LocalStorageService.prototype.add = function (key, value) {
	        if (console && console.warn) {
	            console.warn(DEPRECATED);
	            console.warn('Use `LocalStorageService.set` instead.');
	        }
	        return this.set(key, value);
	    };
	    LocalStorageService.prototype.clearAll = function (regularExpression) {
	        // Setting both regular expressions independently
	        // Empty strings result in catchall RegExp
	        var prefixRegex = !!this.prefix ? new RegExp('^' + this.prefix) : new RegExp('');
	        var testRegex = !!regularExpression ? new RegExp(regularExpression) : new RegExp('');
	        if (!this.isSupported) {
	            this.warnings.next(LOCAL_STORAGE_NOT_SUPPORTED);
	            return false;
	        }
	        var prefixLength = this.prefix.length;
	        for (var key in this.webStorage) {
	            // Only remove items that are for this app and match the regular expression
	            if (prefixRegex.test(key) && testRegex.test(key.substr(prefixLength))) {
	                try {
	                    this.remove(key.substr(prefixLength));
	                }
	                catch (e) {
	                    this.errors.next(e.message);
	                    return false;
	                }
	            }
	        }
	        return true;
	    };
	    LocalStorageService.prototype.deriveKey = function (key) {
	        return "" + this.prefix + key;
	    };
	    LocalStorageService.prototype.get = function (key) {
	        if (!this.isSupported) {
	            this.warnings.next(LOCAL_STORAGE_NOT_SUPPORTED);
	            return null;
	        }
	        var item = this.webStorage ? this.webStorage.getItem(this.deriveKey(key)) : null;
	        // FIXME: not a perfect solution, since a valid 'null' string can't be stored
	        if (!item || item === 'null') {
	            return null;
	        }
	        try {
	            return JSON.parse(item);
	        }
	        catch (e) {
	            return null;
	        }
	    };
	    LocalStorageService.prototype.getStorageType = function () {
	        return this.storageType;
	    };
	    LocalStorageService.prototype.keys = function () {
	        if (!this.isSupported) {
	            this.warnings.next(LOCAL_STORAGE_NOT_SUPPORTED);
	            return [];
	        }
	        var prefixLength = this.prefix.length;
	        var keys = [];
	        for (var key in this.webStorage) {
	            // Only return keys that are for this app
	            if (key.substr(0, prefixLength) === this.prefix) {
	                try {
	                    keys.push(key.substr(prefixLength));
	                }
	                catch (e) {
	                    this.errors.next(e.message);
	                    return [];
	                }
	            }
	        }
	        return keys;
	    };
	    LocalStorageService.prototype.length = function () {
	        var count = 0;
	        var storage = this.webStorage;
	        for (var i = 0; i < storage.length; i++) {
	            if (storage.key(i).indexOf(this.prefix) === 0) {
	                count += 1;
	            }
	        }
	        return count;
	    };
	    LocalStorageService.prototype.remove = function () {
	        var _this = this;
	        var keys = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            keys[_i - 0] = arguments[_i];
	        }
	        var result = true;
	        keys.forEach(function (key) {
	            if (!_this.isSupported) {
	                _this.warnings.next(LOCAL_STORAGE_NOT_SUPPORTED);
	                result = false;
	            }
	            try {
	                _this.webStorage.removeItem(_this.deriveKey(key));
	                if (_this.notifyOptions.removeItem) {
	                    _this.removeItems.next({
	                        key: key,
	                        storageType: _this.storageType
	                    });
	                }
	            }
	            catch (e) {
	                _this.errors.next(e.message);
	                result = false;
	            }
	        });
	        return result;
	    };
	    LocalStorageService.prototype.set = function (key, value) {
	        // Let's convert `undefined` values to `null` to get the value consistent
	        if (value === undefined) {
	            value = null;
	        }
	        else {
	            value = JSON.stringify(value);
	        }
	        if (!this.isSupported) {
	            this.warnings.next(LOCAL_STORAGE_NOT_SUPPORTED);
	            return false;
	        }
	        try {
	            if (this.webStorage) {
	                this.webStorage.setItem(this.deriveKey(key), value);
	            }
	            if (this.notifyOptions.setItem) {
	                this.setItems.next({
	                    key: key,
	                    newvalue: value,
	                    storageType: this.storageType
	                });
	            }
	        }
	        catch (e) {
	            this.errors.next(e.message);
	            return false;
	        }
	        return true;
	    };
	    LocalStorageService.prototype.checkSupport = function () {
	        try {
	            var supported = this.storageType in window
	                && window[this.storageType] !== null;
	            if (supported) {
	                this.webStorage = window[this.storageType];
	                // When Safari (OS X or iOS) is in private browsing mode, it
	                // appears as though localStorage is available, but trying to
	                // call .setItem throws an exception.
	                //
	                // "QUOTA_EXCEEDED_ERR: DOM Exception 22: An attempt was made
	                // to add something to storage that exceeded the quota."
	                var key = this.deriveKey("__" + Math.round(Math.random() * 1e7));
	                this.webStorage.setItem(key, '');
	                this.webStorage.removeItem(key);
	            }
	            return supported;
	        }
	        catch (e) {
	            this.errors.next(e.message);
	            return false;
	        }
	    };
	    LocalStorageService.prototype.setPrefix = function (prefix) {
	        this.prefix = prefix;
	        // If there is a prefix set in the config let's use that with an appended
	        // period for readability:
	        var PERIOD = '.';
	        if (this.prefix && !this.prefix.endsWith(PERIOD)) {
	            this.prefix = !!this.prefix ? "" + this.prefix + PERIOD : '';
	        }
	    };
	    LocalStorageService.prototype.setStorageType = function (storageType) {
	        this.storageType = storageType;
	    };
	    LocalStorageService.prototype.setNotify = function (setItem, removeItem) {
	        if (setItem != null) {
	            this.notifyOptions.setItem = setItem;
	        }
	        if (removeItem != null) {
	            this.notifyOptions.removeItem = removeItem;
	        }
	    };
	    LocalStorageService = __decorate([
	        core_1.Injectable(),
	        __param(0, core_1.Inject('LOCAL_STORAGE_SERVICE_CONFIG')), 
	        __metadata('design:paramtypes', [Object])
	    ], LocalStorageService);
	    return LocalStorageService;
	}());
	exports.LocalStorageService = LocalStorageService;
	//# sourceMappingURL=local-storage.service.js.map

/***/ }),
/* 75 */,
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const http_1 = __webpack_require__(45);
	let ComparisonCitationService = class ComparisonCitationService {
	    constructor(http) {
	        this.http = http;
	        this.bibEntriesHtml = {};
	        this.bibEntriesInline = {};
	        this.keys = {};
	        this.references = [];
	        this.check = false;
	        this.precheck = false;
	        this.ready = false;
	    }
	    sortedReferences() {
	        const values = [];
	        for (const reference of this.references) {
	            const key = reference;
	            const entry = { 'html': this.bibEntriesHtml[key] };
	            entry['key'] = key;
	            entry['index'] = this.bibEntriesInline[key];
	            entry['index'] = entry['index'].substr(1, entry['index'].length - 2);
	            values.push(entry);
	        }
	        return values.sort((a, b) => a.index - b.index);
	    }
	    loadCitationData(cd) {
	        this.http.request('citation/output/fbib.json')
	            .subscribe(res => {
	            this.bibEntriesHtml = res.json();
	            if (!this.check && this.precheck) {
	                this.check = true;
	            }
	            else {
	                this.precheck = true;
	            }
	            cd.markForCheck();
	        });
	        this.http.request('citation/output/fkeys.json')
	            .subscribe(res => {
	            this.bibEntriesInline = res.json();
	            if (!this.check && this.precheck) {
	                this.check = true;
	            }
	            else {
	                this.precheck = true;
	            }
	            cd.markForCheck();
	        });
	    }
	    getUsedEntries() {
	        const entries = [];
	        for (const key in this.keys) {
	            if (!this.keys.hasOwnProperty(key)) {
	                continue;
	            }
	            entries.push({ key: key, html: this.bibEntriesHtml[this.keys[key]] });
	        }
	        return entries.length > 0 ? entries : [{ key: 'emty', html: '' }];
	    }
	    addUsedEntries(entries) {
	        const newEntries = new Array();
	        for (const entry of entries) {
	            if (!this.keys[entry]) {
	                newEntries.push(entry);
	                this.keys[entry] = entry;
	            }
	        }
	        if (newEntries.length > 0) {
	            if (this.references) {
	                this.references = this.references.concat(newEntries);
	            }
	            else {
	                this.references = newEntries;
	            }
	        }
	    }
	    getBibEntriesHtml(key) {
	        return this.bibEntriesHtml[key];
	    }
	    getBibEntriesInline(key) {
	        return this.bibEntriesInline[key];
	    }
	};
	ComparisonCitationService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], ComparisonCitationService);
	exports.ComparisonCitationService = ComparisonCitationService;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"pheader\">\n    <h2>{{getHeaderText()}}\n        <ng-template ngFor let-sitem [ngForOf]=\"data?.getPropertyListItems(confServ.comparison?.details.headerLabel)\"\n                  *ngIf=\"confServ.comparison\">\n            <ptooltip [tooltip]=\"getHeaderColumn()?.values[sitem.content].tag\"\n                      [tooltipHtml]=\"sitem.htmlChilds|citation:[citationServ]\" [position]=\"'s'\">\n                <div class=\"{{getHeaderLabel()?.getCls(sitem.content)}} mylabel\">\n                    {{sitem.content}}\n                </div>\n            </ptooltip>\n        </ng-template>\n        <small><a href=\"{{getHeaderUrl()}}\" target=\"_blank\">{{getHeaderUrl()}}</a></small>\n    </h2>\n</div>\n<div class=\"grid-content\">\n    <pcard *ngIf=\"confServ.comparison\" heading=\"{{confServ.comparison?.details.bodyMainTitle}}\" class=\"description\">\n        <htmlcitationtext [description]=\"getBody()\" [citationServ]=\"citationServ\"\n                          *ngIf=\"citationServ.check\"></htmlcitationtext>\n    </pcard>\n    <ng-template ngFor let-atag [ngForOf]=\"confServ.getBodyAttachmentTags()\" *ngIf=\"confServ.comparison\">\n        <pcard heading=\"{{getTable(atag).name}}\">\n            <p class=\"card-content\">\n                <ng-template ngFor let-sitem [ngForOf]=\"data?.getPropertyListItems(atag)\">\n                    <ptooltip *ngIf=\"!confServ.comparison?.details.tooltipAsText\"\n                              [tooltip]=\"getTable(atag)?.values[sitem.content]\"\n                              [tooltipHtml]=\"sitem.htmlChilds|citation:[citationServ]\" [position]=\"'n'\">\n                        <span class=\"{{getTable(atag)?.type?.getCls(sitem.content)}} mylabel\">{{sitem.content}}</span>\n                    </ptooltip>\n                    <div *ngIf=\"confServ.comparison?.details.tooltipAsText\">\n                        <span *ngIf=\"(this.confServ.tableDataSet.getTableData(atag).type.colors | json).length === 21\"\n                              class=\"{{getTable(atag)?.type?.getCls(sitem.content)}} mylabel\">{{sitem.content}}</span>\n                        <span *ngIf=\"(this.confServ.tableDataSet.getTableData(atag).type.colors | json).length !== 21\"\n                              class=\"label mylabel\"\n                              [style.background-color]=\"this.confServ.tableDataSet.getTableData(atag).type.colors.getColor(sitem.content)\">{{sitem.content}}</span>\n                        <span class=\"tooltip-text\">\n                        <htmlcitationtext [description]=\"getTable(atag)?.values[sitem.content]\"\n                                          [citationServ]=\"citationServ\"\n                                          *ngIf=\"citationServ.check\"></htmlcitationtext>\n                        <htmlcitationtext [description]=\"sitem.htmlChilds\" [citationServ]=\"citationServ\"\n                                          *ngIf=\"citationServ.check\"></htmlcitationtext>\n                        </span>\n                    </div>\n                </ng-template>\n            </p>\n        </pcard>\n    </ng-template>\n\n    <pcard heading=\"Ratings\" *ngIf=\"data?.getRatings().length > 0\" style=\"display:block\">\n        <div class=\"card-content\">\n            <ng-template ngFor let-item [ngForOf]=\"data?.getRatings()\">\n                <dl>\n                    <dt>\n                        <iicon icon=\"star\">{{item.stars}}</iicon>\n                    </dt>\n                    <dd>\n                        {{item.text}}\n                    </dd>\n                </dl>\n            </ng-template>\n        </div>\n    </pcard>\n</div>\n";

/***/ }),
/* 78 */
/***/ (function(module, exports) {

	module.exports = ":host {\n    display: grid;\n    padding: 0;\n}\n\n.mylabel {\n    margin: 2px;\n    display: inline-block !important;\n    cursor: pointer;\n    font-size: 14px !important;\n    white-space: inherit;\n}\n\n.card-content {\n    padding: 0 16px 16px 16px;\n    position: relative;\n}\n\n.tooltip-text {\n    display: inline-table;\n}\n\n.tooltip-text /deep/ ul {\n    padding-left: 15px;\n}\n\n.pheader h2 {\n    margin-top: 0;\n}\n\n.description {\n    grid-column: span 1;\n}\n\n.grid-content {\n    display: grid;\n    grid-template-columns: auto;\n    grid-column-gap: 10px;\n    grid-row-gap: 10px;\n    grid-auto-flow: row;\n}\n\n@media only screen and (min-width: 400px) {\n    .description {\n        grid-column: span 2;\n    }\n\n    .grid-content {\n        grid-template-columns: auto auto;\n    }\n}"

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const comparison_service_1 = __webpack_require__(70);
	const comparison_citation_service_1 = __webpack_require__(76);
	const citation_pipe_1 = __webpack_require__(80);
	let ComparisonFootnoteComponent = class ComparisonFootnoteComponent {
	    constructor(citationPipe, citationServ, compServ) {
	        this.citationPipe = citationPipe;
	        this.citationServ = citationServ;
	        this.compServ = compServ;
	        this.compiled_footnote = '';
	    }
	    compile_footnote(note) {
	        if (!this.compServ.footnotes[note]) {
	            this.compServ.footnotes[note] = {
	                value: this.citationPipe.transform(note, [this.citationServ, true]),
	                index: (this.compServ.findex++ + 'r' + Math.random() * 100000).toString().substr(0, 5),
	                count: 1
	            };
	        }
	        else {
	            this.compServ.footnotes[this.footnote].count++;
	        }
	        this.compiled_footnote = '\\footref&#123;' + this.compServ.footnotes[note].index + '&#125;';
	    }
	    ngOnChanges() {
	        this.compile_footnote(this.footnote);
	    }
	    ngOnDestroy() {
	        this.compServ.footnotes[this.footnote].count--;
	        if (this.compServ.footnotes[this.footnote].count === 0) {
	            delete this.compServ.footnotes[this.footnote];
	        }
	    }
	};
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], ComparisonFootnoteComponent.prototype, "footnote", void 0);
	ComparisonFootnoteComponent = __decorate([
	    core_1.Component({
	        selector: 'comparison-footnote',
	        template: '<div [innerHtml]="compiled_footnote|sanitizeHtml"></div>',
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush
	    }),
	    __metadata("design:paramtypes", [citation_pipe_1.CitationPipe,
	        comparison_citation_service_1.ComparisonCitationService,
	        comparison_service_1.ComparisonService])
	], ComparisonFootnoteComponent);
	exports.ComparisonFootnoteComponent = ComparisonFootnoteComponent;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const util_1 = __webpack_require__(49);
	let CitationPipe = class CitationPipe {
	    transform(value, args = []) {
	        if (util_1.isUndefined(value) || value.length === 0) {
	            return '';
	        }
	        const citServ = args[0];
	        const latex = args[1];
	        const entries = [];
	        if (!latex) {
	            value = value.replace(/(?:\[@)([^\]]*)(?:\])/g, (match, dec) => {
	                entries.push(dec);
	                return '<a class="cite-link" href="#' + dec + '">' + citServ.getBibEntriesInline(dec) + '</a>';
	            });
	        }
	        else {
	            value = value.replace(/(?:\[@)([^\]]*)(?:\])/g, (match, dec) => {
	                return '\\cite{' + dec + '}';
	            });
	        }
	        if (entries.length > 0) {
	            citServ.addUsedEntries(entries);
	            citServ.ready = true;
	        }
	        return value;
	    }
	};
	CitationPipe = __decorate([
	    core_1.Pipe({
	        name: 'citation',
	        pure: false
	    })
	], CitationPipe);
	exports.CitationPipe = CitationPipe;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const index_1 = __webpack_require__(47);
	const comparison_config_service_1 = __webpack_require__(68);
	const comparison_data_service_1 = __webpack_require__(69);
	const comparison_service_1 = __webpack_require__(70);
	const comparison_citation_service_1 = __webpack_require__(76);
	const VersionInformation_1 = __webpack_require__(82);
	const http_1 = __webpack_require__(45);
	const angular_2_local_storage_1 = __webpack_require__(72);
	const paper_card_component_1 = __webpack_require__(83);
	const FileSaver = __webpack_require__(86);
	let ComparisonComponent = class ComparisonComponent {
	    constructor(http, serv, dataServ, confServ, citationServ, cd, lss) {
	        this.http = http;
	        this.serv = serv;
	        this.dataServ = dataServ;
	        this.confServ = confServ;
	        this.citationServ = citationServ;
	        this.cd = cd;
	        this.lss = lss;
	        this.criteriaSelection = [];
	        this.query = {};
	        this.changed = 0;
	        this.order = [];
	        this.orderOption = [];
	        this.ready = false;
	        this.versionInformation = new VersionInformation_1.VersionInformation();
	        this.activeRow = new index_1.Data(this.lss, this.dataServ, this.serv);
	        this.showTable = false;
	        this.showTableTooltips = true;
	        this.tableTooltipsAsFootnotes = false;
	        this.expandShrinkOrigDisplay = [];
	        this.shrinked = true;
	        this.confServ.loadComparison(this.cd);
	        this.confServ.loadCriteria(this.cd);
	        this.confServ.loadTableData(this.cd);
	        this.confServ.loadDescription(this.cd);
	        this.citationServ.loadCitationData(this.cd);
	    }
	    getVersionInformation() {
	        return this.versionInformation;
	    }
	    criteriaChanged(value, crit) {
	        if (value) {
	            this.query[crit.tag] = new index_1.CriteriaSelection(value, crit);
	        }
	        this.cd.markForCheck();
	        this.change();
	    }
	    showDetails(data) {
	        this.activeRow = data;
	        this.detailsModal.open();
	    }
	    showTableProperties() {
	        this.settingsModal.open();
	    }
	    downloadLatexTable() {
	        let content = this.latexTable.nativeElement.textContent;
	        content = content.substr(content.indexOf('%'), content.length);
	        const blob = new Blob([content], { type: 'plain/text' });
	        FileSaver.saveAs(blob, 'latextable.tex');
	        return window.URL.createObjectURL(blob);
	    }
	    previewLatexTable(show) {
	        if (show) {
	            this.latexTable.nativeElement.classList.remove('ltable');
	        }
	        else {
	            this.latexTable.nativeElement.classList.add('ltable');
	        }
	    }
	    displayReferences() {
	        if (this.citationServ.check && this.citationServ.references.length > 0 && !this.ready) {
	            setTimeout(() => {
	                this.ready = true;
	            }, 1000);
	        }
	        return this.ready;
	    }
	    change() {
	        if (this.changed === 1) {
	            this.changed = 0;
	        }
	        else {
	            this.changed = 1;
	        }
	    }
	    changeDisplayTemplate() {
	        if (this.confServ.comparison) {
	            this.confServ.comparison.displaytemplate = !this.confServ.comparison.displaytemplate;
	        }
	        this.change();
	    }
	    changeDisplayAll() {
	        if (this.confServ.comparison) {
	            this.confServ.comparison.displayall = !this.confServ.comparison.displayall;
	        }
	        this.change();
	    }
	    changeEnabled(item) {
	        item.enabled = !item.enabled;
	        this.change();
	    }
	    shrinkExpand() {
	        if (this.shrinked) {
	            this.expand();
	        }
	        else {
	            this.shrink();
	        }
	        this.shrinked = !this.shrinked;
	        this.cd.markForCheck();
	        this.change();
	    }
	    shrink() {
	        const set = this.confServ.tableDataSet.getTableDataArray();
	        for (const td of set) {
	            if (td.display && this.expandShrinkOrigDisplay.indexOf(td) === -1) {
	                td.display = false;
	            }
	        }
	    }
	    expand() {
	        const set = this.confServ.tableDataSet.getTableDataArray();
	        for (const td of set) {
	            if (td.display) {
	                this.expandShrinkOrigDisplay.push(td);
	            }
	            else {
	                td.display = true;
	            }
	        }
	    }
	};
	__decorate([
	    core_1.ViewChild('details'),
	    __metadata("design:type", Object)
	], ComparisonComponent.prototype, "detailsModal", void 0);
	__decorate([
	    core_1.ViewChild('latextable'),
	    __metadata("design:type", core_1.ElementRef)
	], ComparisonComponent.prototype, "latexTable", void 0);
	__decorate([
	    core_1.ViewChild('settings'),
	    __metadata("design:type", Object)
	], ComparisonComponent.prototype, "settingsModal", void 0);
	__decorate([
	    core_1.ViewChild('genericTableHeader'),
	    __metadata("design:type", paper_card_component_1.PaperCardComponent)
	], ComparisonComponent.prototype, "genericTableHeader", void 0);
	ComparisonComponent = __decorate([
	    core_1.Component({
	        selector: 'comparison',
	        template: __webpack_require__(89),
	        styles: [__webpack_require__(90)]
	    }),
	    __metadata("design:paramtypes", [http_1.Http,
	        comparison_service_1.ComparisonService,
	        comparison_data_service_1.ComparisonDataService,
	        comparison_config_service_1.ComparisonConfigService,
	        comparison_citation_service_1.ComparisonCitationService,
	        core_1.ChangeDetectorRef,
	        angular_2_local_storage_1.LocalStorageService])
	], ComparisonComponent);
	exports.ComparisonComponent = ComparisonComponent;


/***/ }),
/* 82 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	class VersionInformation {
	    constructor() {
	        this.date = "2017-08-10";
	        this.commit = "1.0.0";
	        this.link = "https://github.com/ultimate-comparisons/ultimate-comparison-BASE/releases/tag/v1.0.0";
	    }
	}
	exports.VersionInformation = VersionInformation;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	let PaperCardComponent = class PaperCardComponent {
	    constructor() {
	        this.symbol = false;
	        this.shrinkExpandEmitter = new core_1.EventEmitter();
	        this.shrinked = false;
	    }
	    shrinkExpand() {
	        this.shrinked = !this.shrinked;
	        this.shrinkExpandEmitter.emit();
	    }
	};
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], PaperCardComponent.prototype, "heading", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], PaperCardComponent.prototype, "symbol", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], PaperCardComponent.prototype, "shrinkExpandEmitter", void 0);
	PaperCardComponent = __decorate([
	    core_1.Component({
	        selector: 'pcard',
	        template: __webpack_require__(84),
	        styles: [__webpack_require__(85)],
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush
	    })
	], PaperCardComponent);
	exports.PaperCardComponent = PaperCardComponent;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"paper-header\" *ngIf=\"heading\">{{heading}}</div>\n<div class=\"paper-symbol\" *ngIf=\"symbol\">\n    <iicon #ExpandId icon=\"resize-full\" class=\"shrink-expand\" (click)=\"shrinkExpand()\"\n           *ngIf=\"comparisonComponent?.shrinked\"></iicon>\n    <iicon #shrinkId icon=\"resize-small\" class=\"shrink-expand\" (click)=\"shrinkExpand()\"\n           *ngIf=\"!comparisonComponent?.shrinked\"></iicon>\n</div>\n\n<div class=\"paper-content\">\n    <ng-content></ng-content>\n</div>";

/***/ }),
/* 85 */
/***/ (function(module, exports) {

	module.exports = ":host {\n    display: grid;\n    grid-template-columns: auto 25px;\n    grid-template-rows: auto auto;\n    grid-template-areas: \"header symbol\" \"content content\";\n    padding: 16px;\n    box-sizing: border-box;\n    border-radius: 2px;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12),\n    0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n\n.paper-header {\n    grid-area: header;\n    font-size: 24px;\n    font-weight: 400;\n    padding: 0 0 10px 0;\n}\n\n.paper-symbol {\n    grid-area: symbol;\n}\n\n.paper-content {\n    grid-area: content;\n    display: grid;\n}\n"

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
	 * A saveAs() FileSaver implementation.
	 * 1.3.2
	 * 2016-06-16 18:25:19
	 *
	 * By Eli Grey, http://eligrey.com
	 * License: MIT
	 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
	 */
	
	/*global self */
	/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */
	
	/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
	
	var saveAs = saveAs || (function(view) {
		"use strict";
		// IE <10 is explicitly unsupported
		if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
			return;
		}
		var
			  doc = view.document
			  // only get URL when necessary in case Blob.js hasn't overridden it yet
			, get_URL = function() {
				return view.URL || view.webkitURL || view;
			}
			, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
			, can_use_save_link = "download" in save_link
			, click = function(node) {
				var event = new MouseEvent("click");
				node.dispatchEvent(event);
			}
			, is_safari = /constructor/i.test(view.HTMLElement) || view.safari
			, is_chrome_ios =/CriOS\/[\d]+/.test(navigator.userAgent)
			, throw_outside = function(ex) {
				(view.setImmediate || view.setTimeout)(function() {
					throw ex;
				}, 0);
			}
			, force_saveable_type = "application/octet-stream"
			// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
			, arbitrary_revoke_timeout = 1000 * 40 // in ms
			, revoke = function(file) {
				var revoker = function() {
					if (typeof file === "string") { // file is an object URL
						get_URL().revokeObjectURL(file);
					} else { // file is a File
						file.remove();
					}
				};
				setTimeout(revoker, arbitrary_revoke_timeout);
			}
			, dispatch = function(filesaver, event_types, event) {
				event_types = [].concat(event_types);
				var i = event_types.length;
				while (i--) {
					var listener = filesaver["on" + event_types[i]];
					if (typeof listener === "function") {
						try {
							listener.call(filesaver, event || filesaver);
						} catch (ex) {
							throw_outside(ex);
						}
					}
				}
			}
			, auto_bom = function(blob) {
				// prepend BOM for UTF-8 XML and text/* types (including HTML)
				// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
				if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
					return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});
				}
				return blob;
			}
			, FileSaver = function(blob, name, no_auto_bom) {
				if (!no_auto_bom) {
					blob = auto_bom(blob);
				}
				// First try a.download, then web filesystem, then object URLs
				var
					  filesaver = this
					, type = blob.type
					, force = type === force_saveable_type
					, object_url
					, dispatch_all = function() {
						dispatch(filesaver, "writestart progress write writeend".split(" "));
					}
					// on any filesys errors revert to saving with object URLs
					, fs_error = function() {
						if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
							// Safari doesn't allow downloading of blob urls
							var reader = new FileReader();
							reader.onloadend = function() {
								var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
								var popup = view.open(url, '_blank');
								if(!popup) view.location.href = url;
								url=undefined; // release reference before dispatching
								filesaver.readyState = filesaver.DONE;
								dispatch_all();
							};
							reader.readAsDataURL(blob);
							filesaver.readyState = filesaver.INIT;
							return;
						}
						// don't create more object URLs than needed
						if (!object_url) {
							object_url = get_URL().createObjectURL(blob);
						}
						if (force) {
							view.location.href = object_url;
						} else {
							var opened = view.open(object_url, "_blank");
							if (!opened) {
								// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
								view.location.href = object_url;
							}
						}
						filesaver.readyState = filesaver.DONE;
						dispatch_all();
						revoke(object_url);
					}
				;
				filesaver.readyState = filesaver.INIT;
	
				if (can_use_save_link) {
					object_url = get_URL().createObjectURL(blob);
					setTimeout(function() {
						save_link.href = object_url;
						save_link.download = name;
						click(save_link);
						dispatch_all();
						revoke(object_url);
						filesaver.readyState = filesaver.DONE;
					});
					return;
				}
	
				fs_error();
			}
			, FS_proto = FileSaver.prototype
			, saveAs = function(blob, name, no_auto_bom) {
				return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
			}
		;
		// IE 10+ (native saveAs)
		if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
			return function(blob, name, no_auto_bom) {
				name = name || blob.name || "download";
	
				if (!no_auto_bom) {
					blob = auto_bom(blob);
				}
				return navigator.msSaveOrOpenBlob(blob, name);
			};
		}
	
		FS_proto.abort = function(){};
		FS_proto.readyState = FS_proto.INIT = 0;
		FS_proto.WRITING = 1;
		FS_proto.DONE = 2;
	
		FS_proto.error =
		FS_proto.onwritestart =
		FS_proto.onprogress =
		FS_proto.onwrite =
		FS_proto.onabort =
		FS_proto.onerror =
		FS_proto.onwriteend =
			null;
	
		return saveAs;
	}(
		   typeof self !== "undefined" && self
		|| typeof window !== "undefined" && window
		|| this.content
	));
	// `self` is undefined in Firefox for Android content script context
	// while `this` is nsIContentFrameMessageManager
	// with an attribute `content` that corresponds to the window
	
	if (typeof module !== "undefined" && module.exports) {
	  module.exports.saveAs = saveAs;
	} else if (("function" !== "undefined" && __webpack_require__(87) !== null) && (__webpack_require__(88) !== null)) {
	  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return saveAs;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}


/***/ }),
/* 87 */
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),
/* 88 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 89 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"grid-container\">\n    <div class=\"grid-corner\">\n        <a href=\"{{confServ.comparison?.repository}}\" class=\"github-corner\">\n            <svg width=\"80\" height=\"80\" viewBox=\"0 0 250 250\"\n                 style=\"cursor:pointer; fill:#151513; color:#fff; position: sticky; right: 0;\">\n                <path d=\"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z\"></path>\n                <path d=\"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2\"\n                      fill=\"currentColor\" style=\"transform-origin: 130px 106px;\" class=\"octo-arm\"></path>\n                <path d=\"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z\"\n                      fill=\"currentColor\" class=\"octo-body\"></path>\n            </svg>\n        </a>\n    </div>\n    <div class=\"grid-header\">\n        <h1>{{confServ.comparison?.title}}\n            <small>{{confServ.comparison?.subtitle}}</small>\n        </h1>\n    </div>\n    <div class=\"grid-content\">\n        <pcard>\n            <htmlcitationtext [description]=\"confServ.description\" [citationServ]=\"citationServ\"\n                              *ngIf=\"citationServ.check\"></htmlcitationtext>\n        </pcard>\n\n        <pcard [heading]=\"confServ.comparison?.selecttitle\">\n            <div class=\"select-grid\">\n                <ng-template ngFor let-crit [ngForOf]=\"confServ.criteriaSet?.getCriteriaArray()\">\n                    <div>\n                        <div class=\"form-group\">\n                            <ptooltip [tooltip]=\"crit.description\">\n                                <label>\n                                    {{crit.name}}\n                                    <span class=\"search-indicator\">({{crit.getSearchIndicator()}})</span>\n                                </label>\n                            </ptooltip>\n                            <br>\n                            <select2 [options]=\"crit.values\" [placeholder]=\"crit.placeholder\" [name]=\"crit.name\" [tag]=\"crit.tag\"\n                                     (result)=\"criteriaChanged($event, crit)\" *ngIf=\"!crit.range_search\"></select2>\n                            <number-input *ngIf=\"crit.range_search\" [comparisonComponent]=\"this\" [name]=\"crit.name\"\n                                          [criteria]=\"crit\" [tag]=\"crit.tag\"></number-input>\n                        </div>\n                    </div>\n                </ng-template>\n            </div>\n        </pcard>\n    </div>\n    <div class=\"grid-large-content\">\n        <pcard heading=\"{{confServ.comparison?.tabletitle}}\">\n            <iicon #ExpandId icon=\"resize-full\" class=\"shrink-expand\" (click)=\"shrinkExpand()\" *ngIf=\"shrinked\"></iicon>\n            <iicon #shrinkId icon=\"resize-small\" class=\"shrink-expand\" (click)=\"shrinkExpand()\" *ngIf=\"!shrinked\"></iicon>\n            <generictable [display]=\"confServ.tableDataSet\" [settings]=\"'true'\"\n                          [columns]=\"confServ.tableDataSet.getTableDataArray()\" [data]=\"dataServ.data\"\n                          [query]=\"query\"\n                          [displayTemplate]=\"confServ.comparison.displaytemplate\" [citationServ]=\"citationServ\"\n                          (settingsCallback)=\"showTableProperties()\" (showDetails)=\"showDetails($event)\"\n                          [(order)]=\"order\" [(orderOption)]=\"orderOption\" [comparisonComponent]=\"this\"\n                          *ngIf=\"citationServ.check&&confServ.tableDataSet.ready\"\n                          [changeNum]=\"dataServ.getLength()+changed\"></generictable>\n        </pcard>\n    </div>\n    <div class=\"grid-content-end\">\n        <pcard heading=\"References\" [hidden]=\"this.citationServ.references.length == 0\">\n            <referencestable [changeNum]=\"dataServ.getLength()+changed\"\n                             [citationServ]=\"citationServ\"></referencestable>\n        </pcard>\n\n    </div>\n\n    <pdialog #details>\n        <comparison-details [data]=\"activeRow\" *ngIf=\"detailsModal?.opened\"></comparison-details>\n    </pdialog>\n\n    <pdialog #settings [heading]=\"'Table Settings'\">\n        <div class=\"select-grid\">\n\n            <div>\n                <h5>Select Columns...</h5>\n                <pitem>\n                    <pcheckbox [checked]=\"confServ.displayAll\" (checkedChange)=\"confServ.displayAllChange($event, this)\"\n                               [label]=\"confServ.displayAllName\"></pcheckbox>\n                </pitem>\n                <ng-template ngFor let-column [ngForOf]=\"confServ.tableDataSet?.getTableDataArray()\">\n                    <pitem>\n                        <pcheckbox [checked]=column.display (checkedChange)=\"confServ.displayChange(column,this)\"\n                                   [label]=\"column.name\"></pcheckbox>\n                    </pitem>\n                </ng-template>\n            </div>\n            <div>\n                <h5>Other Settings...</h5>\n                <div *ngIf=\"confServ.comparison\">\n                    <pitem>\n                        <pcheckbox [checked]=\"confServ.comparison.displaytemplate\"\n                                   (checkedChange)=\"changeDisplayTemplate()\"\n                                   [label]=\"'Display Template'\"></pcheckbox>\n                    </pitem>\n                    <pitem>\n                        <pcheckbox [checked]=\"confServ.comparison.displayall\" (checkedChange)=\"changeDisplayAll()\"\n                                   [label]=\"'Show Uncompared'\"></pcheckbox>\n                    </pitem>\n                    <h6>Latex</h6>\n                    <pitem>\n                        <pbutton (click)=\"downloadLatexTable()\">Download Table</pbutton>\n                    </pitem>\n                    <pitem>\n                        <pcheckbox [(checked)]=\"showTable\" [label]=\"'Display Latex Table'\"></pcheckbox>\n                    </pitem>\n                    <pitem>\n                        <pcheckbox [(checked)]=\"showTableTooltips\" [label]=\"'Show Tooltips'\"></pcheckbox>\n                    </pitem>\n                    <pitem>\n                        <pcheckbox [(checked)]=\"tableTooltipsAsFootnotes\"\n                                   [label]=\"'Display tooltip text in Footnotes'\"></pcheckbox>\n                    </pitem>\n                    <h6>Details page</h6>\n                    <pitem>\n                        <pcheckbox [(checked)]=\"confServ.comparison?.details.tooltipAsText\"\n                                   [label]=\"'Display tooltip text next to labels in the details page'\"></pcheckbox>\n                    </pitem>\n                </div>\n            </div>\n            <div>\n                <h5>Enabled Elements</h5>\n                <ng-template ngFor let-item [ngForOf]=\"dataServ.data\">\n                    <pitem>\n                        <pcheckbox [checked]=\"item.enabled\" (checkedChange)=\"changeEnabled(item)\"\n                                   [label]=\"item.getProperty('tag').plain\"></pcheckbox>\n                    </pitem>\n                </ng-template>\n            </div>\n        </div>\n    </pdialog>\n\n\n    <div *ngIf=\"showTable\" class=\"grid-content-latex\" #latextable>\n        <!-- @formatter:off -->\n<pcard heading=\"Latex Table\" class=\"large-paper-card\"><div class=\"card-content\" style=\"overflow: auto;\"><!--\n-->%\\usepackage&#123;calc&#125;<br/>\n%\\usepackage&#123;booktabs&#125;<br/>\n%\\usepackage&#123;url&#125;<br/>\n%\\usepackage&#123;hyperref&#125;<br/>\n%\\usepackage&#123;footnote&#125;<br/>\n%\\usepackage&#123;scrextend&#125;<br/>\n%\\makesavenoteenv&#123;tabular&#125;<br/>\n%\\makesavenoteenv&#123;tabule&#125;<br/>\n\\begin&#123;tabular&#125;&#123;&#64;&#123;&#125; <ng-template ngFor let-column [ngForOf]=\"confServ.tableDataSet?.getTableDataArray() | tablefilter\">p&#123;\\linewidth/{{(confServ.tableDataSet?.getTableDataArray() | tablefilter).length}}&#125; </ng-template>&#64;&#123;&#125;&#125;<br/>\n\\toprule<br/>\n<ng-template ngFor let-column [ngForOf]=\"confServ.tableDataSet?.getTableDataArray() | tablefilter\" let-last=\"last\">{{column.name}} <!--\n    --><ng-template [ngIf]=\"!last\">&#38; </ng-template><!--\n    --><ng-template [ngIf]=\"last\">\\\\<br/></ng-template>\n</ng-template>\\midrule<br/>\n<!-- iterate over data rows\n--><ng-template ngFor let-dat [ngForOf]=\"dataServ.data | orderBy: [order,orderOption] | datafilter: [query,confServ.comparison?.displaytemplate]\"><!--\n    iterate over data columns \n    --><ng-template ngFor let-column [ngForOf]=\"confServ.tableDataSet?.getTableDataArray() | tablefilter\" let-last=\"last\"><!--\n        print url \n        --><ng-template [ngIf]=\"column.type?.tag==='url'\">{{dat.getProperty(column.tag).text}}</ng-template><!--\n        print text \n        --><ng-template [ngIf]=\"column.type?.tag==='text'\"><div [innerHtml]=\"dat.getProperty(column.tag).text|citation:[citationServ, true]|sanitizeHtml\"></div></ng-template><!--\n        print labels \n        --><ng-template [ngIf]=\"column.type?.tag==='label'\"><!--\n            iterate over labels \n            --><ng-template ngFor let-sitem [ngForOf]=\"dat.getPropertyListItems(column.tag)\" let-lastItem=\"last\" *ngIf=\"column.type?.labelCls\"><!--\n                print label \n                -->{{sitem.content}}<!--\n                    tooltip\n                    --><ng-template [ngIf]=\"sitem.latexChilds\"><!--\n                        print tooltips?\n                        --><ng-template [ngIf]=\"showTableTooltips\"><!--\n                            print tooltips in footnotes\n                            --><comparison-footnote [footnote]=\"sitem.latexChilds\" *ngIf=\"tableTooltipsAsFootnotes\"></comparison-footnote><!--\n                            print tooltips after labels    \n                            --><div [innerHtml]=\"sitem.latexChilds|citation: [this.citationServ, true]|sanitizeHtml\"></div><!--\n                        --></ng-template><!--\n                    --></ng-template><!--\n                    label seperator --><ng-template [ngIf]=\"!lastItem\">, </ng-template><!--\n            --></ng-template><!--\n        --></ng-template><ng-template [ngIf]=\"!last\"> &#38; </ng-template><ng-template [ngIf]=\"last\">\\\\<br/></ng-template><!--\n    --></ng-template>\n</ng-template>\\bottomrule<br/>\n\\end&#123;tabular&#125;<br/>\n<ng-template [ngIf]=\"tableTooltipsAsFootnotes\">\n\\newcommand\\snum&#123;0&#125;\n<ng-template ngFor let-item [ngForOf]=\"serv.getFootnotes()\"><div [innerHtml]=\"item|sanitizeHtml\"></div>\n</ng-template></ng-template></div></pcard>\n    <!-- @formatter:on -->\n    </div>\n\n    <div class=\"grid-footer\">\n        <div class=\"container\">\n            This is an <a href=\"http://ultimate-comparisons.github.io/\">Ultimate Comparison</a> | content licensed under\n            <a\n                    rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/4.0/\"><img\n                    alt=\"Creative Commons License CC-BY-SA 4.0\" style=\"border-width:0\"\n                    src=\"https://i.creativecommons.org/l/by-sa/4.0/88x31.png\"/></a> | <a\n                [href]=\"getVersionInformation()?.link\">{{getVersionInformation()?.commit?.substr(0,\n            8) + \" (\" + (getVersionInformation()?.date | date: (\"yyyy-MM-dd\")) + \")\"}}</a>\n        </div>\n    </div>\n</div>";

/***/ }),
/* 90 */
/***/ (function(module, exports) {

	module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Roboto:400,300,300italic,400italic,500,500italic,700,700italic\");\n@import url(\"https://fonts.googleapis.com/css?family=Roboto+Mono:400,700\");\n\n:host {\n    font-family: 'Roboto', 'Noto', sans-serif;\n}\n\npdialog {\n    z-index: 5000;\n}\n\n.floatThead-container {\n    z-index: 3000;\n}\n\n.ltable {\n    display: none;\n}\n\n/* github corner */\n.github-corner {\n    z-index: 1000;\n}\n\n.github-corner svg {\n    z-index: 999;\n}\n\n.github-corner:hover .octo-arm {\n    animation: octocat-wave 560ms ease-in-out;\n}\n\n@keyframes octocat-wave {\n    0%,\n    100% {\n        transform: rotate(0);\n    }\n    20%,\n    60% {\n        transform: rotate(-25deg);\n    }\n    40%,\n    80% {\n        transform: rotate(10deg);\n    }\n}\n\n@media (max-width: 500px) {\n    .github-corner:hover .octo-arm {\n        animation: none;\n    }\n\n    .github-corner .octo-arm {\n        animation: octocat-wave 560ms ease-in-out;\n    }\n}\n\n.search-indicator {\n    color: rgba(255, 0, 0, 0.52);\n    font-size: 8pt;\n    opacity: 80;\n}\n\n.grid-container {\n    min-height: 100%;\n    display: grid;\n    grid-column-gap: 10px;\n    grid-row-gap: 15px;\n    grid-template-columns: 1fr auto 1fr;\n    grid-template-rows: 60px auto;\n    grid-template-areas: \". header corner\" \". content .\" \"large large large\" \". content-end .\" \". latex .\" \"footer footer footer\"\n\n}\n\n.grid-header {\n    grid-area: header;\n    -webkit-font-smoothing: antialiased;\n    white-space: nowrap;\n    overflow: visible;\n    text-overflow: ellipsis;\n    line-height: 28px;\n    border-bottom: 1px solid #eee;\n}\n\n.grid-corner {\n    grid-area: corner;\n    display: inline-flex;\n    justify-content: flex-end;\n}\n\n.grid-content {\n    grid-area: content;\n    display: grid;\n    grid-auto-flow: row;\n    grid-row-gap: 15px;\n}\n\n.grid-large-content {\n    padding: 0 10px 0 10px;\n    grid-area: large;\n    display: grid;\n    margin: auto;\n}\n\n.grid-content-latex {\n    grid-area: latex;\n}\n\n.grid-content-end {\n    grid-area: content-end;\n    display: grid;\n    grid-auto-flow: row;\n    grid-row-gap: 15px;\n}\n\n.grid-footer {\n    grid-area: footer;\n    background-color: #f5f5f5;\n}\n\n.grid-text {\n    padding: 16px 16px 16px 16px;\n    position: relative;\n}\n\n.select-grid {\n    display: grid;\n    grid-auto-flow: row;\n    grid-column-gap: 15px;\n}\n\n@media only screen and (min-width: 400px) {\n    .select-grid {\n        grid-template-columns: 1fr 1fr;\n    }\n}\n\n@media only screen and (min-width: 800px) {\n    .grid-container {\n        grid-template-columns: 1fr 720px 1fr;\n    }\n}\n\n@media only screen and (min-width: 1160px) {\n    .grid-container {\n        grid-template-columns: 1fr 980px 1fr;\n    }\n}\n\n.shrink-expand {\n    justify-self: right;\n    -webkit-transform: translate(0, -50px);\n    -moz-transform: translate(0, -50px);\n    -ms-transform: translate(0, -50px);\n    -o-transform: translate(0, -50px);\n    transform: translate(0, -50px);\n}"

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const platform_browser_1 = __webpack_require__(38);
	const data_pipe_1 = __webpack_require__(92);
	const table_pipe_1 = __webpack_require__(93);
	const orderby_pipe_1 = __webpack_require__(94);
	const citation_pipe_1 = __webpack_require__(80);
	const sanitizer_pipe_1 = __webpack_require__(95);
	const attribute_pipe_1 = __webpack_require__(96);
	let PipesModule = class PipesModule {
	};
	PipesModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule
	        ],
	        exports: [
	            data_pipe_1.DataPipe,
	            table_pipe_1.TablePipe,
	            orderby_pipe_1.OrderByPipe,
	            citation_pipe_1.CitationPipe,
	            sanitizer_pipe_1.SanitizerPipe,
	            attribute_pipe_1.AttributePipe
	        ],
	        declarations: [
	            data_pipe_1.DataPipe,
	            table_pipe_1.TablePipe,
	            orderby_pipe_1.OrderByPipe,
	            citation_pipe_1.CitationPipe,
	            sanitizer_pipe_1.SanitizerPipe,
	            attribute_pipe_1.AttributePipe
	        ],
	        providers: [
	            data_pipe_1.DataPipe,
	            table_pipe_1.TablePipe,
	            orderby_pipe_1.OrderByPipe,
	            citation_pipe_1.CitationPipe,
	            sanitizer_pipe_1.SanitizerPipe,
	            attribute_pipe_1.AttributePipe
	        ]
	    })
	], PipesModule);
	exports.PipesModule = PipesModule;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	let DataPipe = class DataPipe {
	    transform(value, args = []) {
	        this.query = args[0];
	        if (!this.query) {
	            return value;
	        }
	        return value.filter((item) => {
	            if (item.tag.trim() === 'Template' && !args[1]) {
	                return false;
	            }
	            if (!item.enabled) {
	                return false;
	            }
	            for (const key in this.query) {
	                if (!this.query.hasOwnProperty(key)) {
	                    continue;
	                }
	                const cont = this.query[key];
	                const values = item.getPropertyTags(cont.criteria.tag);
	                if (cont.criteria.range_search) {
	                    let propertyValue = cont.values.target.value;
	                    propertyValue = propertyValue.replace(/ /g, '');
	                    if (propertyValue.length === 0) {
	                        return true;
	                    }
	                    const tokens = propertyValue.split(',');
	                    for (const token of tokens) {
	                        if (token.lastIndexOf('-') >= 1) {
	                            if (this.rangeSearch(token, item.properties[cont.criteria.tag].list)) {
	                                return true;
	                            }
	                        }
	                        else {
	                            if (this.numberSearch(Number.parseFloat(token), item.properties[cont.criteria.tag].list)) {
	                                return true;
	                            }
	                        }
	                    }
	                    return false;
	                }
	                else {
	                    if (!((cont.values.length < 1) || (this.intersect(cont.values, values, cont.criteria.and_search)))) {
	                        return false;
	                    }
	                }
	            }
	            return true;
	        });
	    }
	    intersect(small_set, big_set, all) {
	        let inter = all;
	        if (!big_set) {
	            return false;
	        }
	        if (all) {
	            // all elements from the small_set must be in the big_set
	            small_set.every(element => {
	                if (big_set.indexOf(element) < 0) {
	                    inter = false;
	                    return false;
	                }
	                return true;
	            });
	        }
	        else {
	            // at least one elmenet must fit
	            small_set.some(element => {
	                if (big_set.indexOf(element) > -1) {
	                    inter = true;
	                    return true;
	                }
	            });
	        }
	        if (!inter && small_set.length === 0) {
	            return true;
	        }
	        return inter;
	    }
	    rangeSearch(range, list) {
	        let negativeMin = false;
	        if (range.startsWith('-')) {
	            negativeMin = true;
	            range = range.substr(1);
	        }
	        let negativeMax = false;
	        if (range.indexOf('--') + 1 === range.lastIndexOf('-')) {
	            negativeMax = true;
	        }
	        const rValues = range.split(/-/).filter(el => el.length !== 0);
	        if (rValues.length < 2) {
	            return this.numberSearch(Number.parseFloat(rValues[0]), list);
	        }
	        rValues[1] = rValues[rValues.length - 1];
	        let min = Number.parseFloat(rValues[0]);
	        if (negativeMin) {
	            min *= -1;
	        }
	        let max = Number.parseFloat(rValues[1]);
	        if (negativeMax) {
	            max *= -1;
	        }
	        if (max < min) {
	            const t = max;
	            max = min;
	            min = t;
	        }
	        for (const item of list) {
	            const n = Number.parseFloat(item.content);
	            if (min <= n && n <= max) {
	                return true;
	            }
	        }
	        return false;
	    }
	    numberSearch(number, list) {
	        if (isNaN(number)) {
	            return false;
	        }
	        for (const item of list) {
	            if (Number.parseFloat(item.content) === number) {
	                return true;
	            }
	        }
	        return false;
	    }
	};
	DataPipe = __decorate([
	    core_1.Pipe({
	        name: 'datafilter',
	        pure: false
	    })
	], DataPipe);
	exports.DataPipe = DataPipe;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	let TablePipe = class TablePipe {
	    transform(value, args) {
	        return value.filter((item) => item.display);
	    }
	};
	TablePipe = __decorate([
	    core_1.Pipe({
	        name: 'tablefilter',
	        pure: false
	    })
	], TablePipe);
	exports.TablePipe = TablePipe;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const util_1 = __webpack_require__(49);
	let OrderByPipe = OrderByPipe_1 = class OrderByPipe {
	    static _comparator(a, b) {
	        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
	            if (a.toLowerCase() < b.toLowerCase()) {
	                return -1;
	            }
	            if (a.toLowerCase() > b.toLowerCase()) {
	                return 1;
	            }
	        }
	        else {
	            if (parseFloat(a) < parseFloat(b)) {
	                return -1;
	            }
	            if (parseFloat(a) > parseFloat(b)) {
	                return 1;
	            }
	        }
	        return 0;
	    }
	    transform(value, args = []) {
	        this.params = { value: args[0], option: args[1] };
	        return value.sort((a, b) => {
	            for (let i = 0; i < this.params.value.length; i++) {
	                if (this.params.option[i] === 0) {
	                    continue;
	                }
	                const desc = this.params.option[i] === -1;
	                if (a.properties[this.params.value[i]] === undefined && b.properties[this.params.value[i]] === undefined) {
	                    if (a[this.params.value[i]] === undefined && b[this.params.value[i]] === undefined) {
	                        return 0;
	                    }
	                }
	                else if (a.properties[this.params.value[i]] === undefined) {
	                    // a lacks the attribute => it is always below the others
	                    return 1;
	                }
	                else if (b.properties[this.params.value[i]] === undefined) {
	                    // b lacks the attribute => it is always below the others
	                    return -1;
	                }
	                const pA = util_1.isNullOrUndefined(a[this.params.value[i]]) ? a.properties[this.params.value[i]].plain : a[this.params.value[i]];
	                const pB = util_1.isNullOrUndefined(b[this.params.value[i]]) ? b.properties[this.params.value[i]].plain : b[this.params.value[i]];
	                const comparison = !desc ? OrderByPipe_1._comparator(pA, pB) : -OrderByPipe_1._comparator(pA, pB);
	                if (comparison !== 0) {
	                    return comparison;
	                }
	            }
	            return 0;
	        });
	    }
	};
	OrderByPipe = OrderByPipe_1 = __decorate([
	    core_1.Pipe({
	        name: 'orderBy',
	        pure: false
	    })
	], OrderByPipe);
	exports.OrderByPipe = OrderByPipe;
	var OrderByPipe_1;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const platform_browser_1 = __webpack_require__(38);
	let SanitizerPipe = class SanitizerPipe {
	    constructor(_sanitizer) {
	        this._sanitizer = _sanitizer;
	    }
	    transform(v) {
	        const html = this._sanitizer.bypassSecurityTrustHtml(v);
	        if (html.hasOwnProperty('changingThisBreaksApplicationSecurity') &&
	            /^<p>\d+\./.test(html['changingThisBreaksApplicationSecurity'])) {
	            html['changingThisBreaksApplicationSecurity'] =
	                '<p>' + html['changingThisBreaksApplicationSecurity']
	                    .substr(html['changingThisBreaksApplicationSecurity'].indexOf('.') + 1);
	        }
	        return html;
	    }
	};
	SanitizerPipe = __decorate([
	    core_1.Pipe({
	        name: 'sanitizeHtml',
	        pure: false
	    }),
	    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
	], SanitizerPipe);
	exports.SanitizerPipe = SanitizerPipe;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const util_1 = __webpack_require__(49);
	let AttributePipe = class AttributePipe {
	    transform(values, ...args) {
	        const tdata = args[0][0];
	        const mult = tdata.order === 'asc' ? 1 : -1;
	        let weightFound = true;
	        for (const key in tdata.values) {
	            if (!tdata.values.hasOwnProperty(key)) {
	                continue;
	            }
	            weightFound = weightFound && !util_1.isNullOrUndefined(tdata.values[key].weight);
	        }
	        if (!weightFound) {
	            return this.sortAlphabetically(values, mult);
	        }
	        return values.sort((o1, o2) => {
	            let w1, w2;
	            for (const key in tdata.values) {
	                if (!tdata.values.hasOwnProperty(key)) {
	                    continue;
	                }
	                if (o1['content'] === key) {
	                    w1 = tdata.values[key].weight;
	                }
	                if (o2['content'] === key) {
	                    w2 = tdata.values[key].weight;
	                }
	            }
	            return mult * (w1 - w2);
	        });
	    }
	    sortAlphabetically(values, mult) {
	        return values.sort((o1, o2) => {
	            return mult * o1.content.localeCompare(o2.content);
	        });
	    }
	};
	AttributePipe = __decorate([
	    core_1.Pipe({
	        name: 'orderAttributes',
	        pure: false
	    })
	], AttributePipe);
	exports.AttributePipe = AttributePipe;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const platform_browser_1 = __webpack_require__(38);
	const ng2_select_1 = __webpack_require__(98);
	const select2_component_1 = __webpack_require__(105);
	const number_input_component_1 = __webpack_require__(108);
	let InputModule = class InputModule {
	};
	InputModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule,
	            ng2_select_1.SelectModule
	        ],
	        exports: [
	            select2_component_1.Select2Component,
	            number_input_component_1.NumberInputComponent
	        ],
	        declarations: [
	            select2_component_1.Select2Component,
	            number_input_component_1.NumberInputComponent
	        ],
	        providers: [],
	        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
	    })
	], InputModule);
	exports.InputModule = InputModule;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(3), __webpack_require__(37), __webpack_require__(99), __webpack_require__(38));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/common", "@angular/forms", "@angular/platform-browser"], factory);
		else if(typeof exports === 'object')
			exports["ng2-select.umd"] = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"), require("@angular/platform-browser"));
		else
			root["ng2-select.umd"] = factory(root["@angular/core"], root["@angular/common"], root["@angular/forms"], root["@angular/platform-browser"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			i: moduleId,
	/******/ 			l: false,
	/******/ 			exports: {}
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.l = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// identity function for calling harmony imports with the correct context
	/******/ 	__webpack_require__.i = function(value) { return value; };
	/******/
	/******/ 	// define getter function for harmony exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		if(!__webpack_require__.o(exports, name)) {
	/******/ 			Object.defineProperty(exports, name, {
	/******/ 				configurable: false,
	/******/ 				enumerable: true,
	/******/ 				get: getter
	/******/ 			});
	/******/ 		}
	/******/ 	};
	/******/
	/******/ 	// getDefaultExport function for compatibility with non-harmony modules
	/******/ 	__webpack_require__.n = function(module) {
	/******/ 		var getter = module && module.__esModule ?
	/******/ 			function getDefault() { return module['default']; } :
	/******/ 			function getModuleExports() { return module; };
	/******/ 		__webpack_require__.d(getter, 'a', getter);
	/******/ 		return getter;
	/******/ 	};
	/******/
	/******/ 	// Object.prototype.hasOwnProperty.call
	/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "/";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = 10);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports) {
	
	module.exports = __WEBPACK_EXTERNAL_MODULE_0__;
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
	
	function escapeRegexp(queryToEscape) {
	    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
	}
	exports.escapeRegexp = escapeRegexp;
	
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(0);
	var common_1 = __webpack_require__(1);
	var HighlightPipe = (function () {
	    function HighlightPipe() {
	    }
	    HighlightPipe.prototype.transform = function (value, query) {
	        if (query.length < 1) {
	            return value;
	        }
	        if (query) {
	            var tagRE = new RegExp('<[^<>]*>', 'ig');
	            // get ist of tags
	            var tagList = value.match(tagRE);
	            // Replace tags with token
	            var tmpValue = value.replace(tagRE, '$!$');
	            // Replace search words
	            value = tmpValue.replace(new RegExp(common_1.escapeRegexp(query), 'gi'), '<strong>$&</strong>');
	            // Reinsert HTML
	            for (var i = 0; value.indexOf('$!$') > -1; i++) {
	                value = value.replace('$!$', tagList[i]);
	            }
	        }
	        return value;
	    };
	    return HighlightPipe;
	}());
	HighlightPipe = __decorate([
	    core_1.Pipe({ name: 'highlight' })
	], HighlightPipe);
	exports.HighlightPipe = HighlightPipe;
	function stripTags(input) {
	    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
	    var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
	    return input.replace(commentsAndPhpTags, '').replace(tags, '');
	}
	exports.stripTags = stripTags;
	
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(0);
	var OffClickDirective = (function () {
	    function OffClickDirective() {
	    }
	    /* tslint:enable */
	    OffClickDirective.prototype.onClick = function ($event) {
	        $event.stopPropagation();
	    };
	    OffClickDirective.prototype.ngOnInit = function () {
	        var _this = this;
	        setTimeout(function () { if (typeof document !== 'undefined') {
	            document.addEventListener('click', _this.offClickHandler);
	        } }, 0);
	    };
	    OffClickDirective.prototype.ngOnDestroy = function () {
	        if (typeof document !== 'undefined') {
	            document.removeEventListener('click', this.offClickHandler);
	        }
	    };
	    return OffClickDirective;
	}());
	__decorate([
	    core_1.Input('offClick'),
	    __metadata("design:type", Object)
	], OffClickDirective.prototype, "offClickHandler", void 0);
	__decorate([
	    core_1.HostListener('click', ['$event']),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", [MouseEvent]),
	    __metadata("design:returntype", void 0)
	], OffClickDirective.prototype, "onClick", null);
	OffClickDirective = __decorate([
	    core_1.Directive({
	        selector: '[offClick]'
	    })
	], OffClickDirective);
	exports.OffClickDirective = OffClickDirective;
	
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var SelectItem = (function () {
	    function SelectItem(source) {
	        var _this = this;
	        if (typeof source === 'string') {
	            this.id = this.text = source;
	        }
	        if (typeof source === 'object') {
	            this.id = source.id || source.text;
	            this.text = source.text;
	            if (source.children && source.text) {
	                this.children = source.children.map(function (c) {
	                    var r = new SelectItem(c);
	                    r.parent = _this;
	                    return r;
	                });
	                this.text = source.text;
	            }
	        }
	    }
	    SelectItem.prototype.fillChildrenHash = function (optionsMap, startIndex) {
	        var i = startIndex;
	        this.children.map(function (child) {
	            optionsMap.set(child.id, i++);
	        });
	        return i;
	    };
	    SelectItem.prototype.hasChildren = function () {
	        return this.children && this.children.length > 0;
	    };
	    SelectItem.prototype.getSimilar = function () {
	        var r = new SelectItem(false);
	        r.id = this.id;
	        r.text = this.text;
	        r.parent = this.parent;
	        return r;
	    };
	    return SelectItem;
	}());
	exports.SelectItem = SelectItem;
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(0);
	var forms_1 = __webpack_require__(8);
	var platform_browser_1 = __webpack_require__(9);
	var select_item_1 = __webpack_require__(4);
	var select_pipes_1 = __webpack_require__(2);
	var common_1 = __webpack_require__(1);
	var styles = "\n  .ui-select-toggle {\n    position: relative;\n  }\n\n  /* Fix caret going into new line in Firefox */\n  .ui-select-placeholder {\n    float: left;\n  }\n  \n  /* Fix Bootstrap dropdown position when inside a input-group */\n  .input-group > .dropdown {\n    /* Instead of relative */\n    position: static;\n  }\n  \n  .ui-select-match > .btn {\n    /* Instead of center because of .btn */\n    text-align: left !important;\n  }\n  \n  .ui-select-match > .caret {\n    position: absolute;\n    top: 45%;\n    right: 15px;\n  }\n  \n  .ui-disabled {\n    background-color: #eceeef;\n    border-radius: 4px;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 5;\n    opacity: 0.6;\n    top: 0;\n    left: 0;\n    cursor: not-allowed;\n  }\n  \n  .ui-select-choices {\n    width: 100%;\n    height: auto;\n    max-height: 200px;\n    overflow-x: hidden;\n    margin-top: 0;\n  }\n  \n  .ui-select-multiple .ui-select-choices {\n    margin-top: 1px;\n  }\n  .ui-select-choices-row>a {\n      display: block;\n      padding: 3px 20px;\n      clear: both;\n      font-weight: 400;\n      line-height: 1.42857143;\n      color: #333;\n      white-space: nowrap;\n  }\n  .ui-select-choices-row.active>a {\n      color: #fff;\n      text-decoration: none;\n      outline: 0;\n      background-color: #428bca;\n  }\n  \n  .ui-select-multiple {\n    height: auto;\n    padding:3px 3px 0 3px;\n  }\n  \n  .ui-select-multiple input.ui-select-search {\n    background-color: transparent !important; /* To prevent double background when disabled */\n    border: none;\n    outline: none;\n    box-shadow: none;\n    height: 1.6666em;\n    padding: 0;\n    margin-bottom: 3px;\n    \n  }\n  .ui-select-match .close {\n      font-size: 1.6em;\n      line-height: 0.75;\n  }\n  \n  .ui-select-multiple .ui-select-match-item {\n    outline: 0;\n    margin: 0 3px 3px 0;\n  }\n  .ui-select-toggle > .caret {\n      position: absolute;\n      height: 10px;\n      top: 50%;\n      right: 10px;\n      margin-top: -2px;\n  }\n";
	var SelectComponent = SelectComponent_1 = (function () {
	    function SelectComponent(element, sanitizer) {
	        this.sanitizer = sanitizer;
	        this.allowClear = false;
	        this.placeholder = '';
	        this.idField = 'id';
	        this.textField = 'text';
	        this.childrenField = 'children';
	        this.multiple = false;
	        this.data = new core_1.EventEmitter();
	        this.selected = new core_1.EventEmitter();
	        this.removed = new core_1.EventEmitter();
	        this.typed = new core_1.EventEmitter();
	        this.opened = new core_1.EventEmitter();
	        this.options = [];
	        this.itemObjects = [];
	        this.onChange = Function.prototype;
	        this.onTouched = Function.prototype;
	        this.inputMode = false;
	        this._optionsOpened = false;
	        this.inputValue = '';
	        this._items = [];
	        this._disabled = false;
	        this._active = [];
	        this.element = element;
	        this.clickedOutside = this.clickedOutside.bind(this);
	    }
	    Object.defineProperty(SelectComponent.prototype, "items", {
	        set: function (value) {
	            var _this = this;
	            if (!value) {
	                this._items = this.itemObjects = [];
	            }
	            else {
	                this._items = value.filter(function (item) {
	                    if ((typeof item === 'string') || (typeof item === 'object' && item && item[_this.textField] && item[_this.idField])) {
	                        return item;
	                    }
	                });
	                this.itemObjects = this._items.map(function (item) { return (typeof item === 'string' ? new select_item_1.SelectItem(item) : new select_item_1.SelectItem({ id: item[_this.idField], text: item[_this.textField], children: item[_this.childrenField] })); });
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SelectComponent.prototype, "disabled", {
	        get: function () {
	            return this._disabled;
	        },
	        set: function (value) {
	            this._disabled = value;
	            if (this._disabled === true) {
	                this.hideOptions();
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SelectComponent.prototype, "active", {
	        get: function () {
	            return this._active;
	        },
	        set: function (selectedItems) {
	            var _this = this;
	            if (!selectedItems || selectedItems.length === 0) {
	                this._active = [];
	            }
	            else {
	                var areItemsStrings_1 = typeof selectedItems[0] === 'string';
	                this._active = selectedItems.map(function (item) {
	                    var data = areItemsStrings_1
	                        ? item
	                        : { id: item[_this.idField], text: item[_this.textField] };
	                    return new select_item_1.SelectItem(data);
	                });
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SelectComponent.prototype, "optionsOpened", {
	        get: function () {
	            return this._optionsOpened;
	        },
	        set: function (value) {
	            this._optionsOpened = value;
	            this.opened.emit(value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SelectComponent.prototype.sanitize = function (html) {
	        return this.sanitizer.bypassSecurityTrustHtml(html);
	    };
	    SelectComponent.prototype.inputEvent = function (e, isUpMode) {
	        if (isUpMode === void 0) { isUpMode = false; }
	        // tab
	        if (e.keyCode === 9) {
	            return;
	        }
	        if (isUpMode && (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 38 ||
	            e.keyCode === 40 || e.keyCode === 13)) {
	            e.preventDefault();
	            return;
	        }
	        // backspace
	        if (!isUpMode && e.keyCode === 8) {
	            var el = this.element.nativeElement
	                .querySelector('div.ui-select-container > input');
	            if (!el.value || el.value.length <= 0) {
	                if (this.active.length > 0) {
	                    this.remove(this.active[this.active.length - 1]);
	                }
	                e.preventDefault();
	            }
	        }
	        // esc
	        if (!isUpMode && e.keyCode === 27) {
	            this.hideOptions();
	            this.element.nativeElement.children[0].focus();
	            e.preventDefault();
	            return;
	        }
	        // del
	        if (!isUpMode && e.keyCode === 46) {
	            if (this.active.length > 0) {
	                this.remove(this.active[this.active.length - 1]);
	            }
	            e.preventDefault();
	        }
	        // left
	        if (!isUpMode && e.keyCode === 37 && this._items.length > 0) {
	            this.behavior.first();
	            e.preventDefault();
	            return;
	        }
	        // right
	        if (!isUpMode && e.keyCode === 39 && this._items.length > 0) {
	            this.behavior.last();
	            e.preventDefault();
	            return;
	        }
	        // up
	        if (!isUpMode && e.keyCode === 38) {
	            this.behavior.prev();
	            e.preventDefault();
	            return;
	        }
	        // down
	        if (!isUpMode && e.keyCode === 40) {
	            this.behavior.next();
	            e.preventDefault();
	            return;
	        }
	        // enter
	        if (!isUpMode && e.keyCode === 13) {
	            if (this.active.indexOf(this.activeOption) === -1) {
	                this.selectActiveMatch();
	                this.behavior.next();
	            }
	            e.preventDefault();
	            return;
	        }
	        var target = e.target || e.srcElement;
	        if (target && target.value) {
	            this.inputValue = target.value;
	            this.behavior.filter(new RegExp(common_1.escapeRegexp(this.inputValue), 'ig'));
	            this.doEvent('typed', this.inputValue);
	        }
	        else {
	            this.open();
	        }
	    };
	    SelectComponent.prototype.ngOnInit = function () {
	        this.behavior = (this.firstItemHasChildren) ?
	            new ChildrenBehavior(this) : new GenericBehavior(this);
	    };
	    SelectComponent.prototype.remove = function (item) {
	        if (this._disabled === true) {
	            return;
	        }
	        if (this.multiple === true && this.active) {
	            var index = this.active.indexOf(item);
	            this.active.splice(index, 1);
	            this.data.next(this.active);
	            this.doEvent('removed', item);
	        }
	        if (this.multiple === false) {
	            this.active = [];
	            this.data.next(this.active);
	            this.doEvent('removed', item);
	        }
	    };
	    SelectComponent.prototype.doEvent = function (type, value) {
	        if (this[type] && value) {
	            this[type].next(value);
	        }
	        this.onTouched();
	        if (type === 'selected' || type === 'removed') {
	            this.onChange(this.active);
	        }
	    };
	    SelectComponent.prototype.clickedOutside = function () {
	        this.inputMode = false;
	        this.optionsOpened = false;
	    };
	    Object.defineProperty(SelectComponent.prototype, "firstItemHasChildren", {
	        get: function () {
	            return this.itemObjects[0] && this.itemObjects[0].hasChildren();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SelectComponent.prototype.writeValue = function (val) {
	        this.active = val;
	        this.data.emit(this.active);
	    };
	    SelectComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	    SelectComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    SelectComponent.prototype.matchClick = function (e) {
	        if (this._disabled === true) {
	            return;
	        }
	        this.inputMode = !this.inputMode;
	        if (this.inputMode === true && ((this.multiple === true && e) || this.multiple === false)) {
	            this.focusToInput();
	            this.open();
	        }
	    };
	    SelectComponent.prototype.mainClick = function (event) {
	        if (this.inputMode === true || this._disabled === true) {
	            return;
	        }
	        if (event.keyCode === 46) {
	            event.preventDefault();
	            this.inputEvent(event);
	            return;
	        }
	        if (event.keyCode === 8) {
	            event.preventDefault();
	            this.inputEvent(event, true);
	            return;
	        }
	        if (event.keyCode === 9 || event.keyCode === 13 ||
	            event.keyCode === 27 || (event.keyCode >= 37 && event.keyCode <= 40)) {
	            event.preventDefault();
	            return;
	        }
	        this.inputMode = true;
	        var value = String
	            .fromCharCode(96 <= event.keyCode && event.keyCode <= 105 ? event.keyCode - 48 : event.keyCode)
	            .toLowerCase();
	        this.focusToInput(value);
	        this.open();
	        var target = event.target || event.srcElement;
	        target.value = value;
	        this.inputEvent(event);
	    };
	    SelectComponent.prototype.selectActive = function (value) {
	        this.activeOption = value;
	    };
	    SelectComponent.prototype.isActive = function (value) {
	        return this.activeOption.id === value.id;
	    };
	    SelectComponent.prototype.removeClick = function (value, event) {
	        event.stopPropagation();
	        this.remove(value);
	    };
	    SelectComponent.prototype.focusToInput = function (value) {
	        var _this = this;
	        if (value === void 0) { value = ''; }
	        setTimeout(function () {
	            var el = _this.element.nativeElement.querySelector('div.ui-select-container > input');
	            if (el) {
	                el.focus();
	                el.value = value;
	            }
	        }, 0);
	    };
	    SelectComponent.prototype.open = function () {
	        var _this = this;
	        this.options = this.itemObjects
	            .filter(function (option) { return (_this.multiple === false ||
	            _this.multiple === true && !_this.active.find(function (o) { return option.text === o.text; })); });
	        if (this.options.length > 0) {
	            this.behavior.first();
	        }
	        this.optionsOpened = true;
	    };
	    SelectComponent.prototype.hideOptions = function () {
	        this.inputMode = false;
	        this.optionsOpened = false;
	    };
	    SelectComponent.prototype.selectActiveMatch = function () {
	        this.selectMatch(this.activeOption);
	    };
	    SelectComponent.prototype.selectMatch = function (value, e) {
	        if (e === void 0) { e = void 0; }
	        if (e) {
	            e.stopPropagation();
	            e.preventDefault();
	        }
	        if (this.options.length <= 0) {
	            return;
	        }
	        if (this.multiple === true) {
	            this.active.push(value);
	            this.data.next(this.active);
	        }
	        if (this.multiple === false) {
	            this.active[0] = value;
	            this.data.next(this.active[0]);
	        }
	        this.doEvent('selected', value);
	        this.hideOptions();
	        if (this.multiple === true) {
	            this.focusToInput('');
	        }
	        else {
	            this.focusToInput(select_pipes_1.stripTags(value.text));
	            this.element.nativeElement.querySelector('.ui-select-container').focus();
	        }
	    };
	    return SelectComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], SelectComponent.prototype, "allowClear", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SelectComponent.prototype, "placeholder", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SelectComponent.prototype, "idField", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SelectComponent.prototype, "textField", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], SelectComponent.prototype, "childrenField", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], SelectComponent.prototype, "multiple", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Array),
	    __metadata("design:paramtypes", [Array])
	], SelectComponent.prototype, "items", null);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean),
	    __metadata("design:paramtypes", [Boolean])
	], SelectComponent.prototype, "disabled", null);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Array),
	    __metadata("design:paramtypes", [Array])
	], SelectComponent.prototype, "active", null);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], SelectComponent.prototype, "data", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], SelectComponent.prototype, "selected", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], SelectComponent.prototype, "removed", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], SelectComponent.prototype, "typed", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], SelectComponent.prototype, "opened", void 0);
	SelectComponent = SelectComponent_1 = __decorate([
	    core_1.Component({
	        selector: 'ng-select',
	        styles: [styles],
	        providers: [
	            {
	                provide: forms_1.NG_VALUE_ACCESSOR,
	                /* tslint:disable */
	                useExisting: core_1.forwardRef(function () { return SelectComponent_1; }),
	                /* tslint:enable */
	                multi: true
	            }
	        ],
	        template: "\n  <div tabindex=\"0\"\n     *ngIf=\"multiple === false\"\n     (keyup)=\"mainClick($event)\"\n     [offClick]=\"clickedOutside\"\n     class=\"ui-select-container dropdown open\">\n    <div [ngClass]=\"{'ui-disabled': disabled}\"></div>\n    <div class=\"ui-select-match\"\n         *ngIf=\"!inputMode\">\n      <span tabindex=\"-1\"\n          class=\"btn btn-default btn-secondary form-control ui-select-toggle\"\n          (click)=\"matchClick($event)\"\n          style=\"outline: 0;\">\n        <span *ngIf=\"active.length <= 0\" class=\"ui-select-placeholder text-muted\">{{placeholder}}</span>\n        <span *ngIf=\"active.length > 0\" class=\"ui-select-match-text pull-left\"\n              [ngClass]=\"{'ui-select-allow-clear': allowClear && active.length > 0}\"\n              [innerHTML]=\"sanitize(active[0].text)\"></span>\n        <i class=\"dropdown-toggle pull-right\"></i>\n        <i class=\"caret pull-right\"></i>\n        <a *ngIf=\"allowClear && active.length>0\" class=\"btn btn-xs btn-link pull-right\" style=\"margin-right: 10px; padding: 0;\" (click)=\"removeClick(active[0], $event)\">\n           <i class=\"glyphicon glyphicon-remove\"></i>\n        </a>\n      </span>\n    </div>\n    <input type=\"text\" autocomplete=\"false\" tabindex=\"-1\"\n           (keydown)=\"inputEvent($event)\"\n           (keyup)=\"inputEvent($event, true)\"\n           [disabled]=\"disabled\"\n           class=\"form-control ui-select-search\"\n           *ngIf=\"inputMode\"\n           placeholder=\"{{active.length <= 0 ? placeholder : ''}}\">\n     <!-- options template -->\n     <ul *ngIf=\"optionsOpened && options && options.length > 0 && !firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let o of options\" role=\"menuitem\">\n          <div class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  \n      <ul *ngIf=\"optionsOpened && options && options.length > 0 && firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let c of options; let index=index\" role=\"menuitem\">\n          <div class=\"divider dropdown-divider\" *ngIf=\"index > 0\"></div>\n          <div class=\"dropdown-header\">{{c.text}}</div>\n  \n          <div *ngFor=\"let o of c.children\"\n               class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\"\n               [ngClass]=\"{'active': isActive(o)}\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  </div>\n\n  <div tabindex=\"0\"\n     *ngIf=\"multiple === true\"\n     (keyup)=\"mainClick($event)\"\n     (focus)=\"focusToInput('')\"\n     [offClick]=\"clickedOutside\"\n     class=\"ui-select-container ui-select-multiple dropdown form-control open\">\n    <div [ngClass]=\"{'ui-disabled': disabled}\"></div>\n    <span class=\"ui-select-match\">\n        <span *ngFor=\"let a of active\">\n            <span class=\"ui-select-match-item btn btn-default btn-secondary btn-xs\"\n                  tabindex=\"-1\"\n                  type=\"button\"\n                  [ngClass]=\"{'btn-default': true}\">\n               <a class=\"close\"\n                  style=\"margin-left: 5px; padding: 0;\"\n                  (click)=\"removeClick(a, $event)\">&times;</a>\n               <span [innerHtml]=\"sanitize(a.text)\"></span>\n           </span>\n        </span>\n    </span>\n    <input type=\"text\"\n           (keydown)=\"inputEvent($event)\"\n           (keyup)=\"inputEvent($event, true)\"\n           (click)=\"matchClick($event)\"\n           [disabled]=\"disabled\"\n           autocomplete=\"false\"\n           autocorrect=\"off\"\n           autocapitalize=\"off\"\n           spellcheck=\"false\"\n           class=\"form-control ui-select-search\"\n           placeholder=\"{{active.length <= 0 ? placeholder : ''}}\"\n           role=\"combobox\">\n     <!-- options template -->\n     <ul *ngIf=\"optionsOpened && options && options.length > 0 && !firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let o of options\" role=\"menuitem\">\n          <div class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  \n      <ul *ngIf=\"optionsOpened && options && options.length > 0 && firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let c of options; let index=index\" role=\"menuitem\">\n          <div class=\"divider dropdown-divider\" *ngIf=\"index > 0\"></div>\n          <div class=\"dropdown-header\">{{c.text}}</div>\n  \n          <div *ngFor=\"let o of c.children\"\n               class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\"\n               [ngClass]=\"{'active': isActive(o)}\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  </div>\n  "
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef, platform_browser_1.DomSanitizer])
	], SelectComponent);
	exports.SelectComponent = SelectComponent;
	var Behavior = (function () {
	    function Behavior(actor) {
	        this.optionsMap = new Map();
	        this.actor = actor;
	    }
	    Behavior.prototype.fillOptionsMap = function () {
	        var _this = this;
	        this.optionsMap.clear();
	        var startPos = 0;
	        this.actor.itemObjects
	            .map(function (item) {
	            startPos = item.fillChildrenHash(_this.optionsMap, startPos);
	        });
	    };
	    Behavior.prototype.ensureHighlightVisible = function (optionsMap) {
	        if (optionsMap === void 0) { optionsMap = void 0; }
	        var container = this.actor.element.nativeElement.querySelector('.ui-select-choices-content');
	        if (!container) {
	            return;
	        }
	        var choices = container.querySelectorAll('.ui-select-choices-row');
	        if (choices.length < 1) {
	            return;
	        }
	        var activeIndex = this.getActiveIndex(optionsMap);
	        if (activeIndex < 0) {
	            return;
	        }
	        var highlighted = choices[activeIndex];
	        if (!highlighted) {
	            return;
	        }
	        var posY = highlighted.offsetTop + highlighted.clientHeight - container.scrollTop;
	        var height = container.offsetHeight;
	        if (posY > height) {
	            container.scrollTop += posY - height;
	        }
	        else if (posY < highlighted.clientHeight) {
	            container.scrollTop -= highlighted.clientHeight - posY;
	        }
	    };
	    Behavior.prototype.getActiveIndex = function (optionsMap) {
	        if (optionsMap === void 0) { optionsMap = void 0; }
	        var ai = this.actor.options.indexOf(this.actor.activeOption);
	        if (ai < 0 && optionsMap !== void 0) {
	            ai = optionsMap.get(this.actor.activeOption.id);
	        }
	        return ai;
	    };
	    return Behavior;
	}());
	exports.Behavior = Behavior;
	var GenericBehavior = (function (_super) {
	    __extends(GenericBehavior, _super);
	    function GenericBehavior(actor) {
	        return _super.call(this, actor) || this;
	    }
	    GenericBehavior.prototype.first = function () {
	        this.actor.activeOption = this.actor.options[0];
	        _super.prototype.ensureHighlightVisible.call(this);
	    };
	    GenericBehavior.prototype.last = function () {
	        this.actor.activeOption = this.actor.options[this.actor.options.length - 1];
	        _super.prototype.ensureHighlightVisible.call(this);
	    };
	    GenericBehavior.prototype.prev = function () {
	        var index = this.actor.options.indexOf(this.actor.activeOption);
	        this.actor.activeOption = this.actor
	            .options[index - 1 < 0 ? this.actor.options.length - 1 : index - 1];
	        _super.prototype.ensureHighlightVisible.call(this);
	    };
	    GenericBehavior.prototype.next = function () {
	        var index = this.actor.options.indexOf(this.actor.activeOption);
	        this.actor.activeOption = this.actor
	            .options[index + 1 > this.actor.options.length - 1 ? 0 : index + 1];
	        _super.prototype.ensureHighlightVisible.call(this);
	    };
	    GenericBehavior.prototype.filter = function (query) {
	        var _this = this;
	        var options = this.actor.itemObjects
	            .filter(function (option) {
	            return select_pipes_1.stripTags(option.text).match(query) &&
	                (_this.actor.multiple === false ||
	                    (_this.actor.multiple === true && _this.actor.active.map(function (item) { return item.id; }).indexOf(option.id) < 0));
	        });
	        this.actor.options = options;
	        if (this.actor.options.length > 0) {
	            this.actor.activeOption = this.actor.options[0];
	            _super.prototype.ensureHighlightVisible.call(this);
	        }
	    };
	    return GenericBehavior;
	}(Behavior));
	exports.GenericBehavior = GenericBehavior;
	var ChildrenBehavior = (function (_super) {
	    __extends(ChildrenBehavior, _super);
	    function ChildrenBehavior(actor) {
	        return _super.call(this, actor) || this;
	    }
	    ChildrenBehavior.prototype.first = function () {
	        this.actor.activeOption = this.actor.options[0].children[0];
	        this.fillOptionsMap();
	        this.ensureHighlightVisible(this.optionsMap);
	    };
	    ChildrenBehavior.prototype.last = function () {
	        this.actor.activeOption =
	            this.actor
	                .options[this.actor.options.length - 1]
	                .children[this.actor.options[this.actor.options.length - 1].children.length - 1];
	        this.fillOptionsMap();
	        this.ensureHighlightVisible(this.optionsMap);
	    };
	    ChildrenBehavior.prototype.prev = function () {
	        var _this = this;
	        var indexParent = this.actor.options
	            .findIndex(function (option) { return _this.actor.activeOption.parent && _this.actor.activeOption.parent.id === option.id; });
	        var index = this.actor.options[indexParent].children
	            .findIndex(function (option) { return _this.actor.activeOption && _this.actor.activeOption.id === option.id; });
	        this.actor.activeOption = this.actor.options[indexParent].children[index - 1];
	        if (!this.actor.activeOption) {
	            if (this.actor.options[indexParent - 1]) {
	                this.actor.activeOption = this.actor
	                    .options[indexParent - 1]
	                    .children[this.actor.options[indexParent - 1].children.length - 1];
	            }
	        }
	        if (!this.actor.activeOption) {
	            this.last();
	        }
	        this.fillOptionsMap();
	        this.ensureHighlightVisible(this.optionsMap);
	    };
	    ChildrenBehavior.prototype.next = function () {
	        var _this = this;
	        var indexParent = this.actor.options
	            .findIndex(function (option) { return _this.actor.activeOption.parent && _this.actor.activeOption.parent.id === option.id; });
	        var index = this.actor.options[indexParent].children
	            .findIndex(function (option) { return _this.actor.activeOption && _this.actor.activeOption.id === option.id; });
	        this.actor.activeOption = this.actor.options[indexParent].children[index + 1];
	        if (!this.actor.activeOption) {
	            if (this.actor.options[indexParent + 1]) {
	                this.actor.activeOption = this.actor.options[indexParent + 1].children[0];
	            }
	        }
	        if (!this.actor.activeOption) {
	            this.first();
	        }
	        this.fillOptionsMap();
	        this.ensureHighlightVisible(this.optionsMap);
	    };
	    ChildrenBehavior.prototype.filter = function (query) {
	        var options = [];
	        var optionsMap = new Map();
	        var startPos = 0;
	        for (var _i = 0, _a = this.actor.itemObjects; _i < _a.length; _i++) {
	            var si = _a[_i];
	            var children = si.children.filter(function (option) { return query.test(option.text); });
	            startPos = si.fillChildrenHash(optionsMap, startPos);
	            if (children.length > 0) {
	                var newSi = si.getSimilar();
	                newSi.children = children;
	                options.push(newSi);
	            }
	        }
	        this.actor.options = options;
	        if (this.actor.options.length > 0) {
	            this.actor.activeOption = this.actor.options[0].children[0];
	            _super.prototype.ensureHighlightVisible.call(this, optionsMap);
	        }
	    };
	    return ChildrenBehavior;
	}(Behavior));
	exports.ChildrenBehavior = ChildrenBehavior;
	var SelectComponent_1;
	
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(0);
	var common_1 = __webpack_require__(7);
	var select_1 = __webpack_require__(5);
	var select_pipes_1 = __webpack_require__(2);
	var off_click_1 = __webpack_require__(3);
	var SelectModule = (function () {
	    function SelectModule() {
	    }
	    return SelectModule;
	}());
	SelectModule = __decorate([
	    core_1.NgModule({
	        imports: [common_1.CommonModule],
	        declarations: [select_1.SelectComponent, select_pipes_1.HighlightPipe, off_click_1.OffClickDirective],
	        exports: [select_1.SelectComponent, select_pipes_1.HighlightPipe, off_click_1.OffClickDirective]
	    })
	], SelectModule);
	exports.SelectModule = SelectModule;
	
	
	/***/ },
	/* 7 */
	/***/ function(module, exports) {
	
	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;
	
	/***/ },
	/* 8 */
	/***/ function(module, exports) {
	
	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;
	
	/***/ },
	/* 9 */
	/***/ function(module, exports) {
	
	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;
	
	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
	
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(1));
	__export(__webpack_require__(3));
	__export(__webpack_require__(6));
	__export(__webpack_require__(5));
	__export(__webpack_require__(4));
	__export(__webpack_require__(2));
	
	
	/***/ }
	/******/ ]);
	});
	//# sourceMappingURL=ng2-select.umd.js.map

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @license Angular v4.4.4
	 * (c) 2010-2017 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
		 true ? factory(exports, __webpack_require__(3), __webpack_require__(100), __webpack_require__(102), __webpack_require__(104), __webpack_require__(38)) :
		typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/observable/forkJoin', 'rxjs/observable/fromPromise', 'rxjs/operator/map', '@angular/platform-browser'], factory) :
		(factory((global.ng = global.ng || {}, global.ng.forms = global.ng.forms || {}),global.ng.core,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable.prototype,global.ng.platformBrowser));
	}(this, (function (exports,_angular_core,rxjs_observable_forkJoin,rxjs_observable_fromPromise,rxjs_operator_map,_angular_platformBrowser) { 'use strict';
	
	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0
	
	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.
	
	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	/* global Reflect, Promise */
	
	var extendStatics = Object.setPrototypeOf ||
	    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	
	function __extends(d, b) {
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}
	
	/**
	 * @license Angular v4.4.4
	 * (c) 2010-2017 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * Base class for control directives.
	 *
	 * Only used internally in the forms module.
	 *
	 * \@stable
	 * @abstract
	 */
	var AbstractControlDirective = (function () {
	    function AbstractControlDirective() {
	    }
	    /**
	     * The {\@link FormControl}, {\@link FormGroup}, or {\@link FormArray}
	     * that backs this directive. Most properties fall through to that
	     * instance.
	     * @abstract
	     * @return {?}
	     */
	    AbstractControlDirective.prototype.control = function () { };
	    Object.defineProperty(AbstractControlDirective.prototype, "value", {
	        /**
	         * The value of the control.
	         * @return {?}
	         */
	        get: function () { return this.control ? this.control.value : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "valid", {
	        /**
	         * A control is `valid` when its `status === VALID`.
	         *
	         * In order to have this status, the control must have passed all its
	         * validation checks.
	         * @return {?}
	         */
	        get: function () { return this.control ? this.control.valid : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
	        /**
	         * A control is `invalid` when its `status === INVALID`.
	         *
	         * In order to have this status, the control must have failed
	         * at least one of its validation checks.
	         * @return {?}
	         */
	        get: function () { return this.control ? this.control.invalid : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "pending", {
	        /**
	         * A control is `pending` when its `status === PENDING`.
	         *
	         * In order to have this status, the control must be in the
	         * middle of conducting a validation check.
	         * @return {?}
	         */
	        get: function () { return this.control ? this.control.pending : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
	        /**
	         * A control is `disabled` when its `status === DISABLED`.
	         *
	         * Disabled controls are exempt from validation checks and
	         * are not included in the aggregate value of their ancestor
	         * controls.
	         * @return {?}
	         */
	        get: function () { return this.control ? this.control.disabled : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
	        /**
	         * A control is `enabled` as long as its `status !== DISABLED`.
	         *
	         * In other words, it has a status of `VALID`, `INVALID`, or
	         * `PENDING`.
	         * @return {?}
	         */
	        get: function () { return this.control ? this.control.enabled : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "errors", {
	        /**
	         * Returns any errors generated by failing validation. If there
	         * are no errors, it will return null.
	         * @return {?}
	         */
	        get: function () { return this.control ? this.control.errors : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
	        /**
	         * A control is `pristine` if the user has not yet changed
	         * the value in the UI.
	         *
	         * Note that programmatic changes to a control's value will
	         * *not* mark it dirty.
	         * @return {?}
	         */
	        get: function () { return this.control ? this.control.pristine : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
	        /**
	         * A control is `dirty` if the user has changed the value
	         * in the UI.
	         *
	         * Note that programmatic changes to a control's value will
	         * *not* mark it dirty.
	         * @return {?}
	         */
	        get: function () { return this.control ? this.control.dirty : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "touched", {
	        /**
	         * A control is marked `touched` once the user has triggered
	         * a `blur` event on it.
	         * @return {?}
	         */
	        get: function () { return this.control ? this.control.touched : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
	        /**
	         * A control is `untouched` if the user has not yet triggered
	         * a `blur` event on it.
	         * @return {?}
	         */
	        get: function () { return this.control ? this.control.untouched : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
	        /**
	         * Emits an event every time the validation status of the control
	         * is re-calculated.
	         * @return {?}
	         */
	        get: function () {
	            return this.control ? this.control.statusChanges : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
	        /**
	         * Emits an event every time the value of the control changes, in
	         * the UI or programmatically.
	         * @return {?}
	         */
	        get: function () {
	            return this.control ? this.control.valueChanges : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "path", {
	        /**
	         * Returns an array that represents the path from the top-level form
	         * to this control. Each index is the string name of the control on
	         * that level.
	         * @return {?}
	         */
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Resets the form control. This means by default:
	     *
	     * * it is marked as `pristine`
	     * * it is marked as `untouched`
	     * * value is set to null
	     *
	     * For more information, see {\@link AbstractControl}.
	     * @param {?=} value
	     * @return {?}
	     */
	    AbstractControlDirective.prototype.reset = function (value) {
	        if (value === void 0) { value = undefined; }
	        if (this.control)
	            this.control.reset(value);
	    };
	    /**
	     * Returns true if the control with the given path has the error specified. Otherwise
	     * returns false.
	     *
	     * If no path is given, it checks for the error on the present control.
	     * @param {?} errorCode
	     * @param {?=} path
	     * @return {?}
	     */
	    AbstractControlDirective.prototype.hasError = function (errorCode, path) {
	        return this.control ? this.control.hasError(errorCode, path) : false;
	    };
	    /**
	     * Returns error data if the control with the given path has the error specified. Otherwise
	     * returns null or undefined.
	     *
	     * If no path is given, it checks for the error on the present control.
	     * @param {?} errorCode
	     * @param {?=} path
	     * @return {?}
	     */
	    AbstractControlDirective.prototype.getError = function (errorCode, path) {
	        return this.control ? this.control.getError(errorCode, path) : null;
	    };
	    return AbstractControlDirective;
	}());
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * A directive that contains multiple {\@link NgControl}s.
	 *
	 * Only used by the forms module.
	 *
	 * \@stable
	 * @abstract
	 */
	var ControlContainer = (function (_super) {
	    __extends(ControlContainer, _super);
	    function ControlContainer() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Object.defineProperty(ControlContainer.prototype, "formDirective", {
	        /**
	         * Get the form to which this container belongs.
	         * @return {?}
	         */
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ControlContainer.prototype, "path", {
	        /**
	         * Get the path to this container.
	         * @return {?}
	         */
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    return ControlContainer;
	}(AbstractControlDirective));
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * @param {?} value
	 * @return {?}
	 */
	function isEmptyInputValue(value) {
	    // we don't check for string here so it also works with arrays
	    return value == null || value.length === 0;
	}
	/**
	 * Providers for validators to be used for {\@link FormControl}s in a form.
	 *
	 * Provide this using `multi: true` to add validators.
	 *
	 * \@stable
	 */
	var NG_VALIDATORS = new _angular_core.InjectionToken('NgValidators');
	/**
	 * Providers for asynchronous validators to be used for {\@link FormControl}s
	 * in a form.
	 *
	 * Provide this using `multi: true` to add validators.
	 *
	 * See {\@link NG_VALIDATORS} for more details.
	 *
	 * \@stable
	 */
	var NG_ASYNC_VALIDATORS = new _angular_core.InjectionToken('NgAsyncValidators');
	var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
	/**
	 * Provides a set of validators used by form controls.
	 *
	 * A validator is a function that processes a {\@link FormControl} or collection of
	 * controls and returns a map of errors. A null map means that validation has passed.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * var loginControl = new FormControl("", Validators.required)
	 * ```
	 *
	 * \@stable
	 */
	var Validators = (function () {
	    function Validators() {
	    }
	    /**
	     * Validator that requires controls to have a value greater than a number.
	     * @param {?} min
	     * @return {?}
	     */
	    Validators.min = function (min) {
	        return function (control) {
	            if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
	                return null; // don't validate empty values to allow optional controls
	            }
	            var /** @type {?} */ value = parseFloat(control.value);
	            // Controls with NaN values after parsing should be treated as not having a
	            // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
	            return !isNaN(value) && value < min ? { 'min': { 'min': min, 'actual': control.value } } : null;
	        };
	    };
	    /**
	     * Validator that requires controls to have a value less than a number.
	     * @param {?} max
	     * @return {?}
	     */
	    Validators.max = function (max) {
	        return function (control) {
	            if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
	                return null; // don't validate empty values to allow optional controls
	            }
	            var /** @type {?} */ value = parseFloat(control.value);
	            // Controls with NaN values after parsing should be treated as not having a
	            // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max
	            return !isNaN(value) && value > max ? { 'max': { 'max': max, 'actual': control.value } } : null;
	        };
	    };
	    /**
	     * Validator that requires controls to have a non-empty value.
	     * @param {?} control
	     * @return {?}
	     */
	    Validators.required = function (control) {
	        return isEmptyInputValue(control.value) ? { 'required': true } : null;
	    };
	    /**
	     * Validator that requires control value to be true.
	     * @param {?} control
	     * @return {?}
	     */
	    Validators.requiredTrue = function (control) {
	        return control.value === true ? null : { 'required': true };
	    };
	    /**
	     * Validator that performs email validation.
	     * @param {?} control
	     * @return {?}
	     */
	    Validators.email = function (control) {
	        return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
	    };
	    /**
	     * Validator that requires controls to have a value of a minimum length.
	     * @param {?} minLength
	     * @return {?}
	     */
	    Validators.minLength = function (minLength) {
	        return function (control) {
	            if (isEmptyInputValue(control.value)) {
	                return null; // don't validate empty values to allow optional controls
	            }
	            var /** @type {?} */ length = control.value ? control.value.length : 0;
	            return length < minLength ?
	                { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
	                null;
	        };
	    };
	    /**
	     * Validator that requires controls to have a value of a maximum length.
	     * @param {?} maxLength
	     * @return {?}
	     */
	    Validators.maxLength = function (maxLength) {
	        return function (control) {
	            var /** @type {?} */ length = control.value ? control.value.length : 0;
	            return length > maxLength ?
	                { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
	                null;
	        };
	    };
	    /**
	     * Validator that requires a control to match a regex to its value.
	     * @param {?} pattern
	     * @return {?}
	     */
	    Validators.pattern = function (pattern) {
	        if (!pattern)
	            return Validators.nullValidator;
	        var /** @type {?} */ regex;
	        var /** @type {?} */ regexStr;
	        if (typeof pattern === 'string') {
	            regexStr = "^" + pattern + "$";
	            regex = new RegExp(regexStr);
	        }
	        else {
	            regexStr = pattern.toString();
	            regex = pattern;
	        }
	        return function (control) {
	            if (isEmptyInputValue(control.value)) {
	                return null; // don't validate empty values to allow optional controls
	            }
	            var /** @type {?} */ value = control.value;
	            return regex.test(value) ? null :
	                { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
	        };
	    };
	    /**
	     * No-op validator.
	     * @param {?} c
	     * @return {?}
	     */
	    Validators.nullValidator = function (c) { return null; };
	    /**
	     * @param {?} validators
	     * @return {?}
	     */
	    Validators.compose = function (validators) {
	        if (!validators)
	            return null;
	        var /** @type {?} */ presentValidators = (validators.filter(isPresent));
	        if (presentValidators.length == 0)
	            return null;
	        return function (control) {
	            return _mergeErrors(_executeValidators(control, presentValidators));
	        };
	    };
	    /**
	     * @param {?} validators
	     * @return {?}
	     */
	    Validators.composeAsync = function (validators) {
	        if (!validators)
	            return null;
	        var /** @type {?} */ presentValidators = (validators.filter(isPresent));
	        if (presentValidators.length == 0)
	            return null;
	        return function (control) {
	            var /** @type {?} */ observables = _executeAsyncValidators(control, presentValidators).map(toObservable);
	            return rxjs_operator_map.map.call(rxjs_observable_forkJoin.forkJoin(observables), _mergeErrors);
	        };
	    };
	    return Validators;
	}());
	/**
	 * @param {?} o
	 * @return {?}
	 */
	function isPresent(o) {
	    return o != null;
	}
	/**
	 * @param {?} r
	 * @return {?}
	 */
	function toObservable(r) {
	    var /** @type {?} */ obs = _angular_core.ɵisPromise(r) ? rxjs_observable_fromPromise.fromPromise(r) : r;
	    if (!(_angular_core.ɵisObservable(obs))) {
	        throw new Error("Expected validator to return Promise or Observable.");
	    }
	    return obs;
	}
	/**
	 * @param {?} control
	 * @param {?} validators
	 * @return {?}
	 */
	function _executeValidators(control, validators) {
	    return validators.map(function (v) { return v(control); });
	}
	/**
	 * @param {?} control
	 * @param {?} validators
	 * @return {?}
	 */
	function _executeAsyncValidators(control, validators) {
	    return validators.map(function (v) { return v(control); });
	}
	/**
	 * @param {?} arrayOfErrors
	 * @return {?}
	 */
	function _mergeErrors(arrayOfErrors) {
	    var /** @type {?} */ res = arrayOfErrors.reduce(function (res, errors) {
	        return errors != null ? Object.assign({}, /** @type {?} */ ((res)), errors) : ((res));
	    }, {});
	    return Object.keys(res).length === 0 ? null : res;
	}
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * Used to provide a {\@link ControlValueAccessor} for form controls.
	 *
	 * See {\@link DefaultValueAccessor} for how to implement one.
	 * \@stable
	 */
	var NG_VALUE_ACCESSOR = new _angular_core.InjectionToken('NgValueAccessor');
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var CHECKBOX_VALUE_ACCESSOR = {
	    provide: NG_VALUE_ACCESSOR,
	    useExisting: _angular_core.forwardRef(function () { return CheckboxControlValueAccessor; }),
	    multi: true,
	};
	/**
	 * The accessor for writing a value and listening to changes on a checkbox input element.
	 *
	 *  ### Example
	 *  ```
	 *  <input type="checkbox" name="rememberLogin" ngModel>
	 *  ```
	 *
	 *  \@stable
	 */
	var CheckboxControlValueAccessor = (function () {
	    /**
	     * @param {?} _renderer
	     * @param {?} _elementRef
	     */
	    function CheckboxControlValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    CheckboxControlValueAccessor.prototype.writeValue = function (value) {
	        this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /**
	     * @param {?} isDisabled
	     * @return {?}
	     */
	    CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	    };
	    return CheckboxControlValueAccessor;
	}());
	CheckboxControlValueAccessor.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
	                host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
	                providers: [CHECKBOX_VALUE_ACCESSOR]
	            },] },
	];
	/**
	 * @nocollapse
	 */
	CheckboxControlValueAccessor.ctorParameters = function () { return [
	    { type: _angular_core.Renderer2, },
	    { type: _angular_core.ElementRef, },
	]; };
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var DEFAULT_VALUE_ACCESSOR = {
	    provide: NG_VALUE_ACCESSOR,
	    useExisting: _angular_core.forwardRef(function () { return DefaultValueAccessor; }),
	    multi: true
	};
	/**
	 * We must check whether the agent is Android because composition events
	 * behave differently between iOS and Android.
	 * @return {?}
	 */
	function _isAndroid() {
	    var /** @type {?} */ userAgent = _angular_platformBrowser.ɵgetDOM() ? _angular_platformBrowser.ɵgetDOM().getUserAgent() : '';
	    return /android (\d+)/.test(userAgent.toLowerCase());
	}
	/**
	 * Turn this mode on if you want form directives to buffer IME input until compositionend
	 * \@experimental
	 */
	var COMPOSITION_BUFFER_MODE = new _angular_core.InjectionToken('CompositionEventMode');
	/**
	 * The default accessor for writing a value and listening to changes that is used by the
	 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
	 *
	 *  ### Example
	 *  ```
	 *  <input type="text" name="searchQuery" ngModel>
	 *  ```
	 *
	 *  \@stable
	 */
	var DefaultValueAccessor = (function () {
	    /**
	     * @param {?} _renderer
	     * @param {?} _elementRef
	     * @param {?} _compositionMode
	     */
	    function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this._compositionMode = _compositionMode;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	        /**
	         * Whether the user is creating a composition string (IME events).
	         */
	        this._composing = false;
	        if (this._compositionMode == null) {
	            this._compositionMode = !_isAndroid();
	        }
	    }
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    DefaultValueAccessor.prototype.writeValue = function (value) {
	        var /** @type {?} */ normalizedValue = value == null ? '' : value;
	        this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /**
	     * @param {?} isDisabled
	     * @return {?}
	     */
	    DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
	        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	    };
	    /**
	     * \@internal
	     * @param {?} value
	     * @return {?}
	     */
	    DefaultValueAccessor.prototype._handleInput = function (value) {
	        if (!this._compositionMode || (this._compositionMode && !this._composing)) {
	            this.onChange(value);
	        }
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    DefaultValueAccessor.prototype._compositionStart = function () { this._composing = true; };
	    /**
	     * \@internal
	     * @param {?} value
	     * @return {?}
	     */
	    DefaultValueAccessor.prototype._compositionEnd = function (value) {
	        this._composing = false;
	        this._compositionMode && this.onChange(value);
	    };
	    return DefaultValueAccessor;
	}());
	DefaultValueAccessor.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
	                // TODO: vsavkin replace the above selector with the one below it once
	                // https://github.com/angular/angular/issues/3011 is implemented
	                // selector: '[ngModel],[formControl],[formControlName]',
	                host: {
	                    '(input)': '_handleInput($event.target.value)',
	                    '(blur)': 'onTouched()',
	                    '(compositionstart)': '_compositionStart()',
	                    '(compositionend)': '_compositionEnd($event.target.value)'
	                },
	                providers: [DEFAULT_VALUE_ACCESSOR]
	            },] },
	];
	/**
	 * @nocollapse
	 */
	DefaultValueAccessor.ctorParameters = function () { return [
	    { type: _angular_core.Renderer2, },
	    { type: _angular_core.ElementRef, },
	    { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [COMPOSITION_BUFFER_MODE,] },] },
	]; };
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * @param {?} validator
	 * @return {?}
	 */
	function normalizeValidator(validator) {
	    if (((validator)).validate) {
	        return function (c) { return ((validator)).validate(c); };
	    }
	    else {
	        return (validator);
	    }
	}
	/**
	 * @param {?} validator
	 * @return {?}
	 */
	function normalizeAsyncValidator(validator) {
	    if (((validator)).validate) {
	        return function (c) { return ((validator)).validate(c); };
	    }
	    else {
	        return (validator);
	    }
	}
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var NUMBER_VALUE_ACCESSOR = {
	    provide: NG_VALUE_ACCESSOR,
	    useExisting: _angular_core.forwardRef(function () { return NumberValueAccessor; }),
	    multi: true
	};
	/**
	 * The accessor for writing a number value and listening to changes that is used by the
	 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
	 *
	 *  ### Example
	 *  ```
	 *  <input type="number" [(ngModel)]="age">
	 *  ```
	 */
	var NumberValueAccessor = (function () {
	    /**
	     * @param {?} _renderer
	     * @param {?} _elementRef
	     */
	    function NumberValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    NumberValueAccessor.prototype.writeValue = function (value) {
	        // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
	        var /** @type {?} */ normalizedValue = value == null ? '' : value;
	        this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    NumberValueAccessor.prototype.registerOnChange = function (fn) {
	        this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /**
	     * @param {?} isDisabled
	     * @return {?}
	     */
	    NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
	        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	    };
	    return NumberValueAccessor;
	}());
	NumberValueAccessor.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
	                host: {
	                    '(change)': 'onChange($event.target.value)',
	                    '(input)': 'onChange($event.target.value)',
	                    '(blur)': 'onTouched()'
	                },
	                providers: [NUMBER_VALUE_ACCESSOR]
	            },] },
	];
	/**
	 * @nocollapse
	 */
	NumberValueAccessor.ctorParameters = function () { return [
	    { type: _angular_core.Renderer2, },
	    { type: _angular_core.ElementRef, },
	]; };
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * @return {?}
	 */
	function unimplemented() {
	    throw new Error('unimplemented');
	}
	/**
	 * A base class that all control directive extend.
	 * It binds a {\@link FormControl} object to a DOM element.
	 *
	 * Used internally by Angular forms.
	 *
	 * \@stable
	 * @abstract
	 */
	var NgControl = (function (_super) {
	    __extends(NgControl, _super);
	    function NgControl() {
	        var _this = _super.apply(this, arguments) || this;
	        /**
	         * \@internal
	         */
	        _this._parent = null;
	        _this.name = null;
	        _this.valueAccessor = null;
	        /**
	         * \@internal
	         */
	        _this._rawValidators = [];
	        /**
	         * \@internal
	         */
	        _this._rawAsyncValidators = [];
	        return _this;
	    }
	    Object.defineProperty(NgControl.prototype, "validator", {
	        /**
	         * @return {?}
	         */
	        get: function () { return (unimplemented()); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControl.prototype, "asyncValidator", {
	        /**
	         * @return {?}
	         */
	        get: function () { return (unimplemented()); },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @abstract
	     * @param {?} newValue
	     * @return {?}
	     */
	    NgControl.prototype.viewToModelUpdate = function (newValue) { };
	    return NgControl;
	}(AbstractControlDirective));
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var RADIO_VALUE_ACCESSOR = {
	    provide: NG_VALUE_ACCESSOR,
	    useExisting: _angular_core.forwardRef(function () { return RadioControlValueAccessor; }),
	    multi: true
	};
	/**
	 * Internal class used by Angular to uncheck radio buttons with the matching name.
	 */
	var RadioControlRegistry = (function () {
	    function RadioControlRegistry() {
	        this._accessors = [];
	    }
	    /**
	     * @param {?} control
	     * @param {?} accessor
	     * @return {?}
	     */
	    RadioControlRegistry.prototype.add = function (control, accessor) {
	        this._accessors.push([control, accessor]);
	    };
	    /**
	     * @param {?} accessor
	     * @return {?}
	     */
	    RadioControlRegistry.prototype.remove = function (accessor) {
	        for (var /** @type {?} */ i = this._accessors.length - 1; i >= 0; --i) {
	            if (this._accessors[i][1] === accessor) {
	                this._accessors.splice(i, 1);
	                return;
	            }
	        }
	    };
	    /**
	     * @param {?} accessor
	     * @return {?}
	     */
	    RadioControlRegistry.prototype.select = function (accessor) {
	        var _this = this;
	        this._accessors.forEach(function (c) {
	            if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
	                c[1].fireUncheck(accessor.value);
	            }
	        });
	    };
	    /**
	     * @param {?} controlPair
	     * @param {?} accessor
	     * @return {?}
	     */
	    RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
	        if (!controlPair[0].control)
	            return false;
	        return controlPair[0]._parent === accessor._control._parent &&
	            controlPair[1].name === accessor.name;
	    };
	    return RadioControlRegistry;
	}());
	RadioControlRegistry.decorators = [
	    { type: _angular_core.Injectable },
	];
	/**
	 * @nocollapse
	 */
	RadioControlRegistry.ctorParameters = function () { return []; };
	/**
	 * \@whatItDoes Writes radio control values and listens to radio control changes.
	 *
	 * Used by {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName}
	 * to keep the view synced with the {\@link FormControl} model.
	 *
	 * \@howToUse
	 *
	 * If you have imported the {\@link FormsModule} or the {\@link ReactiveFormsModule}, this
	 * value accessor will be active on any radio control that has a form directive. You do
	 * **not** need to add a special selector to activate it.
	 *
	 * ### How to use radio buttons with form directives
	 *
	 * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
	 * in the same group have the same `name` attribute.  Radio buttons with different `name`
	 * attributes do not affect each other.
	 *
	 * {\@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
	 *
	 * When using radio buttons in a reactive form, radio buttons in the same group should have the
	 * same `formControlName`. You can also add a `name` attribute, but it's optional.
	 *
	 * {\@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
	 *
	 *  * **npm package**: `\@angular/forms`
	 *
	 *  \@stable
	 */
	var RadioControlValueAccessor = (function () {
	    /**
	     * @param {?} _renderer
	     * @param {?} _elementRef
	     * @param {?} _registry
	     * @param {?} _injector
	     */
	    function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this._registry = _registry;
	        this._injector = _injector;
	        this.onChange = function () { };
	        this.onTouched = function () { };
	    }
	    /**
	     * @return {?}
	     */
	    RadioControlValueAccessor.prototype.ngOnInit = function () {
	        this._control = this._injector.get(NgControl);
	        this._checkName();
	        this._registry.add(this._control, this);
	    };
	    /**
	     * @return {?}
	     */
	    RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    RadioControlValueAccessor.prototype.writeValue = function (value) {
	        this._state = value === this.value;
	        this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
	        var _this = this;
	        this._fn = fn;
	        this.onChange = function () {
	            fn(_this.value);
	            _this._registry.select(_this);
	        };
	    };
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /**
	     * @param {?} isDisabled
	     * @return {?}
	     */
	    RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	    };
	    /**
	     * @return {?}
	     */
	    RadioControlValueAccessor.prototype._checkName = function () {
	        if (this.name && this.formControlName && this.name !== this.formControlName) {
	            this._throwNameError();
	        }
	        if (!this.name && this.formControlName)
	            this.name = this.formControlName;
	    };
	    /**
	     * @return {?}
	     */
	    RadioControlValueAccessor.prototype._throwNameError = function () {
	        throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
	    };
	    return RadioControlValueAccessor;
	}());
	RadioControlValueAccessor.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
	                host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
	                providers: [RADIO_VALUE_ACCESSOR]
	            },] },
	];
	/**
	 * @nocollapse
	 */
	RadioControlValueAccessor.ctorParameters = function () { return [
	    { type: _angular_core.Renderer2, },
	    { type: _angular_core.ElementRef, },
	    { type: RadioControlRegistry, },
	    { type: _angular_core.Injector, },
	]; };
	RadioControlValueAccessor.propDecorators = {
	    'name': [{ type: _angular_core.Input },],
	    'formControlName': [{ type: _angular_core.Input },],
	    'value': [{ type: _angular_core.Input },],
	};
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var RANGE_VALUE_ACCESSOR = {
	    provide: NG_VALUE_ACCESSOR,
	    useExisting: _angular_core.forwardRef(function () { return RangeValueAccessor; }),
	    multi: true
	};
	/**
	 * The accessor for writing a range value and listening to changes that is used by the
	 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
	 *
	 *  ### Example
	 *  ```
	 *  <input type="range" [(ngModel)]="age" >
	 *  ```
	 */
	var RangeValueAccessor = (function () {
	    /**
	     * @param {?} _renderer
	     * @param {?} _elementRef
	     */
	    function RangeValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    RangeValueAccessor.prototype.writeValue = function (value) {
	        this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    RangeValueAccessor.prototype.registerOnChange = function (fn) {
	        this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    RangeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /**
	     * @param {?} isDisabled
	     * @return {?}
	     */
	    RangeValueAccessor.prototype.setDisabledState = function (isDisabled) {
	        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	    };
	    return RangeValueAccessor;
	}());
	RangeValueAccessor.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
	                host: {
	                    '(change)': 'onChange($event.target.value)',
	                    '(input)': 'onChange($event.target.value)',
	                    '(blur)': 'onTouched()'
	                },
	                providers: [RANGE_VALUE_ACCESSOR]
	            },] },
	];
	/**
	 * @nocollapse
	 */
	RangeValueAccessor.ctorParameters = function () { return [
	    { type: _angular_core.Renderer2, },
	    { type: _angular_core.ElementRef, },
	]; };
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var SELECT_VALUE_ACCESSOR = {
	    provide: NG_VALUE_ACCESSOR,
	    useExisting: _angular_core.forwardRef(function () { return SelectControlValueAccessor; }),
	    multi: true
	};
	/**
	 * @param {?} id
	 * @param {?} value
	 * @return {?}
	 */
	function _buildValueString(id, value) {
	    if (id == null)
	        return "" + value;
	    if (value && typeof value === 'object')
	        value = 'Object';
	    return (id + ": " + value).slice(0, 50);
	}
	/**
	 * @param {?} valueString
	 * @return {?}
	 */
	function _extractId(valueString) {
	    return valueString.split(':')[0];
	}
	/**
	 * \@whatItDoes Writes values and listens to changes on a select element.
	 *
	 * Used by {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName}
	 * to keep the view synced with the {\@link FormControl} model.
	 *
	 * \@howToUse
	 *
	 * If you have imported the {\@link FormsModule} or the {\@link ReactiveFormsModule}, this
	 * value accessor will be active on any select control that has a form directive. You do
	 * **not** need to add a special selector to activate it.
	 *
	 * ### How to use select controls with form directives
	 *
	 * To use a select in a template-driven form, simply add an `ngModel` and a `name`
	 * attribute to the main `<select>` tag.
	 *
	 * If your option values are simple strings, you can bind to the normal `value` property
	 * on the option.  If your option values happen to be objects (and you'd like to save the
	 * selection in your form as an object), use `ngValue` instead:
	 *
	 * {\@example forms/ts/selectControl/select_control_example.ts region='Component'}
	 *
	 * In reactive forms, you'll also want to add your form directive (`formControlName` or
	 * `formControl`) on the main `<select>` tag. Like in the former example, you have the
	 * choice of binding to the  `value` or `ngValue` property on the select's options.
	 *
	 * {\@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
	 *
	 * ### Caveat: Option selection
	 *
	 * Angular uses object identity to select option. It's possible for the identities of items
	 * to change while the data does not. This can happen, for example, if the items are produced
	 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
	 * second response will produce objects with different identities.
	 *
	 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
	 * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
	 * If `compareWith` is given, Angular selects option by the return value of the function.
	 *
	 * #### Syntax
	 *
	 * ```
	 * <select [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
	 *     <option *ngFor="let country of countries" [ngValue]="country">
	 *         {{country.name}}
	 *     </option>
	 * </select>
	 *
	 * compareFn(c1: Country, c2: Country): boolean {
	 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
	 * }
	 * ```
	 *
	 * Note: We listen to the 'change' event because 'input' events aren't fired
	 * for selects in Firefox and IE:
	 * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
	 * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
	 *
	 * * **npm package**: `\@angular/forms`
	 *
	 * \@stable
	 */
	var SelectControlValueAccessor = (function () {
	    /**
	     * @param {?} _renderer
	     * @param {?} _elementRef
	     */
	    function SelectControlValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        /**
	         * \@internal
	         */
	        this._optionMap = new Map();
	        /**
	         * \@internal
	         */
	        this._idCounter = 0;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	        this._compareWith = _angular_core.ɵlooseIdentical;
	    }
	    Object.defineProperty(SelectControlValueAccessor.prototype, "compareWith", {
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        set: function (fn) {
	            if (typeof fn !== 'function') {
	                throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
	            }
	            this._compareWith = fn;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    SelectControlValueAccessor.prototype.writeValue = function (value) {
	        this.value = value;
	        var /** @type {?} */ id = this._getOptionId(value);
	        if (id == null) {
	            this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
	        }
	        var /** @type {?} */ valueString = _buildValueString(id, value);
	        this._renderer.setProperty(this._elementRef.nativeElement, 'value', valueString);
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
	        var _this = this;
	        this.onChange = function (valueString) {
	            _this.value = _this._getOptionValue(valueString);
	            fn(_this.value);
	        };
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /**
	     * @param {?} isDisabled
	     * @return {?}
	     */
	    SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
	    /**
	     * \@internal
	     * @param {?} value
	     * @return {?}
	     */
	    SelectControlValueAccessor.prototype._getOptionId = function (value) {
	        for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
	            var id = _a[_i];
	            if (this._compareWith(this._optionMap.get(id), value))
	                return id;
	        }
	        return null;
	    };
	    /**
	     * \@internal
	     * @param {?} valueString
	     * @return {?}
	     */
	    SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
	        var /** @type {?} */ id = _extractId(valueString);
	        return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
	    };
	    return SelectControlValueAccessor;
	}());
	SelectControlValueAccessor.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
	                host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                providers: [SELECT_VALUE_ACCESSOR]
	            },] },
	];
	/**
	 * @nocollapse
	 */
	SelectControlValueAccessor.ctorParameters = function () { return [
	    { type: _angular_core.Renderer2, },
	    { type: _angular_core.ElementRef, },
	]; };
	SelectControlValueAccessor.propDecorators = {
	    'compareWith': [{ type: _angular_core.Input },],
	};
	/**
	 * \@whatItDoes Marks `<option>` as dynamic, so Angular can be notified when options change.
	 *
	 * \@howToUse
	 *
	 * See docs for {\@link SelectControlValueAccessor} for usage examples.
	 *
	 * \@stable
	 */
	var NgSelectOption = (function () {
	    /**
	     * @param {?} _element
	     * @param {?} _renderer
	     * @param {?} _select
	     */
	    function NgSelectOption(_element, _renderer, _select) {
	        this._element = _element;
	        this._renderer = _renderer;
	        this._select = _select;
	        if (this._select)
	            this.id = this._select._registerOption();
	    }
	    Object.defineProperty(NgSelectOption.prototype, "ngValue", {
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        set: function (value) {
	            if (this._select == null)
	                return;
	            this._select._optionMap.set(this.id, value);
	            this._setElementValue(_buildValueString(this.id, value));
	            this._select.writeValue(this._select.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgSelectOption.prototype, "value", {
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        set: function (value) {
	            this._setElementValue(value);
	            if (this._select)
	                this._select.writeValue(this._select.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * \@internal
	     * @param {?} value
	     * @return {?}
	     */
	    NgSelectOption.prototype._setElementValue = function (value) {
	        this._renderer.setProperty(this._element.nativeElement, 'value', value);
	    };
	    /**
	     * @return {?}
	     */
	    NgSelectOption.prototype.ngOnDestroy = function () {
	        if (this._select) {
	            this._select._optionMap.delete(this.id);
	            this._select.writeValue(this._select.value);
	        }
	    };
	    return NgSelectOption;
	}());
	NgSelectOption.decorators = [
	    { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	];
	/**
	 * @nocollapse
	 */
	NgSelectOption.ctorParameters = function () { return [
	    { type: _angular_core.ElementRef, },
	    { type: _angular_core.Renderer2, },
	    { type: SelectControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	]; };
	NgSelectOption.propDecorators = {
	    'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	    'value': [{ type: _angular_core.Input, args: ['value',] },],
	};
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var SELECT_MULTIPLE_VALUE_ACCESSOR = {
	    provide: NG_VALUE_ACCESSOR,
	    useExisting: _angular_core.forwardRef(function () { return SelectMultipleControlValueAccessor; }),
	    multi: true
	};
	/**
	 * @param {?} id
	 * @param {?} value
	 * @return {?}
	 */
	function _buildValueString$1(id, value) {
	    if (id == null)
	        return "" + value;
	    if (typeof value === 'string')
	        value = "'" + value + "'";
	    if (value && typeof value === 'object')
	        value = 'Object';
	    return (id + ": " + value).slice(0, 50);
	}
	/**
	 * @param {?} valueString
	 * @return {?}
	 */
	function _extractId$1(valueString) {
	    return valueString.split(':')[0];
	}
	/**
	 * The accessor for writing a value and listening to changes on a select element.
	 *
	 *  ### Caveat: Options selection
	 *
	 * Angular uses object identity to select options. It's possible for the identities of items
	 * to change while the data does not. This can happen, for example, if the items are produced
	 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
	 * second response will produce objects with different identities.
	 *
	 * To customize the default option comparison algorithm, `<select multiple>` supports `compareWith`
	 * input. `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
	 * If `compareWith` is given, Angular selects options by the return value of the function.
	 *
	 * #### Syntax
	 *
	 * ```
	 * <select multiple [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
	 *     <option *ngFor="let country of countries" [ngValue]="country">
	 *         {{country.name}}
	 *     </option>
	 * </select>
	 *
	 * compareFn(c1: Country, c2: Country): boolean {
	 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
	 * }
	 * ```
	 *
	 * \@stable
	 */
	var SelectMultipleControlValueAccessor = (function () {
	    /**
	     * @param {?} _renderer
	     * @param {?} _elementRef
	     */
	    function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        /**
	         * \@internal
	         */
	        this._optionMap = new Map();
	        /**
	         * \@internal
	         */
	        this._idCounter = 0;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	        this._compareWith = _angular_core.ɵlooseIdentical;
	    }
	    Object.defineProperty(SelectMultipleControlValueAccessor.prototype, "compareWith", {
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        set: function (fn) {
	            if (typeof fn !== 'function') {
	                throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
	            }
	            this._compareWith = fn;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
	        var _this = this;
	        this.value = value;
	        var /** @type {?} */ optionSelectedStateSetter;
	        if (Array.isArray(value)) {
	            // convert values to ids
	            var /** @type {?} */ ids_1 = value.map(function (v) { return _this._getOptionId(v); });
	            optionSelectedStateSetter = function (opt, o) { opt._setSelected(ids_1.indexOf(o.toString()) > -1); };
	        }
	        else {
	            optionSelectedStateSetter = function (opt, o) { opt._setSelected(false); };
	        }
	        this._optionMap.forEach(optionSelectedStateSetter);
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
	        var _this = this;
	        this.onChange = function (_) {
	            var /** @type {?} */ selected = [];
	            if (_.hasOwnProperty('selectedOptions')) {
	                var /** @type {?} */ options = _.selectedOptions;
	                for (var /** @type {?} */ i = 0; i < options.length; i++) {
	                    var /** @type {?} */ opt = options.item(i);
	                    var /** @type {?} */ val = _this._getOptionValue(opt.value);
	                    selected.push(val);
	                }
	            }
	            else {
	                var /** @type {?} */ options = (_.options);
	                for (var /** @type {?} */ i = 0; i < options.length; i++) {
	                    var /** @type {?} */ opt = options.item(i);
	                    if (opt.selected) {
	                        var /** @type {?} */ val = _this._getOptionValue(opt.value);
	                        selected.push(val);
	                    }
	                }
	            }
	            _this.value = selected;
	            fn(selected);
	        };
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /**
	     * @param {?} isDisabled
	     * @return {?}
	     */
	    SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	    };
	    /**
	     * \@internal
	     * @param {?} value
	     * @return {?}
	     */
	    SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
	        var /** @type {?} */ id = (this._idCounter++).toString();
	        this._optionMap.set(id, value);
	        return id;
	    };
	    /**
	     * \@internal
	     * @param {?} value
	     * @return {?}
	     */
	    SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
	        for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
	            var id = _a[_i];
	            if (this._compareWith(/** @type {?} */ ((this._optionMap.get(id)))._value, value))
	                return id;
	        }
	        return null;
	    };
	    /**
	     * \@internal
	     * @param {?} valueString
	     * @return {?}
	     */
	    SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
	        var /** @type {?} */ id = _extractId$1(valueString);
	        return this._optionMap.has(id) ? ((this._optionMap.get(id)))._value : valueString;
	    };
	    return SelectMultipleControlValueAccessor;
	}());
	SelectMultipleControlValueAccessor.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
	                host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
	                providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
	            },] },
	];
	/**
	 * @nocollapse
	 */
	SelectMultipleControlValueAccessor.ctorParameters = function () { return [
	    { type: _angular_core.Renderer2, },
	    { type: _angular_core.ElementRef, },
	]; };
	SelectMultipleControlValueAccessor.propDecorators = {
	    'compareWith': [{ type: _angular_core.Input },],
	};
	/**
	 * Marks `<option>` as dynamic, so Angular can be notified when options change.
	 *
	 * ### Example
	 *
	 * ```
	 * <select multiple name="city" ngModel>
	 *   <option *ngFor="let c of cities" [value]="c"></option>
	 * </select>
	 * ```
	 */
	var NgSelectMultipleOption = (function () {
	    /**
	     * @param {?} _element
	     * @param {?} _renderer
	     * @param {?} _select
	     */
	    function NgSelectMultipleOption(_element, _renderer, _select) {
	        this._element = _element;
	        this._renderer = _renderer;
	        this._select = _select;
	        if (this._select) {
	            this.id = this._select._registerOption(this);
	        }
	    }
	    Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        set: function (value) {
	            if (this._select == null)
	                return;
	            this._value = value;
	            this._setElementValue(_buildValueString$1(this.id, value));
	            this._select.writeValue(this._select.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        set: function (value) {
	            if (this._select) {
	                this._value = value;
	                this._setElementValue(_buildValueString$1(this.id, value));
	                this._select.writeValue(this._select.value);
	            }
	            else {
	                this._setElementValue(value);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * \@internal
	     * @param {?} value
	     * @return {?}
	     */
	    NgSelectMultipleOption.prototype._setElementValue = function (value) {
	        this._renderer.setProperty(this._element.nativeElement, 'value', value);
	    };
	    /**
	     * \@internal
	     * @param {?} selected
	     * @return {?}
	     */
	    NgSelectMultipleOption.prototype._setSelected = function (selected) {
	        this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
	    };
	    /**
	     * @return {?}
	     */
	    NgSelectMultipleOption.prototype.ngOnDestroy = function () {
	        if (this._select) {
	            this._select._optionMap.delete(this.id);
	            this._select.writeValue(this._select.value);
	        }
	    };
	    return NgSelectMultipleOption;
	}());
	NgSelectMultipleOption.decorators = [
	    { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	];
	/**
	 * @nocollapse
	 */
	NgSelectMultipleOption.ctorParameters = function () { return [
	    { type: _angular_core.ElementRef, },
	    { type: _angular_core.Renderer2, },
	    { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	]; };
	NgSelectMultipleOption.propDecorators = {
	    'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	    'value': [{ type: _angular_core.Input, args: ['value',] },],
	};
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * @param {?} name
	 * @param {?} parent
	 * @return {?}
	 */
	function controlPath(name, parent) {
	    return ((parent.path)).concat([name]);
	}
	/**
	 * @param {?} control
	 * @param {?} dir
	 * @return {?}
	 */
	function setUpControl(control, dir) {
	    if (!control)
	        _throwError(dir, 'Cannot find control with');
	    if (!dir.valueAccessor)
	        _throwError(dir, 'No value accessor for form control with');
	    control.validator = Validators.compose([/** @type {?} */ ((control.validator)), dir.validator]);
	    control.asyncValidator = Validators.composeAsync([/** @type {?} */ ((control.asyncValidator)), dir.asyncValidator]); /** @type {?} */
	    ((dir.valueAccessor)).writeValue(control.value); /** @type {?} */
	    ((
	    // view -> model
	    dir.valueAccessor)).registerOnChange(function (newValue) {
	        dir.viewToModelUpdate(newValue);
	        control.markAsDirty();
	        control.setValue(newValue, { emitModelToViewChange: false });
	    }); /** @type {?} */
	    ((
	    // touched
	    dir.valueAccessor)).registerOnTouched(function () { return control.markAsTouched(); });
	    control.registerOnChange(function (newValue, emitModelEvent) {
	        ((
	        // control -> view
	        dir.valueAccessor)).writeValue(newValue);
	        // control -> ngModel
	        if (emitModelEvent)
	            dir.viewToModelUpdate(newValue);
	    });
	    if (((dir.valueAccessor)).setDisabledState) {
	        control.registerOnDisabledChange(function (isDisabled) { /** @type {?} */ ((((dir.valueAccessor)).setDisabledState))(isDisabled); });
	    }
	    // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
	    dir._rawValidators.forEach(function (validator) {
	        if (((validator)).registerOnValidatorChange)
	            ((((validator)).registerOnValidatorChange))(function () { return control.updateValueAndValidity(); });
	    });
	    dir._rawAsyncValidators.forEach(function (validator) {
	        if (((validator)).registerOnValidatorChange)
	            ((((validator)).registerOnValidatorChange))(function () { return control.updateValueAndValidity(); });
	    });
	}
	/**
	 * @param {?} control
	 * @param {?} dir
	 * @return {?}
	 */
	function cleanUpControl(control, dir) {
	    ((dir.valueAccessor)).registerOnChange(function () { return _noControlError(dir); }); /** @type {?} */
	    ((dir.valueAccessor)).registerOnTouched(function () { return _noControlError(dir); });
	    dir._rawValidators.forEach(function (validator) {
	        if (validator.registerOnValidatorChange) {
	            validator.registerOnValidatorChange(null);
	        }
	    });
	    dir._rawAsyncValidators.forEach(function (validator) {
	        if (validator.registerOnValidatorChange) {
	            validator.registerOnValidatorChange(null);
	        }
	    });
	    if (control)
	        control._clearChangeFns();
	}
	/**
	 * @param {?} control
	 * @param {?} dir
	 * @return {?}
	 */
	function setUpFormContainer(control, dir) {
	    if (control == null)
	        _throwError(dir, 'Cannot find control with');
	    control.validator = Validators.compose([control.validator, dir.validator]);
	    control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	}
	/**
	 * @param {?} dir
	 * @return {?}
	 */
	function _noControlError(dir) {
	    return _throwError(dir, 'There is no FormControl instance attached to form control element with');
	}
	/**
	 * @param {?} dir
	 * @param {?} message
	 * @return {?}
	 */
	function _throwError(dir, message) {
	    var /** @type {?} */ messageEnd;
	    if (((dir.path)).length > 1) {
	        messageEnd = "path: '" + ((dir.path)).join(' -> ') + "'";
	    }
	    else if (((dir.path))[0]) {
	        messageEnd = "name: '" + dir.path + "'";
	    }
	    else {
	        messageEnd = 'unspecified name attribute';
	    }
	    throw new Error(message + " " + messageEnd);
	}
	/**
	 * @param {?} validators
	 * @return {?}
	 */
	function composeValidators(validators) {
	    return validators != null ? Validators.compose(validators.map(normalizeValidator)) : null;
	}
	/**
	 * @param {?} validators
	 * @return {?}
	 */
	function composeAsyncValidators(validators) {
	    return validators != null ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
	        null;
	}
	/**
	 * @param {?} changes
	 * @param {?} viewModel
	 * @return {?}
	 */
	function isPropertyUpdated(changes, viewModel) {
	    if (!changes.hasOwnProperty('model'))
	        return false;
	    var /** @type {?} */ change = changes['model'];
	    if (change.isFirstChange())
	        return true;
	    return !_angular_core.ɵlooseIdentical(viewModel, change.currentValue);
	}
	var BUILTIN_ACCESSORS = [
	    CheckboxControlValueAccessor,
	    RangeValueAccessor,
	    NumberValueAccessor,
	    SelectControlValueAccessor,
	    SelectMultipleControlValueAccessor,
	    RadioControlValueAccessor,
	];
	/**
	 * @param {?} valueAccessor
	 * @return {?}
	 */
	function isBuiltInAccessor(valueAccessor) {
	    return BUILTIN_ACCESSORS.some(function (a) { return valueAccessor.constructor === a; });
	}
	/**
	 * @param {?} dir
	 * @param {?} valueAccessors
	 * @return {?}
	 */
	function selectValueAccessor(dir, valueAccessors) {
	    if (!valueAccessors)
	        return null;
	    var /** @type {?} */ defaultAccessor = undefined;
	    var /** @type {?} */ builtinAccessor = undefined;
	    var /** @type {?} */ customAccessor = undefined;
	    valueAccessors.forEach(function (v) {
	        if (v.constructor === DefaultValueAccessor) {
	            defaultAccessor = v;
	        }
	        else if (isBuiltInAccessor(v)) {
	            if (builtinAccessor)
	                _throwError(dir, 'More than one built-in value accessor matches form control with');
	            builtinAccessor = v;
	        }
	        else {
	            if (customAccessor)
	                _throwError(dir, 'More than one custom value accessor matches form control with');
	            customAccessor = v;
	        }
	    });
	    if (customAccessor)
	        return customAccessor;
	    if (builtinAccessor)
	        return builtinAccessor;
	    if (defaultAccessor)
	        return defaultAccessor;
	    _throwError(dir, 'No valid value accessor for form control with');
	    return null;
	}
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * This is a base class for code shared between {\@link NgModelGroup} and {\@link FormGroupName}.
	 *
	 * \@stable
	 */
	var AbstractFormGroupDirective = (function (_super) {
	    __extends(AbstractFormGroupDirective, _super);
	    function AbstractFormGroupDirective() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    /**
	     * @return {?}
	     */
	    AbstractFormGroupDirective.prototype.ngOnInit = function () {
	        this._checkParentType(); /** @type {?} */
	        ((this.formDirective)).addFormGroup(this);
	    };
	    /**
	     * @return {?}
	     */
	    AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
	        if (this.formDirective) {
	            this.formDirective.removeFormGroup(this);
	        }
	    };
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
	        /**
	         * Get the {\@link FormGroup} backing this binding.
	         * @return {?}
	         */
	        get: function () { return ((this.formDirective)).getFormGroup(this); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
	        /**
	         * Get the path to this control group.
	         * @return {?}
	         */
	        get: function () { return controlPath(this.name, this._parent); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
	        /**
	         * Get the {\@link Form} to which this group belongs.
	         * @return {?}
	         */
	        get: function () { return this._parent ? this._parent.formDirective : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
	        /**
	         * @return {?}
	         */
	        get: function () { return composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
	        /**
	         * @return {?}
	         */
	        get: function () {
	            return composeAsyncValidators(this._asyncValidators);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * \@internal
	     * @return {?}
	     */
	    AbstractFormGroupDirective.prototype._checkParentType = function () { };
	    return AbstractFormGroupDirective;
	}(ControlContainer));
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var AbstractControlStatus = (function () {
	    /**
	     * @param {?} cd
	     */
	    function AbstractControlStatus(cd) {
	        this._cd = cd;
	    }
	    Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._cd.control ? this._cd.control.untouched : false; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._cd.control ? this._cd.control.touched : false; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._cd.control ? this._cd.control.pristine : false; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._cd.control ? this._cd.control.dirty : false; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._cd.control ? this._cd.control.valid : false; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._cd.control ? this._cd.control.invalid : false; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._cd.control ? this._cd.control.pending : false; },
	        enumerable: true,
	        configurable: true
	    });
	    return AbstractControlStatus;
	}());
	var ngControlStatusHost = {
	    '[class.ng-untouched]': 'ngClassUntouched',
	    '[class.ng-touched]': 'ngClassTouched',
	    '[class.ng-pristine]': 'ngClassPristine',
	    '[class.ng-dirty]': 'ngClassDirty',
	    '[class.ng-valid]': 'ngClassValid',
	    '[class.ng-invalid]': 'ngClassInvalid',
	    '[class.ng-pending]': 'ngClassPending',
	};
	/**
	 * Directive automatically applied to Angular form controls that sets CSS classes
	 * based on control status. The following classes are applied as the properties
	 * become true:
	 *
	 * * ng-valid
	 * * ng-invalid
	 * * ng-pending
	 * * ng-pristine
	 * * ng-dirty
	 * * ng-untouched
	 * * ng-touched
	 *
	 * \@stable
	 */
	var NgControlStatus = (function (_super) {
	    __extends(NgControlStatus, _super);
	    /**
	     * @param {?} cd
	     */
	    function NgControlStatus(cd) {
	        return _super.call(this, cd) || this;
	    }
	    return NgControlStatus;
	}(AbstractControlStatus));
	NgControlStatus.decorators = [
	    { type: _angular_core.Directive, args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] },
	];
	/**
	 * @nocollapse
	 */
	NgControlStatus.ctorParameters = function () { return [
	    { type: NgControl, decorators: [{ type: _angular_core.Self },] },
	]; };
	/**
	 * Directive automatically applied to Angular form groups that sets CSS classes
	 * based on control status (valid/invalid/dirty/etc).
	 *
	 * \@stable
	 */
	var NgControlStatusGroup = (function (_super) {
	    __extends(NgControlStatusGroup, _super);
	    /**
	     * @param {?} cd
	     */
	    function NgControlStatusGroup(cd) {
	        return _super.call(this, cd) || this;
	    }
	    return NgControlStatusGroup;
	}(AbstractControlStatus));
	NgControlStatusGroup.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
	                host: ngControlStatusHost
	            },] },
	];
	/**
	 * @nocollapse
	 */
	NgControlStatusGroup.ctorParameters = function () { return [
	    { type: ControlContainer, decorators: [{ type: _angular_core.Self },] },
	]; };
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
	 */
	var VALID = 'VALID';
	/**
	 * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
	 */
	var INVALID = 'INVALID';
	/**
	 * Indicates that a FormControl is pending, i.e. that async validation is occurring and
	 * errors are not yet available for the input value.
	 */
	var PENDING = 'PENDING';
	/**
	 * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
	 * calculations of validity or value.
	 */
	var DISABLED = 'DISABLED';
	/**
	 * @param {?} control
	 * @param {?} path
	 * @param {?} delimiter
	 * @return {?}
	 */
	function _find(control, path, delimiter) {
	    if (path == null)
	        return null;
	    if (!(path instanceof Array)) {
	        path = ((path)).split(delimiter);
	    }
	    if (path instanceof Array && (path.length === 0))
	        return null;
	    return ((path)).reduce(function (v, name) {
	        if (v instanceof FormGroup) {
	            return v.controls[name] || null;
	        }
	        if (v instanceof FormArray) {
	            return v.at(/** @type {?} */ (name)) || null;
	        }
	        return null;
	    }, control);
	}
	/**
	 * @param {?=} validator
	 * @return {?}
	 */
	function coerceToValidator(validator) {
	    return Array.isArray(validator) ? composeValidators(validator) : validator || null;
	}
	/**
	 * @param {?=} asyncValidator
	 * @return {?}
	 */
	function coerceToAsyncValidator(asyncValidator) {
	    return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) :
	        asyncValidator || null;
	}
	/**
	 * \@whatItDoes This is the base class for {\@link FormControl}, {\@link FormGroup}, and
	 * {\@link FormArray}.
	 *
	 * It provides some of the shared behavior that all controls and groups of controls have, like
	 * running validators, calculating status, and resetting state. It also defines the properties
	 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
	 * instantiated directly.
	 *
	 * \@stable
	 * @abstract
	 */
	var AbstractControl = (function () {
	    /**
	     * @param {?} validator
	     * @param {?} asyncValidator
	     */
	    function AbstractControl(validator, asyncValidator) {
	        this.validator = validator;
	        this.asyncValidator = asyncValidator;
	        /**
	         * \@internal
	         */
	        this._onCollectionChange = function () { };
	        this._pristine = true;
	        this._touched = false;
	        /**
	         * \@internal
	         */
	        this._onDisabledChange = [];
	    }
	    Object.defineProperty(AbstractControl.prototype, "value", {
	        /**
	         * The value of the control.
	         * @return {?}
	         */
	        get: function () { return this._value; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "parent", {
	        /**
	         * The parent control.
	         * @return {?}
	         */
	        get: function () { return this._parent; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "status", {
	        /**
	         * The validation status of the control. There are four possible
	         * validation statuses:
	         *
	         * * **VALID**:  control has passed all validation checks
	         * * **INVALID**: control has failed at least one validation check
	         * * **PENDING**: control is in the midst of conducting a validation check
	         * * **DISABLED**: control is exempt from validation checks
	         *
	         * These statuses are mutually exclusive, so a control cannot be
	         * both valid AND invalid or invalid AND disabled.
	         * @return {?}
	         */
	        get: function () { return this._status; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "valid", {
	        /**
	         * A control is `valid` when its `status === VALID`.
	         *
	         * In order to have this status, the control must have passed all its
	         * validation checks.
	         * @return {?}
	         */
	        get: function () { return this._status === VALID; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "invalid", {
	        /**
	         * A control is `invalid` when its `status === INVALID`.
	         *
	         * In order to have this status, the control must have failed
	         * at least one of its validation checks.
	         * @return {?}
	         */
	        get: function () { return this._status === INVALID; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "pending", {
	        /**
	         * A control is `pending` when its `status === PENDING`.
	         *
	         * In order to have this status, the control must be in the
	         * middle of conducting a validation check.
	         * @return {?}
	         */
	        get: function () { return this._status == PENDING; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "disabled", {
	        /**
	         * A control is `disabled` when its `status === DISABLED`.
	         *
	         * Disabled controls are exempt from validation checks and
	         * are not included in the aggregate value of their ancestor
	         * controls.
	         * @return {?}
	         */
	        get: function () { return this._status === DISABLED; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "enabled", {
	        /**
	         * A control is `enabled` as long as its `status !== DISABLED`.
	         *
	         * In other words, it has a status of `VALID`, `INVALID`, or
	         * `PENDING`.
	         * @return {?}
	         */
	        get: function () { return this._status !== DISABLED; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "errors", {
	        /**
	         * Returns any errors generated by failing validation. If there
	         * are no errors, it will return null.
	         * @return {?}
	         */
	        get: function () { return this._errors; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "pristine", {
	        /**
	         * A control is `pristine` if the user has not yet changed
	         * the value in the UI.
	         *
	         * Note that programmatic changes to a control's value will
	         * *not* mark it dirty.
	         * @return {?}
	         */
	        get: function () { return this._pristine; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "dirty", {
	        /**
	         * A control is `dirty` if the user has changed the value
	         * in the UI.
	         *
	         * Note that programmatic changes to a control's value will
	         * *not* mark it dirty.
	         * @return {?}
	         */
	        get: function () { return !this.pristine; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "touched", {
	        /**
	         * A control is marked `touched` once the user has triggered
	         * a `blur` event on it.
	         * @return {?}
	         */
	        get: function () { return this._touched; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "untouched", {
	        /**
	         * A control is `untouched` if the user has not yet triggered
	         * a `blur` event on it.
	         * @return {?}
	         */
	        get: function () { return !this._touched; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "valueChanges", {
	        /**
	         * Emits an event every time the value of the control changes, in
	         * the UI or programmatically.
	         * @return {?}
	         */
	        get: function () { return this._valueChanges; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "statusChanges", {
	        /**
	         * Emits an event every time the validation status of the control
	         * is re-calculated.
	         * @return {?}
	         */
	        get: function () { return this._statusChanges; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Sets the synchronous validators that are active on this control.  Calling
	     * this will overwrite any existing sync validators.
	     * @param {?} newValidator
	     * @return {?}
	     */
	    AbstractControl.prototype.setValidators = function (newValidator) {
	        this.validator = coerceToValidator(newValidator);
	    };
	    /**
	     * Sets the async validators that are active on this control. Calling this
	     * will overwrite any existing async validators.
	     * @param {?} newValidator
	     * @return {?}
	     */
	    AbstractControl.prototype.setAsyncValidators = function (newValidator) {
	        this.asyncValidator = coerceToAsyncValidator(newValidator);
	    };
	    /**
	     * Empties out the sync validator list.
	     * @return {?}
	     */
	    AbstractControl.prototype.clearValidators = function () { this.validator = null; };
	    /**
	     * Empties out the async validator list.
	     * @return {?}
	     */
	    AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
	    /**
	     * Marks the control as `touched`.
	     *
	     * This will also mark all direct ancestors as `touched` to maintain
	     * the model.
	     * @param {?=} opts
	     * @return {?}
	     */
	    AbstractControl.prototype.markAsTouched = function (opts) {
	        if (opts === void 0) { opts = {}; }
	        this._touched = true;
	        if (this._parent && !opts.onlySelf) {
	            this._parent.markAsTouched(opts);
	        }
	    };
	    /**
	     * Marks the control as `untouched`.
	     *
	     * If the control has any children, it will also mark all children as `untouched`
	     * to maintain the model, and re-calculate the `touched` status of all parent
	     * controls.
	     * @param {?=} opts
	     * @return {?}
	     */
	    AbstractControl.prototype.markAsUntouched = function (opts) {
	        if (opts === void 0) { opts = {}; }
	        this._touched = false;
	        this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
	        if (this._parent && !opts.onlySelf) {
	            this._parent._updateTouched(opts);
	        }
	    };
	    /**
	     * Marks the control as `dirty`.
	     *
	     * This will also mark all direct ancestors as `dirty` to maintain
	     * the model.
	     * @param {?=} opts
	     * @return {?}
	     */
	    AbstractControl.prototype.markAsDirty = function (opts) {
	        if (opts === void 0) { opts = {}; }
	        this._pristine = false;
	        if (this._parent && !opts.onlySelf) {
	            this._parent.markAsDirty(opts);
	        }
	    };
	    /**
	     * Marks the control as `pristine`.
	     *
	     * If the control has any children, it will also mark all children as `pristine`
	     * to maintain the model, and re-calculate the `pristine` status of all parent
	     * controls.
	     * @param {?=} opts
	     * @return {?}
	     */
	    AbstractControl.prototype.markAsPristine = function (opts) {
	        if (opts === void 0) { opts = {}; }
	        this._pristine = true;
	        this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
	        if (this._parent && !opts.onlySelf) {
	            this._parent._updatePristine(opts);
	        }
	    };
	    /**
	     * Marks the control as `pending`.
	     * @param {?=} opts
	     * @return {?}
	     */
	    AbstractControl.prototype.markAsPending = function (opts) {
	        if (opts === void 0) { opts = {}; }
	        this._status = PENDING;
	        if (this._parent && !opts.onlySelf) {
	            this._parent.markAsPending(opts);
	        }
	    };
	    /**
	     * Disables the control. This means the control will be exempt from validation checks and
	     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
	     *
	     * If the control has children, all children will be disabled to maintain the model.
	     * @param {?=} opts
	     * @return {?}
	     */
	    AbstractControl.prototype.disable = function (opts) {
	        if (opts === void 0) { opts = {}; }
	        this._status = DISABLED;
	        this._errors = null;
	        this._forEachChild(function (control) { control.disable({ onlySelf: true }); });
	        this._updateValue();
	        if (opts.emitEvent !== false) {
	            this._valueChanges.emit(this._value);
	            this._statusChanges.emit(this._status);
	        }
	        this._updateAncestors(!!opts.onlySelf);
	        this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
	    };
	    /**
	     * Enables the control. This means the control will be included in validation checks and
	     * the aggregate value of its parent. Its status is re-calculated based on its value and
	     * its validators.
	     *
	     * If the control has children, all children will be enabled.
	     * @param {?=} opts
	     * @return {?}
	     */
	    AbstractControl.prototype.enable = function (opts) {
	        if (opts === void 0) { opts = {}; }
	        this._status = VALID;
	        this._forEachChild(function (control) { control.enable({ onlySelf: true }); });
	        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
	        this._updateAncestors(!!opts.onlySelf);
	        this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
	    };
	    /**
	     * @param {?} onlySelf
	     * @return {?}
	     */
	    AbstractControl.prototype._updateAncestors = function (onlySelf) {
	        if (this._parent && !onlySelf) {
	            this._parent.updateValueAndValidity();
	            this._parent._updatePristine();
	            this._parent._updateTouched();
	        }
	    };
	    /**
	     * @param {?} parent
	     * @return {?}
	     */
	    AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
	    /**
	     * Sets the value of the control. Abstract method (implemented in sub-classes).
	     * @abstract
	     * @param {?} value
	     * @param {?=} options
	     * @return {?}
	     */
	    AbstractControl.prototype.setValue = function (value, options) { };
	    /**
	     * Patches the value of the control. Abstract method (implemented in sub-classes).
	     * @abstract
	     * @param {?} value
	     * @param {?=} options
	     * @return {?}
	     */
	    AbstractControl.prototype.patchValue = function (value, options) { };
	    /**
	     * Resets the control. Abstract method (implemented in sub-classes).
	     * @abstract
	     * @param {?=} value
	     * @param {?=} options
	     * @return {?}
	     */
	    AbstractControl.prototype.reset = function (value, options) { };
	    /**
	     * Re-calculates the value and validation status of the control.
	     *
	     * By default, it will also update the value and validity of its ancestors.
	     * @param {?=} opts
	     * @return {?}
	     */
	    AbstractControl.prototype.updateValueAndValidity = function (opts) {
	        if (opts === void 0) { opts = {}; }
	        this._setInitialStatus();
	        this._updateValue();
	        if (this.enabled) {
	            this._cancelExistingSubscription();
	            this._errors = this._runValidator();
	            this._status = this._calculateStatus();
	            if (this._status === VALID || this._status === PENDING) {
	                this._runAsyncValidator(opts.emitEvent);
	            }
	        }
	        if (opts.emitEvent !== false) {
	            this._valueChanges.emit(this._value);
	            this._statusChanges.emit(this._status);
	        }
	        if (this._parent && !opts.onlySelf) {
	            this._parent.updateValueAndValidity(opts);
	        }
	    };
	    /**
	     * \@internal
	     * @param {?=} opts
	     * @return {?}
	     */
	    AbstractControl.prototype._updateTreeValidity = function (opts) {
	        if (opts === void 0) { opts = { emitEvent: true }; }
	        this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity(opts); });
	        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
	    };
	    /**
	     * @return {?}
	     */
	    AbstractControl.prototype._setInitialStatus = function () { this._status = this._allControlsDisabled() ? DISABLED : VALID; };
	    /**
	     * @return {?}
	     */
	    AbstractControl.prototype._runValidator = function () {
	        return this.validator ? this.validator(this) : null;
	    };
	    /**
	     * @param {?=} emitEvent
	     * @return {?}
	     */
	    AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
	        var _this = this;
	        if (this.asyncValidator) {
	            this._status = PENDING;
	            var /** @type {?} */ obs = toObservable(this.asyncValidator(this));
	            this._asyncValidationSubscription =
	                obs.subscribe(function (errors) { return _this.setErrors(errors, { emitEvent: emitEvent }); });
	        }
	    };
	    /**
	     * @return {?}
	     */
	    AbstractControl.prototype._cancelExistingSubscription = function () {
	        if (this._asyncValidationSubscription) {
	            this._asyncValidationSubscription.unsubscribe();
	        }
	    };
	    /**
	     * Sets errors on a form control.
	     *
	     * This is used when validations are run manually by the user, rather than automatically.
	     *
	     * Calling `setErrors` will also update the validity of the parent control.
	     *
	     * ### Example
	     *
	     * ```
	     * const login = new FormControl("someLogin");
	     * login.setErrors({
	     *   "notUnique": true
	     * });
	     *
	     * expect(login.valid).toEqual(false);
	     * expect(login.errors).toEqual({"notUnique": true});
	     *
	     * login.setValue("someOtherLogin");
	     *
	     * expect(login.valid).toEqual(true);
	     * ```
	     * @param {?} errors
	     * @param {?=} opts
	     * @return {?}
	     */
	    AbstractControl.prototype.setErrors = function (errors, opts) {
	        if (opts === void 0) { opts = {}; }
	        this._errors = errors;
	        this._updateControlsErrors(opts.emitEvent !== false);
	    };
	    /**
	     * Retrieves a child control given the control's name or path.
	     *
	     * Paths can be passed in as an array or a string delimited by a dot.
	     *
	     * To get a control nested within a `person` sub-group:
	     *
	     * * `this.form.get('person.name');`
	     *
	     * -OR-
	     *
	     * * `this.form.get(['person', 'name']);`
	     * @param {?} path
	     * @return {?}
	     */
	    AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
	    /**
	     * Returns error data if the control with the given path has the error specified. Otherwise
	     * returns null or undefined.
	     *
	     * If no path is given, it checks for the error on the present control.
	     * @param {?} errorCode
	     * @param {?=} path
	     * @return {?}
	     */
	    AbstractControl.prototype.getError = function (errorCode, path) {
	        var /** @type {?} */ control = path ? this.get(path) : this;
	        return control && control._errors ? control._errors[errorCode] : null;
	    };
	    /**
	     * Returns true if the control with the given path has the error specified. Otherwise
	     * returns false.
	     *
	     * If no path is given, it checks for the error on the present control.
	     * @param {?} errorCode
	     * @param {?=} path
	     * @return {?}
	     */
	    AbstractControl.prototype.hasError = function (errorCode, path) { return !!this.getError(errorCode, path); };
	    Object.defineProperty(AbstractControl.prototype, "root", {
	        /**
	         * Retrieves the top-level ancestor of this control.
	         * @return {?}
	         */
	        get: function () {
	            var /** @type {?} */ x = this;
	            while (x._parent) {
	                x = x._parent;
	            }
	            return x;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * \@internal
	     * @param {?} emitEvent
	     * @return {?}
	     */
	    AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
	        this._status = this._calculateStatus();
	        if (emitEvent) {
	            this._statusChanges.emit(this._status);
	        }
	        if (this._parent) {
	            this._parent._updateControlsErrors(emitEvent);
	        }
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    AbstractControl.prototype._initObservables = function () {
	        this._valueChanges = new _angular_core.EventEmitter();
	        this._statusChanges = new _angular_core.EventEmitter();
	    };
	    /**
	     * @return {?}
	     */
	    AbstractControl.prototype._calculateStatus = function () {
	        if (this._allControlsDisabled())
	            return DISABLED;
	        if (this._errors)
	            return INVALID;
	        if (this._anyControlsHaveStatus(PENDING))
	            return PENDING;
	        if (this._anyControlsHaveStatus(INVALID))
	            return INVALID;
	        return VALID;
	    };
	    /**
	     * \@internal
	     * @abstract
	     * @return {?}
	     */
	    AbstractControl.prototype._updateValue = function () { };
	    /**
	     * \@internal
	     * @abstract
	     * @param {?} cb
	     * @return {?}
	     */
	    AbstractControl.prototype._forEachChild = function (cb) { };
	    /**
	     * \@internal
	     * @abstract
	     * @param {?} condition
	     * @return {?}
	     */
	    AbstractControl.prototype._anyControls = function (condition) { };
	    /**
	     * \@internal
	     * @abstract
	     * @return {?}
	     */
	    AbstractControl.prototype._allControlsDisabled = function () { };
	    /**
	     * \@internal
	     * @param {?} status
	     * @return {?}
	     */
	    AbstractControl.prototype._anyControlsHaveStatus = function (status) {
	        return this._anyControls(function (control) { return control.status === status; });
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    AbstractControl.prototype._anyControlsDirty = function () {
	        return this._anyControls(function (control) { return control.dirty; });
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    AbstractControl.prototype._anyControlsTouched = function () {
	        return this._anyControls(function (control) { return control.touched; });
	    };
	    /**
	     * \@internal
	     * @param {?=} opts
	     * @return {?}
	     */
	    AbstractControl.prototype._updatePristine = function (opts) {
	        if (opts === void 0) { opts = {}; }
	        this._pristine = !this._anyControlsDirty();
	        if (this._parent && !opts.onlySelf) {
	            this._parent._updatePristine(opts);
	        }
	    };
	    /**
	     * \@internal
	     * @param {?=} opts
	     * @return {?}
	     */
	    AbstractControl.prototype._updateTouched = function (opts) {
	        if (opts === void 0) { opts = {}; }
	        this._touched = this._anyControlsTouched();
	        if (this._parent && !opts.onlySelf) {
	            this._parent._updateTouched(opts);
	        }
	    };
	    /**
	     * \@internal
	     * @param {?} formState
	     * @return {?}
	     */
	    AbstractControl.prototype._isBoxedValue = function (formState) {
	        return typeof formState === 'object' && formState !== null &&
	            Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
	    };
	    /**
	     * \@internal
	     * @param {?} fn
	     * @return {?}
	     */
	    AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
	    return AbstractControl;
	}());
	/**
	 * \@whatItDoes Tracks the value and validation status of an individual form control.
	 *
	 * It is one of the three fundamental building blocks of Angular forms, along with
	 * {\@link FormGroup} and {\@link FormArray}.
	 *
	 * \@howToUse
	 *
	 * When instantiating a {\@link FormControl}, you can pass in an initial value as the
	 * first argument. Example:
	 *
	 * ```ts
	 * const ctrl = new FormControl('some value');
	 * console.log(ctrl.value);     // 'some value'
	 * ```
	 *
	 * You can also initialize the control with a form state object on instantiation,
	 * which includes both the value and whether or not the control is disabled.
	 * You can't use the value key without the disabled key; both are required
	 * to use this way of initialization.
	 *
	 * ```ts
	 * const ctrl = new FormControl({value: 'n/a', disabled: true});
	 * console.log(ctrl.value);     // 'n/a'
	 * console.log(ctrl.status);   // 'DISABLED'
	 * ```
	 *
	 * To include a sync validator (or an array of sync validators) with the control,
	 * pass it in as the second argument. Async validators are also supported, but
	 * have to be passed in separately as the third arg.
	 *
	 * ```ts
	 * const ctrl = new FormControl('', Validators.required);
	 * console.log(ctrl.value);     // ''
	 * console.log(ctrl.status);   // 'INVALID'
	 * ```
	 *
	 * See its superclass, {\@link AbstractControl}, for more properties and methods.
	 *
	 * * **npm package**: `\@angular/forms`
	 *
	 * \@stable
	 */
	var FormControl = (function (_super) {
	    __extends(FormControl, _super);
	    /**
	     * @param {?=} formState
	     * @param {?=} validator
	     * @param {?=} asyncValidator
	     */
	    function FormControl(formState, validator, asyncValidator) {
	        if (formState === void 0) { formState = null; }
	        var _this = _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator)) || this;
	        /**
	         * \@internal
	         */
	        _this._onChange = [];
	        _this._applyFormState(formState);
	        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        _this._initObservables();
	        return _this;
	    }
	    /**
	     * Set the value of the form control to `value`.
	     *
	     * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
	     * and not its parent component. This defaults to false.
	     *
	     * If `emitEvent` is `true`, this
	     * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
	     * to true (as it falls through to `updateValueAndValidity`).
	     *
	     * If `emitModelToViewChange` is `true`, the view will be notified about the new value
	     * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
	     * specified.
	     *
	     * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
	     * model.  This is the default behavior if `emitViewToModelChange` is not specified.
	     * @param {?} value
	     * @param {?=} options
	     * @return {?}
	     */
	    FormControl.prototype.setValue = function (value, options) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        this._value = value;
	        if (this._onChange.length && options.emitModelToViewChange !== false) {
	            this._onChange.forEach(function (changeFn) { return changeFn(_this._value, options.emitViewToModelChange !== false); });
	        }
	        this.updateValueAndValidity(options);
	    };
	    /**
	     * Patches the value of a control.
	     *
	     * This function is functionally the same as {\@link FormControl#setValue} at this level.
	     * It exists for symmetry with {\@link FormGroup#patchValue} on `FormGroups` and `FormArrays`,
	     * where it does behave differently.
	     * @param {?} value
	     * @param {?=} options
	     * @return {?}
	     */
	    FormControl.prototype.patchValue = function (value, options) {
	        if (options === void 0) { options = {}; }
	        this.setValue(value, options);
	    };
	    /**
	     * Resets the form control. This means by default:
	     *
	     * * it is marked as `pristine`
	     * * it is marked as `untouched`
	     * * value is set to null
	     *
	     * You can also reset to a specific form state by passing through a standalone
	     * value or a form state object that contains both a value and a disabled state
	     * (these are the only two properties that cannot be calculated).
	     *
	     * Ex:
	     *
	     * ```ts
	     * this.control.reset('Nancy');
	     *
	     * console.log(this.control.value);  // 'Nancy'
	     * ```
	     *
	     * OR
	     *
	     * ```
	     * this.control.reset({value: 'Nancy', disabled: true});
	     *
	     * console.log(this.control.value);  // 'Nancy'
	     * console.log(this.control.status);  // 'DISABLED'
	     * ```
	     * @param {?=} formState
	     * @param {?=} options
	     * @return {?}
	     */
	    FormControl.prototype.reset = function (formState, options) {
	        if (formState === void 0) { formState = null; }
	        if (options === void 0) { options = {}; }
	        this._applyFormState(formState);
	        this.markAsPristine(options);
	        this.markAsUntouched(options);
	        this.setValue(this._value, options);
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    FormControl.prototype._updateValue = function () { };
	    /**
	     * \@internal
	     * @param {?} condition
	     * @return {?}
	     */
	    FormControl.prototype._anyControls = function (condition) { return false; };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
	    /**
	     * Register a listener for change events.
	     * @param {?} fn
	     * @return {?}
	     */
	    FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    FormControl.prototype._clearChangeFns = function () {
	        this._onChange = [];
	        this._onDisabledChange = [];
	        this._onCollectionChange = function () { };
	    };
	    /**
	     * Register a listener for disabled events.
	     * @param {?} fn
	     * @return {?}
	     */
	    FormControl.prototype.registerOnDisabledChange = function (fn) {
	        this._onDisabledChange.push(fn);
	    };
	    /**
	     * \@internal
	     * @param {?} cb
	     * @return {?}
	     */
	    FormControl.prototype._forEachChild = function (cb) { };
	    /**
	     * @param {?} formState
	     * @return {?}
	     */
	    FormControl.prototype._applyFormState = function (formState) {
	        if (this._isBoxedValue(formState)) {
	            this._value = formState.value;
	            formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
	                this.enable({ onlySelf: true, emitEvent: false });
	        }
	        else {
	            this._value = formState;
	        }
	    };
	    return FormControl;
	}(AbstractControl));
	/**
	 * \@whatItDoes Tracks the value and validity state of a group of {\@link FormControl}
	 * instances.
	 *
	 * A `FormGroup` aggregates the values of each child {\@link FormControl} into one object,
	 * with each control name as the key.  It calculates its status by reducing the statuses
	 * of its children. For example, if one of the controls in a group is invalid, the entire
	 * group becomes invalid.
	 *
	 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
	 * along with {\@link FormControl} and {\@link FormArray}.
	 *
	 * \@howToUse
	 *
	 * When instantiating a {\@link FormGroup}, pass in a collection of child controls as the first
	 * argument. The key for each child will be the name under which it is registered.
	 *
	 * ### Example
	 *
	 * ```
	 * const form = new FormGroup({
	 *   first: new FormControl('Nancy', Validators.minLength(2)),
	 *   last: new FormControl('Drew'),
	 * });
	 *
	 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
	 * console.log(form.status);  // 'VALID'
	 * ```
	 *
	 * You can also include group-level validators as the second arg, or group-level async
	 * validators as the third arg. These come in handy when you want to perform validation
	 * that considers the value of more than one child control.
	 *
	 * ### Example
	 *
	 * ```
	 * const form = new FormGroup({
	 *   password: new FormControl('', Validators.minLength(2)),
	 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
	 * }, passwordMatchValidator);
	 *
	 *
	 * function passwordMatchValidator(g: FormGroup) {
	 *    return g.get('password').value === g.get('passwordConfirm').value
	 *       ? null : {'mismatch': true};
	 * }
	 * ```
	 *
	 * * **npm package**: `\@angular/forms`
	 *
	 * \@stable
	 */
	var FormGroup = (function (_super) {
	    __extends(FormGroup, _super);
	    /**
	     * @param {?} controls
	     * @param {?=} validator
	     * @param {?=} asyncValidator
	     */
	    function FormGroup(controls, validator, asyncValidator) {
	        var _this = _super.call(this, validator || null, asyncValidator || null) || this;
	        _this.controls = controls;
	        _this._initObservables();
	        _this._setUpControls();
	        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        return _this;
	    }
	    /**
	     * Registers a control with the group's list of controls.
	     *
	     * This method does not update value or validity of the control, so for
	     * most cases you'll want to use {\@link FormGroup#addControl} instead.
	     * @param {?} name
	     * @param {?} control
	     * @return {?}
	     */
	    FormGroup.prototype.registerControl = function (name, control) {
	        if (this.controls[name])
	            return this.controls[name];
	        this.controls[name] = control;
	        control.setParent(this);
	        control._registerOnCollectionChange(this._onCollectionChange);
	        return control;
	    };
	    /**
	     * Add a control to this group.
	     * @param {?} name
	     * @param {?} control
	     * @return {?}
	     */
	    FormGroup.prototype.addControl = function (name, control) {
	        this.registerControl(name, control);
	        this.updateValueAndValidity();
	        this._onCollectionChange();
	    };
	    /**
	     * Remove a control from this group.
	     * @param {?} name
	     * @return {?}
	     */
	    FormGroup.prototype.removeControl = function (name) {
	        if (this.controls[name])
	            this.controls[name]._registerOnCollectionChange(function () { });
	        delete (this.controls[name]);
	        this.updateValueAndValidity();
	        this._onCollectionChange();
	    };
	    /**
	     * Replace an existing control.
	     * @param {?} name
	     * @param {?} control
	     * @return {?}
	     */
	    FormGroup.prototype.setControl = function (name, control) {
	        if (this.controls[name])
	            this.controls[name]._registerOnCollectionChange(function () { });
	        delete (this.controls[name]);
	        if (control)
	            this.registerControl(name, control);
	        this.updateValueAndValidity();
	        this._onCollectionChange();
	    };
	    /**
	     * Check whether there is an enabled control with the given name in the group.
	     *
	     * It will return false for disabled controls. If you'd like to check for
	     * existence in the group only, use {\@link AbstractControl#get} instead.
	     * @param {?} controlName
	     * @return {?}
	     */
	    FormGroup.prototype.contains = function (controlName) {
	        return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
	    };
	    /**
	     *  Sets the value of the {\@link FormGroup}. It accepts an object that matches
	     *  the structure of the group, with control names as keys.
	     *
	     * This method performs strict checks, so it will throw an error if you try
	     * to set the value of a control that doesn't exist or if you exclude the
	     * value of a control.
	     *
	     *  ### Example
	     *
	     *  ```
	     *  const form = new FormGroup({
	     *     first: new FormControl(),
	     *     last: new FormControl()
	     *  });
	     *  console.log(form.value);   // {first: null, last: null}
	     *
	     *  form.setValue({first: 'Nancy', last: 'Drew'});
	     *  console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
	     *
	     *  ```
	     * @param {?} value
	     * @param {?=} options
	     * @return {?}
	     */
	    FormGroup.prototype.setValue = function (value, options) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        this._checkAllValuesPresent(value);
	        Object.keys(value).forEach(function (name) {
	            _this._throwIfControlMissing(name);
	            _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
	        });
	        this.updateValueAndValidity(options);
	    };
	    /**
	     *  Patches the value of the {\@link FormGroup}. It accepts an object with control
	     *  names as keys, and will do its best to match the values to the correct controls
	     *  in the group.
	     *
	     *  It accepts both super-sets and sub-sets of the group without throwing an error.
	     *
	     *  ### Example
	     *
	     *  ```
	     *  const form = new FormGroup({
	     *     first: new FormControl(),
	     *     last: new FormControl()
	     *  });
	     *  console.log(form.value);   // {first: null, last: null}
	     *
	     *  form.patchValue({first: 'Nancy'});
	     *  console.log(form.value);   // {first: 'Nancy', last: null}
	     *
	     *  ```
	     * @param {?} value
	     * @param {?=} options
	     * @return {?}
	     */
	    FormGroup.prototype.patchValue = function (value, options) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        Object.keys(value).forEach(function (name) {
	            if (_this.controls[name]) {
	                _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
	            }
	        });
	        this.updateValueAndValidity(options);
	    };
	    /**
	     * Resets the {\@link FormGroup}. This means by default:
	     *
	     * * The group and all descendants are marked `pristine`
	     * * The group and all descendants are marked `untouched`
	     * * The value of all descendants will be null or null maps
	     *
	     * You can also reset to a specific form state by passing in a map of states
	     * that matches the structure of your form, with control names as keys. The state
	     * can be a standalone value or a form state object with both a value and a disabled
	     * status.
	     *
	     * ### Example
	     *
	     * ```ts
	     * this.form.reset({first: 'name', last: 'last name'});
	     *
	     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	     * ```
	     *
	     * - OR -
	     *
	     * ```
	     * this.form.reset({
	     *   first: {value: 'name', disabled: true},
	     *   last: 'last'
	     * });
	     *
	     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	     * console.log(this.form.get('first').status);  // 'DISABLED'
	     * ```
	     * @param {?=} value
	     * @param {?=} options
	     * @return {?}
	     */
	    FormGroup.prototype.reset = function (value, options) {
	        if (value === void 0) { value = {}; }
	        if (options === void 0) { options = {}; }
	        this._forEachChild(function (control, name) {
	            control.reset(value[name], { onlySelf: true, emitEvent: options.emitEvent });
	        });
	        this.updateValueAndValidity(options);
	        this._updatePristine(options);
	        this._updateTouched(options);
	    };
	    /**
	     * The aggregate value of the {\@link FormGroup}, including any disabled controls.
	     *
	     * If you'd like to include all values regardless of disabled status, use this method.
	     * Otherwise, the `value` property is the best way to get the value of the group.
	     * @return {?}
	     */
	    FormGroup.prototype.getRawValue = function () {
	        return this._reduceChildren({}, function (acc, control, name) {
	            acc[name] = control instanceof FormControl ? control.value : ((control)).getRawValue();
	            return acc;
	        });
	    };
	    /**
	     * \@internal
	     * @param {?} name
	     * @return {?}
	     */
	    FormGroup.prototype._throwIfControlMissing = function (name) {
	        if (!Object.keys(this.controls).length) {
	            throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	        }
	        if (!this.controls[name]) {
	            throw new Error("Cannot find form control with name: " + name + ".");
	        }
	    };
	    /**
	     * \@internal
	     * @param {?} cb
	     * @return {?}
	     */
	    FormGroup.prototype._forEachChild = function (cb) {
	        var _this = this;
	        Object.keys(this.controls).forEach(function (k) { return cb(_this.controls[k], k); });
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    FormGroup.prototype._setUpControls = function () {
	        var _this = this;
	        this._forEachChild(function (control) {
	            control.setParent(_this);
	            control._registerOnCollectionChange(_this._onCollectionChange);
	        });
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
	    /**
	     * \@internal
	     * @param {?} condition
	     * @return {?}
	     */
	    FormGroup.prototype._anyControls = function (condition) {
	        var _this = this;
	        var /** @type {?} */ res = false;
	        this._forEachChild(function (control, name) {
	            res = res || (_this.contains(name) && condition(control));
	        });
	        return res;
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    FormGroup.prototype._reduceValue = function () {
	        var _this = this;
	        return this._reduceChildren({}, function (acc, control, name) {
	            if (control.enabled || _this.disabled) {
	                acc[name] = control.value;
	            }
	            return acc;
	        });
	    };
	    /**
	     * \@internal
	     * @param {?} initValue
	     * @param {?} fn
	     * @return {?}
	     */
	    FormGroup.prototype._reduceChildren = function (initValue, fn) {
	        var /** @type {?} */ res = initValue;
	        this._forEachChild(function (control, name) { res = fn(res, control, name); });
	        return res;
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    FormGroup.prototype._allControlsDisabled = function () {
	        for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
	            var controlName = _a[_i];
	            if (this.controls[controlName].enabled) {
	                return false;
	            }
	        }
	        return Object.keys(this.controls).length > 0 || this.disabled;
	    };
	    /**
	     * \@internal
	     * @param {?} value
	     * @return {?}
	     */
	    FormGroup.prototype._checkAllValuesPresent = function (value) {
	        this._forEachChild(function (control, name) {
	            if (value[name] === undefined) {
	                throw new Error("Must supply a value for form control with name: '" + name + "'.");
	            }
	        });
	    };
	    return FormGroup;
	}(AbstractControl));
	/**
	 * \@whatItDoes Tracks the value and validity state of an array of {\@link FormControl},
	 * {\@link FormGroup} or {\@link FormArray} instances.
	 *
	 * A `FormArray` aggregates the values of each child {\@link FormControl} into an array.
	 * It calculates its status by reducing the statuses of its children. For example, if one of
	 * the controls in a `FormArray` is invalid, the entire array becomes invalid.
	 *
	 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
	 * along with {\@link FormControl} and {\@link FormGroup}.
	 *
	 * \@howToUse
	 *
	 * When instantiating a {\@link FormArray}, pass in an array of child controls as the first
	 * argument.
	 *
	 * ### Example
	 *
	 * ```
	 * const arr = new FormArray([
	 *   new FormControl('Nancy', Validators.minLength(2)),
	 *   new FormControl('Drew'),
	 * ]);
	 *
	 * console.log(arr.value);   // ['Nancy', 'Drew']
	 * console.log(arr.status);  // 'VALID'
	 * ```
	 *
	 * You can also include array-level validators as the second arg, or array-level async
	 * validators as the third arg. These come in handy when you want to perform validation
	 * that considers the value of more than one child control.
	 *
	 * ### Adding or removing controls
	 *
	 * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
	 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
	 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
	 * the `FormArray` directly, as that will result in strange and unexpected behavior such
	 * as broken change detection.
	 *
	 * * **npm package**: `\@angular/forms`
	 *
	 * \@stable
	 */
	var FormArray = (function (_super) {
	    __extends(FormArray, _super);
	    /**
	     * @param {?} controls
	     * @param {?=} validator
	     * @param {?=} asyncValidator
	     */
	    function FormArray(controls, validator, asyncValidator) {
	        var _this = _super.call(this, validator || null, asyncValidator || null) || this;
	        _this.controls = controls;
	        _this._initObservables();
	        _this._setUpControls();
	        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        return _this;
	    }
	    /**
	     * Get the {\@link AbstractControl} at the given `index` in the array.
	     * @param {?} index
	     * @return {?}
	     */
	    FormArray.prototype.at = function (index) { return this.controls[index]; };
	    /**
	     * Insert a new {\@link AbstractControl} at the end of the array.
	     * @param {?} control
	     * @return {?}
	     */
	    FormArray.prototype.push = function (control) {
	        this.controls.push(control);
	        this._registerControl(control);
	        this.updateValueAndValidity();
	        this._onCollectionChange();
	    };
	    /**
	     * Insert a new {\@link AbstractControl} at the given `index` in the array.
	     * @param {?} index
	     * @param {?} control
	     * @return {?}
	     */
	    FormArray.prototype.insert = function (index, control) {
	        this.controls.splice(index, 0, control);
	        this._registerControl(control);
	        this.updateValueAndValidity();
	        this._onCollectionChange();
	    };
	    /**
	     * Remove the control at the given `index` in the array.
	     * @param {?} index
	     * @return {?}
	     */
	    FormArray.prototype.removeAt = function (index) {
	        if (this.controls[index])
	            this.controls[index]._registerOnCollectionChange(function () { });
	        this.controls.splice(index, 1);
	        this.updateValueAndValidity();
	        this._onCollectionChange();
	    };
	    /**
	     * Replace an existing control.
	     * @param {?} index
	     * @param {?} control
	     * @return {?}
	     */
	    FormArray.prototype.setControl = function (index, control) {
	        if (this.controls[index])
	            this.controls[index]._registerOnCollectionChange(function () { });
	        this.controls.splice(index, 1);
	        if (control) {
	            this.controls.splice(index, 0, control);
	            this._registerControl(control);
	        }
	        this.updateValueAndValidity();
	        this._onCollectionChange();
	    };
	    Object.defineProperty(FormArray.prototype, "length", {
	        /**
	         * Length of the control array.
	         * @return {?}
	         */
	        get: function () { return this.controls.length; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     *  Sets the value of the {\@link FormArray}. It accepts an array that matches
	     *  the structure of the control.
	     *
	     * This method performs strict checks, so it will throw an error if you try
	     * to set the value of a control that doesn't exist or if you exclude the
	     * value of a control.
	     *
	     *  ### Example
	     *
	     *  ```
	     *  const arr = new FormArray([
	     *     new FormControl(),
	     *     new FormControl()
	     *  ]);
	     *  console.log(arr.value);   // [null, null]
	     *
	     *  arr.setValue(['Nancy', 'Drew']);
	     *  console.log(arr.value);   // ['Nancy', 'Drew']
	     *  ```
	     * @param {?} value
	     * @param {?=} options
	     * @return {?}
	     */
	    FormArray.prototype.setValue = function (value, options) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        this._checkAllValuesPresent(value);
	        value.forEach(function (newValue, index) {
	            _this._throwIfControlMissing(index);
	            _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
	        });
	        this.updateValueAndValidity(options);
	    };
	    /**
	     *  Patches the value of the {\@link FormArray}. It accepts an array that matches the
	     *  structure of the control, and will do its best to match the values to the correct
	     *  controls in the group.
	     *
	     *  It accepts both super-sets and sub-sets of the array without throwing an error.
	     *
	     *  ### Example
	     *
	     *  ```
	     *  const arr = new FormArray([
	     *     new FormControl(),
	     *     new FormControl()
	     *  ]);
	     *  console.log(arr.value);   // [null, null]
	     *
	     *  arr.patchValue(['Nancy']);
	     *  console.log(arr.value);   // ['Nancy', null]
	     *  ```
	     * @param {?} value
	     * @param {?=} options
	     * @return {?}
	     */
	    FormArray.prototype.patchValue = function (value, options) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        value.forEach(function (newValue, index) {
	            if (_this.at(index)) {
	                _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
	            }
	        });
	        this.updateValueAndValidity(options);
	    };
	    /**
	     * Resets the {\@link FormArray}. This means by default:
	     *
	     * * The array and all descendants are marked `pristine`
	     * * The array and all descendants are marked `untouched`
	     * * The value of all descendants will be null or null maps
	     *
	     * You can also reset to a specific form state by passing in an array of states
	     * that matches the structure of the control. The state can be a standalone value
	     * or a form state object with both a value and a disabled status.
	     *
	     * ### Example
	     *
	     * ```ts
	     * this.arr.reset(['name', 'last name']);
	     *
	     * console.log(this.arr.value);  // ['name', 'last name']
	     * ```
	     *
	     * - OR -
	     *
	     * ```
	     * this.arr.reset([
	     *   {value: 'name', disabled: true},
	     *   'last'
	     * ]);
	     *
	     * console.log(this.arr.value);  // ['name', 'last name']
	     * console.log(this.arr.get(0).status);  // 'DISABLED'
	     * ```
	     * @param {?=} value
	     * @param {?=} options
	     * @return {?}
	     */
	    FormArray.prototype.reset = function (value, options) {
	        if (value === void 0) { value = []; }
	        if (options === void 0) { options = {}; }
	        this._forEachChild(function (control, index) {
	            control.reset(value[index], { onlySelf: true, emitEvent: options.emitEvent });
	        });
	        this.updateValueAndValidity(options);
	        this._updatePristine(options);
	        this._updateTouched(options);
	    };
	    /**
	     * The aggregate value of the array, including any disabled controls.
	     *
	     * If you'd like to include all values regardless of disabled status, use this method.
	     * Otherwise, the `value` property is the best way to get the value of the array.
	     * @return {?}
	     */
	    FormArray.prototype.getRawValue = function () {
	        return this.controls.map(function (control) {
	            return control instanceof FormControl ? control.value : ((control)).getRawValue();
	        });
	    };
	    /**
	     * \@internal
	     * @param {?} index
	     * @return {?}
	     */
	    FormArray.prototype._throwIfControlMissing = function (index) {
	        if (!this.controls.length) {
	            throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	        }
	        if (!this.at(index)) {
	            throw new Error("Cannot find form control at index " + index);
	        }
	    };
	    /**
	     * \@internal
	     * @param {?} cb
	     * @return {?}
	     */
	    FormArray.prototype._forEachChild = function (cb) {
	        this.controls.forEach(function (control, index) { cb(control, index); });
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    FormArray.prototype._updateValue = function () {
	        var _this = this;
	        this._value = this.controls.filter(function (control) { return control.enabled || _this.disabled; })
	            .map(function (control) { return control.value; });
	    };
	    /**
	     * \@internal
	     * @param {?} condition
	     * @return {?}
	     */
	    FormArray.prototype._anyControls = function (condition) {
	        return this.controls.some(function (control) { return control.enabled && condition(control); });
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    FormArray.prototype._setUpControls = function () {
	        var _this = this;
	        this._forEachChild(function (control) { return _this._registerControl(control); });
	    };
	    /**
	     * \@internal
	     * @param {?} value
	     * @return {?}
	     */
	    FormArray.prototype._checkAllValuesPresent = function (value) {
	        this._forEachChild(function (control, i) {
	            if (value[i] === undefined) {
	                throw new Error("Must supply a value for form control at index: " + i + ".");
	            }
	        });
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    FormArray.prototype._allControlsDisabled = function () {
	        for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
	            var control = _a[_i];
	            if (control.enabled)
	                return false;
	        }
	        return this.controls.length > 0 || this.disabled;
	    };
	    /**
	     * @param {?} control
	     * @return {?}
	     */
	    FormArray.prototype._registerControl = function (control) {
	        control.setParent(this);
	        control._registerOnCollectionChange(this._onCollectionChange);
	    };
	    return FormArray;
	}(AbstractControl));
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var formDirectiveProvider = {
	    provide: ControlContainer,
	    useExisting: _angular_core.forwardRef(function () { return NgForm; })
	};
	var resolvedPromise = Promise.resolve(null);
	/**
	 * \@whatItDoes Creates a top-level {\@link FormGroup} instance and binds it to a form
	 * to track aggregate form value and validation status.
	 *
	 * \@howToUse
	 *
	 * As soon as you import the `FormsModule`, this directive becomes active by default on
	 * all `<form>` tags.  You don't need to add a special selector.
	 *
	 * You can export the directive into a local template variable using `ngForm` as the key
	 * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
	 * {\@link FormGroup} instance are duplicated on the directive itself, so a reference to it
	 * will give you access to the aggregate value and validity status of the form, as well as
	 * user interaction properties like `dirty` and `touched`.
	 *
	 * To register child controls with the form, you'll want to use {\@link NgModel} with a
	 * `name` attribute.  You can also use {\@link NgModelGroup} if you'd like to create
	 * sub-groups within the form.
	 *
	 * You can listen to the directive's `ngSubmit` event to be notified when the user has
	 * triggered a form submission. The `ngSubmit` event will be emitted with the original form
	 * submission event.
	 *
	 * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	 *
	 * * **npm package**: `\@angular/forms`
	 *
	 * * **NgModule**: `FormsModule`
	 *
	 *  \@stable
	 */
	var NgForm = (function (_super) {
	    __extends(NgForm, _super);
	    /**
	     * @param {?} validators
	     * @param {?} asyncValidators
	     */
	    function NgForm(validators, asyncValidators) {
	        var _this = _super.call(this) || this;
	        _this._submitted = false;
	        _this.ngSubmit = new _angular_core.EventEmitter();
	        _this.form =
	            new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
	        return _this;
	    }
	    Object.defineProperty(NgForm.prototype, "submitted", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._submitted; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "formDirective", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "control", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this.form; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "path", {
	        /**
	         * @return {?}
	         */
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "controls", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this.form.controls; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    NgForm.prototype.addControl = function (dir) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var /** @type {?} */ container = _this._findContainer(dir.path);
	            dir._control = (container.registerControl(dir.name, dir.control));
	            setUpControl(dir.control, dir);
	            dir.control.updateValueAndValidity({ emitEvent: false });
	        });
	    };
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    NgForm.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    NgForm.prototype.removeControl = function (dir) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var /** @type {?} */ container = _this._findContainer(dir.path);
	            if (container) {
	                container.removeControl(dir.name);
	            }
	        });
	    };
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    NgForm.prototype.addFormGroup = function (dir) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var /** @type {?} */ container = _this._findContainer(dir.path);
	            var /** @type {?} */ group = new FormGroup({});
	            setUpFormContainer(group, dir);
	            container.registerControl(dir.name, group);
	            group.updateValueAndValidity({ emitEvent: false });
	        });
	    };
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    NgForm.prototype.removeFormGroup = function (dir) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var /** @type {?} */ container = _this._findContainer(dir.path);
	            if (container) {
	                container.removeControl(dir.name);
	            }
	        });
	    };
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    NgForm.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
	    /**
	     * @param {?} dir
	     * @param {?} value
	     * @return {?}
	     */
	    NgForm.prototype.updateModel = function (dir, value) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var /** @type {?} */ ctrl = (_this.form.get(/** @type {?} */ ((dir.path))));
	            ctrl.setValue(value);
	        });
	    };
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
	    /**
	     * @param {?} $event
	     * @return {?}
	     */
	    NgForm.prototype.onSubmit = function ($event) {
	        this._submitted = true;
	        this.ngSubmit.emit($event);
	        return false;
	    };
	    /**
	     * @return {?}
	     */
	    NgForm.prototype.onReset = function () { this.resetForm(); };
	    /**
	     * @param {?=} value
	     * @return {?}
	     */
	    NgForm.prototype.resetForm = function (value) {
	        if (value === void 0) { value = undefined; }
	        this.form.reset(value);
	        this._submitted = false;
	    };
	    /**
	     * \@internal
	     * @param {?} path
	     * @return {?}
	     */
	    NgForm.prototype._findContainer = function (path) {
	        path.pop();
	        return path.length ? (this.form.get(path)) : this.form;
	    };
	    return NgForm;
	}(ControlContainer));
	NgForm.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
	                providers: [formDirectiveProvider],
	                host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
	                outputs: ['ngSubmit'],
	                exportAs: 'ngForm'
	            },] },
	];
	/**
	 * @nocollapse
	 */
	NgForm.ctorParameters = function () { return [
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	]; };
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var FormErrorExamples = {
	    formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
	    formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
	    formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
	    ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
	    ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
	};
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var TemplateDrivenErrors = (function () {
	    function TemplateDrivenErrors() {
	    }
	    /**
	     * @return {?}
	     */
	    TemplateDrivenErrors.modelParentException = function () {
	        throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + FormErrorExamples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + FormErrorExamples.ngModelWithFormGroup);
	    };
	    /**
	     * @return {?}
	     */
	    TemplateDrivenErrors.formGroupNameException = function () {
	        throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
	    };
	    /**
	     * @return {?}
	     */
	    TemplateDrivenErrors.missingNameException = function () {
	        throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
	    };
	    /**
	     * @return {?}
	     */
	    TemplateDrivenErrors.modelGroupParentException = function () {
	        throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
	    };
	    return TemplateDrivenErrors;
	}());
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var modelGroupProvider = {
	    provide: ControlContainer,
	    useExisting: _angular_core.forwardRef(function () { return NgModelGroup; })
	};
	/**
	 * \@whatItDoes Creates and binds a {\@link FormGroup} instance to a DOM element.
	 *
	 * \@howToUse
	 *
	 * This directive can only be used as a child of {\@link NgForm} (or in other words,
	 * within `<form>` tags).
	 *
	 * Use this directive if you'd like to create a sub-group within a form. This can
	 * come in handy if you want to validate a sub-group of your form separately from
	 * the rest of your form, or if some values in your domain model make more sense to
	 * consume together in a nested object.
	 *
	 * Pass in the name you'd like this sub-group to have and it will become the key
	 * for the sub-group in the form's full value. You can also export the directive into
	 * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
	 *
	 * {\@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
	 *
	 * * **npm package**: `\@angular/forms`
	 *
	 * * **NgModule**: `FormsModule`
	 *
	 * \@stable
	 */
	var NgModelGroup = (function (_super) {
	    __extends(NgModelGroup, _super);
	    /**
	     * @param {?} parent
	     * @param {?} validators
	     * @param {?} asyncValidators
	     */
	    function NgModelGroup(parent, validators, asyncValidators) {
	        var _this = _super.call(this) || this;
	        _this._parent = parent;
	        _this._validators = validators;
	        _this._asyncValidators = asyncValidators;
	        return _this;
	    }
	    /**
	     * \@internal
	     * @return {?}
	     */
	    NgModelGroup.prototype._checkParentType = function () {
	        if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	            TemplateDrivenErrors.modelGroupParentException();
	        }
	    };
	    return NgModelGroup;
	}(AbstractFormGroupDirective));
	NgModelGroup.decorators = [
	    { type: _angular_core.Directive, args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] },
	];
	/**
	 * @nocollapse
	 */
	NgModelGroup.ctorParameters = function () { return [
	    { type: ControlContainer, decorators: [{ type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	]; };
	NgModelGroup.propDecorators = {
	    'name': [{ type: _angular_core.Input, args: ['ngModelGroup',] },],
	};
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var formControlBinding = {
	    provide: NgControl,
	    useExisting: _angular_core.forwardRef(function () { return NgModel; })
	};
	/**
	 * `ngModel` forces an additional change detection run when its inputs change:
	 * E.g.:
	 * ```
	 * <div>{{myModel.valid}}</div>
	 * <input [(ngModel)]="myValue" #myModel="ngModel">
	 * ```
	 * I.e. `ngModel` can export itself on the element and then be used in the template.
	 * Normally, this would result in expressions before the `input` that use the exported directive
	 * to have and old value as they have been
	 * dirty checked before. As this is a very common case for `ngModel`, we added this second change
	 * detection run.
	 *
	 * Notes:
	 * - this is just one extra run no matter how many `ngModel` have been changed.
	 * - this is a general problem when using `exportAs` for directives!
	 */
	var resolvedPromise$1 = Promise.resolve(null);
	/**
	 * \@whatItDoes Creates a {\@link FormControl} instance from a domain model and binds it
	 * to a form control element.
	 *
	 * The {\@link FormControl} instance will track the value, user interaction, and
	 * validation status of the control and keep the view synced with the model. If used
	 * within a parent form, the directive will also register itself with the form as a child
	 * control.
	 *
	 * \@howToUse
	 *
	 * This directive can be used by itself or as part of a larger form. All you need is the
	 * `ngModel` selector to activate it.
	 *
	 * It accepts a domain model as an optional {\@link Input}. If you have a one-way binding
	 * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
	 * class will set the value in the view. If you have a two-way binding with `[()]` syntax
	 * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
	 * the domain model in your class as well.
	 *
	 * If you wish to inspect the properties of the associated {\@link FormControl} (like
	 * validity state), you can also export the directive into a local template variable using
	 * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
	 * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
	 * will fall through to the control anyway, so you can access them directly. You can see a
	 * full list of properties directly available in {\@link AbstractControlDirective}.
	 *
	 * The following is an example of a simple standalone control using `ngModel`:
	 *
	 * {\@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
	 *
	 * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
	 * so that the control can be registered with the parent form under that name.
	 *
	 * It's worth noting that in the context of a parent form, you often can skip one-way or
	 * two-way binding because the parent form will sync the value for you. You can access
	 * its properties by exporting it into a local template variable using `ngForm` (ex:
	 * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
	 *
	 * If you do need to populate initial values into your form, using a one-way binding for
	 * `ngModel` tends to be sufficient as long as you use the exported form's value rather
	 * than the domain model's value on submit.
	 *
	 * Take a look at an example of using `ngModel` within a form:
	 *
	 * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	 *
	 * To see `ngModel` examples with different form control types, see:
	 *
	 * * Radio buttons: {\@link RadioControlValueAccessor}
	 * * Selects: {\@link SelectControlValueAccessor}
	 *
	 * **npm package**: `\@angular/forms`
	 *
	 * **NgModule**: `FormsModule`
	 *
	 *  \@stable
	 */
	var NgModel = (function (_super) {
	    __extends(NgModel, _super);
	    /**
	     * @param {?} parent
	     * @param {?} validators
	     * @param {?} asyncValidators
	     * @param {?} valueAccessors
	     */
	    function NgModel(parent, validators, asyncValidators, valueAccessors) {
	        var _this = _super.call(this) || this;
	        /**
	         * \@internal
	         */
	        _this._control = new FormControl();
	        /**
	         * \@internal
	         */
	        _this._registered = false;
	        _this.update = new _angular_core.EventEmitter();
	        _this._parent = parent;
	        _this._rawValidators = validators || [];
	        _this._rawAsyncValidators = asyncValidators || [];
	        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
	        return _this;
	    }
	    /**
	     * @param {?} changes
	     * @return {?}
	     */
	    NgModel.prototype.ngOnChanges = function (changes) {
	        this._checkForErrors();
	        if (!this._registered)
	            this._setUpControl();
	        if ('isDisabled' in changes) {
	            this._updateDisabled(changes);
	        }
	        if (isPropertyUpdated(changes, this.viewModel)) {
	            this._updateValue(this.model);
	            this.viewModel = this.model;
	        }
	    };
	    /**
	     * @return {?}
	     */
	    NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
	    Object.defineProperty(NgModel.prototype, "control", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._control; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "path", {
	        /**
	         * @return {?}
	         */
	        get: function () {
	            return this._parent ? controlPath(this.name, this._parent) : [this.name];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "formDirective", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._parent ? this._parent.formDirective : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "validator", {
	        /**
	         * @return {?}
	         */
	        get: function () { return composeValidators(this._rawValidators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "asyncValidator", {
	        /**
	         * @return {?}
	         */
	        get: function () {
	            return composeAsyncValidators(this._rawAsyncValidators);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @param {?} newValue
	     * @return {?}
	     */
	    NgModel.prototype.viewToModelUpdate = function (newValue) {
	        this.viewModel = newValue;
	        this.update.emit(newValue);
	    };
	    /**
	     * @return {?}
	     */
	    NgModel.prototype._setUpControl = function () {
	        this._isStandalone() ? this._setUpStandalone() :
	            this.formDirective.addControl(this);
	        this._registered = true;
	    };
	    /**
	     * @return {?}
	     */
	    NgModel.prototype._isStandalone = function () {
	        return !this._parent || !!(this.options && this.options.standalone);
	    };
	    /**
	     * @return {?}
	     */
	    NgModel.prototype._setUpStandalone = function () {
	        setUpControl(this._control, this);
	        this._control.updateValueAndValidity({ emitEvent: false });
	    };
	    /**
	     * @return {?}
	     */
	    NgModel.prototype._checkForErrors = function () {
	        if (!this._isStandalone()) {
	            this._checkParentType();
	        }
	        this._checkName();
	    };
	    /**
	     * @return {?}
	     */
	    NgModel.prototype._checkParentType = function () {
	        if (!(this._parent instanceof NgModelGroup) &&
	            this._parent instanceof AbstractFormGroupDirective) {
	            TemplateDrivenErrors.formGroupNameException();
	        }
	        else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	            TemplateDrivenErrors.modelParentException();
	        }
	    };
	    /**
	     * @return {?}
	     */
	    NgModel.prototype._checkName = function () {
	        if (this.options && this.options.name)
	            this.name = this.options.name;
	        if (!this._isStandalone() && !this.name) {
	            TemplateDrivenErrors.missingNameException();
	        }
	    };
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    NgModel.prototype._updateValue = function (value) {
	        var _this = this;
	        resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
	    };
	    /**
	     * @param {?} changes
	     * @return {?}
	     */
	    NgModel.prototype._updateDisabled = function (changes) {
	        var _this = this;
	        var /** @type {?} */ disabledValue = changes['isDisabled'].currentValue;
	        var /** @type {?} */ isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
	        resolvedPromise$1.then(function () {
	            if (isDisabled && !_this.control.disabled) {
	                _this.control.disable();
	            }
	            else if (!isDisabled && _this.control.disabled) {
	                _this.control.enable();
	            }
	        });
	    };
	    return NgModel;
	}(NgControl));
	NgModel.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: '[ngModel]:not([formControlName]):not([formControl])',
	                providers: [formControlBinding],
	                exportAs: 'ngModel'
	            },] },
	];
	/**
	 * @nocollapse
	 */
	NgModel.ctorParameters = function () { return [
	    { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	]; };
	NgModel.propDecorators = {
	    'name': [{ type: _angular_core.Input },],
	    'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	    'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	    'options': [{ type: _angular_core.Input, args: ['ngModelOptions',] },],
	    'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	};
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var ReactiveErrors = (function () {
	    function ReactiveErrors() {
	    }
	    /**
	     * @return {?}
	     */
	    ReactiveErrors.controlParentException = function () {
	        throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formControlName);
	    };
	    /**
	     * @return {?}
	     */
	    ReactiveErrors.ngModelGroupException = function () {
	        throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + FormErrorExamples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + FormErrorExamples.ngModelGroup);
	    };
	    /**
	     * @return {?}
	     */
	    ReactiveErrors.missingFormException = function () {
	        throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + FormErrorExamples.formControlName);
	    };
	    /**
	     * @return {?}
	     */
	    ReactiveErrors.groupParentException = function () {
	        throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formGroupName);
	    };
	    /**
	     * @return {?}
	     */
	    ReactiveErrors.arrayParentException = function () {
	        throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + FormErrorExamples.formArrayName);
	    };
	    /**
	     * @return {?}
	     */
	    ReactiveErrors.disabledAttrWarning = function () {
	        console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
	    };
	    return ReactiveErrors;
	}());
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var formControlBinding$1 = {
	    provide: NgControl,
	    useExisting: _angular_core.forwardRef(function () { return FormControlDirective; })
	};
	/**
	 * \@whatItDoes Syncs a standalone {\@link FormControl} instance to a form control element.
	 *
	 * In other words, this directive ensures that any values written to the {\@link FormControl}
	 * instance programmatically will be written to the DOM element (model -> view). Conversely,
	 * any values written to the DOM element through user input will be reflected in the
	 * {\@link FormControl} instance (view -> model).
	 *
	 * \@howToUse
	 *
	 * Use this directive if you'd like to create and manage a {\@link FormControl} instance directly.
	 * Simply create a {\@link FormControl}, save it to your component class, and pass it into the
	 * {\@link FormControlDirective}.
	 *
	 * This directive is designed to be used as a standalone control.  Unlike {\@link FormControlName},
	 * it does not require that your {\@link FormControl} instance be part of any parent
	 * {\@link FormGroup}, and it won't be registered to any {\@link FormGroupDirective} that
	 * exists above it.
	 *
	 * **Get the value**: the `value` property is always synced and available on the
	 * {\@link FormControl} instance. See a full list of available properties in
	 * {\@link AbstractControl}.
	 *
	 * **Set the value**: You can pass in an initial value when instantiating the {\@link FormControl},
	 * or you can set it programmatically later using {\@link AbstractControl#setValue setValue} or
	 * {\@link AbstractControl#patchValue patchValue}.
	 *
	 * **Listen to value**: If you want to listen to changes in the value of the control, you can
	 * subscribe to the {\@link AbstractControl#valueChanges valueChanges} event.  You can also listen to
	 * {\@link AbstractControl#statusChanges statusChanges} to be notified when the validation status is
	 * re-calculated.
	 *
	 * ### Example
	 *
	 * {\@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
	 *
	 * * **npm package**: `\@angular/forms`
	 *
	 * * **NgModule**: `ReactiveFormsModule`
	 *
	 *  \@stable
	 */
	var FormControlDirective = (function (_super) {
	    __extends(FormControlDirective, _super);
	    /**
	     * @param {?} validators
	     * @param {?} asyncValidators
	     * @param {?} valueAccessors
	     */
	    function FormControlDirective(validators, asyncValidators, valueAccessors) {
	        var _this = _super.call(this) || this;
	        _this.update = new _angular_core.EventEmitter();
	        _this._rawValidators = validators || [];
	        _this._rawAsyncValidators = asyncValidators || [];
	        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
	        return _this;
	    }
	    Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @param {?} changes
	     * @return {?}
	     */
	    FormControlDirective.prototype.ngOnChanges = function (changes) {
	        if (this._isControlChanged(changes)) {
	            setUpControl(this.form, this);
	            if (this.control.disabled && ((this.valueAccessor)).setDisabledState) {
	                ((((this.valueAccessor)).setDisabledState))(true);
	            }
	            this.form.updateValueAndValidity({ emitEvent: false });
	        }
	        if (isPropertyUpdated(changes, this.viewModel)) {
	            this.form.setValue(this.model);
	            this.viewModel = this.model;
	        }
	    };
	    Object.defineProperty(FormControlDirective.prototype, "path", {
	        /**
	         * @return {?}
	         */
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlDirective.prototype, "validator", {
	        /**
	         * @return {?}
	         */
	        get: function () { return composeValidators(this._rawValidators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
	        /**
	         * @return {?}
	         */
	        get: function () {
	            return composeAsyncValidators(this._rawAsyncValidators);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlDirective.prototype, "control", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this.form; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @param {?} newValue
	     * @return {?}
	     */
	    FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
	        this.viewModel = newValue;
	        this.update.emit(newValue);
	    };
	    /**
	     * @param {?} changes
	     * @return {?}
	     */
	    FormControlDirective.prototype._isControlChanged = function (changes) {
	        return changes.hasOwnProperty('form');
	    };
	    return FormControlDirective;
	}(NgControl));
	FormControlDirective.decorators = [
	    { type: _angular_core.Directive, args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] },
	];
	/**
	 * @nocollapse
	 */
	FormControlDirective.ctorParameters = function () { return [
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	]; };
	FormControlDirective.propDecorators = {
	    'form': [{ type: _angular_core.Input, args: ['formControl',] },],
	    'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	    'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	    'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	};
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var formDirectiveProvider$1 = {
	    provide: ControlContainer,
	    useExisting: _angular_core.forwardRef(function () { return FormGroupDirective; })
	};
	/**
	 * \@whatItDoes Binds an existing {\@link FormGroup} to a DOM element.
	 *
	 * \@howToUse
	 *
	 * This directive accepts an existing {\@link FormGroup} instance. It will then use this
	 * {\@link FormGroup} instance to match any child {\@link FormControl}, {\@link FormGroup},
	 * and {\@link FormArray} instances to child {\@link FormControlName}, {\@link FormGroupName},
	 * and {\@link FormArrayName} directives.
	 *
	 * **Set value**: You can set the form's initial value when instantiating the
	 * {\@link FormGroup}, or you can set it programmatically later using the {\@link FormGroup}'s
	 * {\@link AbstractControl#setValue setValue} or {\@link AbstractControl#patchValue patchValue}
	 * methods.
	 *
	 * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
	 * to the {\@link FormGroup}'s {\@link AbstractControl#valueChanges valueChanges} event.  You can also
	 * listen to its {\@link AbstractControl#statusChanges statusChanges} event to be notified when the
	 * validation status is re-calculated.
	 *
	 * Furthermore, you can listen to the directive's `ngSubmit` event to be notified when the user has
	 * triggered a form submission. The `ngSubmit` event will be emitted with the original form
	 * submission event.
	 *
	 * ### Example
	 *
	 * In this example, we create form controls for first name and last name.
	 *
	 * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	 *
	 * **npm package**: `\@angular/forms`
	 *
	 * **NgModule**: {\@link ReactiveFormsModule}
	 *
	 *  \@stable
	 */
	var FormGroupDirective = (function (_super) {
	    __extends(FormGroupDirective, _super);
	    /**
	     * @param {?} _validators
	     * @param {?} _asyncValidators
	     */
	    function FormGroupDirective(_validators, _asyncValidators) {
	        var _this = _super.call(this) || this;
	        _this._validators = _validators;
	        _this._asyncValidators = _asyncValidators;
	        _this._submitted = false;
	        _this.directives = [];
	        _this.form = ((null));
	        _this.ngSubmit = new _angular_core.EventEmitter();
	        return _this;
	    }
	    /**
	     * @param {?} changes
	     * @return {?}
	     */
	    FormGroupDirective.prototype.ngOnChanges = function (changes) {
	        this._checkFormPresent();
	        if (changes.hasOwnProperty('form')) {
	            this._updateValidators();
	            this._updateDomValue();
	            this._updateRegistrations();
	        }
	    };
	    Object.defineProperty(FormGroupDirective.prototype, "submitted", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._submitted; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormGroupDirective.prototype, "control", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this.form; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormGroupDirective.prototype, "path", {
	        /**
	         * @return {?}
	         */
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    FormGroupDirective.prototype.addControl = function (dir) {
	        var /** @type {?} */ ctrl = this.form.get(dir.path);
	        setUpControl(ctrl, dir);
	        ctrl.updateValueAndValidity({ emitEvent: false });
	        this.directives.push(dir);
	        return ctrl;
	    };
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    FormGroupDirective.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    FormGroupDirective.prototype.removeControl = function (dir) { remove(this.directives, dir); };
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    FormGroupDirective.prototype.addFormGroup = function (dir) {
	        var /** @type {?} */ ctrl = this.form.get(dir.path);
	        setUpFormContainer(ctrl, dir);
	        ctrl.updateValueAndValidity({ emitEvent: false });
	    };
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    FormGroupDirective.prototype.removeFormGroup = function (dir) { };
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    FormGroupDirective.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    FormGroupDirective.prototype.addFormArray = function (dir) {
	        var /** @type {?} */ ctrl = this.form.get(dir.path);
	        setUpFormContainer(ctrl, dir);
	        ctrl.updateValueAndValidity({ emitEvent: false });
	    };
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    FormGroupDirective.prototype.removeFormArray = function (dir) { };
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    FormGroupDirective.prototype.getFormArray = function (dir) { return (this.form.get(dir.path)); };
	    /**
	     * @param {?} dir
	     * @param {?} value
	     * @return {?}
	     */
	    FormGroupDirective.prototype.updateModel = function (dir, value) {
	        var /** @type {?} */ ctrl = (this.form.get(dir.path));
	        ctrl.setValue(value);
	    };
	    /**
	     * @param {?} $event
	     * @return {?}
	     */
	    FormGroupDirective.prototype.onSubmit = function ($event) {
	        this._submitted = true;
	        this.ngSubmit.emit($event);
	        return false;
	    };
	    /**
	     * @return {?}
	     */
	    FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
	    /**
	     * @param {?=} value
	     * @return {?}
	     */
	    FormGroupDirective.prototype.resetForm = function (value) {
	        if (value === void 0) { value = undefined; }
	        this.form.reset(value);
	        this._submitted = false;
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    FormGroupDirective.prototype._updateDomValue = function () {
	        var _this = this;
	        this.directives.forEach(function (dir) {
	            var /** @type {?} */ newCtrl = _this.form.get(dir.path);
	            if (dir._control !== newCtrl) {
	                cleanUpControl(dir._control, dir);
	                if (newCtrl)
	                    setUpControl(newCtrl, dir);
	                dir._control = newCtrl;
	            }
	        });
	        this.form._updateTreeValidity({ emitEvent: false });
	    };
	    /**
	     * @return {?}
	     */
	    FormGroupDirective.prototype._updateRegistrations = function () {
	        var _this = this;
	        this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
	        if (this._oldForm)
	            this._oldForm._registerOnCollectionChange(function () { });
	        this._oldForm = this.form;
	    };
	    /**
	     * @return {?}
	     */
	    FormGroupDirective.prototype._updateValidators = function () {
	        var /** @type {?} */ sync = composeValidators(this._validators);
	        this.form.validator = Validators.compose([/** @type {?} */ ((this.form.validator)), /** @type {?} */ ((sync))]);
	        var /** @type {?} */ async = composeAsyncValidators(this._asyncValidators);
	        this.form.asyncValidator = Validators.composeAsync([/** @type {?} */ ((this.form.asyncValidator)), /** @type {?} */ ((async))]);
	    };
	    /**
	     * @return {?}
	     */
	    FormGroupDirective.prototype._checkFormPresent = function () {
	        if (!this.form) {
	            ReactiveErrors.missingFormException();
	        }
	    };
	    return FormGroupDirective;
	}(ControlContainer));
	FormGroupDirective.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: '[formGroup]',
	                providers: [formDirectiveProvider$1],
	                host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
	                exportAs: 'ngForm'
	            },] },
	];
	/**
	 * @nocollapse
	 */
	FormGroupDirective.ctorParameters = function () { return [
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	]; };
	FormGroupDirective.propDecorators = {
	    'form': [{ type: _angular_core.Input, args: ['formGroup',] },],
	    'ngSubmit': [{ type: _angular_core.Output },],
	};
	/**
	 * @template T
	 * @param {?} list
	 * @param {?} el
	 * @return {?}
	 */
	function remove(list, el) {
	    var /** @type {?} */ index = list.indexOf(el);
	    if (index > -1) {
	        list.splice(index, 1);
	    }
	}
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var formGroupNameProvider = {
	    provide: ControlContainer,
	    useExisting: _angular_core.forwardRef(function () { return FormGroupName; })
	};
	/**
	 * \@whatItDoes Syncs a nested {\@link FormGroup} to a DOM element.
	 *
	 * \@howToUse
	 *
	 * This directive can only be used with a parent {\@link FormGroupDirective} (selector:
	 * `[formGroup]`).
	 *
	 * It accepts the string name of the nested {\@link FormGroup} you want to link, and
	 * will look for a {\@link FormGroup} registered with that name in the parent
	 * {\@link FormGroup} instance you passed into {\@link FormGroupDirective}.
	 *
	 * Nested form groups can come in handy when you want to validate a sub-group of a
	 * form separately from the rest or when you'd like to group the values of certain
	 * controls into their own nested object.
	 *
	 * **Access the group**: You can access the associated {\@link FormGroup} using the
	 * {\@link AbstractControl#get} method. Ex: `this.form.get('name')`.
	 *
	 * You can also access individual controls within the group using dot syntax.
	 * Ex: `this.form.get('name.first')`
	 *
	 * **Get the value**: the `value` property is always synced and available on the
	 * {\@link FormGroup}. See a full list of available properties in {\@link AbstractControl}.
	 *
	 * **Set the value**: You can set an initial value for each child control when instantiating
	 * the {\@link FormGroup}, or you can set it programmatically later using
	 * {\@link AbstractControl#setValue setValue} or {\@link AbstractControl#patchValue patchValue}.
	 *
	 * **Listen to value**: If you want to listen to changes in the value of the group, you can
	 * subscribe to the {\@link AbstractControl#valueChanges valueChanges} event.  You can also listen to
	 * {\@link AbstractControl#statusChanges statusChanges} to be notified when the validation status is
	 * re-calculated.
	 *
	 * ### Example
	 *
	 * {\@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
	 *
	 * * **npm package**: `\@angular/forms`
	 *
	 * * **NgModule**: `ReactiveFormsModule`
	 *
	 * \@stable
	 */
	var FormGroupName = (function (_super) {
	    __extends(FormGroupName, _super);
	    /**
	     * @param {?} parent
	     * @param {?} validators
	     * @param {?} asyncValidators
	     */
	    function FormGroupName(parent, validators, asyncValidators) {
	        var _this = _super.call(this) || this;
	        _this._parent = parent;
	        _this._validators = validators;
	        _this._asyncValidators = asyncValidators;
	        return _this;
	    }
	    /**
	     * \@internal
	     * @return {?}
	     */
	    FormGroupName.prototype._checkParentType = function () {
	        if (_hasInvalidParent(this._parent)) {
	            ReactiveErrors.groupParentException();
	        }
	    };
	    return FormGroupName;
	}(AbstractFormGroupDirective));
	FormGroupName.decorators = [
	    { type: _angular_core.Directive, args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] },
	];
	/**
	 * @nocollapse
	 */
	FormGroupName.ctorParameters = function () { return [
	    { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	]; };
	FormGroupName.propDecorators = {
	    'name': [{ type: _angular_core.Input, args: ['formGroupName',] },],
	};
	var formArrayNameProvider = {
	    provide: ControlContainer,
	    useExisting: _angular_core.forwardRef(function () { return FormArrayName; })
	};
	/**
	 * \@whatItDoes Syncs a nested {\@link FormArray} to a DOM element.
	 *
	 * \@howToUse
	 *
	 * This directive is designed to be used with a parent {\@link FormGroupDirective} (selector:
	 * `[formGroup]`).
	 *
	 * It accepts the string name of the nested {\@link FormArray} you want to link, and
	 * will look for a {\@link FormArray} registered with that name in the parent
	 * {\@link FormGroup} instance you passed into {\@link FormGroupDirective}.
	 *
	 * Nested form arrays can come in handy when you have a group of form controls but
	 * you're not sure how many there will be. Form arrays allow you to create new
	 * form controls dynamically.
	 *
	 * **Access the array**: You can access the associated {\@link FormArray} using the
	 * {\@link AbstractControl#get} method on the parent {\@link FormGroup}.
	 * Ex: `this.form.get('cities')`.
	 *
	 * **Get the value**: the `value` property is always synced and available on the
	 * {\@link FormArray}. See a full list of available properties in {\@link AbstractControl}.
	 *
	 * **Set the value**: You can set an initial value for each child control when instantiating
	 * the {\@link FormArray}, or you can set the value programmatically later using the
	 * {\@link FormArray}'s {\@link AbstractControl#setValue} or {\@link AbstractControl#patchValue}
	 * methods.
	 *
	 * **Listen to value**: If you want to listen to changes in the value of the array, you can
	 * subscribe to the {\@link FormArray}'s {\@link AbstractControl#valueChanges} event.  You can also
	 * listen to its {\@link AbstractControl#statusChanges} event to be notified when the validation
	 * status is re-calculated.
	 *
	 * **Add new controls**: You can add new controls to the {\@link FormArray} dynamically by
	 * calling its {\@link FormArray#push} method.
	 *  Ex: `this.form.get('cities').push(new FormControl());`
	 *
	 * ### Example
	 *
	 * {\@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
	 *
	 * * **npm package**: `\@angular/forms`
	 *
	 * * **NgModule**: `ReactiveFormsModule`
	 *
	 * \@stable
	 */
	var FormArrayName = (function (_super) {
	    __extends(FormArrayName, _super);
	    /**
	     * @param {?} parent
	     * @param {?} validators
	     * @param {?} asyncValidators
	     */
	    function FormArrayName(parent, validators, asyncValidators) {
	        var _this = _super.call(this) || this;
	        _this._parent = parent;
	        _this._validators = validators;
	        _this._asyncValidators = asyncValidators;
	        return _this;
	    }
	    /**
	     * @return {?}
	     */
	    FormArrayName.prototype.ngOnInit = function () {
	        this._checkParentType(); /** @type {?} */
	        ((this.formDirective)).addFormArray(this);
	    };
	    /**
	     * @return {?}
	     */
	    FormArrayName.prototype.ngOnDestroy = function () {
	        if (this.formDirective) {
	            this.formDirective.removeFormArray(this);
	        }
	    };
	    Object.defineProperty(FormArrayName.prototype, "control", {
	        /**
	         * @return {?}
	         */
	        get: function () { return ((this.formDirective)).getFormArray(this); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "formDirective", {
	        /**
	         * @return {?}
	         */
	        get: function () {
	            return this._parent ? (this._parent.formDirective) : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "path", {
	        /**
	         * @return {?}
	         */
	        get: function () { return controlPath(this.name, this._parent); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "validator", {
	        /**
	         * @return {?}
	         */
	        get: function () { return composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
	        /**
	         * @return {?}
	         */
	        get: function () {
	            return composeAsyncValidators(this._asyncValidators);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @return {?}
	     */
	    FormArrayName.prototype._checkParentType = function () {
	        if (_hasInvalidParent(this._parent)) {
	            ReactiveErrors.arrayParentException();
	        }
	    };
	    return FormArrayName;
	}(ControlContainer));
	FormArrayName.decorators = [
	    { type: _angular_core.Directive, args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] },
	];
	/**
	 * @nocollapse
	 */
	FormArrayName.ctorParameters = function () { return [
	    { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	]; };
	FormArrayName.propDecorators = {
	    'name': [{ type: _angular_core.Input, args: ['formArrayName',] },],
	};
	/**
	 * @param {?} parent
	 * @return {?}
	 */
	function _hasInvalidParent(parent) {
	    return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
	        !(parent instanceof FormArrayName);
	}
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var controlNameBinding = {
	    provide: NgControl,
	    useExisting: _angular_core.forwardRef(function () { return FormControlName; })
	};
	/**
	 * \@whatItDoes Syncs a {\@link FormControl} in an existing {\@link FormGroup} to a form control
	 * element by name.
	 *
	 * In other words, this directive ensures that any values written to the {\@link FormControl}
	 * instance programmatically will be written to the DOM element (model -> view). Conversely,
	 * any values written to the DOM element through user input will be reflected in the
	 * {\@link FormControl} instance (view -> model).
	 *
	 * \@howToUse
	 *
	 * This directive is designed to be used with a parent {\@link FormGroupDirective} (selector:
	 * `[formGroup]`).
	 *
	 * It accepts the string name of the {\@link FormControl} instance you want to
	 * link, and will look for a {\@link FormControl} registered with that name in the
	 * closest {\@link FormGroup} or {\@link FormArray} above it.
	 *
	 * **Access the control**: You can access the {\@link FormControl} associated with
	 * this directive by using the {\@link AbstractControl#get get} method.
	 * Ex: `this.form.get('first');`
	 *
	 * **Get value**: the `value` property is always synced and available on the {\@link FormControl}.
	 * See a full list of available properties in {\@link AbstractControl}.
	 *
	 *  **Set value**: You can set an initial value for the control when instantiating the
	 *  {\@link FormControl}, or you can set it programmatically later using
	 *  {\@link AbstractControl#setValue setValue} or {\@link AbstractControl#patchValue patchValue}.
	 *
	 * **Listen to value**: If you want to listen to changes in the value of the control, you can
	 * subscribe to the {\@link AbstractControl#valueChanges valueChanges} event.  You can also listen to
	 * {\@link AbstractControl#statusChanges statusChanges} to be notified when the validation status is
	 * re-calculated.
	 *
	 * ### Example
	 *
	 * In this example, we create form controls for first name and last name.
	 *
	 * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	 *
	 * To see `formControlName` examples with different form control types, see:
	 *
	 * * Radio buttons: {\@link RadioControlValueAccessor}
	 * * Selects: {\@link SelectControlValueAccessor}
	 *
	 * **npm package**: `\@angular/forms`
	 *
	 * **NgModule**: {\@link ReactiveFormsModule}
	 *
	 *  \@stable
	 */
	var FormControlName = (function (_super) {
	    __extends(FormControlName, _super);
	    /**
	     * @param {?} parent
	     * @param {?} validators
	     * @param {?} asyncValidators
	     * @param {?} valueAccessors
	     */
	    function FormControlName(parent, validators, asyncValidators, valueAccessors) {
	        var _this = _super.call(this) || this;
	        _this._added = false;
	        _this.update = new _angular_core.EventEmitter();
	        _this._parent = parent;
	        _this._rawValidators = validators || [];
	        _this._rawAsyncValidators = asyncValidators || [];
	        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
	        return _this;
	    }
	    Object.defineProperty(FormControlName.prototype, "isDisabled", {
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @param {?} changes
	     * @return {?}
	     */
	    FormControlName.prototype.ngOnChanges = function (changes) {
	        if (!this._added)
	            this._setUpControl();
	        if (isPropertyUpdated(changes, this.viewModel)) {
	            this.viewModel = this.model;
	            this.formDirective.updateModel(this, this.model);
	        }
	    };
	    /**
	     * @return {?}
	     */
	    FormControlName.prototype.ngOnDestroy = function () {
	        if (this.formDirective) {
	            this.formDirective.removeControl(this);
	        }
	    };
	    /**
	     * @param {?} newValue
	     * @return {?}
	     */
	    FormControlName.prototype.viewToModelUpdate = function (newValue) {
	        this.viewModel = newValue;
	        this.update.emit(newValue);
	    };
	    Object.defineProperty(FormControlName.prototype, "path", {
	        /**
	         * @return {?}
	         */
	        get: function () { return controlPath(this.name, /** @type {?} */ ((this._parent))); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "formDirective", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._parent ? this._parent.formDirective : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "validator", {
	        /**
	         * @return {?}
	         */
	        get: function () { return composeValidators(this._rawValidators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "asyncValidator", {
	        /**
	         * @return {?}
	         */
	        get: function () {
	            return ((composeAsyncValidators(this._rawAsyncValidators)));
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "control", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._control; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @return {?}
	     */
	    FormControlName.prototype._checkParentType = function () {
	        if (!(this._parent instanceof FormGroupName) &&
	            this._parent instanceof AbstractFormGroupDirective) {
	            ReactiveErrors.ngModelGroupException();
	        }
	        else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
	            !(this._parent instanceof FormArrayName)) {
	            ReactiveErrors.controlParentException();
	        }
	    };
	    /**
	     * @return {?}
	     */
	    FormControlName.prototype._setUpControl = function () {
	        this._checkParentType();
	        this._control = this.formDirective.addControl(this);
	        if (this.control.disabled && ((this.valueAccessor)).setDisabledState) {
	            ((((this.valueAccessor)).setDisabledState))(true);
	        }
	        this._added = true;
	    };
	    return FormControlName;
	}(NgControl));
	FormControlName.decorators = [
	    { type: _angular_core.Directive, args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] },
	];
	/**
	 * @nocollapse
	 */
	FormControlName.ctorParameters = function () { return [
	    { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	]; };
	FormControlName.propDecorators = {
	    'name': [{ type: _angular_core.Input, args: ['formControlName',] },],
	    'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	    'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	    'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	};
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var REQUIRED_VALIDATOR = {
	    provide: NG_VALIDATORS,
	    useExisting: _angular_core.forwardRef(function () { return RequiredValidator; }),
	    multi: true
	};
	var CHECKBOX_REQUIRED_VALIDATOR = {
	    provide: NG_VALIDATORS,
	    useExisting: _angular_core.forwardRef(function () { return CheckboxRequiredValidator; }),
	    multi: true
	};
	/**
	 * A Directive that adds the `required` validator to any controls marked with the
	 * `required` attribute, via the {\@link NG_VALIDATORS} binding.
	 *
	 * ### Example
	 *
	 * ```
	 * <input name="fullName" ngModel required>
	 * ```
	 *
	 * \@stable
	 */
	var RequiredValidator = (function () {
	    function RequiredValidator() {
	    }
	    Object.defineProperty(RequiredValidator.prototype, "required", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._required; },
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        set: function (value) {
	            this._required = value != null && value !== false && "" + value !== 'false';
	            if (this._onChange)
	                this._onChange();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @param {?} c
	     * @return {?}
	     */
	    RequiredValidator.prototype.validate = function (c) {
	        return this.required ? Validators.required(c) : null;
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	    return RequiredValidator;
	}());
	RequiredValidator.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
	                providers: [REQUIRED_VALIDATOR],
	                host: { '[attr.required]': 'required ? "" : null' }
	            },] },
	];
	/**
	 * @nocollapse
	 */
	RequiredValidator.ctorParameters = function () { return []; };
	RequiredValidator.propDecorators = {
	    'required': [{ type: _angular_core.Input },],
	};
	/**
	 * A Directive that adds the `required` validator to checkbox controls marked with the
	 * `required` attribute, via the {\@link NG_VALIDATORS} binding.
	 *
	 * ### Example
	 *
	 * ```
	 * <input type="checkbox" name="active" ngModel required>
	 * ```
	 *
	 * \@experimental
	 */
	var CheckboxRequiredValidator = (function (_super) {
	    __extends(CheckboxRequiredValidator, _super);
	    function CheckboxRequiredValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    /**
	     * @param {?} c
	     * @return {?}
	     */
	    CheckboxRequiredValidator.prototype.validate = function (c) {
	        return this.required ? Validators.requiredTrue(c) : null;
	    };
	    return CheckboxRequiredValidator;
	}(RequiredValidator));
	CheckboxRequiredValidator.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
	                providers: [CHECKBOX_REQUIRED_VALIDATOR],
	                host: { '[attr.required]': 'required ? "" : null' }
	            },] },
	];
	/**
	 * @nocollapse
	 */
	CheckboxRequiredValidator.ctorParameters = function () { return []; };
	/**
	 * Provider which adds {\@link EmailValidator} to {\@link NG_VALIDATORS}.
	 */
	var EMAIL_VALIDATOR = {
	    provide: NG_VALIDATORS,
	    useExisting: _angular_core.forwardRef(function () { return EmailValidator; }),
	    multi: true
	};
	/**
	 * A Directive that adds the `email` validator to controls marked with the
	 * `email` attribute, via the {\@link NG_VALIDATORS} binding.
	 *
	 * ### Example
	 *
	 * ```
	 * <input type="email" name="email" ngModel email>
	 * <input type="email" name="email" ngModel email="true">
	 * <input type="email" name="email" ngModel [email]="true">
	 * ```
	 *
	 * \@experimental
	 */
	var EmailValidator = (function () {
	    function EmailValidator() {
	    }
	    Object.defineProperty(EmailValidator.prototype, "email", {
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        set: function (value) {
	            this._enabled = value === '' || value === true || value === 'true';
	            if (this._onChange)
	                this._onChange();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @param {?} c
	     * @return {?}
	     */
	    EmailValidator.prototype.validate = function (c) {
	        return this._enabled ? Validators.email(c) : null;
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    EmailValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	    return EmailValidator;
	}());
	EmailValidator.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: '[email][formControlName],[email][formControl],[email][ngModel]',
	                providers: [EMAIL_VALIDATOR]
	            },] },
	];
	/**
	 * @nocollapse
	 */
	EmailValidator.ctorParameters = function () { return []; };
	EmailValidator.propDecorators = {
	    'email': [{ type: _angular_core.Input },],
	};
	/**
	 * Provider which adds {\@link MinLengthValidator} to {\@link NG_VALIDATORS}.
	 *
	 * ## Example:
	 *
	 * {\@example common/forms/ts/validators/validators.ts region='min'}
	 */
	var MIN_LENGTH_VALIDATOR = {
	    provide: NG_VALIDATORS,
	    useExisting: _angular_core.forwardRef(function () { return MinLengthValidator; }),
	    multi: true
	};
	/**
	 * A directive which installs the {\@link MinLengthValidator} for any `formControlName`,
	 * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
	 *
	 * \@stable
	 */
	var MinLengthValidator = (function () {
	    function MinLengthValidator() {
	    }
	    /**
	     * @param {?} changes
	     * @return {?}
	     */
	    MinLengthValidator.prototype.ngOnChanges = function (changes) {
	        if ('minlength' in changes) {
	            this._createValidator();
	            if (this._onChange)
	                this._onChange();
	        }
	    };
	    /**
	     * @param {?} c
	     * @return {?}
	     */
	    MinLengthValidator.prototype.validate = function (c) {
	        return this.minlength == null ? null : this._validator(c);
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	    /**
	     * @return {?}
	     */
	    MinLengthValidator.prototype._createValidator = function () {
	        this._validator = Validators.minLength(parseInt(this.minlength, 10));
	    };
	    return MinLengthValidator;
	}());
	MinLengthValidator.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
	                providers: [MIN_LENGTH_VALIDATOR],
	                host: { '[attr.minlength]': 'minlength ? minlength : null' }
	            },] },
	];
	/**
	 * @nocollapse
	 */
	MinLengthValidator.ctorParameters = function () { return []; };
	MinLengthValidator.propDecorators = {
	    'minlength': [{ type: _angular_core.Input },],
	};
	/**
	 * Provider which adds {\@link MaxLengthValidator} to {\@link NG_VALIDATORS}.
	 *
	 * ## Example:
	 *
	 * {\@example common/forms/ts/validators/validators.ts region='max'}
	 */
	var MAX_LENGTH_VALIDATOR = {
	    provide: NG_VALIDATORS,
	    useExisting: _angular_core.forwardRef(function () { return MaxLengthValidator; }),
	    multi: true
	};
	/**
	 * A directive which installs the {\@link MaxLengthValidator} for any `formControlName,
	 * `formControl`,
	 * or control with `ngModel` that also has a `maxlength` attribute.
	 *
	 * \@stable
	 */
	var MaxLengthValidator = (function () {
	    function MaxLengthValidator() {
	    }
	    /**
	     * @param {?} changes
	     * @return {?}
	     */
	    MaxLengthValidator.prototype.ngOnChanges = function (changes) {
	        if ('maxlength' in changes) {
	            this._createValidator();
	            if (this._onChange)
	                this._onChange();
	        }
	    };
	    /**
	     * @param {?} c
	     * @return {?}
	     */
	    MaxLengthValidator.prototype.validate = function (c) {
	        return this.maxlength != null ? this._validator(c) : null;
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	    /**
	     * @return {?}
	     */
	    MaxLengthValidator.prototype._createValidator = function () {
	        this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
	    };
	    return MaxLengthValidator;
	}());
	MaxLengthValidator.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
	                providers: [MAX_LENGTH_VALIDATOR],
	                host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
	            },] },
	];
	/**
	 * @nocollapse
	 */
	MaxLengthValidator.ctorParameters = function () { return []; };
	MaxLengthValidator.propDecorators = {
	    'maxlength': [{ type: _angular_core.Input },],
	};
	var PATTERN_VALIDATOR = {
	    provide: NG_VALIDATORS,
	    useExisting: _angular_core.forwardRef(function () { return PatternValidator; }),
	    multi: true
	};
	/**
	 * A Directive that adds the `pattern` validator to any controls marked with the
	 * `pattern` attribute, via the {\@link NG_VALIDATORS} binding. Uses attribute value
	 * as the regex to validate Control value against.  Follows pattern attribute
	 * semantics; i.e. regex must match entire Control value.
	 *
	 * ### Example
	 *
	 * ```
	 * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
	 * ```
	 * \@stable
	 */
	var PatternValidator = (function () {
	    function PatternValidator() {
	    }
	    /**
	     * @param {?} changes
	     * @return {?}
	     */
	    PatternValidator.prototype.ngOnChanges = function (changes) {
	        if ('pattern' in changes) {
	            this._createValidator();
	            if (this._onChange)
	                this._onChange();
	        }
	    };
	    /**
	     * @param {?} c
	     * @return {?}
	     */
	    PatternValidator.prototype.validate = function (c) { return this._validator(c); };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	    /**
	     * @return {?}
	     */
	    PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
	    return PatternValidator;
	}());
	PatternValidator.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
	                providers: [PATTERN_VALIDATOR],
	                host: { '[attr.pattern]': 'pattern ? pattern : null' }
	            },] },
	];
	/**
	 * @nocollapse
	 */
	PatternValidator.ctorParameters = function () { return []; };
	PatternValidator.propDecorators = {
	    'pattern': [{ type: _angular_core.Input },],
	};
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * \@whatItDoes Creates an {\@link AbstractControl} from a user-specified configuration.
	 *
	 * It is essentially syntactic sugar that shortens the `new FormGroup()`,
	 * `new FormControl()`, and `new FormArray()` boilerplate that can build up in larger
	 * forms.
	 *
	 * \@howToUse
	 *
	 * To use, inject `FormBuilder` into your component class. You can then call its methods
	 * directly.
	 *
	 * {\@example forms/ts/formBuilder/form_builder_example.ts region='Component'}
	 *
	 *  * **npm package**: `\@angular/forms`
	 *
	 *  * **NgModule**: {\@link ReactiveFormsModule}
	 *
	 * \@stable
	 */
	var FormBuilder = (function () {
	    function FormBuilder() {
	    }
	    /**
	     * Construct a new {\@link FormGroup} with the given map of configuration.
	     * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
	     *
	     * See the {\@link FormGroup} constructor for more details.
	     * @param {?} controlsConfig
	     * @param {?=} extra
	     * @return {?}
	     */
	    FormBuilder.prototype.group = function (controlsConfig, extra) {
	        if (extra === void 0) { extra = null; }
	        var /** @type {?} */ controls = this._reduceControls(controlsConfig);
	        var /** @type {?} */ validator = extra != null ? extra['validator'] : null;
	        var /** @type {?} */ asyncValidator = extra != null ? extra['asyncValidator'] : null;
	        return new FormGroup(controls, validator, asyncValidator);
	    };
	    /**
	     * Construct a new {\@link FormControl} with the given `formState`,`validator`, and
	     * `asyncValidator`.
	     *
	     * `formState` can either be a standalone value for the form control or an object
	     * that contains both a value and a disabled status.
	     *
	     * @param {?} formState
	     * @param {?=} validator
	     * @param {?=} asyncValidator
	     * @return {?}
	     */
	    FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
	        return new FormControl(formState, validator, asyncValidator);
	    };
	    /**
	     * Construct a {\@link FormArray} from the given `controlsConfig` array of
	     * configuration, with the given optional `validator` and `asyncValidator`.
	     * @param {?} controlsConfig
	     * @param {?=} validator
	     * @param {?=} asyncValidator
	     * @return {?}
	     */
	    FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
	        var _this = this;
	        var /** @type {?} */ controls = controlsConfig.map(function (c) { return _this._createControl(c); });
	        return new FormArray(controls, validator, asyncValidator);
	    };
	    /**
	     * \@internal
	     * @param {?} controlsConfig
	     * @return {?}
	     */
	    FormBuilder.prototype._reduceControls = function (controlsConfig) {
	        var _this = this;
	        var /** @type {?} */ controls = {};
	        Object.keys(controlsConfig).forEach(function (controlName) {
	            controls[controlName] = _this._createControl(controlsConfig[controlName]);
	        });
	        return controls;
	    };
	    /**
	     * \@internal
	     * @param {?} controlConfig
	     * @return {?}
	     */
	    FormBuilder.prototype._createControl = function (controlConfig) {
	        if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
	            controlConfig instanceof FormArray) {
	            return controlConfig;
	        }
	        else if (Array.isArray(controlConfig)) {
	            var /** @type {?} */ value = controlConfig[0];
	            var /** @type {?} */ validator = controlConfig.length > 1 ? controlConfig[1] : null;
	            var /** @type {?} */ asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
	            return this.control(value, validator, asyncValidator);
	        }
	        else {
	            return this.control(controlConfig);
	        }
	    };
	    return FormBuilder;
	}());
	FormBuilder.decorators = [
	    { type: _angular_core.Injectable },
	];
	/**
	 * @nocollapse
	 */
	FormBuilder.ctorParameters = function () { return []; };
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * @module
	 * @description
	 * Entry point for all public APIs of the common package.
	 */
	/**
	 * \@stable
	 */
	var VERSION = new _angular_core.Version('4.4.4');
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * \@whatItDoes Adds `novalidate` attribute to all forms by default.
	 *
	 * `novalidate` is used to disable browser's native form validation.
	 *
	 * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
	 *
	 * ```
	 * <form ngNativeValidate></form>
	 * ```
	 *
	 * \@experimental
	 */
	var NgNoValidate = (function () {
	    function NgNoValidate() {
	    }
	    return NgNoValidate;
	}());
	NgNoValidate.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
	                host: { 'novalidate': '' },
	            },] },
	];
	/**
	 * @nocollapse
	 */
	NgNoValidate.ctorParameters = function () { return []; };
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var SHARED_FORM_DIRECTIVES = [
	    NgNoValidate,
	    NgSelectOption,
	    NgSelectMultipleOption,
	    DefaultValueAccessor,
	    NumberValueAccessor,
	    RangeValueAccessor,
	    CheckboxControlValueAccessor,
	    SelectControlValueAccessor,
	    SelectMultipleControlValueAccessor,
	    RadioControlValueAccessor,
	    NgControlStatus,
	    NgControlStatusGroup,
	    RequiredValidator,
	    MinLengthValidator,
	    MaxLengthValidator,
	    PatternValidator,
	    CheckboxRequiredValidator,
	    EmailValidator,
	];
	var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
	var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
	/**
	 * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
	 */
	var InternalFormsSharedModule = (function () {
	    function InternalFormsSharedModule() {
	    }
	    return InternalFormsSharedModule;
	}());
	InternalFormsSharedModule.decorators = [
	    { type: _angular_core.NgModule, args: [{
	                declarations: SHARED_FORM_DIRECTIVES,
	                exports: SHARED_FORM_DIRECTIVES,
	            },] },
	];
	/**
	 * @nocollapse
	 */
	InternalFormsSharedModule.ctorParameters = function () { return []; };
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * The ng module for forms.
	 * \@stable
	 */
	var FormsModule = (function () {
	    function FormsModule() {
	    }
	    return FormsModule;
	}());
	FormsModule.decorators = [
	    { type: _angular_core.NgModule, args: [{
	                declarations: TEMPLATE_DRIVEN_DIRECTIVES,
	                providers: [RadioControlRegistry],
	                exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
	            },] },
	];
	/**
	 * @nocollapse
	 */
	FormsModule.ctorParameters = function () { return []; };
	/**
	 * The ng module for reactive forms.
	 * \@stable
	 */
	var ReactiveFormsModule = (function () {
	    function ReactiveFormsModule() {
	    }
	    return ReactiveFormsModule;
	}());
	ReactiveFormsModule.decorators = [
	    { type: _angular_core.NgModule, args: [{
	                declarations: [REACTIVE_DRIVEN_DIRECTIVES],
	                providers: [FormBuilder, RadioControlRegistry],
	                exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
	            },] },
	];
	/**
	 * @nocollapse
	 */
	ReactiveFormsModule.ctorParameters = function () { return []; };
	
	exports.AbstractControlDirective = AbstractControlDirective;
	exports.AbstractFormGroupDirective = AbstractFormGroupDirective;
	exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor;
	exports.ControlContainer = ControlContainer;
	exports.NG_VALUE_ACCESSOR = NG_VALUE_ACCESSOR;
	exports.COMPOSITION_BUFFER_MODE = COMPOSITION_BUFFER_MODE;
	exports.DefaultValueAccessor = DefaultValueAccessor;
	exports.NgControl = NgControl;
	exports.NgControlStatus = NgControlStatus;
	exports.NgControlStatusGroup = NgControlStatusGroup;
	exports.NgForm = NgForm;
	exports.NgModel = NgModel;
	exports.NgModelGroup = NgModelGroup;
	exports.RadioControlValueAccessor = RadioControlValueAccessor;
	exports.FormControlDirective = FormControlDirective;
	exports.FormControlName = FormControlName;
	exports.FormGroupDirective = FormGroupDirective;
	exports.FormArrayName = FormArrayName;
	exports.FormGroupName = FormGroupName;
	exports.NgSelectOption = NgSelectOption;
	exports.SelectControlValueAccessor = SelectControlValueAccessor;
	exports.SelectMultipleControlValueAccessor = SelectMultipleControlValueAccessor;
	exports.CheckboxRequiredValidator = CheckboxRequiredValidator;
	exports.EmailValidator = EmailValidator;
	exports.MaxLengthValidator = MaxLengthValidator;
	exports.MinLengthValidator = MinLengthValidator;
	exports.PatternValidator = PatternValidator;
	exports.RequiredValidator = RequiredValidator;
	exports.FormBuilder = FormBuilder;
	exports.AbstractControl = AbstractControl;
	exports.FormArray = FormArray;
	exports.FormControl = FormControl;
	exports.FormGroup = FormGroup;
	exports.NG_ASYNC_VALIDATORS = NG_ASYNC_VALIDATORS;
	exports.NG_VALIDATORS = NG_VALIDATORS;
	exports.Validators = Validators;
	exports.VERSION = VERSION;
	exports.FormsModule = FormsModule;
	exports.ReactiveFormsModule = ReactiveFormsModule;
	exports.ɵba = InternalFormsSharedModule;
	exports.ɵz = REACTIVE_DRIVEN_DIRECTIVES;
	exports.ɵx = SHARED_FORM_DIRECTIVES;
	exports.ɵy = TEMPLATE_DRIVEN_DIRECTIVES;
	exports.ɵa = CHECKBOX_VALUE_ACCESSOR;
	exports.ɵb = DEFAULT_VALUE_ACCESSOR;
	exports.ɵc = AbstractControlStatus;
	exports.ɵd = ngControlStatusHost;
	exports.ɵe = formDirectiveProvider;
	exports.ɵf = formControlBinding;
	exports.ɵg = modelGroupProvider;
	exports.ɵbf = NgNoValidate;
	exports.ɵbb = NUMBER_VALUE_ACCESSOR;
	exports.ɵbc = NumberValueAccessor;
	exports.ɵh = RADIO_VALUE_ACCESSOR;
	exports.ɵi = RadioControlRegistry;
	exports.ɵbd = RANGE_VALUE_ACCESSOR;
	exports.ɵbe = RangeValueAccessor;
	exports.ɵj = formControlBinding$1;
	exports.ɵk = controlNameBinding;
	exports.ɵl = formDirectiveProvider$1;
	exports.ɵn = formArrayNameProvider;
	exports.ɵm = formGroupNameProvider;
	exports.ɵo = SELECT_VALUE_ACCESSOR;
	exports.ɵq = NgSelectMultipleOption;
	exports.ɵp = SELECT_MULTIPLE_VALUE_ACCESSOR;
	exports.ɵs = CHECKBOX_REQUIRED_VALIDATOR;
	exports.ɵt = EMAIL_VALIDATOR;
	exports.ɵv = MAX_LENGTH_VALIDATOR;
	exports.ɵu = MIN_LENGTH_VALIDATOR;
	exports.ɵw = PATTERN_VALIDATOR;
	exports.ɵr = REQUIRED_VALIDATOR;
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	})));
	//# sourceMappingURL=forms.umd.js.map


/***/ }),
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const util_1 = __webpack_require__(49);
	let Select2Component = Select2Component_1 = class Select2Component {
	    constructor(cd) {
	        this.cd = cd;
	        this.ops = [{ value: 't1', label: 't2' }];
	        this.options = [];
	        this.maximumSelectionLength = 0;
	        this.result = new core_1.EventEmitter();
	        this.value = [];
	        Select2Component_1.components.push(this);
	    }
	    select(item) {
	        this.value.push(item.text);
	        this.result.emit(this.value);
	    }
	    deSelect(item) {
	        const index = this.value.indexOf(item.text);
	        if (index >= -1) {
	            this.value.splice(index, 1);
	        }
	        this.result.emit(this.value);
	    }
	    addToGui(item) {
	        if (util_1.isNullOrUndefined(this.ngSelect.active)) {
	            this.ngSelect.active = [];
	        }
	        let value;
	        for (const elem of this.ngSelect.itemObjects) {
	            if (elem.text === item) {
	                value = elem;
	                break;
	            }
	        }
	        // JS (and thus TS) has no contains method for arrays.
	        // A workaround is checking if the index of an element is -1 (indicating not present)
	        if (this.ngSelect.active.indexOf(value) !== -1) {
	            return;
	        }
	        this.ngSelect.active.push(value);
	        this.cd.markForCheck();
	    }
	};
	Select2Component.components = [];
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Array)
	], Select2Component.prototype, "options", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], Select2Component.prototype, "maximumSelectionLength", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], Select2Component.prototype, "placeholder", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], Select2Component.prototype, "tag", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], Select2Component.prototype, "name", void 0);
	__decorate([
	    core_1.ViewChild('selector'),
	    __metadata("design:type", Object)
	], Select2Component.prototype, "ngSelect", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], Select2Component.prototype, "result", void 0);
	Select2Component = Select2Component_1 = __decorate([
	    core_1.Component({
	        selector: 'select2',
	        template: __webpack_require__(106),
	        styles: [
	            __webpack_require__(107)
	        ],
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush
	    }),
	    __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
	], Select2Component);
	exports.Select2Component = Select2Component;
	var Select2Component_1;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

	module.exports = "<ng-select #selector\n        [items]=\"options\"\n        [multiple]=true\n        (selected)=\"select($event)\"\n        (removed)=\"deSelect($event)\"\n        [placeholder]=\"placeholder\">\n</ng-select>\n";

/***/ }),
/* 107 */
/***/ (function(module, exports) {

	module.exports = ":host /deep/ ng-select {\n    display: table !important;\n    table-layout: fixed !important;\n    width: 100% !important;\n}\n\n:host /deep/ div {\n    z-index: 3001;\n}\n\n:host /deep/ input {\n    width: 100%;\n}\n\n:host /deep/ .below {\n    border: 0;\n    border-bottom: 1px solid #aaa;\n    border-radius: 0;\n}\n\n:host /deep/ .option {\n    background-color: #777;\n    color: #fff;\n    font-weight: bold;\n    border-radius: 4px;\n}\n\n:host /deep/ .deselect-option {\n    color: #fff;\n}\n\n:host /deep/ li[role=\"menuitem\"] {\n    z-index: 5000;\n}\n\n:host /deep/ .ui-select-container.ui-select-multiple.dropdown.form-control.open {\n    z-index: initial;\n    line-height:20px;\n    margin:0;\n    border: 0;\n    border-bottom: 1px solid rgb(170, 170, 170);\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    -webkit-box-shadow: initial;\n    -moz-box-shadow: initial;\n    box-shadow: initial;\n}\n\n:host /deep/ span.ui-select-match-item.btn.btn-default.btn-secondary.btn-xs {\n    background-color: rgb(119, 119, 119);\n    color: white;\n    -webkit-border-radius: 4px;\n    -moz-border-radius: 4px;\n    border-radius: 4px;\n    border:1px solid rgb(170, 170, 170);\n    font-size: 14px;\n    font-weight: bold;\n    margin: 0 5px 3px 0;\n}\n\n:host /deep/ span.ui-select-match-item.btn.btn-default.btn-secondary.btn-xs a.close {\n    color: white;\n    margin-top:1px;\n    float: left;\n    margin-left: -1px !important;\n    margin-right: 5px;\n    opacity: 1;\n    font-weight: initial;\n}\n\n:host /deep/ span.ui-select-match-item.btn.btn-default.btn-secondary.btn-xs a.close:hover {\n    opacity: 0.5;\n}"

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const comparison_component_1 = __webpack_require__(81);
	const criteria_1 = __webpack_require__(61);
	const util_1 = __webpack_require__(49);
	let NumberInputComponent = NumberInputComponent_1 = class NumberInputComponent {
	    constructor() {
	        NumberInputComponent_1.components.push(this);
	    }
	    criteriaChanged(value) {
	        this.comparisonComponent.criteriaChanged(value, this.criteria);
	    }
	    addToGui(item) {
	        if (util_1.isNullOrUndefined(this.content)) {
	            return;
	        }
	        // regex for finding out if the item is already in the list.
	        // tests "^ *item *$", "^ *item *,", ", *item *$", and ", *item *,"
	        // these represent following patterns:
	        // 1. arbitrary number of spaces, item, arbitrary number of spaces, complete field
	        // 2. arbitrary number of spaces, item, arbitrary number of spaces, comma, start of field
	        // 3. comma, arbitrary number of spaces, item, arbitrary number of spaces, end of field
	        // 4. comma, arbitrary number of spaces, item, arbitrary number of spaces, comma, in the middle of the field
	        // The commas are needed to make sure that it matches the complete number instead of partly, because else
	        // "13" would match the pattern "3$".
	        const regex = '(^ *' + item + ' *$|^ *' + item + ' *,|, *' + item + ' *,|, *' + item + ' *$)';
	        if (new RegExp(regex).test(this.content.nativeElement.value)) {
	            return;
	        }
	        if (this.content.nativeElement.value !== '') {
	            item = ', ' + item;
	        }
	        this.content.nativeElement.value += item;
	        this.criteriaChanged({ target: { value: this.content.nativeElement.value } });
	    }
	};
	NumberInputComponent.components = [];
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", comparison_component_1.ComparisonComponent)
	], NumberInputComponent.prototype, "comparisonComponent", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", criteria_1.Criteria)
	], NumberInputComponent.prototype, "criteria", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], NumberInputComponent.prototype, "tag", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], NumberInputComponent.prototype, "name", void 0);
	__decorate([
	    core_1.ViewChild('content'),
	    __metadata("design:type", Object)
	], NumberInputComponent.prototype, "content", void 0);
	NumberInputComponent = NumberInputComponent_1 = __decorate([
	    core_1.Component({
	        template: __webpack_require__(109),
	        selector: 'number-input',
	        styles: [__webpack_require__(110)]
	    }),
	    __metadata("design:paramtypes", [])
	], NumberInputComponent);
	exports.NumberInputComponent = NumberInputComponent;
	var NumberInputComponent_1;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

	module.exports = "<input #content\n        type=\"text\" [placeholder]=\"criteria.placeholder\"\n       (keyup)=\"criteriaChanged($event, crit)\">";

/***/ }),
/* 110 */
/***/ (function(module, exports) {

	module.exports = "input {\n    width: 100%;\n    border: 0 !important;\n    border-bottom: 1px solid #aaa !important;\n    border-radius: 0 !important;\n    margin-top: 8px;\n}\n\ninput:focus {\n    outline-width: 0;\n}"

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const platform_browser_1 = __webpack_require__(38);
	const pipes_module_1 = __webpack_require__(91);
	const polymer_module_1 = __webpack_require__(112);
	const html_citation_text_component_1 = __webpack_require__(134);
	const generic_table_component_1 = __webpack_require__(137);
	const references_table_component_1 = __webpack_require__(140);
	let OutputModule = class OutputModule {
	};
	OutputModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule,
	            pipes_module_1.PipesModule,
	            polymer_module_1.PolymerModule
	        ],
	        exports: [
	            html_citation_text_component_1.HtmlCitationTextComponent,
	            generic_table_component_1.GenericTableComponent,
	            references_table_component_1.ReferencesTableComponent,
	            polymer_module_1.PolymerModule
	        ],
	        declarations: [
	            html_citation_text_component_1.HtmlCitationTextComponent,
	            generic_table_component_1.GenericTableComponent,
	            references_table_component_1.ReferencesTableComponent
	        ],
	        providers: []
	    })
	], OutputModule);
	exports.OutputModule = OutputModule;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const platform_browser_1 = __webpack_require__(38);
	const paper_card_component_1 = __webpack_require__(83);
	const iron_icon_component_1 = __webpack_require__(113);
	const tooltip_component_1 = __webpack_require__(116);
	const paper_icon_button_component_1 = __webpack_require__(119);
	const paper_button_component_1 = __webpack_require__(122);
	const paper_dialog_component_1 = __webpack_require__(125);
	const paper_item_component_1 = __webpack_require__(128);
	const paper_checkbox_component_1 = __webpack_require__(131);
	let PolymerModule = class PolymerModule {
	};
	PolymerModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule
	        ],
	        exports: [
	            paper_card_component_1.PaperCardComponent,
	            iron_icon_component_1.IronIconComponent,
	            tooltip_component_1.TooltipComponent,
	            paper_icon_button_component_1.PaperIconButtonComponent,
	            paper_button_component_1.PaperButtonComponent,
	            paper_dialog_component_1.PaperDialogComponent,
	            paper_item_component_1.PaperItemComponent,
	            paper_checkbox_component_1.PaperCheckboxComponent
	        ],
	        declarations: [
	            paper_card_component_1.PaperCardComponent,
	            iron_icon_component_1.IronIconComponent,
	            tooltip_component_1.TooltipComponent,
	            paper_icon_button_component_1.PaperIconButtonComponent,
	            paper_button_component_1.PaperButtonComponent,
	            paper_dialog_component_1.PaperDialogComponent,
	            paper_item_component_1.PaperItemComponent,
	            paper_checkbox_component_1.PaperCheckboxComponent
	        ]
	    })
	], PolymerModule);
	exports.PolymerModule = PolymerModule;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	let IronIconComponent = class IronIconComponent {
	};
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], IronIconComponent.prototype, "icon", void 0);
	IronIconComponent = __decorate([
	    core_1.Component({
	        selector: 'iicon',
	        template: __webpack_require__(114),
	        styles: [__webpack_require__(115)],
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush
	    })
	], IronIconComponent);
	exports.IronIconComponent = IronIconComponent;


/***/ }),
/* 114 */
/***/ (function(module, exports) {

	module.exports = "<ng-content></ng-content>\n<svg viewBox=\"0 0 24 24\">\n    <defs>\n        <g id=\"keyboard-arrow-down\">\n            <path d=\"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z\"/>\n        </g>\n        <g id=\"keyboard-arrow-up\">\n            <path d=\"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z\"/>\n        </g>\n        <g id=\"settings\">\n            <path d=\"M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z\"/>\n        </g>\n        <g id=\"info\">\n            <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z\"/>\n        </g>\n        <g id=\"star\">\n            <path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/>\n        </g>\n        <g id=\"resize-small\" transform=\"translate(0.000000,24.000000) scale(0.0800000,-0.0800000)\"\n           fill=\"#000000\" stroke=\"none\">\n            <path d=\"M187 223 c-13 -13 -19 -14 -29 -5 -20 20 -25 14 -30 -38 -3 -28 -7 -53 -10 -56 -3 -2 -28 -7 -57 -11 -53 -6 -59 -11 -39 -31 9 -9 7 -16 -6 -31 -19 -21 -16 -51 5 -51 7 0 21 8 31 17 14 13 21 14 30 5 20 -20 25 -14 30 38 3 28 7 53 10 56 3 2 28 7 57 11 53 6 59 11 39 31 -9 9 -7 16 6 31 34 38 -1 69 -37 34z\"/>\n        </g>\n        <g id=\"resize-full\" transform=\"translate(0.000000,24.000000) scale(0.0800000,-0.0800000)\"\n           fill=\"#000000\" stroke=\"none\">\n            <path d=\"M158 233 c-20 -5 -23 -18 -7 -28 7 -5 3 -15 -10 -29 -21 -22 -21 -23 -3 -39 18 -16 20 -16 37 3 14 16 21 17 32 8 20 -16 33 6 33 55 0 35 -1 37 -32 36 -18 -1 -41 -3 -50 -6z\"/>\n            <path d=\"M65 100 c-14 -16 -21 -17 -32 -8 -20 16 -33 -6 -33 -56 l0 -39 45 6 c53 5 64 12 47 29 -9 9 -7 17 8 33 20 21 20 22 2 38 -18 16 -20 16 -37 -3z\"/>\n        </g>\n    </defs>\n    <use [attr.xlink:href]=\"'#'+icon\" />\n</svg>";

/***/ }),
/* 115 */
/***/ (function(module, exports) {

	module.exports = ":host {\n    display: -ms-inline-flexbox;\n    display: -webkit-inline-flex;\n    display: inline-flex;\n\n    -ms-flex-align: center;\n    -webkit-align-items: center;\n    align-items: center;\n    -ms-flex-pack: center;\n    -webkit-justify-content: center;\n    justify-content: center;\n\n    position: relative;\n\n    vertical-align: middle;\n\n    fill: currentcolor;\n    stroke: none;\n\n    width: 24px;\n    height: 24px;\n}\n\nsvg {\n    pointer-events: none;\n    display: block;\n    width: 100%;\n    height: 100%;\n}"

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const platform_browser_1 = __webpack_require__(38);
	let TooltipComponent = class TooltipComponent {
	    constructor(_sanitizer) {
	        this._sanitizer = _sanitizer;
	        this.tooltip = '';
	        this.tooltipHtml = '';
	        this.positionClass = 'n';
	    }
	    set position(p) {
	        this.positionClass = p;
	    }
	    ngOnInit() {
	        if (typeof this.tooltip === 'number') {
	            this.tooltip = this.tooltip.toString();
	        }
	        if (this.tooltip.indexOf('<') > -1 && this.tooltip.indexOf('>') > -1) {
	            const tokens = this.tooltip.split(/[ ,\n\r]/);
	            let tip = this.tooltip;
	            for (let token of tokens) {
	                token = token.substr(0, token.lastIndexOf('>') + 1);
	                if (/<https?:\/\/[^>]+>/.test(token)) {
	                    const href = token.substr(1, token.length - 2);
	                    tip = tip.replace(token, '<a class=\'cite-link\' href=\'' + href + '\'>' + href + '</a>');
	                }
	            }
	            this.tooltip = this._sanitizer.bypassSecurityTrustHtml(tip);
	        }
	    }
	};
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], TooltipComponent.prototype, "tooltip", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], TooltipComponent.prototype, "tooltipHtml", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String),
	    __metadata("design:paramtypes", [String])
	], TooltipComponent.prototype, "position", null);
	__decorate([
	    core_1.HostBinding('class'),
	    __metadata("design:type", Object)
	], TooltipComponent.prototype, "positionClass", void 0);
	TooltipComponent = __decorate([
	    core_1.Component({
	        selector: 'ptooltip',
	        template: __webpack_require__(117),
	        styles: [__webpack_require__(118)],
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush
	    }),
	    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
	], TooltipComponent);
	exports.TooltipComponent = TooltipComponent;


/***/ }),
/* 117 */
/***/ (function(module, exports) {

	module.exports = "<ng-content></ng-content>\n<div class=\"ptooltiptext\" *ngIf=\"tooltip&&tooltip!=''||tooltipHtml&&tooltipHtml!=''\">\n    <div [innerHtml]=\"tooltip\"></div>\n    <div [innerHtml]=\"_sanitizer.bypassSecurityTrustHtml(tooltipHtml)\"></div>\n</div>";

/***/ }),
/* 118 */
/***/ (function(module, exports) {

	module.exports = ":host {\n    position: relative;\n    display: inline-block;\n}\n\n:host .ptooltiptext {\n    visibility: hidden;\n    min-width: 60px;\n    background-color: black;\n    color: #fff;\n    padding: 10px;\n    border-radius: 6px;\n\n    position: absolute;\n    z-index: 4999;\n    transition-property: visibility;\n    transition-duration: 0.1s;\n    display: grid;\n    grid-template-columns: auto;\n    grid-column-gap: 10px;\n    grid-auto-flow: row;\n    width: 180px;\n}\n\n:host .ptooltiptext /deep/ a {\n    color: lightgray;\n}\n\n:host .ptooltiptext /deep/ ul, :host .ptooltiptext /deep/ ol {\n    text-align: left;\n    padding-left: 20px;\n}\n\n:host:hover .ptooltiptext {\n    visibility: visible;\n}\n\n:host .ptooltiptext::after {\n    content: \" \";\n    position: absolute;\n    border-width: 5px;\n    border-style: solid;\n}\n\n/* north */\n:host.n .ptooltiptext {\n    bottom: 115%;\n    left: -25%;\n    margin-left: 1em;\n    margin-top: 0;\n}\n\n:host.n .ptooltiptext::after {\n    top: 100%;\n    left: 1em;\n    margin-left: -5px;\n    border-color: black transparent transparent transparent;\n}\n\n/* south */\n:host.s .ptooltiptext {\n    top: 115%;\n    left: -25%;\n    margin-left: 1em;\n}\n\n:host.s .ptooltiptext::after {\n    bottom: 100%;\n    left: 1em;\n    margin-left: -5px;\n    border-color: transparent transparent black transparent;\n}\n\n/* east */\n:host.e .ptooltiptext {\n    top: 0;\n    left: 100%;\n    margin-left: 5px;\n}\n\n:host.e .ptooltiptext::after {\n    top: 1em;\n    right: 100%; /* To the left of the tooltip */\n    margin-top: -5px;\n    border-color: transparent black transparent transparent;\n}\n\n/* west */\n:host.w .ptooltiptext {\n    top: 0;\n    right: 100%;\n    margin-right: 5px;\n}\n\n:host.w .ptooltiptext::after {\n    top: 1em;\n    left: 100%;\n    margin-top: -5px;\n    border-color: transparent transparent transparent black;\n}   \n\n"

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	let PaperIconButtonComponent = class PaperIconButtonComponent {
	};
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], PaperIconButtonComponent.prototype, "icon", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], PaperIconButtonComponent.prototype, "title", void 0);
	PaperIconButtonComponent = __decorate([
	    core_1.Component({
	        selector: 'picon-button',
	        template: __webpack_require__(120),
	        styles: [__webpack_require__(121)],
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush
	    })
	], PaperIconButtonComponent);
	exports.PaperIconButtonComponent = PaperIconButtonComponent;


/***/ }),
/* 120 */
/***/ (function(module, exports) {

	module.exports = "<ptooltip [tooltip]=\"title\" [position]=\"'w'\">\n    <iicon [icon]=\"icon\"></iicon>\n</ptooltip>\n";

/***/ }),
/* 121 */
/***/ (function(module, exports) {

	module.exports = ":host {\n    display: inline-block;\n    position: relative;\n    padding: 3px;\n    outline: none;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    cursor: pointer;\n    z-index: 0;\n    line-height: 1;\n\n    width: 30px;\n    height: 30px;\n\n    box-sizing: border-box !important;\n}"

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	let PaperButtonComponent = class PaperButtonComponent {
	};
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], PaperButtonComponent.prototype, "text", void 0);
	PaperButtonComponent = __decorate([
	    core_1.Component({
	        selector: 'pbutton',
	        template: __webpack_require__(123),
	        styles: [__webpack_require__(124)],
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush
	    })
	], PaperButtonComponent);
	exports.PaperButtonComponent = PaperButtonComponent;


/***/ }),
/* 123 */
/***/ (function(module, exports) {

	module.exports = "{{text}}\n<ng-content></ng-content>";

/***/ }),
/* 124 */
/***/ (function(module, exports) {

	module.exports = ":host {\n    color: #3f51b5;\n    display: inline-block;\n    position: relative;\n    box-sizing: border-box;\n    min-width: 5.14em;\n    margin: 0 0.29em;\n    background: transparent;\n    text-align: center;\n    font: inherit;\n    text-transform: uppercase;\n    outline-width: 0;\n    border-radius: 3px;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -webkit-user-select: none;\n    cursor: pointer;\n    z-index: 0;\n    padding: 0.7em 0.57em;\n\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12),\n    0 3px 1px -2px rgba(0, 0, 0, 0.2);\n\n    transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n:host:active {\n    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12),\n    0 5px 5px -3px rgba(0, 0, 0, 0.4);\n}"

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	let PaperDialogComponent = class PaperDialogComponent {
	    constructor(el, renderer) {
	        this.el = el;
	        this.renderer = renderer;
	        this.opened = false;
	    }
	    onClick(target) {
	        if (target.localName === 'pdialog') {
	            this.close();
	        }
	    }
	    open() {
	        this.renderer.setElementStyle(this.el.nativeElement, 'display', 'grid');
	        document.body.classList.add('modal-open');
	        this.opened = true;
	    }
	    close() {
	        this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
	        document.body.classList.remove('modal-open');
	        this.opened = false;
	    }
	    onKeydown(event) {
	        if (this.opened && event.key.toLowerCase() === 'escape') {
	            this.close();
	        }
	    }
	};
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], PaperDialogComponent.prototype, "heading", void 0);
	__decorate([
	    core_1.HostListener('click', ['$event.target']),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", [Object]),
	    __metadata("design:returntype", void 0)
	], PaperDialogComponent.prototype, "onClick", null);
	__decorate([
	    core_1.HostListener('window:keydown', ['$event']),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", [Object]),
	    __metadata("design:returntype", void 0)
	], PaperDialogComponent.prototype, "onKeydown", null);
	PaperDialogComponent = __decorate([
	    core_1.Component({
	        selector: 'pdialog',
	        template: __webpack_require__(126),
	        styles: [__webpack_require__(127)]
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
	], PaperDialogComponent);
	exports.PaperDialogComponent = PaperDialogComponent;


/***/ }),
/* 126 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"dialog\" *ngIf=\"opened\">\n    <div class=\"paper-header\" *ngIf=\"heading\">{{heading}}</div>\n    <div class=\"paper-content\">\n        <ng-content></ng-content>\n    </div>\n    <div class=\"buttons\">\n        <pbutton (click)=\"close()\">Close</pbutton>\n    </div>\n</div>\n";

/***/ }),
/* 127 */
/***/ (function(module, exports) {

	module.exports = ":host {\n    position: fixed;\n    overflow-x: hidden;\n    overflow-y: auto;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    display: none;\n    z-index: 2000;\n    background: rgba(0, 0, 0, 0.5);\n    grid-template-columns: minmax(10px, 1fr) auto minmax(10px, 1fr);\n    grid-template-rows: 15px min-content minmax(10px, auto);\n    grid-template-areas: \". . .\" \". dialog .\" \". . .\";\n}\n\n.dialog {\n    grid-area: dialog;\n    display: grid;\n    padding: 16px;\n    border-radius: 5px;\n    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4);\n    grid-template-areas: \"header\" \"content\" \"buttons\";\n    background-color: #fff;\n}\n\n.buttons {\n    grid-area: buttons;\n    display: grid;\n    color: #3f51b5;\n    justify-content: flex-end;\n}\n\n.paper-header {\n    grid-area: header;\n    font-size: 24px;\n    font-weight: 400;\n    padding: 0 0 10px 0;\n}\n\n.paper-content {\n    grid-area: content;\n    display: grid;\n}"

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	let PaperItemComponent = class PaperItemComponent {
	};
	PaperItemComponent = __decorate([
	    core_1.Component({
	        selector: 'pitem',
	        template: __webpack_require__(129),
	        styles: [__webpack_require__(130)],
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush
	    })
	], PaperItemComponent);
	exports.PaperItemComponent = PaperItemComponent;


/***/ }),
/* 129 */
/***/ (function(module, exports) {

	module.exports = "<ng-content></ng-content>";

/***/ }),
/* 130 */
/***/ (function(module, exports) {

	module.exports = ":host {\n    display: block;\n    position: relative;\n    padding: 0px 16px;\n}\n\n:host(.item-selected) {\n    font-weight: bold;\n}"

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	let PaperCheckboxComponent = class PaperCheckboxComponent {
	    constructor(el, renderer) {
	        this.el = el;
	        this.renderer = renderer;
	        this.checkedChange = new core_1.EventEmitter();
	    }
	    ngOnChanges() {
	        if (this.checked) {
	            this.renderer.setElementStyle(this.el.nativeElement.children[0], 'background-color', '#3f51b5');
	            this.renderer.setElementStyle(this.el.nativeElement.children[0], 'border-color', '#3f51b5');
	        }
	        else {
	            this.renderer.setElementStyle(this.el.nativeElement.children[0], 'background-color', '#fff');
	            this.renderer.setElementStyle(this.el.nativeElement.children[0], 'border-color', '#000');
	        }
	        this.el.nativeElement.checked = this.checked;
	    }
	    toogleCheck() {
	    }
	    onChange(e) {
	        this.checked = !this.checked;
	        if (this.checked) {
	            this.renderer.setElementStyle(this.el.nativeElement.children[0], 'background-color', '#3f51b5');
	            this.renderer.setElementStyle(this.el.nativeElement.children[0], 'border-color', '#3f51b5');
	        }
	        else {
	            this.renderer.setElementStyle(this.el.nativeElement.children[0], 'background-color', '#fff');
	            this.renderer.setElementStyle(this.el.nativeElement.children[0], 'border-color', '#000');
	        }
	        this.el.nativeElement.checked = this.checked;
	        this.checkedChange.emit(this.checked);
	    }
	};
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], PaperCheckboxComponent.prototype, "label", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], PaperCheckboxComponent.prototype, "checked", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], PaperCheckboxComponent.prototype, "checkedChange", void 0);
	__decorate([
	    core_1.HostListener('click', ['$event']),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", [Object]),
	    __metadata("design:returntype", void 0)
	], PaperCheckboxComponent.prototype, "onChange", null);
	PaperCheckboxComponent = __decorate([
	    core_1.Component({
	        selector: 'pcheckbox',
	        template: __webpack_require__(132),
	        styles: [__webpack_require__(133)],
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
	], PaperCheckboxComponent);
	exports.PaperCheckboxComponent = PaperCheckboxComponent;


/***/ }),
/* 132 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"pcheckbox\">\n    <div class=\"pcheckmark\" *ngIf=\"checked\"></div>\n</div>\n<div class=\"plabel\">{{label}}</div>";

/***/ }),
/* 133 */
/***/ (function(module, exports) {

	module.exports = ":host {\n    display: inline-block;\n    white-space: nowrap;\n    cursor: pointer;\n\n    position: relative;\n}\n\n:host:focus {\n    outline: none;\n}\n\n.pcheckbox {\n    box-sizing: border-box;\n    height: 18px;\n    width: 18px;\n    border: solid 2px;\n    border-radius: 2px;\n    pointer-events: none;\n    -webkit-transition: background-color 140ms, border-color 140ms;\n    transition: background-color 140ms, border-color 140ms;\n    display: inline-block;\n    position: relative;\n    vertical-align: middle;\n}\n\n.pcheckmark {\n    position: absolute;\n    width: 36%;\n    height: 70%;\n    border-style: solid;\n    border-top: none;\n    border-left: none;\n    transform-origin: 97% 86%;\n    -webkit-transform-origin: 97% 86%;\n    transform: rotate(45deg);\n    border-right-width: calc(2 / 15 * 18px);\n    border-bottom-width: calc(2 / 15 * 18px);\n    border-color: white;\n}\n\n.plabel {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n    white-space: normal;\n    pointer-events: none;\n    padding-left: 8px;\n}"

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const comparison_citation_service_1 = __webpack_require__(76);
	const comparison_service_1 = __webpack_require__(70);
	let HtmlCitationTextComponent = class HtmlCitationTextComponent {
	    constructor(serv) {
	        this.serv = serv;
	        this.description = ' ';
	    }
	    makeMarkdown(text) {
	        if (text === null || text === undefined || text === '' || text === ' ') {
	            return ' ';
	        }
	        if (typeof text === 'object') {
	            text = text['tag'];
	        }
	        return this.serv.converter.makeHtml(text);
	    }
	};
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], HtmlCitationTextComponent.prototype, "description", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", comparison_citation_service_1.ComparisonCitationService)
	], HtmlCitationTextComponent.prototype, "citationServ", void 0);
	HtmlCitationTextComponent = __decorate([
	    core_1.Component({
	        selector: 'htmlcitationtext',
	        template: __webpack_require__(135),
	        styles: [__webpack_require__(136)],
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush
	    }),
	    __metadata("design:paramtypes", [comparison_service_1.ComparisonService])
	], HtmlCitationTextComponent);
	exports.HtmlCitationTextComponent = HtmlCitationTextComponent;


/***/ }),
/* 135 */
/***/ (function(module, exports) {

	module.exports = "<div [innerHtml]=\"makeMarkdown(description) | citation: [citationServ] | sanitizeHtml\" class=\"'description'\"\n     *ngIf=\"description\"></div>\n        ";

/***/ }),
/* 136 */
/***/ (function(module, exports) {

	module.exports = ":host {\n    display: block;\n}\n\n.description > :first-child {\n    margin-top: 0;\n}\n\n.description > :last-child {\n    margin-bottom: 0;\n}"

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const comparison_citation_service_1 = __webpack_require__(76);
	const comparison_config_service_1 = __webpack_require__(68);
	const platform_browser_1 = __webpack_require__(38);
	const http_1 = __webpack_require__(45);
	const comparison_component_1 = __webpack_require__(81);
	const select2_component_1 = __webpack_require__(105);
	const number_input_component_1 = __webpack_require__(108);
	let GenericTableComponent = class GenericTableComponent {
	    constructor(ar, confServ, sanitization, http, cd) {
	        this.ar = ar;
	        this.confServ = confServ;
	        this.sanitization = sanitization;
	        this.http = http;
	        this.cd = cd;
	        this.counter = 0;
	        this.display = false;
	        this.settings = false;
	        this.columns = [];
	        this.data = [];
	        this.query = {};
	        this.displayTemplate = false;
	        this.settingsCallback = new core_1.EventEmitter();
	        this.showDetails = new core_1.EventEmitter();
	        this.changeNum = 0;
	        this.order = [];
	        this.orderChange = new core_1.EventEmitter();
	        this.orderOption = [];
	        this.orderOptionChange = new core_1.EventEmitter();
	        this.ctrlCounter = 0;
	    }
	    orderClick(e, value) {
	        const pos = this.order.findIndex(name => name === value);
	        if (e.ctrlKey) {
	            this.ctrlCounter = this.order[this.ctrlCounter] === value ? this.ctrlCounter : this.ctrlCounter + 1;
	        }
	        else {
	            this.ctrlCounter = 0;
	        }
	        if (typeof pos !== 'undefined' && pos >= 0) {
	            this.order[this.ctrlCounter] = value;
	            this.orderOption[this.ctrlCounter] = this.orderOption[pos] === 1 ? -1 : 1;
	            this.orderOption[pos] = pos !== this.ctrlCounter ? 0 : this.orderOption[this.ctrlCounter];
	        }
	        else {
	            this.order[this.ctrlCounter] = value;
	            this.orderOption[this.ctrlCounter] = 1;
	        }
	        if (this.ctrlCounter === 0) {
	            for (let i = 1; i < this.orderOption.length; i++) {
	                this.orderOption[i] = 0;
	            }
	        }
	        this.orderChange.emit(this.order);
	        this.orderOptionChange.emit(this.orderOption);
	        this.table.trigger('reflow');
	    }
	    displayOrder(value, option) {
	        if (this.order.length === 0 && this.orderOption.length === 0) {
	            this.order[this.ctrlCounter] = 'tag';
	            this.orderOption[this.ctrlCounter] = 1;
	        }
	        return this.order.findIndex(val => val === value) >= 0 && this.orderOption[this.order.findIndex(val => val === value)] === option;
	    }
	    ngAfterViewChecked() {
	        this.table = $('table.table.table-hover');
	        this.table.floatThead();
	        anchors.options = {
	            placement: 'right'
	        };
	        anchors.add('.anchored');
	    }
	    ngOnChanges() {
	        this.update();
	    }
	    update() {
	        if (this.table != null) {
	            this.table.trigger('reflow');
	        }
	    }
	    shouldBeShown(data) {
	        if (this.confServ.comparison && this.confServ.comparison.displayall) {
	            return true;
	        }
	        let val = true;
	        for (const column of this.confServ.tableDataSet.getTableDataArray()) {
	            if (column.display && data.properties[column.tag] != null && data.properties[column.tag].plain !== '') {
	                return true;
	            }
	            if (column.display && data.properties[column.tag] != null) {
	                val = false;
	            }
	        }
	        return val;
	    }
	    getColor(column, label) {
	        return this.sanitization.bypassSecurityTrustStyle(column.type.colors.getColor(label));
	    }
	    getForegroundColor(column, label) {
	        const color = column.type.foregroundColors.getColor(label);
	        if (color === '') {
	            return this.sanitization.bypassSecurityTrustStyle('#0d0d0d');
	        }
	        else {
	            return this.sanitization.bypassSecurityTrustStyle(color);
	        }
	    }
	    searchFor(column, value) {
	        let c = null;
	        for (const crit of this.confServ.criteriaSet.getCriteriaArray()) {
	            if (crit.name === column || crit.tag === column) {
	                c = crit;
	                break;
	            }
	        }
	        if (c === null) {
	            return;
	        }
	        if (c.values.indexOf(value) !== -1) {
	            return;
	        }
	        let input = null;
	        if (c.range_search) {
	            for (const ni of number_input_component_1.NumberInputComponent.components) {
	                if (ni.tag === column || ni.name === column) {
	                    input = ni;
	                    break;
	                }
	            }
	            if (input === null) {
	                return;
	            }
	            value = String(value);
	            this.cd.markForCheck();
	        }
	        else {
	            for (const s2 of select2_component_1.Select2Component.components) {
	                if (s2.tag === column || s2.name === column) {
	                    input = s2;
	                    break;
	                }
	            }
	            if (input === null) {
	                return;
	            }
	            value = String(value);
	            this.comparisonComponent.criteriaChanged([value], c);
	            this.comparisonComponent.change();
	        }
	        input.addToGui(value);
	    }
	};
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], GenericTableComponent.prototype, "display", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], GenericTableComponent.prototype, "settings", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Array)
	], GenericTableComponent.prototype, "columns", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Array)
	], GenericTableComponent.prototype, "data", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], GenericTableComponent.prototype, "query", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], GenericTableComponent.prototype, "displayTemplate", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", comparison_citation_service_1.ComparisonCitationService)
	], GenericTableComponent.prototype, "citationServ", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], GenericTableComponent.prototype, "settingsCallback", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], GenericTableComponent.prototype, "showDetails", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], GenericTableComponent.prototype, "changeNum", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Array)
	], GenericTableComponent.prototype, "order", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], GenericTableComponent.prototype, "orderChange", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Array)
	], GenericTableComponent.prototype, "orderOption", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], GenericTableComponent.prototype, "orderOptionChange", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", comparison_component_1.ComparisonComponent)
	], GenericTableComponent.prototype, "comparisonComponent", void 0);
	GenericTableComponent = __decorate([
	    core_1.Component({
	        selector: 'generictable',
	        template: __webpack_require__(138),
	        styles: [__webpack_require__(139)],
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush
	    }),
	    __metadata("design:paramtypes", [core_1.ApplicationRef,
	        comparison_config_service_1.ComparisonConfigService,
	        platform_browser_1.DomSanitizer,
	        http_1.Http,
	        core_1.ChangeDetectorRef])
	], GenericTableComponent);
	exports.GenericTableComponent = GenericTableComponent;


/***/ }),
/* 138 */
/***/ (function(module, exports) {

	module.exports = "<table class=\"table table-hover\" *ngIf=\"display\">\n    <thead style=\"background-color: white;\">\n    <tr>\n        <ng-template ngFor let-column [ngForOf]=\"columns | tablefilter\">\n            <th>\n                <button (click)=\"orderClick($event, column.tag)\">{{column.name}}\n                    <iicon icon=\"keyboard-arrow-up\" *ngIf=\"displayOrder(column.tag, -1)\"></iicon>\n                    <iicon icon=\"keyboard-arrow-down\" *ngIf=\"displayOrder(column.tag, 1)\"></iicon>\n                </button>\n            </th>\n        </ng-template>\n        <th style=\"width: 3%\" name=\"details\" *ngIf=\"settings\">\n            <picon-button icon=\"settings\" title=\"Settings\" (click)=\"settingsCallback.emit()\"></picon-button>\n        </th>\n    </tr>\n    </thead>\n    <tbody>\n    <ng-template ngFor let-dat [ngForOf]=\"data | orderBy: [order,orderOption] | datafilter: [query, displayTemplate]\">\n        <tr *ngIf=\"shouldBeShown(dat)\">\n            <ng-template ngFor let-column [ngForOf]=\"columns | tablefilter\">\n                <td *ngIf=\"column.type?.tag==='url'\"><a class=\"anchored\" href=\"{{dat.getProperty(column.url).text}}\" target=\"_blank\">{{dat.getProperty(column.tag).text}}</a>\n                </td>\n                <td *ngIf=\"column.type?.tag==='text'\">\n                    <div [innerHtml]=\"dat.getProperty(column.tag).text|citation: [citationServ] | sanitizeHtml\"></div>\n                </td>\n                <td *ngIf=\"column.type?.tag==='label' && !column.repo\">\n                    <ng-template ngFor let-sitem [ngForOf]=\"dat.getPropertyListItems(column.tag)\"\n                              *ngIf=\"column.type?.labelCls\">\n                        <ptooltip [tooltip]=\"column.values[sitem.content].tag\"\n                                  [tooltipHtml]=\"sitem.htmlChilds | citation: [citationServ]\" [position]=\"'n'\">\n                            <div *ngIf=\"column.type.colors.isEmpty()\" class=\"{{column.type.getCls(sitem.content)}} {{column.type.labelCls.getCls(sitem.content)}} mylabel\" (click)=\"searchFor(column.tag, sitem.content)\">\n                                {{sitem.content}}\n                            </div>\n                            <div *ngIf=\"!column.type.colors.isEmpty()\" [style.color]=\"getForegroundColor(column, sitem.content)\" [style.background-color]=\"getColor(column, sitem.content)\" class=\"{{column.type.getCls(sitem.content)}} {{column.type.labelCls.getCls(sitem.content)}} mylabel\" (click)=\"searchFor(column.tag, sitem.content)\">\n                                {{sitem.content}}\n                            </div>\n                        </ptooltip>\n                    </ng-template>\n                    <ptooltip *ngIf=\"dat.getPropertyListItems(column.tag).length === 0\" [tooltipHtml]=\"'There was no value for this field. Please submit one via pull request.'\">\n                        <div class=\"label mylabel unknown\">unknown</div>\n                    </ptooltip>\n                </td>\n                <td *ngIf=\"column.type?.tag==='label' && column.repo\">\n                    <ng-template ngFor let-sitem [ngForOf]=\"dat.getRepoLabels(column, cd)?.list\"\n                              *ngIf=\"column.type?.labelCls\">\n                        <ptooltip [tooltipHtml]=\"sitem.htmlChilds\" [position]=\"'n'\">\n                            <div *ngIf=\"column.type.colors.isEmpty()\" class=\"{{column.type.getCls(sitem.content)}} {{column.type.labelCls.getCls(sitem.content)}} mylabel\" (click)=\"searchFor(column.tag, sitem.content)\">\n                                {{sitem.content}}\n                            </div> \n                            <div *ngIf=\"!column.type.colors.isEmpty()\" [style.background-color]=\"getColor(column, sitem.content)\" class=\"{{column.type.getCls(sitem.content)}} {{column.type.labelCls.getCls(sitem.content)}} mylabel\" (click)=\"searchFor(column.tag, sitem.content)\">\n                                {{sitem.content}}\n                            </div>\n                        </ptooltip>\n                    </ng-template>\n                    <ptooltip *ngIf=\"dat.getRepoLabels(column, cd) === undefined\" [tooltipHtml]=\"'There was no value for this field. Please submit one via pull request.'\">\n                        <div class=\"label mylabel unknown\">unknown</div>\n                    </ptooltip>\n                </td>\n                <td *ngIf=\"column.type?.tag=='rating'\">\n                    <iicon icon=\"star\" *ngIf=\"dat.getRating()!=0\">{{dat.getRating()}}</iicon>\n                </td>\n            </ng-template>\n            <td>\n                <picon-button icon=\"info\" title=\"Details\" (click)=\"showDetails.emit(dat)\"></picon-button>\n            </td>\n        </tr>\n    </ng-template>\n    </tbody>\n</table>\n        \n";

/***/ }),
/* 139 */
/***/ (function(module, exports) {

	module.exports = ":host {\n    display: block;\n}\n\n.grid-table {\n    display: grid;\n    grid-template-columns: auto;\n    grid-column-gap: 10px;\n    grid-row-gap: 10px;\n    grid-auto-flow: column;\n\n}\n\n.mylabel {\n    margin: 2px;\n    display: inline-block !important;\n    cursor: pointer;\n    font-size: 14px !important;\n    white-space: inherit;\n}\n\n.label-unknown {\n    color: black;\n    border: solid black 1px;\n}\n\nth > button {\n    border: none;\n    padding: 0;\n    outline: none;\n    background-color: white;\n    position: sticky;\n    position: -webkit-sticky;\n    top: 0; /* required */\n\n}\n\ntable tr {\n    white-space: normal;\n}\n\ntable {\n    width: auto;\n}\n\n.anchored::before {\n    content: '';\n    display: block;\n    height:48px;\n    margin:-48px 0 0;\n}\n\n.unknown {\n    background-color: lightgray;\n    color: white;\n}"

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const core_1 = __webpack_require__(3);
	const comparison_citation_service_1 = __webpack_require__(76);
	let ReferencesTableComponent = class ReferencesTableComponent {
	    constructor() {
	        this.changeNum = 0;
	    }
	};
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", comparison_citation_service_1.ComparisonCitationService)
	], ReferencesTableComponent.prototype, "citationServ", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], ReferencesTableComponent.prototype, "changeNum", void 0);
	ReferencesTableComponent = __decorate([
	    core_1.Component({
	        selector: 'referencestable',
	        template: __webpack_require__(141),
	        styles: [__webpack_require__(142)],
	        changeDetection: core_1.ChangeDetectionStrategy.OnPush
	    })
	], ReferencesTableComponent);
	exports.ReferencesTableComponent = ReferencesTableComponent;


/***/ }),
/* 141 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"reference-container\">\n    <ng-template ngFor let-entry [ngForOf]=\"this.citationServ.sortedReferences()\">\n        <div>{{'[' + entry.index + ']'}}:</div>\n        <div [id]=\"entry.key\" [innerHtml]=\"entry.html|sanitizeHtml\"></div>\n    </ng-template>\n</div>\n";

/***/ }),
/* 142 */
/***/ (function(module, exports) {

	module.exports = ".reference-container {\n    display: grid;\n    grid-template-columns: min-content auto;\n    grid-column-gap: 10px;\n    grid-auto-flow: row;\n}"

/***/ })
]);
//# sourceMappingURL=app.fd15a8abb7915847d4dd.js.map