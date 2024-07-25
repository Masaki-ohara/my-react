// useEffect と useRef フックを React からインポート
import { useEffect, useRef } from "react";
// MyTextBox コンポーネントをインポート
import MyTextBox from './MyTextBox';

// HookRefForward コンポーネントを定義
export default function HookRefForward() {
    // テキストボックスの参照を管理するための ref を作成
    const text = useRef(null);

    // コンポーネントのマウント時に実行される副作用を定義
    useEffect(() => {
        // テキストボックスにフォーカスを設定
        text.current?.focus();
    }, []); // 空の依存配列により、この効果は初回レンダー後にのみ実行

    // JSX を返す
    return (
        // MyTextBox コンポーネントに ref として text を渡す
        <MyTextBox label="名前" ref={text} />
    );
}
