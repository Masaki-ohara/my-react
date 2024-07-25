import { useEffect, useState } from 'react';
import './HookTimer.css';

export default function HookTimer({ init }) {
    const [count, setCount] = useState(init);

    useEffect(() => {
        //タイマーを準備
        const t = setInterval(() => {
            setCount(c => c - 1);
        }, 1000);

        //コンポーネント破壊時にタイマーも破棄
        return () => {
            clearInterval(t);
        };
    }, []);

    return (
        // {/* カウンター0未満になった場合、スタイルをwarnを適用 */}
        <div className={count < 0 ?  'warn' : ''}>
            現在のカウント:{count}
        </div>
    );
}