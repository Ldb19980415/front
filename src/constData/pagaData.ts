import { Children } from "react"

const pageDatas = {
    layout:[
        {
            title:'Layout布局',
            children:[
                '协助进行页面级整体布局。'
            ]
        },
        {
            title:'实现',
            children:[
                "主要用到了flex自动撑开来实现的。",
                "比如左侧是菜单，右边是内容的，通过给共同的父元素设置dispaly:flex，然后左边元素设置flex:0 0 200px，那么左边元素将占200px，右边元素设置width:100%，然后右边元素将占据剩余的宽度。",
                "就不用考虑用浮动了，浮动还需要考虑清浮动的操作。",
                "常见的还有顶部、左边菜单、右边内容。这个就是顶部加个div，左边菜单和右边内容按照上述的设置。",
                "还有就是要求顶部固定，左边菜单也固定。我自己的实现是：给顶部设置posizition:fixed,左边也设置position:fixed，然后内容区域的话，通过计算得出其margin-top和margin-left的长度(使用calc(100%-npx))"
            ]
        },
        {
            title:'antd实现的layout组件说明',
            children:[
                "import {Layout} from antd",
                "const {Header, Sider, Content, Footer} = Layout",
                "Layout：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。",
                "Header：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。",
                "Sider：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。",
                "Content：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。",
                "Footer：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。",
            ]
        },
        {
            title:'属性：Layout和Header和Footer和Content一样',
            children:[
                "className:string  --> 容器classname",
                "hasSider:boolean -- >表示子元素里有Sider，一般不用指定。可用于服务端渲染时避免样式闪烁。",
                "sytle:css  --> 指定样式"
            ]
        },
        {
            title:'Sider',
            children:[
                "breakpoint:xs | sm | md | lg | xl | xxl  --> 触发响应式布局的断点。（这个暂时不太理解）",
                "className:string  --> 容器className",
                "collapsed:boolean  --> 收起状态",
                "collapsedWidth:number -->默认为80，收缩宽度，设置为0会出现特殊的trigger",
                "collapsible:boolean  -->默认为false。是否可收起。",
                "defaultCollapsed:boolean  --> 默认为false，默认是否收起",
                "reverseArrow:boolean  --> 翻折折叠提示箭头的方向，当Sider在右边时可以使用",
                "style:css  --> 指定样式",
                "theme:light|dark --> 主题样式",
                "trigger:ReactNode  -->  自定义 trigger，设置为 null 时隐藏 trigger",
                "width:number|string  --> 默认为200。宽度",
                "zeroWidthTriggerStyle:object  --> 指定当 collapsedWidth 为 0 时出现的特殊 trigger 的样式",
                "onBreakpoint:(breaken)=>{}  --> 触发响应式布局断点时的回调",
                "onCollapse:(collapsed, type) => {}  --> 展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发"
            ]
        }
    ],
    space:[
        {
            title:'Space间距',
            children:[
                "设置组件之间的间距。",
                "通常情况下我们通过样式去设置，不过需要注意整体的间距应该是一致的。"
            ]
        },
        {
            title:'属性介绍：',
            children:[
                'align:start|end|center|baseline  --> 对齐方式',
                'direction:vertical|horizontal  --> 间距方向',
                'size:small|middle |large | number  --> 间距大小',
                'split:ReactNode  --> 设置拆分',
                'wrap:boolean  --> 是否自动换行，仅在horizontal时有效'
            ]
        }
    ],
    affix:[
        {
            title:'Affix固钉',
            children:[
                '将页面元素钉在可视范围。',
                "使用场景：当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。",
                "页面可视范围过小时，慎用此功能以免遮挡页面内容。",
            ]
        },
        {
            title:'属性介绍：',
            children:[
                'offsetBottom:number  --> 距离窗口底部达到指定便宜量后触发',
                'offsetTop:number --> 距离窗口顶部达到指定偏移量后触发',
                'target:() => HTMLElement  --> 默认为window，设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数',
                'onChange:function(affixed)  --> 当固定的块由固定状态变成正常状态或者由正常状态变成固定状态的时候回触发的一个回调函数'
            ]
        }
    ],
    breadcrumd:[
        {
            title:'Breadcrumb 面包屑',
            children:[
                '显示当前页面在系统层级结构中的位置，并能向上返回。',
                '注意Breadcrumb.Item有href属性的话，里面的内容会有hover效果，否则，必须得里面的元素自带hover效果，否则就没得hover效果了。'
            ]
        },
        {
            title:'Breadcrumb 的API',
            children:[
                'itemRender:(route, params, routes, paths) => ReactNode  -->  自定义链接函数，和 react-router 配置使用',
                'params:object  --> 路由的参数',
                'routers:routers[]  --> router的路由栈信息',
                'separator:ReactNode  -->分隔符自定义。默认为 / '
            ]
        },
        {
            title:'Breadcrumb.Item 的API使用',
            children:[
                'className:string',
                'dropdownProps:Dropdown(antd的下拉菜单组件)  -->  弹出下拉菜单的自定义配置',
                'href:string  --> 链接的目的地',
                'overlay:Menu | () => Menu  --> 下拉菜单的内容',
                'onClick:(e:MouseEvent) => void  --> 单击事件'
            ]
        }
    ],
    dropdown:[
        {
            title:'Dropdown下拉菜单',
            children:[
                '见名知意，向下弹出的一个菜单列表',
            ]
        },
        {
            title:'何时使用',
            children:[
                '当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。'
            ]
        },
        {
            title:'API',
            children:[
                'arrow:boolean  --> 下拉框箭头是否显示',
                'disable:boolean  --> 菜单是否禁用',
                'getPopupContainer:(triggerNode: HTMLElement) => HTMLElement  --> 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。',
                'overlay:Menu | ()=>Menu --> 菜单',
                'overlayClassName:string  --> 下拉根元素的类名称',
                'overlayStyle:CSS  --> 下拉根元素的样式',
                'placement:string  --> 菜单弹出位置：bottomLeft bottomCenter bottomRight topLeft topCenter topRight',
                'trigger:Array<click|hover|contextMenu>  -->  触发下拉的行为，移动端不支持hover，默认值为[hover]',
                'visible:boolean  --> 菜单是否显示',
                'onVisibleChange:(visible: boolean) => void  -->  菜单显示状态改变时调用，参数为 visible',
                'overlay 菜单使用 Menu，还包括菜单项 Menu.Item，分割线 Menu.Divider。',
                '注意： Menu.Item 必须设置唯一的 key 属性。',
                'Dropdown 下的 Menu 默认不可选中。如果需要菜单可选中，可以指定 <Menu selectable>。',
            ]
        },
        {
            title:'Dropdown.Button的api使用',
            children:[
                'buttonsRender:	(buttons: ReactNode[]) => ReactNode[]  -->  自定义左右两个按钮',
                'disabled:boolean  --> 菜单是否禁用',
                'icon:ReactNode  --> 右侧的icon',
                'overlay:Menu --> 菜单',
                'placement:同上',
                'size:string  -->  按钮大小，和Button一致',
                'trigger:同上',
                'type:string  --> 按钮类型，和BUtton一致',
                'visible:同上',
                'onClick:(event) => void  --> 点击左侧按钮的回调，和Button一致',
                'onVisibleChange:同上'
            ]
        }
    ],
    menu : [
        {
            title:'Menu 导航菜单',
            children:[
                '为页面和功能提供导航的菜单列表。',
                '使用时机：',
                '导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。'
            ],
        },
        {
            title:'Menu的api',
            children:[
                'defaultOpenKeys:string[]  -->  初始展开的SubMenu菜单项的key数组',
                'defaultSelectedKeys:string[]  -->  初始选中的菜单项key数组',
                'expandIcon:ReactNode | (props: SubMenuProps & { isSubMenu: boolean }) => ReactNode -->自定义展开图标',
                'forceSubMenuRender:boolean  --> 在子菜单展示之前就渲染进DOM',
                'inlineCollapsed',
                'mode'

            ]
        }
    ]

}


export default pageDatas