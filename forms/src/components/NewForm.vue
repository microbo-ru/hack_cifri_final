<template>
  <v-container>
    <v-row>
      <v-col>
        <NewFormPreview />
      </v-col>
      <v-col>
        <NewFormSideBar />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewFormSideBar from "./NewFormSideBar";
import NewFormPreview from "./NewFormPreview";
export default {
  name: "NewForm",
  components: {
    NewFormSideBar,
    NewFormPreview
  }
};
</script>