import { mentorConstants } from '../_constants/mentor.constants';

export function users(state = {}, action) {
    switch (action.type) {
        case mentorConstants.SAVE_SELECTED_MENTOR:
            return {
                mentorUpdated: true
            };
        default:
            return state
    }
}