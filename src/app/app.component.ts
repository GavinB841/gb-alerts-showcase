import { Component } from '@angular/core';
import { GbAlertsService } from '@gavinb841/gb-alerts';


@Component({
  selector: 'app-root',
  template: `
    <h2>Simple Notifications</h2>
    <div class="simple-notifications">
      <button class="success-angle" (click)="createSuccessAlert()">Create success alert</button>
      <button class="danger-shadow" (click)="createDangerAlert()">Create danger alert</button>
      <button class="warning-gradient" (click)="createWarningAlert()">Create warning alert</button>
      <button class="info-pulse" (click)="createInfoAlert()">Create info alert</button>
      <gb-alerts></gb-alerts>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private gbAlertsService: GbAlertsService) {}

  public createSuccessAlert(): void {
    this.gbAlertsService.createSuccessAlert('Successfully Created');
  }

  public createDangerAlert(): void {
    this.gbAlertsService.createDangerAlert('Danger Cannot Delete');
  }

  public createWarningAlert(): void {
    this.gbAlertsService.createWarningAlert('Warning Do Not Refresh');
  }

  public createInfoAlert(): void {
    this.gbAlertsService.createInfoAlert('Include This Field');
  }
}
