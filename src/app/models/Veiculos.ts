export class Veiculo{
  id!: number;
  tipo!: TipoVeiculo;
  nome!: string;
  kmAtual!: number;
  cor!: string;
  status!: boolean;

  constructor(){
    this.status = true;
    this.tipo = TipoVeiculo.Carro;
    this.nome = "";
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
}

export enum TipoVeiculo{
  Carro = 'Carro',
  Moto = 'Moto'
}
