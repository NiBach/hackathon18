import {IMAGE_TO_UPLOAD} from '../actions'


function imageUploadReducer(state = {uri: ''}, action) {
    switch (action.type) {
        case IMAGE_TO_UPLOAD:
            return Object.assign({}, state, {
                uri: action.uri
            })
        default:
            return state
    }
}

export default imageUploadReducer