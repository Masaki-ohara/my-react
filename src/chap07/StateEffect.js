
// useEffect と useState フックを React からインポート
import { useEffect, useState } from "react";

// StateEffect コンポーネントを定義
export default function StateEffect({ init }) {
    // count という状態変数とそれを更新する setCount 関数を定義
    // 初期値は props から受け取った init
    const [count, setCount] = useState(init);

    // hoge という状態変数とそれを更新する setHoge 関数を定義
    // 初期値は 'hoge'
    const [hoge, setHoge] = useState('hoge');

    // count が変化した時に実行される副作用を設定
    useEffect(() => {
        // count が変わるたびにコンソールにメッセージを表示
        console.log(`count is ${count}.`);
    }, [count]); // 依存配列に count を指定することで、count が変わるたびにこの副作用が実行される

    // カウントボタンがクリックされた時に実行される関数を定義
    const handleClick = () => setCount(count + 1);

    // コンポーネントの JSX を返す
    return (
        <>
        {/* hoge 状態を現在のタイムスタンプで更新するボタン */}
        <button onClick={() => setHoge(Date.now())}>Hoge ({hoge})</button>
        
        {/* count 状態を増加させるボタン */}
        <button onClick={handleClick}>カウント</button>
        
        {/* 現在の count 値を表示 */}
        <p>{count}回、クリックされました。</p>
        </>
    );
}
