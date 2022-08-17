import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";

import {
    beforeEach,
    describe,
    it,
} from "https://deno.land/std@0.152.0/testing/bdd.ts";

import { sortedArr, notSortedArr, equalArr, negativeArrSorted, negativeArr, reverseSortedArr } from "../utils.ts";
import { Insertion } from "./insertion-sort.ts";

type TestingValues = any[];


describe("InsertionSort", () => {

    let insertion: Insertion;

    beforeEach(()=> {
        insertion = new Insertion();
    });

    it('it should still be an empty array', () => {
        const values: TestingValues = [];

        insertion.sort(values)
        assertEquals(values, []);
    });

    it('it should sort the array', () => {
        const values: TestingValues = [...notSortedArr];

        insertion.sort(values)
        assertEquals(values, sortedArr);
    });

    it('it should handle equal values', () => {
        const values: TestingValues = [...equalArr];
        
        insertion.sort(values)
        assertEquals(values, equalArr);
    });

    it('it should handle negative values', () => {
        const values: TestingValues = [...negativeArr];
        
        insertion.sort(values)
        assertEquals(values, negativeArrSorted);
    });

    it('it should handle sorted arrays', () => {
        const values: TestingValues = [...sortedArr];
        
        insertion.sort(values)
        assertEquals(values, sortedArr);
    });

    it('it should handle reverse sorted arrays', () => {
        const values: TestingValues = [...reverseSortedArr];
        
        insertion.sort(values)
        assertEquals(values, sortedArr);
    });

});