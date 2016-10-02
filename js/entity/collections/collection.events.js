define(
	[
		'entity/models/model.event',
		'jquery',
		'underscore',
		'marionette',
	], function (EventModel) {
		'use strict';

		var EventsCollection = Backbone.Collection.extend({
			model: EventModel
		});

		return EventsCollection;
	}
);