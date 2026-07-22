import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CveData } from "./cve-data/cve-data";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CveData],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hackybara-api');
}
