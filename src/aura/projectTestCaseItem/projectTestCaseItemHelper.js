({
	testItemDelet: function(component, event, helper){
		var ammunition = component.get("v.testCaseItem");
		var toFire = component.getEvent('deleteItemEvent');
		toFire.setParams({
			"parDelete": ammunition
		});
		toFire.fire();
	},
	openUpdateForm: function(component, event, helper){
		var arrow = component.get("v.testCaseItem");
		var throwArrow = component.getEvent('openUpdateForm');
		throwArrow.fire();
		var updateForm = component.getEvent("ItemUpSert");
		updateForm.setParams({
			"parUpsert": arrow
		});
		updateForm.fire();
	}
})