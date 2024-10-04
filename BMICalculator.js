const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');


  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result 
    results.innerHTML = `<span>${bmi}</span>`;  
     // Optional: BMI Range Guide bhi display kar sakte hain
          if (bmi < 18.6) {
            results.innerHTML += "<br> (Underweight)";
          } else if (bmi >= 18.5 && bmi <= 24.9) {
          results.innerHTML += " (Normalweight)";
          } else {
          results.textContent += " (Overweight)";
          }
      }
       
});



