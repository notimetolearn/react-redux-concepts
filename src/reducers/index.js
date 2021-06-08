import {combineReducers} from 'redux';

const songs = [
    {
        title: 'Macrena',
        duration: '4:05'
    },
    {
        title: 'Yellow Yellow',
        duration: '4:00'
    },
    {
        title: 'Lighting up the starts',
        duration: '3:45'
    },
    {
        title: 'My own song',
        duration: '1:00'
    }
];

const songsReducer = () => {
    return songs;
}

const selectedSongReducer = (selectedSong = null, action) => {
    switch(action.type) {
        case 'SELECT_SONG':
            return action.payload;
            
        default:
            return selectedSong;
    }    
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});