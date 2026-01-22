export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      Template Boundary
      {children}
    </div>
  );
}
