# GDPR FAQ

The following is a list of answers to frequently asked questions about the General Data Protection Regulation (GDPR) and its implementation in Adobe Experience Cloud.

Definitions for the various GDPR-related terms used in this document can be found in the [GDPR terminology](gdpr-terminology.md) article.

* [Who does the GDPR affect?](#who-does-the-gdpr-affect-)
* [What are the penalties for non-compliance?](#what-are-the-penalties-for-non-compliance-)
* [What constitutes personal data?](#what-constitutes-personal-data-)
* [What is the difference between a data processor and a data controller?](#what-is-the-difference-between-a-data-processor-and-a-data-controller-)
* [What is the difference between explicit and unambiguous data subject consent?](#what-is-the-difference-between-explicit-and-unambiguous-data-subject-consent-)
* [Can data subjects under the age of 16 give consent?](#can-data-subjects-under-the-age-of-16-give-consent-)
* [What is the difference between a regulation and a directive?](#what-is-the-difference-between-a-regulation-and-a-directive-)
* [Does my business need to appoint a data protection officer (DPO)?](#does-my-business-need-to-appoint-a-data-protection-officer--dpo--)
* [How does GDPR affect policy surrounding data breaches?](#how-does-gdpr-affect-policy-surrounding-data-breaches-)
* [How do I get information about the status of my GDPR request or job?](#how-do-i-get-information-about-the-status-of-my-gdpr-request-or-job-)
* [How do I download the results of my completed GDPR jobs?](#how-do-i-download-the-results-of-my-completed-gdpr-jobs-)


## Who does the GDPR affect?

GDPR applies to all organizations that store and process the personal data of citizens within the European Union, regardless of the company's geographic location.

## What are the penalties for non-compliance?

Organizations that breach GDPR can be fined up to 4% of annual global revenue or €20 million, whichever is greater. This is the maximum fine that can be imposed for the most serious infringements, such as not having sufficient customer consent to process data or violating the core of privacy-by-design concepts. 

There is a tiered approach to fines. For example, a company can be fined 2% for not having their records in order ([Article 28](http://www.privacy-regulation.eu/en/article-28-processor-GDPR.htm)), not notifying the supervising authority and data subject about a breach or not conducting impact assessment. It is important to note that these rules apply to both data controllers and data processors, meaning "clouds" will not be exempt from GDPR enforcement.

## What constitutes personal data?

Personal data is any information related to a natural person or data subject that can be used to directly or indirectly identify the person. It can be anything from a name, a photo, an email address, bank details, posts on social networking websites, medical information, or a computer IP address.

## What is the difference between a data controller and a data processor?

A **data controller** is the entity that determines the purposes, conditions and means of processing personal data, while the **data processor** is an entity which processes personal data on behalf of the data controller.

## What is the difference between explicit and unambiguous data subject consent?

GDPR strengthens the conditions for valid data subject consent. Companies can no longer offer terms and conditions that are difficult to comprehend, as the request for consent must be given in an intelligible and easily accessible form. The purpose for data processing must be unambiguously stated in the request to gain consent from the data subject.

**Explicit consent** must be clear and distinguishable from other matters, provided in an intelligible and easily accessible form, using plain language. In addition, it must be as easy to withdraw consent as it is to give it.​ Explicit consent is required only for processing sensitive personal data, where nothing short of “opt in” will suffice. For non-sensitive data, however, **unambiguous consent** is acceptable.

## Can data subjects under the age of 16 give consent?

Parental consent is required to process the personal data of children under the age of 16 for online services. Member states may legislate for a lower age of consent, but not below the age of 13.

## What is the difference between a regulation and a directive?

A **regulation** is a binding legislative act and must be applied in its entirety across the EU. A **directive** is a legislative act that sets out a goal that all EU countries must achieve, but it is up to the individual countries to decide how.

It is important to note that the GDPR is a regulation, in contrast the the previous legislation (the Data Protection Directive), which is a directive.

## Does my business need to appoint a data protection officer (DPO)?

An organization must appoint a data protection officer in the following cases:
* The organization is a public authority
* The organization engages in large-scale systematic monitoring
* The organization engages in large-scale processing of sensitive personal data.

## How does GDPR affect policy surrounding data breaches?

Proposed regulations surrounding data breaches primarily relate to the notification policies of companies that have been breached. Data breaches which may pose a risk to individuals must be notified to the data protection authority within 72 hours and to affected individuals without undue delay.

## How do I get information about the status of my GDPR request or job?

You can retrieve details about a particular job by using the Adobe Experience Platform Privacy Service API or user interface.

### Using the API

To retrieve the status of a particular job using the Privacy Service API, make a request to the root (`GET /`) endpoint, using the job's ID in the request path. For more details, see the section on [checking the status of a job](../tutorials/privacy_service_tutorial/privacy_service_api_tutorial.md) in the Privacy Service API tutorial.

### Using the UI

All active job requests are listed in the **Job Requests** widget on the Privacy Service UI dashboard. The status for each job request is displayed under the **Status** column. For more information on viewing job requests in the UI, please see the [Privacy Service UI tutorial](../tutorials/privacy_service_tutorial/privacy_service_ui_tutorial.md).

## How do I download the results of my completed GDPR jobs?

The Adobe Experience Platform Privacy Service API and user interface both provide methods for downloading the results of completed jobs in ZIP format.

### Using the API

Make a request to the root (`GET /`) endpoint in the Privacy Service API, using the ID of the job whose results you want to download in the request path. If the job's status is complete, the API will include a `downloadURL` attribute in the response body. This attribute contains a URL that you can paste into the address bar of your browser to download the ZIP file.

For more details, see the section on [looking up a job by its ID](../tutorials/privacy_service_tutorial/privacy_service_api_tutorial.md#check-the-status-of-a-job) in the Privacy Service API tutorial.

### Using the UI

On the Privacy Service UI dashboard, find the job you want to download from the **Job Requests** widget. Click the ID of the job to open the *Job Details* page. From here, click **Download** in the top-right corner to download the ZIP file. See the [Privacy Service UI tutorial](../tutorials/privacy_service_tutorial/privacy_service_ui_tutorial.md) for more detailed steps.