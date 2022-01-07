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

// 2. Promise 실행하기
_promise(true)
    // Promise 객체에는 비동기 작업이 완료되었을 때 호출하는 then 이라는 API가 존재한다.
    .then(
        // 성공했을 때 실행할 매개함수 resolve 작성
        function (text) {
            console.log(text);
        },
        // 실패했을 때 실행할 매개함수 reject 작성
        function (error) {
            console.log(error);
        });


/*

[Description]

_promise 를 실행한 순간, new Promise 로 Promise 객체가 생성되고 비동기 작업인 window.setTimeout 이 실행되며 대기한다. (Pending 상태)

이후 비동기 작업 window.setTimeout 이 마무리되고
결과물을 약속대로 잘 줄 수 있다면... 첫번째 매개함수로 받아온 resolve 함수를 호출하고, (Fulfilled 상태)
결과물이 실패라면... 두번째 매개함수로 받아온 reject 함수를 호출합니다. (Rejected 상태)

*/