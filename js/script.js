document.querySelector(".num").addEventListener("keypress", function (error) {
  if (
    (error.which != 8 && error.which != 0 && error.which < 48) ||
    error.which > 57
  ) {
    error.preventDefault();
  } else if (document.getElementById("number").value.length == 10) {
    error.preventDefault();
  }
});
document
  .querySelector(".form-control")
  .addEventListener("keypress", function (error) {
    if (
      (error.which != 32 && error.which < 65) ||
      (error.which > 90 && error.which < 97) ||
      error.which > 122
    ) {
      error.preventDefault();
    } else if (error.which == 32) {
      if (document.getElementById("name").value == "") {
        error.preventDefault();
      }
    }
  });

document.querySelector(".msg").addEventListener("keypress", function (error) {
  if (error.which == 32) {
    if (document.getElementById("comment").value == "") {
      error.preventDefault();
    }
  }
});
