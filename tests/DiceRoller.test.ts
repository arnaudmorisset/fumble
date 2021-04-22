import DiceRoller from "../src/DiceRoller";

const randMock = jest.fn(() => 1);
Math.random = randMock;

test("will return a valid response without modifier", () => {
  expect(DiceRoller.roll()).toBe(
    "```markdown\n# 4 Great\nDetails: [++++] 0```",
  );
});

test("will return a valid response with modifier", () => {
  expect(DiceRoller.roll(2)).toBe(
    "```markdown\n# 6 Fantastic\nDetails: [++++] 2```",
  );
});
