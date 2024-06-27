import { useState } from "react"; // ReactのuseStateフックをインポートします

export default function FormSelect() { // FormSelectという関数コンポーネントを定義し、それをデフォルトエクスポートします
    // stateを初期化
    const [form, setForm] = useState({ // useStateフックを使用して、formという状態とsetFormという状態を更新する関数を定義
        animal: 'dog' // 初期状態としてanimalキーに'dog'を設定
    });

    // 選択ボックスの変更時入力値をstateに反映
    const handleForm = e => { // handleFormという関数を定義、選択ボックスの変更イベントを処理
        setForm({
            ...form, // スプレッド構文を使用して、現在のform状態のすべてのプロパティをコピー
            [e.target.name]: e.target.value // 変更された入力要素のname属性をキーにして、その値を更新
        });
    };

    // [送信]ボタンクリックで入力値をログに出力
    const show = () => { // showという関数を定義、送信ボタンがクリックされたときに呼び出されます
        console.log(`好きな動物:${form.animal}`); // 現在のform状態のanimalキーの値をコンソールに出力
    };

    return (
        <form> {/* コンポーネントのJSXを返し、フォームを作成します */}
            <label htmlFor="animal">好きな動物:</label> {/* ラベル要素を作成 */}
            <select id="animal" name="animal"
                value={form.animal} // 選択ボックスの値を現在のform状態のanimalキーの値に設定
                onChange={handleForm} // 選択ボックスの値が変更されたときにhandleForm関数を呼び出す
            >
                <option value="dog">イヌ</option> {/* 選択肢を定義 */}
                <option value="cat">ネコ</option>
                <option value="hamster">ハムスター</option>
                <option value="rabbit">ウサギ</option>
            </select>
            <button type="button" onClick={show}>送信</button> {/* 送信ボタンを作成し、クリックされたときにshow関数を呼び出す */}
        </form>
    );
}
