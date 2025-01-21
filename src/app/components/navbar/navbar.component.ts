import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [RouterLink, RouterLinkActive, TranslatePipe],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.css'
})
export class NavbarComponent {
	public get inactiveLang() {
		return this.translate.currentLang === 'en' ? 'it' : 'en';
	}

	public get flagPath() {
		return `assets/flag-${this.inactiveLang}.png`;
	}

	constructor(
		public translate: TranslateService
	) {
	}

	public swapLang() {
		this.translate.use(this.inactiveLang);
	}
}
