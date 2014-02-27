SpotifyExplorer.ResultsRoute = Ember.Route.extend({
    model: function(params) {
        var search = this.store.find('search', params.id);
        console.log('Found model with ID=' + params.id, search);
        var url = "https://ws.spotify.com/search/1/track.json?q=" + search.get('query');
        console.log(url);
        // query Spotify API
        return Ember.$.getJSON(url).then(function(result) {
            return result.tracks.map(function(track) {
                return SpotifyExplorer.Track.create(track);
            });
        });
    }
});
