export function Select({ children, ...props }) {
  return <select className="select" {...props}>{children}</select>;
}

export function SelectOption({ value, children }) {
  return <option value={value}>{children}</option>;
}
