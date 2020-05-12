import React, {useState, useEffect} from 'react';

export const PlanetInfoRoot = () => {
    const [value, setValue] = useState(0);
    return (
        <>
            <div>
                <button onClick={()=>setValue((val) => val+1)}>+</button>
            </div>
            <PlanetInfo id={value}/>
        </>
    );
}

const usePlanetInfo = (id) => {
    const [planetName, setPlanetName] = useState(null);

    useEffect(()=> {
        let canceled = false;
        setPlanetName("Loading...");
        fetch(`http://swapi.dev/api/planets/${id}`)
            .then((resp) => {
                if (!canceled) {
                    if (!resp.ok) {
                        setPlanetName("No found");
                    } else {
                        return resp.json();
                    }
                }
            })
            .then((data) => {
                if (!canceled && data != null) {
                    setPlanetName(data.name);
                }
            });        
        return () => canceled = true;
    }, [id])

    return planetName;
}

export const PlanetInfo = ({id}) => {
    const planetName = usePlanetInfo(id);

    return (
        <div>
            {id} - {planetName}
        </div>
    );
};