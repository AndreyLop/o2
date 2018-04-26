// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
// debouncing function stop

function hideScrollBar() {
	document.getElementsByTagName('body')[0].classList.add('body-overflow_hidden');
	document.querySelector('.page-wrapper').classList.add('body-overflow_hidden');
};
function showScrollBar() {
	document.getElementsByTagName('body')[0].classList.remove('body-overflow_hidden');
	document.querySelector('.page-wrapper').classList.remove('body-overflow_hidden');
};

//AJAX  function start
function ajax(type, url, data, callback) {
	var data = data || null;
	var type = type || 'GET';
	var callback = callback || function(res) {
		console.log(res);
	};
	var url = url || 'test.php';
	var xhr = new XMLHttpRequest();
	xhr.open(type, url, true);
	if(type === 'POST') {
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send(data);
	} else {
		xhr.send();
	}
	xhr.onreadystatechange = function() {
		if(xhr.readyState !== 4) {
			return
		}
		if(xhr.status !== 200) {
			console.log(xhr.status + ': ' + xhr.statusText);
		} else {
			callback(xhr.responseText);
		}
	};
};
function PostFormData(url, data, callback) {
	ajax('POST', url, data, callback);
};
//AJAX function end