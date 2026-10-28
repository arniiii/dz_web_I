type Turtle = "turtle" | null;
export default () => {
  const state: Turtle[] = ["turtle", null, null, null, null];
  const makeTurn = (direction: "left" | "right"): void => {
    const current = state.indexOf("turtle");
    const target = current + (direction === "right" ? 1 : -1);
    if (target < 0 || target >= state.length)
      throw new Error("Outside the field");
    state[current] = null;
    state[target] = "turtle";
  };
  return { state, makeTurn };
};
