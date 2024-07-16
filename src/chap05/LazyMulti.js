import { Suspense, lazy } from 'react';

// msミリ秒の遅延を発生させるsleep関数
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
// LazyButtonを遅延ロード
const LazyButton = lazy(() => sleep(2000).then(() => import('./LazyButton')));
const LazyButton2 = lazy(() => sleep(1000).then(() => import('./LazyButton2')));

export default function LazyBasic() {
    //LazyButtonの読み込みまでメッセージを表示
    return (
        <Suspense fallback={<p>Now Loading...</p>}>
            <LazyButton />
            <LazyButton2 />
        </Suspense>
    );
}
