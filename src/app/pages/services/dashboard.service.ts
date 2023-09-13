import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponseCharacter } from 'src/app/shared/interfaces/character.interfaces';
import { environment } from 'src/environments/environment.development';

const base_url = environment.BASE_URL;

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private httpClient: HttpClient) {}

  async getCharacters(pages?: number) {
    const httpParams = pages ? new HttpParams().append('page', pages + 1) : {};
    return this.httpClient.get<IResponseCharacter>(`${base_url}/character`, {
      params: httpParams,
    });
  }
}
