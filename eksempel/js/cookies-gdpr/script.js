function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days*864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}
  
function getCookie(name) {
    return document.cookie.split('; ').find(row => row.startsWith(name + '='))?.split('=')[1];
}

function showBanner() {
    document.getElementById('cookie-banner').classList.remove('hidden');
}

function hideBanner() {
    document.getElementById('cookie-banner').classList.add('hidden');
}

function showSettings() {
    document.getElementById('cookie-settings').classList.remove('hidden');
}

function hideSettings() {
    document.getElementById('cookie-settings').classList.add('hidden');
}
document.addEventListener('DOMContentLoaded', () => {
    const consent = getCookie('cookieConsent');
    if (!consent) showBanner();

    document.getElementById('accept-all').addEventListener('click', () => {
        setCookie('cookieConsent', JSON.stringify({ necessary: true, analytics: true, marketing: true }), 180);
        hideBanner();
    });

    document.getElementById('decline-all').addEventListener('click', () => {
        setCookie('cookieConsent', JSON.stringify({ necessary: true, analytics: false, marketing: false }), 180);
        hideBanner();
    });

    document.getElementById('customize').addEventListener('click', () => {
        hideBanner();
        showSettings();
    });

    document.getElementById('save-preferences').addEventListener('click', () => {
        const analytics = document.getElementById('analytics').checked;
        const marketing = document.getElementById('marketing').checked;
        setCookie('cookieConsent', JSON.stringify({ necessary: true, analytics, marketing }), 180);
        hideSettings();
    });

    document.getElementById('change-consent').addEventListener('click', () => {
        showSettings();
    });
});

document.getElementById('check-consent').addEventListener('click', () => {
    const consent = getCookie('cookieConsent');
    if (consent) {
        console.log('Gjeldende samtykke:', JSON.parse(decodeURIComponent(consent)));
    } else {
        console.log('Ingen samtykke er gitt ennå.');
    }
});