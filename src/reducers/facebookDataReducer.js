import {FACEBOOK_DATA} from '../actions'


function facebookDataReducer(state = {image: {}, name: ''}, action) {
    switch (action.type) {
        case FACEBOOK_DATA:
            return Object.assign({}, state, {
                image: action.image,
                name: action.name
            })
        default:
            return state
    }
}

export default facebookDataReducer