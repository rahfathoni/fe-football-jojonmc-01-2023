<template>
  <div class="home">
    <AreaComp />
    <ClubDetail />
    <PlayerPopUp />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "MainIndex",
  components: {
    AreaComp: defineAsyncComponent(() => import("./Area")),
    ClubDetail: defineAsyncComponent(() => import("./ClubDetail")),
    PlayerPopUp: defineAsyncComponent(() => import("./PlayerPopUp")),
  },
};
</script>
