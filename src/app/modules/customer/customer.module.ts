import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomerCardComponent } from './components/customer-card/customer-card.component';

@NgModule({
  declarations: [CustomerCardComponent],
  imports: [CommonModule],
  exports: [CustomerCardComponent],
})
export class CustomerModule {}
