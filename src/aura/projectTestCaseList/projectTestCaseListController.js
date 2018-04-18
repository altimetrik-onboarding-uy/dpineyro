({
  /* doInit: function(component, event, helper) {
        // Create the action
        console.log(component.get("v.projectToFind.Id"));
        var action = component.get("c.getTestCaseByProject");
        // Add callback behavior for when response is received
       action.setParams({
           "myId": component.get("v.projectToFind.Id")
                        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.testCaseList", response.getReturnValue());
                console.log(component.get("v.testCaseList"));
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    },*/
    showForm: function (component,event,helper){
        var shot = component.getEvent('showEvent');
        shot.fire();
    }
})