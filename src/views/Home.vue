<template>
  <div class="overflow-x-auto w-full">
    <!-- Table -->
    <div
      class="mx-auto w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden"
    >
      <div class="bg-gray-50 text-gray-600 text-left grid grid-cols-5">
        <div class="col-span-1 font-semibold text-sm uppercase px-6 py-4">
          Name
        </div>
        <div class="col-span-1 font-semibold text-sm uppercase px-6 py-4">
          Title
        </div>
        <div
          class="col-span-1 font-semibold text-sm uppercase px-6 py-4 text-center"
        >
          status
        </div>
        <div
          class="col-span-1 font-semibold text-sm uppercase px-6 py-4 text-center"
        >
          role
        </div>
        <div
          class="col-span-1 font-semibold text-sm uppercase px-6 py-4 text-center"
        ></div>
      </div>

      <!-- Information -->

      <div v-for="employee in employeeList" :key="employee.id">
        <div class="divide-y divide-gray-200 flex">
          <!-- Name -->
          <div class="w-1/5 px-6 py-4">
            <p>{{ employee.name }}</p>
            <p class="text-gray-500 text-sm font-semibold tracking-wide">
              {{ employee.email }}
            </p>
          </div>

          <!-- Title -->
          <div class="w-1/5 px-6 py-4">
            <p class="">{{ employee.company }}</p>
            <p class="text-gray-500 text-sm font-semibold tracking-wide">
              {{ employee.title }}
            </p>
          </div>

          <!-- Status -->
          <div class="w-1/5 px-6 py-4 text-center">
            <span class="font-semibold px-2 rounded-full">
              {{ employee.status }}</span
            >
          </div>

          <!-- Role -->
          <div class="w-1/5 px-6 py-4 text-center">
            {{ employee.role }}
          </div>

          <!-- Edit -->
          <div class="w-1/12 px-6 py-4 text-center flex gap-x-20">
            <div class="text-purple-800 hover:underline">
              <button @click="sendEdit(employee.id)">Edit</button>
            </div>
            <div class="text-red-700 hover:underline cursor-pointer">
              <delete-emp :id="employee.id" @delete-emp="deleteEmp"
                >Delete</delete-emp
              >
              <!-- </div> -->
            </div>
          </div>
        </div>
        <edit-form
          v-if="employee.id == editId"
          :employee="employee"
          @done-form="editId = null"
          :isEdit="true"
        ></edit-form>
      </div>
    </div>
  </div>
</template>
<script>
import EditForm from "../components/EditForm.vue";
import DeleteEmp from "../components/DeleteEmp.vue";
export default {
  name: "Home",
  components: {
    DeleteEmp,
    EditForm,
  },
  data() {
    return {
      employeeList: [],
      url: "http://localhost:5000/employeeList",
      editId: null,
    };
  },
  methods: {
    async getEmpResult() {
      try {
        const res = await fetch(this.url);
        const data = res.json();
        return data;
      } catch (error) {
        console.log(`Counld not get! ${error}`);
      }
    },
    sendEdit(id) {
      this.editId = id;
    },
    deleteEmp(id) {
      this.employeeList = this.employeeList.filter(
        (employee) => employee.id !== id
      );
    },
  },
  async created() {
    this.employeeList = await this.getEmpResult();
  },
};
</script>

