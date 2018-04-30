@isTest
private class TestEmailManager {
    @isTest static void testSendMail(){
        EmailManager.sendMail('dpineyro@altimetrik.com', 'subject', 'body');
    }
}