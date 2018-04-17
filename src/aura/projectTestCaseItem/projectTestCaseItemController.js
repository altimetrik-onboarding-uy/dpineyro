({
	testItemDelet: function(component, event, helper){
		var ammunition = component.get("v.testCaseItem");
		var toFire = component.getEvent('deleteItemEvent');
		toFire.setParams({
			"parDelete": ammunition
		});
		console.log('##', JSON.parse(JSON.stringify(ammunition)));
		console.log("Fire on the hold");
		toFire.fire();
	}
})