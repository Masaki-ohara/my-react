// useState フックを React からインポート
import { useState } from 'react';

// HookRefNg コンポーネントを定義
export default function HookRefNg() {
  // タイマーの ID を管理するための変数
  let id = null;
  
  // count 状態とそれを更新する setCount 関数を定義
  // 初期値は 0
  const [count, setCount] = useState(0);

  // [開始]ボタンのクリックハンドラー
  const handleStart = () => {
    // タイマーが動作中でない場合にのみ新しいタイマーを設定
    if (id === null) {
      // 1秒ごとに count を1増加させるタイマーをセット
      id = setInterval(() => setCount(c => c + 1), 1000);
    }
  };

  // [終了]ボタンのクリックハンドラー
  const handleEnd = () => {
    // タイマーをクリア
    clearInterval(id);
    // タイマー ID を null にリセット
    id = null;
  };

  // JSX を返す
  return (
    <>
      {/* タイマーを開始するボタン */}
      <button onClick={handleStart}>開始</button>
      
      {/* タイマーを終了するボタン */}
      <button onClick={handleEnd}>終了</button>
      
      {/* 経過時間を表示する段落 */}
      <p>{count}秒経過</p>
    </>
  );
}
