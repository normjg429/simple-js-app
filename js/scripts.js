//below is the IIFE
let pokemonRepository = (function () {

    let pokemonList = [
      {name: 'Bulbasaur', height: 7, types:['grass', 'poison']},
      {name: 'Charmander', height: 6, types:['fire']},
      {name: 'Sandshrew', height: 6, types:['ground']},
      {name: 'Pikachu', height: 4, types:['electric']},
     ];

  function add(pokemon) {

    pokemonList.push(pokemon);
  }
  function getAll() {

    return pokemonList;
  }
    return {

    add: add,

    getAll: getAll

  };

})();

//below is my original foreach loop where I am having trouble calling my pokemonlist 

pokemonList.forEach(function(pokemon) {
  //added a conditional 'if' statement to find items that have height greater thatn 6
  if (pokemon.height > 6){
      document.write("<p>" + pokemon.name + ' (height:' + pokemon.height + ')' + ' - Wow, that’s big!' + "<p>");
  //the else statement returns the rest of the items without the special message
  }else {
      document.write( "<p>" + pokemon.name + ' (height:' + pokemon.height + ')' + "<p>");
  }
})






















// //The below code creates a for loop that will iterate over each 
// for (let i=0; i < pokemonList.length; i++) {
//   //added a conditional 'if' statement to find items that have height greater thatn 6
//   if (pokemonList[i].height > 6){
//       document.write("<p>" + pokemonList[i].name + ' (height:' + pokemonList[i].height + ')' + ' - Wow, that’s big!' + "<p>");
//   //the else statement returns the rest of the items without the special message  
//   }else {
//       document.write( "<p>" + pokemonList[i].name + ' (height:' + pokemonList[i].height + ')' + "<p>");
//   }
// }

