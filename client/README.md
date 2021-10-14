# Cliente de Desafío Frontend - Cumplo

Se ha procurado respetar lo posible la estructura de folders presentados originalmente, por lo que todo lo consernierte a al front podrá ser encontrado en este folder.

## ▶️ Ejecución del Front

Al clonar el proyecto el proceso es el tradicional

```
npm install
```

Para descargar dependencias

```
npm start
```

Para inicializar el proyecto, con este comando se estará iniciando el servidor de backend y el del frontend respectivamente.

Así pues, en su navegar principal podrá ver iniciarse el front en el puerto 3000. De no ser así solo deberá copiar y pegar en su navegar la siguiente url `http://localhost:3000/`

A continuación listo algunas notas de importancia.

## 📄 Notas:

- Al terminarse la cuenta regresiva,

  - Sí se quiere volver a verla, se recomienda borrar las cookie del
    navegador o utilizar en su defecto otro navegar o ventana de incognito
    - Esto es así como una forma minima de seguridad, que garantiza que el
      usuario sólo pueda votar una vez

- `Advertencia:` Al momento de ver en pantalla la cuenta regresiva NO verá esta partir desde la misma cantidad de segundos que estableció en el package.json
  - Considerar los 5seg. apróx. que toma el levantar el servidor del backend y luego el servidor del frontend al momento de evaluar el contador

## 👀 Mejoras Pendientes \*\*

- Considerar fallos
  - Cuando el servidor no responde, mostrar pantalla de error
  - Cuando el usuario ya ha votado --> Esta se mitiga un poco con el uso de cookie
  - Ninguno de los candidatos recibe votos, mostrar pantalla de error
  - El candidato no existe
