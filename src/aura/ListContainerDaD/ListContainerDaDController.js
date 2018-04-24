({
	onDrag	:	function(component,event,helper){
        var res = event.getParam("parIndex");
        component.set("v.itemDrag", res);
    }
})