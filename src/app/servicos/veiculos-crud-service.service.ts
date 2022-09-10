import { VeiculosServiceService } from './veiculos-service.service';
import { Injectable } from '@angular/core';
import { Veiculo } from '../models/Veiculos';
import { KEY_VEICULO, MemoreCacheUtil } from '../utils/memory-cache-util';

@Injectable({
  providedIn: 'root'
})
export class VeiculosCrudServiceService {

  constructor(private vService : VeiculosServiceService) { }

  save(veiculo: Veiculo): Promise<Veiculo>{
    const p = new Promise<Veiculo>((resolve, reject) => {
      veiculo.id = MemoreCacheUtil.getList(KEY_VEICULO).length+1;

      this.vService.save(veiculo)
          .then((veiculoSave: Veiculo | undefined)=>{
            if(veiculoSave != undefined){
              MemoreCacheUtil.save(KEY_VEICULO, veiculoSave.id, veiculoSave);

              resolve(veiculoSave);
            }
            else{
              reject('Erro ao cadastrar o veículo');
            }
          })
          .catch(()=>{
            reject('Erro ao cadastrar o veículo');
          });

    });

    return p
  }

  delete(id: number): Promise<boolean>{
    const p = new Promise<boolean>((resolve, reject) => {
      this.vService.delete(id)
          .then(()=>{
              MemoreCacheUtil.deletar(KEY_VEICULO, id);

              resolve(true);
          })
          .catch(()=>{
            reject(false);
          });

    });

    return p
  }

  update(veiculo: Veiculo): Promise<Veiculo>{
    const p = new Promise<Veiculo>((resolve, reject) => {
      this.vService.update(veiculo)
          .then((veiculoSave: Veiculo | undefined)=>{
            if(veiculoSave != undefined){
              MemoreCacheUtil.save(KEY_VEICULO, veiculoSave.id, veiculoSave);

              resolve(veiculoSave);
            }
            else{
              reject('Erro ao atualizar o veículo');
            }
          })
          .catch(()=>{
            reject('Erro ao atualizar o veículo');
          });

    });

    return p
  }

  getById(id: number): Promise<Veiculo>{
    const p = new Promise<Veiculo>((resolve, reject) => {
      let retorno  = MemoreCacheUtil.getItem(KEY_VEICULO, id, null);

      if(retorno==null){
        this.vService.getById(id)
            .then((veiculoSave: Veiculo | undefined)=>{
              if(veiculoSave != undefined){
                resolve(veiculoSave);
              }
              else{
                reject('Erro ao buscar o veículo');
              }
            })
            .catch(()=>{
              reject('Erro ao buscar o veículo');
            });
        }
        else{
          resolve(retorno);
        }
    });

    return p
  }

  getAll():Promise<Veiculo[]>{
    const p = new Promise<Veiculo[]>((resolve, reject) => {
        this.vService.getAll()
            .then((veiculos:Veiculo[]|undefined)=>{
              if(veiculos!=undefined){
                MemoreCacheUtil.saveList(KEY_VEICULO, veiculos);
                resolve(veiculos);
              }
              else
                reject('Erro ao carregar lista');
            })
            .catch(()=>{
              reject('Erro ao carregar lista.');
            });
    });

    return p
  }
}
