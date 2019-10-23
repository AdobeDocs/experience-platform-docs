---
description: null
keywords: debugger;experience cloud debugger extension;chrome;extension;tools;dtm;target
seo-description: null
seo-title: Tools
title: Tools
uuid: ea3fe1ea-e936-4c5a-8a43-b830d1b75038
---

# Tools{#tools}

On the Tools screen, you can enable or disable various tools for the installed solution. For example, you can turn on Target's console debugging statements or use the DTM Staging Library. These tools are only available if Target and DTM are installed on your page.

![](assets/tools.jpg)

You can dynamically insert Launch or DTM on any page to test something on a page that does not have Launch or DTM installed. Click the **[!UICONTROL Embed Code]** icon, then type your [embed code](https://experiencecloud.adobe.com/resources/help/en_US/dtm/deployment.html) and click **[!UICONTROL Save]**.

![](assets/tools-embedcode.jpg)

## DTM Information {#section-c3d43040440449e5a050170843a600b7}

<table id="table_04625C3319134E169A35DB74C1D1FB31"> 
 <thead> 
  <tr> 
   <th colname="col1" class="entry"> Tool </th> 
   <th colname="col2" class="entry"> Description </th> 
  </tr>
 </thead>
 <tbody> 
  <tr> 
   <td colname="col1"> <p> DTM Console Logging </p> </td> 
   <td colname="col2"> <p>This tool exposes DTM-specific debugging statements to the browser console. </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Use Staging Library </p> </td> 
   <td colname="col2"> <p>This tool uses the Staging library for DTM debugging information. </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Disable DTM </p> </td> 
   <td colname="col2"> <p>This tool blocks DTM information from being checked. </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p> Dynamically Insert DTM </p> </td> 
   <td colname="col2"> <p> This tool inserts DTM code on your page. Use the Embed Code editor to edit the code that is inserted. </p> </td> 
  </tr> 
 </tbody> 
</table>

## Target Information {#section-31090d95f50e455692b672c26e6a2051}

<table id="table_A71D269B49F4417599EBACA44D5CCF4F"> 
 <thead> 
  <tr> 
   <th colname="col1" class="entry"> Tool </th> 
   <th colname="col2" class="entry"> Description </th> 
  </tr>
 </thead>
 <tbody> 
  <tr> 
   <td colname="col1"> <p>Target Console Logging </p> </td> 
   <td colname="col2"> <p>This tool exposes Target-specific debugging statements to the browser console, all beginning with the <span class="codeph"> AT:</span> prefix, by adding a cookie called <span class="codeph"> mboxDebug=true</span> to your browser. At this time, the console statements do not appear within the Debugger Logs screen, but are visible in the browser's native debugging console. </p> <p> This tool requires at.js 0.9.6+. If you are using an older version of at.js, you can add the <span class="codeph"> ?mboxDebug=true</span> query string parameter to your URL in order to turn on console logging. If you are using mbox.js, you can add the <span class="codeph"> ?_AT_Debug=console</span> parameter to turn on console logging limited to Visual Experience Composer activities. </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p> Enable Mbox Traces </p> </td> 
   <td colname="col2"> <p>This tool adds detailed information to Target responses, which can be explored in the <span class="uicontrol"> Target&gt;Mbox Trace</span> screen of the debugger. </p> <p> You must have be logged into the Experience Cloud in one of your Chrome tabs to enable this tool. </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Disable Target </p> </td> 
   <td colname="col2"> <p>This tool disables all Target requests by adding a cookie called <span class="codeph"> mboxDisable=true</span> to your browser. </p> <p> This tool requires at.js 0.9.6+. If you are using an older version, you can add the <span class="codeph"> ?mboxDisable=true </span>query string parameter to your URL to disable mboxes. </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p> Mbox Highlight </p> </td> 
   <td colname="col2"> <p> This tool draws a red box around legacy, wrapping-style mboxes. </p> </td> 
  </tr> 
 </tbody> 
</table>

The following video explains how to use the Debugger extension with Adobe Target.

>[!VIDEO](https://video.tv.adobe.com/v/23115t2/) 
