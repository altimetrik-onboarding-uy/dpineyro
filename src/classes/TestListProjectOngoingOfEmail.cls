@isTest
private class TestListProjectOngoingOfEmail {
    @testSetup static void setup() {
        // Create common test accounts
        List<Project__c> testProject = new List<Project__c>();
        List<Test_Case__c> testTestCase = new List<Test_Case__c>();
        List<Test_Case_Step__c> testTestCaseStep = new List<Test_Case_Step__c>();
        
        for(Integer i=0;i<2;i++) {
            testProject.add(new Project__c(Title__c ='test', Name='test', Status__c='Ongoing'));
        }
        insert testProject;  
        
        
        for(Integer j=0;j<2;j++) {
            testTestCase.add(new Test_Case__c(Title__c='test',Description__c='test',Preconditions__c='test',URL__c='test', nameProject__c = testProject[0].Id));
        }
        insert testTestCase; 
        
        
        for(Integer h=0;h<2;h++) {
            testTestCaseStep.add(new Test_Case_Step__c(Description__c = 'test', expected_result__c='test', Order__c=0, Test_Case__c = testTestCase[0].Id ));
        }
        insert testTestCaseStep; 
    }
    @isTest static void start(){
        Test.startTest();
        listProjectOngoingForEmail b = new listProjectOngoingForEmail();
        database.executeBatch(b);
        Test.stopTest();
    }
}