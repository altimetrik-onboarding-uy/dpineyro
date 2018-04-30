({
	clearForm : function(component) {
		var refreshObj = component.get("v.newTestCase");
				refreshObj.Name='';
				refreshObj.Title__c='';
				refreshObj.Description__c='';
				refreshObj.Preconditions__c='';
				refreshObj.Id=null;
				refreshObj.URL__c='';
                component.set("v.newTestCase", refreshObj);
	}
})