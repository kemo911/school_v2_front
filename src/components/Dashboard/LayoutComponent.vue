<template>
  <div>
    <v-app-bar
      color="white"
      style="box-shadow: 0 2px 4px rgba(128, 128, 128, 0.5) !important;"
      app
      dense
      clipped-left
      flat
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <span class="second-word font uppercase">
          <v-img
            max-height="200"
            max-width="200"
            src="@/assets/logos/logo_colored.png"
          /></span>
      </v-toolbar-title>

      <v-spacer />
      <v-icon
        color="gray"
        @click="logout"
      >
        mdi-logout
      </v-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      flat
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img
              src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
              max-width="200"
              max-height="200"
            />
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Karim
            </v-list-item-title>
            <v-list-item-subtitle>k.ashrf911@gmail.com</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list
        nav
        dense
      >
        <v-list-item-group
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon" />
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main style="background-color: #f2f2f2 ; height: 100vh">
      <v-container>
        <router-view v-if="$route.name !=='dashboard'" />
      </v-container>
    </v-main>
  </div>
</template>

<script>

export default {
  data: () => ({
    drawer: true,
  }),
  computed: {
    items() {
      // Access the user type from Vuex
      const userType = this.$store.state.user.object.groups[0];
      // Return the appropriate items based on the user type
      return userType === 6 ? this.$store.state.sidebar.student : this.$store.state.sidebar.admin;
    }
  },
  methods:{
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  },
};
</script>