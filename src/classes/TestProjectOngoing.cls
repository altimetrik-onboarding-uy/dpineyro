@isTest
private class TestProjectOngoing {
    
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
    
    //OK
    @isTest static void testGetProjectOngoing(){
        Test.startTest();
        List<Project__c> pro = ProjectOngoing.getProjectOngoing();
        Test.stopTest();
        System.assert(pro != null);
    }
    
    //OK
    @isTest static void testListStepCases(){
        List<Test_Case__c> myTestC = [SELECT Id FROM Test_Case__c]; 
        Test.startTest();
        List<Test_Case_Step__c> tes = ProjectOngoing.listStepCases(myTestC[0].Id);
        Test.stopTest();
    }
    
    @isTest static void testGetTest(){
        List<Test_Case__c> myTestC = [SELECT Id FROM Test_Case__c]; 
        Test.startTest();
        Test_Case__c tes = ProjectOngoing.getTest(myTestC[0].Id);
        Test.stopTest();
        
    }
    
    @isTest static void testGetProjectOngoingDetails(){
        List<Project__c> myTest = [SELECT Project__c.Id, Project__c.Title__c, Project__c.Name, Project__c.Owner__c, Project__c.Status__c,
                              (
                                SELECT Test_Case__c.Id,
                                Test_Case__c.Title__c,
                                Name,
                                Test_Case__c.nameProject__c
                                FROM Test_Cases__r
                                ORDER BY LastModifiedDate DESC
                              )
                            FROM Project__c
                            ];
        Project__c pro = ProjectOngoing.getProjectOngoingDetails(myTest[0].Id);
        System.assertEquals(myTest[0], pro);
        
        
    }
    
    
    @isTest static void testDeleteTest(){
        List<Test_Case__c> myTestC = [SELECT Id FROM Test_Case__c]; 
        Test.startTest();
        ProjectOngoing.deleteTest(myTestC[0].Id);
        Test.stopTest();
    }
    
    
    
    @isTest static void testUpsertTestCase(){
        List<Test_Case__c> myTestCC = [SELECT Id FROM Test_Case__c]; 
        Test.startTest();
        ProjectOngoing.upsertTestCase(myTestCC[0]);
		Test.stopTest();
    }
    
    @isTest static void testUpdateOrder(){
        List<Test_Case_Step__c> tes = [SELECT Id FROM Test_Case_Step__c Limit 1];
        System.assert(tes.size() != 0);
        Test.startTest();
        ProjectOngoing.updateOrder(tes[0]);
        Test.stopTest();
    }
}