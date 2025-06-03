function toggleChat() {
  const chatBox = document.getElementById("chatBox");
  chatBox.style.display = chatBox.style.display === "block" ? "none" : "block";
}

function autoResize(textarea) {
  textarea.style.height = "auto"; // Reset height
  textarea.style.height = textarea.scrollHeight + "px"; // Set to scroll height
}


function startChat() {
   const userInput = document.getElementById("userMessage").value;
  const message = encodeURIComponent(userInput);
  // Replace with your actual admin WhatsApp number (in international format without +)
  const adminNumber = "917406499990";
  //const message = encodeURIComponent("Hello, I need your help.");
  const whatsappURL = `https://wa.me/${adminNumber}?text=${message}`;
  window.open(whatsappURL, "_blank");
}
