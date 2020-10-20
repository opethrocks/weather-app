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
    <div class="box" v-if="isActive">
      <ul>
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
      isActive: false
    };
  },
  props: {
    autoCompleteData: {
      type: Object,
      default: () => {
        null;
      }
    },
    input: {
      type: String,
      default: () => {
        '';
      }
    }
  },
  methods: {
    newInput() {
      this.$emit('newInput', this.input);
      this.isActive = true;
      if (this.input === '') {
        this.isActive = false;
      }
    },
    selectCity($event) {
      this.input = $event;
      this.activeAutoComplete === false
        ? (this.activeAutoComplete = true)
        : (this.activeAutoComplete = false);
      this.isActive = false;
      this.$emit('selectCity', this.input);
    },
    clearCity() {
      this.input = null;
    }
  }
};
</script>
