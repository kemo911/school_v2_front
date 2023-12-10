<template>
  <div class="row window-height">
    <div class="col-md-2 offset-md-5 self-center justify-center items-center">
      <h2 class="text-primary">Signup</h2>
      <q-form @submit.prevent="onSubmit" >
        <q-input
            type="email"
            placeholder="Email"
            v-model="email"
            req
        />

        <q-input
            type="text"
            placeholder="First Name"
            v-model="firstName"
        />

        <q-input
            type="text"
            placeholder="Last Name"
            v-model="lastName"
        />




        <q-input v-model="date" placeholder="Date of birth">
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <div class="signup-prompt">
          <q-btn type="submit" color="primary" label="Signup" />
        </div>

        <p class="text-primary">
          Already have an account ?
          <router-link
            to="/login"
            custom
            v-slot="{ href , navigate}"
          >
            <a :href="href" @click="navigate" class="text-secondary">Login!</a>
          </router-link>
        </p>
      </q-form>
    </div>
  </div>
</template>

<script>
import './auth.css'

export default {
  data() {
    return {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      date: ''
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