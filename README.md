#todo
 - herramientas copiar, pegar, [eliminar]
    - Implemtar cp para copiar listas de ficheros
    
 - Mejorar menus de la interfaz
 - conexion con el gestor de listas Python(favs y shares).

# Serebro 
Serebro es un centro de unificacion de diversas aplicaciones realizado con NodeJS. Tiene integrado un file explorer [basado en un API].
Esta basado en express para que no figure la mayor parte del código en el cliente.

El API del file explorer se encuentra en apps/Drive donde esta el API propiamente dicha y wrapper para express 

Las aplicaciones tiene en comun un plantilla de renderizado (views/template.ejs) para facilitar que todas las apps tengan la misma interfaz.Las apps son llamadas desde public/js donde configuramos las distintas zonas de la template con los datos que queremos.

El directorio public contiene además herramientas de uso rutinario para CSS y JS como:
- componentes
- librería de atajos CSS (cssLib)


## Funciones del API File Explorer integrada
### GET
- list + (querystring) path=<ruta>
- viewFile + (querystring) path=<ruta fichero a visualizar>
- mkdir + (querystring) path=<ruta actual> + (querystring) dir=<nombre directorio> 
- rm + (querystring) path=<ruta fichero a eliminar>
- mv + (querystring) opath=<ruta origen > + (querystring) dpath=<ruta destino>~
- cp + (querystring) opath=lista ficheros + (querystring) dpath=<directorio destino>

### POST:
 - upload (post) path=<path actual>&uploadFile=<fichero a subir>

## Otras Apps a implemtar externamente (otros proyectos)

- gestor de listas  (para favoritos, listas reproducción de audio y video...) - Python3 + SQlite
- pepapig: estudio de combinaciones de loterías. - Python3 + Pandas.




