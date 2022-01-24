function Navbar({ themeToggler }) {
  return (
    <nav>
      <div>
        <p className="Logo">Carl Phillip</p>
        <button onClick={themeToggler}>🍭</button>
      </div>
    </nav>
  );
}

export default Navbar;
