import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';

import { Script } from '../script.model';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  scripts = [
    {
      name: 'Script 1',
      id: 1
    },
    {
      name: 'Script 2',
      id: 2
    },
    {
      name: 'Script 3',
      id: 3
    },
    {
      name: 'Script 4',
      id: 4
    },
    {
      name: 'Script 5',
      id: 5
    },
  ];

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
