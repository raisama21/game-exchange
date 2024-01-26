const changeLanguage = document.querySelector(".change-language");
const caret = document.querySelector(".caret");

const fname = document.querySelector(".fname");
const lname = document.querySelector(".lname");
const email = document.querySelector(".email");
const message = document.querySelector(".message");
const submitBtn = document.querySelector(".submit-btn");

changeLanguage.addEventListener("click", function () {
    caret.classList.toggle("invert");
});

submitBtn.addEventListener("click", function () {
    const query = {
        fistName: fname.value,
        lastname: lname.value,
        email: email.value,
        message: message.value,
    };

    console.log(query);

    fname.value = "";
    lname.value = "";
    email.value = "";
    message.value = "";
});
