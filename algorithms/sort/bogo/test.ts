import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";
import {
    beforeEach,
    describe,
    it,
} from "https://deno.land/std@0.152.0/testing/bdd.ts";
import { sortedArr, notSortedArr, equalArr, negativeArrSorted, negativeArr, reverseSortedArr } from "../utils.ts";
import { Bogo } from "./bogo-sort.ts";

type TestingValues = number[];

/*
    These likely NEVER complete
*/

describe("BogoSort", () => {

    let bogo: Bogo;

    beforeEach(() => {
        bogo = new Bogo();
    });

    it('it should still be an empty array', () => {
        const values: TestingValues = [];

        bogo.sort(values)
        assertEquals(values, []);
    });

    // it('it should sort the array', () => {
    //     const values: TestingValues = [...notSortedArr];

    //     bogo.sort(values)
    //     assertEquals(values, sortedArr);
    // });

    // it('it should handle equal values', () => {
    //     const values: TestingValues = [...equalArr];

    //     bogo.sort(values)
    //     assertEquals(values, equalArr);
    // });

    // it('it should handle negative values', () => {
    //     const values: TestingValues = [...negativeArr];

    //     bogo.sort(values)
    //     assertEquals(values, negativeArrSorted);
    // });

    // it('it should handle sorted arrays', () => {
    //     const values: TestingValues = [...sortedArr];

    //     bogo.sort(values)
    //     assertEquals(values, sortedArr);
    // });

    // it('it should handle reverse sorted arrays', () => {
    //     const values: TestingValues = [...reverseSortedArr];

    //     bogo.sort(values)
    //     assertEquals(values, sortedArr);
    // });

});