// Email: obligatorio, valido, debe existir en la base (opcional)
// Pass: obligatorio

const isEmpty = (input) => input.value && input.value.trim() !== "";

const isEmailValid = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return isEmpty(input) && emailRegex.test(input.value);
}
// Falta chequear si el email existe en la db
const validations = [
    {
        inputName: "email",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "El email no puede estar vacio"
            },
            {
                validator: isEmailValid,
                errorMsg: "El email no es valido"
            }
        ]
    },
    {
        inputName: "password",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "La contraseña no puede estar vacia"
            },
        ]
    }
]

window.addEventListener("load", function () {    
    const form = document.querySelector("form.form")

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const errores = [];

        validations.forEach((inputToValidate) => {
            const input = form[inputToValidate.inputName];

            for (const validation of inputToValidate.validations) {
                const isValid = validation.validator(input);
                if (!isValid) {
                    errores.push(validation.errorMsg);
                    input.parentElement.classList.add("is-invalid");
                    input.parentElement.classList.remove("is-valid");
                    input.parentElement.querySelector(".error").innerHTML =
                        validation.errorMsg;
                    return
                }
            }
            input.parentElement.classList.add("is-valid");
            input.parentElement.classList.remove("is-invalid");
            input.parentElement.querySelector(".error").innerHTML = "";
        });

        if (errores.length == 0) {
            form.submit();
        } else {
            console.log(errores)
        }
    })

})