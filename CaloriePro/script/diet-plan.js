function calculate(nutricition) {
  const caloriesCarb = document.querySelector('.js-caloriesCarb-input').value;
  const caloriesProtein = document.querySelector('.js-caloriesProtein-input').value;
  const caloriesFat = document.querySelector('.js-caloriesFat-input').value;
  if (nutricition === 'carb') {
    const result = Math.round((0.5*Number(caloriesCarb))/4)
    document.querySelector('.js-carb-gram').innerHTML=`${result} Grams`
  } 
  if (nutricition === 'protein') {
    const result = Math.round((0.2*Number(caloriesProtein))/4)
    document.querySelector('.js-protein-gram').innerHTML=`${result} Grams`
  } 
  if (nutricition === 'fat') {
    const result = Math.round((0.3*Number(caloriesFat)/9))
    document.querySelector('.js-fat-gram').innerHTML=`${result} Grams`
  } 
}