# Configure edge destinations and projections using APIs

This document provides a tutorial for configuring edge destinations and projections using Adobe Experience Platform APIs. This tutorial covers only some of the Edge Profile Projection Configuration API. For a comprehensive list of endpoints, see the [API Reference](../../../../../../acpdr/swagger-specs/edge-profile-projection-config.yaml).

The tutorial covers the following steps:

1. [List existing destinations](#list-destinations)  
1. [Create a destination](#create-a-destination)  
1. [List projection configurations](#list-projection-configurations)  
1. [Create a projection configuration](#create-a-projection-configuration)

## Getting started

This tutorial requires a working understanding of the Experience Platform services involved in edge destinations and projections. Before beginning this tutorial, please review the documentation for the following services:

- [Real-time Customer Profile](../../technical_overview/unified_profile_architectural_overview/unified_profile_architectural_overview.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
- [Experience Data Model (XDM)](../../technical_overview/schema_registry/xdm_system/xdm_system_in_experience_platform.md): The standardized framework by which Platform organizes customer experience data.

## Tutorial

This tutorial requires you to have completed the [Authentication to Adobe Experience Platform tutorial](../authenticate_to_acp_tutorial/authenticate_to_acp_tutorial.md) in order to successfully make calls to Platform APIs. Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

* Authorization: Bearer `{ACCESS_TOKEN}`
* x-api-key: `{API_KEY}`
* x-gw-ims-org-id: `{IMS_ORG}`

All POST, PUT, and PATCH requests require an additional header:

* Content-Type: application/json

## List destinations 

Using the [Profile Configuration API](../../../../../../acpdr/swagger-specs/profile-config-api.yaml), you can list the edge destinations that have already been configured for your organization.

#### API format

```http
GET /config/destinations
```

#### Request

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/config/destinations \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}'
```

#### Response

A successful response returns a list of edge destinations within `_embedded > projectionDestinations`:

```json
{
    "_links": {
        "self": {
            "href": "/data/core/ups/config/destinations",
            "templated": false
        }
    },
    "_embedded": {
        "projectionDestinations": [
            {
                "_links": {
                    "self": {
                        "href": "/data/core/ups/config/destinations/9d66c06e-c745-480c-b64c-1d5234d25f4b",
                        "templated": false
                    }
                },
                "id": "9d66c06e-c745-480c-b64c-1d5234d25f4b",
                "type": "PIPELINE",
                "topic": "ups-edgeprofile-dev-va711-eciobanu",
                "version": 1
            }
        ]
    }
}
```

## Create a destination

If the destination you require does not already exist, you can create a new one with a POST request. There are two kinds of destinations you can create: **edge destinations** and **pipeline destinations**. The following sections demonstrate how to make each of these destination types.

### Create an edge destination

#### API format

```http
POST /config/destinations
```

#### Request

The following API call creates a new edge destination.

```shell
curl -X POST \
  https://platform.adobe.io/data/core/ups/config/destinations \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}'
  -H 'Content-Type: application/json' \
  -d '{
  "type": "EDGE",
  "dataCenters": [
    "OR1"
  ],
  "ttl": 3600
}'
```

- `type`: The type of destination to be created. By setting its value to "EDGE", this request creates an edge destination.
- `dataCenters`: A string array that lists the destination's data centers. The array can contain any of the following:
    - "OR1" - Western United States
    - "VA5" - Eastern United States

#### Response

A successful response returns the details of the newly created edge destination.

```json
{
    "self": {
        "href": "/data/core/ups/config/destinations/cc5a3bd1-f2b9-4965-b9bd-4e7416a02cd4",
        "templated": false
    },
    "id": "cc5a3bd1-f2b9-4965-b9bd-4e7416a02cd4",
    "type": "EDGE",
    "dataCenters": [
       "OR1"
    ],
    "ttl": 3600,
    "version": 3
}
```

### Create a pipeline destination

#### API format

```http
POST /config/destinations
```

#### Request

The following request creates a new pipeline destination.

```shell
curl -X POST \
  https://platform.adobe.io/data/core/ups/config/destinations \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}'
  -H 'Content-Type: application/json' \
  -d '{
    "type": "PIPELINE",
    "topic": "{TOPIC}"
  }'
```

- `type`: The type of destination to be created. By setting its value to "PIPELINE", this request creates a pipeline destination.
- `topic`: The existing pipeline topic that the destination will route to.


## List projection configurations

You can use the [Edge Profile Projection Configuration API](../../../../../../acpdr/swagger-specs/edge-profile-projection-config.yaml) to lookup and list projection configurations that have been created for your organization.

#### API format

An API call to this endpoint returns all projection configurations available in your organization. By adding parameters to the request path, however, you can access projection configurations for a particular schema, or lookup an individual projection by its name.

```http
GET /config/projections

GET /config/projections?schemaName={SCHEMA_NAME}

GET /config/projections?schemaName={SCHEMA_NAME}&name={PROJECTION_NAME}
```
* `{SCHEMA_NAME}`: The name of the schema associated with the projection configuration you want to access.
* `{PROJECTION_NAME}`: The name of the projection configuration you want to access.
> **Note:** `schemaName` is required when using the `name` parameter, as a projection configuration name is only unique in the context of a schema.

#### Request

The following request lists all projection configurations associated with the XDM Profile schema.

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/config/projections?schemaName=_xdm.context.profile \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}'
```

#### Response

A successful response returns a list of projection configurations within the root `_embedded` attribute, contained in `projectionConfigs`:

```json
{
    "_links": {
        "self": {
            "href": "/data/core/ups/config/projections",
            "templated": false
        }
    },
    "_embedded": {
        "projectionConfigs": [
            {
                "_links": {
                    "destination": {
                        "href": "/data/core/ups/config/destinations/a689248a-5d2b-44af-bb70-c8f17f97011b",
                        "templated": false
                    },
                    "self": {
                        "href": "/data/core/ups/config/projections/99aed0bc-c183-4997-ada7-7843642e08f6",
                        "templated": false
                    }
                },
                "_embedded": {
                    "destination": {
                        "self": {
                            "href": "/data/core/ups/config/destinations/a689248a-5d2b-44af-bb70-c8f17f97011b",
                            "templated": false
                        },
                        "id": "a689248a-5d2b-44af-bb70-c8f17f97011b",
                        "type": "EDGE",
                        "ttl": 1000,
                        "dataCenters": [
                            "OR1"
                        ],
                        "version": 1
                    }
                },
                "selector": "strategy",
                "version": 2,
                "id": "99aed0bc-c183-4997-ada7-7843642e08f6",
                "schemaName": "_xdm.context.profile",
                "name": "adcloud_rlsa",
                "destinationId": "a689248a-5d2b-44af-bb70-c8f17f97011b"
            },
        ]
    }
}
```

## Create a projection configuration

You can create (POST) a new projection configuration that will dictate which XDM fields are made available on the edges or pipeline as persisted or published by Projection Service.

#### API format

```http
POST /config/projections?schemaName={SCHEMA_NAME}
```

- `{SCHEMA_NAME}`: The name of the schema associated with the XDM fields you want to configure for projection.

#### Request

```shell
curl -X POST \
  https://platform.adobe.io/data/core/ups/config/projections?schemaName=_xdm.context.profile \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}'
  -H 'Content-Type: application/json' \
  -d '{
    "selector": "emails,person(firstName)",
    "name": "my_test_projection",
    "destinationId": "cc5a3bd1-f2b9-4965-b9bd-4e7416a02cd4"
  }'
```

- `selector`: A string containing a list of properties within the schema that are to be replicated to the edges. This creates a mask to apply on top of Real-time Customer Profile data to generate the projection. To learn more on how to construct selectors, see the [selector](#selector) section in the appendix below.
- `name`: A descriptive name for the new projection configuration.
- `destinationId`: The identifier for the edge or pipeline destination the data will be projected to.

#### Response

A successful response returns the details of the newly created projection configuration.

```json
{
    "_links": {
        "destination": {
            "href": "/data/core/ups/config/destinations/cc5a3bd1-f2b9-4965-b9bd-4e7416a02cd4",
            "templated": false
        },
        "self": {
            "href": "/data/core/ups/config/projections/87fcd0bc-c183-4997-daf9-7843642g95a1",
            "templated": false
        }
    },
    "_embedded": {
        "destination": {
            "self": {
                "href": "/data/core/ups/config/destinations/cc5a3bd1-f2b9-4965-b9bd-4e7416a02cd4",
                "templated": false
            },
            "id": "cc5a3bd1-f2b9-4965-b9bd-4e7416a02cd4",
            "type": "EDGE",
            "ttl": 1000,
            "dataCenters": [
                "OR1"
            ],
            "version": 1
        }
    },
    "selector": "strategy",
    "version": 2,
    "id": "87fcd0bc-c183-4997-daf9-7843642g95a1",
    "schemaName": "_xdm.context.profile",
    "name": "my_test_projection",
    "destinationId": "cc5a3bd1-f2b9-4965-b9bd-4e7416a02cd4"
}
```

## Appendix

### Selector

A selector is a comma-separated list of XDM field names. In a projection configuration, the selector designates the properties to be included in projections.

The format of the `selector` parameter value is loosely based on XPath syntax. Supported syntax is summarized below, with additional examples provided in the following section.

* Use commas to select multiple fields. Do not use spaces.
* Use dot-notation to select nested fields. 
    * For example, to select a field named "field" which is nested within field named "foo", use the selector "foo.field".
* When including a field that contains sub-fields, all sub-fields are also projected by default. However, you can filter the sub-fields returned by using parentheses `"( )"`.
    * For example, `addresses(type,city.country)` returns only the address type and the country in which the address city is located for each `addresses` array element.
    * The above example is equivalent to `addresses.type,addresses.city.country`.
    * Both dot-notation and parenthetical notation are supported for referencing sub-fields. However, it is best practice to use dot-notation because it is more concise and provides a better illustration of field hierarchy.
* Each field in a selector is specified relative to the root of the response.
    * If the data is a collection of resources, the projection will include an array of resources.
    * If the data is a single resource, the projection will include fields that are relative to that resource.
    * If the field you select is (or is part of) an array, the projection will include the selected portion of all elements in the array.

### Examples of the `selector` parameter

The following examples show sample `selector` parameters, followed by the structured values they represent.

**"person.lastName"**

Returns the `lastName` sub-field of the `person` object in the requested resource.

```json
{
  "person": {
    "lastName": "Smith"
  }
}
```

**"addresses"**

Returns all elements in the `addresses` array, including all fields in each element, but no other fields.	

```json
{
  "addresses": [
    {
      "type": "home",
      "street1": "100 Great Mall Parkway",
      "city": {
        "name": "San Jose",
        "country": "United States"
      }
    },
    {
      "type": "work",
      "street1": "1 Main Street",
      "city": {
        "name": "San Jose",
        "country": "United States"
      }
    }
  ]
}
```

**"person.lastName,addresses"**

Returns the `person.lastName` field and all elements in the `addresses` array.	

```json
{
  "person": {
    "lastName": "Smith"
  },
  "addresses": [
    {
      "type": "home",
      "street1": "100 Great Mall Parkway",
      "city": {
        "name": "San Jose",
        "country": "United States"
      }
    },
    {
      "type": "work",
      "street1": "1 Main Street",
      "city": {
        "name": "San Jose",
        "country": "United States"
      }
    }
  ]
}
```

**"addresses.city"**

Returns only the city field for all elements in the addresses array.

```json
{
  "addresses": [
    {
      "city": {
        "name": "San Jose",
        "country": "United States"
      }
    },
    {
      "city": {
        "name": "San Jose",
        "country": "United States"
      }
    }
  ]
}
```

> **Note:** Whenever a nested field is returned, the projection includes the enclosing parent objects. The parent fields do not include any other child fields unless they are also selected explicitly.

**"addresses(type,city)"**

Returns only the values of the `type` and `city` fields for each element in the `addresses` array. All other sub-fields contained in each `addresses` element are filtered out.

```json
{
  "addresses": [
    {
      "type": "home",
      "city": {
        "name": "San Jose",
        "country": "United States"
      }
    },
    {
      "type": "work",
      "city": {
        "name": "San Jose",
        "country": "United States"
      }
    }
  ]
}
```