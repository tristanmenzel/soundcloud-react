import React from 'react';

export default function Stream({tracks = [], onAuth}) {
    return (
        <div>
            <div>
                <button onClick={onAuth} type="button">Login</button>
            </div>
            <br />
            {
                tracks.map((track) => {
                    return <div className="track" key={track.title}>{track.title}</div>;
                })
            }
        </div>
    )
}