SpotifyExplorer.Search = DS.Model.extend({
    query: DS.attr('string')
});

SpotifyExplorer.Search.FIXTURES = [
    { id: 1, query: "chili" },
    { id: 2, query: "aero" },
    { id: 3, query: "maiden" }
];
