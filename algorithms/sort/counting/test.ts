import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";

import {
    beforeEach,
    describe,
    it,
} from "https://deno.land/std@0.152.0/testing/bdd.ts";

import { sortedArr, notSortedArr, equalArr, negativeArrSorted, negativeArr, reverseSortedArr } from "../utils.ts";
import { Counting } from "./counting-sort.ts";

type TestingValues = any[];


describe("CountingSort", () => {

    let counting: Counting;

    beforeEach(()=> {
        counting = new Counting();
    });

    it('it should still be an empty array', () => {
        const values: TestingValues = [];

        counting.sort(values)
        assertEquals(values, []);
    });

    it('it should sort the array', () => {
        const values: TestingValues = [...notSortedArr];
        counting.sort(values)
        assertEquals(values, sortedArr);
    });

    it('it should handle equal values', () => {
        const values: TestingValues = [...equalArr];
        
        counting.sort(values)
        assertEquals(values, equalArr);
    });

    it('it should handle negative values', () => {
        const values: TestingValues = [...negativeArr];
        
        counting.sort(values)
        assertEquals(values, negativeArrSorted);
    });

    it('it should handle sorted arrays', () => {
        const values: TestingValues = [...sortedArr];
        
        counting.sort(values)
        assertEquals(values, sortedArr);
    });

    it('it should handle reverse sorted arrays', () => {
        const values: TestingValues = [...reverseSortedArr];
        
        counting.sort(values)
        assertEquals(values, sortedArr);
    });

});