//const validator = require('validator');
const isNotEmpty = (input) => input.value && input.value.trim() !== "";

const validations = [
  {
    inputName: "name",
    validations: [
      {
        validator: isNotEmpty,
        errorMsg: "El nombre no puede estar vacio",
      },
      {
        validator: (input) => input.value.length >= 2,
        errorMsg: "El Titulo debe tener al menos 2 caracteres",
      },
    ],
  },
  {
    inputName: "description_short",
    validations: [
      {
        validator: isNotEmpty,
        errorMsg: "La descripcion no puede estar vacia",
      },
    ],
  },
  {
    inputName: "description_long",
    validations: [
      {
        validator: isNotEmpty,
        errorMsg: "Los premios no pueden estar vacios",
      },
      {
        validator: (input) =>
          parseInt(input.value) >= 0 && parseInt(input.value) <= 10,
        errorMsg: "premios debe tener un valor entre 0 y 10",
      },
    ],
  },
  {
    inputName: "ingredients",
    validations: [
      {
        validator: isNotEmpty,
        errorMsg: "Este campo no puede estar vacio",
      },
    ],
  },
  {
    inputName: "price",
    validations: [
      {
        validator: isNotEmpty,
        errorMsg: "Este campo no puede estar vacio",
      },
    ],
  },
  {
    inputName: "discount",
    validations: [
      {
        validator: isNotEmpty,
        errorMsg: "Este campo no puede estar vacio",
      },
    ],
  },
  {
    inputName: "image",
    validations: [
      {
        validator: isNotEmpty,
        errorMsg: "Debe cargar una imagen",
      },
    ],
  },
  {
    inputName: "category",
    validations: [
      {
        validator: isNotEmpty,
        errorMsg: "Debe seleccionar una categoria",
      },
    ],
  },
  {
    inputName: "brand",
    validations: [
      {
        validator: isNotEmpty,
        errorMsg: "Debe seleccionar una marca",
      },
    ],
  },
  {
    inputName: "color",
    validations: [
      {
        validator: isNotEmpty,
        errorMsg: "Debe seleccionar un color",
      },
    ],
  },
];
window.addEventListener("load", function () {
  const form = document.querySelector(".form-create-product");

  validations.forEach((inputToValidate) => {
    const errores1 = [];
    const input = form[inputToValidate.inputName];
    console.log(input);
    console.log(inputToValidate);
    input.addEventListener("blur", (e) => {
      for (const validation of inputToValidate.validations) {
        const isValid = validation.validator(input);
        if (!isValid) {
          console.log("entro por el !isValid");
          errores1.push(validation.errorMsg);
          input.parentElement.querySelector(".error").innerHTML =
            validation.errorMsg;
          return;
        }
      }
      input.parentElement.querySelector(".error").innerHTML = "";
    });
  });

  //   form.addEventListener("submit", function (e) {
  //     e.preventDefault();

  //     const errores = [];

  //     validations.forEach((inputToValidate) => {
  //       const input = form[inputToValidate.inputName];
  //       passwordCheck = form.password;

  //       for (const validation of inputToValidate.validations) {
  //         const isValid = validation.validator(input);
  //         if (!isValid) {
  //           console.log("validacion post submit");
  //           errores.push(validation.errorMsg);
  //           if (input.name == "password" || input.name == "confirm_password") {
  //             input.parentElement.parentElement.querySelector(
  //               ".error"
  //             ).innerHTML = validation.errorMsg;
  //             return;
  //           }
  //           input.parentElement.querySelector(".error").innerHTML =
  //             validation.errorMsg;
  //           return;
  //         }
  //       }
  //       if (input.name == "password" || input.name == "confirm_password") {
  //         input.parentElement.parentElement.querySelector(".error").innerHTML =
  //           "";
  //       } else {
  //         input.parentElement.querySelector(".error").innerHTML = "";
  //       }
  //     });

  //     if (errores.length == 0) {
  //       form.submit();
  //     } else {
  //       console.log(errores);
  //     }
  //   });
});

// window.addEventListener("load", () => {
//     let form = document.querySelector('.form-create-product')
//     form.addEventListener('submit',(e)=>{
//         e.preventDefault()
//         let name = document.querySelector('#name')
//         if (name.value == " ") {
//             alert('!!!');
//             console.log(name);
//         }
//     })
// });
// let name = document.getElementById('name');
// window.addEventListener('change',(e) => {
//     if(name = ' ')
//     alert('esta vacio')
// });
