- 跟着教程做的XD

- @keyframes规则

  - 创建动画

  - 语法

    ```css
    @keyframes animationname {keyframes-selector {css-styles;}}

    /*示例*/
    @keyframes loading{		/*也可以用from to 等价于0% 100%建议用百分号*/
        0%{
            transform: scaleY(1);
        }
        50%{
            transform: scaleY(0.5);
        }
        100%{
            transform: scaleY(1);
        }
    }
    ```

- animation属性

    ```css
    {
    	animation: name duration timing-function delay iteration-count direction;
    }
    /*	name:规定需要绑定到选择器的 keyframe 名称
    **	duration:规定完成动画所花费的时间，以秒或毫秒计。
    **	timing-function:规定动画的速度曲线。
    **	delay:规定在动画开始之前的延迟。
    **  iteration-count:规定动画应该播放的次数。
    **  direction:规定是否应该轮流反向播放动画。
    */
    {
        animation: loading 1s ease-in .3s infinite;
    }
    ```

- scaleY

    在Y轴方向上缩放元素，取值0-1