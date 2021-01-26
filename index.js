const URL = `https://rickandmortyapi.com/api/character/`

fetch(`${URL}`)
   .then(response => response.json())
   .then(characters => showCharacters(characters.results));

showCharacters = (characters) => {
    const charactersDiv = document.querySelector('#rick-and-morty-characters');
    characters.forEach(character => {
      const characterElement = document.createElement('div');
      const characterName = document.createElement('h1')
      const characterImg = document.createElement('img')
      characterImg.setAttribute('src', `${character.image}`)
      characterName.innerText = `Character Name: ${character.name}`;
      
      characterElement.append(characterName);
      characterElement.append(characterImg);
      charactersDiv.append(characterElement);

    });
  }
