(function () {

  var _addMixin = function (screen, mixin) {
    screen.extend(mixin)
    if (!screen.isValid) throw "Screeb did not have " + mixin + " on " + screen.name();
  };

  return {
  
    onScreen: function (callback) {
      // throw an error if we are not in instruments
      // or check somehow that we can create a screen object
      var screen = new Screen();
      return callback(screen);
    },
    
    onScreenWith: function () {
      var args = Array.prototype.slice.call(arguments);
      
      if (_.isFunction(_.last(arguments))) callback = arguments.pop;
      
      if (!modules.length) throw 'You must supply at least one mixin';
      
      onScreen(function (screen) {
        _(mixins).each(function (mixin) {
          if (_(mixin).isKindOf(GizmoMixin) throw ArgumentError, 'module_name must be a symbol'
          _addMixin(screen, mixin)
        });
      })
    }
  
  }
  
})();
