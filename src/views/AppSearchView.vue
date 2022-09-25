<template>
  <div>
    <h1>Список номерів будинків</h1>
    <div class="search-form">
      <the-app-input 
        :class="{'valid': getNumberValidate, 'invalid': !getNumberValidate}"
        type="text" 
        placeholder="введіть номер будинку"
        aria-controls="search-input"
        v-model="checkingHouseNumber"
        @update:modelValue="getNumberValidate"
        >Введіть номер будинку для перевірки
      </the-app-input>
      <the-app-button @clickButton="validateNumber">Перевірити</the-app-button>
    </div>
  </div>
  <!-- Read file template -->
<div class="item">
  <input type="file" ref="doc" @change="readFile" />
  <the-app-button @clickButton="validateNumbersList">Перевірити</the-app-button>
  <div v-for="(item) of numbersList" :key="item.id">
    <p :class="['item', {'valid': item?.isValid && isStartValidated, 'invalid': !item?.isValid && isStartValidated}]" >
      {{item.data}}
    </p>
  </div>
</div>

</template>

<script>
export default {
  name: "AppSearchView",
  data() {
    return {
      posts: [
        { id: 1, text: "asdasd" },
        { id: 2, text: "sdfgsdfg" },
        { id: 3, text: "assdfgsdfdasd" },
        { id: 4, text: "as12313123dasd" }
      ],
      placeholder: "номер будинку",
      checkingHouseNumber: '',
      file: null,
      content: null,
      numbersList: [],
      isStartValidated: false,
      
      checkExpression: /(^[^0\D][0-9]*$)|(^[^0\D][0-9]*(([\/][1-9][0-9]*$)|([\-][АБВГДЕЖИКЛМНПРСТУФХЦЧШЮЯ]$)))?/mg,
      // https://regex101.com/r/eXM7sL/1
      // to delete my reg ex:
      // https://regex101.com/delete/R7DdaLFtojfzgAN2Mc9JNjnZ
      }
  },
  methods: {
    buttonClicked(arg) {
      alert("Event clickButton Cathed" + arg)
    },
    checkedNumber(value) {
      this.checkingHouseNumber = value
    },

    readFile() {
        this.file = this.$refs.doc.files[0];
        const reader = new FileReader();
        if (this.file.name.includes(".txt")) {
          reader.onload = (res) => {
            this.content = res.target.result.split('\n');
            for (let i = 0; i < this.content.length; i++) {
              this.numbersList.push({id: i, data: this.content[i]})
            }
          };
          // reader.onerror = (err) => console.log(err);
          reader.readAsText(this.file);
        } 
        // else {
        //   this.content = "check the console for file output";
        //   reader.onload = (res) => {
        //     console.log(res.target.result);
        //   };
        //   reader.onerror = (err) => console.log(err);
        //   reader.readAsText(this.file);
        // }
      },
    validateNumbersList() {
    this.isStartValidated = true
    this.numbersList.forEach(element => {
      element.isValid = this.validation(element.data)
    });
    },
    validateNumber() {
      this.validation(this.checkingHouseNumber) 
      ? alert(`Number: ${this.checkingHouseNumber} is valid!`) 
      : alert(`Number: ${this.checkingHouseNumber} is invalid!`)

    },
    validation(string) {
    return (string.match(this.checkExpression)[0] == string) ? true : false
    }
  },
  computed: {
    getNumberValidate() {
        return this.validation(this.checkingHouseNumber)
      },
  }
}
</script>

<style lang="scss" scoped>
.search-form {
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.item {
  padding: 0.5rem 1rem;
  outline: 2px solid rgb(157, 190, 190);
  border-radius: 1rem;
  background-color: beige;
  &.valid {
    background-color: rgb(157, 190, 190);
  }
  &.invalid {
    background-color: rgb(207, 146, 127);
  }
}
</style>

