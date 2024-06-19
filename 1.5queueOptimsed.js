class queue{
      constructor(){
           this.items = {} 
           this.rear = 0
           this.front = 0
      }
      enqueue(element){
             this.items[this.rear] = element
             this.rear++
      }
      dequeue(){
            this.items[this.front]
      }
}