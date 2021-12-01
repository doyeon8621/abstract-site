class Site {
    constructor() {
        this.boards = [];
    }
    addBoard(board) {
        let boardNames = [];
        //console.log(this.boards)
        for (let b of this.boards) {
            boardNames.push(b.boardName);
        }
        if (!boardNames.includes(board.boardName)) {
            board.isInSite = true;
            this.boards.push(board);
        } else {
            throw new Error('이미 추가된 Board입니다');
        }
    }
    findBoardByName(boardName) {
        for (let b of this.boards) {
            if (b['boardName'] === boardName) return b;
        }
    }
}
function date_formmatter(format) {
    let year = format.getFullYear();
    let month = format.getMonth() + 1;
    let date = format.getDate();
    let hour = format.getHours();
    let min = format.getMinutes();
    let sec = format.getSeconds();
    let millisec = format.getMilliseconds();
    if (month < 10) month = '0' + month;

    if (date < 10) date = '0' + date;

    if (hour < 10) hour = '0' + hour;

    if (min < 10) min = '0' + min;

    if (sec < 10) sec = '0' + sec;

    if (millisec < 10) millisec = '00' + millisec;
    else if (millisec < 100) millisec = '0' + millisec;

    return `${year}-${month}-${date}T${hour}:${min}:${sec}.${millisec}Z`;
}

class Board {
    constructor(boardName) {
        this.isInSite = false;
        this.articles = [];
        if (!boardName) throw new Error('Board이름이 필요합니다.');
        this.boardName = boardName;
    }
    publish(article) {
        if (this.isInSite) {
            article.id = `${this.boardName}-${Math.random()}`;
            article.createdDate = date_formmatter(new Date());
            article.isInBoard = true;
            this.articles.push(article);
        } else throw new Error('Site에 추가된 Board에만 Article을 추가할 수 있습니다.');
    }
    getAllArticles() {
        return this.articles;
    }
}

class Article {
    constructor(construction) {
        if (construction['subject'] && construction['content'] && construction['author'])
            this.construction = construction;
        else throw new Error('subject, content, author은 필수입니다.');
        this.id = 0;
        this.createdDate = '';
        this.isInBoard = false;
        this.comments = [];
    }
    reply(comment) {
        if (this.isInBoard) {
            comment.createdDate = date_formmatter(new Date());
            this.comments.push(comment);
        } else throw new Error('Board에 추가된 Article에만 Comment를 추가할 수 있습니다.');
    }
    getAllComments() {
        return this.comments;
    }
}

class Comment {
    constructor(construction) {
        if (construction['content'] && construction['author']) this.construction = construction;
        else throw new Error('content, author은 필수입니다.');
        this.createdDate = '';
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
