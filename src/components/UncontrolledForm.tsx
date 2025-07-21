import { useRef, useState } from "react";

const UncontrolledForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const data = `Ім'я: ${name}, Email: ${email}`;
    setResult(data);
    console.log("Uncontrolled form:", { name, email });
  };

  return (
    <div className="form-container uncontrolled-form">
      <h3>Неконтрольована форма (useRef)</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Ім'я: </label>
          <input type="text" ref={nameRef} placeholder="Введіть ім'я" />
        </div>
        <div className="form-field">
          <label>Email: </label>
          <input type="email" ref={emailRef} placeholder="Введіть email" />
        </div>
        <button type="submit">Відправити</button>
      </form>
      {result && <p className="result info">{result}</p>}
    </div>
  );
};

export default UncontrolledForm;
