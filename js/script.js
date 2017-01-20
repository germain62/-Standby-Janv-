
function reponse(id) {

    if(document.getElementById(id).style.display=='block')
    document.getElementById(id).style.display = 'none';

    else
    document.getElementById(id).style.display = 'block';
}


function verif_champ(obj, id)
{
if ( obj.value== "")
 document.getElementById(id).innerHTML="Un champ n'est pas remplie";
 else document.getElementById(id).innerHTML="";
}

function lorem(){
  document.getElementById("titre").innerHTML="All-in or nothing !";
  document.getElementById("origine").innerHTML="Origine du poker";
  document.getElementById("porigine").innerHTML="Le poker doit probablement son étymologie au jeu français 'poque' et il a probablement été importé par des Français partis en Louisiane en quête d'idéal.Les hommes jouent donc à des formes de poker, partout dans le monde, depuis des siècles, bien avant que le poker n'atteigne la côte est des États-Unis. C'est cependant bien là-bas que le poker moderne est né, fruit de la mixité de ses ancêtres et de la diversité des populations qui y ont émigré en masse entre 1860 et 1920.";
  document.getElementById("texas").innerHTML="Texas Holdem";
  document.getElementById("ptexas").innerHTML="Le Texas Hold'em convient particulièrement bien aux nouveaux joueurs en raison de ses règles très simples et rapides à apprendre. Au Texas Hold'em, chaque joueur reçoit deux cartes privatives (qui sont distribuées face cachée) qui leur appartiennent. Tous les joueurs utilisent ensuite cinq cartes communes (qui sont distribuées au centre de la table, face exposée, pour être partagées par tous les joueurs actifs) dans le but de former la meilleure combinaison de cinq cartes possible. Au Texas Hold'em, un joueur peut utiliser n'importe quelle combinaison des sept cartes disponibles pour constituer la main la plus forte possible et ce avec une, deux ou bien aucune des ses deux cartes privatives. Consultez le Classement des Mains de Poker pour connaître toutes les combinaisons.";
  document.getElementById("question").innerHTML="Questions";
  document.getElementById("rep").innerHTML="Quel est la plus grosse main du Texas Holdem?";
  document.getElementById("rep2").innerHTML="Que signifie faire 'All-in' ?"
}
