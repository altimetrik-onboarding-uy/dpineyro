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
    }
})