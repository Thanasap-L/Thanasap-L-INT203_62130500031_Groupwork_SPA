<template>
  <div @click="deleteEmp()"><slot></slot></div>
</template>
<script>
export default {
  name: "DeleteEmp",
  props: ["id"],
  data() {
    return {
      url: "http://localhost:5000/employeeList",
    };
  },
  methods: {
    async deleteEmp() {
      try {
        const res = await fetch(`${this.url}/${this.id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          this.$emit("delete-emp", this.id);
        }
      } catch (error) {
        console.log(`Could not delete! ${error}`);
      }
    },
  },
};
</script>