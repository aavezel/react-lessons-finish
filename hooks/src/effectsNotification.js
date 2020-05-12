import React, { useState, useEffect } from 'react';

export const EffectsNotficationRoot = () => {
    const [visible, setVisible] = useState(true);
    if (!visible) return <button onClick={()=>setVisible(true)}>Show</button>;
    return (
        <>
            <div>
                <button onClick={()=>setVisible(false)}>hide</button>
            </div>
            <Notification />
        </>
    );
}

const Notification = () => {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => setVisible(false), 1500);
        return () => clearTimeout(timeout);
    }, []);
    if (!visible) return <div />;
    return (
        <div>
            Notification
        </div>
    );
}