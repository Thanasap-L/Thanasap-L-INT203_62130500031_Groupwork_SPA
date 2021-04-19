<template>
  <h1 class="text-center font-bold text-3xl py-5">Add New User</h1>
  <edit-form :employee="{}" :isEdit="false" />
</template>
<script>
import EditForm from "../components/EditForm.vue";

export default {
  name: "Add",
  components: {
    EditForm,
  },
};
</script>