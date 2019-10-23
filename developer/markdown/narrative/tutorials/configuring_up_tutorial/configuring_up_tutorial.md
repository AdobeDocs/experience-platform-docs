# Configuring Unified Profile via API

## Overview

This tutorial guides you through the various aspects of configuring [Unified Profile](../../technical_overview/unified_profile_architectural_overview/unified_profile_architectural_overview.md) for your organization, using the RESTful services provided via Adobe Experience Platform solutions APIs. The combination of these services provides control over the the way Unified Profile behaves in your Experience Platform infrastructure. 

---

## Configuring Unified Profile and Identity Service

The following are required for Unified Profile workflows.

[Configure datasets for Unified Profile and Identity Service](../unified_profile_dataset_tutorial/unified_profile_dataset_api_tutorial.md) - A separate tutorial, covers the requirements for enabling a dataset to serve as a data source for Unified Profile and Identity Service.  
[Enable XDM schemas for Unified Profile and Identity Service](../schema_registry_api_tutorial/schema_registry_api_tutorial.md#enable-schema-for-use-in-unified-profile-service) - For an XDM schema to contribute to the unified view, it must be enabled for Unified Profile and Identity Service.  
[Configure merge policies for use in data access](configuring_merge_policies_tutorial.md) - A component of Unified Profile, merge policies provides rules for many aspects of data merging and building the union view.  
[Configure Edge destinations and projections](configuring_edge_tutorial.md) - Edge Service is a component of Unified Profile that serves as a framework for low-latency data collection and rapid data activation.  

---

## Next topics

[Adding data to Unified Profile](../adding_data_to_unified_profile/adding_data_to_unified_profile.md)  
[Consuming Unified Profile data](../consuming_unified_profile_data/consuming_unified_profile_data.md)  
[Creating audience segments](../creating_a_segment_tutorial/creating_a_segment_tutorial.md)
