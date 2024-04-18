<template>
  <div class="login">
    <div class="login-form">
      <div class="login-field">
        <label for="username" class="login-field-label">username</label>
        <input id="username" type="text" class="login-field-input">
      </div>
      <div class="login-field">
        <label for="password" class="login-field-label">password</label>
        <input id="password" type="password" class="login-field-input">
      </div>
      <button class="login-button" @click="login">login</button>
    </div>
  </div>
</template>

<script setup>
import { toast } from "vue3-toastify";
import { useRouter } from "vue-router";

const router = useRouter()

const login = () => {
  toast.success('Sign in successfully')
  router.push('/')
}
</script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/pilot-bg.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.8);
}

.login-field {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.login-field-label {
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
}

.login-field-input {
  padding-left: 5px;
  width: 200px;
  height: 35px;
  font-size: 20px;
  font-weight: 500;
  border: 1px solid #000;
  border-radius: 5px;
}

.login-button {
  margin-top: 40px;
  width: 200px;
  height: 35px;
  font-size: 20px;
  font-weight: 500;
  color: lightblue;
  background-color: darkred;
  border: none;
  border-radius: 5px;
  transition: all 0.3s ease-in;
}

.login-button:hover {
  color: darkblue;
  box-shadow: inset 300px 0 0 0 yellow;
  cursor: pointer;
}
</style>
