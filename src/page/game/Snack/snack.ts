
import { makeAutoObservable } from "mobx";
interface point {
    x:number
    y:number
}

class Snack {
    constructor(){
        makeAutoObservable(this)
        this.showFood()
    }

    public header:point = {
        x : 2,
        y : 0,
    }
    public tail :any ={
        x : 0,
        y : 0
    }
    public body : [point] = [{x:1,y:0}]

    direction = 'right'

    reset = () => {
        this.direction ='right'
        this.header = {
            x : 2,
            y : 0,
        }
        this.body = [{x:1,y:0}]
        this.tail = {
            x : 0,
            y : 0
        }
    }
    foodPoint:point = {
        x : 10,
        y : 10
    }
    showFood = () => {
        let point = createFood()
        let snackPoints = [this.header,...this.body,this.tail]
        let index =  snackPoints.indexOf((item)=> item.x == point.x && item.y == point.y)  
        if (index == -1) {
            this.foodPoint = point
        }else{
            this.showFood()
        }
    }
    eatFood = () => {
        this.body.unshift(this.header)
        this.header = {...this.foodPoint}
        // this.tail = this.body.pop()
    }
    move = () => {
        switch (this.direction) {
            case 'right':
                this.body.unshift(this.header)
                this.header = {
                    x : this.header.x + 1,
                    y : this.header.y
                }
                this.tail = this.body.pop()
                break;
            case 'bottom':
                this.body.unshift(this.header)
                this.header = {
                    x : this.header.x ,
                    y : this.header.y + 1
                }
                this.tail = this.body.pop()
                break;
            case 'left':
                this.body.unshift(this.header)
                this.header = {
                    x : this.header.x - 1,
                    y : this.header.y 
                }
                this.tail = this.body.pop()
                break;
            case 'top':
                this.body.unshift(this.header)
                this.header = {
                    x : this.header.x ,
                    y : this.header.y - 1
                }
                this.tail = this.body.pop()
                break;
            default:
                break;
        }
    }
}

const  createFood = () => {
    let x = Math.floor( Math.random() * 43)
    let y = Math.floor(Math.random()* 28 )
    return {x,y}
}
const snack = new Snack() 
export default snack