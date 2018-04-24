({
    findIdx: function findIdx(element,lst){
        for(var h = 0; h < lst.length; h++){
            if(lst[h].Id == element.Id){
                return h;
            }
        }
    },
    reOrder: function reOrder(a,b,i,j,lst){
        var vectorRes =[];
        if(a < b){
            console.log('A < B');
            if(a > -1 && b > -1 && a!=b){
            lst.splice(a,1);
            lst.splice((b-1),1);
            }
            if(a>-1 && a!=b){
                lst.splice(a,0,i);
                lst.splice(a,0,j);
            }
        }
        if(a > b){
            console.log('A > B');
            if(a > -1 && b > -1 && a!=b){
                lst.splice(a,1);
                lst.splice(b,1);
            }
            if(a>-1 && a!=b && a > b){
                lst.splice(a-1,0,j);
                lst.splice(a-1,0,i);
        	}
        }
        for(var h = 0;h<lst.length;h++){
            vectorRes[h] = lst[h];
        }
        return vectorRes;
    }
})