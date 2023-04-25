<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-content-title>
            Food Blog
          </v-list-item-content-title>
          <v-list-item-content-subtitle>
            
          </v-list-item-content-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
      <v-list-item-group
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i" :to="item.link" link
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- <v-toolbar-title>Home</v-toolbar-title> -->
      <nav class="navbar navbar-expand-md mb-2">
        <div class="container-fluid">
            <router-link to="/home_client" class="navbar-brand">Home</router-link>
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                  <router-link to="/login" class="nav-link">Admin</router-link>
                </li>
                <!-- <li class="nav-item">
                  <router-link to="/register" class="nav-link ">Register</router-link>
                </li> -->
            </ul>     
        </div>
    </nav>
    </v-app-bar>

    <v-main>
     <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null,
      items: [
        { title: 'Home', icon: 'mdi-home', link: "/home_client" },
        // { title: 'Add Post', icon: 'mdi-note-plus', link: "/add-post" },
        { title: 'About', icon: 'mdi-help-box', link: "/about" },
      ],
    }),
  }
</script>

<style>
  .navbar-nav {
    display: flex;
    position: relative;
    right: -790px;
  }
</style>