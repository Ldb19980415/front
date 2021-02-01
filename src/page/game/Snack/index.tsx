import React from "react";
import s from "./index.module.scss";
import { Button, message } from "antd";
import snack from "./snack";
import { observer } from "mobx-react";

interface Istates {
  timer: NodeJS.Timeout | undefined;
}

@observer
export default class Snack extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = (e) => {
    switch (e.keyCode) {
      case 37:
        //left
        if (snack.direction !== "right") {
          snack.direction = "left";
        }
        break;
      case 38:
        //top
        if (snack.direction !== "bottom") {
          snack.direction = "top";
        }
        break;
      case 39:
        //left
        if (snack.direction !== "left") {
          snack.direction = "right";
        }
        break;
      case 40:
        //left
        if (snack.direction !== "top") {
          snack.direction = "bottom";
        }
        break;
    }
  };
  state = {
    stop: false,
    timer: undefined,
    foodPoint: {
      x: 0,
      y: 0,
    },
    speed:100/2,
    level:1
  };
  startGame = () => {
    clearInterval(this.state.timer);
    this.setState({
      stop: false,
      foodPoint: snack.foodPoint,
    });
    let timer = setInterval(() => {
        if(this.state.stop){
            clearInterval(this.state.timer);
            return
        }
      let nextPoint = {
        x: 0,
        y: 0,
      };
      switch (snack.direction) {
        case "right":
          nextPoint.x = snack.header.x + 1;
          nextPoint.y = snack.header.y;
          break;
        case "bottom":
          nextPoint.x = snack.header.x;
          nextPoint.y = snack.header.y + 1;
          break;
        case "left":
          nextPoint.x = snack.header.x - 1;
          nextPoint.y = snack.header.y;
          break;
        case "top":
          nextPoint.x = snack.header.x;
          nextPoint.y = snack.header.y - 1;
          break;
      }
      let snackPoint = [snack.tail, ...snack.body, snack.header];
      console.log(snackPoint.indexOf(
        (item) => item.x === nextPoint.x && item.y === nextPoint.y
      ) > -1);
      console.log(snackPoint,nextPoint);
      
      if (
        snackPoint.indexOf(
          (item) => item.x == nextPoint.x && item.y == nextPoint.y
        ) > -1
      ) {
        message.error("笨蛋，撞到自己了");
        setTimeout(() => {
          snack.reset();
        }, 1000);
        clearInterval(this.state.timer);
      }
      console.log(nextPoint.x, nextPoint.y, "food");
      console.log(snack.header.x, snack.header.y, "header");
      if (
        nextPoint.x == this.state.foodPoint?.x &&
        nextPoint.y == this.state.foodPoint?.y
      ) {
        message.info("吃到食物");
        snack.eatFood();
        snack.showFood();
        this.setState({
          foodPoint: snack.foodPoint,
        });
      } else if (
        nextPoint.x >= 0 &&
        nextPoint.x <= 44 &&
        nextPoint.y >= 0 &&
        nextPoint.y <= 29
      ) {
        snack.move();
      } else {
        message.error("笨蛋，撞死了");
        setTimeout(() => {
          snack.reset();
        }, 1000);
        this.setState({
          stop: false,
        });
        clearInterval(this.state.timer);
      }
    }, this.state.speed);
    this.setState({
      timer,
    });
  };
  changeLevel = (level) => {

      this.setState({level,speed:level*100/2})
  }
  render() {
    let snackPoint = [snack.tail, ...snack.body, snack.header];
    console.log(snackPoint.length);
    console.log(snack.foodPoint, "==========");

    let snackLength = snackPoint.length;
    return (
      <div className={s["container"]}>
        <div className={s["map"]}>
          {snackPoint.map((item, index) =>
            renderPoint(item, index, snackLength)
          )}
          {renderFood(snack.foodPoint)}
          <Button
            type="primary"
            className={s["startGame"]}
            onClick={this.startGame}
          >
            开始游戏
          </Button>
          <Button
            type="primary"
            className={s["stopGame"]}
            onClick={() => {
              this.setState({
                stop: true,
              });
            }}
          >
            暂停游戏
          </Button>
          <div className={s['gameLevel']}>
              {[1,2,3,4,5,6,7,8,9].map((item,index)=> <Button key={index} type={this.state.level == item ? 'primary' :'default'} onClick={this.changeLevel.bind(this,item)}>{item}级</Button>)}
          </div>
        </div>
      </div>
    );
  }
}

const renderFood = (point: any) => (
  <span
    style={{
      display: "inline-block",
      width: "20px",
      height: "20px",
      position: "absolute",
      left: `${point.x * 20}px `,
      top: `${point.y * 20}px`,
      background: "black",
      borderRadius: "50%",
    }}
  ></span>
);

const renderPoint = (point: any, index: number, snackLength: number) => {
  if (index == 0) {
    return (
      <span
        key={index}
        style={{
          display: "inline-block",
          width: "20px",
          height: "20px",
          position: "absolute",
          left: `${point.x * 20}px `,
          top: `${point.y * 20}px`,
          background: "blue",
        }}
      ></span>
    );
  }
  if (index == snackLength - 1) {
    return (
      <span
        key={index}
        style={{
          display: "inline-block",
          width: "20px",
          height: "20px",
          position: "absolute",
          left: `${point.x * 20}px `,
          top: `${point.y * 20}px`,
          background: "yellow",
        }}
      ></span>
    );
  }
  return (
    <span
      key={index}
      style={{
        display: "inline-block",
        width: "20px",
        height: "20px",
        position: "absolute",
        left: `${point.x * 20}px `,
        top: `${point.y * 20}px`,
        background: "red",
      }}
    ></span>
  );
};
