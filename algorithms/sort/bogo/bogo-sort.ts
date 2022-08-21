import { randomNumber } from "https://deno.land/x/random_number@2.0.0/mod.ts";
import { isSorted } from "../utils.ts";

// Complexity: O((n+1)!)
export class Bogo {

    private ticks = 0;

    sort(v: number[]): void {

        do {
            this.shuffle(v);
            this.ticks += 1;
        } while (!isSorted(v));

        console.log('done after ticks: ' + this.ticks);
    }

    private shuffle(arr: number[]): void {
        let currentIndex = arr.length;
        let randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
            this.ticks++;
        }
    }
}