
function choose(text) {
  document.getElementById("prompt").value = text;
  document.getElementById("prompt").focus();
}

function ask() {
  const input = document.getElementById("prompt");
  const answer = document.getElementById("answer");
  const question = input.value.trim();

  if (!question) {
    alert("Pehle apna sawaal likho!");
    return;
  }

  answer.style.display = "block";
  answer.textContent = "CHANAKYA AI soch raha hai...";

  const q = question.toLowerCase();

  let reply = "";

  if (q.includes("padhai") || q.includes("study")) {
    reply = "📚 Study Helper\n\nApna topic chhote parts mein padho. Important points likho aur practice questions solve karo. Apna subject aur chapter batao!";
  } else if (q.includes("caption")) {
    reply = "✍️ Caption Maker\n\n1. Dream big, work hard.\n2. Create your own sunshine.\n3. Every day is a new beginning.";
  } else if (q.includes("youtube") || q.includes("title")) {
    reply = "▶️ YouTube Title Generator\n\n1. You Won't Believe This!\n2. Amazing Facts You Must Know\n3. The Ultimate Challenge!";
  } else if (q.includes("translation") || q.includes("translate")) {
    reply = "🌐 Translator\n\nPlease write the sentence and mention the language you want to translate it into.";
  } else if (q.includes("resume")) {
    reply = "📄 Resume Helper\n\nRESUME\n\nName:\nEducation:\nSkills:\nProjects:\nAchievements:\n\nApni details bhar kar resume taiyaar karein.";
  } else if (q.includes("idea") || q.includes("creative")) {
    reply = "💡 Creative Ideas\n\n1. Educational YouTube channel\n2. Daily facts series\n3. Science experiment explanations\n4. History facts posts";
  } else {
    reply = "Namaste! Main CHANAKYA AI ka demo assistant hoon. Abhi mera real AI connection nahi hua hai. Real AI connect hone ke baad main naye sawaalon ke jawab generate kar paunga.";
  }

  answer.textContent = reply;
}
