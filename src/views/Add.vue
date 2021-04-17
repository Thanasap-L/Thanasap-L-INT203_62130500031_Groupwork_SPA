<template>
  <h1 class="text-center font-bold text-3xl py-5">Add New User</h1>
  <edit-form />
</template>
<script>
import EditForm from "../components/EditForm.vue";

export default {
  name: "Add",
  components: {
    EditForm,
  },
  methods: {
    async addNewEmp(newUser) {
      try {
        const res = await fetch(this.url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: newUser.name,
            email: newUser.email,
            company: newUser.company,
            title: newUser.title,
            status: newUser.status,
            role: newUser.role,
          }),
        });
        const data = await res.json();
        this.employeeList = [...this.employeeList, data];
      } catch (error) {
        console.log(`Could not save ${error}`);
      }
    },
  },
};
</script>