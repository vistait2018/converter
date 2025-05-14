/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

 
 const btnEl = document.getElementById("btn-el")
 const inputText = document.getElementById("input-text")
const ulEl = document.getElementById("ul-el")

 let results= []
 let content = '';
 inputText.addEventListener('keydown', function(event) {
  const key = event.key;

  if (isNaN(key) && key !== 'Backspace' && key !== 'Tab' && key !== 'ArrowLeft' && key !== 'ArrowRight') {
    event.preventDefault();
  }
});
function validateInput(val){
    if(!val){
       return alert("kindly enter a valid number")
    }
    if(typeof val !== 'number'){
        val = Number(val)
    }
    return val;
 }

 btnEl.addEventListener("click", function(){
     clear() 
   
     let val = validateInput(inputText.value)
     getValues(val)
   
     render()

 })
function render(){
    ulEl.innerHTML = ""
    content = ""
    console.log(content)
    for(let i =0; i< results.length;i++){
     content += `<div class="result">
                    <p  class="heading">${results[i].heading}</p>
                    <p  class="content">${results[i].content}</p>
                </div>`
    }
   
    results.push(content)
    ulEl.innerHTML =content
}
function getValues(val) {
    
 results.push(convertToMeterToFeet(val))
 results.push(convertLitersToGallons(val))
 results.push(convertKilosToPounds(val))
 return results
 
}
function convertToMeterToFeet(val) {
  return {
    heading: "Length (Meter/Feet)",
    content: `${val} meters = ${(val * 3.182).toFixed(3)} feet | ${val} feet = ${
      (val / 3.182).toFixed(3)
    } meters`,
  };
}

function convertLitersToGallons(val) {
  return {
    heading: "Volume (Liters/Gallons)",
    content: `${val} liters = ${
      (val * (0.264)).toFixed(3)
    } gallons | ${val} gallons = ${(val / 0.264).toFixed(3)} liters`,
  };
}

function convertKilosToPounds(val) {
  return {
    heading: "Mass (Kilograms/Pounds)",
    content: ` ${val} kilos = ${(val * 2.204).toFixed(3)} pounds | ${val} pounds = ${
      (val / 2.204).toFixed(3)
    } kilos`,
  };
}
function clear() {
    ulEl.innerHTML = "";
    content =""
    results =[]
}
// console.log(getValues(30));
