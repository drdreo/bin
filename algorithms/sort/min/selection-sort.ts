// Complexity: Ο(n2) 
export class Selection {

    private ticks = 0;

    sort(v: number[]): void {
        const sorted = [];

        let tmp = [ ...v];
        const length = tmp.length;
        for (let i = 0; i < length; i++) {
            sorted.push(this.spliceMin(tmp));
            this.ticks++;
        }

        v = sorted;
        console.log(sorted);
        
        console.log('done after ticks: ' + this.ticks);
    }


    private spliceMin(v: number[]): number {
        const min = Math.min(...v);
        const idx = v.indexOf(min);
        v.splice(idx, 1); 
        return min;
    }
}