// This layout overrides the parent /admin/layout.tsx
// The login page doesn't need authentication or the admin UI
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
