import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Script } from './script.model';
import { ScriptService } from './script.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

	scriptUrl = 'assets/Scripts';

	constructor(private http: HttpClient, private scriptService: ScriptService) {}

	private fetchScript(scriptName: string) {
		return this.http.get<Script>(this.scriptUrl + '/' + scriptName);
	}

	fetchScripts() {
		var scriptPromises: Observable<Script>[] = [];

		for (var i=1; i <= 3; i++) {
			scriptPromises.push(this.fetchScript('script' + i + '.json'));
		}

		return forkJoin(scriptPromises).pipe(
			tap(scripts => {
				this.scriptService.setScripts(scripts);
		}));
   }

}
