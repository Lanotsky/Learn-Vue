var app = new Vue({
  el: 'h1',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
    el: '#binding',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#conditionals',
    data: {
        seen: false
    }
})

var app4 = new Vue({
    el: '#loops',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
})

var app5 = new Vue({
    el: '#user-input',
    data: {
        message: 'hello-user'
    },
    methods: {
        reverseString: function(){
            
            this.message = this.message.split('').reverse().join('');
        }
    }
})

Vue.component('todo-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['todo'],
    template: '<li style="color: rgba(10,10,10,0.5);">{{ todo.text }}</li>'
})


var app7 = new Vue({
    el: '#vue-component',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})

Vue.component('img-component', {
    props: ['image'],
    template: '<img :src="image.src" style="padding: 10px;" >'
})

var imageList = [
    { id: 0, src: "https://picsum.photos/200/300/?random" },
    { id: 2, src: "https://picsum.photos/g/200/300/?random" },
    { id: 3, src: "https://picsum.photos/g/200/300/?random" }
]


var app8 = new Vue({
    el: '#img-component',
    data: {
        imageList,
    }
})

