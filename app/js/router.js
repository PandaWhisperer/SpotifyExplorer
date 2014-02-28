SpotifyExplorer.Router.map(function () {
    this.resource("search", { path: '/'}, function() {
        this.route("results", { path: "/results/:id" });
    });
});
