import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function ControlDrumMachine() {
    const currentDrumPadName = useSelector(state => state.currentDrumPadName);
    const [volume, setVolume] = useState(1); // Volume range from 0 to 1

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);

        // Update volume for all audio elements
        const audios = document.querySelectorAll('audio');
        audios.forEach(audio => {
            audio.volume = newVolume;
        });
    };

    return (
        <div className='control-drum'>
            <h2 id='display'>{currentDrumPadName}</h2>
            <div className='volume'>
                <label htmlFor="volume-control" >Volume:</label>
                <input
                    type="range"
                    id="volume-control"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}  
                />
                <span className='volume-value'>{(volume * 100).toFixed(0)}%</span>
            </div>
        </div>
    );
}

export default ControlDrumMachine;
