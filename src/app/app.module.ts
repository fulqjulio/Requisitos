import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { ListaAsignaturasComponent } from './lista-asignaturas/lista-asignaturas.component';
import { ListadoAsignaturasEstudianteComponent } from './listado-asignaturas-estudiante/listado-asignaturas-estudiante.component';
import { ResumenCalificacionesAsignaturaComponent } from './resumen-calificaciones-asignatura/resumen-calificaciones-asignatura.component';
import { GenerarSolicitudCupoComponent } from './generar-solicitud-cupo/generar-solicitud-cupo.component';
import { PlanInscripcionCancelacionComponent } from './plan-inscripcion-cancelacion/plan-inscripcion-cancelacion.component';
import { ListaAsignaturasCancelarComponent } from './lista-asignaturas-cancelar/lista-asignaturas-cancelar.component';
import { CrearActividadesComponent } from './crear-actividades/crear-actividades.component';
import { IngresoActividadComponent } from './ingreso-actividad/ingreso-actividad.component';
import { CrearAsignaturaComponent } from './crear-asignatura/crear-asignatura.component';
import { CrearAsignatura2Component } from './crear-asignatura2/crear-asignatura2.component';
import { ModificarAsignaturaBuscarComponent } from './modificar-asignatura-buscar/modificar-asignatura-buscar.component';
import { ModificarAsignaturaComponent } from './modificar-asignatura/modificar-asignatura.component';
import { BuscarAsignaturaComponent } from './buscar-asignatura/buscar-asignatura.component';
import { VerAsignaturaComponent } from './ver-asignatura/ver-asignatura.component';
import { CrearSolicitudAsignaturaComponent } from './crear-solicitud-asignatura/crear-solicitud-asignatura.component';
import { ModificarSolicitudAsignaturaComponent } from './modificar-solicitud-asignatura/modificar-solicitud-asignatura.component';
import { ListaAsignaturasDepartamentoComponent } from './lista-asignaturas-departamento/lista-asignaturas-departamento.component';
import { DetalleAsignaturaDepartamentoComponent } from './detalle-asignatura-departamento/detalle-asignatura-departamento.component';
import { CrearGrupoComponent } from './crear-grupo/crear-grupo.component';
import { DefinirHorarioComponent } from './definir-horario/definir-horario.component';
import { ListaAsignaturasSolicitudCupoComponent } from './lista-asignaturas-solicitud-cupo/lista-asignaturas-solicitud-cupo.component';
import { DetalleAsignaturaDocentesComponent } from './detalle-asignatura-docentes/detalle-asignatura-docentes.component';
import { IngresarCalificacionesComponent } from './ingresar-calificaciones/ingresar-calificaciones.component';
import { ListaGruposVinculadosComponent } from './lista-grupos-vinculados/lista-grupos-vinculados.component';
import { IngresoManualCalificacionesComponent } from './ingreso-manual-calificaciones/ingreso-manual-calificaciones.component';
import { ImporteCalificacionesComponent } from './importe-calificaciones/importe-calificaciones.component';
import { ConfirmarImporteCalificacionesComponent } from './confirmar-importe-calificaciones/confirmar-importe-calificaciones.component';
import { ListadoAsignaturasPendientesComponent } from './listado-asignaturas-pendientes/listado-asignaturas-pendientes.component';
import { BuscarLibreEleccionComponent } from './buscar-libre-eleccion/buscar-libre-eleccion.component';
import { SeleccionGrupoInscribirComponent } from './seleccion-grupo-inscribir/seleccion-grupo-inscribir.component';
import { ImportarCitacionesComponent } from './importar-citaciones/importar-citaciones.component';
import { ConfirmarImporteCitacionesComponent } from './confirmar-importe-citaciones/confirmar-importe-citaciones.component';
import { ListaSolicitudesComiteComponent } from './lista-solicitudes-comite/lista-solicitudes-comite.component';
import { DetalleSolicitudComiteComponent } from './detalle-solicitud-comite/detalle-solicitud-comite.component';
import { ListaSolicitudesConsejoComponent } from './lista-solicitudes-consejo/lista-solicitudes-consejo.component';
import { DetalleSolicitudConsejoComponent } from './detalle-solicitud-consejo/detalle-solicitud-consejo.component';
import { ListaSolicitudesDirectorComponent } from './lista-solicitudes-director/lista-solicitudes-director.component';
import { DetalleSolicitudDirectorComponent } from './detalle-solicitud-director/detalle-solicitud-director.component';
import { ModificarSolicitudDirectorComponent } from './modificar-solicitud-director/modificar-solicitud-director.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FooterComponent,
    ListaAsignaturasComponent,
    ListadoAsignaturasEstudianteComponent,
    ResumenCalificacionesAsignaturaComponent,
    GenerarSolicitudCupoComponent,
    PlanInscripcionCancelacionComponent,
    ListaAsignaturasCancelarComponent,
    CrearActividadesComponent,
    IngresoActividadComponent,
    CrearAsignaturaComponent,
    CrearAsignatura2Component,
    ModificarAsignaturaBuscarComponent,
    ModificarAsignaturaComponent,
    BuscarAsignaturaComponent,
    VerAsignaturaComponent,
    CrearSolicitudAsignaturaComponent,
    ModificarSolicitudAsignaturaComponent,
    ListaAsignaturasDepartamentoComponent,
    DetalleAsignaturaDepartamentoComponent,
    CrearGrupoComponent,
    DefinirHorarioComponent,
    ListaAsignaturasSolicitudCupoComponent,
    DetalleAsignaturaDocentesComponent,
    IngresarCalificacionesComponent,
    ListaGruposVinculadosComponent,
    IngresoManualCalificacionesComponent,
    ImporteCalificacionesComponent,
    ConfirmarImporteCalificacionesComponent,
    ListadoAsignaturasPendientesComponent,
    BuscarLibreEleccionComponent,
    SeleccionGrupoInscribirComponent,
    ImportarCitacionesComponent,
    ConfirmarImporteCitacionesComponent,
    ListaSolicitudesComiteComponent,
    DetalleSolicitudComiteComponent,
    ListaSolicitudesConsejoComponent,
    DetalleSolicitudConsejoComponent,
    ListaSolicitudesDirectorComponent,
    DetalleSolicitudDirectorComponent,
    ModificarSolicitudDirectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
