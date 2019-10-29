import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


import { Script } from './script.model';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {

	private scripts: Script[] = [];
	scriptsChanged = new Subject<Script[]>();

  constructor() { }

  setScripts(scripts: Script[]) {
	this.scripts = scripts;
	this.scriptsChanged.next(this.scripts.slice());
  }

	getScript(index: number) {
		return this.scripts[index];
	}

	getScripts() {
		return this.scripts.slice();
	}


}
