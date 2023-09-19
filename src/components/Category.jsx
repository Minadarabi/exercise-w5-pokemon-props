/* eslint-disable react/prop-types */
export const Category = ({categoryPoke})=>{
    return(
        <>
        <strong>Categories:</strong>
        {categoryPoke.map((cat)=>{
            <p key={cat}>{cat}</p>

        })}
        </>
        
    )

} 