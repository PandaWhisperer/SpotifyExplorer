SpotifyExplorer.ResultsRoute = Ember.Route.extend({
    model: function(params) {
        var search = this.store.find('search', params.id);
        console.log(search);
        var url = "https://ws.spotify.com/search/1/track.json?q=" + search.get('query');
        console.log(url);
        // query Spotify API
        Ember.$.getJSON(url).then(function(result) {
            console.log(result);
            return result.tracks;
        });
    }
});
