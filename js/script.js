/* script.js */

// Função para codificar o texto
function encodeText() {
    let inputText = document.getElementById('inputText').value;
    let encodedText = btoa(inputText); // Codifica usando Base64
    document.getElementById('outputText').value = encodedText;
}

// Função para decodificar o texto
function decodeText() {
    let encodedText = document.getElementById('inputText').value;
    let decodedText = atob(encodedText); // Decodifica usando Base64
    document.getElementById('outputText').value = decodedText;
}

// Função para copiar o texto codificado/decodificado
function copyText() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móveis
    document.execCommand('copy');
    alert("Texto copiado para a área de transferência!");
}
