import { errorMessage } from './../../../constant/constant';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

  @Input() f!: any;
  @Input() arr!: Array<string>;
  @Input() field!: string;

  public errorField: any

  public errorMessage = errorMessage

  constructor() { }

  ngOnInit(): void {
    this.errorField = this.f[this.field]
  }

}
