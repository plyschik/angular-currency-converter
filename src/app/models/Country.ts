export class Country {
  code: string;
  name: string;
  
  constructor(code?: string, name?: string) {
    this.code = code;
    this.name = name;
  }
  
  getCode(): string {
    return this.code;
  }
  
  setCode(code: string): Country {
    this.code = code;
    
    return this;
  }
  
  getName(): string {
    return this.name;
  }
  
  setName(name: string): Country {
    this.name = name;
    
    return this;
  }
}