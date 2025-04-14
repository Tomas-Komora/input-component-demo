import "./App.css";
import { TextInput } from "./component/InputText";

function App() {
  return (
    <div className="">
      <header className="bg-white">
        <div className="">
          <TextInput
            label="Input "
            placeholder="Placeholder je velmoi dlhy text ktorý sa nezmestí do inputu"
            optional="Optional"
            //description="Popis inputu"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
