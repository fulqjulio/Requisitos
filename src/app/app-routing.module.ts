import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarAsignaturaComponent } from './buscar-asignatura/buscar-asignatura.component';
import { BuscarLibreEleccionComponent } from './buscar-libre-eleccion/buscar-libre-eleccion.component';
import { ConfirmarImporteCalificacionesComponent } from './confirmar-importe-calificaciones/confirmar-importe-calificaciones.component';
import { ConfirmarImporteCitacionesComponent } from './confirmar-importe-citaciones/confirmar-importe-citaciones.component';
import { CrearActividadesComponent } from './crear-actividades/crear-actividades.component';
import { CrearAsignaturaComponent } from './crear-asignatura/crear-asignatura.component';
import { CrearAsignatura2Component } from './crear-asignatura2/crear-asignatura2.component';
import { CrearGrupoComponent } from './crear-grupo/crear-grupo.component';
import { CrearSolicitudAsignaturaComponent } from './crear-solicitud-asignatura/crear-solicitud-asignatura.component';
import { DefinirHorarioComponent } from './definir-horario/definir-horario.component';
import { DetalleAsignaturaDepartamentoComponent } from './detalle-asignatura-departamento/detalle-asignatura-departamento.component';
import { DetalleAsignaturaDocentesComponent } from './detalle-asignatura-docentes/detalle-asignatura-docentes.component';
import { DetalleSolicitudComiteComponent } from './detalle-solicitud-comite/detalle-solicitud-comite.component';
import { DetalleSolicitudConsejoComponent } from './detalle-solicitud-consejo/detalle-solicitud-consejo.component';
import { DetalleSolicitudDirectorComponent } from './detalle-solicitud-director/detalle-solicitud-director.component';
import { GenerarSolicitudCupoComponent } from './generar-solicitud-cupo/generar-solicitud-cupo.component';
import { ImportarCitacionesComponent } from './importar-citaciones/importar-citaciones.component';
import { ImporteCalificacionesComponent } from './importe-calificaciones/importe-calificaciones.component';
import { IngresarCalificacionesComponent } from './ingresar-calificaciones/ingresar-calificaciones.component';
import { IngresoActividadComponent } from './ingreso-actividad/ingreso-actividad.component';
import { IngresoManualCalificacionesComponent } from './ingreso-manual-calificaciones/ingreso-manual-calificaciones.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaAsignaturasCancelarComponent } from './lista-asignaturas-cancelar/lista-asignaturas-cancelar.component';
import { ListaAsignaturasDepartamentoComponent } from './lista-asignaturas-departamento/lista-asignaturas-departamento.component';
import { ListaAsignaturasSolicitudCupoComponent } from './lista-asignaturas-solicitud-cupo/lista-asignaturas-solicitud-cupo.component';
import { ListaAsignaturasComponent } from './lista-asignaturas/lista-asignaturas.component';
import { ListaGruposVinculadosComponent } from './lista-grupos-vinculados/lista-grupos-vinculados.component';
import { ListaSolicitudesComiteComponent } from './lista-solicitudes-comite/lista-solicitudes-comite.component';
import { ListaSolicitudesConsejoComponent } from './lista-solicitudes-consejo/lista-solicitudes-consejo.component';
import { ListaSolicitudesDirectorComponent } from './lista-solicitudes-director/lista-solicitudes-director.component';
import { ListadoAsignaturasEstudianteComponent } from './listado-asignaturas-estudiante/listado-asignaturas-estudiante.component';
import { ListadoAsignaturasPendientesComponent } from './listado-asignaturas-pendientes/listado-asignaturas-pendientes.component';
import { ModificarAsignaturaBuscarComponent } from './modificar-asignatura-buscar/modificar-asignatura-buscar.component';
import { ModificarAsignaturaComponent } from './modificar-asignatura/modificar-asignatura.component';
import { ModificarSolicitudAsignaturaComponent } from './modificar-solicitud-asignatura/modificar-solicitud-asignatura.component';
import { ModificarSolicitudDirectorComponent } from './modificar-solicitud-director/modificar-solicitud-director.component';
import { PlanInscripcionCancelacionComponent } from './plan-inscripcion-cancelacion/plan-inscripcion-cancelacion.component';
import { ResumenCalificacionesAsignaturaComponent } from './resumen-calificaciones-asignatura/resumen-calificaciones-asignatura.component';
import { SeleccionGrupoInscribirComponent } from './seleccion-grupo-inscribir/seleccion-grupo-inscribir.component';
import { VerAsignaturaComponent } from './ver-asignatura/ver-asignatura.component';

const routes: Routes = [

  { path: '', component: InicioComponent },
  { path: 'ListaAsignaturas', component: ListaAsignaturasComponent },
  { path: 'ListaAsignaturasEstudiante', component: ListadoAsignaturasEstudianteComponent },
  { path: 'ResumenCalificacionesAsignatura', component: ResumenCalificacionesAsignaturaComponent },
  { path: 'GenerarSolicitudCupo', component: GenerarSolicitudCupoComponent },
  { path: 'PlanInscripcionCancelacion', component: PlanInscripcionCancelacionComponent },
  { path: 'ListaAsignaturasCancelacion', component: ListaAsignaturasCancelarComponent },
  { path: 'CrearActividades', component: CrearActividadesComponent },
  { path: 'IngresoActividad', component: IngresoActividadComponent },
  { path: 'CrearAsignatura', component: CrearAsignaturaComponent },
  { path: 'CrearAsignatura2', component: CrearAsignatura2Component },
  { path: 'ModificarAsignaturaBuscar', component: ModificarAsignaturaBuscarComponent },
  { path: 'ModificarAsignatura', component: ModificarAsignaturaComponent },
  { path: 'BuscarAsignatura', component: BuscarAsignaturaComponent },
  { path: 'VerAsignatura', component: VerAsignaturaComponent },
  { path: 'CrearSolicitudAsignatura', component: CrearSolicitudAsignaturaComponent },
  { path: 'ModificarSolicitudAsignatura', component: ModificarSolicitudAsignaturaComponent },
  { path: 'ListaAsignaturasDepartamento', component: ListaAsignaturasDepartamentoComponent },
  { path: 'DetalleListaAsignaturasDepartamento', component: DetalleAsignaturaDepartamentoComponent },
  { path: 'CrearGrupo', component: CrearGrupoComponent },
  { path: 'DefinirHorario', component: DefinirHorarioComponent },
  { path: 'ListaAsignaturasSolicitudCupos', component: ListaAsignaturasSolicitudCupoComponent },
  { path: 'DetalleAsignaturaDocentes', component: DetalleAsignaturaDocentesComponent },
  { path: 'IngresarCalificaciones', component: IngresarCalificacionesComponent },
  { path: 'ListaGruposVinculados', component: ListaGruposVinculadosComponent },
  { path: 'IngresoManualCalificaciones', component: IngresoManualCalificacionesComponent },
  { path: 'ImporteCalificaciones', component: ImporteCalificacionesComponent },
  { path: 'ConfirmarImporteCalificaciones', component: ConfirmarImporteCalificacionesComponent },
  { path: 'ListadoAsignaturasPendientes', component: ListadoAsignaturasPendientesComponent },
  { path: 'BuscarLibreEleccion', component: BuscarLibreEleccionComponent },
  { path: 'SeleccionGrupoInscribir', component: SeleccionGrupoInscribirComponent },
  { path: 'ImportarCitaciones', component: ImportarCitacionesComponent },
  { path: 'ConfirmarImporteCitaciones', component: ConfirmarImporteCitacionesComponent },
  { path: 'ListaSolicitudesComite', component: ListaSolicitudesComiteComponent },
  { path: 'DetalleSolicitudComite', component: DetalleSolicitudComiteComponent },
  { path: 'ListaSolicitudesConsejo', component: ListaSolicitudesConsejoComponent },
  { path: 'DetalleSolicitudConsejo', component: DetalleSolicitudConsejoComponent },
  { path: 'ListaSolicitudesDirector', component: ListaSolicitudesDirectorComponent },
  { path: 'DetalleSolicitudDirector', component: DetalleSolicitudDirectorComponent },
  { path: 'ModificarSolicitudDirector', component: ModificarSolicitudDirectorComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
