export default function Footer({ footer, go }) {
  return (
    <footer>
      <span>© {new Date().getFullYear()} El Mokhtar Diouani</span>
      <span>{footer}</span>
      <button onClick={() => go("top")}>↑</button>
    </footer>
  );
}
