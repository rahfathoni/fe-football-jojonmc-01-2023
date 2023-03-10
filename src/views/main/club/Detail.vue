<template>
  <div class="q-pt-md q-pb-lg">
    <div class="text-weight-bold text-uppercase" style="font-size: 30px">
      <q-breadcrumbs>
        <template v-slot:separator>
          <q-icon size="1.5em" name="chevron_right" color="grey" />
        </template>
        <q-breadcrumbs-el label="COUNTRY" to="/" />
        <q-breadcrumbs-el
          :label="areaData.name"
          :to="`/area/${$route.params.id}`"
        />
        <q-breadcrumbs-el :label="teamData.name" />
      </q-breadcrumbs>
    </div>
    <div>
      <div
        class="fit row inline wrap justify-evenly items-start content-start q-pb-md"
      >
        <q-card class="col-5 q-mt-lg" flat style="width: 300px">
          <q-img :src="teamData.crest" :alt="teamData.cres" height="300px" />
        </q-card>
        <div class="text-left q-mt-lg col-6">
          <div class="text-weight-bold" style="font-size: 23px">
            CLUB PROFILE
          </div>
          <q-separator size="3px" class="bg-color-red-v1 q-mb-sm" />
          <div
            v-for="(item, index) in teamProfile"
            :key="'id' + index"
            class="fit row inline wrap justify-start items-start content-start"
            style="font-size: 15px"
          >
            <div class="col-4 q-mb-sm">{{ item.field }}</div>
            <div class="col-1">:</div>
            <a v-if="item.isLink" :href="item.value" target="_blank">{{
              item.value
            }}</a>
            <div v-else class="col-7 text-weight-medium">
              {{ item.value }}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="text-weight-bold" style="font-size: 23px">CLUB SQUAD</div>
        <q-separator size="3px" class="bg-color-red-v1 q-mb-sm" />
        <div class="text-right" style="font-size: 13px">
          * Click on row for squad detail
        </div>
        <q-table
          :rows="teamSquad"
          :columns="columns"
          row-key="name"
          flat
          bordered
          :rows-per-page-options="[0]"
          :filter="filter"
          @row-click="squadDetail"
        >
          <template v-slot:top>
            <q-input class="col-4" dense v-model="filter" placeholder="Search">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
        </q-table>
      </div>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { useQuasar } from "quasar";
import PlayerDetailComponent from "../player/Detail.vue";

export default {
  name: "ClubDetail",
  setup() {
    const store = useStore();
    const route = useRoute();
    const $q = useQuasar();

    //DATA
    const columns = ref([
      {
        name: "no",
        align: "left",
        label: "No",
        field: "no",
        sortable: true,
        style: "font-size: 15px",
        headerClasses: "text-weight-bold",
        headerStyle: "font-size: 18px",
      },
      {
        name: "name",
        align: "left",
        label: "Name",
        field: "name",
        sortable: true,
        classes: "text-weight-medium",
        style: "font-size: 15px",
        headerClasses: "text-weight-bold",
        headerStyle: "font-size: 18px",
      },
      {
        name: "position",
        align: "left",
        label: "Position",
        field: "position",
        sortable: true,
        style: "font-size: 15px",
        headerClasses: "text-weight-bold",
        headerStyle: "font-size: 18px",
      },
      {
        name: "dateOfBirth",
        align: "left",
        label: "Birth Date",
        field: "dateOfBirth",
        sortable: true,
        style: "font-size: 15px",
        headerClasses: "text-weight-bold",
        headerStyle: "font-size: 18px",
      },
      {
        name: "nationality",
        align: "left",
        label: "Nationality",
        field: "nationality",
        sortable: true,
        style: "font-size: 15px",
        headerClasses: "text-weight-bold",
        headerStyle: "font-size: 18px",
      },
    ]);
    const filter = ref("");

    //BEFORE MOUNTED
    onBeforeMount(async () => {
      await store.dispatch("main/inquiryTeamDetail", {
        country: route.params.id,
        team: route.params.teamId,
      });
    });

    //COMPUTED
    const teamData = computed(() => store.getters["main/getTeamDetail"]);
    const areaData = computed(() => store.getters["main/getTeamArea"]);
    const teamProfile = computed(() => store.getters["main/getTeamProfile"]);
    const teamSquad = computed(() => store.getters["main/getTeamSquad"]);

    //METHOD
    const squadDetail = async (_e, row) => {
      await store.dispatch("main/inquirySquadDetail", {
        country: route.params.id,
        id: row.id,
      });
      $q.dialog({
        component: PlayerDetailComponent,
      }).onOk(() => {});
    };

    return {
      teamData,
      areaData,
      teamProfile,
      teamSquad,
      columns,
      filter,
      squadDetail,
    };
  },
};
</script>
