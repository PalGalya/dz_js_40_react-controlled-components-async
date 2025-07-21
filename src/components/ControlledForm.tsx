import { useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = `Ім'я: ${name}, Email: ${email}`;
    setResult(data);
    console.log("Controlled form:", { name, email });
  };

  return (
    <div className="form-container controlled-form">
      <h3>Контрольована форма (useState)</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Ім'я: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введіть ім'я"
          />
        </div>
        <div className="form-field">
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введіть email"
          />
        </div>
        <button type="submit">Відправити</button>
      </form>
      {result && <p className="result success">{result}</p>}
    </div>
  );
};

export default ControlledForm;
