import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';

import { Script } from '../script.model';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

	scriptList: Script[];

  constructor(private storageService: DataStorageService) { }

  ngOnInit() {
	this.storageService.fetchScripts().subscribe(
		responseScripts => {
			this.scriptList = responseScripts;
			console.log('Scripts');
			console.log(this.scriptList);
		},
		error => {
			console.log(error);
		}
	);
  }

}
