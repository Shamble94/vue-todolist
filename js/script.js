const { createApp } = Vue;

createApp({
    data(){
        return{
            added_task: ``,
             todo_list: [
                    {
                       text: `Fare la spesa`,
                       done: false,
                    },
                    {
                        text: `Fare la lavatrice`,
                        done: true,
                    },
                    {
                        text: `Portare il cane dal veterinario`,
                        done: false,
                    },
                    {
                        text: `Fare l'esercizio di boolean`,
                        done: false,
                    },
                    {
                        text: `Riguardare la lezione`,
                        done: true,
                    },
                    {
                        text: `Preparare la cena`,
                        done: false,
                    }
                ]
        }
    },
    methods:{
        removeTask(index){
            let conferma = confirm("Sei sicuro di voler eliminare questa task?")
            if(conferma){

                this.todo_list.splice(index,1);
            }
        },
        addTask(){
            this.todo_list.push({
                text: this.added_task,
                done: false
            })
            this.added_task = ``
        }

    }
}).mount(`#app`);