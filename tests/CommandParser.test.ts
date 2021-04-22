import CommandParser from "../src/CommandParser";

test("can extract the modifier if any", () => {
  expect(CommandParser.getMod("!fd+2")).toBe(2);
  expect(CommandParser.getMod("!fd-2")).toBe(-2);
});

test("will return 0 if no modifier", () => {
  expect(CommandParser.getMod("!fd")).toBe(0);
});
