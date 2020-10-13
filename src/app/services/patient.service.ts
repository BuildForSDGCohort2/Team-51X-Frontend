import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(
    private http: HttpClient
  ) { }

  newPatient(credential) {
    return this.http.post<any>(`${environment.baseUrl}/patients`, credential, { withCredentials: true });
  }

  getAllCategory() {
    return this.http.get<any>(`${environment.baseUrl}/categories`);
  }

  getCategoryById(id) {
    return this.http.get<any>(`${environment.baseUrl}/categories/${id}`);
  }

  newContrepartie(credential) {
    return this.http.post<any>(`${environment.baseUrl}/contrepartie`, credential, { withCredentials: true });
  }

  updateContrepartie(credential) {
    return this.http.put<any>(`${environment.baseUrl}/contrepartie/update/`, credential, { withCredentials: true });
  }

  deleteContrepartie(id) {
    return this.http.delete<any>(`${environment.baseUrl}/contrepartie/${id}`);
  }

  updateProject(credential) {
    return this.http.put<any>(`${environment.baseUrl}/projects/update/`, credential, { withCredentials: true });
  }

  getProjectById(id) {
    return this.http.get<any>(`${environment.baseUrl}/projects-by-id/${id}`);
  }

  getMyProject() {
    return this.http.get<any>(`${environment.baseUrl}/projects-all-by-user`);
  }

  getAllProject(page) {
    return this.http.get<any>(`${environment.baseUrl}/projects/${page}`);
  }

  getAll(page) {
    return this.http.get<any>(`${environment.baseUrl}/all-projects/${page}`);
  }

  validate(id) {
    return this.http.put<any>(`${environment.baseUrl}/projects/validate/${id}`, { withCredentials: false });
  }

  reject(id) {
    return this.http.put<any>(`${environment.baseUrl}/projects/reject/${id}`, { withCredentials: false });
  }

  getProjectByUser(id) {
    return this.http.get<any>(`${environment.baseUrl}/projects-by-user/${id}`);
  }

  getProjectByCategorie(categoryId, pages) {
    const param = JSON.stringify({
      id: categoryId,
      page: pages
    });
    return this.http.get<any>(`${environment.baseUrl}/projects-by-categorie/${param}`);
  }

  getProjectByStatus(statuss, pages) {
    const param = JSON.stringify({
      status: statuss,
      page: pages
    });
    return this.http.get<any>(`${environment.baseUrl}/projects-by-status/${param}`);
  }

  getContrepartieByProject(id) {
    return this.http.get<any>(`${environment.baseUrl}/contrepartie/${id}`);
  }

  getContributors(id) {
    return this.http.get<any>(`${environment.baseUrl}/contributors/${id}`);
  }

  addPaymentMethod(credential) {
    return this.http.post<any>(`${environment.baseUrl}/payment-methode`, credential, { withCredentials: true });
  }

  getPaymentMethod() {
    return this.http.get<any>(`${environment.baseUrl}/payment-methode`);
  }

  addContribution(credential) {
    return this.http.post<any>(`${environment.baseUrl}/contribution`, credential, { withCredentials: true });
  }

  addComment(credential) {
    return this.http.post<any>(`${environment.baseUrl}/comments`, credential, { withCredentials: true });
  }

  getAllComments(id) {
    return this.http.get<any>(`${environment.baseUrl}/comments/${id}`);
  }
}
