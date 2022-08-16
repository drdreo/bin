
// Complexity: Ο(n2) 

export class Bubble {

    sort(m: number[]): void {
        
        for (let i = 0; i < m.length; i++) {
            for (let j = 0; j < m.length - 1 - i; j++) {

                if (m[j] > m[i]) {
                    const tmp = m[i];
                    m[i] = m[j];
                    m[j] = tmp;
                }
            }
        }
        
    }
}