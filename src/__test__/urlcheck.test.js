import { validUrl } from "../src/client/js/urlcheck"

test('Testing the urlValidation() function', () => {
    expect(validUrl).toBeDefined();
});

test('Testing urlValidation', () => {
    expect(urlValidation('https://www.udacity.com/')).toBe(true);
});

test('Testing urlValidation', () => {
    expect(urlValidation('https//www.udacity.com/')).toBe(false);
});