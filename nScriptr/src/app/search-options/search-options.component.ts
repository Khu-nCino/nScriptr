import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-search-options',
  templateUrl: './search-options.component.html',
  styleUrls: ['./search-options.component.css']
})
export class SearchOptionsComponent implements OnInit {

	@ViewChild('f', {static: false}) searchForm: NgForm;
	keyword: string;
	package: string;
	object: string;
	namingConvention: string;

	color:string;
	
	objectList = ['Loan', 'Product Package', 'Entities'];
	packageList = ['LLC_BI', 'nFORCE', 'nFUSE'];

	constructor(private storageService: DataStorageService) { }

	ngOnInit(): void {
		chrome.storage.sync.get('color', ({ color }) => {
			this.color = color;
			}
		);
  }

	search(form: NgForm): void {
		// Do the search
		// set off some event that tells the parent to display the resultsPane component
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



