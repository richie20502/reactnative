interface Person {
  age: number;
  firstName: string;
  lastName: string;
  address: Address;
}

interface Address {
  country: string;
  houseNo: string;
  street?: string;
}

export const ObjectLiterals = () => {
  const person: Person = {
    firstName: "Ricardo",
    lastName: "Lugo",
    age: 30,
    address: {
      country: "Mexico",
      houseNo: "123",
    },
  };

  return (
    <>
      <h2>Object Literals</h2>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
