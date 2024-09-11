import React from 'react'
import { useSelector } from 'react-redux';

function ListDrumPad() {
    const listAudio = useSelector(state => {
        // console.log('State:', state); // Debugging line
        return state.listAudio;
    });
    // const dispatch = useDispatch();

    const mapListAudio = () => {
       return listAudio.map(item => {
            let { type, name, src } = item;
            return (
                <div className="drum-pad" id={name} key={name}>{type}
                    <audio id={type} className="clip" src={src}>
                    </audio>
                </div>
            )
        })
    }
    return (
        <div>
            {mapListAudio()}
        </div>
    )
}

export default ListDrumPad;
