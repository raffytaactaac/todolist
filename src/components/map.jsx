const Map = () => {

    const list = [
        {name: "Mars", isGasPlanet: false},
        {name: "Earth", isGasPlanet: false},
        {name: "Jupiter", isGasPlanet: true},
        {name: "Venus", isGasPlanet: false},
        {name: "Neptune", isGasPlanet: true},
        {name: "Uranus", isGasPlanet: true},
        
    ]

    return(
        <>
            {list.map((item, key) => {
                return item.isGasPlanet && <h1 key={key}>{item.name}</h1>
            })}
        </>
    )
}



export default Map