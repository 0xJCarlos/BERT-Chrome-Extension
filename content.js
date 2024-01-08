chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.question) {
        const content = document.body.innerText || document.body.textContent;
        // Implement logic to process the content, and then send the response back.
        sendResponse({ content: content });
      }
    }
  );