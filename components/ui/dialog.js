export function Dialog({ children, open, onOpenChange }) {
  return open ? <div className="dialog">{children}</div> : null;
}

export function DialogContent({ children }) {
  return <div className="dialog-content">{children}</div>;
}

export function DialogHeader({ children }) {
  return <div className="dialog-header">{children}</div>;
}

export function DialogFooter({ children }) {
  return <div className="dialog-footer">{children}</div>;
}
