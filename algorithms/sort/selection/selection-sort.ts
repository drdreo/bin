// Complexity: Ο(n2) 
export class Selection {

    private ticks = 0;
    private swaps = 0;

    sort(v: number[]): void {

        for (let i = 0; i < v.length - 1; i++) {
            let minIdx = i;
            for (let j = i + 1; j < v.length; j++) {
                if (v[j] < v[minIdx]) {
                    minIdx = j;
                }

                this.ticks++;
            }
            this.ticks++;
            this.swap(v, minIdx, i)
        }

        console.log('done after ticks: ' + this.ticks);
        console.log('done after swaps: ' + this.swaps);
    }

    private swap(v: number[], v1: number, v2: number): void {
        const tmp = v[v1];
        v[v1] = v[v2];
        v[v2] = tmp;
        this.swaps++;
    }
}