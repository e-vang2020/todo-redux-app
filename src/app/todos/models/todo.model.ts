export class Todo {

    public id: number;
    public task: string;
    public isComplete: boolean;

    constructor( task: string) {
        this.id = Math.random();
        this.task = task;
        this.isComplete = false;
    }
}