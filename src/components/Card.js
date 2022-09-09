import React from "react"

function Card(props){
        return (
            <section className="card-container">
                <div className="card-photo">
                <img src={props.place.imageUrl} alt=""/>
                </div>
                <div className="card-details">
                    <div className="card-location-map">
                        <p>{props.place.location}</p>
                        <span><a href={props.place.googleMapsUrl}>View On Google Map</a></span>
                    </div>
                    <div className="card-title-date-description">
                        <h1>{props.place.title}</h1>
                        <p>{props.place.startDate} - {props.place.endDate}</p>
                        <p className="smallfont">{props.place.description}</p>
                    </div>
                </div>    
            </section>
        )
}

export default Card