import React from 'react';

export default function EventArgs2() {
    // イベントハンドラー関数を定義
    const current = e => {
        // イベントターゲットからカスタムデータ属性 'data-type' を取得
        const type = e.target.dataset.type;
        const d = new Date();
        // 'type' に基づいて現在の日付/時刻をコンソールに出力
        switch(type) {
            case 'date':
                console.log(`${e.target.id}: ${d.toLocaleDateString()}`);
                break;
            case 'time':
                console.log(`${e.target.id}: ${d.toLocaleTimeString()}`);
                break;
            default:
                console.log(`${e.target.id}: ${d.toLocaleString()}`);
                break;
        }
    };

    return (
        <div>
            {/* 取得する日時型を独自データ属性 'data-type' で指定 */}
            {/* アロー関数経由で、ハンドラーを呼び出す */}
            <button id="dt" data-type="datetime" onClick={current}>現在日時</button>
            {/* 'datetime' を引数として渡して current 関数を呼び出す */}
            <button id="date" data-type="date" onClick={current}>現在日付</button>
            {/* 'date' を引数として渡して current 関数を呼び出す */}
            <button id="time" data-type="time" onClick={current}>現在時刻</button>
            {/* 'time' を引数として渡して current 関数を呼び出す */}
        </div>
    );
}
