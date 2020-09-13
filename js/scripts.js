let pokemonList = [
  {name: 'Bulbasaur', height: 7, types:['grass', 'poison']},
  {name: 'Charmander', height: 6, types:['fire']},
  {name: 'Sandshrew', height: 6, types:['ground']},
  {name: 'Pikachu', height: 4, types:['electric']},
  ];

for (let i=0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name + '(height:' + pokemonList[i].height + ')');
}
