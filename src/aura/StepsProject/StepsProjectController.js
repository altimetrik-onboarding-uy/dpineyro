({
	doInit : function(component, event, helper) {
        console.log('start');
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
        component.set("v.vector", obj);
	},
    onChargeVector : function(component,event,helper){
        var a = event.getParam("parList");
        component.set("v.vector",a);
        }
})