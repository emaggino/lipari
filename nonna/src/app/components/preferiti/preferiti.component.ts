import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-preferiti',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule],
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.css'
})
export class PreferitiComponent {

}
