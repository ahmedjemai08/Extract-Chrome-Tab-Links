document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('extract-btn').addEventListener('click', () => {
        chrome.windows.getAll({ populate: true }, function(windows) {
            windows.forEach((win, index) => {
                let urls = win.tabs.map(tab => tab.url);
                let blob = new Blob([urls.join('\n')], { type: 'text/plain' });
                let url = URL.createObjectURL(blob);
                let a = document.createElement('a');
                a.href = url;
                a.download = `tabs_urls_window_${index + 1}.txt`;
                a.click();
                URL.revokeObjectURL(url);
            });
        });
    });
});
