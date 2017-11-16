function CreatePlayer()
{
  var playername = document.getElementById('playername').value;
  var playercolour = document.getElementById('playercolour').value;
  var playerhealth = document.getElementById('playerhealth').value;
  var playerweapon = document.getElementById('playerweapon').value;

if (playerweapon == 1){playerweapon='Crossbow of much hurting'}
  else if (playerweapon == 2) {playerweapon='Broadsword of so slicing'}
else {playerweapon='Wand of amaze magics'}




  document.getElementById("name").innerHTML = playername;
  document.getElementById("colour").style.backgroundColor = playercolour;
  document.getElementById("health").innerHTML = playerhealth;
  document.getElementById("weapon").innerHTML = playerweapon;


}
