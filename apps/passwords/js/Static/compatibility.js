function isCompatibleBrowser() {
    try {
        if(!window.hasOwnProperty('crypto') || typeof window.crypto.subtle !== "object") {
            console.error('Web Crypto API not supported');
            return false;
        }

        if(!window.hasOwnProperty('TextEncoder')) {
            console.error('TextEncoder not supported');
            return false;
        }

        if(!window.hasOwnProperty('WebAssembly') || typeof window.WebAssembly.instantiate !== "function") {
            console.error('WebAssembly not supported');
            return false;
        }
    } catch(e) {
        console.error(e);

        return false;
    }

    return true;
}

function showBrowserCompatibilityWarning() {

    var imgpath   = OC.filePath('passwords', 'img', 'browser/'),
        container = document.getElementById('main');
    container.innerHTML =
        '<div class="passwords-browser-compatibility">' +
        '<h1 class="title">Your Browser is outdated</h1>' +
        '<div class="message">Your browser is outdated and does not provide the necessary functionality to display this page.' +
        '<br>Please check if an update is available for your browser or choose a modern and compatible browser from the list below.' +
        '</div><div class="browser">' +
        '<a target="_blank" rel="noreferrer noopener" href="https://www.mozilla.org/firefox/new/" style="background-image: url(' + imgpath + 'firefox.png)">Firefox</a>' +
        '<a target="_blank" rel="noreferrer noopener" href="https://vivaldi.com/download/" style="background-image: url(' + imgpath + 'vivaldi.png)">Vivaldi</a>' +
        '<a target="_blank" rel="noreferrer noopener" href="https://www.torproject.org/download/" style="background-image: url(' + imgpath + 'tor.png)">Tor Browser</a>' +
        '</div></div>';
    container.setAttribute('class', '');

    throw new Error('Browser does not suport ECMAScript 2017 / ES2017');
}

function showWebAssemblyCompatibilityWarning() {

    var imgpath   = OC.generateUrl('themes/eCloud/apps/passwords/img/warning.png'),
        container = document.getElementById('main');
    container.innerHTML =
        '<div class="passwords-browser-compatibility">' +
        '<div class="message password-message"><img class="passwords-warning" src="' + imgpath +'"/>To view this website properly, please enable Javascript JIT.' +
        '</div><div class="passwords-info" >' +
        '<h3 class="passwords-title">How to enable it</h3>' +
        '<p>JavaScript JIT is disabled by default in the browser in order to render web content in a more secure configuration.</p><br />' +
        '<p><b>Steps:</b> You can always enable Javascript JIT in the settings. To do it, click on the 3 dots icon at the top left corner and go to:' +
        '<div class="passwords-quote">Settings  > Site settings</div>' +
        'Then, enable <b>Javascript JIT</b> at the bottom of the list.' +
        '</p></div></div>';
    container.setAttribute('class', '');

    throw new Error('Browser does not suport ECMAScript 2017 / ES2017');
}

function isWebAssemblyEnable(){
    if(!window.hasOwnProperty('WebAssembly') || typeof window.WebAssembly.instantiate !== "function") {
        console.error('WebAssembly not supported');
        return false;
    }
}

function checkSystem() {
    if(!isWebAssemblyEnable()) showWebAssemblyCompatibilityWarning();
    else if(!isCompatibleBrowser()) showBrowserCompatibilityWarning();
}

window.addEventListener('DOMContentLoaded', checkSystem, false);
