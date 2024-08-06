import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import emojipedia from "./components/emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((emojipedia) => (
          <Card
            key={emojipedia.id}
            emoji={emojipedia.emoji}
            name={emojipedia.name}
            meaning={emojipedia.meaning}
          />
        ))}
      </dl>
      <footer><p>Made with &hearts;</p></footer>
    </div>
  );
}

export default App;
