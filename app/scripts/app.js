var SpotifyExplorer = window.SpotifyExplorer = Ember.Application.create({
    appName: 'SpotifyExplorer'
});

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/helpers');
require('scripts/router');
