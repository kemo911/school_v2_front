<template>
  <q-layout view="hHh Lpr lff" >
    <q-header elevated class="bg-grey-1">
      <q-toolbar class="text-grey-8">
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>Header</q-toolbar-title>
        <q-icon
            name="logout_circle"
            @click="logout"
            size="2em"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="drawer"
        :width="200"
        :breakpoint="400"
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section>
              Inbox
            </q-item-section>
          </q-item>

          <q-item active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section>
              Star
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section>
              Send
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section>
              Drafts
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">{{user.object.first_name}}</div>
          <div>{{user.object.email}}</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <router-view v-if="$route.name !=='dashboard'" />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>

import router from "@/routes";
import { mapState } from 'vuex'
import store from "@/store/store";

export default {
  data: () => ({
    drawer: true,
  }),
  computed: {
    items() {
      // Access the user type from Vuex
      const userType = store.state.user.object.groups[0];
      // Return the appropriate items based on the user type
      return userType === 6 ? store.state.sidebar.student : store.state.sidebar.admin;
    },
    ...mapState({
      user : 'user'
    })
  },
  methods:{
    logout() {
      store.dispatch('logout')
      router.push('/login')
    }
  },
};
</script>