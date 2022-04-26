

//PROGRAM TO FIND THE NUMBER OF HOURS MINUTES AND SECONDS FROM THE GIVEN SECONDS



var button = document.getElementById('result');
var hours = document.getElementById('hours');
var minutes = document.getElementById('mins');
var sec = document.getElementById('secs');

var extract = function(){

    var str = document.getElementById('textBox').value;
   
    function outputValue(){

        var totalSeconds = parseInt(str);
        var temp = totalSeconds/60;
        var hh = parseInt(temp/60);

        var min = parseInt(temp%60);

        var seco = str - ((hh*60*60) + (min*60))
        // window.alert(hh + " " + min +  " " + sec);

        hours.innerText = hh;
        minutes.innerText = min;
        sec.innerText = seco;

    }

    outputValue();

}

button.addEventListener('click', extract);












//PROGRAM TO SORT AN ARRAY OF STRING ACCORDING TO THEIR FIRST LETTER



// var arr = ["Luv", "Ratan", "Karan", "Aanchal", "Human", "Still"];

// for(var i =0; i<arr.length; i++) {
		
// 			var holder = i;
// 			for(var j =i+1; j<arr.length; j++) {

// 				if(arr[j].charCodeAt(0) < arr[holder].charCodeAt(0)) {
					
// 					holder = j;
					
// 				}
			
// 			}
		
// 			var temp = arr[i];
			
// 			arr[i] = arr[holder];
			
// 			arr[holder] = temp;
			
// 			console.log(arr[i] + " ");
			
			
// }
		

    


//PROGRAM TO CALCULATE CALCULATE XOR OF NUMBERS IN RANGE



var testCases = document.getElementById('testCase');
var submitBtn = document.getElementById('testSubmit');
var left = document.getElementById('L');
var right = document.getElementById('R');
var numOfTestCases;

submitBtn.addEventListener('click', function(){
    testCases.style.boxShadow = '2px 2px 5px 2px black, -2px -2px 5px 5px white';
    left.style.boxShadow ='0px 0px 5px 5px red';
    right.style.boxShadow ='0px 0px 5px 5px red';
    numOfTestCases = document.getElementById('testCase').value;
    // console.log(numOfTestCases);
});

var arr = new Array(numOfTestCases);
let start = new Array(numOfTestCases);
let end = new Array(numOfTestCases);
var complete = document.getElementById('xor');
var i =0;

var XorFunc = function(){


    start[i] = document.getElementById('L').value;
    end[i] = document.getElementById('R').value;

    function finalXor(){

        for(var q =0; q<numOfTestCases; q++){

            var left_ = start[q];
            var right_ = end[q];

            let oddCount = Math.floor((right_ - left_) / 2);
 
            if (right_ % 2 == 1 || left_ % 2 == 1){
                oddCount++;
            }
            
 
            // Check if count of odd Numbers
            // is even or odd
 
            if (oddCount % 2 == 0){
                arr[q] = "even";
            }
            else{
                arr[q]= "odd";
            }

        }

        for(var n in arr){
            console.log(arr[n]);
        }

        var screen = document.getElementById('xor');
        screen.style.backgroundColor = 'black';


        testCases.style.backgroundColor = 'black';
        submitBtn.style.backgroundColor = 'black';
        left.style.backgroundColor = 'black';
        right.style.backgroundColor = 'black';
        nextButton.style.backgroundColor = 'black';

        var msg = document.getElementById('finalMessage');
        msg.style.color = 'white';


    }

    document.getElementById('L').value = '';
    document.getElementById('R').value = '';

    i++;

    if(i==numOfTestCases){
        finalXor();
    }


}




var nextButton = document.getElementById('next');

nextButton.addEventListener('click', XorFunc);








