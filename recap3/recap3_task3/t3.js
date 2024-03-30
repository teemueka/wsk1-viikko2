const myList = document.getElementById('target');

const p = document.createElement('p');
p.textContent = 'Browser details: ' + navigator.userAgent;
myList.appendChild(p);

const p2 = document.createElement('p');
const os = navigator.userAgent;
let finalOs = '';

if (os.search('Windows') !== -1) {
  finalOs = 'Windows';
} else if (os.search('Mac') !== -1) {
  finalOs = 'MacOS';
} else if (os.search('X11') !== -1 && !(os.search('Linux') !== -1)) {
  finalOs = 'UNIX';
} else if (os.search('Linux') !== -1 && os.search('X11') !== -1) {
  finalOs = 'Linux';
}

p2.textContent = 'Operating system: ' + finalOs;
myList.appendChild(p2);

const p3 = document.createElement('p');
p3.textContent =
  'Screen width: ' + screen.width + ', screen height: ' + screen.height;
myList.appendChild(p3);

const p4 = document.createElement('p');
p4.textContent =
  'Available screen width: ' +
  screen.availWidth +
  ' available screen height: ' +
  screen.availHeight;
myList.appendChild(p4);

const p5 = document.createElement('p');
const date = new Date();

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

const dateFinnish = date.toLocaleString('fi-FI', options);
p5.textContent = dateFinnish;
myList.appendChild(p5);
