import { BaseService } from '../base.service';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireList, AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

import { Trabalho } from '../../models/trabalho.model';

import * as firebase from 'firebase/app';
import { DateTime } from 'ionic-angular';
/*
  Generated class for the TabalhoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TrabalhoProvider extends BaseService {

  trabalhos: AngularFireList<Trabalho>;

  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase
  ) {
    super();
    this.getTrabalhos();
    console.log('Hello TrabalhoProvider Provider');
  }

  private getTrabalhos(): void {
    console.log("Consulta todos os trabalhos");
    this.afAuth.authState
      .subscribe((authUser: firebase.User) => {
        if (authUser) {
          this.trabalhos = this.db.list<Trabalho>(`/trabalhos`,
            (ref: firebase.database.Reference) => ref.orderByChild('timestamp')
          );
        }
      });
  }

  create(trabalho: Trabalho): Promise<void> {
    return this.db.object<Trabalho>(`/trabalhos/${trabalho.$key}`)
      .set(trabalho)
      .catch(this.handlePromiseError);
  }

  edit(trabalho: Trabalho): Promise<void> {
    return this.db.object<Trabalho>(`/trabalhos/${trabalho.$key}`)
      .update({titulo: trabalho.titulo, descricao: trabalho.descricao, aluno1: trabalho.aluno1, aluno2: trabalho.aluno2})
      .catch(this.handlePromiseError);
  }

  remove(trabalho: Trabalho): Promise<void> {
    return this.db.list<Trabalho>(`/trabalhos`)
      .remove(trabalho.$key)
      .catch(this.handlePromiseError);
  }
}
