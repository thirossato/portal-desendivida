import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-renegociacao',
  templateUrl: './renegociacao.component.html',
  styleUrls: ['./renegociacao.component.scss']
})
export class RenegociacaoComponent implements OnInit {

  debtsForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.debtsForm = this.formBuilder.group({
      company: '',
      value: '',
      monthlyPayment: '',
      firstPayment: '',
      firstPaymentDate: null
    });
  }

  onSubmit(form) {
    console.log(form);
    alert('Você será informado quando tivermos uma proposta');
  }

}
