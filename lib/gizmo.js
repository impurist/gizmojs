Screen = function () {    
  this.isValid = function(){
    return true;
  };
};

Gizmo = (function () {

  var _addMixin = function (screen, mixin) {
    _u.extend(screen , mixin);
    if (!screen.isValid()) throw "Screen did not have " + mixin + " on " + screen.name();
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
      if (_u.isFunction(_u.last(arguments))){
         callback = args.pop();
         mixins = args;
      }
      if (!mixins.length) throw 'You must supply at least one mixin';
      
      Gizmo.onScreen(function (screen) {
        _u(mixins).each(function (mixin) {
          if (_u.isEmpty(mixin)) {
            throw "Mixin: " + mixin + " is empty."
          };
         _addMixin(screen, mixin);
        });
        callback(screen);
      });
    }
  
  }
  
})();
