export class StorageUtil{

  static getList(key: string): any[]{
    if(localStorage.getItem(key) == undefined || localStorage.getItem(key)==null){
      return [];
    }
    else{
      return JSON.parse(localStorage.getItem(key)!);
    }
  }

  static saveList(key: string, value: any){
    localStorage.setItem(key, JSON.stringify(value));
  }
}
