public	with sharing class ProjectOngoing {
	@AuraEnabled
    public static List<Project__c> getProjectOngoing(){
        List<Project__c> ret = [SELECT Id,Title__c,Name FROM Project__c WHERE Status__c = 'Ongoing'];
        System.debug(ret);
        return ret;
    }
    // blah
    @AuraEnabled
    public static Project__c getProjectOngoingDetails(String myId){
        Project__c ret = [SELECT Project__c.Id, Project__c.Title__c, Project__c.Name, Project__c.Owner__c, Project__c.Status__c,
                              (
                                SELECT Test_Case__c.Id,
                                Test_Case__c.Title__c,
                                Name,
                                Test_Case__c.nameProject__c
                                FROM Test_Cases__r
                                ORDER BY LastModifiedDate DESC
                              )
                            FROM Project__c
                            WHERE Project__c.Status__c = 'Ongoing' and Project__c.Id = :myId
                            ];
        System.debug(ret);
        return ret;
    }

    @AuraEnabled
    public static Map<Id, Test_Case__c> getProjectOngoingDetails1(String myId){
        List<Test_Case__c> testCases = [SELECT  Id, 
                                                Title__c, 
                                                Name, 
                                                nameProject__c,  
                                                nameProject__r.Id, 
                                                nameProject__r.Title__c,
                                                nameProject__r.Name, 
                                                nameProject__r.Owner__c, 
                                                nameProject__r.Status__c 
                                                FROM Test_Case__c 
                                                WHERE nameProject__r.Id = :myId 
                                                AND nameProject__r.Status__c = 'Ongoing'];
        Map<Id, Test_Case__c> testCaseMap = new Map<Id, Test_Case__c>();
        for(Test_Case__c t : testCases){
            testCaseMap.put(t.Id , t);
        }
        return testCaseMap;
    }
    @AuraEnabled
    public static List<Test_Case__c> getTestCaseByProject(String myId){
        List<Test_Case__c> ret = [SELECT Id,Name, nameProject__c, Title__c FROM Test_Case__c  WHERE nameProject__c = :myId ORDER BY Name DESC];
        return ret;
    }
    @AuraEnabled 
    public static void deleteTest(String myId){
        try{
            Test_Case__c tes = [SELECT Id FROM Test_Case__c WHERE Test_Case__c.Id = :myId];
            delete tes;
        }
        catch(DMLException e){
            System.debug('A DML Exception has ocurred : ' + e.getMessage());
        }
    }
}