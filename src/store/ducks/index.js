import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import playlists from './playlists';
import playlistDetails from './playlistDetails';
import error from './error';
import player from './player';
import auth from './auth';
import addSong from './addSong';
import { reducer as toastr } from 'react-redux-toastr';

export default history => combineReducers({
    playlists,
    playlistDetails,
    error,
    player,
    auth,
    addSong,
    toastr,
    router: connectRouter(history)
});
