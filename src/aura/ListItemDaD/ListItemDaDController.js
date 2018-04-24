({
	onDragStart : function(component, event, helper) {
        event.dataTransfer.dropEffect = "move";
        var item = component.get('v.item');
        event.dataTransfer.setData('text', JSON.stringify(item.Id));
        var throwarrow = component.getEvent("changeStepIndex");
        var arrow = component.get("v.item");
        throwarrow.setParams({
            "parIndex": arrow
        });
        throwarrow.fire();
	},
    onDrop	:	function(component,event,helper){
        event.preventDefault();
        var stepList = component.get('v.stepList');
        var itemDrag = component.get("v.itemDrag");
        var itemDrop = component.get("v.item");
        var stepListRes =[];
        var itemDragIndex = 0;
        var itemDropIndex = 0;
        itemDropIndex = helper.findIdx(itemDrop,stepList);
        itemDragIndex = helper.findIdx(itemDrag,stepList);
        stepListRes = helper.reOrder(itemDropIndex,itemDragIndex,itemDrop,itemDrag,stepList);
        var throwList = component.getEvent("changeStepList");
        throwList.setParams({
            "parList": stepListRes
        });
        throwList.fire();
        var action = component.get("c.updateOrder");
        console.log('Drop '+itemDrop.Order__c);
        itemDrag.Order__c = itemDrop.Order__c+(1%itemDrop.Order__c);
        console.log('Drag '+itemDrag.Order__c);
        action.setParams({
            "myTCS" : itemDrag
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.stepList", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
    },
    allowDrop : function(component,event,helper){
        event.preventDefault();
    }
})