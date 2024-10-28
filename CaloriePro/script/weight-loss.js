function submit() {
  const MC = Number(document.querySelector('.js-MC').value);
  const kgs = Number(document.querySelector('.js-kgs').value);
  const weeks = Number(document.querySelector('.js-weeks').value);
  const weight = Number(document.querySelector('.js-weight').value);
  let targets = '<p class="target-weight">Target Weights</P>';

  const kgPerWeek = Number((kgs/weeks).toFixed(1));
  let targetKg = (weight*10 - kgPerWeek*10)/10;


  if (kgPerWeek <= weight/100) {
    for (let i = 1; i <= weeks; i++) {
        const HTML = `
        <p class="target">Week ${i}: ${targetKg} Kg</p>`;
        targetKg = (targetKg*10 - kgPerWeek*10)/10 ;
        targets += HTML;
    }
    const surplus = MC - (kgPerWeek * 1100);
    document.querySelector('.js-target')
      .innerHTML = targets;

      const HTML1 = `
        <p class="red">Your Deficit Calories</p>
        <p class="red">${surplus}</p>`

    document.querySelector('.js-surplus').innerHTML = HTML1;      
} else if (kgPerWeek > weight/100) {
    const HTML1 = `
        <p class="red">It's is not a preferrable weight loss</p>
        <p class="red">Please change (you want to weight loss) or (Number of weeks)</p>`

    document.querySelector('.js-surplus').innerHTML = HTML1;   
    }
} 