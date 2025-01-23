import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const buttonName = "Click Me!";
  const [alertVisible, setAlertVisibility] = useState(false)

  const onClick = () => setAlertVisibility(false);
  return (
    <div>
      {alertVisible && <Alert onClick= {onClick}></Alert>}
      <Button onClick={() => setAlertVisibility(true)}>{buttonName}</Button>
    </div>
  );
}

export default App;
