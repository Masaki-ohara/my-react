import { useState } from 'react';
// ReactのuseStateフックをインポートします。これにより、関数コンポーネントで状態を管理できます。

export default function FormList() {
    // 関数コンポーネントを定義し、それをデフォルトエクスポートします。

    // stateを初期化
    const [form, setForm] = useState({
        animal: ['dog', 'hamster']
    });
    // useStateフックを使用して状態を初期化します。初期状態として、選択された動物を配列で持つオブジェクトを設定します。

    //リストボックスの変更時に入力値をstateに反映
    const handleFormList = e => {
        // イベントハンドラー関数を定義します。この関数はリストボックスの変更時に呼び出されます。

        // 選択値を格納するための配列
        const data = [];
        // 選択された値を格納するための空の配列を用意します。

        // <option>要素を順に走査し、選択状態にある値を配列に追加
        const opts = e.target.options;
        // リストボックスの全<option>要素を取得します。

        for (const opt of opts) {
            if (opt.selected) {
                data.push(opt.value);
            }
        }
        // <option>要素を順に走査し、選択されている<option>の値をdata配列に追加します。

        // 最終的な結果をstateに反映
        setForm({
            ...form,
            [e.target.name]: data
        });
        // 更新された選択値を含むオブジェクトでstateを更新します。スプレッド演算子を使用して既存の状態を維持します。
    };

    // [送信]ボタンクリックで入力値をログに出力
    const show = () => {
        console.log(`好きな動物: ${form.animal}`);
    };
    // ボタンがクリックされたときに呼び出される関数を定義します。この関数は現在のstateの内容をコンソールに表示します。

    return (
        <form>
            <label htmlFor="animal">好きな動物:</label><br />
            <select id="animal" name="animal"
                value={form.animal}
                size="4" multiple={true}
                onChange={handleFormList}>
                <option value="dog">イヌ</option>
                <option value="cat">ネコ</option>
                <option value="hamster">ハムスター</option>
                <option value="rabbit">ウサギ</option>
            </select>
            <button type="button" onClick={show}>送信</button>
        </form>
    );
    // JSXを使用してフォームを返します。ラベルとリストボックス、送信ボタンを含むフォーム要素を定義します。
    // リストボックスには複数選択が可能で、変更時にhandleFormListが呼び出されます。
    // 送信ボタンがクリックされたときにshow関数が呼び出されます。
}
