import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//create store
export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    //using getters to get state
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + 'clicks';
        }
    },
    //direct mutations must run SYnchronously 
    mutations: {
        increment: state => {
            state.counter++;
        },
        decrement: state => {
            state.counter--;
        }
    },
})