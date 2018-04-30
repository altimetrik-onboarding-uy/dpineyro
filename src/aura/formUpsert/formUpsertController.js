({
	closeUpdateForm: function(component,event,helper){
		helper.clearForm(component);
		var throwArrow = component.getEvent('closeUpdateForm');
		throwArrow.fire();
	},
	saveTc: function(component,event,helper){
		/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
		var obj = component.get("v.newTestCase");
		obj.nameProject__c=component.get("v.myProject.Id");
		obj.Status__c='Ongoing';
		/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
		var action = component.get("c.upsertTestCase");
        action.setParams({
            "myTC": obj
        });
        action.setCallback(this, function(response) {
			var state = response.getState();
            if (state === "SUCCESS") {
				helper.clearForm(component);
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
		$A.enqueueAction(action);
		/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
		var throwArrow = component.getEvent('closeUpdateForm');
		throwArrow.fire();
		/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
		var completeProc = component.get("v.myProject");
		var cmpAct = component.getEvent("projectDetailsEvent");
        cmpAct.setParams({
            "paramDet": completeProc
        });
        cmpAct.fire();
	}
})