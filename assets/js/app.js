const creditsArray = [2.5, 5, 5, 5, 5, 5, 2.5, 2.5, 2.5, 2.5, 2.5, 5, 12.5, 5, 2.5];

const checkboxesList = document.querySelectorAll("input[type='checkbox']");

/**
 * Calculates totalEC
 * makes porgress bar move based on totalEC
 */
function CalculateScore() {
  let totalEC = 0;
  checkboxesList.forEach(checkbox => {
    if (checkbox.checked) {
      totalEC = totalEC + creditsArray[checkbox.value];
    }
  })
  document.getElementById("totalEC").innerHTML = totalEC;
  const elementBar = document.getElementById("progress");
  const totalPercentage = Math.round(totalEC * (10/6));
  document.getElementById("progress").innerHTML = totalPercentage + "%";
  elementBar.style.width = totalPercentage + '%';
}