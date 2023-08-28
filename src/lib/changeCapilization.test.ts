import camelCaseToTitleCase from "./camelCaseToTitleCase";
import { describe, expect, test } from "vitest";

describe("Test: camelCaseToTitleCase()", () => {
  test("open should capitalize", () => {
    const str = "khulnaSoft";
    const result = camelCaseToTitleCase(str);

    expect(result).toBe("Khulna Soft");
  });
});
