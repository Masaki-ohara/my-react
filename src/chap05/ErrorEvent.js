import { useErrorBoundary } from 'react-error-boundary';

// ErrorEventコンポーネントの定義
export default function ErrorEvent() {
  // useErrorBoundaryからshowBoundary関数を取得
  const { showBoundary } = useErrorBoundary();

  // ボタンクリック時の処理を定義
  const handleClick = () => {
    // 直接エラーをスローする代わりにtry-catchブロックを使用
    try {
      // 新しいエラーをスロー
      throw new Error('Error is occured in MyApp.');
    } catch (e) {
      // 捕捉したエラーをshowBoundary関数に渡してエラーバウンダリーを表示
      showBoundary(e);
    }
  };

  // ボタンをレンダリング
  return (
    <button type="button" onClick={handleClick}>
      エラー発射
    </button>
  );
}
