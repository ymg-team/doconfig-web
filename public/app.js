webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
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
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(9);

var _vue2 = _interopRequireDefault(_vue);

var _partners = __webpack_require__(107);

var _partners2 = _interopRequireDefault(_partners);

var _footer = __webpack_require__(49);

var _footer2 = _interopRequireDefault(_footer);

var _dataConf = __webpack_require__(110);

var _dataConf2 = _interopRequireDefault(_dataConf);

var _dataPartners = __webpack_require__(111);

var _dataPartners2 = _interopRequireDefault(_dataPartners);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// register component
_vue2.default.component('partners', _partners2.default); //
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

_vue2.default.component('footer-nav', _footer2.default);

exports.default = {
    name: 'home',
    data: function data() {
        return {
            txt_search: '',
            recommendation: [],
            conf_available: _dataConf2.default.ready,
            conf_wip: _dataConf2.default.wip,
            data_partners: _dataPartners2.default
        };
    },

    methods: {
        // handle input type change
        handleChangeTxt: function handleChangeTxt(e) {
            console.log('press code : ', e.keyCode);
            if (this.txt_search != '') {
                // press bottom arrow : 40

                // press up arrow : 38
                this.recommendation = [{ name: 'dockerfile', link: '/conf/dockerfile' }, { name: 'gitlab ci', link: '/conf/gitlab-ci' }];
            } else {
                this.recommendation = [];
            }
        }
    }
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = {
    name: 'partners-card',
    props: ['title', 'subtitle', 'partners', 'className', 'is_newtab']
};

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_footer_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_footer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_footer_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_footer_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_footer_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5564a849_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_footer_vue__ = __webpack_require__(109);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_footer_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5564a849_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_footer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/client/components/footer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5564a849", Component.options)
  } else {
    hotAPI.reload("data-v-5564a849", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = {
  name: 'footer-nav'
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(9);

var _vue2 = _interopRequireDefault(_vue);

var _cardBlog = __webpack_require__(52);

var _cardBlog2 = _interopRequireDefault(_cardBlog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

_vue2.default.component('card', _cardBlog2.default);

exports.default = {
  name: 'blog'
};

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_blog_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_blog_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_blog_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_blog_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_blog_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_655b4601_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_card_blog_vue__ = __webpack_require__(114);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_blog_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_655b4601_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_card_blog_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/client/components/card-blog.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-655b4601", Component.options)
  } else {
    hotAPI.reload("data-v-655b4601", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = {
    name: 'card-blog',
    //ref : https://vuejs.org/v2/guide/components.html#Prop-Validation
    props: {
        data: Object,
        size: {
            type: String,
            default: 'small'
        }
    }
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(9);

var _vue2 = _interopRequireDefault(_vue);

var _stringManager = __webpack_require__(31);

var _cardBlog = __webpack_require__(52);

var _cardBlog2 = _interopRequireDefault(_cardBlog);

var _firebase = __webpack_require__(122);

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

_vue2.default.component('card', _cardBlog2.default);

exports.default = {
    name: 'blog-detail',
    props: ['params_title', 'params_id'],
    data: function data() {
        return {
            title: (0, _stringManager.toCamelCase)(this.params_title)
        };
    },

    watch: {
        params_title: function params_title(new_val) {
            this.title = (0, _stringManager.toCamelCase)(new_val);
        }
    },
    created: function created() {}
};

/***/ }),
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(9);

var _vue2 = _interopRequireDefault(_vue);

var _subheader = __webpack_require__(204);

var _subheader2 = _interopRequireDefault(_subheader);

var _formInputText = __webpack_require__(206);

var _formInputText2 = _interopRequireDefault(_formInputText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// register components
_vue2.default.component('subheader', _subheader2.default); //
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

_vue2.default.component('input-text', _formInputText2.default);

exports.default = {
    name: 'conf_dockerfile',
    data: function data() {
        return {
            is_loading: false,
            rec_txt_image: [],
            childs_txt_run: [],
            childs_txt_copy: [],
            txt_image: '',
            txt_copy: '',
            txt_run: '',
            txt_workdir: ''
        };
    },


    methods: {
        // handle change input text
        handleChangeText: function handleChangeText(e) {
            var _e$target = e.target,
                name = _e$target.name,
                value = _e$target.value;

            // get recomendations

            if (['txt_image'].includes(name)) {
                if (value != '') this['rec_' + name] = ['Nodejs:slim', 'Ubuntu 19.04', 'Google weblight'];else this['rec_' + name] = [];
            }

            // push childs 
            if (['txt_run', 'txt_copy'].includes(name) && e.keyCode == 13 && value != '') {
                // reset input value
                this[name] = '';
                // push data
                this['childs_' + name].push(value);

                return true;
            }

            // mutated input value by name      
            this[name] = value;
        },

        // remove childs by key and input name
        handleRemoveChild: function handleRemoveChild(name, key) {
            console.log(this['childs_' + name][key]);
            // splice array by key
            this['childs_' + name].splice(key, 1);
        },

        //   on click recommendations
        handleRecommendations: function handleRecommendations(name, val) {
            // reset recommendations
            this['rec_' + name] = [];
            // set input value by name and selected recommentaion
            this[name] = val;
        },

        // on input text change
        submit: function submit(e) {
            this.is_loading = true;
        }
    },

    created: function created() {}
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = {
  data: function data() {
    return {};
  },

  // ref: https://vuejs.org/v2/guide/components.html#Passing-Data-with-Props
  props: ['title', 'subtitle', 'name', 'link'],
  name: 'subheader'
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

// PropsValidation
var props = {
  label: {
    type: String
  },
  text: {
    type: String
  },
  placeholder: {
    type: String
  },
  recommendations: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  childs: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  handleChange: {
    type: Function
  },
  handleRecommendations: {
    type: Function
  },
  handleRemoveChild: {
    type: Function
  },
  name: {
    type: String
  },
  value: {
    type: String
  }
};

exports.default = {
  name: 'form-input-text',
  // props validation
  props: props,
  // methods declaration
  methods: {},
  created: function created() {}
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//

exports.default = {
  name: 'error',
  props: ['code', 'message']
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _staticPost = __webpack_require__(212);

var _staticPost2 = _interopRequireDefault(_staticPost);

var _stringManager = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
  name: 'static-page',
  props: ['key_content'],
  data: function data() {
    return {
      loading: true,
      title: null,
      content: null
    };
  },


  // watch props changes
  watch: {
    key_content: function key_content(new_val, old_val) {
      this.loading = true;
      this.fetchData(new_val);
    }
  },

  // component is created
  created: function created() {
    this.fetchData(this.key_content);
  },


  methods: {
    // get data from local json
    fetchData: function fetchData(key_content) {
      var _this = this;

      _staticPost2.default.find(function (n, key) {
        if (key == key_content) {
          _this.loading = false;
          _this.content = n.content;
          _this.title = (0, _stringManager.toCamelCase)(n.title);
        }
      });
    }
  }
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(9);

var _vue2 = _interopRequireDefault(_vue);

var _navbar = __webpack_require__(215);

var _navbar2 = _interopRequireDefault(_navbar);

var _footer = __webpack_require__(49);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.component('navbar', _navbar2.default); //
//
//
//
//
//

_vue2.default.component('footer-nav', _footer2.default);

exports.default = {
  name: 'layout-default'
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = {
  name: 'navbar'
};

/***/ }),
/* 101 */,
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_BLOG = exports.FETCH_BLOG = 'FETCH_BLOG';
var SELECT_BLOG = exports.SELECT_BLOG = 'SELECT_BLOG';

var FETCH_STATIC = exports.FETCH_STATIC = 'FETCH_STATIC';
var SELECT_STATIC = exports.SELECT_STATIC = 'SELECT_STATIC';

var STORE_CONF = exports.STORE_CONF = 'STORE_CONF';

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(9);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(46);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _routes = __webpack_require__(105);

var _routes2 = _interopRequireDefault(_routes);

var _store = __webpack_require__(218);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _vueRouter2.default({
  mode: 'history',
  routes: _routes2.default,
  // fixed from https://router.vuejs.org/en/advanced/scroll-behavior.html
  // reset scroll to 0, 0 after transition
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

_vue2.default.use(_vueRouter2.default);
// register component
new _vue2.default({
  base: '/',
  el: '#app',
  store: _store2.default,
  router: router,
  template: '<router-view />',
  created: function created() {
    console.log('Doconfig is ready to use.');
  }
});

/***/ }),
/* 104 */,
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(106);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(113);

var _index4 = _interopRequireDefault(_index3);

var _detail = __webpack_require__(116);

var _detail2 = _interopRequireDefault(_detail);

var _dockerfile = __webpack_require__(203);

var _dockerfile2 = _interopRequireDefault(_dockerfile);

var _index5 = __webpack_require__(209);

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(211);

var _index8 = _interopRequireDefault(_index7);

var _default = __webpack_require__(214);

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [
// homepage
{ path: '/', component: _index2.default }, {
  // except homepage using template
  path: '*',
  name: 'default layout',
  // using default layout
  component: _default2.default,
  children: [{ path: '/blog', component: _index4.default }, { path: '/blog/:params_title-:params_id', props: true, component: _detail2.default }, { path: '/conf/dockerfile', component: _dockerfile2.default }, { path: '/conf/gruntfile', component: _dockerfile2.default },
  // static page
  // send props from routes, solved from : https://router.vuejs.org/en/essentials/passing-props.html
  { path: '/about', title: 'about', props: { key_content: 0 }, component: _index8.default }, { path: '/terms-and-conditions', props: { key_content: 1 }, component: _index8.default }, { path: '/privacy-policy', props: { key_content: 2 }, component: _index8.default }, { path: '/how-to-use', props: { key_content: 3 }, component: _index8.default },
  // 404
  { path: '*', props: { code: '404', message: 'Page Not Found' }, component: _index6.default }] }]; // containers

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_efc7f958_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(112);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_efc7f958_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/client/containers/home/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-efc7f958", Component.options)
  } else {
    hotAPI.reload("data-v-efc7f958", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_partners_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_partners_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_partners_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_partners_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_partners_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_01c0cc4e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_partners_vue__ = __webpack_require__(108);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_partners_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_01c0cc4e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_partners_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/client/components/partners.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01c0cc4e", Component.options)
  } else {
    hotAPI.reload("data-v-01c0cc4e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "grid", class: _vm.className }, [
    _c("div", { staticClass: "col-12" }, [
      _c("h2", { staticClass: "title" }, [_vm._v(_vm._s(_vm.title))]),
      _c("p", { staticClass: "subtitle" }, [_vm._v(_vm._s(_vm.subtitle))])
    ]),
    _c(
      "div",
      { staticClass: "col-12" },
      _vm._l(_vm.partners, function(n, key) {
        return _c(
          "span",
          [
            _vm.is_newtab
              ? [
                  _c(
                    "a",
                    {
                      staticClass: "logo-partner",
                      attrs: { href: n.link, title: n.name, target: "_blank" }
                    },
                    [_c("img", { attrs: { src: n.image } })]
                  )
                ]
              : [
                  _c(
                    "router-link",
                    {
                      staticClass: "logo-partner",
                      attrs: { to: n.link, title: n.name }
                    },
                    [_c("img", { attrs: { src: n.image } })]
                  )
                ]
          ],
          2
        )
      })
    ),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("a", {
        staticClass: "btn-more-conf fa fa-chevron-down",
        attrs: { href: "javascript:;" }
      })
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-01c0cc4e", esExports)
  }
}

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("footer", { staticClass: "grid" }, [
      _vm._m(0),
      _c("div", { staticClass: "col-9" }, [
        _c("ul", { staticClass: "horizontal-list text-left" }, [
          _vm._m(1),
          _c(
            "li",
            [_c("router-link", { attrs: { to: "/about" } }, [_vm._v("About")])],
            1
          ),
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: "/how-to-use" } }, [
                _vm._v("How to Use")
              ])
            ],
            1
          ),
          _vm._m(2),
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: "/terms-and-conditions" } }, [
                _vm._v("Terms and Conditions")
              ])
            ],
            1
          ),
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: "/privacy-policy" } }, [
                _vm._v("Privacy Policy")
              ])
            ],
            1
          ),
          _c(
            "li",
            [_c("router-link", { attrs: { to: "/blog" } }, [_vm._v("Blog")])],
            1
          )
        ])
      ]),
      _vm._m(3)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [_c("hr")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      { staticStyle: { "font-size": ".9em", color: "#808080" } },
      [_c("strong", [_vm._v("DoConfig © 2017")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "a",
        {
          attrs: {
            href: "https://goo.gl/forms/1BlVNi9Sx0KDgO992",
            target: "_blank"
          }
        },
        [_vm._v("Contact")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3" }, [
      _c("ul", { staticClass: "horizontal-list text-right" }, [
        _c("li", [
          _c(
            "a",
            { attrs: { href: "https://byidmore.com", target: "_blank" } },
            [_c("strong", [_vm._v("Powered By IdMore")])]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5564a849", esExports)
  }
}

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = {"ready":[{"name":"create dockerfile","image":"/images/logos/docker.png","link":"/conf/dockerfile"}],"wip":[{"name":"create .travis.yml","image":"/images/logos/travisci.png","link":"/conf/travis-ci"},{"name":"create Heroku Procfile","image":"/images/logos/heroku.png","link":"/conf/heroku-procfile"},{"name":"create circle CI configurattion","image":"/images/logos/circleci.png","link":"circleci.html"},{"name":"create Linux Makefile","image":"/images/logos/linux-makefile.png","link":"linux-makefile.html"},{"name":"create Jenkis Configuration","image":"/images/logos/jenkins.png","link":"jenkins.html"},{"name":"create Gruntfile","image":"/images/logos/grunt.png","link":"grunt.html"},{"name":"create gulpfile.js","image":"/images/logos/gulp.png","link":"gulp.html"},{"name":"create bower ","image":"/images/logos/bower.png","link":"bower.html"},{"name":"create webpack.config.js","image":"/images/logos/webpack.png","link":"/conf/webpack"}]}

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = [{"name":"gitignore.io - Create Useful .gitignore Files For Your Project","image":"/images/logos/gitignore.svg","link":"https://gitignore.io"},{"name":"netlify - this website hosted by netlify","image":"/images/logos/netlify.jpg","link":"https://netlify.com"}]

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    [
      _c("div", { staticClass: "homeconf" }, [
        _c("div", { staticClass: "startconf" }, [
          _c("div", { staticClass: "container" }, [
            _vm._m(0),
            _c("section", { staticClass: "grid" }, [
              _c(
                "div",
                {
                  staticClass: "p-0 col-10_xs-12",
                  attrs: {
                    "data-push-left": "off-1_xs-0",
                    "data-push-right": "off-1_xs-0"
                  }
                },
                [
                  _c("div", { staticClass: "startconf-editor" }, [
                    _c("p", [_vm._v("What you want to config ?")]),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.txt_search,
                          expression: "txt_search"
                        }
                      ],
                      attrs: {
                        id: "startconf-editor",
                        type: "text",
                        placeholder: "Search libraries, CI, Services..",
                        onfocus: "this.placeholder = ''",
                        onblur:
                          "this.placeholder = 'Search libraries, CI, Services..'"
                      },
                      domProps: { value: _vm.txt_search },
                      on: {
                        keyup: _vm.handleChangeTxt,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.txt_search = $event.target.value
                        }
                      }
                    })
                  ]),
                  _c(
                    "div",
                    { staticClass: "startconf-recommendation" },
                    [
                      _c(
                        "transition-group",
                        { attrs: { name: "animate-list", tag: "ul" } },
                        _vm._l(_vm.recommendation, function(n, key) {
                          return _c(
                            "li",
                            { key: key },
                            [
                              _c("router-link", { attrs: { to: n.link } }, [
                                _vm._v(_vm._s(n.name))
                              ])
                            ],
                            1
                          )
                        })
                      )
                    ],
                    1
                  )
                ]
              ),
              _c("div", {
                staticClass: "p-0 col-10_xs-12",
                attrs: {
                  "data-push-left": "off-1_xs-0",
                  "data-push-right": "off-1_xs-0"
                }
              })
            ])
          ])
        ]),
        _c("div", { staticClass: "container" }, [
          _c("section", { staticClass: "grid startconfhelp" }, [
            _c(
              "div",
              {
                staticClass: "p-0 col-10_xs-12",
                attrs: {
                  "data-push-left": "off-1_xs-0",
                  "data-push-right": "off-1_xs-0"
                }
              },
              [
                _c("router-link", { attrs: { to: "/about" } }, [
                  _vm._v("What is this")
                ]),
                _c("router-link", { attrs: { to: "/how-to-use" } }, [
                  _vm._v("Getting Started ")
                ]),
                _c("router-link", { attrs: { to: "/request" } }, [
                  _vm._v("Request Conf")
                ]),
                _c("router-link", { attrs: { to: "/report" } }, [
                  _vm._v("Found Bug")
                ])
              ],
              1
            )
          ])
        ]),
        _c(
          "div",
          { staticClass: "container" },
          [
            _c("partners", {
              attrs: {
                title: "Available Config",
                subtitle:
                  "Here are some configurations you can create in DoConfig",
                className: "availableconf",
                partners: _vm.conf_available
              }
            }),
            _c("partners", {
              attrs: {
                title: "Config In Progress",
                subtitle:
                  "Get ready for the upcoming configurations on DoConfig",
                className: "wipconf",
                partners: _vm.conf_wip
              }
            }),
            _c("partners", {
              attrs: {
                title: "Partners",
                subtitle:
                  "Thanks for all the parties bellow who have supported Doconfig",
                className: "availableconf",
                is_newtab: true,
                partners: _vm.data_partners
              }
            })
          ],
          1
        )
      ]),
      _c("footer-nav")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "grid header" }, [
      _c(
        "div",
        {
          staticClass: "p-0 col-10_xs-12",
          attrs: {
            "data-push-left": "off-1_xs-0",
            "data-push-right": "off-1_xs-0"
          }
        },
        [
          _c("a", { attrs: { href: "/" } }, [
            _c("img", { attrs: { src: "/images/logo-header-white.png" } })
          ])
        ]
      )
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-efc7f958", esExports)
  }
}

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_aae63352_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(115);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_aae63352_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/client/containers/blog/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aae63352", Component.options)
  } else {
    hotAPI.reload("data-v-aae63352", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "blog-list",
      class: _vm.size == "small" ? ".col-4_sm-12" : ".col-12"
    },
    [
      _c("router-link", { attrs: { to: "/blog/title-12" } }, [
        _c("img", { attrs: { src: "/images/thumb.png" } })
      ]),
      _c("router-link", { attrs: { to: "/blog/title-12" } }, [
        _c("h3", [_vm._v("This is Title of Blog ")])
      ]),
      _vm._m(0)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-gray" }, [
      _c("span", { staticClass: "fa fa-user" }, [_vm._v("yussan ")]),
      _vm._v("- "),
      _c("span", { staticClass: "fa fa-calendar-o" }, [_vm._v(" 23 jan 2017")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-655b4601", esExports)
  }
}

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container blog" }, [
    _vm._m(0),
    _c(
      "div",
      { staticClass: "grid blog-content" },
      [
        _c("card", { key: 0 }),
        _c("card", { key: 1 }),
        _c("card", { key: 2 }),
        _c("card", { key: 3 }),
        _c("card", { key: 4 }),
        _c("card", { key: 5 }),
        _c("card", { key: 6 }),
        _c("card", { key: 7 }),
        _c("card", { key: 8 })
      ],
      1
    ),
    _vm._m(1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "grid" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("header", [
          _c("h1", [_vm._v("Blog")]),
          _c("h2", [_vm._v("last updated : 24 Oct 2017 ")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "grid p-lg text-center" }, [
      _c("div", { staticClass: "col" }, [
        _c("button", { staticClass: "btn btn-white btn-lg" }, [
          _vm._v("Load More")
        ])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-aae63352", esExports)
  }
}

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f62f41c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_detail_vue__ = __webpack_require__(202);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f62f41c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_detail_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/client/containers/blog/detail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f62f41c", Component.options)
  } else {
    hotAPI.reload("data-v-3f62f41c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebase = __webpack_require__(55);

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _process$env = Object({"NODE_ENV":undefined,"FIREBASE_APIKEY":undefined,"FIREBASE_AUTHDOMAIN":undefined,"FIREBASE_DATABASEURL":undefined,"FIREBASE_PROJECTID":undefined,"FIREBASE_STORAGEBUCKET":undefined,"FIREBASE_MESSAGINGSENDERID":undefined}),
    FIREBASE_APIKEY = _process$env.FIREBASE_APIKEY,
    FIREBASE_AUTHDOMAIN = _process$env.FIREBASE_AUTHDOMAIN,
    FIREBASE_DATABASEURL = _process$env.FIREBASE_DATABASEURL,
    FIREBASE_PROJECTID = _process$env.FIREBASE_PROJECTID,
    FIREBASE_STORAGEBUCKET = _process$env.FIREBASE_STORAGEBUCKET,
    FIREBASE_MESSAGINGSENDERID = _process$env.FIREBASE_MESSAGINGSENDERID;

// initialize

var app = _firebase2.default.initializeApp({
  apiKey: FIREBASE_APIKEY,
  authDomain: FIREBASE_AUTHDOMAIN,
  databaseURL: FIREBASE_DATABASEURL,
  projectId: FIREBASE_PROJECTID,
  storageBucket: FIREBASE_STORAGEBUCKET,
  messagingSenderId: FIREBASE_MESSAGINGSENDERID
});

exports.default = app;

/***/ }),
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container blog" }, [
    _c("div", { staticClass: "grid" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("header", [
          _c("h1", [_vm._v(_vm._s(_vm.title))]),
          _c("h2", [_vm._v("Posted by yussan - 24 Oct 2017 12:00")])
        ])
      ])
    ]),
    _c("div", { staticClass: "grid blog-content" }, [
      _vm._m(0),
      _c("div", { staticClass: "col-4_sm-12" }, [
        _c(
          "div",
          { staticClass: "grid" },
          [
            _c("card", { key: 0, attrs: { size: "large" } }),
            _c("card", { key: 1, attrs: { size: "large" } }),
            _c("card", { key: 2, attrs: { size: "large" } }),
            _c("card", { key: 3, attrs: { size: "large" } })
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8_sm-12" }, [
      _c("img", { attrs: { src: "/images/thumb.png" } }),
      _c("div", { staticClass: "m-sm" }),
      _c("p", [
        _vm._v(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in eros erat. Nunc tempor vitae risus non euismod. Praesent lobortis nunc enim, at elementum nisl dapibus nec. Phasellus egestas ullamcorper est, in interdum lectus ullamcorper ut. Proin sed mollis quam, eget interdum diam. Nullam id gravida nisl, quis elementum lacus. Donec maximus velit eu odio molestie lacinia laoreet at sem."
        )
      ]),
      _c("p", [
        _vm._v(
          "In hac habitasse platea dictumst. Nam non augue tempus, gravida turpis et, imperdiet velit. Curabitur vel nulla ac arcu sodales fermentum in id libero. Donec lobortis justo id neque suscipit, eget vulputate leo vulputate. Sed ultrices malesuada dui ut vestibulum. Praesent commodo pellentesque ex, tempus accumsan nisl consequat vel. Etiam dolor lacus, tempus nec lacus ac, rhoncus tempus libero. Suspendisse eu est iaculis erat dapibus gravida id at eros. Aenean ultrices, diam eget euismod efficitur, lectus diam ultrices lacus, sed mollis mauris orci sed tortor."
        )
      ]),
      _c("p", [
        _vm._v(
          "Proin condimentum condimentum justo vel porta. Sed scelerisque neque at turpis volutpat auctor. Etiam et dignissim ligula. Maecenas sed velit eu tellus euismod porta. Mauris euismod lacus id lacus vulputate, eu dictum enim tincidunt. Donec pharetra volutpat nibh, eget commodo est laoreet sit amet. Duis sodales nisl eget ligula aliquam, commodo maximus turpis commodo. Sed varius, arcu nec laoreet cursus, est nisi porttitor nulla, eget eleifend arcu purus accumsan lorem. Aenean sodales lobortis ligula consequat maximus. Morbi aliquet mollis velit a congue. Nulla at fringilla nisl. Maecenas ultricies, risus et posuere dapibus, nibh mi scelerisque tellus, eget scelerisque quam ex non tortor. Nam ullamcorper aliquet tristique. Sed id porta elit. Duis venenatis augue sit amet rhoncus tincidunt. Etiam tempus, purus vel laoreet ultrices, dolor sapien mattis est, volutpat convallis purus felis nec mi."
        )
      ]),
      _c("p", [
        _vm._v(
          "Sed placerat diam sit amet fringilla euismod. Integer at erat vitae velit condimentum ultrices. Nulla sed urna quis erat vulputate tincidunt. Mauris eu lectus leo. Praesent condimentum iaculis maximus. Mauris porttitor diam et auctor aliquet. Duis vulputate sapien neque, in semper velit fermentum in."
        )
      ]),
      _c("p", [
        _vm._v(
          "In a ligula id tortor suscipit lobortis non eu urna. Fusce dictum mauris vel orci commodo, placerat porta dui feugiat. Fusce nunc mauris, tempus et dui id, semper lacinia tortor. Cras id quam mauris. Etiam rutrum purus at ex rhoncus, fermentum lacinia odio laoreet. Suspendisse neque metus, consequat id hendrerit vitae, tristique vel sem. Donec placerat consectetur metus, sit amet viverra sapien feugiat id. Aenean id sapien orci."
        )
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3f62f41c", esExports)
  }
}

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dockerfile_vue__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dockerfile_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dockerfile_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dockerfile_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dockerfile_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5979cca5_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_dockerfile_vue__ = __webpack_require__(208);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dockerfile_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5979cca5_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_dockerfile_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/client/containers/conf/dockerfile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5979cca5", Component.options)
  } else {
    hotAPI.reload("data-v-5979cca5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_subheader_vue__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_subheader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_subheader_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_subheader_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_subheader_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8c9200e2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_subheader_vue__ = __webpack_require__(205);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_subheader_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8c9200e2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_subheader_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/client/components/subheader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8c9200e2", Component.options)
  } else {
    hotAPI.reload("data-v-8c9200e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container config" }, [
    _c("div", { staticClass: "grid" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("header", { staticClass: "createconf" }, [
          _c("h1", [_vm._v(_vm._s(_vm.title))]),
          _c("h2", [
            _vm._v(_vm._s(_vm.subtitle) + ". "),
            _c("a", { attrs: { href: _vm.link, target: "_blank" } }, [
              _vm._v("Readmore about " + _vm._s(_vm.name))
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8c9200e2", esExports)
  }
}

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_form_input_text_vue__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_form_input_text_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_form_input_text_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_form_input_text_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_form_input_text_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b884b3b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_form_input_text_vue__ = __webpack_require__(207);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_form_input_text_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b884b3b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_form_input_text_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/client/components/form-input-text.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b884b3b", Component.options)
  } else {
    hotAPI.reload("data-v-1b884b3b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "createconf-form-control" }, [
    _c("label", [_vm._v(_vm._s(_vm.label))]),
    _c("small", [_c("span", { domProps: { innerHTML: _vm._s(_vm.text) } })]),
    _c("input", {
      attrs: { type: "text", name: _vm.name, placeholder: _vm.placeholder },
      domProps: { value: _vm.value },
      on: { keyup: _vm.handleChange }
    }),
    _c(
      "div",
      {
        staticClass: "recommendation",
        attrs: { "v-if": _vm.recommendations.length > 0 }
      },
      [
        _c(
          "ul",
          { staticStyle: { padding: "0", "margin-top": "-.1em" } },
          _vm._l(_vm.recommendations, function(n, index) {
            return _c(
              "li",
              {
                staticStyle: {
                  "list-style": "none",
                  padding: ".5em",
                  background: "#2cb5e8",
                  "margin-bottom": ".2em"
                }
              },
              [
                _c(
                  "a",
                  {
                    staticStyle: { color: "#236f90" },
                    attrs: { href: "javascript:;" },
                    on: {
                      click: function() {
                        return _vm.handleRecommendations(_vm.name, n)
                      }
                    }
                  },
                  [_vm._v(" " + _vm._s(n))]
                )
              ]
            )
          })
        )
      ]
    ),
    _c(
      "div",
      { staticClass: "commands", staticStyle: { "margin-top": "-10px" } },
      _vm._l(_vm.childs, function(n, index) {
        return _c(
          "div",
          {
            staticClass: "command command",
            staticStyle: { "margin-right": ".25em" },
            attrs: { title: "click to remove" },
            on: {
              click: function() {
                return _vm.handleRemoveChild(_vm.name, index)
              }
            }
          },
          [_vm._v(_vm._s(_vm.label) + ": " + _vm._s(n))]
        )
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1b884b3b", esExports)
  }
}

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", [
    _c(
      "div",
      { staticClass: "createconf" },
      [
        _c("subheader", {
          attrs: {
            name: "Dockerfile",
            link: "https://docs.docker.com/engine/reference/builder/",
            title: "Create Dockerfile",
            subtitle:
              "Docker can build images automatically by reading the instructions from a Dockerfile. A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. Using docker build users can create an automated build that executes several command-line instructions in succession. More about Dockerfile"
          }
        }),
        _c("section"),
        _c("div", { staticClass: "container-md" }, [
          _c("div", { staticClass: "grid" }, [
            _c("div", { staticClass: "col-12" }, [
              _c(
                "div",
                { staticClass: "createconf-form" },
                [
                  _c("input-text", {
                    attrs: {
                      name: "txt_image",
                      label: "IMAGE FROM",
                      text:
                        "<strong>IMAGE</strong> is based on <a href='https://hub.docker.com/' target='blank'>Docker Hub</a>",
                      placeholder: "example: ubuntu, nodejs-slim",
                      value: _vm.txt_image,
                      recommendations: _vm.rec_txt_image,
                      handleRecommendations: _vm.handleRecommendations,
                      handleChange: _vm.handleChangeText
                    }
                  }),
                  _c("input-text", {
                    attrs: {
                      name: "txt_workdir",
                      label: "WORKDIR",
                      text:
                        "<strong>WORKDIR</strong> is based on <a href='https://hub.docker.com/' target='blank'>Docker Hub</a>",
                      placeholder: "example: ubuntu, nodejs-slim",
                      value: _vm.txt_workdir,
                      handleChange: _vm.handleChangeText
                    }
                  }),
                  _c("input-text", {
                    attrs: {
                      name: "txt_run",
                      label: "RUN",
                      text:
                        "<strong>RUN</strong> actually runs a command and commits the result. Make sure to write command in sequentially.",
                      placeholder:
                        "example: apt-get update -y (and press enter)",
                      value: _vm.txt_run,
                      handleChange: _vm.handleChangeText,
                      handleRemoveChild: _vm.handleRemoveChild,
                      childs: _vm.childs_txt_run
                    }
                  }),
                  _c("input-text", {
                    attrs: {
                      name: "txt_copy",
                      label: "COPY",
                      text:
                        "<strong>COPY</strong> Make sure to write command in sequentially.",
                      placeholder: "example: /target /destination",
                      value: _vm.txt_copy,
                      handleChange: _vm.handleChangeText,
                      handleRemoveChild: _vm.handleRemoveChild,
                      childs: _vm.childs_txt_copy
                    }
                  }),
                  _vm._m(0)
                ],
                1
              )
            ])
          ]),
          _c("div", { staticClass: "align-center" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-lg btn-white",
                attrs: { type: "button", disabled: _vm.is_loading },
                on: { click: _vm.submit }
              },
              [
                _vm._v(
                  " " +
                    _vm._s(
                      _vm.is_loading ? "Wait for it ..." : "Generate Dockerfile"
                    )
                )
              ]
            ),
            _c("div", { staticClass: "m-sm" })
          ])
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "createconf-form-control commands-form-control" },
      [
        _c("label", [_vm._v("CMD ")]),
        _c("small", [
          _c("strong", [_vm._v("RUN ")]),
          _vm._v("There can only be one "),
          _c("strong", [_vm._v("CMD ")]),
          _vm._v("instruction in a Dockerfile. If you list more than one "),
          _c("strong", [_vm._v("CMD ")]),
          _vm._v("then only the last "),
          _c("strong", [_vm._v("CMD ")]),
          _vm._v("will take effect.")
        ]),
        _c("input", {
          attrs: { type: "text", placeholder: "example: apt-get update -y" }
        }),
        _c("div", { staticClass: "commands active" }, [
          _c(
            "div",
            { staticClass: "command", attrs: { title: "click to delete" } },
            [_vm._v("CMD: /var/www/app/run.sh")]
          )
        ])
      ]
    )
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5979cca5", esExports)
  }
}

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ff90bf6e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(210);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ff90bf6e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/client/containers/error/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ff90bf6e", Component.options)
  } else {
    hotAPI.reload("data-v-ff90bf6e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "grid" }, [
      _c("div", { staticClass: "col-12 error-page" }, [
        _c("h1", { staticStyle: { "font-size": "4em" } }, [
          _vm._v(_vm._s(_vm.code)),
          _c("br"),
          _c("small", [_vm._v(_vm._s(_vm.message))])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ff90bf6e", esExports)
  }
}

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9c2d50ba_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(213);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9c2d50ba_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/client/containers/static/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9c2d50ba", Component.options)
  } else {
    hotAPI.reload("data-v-9c2d50ba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = [{"title":"about","content":"<p>This is content of about</p>"},{"title":"terms and conditions","content":"<p>This is content of about</p>"},{"title":"privacy policy","content":"<p><strong>What information we collect ?<br/></strong>We collect all information from you when you register on our site or fill out a form.</p>"},{"title":"how to use","content":"<p>This is content of how to use</p>"}]

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container blog" }, [
    _c("div", { staticClass: "grid" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("header", [
          _c("h1", [_vm._v(_vm._s(_vm.title))]),
          _c("h2", [_vm._v("Posted by yussan - 24 Oct 2017 12:00")])
        ])
      ])
    ]),
    _c("div", { staticClass: "grid-center blog-content" }, [
      _c("div", { staticClass: "col-8_sm-12" }, [
        _c("img", { attrs: { src: "images/thumb.png" } }),
        _c("div", { staticClass: "m-sm" }),
        _c("article", { domProps: { innerHTML: _vm._s(_vm.content) } })
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9c2d50ba", esExports)
  }
}

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_default_vue__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_default_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_default_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_default_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_default_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5e5fbe10_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_default_vue__ = __webpack_require__(217);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_default_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5e5fbe10_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_default_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/client/layouts/default.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e5fbe10", Component.options)
  } else {
    hotAPI.reload("data-v-5e5fbe10", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_17d26784_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_navbar_vue__ = __webpack_require__(216);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_navbar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_17d26784_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_navbar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/client/components/navbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-17d26784", Component.options)
  } else {
    hotAPI.reload("data-v-17d26784", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "header" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "grid" }, [
        _c(
          "div",
          { staticClass: "p-0 col-12" },
          [
            _c("router-link", { staticClass: "logo", attrs: { to: "/" } }, [
              _c("img", { attrs: { src: "/images/logo-header-white.png" } })
            ]),
            _c("ul", { staticClass: "horizontal-list" }, [
              _c(
                "li",
                [
                  _c("router-link", { attrs: { to: "/" } }, [
                    _vm._v("Start Config")
                  ])
                ],
                1
              ),
              _c(
                "li",
                { staticClass: "active" },
                [
                  _c("router-link", { attrs: { to: "/blog" } }, [
                    _vm._v("Blog")
                  ])
                ],
                1
              )
            ])
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-17d26784", esExports)
  }
}

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", [_c("navbar"), _c("router-view"), _c("footer-nav")], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5e5fbe10", esExports)
  }
}

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(9);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(101);

var _vuex2 = _interopRequireDefault(_vuex);

var _actions = __webpack_require__(219);

var actions = _interopRequireWildcard(_actions);

var _store = __webpack_require__(220);

var _store2 = _interopRequireDefault(_store);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

exports.default = new _vuex2.default.Store({
  actions: actions,
  modules: {
    blog: _store2.default
  },
  strict: undefined !== 'production'
});

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectBlog = undefined;

var _types = __webpack_require__(102);

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var selectBlog = exports.selectBlog = function selectBlog(_ref, id) {
  var commit = _ref.commit;

  commit(types.SELECT_BLOG, {
    id: id
  });
};

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mutations;

var _types = __webpack_require__(102);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// root store, initial state project
var state = {
  blog: [],
  active_blog: 0
};

var getters = {};

var actions = {};

// mutations
var mutations = (_mutations = {}, _defineProperty(_mutations, _types.FETCH_BLOG, function (state) {
  console.log('fetch data from Firestorm..');
}), _defineProperty(_mutations, _types.SELECT_BLOG, function (state, _ref) {
  var id = _ref.id;

  state.active_blog = id;
}), _mutations);

exports.default = {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};

/***/ })
],[103]);