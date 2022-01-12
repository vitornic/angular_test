import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, of } from 'rxjs';
import { IDevelopers } from 'src/app/models/developers';
import { DevelopersService } from 'src/app/services/developers.service';

@Component({
  selector: 'app-add-developers',
  templateUrl: './add-developers.component.html',
  styleUrls: ['./add-developers.component.css'],
})
export class AddDevelopersComponent implements OnInit {
  formulario!: FormGroup;

  developers$: Observable<IDevelopers[]>;

  constructor(
    private fb: FormBuilder,
    private developersService: DevelopersService,
    private _snackBar: MatSnackBar
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

    this.createDev(dev);

    this.formulario.reset();
  }

  criarFormulario() {
    this.formulario = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      avatar: ['', Validators.compose([Validators.required])],
    });
  }

  createDev(dev: IDevelopers) {
    this.developersService
      .createDev(dev)
      .pipe(
        catchError((err) => {
          this._snackBar.open(
            'Algo deu errado, tente atualizar a página!',
            'Close'
          );
          return of([]);
        })
      )
      .subscribe((res: any) => {
        this._snackBar.open(`Registro adicionado com sucesso`, 'Close');
      });
  }

  get name() {
    return this.formulario.get('name');
  }

  get avatar() {
    return this.formulario.get('avatar');
  }
}
