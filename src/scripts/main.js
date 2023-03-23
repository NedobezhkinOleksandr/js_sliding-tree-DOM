'use strict';

const header = document.querySelector('.tree');
const elements = header.querySelectorAll('li');

for (const element of elements) {
  const span = document.createElement('SPAN');

  element.prepend(span);
  span.append(span.nextSibling);

  span.setAttribute('class', 'span');
}

header.addEventListener('click', e => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const child = e.target.parentNode.querySelector('ul');

  if (child) {
    child.hidden = !child.hidden;
  }
});
