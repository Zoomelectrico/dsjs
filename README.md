# DS-JS
This is an implementation of the most common data structure in JavaScript (ES 2015). The interest thing is the DS are immutable elements so whenever you apply a operation to an DS object you will get a new instance of the element.
Es una breve implementación de las estructuras de datos más comunes en JavaScript (ES 2015).
Lo interesante de esta libreria es que es una implementación inmutable es decir todos las operaciones realizadas devuelven una nueva instancia de la estructura de datos utilizada
To install you must execute the following command
Para instalarla solo deberas ejecutar el siguiente comando:
```shell
  $ npm install --save ds-js
```
Once installed the only thing you need to do is require in your file and start playing
Una vez instala la Librería solo necesitas hacer lo siguiente para tenerla disponible en tu programas:
```javascript
const DS = require('ds-js');

// For example you want to use an ArrayList
// Por ejemplo quieres usar una Lista
const LinkedList = DS.ArrayLsit;

// We create an instance of the list and ready
// Creamos una instancia de la lista y listo podemos empezar a aplicar métodos
let l = new LinkedList();

let list = l.addFirst(1);
```
* * *
### Project Status- Estructuras de Datos Implementadas

* [x] Listas
* [x] Array List
* [ ] Pila
* [ ] Cola
* [ ] Árbol Binario de Busqueda
* [ ] Hash Map
* [ ] Lista Circular

### Docs - Documentación
Para revisar la documentación deberás ir al siguiente enlace [haz click aquí](https://docs-ds-ts.firebaseapp.com/)

#### Contributors - Colaboradores

* José Roberto Quevedo [\(@zoomelectrico\)](https://github.com/zoomelectrico)

### License - Licensia
MIT