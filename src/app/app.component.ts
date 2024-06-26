import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
  selector: "language-root",
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss"
})
export class AppComponent {
  title: string = "";

  constructor(private _translate: TranslateService) {
    this._translate.setDefaultLang("en");
  }

  switchLanguage(language: string) {
    this._translate.use(language);
  }
}
