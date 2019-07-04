import * as types from '../../store/types';

export default {
    state: {
        move:{}
    },
    actions: {
        [types.MOVE]: ({ commit }, payload) => { 
            commit(types.MOVE,payload)
        }
        
    },
    mutations: {
        [types.MOVE]: (state, payload) => {state.move = payload}
    }
}