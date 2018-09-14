import { GEM_DATA } from '../actions'


function imageUploadReducer(state = {
    imageURL: '',
    title: '',
    description: ''
}, action) {
    switch (action.type) {
        case GEM_DATA:
            return Object.assign({}, state, {
                imageURL: action.imageURL,
                title: action.title,
                description: action.description
            })
        default:
            return state
    }
}

export default imageUploadReducer