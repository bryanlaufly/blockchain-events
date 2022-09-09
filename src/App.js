import React from "react"
import Navbar from "./components/Navbar.js"
import Card from "./components/Card.js"
import destination from "./data.js"

function App() {
    const places = destination.map(function(place){
        return <Card
            place={place}  
            key = {place.title}          
        />
    })
    return (
        <div>
            <Navbar />
            {places}           
        </div>
    )
}

export default App