import { get_gameId, get_game } from '../actions/index';
import { get_all_game_challenges } from '../actions/index';
import { set_current_challenge_index } from '../actions/index';
import { set_game_points, set_challenge_details, submit_answers, set_opponent_index } from '../actions/index';
import { updated_teams } from '../actions/index';

const initialState = { 
  gameId: null,
  gameInfo: null,
  allChallenges: null,
  currentChallengeIndex: 0,
  opponentIndex: 0,
  gamePoints: 0,
  challengeDetails: [],
  submittedAnswers: [],
  currentGameTeam1: [],
  currentGameTeam2: []
};

// for each case, the return is similar to a setState() in React
export default function(state = initialState, action) {
  switch (action.type) {
    case get_gameId:
      return Object.assign({}, state, {gameId: action.payload})
    case get_game:
      return Object.assign({}, state, {gameInfo: action.payload})
    case set_current_challenge_index:
      return Object.assign({}, state, {currentChallengeIndex: action.payload})
    case get_all_game_challenges:
      return Object.assign({}, state, {allChallenges: action.payload})
    case set_game_points:
      return Object.assign({}, state, {gamePoints: action.payload})
    case set_challenge_details:
      return Object.assign({}, state, {challengeDetails: action.payload})
    case submit_answers:
      return Object.assign({}, state, {submittedAnswers: action.payload})
    case set_opponent_index:
      return Object.assign({}, state, {opponentIndex: action.payload})
    case updated_teams:
      return Object.assign({}, state, {currentGameTeam1: action.payload.team1, currentGameTeam2: action.payload.team2})
    default:
      return state;
  }
}
