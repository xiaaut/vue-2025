// ["Vue", "React", "Nuxt", "NextJS", "Node", "NestJS", "React Native", "Electron", "Rust"]
const { createApp } = Vue;

createApp({
    data () {
        return {
            todoArray: ["Vue", "React", "Nuxt", "NextJS", "Node", "NestJS", "React Native", "Electron", "Rust"],
            inputText: ""
        }
    },
    methods:{
        addTodo() {
            if( !this.inputText.trim().length) {
                alert("Please enter a valid todo");
                this.inputText = "";
                return
            }
            this.todoArray.push(this.inputText);
            this.inputText = "";
        },
        removeTodo(removeIndex) {
            this.todoArray = this.todoArray.filter((_todo, index) => index !== removeIndex)
        }
    }
}).mount("#app");