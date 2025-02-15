import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <HeaderWithButton />
      <Header title="Parm Is here"></Header>
      <Header title="Parm is Went"></Header>
    </>
  );
}

function HeaderWithButton() {
  const [title, setTitle] = useState("Parm");
  function updateTitle() {
    setTitle(Math.random());
  }
  return (
    <>
      <button onClick={updateTitle}>click me to chnage the tittle</button>
      <Header title={title}></Header>
    </>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}
export default App;
