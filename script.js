function changeText() {
  const message = document.getElementById("message");
  message.textContent = "You have clicked change text!";
}

function toggleHighlight() {
  const message = document.getElementById("message");
  message.classList.toggle("highlight");
}

function toggleParagraph() {
  const section = document.getElementById("dynamic-section");
  const existing = document.getElementById("new-paragraph");

  if (existing) {
    section.removeChild(existing);
  } else {
    const para = document.createElement("p");
    para.id = "new-paragraph";
    para.textContent = "This is a dynamically added paragraph!";
    section.appendChild(para);
  }
}
