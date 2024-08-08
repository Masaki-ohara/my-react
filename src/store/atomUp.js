// import { atom, atomFamily, selector } from "recoil";

// // id値を管理するためのAtom
// export default idsAtom = atom({
//     key: 'idsAtom',
//     default : []
// });

// // 個々のTodo項目を別個のAtomとして管理
// export const todoAtom = atomFamily({
//     Key: 'todoAtom',
//     default: null
// });

// // Todo項目をリストとし束ね、操作するためのセレクター
// export const todoListSelector = selector({
//     Key: 'todoListSelector',
//     // 現在のtodoリストを取得
//     get: ({ get }) => {
//         const ids = get(idsAtom);
//         return ids.map(id => get(todoAtom(id)));
//     },
//     // Todoリストへの追加/完了済/削除操作
//     set: ({ set, reset }, { type, id, newItem }) => {
//     switch (type) {
//         // 新たなTodo項目(todoAtom)を生成
//         case 'add' :
//           set(todoAtom(newItem.id), newItem);
//           set(idsAtom, ids => [...ids, newItem.id]);
//           break;
//           case 'done' :
//           set(idsAtom, ids => [ ...ids, isDone: true]);
//           break;
//           // 既存のTodo項目(idであるtodoAtom)を削除&
//           // id群(idsAtom)から、対応するid値を削除
//           case 'remove' :
//               reset(todoAtom(id));
//               set(idsAtom, ids => ids.filter(e => e!== id));
//         }
//     }
// });
import { atom, atomFamily, selector } from "recoil";

// id値を管理するためのAtom
export const idsAtom = atom({
  key: 'idsAtom', // 小文字の 'key'
  default: []
});

// 個々のTodo項目を別個のAtomとして管理
export const todoAtom = atomFamily({
  key: 'todoAtom', // 小文字の 'key'
  default: null
});

// Todo項目をリストとし束ね、操作するためのセレクター
export const todoListSelector = selector({
  key: 'todoListSelector', // 小文字の 'key'
  // 現在のtodoリストを取得
  get: ({ get }) => {
    const ids = get(idsAtom);
    return ids.map(id => get(todoAtom(id)));
  },
  // Todoリストへの追加/完了済/削除操作
  set: ({ set, reset }, { type, id, newItem }) => {
    switch (type) {
      // 新たなTodo項目(todoAtom)を生成
      case 'add':
        set(todoAtom(newItem.id), newItem);
        set(idsAtom, ids => [...ids, newItem.id]); // 追加するidを配列に追加
        break;
      // 既存のTodo項目(idであるtodoAtom)を完了としてマーク
      case 'done':
        set(todoAtom(id), oldItem => ({
          ...oldItem,
          isDone: true
        }));
        break;
      // 既存のTodo項目(idであるtodoAtom)を削除&
      // id群(idsAtom)から、対応するid値を削除
      case 'remove':
        reset(todoAtom(id));
        set(idsAtom, ids => ids.filter(e => e !== id));
        break;
      default:
        throw new Error(`Unknown action type: ${type}`);
    }
  }
});
