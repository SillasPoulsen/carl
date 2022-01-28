function Hero({ theme }) {
  return (
    <div className="heroContainer">
      <h1 className={`font${theme}hero`}>Carl Phillip</h1>
      <p>
        Musikalsk Geni, du sten sikkert har mødt på enten Bakken, Friheden, Ved
        Siden af eller i Peter Madsens Hangar.
      </p>
    </div>
  );
}

export default Hero;
