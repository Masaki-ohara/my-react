import { useEffect, useRef, useState } from "react";

export default function HookCallbackRef() {
    const [show, setShow] = useState(false); // 表示/非表示の状態を管理するstate
    const address = useRef(null); // 住所入力欄への参照を作成
    // コールバックRefを準備
    const callbackRef = elem => elem?.focus();

    // ボタンクリックで表示/非表示を反転させるハンドラー
    const handleClick = () => setShow(!show);

    // [住所]欄が表示され、たときにフォーカスを当てる
    useEffect(() => {
        if (address.current) {
            address.current.focus(); // 住所入力欄が存在する場合、フォーカスを当てる
        }
    }, [show]); // showが変更されるたびに実行

    return (
        <>
            <div>
                <label htmlFor="name">名前:</label>
                <input id="name" type="text" />
                <button onClick={handleClick}>拡張表示</button>
            </div>
            {/* State(show)値に応じて[住所]欄を表示*/}
            {show &&
                <div>
                    <label htmlFor="address">住所:</label>
                    <input id="address" type="text" ref={callbackRef} />
                </div>
            }
        </>
    );
}
