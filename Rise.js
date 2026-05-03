// Create the HTML elements
const html = document.documentElement;
const head = document.createElement('head');
const title = document.createElement('title');
const link = document.createElement('link');
const style = document.createElement('style');
const body = document.createElement('body');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const a1 = document.createElement('a');
const a2 = document.createElement('a');
const a3 = document.createElement('a');
const a4 = document.createElement('a');

// Set the attributes and text content
title.textContent = 'Rise';
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'Rise.css';
link.className = 'large-link';

style.textContent = `
  nav {
    background-color: #f7f7f7;
    padding: 1em;
    border-bottom: 1px solid #ddd;
  }
`;

a1.textContent = 'Rise';
a1.href = '#';
li1.appendChild(a1);

a2.textContent = 'About';
a2.href = '#';
li2.appendChild(a2);

a3.textContent = 'Services';
a3.href = '#';
li3.appendChild(a3);

a4.textContent = 'Contact';
a4.href = '#';
li4.appendChild(a4);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
nav.appendChild(ul);

// Append the elements to the HTML document
head.appendChild(title);
head.appendChild(link);
head.appendChild(style);
body.appendChild(nav);
html.appendChild(head);
html.appendChild(body);