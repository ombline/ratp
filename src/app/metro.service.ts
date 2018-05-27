import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Metro } from "./metro";
import { METROS } from "./mock-metro";

@Injectable({
  providedIn: "root"
})
export class MetroService {
  constructor() {}
  getMetros(): Observable<Metro[]> {
    return of(METROS);
  }
}
