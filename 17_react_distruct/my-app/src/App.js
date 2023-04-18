import './App.css';
import Food from './Food';
import Book from './Book';
import ClassEx from './ClassEx';

export default function App() {
  return (
    <div>
      <Food />
      <Book
        title={'나의 하루는 4시 40분에 시작된다'}
        author={'김유진'}
        price={'13,500원'}
        type={'자기계발서'} />
      <ClassEx text={'app에서 넘겨준 props!'} valid={console.log('콘솔띄우기 성공 !')} />
    </div>
  )
}
