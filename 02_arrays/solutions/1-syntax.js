export const getWeekends = (format = "long") =>
  format === "short" ? ["sat", "sun"] : ["saturday", "sunday"];
