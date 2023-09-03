
export function Item({ item, handleDeleteItem, handleToggleCheckbox }) {
  return <li>
    <input type="checkbox" value={item.packed} onChange={() => handleToggleCheckbox(item.id)}></input>
    <span style={item.packed ? { textDecoration: 'line-through' } : {}}>{item.quantity} {item.description}</span>
    <button onClick={() => handleDeleteItem(item.id)}>❌</button>
  </li>;
}
