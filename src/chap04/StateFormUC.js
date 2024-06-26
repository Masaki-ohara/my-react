import { useRef } from 'react';

export default function StateFormUC() {
    // React要素への参照を準備
    const name = useRef(null);
    const age = useRef(null);

    // 要素(参照)経由で入力値を取得して表示
    const show = () => {
        console.log(`こんにちは、${name.current.value} (${age.current.value} 歳) さん!`);
    };

    // フォームを描画
    return (
        <form>
            {/* 準備した参照を各要素に紐付け */}
            <div>
                <label htmlFor="name">名前:</label>
                <input id="name" name="name" type="text"
                    ref={name} defaultValue="佐藤理央" />
            </div>
            <div>
                <label htmlFor="age">年齢:</label>
                <input id="age" name="age" type="number"
                    ref={age} defaultValue="18" />
            </div>
            <div>
                <button type="button" onClick={show}>
                    送信
                </button>
            </div>
        </form>
    );
}

/*
1. `import { useRef } from 'react';`
   - Reactの`useRef`フックをインポートします。これにより、関数コンポーネントでDOM要素への参照を作成できます。

2. `export default function StateFormUC() {`
   - `StateFormUC`という関数コンポーネントを定義し、デフォルトエクスポートします。

3. `const name = useRef(null);`
   - `name`という変数に`useRef`フックを使用して、初期値`null`の参照を作成します。

4. `const age = useRef(null);`
   - `age`という変数に`useRef`フックを使用して、初期値`null`の参照を作成します。

5. `const show = () => {`
   - `show`という関数を定義します。この関数は、ボタンがクリックされたときに呼び出され、入力された名前と年齢をコンソールに表示します。

6. `console.log(\`こんにちは、${name.current.value} (${age.current.value} 歳) さん!\`);`
   - `name`と`age`の現在の値を取得し、コンソールに表示します。

7. `return (`
   - コンポーネントのJSXを返します。

8. `<form>...</form>`
   - フォームを定義します。

9. `<label htmlFor="name">名前:</label>`
   - 名前入力フィールドのラベルを定義します。

10. `<input id="name" name="name" type="text" ref={name} defaultValue="" />`
    - テキスト入力フィールドを定義し、`name`参照を紐付けます。初期値は空文字列です。

11. `<label htmlFor="age">年齢:</label>`
    - 年齢入力フィールドのラベルを定義します。

12. `<input id="age" name="age" type="number" ref={age} defaultValue="18" />`
    - 数値入力フィールドを定義し、`age`参照を紐付けます。初期値は`18`です。

13. `<button type="button" onClick={show}>送信</button>`
    - ボタンを定義し、クリック時に`show`関数を呼び出します。
*/
