﻿# vue3-bootstrap-5-modal-component
A simple modal component for vue 3 using bootstrap 5

## Live demo
https://florianbgt.github.io/vue3-bootstrap5-modal/

## Dependencies:
This component require bootstrap 5 and popper to be installed
```
npm install bootstrap@next
npm install @popperjs/core
```
You can then include them into your ```main.js``` file:
```
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
```

## Component setup:
You can import it globaly in your ```main.js``` file:
```
import Modal form 'path to file/Modal.vue'
...
app.component('Modal', Modal);
```
Or you can import it localy in each component when you need it:
```
import Modal from 'path to file/Modal.vue'
```
Once imported, you can use the component as follow:
```
<Modal v-model="modal" header="Modal">
  <p>This modal have to be closed from the parent</p>
  <p>This modal will be close from the parent in 5 seconds</p>
</Modal>
```
## Component usage:
The Modal component take 5 props:
- modelValue (Boolean, required): for v-model the component
- closeable (Boolean): allow to close the modal using close button or backdrop click
- header (String): Header content of the modal
- container (String): per default the bootstrap class "container" is pass to the component. If this prop is set to "sm", class "container-sm" will be added
- max-width (String): Max width of the modal. Can be %, px...