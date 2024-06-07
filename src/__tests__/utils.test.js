// Your tests here

// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true if the word is same when reverse ", () => {
    expect(isPalindrome("madam")).toBe(true);
  });
  it("returns false if the word is not the same when reverse", () => {
    expect(isPalindrome("love")).toBe(false);
  });
  it("return true for words that are a combination of uppercase and lowercase letters", () => {
    expect(isPalindrome("RoTaTOr")).toBe(true);
  });
  it("throw an error if input has any non-alphabetic characters and non string input", () => {
    expect(() => isPalindrome("say hi")).toThrow();
    expect(() => isPalindrome("")).toThrow();
    expect(() => isPalindrome("92352903")).toThrow();
    expect(() => isPalindrome(".,@-=';#$%")).toThrow();
  });
});
