import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11);
    const handleAdd=()=>{
        const newCount=team + 1;
        setTeam(newCount)
    }
    const handleReduce=()=>{
        setTeam(team -1);
    }

    return (
        <div className="team">
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce} className="remove">Remove</button>
        </div>
    )
}