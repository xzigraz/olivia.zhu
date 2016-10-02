define(
	[
		'entity/collections/collection.events',
		'jquery',
		'marionette',
		'radio',
		'timelineme'
	],
	function (EventsCollection) {
		'use strict';

		var timelineEvents = new EventsCollection();

		timelineEvents.url = '/olivia.zhu/data/timeline.json';

		timelineEvents.fetch();

		console.log(timelineEvents);

		console.log('load!');
	}
);