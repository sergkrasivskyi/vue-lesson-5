<template>
    <label class="file-loader" for="file">Виберіть текстовий файл (*.txt)
      <input id="file" type="file" @change="readFile" />
    </label>
</template>

<script>
  export default {
    name: "AppFileReader",
    methods: {
      readFile(event) {
        // можна отримувати доступ до завантаженого файлу через
          //  ref='doc' у розмітці
          // file = this.$refs.doc.files[0];
       // А можна передати подію і отримати доступ до файлу через подію
          // file = event.target.files[0]
        
        const file = event.target.files[0]
        const reader = new FileReader();
        if (file.name.includes(".txt")) {
          reader.readAsText(file)
          reader.onload = (res) => this.$emit('filereaded', res.target.result)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.file-loader {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: inline-block;
  padding-inline: 1.5rem;
  padding-block: 1rem;
  /* Fancy button style 😎 */
  outline: 2px solid teal;
  border-radius: 1rem;
  
  z-index: 1;
  
  
  & input {
    cursor: pointer;
    position: absolute;
    inset: 0;
    opacity: 0;
    z-index: -1;
  }
}
</style>