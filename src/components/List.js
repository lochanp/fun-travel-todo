import { useState } from "react";
import { Item } from "./Item";

export function List({ items, handleDeleteItem, handleToggleCheckbox, handleReset }) {
  const [sortBy, setsortBy] = useState("input");
  let sortedItems;

  if (sortBy === 'input') {
    sortedItems = items;
  }
  if (sortBy === 'description') {
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === 'packed') {
    sortedItems = items.slice().sort((a, b) => Number(a.packed - b.packed));
  }

  return <div className="list">
    <ul>
      {sortedItems.map((item) => (
        <Item handleToggleCheckbox={handleToggleCheckbox} handleDeleteItem={handleDeleteItem} key={item.id} item={item} />
      ))}
    </ul>
    <div className="actions">
      <select value={sortBy} onChange={e => setsortBy(e.target.value)}>
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed status</option>
      </select>
      <button onClick={() => handleReset()}>Clear list</button>
    </div>
  </div>;
}
