function calculateSum(event) {
  event.preventDefault();

  var checkboxes = document.querySelectorAll('input[type="checkbox"]');

  var sum = 0;

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      sum += parseInt(checkbox.value);
    }
  });

  document.getElementById("result").textContent = " " + sum;
}
