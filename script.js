function calculateAge() {
  var name = document.getElementById("name").value;
  var birthdate = document.getElementById("birthdate").value;
  var exactBirthdate = document.getElementById("exactBirthdate").checked;
  var futureDate = document.getElementById("futureDate").value;
  var today = new Date();
  var birthDate = new Date(birthdate);
  var age = today.getFullYear() - birthDate.getFullYear();
  var month = today.getMonth() - birthDate.getMonth();
  var day = today.getDate() - birthDate.getDate();

  if (!exactBirthdate) {
    age = today.getFullYear() - birthDate.getFullYear();
    document.getElementById("result").innerHTML =
      "Hi, " + name + "! Your age is: " + age + " years old.";
  } else {
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
      month += 12;
    }
    if (day < 0) {
      month--;
      day += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    document.getElementById("result").innerHTML =
      "Hi, " +
      name +
      "! Your age is: " +
      age +
      " years, " +
      month +
      " months, and " +
      day +
      " days old.";
  }

  if (futureDate) {
    var futureDateTime = new Date(futureDate).getTime();
    var birthDateTime = birthDate.getTime();
    var diffTime = futureDateTime - birthDateTime;
    var diffDays = Math.floor(diffTime / (1000 * 3600 * 24));
    var diffWeeks = Math.floor(diffDays / 7);
    var remainingDays = diffDays % 7;
    document.getElementById("result").innerHTML +=
      "<br>Your age at " +
      futureDate +
      " will be: " +
      diffWeeks +
      " weeks and " +
      remainingDays +
      " days old.";
  }
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("birthdate").value = "";
  document.getElementById("exactBirthdate").checked = false;
  document.getElementById("futureDate").value = "";
  document.getElementById("result").innerHTML = "";
}
