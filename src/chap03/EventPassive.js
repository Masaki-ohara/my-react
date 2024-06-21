import { useRef, useEffect } from 'react';
import './EventPassive.css'; // CSSファイルのインポート

export default function EventPassive() {
    // ホイールイベントを処理する関数。イベントのデフォルト動作を防ぐ
    const handleWheel = e => e.preventDefault();
    // <div>要素への参照を取得
    const divRef = useRef(null);

    useEffect(() => {
        // コンポーネント起動時にリスナーを設定
        const div = divRef.current;
        if (div) {
            div.addEventListener('wheel', handleWheel, { passive: false });
        }
        
        return () => {
            // コンポーネント破壊時にリスナーを削除
            if (div) {
                div.removeEventListener('wheel', handleWheel);
            }
        };
    }, []); // 依存配列を追加して、エフェクトがコンポーネントのマウント時に一度だけ実行されるようにする

    return (
        // クラス名 "box" の div 要素。ホイールイベントが発生すると handleWheel 関数が呼び出される
        <div ref={divRef} className="box">
          例えばWheelイベントをハンドラーで...
        </div>
    );
}
