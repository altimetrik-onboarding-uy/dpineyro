<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <rules>
        <fullName>insertValidationTypeProject</fullName>
        <active>true</active>
        <description>Only Ongoing or Proposed</description>
        <formula>ISPICKVAL(nameProject__r.Status__c, &quot;Ongoing&quot;)  ||  ISPICKVAL(nameProject__r.Status__c, &quot;Proposed&quot;)</formula>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
</Workflow>
