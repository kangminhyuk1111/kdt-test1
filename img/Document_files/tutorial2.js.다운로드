document.querySelector('.submit_btn').onclick = () => {
    let ageRadios = document.getElementsByName('age');
    let categoryRadios = document.getElementsByName('category');
    let inputWon = document.getElementById('input-won');
    let selectedAge = Array.from(ageRadios).find(radio => radio.checked);
    let selectedCategory = Array.from(categoryRadios).find(radio => radio.checked);
    let inputWonValue = inputWon.value;
    const formatter = new Intl.NumberFormat('ko', { notation: 'compact' });
    console.log(selectedAge.value + selectedCategory.value + inputWonValue);
    Swal.fire({
        title: `나이 : ${selectedAge.value}대 <br/> 가장 많은 소비 : ${selectedCategory.value} <br/> 평균 소비 금액 : ${formatter.format(inputWonValue)}원`,
        text: "입력하신 정보가 맞으신가요?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#6fb1b4',
        cancelButtonColor: '#999',
        confirmButtonText: '네!',
        cancelButtonText: '아니요..'
    }).then((result) => {
        if (result.value === true) {
            location.href = `/tutorial2/testresult?age=${selectedAge.value}&category=${selectedCategory.value}&inputWon=${inputWonValue}`;
        }
    })
}

function inputNumberFormat(obj) {
    obj.value = comma(uncomma(obj.value));
}

function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
}