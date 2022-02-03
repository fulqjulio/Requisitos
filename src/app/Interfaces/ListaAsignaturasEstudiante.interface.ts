export interface ListaAsignaturasEstudianteI {
    codigo_asignatura: string;
    calificacion: string;
    estado_asignatura: string;
    asignatura: asignatura;
} 

interface asignatura {
    nombre: string;
}