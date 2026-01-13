export default function NavLink({ href, children, active }) {
  return <a href={href} className={active ? 'active' : ''}>{children}</a>;
}
