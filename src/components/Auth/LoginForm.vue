<template>
  <div class="row window-height">
    <div class="col-md-2 offset-md-5 self-center justify-center items-center">
      <h2 class="text-primary">Login</h2>
      <q-form @submit.prevent="onSubmit" class="q-gutter-lg">
        <q-input
            type="text"
            placeholder="Email"
            v-model="username"
            :dense="dense"
        />

        <q-input
            type="password"
            placeholder="Password"
            v-model="password"
            :dense="dense"
        />

        <div class="signup-prompt">
          <q-btn type="submit" color="primary" label="Login" />
        </div>

        <p class="text-primary">
          Don't have an account?
          <router-link
            to="/signup"
            v-slot="{ href , navigate}"
          >
            <a :href="href" @click="navigate" class="text-secondary">Signup!</a>
          </router-link>
        </p>
      </q-form>
    </div>
  </div>
</template>

<script>
import './auth.css'
import router from "@/routes";
import store from "@/store/store";

export default {
  data() {
    return{
      dense: false,
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      store.dispatch('login', {
        username: this.username,
        password: this.password
      })
          .then(() => router.push('/'))
          .catch((error) => console.log(error))
    }
  }
};
</script>