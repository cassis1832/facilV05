import { Component, EventEmitter, Input, Output, Type } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirma-exclusao',
  templateUrl: './confirma-exclusao.component.html',
  styleUrls: ['./confirma-exclusao.component.css']
})
export class ConfirmaExclusaoComponent {

  @Input() public objetoDeletar!: string[];

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  clickBotaoOk() {
    this.activeModal.close("Ok");
  }
}

