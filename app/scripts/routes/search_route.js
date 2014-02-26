SpotifyExplorer.SearchRoute = Ember.Route.extend({
    model: function(params) {
        var url = "https://ws.spotify.com/search/1/track.json?q=" + params.query;
        // query Spotify API
        Ember.$.getJSON(url).then(function(result) {
            return result.tracks;
        });
    }
});
