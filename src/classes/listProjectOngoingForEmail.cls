global class listProjectOngoingForEmail implements Database.Batchable<SObject> , Database.Stateful{

    global Integer recProcessed = 0;
    global String body = '';
    global Integer emailLimit = 0;
    global Integer testCaseCount = 0;

    global Database.QueryLocator start(Database.BatchableContext bc) {
        return Database.getQueryLocator('SELECT Id,Name,Status__c, '+
                                         '(SELECT id '+
                                         'FROM Test_Cases__r) '+
                                         'FROM Project__c '+
                                         'WHERE Status__c = \'Ongoing\''
                                        );
    }
    global void execute(Database.BatchableContext bc, List<Project__c> records){
        for(Project__c rec : records){
            recProcessed++;
            body+='Name : ' + rec.Name + '\n' +
                  'Status : ' + rec.Status__c + '\n' +
                  'Test Cases : ' + rec.Test_Cases__r.size() + '\n' +
                  '========================================' + '\n' ;
        }
    }    
    global void finish(Database.BatchableContext bc){
         System.debug(recProcessed + ' records processed.');
        EmailManager.sendMail('dpineyro@altimetrik.com','Work Items Overdue','Amount of Work Items Overdue: '+recProcessed+body);
        emailLimit = Limits.getEmailInvocations();
        System.debug('Email Invocations Batch:' +emailLimit);
    }   
}