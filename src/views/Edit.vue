<template>
  <h1 class="text-center font-bold text-3xl py-5">Edit account</h1>
  <edit-form> </edit-form>
</template>
<script>
import EditForm from "../components/EditForm.vue";

export default {
  name: "Edit",
  components: {
    EditForm,
  },
  data() {
    return {
      url: "http://localhost:5000/employeeList",
    };
  },
  methods: {
    async editForm(editindForm) {
      try {
        const res = await fetch(`${this.url}/${editindForm.id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: editindForm.name,
            email: editindForm.email,
            company: editindForm.company,
            title: editindForm.title,
            status: editindForm.status,
          }),
        });
        const data = await res.json();
        this.employeeList = this.employeeList.map((emp) =>
          emp.id === editindForm.id
            ? {
                ...emp,
                name: data.name,
                email: data.email,
                company: data.company,
                title: data.title,
                status: data.status,
              }
            : emp
        );
        this.isEdit = false;
        this.editId = "";
        this.enteredName = "";
        this.enteredEmail = "";
        this.enteredCompany = "";
        this.enteredTitle = "";
        this.status = null;
      } catch (error) {
        console.log(`Could not edited! ${error}`);
      }
    },
  },
};
</script>