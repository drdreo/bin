import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";
import { sortedArr, notSortedArr } from "../values.ts";
import { Bubble } from "./bubble-sort.ts";


const bubble = new Bubble();
type TestingValues = any[];

Deno.test('it should still be an empty array', () => {
    const values: TestingValues = [];
    bubble.sort(values)
    assertEquals(values, []);
});

Deno.test('it should sort the array', () => {
    const values: TestingValues = [...notSortedArr];
    bubble.sort(values)
    console.log(values);
    assertEquals(values, sortedArr);
});