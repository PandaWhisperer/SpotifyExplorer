SpotifyExplorer.SearchResultsRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('search', params.id);
    },

    afterModel: function(search, transition) {
        var url = "https://ws.spotify.com/search/1/track.json?q=" + search.get('query');

        // query Spotify API and transform results
        Ember.$.getJSON(url).then(function(result) {
            // turn results into Ember objects
            var results = result.tracks.map(function(track) {
                return SpotifyExplorer.Track.create(track);
            });
            // set as property on our model
            return search.set('results', results);
        });
    }
});
