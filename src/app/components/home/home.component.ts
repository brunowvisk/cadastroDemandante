import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { applicantClassModel } from 'src/app/shared/models/applicantClassModel';
import { cidadeClassModel, iapplicantRegModel } from 'src/app/shared/models/iapplicantRegModel';
import { ApiServiceService } from 'src/app/shared/services/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
  `]
})

export class HomeComponent implements OnInit {

  applicant = {
    telefones: { ddd: '', telefone: ''}, 
    cidadeDTO: { cdCidade: '' },
               } as iapplicantRegModel;
  public applicantsForm: FormGroup;
  public allApplicants: iapplicantRegModel;
  public allApplicantsGroup: applicantClassModel[] = []

  public APPLICANTS: Array<applicantClassModel> = new Array;
  public applicants: iapplicantRegModel[];
  // AllStates: istateModel[];
  // cdCidade: icidadeModel;

  allStates: Array<any> = [
    { name: 'Amazonas', cities: ['Manaus', 'Manacapuru', 'Parintins'] },
    { name: 'Ceará', cities: ['Fortaleza', 'Caucaia', 'Jericoacoara'] },
    { name: 'Rio de Janeiro', cities: ['Rio de Janeiro', 'Barra Mansa'] },
    { name: 'Paraná', cities: ['Curitiba', 'Foz do Iguaçu'] },
    { name: 'Minas', cities: ['Belo Horizonte', 'Juiz de Fora'] },
  ];

  cities: Array<cidadeClassModel>;
  changeState(state) {
    this.cities = this.allStates.find(con => con.name == state).cities;
  }

  constructor(public modalService: NgbModal,
    private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getAllApplicants();
    // this.getAllStates();
  }

  public openRegistrationFormModal(content) {
    this.modalService.open(content, { });
  }

  getAllApplicants() {
    this.apiService.getAllApplicants().subscribe((applicants: iapplicantRegModel[]) => {
      this.allApplicantsGroup = applicants;
    });
  }

  //Inserir este método quando houver endpoint disponível para consumir da API.

  // getAllStates() {
  //   this.apiService.getStates().subscribe((states: istateModel[]) => {
  //     this.allStates = states;
  //   });
  // }

  saveApplicants() {
      this.apiService.saveApplicants(this.applicant).subscribe((data) => {
        this.applicant.cdTipoDemandante = 2;
        this.applicant.usuario = "5";
        this.applicant.cdAtendimento = 463655;
        this.applicant.telefones.tipoTelefoneDemandante = 5;
        console.log("Salvando novo demandante")
        console.log(data)
        console.log(this.applicant)
        this.getAllApplicants();
        this.applicant = {
          telefones: { ddd: '', telefone: ''}, 
          cidadeDTO: { cdCidade: '' }
                     } as applicantClassModel;
      });
    }

    cleanForm(form: NgForm) {
      this.getAllApplicants();
      form.reset();
      this.applicant = {
        telefones: { ddd: '', telefone: ''}, 
        cidadeDTO: { cdCidade: '' }
                   } as applicantClassModel;
    }

}



