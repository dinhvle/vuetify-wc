import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import VuetifyComponent from './components/VuetifyComponent.vue';

const WrappedElement = wrap(Vue, VuetifyComponent);

window.customElements.define('vuetify-component', WrappedElement);
