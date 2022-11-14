import { Person } from './person'


export class Player implements Person {
    name: string;
    age: number;
    highScore: number;

    formateName() {
        return this.name.toUpperCase();
    }
}