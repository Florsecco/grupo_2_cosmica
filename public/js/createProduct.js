document.addEventListener('DOMContentLoaded', function () {
  const categorySelected = document.getElementById('category');

  const colorFieldset = document.querySelector('fieldset');
  const createProductForm = document.getElementById('form-create-product');
  createProductForm && createProductForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const checkboxes = document.getElementsByName('color');
    let colorStocks = [];
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        const stockInput = document.getElementById(`color_${checkbox.value}`);
        const colorStock = {
          color_id: checkbox.value,
          stock: stockInput.value
        }
        colorStocks.push(colorStock);
      }
    });
    // const name = document.getElementsByName('name');

    const body = {
      name: createProductForm.name.value,
      description_short: createProductForm.description_short.value,
      description_long: createProductForm.description_long.value,
      category_id: createProductForm.category.value,
      brand_id: createProductForm.brand.value,
      ingredients: createProductForm.ingredients.value,
      price: createProductForm.price.value,
      discount: createProductForm.discount.value,
      colorStocks
    };
    fetch(`http://localhost:3031/api/products/create`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({ body })
    })
      .then(response => response.json())
      .then(data => console.log(data));
  })

});
console.log(categorySelected);
categorySelected && categorySelected.addEventListener('change', () => {
  const selectedCategory = categorySelected.value;
  selectedCategory && fetch(`/categories/${selectedCategory}/colors`)
    .then(response => response.json())
    .then(colores => {
      const data = colores.data;
      colorFieldset.innerHTML = ''; // Limpiar opciones anteriores
      data.forEach(color => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'color';
        checkbox.value = color.id;
        // checkbox.id = `color_${color.id}`;

        const label = document.createElement('label');
        label.textContent = color.name;
        console.log("ëntre");
        checkbox.addEventListener('click', updateColorStockInputs);
        colorFieldset.appendChild(checkbox);
        colorFieldset.appendChild(label);
        colorFieldset.appendChild(document.createElement('br'));
      });
    });
});

function updateColorStockInputs(event) {
  const checkbox = event.target;
  const colorId = checkbox.value;

  if (checkbox.checked) {
    const label = checkbox.nextElementSibling; // Obtener el siguiente elemento, que es el label
    const colorName = label.textContent; // Obtener el texto del label, que es el nombre del color

    const labelStock = document.createElement('label');
    labelStock.textContent = `Stock para ${colorName}`;

    const stockInput = document.createElement('input');
    stockInput.type = 'number';
    stockInput.name = 'stock';
    stockInput.id = `color_${colorId}`;

    const stockInputContainer = document.getElementById('stockInputs');

    stockInputContainer.appendChild(labelStock);
    stockInputContainer.appendChild(stockInput);
    stockInputContainer.appendChild(document.createElement('br'));
  }
  else {
    const stockInput = document.getElementById(`color_${colorId}`);
    if (stockInput) {
      stockInput.previousSibling.remove();
      stockInput.nextSibling.remove();
      stockInput.remove();
    }
  }

}
});