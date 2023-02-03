import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useUserStore = defineStore('user', () => {
  const userIsLoggedIn = ref(false);
  const userFirstName = ref('');
  const userLastName = ref('');
  const fullUserName = computed(
    () => `${userFirstName.value} ${userLastName.value}`
  );
  function setFullUserName(firstName, lastName) {
    userIsLoggedIn.value = true;
    userFirstName.value = firstName;
    userLastName.value = lastName;
  }
  function logUserOut() {
    userIsLoggedIn.value = false;
    userFirstName.value = '';
    userLastName.value = '';
  }

  return {
    userIsLoggedIn,
    userFirstName,
    userLastName,
    fullUserName,
    setFullUserName,
    logUserOut
  };
});
