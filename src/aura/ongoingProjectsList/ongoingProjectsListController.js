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
        console.log("Este "+projectDetails);
        action.setParams({
            "myId": projectDetails.Id
        });
        console.log('##', JSON.parse(JSON.stringify(projectDetails)));
        
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

})