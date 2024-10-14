import { defineCustomElement } from "vue";
import VueSampleButton from "./components/SampleButton/SampleButton.ce.vue";

const SampleButton = defineCustomElement(VueSampleButton);

export { SampleButton };

export function register() {
  customElements.define("sample-button", SampleButton);
}
