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
        var listSteps = component.get('v.vector');
        var itemDrag = component.get("v.itemDrag");
        var itemDrop = component.get("v.item");
        var vectorRes =[];
        var itemDragIndex = 0;
        var itemDropIndex = 0;
        itemDropIndex = helper.findIdx(itemDrop,listSteps);
        itemDragIndex = helper.findIdx(itemDrag,listSteps);
       	vectorRes = helper.reOrder(itemDropIndex,itemDragIndex,itemDrop,itemDrag,listSteps);
        var throwList = component.getEvent("changeStepList");
        console.log(' itemDrag = '+itemDrag.Id+' / '+' itemDrop = '+itemDrop.Id+' / itemDragIndex ='+itemDragIndex+' / itemDropIndex = '+itemDropIndex);
        throwList.setParams({
            "parList": vectorRes
        });
        throwList.fire();
    },
    allowDrop : function(component,event,helper){
        event.preventDefault();
    }
})