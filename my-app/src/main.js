const form = document.querySelector('form');
const input = document.querySelector('input');
const pokemonContainer = document.querySelector('#pokemon-container');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const apiPokemon = input.value.toLowerCase();

  fetch(`https://pokeapi.co/api/v2/pokemon/${apiPokemon}`)
    .then((response) => response.json())
    .then((data) => {
      const card = document.createElement('div');
      card.classList.add('pokemon-card');

      const image = document.createElement('img');
      image.src = data.sprites.front_default;
      image.alt = `${data.name} image`;

      const name = document.createElement('h2');
      name.textContent = data.name;

      const pokemonIdElement = document.createElement('p');
      pokemonIdElement.textContent = `#${data.id}`;

      const updateForm = document.createElement('form');
      const updateInput = document.createElement('input');
      updateInput.type = 'text';
      updateInput.value = data.name;
      updateForm.appendChild(updateInput);

      const updateButton = document.createElement('button');
      updateButton.textContent = 'Update';
      updateButton.style.fontFamily = 'Pokemon Solid';
      updateForm.appendChild(updateButton);

      updateForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newName = updateInput.value.toLowerCase();
        fetch(`https://pokeapi.co/api/v2/pokemon/${newName}`)
          .then((response) => response.json())
          .then((data) => {
            image.src = data.sprites.front_default;
            image.alt = `${data.name} image`;
            name.textContent = data.name;
            pokemonIdElement.textContent = `#${data.id}`;
            updateInput.value = data.name;
          })
          .catch((error) => {
            console.log(error);
            alert('That pokemon no exist sir.');
          });
      });

      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(pokemonIdElement);
      card.appendChild(updateForm);
      pokemonContainer.appendChild(card);
    })
    .catch((error) => {
      console.log(error);
      alert('That pokemon no exist sir.');
    });
});