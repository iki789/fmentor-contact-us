const btn_contact = document.getElementById("btn_contact");

btn_contact.addEventListener("click", (e) => {
    e.preventDefault();

    const first_name = document.getElementById("first_name");
    const last_name = document.getElementById("last_name");
    const general = document.getElementById("general");
    const support = document.getElementById("support");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const consent = document.getElementById("consent");

    if (!first_name.value || !last_name.value || !general.checked && !support.checked || !email.value || !validarEmail(email.value) || !message.value || !consent.checked) {
        if (!first_name.value) {
            const first_name_error = document.getElementById("first_name_error").id;
            mostrarError("This field is required", first_name_error, first_name);
        }
        if (!last_name.value) {
            const last_name_error = document.getElementById("last_name_error").id;
            mostrarError("This field is required", last_name_error, last_name);
        }
        if (!general.checked && !support.checked) {
            const query_type_error = document.getElementById("query_type_error").id;
            mostrarError("Please select a query type", query_type_error, general);
        }
        if (!email.value) {
            const email_error = document.getElementById("email_error").id;
            mostrarError("This field is required", email_error, email);
        } else if (!validarEmail(email.value)) {
            const email_error = document.getElementById("email_error").id;
            mostrarError("Please enter a valid email address", email_error, email);
        }
        if (!message.value) {
            const message_error = document.getElementById("message_error").id;
            mostrarError("This field is required", message_error, message);
        }
        if (!consent.checked) {
            const consent_error = document.getElementById("consent_error").id;
            mostrarError("To submit this form, please consent to being contacted", consent_error, consent);
        }
    } else {
        const message_success = document.getElementById("message_success");
        const card = document.getElementById("card");

        message_success.classList.remove("hidden");
        card.classList.remove("md:mt-20", "mt-10")

    }
});

function mostrarError(mensaje, divId, borderError) {
    const error = document.getElementById(divId);

    borderError.classList.remove("border-gray-300");
    borderError.classList.add("border-red-500");

    error.innerHTML = mensaje;

    setTimeout(() => {
        error.innerHTML = "";
        borderError.classList.remove("border-red-500");
        borderError.classList.add("border-gray-300");
    }, 5000);
}

function validarEmail(email) {
    const regex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
}