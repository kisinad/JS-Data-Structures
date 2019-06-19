var primeNumber = (endNumber) =>{
	var selectedPrimeNumbers =[];
	var arrayOfNumbers = [ ...Array(endNumber).keys() ];//Generates sequencial numbers from 0 to 100 and stores in array arrayOfNumbers
	//let i=0;
	//while(i<endNumber)yield i++

	for (var i=0;i<arrayOfNumbers.length;i++){ //loops through array
		if(arrayOfNumbers[i]<2){
			return false;
			break;}
    	 if((arrayOfNumbers[i]%2)===0){
			    return false;
			    break;}}
			   
		//else 
		//return true;
    	//for(var i=arrayOfNumbers[i]; i<arrayOfNumbers[arrayOfNumbers.length-1]; i++){
			//selectedPrimeNumbers[]=i;
			
		selectedPrimeNumbers.push(arrayOfNumbers[i]); //pushes even numbers to the array called selectedPrimeNumbers
			//console.log(arrayOfNumbers.length);
		
		console.log(selectedPrimeNumbers);
	}
		


primeNumber(100);

