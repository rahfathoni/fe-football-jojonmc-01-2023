<template>
  <div class="q-pt-md q-pb-lg">
    <div class="text-weight-bold" style="font-size: 30px">COUNTRY</div>
    <div class="fit row inline wrap justify-around items-start content-start">
      <q-card
        v-for="(item, index) in areas"
        :key="'id' + index"
        v-ripple
        class="col-4 q-mt-lg cursor-pointer q-hoverable"
        style="width: 300px"
        @click="redirect(item)"
      >
        <q-img :src="item.flag" :alt="item.countryCode" height="200px">
          <div
            class="absolute-bottom text-subtitle2 text-center text-uppercase"
          >
            {{ item.name }}
          </div>
        </q-img>
      </q-card>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "MainPage",
  setup() {
    const store = useStore();
    const router = useRouter();

    //BEFORE MOUNTED
    onBeforeMount(async () => {
      await store.dispatch("main/inquiryAllAreas");
    });

    //COMPUTED
    const areas = computed(() => store.getters["main/getAllAreas"]);

    //METHOD
    const redirect = (item) => {
      router.push({ path: `/area/${item.countryCode}` });
    };

    return {
      areas,
      redirect,
    };
  },
};
</script>
