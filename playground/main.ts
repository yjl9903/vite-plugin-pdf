import now from '~build/time';

document.querySelector('#info')!.innerHTML = 'Build at: ' + now.toLocaleString();
