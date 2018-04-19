({
	testItemDelet: function(component, event, helper){
		var ammunition = component.get("v.testCaseItem");
		var toFire = component.getEvent('deleteItemEvent');
		toFire.setParams({
			"parDelete": ammunition
		});
		toFire.fire();
	},
	showForm: function(component, event, helper){
		var arrow = component.get("v.testCaseItem");
		var throwArrow = component.getEvent('showEvent');
		throwArrow.fire();
		var updateForm = component.getEvent("ItemUpSert");
		updateForm.setParams({
			"parUpsert": arrow
		});
		updateForm.fire();
	}
})