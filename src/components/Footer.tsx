export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="mt-8 pt-6 border-t border-[#1e1e24] text-center">
          <p className="text-xs text-[#D1D5DB] font-mono">
            © {year} Hiten Nath — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
