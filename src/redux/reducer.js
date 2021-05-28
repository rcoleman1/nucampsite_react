/**
 * reducer.js
 */
 import {CAMPSITES} from '../shared/campsites';
 import {COMMENTS} from '../shared/comments';
 import {PARTNERS} from '../shared/partners';
 import {PROMOTIONS} from '../shared/promotions';


/* -----------------
Set the initial state for app
------------------ */
export const initialState = {
  campsites: CAMPSITES,
  comments: COMMENTS,
  partners: PARTNERS,
  promotions: PROMOTIONS,
};


/* -----------------
Reducer(state, action)
- state is set to default param if nothing is pasted.
- action
------------------ */
export const Reducer = (state = initialState, action) => {
    return state;
}