---
layout: post
title: Fundamentos de bases de datos
date: 2019-10-20
category: DataBases
---


![](https://cdn.emiliort.com/blog/images/25092018-GestBd_7.png)  

En el mundo del desarrollo de software no solo tenemos la necesidad de ingresar, recibir y manipular información, también nos vemos en la necesidad de almacenar información; ya sea pre-procesada o almacenada íntegramente para su posterior uso.
En este post vamos a conocer los conceptos básicos de las bases de datos que todos debemos tener muy claros.
Existen dos grandes grupos de bases de datos: las relacionales y las no relacionales o NoSQL, y dentro de estas hay varios tipos, pero ahora nos centraremos en los generales de las bases de datos y más enfocados en las relacionales.  

## ¿Que es una base de datos?  

Según Wikipedia, es un conjunto de datos pertenecientes a un mismo contexto y almacenados sistemáticamente para su posterior uso. En otras palabras; es un almacén de datos organizado estructuralmente para su fácil uso posterior.  
 Actualmente, y debido al desarrollo tecnológico de campos como la informática y la electrónica, la mayoría de las bases de datos están en formato digital.

## ¿Que es una tabla?
  
Son documentos que se encuentran dentro de una base de datos, los cuales están estructurados en filas y columnas. Donde cada fila corresponde a un registro y cada columna corresponde a un campo especifico del registro.
  
## ¿Que es un campo?
  
Se conoce como campo a cada espacio que almacena un dato en particular. Es la mínima unidad a la que se puede acceder dentro de un registro, donde un cada registro esta compuesto de múltiples campos.

## ¿Que es un registro?
  
Es la representación de un objeto o información única e implícita dentro de una tabla y el conjunto total de todos los registros del mismo contexto y estructura forman una tabla.
Un registro esta compuesto por varios campos con datos que todos juntos le dan sentido a una información.

**Ejemplo:**  
 ![](https://cdn.emiliort.com/blog/images/exemple-table0.gif)  
  
## ¿Que es SQL?

Son las siglas de Structured Query Language o Lenguaje de consulta estructurado, este es un lenguaje de programación creado para gestionar bases de datos relacionales. Su característica principal es el uso del álgebra y el calculo relacional para realizar consultas sencillas para recuperar información y realizar cambios en una base de datos.  
SQL fue creado por Edward Codd en 1970 y paso a ser un estándar del ANSI en 1986.  

## ¿Que es DDL?

Son las siglas de Data Definition Language o Lenguaje de Definición de Datos, es un lenguaje dentro de SQL que nos permite definir la estructura de la base de datos. Como crear, borrar y modificar; tablas, vistas y esquemas de la base de datos.  

Las sentencias o comandos que pertenecen al conjunto DDL son:  
- CREATE: crea objetos.
- DROP: elimina objetos.
- ALTER: modifica objetos.
  
## ¿Que es DML?  

Son las siglas de Data Manipulation Language o Lenguaje de Manipulación de datos, es un lenguaje dentro de SQL, que nos permite gestionar los datos dentro de los objetos ya creados en la base de datos.  

Las sentencias o comandos que pertenecen al conjunto DML son:  
- SELECT: realiza consultas.
- INSERT: agrega nuevos datos.
- DELETE: borra datos.
- UPDATE: actualizar datos existentes.
  
## Normalización

Es el proceso de aplicar las reglas entidad-relación del modelo relacional, cuyo objetivo es:  
- Minimizar la redundancia de los datos.
- Disminuir problemas de actualización de los datos.
- Proteger la integridad de los datos.
  
Estas reglas son conocidas como formas normales que van desde la 1ra a la 5ta, que se complementan de manera secuencial las cuales si es necesario crean tablas nuevas para ajustarse a la norma.  

### Primera Forma Normal
- Todos los atributos son simples e indivisible.
- No existe variación en el numero de columnas.
- Los campos no clave deben identificarse por la clave primaria.
- Debe existir una independencia del orden tanto de las filas como de las columnas sin importar que cambie el orden.  
  
### Segunda Forma Normal

- Debe estar ya en primera forma normal.
- Cada columna depende una clave.
- Todos los atributos que no son clave primaria deben depender únicamente de la clave primaria.  
  
### Tercera Forma Normal

- Debe estar ya en segunda forma normal.
- No existe ninguna dependencia funcional transitiva en los atributos que no son clave.  

#### Forma Normal Boyce-Codd

- Debe estar ya en tercera forma normal.
- Los únicos determinantes son claves candidatas.  
 
### Cuarta Forma Normal

- Debe estar ya en tercera forma normal o en forma normal boyce-codd.
- No posee dependencias multivaluadas no triviales.  

### Quinta Forma Normal

- Debe estar ya en cuarta forma normal.
- Cada relación de reunión (join) se encuentra definida por claves candidatas.  
  
## Reglas de Codd

Estas reglas fueron creadas por Edgar Codd, creador de SQL y se basan en las pautas que debe cumplir una base de datos para ser considerada como relacional. Si no cumple estos, se debe considerar NoSQL.  
  
### Regla 1: Regla de la información.
Toda información dentro de la base de datos representada debe ser en forma de tabla, los valores en columnas dentro de las filas.  

Todas la tabla debe cumplir con el modelo relacional y no se puede acceder por otras vías.  

### Regla 2:  Regla del acceso garantizado.

Todos los datos deben ser accesibles mediante la combinación del nombre de la tabla, el nombre de la columna y su clave primaria sin ambigüedad alguna.  

### Regla 3: Regla del tratamiento sistemático de valores nulos.

Toda base de datos así como su gestor debe poder manejar y aceptar datos nulos y/o información faltante.  

### Regla 4: Catálogo dinámico en línea basado en el modelo relacional.

El sistema debe soportar un catálogo en línea, el catálogo relacional, que da acceso a la estructura de la base de datos y que debe ser accesible a los usuarios autorizados.  

### Regla 5: Regla comprensiva del sub-lenguaje de los datos.

Se debe contar por lo menos con un lenguaje, con una sintaxis definida capaz de realizar todas funciones necesarias para administrar y gestionar la base de datos completa.  

### Regla 6: Regla de actualización de vistas.

Todas las vistas deben poder actualizarse mediante el mismo sistema de gestión.  

### Regla 7: Alto nivel de inserción, actualización y borrado.

Se debe contar con la capacidad de ejecutar operaciones DML "INSERT, UPDATE DELETE, SELECT", en toda la base de datos sin limitar las filas independiente del tipo de relación y restricción de las tablas.  

### Regla 8: Independencia física de los datos.

Los programas de aplicación y actividades del terminal permanecen inalterados a nivel lógico aunque realicen cambios en las representaciones de almacenamiento o métodos de acceso.  

### Regla 9: Independencia lógica de los datos.

Las aplicaciones y sus actividades de cualquier tipo no se ven alteradas a nivel lógico por cualquier cambio dentro de la base de datos.  

### Regla 10: Independencia de la integridad.

Las restricciones de integridad se deben especificar por separado de los programas de aplicación y almacenarse en la base de datos. Debe ser posible cambiar esas restricciones sin afectar innecesariamente a las aplicaciones existentes.  

### Regla 11: Independencia de la distribución.

La distribución de porciones de base de datos en distintas localizaciones debe ser invisible a los usuarios de la base de datos. Los usos existentes deben continuar funcionando con éxito:  

- Cuando una versión distribuida del sistema de gestión de base de dato se carga por primera vez
- Cuando los datos existentes se redistribuyen en el sistema.  

### Regla 12: La regla de la no subversión.

Si el sistema proporciona una interfaz de bajo nivel de registro, aparte de una interfaz relacional, esa interfaz de bajo nivel no debe permitir su utilización para subvertir el sistema. Por ejemplo para sortear las reglas de seguridad relacional o las restricciones de integridad. Esto es debido a que a algunos sistemas no relacionales previamente existentes se les añadió una interfaz relacional pero, al mantener la interfaz nativa, seguía existiendo la posibilidad de trabajar no relacional-mente.  

## Algunos Ejemplos de base de datos relacionales

![](https://cdn.emiliort.com/blog/images/sqlite370_banner.gif) SQLite es un sistema de gestión de bases de datos relacional compatible con ACID, contenida en una relativamente pequeña (~275 kiB)​ biblioteca escrita en C.  Esta en síntesis es un gestor de base de datos local que no cuenta con un servidor para su uso en red.  
 
![](https://cdn.emiliort.com/blog/images/mysqlimga.png) MySql es un sistema de gestión de bases de datos relacional desarrollado bajo licencia dual: Licencia pública general/Licencia comercial por Oracle Corporation y está considerada como la base de datos de código abierto más popular del mundo.  

![](https://cdn.emiliort.com/blog/images/postgresqlicond.png) PostgreSQL es un sistema de gestión de bases de datos relacional orientado a objetos y de código abierto, publicado bajo la licencia PostgreSQL,​ similar a la BSD o la MIT.  

  
### Importancia de aprender sobre base de datos
Si tu intención es formar parte del mundo del desarrollo de software, aprender bases de datos relacionales más que importante es obligatorio. 
Más del 90% de los desarrollos de software requieren bases de datos de cualquier tipo y en la misma proporción están las relacionales.  
Todo desarrollo sea en equipo o de manera individual requieren de este conocimiento. Existen especialidades dentro del sector que exclusivamente trabajan con bases de datos los cuales son muy bien remunerados y necesarios para ahora y el futuro.





 
