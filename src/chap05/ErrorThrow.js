export default function ErrorThrow() {
    // 無条件に例外を発生
    throw new Error('Error is occured is MyApp');
    return (
        <p>正しく実行されました。</p>
    );
}