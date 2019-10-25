import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'nScriptr';
	color: string;

	ngOnInit(): void {
		chrome.storage.sync.get('color', ({ color }) => {
			this.color = color;
			}
		);
	}

	public colorize() {
		chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
			chrome.tabs.executeScript(
				tabs[0].id,
				{ code: 'document.body.style.backgroundColor = "' + this.color + '";' }
			);
		});
	}

	public updateColor(color: string) {
		chrome.storage.sync.set({ color});
	}
}
