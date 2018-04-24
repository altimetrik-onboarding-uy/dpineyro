({
	doInit : function(component, event, helper) {
        var obj = [
            {
                Id 	: 0,
                name : "name 1",
                lastname : "lastname",
                age : "age"
            },
            {
                Id 	: 1,
                name : "name 2",
                lastname : "lastname",
                age : "age"
            },
            {
                Id 	: 2,
                name : "name 3",
                lastname : "lastname",
                age : "age"
            }
        ];
        component.set("v.stepList", obj);
	},
    onChargeStepList : function(component,event,helper){
        var parList = event.getParam("parList");
        component.set("v.stepList",parList);
        }
})