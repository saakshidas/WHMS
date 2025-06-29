import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [
    MatToolbarModule,
    MatButtonModule,
    // Add more Material modules here as needed
  ]
})
export class MaterialModule {}
