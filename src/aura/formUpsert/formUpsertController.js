({
	closeUpdateForm: function(component,event,helper){
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
				var refreshObj = obj;
				refreshObj.Name='';
				refreshObj.Title__c='';
				refreshObj.Description__c='';
				refreshObj.Preconditions__c='';
				refreshObj.Id=null;
				refreshObj.URL__c='';
                component.set("v.newTestCase", refreshObj);
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