export function Alert({ children, type = 'info' }) {
  return <div className={`alert alert-${type}`}>{children}</div>;
}
