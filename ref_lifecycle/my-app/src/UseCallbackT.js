import React, { useState, useCallback } from 'react'

export default function UseCallbackT() {
    const [text, setText] = useState('');

    // useCallback
    // 반복해서 생성되는 이벤트 핸들러 함수를 useCallback으로 감싸주면
    // 함수를 메모이제이션(기억)해서 컴포넌트가 다시 랜더링되도
    // 기억하고 있는 기존함수를 그대로 사용
    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, [])
    return (
        <div>
            <h1>useCallback</h1>

            <input type='text' onChange={onChangeText} />

            <h2>작성한 값 : {text || '없음'}</h2>
        </div>
    )
}

// useCallback vs useMemo

// useCallback : useMemo 를 기반으로 만든 hook
// 단, "함수를 사용할 때" 편의성을 증진시킨 hook

// 공통점 : 성능최적화
// useMemo : "값"을 재사용
// => 값의 재사용을 위해 전달된 함수를 실행하고 결과를 메모이제이션
// useCallback : "함수"를 재사용
// => 함수의 재사용을 위해 전달된 함수 자체를 메모이제이션
