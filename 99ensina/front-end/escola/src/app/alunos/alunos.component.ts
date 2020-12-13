import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { AlunoModel } from './aluno.model';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  aluno: AlunoModel = new AlunoModel();
  alunos: Array<any> = new Array();

  constructor(private alunosService: AlunosService ) {
    this.listarAlunos();
   }

  ngOnInit(): void {
  }

  atualizar(id: number){
    this.alunosService.autalizarAluno(id, this.aluno).subscribe(aluno =>{
      this.aluno = new AlunoModel();
      this.listarAlunos();
    },err => {
      console.log(err);
    })
  }

  remover(id: number){
    this.alunosService.removerAluno(id).subscribe(aluno=> {
      this.aluno = new AlunoModel();
      this.listarAlunos();
    }, err =>{
      console.log(err);
    })
  }

  listarAlunos(){
    this.alunosService.listarAlunos().subscribe(alunos=> {
      this.alunos = alunos;
    }, err=> {
      console.log(err);
    })
  }

  cadastrar(){
    this.alunosService.cadastrarAluno(this.aluno).subscribe(aluno =>{
      this.aluno = new AlunoModel();
      this.listarAlunos();
    },err => {
      console.log(err);
    })
  }

}
