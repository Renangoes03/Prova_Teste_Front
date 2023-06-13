import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnuncioService } from '../anuncio.service';
import { Anuncio } from './anuncio';


@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {

  anuncio: Anuncio[] = [];
  formGroupClient: FormGroup;

  constructor(private anuncioService: AnuncioService,
    private formBuilder: FormBuilder
  ) {
    this.formGroupClient = formBuilder.group({
      id: [''],
      img: [''],
      name: [''],
      informacao: [''],
      data_ini: [''],
      data_fin: [''],

    });
  }
  ngOnInit(): void {
    this.loadAnuncio();
  }
  loadAnuncio() {
    this.anuncioService.getAnuncio().subscribe(
      {
        next: data => this.anuncio = data,
        error: msg => console.log("Erro ao chamar o endpont " + msg )
      }
    )
  }

  salvar() {
    this.anuncioService.salvar(this.formGroupClient.value).subscribe(
      {
        next: data => {
          this.anuncio.push(data);
          this.formGroupClient.reset();
        }
      }
    )
  }
}
