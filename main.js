function primeNumber(endNumber){
	var selectedPrimeNumbers =[];
	var arrayOfNumbers = [ ...Array(endNumber).keys() ];//Generates sequencial numbers from 0 to 100 and stores in array arrayOfNumbers
	//let i=0;
	//while(i<endNumber)yield i++

	for (var i=0;i<arrayOfNumbers.length;i++){ //loops through array
		if((arrayOfNumbers[i]%2)==0){
			//selectedPrimeNumbers[]=i;
			selectedPrimeNumbers.push(arrayOfNumbers[i]); //pushes even numbers to the array called selectedPrimeNumbers
			//console.log(arrayOfNumbers.length);
		}


	}
		console.log(selectedPrimeNumbers);
}
primeNumber(100);
//console.log(selectedPrimeNumbers);
