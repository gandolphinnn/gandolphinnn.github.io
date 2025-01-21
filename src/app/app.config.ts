import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';

import { MissingTranslationHandler, provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './app.routes';

const httpLoaderFactory = (http: HttpClient) => new TranslateHttpLoader(http, './i18n/', '.json');

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideHttpClient(),
		provideTranslateService({
			loader: {
				provide: TranslateLoader,
				useFactory: httpLoaderFactory,
				deps: [HttpClient],
			},
			missingTranslationHandler: {
				provide: MissingTranslationHandler,
				useValue: {
					handle: (key: string) => key,
				},
			},
		})
	],
};
