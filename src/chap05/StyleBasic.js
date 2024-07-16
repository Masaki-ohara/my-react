export default function StyleBasic() {
    return (
        <>
        {/* Styled JSXによるスタイル定義 */}
        <style jsx>{`
        .panel {
            width: 300px;
            padding: 10px;
            border: 1px solid #000;
            border-radius: 5px;
            background-color: royalblue;
            color: white;
        }
        `}</style>
        <div className="panel"><b>Styled JSXは</b>は、JSX式にスタイル定義を・・・
        </div>
        </>
    );
}