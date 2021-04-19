<template>
  <form @submit.prevent="submitForm">
    <div class="editBorder">
      <label class="label" for="name"
        ><span class="text-red-600">*</span> Your Name</label
      >
      <input
        class="input"
        :class="{ 'bg-red-50': invalidNameInput }"
        id="name"
        type="text"
        v-model.trim="newEmp.name"
        @blur="validateName"
      />

      <p v-if="invalidNameInput" class="text-red-500">
        Please enter your Name!
      </p>

      <label class="label" for="email"
        ><span class="text-red-600">*</span> Email</label
      >
      <input
        class="input"
        :class="{ 'bg-red-50': invalidEmailInput }"
        id="email"
        type="text"
        v-model.trim="newEmp.email"
        @blur="validateEmail"
      />
      <p v-if="invalidEmailInput" class="text-red-500">
        Please enter your Email!
      </p>

      <label class="label" for="company"
        ><span class="text-red-600">*</span> Company</label
      >
      <input
        class="input"
        :class="{ 'bg-red-50': invalidCompanyInput }"
        id="company"
        type="text"
        v-model.trim="newEmp.company"
        @blur="validateCompany"
      />
      <p v-if="invalidCompanyInput" class="text-red-500">
        Please enter your Company!
      </p>

      <label class="label" for="title"
        ><span class="text-red-600">*</span> Title</label
      >
      <input
        class="input"
        :class="{ 'bg-red-50': invalidTitleInput }"
        id="title"
        type="text"
        v-model.trim="newEmp.title"
        @blur="validateTitle"
      />

      <label class="label" for="role"
        ><span class="text-red-600">*</span> Role</label
      >
      <input
        class="input"
        :class="{ 'bg-red-50': invalidRoleInput }"
        id="role"
        type="text"
        v-model.trim="newEmp.role"
        @blur="validateRole"
      />

      <p v-if="invalidNameRole" class="text-red-500">Please enter your Role!</p>

      <h2 class="font-bold"><span class="text-red-600">*</span> Status</h2>
      <div>
        <input
          type="radio"
          name="status"
          id="status-active"
          value="Active"
          v-model="newEmp.status"
          :checked="newEmp.status == 'Active'"
        />
        <label class="label" for="status-active">Active</label>
      </div>

      <div>
        <input
          type="radio"
          name="status"
          id="status-busy"
          value="Busy"
          v-model="newEmp.status"
          :checked="newEmp.status == 'Busy'"
        />
        <label class="label" for="status-busy">Busy</label>
      </div>
      <p v-if="invalidStatusInput" class="text-red-500">
        Please choose your Status!
      </p>
    </div>
    <button class="btn">Submit</button>
  </form>
</template>

<script>
export default {
  name: "EditForm",
  props: ["employee", 'isEdit'],
  data() {
    return {
      url: "http://localhost:5000/employeeList",
      newEmp: this.employee,
      invalidNameInput: false,
      invalidEmailInput: false,
      invalidCompanyInput: false,
      invalidTitleInput: false,
      invalidRoleInput: false,
      invalidStatusInput: false,
    };
  },
  methods: {
    submitForm() {
      this.invalidNameInput = this.employee.name === "" ? true : false;
      this.invalidEmailInput = this.employee.email === "" ? true : false;
      this.invalidCompanyInput = this.employee.company === "" ? true : false;
      this.invalidTitleInput = this.employee.title === "" ? true : false;
      this.invalidRoleInput = this.employee.role === "" ? true : false;
      this.invalidstatusInput = this.employee.status === null ? true : false;

      if (
        !this.invalidNameInput &&
        !this.invalidEmailInput &&
        !this.invalidCompanyInput &&
        !this.invalidTitleInput &&
        !this.invalidRoleInput &&
        !this.invalidStatusInput
      ) {
        if (this.isEdit) {
          this.editForm({
            id: this.employee.id,
            name: this.employee.name,
            email: this.employee.email,
            company: this.employee.company,
            title: this.employee.title,
            role: this.employee.role,
            status: this.employee.status,
          });
        } else {
          this.addNewEmp({
            name: this.employee.name,
            email: this.employee.email,
            company: this.employee.company,
            title: this.employee.title,
            role: this.employee.role,
            status: this.employee.status,
          });
        }
      }
    },
    async editForm(editingForm) {
      try {
        await fetch(`${this.url}/${editingForm.id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: editingForm.name,
            email: editingForm.email,
            company: editingForm.company,
            title: editingForm.title,
            role: editingForm.role,
            status: editingForm.status,
          }),
        });
        this.$emit("done-form");
      } catch (error) {
        console.log(`Could not edited! ${error}`);
      }
    },
    async addNewEmp(newUser) {
      try {
        await fetch(this.url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: newUser.name,
            email: newUser.email,
            company: newUser.company,
            title: newUser.title,
            role: newUser.role,
            status: newUser.status, 
          }),
        });
        window.location.replace("/Home");
      } catch (error) {
        console.log(`Could not save ${error}`);
      }
    },
  },
};
</script>

