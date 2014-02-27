SpotifyExplorer.Track = Ember.Object.extend({
    'title': '',
    'artists': [],
    'album': {},
    'year': undefined,
    'artist': function() {
        return this.get('artists')
                   .map(function(artist) { return artist.name; })
                   .join(', ');
    }.property('artists')
});
