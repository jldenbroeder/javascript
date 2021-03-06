// Supprimer une classe
document.body.classList.remove("bg-aqua");
// Ajouter une classe
document.body.classList.add("bg-olive");
// Supprimer 2 classes dans un ID
document.getElementById("first-paragraph").classList.remove("bg-lime", "gray");
// Ajouter une classes dans un ID
document.getElementById("first-paragraph").classList.add("aqua");
// sélectionner tous les éléments qui ont la classe 'bg-silver'
// modifier tout ces éléments en leurs ajoutant la classe "bg-teal"
// modifier tout ces éléments en leurs supprimant la classe "bg-silver"
var silver = document.body.getElementsByClassName("bg-silver");
for (i = 0; i < silver.length; i++){
  silver[i].classList.add("bg-teal");
  silver[i].classList.remove("bg-silver");
}
// sélectionne tous les éléments de type 'blockquote'
// modifier tout ces éléments en leurs ajoutant la classe "bg-white"
var blanc = document.body.getElementsByTagName("blockquote");
for (i = 0; i < blanc.length; i++){
  blanc[i].classList.add("bg-white");
}
// EXERCICE 2 : Selecteurs CSS
////////////////////////////////////////////////////////////
// avec querySelector sélectioner l'élément 'my-table'
// lui ajouter la classe "bg-purple"
var selecteurMyTable = document.querySelector('#my-table');
selecteurMyTable.classList.add("bg-purple");
// avec querySelectorAll sélectioner tous les paragraphes dans 'container'
// modifier tout ces éléments en leurs ajoutant la classe 'shadow'
var selectContainerP = document.querySelectorAll('.container p');
for (j=0; j < selectContainerP.length; j++){
  selectContainerP[j].classList.add("shadow");
}
// EXERCICE 3
////////////////////////////////////////////////////////////
// sélectionne tous les éléments de type 'pre'
// avec la propriété style change la couleur de texte
// avec la propriété style change la couleur de fond grâce à backgroundColor
// avec la propriété style ajouter un border-top de 3px solid red (n'oublie pas que tu peux acceder au propriété d'un objet grâce comme ceci : ["prop-name"] )
// avec la propriété style ajouter un border-bottom de 3px solid red
var elPre = document.querySelectorAll('pre');
for (k = 0; k < elPre.length; k++){
  elPre[k].style.color = "red";
  elPre[k].style.backgroundColor = "rgb(153, 147, 157)";
  elPre[k].style.borderTop = "3px solid red";
  elPre[k].style.borderBottom = "3px solid red";
}
  // sélectionne le premier élément de type 'h3'
  // remplacer son contenu HTML en <em>Itelic title ! yeah !</em>
  // sélectionne le premier élément de type 'h2'
  // remplacer son contenu texte par en <strong>HTML doens't work !</strong>
// var elH3 = document.querySelector('h3').innerHTML;
document.querySelector('h3').innerHTML = '<em>Itelic title ! yeah !</em>';
document.querySelector('h2').style.color = "black";
document.querySelector('h2').innerText = "<strong>HTML doens't work !</strong>";
// EXERCICE 4 : Création d'éléments
/////////////////////////////////////////////////////////////
    // sélectioner le premier 'ul'
    // crée un élément de type 'li'
    // ajouter ce texte Mon meilleur ami est <a href='http://www.google.com'>Google</a> dans le 'li'
    // ajouter ce 'li' l'élément dans le ul
    // sélectionner le premier lien dans le 'li' précedement crée
    // avec la propriété style change la couleur de texte de ce lien
var premierUl = document.querySelector('ul');
var li = document.createElement('li');
li.innerHTML = "Mon meilleur ami est <a href='http://www.google.com'>Google</a>";
premierUl.appendChild(li);
var link = premierUl.querySelector('li a');
link.style.color = "red";
// EXERCICE 4 : Création et suppression de plusieurs éléments
// sélectionner le premier élément 'ol'
// faire une boucle sur tous les enfants de ce dernier grâce à sa propriété children
// supprimer chaque enfant de 'ol' grâce à removeChild()
// déclare dans un tableau les valuers suivantes : ["Silent Teacher","Code Monkey", "CodeCombat"]
// faire une boucle sur tous les enfants du tableau précédement crée
// pour chaque valeur du tableau crée un élément 'li' crâce à document.createElement()
// ajouter à chaque 'li' la valeur courrante tableau
// ensuite ajouter chaque 'li' à l'élément 'ol' précédement sélectionné
var premierOl = document.querySelector('ol');
var max = premierOl.children.length;
console.log(max);
for (l = 0; l < max; l++){
    premierOl.removeChild(premierOl.children[0]);
}
var monTableau = ["Silent Teacher","Code Monkey", "CodeCombat"];
for (m = 0; m < monTableau.length; m++){
  var li = document.createElement('li');
  li.innerHTML = monTableau[m];
  premierOl.appendChild(li);
}
