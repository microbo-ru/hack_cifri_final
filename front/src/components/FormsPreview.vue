<template>
  <v-container>
    <div class="title">Доступные</div>
    <v-row>
      <v-col cols="12" md="4" v-for="(form, index) in $store.state.forms" :key="index">
        <v-card height="150px">
          <v-card-title font-size="1.2rem">{{form.title}}</v-card-title>
          <v-card-text>{{form.description || "описание отсутвует"}}</v-card-text>
          <v-card-actions>
            <v-btn @click="$emit('newActiveForm', index)">{{text}}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <div class="title">недоступные</div>
    <v-row>
      <v-col cols="12" md="4" v-for="(form, index) in $store.state.bad_forms" :key="index">
        <v-card height="150px">
          <v-card-title word-wrap="normal" font-size="1.2rem">{{form.title}}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FormsPreview",
  props: ["text"]
};
</script>