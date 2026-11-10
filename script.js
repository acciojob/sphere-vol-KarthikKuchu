function volume_sphere() {
    let radiusInput = document.getElementById("radius").value;
	let radius = parseFloat(radiusInput);

	let volumeField = document.getElementById("volume");

	if(isNaN(radius) || radius < 0){
		volumeField.value = "NaN"
	}
	else {
		let volume = (4/3) * Math.PI*Math.pow(radius, 3);
		volumeField.value = volume.toFixed(4);
		
	}
	return false;
  
} 
window.onload = function () {
	document.getElementById('MyForm').onsubmit = volume_sphere;
};
