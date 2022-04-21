import WnButton from "./tag.vue";

WnButton.install = function (Vue: any) {
  Vue.component(WnButton.name, WnButton);
};
export default WnButton;
