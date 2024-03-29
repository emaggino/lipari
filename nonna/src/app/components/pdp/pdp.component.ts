import { Component, OnInit, Pipe } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ListService } from '../../services/list.service';
import { NgFor, NgIf } from '@angular/common';
import { SecondiService } from '../../services/secondi.service';
import { PdpService } from '../../services/pdp.service';
import { EditComponent } from '../edit/edit.component';
import { EditService } from '../../services/edit.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { DeleteDialog2Component } from '../delete-dialog2/delete-dialog2.component';

@Component({
  selector: 'app-pdp',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule, NgFor, NgIf],
  templateUrl: './pdp.component.html',
  styleUrl: './pdp.component.css',
})
export class PdpComponent implements OnInit{
  constructor(
    public loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    public listService: ListService,
    private pdpService: PdpService,
    private editService: EditService,
    public dialog : MatDialog
  ) {}

  tipoPiatto = this.listService.tipoPortata;
  recipeData : any

  ngOnInit(): void {
    let recipeId = this.route.snapshot.paramMap.get('recipeId')
    console.log(recipeId);
    recipeId && this.pdpService.getById(recipeId).subscribe((res) => {
      console.log(res);
      this.recipeData = res
    })
  }

  openDialog(id: any) {
    this.listService.dialogId = id;
    const dialogRef = this.dialog.open(DeleteDialog2Component, {
      width: '550px',
      height: '200px',
      data: {
        route: this.route
      }
    })

    dialogRef.afterClosed().subscribe((res) => {
      // let recipeId = this.route.snapshot.paramMap.get('recipeId');
      //   this.editService.editRicetta(this.ricettaObj, recipeId).subscribe((res) => {
      //     console.log('response', res);
      //     this.router.navigate(['/']);
      //     alert('Ricetta modificata con successo!');
      //   });
    })
  }


  deleteRicetta(id: any){
    this.listService.deleteRicetta(id).subscribe((res) => {
      console.log('delete response', res);
    })
    this.router.navigate(['/'])
  }

  ricettaObj = {
    titolo: '',
    preparazione: '',
    quantitaPersone: '',
    ingredienti: '',
    image: '',
    categoria: {
      id: 1,
      categoria: '',
    },
  };
  
  editRicetta(){
    let recipeId = this.route.snapshot.paramMap.get('recipeId')
    this.editService.editRicetta(this.ricettaObj, recipeId).subscribe((res) => {
      console.log('response', res);
    })
    this.router.navigate(['/'])
  }

  mockPdpDolce = {
    title: 'Seadas',
    tipe: 'Dolce',
    cocking: 'Procedimento',
    difficolta: 'facile',
    description: "Le seadas sono uno dei simboli della cucina sarda, dolce storico della gastronomia regionale: sono preparate con un impasto di semola (i Sardi sono maestri nel suo utilizzo), prevedono un ripieno preparato apposta con un pecorino fresco, sciolto e “formato” apposta per l'utilizzo, e si completano con il miele, spesso di corbezzolo, un'altra delle tipicità dell'isola. Nel Campidano, a differenza che nel Nuorese, il ripieno si prepara con una caciotta vaccina, che viene poi profumata con scorza di limone grattugiata. La frittura delle seadas può avvenire in olio di arachide o anche nello strutto che, del resto, è presente nell'impasto, con lo scopo di renderlo friabile. Ma si dice seada o seadas? Il nome, che pare avere origine dal sardo su seu, grasso, cioè lo strutto che si utilizza per la preparazione della pasta, nasce al singolare, seada o sebada. Con la notorietà, però, è subentrato l'uso di utilizzare questo nome sempre al plurale. Le seadas sono nate dalla civiltà pastorale sarda non tanto come dolce, quanto come un sostanzioso piatto unico, molto semplice, preparato con gli ingredienti a disposizione nelle dispense, lavorati con la maestria tipica delle massaie sarde, in grado di realizzare con la semola di grano duro autentici capolavori come anche il pane carasau.",
    valutazione: '3 su 5',
    id: 1,
    image: 'data:image/jpeg;base64,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'
  }
}
