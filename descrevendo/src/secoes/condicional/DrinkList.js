function Drink({ name }) {
  let planta = {};
  if (name == "tea") {
    planta.parte = "folha";
    planta.teor = "15–70 mg/xícara";
    planta.idade = "4.000+ anos";
  } else {
    planta.parte = "feijão";
    planta.teor = "80–185 mg/xícara";
    planta.idade = "1.000+ anos";
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Parte da planta</dt>
        <dd>{planta.parte}</dd>
        <dt>Teor de cafeína</dt>
        <dd>{planta.teor}</dd>
        <dt>Idade</dt>
        <dd>{planta.idade}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
