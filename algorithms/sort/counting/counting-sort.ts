// Complexity: O(n)
export class Counting {

    private ticks = 0;

    sort(v: number[]): void {

        if (!v.length) {
            return;
        }

        const maxN = Math.max(...v);
        let minN = Math.min(...v);
        const countP = new Array(maxN + 1).fill(0);

        if (minN < 0) {
            minN *= -1;
        }
        const countN = new Array(minN + 1).fill(0);

        // Store the count of each value in count array
        for (let i = 0; i < v.length; i++) {
            const val = v[i];

            if (val < 0 && countN) {
                countN[val * -1] += 1;
            } else {
                countP[val] += 1;
            }

            this.ticks++;
        }

        // cumulate the negative count
        for (let i = minN - 1; i >= 0; i--) {
            countN[i] += countN[i + 1];
            this.ticks++;
        }

        // cumulate the positive count
        for (let i = 1; i <= maxN; i++) {
            countP[i] += countP[i - 1];
            this.ticks++;
        }

        // map the 0 count to the positive count
        for (let i = 0; i <= maxN; i++) {
            countP[i] += countN[0];
            this.ticks++;
        }

        const sorted = [];
        for (let i = 0; i < v.length; i++) {
            if (v[i] >= 0) {
                sorted[countP[v[i]] - 1] = v[i];
                countP[v[i]] -= 1;
            } else {
                sorted[countN[v[i] * -1] - 1] = v[i];
                countN[v[i] * -1] -= 1;
            }

            this.ticks++;
        }

        v.length = 0;
        v.push(...sorted);
        console.log('done after ticks: ' + this.ticks);
    }
}