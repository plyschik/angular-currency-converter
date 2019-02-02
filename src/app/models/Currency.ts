import { Country } from './Country';
import { Self } from '@angular/core';

export class Currency {
    code: string;
    name: string;
    country: Country;

    constructor(code?: string, name?: string, country?: Country) {
        this.code = code;
        this.name = name;
        this.country = country;
    }

    getCode(): string {
        return this.code;
    }

    setCode(code: string): Currency {
        this.code = code;

        return this;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): Currency {
        this.name = name;

        return this;
    }

    getCountry(): Country {
        return this.country;
    }

    setCountry(country: Country): Currency {
        this.country = country;

        return this;
    }
}