document.addEventListener('DOMContentLoaded', function () {
  const categorySelected = document.getElementById('category');

  const colorSelected = document.getElementById('colors');
  console.log(categorySelected);
  categorySelected && categorySelected.addEventListener('change', () => {
    const selectedCategory = categorySelected.value;
    selectedCategory && fetch(`/categories/${selectedCategory}/colors`)
      .then(response => response.json())
      .then(colores => {
        const data = colores.data;
        colorSelected.innerHTML = '';
        data.forEach(color => {
          const option = document.createElement('option');
          option.textContent = color.name;
          option.value = color.id;
          colorSelected.appendChild(option);
        });
      });
  });
});