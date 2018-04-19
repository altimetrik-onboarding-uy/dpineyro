({
  // Load expenses from Salesforce
    doInit: function(component, event, helper) {
        // Create the action
        var action = component.get("c.getProjectOngoing");
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.projectongoing", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    },
    loadDetails: function(component,event,helper){
        var projectDetails = event.getParam("paramDet");
        var action = component.get("c.getProjectOngoingDetails");
        action.setParams({
            "myId": projectDetails.Id
        });
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.selectedProject", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    },
    deleteItem: function(component,event,helper){
        var listOfTc = component.get("v.selectedProject.Test_Cases__r");
        var deleteItem = event.getParam("parDelete");
        var action = component.get("c.deleteTest");
        action.setParams({
            "myId": deleteItem.Id
        });
        var myListOfTc = new Array();
        for(var i = 0;i<listOfTc.length;i++){
            if(listOfTc[i].Id != deleteItem.Id){
                myListOfTc.push(listOfTc[i]);
            }
        }
        component.set("v.selectedProject.Test_Cases__r", myListOfTc);
        $A.enqueueAction(action);
    },
    applyCSS: function(cmp, event) {
        var cmpTarget = cmp.find('myFormUpsert');
        $A.util.addClass(cmpTarget, 'myFormUpsertHide');
    },
    removeCSS: function(cmp, event) {
        var cmpTargetR = cmp.find('myFormUpsert');
        $A.util.removeClass(cmpTargetR, 'myFormUpsertHide');
    },
	updateData: function(component,event,helper){
        var etyData = component.get("v.dataTest");
        var testDetails = event.getParam("parUpsert");
        var action = component.get("c.getTest");
        action.setParams({
            "myId": testDetails.Id
        });
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.dataTest", response.getReturnValue());
            }
            else {
                component.set("v.dataTest", etyData);
            }
        }); 
        $A.enqueueAction(action);
	}

})