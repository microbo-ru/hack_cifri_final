<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col>
          <label>{{label}}</label>
        </v-col>
        <v-col>
          <input
            type="text"
            :name="name"
            :value="value"
            @input="$emit('input',$event.target.value)"
            :placeholder="placeholder
           "
          />
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>
<script>
export default {
  name: "TextInput",
  props: ["placeholder", "label", "name", "value"]
};
</script>