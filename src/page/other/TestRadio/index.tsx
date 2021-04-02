import React from "react";
import { Input, Button } from "antd";
const text = [
    '12345678',
    '空间萨拉卡就离开',
    '空间是垃圾离开家离开买电脑， 喝咖啡的哈了解离开家离开'
]
// const 
export default class TetsRedio extends React.Component {
  ttsDiv: any = undefined;
  ttsAudio: any = undefined;
  state = {
    text: "",
  };
  componentDidMount() {
    this.ttsDiv = document.getElementById("bdtts_div_id");
    
  }
  changeInput = (e) => {
    console.log(e.target.value);
    this.setState({
      text: e.target.value,
    });
  };
  play = (text) => {
    var au1 = '<audio id="tts_autio_id" autoplay="autoplay">';
    var sss = `<source id="tts_source_id" src="http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=9&text=${text}" type="audio/mpeg">`;
    var eee = '<embed id="tts_embed_id" height="0" width="0" src="">';
    var au2 = "</audio>";
    let result = au1 + sss + eee + au2;
    return result
  }
  playAudio = (flag,length) => {
    this.ttsDiv["innerHTML"] = this.play(text[flag])
    this.ttsAudio = document.getElementById("tts_autio_id");
    let playPromise = this.ttsAudio.play();
    if (playPromise) {
        playPromise
          .then(() => {
            // 音频加载成功
            // 音频的播放需要耗时
            setTimeout(() => {
              // 后续操作
              console.log("done.");
                if(flag+1 === length){
                    return
                }
                this.playAudio(flag+1,length)
            }, this.ttsAudio.duration * 1000); // audio.duration 为音频的时长单位为秒
          })
          .catch((e) => {
            // 音频加载失败
            // 忽视加载不出来的章节
            if(flag+1 === length){
                return
            }
            this.playAudio(flag+1,length)
          });
      }
  }
  readTxt = () => {
    this.playAudio(0,3)
  };
  render() {
    return (
      <div>
        <div>
          <Input
            placeholder="请输入想要被阅读的内容"
            onChange={this.changeInput}
          />
          <input type="text" id="ttsText" />
          <Button id="tts_btn" onClick={this.readTxt}>
            播放
          </Button>
        </div>
        <div id="bdtts_div_id"></div>
      </div>
    );
  }
}
