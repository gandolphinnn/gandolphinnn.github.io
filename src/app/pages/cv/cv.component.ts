import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
	selector: 'app-cv',
	standalone: true,
	imports: [TranslatePipe],
	templateUrl: './cv.component.html',
	styleUrl: './cv.component.css'
})
export class CvComponent {

}
