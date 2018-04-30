({
	doInit : function(component, event, helper) {
        var recId = component.get('v.recordId');
        var stepList = component.get("c.listStepCases");
        stepList.setParams({
            'myId' : recId
        });
        stepList.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.stepList", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(stepList);
	},
    onChargeStepList : function(component,event,helper){
        var parList = event.getParam("parList");
        component.set("v.stepList",parList);
    },
    updateStepList : function(component,event,helper){
        var recId = component.get('v.recordId');
        var stepList = component.get("c.listStepCases");
        stepList.setParams({
            'myId' : recId
        });
        stepList.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.stepList", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(stepList);
    } 
})