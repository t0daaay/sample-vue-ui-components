import { defineCustomElement } from "vue";
import SampleButtonCE from "./components/SampleButton/SampleButton.ce.vue";

const SampleButton = defineCustomElement(SampleButtonCE);

export { SampleButton };

export function register() {
  customElements.define("sample-button", SampleButton);
}
