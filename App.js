function Image() {
  return (
    <img
      src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4"
      alt="Blue mountains from above by Brady Bellini"
      height={200}
    />
  );
}

function Gallery() {
  return (
    <section>
      <h1>Many blue mountains</h1>
      <Image />
      <Image />
      <Image />
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Gallery />);