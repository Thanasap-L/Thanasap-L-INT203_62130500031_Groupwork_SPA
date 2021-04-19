<template>
  <h1 class="text-center font-bold text-3xl py-5">Edit account</h1>
  <edit-form> </edit-form>
</template>
<script>
import EditForm from "../components/EditForm.vue";

export default {
  name: "Edit",
  props: 'employee',
  components: {
    EditForm,
  },
  data() {
    return {
      url: "http://localhost:5000/employeeList",
    };
  },
  
};
</script>