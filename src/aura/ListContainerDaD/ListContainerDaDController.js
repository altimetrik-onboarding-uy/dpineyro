({
	onDrag	:	function(component,event,helper){
        var res = event.getParam("parIndex");
        component.set("v.itemDrag", res);
    },
    createRecord : function (component, event, helper) {
        var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": "Test_Case_Step__c"
        });
        createRecordEvent.fire();
    }
})