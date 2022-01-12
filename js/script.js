document.querySelector(".number").addEventListener("keypress", function (e) {
  if ((e.which != 8 && e.which != 0 && e.which < 48) || e.which > 57) {
    e.preventDefault();
  } else if (document.getElementById("number").value.length == 10) {
    e.preventDefault();
  }
});
document.querySelector(".name").addEventListener("keypress", function (error) {
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

document.querySelector(".message")
  .addEventListener("keypress", function (error) {
    if (error.which == 32) {
      if (document.getElementById("message").value == "") {
        error.preventDefault();
      }
    }
  });

  $("#submit-form").submit((e) => {
      if (validateName() && validateMsg()){
        e.preventDefault()
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbznbj9IWU1g_OjbqnXNhKxFdyJw-CPhA7FCbvOStgdwORvVkZEjQsB0cEYwIY3By4Kt/exec",
            data: $("#submit-form").serialize(),
            method: "post",
            success: function (response) {
                alert("Form submitted successfully")
                window.location.reload()
            },
            error: function (err) {
                alert("Something Error")

            }
        })}else{
          alert('enter details properly')
      }
    })
    function validateName() {

        if (document.getElementById("name").value[0] == " ") {
            return false;
        }
        else{
            return true;
        }
        
    }
    
    function validateMsg() {
        
        let x = document.forms["submit-form"]["message"].value;
        console.log(x)
        if (x[0] == " ") {
            return false;
        }
        else{
            return true;
        }
        
    }