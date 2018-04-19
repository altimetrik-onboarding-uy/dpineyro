({
    clickDetails: function(component,event,helper){
        var actPar = component.get("v.projectItem");
        var cmpAct = component.getEvent("projectDetailsEvent");
        cmpAct.setParams({
            "paramDet": actPar
        });
        //console.log('##', JSON.parse(JSON.stringify()));
        cmpAct.fire();
    }
})