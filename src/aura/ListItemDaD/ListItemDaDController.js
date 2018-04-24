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
        var lst = component.get('v.vector');
        var j = component.get("v.itemDrag");
        var i = component.get("v.item");
        var vectorRes =[];
        var a = 0;
        var b = 0;
        a = helper.findIdx(i,lst);
        b = helper.findIdx(j,lst);
       	vectorRes = helper.reOrder(a,b,i,j,lst);
        var throwList = component.getEvent("changeStepList");
        throwList.setParams({
            "parList": vectorRes
        });
        throwList.fire();
    },
    allowDrop : function(component,event,helper){
        event.preventDefault();
    }
})