<template>
    <main class="form-signin">
        <form>
          <h1 class="h3 mb-3 fw-normal">Sign in</h1>  
          <input v-model="user.username" class="form-control" type="text" title="username" placeholder="username" />
          <span v-if="!statusError.username" class="text-danger">*Vui lòng nhập username*</span>
          <div class="mt-4"></div>
          <input v-model="user.password" class="form-control" type="password" title="email" placeholder="Password" />
          <span v-if="!statusError.password" class="text-danger">*Vui lòng nhập password*</span>
          <div class="text-center">
            <button type="submit" @click="handlerSubmitLogin($event)" class="mt-3 w-100 btn btn-primary">Login</button>
          </div>
          <div class="mt-5">
            <a @click="handlerClickHome($event)" class="nav-link" href="#">Back to home page</a>
            <!-- <p>No account ?<a @click="handlerClickRegister($event)" class="nav-link" href="#">Register</a></p> -->
          </div>
        </form>
    </main>
</template>

<script>
import axios from 'axios'
export default{
  name: 'LoginPage',
  data(){
    return {
      user: {
        username: "",
        password: ""
      },
      status: false,
      statusError: {
        username: true,
        password: true
      }
    }
  },
  methods: {
    handlerClickHome(e){
      e.preventDefault()
      this.$router.push({name: 'home'})
    },
    validate(){
      if(this.user.username != ""){
        this.status = false
        this.statusError.username = true
      }else{
        this.statusError.username = false
      }
      if(this.user.password != ""){
        this.status = false
        this.statusError.password = true
      }else{
        this.statusError.password = false
      }
      if(this.statusError.username!="" && this.statusError.password){
        this.status = true
      }
    },
    
    handlerSubmitLogin(e){
      e.preventDefault()
      this.validate()
      if(this.status){
        const data = {
          username: this.user.username,
          password: this.user.password
        }
        axios.post('http://localhost:3000/api/auth/login',data)
          .then(response=>{
              if(response.status == 200){
                const token = response.data
                this.setCookie("token",token, '3d')
                this.$router.push({name: 'home'})
              }
          })
          .catch(error=>{
            console.log(error)
          })
      }
    },
    handlerClickRegister(e){
      e.preventDefault()
      this.$router.push({name: 'register'})
    },
    setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      let expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
  }
}
</script>

<style>
.form-signin {
  max-width: 330px;
  padding: 15px;
  display: flex;
  margin: auto;
  margin-top: 100px;
  align-items: center;
}

h1 {
    justify-content: center;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.fw-normal {
    font-weight: 400!important;
    display: flex;
}
</style>
 
 

 