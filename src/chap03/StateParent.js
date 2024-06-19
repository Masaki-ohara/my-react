import { useState } from 'react';
import StateCounter from './StateCounter';

export default function StateParent() {
    // カウント合計を表すcountを初期化
    const [count, setCount] = useState(0);
    // state値(count)を更新するためのupdate関数を準備
    const update = step => setCount(c => c + step);
    return (
    <>
      {/* update関数ををStateCounterコンポーネントを引き渡す */}
       <p>総カウント:{count}</p>
       <StateCounter step={1} onUpdate={update} />
       <StateCounter step={5} onUpdate={update} />
       <StateCounter step={-1} onUpdate={update} />
    </>
    );
}

// useState で count を初期化:

// count: カウントの合計値を保持する状態変数。
// setCount: count を更新する関数。
// update 関数:

// step 値を引数に取り、count を更新する関数。
// 現在の count (c) に step 値を加算し、新しい count を設定する。
// レンダリング:

// count の現在値を表示する <p> 要素。
// 3 つの StateCounter コンポーネントをレンダリングし、それぞれに異なる step 値 (1, 5, -1) を渡す。
// 各 StateCounter コンポーネントに update 関数を onUpdate プロパティとして渡す。
// この構造により、各 StateCounter ボタンがクリックされると、count 値が適切に増減され、親コンポーネント (StateParent) がその変化を表示します。








