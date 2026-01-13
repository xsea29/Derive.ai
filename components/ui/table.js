export function Table({ children }) {
  return <table className="table">{children}</table>;
}

export function TableHeader({ children }) {
  return <thead>{children}</thead>;
}

export function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

export function TableRow({ children }) {
  return <tr>{children}</tr>;
}

export function TableCell({ children, header = false }) {
  const Tag = header ? 'th' : 'td';
  return <Tag>{children}</Tag>;
}
