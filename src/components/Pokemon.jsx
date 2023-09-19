/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Destructure pokemon props here :)
import { Type }from "./Type.jsx";
import { Weakness } from "./Weakness.jsx";

// eslint-disable-next-line react/prop-types
export const Pokemon = ({ pokemonObj }) => {

  const renderTypes = ()=>{
    return pokemonObj.types.map((type) => {
      return <Type key={type} typePoke={type}/>

    })

  }
  const renderWeakness = ()=>{
    return pokemonObj.weeknesses.map((weak)=>{
      return <Weakness key={weak} weakPoke={weak} />
    })
  }
  return (
    <>
     <ol>Name: {pokemonObj.name}
        {renderTypes()}
    </ol>

    {renderWeakness()}
    </>
   
  )

};
