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
            this.articles.push(article);
        } else throw new Error('Site에 추가된 Board에만 Article을 추가할 수 있습니다.');
    }
}

class Article {
    constructor(articleConstruction) {
        this.articleConstruction = articleConstruction;
        this.id = 0;
    }
}

class Comment {}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
