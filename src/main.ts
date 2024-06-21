import { HttpClient, provideHttpClient } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";
import { HttpLoaderFactory } from "./i18n";

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    )
  ],
  ...appConfig.providers
}).catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
});
