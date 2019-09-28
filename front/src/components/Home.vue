<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mx-auto" width="344">
          <v-card-text>
            <p class="display-1 text--primary">Страница аналитика</p>

            <div class="text--primary">Нужна для создания форм аналитиком</div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="deep-purple accent-4" @click="$emit('NewForm')">Learn More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" width="344">
          <v-card-text>
            <p class="display-1 text--primary">Страница Путенера</p>

            <div class="text--primary">Нажна для создания логики обработки формы</div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="deep-purple accent-4" @click="$emit('Routes')">Learn More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" width="344">
          <v-card-text>
            <p class="display-1 text--primary">Страница пользователя</p>

            <div class="text--primary">Нужна чтобы пользоваться благами</div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="deep-purple accent-4" @click="$emit('UserForm')">Learn More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home"
};
</script>

