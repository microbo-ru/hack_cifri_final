<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" v-for="(form, index) in $store.state.forms" :key="index">
        <v-card height="150px" dark>
          <v-card-title>{{form.title}}</v-card-title>
          <v-card-text>{{form.description}}</v-card-text>
          <v-card-actions>
            <v-btn @click="$emit('newActiveForm', index)">{{text}}</v-btn>
          </v-card-actions>
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