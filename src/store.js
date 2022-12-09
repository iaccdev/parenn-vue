import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		layout: 'online-store-layout',
		pathname: ''
	},
	mutations: {
		SET_LAYOUT (state, payload) {
			state.layout = payload;
		},
		SET_PATHNAME (state, payload) {
			state.pathname = payload;
		}
	},
	getters: {
		layout (state) {
			return state.layout;
		},
		pathname(state){
			return state.pathname;
		}
	}
});