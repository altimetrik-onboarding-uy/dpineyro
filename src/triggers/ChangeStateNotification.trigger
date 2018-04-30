trigger ChangeStateNotification on Project__c (after update) {
    Set<String> validPrevStates = new Set<String>{'Ongoing', 'Proposed'};
    Set<String> validPostStates = new Set<String>{'Cancelled', 'Finished'};
    String body = '';
    for(Project__c p : Trigger.New){
        if( validPrevStates.contains(Trigger.oldMap.get(p.Id).Status__c) ){
            if( validPostStates.contains(p.Status__c) ){
                body = 'This Projects was ' + p.Status__c + ' \n'+
                        'Name : ' + p.Name +'\n'+
                        'Status : ' + p.Status__c +'\n'+
                        'Test Cases : ' + p.Test_Cases__r.size() +'\n'+
                        'Old status :' + Trigger.oldMap.get(p.Id).Status__c;
                EmailManager.sendMail('dpineyro@altimetrik.com','Project '+p.Status__c,'Project ' + p.Name + ' : '+body);
            }
        }
    }
}