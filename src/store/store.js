import Vuex from 'vuex'
import axios from "axios";


const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";


export default new Vuex.Store({
    state: {
        user: {
            isLoggedIn: !!localStorage.getItem('token'),
            pending: false,
            object: JSON.parse(localStorage.getItem('user'))
        },
        sidebar:{
            student:[
                { title: 'Dashboard Student', icon: 'mdi-view-dashboard' },
                { title: 'Courses Student', icon: 'mdi-notebook-edit-outline' },
                { title: 'About Student', icon: 'mdi-help-box' },
                { title: 'Profile Student', icon: 'mdi-help-box' }
            ],
            admin:[
                { title: 'Dashboard Admin', icon: 'mdi-view-dashboard' },
                { title: 'Courses Admin', icon: 'mdi-notebook-edit-outline' },
                { title: 'About Admin', icon: 'mdi-help-box' },
            ]
        }
    },

    mutations: {
        [LOGIN] (state) {
            state.pending = true;
        },
        [LOGIN_SUCCESS] (state,payload) {
            state.user.isLoggedIn = true;
            state.user.pending = false;
            state.user.object = payload
        },
        [LOGOUT](state) {
            state.user.isLoggedIn = false;
        }
    },


    actions:{
        login({ commit }, creds) {
            commit(LOGIN); // show spinner

            return axios.post(
                "http://localhost:8000/login/",
                {
                    username : creds.username,
                    password : creds.password
                }
            ).then(response => {
                localStorage.setItem("token", response.data.token); // Assuming the token is in the response data
                localStorage.setItem('user', JSON.stringify(response.data.user))
                commit(LOGIN_SUCCESS,response.data.user);
            }).catch(error => {
                console.error("Login failed:", error);
            });
        },
        logout({ commit }) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            commit(LOGOUT);
        }
    },

    getters: {
        isLoggedIn: state => {
            return state.user.isLoggedIn
        }
    }
})