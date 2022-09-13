export class Veiculo{
  id!: number;
  tipo!: TipoVeiculo;
  nome!: string;
  kmAtual!: number;
  cor!: string;
  status!: boolean;
  dataAtualizacao! : Date;

  constructor(){
    this.status = true;
    this.tipo = TipoVeiculo.Carro;
    this.nome = "";
    this.dataAtualizacao = new Date();
  }

  validate(){
    if(!this.kmAtual || this.kmAtual<0 || this.kmAtual>999999){
      return false;
    }
    else if(this.nome.length < 0 ){
      return false;
    }
    else if(this.cor==undefined || this.cor.length==0){
      return false;
    }
    else{
      return true;
    }
  }

  static converter(veiculo: Veiculo){
    let novoVeiculo = new Veiculo();
    novoVeiculo.id = veiculo.id;
    novoVeiculo.tipo = veiculo.tipo;
    novoVeiculo.nome = veiculo.nome;
    novoVeiculo.kmAtual = veiculo.kmAtual;
    novoVeiculo.cor = veiculo.cor;
    novoVeiculo.status = veiculo.status;
    novoVeiculo.dataAtualizacao = veiculo.dataAtualizacao;

    return novoVeiculo;
  }
}

export enum TipoVeiculo{
  Carro = 'Carro',
  Moto = 'Moto'
}
