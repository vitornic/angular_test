import { Component } from '@angular/core';
import { IDevelopers } from 'src/app/models/developers';
import { DevelopersService } from 'src/app/services/developers.service';
import { catchError, Observable, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { AddDevelopersComponent } from '../add-developers/add-developers.component';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css'],
})
export class DevelopersComponent {
  displayedColumns: string[] = [
    'id',
    'avatar',
    'name',
    'createdAt',
    'Update',
    'Delete',
  ];

  developers$: Observable<IDevelopers[]>;

  constructor(
    private developersService: DevelopersService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
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
  }

  findAll() {
    this.developers$ = this.developersService.findAll().pipe(
      catchError((err) => {
        this._snackBar.open(
          'Algo deu errado, tente atualizar a página!',
          'Close'
        );
        return of([]);
      })
    );
  }

  addDev() {
    const dialogRef = this.dialog.open(AddDevelopersComponent);

    dialogRef
      .afterClosed()
      .pipe(
        catchError((err) => {
          this._snackBar.open(
            'Algo deu errado, tente atualizar a página!',
            'Close'
          );
          return of([]);
        })
      )
      .subscribe((result) => {
        this.findAll();
      });
  }

  Delete(id: number) {
    this.developersService.deleteDev(id).subscribe((res: any) => {
      this._snackBar.open(`Registro ${res.id} deletado com sucesso`, 'Close');
      this.findAll();
    });
  }

  Update(id: number) {}
}
