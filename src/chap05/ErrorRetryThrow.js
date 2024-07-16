import React from 'react';

export default function ErrorRetryThrow() {
    // 60%の確率でエラーを発生
    if (Math.random() < 0.5) {
        throw new Error('Error is occured in MyApp');
    }
    return (
        <p>正しく実行されました。</p>
    );
}
