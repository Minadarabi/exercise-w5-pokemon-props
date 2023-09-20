/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Destructure pokemon props here :)
import { Type }from "./Type.jsx";
import { Weakness } from "./Weakness.jsx";
import { Category } from "./Category.jsx";

// eslint-disable-next-line react/prop-types
export const Pokemon = ({ types , weight , height, name, weaknesses , category }) => {

  return (
    <div>
     <ol>Pokemon Name: {name}
        
    </ol>
    <p>weight: {weight} kg</p>
    <p>Height: {height} m2</p>
    <div>
      <Type types={types} />
      <Weakness weaknesses={weaknesses}/>
      <Category category={category}/>
    </div>
    
    </div>
   
  )

};
