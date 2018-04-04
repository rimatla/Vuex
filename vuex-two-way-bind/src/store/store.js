import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//create store
export const store = new Vuex.Store({
    //set state
    state: {
        counter: 0,
        value: 0
    },
    //using getters to access state
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' clicks';
        },
        value: state => {
            return state.value;
        }
    },
    //direct mutations must run SYnchronously 
    mutations: {
        increment: (state, payload) => {
            state.counter += payload;
        },
        decrement: (state, payload) => {
            state.counter -= payload;
        },
        updateValue: (state, payload) => {
            state.value = payload;
        }
    },
    //to run asynchronous tasks 
    actions: {
        increment: (context, payload) => {
            context.commit('increment', payload);
        },
        decrement: ({ commit }, payload) => { //ES6 destructring 
            commit('decrement', payload);
        },
        asyncIncrement: ({ commit }, payload) => {
            setTimeout(() => {
                commit('increment', payload.by);
            }, payload.duration);
        },

        asyncDecrement: ({ commit }, payload) => {
            setTimeout(() => {
                commit('decrement', payload.by);
            }, payload.duration);
        },
        updateValue: ({ commit }, payload) => {
            commit('updateValue', payload);
        }
    }

})