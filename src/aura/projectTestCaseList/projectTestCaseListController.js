({
    openUpdateForm: function (component,event,helper){
        var shot = component.getEvent('openUpdateForm');
        shot.fire();
        var updateForm = component.getEvent("ItemUpSert");
		updateForm.setParams({
			"parUpsert": component.get("v.dataTest") 
        });
		updateForm.fire();
    }
})