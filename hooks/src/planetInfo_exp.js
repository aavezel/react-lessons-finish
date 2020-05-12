import React, { useState, useEffect, useCallback, useMemo } from 'react';

export const PlanetInfoRoot = () => {
    const [value, setValue] = useState(0);
    return (
        <>
            <div>
                <button onClick={() => setValue((val) => val + 1)}>+</button>
            </div>
            <PlanetInfo id={value} />
        </>
    );
}

const getPlanet = (id) => {
    return fetch(`http://swapi.dev/api/planets/${id}`)
        .then((resp) => {
            if (resp.ok) return resp.json()
            throw new Error("fail get planet")
        })
        .then((data) => data);
}

const useRequest = (request) => {
    const initionalState = useMemo(() => ({
        data: null,
        loading: true,
        error: null,
    }), []);

    const [dataState, setDataState] = useState(initionalState);

    useEffect(() => {
        let canceled = false;
        setDataState(initionalState);
        request()
            .then((data) => {
                if (!canceled) {
                    setDataState({
                        data,
                        loading: false,
                        error: null,
                    });
                }
            })
            .catch((err) => {
                if (!canceled) {
                    setDataState({
                        data: null,
                        loading: false,
                        error: err,
                    })
                }
            });
        return () => canceled = true;
    }, [request, initionalState])

    return dataState;
}

const usePlanetInfo = (id) => {
    const request = useCallback(() => getPlanet(id), [id]);
    return useRequest(request)
}

export const PlanetInfo = ({ id }) => {
    const { data, loading, error } = usePlanetInfo(id);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;

    return (
        <div>
            {id} - {data && data.name}
        </div>
    );
};