// Complexity: Ο(n2) 
export class Insertion {

    private ticks = 0;

    sort(v: number[]): void {

        for (let i = 1; i < v.length; i++) {

            const cur = v[i];
            let j = i - 1;

            while (j >= 0 && cur < v[j]) {
                v[j + 1] = v[j]
                j--;
                this.ticks++;
            }
            v[j + 1] = cur;
        }

        console.log('done after ticks: ' + this.ticks);
    }
}