import { StorageUtil } from "./storage-util";

export const KEY_VEICULO='veiculo';

export class MemoreCacheUtil{
  static inicializado = false;

  static modelsList = new Map();

  static initialize(){
    if(!this.inicializado){
      this.modelsList.set(KEY_VEICULO, StorageUtil.getList(KEY_VEICULO));
      this.inicializado = true;
    }
  }

  static getItem(key: string, id: number, objectNew: any){
    this.initialize();

    var list = this.modelsList.get(key);

    const filterObject = Object.keys(list)
    .filter(key =>{ return list[key].id == id })
    .reduce((cur, key) => { return Object.assign( list[key] )}, objectNew);

    return filterObject;
  }

  static getList(key: string){
    this.initialize();

    return this.modelsList.get(key);
  }

  static save(key: string, id: number, object: any){
    this.initialize();

    var list = this.modelsList.get(key);

    const keyObject = Object.keys(list)
                            .filter(key =>{ return list[key].id === id })
                            .reduce((cur, key) => { return Object.assign( [key] )}, null);

    if(keyObject==null){ //objeto não existe na lista
      object.id = list.length+1;

      list.push(object);
    }
    else{
      list[parseInt(keyObject[0])] = object;

      this.modelsList.set(key, list);
    }

    this.saveList(key, list);
  }

  static deletar(key: string, id: number): any{
    var list = this.modelsList.get(key);

    const indices = Object.keys(list)
                          .filter(key =>{ return list[key] && list[key].id !== id });

    var novoArray = [];

    if(indices!=undefined)
    for(var i  in indices){
      novoArray.push(list[parseInt(indices[i])]);
    }

    this.saveList(key, novoArray);

    return novoArray;
  }

  public static saveList(key: string, object: any){
    this.initialize();

    StorageUtil.saveList(key, object);
  }
}
