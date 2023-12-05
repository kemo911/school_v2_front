<template>
  <div class="login-form-container">
    <div class="login-box">
      <h2>Login</h2>
      <form @submit.prevent="onSubmit">
        <CustomInput
          v-model="username"
          type="text"
          placeholder="Email"
        />
        <CustomInput
          v-model="password"
          type="password"
          placeholder="Password"
        />
        <button
          type="submit"
          class="login-button"
        >
          Login
        </button>
        <p class="signup-prompt">
          Don't have an account?
          <router-link
            to="/signup"
            v-slot="{ href , navigate}"
          >
            <a :href="href" @click="navigate">Signup!</a>
          </router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import CustomInput from '../Inputs/CustomInput.vue';

import './auth.css'
import router from "@/routes";

export default {
  components: {
    CustomInput
  },
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      }).then(router.push('/'))
          .catch((error) => console.log(error))
    }
  }
};
</script>