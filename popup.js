import { getAnswer } from "./questionanswering";

function displayAnswer(answer){
  document.getElementById('contentContainer').innerText = "Respuesta recuperada: " + JSON.stringify(answer);
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('askButton').addEventListener('click', async function () {
    var userQuestion = document.getElementById('questionInput').value;
    chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
      var currentTab = tabs[0];
      chrome.tabs.sendMessage(currentTab.id, { action: 'getContent' }, async function (response) {
        var pageContent = response.content;
        var questionAnswer = await getAnswer(userQuestion, pageContent);
        displayAnswer(questionAnswer);
      });
    });
  });
});