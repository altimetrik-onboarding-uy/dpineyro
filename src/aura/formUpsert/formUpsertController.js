({
	hideForm: function(component,event,helper){
		console.log("On fire?");
		var throwArrow = component.getEvent('hideEvent');
		throwArrow.fire();
	}
})