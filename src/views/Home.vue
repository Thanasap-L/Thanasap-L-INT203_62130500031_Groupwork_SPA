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
        <div class="divide-y divide-gray-200 grid grid-cols-5">
          <!-- Name -->
          <div class="col-span-1 px-6 py-4">
            <p>{{ employee.name }}</p>
            <p class="text-gray-500 text-sm font-semibold tracking-wide">
              {{ employee.email }}
            </p>
          </div>

          <!-- Title -->
          <div class="col-span-1 px-6 py-4">
            <p class="">{{ employee.company }}</p>
            <p class="text-gray-500 text-sm font-semibold tracking-wide">
              {{ employee.title }}
            </p>
          </div>

          <!-- Status -->
          <div class="col-span-1 px-6 py-4 text-center">
            <span v-if=""
              class="text-green-800 bg-green-200 font-semibold px-2 rounded-full"
            >
              {{ employee.status }}
            </span>
          </div>

          <!-- Role -->
          <div class="col-span-1 px-6 py-4 text-center">
            {{ employee.role }}
          </div>

          <!-- Edit -->
          <div
            class="col-span-1 px-6 py-4 text-center text-purple-800 hover:underline"
          >
            <router-link to="/EditForm">Edit</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      employeeList: [],
      url: "http://localhost:5000/employeeList",
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
  },
  async created() {
    this.employeeList = await this.getEmpResult();
  },
};
</script>

