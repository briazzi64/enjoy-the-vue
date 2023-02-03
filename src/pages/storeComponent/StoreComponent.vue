<template>
  <h1>Store Component</h1>
  <form v-if="!userStore.userIsLoggedIn" @submit.prevent="submitUserName()">
    <InputComponent
      v-model="firstName"
      input-id="firstName"
      label="First Name"
    />
    <InputComponent v-model="lastName" input-id="lastName" label="Last Name" />
    <ButtonComponent :disabled="!formIsValid" button-type="submit">
      Submit
    </ButtonComponent>
  </form>
  <template v-else>
    <p>Thank you for loggin in {{ userStore.fullUserName }}</p>
    <ButtonComponent @button-clicked="userStore.logUserOut">
      Log Out
    </ButtonComponent>
  </template>
</template>

<script setup>
import { ref, computed } from 'vue';
import InputComponent from '../todoComponent/components/Input.vue';
import ButtonComponent from '../todoComponent/components/Button.vue';
import { useUserStore } from '../../store';

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
