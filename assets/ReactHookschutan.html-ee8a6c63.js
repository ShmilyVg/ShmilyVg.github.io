import{_ as e,p as n,q as i,Z as s}from"./framework-eb6cfbb5.js";const t={},d=s(`<h1 id="usestate" tabindex="-1"><a class="header-anchor" href="#usestate" aria-hidden="true">#</a> useState</h1><p><code>useState</code>是 react 自带的一个 hook 函数，它的作用是用来声明状态变量。</p><p><code>useState</code>这个函数接收的参数是状态的初始值(Initial state)，它返回一个数组，这个数组的第 0 位是当前的状态值，第 1 位是可以改变状态值的方法函数。使用数字结构声明变量更便捷。</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>const [ count, setCount ] = useState(0)
setCount(count+1)
// setCount函数，这个函数接收的参数是修改过的新状态值。
const [ size, setSize ] = useState({
    width:200,
    height:200
})
setSize({
    width:100,
    height:100
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>React 是根据 useState 出现的顺序来确定的</strong>。在使用<code>useState</code>的时候只赋了初始值，并没有绑定任何的<code>key</code>。</p><p>useState<strong>不能</strong>在<code>if...else...</code>这样的条件语句中进行调用，必须要按照<strong>相同的顺序</strong>进行渲染。</p><h1 id="useeffect" tabindex="-1"><a class="header-anchor" href="#useeffect" aria-hidden="true">#</a> useEffect</h1><p>可用 useEffect 代替生命周期函数，接受两个参数第一个为<strong>副作用函数</strong>，第二个参数为<strong>数组</strong>，数组中可以写入很多状态对应的变量，意思是<strong>当状态值发生变化</strong>时，我们才进行解绑。但是当传空数组<code>[]</code>时，就是当组件将<strong>被销毁时才进行解绑</strong>，也就实现了<code>componentWillUnmount</code>的生命周期函数。</p><p>在切换路由变更组件时可触发 useEfffect。</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React, { useState , useEffect } from &#39;react&#39;;
function Example(){
    const [ count , setCount ] = useState(0);
    //---关键代码---------start-------
    useEffect(()=&gt;{
        console.log(\`useEffect=&gt;You clicked \${count} times\`)
        //	返回一个函数解绑
        return ()=&gt;{
            console.log(&#39;解绑副作用函数&#39;)
        }
    },[])
    //---关键代码---------end-------

    return (
        &lt;div&gt;
            &lt;p&gt;You clicked {count} times&lt;/p&gt;
            &lt;button onClick={()=&gt;{setCount(count+1)}}&gt;click me&lt;/button&gt;
        &lt;/div&gt;
    )
}
export default Example;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>useEffect 两个注意点</em></p><ol><li>React 首次渲染和之后的每次渲染都会调用一遍<code>useEffect</code>函数。</li><li>useEffect 中定义的函数的执行不会阻碍浏览器更新视图，也就是说这些函数时异步执行的。</li></ol><h1 id="usecontext" tabindex="-1"><a class="header-anchor" href="#usecontext" aria-hidden="true">#</a> useContext</h1><p><code>Context</code>的作用就是对它所包含的组件树提供全局共享数据的一种技术。</p><p>基本使用思路：</p><ol><li>createContext 函数创建 context</li><li>使用 context 组件包裹需要共享数据的子组件，并在组件的 value 属性上赋值</li><li>调用 useContext，并传入 context</li></ol><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React, { useState , createContext } from &#39;react&#39;;
//===关键代码
const CountContext = createContext()

function Example(){
    const [ count , setCount ] = useState(0);
    return (
        &lt;div&gt;
            &lt;p&gt;You clicked {count} times&lt;/p&gt;
            &lt;button onClick={()=&gt;{setCount(count+1)}}&gt;click me&lt;/button&gt;
            {/*======关键代码 */}
            &lt;CountContext.Provider value={count}&gt;
                &lt;Counter /&gt;
            &lt;/CountContext.Provider&gt;
        &lt;/div&gt;
    )
}

function Counter(){
    const count = useContext(CountContext)  //一句话就可以得到count
    return (&lt;h2&gt;{count}&lt;/h2&gt;)
}

export default Example;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="usereducer" tabindex="-1"><a class="header-anchor" href="#usereducer" aria-hidden="true">#</a> useReducer</h1><p><strong>reducer 到底是什么？</strong></p><p><code>reducer</code>其实就是一个函数，这个函数接收两个参数，一个是状态，一个用来控制业务逻辑的判断参数。举一个最简单的例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">countReducer</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;add&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">case</span> <span class="token string">&#39;sub&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>useReducer 接受两个参数第一个参数是 reducer 函数，第二个参数是定义 state 的默认值（useReducer 返回的结构类似 useState），用 useReducer 实现计数器的加减双向操作</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React, { useReducer } from &#39;react&#39;;

function ReducerDemo(){
    const [ count , dispatch ] = useReducer((state,action)=&gt;{
        switch(action){
            case &#39;add&#39;:
                return state+1
            case &#39;sub&#39;:
                return state-1
            default:
                return state
        }
    },0)
    return (
       &lt;div&gt;
           &lt;h2&gt;现在的分数是{count}&lt;/h2&gt;
           &lt;button onClick={()=&gt;dispatch(&#39;add&#39;)}&gt;Increment&lt;/button&gt;
           &lt;button onClick={()=&gt;dispatch(&#39;sub&#39;)}&gt;Decrement&lt;/button&gt;
       &lt;/div&gt;
    )

}

export default ReducerDemo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-usecontext-和-usereducer-代替-redux-功能" tabindex="-1"><a class="header-anchor" href="#使用-usecontext-和-usereducer-代替-redux-功能" aria-hidden="true">#</a> 使用 useContext 和 useReducer 代替 redux 功能</h2><h3 id="编辑状态共享组件" tabindex="-1"><a class="header-anchor" href="#编辑状态共享组件" aria-hidden="true">#</a> 编辑状态共享组件</h3><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React, { createContext,useReducer } from &#39;react&#39;;

export const ColorContext = createContext({})

export const UPDATE_COLOR = &quot;UPDATE_COLOR&quot;

const reducer= (state,action)=&gt;{
    switch(action.type){
        case UPDATE_COLOR:
            return action.color
        default:
            return state
    }
}

export const Color = props=&gt;{
    const [color,dispatch]=useReducer(reducer,&#39;blue&#39;)
    return (
        &lt;ColorContext.Provider value={{color,dispatch}}&gt;
            {props.children}
        &lt;/ColorContext.Provider&gt;
    )
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现状态共享" tabindex="-1"><a class="header-anchor" href="#实现状态共享" aria-hidden="true">#</a> 实现状态共享</h3><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React, { useReducer } from &#39;react&#39;;
import ShowArea from &#39;./ShowArea&#39;;
import Buttons from &#39;./Buttons&#39;;
import { Color } from &#39;./color&#39;;   //引入Color组件

function Example6(){
    return (
        &lt;div&gt;
            &lt;Color&gt;
                &lt;ShowArea /&gt;
                &lt;Buttons /&gt;
            &lt;/Color&gt;
        &lt;/div&gt;
    )
}

export default Example6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="状态展示组件" tabindex="-1"><a class="header-anchor" href="#状态展示组件" aria-hidden="true">#</a> 状态展示组件</h3><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React , { useContext } from &#39;react&#39;;
import { ColorContext } from &#39;./color&#39;;

function ShowArea(){
    const {color} = useContext(ColorContext)
    return (&lt;div style={{color:color}}&gt;字体颜色为{color}&lt;/div&gt;)

}

export default ShowArea
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="行为触发组件" tabindex="-1"><a class="header-anchor" href="#行为触发组件" aria-hidden="true">#</a> 行为触发组件</h3><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React ,{useContext} from &#39;react&#39;;
import {ColorContext,UPDATE_COLOR} from &#39;./color&#39;

function Buttons(){
    const { dispatch } = useContext(ColorContext)
    return (
        &lt;div&gt;
            &lt;button onClick={()=&gt;{dispatch({type:UPDATE_COLOR,color:&quot;red&quot;})}}&gt;红色&lt;/button&gt;
            &lt;button onClick={()=&gt;{dispatch({type:UPDATE_COLOR,color:&quot;yellow&quot;})}}&gt;黄色&lt;/button&gt;
        &lt;/div&gt;
    )
}

export default Buttons
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="usememo" tabindex="-1"><a class="header-anchor" href="#usememo" aria-hidden="true">#</a> useMemo</h1><p><code>useMemo</code>、<code>useCallback</code>主要用来解决使用 React hooks 产生的无用渲染的性能问题。</p><p>useMemo 可以<strong>缓存函数的计算结果</strong>，接收的结果是 return 值。接受两个参数，第一个参数为<strong>执行函数</strong>，第二个参数为<strong>一个数组</strong>，接受需要<strong>监听的目标状态</strong>当目标状态改变时函数执行。若目标状态不改变则会使用执行函数缓存的计算结果。</p><p>比较适合当前组件使用，减少无用渲染或者灵活运用实现类似监听的效果</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>function ChildComponent({name,children}){
    function changeXiaohong(name){
        console.log(&#39;她来了，她来了。小红向我们走来了&#39;)
        return name+&#39;,小红向我们走来了&#39;
    }

    const actionXiaohong = useMemo(()=&gt;changeXiaohong(name),[name])
    return (
        &lt;&gt;
            &lt;div&gt;{actionXiaohong}&lt;/div&gt;
            &lt;div&gt;{children}&lt;/div&gt;
        &lt;/&gt;
    )
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="usecallback" tabindex="-1"><a class="header-anchor" href="#usecallback" aria-hidden="true">#</a> useCallback</h1><p>useCallback 可以<strong>缓存函数</strong>，接收的结果是函数。其他与 useMemo 相同。</p><h1 id="usememo-和-usecallback-的区别" tabindex="-1"><a class="header-anchor" href="#usememo-和-usecallback-的区别" aria-hidden="true">#</a> useMemo 和 useCallback 的区别</h1><p><code>useMemo</code> 和 <code>useCallback</code> 接收的参数都是一样,第一个参数为回调 第二个参数为要依赖的数据</p><p>区别： 1.仅仅 <code>依赖数据</code> 发生变化, 才会重新计算结果，也就是起到缓存的作用。</p><p>区别： 1.<code>useMemo</code> 计算结果是 <code>return</code>回来的值，主要用于<strong>缓存计算结果的值</strong> 。应用场景如： 需要计算的状态 2.<code>useCallback</code> 计算结果是 <code>函数</code>, 主要用于<strong>缓存函数</strong>，应用场景如: 需要缓存的函数，因为函数式组件每次任何一个 state 的变化整个组件都会被重新刷新，一些函数是没有必要被重新刷新的，此时就应该缓存起来，提高性能和减少资源浪费。</p><p><em>注意： 不要滥用会造成性能浪费，react 中减少 render 就能提高性能，所以这个仅仅只针对缓存能减少重复渲染时使用和缓存计算结果</em>。</p><p><em>useEffect、useMemo、useCallback 都是自带闭包的。也就是说，每一次组件的渲染，其都会捕获当前组件函数上下文中的状态(state, props)，所以每一次这三种 hooks 的执行，反映的也都是当前的状态，无法使用它们来捕获上一次的状态。</em></p><h1 id="useref" tabindex="-1"><a class="header-anchor" href="#useref" aria-hidden="true">#</a> useRef</h1><p>useRef 获取 DOM 元素</p><ol><li>useRef 创建 ref 容器变量</li><li>在标签的 ref 属性上将容器变量赋值，变量即可使用</li></ol><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React, { useRef} from &#39;react&#39;;
function Example8(){
    const inputEl = useRef(null)
    const onButtonClick=()=&gt;{
        inputEl.current.value=&quot;Hello&quot;
        console.log(inputEl) //输出获取到的DOM节点
    }
    return (
        &lt;&gt;
            {/*保存input的ref到inputEl */}
            &lt;input ref={inputEl} type=&quot;text&quot;/&gt;
            &lt;button onClick = {onButtonClick}&gt;在input上展示文字&lt;/button&gt;
        &lt;/&gt;
    )
}
export default Example8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="自定义-hooks" tabindex="-1"><a class="header-anchor" href="#自定义-hooks" aria-hidden="true">#</a> 自定义 Hooks</h1><p>一些常用函数可以封装成一个自定义<code>Hooks</code>函数。要用 use 开头，这样才能区分出组件和自定义 Hooks 函数。</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>function useWinSize(){
    const [ size , setSize] = useState({
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
    })

    const onResize = useCallback(()=&gt;{
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    },[])
    useEffect(()=&gt;{
        window.addEventListener(&#39;resize&#39;,onResize)
        return ()=&gt;{
            window.removeEventListener(&#39;resize&#39;,onResize)
        }
    },[])

    return size;

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52),a=[d];function l(r,c){return n(),i("div",null,a)}const o=e(t,[["render",l],["__file","ReactHookschutan.html.vue"]]);export{o as default};
