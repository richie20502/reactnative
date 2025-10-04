const BasicTypes = () => {
  const name: string = "Ricardo";
  const age: number = 30;
  const isActive: boolean = true;
  const powers: string[] = ["Velocidad", "Volar", "Fuerza"];

  return (
    <>
      <h2>Tipos básicos</h2>
      <p>Nombre: {name}</p>
      <p>Edad: {age}</p>
      <p>Activo: {isActive ? "Sí" : "No"}</p>
      <p>Poderes:</p>
      <ul>
        {powers.map((power) => (
          <li key={power}>{power}</li>
        ))}
      </ul>
    </>
  );
};

export default BasicTypes;
