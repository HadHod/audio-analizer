'use strict';

(function (window) {

	var audio = null;
	var userMedia = null;

	function AudioAnalizer () {
		userMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
	}

	AudioAnalizer.prototype.record = function () {
		console.log('recording');
	};

	window.AudioAnalizer = window.AudioAnalizer || AudioAnalizer;
})(window);
