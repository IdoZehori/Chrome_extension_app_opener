function openInStore(url) {
    chrome.tabs.create({url: url});
}


window.addEventListener('load', () => {

    document.getElementById('appsForm').addEventListener('submit', (evt) => {
        evt.preventDefault();

        let appsForm = new FormData(document.querySelector("#appsForm"));

        let apps = appsForm.get('appList');
        apps = apps.split(",");

        const os = appsForm.get('os');
        apps.forEach(function (currentValue) {
            let path = '';
            const currentValueClean = currentValue.replace(' ', '');

            if (os === 'IOS') {
                path = 'https://itunes.apple.com/us/app/id' + currentValueClean + '?mt=8';

            } else {
                path = 'https://play.google.com/store/apps/details?id=' + currentValueClean + '&hl=en';
            }
            openInStore(path)

        });


    });
});



