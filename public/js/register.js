const isEmpty = (input) => input.value && input.value.trim() !== "";
const long = (input) => input.value.length >= 2

const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let passwordCheck


/*
Registro de usuarios
○ Nombre y apellido
■ Obligatorio. DONE
■ Deberá tener al menos 2 caracteres. DONE
○ Email
■ Obligatorio. DONE
■ Deberá ser válido DONE
■ (Opcional) → No puede repetirse con los e-mails ya registrados.
○ Contraseña
■ Obligatoria. DONE
■ Deberá tener al menos 8 caracteres. DONE 
Agregado que coincida con la anterior contraseña DONE
■ (Opcional) → Deberá tener letras mayúsculas, minúsculas, un
número y un carácter especial. DONE

○ Imagen
■ Deberá ser un archivo válido (JPG, JPEG, PNG, GIF). DONE


TODOS LOS ESTILOS
*/



const validations = [
    {
        inputName: "first_name",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "Debes completar tu nombre"
            },
            {
                validator: long,
                errorMsg: "Debe tener al menos 2 caracteres"
            }
        ]
    },
    {
        inputName: "last_name",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "Debes completar tu nombre"
            },
            {
                validator: long,
                errorMsg: "Debe tener al menos 2 caracteres"
            }
        ]
    },
    {
        inputName: "email",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "Debes ingresar un correo electronico"
            },
            {
                validator: function (input) {
                    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(input.value)){
                     return true
                    } else {
                     return false;
                    }
                  },
                errorMsg: "Debes ingresar un correo electronico valido "
            }
        ]
    },
    {
        inputName: "password",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "Debes ingresar una contraseña"
            },
            {
                validator: (input) => input.value.length >= 8,
                errorMsg: "La contraseña debe tener al menos 8 caracteres"
            },
            {   validator: function comprobarContraseña(input) {
                if(/(?:[A-Z])/.test(input.value) && /(?:[a-z])/.test(input.value)){
                    return true
                }else{
                    return false
                }
              },
              errorMsg: 'La contraseña debe tener una mayuscula y una miscula'
            },
            {   validator: function comprobarContraseña(input) {
                if(/(?:\d)/.test(input.value)){
                    return true
                }else{
                    return false
                }
              },
              errorMsg: 'La contraseña debe tener un numero'
            },
            {   validator: function comprobarContraseña(input) {
                if(/[^a-zA-Z\d]/.test(input.value)){
                    return true
                }else {
                    return false
                }
              },
              errorMsg: 'La contraseña debe tener un caracter especial'
            }
        ]
    },
    {
        inputName: "confirm_password",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "Debes ingresar la contraseña"
            },
            {
                validator: (input) => {
                    if(input.value === passwordCheck.value){
                        return true
                    }
                    return false
                },
                errorMsg: "La contraseñas deben coincidir"
            }
        ]
    },
    {
        inputName: "avatar",
        validations: [
            {
                validator: (input)=> {
                    console.log(input.value);
                    if(input.value){
                    return true
                    }else{
                        return false
                    }
                },
                errorMsg: "Debes subir una imagen"
            },
            {
                validator: (input)=> {
                    console.log(input.value);
                    if(input.value.includes('.jpg') || input.value.includes('.jpeg') || input.value.includes('.png') || input.value.includes('.gif')){
                    return true
                    }else{
                        return false
                    }
                },
                errorMsg: "Las extensiones permitidas son: JPG, JPEG, PNG, GIF."
            }
        ]
    },
]

window.addEventListener('load',function () {    
    const form = document.querySelector(".form-register")
    console.log(form);
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const errores = [];
        
        validations.forEach((inputToValidate) => {
            const input = form[inputToValidate.inputName];
            passwordCheck = form.password

            for (const validation of inputToValidate.validations) {
                const isValid = validation.validator(input);
                if (!isValid) {
                    errores.push(validation.errorMsg);
                    input.parentElement.classList.add("is-invalid");
                    input.parentElement.classList.remove("is-valid");
                    input.parentElement.querySelector(".error").innerHTML = validation.errorMsg;
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