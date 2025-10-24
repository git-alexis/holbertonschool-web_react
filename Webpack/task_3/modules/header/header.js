import $ from 'jquery';
import './header.css';
import logo from '../../assets/holberton-logo.jpg';

console.log('Init header');

$('body').append(`
  <div id="header">
    <img src="${logo}" alt="Holberton Logo">
    <h1>Holberton Dashboard</h1>
  </div>
`);
