({
    findIdx: function findIdx(element,lst){
        for(var h = 0; h < lst.length; h++){
            if(lst[h].Id == element.Id){
                return h;
            }
        }
    },
    //vectorRes = helper.reOrder(itemDropIndex,itemDragIndex,itemDrop,itemDrag,lst);
    reOrder: function reOrder(itemDropIndex,itemDragIndex,itemDrop,itemDrag,listSteps){
        var vectorRes =[];
        if(itemDropIndex < itemDragIndex){
            if(itemDropIndex > -1 && itemDragIndex > -1 && itemDropIndex!=itemDragIndex){
            listSteps.splice(itemDropIndex,1);
            listSteps.splice((itemDragIndex-1),1);
            }
            if(itemDropIndex>-1 && itemDropIndex!=itemDragIndex){
                listSteps.splice(itemDropIndex,0,itemDrop);
                listSteps.splice(itemDropIndex,0,itemDrag);
            }
        }
        if(itemDropIndex > itemDragIndex){
            if(itemDropIndex > -1 && itemDragIndex > -1 && itemDropIndex!=itemDragIndex){
                listSteps.splice(itemDropIndex,1);
                listSteps.splice(itemDragIndex,1);
            }
            if(itemDropIndex>-1 && itemDropIndex!=itemDragIndex && itemDropIndex > itemDragIndex){
                listSteps.splice(itemDropIndex-1,0,itemDrag);
                listSteps.splice(itemDropIndex-1,0,itemDrop);
        	}
        }
        for(var h = 0;h<listSteps.length;h++){
            vectorRes[h] = listSteps[h];
        }
        return vectorRes;
    }
})