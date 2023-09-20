/* eslint-disable react/prop-types */
// Destructure pokemon types props here :)

export const Type = ({types}) => {

  return (
    <>
    <span>Types:</span>
    {types.map((type) => {
    return <li key={type}>{type}</li>

   })}
   
    </>
    
    

   )
};
