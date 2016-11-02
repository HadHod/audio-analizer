'use strict';

(function (window) {

	var audio = null;

	function AudioAnalizer () {}

	AudioAnalizer.prototype.record = function () {
		console.log('recording');
	};

	window.AudioAnalizer = window.AudioAnalizer || AudioAnalizer;
})(window);
