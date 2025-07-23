document.addEventListener("DOMContentLoaded", function () {
  // Récupère automatiquement le texte du <title>
  let txt = document.title + "   "; // ajoute quelques espaces pour la pause
  const speed = 300; // vitesse en ms

  function defileTitle() {
    document.title = txt;
    txt = txt.substring(1) + txt.charAt(0);
  }

  setInterval(defileTitle, speed);
});
