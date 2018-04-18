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
	},
	showForm: function(component, event, helper){
		var arrow = component.get("v.testCaseItem");
		var throwArrow = component.getEvent('showEvent');
		throwArrow.setParams({
			"parUpsert": arrow
		});
		console.log('##', JSON.parse(JSON.stringify(arrow)));
		console.log("Arrow on the Fly");
		throwArrow.fire();
	}
})