import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setDisplayText } from '../actions/actions';

function ListDrumPad() {
    const listAudio = useSelector(state => state.listAudio);
    const dispatch = useDispatch();


    // Adding and cleaning up the event listener using useEffect
    useEffect(() => {
        window.addEventListener("keydown", handlePressKey)
        return () => {
            window.removeEventListener("keydown", handlePressKey)
        }
    }, [listAudio])


    // handle press key play audio 
    const handlePressKey = (e) => {
        const pressKey = e.key.toUpperCase(); // convert key to upper case
        let name = listAudio.find(item=> item.type === pressKey)?.name //get name value
        const audio = document.getElementById(pressKey);
        if (audio) {
            audio.currentTime = 0;
            audio.play()
            addActiveCss( name) // add active class
            dispatch(setDisplayText(name))// Dispatch action to update display text
        }
    }

   
    // handle click button play audio
    const handleClickBtn = (e) => {
        const pad = e.currentTarget;  // Get the element that triggered the event
        const audio = pad.querySelector(".clip")
        if (audio) {
            audio.currentTime = 0;
            audio.play();
            dispatch(setDisplayText(pad.id))
        }
    }

    // add active class 
    const addActiveCss = ( name) => {
        let btn = document.getElementById(name)
        if (btn) {
            btn.classList.add("active");
            setTimeout(() => btn.classList.remove("active"), 100);
        }
    }


    // map list button
    const mapListAudio = () => {
        return listAudio.map(item => {
            let { type, name, src } = item;
            return (
                <div className="drum-pad" id={name} key={name} onClick={handleClickBtn}>{type}
                    <audio id={type} className="clip" src={src}>
                    </audio>
                </div>
            )
        })
    }
    return (
        <div className='list-drum-pad'>
            {mapListAudio()}
        </div>
    )
}

export default ListDrumPad;
