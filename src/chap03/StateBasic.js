// import { useState } from "react";
 
// export default function StateBasic({ init }) {
//   const [count, setCount] = useState(init);

//   const handleClick = () => setCount(count + 1);
//   return (
//     <>
//       <button onClick={handleClick}>カウント</button>
//       <p>{count}回、クリックされました。</p>
//     </>
//   );
// }

import React, { useState } from 'react';

export default function StateBasic({ init }) {
  const [count, setCount] = useState(init);

  const handleClick = () => {
    setCount(count + 1);
    console.log(`count is ${count + 1}`); // ボタンをクリックした時に console.log を表示
  };

  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回、クリックされました。</p>
    </>
  );
}



