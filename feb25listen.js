console.log("Feb 25")

countries = ["Canada","India","China","Bahamas"]
population = [1,330,10000,10000]

document.getElementById("clickMe").onclick = clicked;

function clicked(){
	var value = document.getElementById("fname").value
	for(i = 0; i <countries;i++){
		if (value === countries[i]){
			console.log(value+" has a population of "+population[i])
			document.getElementById("results").innerHTML = value+" has a popukatuib if "+population[i] +" million!"
		}
	}
	console.log(value);
}