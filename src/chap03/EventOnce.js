import { useState } from "react";

export default function EventOnce() {
    // クリック済みかどうかを管理するためのフラグ
    const [clicked, setClicked] = useState(false);
    // 今日の運勢 (点数)
    const [result, setResult] = useState('-');

    // ボタンクリック時のハンドラー関数
    const handleClick = e => {
        // 未クリックの場合のみ運勢を算出
        if (!clicked) {
            // 1から100までのランダムな整数を生成し、resultステートに設定
            setResult(Math.floor(Math.random() * 100 + 1));
            // クリック済みフラグをtrueに設定
            setClicked(true);
        }
    };

    return (
        <>
            {/* 結果表示ボタン。クリック時にhandleClick関数が呼び出される */}
            <button onClick={handleClick}>結果表示</button>
            {/* 今日の運勢を表示する段落 */}
            <p>今日の運勢は{result}点です。</p>
        </>
    );
}

// コードの流れと解説
// import { useState } from "react";:

// ReactのuseStateフックをインポートしています。これはコンポーネントの状態を管理するために使用します。
// export default function EventOnce() { ... }:

// EventOnceという名前の関数コンポーネントを定義し、デフォルトエクスポートします。
// const [clicked, setClicked] = useState(false);:

// クリック済みかどうかを管理するための状態変数clickedを定義し、初期値をfalseに設定しています。
// setClickedはclickedの値を更新するための関数です。
// const [result, setResult] = useState('-');:

// 今日の運勢の点数を管理するための状態変数resultを定義し、初期値を'-'に設定しています。
// setResultはresultの値を更新するための関数です。
// const handleClick = e => { ... };:

// ボタンクリック時に呼び出されるハンドラー関数を定義しています。
// 関数内では、クリック済みかどうかをチェックし、未クリックの場合のみ運勢の点数をランダムに生成して状態を更新します。
// if (!clicked) { ... }:

// clickedがfalseの場合のみ、ランダムな点数を生成してresultに設定し、clickedをtrueに設定します。
// これにより、ボタンは一度しかクリックできないようになります。
// JSXのレンダリング部分:

// return内では、ボタンと運勢の点数を表示する段落を返しています。
// ボタンにはonClickプロパティが設定され、クリック時にhandleClick関数が呼び出されます。
// 運勢の点数はresult状態の値を表示します。
// これにより、ユーザーがボタンをクリックすると一度だけランダムな点数が表示され、その後は再度クリックしても値が変更されないようになります。






