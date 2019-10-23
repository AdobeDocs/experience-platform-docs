# Add data to Real-time Customer Profile

This tutorial covers the following steps for adding Real-time Customer Profile data to Adobe Experience Platform:

Matt

1. [Enable an XDM schema for Real-time Customer Profile](#enable-an-xdm-schema-for-real-time-customer-profile)
2. Upload data to Experience Platform, using one of two options:
    - [Batch ingestion](#add-data-using-batch-ingestion)
    - [Streaming ingestion](#add-data-using-streaming-ingestion)
3. [Confirm that the upload is successful](#confirm-that-the-upload-is-successful)

## Getting started

This tutorial requires a working understanding of the various Adobe Experience Platform services involved in ingesting data into Real-time Customer Profile. Before beginning this tutorial, please review the documentation for the following services:


- [Real-time Customer Profile](../../technical_overview/unified_profile_architectural_overview/unified_profile_architectural_overview.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
- [Identity Service](../../technical_overview/identity_services_architectural_overview/identity_services_architectural_overview.md): Enables Real-time Customer Profile by bridging identities from disparate data sources being ingested into Platform.
- [Experience Data Model (XDM)](../../technical_overview/schema_registry/xdm_system/xdm_system_in_experience_platform.md): The standardized framework by which Platform organizes customer experience data.

This tutorial also requires an understanding of at least one of the methods of data ingestion used to upload data to Platform:

- [Batch ingestion](../../technical_overview/ingest_architectural_overview/ingest_architectural_overview.md): Uploads datafiles to Platform as batch files.
- [Streaming ingestion](../../technical_overview/streaming_ingest/streaming_ingest_overview.md): Sends data to Platform from client- and server-side devices in real time.



## Enable an XDM schema for Real-time Customer Profile

Data being uploaded to Experience Platform for use by Real-time Customer Profile must conform to an XDM schema that is enabled for Profile. In order for a schema to be enabled for Profile, it must implement either the XDM Profile or XDM ExperienceEvent class.

You can enable a schema for use in Real-time Customer Profile using the Schema Registry API or the Schema Editor in the user interface. For detailed instructions on how to do this, please refer to one of the linked tutorial sections below:
 - [Enable an XDM schema using the Schema Registry API](../schema_registry_api_tutorial/schema_registry_api_tutorial.md#enable-schema-for-use-in-real-time-customer-profile)
 - [Enable an XDM schema using the Schema Editor](../schema_editor_tutorial/schema_editor_tutorial.md#use-in-unified-profile-service)

## Add data using batch ingestion

All data uploaded to Platform using batch ingestion is uploaded to individual datasets. Before this data can be used by Real-time Customer Profile, the dataset in question has to be specifically configured. For complete instructions on configuring a dataset for Profile, see the tutorial on [configuring a dataset for Real-time Customer Profile and Identity Service](../unified_profile_dataset_tutorial/unified_profile_dataset_api_tutorial.md).

Once the dataset has been configured, you can start uploading your datafiles. See the [batch ingestion developer guide](../../technical_overview/ingest_architectural_overview/batch_data_ingestion_developer_guide.md) for detailed steps on how to upload files in different formats.

## Add data using streaming ingestion

Any stream-ingested data that is compliant with a Profile-enabled XDM schema will automatically add or overwrite the appropriate record in Real-time Customer Profile. If more than one identity is supplied in the record, or time series data is consumed, those identities will be mapped in the identity graph without additional configuration. See the guide on [getting started with streaming ingestion APIs](../../technical_overview/streaming_ingest/getting_started_with_platform_streaming_ingestion.md) for more details.

## Confirm that the upload is successful

When uploading data to a new dataset for the first time, or as part of a process involving a new ETL or data source, it is recommended to carefully check the data to ensure it has been uploaded correctly. 

Using the Real-time Customer Profile Access API, you can retrieve batch data as it gets loaded into a dataset. If you are unable to retrieve any of the entities you expect, your dataset may not be enabled for Profile. After confirming that your dataset has been enabled, ensure that your source data format and identifiers support your expectations.

For detailed instructions on how to use the Profile Access API, please follow the tutorial on [accessing data in Real-time Customer Profile](../consuming_unified_profile_data/consuming_unified_profile_data.md).
