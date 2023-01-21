<template>
  <div>
    <div class="fit row justify-evenly items-start content-start q-pt-xs">
      <div class="text-center q-pt-xl">
        <div class="fit row wrap justify-start items-start content-start">
          <q-img width="50px" src="../assets/ball.png" />
          <div>
            <div
              class="text-weight-bold q-pb-none q-mb-none"
              style="font-size: 30px"
            >
              WIKI FOOTBALL CLUB
            </div>
            <div class="q-pt-none q-mt-none">All About Your Favorite Club</div>
          </div>
        </div>
      </div>
      <div class="text-center q-mr-lg">
        <q-img width="500px" height="160px" src="../assets/tim.jpg" />
      </div>
    </div>
    <div>
      <q-toolbar
        class="text-white fit row justify-start items-start content-start bg-color-red-v1"
      >
        <q-tabs
          v-model="tab"
          indicator-color="transparent"
          class="text-white text-weight-bold q-py-sm q-ml-md"
        >
          <q-route-tab
            v-for="tab in tabOption"
            :key="tab.name"
            v-bind="tab"
            exact
            :to="tab.to"
          />
        </q-tabs>
      </q-toolbar>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HeaderLayout",
  setup() {
    const tab = ref("home");
    const tabOption = [{ name: "home", label: "home", to: "/" }];

    return {
      tab,
      tabOption,
    };
  },
};
</script>
