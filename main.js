
document.getElementById("ex1").style.display = "none";

function exercice1() {
    document.getElementById("ex1").style.display = "block";
    document.getElementById('grosBoutton').style.display='none';

}

function recherche(){
	var champ_recherche = document.getElementById("saisie").value;
	document.location.href="http://google.fr/#q="+champ_recherche; 

}

/*function recherche(){
var elem = document.getElementById("saisie").value;
  var names = [];
  for (var i = 0; i < elem.length; ++ i) {
     names += elem[i]+'+';
  }
  var champ_recherche = names;
  document.location.href="http://google.fr/#q="+champ_recherche; 

}*/

function rechercheChance() {
	alert("pas de bol");

}

setInterval(function(){alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please")},10000);

