type Form = {
  age: { value: number; validator: (value: number) => boolean };
  name: { value: string; validator: (value: string) => boolean };
};
const form: Form = {
  age: { value: 17, validator: (value) => value >= 18 },
  name: { value: "Tabriz", validator: (value) => value.length > 0 },
};
export default form;
