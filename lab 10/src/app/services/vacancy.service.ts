import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from '../models/vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private client: HttpClient) {}

  getVacancies(): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies/`);
  }

  getVacancy(id: number): Observable<Vacancy> {
    return this.client.get<Vacancy>(`${this.BASE_URL}/api/vacancies/${id}/`);
  }

  getTopTenVacancies(): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies/top_ten/`);
  }

  getVacanciesBySalary(salary: number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies/?salary=${salary}`);
  }

}