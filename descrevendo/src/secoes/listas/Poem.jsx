const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
    "mais",
    "mais",
  ],
};

export default function Poem() {
  const tam = poem.lines.length - 1;
  return (
    <article>
      {poem.lines.map((line, index) => (
        <>
          <p key={index}>{line}</p>
          {index != tam && <hr />}
        </>
      ))}
    </article>
  );
}
