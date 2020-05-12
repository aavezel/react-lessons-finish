import React, { Component, useState, useEffect } from 'react';

export const EffectsRoot = () => {
    const [visible, setVisible] = useState(true);
    const [counter, setCounter] = useState(0);
    if (!visible) return <button onClick={()=>setVisible(true)}>Show</button>;
    return (
        <>
            <div>
                <button onClick={()=>setCounter((val) => val+1)}>+</button>
                <button onClick={()=>setVisible(false)}>hide</button>
            </div>
            <HookCounter value = {counter} />
        </>
    );
}

const HookCounter = ( { value }) => {    
    useEffect(()=>{ 
        console.log("component did mount"); 
        return ()=>{ console.log("component did unmount");};
    }, [] );
    useEffect(()=>{ console.log("component did update"); });
    // useEffect(()=>()=>{ console.log("component did unmount"); }, [] );
    return (
        <div> {value} </div>
    );
}


class ClassCounter extends Component {

    componentDidMount() { console.log("class: componentDidMount"); }
    componentDidUpdate() { console.log("class: componentDidUpdate"); }
    componentWillUnmount() { console.log("class: componentWillUnmount"); }

    render() {
        const {value} = this.props;
        return (
            <div> {value} </div>
        );
    }
}