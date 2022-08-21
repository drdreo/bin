
// Complexity: Ο(n2) 
export class Bubble {

    private ticks = 0;
    private swaps = 0;

    sort(v: number[]): void {

        for (let i = 0; i < v.length; i++) {
            for (let j = 0; j < v.length - i - 1; j++) {

                if (v[j] > v[j + 1]) {
                    this.swap(v, j, j + 1);
                }

                this.ticks += 1;
            }
            this.ticks++;
        }

        console.log('done after ticks: ' + this.ticks);
        console.log('done after swaps: ' + this.swaps);
    }

    /* 
    Alternative Implementation Found
    Sorts it from the front
    */

    // async sort(v: number[]): Promise<void> {
    //     for (let i = 0; i < v.length; i++) {
    //         for (let j = i + 1; j < v.length; j++) {
    //             if (v[j] < v[i]) {
    //                 this.swap(v, i, j);
    //             }

    //             this.ticks += 1;
    //             // await delay(50);
    //             // console.log(v);
    //         }
    //     }

    //     console.log('done after ticks: ' + this.ticks);
    //     console.log('done after swaps: ' + this.swaps);
    // }

    private swap(v: number[], v1: number, v2: number): void {
        const tmp = v[v1];
        v[v1] = v[v2];
        v[v2] = tmp;
        this.swaps += 1;
    }
}