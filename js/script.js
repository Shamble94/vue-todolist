const { createApp } = Vue;

createApp({
    data(){
        return{
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
    }
}).mount(`#app`);