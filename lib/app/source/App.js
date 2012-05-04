enyo.kind({
	name: 'App',
	statics: {
		inDevMode: function() {
			return window.location.href.substr(window.location.href.length - 8) == 'dev.html';
		}
	},
	components: [

	]
});