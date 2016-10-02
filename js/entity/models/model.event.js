define(
	[
		'jquery',
		'underscore',
		'marionette'
	],
	function () {
		'use strict';

		var EventModel = Backbone.Model.extend({
			initialize: function () {
				this.setLabel();
			},
			setLabel: function () {
				this.set('label', this.get('event'));
			}
		});

		return EventModel;
	}
);