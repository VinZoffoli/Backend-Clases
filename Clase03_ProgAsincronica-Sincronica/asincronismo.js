/*
Si lo que bsucamos es que las tareas trabajen "en paralelo", entonces debemos buscar la manera de programa instrucciones asincronas, lo cual significa que cada una seguira el hilo de resolucion que considere su ritmo.
Hay que ser cautelosos al utilizarlas, ya que:
- No controlamos cuando terminara, solo cuando comienza
- Si una tarea depende del resultado de otra, habra problemas, pues esperara su ejecucion en paralelo
*/

