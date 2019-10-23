<!--CORE-32502 Wrong document for replacing a merge policy-->
# Work with merge policies using APIs

This document provides a tutorial for working with merge policies using Adobe Experience Platform APIs. The tutorial covers the following use cases:

- [Access merge policies](#access-merge-policies)
- [Create a merge policy](#create-a-merge-policy)
- [Update an existing merge policy](#update-a-merge-policy)
    - [Edit individual merge policy fields](#edit-individual-merge-policy-fields)
    - [Overwrite a merge policy](#overwrite-a-merge-policy)

## Getting started

This tutorial requires a working understanding of the various Experience Platform services involved with merge policies. Before beginning this tutorial, please review the documentation for the following services:

- [Real-time Customer Profile](../../technical_overview/unified_profile_architectural_overview/unified_profile_architectural_overview.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
- [Identity Service](../../technical_overview/identity_services_architectural_overview/identity_services_architectural_overview.md): Enables Real-time Customer Profile by bridging identities from disparate data sources being ingested into Platform.
- [Experience Data Model (XDM)](../../technical_overview/schema_registry/xdm_system/xdm_system_in_experience_platform.md): The standardized framework by which Platform organizes customer experience data.

## Tutorial

This tutorial requires you to have completed the
[Authentication to Adobe Experience Platform tutorial](../authenticate_to_acp_tutorial/authenticate_to_acp_tutorial.md) in order to successfully make calls to Platform APIs. Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

* Authorization: Bearer `{ACCESS_TOKEN}`
* x-api-key: `{API_KEY}`
* x-gw-ims-org-id: `{IMS_ORG}`

All POST, PUT, and PATCH requests require an additional header:

* Content-Type: application/json


<!-- 

--------
--------
I feel like this content should be prerequisite material for this tutorial (like Profile and Identity Service), since it's not really explaining how to *do* something. At the same time though, there's some info here not really found anywhere else. Might warrant its own doc, or use it to enhance the merge policies section in the Unified Profile overview doc.
--------
--------

 ## Components of merge policies

Merge policies are private to an organization, allowing you to create different policies for merging different schemas in the ways you need. Any API to access Unified Profile data requires a merge policy, though a default will be used if one is not explicitly provided. Platform provides a default merge policy, or you can create a merge policy and mark it as your organization's default per an XDM schema.

Unified Profile [Configuration API](../../../../../../acpdr/swagger-specs/profile-config-api.yaml) services use various objects which are described in this section.

### Identity graph

Identity Service manages the identity graphs used globally and for each organization on Experience Platform. `IdentityGraph` defines how to determine the related identities for a user.

__`IdentityGraph` object__

```
{
    "type": "{IDENTITY_GRAPH_TYPE}"
}
```

Where `{IDENTITY_GRAPH_TYPE}` is one of the following:

* None - Perform no identity stitching.
* Private Graph - Perform identity stitching based on your private identity graph. If no `graph-type` is provided, this is the default.

__Example `IdentityGraph`__

```
{
    "type": "auto"
}
```

###  Attribute merge

A profile fragment is the profile information we have for just one identity out of the list of identities that you have for a particular user. When the identity graph type used results in more than one identity, the potential for conflicting values for profile properties, where priority must be specified. Using `AttributeMerge`, you specify which dataset profile's values to use.

__`AttributeMerge` object__

```
{
    "type": "{ATTRIBUTE_MERGE_TYPE}",
    "data": "{ATTRIBUTE_MERGE_TYPE_SUPPORTING_DATA}"
}
```

Where `{ATTRIBUTE_MERGE_TYPE}` is one of the following:

* __"timestampOrdered"__ : (default) Give priority to the profile which was updated last in case of conflict. Using this merge type, the `data` attribute is not required.
* __"dataSetPrecedence"__ : Give priority to profile fragments based on the dataset from which they came. This is for the use case where client trusts information present in one data set over other. This type requires list of datasets to be provided in data field. Any datasets not included in the list will not be merged. In other words, datasets must be explicitly listed in order to be merged into a unified profile. Using this merge type, the `data` attribute is required, as it lists the datasets in the order of priority.

The value for `{ATTRIBUTE_MERGE_TYPE_SUPPORTING_DATA}` depends on the value indicated for `{ATTRIBUTE_MERGE_TYPE}`.

__Example `AttributeMerge` object using `dataSetPrecedence` type__

```
{
    "type":"dataSetPrecedence", 
     "data": {
         "order" : ["dataSetId1", "dataSetId2"]
     }
}
```

__Example `AttributeMerge` object using `timestampOrdered` type__

```
{
    "type":"timestampOrdered"
}
```

### Schema

The `Schema` object specifies the XDM schema for which this merge policy is created.

__`Schema` object__

```
{
    "name": "{SCHEMA_NAME}"
}
```

Where the value of `name` is the fully qualified name of the XDM schema class associated with the merge policy.

__Example `Schema`__ 

```
{
    "name":"_xdm.context.profile" 
}
```

### Merge policy

The `MergePolicy` object represents a set of preferences controlling aspects of merging profile fragments. Each organization can potentially have multiple merge policies per schema. Any merge policy set as default will be used in use cases where merge policy is required but not provided and only schema is provided.

For your organization, each schema can have only one default merge policy. When you create or make a merge policy default, any existing default merge policy will automatically no longer be used by default.

__`MergePolicy` object__

```
{
    "id": "{MERGE_POLICY_ID}",
    "name": "{HUMAN_FRIENDLY_NAME}",
    "imsOrgId": "{ORGANIZATION_ID}",
    "identityGraph": "{IDENTITY_GRAPH_OBJECT}",
    "attributeMerge": "{ATTRIBUTE_MERGE_OBJECT}",
    "schema": "{SCHEMA_OBJECT}", 
    "default": "{IS_DEFAULT}",
    "version": "{VERSION}",
    "updateEpoch": "{UPDATE_TIME}"
}
```

Where the values are as follows:

|Attribute|Description|
|---|---|
|`id`|The system generated unique identifier assigned at creation time|
|`name`|Human friendly name by which the merge policy can be identified in list views.|
|`imsOrgId`|Organization ID to which this merge policy belongs|
|`identityGraph`|[`IdentityGraph`](#identitygraph) object indicating the identity graph from which related identities will be obtained. Profile fragments found for all related identities will be merged.|
|`attributeMerge`|[`AttributeMerge`](#attributemerge) object indicating the manner by which the merge policy will prioritize profile attribute values in the case of data conflicts.|
|`schema`|The [`Schema'](#schema) object on which the merge policy can be used.|
|`default`|Boolean (true/false) value indicating if this merge policy is the default for the specified schema.|
|`version`|Platform maintained version of merge policy, which is incremented whenever a merge policy is updated.|
|`updateEpoch`|Date of the last update to the merge policy.|

__Example `MergePolicy`__

```
{
    "id": "10648288-cda5-11e8-a8d5-f2801f1b9fd1",
    "name": "unified-profile-default",
    "imsOrgId": "1BD6382559DF0C130A49422D@AdobeOrg",
    "schema": {
        "name": "_xdm.context.profile"
    },
    "version": 1,
    "identityGraph": {
        "type": "auto"
    },
    "attributeMerge": {
        "type": "timestampOrdered"
    },
    "default": true,
    "updateEpoch": 1551660639
}
``` 
-->

## Access merge policies

Using the [Profile Configuration API](../../../../../../acpdr/swagger-specs/profile-config-api.yaml), you can access a specific merge policy by its ID, or list all of the merge policies in effect for your IMS Organization, filtered by specific criteria.

### Access a single merge policy by ID

Using the API, you can access a single merge policy by its ID.

#### API format

```http
GET /mergePolicies/{mergePolicyId}
```

* `{mergePolicyId}`: The identifier of the merge policy you want to access.

#### Request

```shell
curl -X GET \
  'https://platform.adobe.io/data/core/ups/config/mergePolicies/10648288-cda5-11e8-a8d5-f2801f1b9fd1' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}'
```

#### Response

A successful response returns the details of the merge policy.

```json
{
    "id": "10648288-cda5-11e8-a8d5-f2801f1b9fd1",
    "imsOrgId": "{IMS_ORG}",
    "schema": {
        "name": "_xdm.context.profile"
    },
    "version": 1,
    "identityGraph": {
        "type": "none"
    },
    "attributeMerge": {
        "type": "timestampOrdered"
    },
    "default": false,
    "updateEpoch": 1551127597
}
```

### List multiple merge policies by criteria

You can list multiple merge policies within your IMS Organization, using query parameters to filter, order, and paginate the response.

#### API format

```http
GET /mergePolicies?{QUERY_PARAMS}
```

* `{QUERY_PARAMS}`: (Optional) Parameters added to the request path which configure the results returned in the response. Multiple parameters can be included, separated by ampersands (`&`). Available parameters are listed in the next section below.

**Query parameters**

The following is a list of available query parameters for listing merge policies. All of these parameters are optional. Making a call to this endpoint with no parameters will retrieve all merge policies available for your organization.

|Parameter|Description|
|---|---|
|`default`|Filters results by whether the merge policies are default for a schema class. (*Boolean*)|
|`limit`|Specifies the page size limit to control the number of results that are included in a page. (*Default value: 20*)|
|`orderBy`|Specifies the field by which to order results as in `orderBy=name` or `orderBy=+name` to sort by name in ascending order, or `orderBy=-name`, to sort in descending order. Omitting this value results in the default sorting of `name` in ascending order.|
|`schema.name`|Name of the schema for which to retrieve available merge policies.|
|`identityGraph.type`|Filters results by the identity graph.|
|`attributeMerge.type`|Filters results by the attribute merge type used.|
|`start`|Page offset - specify the starting ID for data to retrieve.  (*Default value: 0*)|
|`version`|Specify this if you are looking to use a specific version of the merge policy. By default, the latest version will be used.|

#### Request

The following request lists all merge policies for a given schema:

```shell
curl -X GET \
  'https://platform.adobe.io/data/core/ups/config/mergePolicies?schema.name=_xdm.context.profile' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}'
```

#### Response

A successful response returns a paginated list of merge policies that fit within the criteria specified by the query parameters sent in the request (if any were included).

```json
{
    "_page": {
        "count": 2,
        "next": "K1JJRDpFaWc5QUpZWHY1c2JBQUFBQUFBQUFBPT0jUlQ6MSNUUkM6MiNGUEM6QWdFQUFBQldBQkVBQVBnaFFQLzM4VUIvL2tKQi8rLysvMUpBLzMrMi8wRkFmLzR4UUwvL0VrRC85em4zRTBEcmNmYi92Kzh4UUwvL05rQVgzRi8rMStqNS80WHQwN2NhUUVzQUFBUUFleGpLQ1JnVXRVcEFCQUFFQVBBRA=="
    },
    "children": [
        {
            "id": "unified-profile-default",
            "name": "unified-profile-default",
            "imsOrgId": "{IMS_ORG}",
            "schema": {
                "name": "_xdm.context.profile"
            },
            "version": 1,
            "identityGraph": {
                "type": "auto"
            },
            "attributeMerge": {
                "type": "timestampOrdered"
            },
            "default": true,
            "updateEpoch": 1551660639
        },
        {
            "id": "timestampOrdered-pdg-mp",
            "name": "timestampOrdered-pdg-mp",
            "imsOrgId": "{IMS_ORG}",
            "schema": {
                "name": "_xdm.context.profile"
            },
            "version": 1,
            "identityGraph": {
                "type": "Private Graph"
            },
            "attributeMerge": {
                "type": "timestampOrdered"
            },
            "default": false,
            "updateEpoch": 1551661137
        }
    ],
    "_links": {
        "next": {
            "href": "@/mergePolicies?start=K1JJRDpFaWc5QUpZWHY1c2JBQUFBQUFBQUFBPT0jUlQ6MSNUUkM6MiNGUEM6QWdFQUFBQldBQkVBQVBnaFFQLzM4VUIvL2tKQi8rLysvMUpBLzMrMi8wRkFmLzR4UUwvL0VrRC85em4zRTBEcmNmYi92Kzh4UUwvL05rQVgzRi8rMStqNS80WHQwN2NhUUVzQUFBUUFleGpLQ1JnVXRVcEFCQUFFQVBBRA==&orderBy=&limit=2"
        }
    }
}
```

* `_links > next > href`: A URI address for the next page of results. Use this URI as the request parameters for another API call to the same endpoint to view the page. If no next page exists, this value will be an empty string.

## Create a merge policy

You can create a new merge policy for your organization by using the [Profile Configuration API](../../../../../../acdpr/swagger-specs/profile-config-api.yaml).

#### API format

```http
POST /mergePolicies
```

#### Request
This request creates a new merge policy, which is configured by the attribute values provided in the payload:

```shell
curl -X POST \
  https://platform.adobe.io/data/core/ups/config/mergePolicies \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "All-ID-Order-By-CMS-Loyalty",
    "identityGraph" : {
        "type": "auto"
    },
    "attributeMerge" : {
        "type":"dataSetPrecedence",
        "data": {
            "order" : [
                "5b020a27e7040801dedbf46e",
                "5b565efc0a488f01e2c19972"
            ]
        }
    },
    "schema": {
        "name":"_xdm.context.profile"
    },
    "default": true
}'
```
* `name`: *(Optional)* A human-friendly name by which the merge policy can be identified in list views.
* `identityGraph`: The identity graph from which to obtain related identities to merge.
* `attributeMerge`: The manner by which to prioritize profile attribute values in the case of data conflicts.
* `schema`: The XDM schema class associated with the merge policy.
* `default`: *(Optional)* Specifies whether this merge policy is the default for the schema.

#### Response

A successful response returns the details of the newly created merge policy.

```json
{
    "id": "e5bc94de-cd14-4cdf-a2bc-88b6e8cbfac2",
    "name": "All-ID-Order-By-CMS-Loyalty",
    "imsOrgId": "{IMS_ORG}",
    "schema": {
        "name": "_xdm.context.profile"
    },
    "version": 1,
    "identityGraph": {
        "type": "none"
    },
    "attributeMerge": {
        "type":"dataSetPrecedence",
        "data": {
            "order" : [
                "5b020a27e7040801dedbf46e",
                "5b565efc0a488f01e2c19972"
            ]
        }
    },
    "default": true,
    "updateEpoch": 1551898378
}
```

## Update a merge policy

You can modify an existing merge policy by editing individual attributes (PATCH) or by overwriting the entire merge policy with new attributes (PUT). Examples of each are shown below.

### Edit individual merge policy fields

You can edit individual fields for a merge policy by making a PATCH request to the [Profile Configuration API](../../../../../../acdpr/swagger-specs/profile-config-api.yaml):

#### API format

```http
PATCH /mergePolicies/{mergePolicyId}
```

* `{mergePolicyId}`: The identifier of the merge policy you want to update.

#### Request

The following request updates a specified merge policy by changing the value of its `default` property to "true":

```shell
curl -X PATCH \
  https://platform.adobe.io/data/core/ups/config/mergePolicies/e5bc94de-cd14-4cdf-a2bc-88b6e8cbfac2 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'Content-Type: application/json' \
  -d '{
    "op": "add",
    "path": "/default",
    "value": "true"
  }'
```

* `op`: Specifies the operation to take. Examples of other PATCH operations can be found in the [JSON Patch documentation](http://jsonpatch.com).
* `path`: The path of the field to update. Accepted values are: 
    - "/name"
    - "/identityGraph.type"
    - "/attributeMerge.type"
    - "/schema.name"
    - "/version"
    - "/default"
* `value`: The value to set the specified field to.

#### Response

A successful response returns the details of the newly updated merge policy.

```json
{
  "imsOrgId": "{IMS_ORG}",
  "schema": {
    "name": "_xdm.context.profile"
  },
  "name": "All-ID-Order-By-CMS-Loyalty",
  "id": "e5bc94de-cd14-4cdf-a2bc-88b6e8cbfac2",
  "identityGraph": {
    "type": "auto"
  },
  "attributeMerge": {
    "type": "dataSetPrecedence",
    "data": {
      "order": [
        "5b020a27e7040801dedbf46e",
        "5b565efc0a488f01e2c19972"
      ]
    }
  },
  "default": true,
  "version": 1,
  "updateEpoch": 1551898378
}
```
### Overwrite a merge policy

Another way to modify a merge policy is to use a PUT request, which overwrites a merge policy. 

#### API format

```http
PUT /mergePolicies/{mergePolicyId}
```

* `{mergePolicyId}`: The identifier of the merge policy you want to overwrite.

#### Request

The following request overwrites the specified merge policy, replacing its attribute values with those supplied in the payload. Since this request completely replaces an existing merge policy, you are required to supply all of the same fields that were required when originally defining the merge policy. However, this time you are providing updated values for each field.

```shell
curl -X PUT \
  https://platform.adobe.io/data/core/ups/config/mergePolicies/b83185bb-0bc6-489c-9363-0075eb30b4c8 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H `Content-Type: application/json` \
  -d '{
    "name": "All-ID-Order-By-CMS-Loyalty",
    "identityGraph": {
        "type": "auto"
    },
    "attributeMerge": {
        "type": "dataSetPrecedence",
        "order": [
            "5bb5331a94ef7e000091b1d4",
            "5a909a508db82e01d6654940"
        ]
    },
    "schema": {
        "name": "_xdm.context.profile"
    },
    "default": true,
    "version": 1,
    "updateEpoch": 1559156392,
    "imsOrgId": "{IMS_ORG}"
}'
```
* `name`: *(Optional)* A human-friendly name by which the merge policy can be identified in list views.
* `identityGraph`: The identity graph from which to obtain related identities to merge.
* `attributeMerge`: The manner by which to prioritize profile attribute values in the case of data conflicts.
* `schema`: The XDM schema class associated with the merge policy.
* `default`: *(Optional)* Specifies whether this merge policy is the default for the schema.

#### Response

A successful response returns the details of the updated merge policy.

```json
{
    "id": "b83185bb-0bc6-489c-9363-0075eb30b4c8",
    "name": "All-ID-Order-By-CMS-Loyalty",
    "imsOrgId": "{IMS_ORG}",
    "schema": {
        "name": "_xdm.context.profile"
    },
    "version": 1,
    "identityGraph": {
        "type": "auto"
    },
    "attributeMerge": {
        "type":"dataSetPrecedence",
        "order" : [
            "5b020a27e7040801dedbf46e",
            "5b565efc0a488f01e2c19972"
        ]
    },
    "default": true,
    "updateEpoch": 1551898378
}
```

## Next steps

Now that you have created and configured merge policies for your IMS Organization, you can use them to create audience segments from your Real-time Customer Profile data. See the [Create a segment tutorial](../creating_a_segment_tutorial/creating_a_segment_tutorial.md) for more information.