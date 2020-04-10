'use strict';



;define("squared-up/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("squared-up/app", ["exports", "ember-resolver", "ember-load-initializers", "squared-up/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("squared-up/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("squared-up/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("squared-up/controllers/login", ["exports", "squared-up/config/environment", "fetch"], function (_exports, _environment, _fetch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _temp;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let LoginController = (_class = (_temp = class LoginController extends Ember.Controller {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "email", '');

      _defineProperty(this, "password", '');
    }

    async login() {
      let url = `${_environment.default.APP.BACKEND}/sessions`;
      let body = JSON.stringify({
        email: this.email,
        password: this.password
      });
      let headers = new _fetch.Headers({
        'Content-Type': 'application/json'
      });

      try {
        let response = await (0, _fetch.default)(url, {
          method: 'post',
          headers,
          body
        });
        let json2 = await response.json();
        let localStorage = window.localStorage;
        localStorage.setItem('auth-token', json2.token);
        return this.transitionToRoute('layouts');
      } catch (e) {
        console.log(e);
      }
    }

  }, _temp), (_applyDecoratedDescriptor(_class.prototype, "login", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "login"), _class.prototype)), _class);
  _exports.default = LoginController;
});
;define("squared-up/controllers/signup", ["exports", "squared-up/config/environment", "fetch"], function (_exports, _environment, _fetch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _temp;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let SignupController = (_class = (_temp = class SignupController extends Ember.Controller {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "email", '');

      _defineProperty(this, "password", '');
    }

    async signup() {
      let url = `${_environment.default.APP.BACKEND}/users`;
      let url2 = `${_environment.default.APP.BACKEND}/sessions`;
      let body = JSON.stringify({
        email: this.email,
        password: this.password
      });
      let headers = new _fetch.Headers({
        'Content-Type': 'application/json'
      });

      try {
        let response = await (0, _fetch.default)(url, {
          method: 'post',
          headers,
          body
        });
        let response2 = await (0, _fetch.default)(url2, {
          method: 'post',
          headers,
          body
        });
        let json2 = await response2.json();
        let localStorage = window.localStorage;
        localStorage.setItem('auth-token', json2.token);
        return this.transitionToRoute('layouts');
      } catch (e) {
        console.log(e);
      }
    }

  }, _temp), (_applyDecoratedDescriptor(_class.prototype, "signup", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "signup"), _class.prototype)), _class);
  _exports.default = SignupController;
});
;define("squared-up/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("squared-up/helpers/app-version", ["exports", "squared-up/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("squared-up/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("squared-up/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("squared-up/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "squared-up/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("squared-up/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("squared-up/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("squared-up/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("squared-up/initializers/export-application-global", ["exports", "squared-up/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("squared-up/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("squared-up/router", ["exports", "squared-up/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('login');
    this.route('signup');
    this.route('layout', {
      path: '/layout/:id'
    });
    this.route('layouts');
  });
});
;define("squared-up/routes/layout", ["exports", "squared-up/config/environment", "fetch"], function (_exports, _environment, _fetch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Layout extends Ember.Route {
    async model(params) {
      let url = `${_environment.default.APP.BACKEND}/layouts/${params.id}/rectangles`;
      let localStorage = window.localStorage;
      let headers = new _fetch.Headers({
        'Authorization': localStorage.getItem('auth-token')
      });
      let response = await (0, _fetch.default)(url, {
        method: 'get',
        headers
      });
      return response.json();
    }

  }

  _exports.default = Layout;
});
;define("squared-up/routes/layouts", ["exports", "squared-up/config/environment", "fetch"], function (_exports, _environment, _fetch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Layouts extends Ember.Route {
    async model() {
      let url = `${_environment.default.APP.BACKEND}/users/me/layouts`;
      let localStorage = window.localStorage;
      let headers = new _fetch.Headers({
        'Authorization': localStorage.getItem('auth-token')
      });
      let response = await (0, _fetch.default)(url, {
        method: 'get',
        headers
      });
      return response.json();
    }

  }

  _exports.default = Layouts;
});
;define("squared-up/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("squared-up/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("squared-up/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("squared-up/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("squared-up/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("squared-up/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Hr7xOim5",
    "block": "{\"symbols\":[],\"statements\":[[1,0,0,0,[31,0,0,[27,[26,1,\"CallHead\"],[]],[[31,0,0,[27,[26,0,\"CallHead\"],[]],null,null]],null]]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "squared-up/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("squared-up/templates/layout", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "mxN8cWng",
    "block": "{\"symbols\":[\"ly\"],\"statements\":[[9,\"div\",true],[10],[1,1,0,0,\"\\n    \"],[9,\"h1\",true],[10],[1,1,0,0,\"Layout singular\"],[11],[1,1,0,0,\"\\n\"],[5,[27,[26,1,\"BlockHead\"],[]],[[31,0,0,[27,[26,0,\"CallHead\"],[]],[[31,0,0,[27,[26,0,\"CallHead\"],[]],[[27,[24,0],[\"model\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"        \"],[1,0,0,0,[27,[24,1],[\"startX\"]]],[1,1,0,0,\"\\n\"]],\"parameters\":[1]}]]],[11]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\"]}",
    "meta": {
      "moduleName": "squared-up/templates/layout.hbs"
    }
  });

  _exports.default = _default;
});
;define("squared-up/templates/layouts", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "c/F0JSs/",
    "block": "{\"symbols\":[\"ly\"],\"statements\":[[9,\"div\",true],[10],[1,1,0,0,\"\\n    \"],[9,\"h1\",true],[10],[1,1,0,0,\"Layouts\"],[11],[1,1,0,0,\"\\n\\n\"],[5,[27,[26,2,\"BlockHead\"],[]],[[31,0,0,[27,[26,1,\"CallHead\"],[]],[[31,0,0,[27,[26,1,\"CallHead\"],[]],[[27,[24,0],[\"model\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"    \"],[9,\"p\",true],[10],[1,1,0,0,\" \"],[5,[27,[26,0,\"BlockHead\"],[]],null,[[\"route\",\"model\"],[\"layout\",[27,[24,1],[\"id\"]]]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"\\n            \"],[1,0,0,0,[27,[24,1],[\"name\"]]],[1,1,0,0,\"\\n        \"]],\"parameters\":[]}]]],[1,1,0,0,\" \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[1]}]]],[1,1,0,0,\"\\n\"],[11]],\"hasEval\":false,\"upvars\":[\"link-to\",\"-track-array\",\"each\"]}",
    "meta": {
      "moduleName": "squared-up/templates/layouts.hbs"
    }
  });

  _exports.default = _default;
});
;define("squared-up/templates/login", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "7ZtOvMmG",
    "block": "{\"symbols\":[],\"statements\":[[9,\"div\",true],[10],[1,1,0,0,\"\\n    \"],[9,\"h1\",true],[10],[1,1,0,0,\"Welcome to Squared Up!\"],[11],[1,1,0,0,\"\\n    \"],[9,\"h2\",true],[10],[1,1,0,0,\"Please login or sign up!\"],[11],[1,1,0,0,\"\\n    \"],[9,\"div\",true],[10],[1,1,0,0,\"\\n        Email\\n        \"],[7,\"input\",[[23,\"type\",\"text\",null]],[[\"@value\"],[[27,[24,0],[\"email\"]]]],null],[1,1,0,0,\"\\n        Password\\n        \"],[7,\"input\",[[23,\"type\",\"password\",null]],[[\"@value\"],[[27,[24,0],[\"password\"]]]],null],[1,1,0,0,\"\\n        \"],[9,\"button\",false],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],[[27,[24,0],[]],\"login\"],null],[10],[1,1,0,0,\"Login\"],[11],[1,1,0,0,\"\\n        \"],[9,\"p\",true],[10],[1,1,0,0,\"Don't have an account?\"],[11],[1,1,0,0,\"\\n        \"],[5,[27,[26,1,\"BlockHead\"],[]],null,[[\"route\"],[\"signup\"]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"Create Account\"]],\"parameters\":[]}]]],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n    \"],[5,[27,[26,1,\"BlockHead\"],[]],null,[[\"route\"],[\"layouts\"]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"Layouts\"]],\"parameters\":[]}]]],[1,1,0,0,\"\\n\"],[11]],\"hasEval\":false,\"upvars\":[\"action\",\"link-to\"]}",
    "meta": {
      "moduleName": "squared-up/templates/login.hbs"
    }
  });

  _exports.default = _default;
});
;define("squared-up/templates/signup", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "tm3zuLsw",
    "block": "{\"symbols\":[],\"statements\":[[9,\"div\",true],[10],[1,1,0,0,\"\\n    \"],[9,\"h1\",true],[10],[1,1,0,0,\"Welcome to Squared Up!\"],[11],[1,1,0,0,\"\\n    \"],[9,\"h2\",true],[10],[1,1,0,0,\"Sign up!\"],[11],[1,1,0,0,\"\\n    \"],[9,\"div\",true],[10],[1,1,0,0,\"\\n        Email\\n        \"],[7,\"input\",[[23,\"type\",\"text\",null]],[[\"@value\"],[[27,[24,0],[\"email\"]]]],null],[1,1,0,0,\"\\n        Password\\n        \"],[7,\"input\",[[23,\"type\",\"password\",null]],[[\"@value\"],[[27,[24,0],[\"password\"]]]],null],[1,1,0,0,\"\\n        \"],[9,\"button\",false],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],[[27,[24,0],[]],\"signup\"],null],[10],[1,1,0,0,\"Sign up\"],[11],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n\"],[11]],\"hasEval\":false,\"upvars\":[\"action\"]}",
    "meta": {
      "moduleName": "squared-up/templates/signup.hbs"
    }
  });

  _exports.default = _default;
});
;define("squared-up/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("squared-up/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("squared-up/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("squared-up/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('squared-up/config/environment', [], function() {
  var prefix = 'squared-up';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("squared-up/app")["default"].create({"BACKEND":"http://localhost:3000","name":"squared-up","version":"0.0.0+09d6ffec"});
          }
        
//# sourceMappingURL=squared-up.map
