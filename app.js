Vue.createApp({
    data() {
        return {
            goals: [],
            enteredTitle: '',
            enteredDesc: ''
        } ;
    },

    methods: {
        addGoal() {
            itemId = this.goals.length

            this.goals.push( { 'id': itemId, 
                'title': this.enteredTitle, 
                'desc': this.enteredDesc
            } ) ;
            this.enteredTitle = '' ;
            this.enteredDesc = '' ;
        },

        removeGoal(goal) {
            this.goals.splice(this.goals.indexOf(goal), 1) ;
        }
    }
}).mount("#app") ;