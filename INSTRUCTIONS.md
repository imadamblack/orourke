# Notoriovs Config
Instrucciones básicas para la edición de la plantilla de landing page. 

## El archivo `/info.js`
Comenzamos modificando este archivo, en el que está toda la información básica de la página.
```javascript
export const info = {
  legalName: "Nombre Legal de la marca",
  companyName: "Marca",
  description: "Descripción",
  email: {
    sender: "contacto@mail.com", // Quien envía los prospectos
    recipients: ["contacto@mail.com"], // Quien recibe los nuevos prospectos
    subject: "Nuevo prospecto Marca",
  },
  phoneNumber: "+523333333333", // Teléfono de la empresa
  whatsapp: {
    value: "+523333333333", // WhatsApp de la empresa (puede ser el mismo que el teléfono)
    message: "Buen día, quisiera más información sobre ...",
  },
  social: {
    facebook: "", // ID de Facebook
    instagram: "", // Usuario de Instagram
  },
  address: {
    address: "",
    col: "",
    cp: "",
    city: "",
    state: "",
  },
  optInWebhook: '', // URL del webhook de make.com que recibe los leads
  surveyWebhook: '', // URL del webhook de make.com que actualiza los leads
  surveyRedirect: '', // URL de calendly.com para agendar una cita
  privacyNotice: "/aviso-privacidad",
  termsConditions: "/terms-and-conditions",
};
```

## Páginas
Algunas anotaciones pertinentes sobre las páginas que se utilizan en los proyectos.
Todas las páginas están dentro de `/src/pages`.

### Index

`/src/pages/index.js` Aquí va toda la info de la landing page. En estos proyectos casi nunca usamos más de 1 página informativa. Además del HTML de la página, cuenta con 4 partes importantes:
- La función `scrollDepth`: Nos ayuda a rastrear qué tanto bajó el usuario en su navegación. **Importante no quitar esta función**.
- `lastClick` y `setLastClick`: Nos ayuda a saber en qué sección el usuario dio click para registrarse.
- `cta`: un objeto simple con los valores que renderizan los botones de la landing.
- `faqs`: Un array que pasa las preguntas frecuentes al componente `FAQs` que se menciona más adelante.

### Survey

`/src/pages/survey.js` Esta página muestra un cuestionario para el perfilamiento del lead. El usuario es redirigido hacia acá una vez que completa su Opt In.
Este survey está programado de forma dinámica para sólamente agregar las preguntas del mismo en un array llamado `formSteps` dentro del mismo archivo.

### Otras páginas

- `_app.js`: Cuenta con una función que establece la cookie `_fbc`.
- `_document`: Agrega los scripts importantes del sitio como:
    - **FB Pixel:** Envía eventos a Facebook por medio del navegador.
    - **Typetura:** Dinamiza la responsividad de la tipografía para que sea fluida cuando el viewport cambia de tamaño.
    - **Material Icons:** No es un script pero es una hoja de estilos que ayuda a utilizar íconos de Google Material Design.
- `thankyou.js`: Es la página a donde se redirecciona el usuario una vez que completa su survey.
- `aviso-privacidad.js`: Se explica solo. La página está configurada para que se complete automáticamente la información del cliente con base en el archivo `/info.js`.

### API
El único archivo importante de la API es `fb-event.js`. Este archivo envía los eventos por medio de la FB Conversions API.

Las demás rutas dentro de la carpeta `/api` fueron sustituidas por escenarios de make.com.

## Componentes
Los más utilizados y que necesitan ser editados son:

### Opt In Form
Dentro de `/src/components/form` encuentras el archivo `opt-in-form.js`, este cuenta con el formulario básico que se incrusta en la landing page `index.js`.
Cuenta con:
- **onSubmit:** Es la función que envía los datos al webhook `optInWebhook` que pusimos en `info.js`.
- **return:** Aquí normalmente solo agregamos 3 o 4 preguntas como "nombre", "teléfono", "email".

### Layout
Dentro de `/src/components/layout` hay 3 archivos: footer, header y layout. Solo modificamos el `header.js` para cambiar logo o ajustar algún detalle.

### Blockbuster
Este componente `/src/components/blockbuster.js` es utilizado como divisor de secciones, es algo así como un hero pero más leve.

### FAQs
En el archivo `/src/components/faqs.js` hay un componente dinámico que se incrusta en la landing page principal para mostrar las preguntas frecuentes.

Solo es necesario modificar el array `faqs` de cada landing page para actualizar el componente.

### Tracking Analytics
Este componente se incrusta en el `_document.js` para poder mandar los eventos necesarios a Facebook por medio del navegador.

## Servicios
Dentro de la carpeta `/src/services` se encuentran varios archivos, de los cuales el único funcional es `fbEvents.js`. Este es llamado cuando se envían los formularios OptIn y Survey.

## Estilos
Dentro de la carpeta `/src/styles` encuentras 3 archivos:
- `form.scss`: En este se editan todas las clases relacionadas a los elementos de formas como: input, select, label, etc...
- `globals.scss`: Ya que en este proyecto se utiliza tailwind-css, este archivo modifica muy pocas cosas básicas como botones y estilos de lista.
- `type.scss`: Este archivo está programado para ligarse con el script `/typetura.js` y solo debe modificarse la primer línea.

### Paleta de color
Para editar la paleta de color hay que modificar el archivo `/tailwind.config.js`. Y sobreescribir la siguiente propiedad:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          1: "#e9be44",
          2: "#5f6971",
          3: "#9da2a7",
          4: "#b09a86",
          5: "#37AC1A",
          6: "#e5cd8a",
        },
      },
    }
  }
};
```

## Utilitarios
Aquí se encuentran funciones que ayudan a formatear, validar o cosillas extra:
- `formatters.js`: Solo contiene una fórmula para convertir números a MXN.
- `formValidators.js`: Cuenta con dos fórmulas:
  - **restrictNumber:** Restringe el uso de caracteres que no sean númericos en los formularios.
  - **emailRegExp:** Valida que los emails ingresados en formularios sean correctos.