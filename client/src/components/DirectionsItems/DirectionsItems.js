import React,{useState} from 'react'

const DirectionsItems = () => {
    const [directions,setDirections] = useState([{directon:''}])
    return (
        <div className="container">
            <h4>Add your directions one at a time!</h4>
            {directions.map((x, i) => {
                return (
                    <div>
                    
                    
                    </div>
                )
            })}
        </div>
    )
}

export default DirectionsItems
