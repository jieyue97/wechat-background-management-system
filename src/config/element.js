// element 组件默认值
import Element from "element-ui";
import Vue from "vue"
// input
Element.Input.props.clearable.default=true;

console.log(Element)

Vue.use(Element, {size: "medium"})