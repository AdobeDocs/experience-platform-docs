# Gathering your IDs

## Overview

Each device and entity tracked by Experience Cloud is marked by an identity key. It may be a cookie value set under one of Adobe controlled domains, a cookie value under a 3rd-party domain and shared with Adobe, or a 3rd party identifier explicitly provided by the customer in a feed. 

Identities always exist in a namespace. Namespace identifies the bucket that holds individual identity values. Namespace together with identity is expected to be globally unique. In most cases, the Namespace is enough to the cookie domain, or the partner's data-set name that formed the source of identities.

## XIDs

Experience ID (XID) is the identity object for Experience Cloud. Experience ID (XID) is the encapsulation of namespace-id and the identity in the namespace. There are multiple representations of XIDs - including the existing solution specific representations such as AMO Id, Analytics Id, Target ID, AAM ID and the Marketing Cloud ID. All types of identities can be expressed as an XID, including a consumer identity or a physical device id. Each XID is a combination of namespace-id and the identity-in-the-namespace. Namespace-ids are unique across customers. An Id is expected to be unique within its namespace. Thus the combination of namespace-id and id-in-the-namespace is guaranteed to be unique.

An AMO cookie-id - Was_2AAAAFZ7q3xO - is an XID with a namespace (ID) of 411.  Similarly an AAM cookie-id - 64077380566994308300716050799446918829 - is an XID with a namespace of 0.

Adobe Experience Cloud customers have:

1. One legacy org ID only
2. One IMSOrg ID only
3. A combination of one more of IMSOrgs or legacy org IDs
  - Multiple IMSOrg IDs
  - Multiple legacy org IDs
  - No organizational IDs

## Standard ID namespaces

There are a few namespaces that are pre-defined and available to all customers. The ID values themselves are chosen to be backward-compatible with AAM and prior platform efforts. The standard namespaces make data-exchange and resolution easier among experience-cloud solutions.

| Display Name | ID | Code | Description |
| ------------ | -- | ---- | ----------- |
| CORE         | 0  | CORE | legacy name: "Adobe AudienceManager" |
| ECID         | 4  | ECID | alias: "Adobe Marketing Cloud ID", "Adobe Experience Cloud ID") |
| Email        | 6  | Email | &nbsp; |
| Phone        | 7  | Phone | &nbsp; |
| Windows AID  | 8  | WAID | &nbsp; |
| AdCloud    | 411 | AdCloud | Adobe Advertising Cloud (AKA: TubeMogul, AMO, DCO) |
| Adobe Target | &nbsp; | TRGT | &nbsp; |
| Google Ad ID  | 20914 | GAID | &nbsp; |
| Apple IDFA  | 20915 | IDFA | ID for Advertisers |

## List namespaces for a company

### GET Request
**List all namespaces for given IMS-ORG**

URL: https://platform.adobe.io/data/core/idnamespace/identities/

**Headers**

| Header        | Value        | Description |
| ------------- | ------------ | ----------- |
| Authorization | Bearer TOKEN | The IMS service token used for authenticating the caller |
| content-type  | application/json | The input content type |
| x-gw-ims-org-id  | <imsOrgId>, Eg: 17FA2AFD56CF35747F000101@AdobeOrg | The IMS Org ID of Client |


**Parameters**

| Parameter     | Type   | Req/Opt  | Description |
| ------------- | ------ | -------- |
| none        |  |  |  |

### Response

```
[
  {
        "updateTime": 1441122419000,
        "code": "CORE",
        "status": "ACTIVE",
        "description": "CORE Namespace",
        "id": 0,
        "createTime": 1441122419000,
        "idType": "COOKIE",
        "name": "CORE",
        "custom": false
    },
    {
        "updateTime": 1495153678000,
        "code": "ECID",
        "status": "ACTIVE",
        "description": "ECID Namespace",
        "id": 4,
        "createTime": 1495153678000,
        "idType": "COOKIE",
        "name": "ECID",
        "custom": false
    },
    {
        "updateTime": 1522783145000,
        "code": "AdCloud",
        "status": "ACTIVE",
        "description": "Adobe AdCloud - ID Syncing Partner",
        "id": 411,
        "createTime": 1522783145000,
        "idType": "COOKIE",
        "name": "AdCloud",
        "custom": false
    }
]
Returns an HTTP 200 OK on success.
```
