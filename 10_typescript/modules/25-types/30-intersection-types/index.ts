export enum Permission {
  READ,
  WRITE,
  DELETE,
}
export type User = { login: string };
type AdminPermission = { permission: Permission };
export type Admin = User & AdminPermission;
export default (user: User): Admin => ({
  ...user,
  permission: Permission.READ,
});
