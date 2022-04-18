
let form_submit = document.querySelector("#submit");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let message = document.querySelector("#message");

form_submit.addEventListener("click", function(event) {
    event.preventDefault();
    let senderEmail = null;
    let senderName = null;
    let senderMessage = message.value;
    
    if(name.value.trim() === "") {
        name.style.border = "solid 1px red";
    } else {
        senderName = name.value;
    }
    if(email.value.trim() === "" || !checkEmail(email.value)) {
        email.style.border = "solid 1px red";
    } else {
        senderEmail = email.value;
    }

    if(senderEmail != null && senderName != null ) {
        sendEmailMessage(senderName, senderEmail, senderMessage);
    }
})

name.addEventListener("keyup", function() {
    if(name.value.trim() != "") {
        name.style.border = "solid 1px #726659";
    }
})
email.addEventListener("keyup", function() {
    if(email.value.trim() != "" && checkEmail(email.value)) {
        email.style.border = "solid 1px #726659";
    }

})

//check if email is valid
function checkEmail(email) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
      return true;
    } else {
      return false;
    }
}

function sendEmailMessage(name, email, message) {
    let payload = {
       
    }
    fetch("https://markalester.com/contact.php", {
        method: "POST",
        body: new URLSearchParams({
            "name": name,
            "email": email,
            "comments": message
        })
    }).then(res => { return res }).then(response => {success();})
}

function success() {
    let form = document.querySelector("#form");
    form.remove();
    let parent = document.querySelector(".comment");
    parent.innerHTML += '<h2 class="success_message">Thank you for your comments.</h2>';
}