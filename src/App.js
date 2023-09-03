import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import { List } from "./components/List";
import { Stats } from "./components/Stats";

function App() { 
  const [items, setitems] = useState([]) 

  function handleDeleteItem(id) {
    setitems(item=>item.filter(item=>item.id !== id))
  }
  function handleAdditems(item) {
    setitems(items => [...items,item])
  }

  function handleToggleCheckbox(id) {
    setitems((items) =>
      items.map((item ) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleReset() {
    const confirmed = window.confirm('Are you sure you want to delete all items?')
    if(confirmed === true) setitems([])
  }

  return (
    <div className="App">
      <Logo />
      <Form handleAdditems={handleAdditems}/>
      <List handleReset={handleReset} handleToggleCheckbox={handleToggleCheckbox} handleDeleteItem={handleDeleteItem} handleAdditems={handleAdditems} items={items} />
      <Stats items={items} />
    </div>
  );
}

export default App;
