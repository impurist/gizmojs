require("./spec-helper.js");

describe("Gizmo", function() {
  
  beforeEach(function() {
    
    headerBar = {
      boomarksButton: function(){
        return "boomarksButton";
      }
    }
    
    map = {
      annotations: function () {
        return "annotations";
      }
    }
    
  });
  
  it("onScreenWith mixes in the passed in module", function() {
    
    Gizmo.onScreenWith(headerBar, function(screen){
      expect(screen.boomarksButton()).toEqual("boomarksButton");
    });
    
  });
  
  it("onScreenWith mixes in the passed in module", function() {
    
    Gizmo.onScreenWith(headerBar, map, function(screen){
      expect(screen.boomarksButton()).toEqual("boomarksButton");
      expect(screen.annotations()).toEqual("annotations");
    });
    
  });
  
});