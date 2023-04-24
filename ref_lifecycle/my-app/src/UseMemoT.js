import React, { useMemo, useState } from 'react'

// 숫자를 [등록] 버튼을 클릭할 때 뿐만 아니라
// input 내용을 수정할 때도 getAverage 함수가 호출되고 있음
const getAvg = (numbers) => {
    console.log("평균값 계산중")

    if (numbers.length === 0) return 0;

    const sum = numbers.reduce((a, b) => a + b);

    return sum / numbers.length;
}

export default function UseMemoT() {
    const [number, setNumber] = useState(0);
    const [list, setList] = useState([]);

    const inputChange = (e) => {
        setNumber(e.target.value)
    }

    const onInsert = () => {
        const newList = list.concat(parseInt(number));
        setList(newList);
        setNumber('');
    }

    // useMemo hook
    // 랜더링 과정에서 list 값이 변경될 때만 callback 함수를 실행
    const avg = useMemo(() => {
        return getAvg(list);
    }, [list])

    return (
        <div>
            <h1>useMemo hook</h1>

            <input type='number' value={number} onChange={inputChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((data, idx) => (
                    <li key={idx}>{data}</li>
                ))}
            </ul>

            <h2>평균값 : {avg}</h2>

        </div>
    )
}
