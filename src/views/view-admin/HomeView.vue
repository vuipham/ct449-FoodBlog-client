<template>
  <v-container>
    <v-alert border="left" close-text="Close Alert" color="green accent-4" darkdismissible v-if="this.$route.params.message">
      {{ this.$route.params.message }}
    </v-alert>
    <v-row no-gutters>
      <v-col sm="4" class="pa-3" v-for="post in posts" :key="post._id" >
        <v-card class="pa-1" :to="{name: 'post', params: {id: post._id}}">
          <v-img height="250" :src="path + `/${post.image}`" alt=""></v-img>
          <v-btn class="ml-4 mt-3" small outlined color="indigo">
            {{ post.category }}
          </v-btn>
          <v-card-title class="headline">
            {{ post.title }}
          </v-card-title>
          <v-card-text class="py-0">
            <p>{{ post.content.substring(0, 100) + "..." }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <router-link to="/add-post">
      <button class="btn btn-primary center mt-5">Thêm nội dung mới</button>
    </router-link>
  </v-container>
</template>

<script>
  import API from '../../api';
  export default {
    name: 'Home',
    data() {
      return {
        posts: [],
        path: 'http://localhost:5000'
      };
    },
    async created() {
      this.posts = await API.getAllPost();
    },
  }
</script>

<style>
  .center {  
    display: flex;
    margin: 0 auto;
  }
</style>
