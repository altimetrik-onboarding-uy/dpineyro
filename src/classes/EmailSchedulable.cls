global class EmailSchedulable implements Schedulable {
    global void execute(SchedulableContext sc){
        listProjectOngoingForEmail b = new listProjectOngoingForEmail();
        database.executeBatch(b);
        System.schedule('Work Items Overdue','0 00 00 * * ?',new EmailSchedulable());
    }
}