import { Profiler } from 'react'; // ProfilerコンポーネントをReactからインポート
import HeavyUI from './HeavyUI'; // HeavyUIコンポーネントをインポート

export default function ProfilerBasic() {
    // パフォーマンス計測用の関数(onRender関数)
    const handleMeasure = (id, phase, actualDuration,
      baseDuration, startTime, endTime) => {
      console.log('id: ', id); // 測定対象のidをコンソールに出力
      console.log('phase: ', phase); // 現在のフェーズ（mountまたはupdate）をコンソールに出力
      console.log('actualDuration: ', actualDuration); // 実際のレンダリングにかかった時間をコンソールに出力
      console.log('baseDuration: ', baseDuration); // 基本的なレンダリングにかかった時間をコンソールに出力
      console.log('startTime: ', startTime); // 測定の開始時間をコンソールに出力
      console.log('endTime: ', endTime); // 測定の終了時間をコンソールに出力
    };

    return (
    <Profiler id="heavy" onRender={handleMeasure}>
        {/* delayミリ秒の遅延を発生させるHeavyUIコンポーネントを複数レンダリング */}
        <HeavyUI delay={1500} />
        <HeavyUI delay={500} />
        <HeavyUI delay={2000} />
    </Profiler>
    );
}
