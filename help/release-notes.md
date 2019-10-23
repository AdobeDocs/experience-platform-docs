---
description: null
keywords: debugger;experience cloud debugger extension;chrome;extension;release notes
seo-description: null
seo-title: Release Notes
title: Release Notes
uuid: 47a5d6f3-c074-4ad5-ad4b-e6030496689b
---

# Release Notes{#release-notes}

Matt's change

## Release Notes {#topic-a92c3eb799b74e7fa404af8af5efb215}

## Version 0.0.817 May 17, 2019 {#topic-5dc9026cac864330b04361b1da8309a8}

## New Features {#section-71352536e6894ad08f307535529394cd}

<table id="table_7EFCAF456B14404FAF3715FC56519AAF"> 
 <thead> 
  <tr> 
   <th colname="col1" class="entry"> Feature </th> 
   <th colname="col2" class="entry"> Description </th> 
  </tr>
 </thead>
 <tbody> 
  <tr> 
   <td colname="col1"> <p>Post-Processing Hit Data </p> </td> 
   <td colname="col2"> <p> Added the ability to <a href="solutions.md#section-f71dfcc22bb44c86bec328491606a482" format="dita" scope="local"> view values on Analytics hits after processing rules have run</a>. </p> </td> 
  </tr> 
 </tbody> 
</table>

## Version 0.0.810 March 6, 2019 {#topic-83bb7ddd68594177be9fd7826b650b80}

## New Features {#section-0a2f6fcb0045464fa11f0586c69f7ffd}

<table id="table_96AEBFF29F3D40CAA859133B22756B0C"> 
 <thead> 
  <tr> 
   <th colname="col1" class="entry"> Feature </th> 
   <th colname="col2" class="entry"> Description </th> 
  </tr>
 </thead>
 <tbody> 
  <tr> 
   <td colname="col1"> <p>Auditor tests </p> </td> 
   <td colname="col2"> <p> Added <a href="run-debugger.md#section-82bc57440406461ebf27a16855b71655" format="dita" scope="local"> Auditor tests</a> to Debugger </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Adobe Audience Manager </p> </td> 
   <td colname="col2"> <p>Debugger now displays AAM responses </p> </td> 
  </tr> 
 </tbody> 
</table>

## Bug Fixes {#section-f5e9d54e9d2546afb97972cdb6d8a093}

* Fixed an issue where the footer was hiding content on the bottom of the page

* Updated the Debugger footer 
* Fixed an issue where outdated terminology was used for Target

## Version 0.0.809 February 28, 2019 {#topic-6241de45fa9e4a23a95ad4d3a73f7348}

## New Features {#section-14036b9f2c0144fdac5e292ea42ce564}

<table id="table_66E255E9BA8845CAA92779F580D14EB4"> 
 <thead> 
  <tr> 
   <th colname="col1" class="entry"> Feature </th> 
   <th colname="col2" class="entry"> Description </th> 
  </tr>
 </thead>
 <tbody> 
  <tr> 
   <td colname="col1"> <p>Embed code functions </p> </td> 
   <td colname="col2"> <p> Divide replace and insert embed code functions. </p> </td> 
  </tr> 
 </tbody> 
</table>

## Improvements {#section-e9e8a6ddedde4c029b1d3d69c009cbad}

* Fixed a potential vulnerability caused by unsanitized user input.

## Bug Fixes {#section-556417ff055848c1bf037354dd43cbd0}

* Fixed an issue where AAM DIL events were not captured in the AAM tab

* Fixed an issue in Dynamically Insert Launch where the user interface appeared to map to a different embed code when it wasn't 
* Fixed an issue in Dynamically Insert Launch where a bad URL continued to display 
* Fixed an issue where Debugger continued to replace embed codes even when the Debugger window was closed

## Version 0.0.806 September 10, 2018 {#topic-a41c9d1969ff4d06ac3bb4e7d6b6d18a}

## New Features {#section-4eb2a6ed26a44abc96623384a7e94b0f}

<table id="table_9AC6DE90AF4345DFA707BFBA1E58C328"> 
 <thead> 
  <tr> 
   <th colname="col1" class="entry"> Feature </th> 
   <th colname="col2" class="entry"> Description </th> 
  </tr>
 </thead>
 <tbody> 
  <tr> 
   <td colname="col1"> <p>Analytics link on Tools tab </p> </td> 
   <td colname="col2"> <p>Show friendly names for evars/props via Analytics API through IMS login. </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Dynamically Insert Launch </p> </td> 
   <td colname="col2"> <p>From the Tools tab, you can dynamically insert Launch on any page to test something on a page that does not have Launch installed. </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Target enhancements </p> </td> 
   <td colname="col2"> <p> 
     <ul id="ul_5FCD61733462495D8FB421DE7C813001"> 
      <li id="li_2E8E9AAE5D0D41DC8C42592AFDFA3377">Added performance timings for Target requests. </li> 
      <li id="li_98A56E71D72542D694A76DF84CE26AFA">Capture adobe.target.trackEvent </li> 
     </ul> </p> </td> 
  </tr> 
 </tbody> 
</table>

## Improvements {#section-56003a12c32f4998bf1cf2a25a518592}

* Improved the display of the Network tab so the height of the table doesn’t get too large and force the user to scroll vertically before they can scroll horizontally. Previously, the scroll bars would appear at the bottom of the table. Because the table could get quite large, users had to scroll all the down vertically in order to see them. 
* Updated the link to ObservePoint from the Tools tab.

## Bug Fixes {#section-d9231f5c77254d0888347e5f569a8b1d}

* Fixed an issue where the Experience Cloud tab was not updating

* Fixed an issue where"Media Optimizer" showed in the Solution row of the Network tab, rather than the current "Advertising Cloud" name 
* Fixed an issue that caused Debugger to inject _satellite on every page

## Version 0.0.803 August 10, 2018 {#topic-d2901fb70ce04a5586f6c7a994fce875}

Version 0.0.803 does not include any customer-facing changes. 

## Version 0.0.802 August 1, 2018 {#topic-b93cd396af5e49dc97cd86264871aeb4}

## New Features {#section-e6699fb9c9b24035ace56d6a84c9d09b}

<table id="table_E847A9D6711F4CF59E98806FA7AF8379"> 
 <thead> 
  <tr> 
   <th colname="col1" class="entry"> Feature </th> 
   <th colname="col2" class="entry"> Description </th> 
  </tr>
 </thead>
 <tbody> 
  <tr> 
   <td colname="col1"> <p>Auditor link on Tools tab </p> </td> 
   <td colname="col2"> <p>Added a link to Auditor from the Debugger </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Collapsed tabs </p> </td> 
   <td colname="col2"> <p>Collapsed tabs persist on the Summary and Tool tabs </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Click to view </p> </td> 
   <td colname="col2"> <p> Added click-to-view functionality to all tabs </p> </td> 
  </tr> 
 </tbody> 
</table>

## Improvements {#section-0e7090e3e6a645f085d4553b983ecff8}

* Changed name of Media Optimizer to Advertising Cloud 
* Removed solutions from the Network tab if not found

## Bug Fixes {#section-7c0e4cc4b00a428489bed4a0a27c9501}

* Fixed an issue where "Click cell to view" function was not updated 
* Fixed an issue where AAM hits were not shown on AAM tab

## Version 0.0.798 June 14, 2018 {#topic-3b2d44277f2f4c0295d82724c34bf467}

## New Features {#section-0d73ae8b7ced417e9039f986fafaa102}

<table id="table_8FDED5A7B7F7430A88AE441336F9C714"> 
 <thead> 
  <tr> 
   <th colname="col1" class="entry"> Feature </th> 
   <th colname="col2" class="entry"> Description </th> 
  </tr>
 </thead>
 <tbody> 
  <tr> 
   <td colname="col1"> <p>Excel export option </p> </td> 
   <td colname="col2"> <p>Added Excel export option to the Network tab. </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Improved appearance </p> </td> 
   <td colname="col2"> <p>Updated the Chrome extension font to Adobe Clean. </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p> Trackpad swipe functionality </p> </td> 
   <td colname="col2"> <p>Disabled forward/back trackpad swipe functionality. </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Raw server call indicator </p> </td> 
   <td colname="col2"> <p>Added indicator that raw server call string has been copied. </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Clean up Logs tab </p> </td> 
   <td colname="col2"> <p> 
     <ul id="ul_D1EB0BE3A01C494983DAAF625562AC62"> 
      <li id="li_2696D26320F54A089D3CC99962EC9670">Hide solutions in the Solutions Filter if no line items for that solution are found in the logs </li> 
      <li id="li_D4586A6AB2AD42BB9F0FA3E7A01382C6">Hide the Level Filter if no DTM calls are found, because it only applies to DTM </li> 
      <li id="li_E2AF179037DC4C63B960013AB1F9AD6A">Change the icons shown in the Level column so they don't look clickable when nothing happens when you click </li> 
      <li id="li_3DB6682D6C9040D99F04C688E208CE1F">Standardize formatting of "Show code" on DTM line items </li> 
     </ul> </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Update help link in footer </p> </td> 
   <td colname="col2"> <p>Update help link in footer to <a href="https://marketing.adobe.com/resources/help/en_US/experience-cloud-debugger/" format="https" scope="external"> https://marketing.adobe.com/resources/help/en_US/experience-cloud-debugger/</a> </p> </td> 
  </tr> 
 </tbody> 
</table>

## Bug Fixes {#section-c292cf7dcb17463bb1928de73bd55121}

* Fixed an issue where the badge number did not clear 
* Fixed an issue where a customer reported blank summary details

## Version 0.0.797 May 25, 2018 {#topic-51490f4f42aa40eb879663fad9d62916}

## New Features {#section-bbf8ff7e000e4b5592d348e0870471f6}

<table id="table_8CF872DC245A46C38FE21490C842D47A"> 
 <thead> 
  <tr> 
   <th colname="col1" class="entry"> Feature </th> 
   <th colname="col2" class="entry"> Description </th> 
  </tr>
 </thead>
 <tbody> 
  <tr> 
   <td colname="col1"> <p>Mbox toggles </p> </td> 
   <td colname="col2"> <p>Mbox toggles have been added to the Target tab </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Filter settings are now sticky </p> </td> 
   <td colname="col2"> <p>Filter settings now stick to the top of the screen on the network and logs tabs. </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>View and copy network values </p> </td> 
   <td colname="col2"> <p>You can view detail and copy the value of any cell in the network tab. </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Legal footer links and copyright </p> </td> 
   <td colname="col2"> <p>Added a legal footer links and copyright information to the user interface. </p> </td> 
  </tr> 
 </tbody> 
</table>

