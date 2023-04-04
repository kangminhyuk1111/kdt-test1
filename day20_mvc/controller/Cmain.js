const Comment = require('../model/Comment');
const User = require('../model/Users');
/* 
Comment = {
    getComment : ()=>{},
}
*/
exports.main = (req, res) => {
    res.render('index');
}

exports.comments = (req, res) => {
    console.log(Comment.getComments()); // 댓글 목록이 [ {}, {}, {}, {} ] 형태로 출력
    res.render('comments', { commentInfos: Comment.getComments() });
}

exports.commentId = (req, res) => {
    let comments = Comment.getComments()
    console.log(req.params); // 라우트 매개변수에 대한 정보 담겨 있음
    console.log(req.params.id); // id 고유 값

    const commentId = req.params.id; // 댓글 id: url로 들어온 매개변수
    console.log(comments[commentId - 1]);

    // 존재하지 않는 댓글 id 접근시 404 페이지
    if (commentId < 1 || commentId > comments.length) {
        return res.render('404');
    }

    // :id 변수에 숫자가 아닌 값이 온다면 404 페이지
    if (isNaN(commentId)) {
        return res.render('404');
    }

    res.render('comment', { commentInfo: comments[commentId - 1] });
}

exports.signIn = (req, res) => {
    let appId = 'banana';
    let appPw = '4321';
    if (req.body.id == appId && req.body.pw == appPw) {
        res.send({ text: "banana님 로그인 성공 !", color: 'blue' })
    } else if (req.body.id != appId || req.body.pw != appPw) {
        res.send({ text: "아이디 또는 비밀번호 오류", color: 'red' })
    }
}

exports.users = (req, res) => {
    console.log(req.body)
    const dataSet = `${req.body.id}//${req.body.pw}//${req.body.name}`
    const userData = User.userData.split("\n");
    console.log(dataSet)
    console.log(userData)
    for (let i = 0; i < userData.length; i++) {
        if (dataSet == userData[i]) {
            res.send({ text: `${req.body.name}님 환영합니다 ! 😊`, color: 'blue' })
        }
        else {
            res.send({ text: "아이디 또는 비밀번호가 틀렸어요 ㅜ😢", color: 'red' })
        }
    }

}