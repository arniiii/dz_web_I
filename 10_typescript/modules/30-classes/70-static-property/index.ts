export default class UserResponse {
  constructor(public user: string) {}
  static fromArray(users: string[]): UserResponse[] {
    return users.map((user) => new UserResponse(user));
  }
}
