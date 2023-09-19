/*
Using the data.json you will create a list of pokemons.
We've created the necessary components for you, now it's
up to you to pass the props properly (😅) to these
components. Begin with the Pokemon's names, and continue on
with their types. Don't forget the key! Read more here:
https://reactjs.org/docs/lists-and-keys.html
*/
// import { Header } from "./components/Headers";
import { Pokemon } from "./components/Pokemon";
import data from "./data.json"
// eslint-disable-next-line no-unused-vars


/*Extra!
Feel free to create more components, such as header/footer,
or why not include some more data from the array? */

export const App = () => {
  const pokemons = data.pokemons;

  const pokemonRender = () => {
    return pokemons.map((pokemon) => {
        return (<Pokemon key={pokemon.id} pokemonObj={pokemon}  />)
      });
          
  };
      
  
  return (
    <div className="App">
      <section>{pokemonRender()}</section> 
    </div>
  );
};
