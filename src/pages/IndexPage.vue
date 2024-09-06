<template>
  <div class="htmlClass">
    <h1>{{ title }}</h1>
    <p>รหัสนักศึกษา: {{ studentId }}</p>
    <p>ชื่อจริง: {{ firstName }}</p>
    <p>นามสกุล: {{ lastName }}</p>
    <p>ชื่อเล่น: {{ nickname }}</p>
  </div>
</template>

<script>
export default {
  name: 'HtmlComponent',
  data() {
    return {
      title: 'ข้อมูล นศ eiei.',
      studentId: '6604101403',
      firstName: 'chayanan',
      lastName: 'lakad',
      nickname: 'chokun',
    }
  },
}
</script>

<style scoped></style>
