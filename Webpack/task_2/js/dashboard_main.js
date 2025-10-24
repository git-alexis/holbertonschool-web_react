import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

$('body').append('<div id="logo"></div>');

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');

const $button = $('<button>Click here to get started</button>');
$('body').append($button);

$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

// Use lodash debounce to delay function calls to avoid spam
$button.on('click', _.debounce(updateCounter, 500));
