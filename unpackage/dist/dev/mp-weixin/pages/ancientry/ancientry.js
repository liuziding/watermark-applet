(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/ancientry/ancientry"],{

/***/ 33:
/*!*******************************************************************************************************!*\
  !*** /Users/fengye/上海简辰/github/小程序/watermark-applet/main.js?{"page":"pages%2Fancientry%2Fancientry"} ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _ancientry = _interopRequireDefault(__webpack_require__(/*! ./pages/ancientry/ancientry.vue */ 34));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_ancientry.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 34:
/*!************************************************************************************!*\
  !*** /Users/fengye/上海简辰/github/小程序/watermark-applet/pages/ancientry/ancientry.vue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ancientry_vue_vue_type_template_id_45a81986_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ancientry.vue?vue&type=template&id=45a81986&scoped=true& */ 35);
/* harmony import */ var _ancientry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ancientry.vue?vue&type=script&lang=js& */ 37);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ancientry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ancientry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ancientry_vue_vue_type_style_index_0_id_45a81986_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ancientry.vue?vue&type=style&index=0&id=45a81986&lang=scss&scoped=true& */ 43);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ancientry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ancientry_vue_vue_type_template_id_45a81986_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ancientry_vue_vue_type_template_id_45a81986_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "45a81986",
  null,
  false,
  _ancientry_vue_vue_type_template_id_45a81986_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/ancientry/ancientry.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 35:
/*!*******************************************************************************************************************************!*\
  !*** /Users/fengye/上海简辰/github/小程序/watermark-applet/pages/ancientry/ancientry.vue?vue&type=template&id=45a81986&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ancientry_vue_vue_type_template_id_45a81986_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ancientry.vue?vue&type=template&id=45a81986&scoped=true& */ 36);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ancientry_vue_vue_type_template_id_45a81986_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ancientry_vue_vue_type_template_id_45a81986_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ancientry_vue_vue_type_template_id_45a81986_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ancientry_vue_vue_type_template_id_45a81986_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 36:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/fengye/上海简辰/github/小程序/watermark-applet/pages/ancientry/ancientry.vue?vue&type=template&id=45a81986&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 37:
/*!*************************************************************************************************************!*\
  !*** /Users/fengye/上海简辰/github/小程序/watermark-applet/pages/ancientry/ancientry.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ancientry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ancientry.vue?vue&type=script&lang=js& */ 38);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ancientry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ancientry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ancientry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ancientry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ancientry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 38:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/fengye/上海简辰/github/小程序/watermark-applet/pages/ancientry/ancientry.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 39));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 41));
var _base = _interopRequireDefault(__webpack_require__(/*! @/utils/base64.js */ 42));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var timeout = null;
var _default = {
  data: function data() {
    return {
      x: 10,
      // 矩形框x坐标
      y: 10,
      // 矩形框y坐标
      imgWidth: 0,
      // 原始图片宽度
      imgHeight: 0,
      // 原始图片高度
      canvasLeft: 0,
      // 画布距离左边大小
      canvasTop: 0,
      // 画布距离顶部大小
      canvasWidth: 0,
      // 画布宽度
      canvasHeight: 0,
      // 画布高度
      originalWidth: 0,
      // 原始盒子宽度
      originalHeight: 0,
      // 原始盒子高度
      originalImage: "",
      // 原始图片地址
      generatedImage: "",
      // 去水印后的图片
      qrcode: "",
      imgScale: 1
    };
  },
  mounted: function mounted() {
    // this.setPosition();
  },
  onLoad: function onLoad() {
    this.handleGetAccessToken();
  },
  onReady: function onReady() {
    // 获取上方边框的宽高
    var that = this;
    uni.createSelectorQuery().select(".ancientry_original").fields({
      node: true,
      size: true
    }).exec( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(res) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that.originalWidth = res[0].width;
                that.originalHeight = res[0].height;
              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  },
  methods: {
    // 图片加载的时候触发
    onImageLoad: function onImageLoad() {
      var that = this;
      uni.createSelectorQuery().select(".ancientry_original_image").fields({
        node: true,
        size: true
      }).exec( /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(res) {
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    },
    // 上传图片
    uploadImage: function uploadImage() {
      var that = this;
      uni.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'],
        // 从相册选择
        success: function success(res) {
          that.originalImage = res.tempFilePaths[0];
          that.generatedImage = "";
          that.qrcode = "";
          setTimeout(function () {
            // 获取图片宽高
            uni.getImageInfo({
              src: res.tempFilePaths[0],
              success: function success(info) {
                var ratio_w = that.originalWidth / info.width;
                var ratio_h = that.originalHeight / info.height;
                if (ratio_w > ratio_h) {
                  var distance = (that.originalWidth - that.originalHeight * info.width / info.height) / 2;
                  that.canvasTop = 0;
                  that.imgScale = ratio_h;
                  that.canvasLeft = distance;
                  that.canvasHeight = that.originalHeight;
                  that.canvasWidth = that.originalHeight / info.height * info.width;
                } else {
                  var _distance = (that.originalHeight - that.originalWidth / info.width * info.height) / 2;
                  that.canvasLeft = 0;
                  that.imgScale = ratio_w;
                  that.canvasTop = _distance;
                  that.canvasWidth = that.originalWidth;
                  that.canvasHeight = that.originalWidth / info.width * info.height;
                }
              },
              fail: function fail(e) {
                console.log(e);
              }
            });
          }, 100);
        }
      });
    },
    // 获取授权判断是否授权相册
    getSaveImg: function getSaveImg() {
      debugger;
      var that = this;
      if (that.generatedImage) {
        uni.getSetting({
          success: function success(res) {
            if (!res.authSetting["scope.writePhotosAlbum"]) {
              uni.showModal({
                title: '警告',
                content: '检测到您没您未授权相册权限,点击确定获取授权。',
                success: function success(res) {
                  if (res.confirm) {
                    uni.authorize({
                      scope: 'scope.writePhotosAlbum',
                      success: function success() {
                        // 用户已经同意
                        that.saveImgToAlbum();
                      },
                      fail: function fail(err) {
                        console.log('用户拒绝授权相册');
                      }
                    });
                  }
                }
              });
            } else {
              that.saveImgToAlbum();
            }
          },
          fail: function fail() {
            console.log('点击了拒绝');
          }
        });
      } else {
        uni.showToast({
          title: '您还没有上传图片！',
          icon: 'none'
        });
      }
    },
    // 保存二维码图片到相册
    saveImgToAlbum: function saveImgToAlbum() {
      var fileManager = uni.getFileSystemManager();
      fileManager.writeFile({
        filePath: wx.env.USER_DATA_PATH + '/img.jpg',
        // 指定图片的临时路径
        data: this.generatedImage,
        // 要写入的文本或二进制数据
        encoding: 'base64',
        // 指定写入文件的字符编码
        success: function success(res) {
          console.log('写入文件成功', res);
          console.log(wx.env.USER_DATA_PATH + '/img.jpg');
          uni.saveImageToPhotosAlbum({
            // 保存图片到相册
            filePath: wx.env.USER_DATA_PATH + '/img.jpg',
            success: function success(res) {
              console.log('保存成功', res);
              uni.showToast({
                title: '保存成功'
              });
            },
            fail: function fail(err) {
              console.log('保存失败', err);
            }
          });
        },
        file: function file(err) {
          console.log('写入文件失败', err);
        }
      });
    },
    //把base64转换成图片
    getBase64ImageUrl: function getBase64ImageUrl(base64Url) {
      // 获取到base64Data
      var base64Data = base64Url;
      // 通过微信小程序自带方法将base64转为二进制去除特殊符号，再转回base64
      base64Data = uni.arrayBufferToBase64(uni.base64ToArrayBuffer(base64Data));
      // 拼接请求头，data格式可以为image/png或者image/jpeg等，看需求
      // const base64ImgUrl = "data:image/png;base64," + base64Data;
      this.generatedImage = base64Data;

      // console.log('==========');
      // console.log(base64Url);
      // let that = this;
      // that.qrcode = base64Url;
      // //拿到后端给的base64字符串
      // this.generatedImage = base64Url;// "data:image/jpg;base64," + base64Url;
      // // var shareQrImg = `data:image/jpg;base64,` + base64Url;
      // // base64src(shareQrImg, resCurrent => {
      // // 	console.log('1111111');
      // // 	console.log(resCurrent);
      // // 		that.generatedImage = resCurrent;
      // // });
    },
    // 移动矩形框触发的方法
    movableChange: function movableChange(e) {
      this.x = e.detail.x; // 矩形框x坐标
      this.y = e.detail.y; // 矩形框y坐标
    },
    // 矩形框缩放触发的方法
    movableScale: function movableScale(e) {
      this.x = e.detail.x; // 矩形框x坐标
      this.y = e.detail.y; // 矩形框y坐标
    },
    // 去水印
    removeWaterMark: function removeWaterMark() {
      var that = this;
      if (that.originalImage) {
        var FSM = wx.getFileSystemManager();
        FSM.readFile({
          filePath: that.originalImage,
          encoding: "base64",
          success: function success(res) {
            that.handleRemoveWaterMark(res.data);
          },
          fail: function fail(res) {
            console.log("转换base失败");
          }
        });
      } else {
        uni.showToast({
          title: '您还没有上传图片！',
          icon: 'none'
        });
      }
    },
    // ---------------------调用网络接口-----------------------
    // 生成去水印的图片
    handleRemoveWaterMark: function handleRemoveWaterMark(imageBase64) {
      var that = this;
      var access_token = uni.getStorageSync("access_token");
      debugger;
      console.log(this.$refs.movableArea);
      // let info = uni.createSelectorQuery().in("#movableArea").select(".movableView");
      uni.createSelectorQuery().in(this.$parent).select(".movableView").boundingClientRect(function (el) {
        console.log(el);
        debugger;
        // info.boundingClientRect(function(el) {
        var width = el.width;
        var height = el.height;
        uni.showLoading({
          title: '加载中'
        });
        wx.request({
          url: "https://aip.baidubce.com/rest/2.0/image-process/v1/inpainting?access_token=" + access_token,
          data: JSON.stringify({
            // rectangle: [{width: 460, top: 744, height: 58, left: 0}],
            rectangle: [{
              width: Math.floor(width / that.imgScale),
              top: Math.floor(that.y / that.imgScale),
              height: Math.floor(height / that.imgScale),
              left: Math.floor(that.x / that.imgScale)
            }],
            image: imageBase64
          }),
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: 'POST',
          success: function success(res) {
            uni.showToast({
              title: '成功',
              icon: 'success'
            });
            that.getBase64ImageUrl(res.data.image);
          },
          fail: function fail(e) {
            uni.hideLoading();
            uni.showToast({
              title: '请求失败',
              icon: 'none'
            });
          }
        });
      }).exec();
      // uni.createSelectorQuery()
      // 		.select(".movableView")
      // 		.fields({ node: true, size: true })
      // 		.exec(async (res) => {
      // 			const width = res[0].width;
      // 			const height = res[0].height;
      // 			uni.showLoading({ title: '加载中' });
      // 			wx.request({
      // 				url: "https://aip.baidubce.com/rest/2.0/image-process/v1/inpainting?access_token="+access_token,
      // 				data: JSON.stringify({
      // 					// rectangle: [{width: 460, top: 744, height: 58, left: 0}],
      // 					rectangle: [{width: Math.floor(width / that.imgScale), top: Math.floor(that.y / that.imgScale), height: Math.floor(height / that.imgScale), left: Math.floor(that.x / that.imgScale)}],

      // 					image: imageBase64
      // 				}),
      // 				header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      // 				method: 'POST',
      // 				success(res) {
      // 					uni.showToast({
      // 						title: '成功',
      // 						icon: 'success',
      // 					});
      // 					that.getBase64ImageUrl(res.data.image);
      // 				},
      // 				fail(e) {
      // 					uni.hideLoading();
      // 					uni.showToast({
      // 						title: '请求失败',
      // 						icon: 'none'
      // 					});
      // 				}
      // 			})
      // 		});
    },
    // 调用百度图像增强与特效接口，获取access_token
    handleGetAccessToken: function handleGetAccessToken() {
      uni.request({
        url: "https://aip.baidubce.com/oauth/2.0/token",
        data: {
          grant_type: "client_credentials",
          client_id: "c5V1SCzAG45uItEaLmItKT3L",
          client_secret: "MMYwGmRaRG4P6j7wkz0j89y2aTKjtec0"
        },
        success: function success(res) {
          console.log(res);
          console.log(res.data.access_token);
          var access_token = res.data.access_token;
          if (access_token) {
            uni.setStorageSync("access_token", access_token);
            // uni.setStorage({
            // 	key: "access_token",
            // 	data: access_token
            // });
          } else {
            uni.setStorageSync("access_token", null);
            // uni.setStorage({
            // 	key: "access_token",
            // 	data: null
            // });
          }
        },
        fail: function fail() {
          console.log("获取access_token失败！");
        }
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 43:
/*!**********************************************************************************************************************************************!*\
  !*** /Users/fengye/上海简辰/github/小程序/watermark-applet/pages/ancientry/ancientry.vue?vue&type=style&index=0&id=45a81986&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ancientry_vue_vue_type_style_index_0_id_45a81986_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ancientry.vue?vue&type=style&index=0&id=45a81986&lang=scss&scoped=true& */ 44);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ancientry_vue_vue_type_style_index_0_id_45a81986_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ancientry_vue_vue_type_style_index_0_id_45a81986_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ancientry_vue_vue_type_style_index_0_id_45a81986_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ancientry_vue_vue_type_style_index_0_id_45a81986_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ancientry_vue_vue_type_style_index_0_id_45a81986_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 44:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/fengye/上海简辰/github/小程序/watermark-applet/pages/ancientry/ancientry.vue?vue&type=style&index=0&id=45a81986&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[33,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/ancientry/ancientry.js.map