({
	onDragStart : function(component, event, helper) {
        helper.onDragStart(component,event,helper);
	},
    onDrop	:	function(component,event,helper){
       helper.onDrop(component,event,helper);
    },
    allowDrop : function(component,event,helper){
        event.preventDefault();
    },
    editRecord : function(component, event, helper) {
        var editRecordEvent = $A.get("e.force:editRecord");
        editRecordEvent.setParams({
             "recordId": component.get("v.item.Id")
        });
        editRecordEvent.fire();
    }
})