export class Trabalho {

    public $key: string;

    constructor(
        public id: number,
        public titulo: string,
        public descricao: string,
        public aluno1: string,
        public aluno2: string
    ) {}

}