/* eslint-disable react/prop-types */
// Destructure pokemon types props here :)
export const Type = ({typePoke}) => {
  return (
    <>
    <span>Types:</span>
    {typePoke.map((type) => {
    return <li key={type}>{type}</li>

   })}
   
    </>
    
    

   )
};
