document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('askButton').addEventListener('click', function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var currentTab = tabs[0];
        chrome.tabs.sendMessage(currentTab.id, { action: 'getContent' }, function (response) {
          document.getElementById('tabContent').innerText = response.content;
        });
      });
    });
  });