import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorRetryThrow from './ErrorRetryThrow';
import ErrorFallback from './ErrorFallback';

export default function ErrorRetryRoot() {
    // エラー時に実行される処理
    const handleFallback = ({ error, resetErrorBoundary }) => {
        return (
            <div>
                <h4>以下のエラーが発生しました。</h4>
                <p>{error.message}</p>
                <button type="button" onClick={resetErrorBoundary}>
                    Retry
                </button>
            </div>
        );
    };

    // リセット時に実行される処理
    const handleReset = () => {
        console.log('Retry!!');
    };

    return (
        <>
          <h3>ErrorBoundaryの基本</h3>
          <ErrorBoundary
            onReset={handleReset}
            FallbackComponent={ErrorFallback}>
                <ErrorRetryThrow />
          </ErrorBoundary>
        </>
    );
}
