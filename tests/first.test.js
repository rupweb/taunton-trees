import { returnString } from '../js/script.js';

describe('String tests', () => {
    test("Check string", () => {
        // Given string
        var expected = "hello world"

        // When get string
        var actual = returnString();

        // Then expect
        expect(actual).toBe(expected);
    });
});