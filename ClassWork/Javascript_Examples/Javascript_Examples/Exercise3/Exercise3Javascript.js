var isLightOn = true;
function ToggleLight()
{
	if(isLightOn==true)
	lightBulb.src="img/bulb-on.png"

	else{
		lightBulb.src="img/bulb-off.png"
	}

}
function AddNumbers(numA,numB)
{
	document.getElementById("numbers").innerHTML=numA + numB;
}
