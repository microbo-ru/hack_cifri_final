<template>
  <v-container>
    <v-row>
      <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="mx-auto" width="344" height="250px" elevation="18">
          <v-card-text>
            <p class="display-1 text--primary">Создание/редактирование форм</p>

            <div class="text--primary">Нужна для создания форм аналитиком</div>
          </v-card-text>
          <v-card-actions>
            <v-btn text @click="$emit('NewForm')">Подробнее</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" width="344" height="250px" elevation="18">
          <v-card-text>
            <p class="display-1 text--primary">Рабочие процессы</p>

            <div class="text--primary">Нажна для создания логики обработки формы</div>
          </v-card-text>
          <v-card-actions>
            <v-btn text @click="$emit('Routes')">Подробнее</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" width="344" height="250px" elevation="18">
          <v-card-text>
            <p class="display-1 text--primary">Страница пользователя</p>

            <div class="text--primary">Нужна чтобы пользоваться благами</div>
          </v-card-text>
          <v-card-actions>
            <v-btn text @click="$emit('UserForm')">Подробнее</v-btn>
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

