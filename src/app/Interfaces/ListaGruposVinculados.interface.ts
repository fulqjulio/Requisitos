import { Time } from "@angular/common";

export interface ListaGruposVinculadosI {
    id: number,
    nombre_completo: string,
    numero_grupo: string,
    numero_de_cupos: number,
    salon: string,
    hora_inicio: Time,
    hora_final: Time,
    dias: string,
} 