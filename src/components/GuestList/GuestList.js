import React, { useState, useEffect } from 'react';

function GuestList({list}) {

  let [guestList, setGuestList] = useState([]);
  let [newGuestName, setNewGuestName] = useState('');
  let [newGuestMeal, setNewGuestMeal] = useState('false');

  console.log('my list', list);
  return (
    <>
      {list.map(guest => (
        <tr key={guest.id}>
          <td>{guest.name}</td>
          <td>{String(guest.kidsMeal)}</td>
        </tr>
      ))}
    </>
  )
}

export default GuestList;