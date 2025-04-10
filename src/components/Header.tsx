export default function Header() {
  return (
    <header className="h-16 flex justify-between items-center">
      <nav>
        <ul className="flex gap-4">
          <li>Mulheres</li>
          <li>Homens</li>
          <li>Crianças</li>
          <li>Novidades</li>
        </ul>
      </nav>
      <div className="absolute left-1/2 transform -translate-x-1/2 font-bold text-lg">
        TULOS
      </div>
      <div className="flex gap-4">
        <div>
          <i className="bi bi-search"></i>
        </div>
        <div>
          <i className="bi bi-bag"></i>
        </div>
        <div>
          <span>Login</span>
        </div>
      </div>
    </header>
  );
}
