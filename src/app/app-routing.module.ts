import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MetrosComponent } from "./metros/metros.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "metros", component: MetrosComponent },
  { path: "dashboard", component: DashboardComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
