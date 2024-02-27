document.addEventListener("DOMContentLoaded", function () {
    const startRecognitionButton = document.getElementById("startRecognition");
    const resultOutput = document.getElementById("result");
  
    // Comprobamos si el navegador soporta el reconocimiento de voz
    if (!('webkitSpeechRecognition' in window)) {
      startRecognitionButton.disabled = true;
      resultOutput.textContent = "Su navegador no soporta el reconocimiento de voz.";
    } else {
      const recognition = new webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "es-ES"; // Establecemos el idioma
  
      recognition.onstart = function() {
        startRecognitionButton.textContent = "Escuchando...";
      };
  
      recognition.onerror = function(event) {
        startRecognitionButton.textContent = "Comenzar Reconocimiento";
        resultOutput.textContent = "Error durante el reconocimiento: " + event.error;
      };
  
      recognition.onend = function() {
        startRecognitionButton.textContent = "Comenzar Reconocimiento";
      };
  
      recognition.onresult = function(event) {
        const result = event.results[0][0].transcript;
        resultOutput.textContent = "La orden identificada es: " + result;
      };
  
      startRecognitionButton.addEventListener("click", function () {
        recognition.start();
      });
    }
  });
  