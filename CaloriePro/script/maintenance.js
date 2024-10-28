function finding() {
  let age = Number(document.querySelector('.js-age').value);
  let gender = document.querySelector('.js-option').value;
  let weight = Number(document.querySelector('.js-weight').value);
  let height = Number(document.querySelector('.js-height').value);
  let active = document.querySelector('.js-option1').value;

  let MC;

  if (gender === 'male') {
    if (weight === 0 || height === 0 || age === 0) {
      MC = 0;
    } else {
      const BMR = 655 + (435 * weight * 22)/1000 + (47 * height * 394)/10000 - (47 * age)/10;
      MC = Math.round(BMR * active);
    }
     
  } else if (gender === 'female'){
    if (weight === 0 || height === 0 || age === 0) {
      MC = 0;
    } else {
      const BMR = 66 + (623 * weight * 22)/1000 + (127 * height * 394)/10000 - (6.76 * age)/100
      MC = Math.round(BMR * active);
    }
     
  }
  const html = document.querySelector('.js-MC')
  html.innerHTML = `<a href="weight-gain.html">
  <button class="weight-gain-button">Weight Gain</button>
</a>
${MC} CAL <a href="weight-loss.html">
<button class="weight-loss-button">Weight Loss</button>
</a>`
  
}