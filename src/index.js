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
            this.boards.push(board);
        } else {
            throw new Error();
        }
    }
    findBoardByName(boardName) {
        return new Board(boardName);
    }
}

class Board {
    constructor(boardName) {
        this.boardName = boardName;
    }
}

class Article {}

class Comment {}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
