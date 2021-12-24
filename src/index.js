import React from "react";
import reactDom from "react-dom";
import { App } from './App';

//Con React.createElement

/* React.createElement('div', {})//--> Para crear el div sin utilizar jsx y le pasamos un objeto con las propiedades */

//Con reactDom añadiendo div directamente -> ReactDom.render('aqui va el contenido a renderizar' + document.getElementById('root') para embeberlo en el div principal del index.html en public)

/* reactDom.render(<div>Hello World</div>, document.getElementById('root')) */

//Con reactDom añadiendo el componente app (contiene toda nuestra aplicación)

reactDom.render(<React.StrictMode><App/></React.StrictMode>, document.getElementById('root'))