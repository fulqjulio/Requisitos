import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET: POST: PUT: OPTIONS: DELETE' });
  public BASE_URL = "http://requisitos-back-end.herokuapp.com/";
  public current_user: string;
  public user_id: string;
  public fullname: string;
  public perfil: string;

  public current_asignatura: string;
  public current_grupo: string;

  public tipo_solicitud: string;

  constructor(
    // public toastr: ToastrService,
    public router: Router,
    public http: HttpClient) {

    this.current_user = "";
    this.user_id = "";
    this.fullname = "";
    this.perfil = "";

    this.current_asignatura = "";
    this.current_grupo = "";

    this.tipo_solicitud = "";
  }

  getCurrentUser() {
    return this.current_user
  }

  setCurrentUser(newUser: string) {
    this.current_user = newUser;
    localStorage.setItem('current_user', newUser);
  }

  getUserId() {
    return this.user_id
  }

  setUserId(new_user_id: string) {
    this.user_id = new_user_id;
    localStorage.setItem('user_id', new_user_id);
  }

  getFullname() {
    return this.fullname
  }

  setFullname(newFullname: string) {
    this.fullname = newFullname;
    localStorage.setItem('fullname', newFullname);
  }

  getPerfil() {
    return this.perfil
  }

  setPerfil(newPerfil: string) {
    this.perfil = newPerfil;
    localStorage.setItem('perfil', newPerfil);
  }

  getCurrentAsignatura() {
    return this.current_asignatura
  }

  setCurrentAsignatura(newAsignatura: string) {
    this.current_asignatura = newAsignatura;
    localStorage.setItem('current_asignatura', newAsignatura);
  }

  getCurrentGrupo() {
    return this.current_grupo
  }

  setCurrentGrupo(newGrupo: string) {
    this.current_grupo = newGrupo;
    localStorage.setItem('current_grupo', newGrupo);
  }

  getTipoSolicitud() {
    return this.tipo_solicitud
  }

  setTipoSolicitud(newTipoSolicitud: string) {
    this.tipo_solicitud = newTipoSolicitud;
    localStorage.setItem('tipo_solicitud', newTipoSolicitud);
  }

  loadLocalStorage() {
    this.current_user = localStorage.getItem('current_user') ?? '';
    this.user_id = localStorage.getItem('user_id') ?? '';
    this.fullname = localStorage.getItem('fullname') ?? '';
    this.perfil = localStorage.getItem('perfil') ?? '';
    this.current_asignatura = localStorage.getItem('current_asignatura') ?? '';
    this.current_grupo = localStorage.getItem('current_grupo') ?? '';
    this.tipo_solicitud = localStorage.getItem('tipo_solicitud') ?? '';
  }

  public getUser(nombre_usuario: string, contrasena: string) {
    return this.http.get<any>(this.BASE_URL + "usuario/" + nombre_usuario + "/" + contrasena, { headers: this.headers })
  }

  public getListaAsignaturasEstudiante(identificacion: string, periodo: string) {
    return this.http.get<any>(this.BASE_URL + "ListaAsignaturasEstudiante/" + identificacion + "/" + periodo, { headers: this.headers })
  }

  public getListaAsignaturasDocente(identificacion: string) {
    return this.http.get<any>(this.BASE_URL + "ListaAsignaturasDocente/" + identificacion, { headers: this.headers })
  }

  public getListaGruposVinculados(codigo_asignatura: string) {
    return this.http.get<any>(this.BASE_URL + "ListaGruposVinculados/" + codigo_asignatura, { headers: this.headers })
  }

  public postCrearActividades(body:any) {
    return this.http.post<any>(this.BASE_URL + "CrearActividades/", body, { headers: this.headers })
  }

  public getActividades(id_grupo: string, codigo_asignatura: string) {
    return this.http.get<any>(this.BASE_URL + "Calificaciones/" + id_grupo + "/" + codigo_asignatura, { headers: this.headers })
  }

  public getCalificaciones(id_grupo: string) {
    return this.http.get<any>(this.BASE_URL + "Calificaciones/" + id_grupo, { headers: this.headers })
  }

  public getBuscarAsignatura(codigo_asignatura: string) {
    return this.http.get<any>(this.BASE_URL + "BuscarAsignatura/" + codigo_asignatura, { headers: this.headers })
  }

  public postSolicitudCupo(body:any) {
    return this.http.post<any>(this.BASE_URL + "SolicitudCupo/", body, { headers: this.headers })
  }

  public postSolicitudAsignatura(body:any) {
    return this.http.post<any>(this.BASE_URL + "SolicitudAsignatura/", body, { headers: this.headers })
  }

  public getListaAsignaturasDepartamento() {
    return this.http.get<any>(this.BASE_URL + "ListaAsignaturasDepartamento/", { headers: this.headers })
  }

  public postCrearGrupo(body:any) {
    return this.http.post<any>(this.BASE_URL + "CrearGrupo/", body, { headers: this.headers })
  }

  public getHorario(id_grupo:string) {
    return this.http.get<any>(this.BASE_URL + "DefinirHorario/"+id_grupo, { headers: this.headers })
  }

  public putHorario(body:any, id_grupo:string) {
    return this.http.put<any>(this.BASE_URL + "DefinirHorario/"+id_grupo, body, { headers: this.headers })
  }

  public getListaAsignaturasSolicitud() {
    return this.http.get<any>(this.BASE_URL + "ListaAsignaturasSolicitud/", { headers: this.headers })
  }

  public getSolicitudesCupo(codigo_asignatura: string) {
    return this.http.get<any>(this.BASE_URL + "ListaAsignaturasSolicitud/"+codigo_asignatura, { headers: this.headers })
  }

  public deleteSolicitudesCupo(id: number) {
    return this.http.delete<any>(this.BASE_URL + "ListaAsignaturasSolicitud/"+id, { headers: this.headers })
  }

  public CrearAsignatura(body:any) {
    return this.http.post<any>(this.BASE_URL + "CrearAsignatura/", body, { headers: this.headers })
  }
}
