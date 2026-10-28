export default function createAccessChecker<Role extends string, Resource>(
  permissions: Record<Role, Resource[]>
): (role: Role, resource: Resource) => boolean {
  return (role, resource) => permissions[role].includes(resource);
}
