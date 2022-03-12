const Color = ({ colors }) => {
  return (
    <main>
      {colors.map((color, index) => {
        const { rgb, weight, hex } = color;
        const newRgb = `rgb(${rgb.join(",")})`;

        const handleClick = (hex) => {
          navigator.clipboard.writeText(hex);
          alert("color copied");
        };

        return (
          <article
            className={index > colors.length / 2 ? "invert" : ""}
            key={index}
            style={{ backgroundColor: newRgb }}
          >
            <h1>{weight + "%"}</h1>
            <p>{"#" + hex}</p>
            <button onClick={() => handleClick(hex)}>copy</button>
          </article>
        );
      })}
    </main>
  );
};

export default Color;
