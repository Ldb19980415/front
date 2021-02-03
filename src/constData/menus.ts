const menus = [
  {
    key: "home",
    title: "主页",
    icon: "",
    children: [],
  },
  {
    key: "useAntd",
    title: "antd使用",
    icon: "",
    children: [
      {
        key: "/useAntd/useButton",
        title: "Button",
        icon: "",
      },
      {
        key:'/useAntd/useIcon',
        title: "Icon",
        icon : ''
      },
      {
        key:'/useAntd/useTypography',
        title:"Typography",
        icon:''
      },
      {
        key:'/useAntd/useDivider',
        title:"Divider",
        icon:''
      },
      {
        key:'/useAntd/useGrid',
        title:'Grid',
        icon:''
      }
    ],
  },
  {
    key:'game',
    title:'小游戏',
    icon:'',
    children:[
      {
        key:'/game/snack',
        title:'贪吃蛇',
        icon:'',
      }
    ]
  }
];
export default menus;
