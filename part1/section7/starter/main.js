// ["Vue", "React", "Nuxt", "NextJS", "Node", "NestJS", "React Native", "Electron", "Rust"]

const { createApp } = Vue;

createApp({
    data () {
        return {
            todoArray: [
                { value: "Vue", isCompleted: false },
                { value: "React", isCompleted: false },
            ],
            inputText: "",
        };
    },

    methods: {
        addTodo () {
            if (!this.inputText.trim().length) {
                alert("Please enter todo text");
                this.inputText = "";
                return;
            }

            this.todoArray.push(this.inputText);
            this.inputText = "";
        },

        removeTodo (removeIdx) {
            this.todoArray = this.todoArray.filter((_todo, idx) => idx !== removeIdx);
        },

        completeTodo (idx) {
            this.todoArray = this.todoArray.map((todo, index) => {
                if (index === idx) {
                    return {
                        ...todo,
                        isCompleted: true
                    }
                }
                return todo;
            });
        }
    },
}).mount("#app");
