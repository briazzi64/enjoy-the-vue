<template>
  <h1>Store Component</h1>
  <form v-if="!userStore.userIsLoggedIn" @submit.prevent="submitUserName()">
    <InputComponent id="firstName" v-model="firstName" label="First Name" />
    <InputComponent id="lastName" v-model="lastName" label="Last Name" />
    <ButtonComponent :disabled="!formIsValid" type="submit">
      Submit
    </ButtonComponent>
  </form>
  <template v-else>
    <p>Thank you for logging in {{ userStore.fullUserName }}</p>
    <ButtonComponent @button-clicked="userStore.logUserOut">
      Log Out
    </ButtonComponent>
  </template>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useUserStore } from '../../store';
import InputComponent from '../../components/Input.vue';
import ButtonComponent from '../../components/Button.vue';

const userStore = useUserStore();

const firstName = ref('');
const lastName = ref('');
const formIsValid = computed(
  () => firstName.value.length && lastName.value.length
);

function submitUserName() {
  // Pretend to hit an endpoint and get a valid response.
  userStore.setFullUserName(firstName.value, lastName.value);
  firstName.value = '';
  lastName.value = '';
}
</script>
