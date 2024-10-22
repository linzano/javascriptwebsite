// Assignment 2 - Lindsay Chong
function init(){

    var personalInfoContainer = document.getElementById("personalInfo");

    var form = document.createElement("form");
    form.setAttribute("id", "myForm");
    form.setAttribute("method", "post");
    personalInfoContainer.appendChild(form);

    // FIRST NAME
    var firstNameLabel = document.createElement("label");
    firstNameLabel.setAttribute("for", "firstName");
    firstNameLabel.textContent = "First Name";
    form.appendChild(firstNameLabel);

    var firstNameInput = document.createElement("input");
    firstNameInput.setAttribute("type", "text"); 
    firstNameInput.setAttribute("id", "firstName");
    form.appendChild(firstNameInput);

    // LAST NAME
    var lastNameLabel = document.createElement("label");
    lastNameLabel.setAttribute("for", "lastName");
    lastNameLabel.textContent = "Last Name";
    form.appendChild(lastNameLabel);

    var lastNameInput = document.createElement("input");
    lastNameInput.setAttribute("type", "text");
    lastNameInput.setAttribute("id", "lastName");
    form.appendChild(lastNameInput);

    // PHONE
    var phoneLabel = document.createElement("label");
    phoneLabel.setAttribute("for", "phoneLabel");
    phoneLabel.textContent = "Phone";
    form.appendChild(phoneLabel);

    var phoneInput = document.createElement("input");
    phoneInput.setAttribute("type", "text"); 
    phoneInput.setAttribute("id", "phone");
    form.appendChild(phoneInput);

    // EMAIL
    var emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "emailLabel");
    emailLabel.textContent = "Email";
    form.appendChild(emailLabel);

    var emailInput = document.createElement("input");
    emailInput.setAttribute("type", "text"); 
    emailInput.setAttribute("id", "email");
    form.appendChild(emailInput);

    // WEBSITE
    var websiteLabel = document.createElement("label");
    websiteLabel.setAttribute("for", "websiteLabel");
    websiteLabel.textContent = "Website";
    form.appendChild(websiteLabel);

    var websiteInput = document.createElement("input");
    websiteInput.setAttribute("type", "text"); 
    websiteInput.setAttribute("id", "website");
    form.appendChild(websiteInput);   

    // VALDIATE DATA FUNCTION
    function validateData() {

        var firstNameInput = document.getElementById("firstName");
        var firstNameValue = firstNameInput.value.trim();
        var firstChar = firstNameValue.charAt(0);
        var successSpan = document.getElementById("goodSpan");

        // FIRST NAME INPUT
        if (firstNameValue === "" || firstChar !== firstChar.toUpperCase()) {
            if (successSpan) {
                successSpan.parentNode.removeChild(successSpan);
            }
        } else {
            if (firstChar == firstChar.toUpperCase()) {
                if (!successSpan) {
                    successSpan = document.createElement("span");
                    successSpan.id = "goodSpan";
                    successSpan.textContent = "Good";
                    firstNameInput.parentNode.insertBefore(successSpan, firstNameInput.nextSibling);
                }
            }
        }

        var lastNameInput = document.getElementById('lastName');
        var lastNameValue = lastNameInput.value.trim();
        var lastChar = lastNameValue.charAt(0);
        var successSpanLast = document.getElementById("goodSpanLast");

        // LAST NAME INPUT
        if (lastNameValue === "" || lastChar !== lastChar.toUpperCase()) {
            if (successSpanLast) {
                successSpanLast.parentNode.removeChild(successSpanLast);
            }
        } else {
            if (lastChar == lastChar.toUpperCase()) {
                if (!successSpanLast) {
                    successSpanLast = document.createElement("span");
                    successSpanLast.id = "goodSpanLast";
                    successSpanLast.textContent = "Good";
                    lastNameInput.parentNode.insertBefore(successSpanLast, lastNameInput.nextSibling);
                }
            }
        }

        // PHONE INPUT
        var phoneInput = document.getElementById('phone');
        var phoneValue = phoneInput.value.trim();
        var phonePattern = /^\d{3} \d{3}-\d{4}$/;
        var successSpanPhone = document.getElementById("goodSpanPhone");
    
        if (phonePattern.test(phoneValue)) {
            if (!successSpanPhone) {
                successSpanPhone = document.createElement("span");
                successSpanPhone.id = "goodSpanPhone";
                successSpanPhone.textContent = "Valid phone number";
                phoneInput.parentNode.insertBefore(successSpanPhone, phoneInput.nextSibling);
            }
        }

        // EMAIL INPUT
        var emailInput = document.getElementById('email');
        var emailValue = emailInput.value.trim();
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var successSpanEmail = document.getElementById("goodSpanEmail");
    
        if (emailPattern.test(emailValue)) {
            if (!successSpanEmail) {
                successSpanEmail = document.createElement("span");
                successSpanEmail.id = "goodSpanEmail";
                successSpanEmail.textContent = "Valid email";
                emailInput.parentNode.insertBefore(successSpanEmail, emailInput.nextSibling);
            }
        }

        // WEBSITE INPUT
        var websiteInput = document.getElementById('website');
        var websiteValue = websiteInput.value.trim();
        var websitePattern = /^https:\/\/.*~.*\/.*$/;
        var successSpanWebsite = document.getElementById("goodSpanWebsite");
    
        if (websitePattern.test(websiteValue)) {
            if (!successSpanWebsite) {
                successSpanWebsite = document.createElement("span");
                successSpanWebsite.id = "goodSpanWebsite";
                successSpanWebsite.textContent = "Valid website";
                websiteInput.parentNode.insertBefore(successSpanWebsite, websiteInput.nextSibling);
            }
        }

    }

    // FUNCTION FOR HINTS
    function addHint(field, hint) {
        var hintSpan = document.createElement("span");
        hintSpan.setAttribute("class", "hints");
        hintSpan.textContent = hint;
        field.parentNode.insertBefore(hintSpan, field.nextSibling);
    }
    
    function removeHint(field) {
        var nextSibling = field.nextSibling;
        if (nextSibling && nextSibling.tagName === "SPAN") {
            nextSibling.parentNode.removeChild(nextSibling);
        }
    }
    
    // EVENT LISTENER FOR FIRST AND LAST NAME INPUT
    firstNameInput.addEventListener("focus", function() {
        addHint(firstNameInput, "Must start with a capital letter");
    });
    firstNameInput.addEventListener("blur", function() {
        removeHint(firstNameInput);
        validateData();
    });
    
    lastNameInput.addEventListener("focus", function() {
        addHint(lastNameInput, "Must start with a capital letter");
    });
    lastNameInput.addEventListener("blur", function() {
        removeHint(lastNameInput);
        validateData();
    });
    
    phoneInput.addEventListener("focus", function() {
        addHint(phoneInput, "Must be in XXX XXX-XXXX format");
    });
    phoneInput.addEventListener("blur", function() {
        removeHint(phoneInput);
        validateData();
    });
    
    emailInput.addEventListener("focus", function() {
        addHint(emailInput, "Must be in email format");
    });
    emailInput.addEventListener("blur", function() {
        removeHint(emailInput);
        validateData();
    });
    
    websiteInput.addEventListener("focus", function() {
        addHint(websiteInput, "Must start with https://, contain a tilde (~), and end with a trailing slash (/)");
    });
    websiteInput.addEventListener("blur", function() {
        removeHint(websiteInput);
        validateData();
    });

    // SURVEY QUESTION 1
    var surveyContainer = document.getElementById("survey");
    form.appendChild(surveyContainer);

    var surveyQuestion1 = document.createElement("div");
    surveyQuestion1.setAttribute("id", "q1");
    surveyQuestion1.textContent = "Do you feel bonita?";

    var option1Label = document.createElement("label");
    option1Label.setAttribute("id", "yesLabel");
    option1Label.textContent = "Yes";

    var option1Input = document.createElement("input");
    option1Input.setAttribute("type", "radio");
    option1Input.setAttribute("name", "q1Option");
    option1Input.setAttribute("value", "yes");

    var option2Label = document.createElement("label");
    option2Label.setAttribute("id", "noLabel");
    option2Label.textContent = "No";

    var option2Input = document.createElement("input");
    option2Input.setAttribute("type", "radio");
    option2Input.setAttribute("name", "q1Option");
    option2Input.setAttribute("value", "no");

    surveyQuestion1.appendChild(option1Label);
    surveyQuestion1.appendChild(option1Input);
    surveyQuestion1.appendChild(option2Label);
    surveyQuestion1.appendChild(option2Input);

    surveyContainer.appendChild(surveyQuestion1);

    // SURVEY QUESTION 2
    var surveyQuestion2 = document.createElement("div");
    surveyQuestion2.setAttribute("id", "q2");
    surveyQuestion2.textContent = "Are you a liar?";

    var option3Label = document.createElement("label");
    option3Label.textContent = "Yes";
    option3Label.setAttribute("id", "yesLabel2");

    var option3Input = document.createElement("input");
    option3Input.setAttribute("type", "radio");
    option3Input.setAttribute("name", "q2Option");
    option3Input.setAttribute("value", "yes");

    var option4Label = document.createElement("label");
    option4Label.textContent = "No";
    option4Label.setAttribute("id", "noLabel2");

    var option4Input = document.createElement("input");
    option4Input.setAttribute("type", "radio");
    option4Input.setAttribute("name", "q2Option");
    option4Input.setAttribute("value", "no");

    surveyQuestion2.appendChild(option3Label);
    surveyQuestion2.appendChild(option3Input);
    surveyQuestion2.appendChild(option4Label);
    surveyQuestion2.appendChild(option4Input);

    surveyContainer.appendChild(surveyQuestion2);

    // SUBMIT 
    var submitButton = document.createElement("button");
    submitButton.setAttribute("id", "submit");
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

    var badgeContainer = document.getElementById("badge");
    surveyContainer.appendChild(badgeContainer);

    var resultContainer = document.getElementById("results");
    badgeContainer.appendChild(resultContainer);

    function handleSubmit() {
        event.preventDefault();

        // DISPLAY BADGES
        var bonita = document.querySelector('input[name="q1Option"]:checked');
        var liar = document.querySelector('input[name="q2Option"]:checked');

        var imageSrc = "";
        if (bonita && liar) {
            if (bonita.value === "yes" && liar.value === "no") {
                 imageSrc = "img/bonita_badge.png";
            } else if (bonita.value === "yes" && liar.value === "yes") {
                imageSrc = "img/liar_badge.png";
            } else if (bonita.value === "no") {
                 imageSrc = "img/liar_badge.png";
            } else {
                imageSrc = "img/bonita_badge.png";
            }
        }

        var badge = document.createElement("img");
        badge.src = imageSrc;
        badgeContainer.appendChild(badge);

        // DISPLAY PERSONAL INFO
        var firstName = document.getElementById("firstName").value.trim();
        var lastName = document.getElementById("lastName").value.trim();
        var phone = document.getElementById("phone").value.trim();
        var email = document.getElementById("email").value.trim();
        var website = document.getElementById("website").value.trim();

        var firstNameParagraph = document.createElement("p");
        firstNameParagraph.textContent = "First Name: " + firstName;
        resultContainer.appendChild(firstNameParagraph);
    
        var lastNameParagraph = document.createElement("p");
        lastNameParagraph.textContent = "Last Name: " + lastName;
        resultContainer.appendChild(lastNameParagraph);
    
        var phoneParagraph = document.createElement("p");
        phoneParagraph.textContent = "Phone: " + phone;
        resultContainer.appendChild(phoneParagraph);
    
        var emailParagraph = document.createElement("p");
        emailParagraph.textContent = "Email: " + email;
        resultContainer.appendChild(emailParagraph);
    
        var websiteParagraph = document.createElement("p");
        websiteParagraph.textContent = "Website: " + website;
        resultContainer.appendChild(websiteParagraph);

        var form = document.getElementById("myForm");
        form.reset();
    }

    form.addEventListener("submit", handleSubmit);
}

window.addEventListener('load',init,false);