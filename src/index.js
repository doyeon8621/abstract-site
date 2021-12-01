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
            board.isSiteIn = true;
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
        this.isSiteIn = false;
        this.articles = [];
        if (boardName === null || boardName === '') throw new Error('Board이름이 필요합니다.');
        this.boardName = boardName;
    }
    publish(article) {
        if (this.isSiteIn) {
            article.id = `${this.boardName}-${Math.random()}`;
            article.createdDate = date_formmatter(new Date());
            this.articles.push(article);
        } else throw new Error('Site에 추가된 Board에만 Article을 추가할 수 있습니다.');
    }
    getAllArticles() {
        return this.articles;
    }
}

class Article {
    constructor(articleConstruction) {
        this.articleConstruction = articleConstruction;
        this.id = 0;
        this.createdDate = '';
    }
}

class Comment {}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
