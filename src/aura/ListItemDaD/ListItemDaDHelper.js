({
    findIdx: function findIdx(element,lst){
        for(var h = 0; h < lst.length; h++){
            if(lst[h].Id == element.Id){
                return h;
            }
        }
    },
    reOrder: function reOrder(itemDropIndex,itemDragIndex,itemDrop,itemDrag,stepList){
        var stepListRes =[];
        if(itemDropIndex < itemDragIndex){
            if(itemDropIndex > -1 && itemDragIndex > -1 && itemDropIndex!=itemDragIndex){
            stepList.splice(itemDropIndex,1);
            stepList.splice((itemDragIndex-1),1);
            }
            if(itemDropIndex>-1 && itemDropIndex!=itemDragIndex){
                stepList.splice(itemDropIndex,0,itemDrop);
                stepList.splice(itemDropIndex,0,itemDrag);
            }
        }
        if(itemDropIndex > itemDragIndex){
            if(itemDropIndex > -1 && itemDragIndex > -1 && itemDropIndex!=itemDragIndex){
                stepList.splice(itemDropIndex,1);
                stepList.splice(itemDragIndex,1);
            }
            if(itemDropIndex>-1 && itemDropIndex!=itemDragIndex && itemDropIndex > itemDragIndex){
                stepList.splice(itemDropIndex-1,0,itemDrag);
                stepList.splice(itemDropIndex-1,0,itemDrop);
        	}
        }
        for(var h = 0;h<stepList.length;h++){
            stepListRes[h] = stepList[h];
        }
        return stepListRes;
    },
    onDragStart : function(component) {
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
        var orderNumber = 0;
        itemDropIndex = helper.findIdx(itemDrop,stepList);
        itemDragIndex = helper.findIdx(itemDrag,stepList);
        stepListRes = helper.reOrder(itemDropIndex,itemDragIndex,itemDrop,itemDrag,stepList);
        var throwList = component.getEvent("changeStepList");
        throwList.setParams({
            "parList": stepListRes
        });
        throwList.fire();
        if((itemDropIndex + 1) >= stepList.length){
            console.log('Value of Drop'+(stepList[itemDropIndex].Order__c));
            orderNumber = (stepList[itemDropIndex-1].Order__c+1);
            console.log('Value of Order Number '+orderNumber);
        }
        else{
            if((itemDropIndex-1) < 0){
                orderNumber = (stepList[1].Order__c - 1);
            }else{
                if(itemDragIndex > itemDropIndex){
                    orderNumber = ((stepList[itemDropIndex-1].Order__c+stepList[itemDropIndex].Order__c)/2);
                }
                if(itemDragIndex < itemDropIndex){
                        orderNumber = ((stepList[itemDropIndex+1].Order__c+stepList[itemDropIndex].Order__c)/2);
                }
            }
        }
        console.log(orderNumber);
        var action = component.get("c.updateOrder");
        itemDrag.Order__c = orderNumber;
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
        var throwarrow = component.getEvent("updateStepList");
        var arrow = component.get("v.stepList");
        throwarrow.setParams({
            "parListUpdate": arrow
        });
        throwarrow.fire();
    }
})