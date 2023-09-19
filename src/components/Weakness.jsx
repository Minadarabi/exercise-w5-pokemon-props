/* eslint-disable react/prop-types */
export const Weakness = ({weakPoke})=>{
    return(
        <>
        <strong>Weaknesses:</strong>
        {weakPoke.map((weak)=>{
            <p key={weak}>{weak}</p>

        })}
        </>
        
    )

} 