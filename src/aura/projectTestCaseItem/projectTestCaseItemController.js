({
	testItemDelet: function(component, event, helper){
		var ammunition = component.get("v.testCaseItem");
		var toFire = component.getEvent('deleteItemEvent');
		toFire.setParams({
			"parDelete": ammunition
		});
		console.log('##', JSON.parse(JSON.stringify(ammunition)));
		console.log("Fire on the hold");
		toFire.fire();
	},
	formUpSert: function(component, event, helper){
		var arrow = component.get("v.testCaseItem");
		var send = component.getEvent('ItemUpSert');
		console.log('##',JSON.parse(JSON.stringify(arrow)));
		send.setParams({
			"parUpsert": arrow
		});
		console.log('fire on the hold');
		send.fire();
	}
})