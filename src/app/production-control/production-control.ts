import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common'
import { ProductionStatus } from '../../../../common/ProductionStatus';
import { ProductionStatus_e, ProductionStatusColor_e } from '../../../../common/enums/enum';

@Component({
  selector: 'app-production-control',
  imports: [],
  templateUrl: './production-control.html',
  styleUrl: './production-control.scss'
})
export class ProductionControl {
  @Input() title: string = 'Não definido';

  @Input() icon: string | undefined;
  @Input() productionOrderQuantity: number | any;
  @Input() productionOrderStatus: ProductionStatus | any;
  @Input() productionOrderKey: string | any;

  value: number = 0;
  valuePercentage: number = 0;
  ProductionStatus_e: typeof ProductionStatus_e = ProductionStatus_e
  ProductionStatusColor_e: typeof ProductionStatusColor_e = ProductionStatusColor_e

  getChartColor(isRemainingArea: boolean = false) {
    if(this.value === 0 || !this.productionOrderKey || (isRemainingArea && this.checkIfHasRemaining()))
    return 'var(--color-dark-blue-800)';

    return (this.title === 'Produzido' ? 'var(--color-green)' : 'var(--color-red)')
  }

  checkIfHasRemaining() {
    const remaining: number = this.productionOrderQuantity - this.value;
    return (remaining >= 0 && remaining < this.productionOrderQuantity);
  }

  changePercentageValue(isIncrease: boolean = true): void {
    this.value = this.getValue(isIncrease);
    this.valuePercentage = Math.round((this.value / this.productionOrderQuantity) * 100);
  }

  getValue(isIncrease: boolean): number {
    if(isIncrease) {
      return (this.value >= this.productionOrderQuantity) ? this.value : ++this.value;
    } else {
      return (this.value === 0) ? this.value : --this.value
    }
  }
}
