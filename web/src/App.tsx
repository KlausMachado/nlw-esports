//definindo a tipagem das propriedades que o componente Button devem seguir
interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps /* definimos que as props devem vir de ButtonProps*/) {
  return <button>{props.title}</button>;
}

function App() {
  return (
    <>
      <h1>Hello Word</h1>
      <Button title="send 1" />
      <Button title="send 2" />
      <Button title="send 3" />
    </>
  );
}

export default App;
