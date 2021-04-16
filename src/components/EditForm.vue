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
        v-model.trim="enteredName"
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
        v-model.trim="enteredEmail"
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
        v-model.trim="enteredCompany"
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
        v-model.trim="enteredTitle"
        @blur="validateTitle"
      />

      <p v-if="invalidNameTitle" class="text-red-500">
        Please enter your Title!
      </p>

      <h2 class="font-bold"><span class="text-red-600">*</span> Status</h2>
      <div>
        <input
          type="radio"
          name="status"
          id="status-active"
          value="active"
          v-model="status"
        />
        <label class="label" for="status-active">Active</label>
      </div>

      <div>
        <input
          type="radio"
          name="status"
          id="status-busy"
          value="busy"
          v-model="status"
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
  data() {
    return {
      url: "http://localhost:5000/empResults",
      employeeList: [],
      isEdit: false,
      editId: "",
      enteredName: "",
      enteredEmail: "",
      enteredTitle: "",
      enteredCompany: "",
      status: null,
      invalidNameInput: false,
      invalidEmailInput: false,
      invalidCompanyInput: false,
      invalidTitleInput: false,
      invalidStatusInput: false,
    };
  },
  methods: {
    submitForm() {
      this.invalidNameInput = this.enteredName === "" ? true : false;
      this.invalidEmailInput = this.enteredEmail === "" ? true : false;
      this.invalidCompanyInput = this.enteredCompany === "" ? true : false;
      this.invalidTitleInput = this.enteredTitle === "" ? true : false;
      this.invalidstatusInput = this.status === null ? true : false;

      console.log(`name value: ${this.enteredName}`);
      console.log(`email value: ${this.enteredEmail}`);
      console.log(`company value: ${this.enteredcompany}`);
      console.log(`title value: ${this.enteredTitle}`);
      console.log(`status value: ${this.status}`);
      console.log(`invalid name: ${this.invalidNameInput}`);
      console.log(`invalid email: ${this.invalidEmailInput}`);
      console.log(`invalid company: ${this.invalidCompanyInput}`);
      console.log(`invalid title: ${this.invalidTitleInput}`);
      console.log(`invalid status: ${this.invalidStatusInput}`);

      if (
        !this.invalidNameInput &&
        !this.invalidEmailInput &&
        !this.invalidCompanyInput &&
        !this.invalidTitleInput &&
        !this.invalidStatusInput
      ) {
        if (this.isEdit) {
          this.editForm({
            id: this.editId,
            name: this.enteredName,
            email: this.enteredEmail,
            company: this.enteredCompany,
            title: this.enteredTitle,
            status: this.status,
          });
        } else {
          this.addNewemp({
            name: this.enteredName,
            email: this.enteredEmail,
            company: this.enteredCompany,
            title: this.enteredTitle,
            status: this.status,
          });
        }
      }
    },
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

