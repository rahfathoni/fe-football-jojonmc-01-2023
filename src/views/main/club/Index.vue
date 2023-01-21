<template>
  <div class="q-pt-md q-pb-lg">
    <div class="text-weight-bold text-uppercase" style="font-size: 30px">
      <q-breadcrumbs>
        <template v-slot:separator>
          <q-icon size="1.5em" name="chevron_right" />
        </template>
        <q-breadcrumbs-el label="COUNTRY" to="/" />
        <q-breadcrumbs-el :label="areaName" />
      </q-breadcrumbs>
    </div>
    <div class="fit row inline wrap justify-around items-start content-start">
      <q-card
        v-for="(item, index) in teamList"
        :key="'id' + index"
        v-ripple
        class="col-4 q-mt-lg cursor-pointer q-hoverable"
        style="width: 200px"
        @click="redirect(item)"
      >
        <q-img :src="item.crest" :alt="item.shortName" height="200px">
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
import { useRoute, useRouter } from "vue-router";

export default {
  name: "ClubList",
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    //BEFORE MOUNTED
    onBeforeMount(async () => {
      await store.dispatch("main/inquiryTeamList", route.params.id);
    });

    //COMPUTED
    const areaName = computed(() => store.getters["main/getTeamList"].area);
    const teamList = computed(() => store.getters["main/getTeamList"].list);

    //METHOD
    const redirect = (item) => {
      console.log("route =>", route.path);
      console.log("item =>", item);
      router.push({ path: `${route.path}/team/${item.tla}` });
    };

    return {
      areaName,
      teamList,
      redirect,
    };
  },
};
</script>
