const creditsArray = [2.5, 5, 5, 5, 5, 5, 2.5, 2.5, 2.5, 2.5, 2.5, 5, 12.5, 5, 2.5];

const checkboxesList = document.querySelectorAll("input[type='checkbox']");

function CalculateScore() {
  let totalEC = 0;
  checkboxesList.forEach(checkbox => {
    if (checkbox.checked) {
      totalEC = totalEC + creditsArray[checkbox.value];
    }
  })
  document.getElementById("totalEC").innerHTML = totalEC;

  let elementBar = document.getElementById("progress");
  let totalPercentage = Math.round(totalEC * (10/6));
  document.getElementById("progress").innerHTML = totalPercentage + "%";
  elementBar.style.width = totalPercentage + '%';
}





 