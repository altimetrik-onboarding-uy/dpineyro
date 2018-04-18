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
        console.log(":S");
        var projectDetails = event.getParam("paramDet");
        var action = component.get("c.getProjectOngoingDetails");
        action.setParams({
            "myId": projectDetails.Id
        });
        console.log('#?#', JSON.parse(JSON.stringify(projectDetails)));
        
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
        console.log("He shot me!");
        var deleteItem = event.getParam("parDelete");
        var action = component.get("c.deleteTest");
        console.log('## ',JSON.parse(JSON.stringify(deleteItem)));
        action.setParams({
            "myId": deleteItem.Id
        });
        console.log("Here I am");
        var myListOfTc = new Array();
        for(var i = 0;i<listOfTc.length;i++){
            if(listOfTc[i].Id != deleteItem.Id){
                myListOfTc.push(listOfTc[i]);
            }
            else{
                console.log("Este fue el eliminado " + deleteItem.Id );
            }
        }
        console.log('## ',JSON.parse(JSON.stringify(myListOfTc)));
        component.set("v.selectedProject.Test_Cases__r", myListOfTc);
        $A.enqueueAction(action);
    },
    applyCSS: function(cmp, event) {
        console.log('yes on fire');
        var cmpTarget = cmp.find('myFormUpsert');
        console.log(cmp.find('myFormUpsert'));
        $A.util.addClass(cmpTarget, 'myFormUpsertHide');
    },
    removeCSS: function(cmp, event) {
        console.log('Arrow Cached');
        var cmpTargetR = cmp.find('myFormUpsert');
        console.log(cmp.find('myFormUpsert'));
        $A.util.removeClass(cmpTargetR, 'myFormUpsertHide');
    }

})