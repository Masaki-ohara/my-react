import { useRef } from "react"; // ReactのuseRefフックをインポートします

export default function FromFile() { // FromFileという関数コンポーネントを定義し、それをデフォルトエクスポートします
    // ファイルボックスへの参照
    const file = useRef(null); // ファイル入力要素への参照を作成し、初期値はnullに設定

    // [送信]ボタンクリックでファイル情報をログ出力
    function show() { // showという関数を定義、送信ボタンがクリックされたときに呼び出されます
        const fs = file.current.files; // file.currentを使用してファイル入力要素にアクセスし、選択されたファイルを取得します
        // 取得したファイル群を順に走査
        for(const f of fs){ // fsに含まれるファイルを1つずつ処理するためのループを開始
            console.log(`ファイル名:${f.name}`); // 現在のファイルfの名前をコンソールに出力
            console.log(`種類:${f.type}`); // 現在のファイルfのタイプ（MIMEタイプ）をコンソールに出力
            console.log(`サイズ:${Math.trunc(f.size / 1024)}KB`); // 現在のファイルfのサイズをKB単位で計算し、コンソールに出力
        }
    }

    return (
        <form> {/* コンポーネントのJSXを返し、フォームを作成します */}
            <input type="file" ref={file} multiple /> {/* ファイル入力要素を作成し、ref属性に先ほど作成したfile参照を設定、multiple属性で複数ファイルの選択を可能に */}
            <button type="button" onClick={show}> {/* ボタンを作成し、onClickイベントハンドラにshow関数を設定 */}
                送信
            </button>
        </form>
    );
}
