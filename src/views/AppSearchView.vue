<template>
  <div>
    <h1>Перевірка номерів будинків</h1>
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
      <the-app-button
        @clickButton="validateNumber"
        >Перевірити
      </the-app-button>
    </div>
  </div>
  <!-- Read file template -->
  <div class="wrapper">
    <div class="read-file">
      <app-file-reader 
        @filereaded="readFile"/>

      <the-app-button 
        @clickButton="validateNumbersList"
        >Перевірити
      </the-app-button>
    </div>
    <div class="pagination">
      <h2>Список номерів:</h2>
      <the-app-button
        v-for="(page) in pages" 
        :key="page.id"
        @clickButton="goToPage(page)"
        >{{page.name}}
      </the-app-button>

    </div>

    <div class="numbers-list">
      <p v-for="(item) of numbersListViewed" :key="item.id" :class="['item', {
      'valid': item?.isValid && isStartValidated, 
      'invalid': !item?.isValid && isStartValidated}]">
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
      checkingHouseNumber: '',
      numbersList: [],
      isStartValidated: false,
      checkExpression: /(^[^0\D][0-9]*$)|(^[^0\D][0-9]*(([\/][1-9][0-9]*$)|([\-][АБВГДЕЖИКЛМНПРСТУФХЦЧШЮЯ]$)))?/mg,
      // https://regex101.com/r/eXM7sL/1
      // to delete my reg ex:
      // https://regex101.com/delete/R7DdaLFtojfzgAN2Mc9JNjnZ
    
      itemsOnPage: 1000,
      currentPosition: 0,
      
      startPage: 1,
      currentPage: 0,
    }
  },
  mounted() {
  
  },
  methods: {
    goToPage(page, index) {
      this.currentPosition = page.id * this.itemsOnPage
    },
    checkedNumber(value) {
      this.checkingHouseNumber = value
    },

    readFile(contentStr) {
      // видаляемо попередні результати перевірки на валіднітсь
      this.numbersList = []

      // встановлюємо флаг у режим - не перевірялось
      this.isStartValidated = false

      // content, що отримали (це строка), загоняємо у масив this.content
      // this.content = content.split(/[\n]/)
      const contentArray = contentStr.split(/\n/)
      // робимо масив номерів, кожен номер - об'єкт, у якому є id, data і буде
      //  властивість isValid - для виділення кольором валідних і
      //  невалідних номерів у списку
      for (let i = 0; i < contentArray.length; i++) {
        this.numbersList.push({ id: i, data: contentArray[i] })
      }
      // this.numbersListViewed(this.numbersList)  

    },
    validateNumbersList() {
      // встановлюємо флаг у режим - перевіряємо
      this.isStartValidated = true
      this.numbersList = [...this.validateList(this.numbersList)]
    },
    validateList(list) {
      let result = []
      list.forEach(element => {
        result.push({ id: element.id, 
                      data: element.data, 
                      isValid: this.validation(element.data) 
                    })
        // element.isValid = this.validation(element.data)
      }); 
      return result
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
    nextPosition() {
      return this.currentPosition + this.itemsOnPage
    },
    getNumberValidate() {
      return this.validation(this.checkingHouseNumber)
    },
    numbersListViewed() {
      const list = [...this.numbersList]
      return list.splice(this.currentPosition, this.nextPosition)
    },
    endPage() {
      return Math.ceil(this.numbersList.length / this.itemsOnPage)
    },
    pages() {
      const result = []
      result.push({id: 0, name: 'Перша', current: true})       
      for (let i = 1; i < this.endPage - 1; i++) {
        result.push({id: i, name: `${i + 1}`, current: false})       
      }
      result.push({ id: this.endPage - 1, name: 'Остання', current: false})
      return result      
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-inline: auto;

}

.search-form {
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.read-file {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 2px solid teal;
  border-radius: 1rem;
  padding-inline: 1.5rem;
  padding-block: 1rem;
} 

.numbers-list {
  min-width: 36rem;
  display: flex;
  flex-wrap: wrap;
  // grid-auto-columns: 0.2fr;
  // grid-auto-rows: auto;
  // column-gap: 0.5rem;
  row-gap: 0.5rem;
  justify-content: space-around;
  border: 2px solid teal;
  border-radius: 1rem;
  padding-inline: 1.5rem;
  padding-block: 1rem;

}

.item {
  display: inline-block;
  margin: 0;
  padding: 0.5rem 1rem;
  border: 2px solid rgb(157, 190, 190);
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

