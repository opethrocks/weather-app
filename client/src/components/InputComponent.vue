<template>
  <div>
    <div class="field" id="input">
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-info is-focused"
          type="text"
          placeholder="Search for city"
          v-model="input"
          @keyup.enter="searchImperial"
          @input="newInput"
        />
        <span class="icon is-left">
          <font-awesome-icon icon="search" />
        </span>
        <span class="icon is-right">
          <a class="delete is-small" @click="clearCity"></a>
        </span>
      </div>
    </div>
    <!--show autocomplete box when autocomplete data is recieved from server-->
    <div class="box" v-if="autoCompleteData && isActive">
      <ul>
        <!--loop over autocomplete data and set selected city when clicked-->
        <li v-for="match in autoCompleteData" :key="match.id">
          <a
            class="has-text-weight-semibold"
            @click="selectCity(match.name)"
            @select="selectCity()"
            >{{ match.name }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputComponent',
  data() {
    return {
      isActive: false,
      input: null
    };
  },

  props: {
    autoCompleteData: {
      type: Array,
      default: () => {
        [];
      }
    }
  },
  methods: {
    //synchronize input with home component
    newInput() {
      this.isActive = true;
      if (this.input === '') {
        this.isActive = false;
        this.input = '';
      }
      this.$emit('newInput', this.input);
    },
    //set city when clicked
    selectCity($event) {
      this.input = $event;
      this.$emit('selectCity', this.input);
      this.isActive = false;
    },
    clearCity() {
      this.input = '';
      this.isActive = false;
      if (this.input === '') {
        this.$emit('newInput', this.input);
      }
    }
  }
};
</script>

<style scoped>
.box {
  display: flex;
  overflow-y: auto;
  height: fit-content;
  max-height: 30em;
  justify-content: center;
}
.custom-input {
  width: 300px;
}
</style>
