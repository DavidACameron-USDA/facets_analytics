/**
 * @file
 * Sends an event to Google Analytics when a facet is clicked.
 */

(function ($) {

  'use strict';

  if (window['ga'] === undefined ) {
    return;
  }

  $('.facet-item').click(event, function() {
    var id = $(this).parent().attr('data-drupal-facet-id');
    if (drupalSettings.facets_analytics.enabledFacets[id] === undefined) {
      return;
    }

    var category = drupalSettings.facets_analytics.enabledFacets[id];
    var action = 'Facet activated';
    var anchor = $(this).find('a');
    var checkbox = $(this).find(':checkbox');
    if (anchor && anchor.hasClass('is-active') || checkbox && checkbox.attr('checked') === 'checked') {
      action = 'Facet deactivated';
    }
    var label = $(this).find('span.facet-item__value').text();
    ga('send', 'event', {
      eventCategory: category,
      eventAction: action,
      eventLabel: label,
      transport: 'beacon'
    });
  });

})(jQuery);
