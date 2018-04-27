public	with sharing class ProjectOngoing {
	@AuraEnabled
    public static List<Project__c> getProjectOngoing(){
        List<Project__c> ret = [SELECT Id,Title__c,Name FROM Project__c WHERE Status__c = 'Ongoing'];
        System.debug(ret);
        return ret;
    }
    @AuraEnabled
    public static Project__c getProjectOngoingDetails(String myId){
         return  [SELECT Project__c.Id, Project__c.Title__c, Project__c.Name, Project__c.Owner__c, Project__c.Status__c,
                              (
                                SELECT Test_Case__c.Id,
                                Test_Case__c.Title__c,
                                Name,
                                Test_Case__c.nameProject__c
                                FROM Test_Cases__r
                                ORDER BY LastModifiedDate DESC
                              )
                            FROM Project__c
                            WHERE Project__c.Id = :myId
                            ];
    }

    @AuraEnabled 
    public static void deleteTest(String myId){
            Test_Case__c tes = [SELECT Id FROM Test_Case__c WHERE Test_Case__c.Id = :myId];
            delete tes;
    }
     @AuraEnabled 
    public static Test_Case__c getTest(String myId){
            return [SELECT Id,Name,Title__c,nameProject__c,Description__c,Preconditions__c,URL__c FROM Test_Case__c WHERE Test_Case__c.Id = :myId];
            
    }
    @AuraEnabled
    public static void upsertTestCase(Test_Case__c myTC){
        upsert myTC;
    }
    @AuraEnabled
    public static List<Test_Case_Step__c> listStepCases(String myId){
        return   [SELECT Id,Name,Description__c,expected_result__c,Order__c
                                                FROM Test_Case_Step__c
                                                WHERE Test_Case__r.Id = :myId 
                                                ORDER BY Order__c ASC, LastModifiedDate DESC];
    }
    @AuraEnabled
    public static void updateOrder(Test_Case_Step__c myTCS){
        update myTCS;
    }
}