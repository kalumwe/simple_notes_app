const inputComponent = {
   template: `<input class="input is-small" type="text" 
            :placeholder="placeholder"
            v-model="input"
            @keyup.enter="monitorEnterKey" />`,
   props: ['placeholder'],
   data () {
      return {
        input: ''
      }
    },
    methods: {
        monitorEnterKey() {
            this.$emit('add-note', {
               note: this.input,
               timestamp: new Date().toLocaleString()
            });
            this.input = '';
        }
    }
}

new Vue({
   el: '#app',
   data: {
      notes: [],
      timestamps: [],
      placeholder: 'Enter a note',
   },
   methods: {
      addNote(event) {
        this.notes.push(event.note);
        this.timestamps.push(event.timestamp);
      }
    },
   components: {
      'input-component': inputComponent
   }
})