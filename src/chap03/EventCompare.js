import { useState } from 'react';
import './EventCompare.css';

// EventCompare コンポーネントを定義
export default function EventCompare() {
    const [result, setResult] = useState('');

    // mouseenter イベントハンドラー
    // イベント発生時に結果を更新
    const handleIn = e => setResult(r => `${r}Enter : ${e.target.id}<br />`);

    // mouseleave イベントハンドラー
    // イベント発生時に結果を更新
    const handleOut = e => setResult(r => `${r}Leave : ${e.target.id}<br />`);

    return (
        <>
            {/* 外側の div にイベントハンドラーを設定 */}
            <div id="outer" onMouseEnter={handleIn} onMouseLeave={handleOut}>
                外 (outer)
                {/* 内側の p 要素 */}
                <p id="inner">内 (inner)</p>
            </div>
            {/* イベントの結果を表示 */}
            <div dangerouslySetInnerHTML={{ __html: result }}></div>
        </>
    );
}
