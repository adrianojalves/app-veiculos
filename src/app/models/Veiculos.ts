export class Veiculo{
  id!: number;
  tipo!: TipoVeiculo;
  nome!: string;
}

export enum TipoVeiculo{
  Carro = 'Carro',
  Moto = 'Moto'
}
