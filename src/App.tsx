import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>This is an alert</Alert>
      )}
      <Button color="danger" onClick={() => setShowAlert(true)}>
        My Button
      </Button>
    </div>
  );
}
export default App;
