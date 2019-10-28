export class Script {
	constructor(
		public id: number,
		public name: string,
		public description: string,
		public object: string[],
		public nCinoPackage: string[],
		public variables: Map<String, number>,
		public script: string
	) {}
 }