var SpotifyExplorer = window.SpotifyExplorer = Ember.Application.create({
    appName: 'SpotifyExplorer'
});

/* Order and include as you please. */
require('js/controllers/*');
require('js/store');
require('js/models/*');
require('js/routes/*');
require('js/views/*');
require('js/helpers');
require('js/router');
