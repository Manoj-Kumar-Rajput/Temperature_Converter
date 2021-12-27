
	Fah.oninput =() =>{
			let fah=document.getElementById('Fah').value;
			console.log(fah);
			Cel.value=(parseFloat(fah-32)*5/9).toFixed(2)+" C";
			Kel.value=(parseFloat(Cel.value)+273.15).toFixed(2)+" K";
}

	Cel.oninput =() =>{
			let cel=document.getElementById('Cel').value;			
			Fah.value=(parseFloat(cel*1.8)+32).toFixed(2)+" F";
			Kel.value=((parseFloat(Fah.value)-32)*5/9+273.15).toFixed(2)+" K";
}

	Kel.oninput =() =>{
			let kel=document.getElementById('Kel').value;
			Cel.value=(parseFloat(kel-273.15)).toFixed(2)+" C";
			Fah.value=((parseFloat(Cel.value)*1.8)+32).toFixed(2)+" F";
}
		function reset(){
			document.getElementById('Cel').value="";
			document.getElementById('Fah').value="";
			document.getElementById('Kel').value="";
}