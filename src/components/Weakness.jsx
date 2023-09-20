/* eslint-disable react/prop-types */
export const Weakness = ({weaknesses})=>{
    return(
        <>
        <strong>Weaknesses:</strong>
        {weaknesses.map((weak)=>{
            return(
                <p key={weak}>{weak}</p>

            )
            

        })}
        </>
        
    )

} 