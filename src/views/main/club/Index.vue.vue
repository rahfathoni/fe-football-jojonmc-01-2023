<template>
  <div class="home">
    club list
    <li v-for="i in 10" :key="i">test{{ i }}</li>
  </div>
</template>

<script>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  name: "ClubList",
  setup() {
    const store = useStore();
    const route = useRoute();

    //BEFORE MOUNTED
    onBeforeMount(async () => {
      await store.dispatch("main/inquiryTeamList", route.params.id);
    });
  },
};
</script>
