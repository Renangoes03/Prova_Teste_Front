import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../anuncio.service';


@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {

anuncio: Anuncio[] = [];
formGroupClient: FormGroup<any>;


constructor(private anuncioService: AnuncioService){}
ngOnInit(): void {
  this.loadAnuncio();
}

loadAnuncio() {
   this.anuncioService.getAnuncio().subscribe(
     {
       next : data => this.anuncio = data,
     }
   );
}

}

