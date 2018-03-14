# Facets Analytics
The Facets Analytics module tracks clicks on facets as events in Google
Analytics.  It was originally created for a site environment where tracking
searches with Analytics' Site Search was not feasible.  This was due to the
presence of multiple search applications in the same site.  There is also a
problem inherent to tracking the facets created by the Facets module's default
processor.  In order to be tracked by Site Search's categories, the URL
parameters must have a format like ```/search?color=blue```.  Facets' processor
outputs parameters like ```/search?f[0]=color:blue```.

It is possible that an Analytics-friendly Facets processor might be written, but
even then there is a second problem.  When creating a facet for an entity
reference field, some sites will choose to use the entity's ID as the parameter
value.  This will result in a parameter like ```/search?f[0]=category:1234```.
Recording the entity ID is probably not as useful for analysis as the entity
label.

Recording clicks as events may not be as convenient as using the built-in
capabilities of the Site Search, but it does allow us to get around those
issues.

## Requirements
This module is dependent on the [Facets](https://www.drupal.org/project/facets)
module and has been confirmed to work with the 1.x branch.  Version 1.0-beta2 of
Facets was the latest release at the time this was written.  Only certain facet
widgets are supported, including the _List of Checkboxes_ and _List of Links_
widgets.  You may request that other widgets be supported by posting in the
module's issue queue.

This module is also dependent on having the analytics.js script on the page.
There is no requirement for a specific module to provide this.  You may use any
means to do it as long as the script is inserted before the facets-analytics.js
script.  The Google Analytics documentation recommends that analytics.js be
placed in the page's ```<head>``` tag before any other scripts, which is sound
advice for the purpose of using this module.  The
[Google Analytics module](https://www.drupal.org/project/google_analytics) is
the recommended way to do this, but you could use a different module or insert
the script directly into your site's theme template.

## Using this Module
After you install the module, visit your facet's administration page.  A new
_Facets Analytics_ fieldset will be displayed under the _Settings_.  Enable
tracking for the facet by checking the checkbox there.  You may provide custom
text that will be displayed as the event's category name in Analytics.
Otherwise, leave the text field blank to use the facet's name as the category.
After you save the facet's form the click events will immediately start being
tracked.
