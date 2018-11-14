import {readText, countWords} from "./app";



test("Reading text file", () => {
    expect(readText('Input.txt')).toBe('time to test the program.');
});



