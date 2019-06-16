 (function () {

  let dogAgeInput = document.getElementById('dogAge');
  let humanAgeInput = document.getElementById('humanAge');

  dogAgeInput.oninput = (event) => {

    let dogAge = +dogAgeInput.value;

    if (isNaN(dogAge) || dogAge < 0) {
      humanAgeInput.value = 'Dog age is invalid'
      return false;
    }

    let humanAge = dogAge * 7;
    humanAgeInput.value = humanAge;
  }


  humanAgeInput.oninput = (event) => {

      let humanAge = +humanAgeInput.value;

      if (isNaN(humanAge) || humanAge < 0) {
        dogAgeInput.value = 'Human age is invalid'
        return false;
      }

      let dogAge =  humanAge / 7;
      dogAge = Math.floor(dogAge)

      dogAgeInput.value = dogAge;
  }

 })();
