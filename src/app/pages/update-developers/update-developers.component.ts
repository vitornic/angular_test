import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, of } from 'rxjs';
import { IDevelopers } from 'src/app/models/developers';
import { DevelopersService } from 'src/app/services/developers.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-developers',
  templateUrl: './update-developers.component.html',
  styleUrls: ['./update-developers.component.css'],
})
export class UpdateDevelopersComponent implements OnInit {
  formulario!: FormGroup;

  developers$: Observable<IDevelopers[]>;

  constructor(
    private fb: FormBuilder,
    private developersService: DevelopersService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.developers$ = this.developersService.findAll().pipe(
      catchError((err) => {
        this._snackBar.open(
          'Algo deu errado, tente atualizar a página!',
          'Close'
        );
        return of([]);
      })
    );

    this.criarFormulario();
  }

  ngOnInit(): void {}

  enviarDados() {
    const dadosFormulario = this.formulario.value;

    const dev = new IDevelopers(dadosFormulario.name, dadosFormulario.avatar);

    this.updateDev(dev);

    this.formulario.reset();
  }

  criarFormulario() {
    this.formulario = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      avatar: ['', Validators.compose([Validators.required])],
    });
  }

  updateDev(dev: IDevelopers) {
    this.developersService
      .updateDev(this.data.dataKey, dev)
      .pipe(
        catchError((err) => {
          this._snackBar.open(
            'Algo deu errado, tente atualizar a página!',
            'Close'
          );
          return of([]);
        })
      )
      .subscribe((res) => {
        this._snackBar.open(`Registro atualizado com sucesso`, 'Close');
      });
  }

  get name() {
    return this.formulario.get('name');
  }

  get avatar() {
    return this.formulario.get('avatar');
  }
}
