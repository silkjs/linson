# template

Vue 中可以通过 slot 和 props 专递自定义 template，其中 slot 分为模板模式和函数模式，模版模式支持字符串、标签、函数类型的 template，函数模式支持只支持函数类型的 template（由于渲染性能，不推荐使用其他类型的 template）。props 传递 template 主要应用在函数模式上，这种组件专递模式与传统的 React 模式更像。
