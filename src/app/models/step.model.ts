import { Theme } from "./theme.model";
import { Choice } from "./choice.model";

export class Step {
    id!: number;
    death!: string;
    safe!: string;
    additional!: string;
    story!: string;
    hour!: Date;
    theme!: Theme;
    choices!: Choice[];
}