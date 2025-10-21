import { Component, inject } from '@angular/core';
import { ProductionControl } from '../production-control/production-control';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { DialogSelect } from '../dialog-select/dialog-select';
import { Dialog } from '@angular/cdk/dialog';
import { ProductionOrder } from '../../../../common/ProductionOrder'///
import productionOrders from '../../assets/files/production-orders.json'
import { OrderColors_e, ProductionStatus_e, ProductionStatusColor_e } from '../../../../common/enums/enum';
import { ProductionStatus} from '../../../../common/ProductionStatus'
import stopTypes from '../../assets/files/stop-types.json'

@Component({
  selector: 'app-terminal',
  imports: [ProductionControl, MatDialogModule],
  templateUrl: './terminal.html',
  styleUrl: './terminal.scss'
})
export class Terminal {

  readonly dialog: MatDialog = inject(MatDialog)

  productionOrders: ProductionOrder[] = productionOrders as ProductionOrder[];
  stopTypes: any[] = stopTypes
  productionOrder: ProductionOrder = new ProductionOrder()
  productionStatus: ProductionStatus = new ProductionStatus();

  OrderColors_e: typeof OrderColors_e = OrderColors_e;
  ProductionStatus_e: typeof ProductionStatus_e = ProductionStatus_e;

  async setProductionOrder(): Promise<void> {
    const dialogData: Object = {
      dialogTitle: 'Selecionar ordem de produção',
      optionsList: this.productionOrders
    }


    console.log("teste evento de click")
    const newProductionOrder: ProductionOrder = await this.openSelectDialog(dialogData);
    console.log('ttttttttt', newProductionOrder)
    if(!newProductionOrder) return;

    this.productionOrder = newProductionOrder;
    this.productionStatus = new ProductionStatus(ProductionStatus_e.InProduction, ProductionStatusColor_e.InProduction);
  }

  async setStopType() {
    const dialogData: Object = {
      dialogTitle: 'Selecionar o motivo da parada',
      optionsList: this.stopTypes
    }

    const stopType = await this.openSelectDialog(dialogData)
    if(!stopType) return;

    this.productionStatus = {
      color: ProductionStatusColor_e.Stop,
      status: ProductionStatus_e[stopType.value as keyof typeof ProductionStatus_e]
    }
  }

  openSelectDialog(dialogData: any): Promise<ProductionOrder> {
    const dialogRef: MatDialogRef<DialogSelect, any> = this.dialog.open(DialogSelect, {
      width: '950px',
      panelClass: 'custom-dialog',
      data: dialogData
    });

    return new Promise((resolve) => {
      dialogRef.afterClosed().subscribe((result) => {
        resolve(result);
      })
    })

    
  }
}
