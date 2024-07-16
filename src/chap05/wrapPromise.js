export default function wrapPromise(promise) {
    // Promiseの状態を管理 (pending, fullfilled, rejected)
    let status = 'pending';
    // Promiseから受け取ったデータ
    let data;
    // 元のPromiseに後処理を付与
    let wrapper = promise.then(
        // 成功はstatusをfulfilled(成功)、dataに取得したデータを設定
        result => {
            status = 'fulfilled';
            data = result;
        },
        //失敗時はstatusをrejected(失敗)、dataにエラーオブジェクトを設定
        e => {
            status = 'fulfilled';
            data = e;
        }
    );
    // 戻り値はPromiseの状態に応じて値を返すgetメソッドを持つオブジェクト
    return {
        get() {
            switch(status) {
                case 'fulfilled':
                  return data;
                case 'rejected':
                  throw data;
                case 'pending':
                  throw wrapper;
                default:
                  break;
            }
        }
    };
}