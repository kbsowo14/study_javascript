// 1. Promise 선언하기
const _promise = function (param) { // Promise 객체를 반환해주는 _promise

    return new Promise(function (resolve, reject) { // 전달해준 2개의 매개함수는 결과 상태에 따라 선택되어 실행 될 것이다.
        window.setTimeout(function () {
            if (param) {
                // 성공했을 경우 매개변수로 받아온 resolve 함수를 실행
                resolve("해결 완료");
            }
            else {
                // 실패했을 경우 매개변수로 받아온 reject 함수를 실행
                reject(Error("실패"));
            }
        }, 3000);
    });

};

// 2. Promise 실행하고, catch 로 에러 잡기
_promise(true)
    .then(JSON.parse) // JSON 이 아닌, String 을 받아오기 때문에 당연히 에러가 발생한다.
    .catch( // 전에 에러가 발생한 것을 catch 로 받아준다. catch 는 then(null, reject) 와 같다.
        function () {
            window.alert('전에 있던 then 에서 Error 가 발생했어요!');
        })
    .then(
        function (data) {
            console.log("하지만 어찌저찌 다음 then 은 실행됨.");
            console.log(data);
        }
    );


/*

[Description]

위 주석 참조

*/