import { SET_DISPLAY } from "../actions/actions";


const initialState = {
    listAudio: [
        {
            type: 'Q',
            name: "Heater 1",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        },
        {
            type: "W",
            name: "Heater 2",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        }, {
            type: "E",
            name: "Heater 3",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        }, {
            type: "A",
            name: "Heater 4",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        }, {
            type: "S",
            name: "Clap",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        }, {
            type: "D",
            name: "Open-HH",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        }, {
            type: "Z",
            name: "Kick-n'-Hat",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        }, {
            type: "X",
            name: "Kick",
            src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        }, {
            type: "C",
            name: "Closed-HH",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
        },

    ],
    currentDrumPadName: "",
}



const audioReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_DISPLAY:
            return {
                ...state,
                currentDrumPadName: payload
            }
        default:
            return state
    }
}

export default audioReducer;
