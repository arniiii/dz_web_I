interface IFlying {
  canFly: true;
}
export interface IBird extends IFlying {
  isLiving: true;
}
export interface IPlane extends IFlying {
  canCarryPeople: true;
}
export interface ISuperman extends IBird, IPlane {
  guessWho(value: string): string;
}
export const superMan: ISuperman = {
  canFly: true,
  isLiving: true,
  canCarryPeople: true,
  guessWho(value) {
    return `It's a ${value}${value.toLowerCase() === "superman" ? "!" : "?"}`;
  },
};
