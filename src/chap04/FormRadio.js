import { useState } from "react";

export default function FormRadio() {
    // stateを初期化
    const [form, setForm] = useState({
        os: 'windows'
    });

    // ラジオボタンの変更時入力値stateに反映
    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    //[送信]ボタンクリックで入力値をログ出力
    const show = () => {
        console.log(`使用OS:${form.os}`);
    };

    // stateの現在値に応じて、checked属性の値を決定
    return (
        <form>
        <fieldset>
        <legend>使用OS:</legend>
        <label htmlFor="os_win">Windows</label>
        <input id="os_win" name="os"
          type="radio" value="windows"
          checked={form.os === 'windows'}
          onChange={handleForm} /><br />
        <label htmlFor="os_mac">macOS</label>
        <input id="os_mac" name="os"
          type="radio" value="mac"
          checked={form.os === 'mac'}
          onChange={handleForm} /><br />
        <label htmlFor="os_lin">Linux</label>
        <input id="os_lin" name="os"
          type="radio" value="linux"
          checked={form.os === 'linux'}
          onChange={handleForm} /><br />
        </fieldset>
        <button type="button" onClick={show}>送信</button>
        </form>
    );
}