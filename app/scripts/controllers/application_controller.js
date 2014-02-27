SpotifyExplorer.ApplicationController = Ember.ArrayController.extend({
    newSearch: '',

    disabled: function() {
        return Ember.isEmpty(this.get('newSearch'));
    }.property('newSearch'),

    actions: {
        newSearch: function() {
            // Get the query set by the "New Search" text field
            var query = this.get('newSearch');
            if (!query.trim()) { return; }

            // Create the new Search model
            var search = this.store.createRecord('search', { query: query });

            // Clear the "New Search" text field
            this.set('newSearch', '');

            // Save the new model
            search.save();

            this.transitionTo('results', search);
        }
    }
});
