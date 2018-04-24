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
        console.log(' itemDrag = '+itemDrag.Id+' / '+' itemDrop = '+itemDrop.Id+' / itemDragIndex ='+itemDragIndex+' / itemDropIndex = '+itemDropIndex);
        throwList.setParams({
            "parList": stepListRes
        });
        throwList.fire();
    },
    allowDrop : function(component,event,helper){
        event.preventDefault();
    }
})