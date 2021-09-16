import React from 'react';

function HudlPlay ({hudlPlay, handleHudlPlayChange}) {
    
    return (
        <div>
        <label>Hudl Play</label>
        <input type="text" value={hudlPlay} onChange={handleHudlPlayChange} />
        </div>
    )
}

export default HudlPlay;