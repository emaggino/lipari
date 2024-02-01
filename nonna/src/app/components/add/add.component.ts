import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, RouterModule, FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {}
