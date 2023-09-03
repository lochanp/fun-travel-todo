export function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return <footer className="stats">{percentage === 100 ? 'Ready to go!! 🛩️' : `You have ${numItems} items in your list, and you have packed ${isNaN(percentage) ? '0' : percentage}% of your bag. 🧳`}</footer>;
}
