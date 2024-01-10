chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'getContent') {
      sendResponse({ content: document.body.innerText });
    }
  });