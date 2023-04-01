function genererArmePistol() {
    // Tableaux contenant les armes et les pistols aléatoires
    var armes = ["Galil AR / FAMAS", "AK-47 / M4A4 / M4A1-S", "SSG 08", "SG 553 / AUG", "AWP", "G3SG1 / SCAR-20", "MAC-10 / MP9", "MP7 / MP5-SD", "UMP-45", "P90", "PP-Bizon", "Nova", "XM1014", "Sawed-Off / MAG-7", "M249", "Negev"];
    var pistols = ["Glock-18 / USP-S / P2000", "Dual Berettas", "P250", "Tec-9 / CZ75-Auto / Five-SeveN", "Desert Eagle / R8 Revolver"];
  
    // Générer un index aléatoire pour les armes et les pistols
    var randomIndexArmes = Math.floor(Math.random() * armes.length);
    var randomIndexPistols = Math.floor(Math.random() * pistols.length);
  
    // Récupérer l'arme et le pistol correspondant à l'index aléatoire
    var armeAleatoire = armes[randomIndexArmes];
    var pistolAleatoire = pistols[randomIndexPistols];
  
    // Afficher les résultats dans le div "resultat"
    var resultatDiv = document.getElementById("resultats-container");
    resultatDiv.innerHTML = "Arme : " + armeAleatoire + "<br>Pistol/Eco : " + pistolAleatoire;
  }
  
  function genererStrat() {
    document.getElementById("resultats-container").innerHTML = "";
    
    var strats = ["Rush B", "Rush A", "Play your spawn", "Fake B", "Fake A", "Contact A", "Contact B", "Execute A", "Execute B", "Rush Mid / Outside", "Contact Mid / Outside", "Mid / Outside", "A", "B", "Fake / Execute the Mid / Outside"];
    var resultat = strats[Math.floor(Math.random() * strats.length)];
  
    // Ajouter un élément de menu déroulant si le bouton "Stratégie Aléatoire" est appuyé
    var dropdownMenu = document.createElement("select");
    dropdownMenu.id = "mapSelection";
    dropdownMenu.style.display = "none";
    dropdownMenu.innerHTML = "<option value=''>Choisir une carte</option><option value='Dust2'>Dust 2</option><option value='Inferno'>Inferno</option><option value='Mirage'>Mirage</option><option value='Nuke'>Nuke</option><option value='Overpass'>Overpass</option><option value='Vertigo'>Vertigo</option><option value='Ancient'>Ancient</option><option value='Anubis'>Anubis</option><option value='Train'>Train</option><option value='Cache'>Cache</option>";
    
    document.getElementById("resultats-container").appendChild(dropdownMenu);
  
    // Afficher le menu déroulant lorsque le bouton est appuyé
    document.getElementById("mapSelection").style.display = "block";
  
    // Mettre à jour la réponse en fonction de la carte sélectionnée
    document.getElementById("mapSelection").onchange = function() {
      var selectedMap = document.getElementById("mapSelection").value;
      var strat = resultat + " sur " + selectedMap;
      document.getElementById("resultats-container").innerHTML = strat;

      document.getElementById("resultats-container").innerHTML = resultat;
    var dropdownMenu = document.getElementById("mapSelection");
    if (dropdownMenu) {
    dropdownMenu.remove();
}

    }
  }  
  // Sélectionne le conteneur pour le menu déroulant
const mapContainer = document.querySelector("#map-container");

// Crée l'élément "select" pour le menu déroulant
const selectElement = document.createElement("select");
selectElement.id = "maps";

// Crée les options pour chaque map
const mapOptions = ["Dust 2", "Inferno", "Mirage", "Nuke", "Overpass", "Vertigo", "Ancient", "Anubis", "Train", "Cache"];
for (const option of mapOptions) {
  const optionElement = document.createElement  ("option");
  optionElement.value = option;
  optionElement.text = option;
  selectElement.appendChild(optionElement);
}

// Ajoute l'élément "select" au conteneur
mapContainer.appendChild(selectElement);

function afficherResultatMap() {
    const mapSelectionnee = document.getElementById("maps").value;
    const resultatContainer = document.getElementById("resultats-container");
    resultatContainer.innerHTML = "Map sélectionnée : " + mapSelectionnee;
  }
  
  function genererCTStrat() {
    document.getElementById("resultats-container").innerHTML = "";
    
    var strats = ["A", "B", "Mid / Outside", "A BP", "B BP", "Rush A", "Rush B", "Rush Mid / Outside", "A Avancé", "B Avancé", "A Reculé", "B Reculé", "Mid / Outside Avancé", "Mid / Outside Reculé", "Play your spawn"];
    var resultat = strats[Math.floor(Math.random() * strats.length)];
  
    // Ajouter un élément de menu déroulant si le bouton "Stratégie Aléatoire" est appuyé
    var dropdownMenu = document.createElement("select");
    dropdownMenu.id = "mapSelection";
    dropdownMenu.style.display = "none";
    dropdownMenu.innerHTML = "<option value=''>Choisir une carte</option><option value='Dust2'>Dust 2</option><option value='Inferno'>Inferno</option><option value='Mirage'>Mirage</option><option value='Nuke'>Nuke</option><option value='Overpass'>Overpass</option><option value='Vertigo'>Vertigo</option><option value='Ancient'>Ancient</option><option value='Anubis'>Anubis</option><option value='Train'>Train</option><option value='Cache'>Cache</option>";
    
    document.getElementById("resultats-container").appendChild(dropdownMenu);
  
    // Afficher le menu déroulant lorsque le bouton est appuyé
    document.getElementById("mapSelection").style.display = "block";
  
    // Mettre à jour la réponse en fonction de la carte sélectionnée
    document.getElementById("mapSelection").onchange = function() {
      var selectedMap = document.getElementById("mapSelection").value;
      var strat = resultat + " sur " + selectedMap;
      document.getElementById("resultats-container").innerHTML = strat;

      document.getElementById("resultats-container").innerHTML = resultat;
    var dropdownMenu = document.getElementById("mapSelection");
    if (dropdownMenu) {
    dropdownMenu.remove();
}

    }
  }  