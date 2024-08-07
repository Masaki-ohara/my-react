import { useState } from 'react'; // useStateフックをインポート
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Material-UIのテーマ関連の機能をインポート
import { amber, grey } from '@mui/material/colors'; // Material-UIのカラーパレットをインポート
import { CssBaseline } from '@mui/material'; // Material-UIのCSSリセットコンポーネントをインポート
import ThemeContext from './ThemeContext'; // 独自に作成したThemeContextをインポート

export default function MyThemeProvider({ children }) {
  const [mode, setMode] = useState('light'); // テーマのモード（'light'または'dark'）を管理する状態を定義

  // テーマの設定とトグル関数を含むオブジェクトを定義
  const themeConfig = {
    mode,
    toggleMode: () => {
      setMode(prev =>
        prev === 'light' ? 'dark' : 'light' // 現在のモードに基づいてモードを切り替える
      );
    }
  };

  // createTheme関数を使用してテーマを作成
  const theme = createTheme({
    mode,
    palette: {
      mode,
      ...(mode === 'light'
      ? { // モードが'light'の場合の設定
          primary: amber,
        }
      : { // モードが'dark'の場合の設定
        primary: {
          main: grey[500],
          contrastText: '#fff'
        },
        background: {
          default: grey[900],
          paper: grey[900],
        },
      }),
    },
  });

  return (
    // ThemeContext.Providerでテーマ設定をコンテキストに提供
    <ThemeContext.Provider value={themeConfig}>
      {/* ThemeProviderでMaterial-UIのテーマを適用 */}
      <ThemeProvider theme={theme}>
        {/* CssBaselineでデフォルトのCSSリセットを適用 */}
        <CssBaseline />
        {/* 子コンポーネントを描画 */}
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
