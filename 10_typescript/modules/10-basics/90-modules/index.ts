export namespace Company {
  export const isEmployeeEmail = (email: string, domain: string): boolean =>
    email.split("@")[1] === domain;
}
export default (user: { email: string } | null): boolean =>
  user !== null && Company.isEmployeeEmail(user.email, "hexlet.io");
