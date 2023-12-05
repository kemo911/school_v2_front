<template>
  <div class="login-form-container">
    <div class="login-box">
      <h2>Login</h2>
      <form @submit.prevent="onSubmit">
        <CustomInput
          v-model="email"
          type="email"
          placeholder="Email"
        />
        <CustomInput
          v-model="firstName"
          type="text"
          placeholder="First Name"
        />
        <CustomInput
          v-model="lastName"
          type="text"
          placeholder="Last Name"
        />
        <CustomInput
          v-model="password"
          type="password"
          placeholder="Last Name"
        />
        <button
          type="submit"
          class="login-button"
        >
          Login
        </button>
        <p class="signup-prompt">
          Already have an account ?
          <router-link
            to="/login"
            custom
            v-slot="{ href , navigate}"
          >
            <a :href="href" @click="navigate">Login!</a>
          </router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import CustomInput from '../Inputs/CustomInput.vue';
import './auth.css'

export default {
  components: {
    CustomInput
  },
  data() {
    return {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    };
  },
  methods: {
    onSubmit() {
      // Handle form submission
      console.log('Submitted', this.email, this.password);
    }
  }
};
</script>