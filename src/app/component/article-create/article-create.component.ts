import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsCreateDTO } from 'src/app/model/newsCerateDTO';
import { NewsCreateDTOo } from 'src/app/model/newsCreateDTOo';
import { ImageUploadServiceService } from 'src/app/service/image-upload-service.service';
import * as Editor from 'ckeditor5/build/ckeditor';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {

  newsCreateForm = new FormGroup({
    newsTitle: new FormControl(''),
    newsBody: new FormControl(''),
    deploy: new FormControl(''),
    data: new FormControl('')

  })

  newsCreateDTO: NewsCreateDTO = new NewsCreateDTO();
  constructor(private uploadservice: ImageUploadServiceService,
    private router: Router,
  ) { }
  public Editor = Editor;
  imageURL!: string;

  newsCreateDTOo: NewsCreateDTOo = new NewsCreateDTOo;

  ngOnInit(): void {
  }

  onFileChange(event: any) {
    const file: File = event.target.files[0];
    console.log(file);
    this.newsCreateForm.patchValue({
      data: file
    });

    console.log(this.newsCreateForm.value);
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  onSubmit() {
    console.log("onsubmit run");
    this.newsCreateDTO = this.newsCreateForm.value;
    console.log(this.newsCreateDTO);
    this.uploadservice.createNews(this.newsCreateDTO).subscribe(data => {
      console.log("resim eklendi");
    },
      error => {
        console.log(error);

      })
  }
}
