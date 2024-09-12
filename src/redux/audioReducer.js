const initialState = {
    listAudio:[
        {
            type: 'Q',
            name: "Heater 1",
            src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
        },
        {
            type: "W",
            name: "Heater 2",
            src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
        },{
            type: "E",
            name: "Heater 3",
            src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
        },{
            type: "A",
            name: "Heater 4",
            src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
        },{
            type: "S",
            name: "Clap",
            src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
        },{
            type: "D",
            name: "Open-HH",
            src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
        },{
            type: "Z",
            name: "Kick-n'-Hat",
            src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
        },{
            type: "X",
            name: "Kick",
            src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
        },{
            type: "C",
            name: "Closed-HH",
            src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
        },

    ]
}

const audioReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  default:
    return state
  }
}

export default audioReducer;
