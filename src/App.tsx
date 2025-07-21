import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import AsyncDataComponent from "./components/AsyncDataComponent";

function App() {
  return (
    <div className="app-container">
      <h1>🏠 Домашнє завдання: React форми</h1>

      <ControlledForm />
      <UncontrolledForm />
      <AsyncDataComponent />
    </div>
  );
}

export default App;
