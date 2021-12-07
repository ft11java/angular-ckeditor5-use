import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../model/news';
import { NewsCreateDTO } from '../model/newsCerateDTO';
import { NewsCreateDTOo } from '../model/newsCreateDTOo';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadServiceService {

  newsCreateDTOo: NewsCreateDTOo = new NewsCreateDTOo();
  private baseURL = "http://localhost:8080/api/v1/admin/news";
  constructor(private httpClient: HttpClient) { }

  getNewsById(id: String | undefined): Observable<News> {
    return this.httpClient.get<News>(`${this.baseURL}/${id}`);
  }

  getAllNews():Observable<News[]>{
    return this.httpClient.get<News[]>(`${this.baseURL}`);
  }

  createNews(newsCreateDTO: NewsCreateDTO): Observable<Object> {
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', newsCreateDTO.data);
    this.newsCreateDTOo.newsTitle = newsCreateDTO.newsTitle;
    this.newsCreateDTOo.newsBody = newsCreateDTO.newsBody;
    this.newsCreateDTOo.deploy = newsCreateDTO.deploy;
    uploadImageData.append('news', JSON.stringify(this.newsCreateDTOo))
    return this.httpClient.post<String>(`${this.baseURL}`,uploadImageData);

  }
}
