import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";

import {
    beforeEach,
    describe,
    it,
} from "https://deno.land/std@0.152.0/testing/bdd.ts";

import { sortedArr, notSortedArr, equalArr, negativeArrSorted, negativeArr, reverseSortedArr } from "../utils.ts";
import { Min } from "./min-sort.ts";

type TestingValues = any[];


describe("MinSort", () => {

    let min: Min;

    beforeEach(()=> {
        min = new Min();
    });

    it('it should still be an empty array', () => {
        const values: TestingValues = [];

        min.sort(values)
        assertEquals(values, []);
    });

    it('it should sort the array', () => {
        const values: TestingValues = [...notSortedArr];
        min.sort(values)
        assertEquals(values, sortedArr);
    });

    it('it should handle equal values', () => {
        const values: TestingValues = [...equalArr];
        
        min.sort(values)
        assertEquals(values, equalArr);
    });

    it('it should handle negative values', () => {
        const values: TestingValues = [...negativeArr];
        
        min.sort(values)
        assertEquals(values, negativeArrSorted);
    });

    it('it should handle sorted arrays', () => {
        const values: TestingValues = [...sortedArr];
        
        min.sort(values)
        assertEquals(values, sortedArr);
    });

    it('it should handle reverse sorted arrays', () => {
        const values: TestingValues = [...reverseSortedArr];
        
        min.sort(values)
        assertEquals(values, sortedArr);
    });

});