# Subscribe to Privacy Service event notifications

> **Note:** The functionalities described in this document are currently in beta and will be publicly available as part of the July 25, 2019 release.

Adobe Experience Platform Privacy Service event notifications are messages that leverage Adobe I/O Events sent to a configured webhook to facilitate efficient job request automation. They reduce or eliminate the need to poll the API in order to check if a job is complete or if a certain milestone within a workflow has been reached.

There are currently four types of notifications related to the GDPR job request lifecycle:

Type | Description
--- | ---
Job Complete | All Experience Cloud solutions have reported back and the overall or global status of the job has been marked as complete.
Job Error | One or more solutions have reported an error while processing the request.
Product Complete | One of the solutions associated with this job has completed its work.
Product Error | One of the solutions reported an error while processing the request.

This document provides steps for setting up an integration for Privacy Service notifications within Adobe I/O.

## Getting started

This tutorial uses **ngrok**, a software product which exposes local servers to the public internet through secure tunnels. Please [install ngrok](https://ngrok.com/download) before starting this tutorial in order to follow along and create a webhook to your local machine. This guide also requires you to have a GIT repository downloaded that contains a simple server written in [Node.js](https://nodejs.org/).

## Create a local server

Using the command line, navigate to the root directory of your Node.js server. Then, type the following commands:

1. `npm install`
1. `npm start`

These commands install all dependencies and initialize the server. If successful, you can find your server running at http://localhost:3000/.

## Create a webhook using ngrok

Within the same directory and in a new command line window, type the following command:

```shell
ngrok http -bind-tls=true 3000
```

A successful output looks similar to the following:

![ngrok output](images/ngrok-output.png)

Take note of the `Forwarding` URL (`https://e142b577.ngrok.io`), as this will be used to identify your webhook the next step.

## Create a new integration using Adobe I/O Console

Navigate to https://console.adobe.io and click **View Integrations**.

![View Integrations in Adobe I/O Console](images/view-integrations.png)

The *Integrations* page appears. From here, click **New Integration**.

![New Integration](images/new-integration.png)

The *Create a new integration* window appears. Select **Receive near-real time events**, then click **Continue**.

![Create new integration](images/create-new-integration.png)

The next screen provides options to create integrations with different events, products, and services available to your organization based on your subscriptions, entitlements, and permissions. For this integration, select **GDPR Events**, then click **Continue**.

![Select GDPR Events](images/gdpr-events-integration.png)

The *Integration Details* form appears, requiring you to provide a name and description for the integration, as well as a public key certificate.

![Integration details](images/integration-details.png)

If you do not have a public key, you can generate one by using the following terminal command:

```shell
openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout private.key -out certificate_pub
```

Once you have generated a key, drag and drop the file into the **Public keys certificates** box, or click **Select a File** to browse your file directory and select the key directly.

After adding your certificate, the *Event Registration* option appears. Click **Add Event Registration**.

![Add Event Registration](images/add-event-registration.png)

The dialog expands to show additional controls. Here you can select your desired event types and register your webhook. Enter a name for the Event Registration, the webhook URL (the `Forwarding` address returned when you initially [created the webhook](#create-a-webhook-using-ngrok)), as well as a brief description. Finally, select the event types you wish to subscribe to, then click **Save** to complete the I/O integration.

![Event Registration form](images/event-registration-form.png)

Once the Event Registration form is completed, click **Create integration** and the I/O integration will be complete.

![Create integration](images/create-integration.png)

## View event data

Once you have created your I/O integration and GDPR jobs have been processed, you can view any received notifications from the **Integrations** tab in I/O Console. Navigate to your event registration and click **View**.

![View Event Registration](images/view-event-registration.png)

The *Event Details* window appears, allowing you to view more information about the registration, edit its configuration, or view the actual events that were received since activating your webhook. You can view event details as well as nagivate to the **Debug Tracing** option.

![Debug Tracing](images/debug-tracing.png)

The **Payload** section provides details about the selected event, including its event type (`"com.adobe.platform.gdpr.productcomplete"`) as highlighted in the example above.

## Next steps

You can repeat the above steps for adding new integrations for different webhook addresses as needed.