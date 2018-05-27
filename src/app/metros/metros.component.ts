import { Component, OnInit } from "@angular/core";
import { Metro } from "../metro";
import { MetroService } from "../metro.service";

@Component({
  selector: "app-metros",
  templateUrl: "./metros.component.html",
  styleUrls: ["./metros.component.css"]
})
export class MetrosComponent implements OnInit {
  metros: Metro[];

  constructor(private metroService: MetroService) {}

  getMetros(): void {
    this.metroService.getMetros().subscribe(metros => (this.metros = metros));
  }

  ngOnInit() {
    this.getMetros();
  }
}
