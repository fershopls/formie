# Installation
Install with npm
```shell
npm install @ferchoposting/formie
```

Import library and input
```js
import { Formie, inputs } from "@ferchoposting/formie";
```

Add components to tailwind purge components
### tailwind.config.js
```js
{
  ...
  purge: [
    ...,
    './node_modules/@ferchoposting/formie/**/*.vue',
  ],
}
```

# How to use it?


### ProductController.php
```php
class ProductController extends Controller
{
    public function create()
    {
        return inertia('Backend/Products/CreateEdit');
    }
    
    public function edit($id)
    {
        $model = Product::findOrFail($id);
        return inertia('Backend/Products/CreateEdit', compact('model'));
    }
}
```


### CreateEdit.vue
```html
<template>
<formie
    :form="form"
    :model="model"
    :errors="$page.props.errors"
    :debug="true"
/>
</template>

<script>
import { Formie } from "@ferchoposting/formie";

import form from './form.js';

export default {
  props: ['model'],

  components: {
    Formie,
  },
  
  setup (props) {
    return { form(props) };
  }
}
</script>
```


### form.js
```js
import { Inertia } from '@inertiajs/inertia';

import { inputs } from "@ferchoposting/formie";

import ImageApiManager from "./ImageApiManager";


const onDelete = ({ id }) => {
    if (id && confirm("Estas seguro?")) {
        const url = route('products.destroy', id);
        Inertia.delete(url);
    }
};

const onSubmit = ({ id, values }) => {
    const options = {
        preserveScroll: true,
        onSuccess: () => values.images_upload = null,
    };

    if (id) {
        const url = route('products.update', id);
        const data = {_method: 'PUT', ...values};
        Inertia.post(url, data, options);
    } else {
        const url = route('products.store');
        Inertia.post(url, values, options);
    }
}


export default (props) => [
  {
    name: "name",
    label: "Nombre del Producto",
    type: "text"
  },
  {
    name: "price",
    label: "Precio",
    type: "number"
  },
  {
    name: "description",
    label: "Descripción",
    type: inputs.Textarea
  },
  {
    name: "images_upload",
    label: "Imágenes",
    type: inputs.Upload,
    multiple: true,
  },
  {
    type: ImageApiManager,
    route: "products.images.destroy",
  },
  {
    name: "category_id",
    label: "Categoría",
    type: inputs.Select,
    attrs: {
      class: "flex-col"
    },
    options: props.categories,
  },
  {
    type: inputs.Buttons,
    buttons: [
      // Delete async button
      function ({ id }) {
          if (id) {
            return {
              label: "Eliminar",
              class: "bg-red-700 text-white",
              clicked: onDelete,
            };
          }
      },

      // Save button
      {
        label: "Guardar",
        type: "submit",
        clicked: onSubmit,
      }
    ]
  }
];

```
