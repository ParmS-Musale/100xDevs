import React, { useMemo } from 'react';

// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

const Assignment2 = () => {
  const groceryItems = [
    { item: "Milk", price: 25, quantity: 2 },
    { item: "Bread", price: 40, quantity: 1 },
    { item: "Eggs", price: 10, quantity: 12 },
    { item: "Chicken", price: 10, quantity: 12 }
  ];

  // Corrected useMemo
  const totalValue = useMemo(() => {
    return groceryItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [groceryItems]);

  return (
    <div>
      <h1>Assignment 3</h1>
      <h2>Grocery List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {groceryItems.map((item, index) => (
            <tr key={index}>
              <td>{item.item}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total Grocery Cost: {totalValue}</h3> {/* Moved outside the table */}
    </div>
  );
};

export default Assignment2;
