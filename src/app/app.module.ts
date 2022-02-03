import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { InicioComponent } from './Components/inicio/inicio.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ListaAsignaturasComponent } from './Components/lista-asignaturas/lista-asignaturas.component';
import { ListadoAsignaturasEstudianteComponent } from './Components/listado-asignaturas-estudiante/listado-asignaturas-estudiante.component';
import { ResumenCalificacionesAsignaturaComponent } from './Components/resumen-calificaciones-asignatura/resumen-calificaciones-asignatura.component';
import { GenerarSolicitudCupoComponent } from './Components/generar-solicitud-cupo/generar-solicitud-cupo.component';
import { PlanInscripcionCancelacionComponent } from './Components/plan-inscripcion-cancelacion/plan-inscripcion-cancelacion.component';
import { ListaAsignaturasCancelarComponent } from './Components/lista-asignaturas-cancelar/lista-asignaturas-cancelar.component';
import { CrearActividadesComponent } from './Components/crear-actividades/crear-actividades.component';
import { IngresoActividadComponent } from './Components/ingreso-actividad/ingreso-actividad.component';
import { CrearAsignaturaComponent } from './Components/crear-asignatura/crear-asignatura.component';
import { CrearAsignatura2Component } from './Components/crear-asignatura2/crear-asignatura2.component';
import { ModificarAsignaturaBuscarComponent } from './Components/modificar-asignatura-buscar/modificar-asignatura-buscar.component';
import { ModificarAsignaturaComponent } from './Components/modificar-asignatura/modificar-asignatura.component';
import { BuscarAsignaturaComponent } from './Components/buscar-asignatura/buscar-asignatura.component';
import { VerAsignaturaComponent } from './Components/ver-asignatura/ver-asignatura.component';
import { CrearSolicitudAsignaturaComponent } from './Components/crear-solicitud-asignatura/crear-solicitud-asignatura.component';
import { ModificarSolicitudAsignaturaComponent } from './Components/modificar-solicitud-asignatura/modificar-solicitud-asignatura.component';
import { ListaAsignaturasDepartamentoComponent } from './Components/lista-asignaturas-departamento/lista-asignaturas-departamento.component';
import { DetalleAsignaturaDepartamentoComponent } from './Components/detalle-asignatura-departamento/detalle-asignatura-departamento.component';
import { CrearGrupoComponent } from './Components/crear-grupo/crear-grupo.component';
import { DefinirHorarioComponent } from './Components/definir-horario/definir-horario.component';
import { ListaAsignaturasSolicitudCupoComponent } from './Components/lista-asignaturas-solicitud-cupo/lista-asignaturas-solicitud-cupo.component';
import { DetalleAsignaturaDocentesComponent } from './Components/detalle-asignatura-docentes/detalle-asignatura-docentes.component';
import { IngresarCalificacionesComponent } from './Components/ingresar-calificaciones/ingresar-calificaciones.component';
import { ListaGruposVinculadosComponent } from './Components/lista-grupos-vinculados/lista-grupos-vinculados.component';
import { IngresoManualCalificacionesComponent } from './Components/ingreso-manual-calificaciones/ingreso-manual-calificaciones.component';
import { ImporteCalificacionesComponent } from './Components/importe-calificaciones/importe-calificaciones.component';
import { ConfirmarImporteCalificacionesComponent } from './Components/confirmar-importe-calificaciones/confirmar-importe-calificaciones.component';
import { ListadoAsignaturasPendientesComponent } from './Components/listado-asignaturas-pendientes/listado-asignaturas-pendientes.component';
import { BuscarLibreEleccionComponent } from './Components/buscar-libre-eleccion/buscar-libre-eleccion.component';
import { SeleccionGrupoInscribirComponent } from './Components/seleccion-grupo-inscribir/seleccion-grupo-inscribir.component';
import { ImportarCitacionesComponent } from './Components/importar-citaciones/importar-citaciones.component';
import { ConfirmarImporteCitacionesComponent } from './Components/confirmar-importe-citaciones/confirmar-importe-citaciones.component';
import { ListaSolicitudesComiteComponent } from './Components/lista-solicitudes-comite/lista-solicitudes-comite.component';
import { DetalleSolicitudComiteComponent } from './Components/detalle-solicitud-comite/detalle-solicitud-comite.component';
import { ListaSolicitudesConsejoComponent } from './Components/lista-solicitudes-consejo/lista-solicitudes-consejo.component';
import { DetalleSolicitudConsejoComponent } from './Components/detalle-solicitud-consejo/detalle-solicitud-consejo.component';
import { ListaSolicitudesDirectorComponent } from './Components/lista-solicitudes-director/lista-solicitudes-director.component';
import { DetalleSolicitudDirectorComponent } from './Components/detalle-solicitud-director/detalle-solicitud-director.component';
import { ModificarSolicitudDirectorComponent } from './Components/modificar-solicitud-director/modificar-solicitud-director.component';
import { HomeComponent } from './Components/home/home.component';

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
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
