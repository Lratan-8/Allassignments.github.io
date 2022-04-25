

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





