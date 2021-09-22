// HTMLdagi inputlarni chaqirib olamiz
var elInputForm = document.querySelector(".input-form");
var elCelciusInput = document.querySelector(".celcius-input");
var elFarenheitInput = document.querySelector(".farenheit-input");

// HTMLdagi outputni chaqirib olamiz
var elOutput = document.querySelector(".result-output");

// Funksiya boshlaymiz  
elCelciusInput.addEventListener('input', function(){
    var elFahrenheitResult  = parseFloat(elCelciusInput.value.trim(), 10) * 9/5 + 32;
    elFarenheitInput.value = elFahrenheitResult;
    elOutput.textContent =  elCelciusInput.value + '°C×9/5+32 =' + elFahrenheitResult + '°F';
});


elFarenheitInput.addEventListener("input", function(){
    var elCelciusResult  = (parseFloat(elFarenheitInput.value.trim(), 10) - 32 ) * 5/9;
    elCelciusInput.value = elCelciusResult;
    elOutput.textContent =  elFarenheitInput.value + '°F-32)×5/9 =' + elCelciusResult + '°C';
});



