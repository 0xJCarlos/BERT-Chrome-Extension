chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.question) {
        // Implement BERT-based question answering logic here
        // You may need to send a request to your BERT model, which could be hosted externally or locally.
        // Parse the response and send it back.
  
        const dummyAnswer = "This is a dummy answer.";
        sendResponse({ answer: dummyAnswer });
      }
    }
  );