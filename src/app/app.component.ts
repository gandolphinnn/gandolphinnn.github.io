import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, NavbarComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	constructor(
		private translate: TranslateService
	) {
		this.translate.addLangs(['en', 'it']);
		this.translate.setDefaultLang('en');
		this.translate.use('en');
	}
}
