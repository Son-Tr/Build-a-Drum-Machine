import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

function ListDrumPad() {
    const listAudio = useSelector(state => {
        // console.log('State:', state); // Debugging line
        return state.listAudio;
    });
    // const dispatch = useDispatch();


     // Adding and cleaning up the event listener using useEffect
    useEffect(() => {
        window.addEventListener("keydown", handlePressKey)
        return () => {
            window.removeEventListener("keydown", handlePressKey)
        }
    }, [])
    // handle press key play audio 
    const handlePressKey = (e) => {
        const presskey = e.key.toUpperCase(); // convert key to upper case
       let name = listAudio.filter(item=> item.type=== presskey).map(item=> item.name)
       
        const audio = document.getElementById(presskey);
        if (audio) {
            audio.currentTime = 0;
            audio.play()
            addActiveCss(presskey,name)
        }
    }

    const addActiveCss =(key,name)=>{
        let padElement = document.getElementById(key);//
        let btn = document.getElementById(name)
        if(padElement){
            btn.classList.add("active");
            setTimeout(()=> btn.classList.remove("active"),100);
        }
    }

    // handle click button play audio
    const handleClickBtn = (e) => {
        const pad = e.currentTarget;
        const audio = pad.querySelector(".clip")
        if (audio) {
            audio.currentTime = 0;
            audio.play()
        }
    }
    const mapListAudio = () => {
        return listAudio.map(item => {
            let { type, name, src } = item;
            return (
                <button className="drum-pad" id={name} key={name} onClick={handleClickBtn}>{type}
                    <audio id={type} className="clip" src={src}>
                    </audio>
                </button>
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
