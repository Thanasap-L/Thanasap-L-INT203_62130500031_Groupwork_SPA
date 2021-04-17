<template>
    <div @click="deleteEmployee()"></div>
</template>
<script>
export default {
    name: 'DeleteEmp',
data(){
    return{
        employeeList: [],
        url: "http://localhost:5000/employeeList",     
    }
},
methods: {
    async deleteAccount(deleteId) {
      try {
        await fetch(`${this.url}/${deleteId}`, {
          method: "DELETE",
        });
        this.employeeList = this.employeeList.filter(
          (employee) => employee.id !== deleteId
        );
      } catch (error) {
        console.log(`Could not delete! ${error}`);
      }
    }
}
}
</script>