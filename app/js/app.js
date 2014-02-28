var SpotifyExplorer = window.SpotifyExplorer = Ember.Application.create({
    appName: 'SpotifyExplorer',

    // Basic logging, e.g. "Transitioned into 'post'"
    LOG_TRANSITIONS: false, 

    // Extremely detailed logging, highlighting every internal
    // step made while transitioning into a route, including
    // `beforeModel`, `model`, and `afterModel` hooks, and
    // information about redirects and aborted transitions
    LOG_TRANSITIONS_INTERNAL: false
});

/* Order and include as you please. */
require('js/controllers/*');
require('js/store');
require('js/models/*');
require('js/routes/*');
require('js/views/*');
require('js/helpers');
require('js/router');
