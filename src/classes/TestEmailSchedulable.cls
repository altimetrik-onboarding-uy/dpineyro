@isTest
private class TestEmailSchedulable {
	@isTest public static void testEmailSchedulable(){
        String CRON_EXP = '0 00 00 * * ?';
        
        Test.startTest();
        String jobId = System.schedule('jobName', CRON_EXP, new EmailSchedulable());
        Test.stopTest();
        
        CronTrigger ct = [SELECT Id, CronExpression, TimesTriggered, NextFireTime FROM CronTrigger WHERE id =: jobId];    
        System.assertEquals(CRON_EXP,ct.CronExpression);
    }
}