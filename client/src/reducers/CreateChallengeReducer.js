import { entered_field, challenge_added, submitted_create_game } from '../actions/index';

const initialState = { 
  createChallengeMode: null,
  createChallengeName: null,
  createChallengeDescription: null,
  createChallengeDuration: null,
  createChallengeLocation: null
};

// for each case, the return is similar to a setState() in React
export default function(state = initialState, action) {
  switch (action.type) {
    case entered_field:
      return Object.assign({}, state, {[action.payload.field]: action.payload.info})
    case challenge_added:
      return Object.assign({}, state, {createGameChallenges: action.payload})
    case submitted_create_game:
      return Object.assign({}, state, {
        createGameName: null,
        createGameDescription: null,
        createGameDuration: null,
        createGameMaxPlayers: null,
        createGameMode: null,
        createGameStartingLocation: null,
        createGameChallenges: []
      })
    default:
      return state;
  }
}
