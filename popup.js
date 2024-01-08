document.addEventListener('DOMContentLoaded', function () {
    const askButton = document.getElementById('askButton');
    const questionInput = document.getElementById('questionInput');
    const answerResult = document.getElementById('answerResult');
  
    askButton.addEventListener('click', function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { question: questionInput.value }, function (response) {
          answerResult.innerText = response.answer;
        });
      });
    });
  });