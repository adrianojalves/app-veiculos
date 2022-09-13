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
          .subscribe({
            next: veiculoSave => {
            if(veiculoSave != undefined){
              MemoreCacheUtil.save(KEY_VEICULO, veiculoSave.id, veiculoSave);

              resolve(veiculoSave);
            }
            else{
              reject('Erro ao cadastrar o veículo');
            }
          },
          error : erro =>{
            reject(erro);
          }
        });

    });

    return p
  }

  delete(id: number): Promise<boolean>{
    const p = new Promise<boolean>((resolve, reject) => {
      this.vService.delete(id)
          .subscribe({
              next: any =>{
              MemoreCacheUtil.deletar(KEY_VEICULO, id);

              resolve(true);
          },
          error : erro =>{
            reject(erro);
          }
        });

    });

    return p
  }

  update(veiculo: Veiculo): Promise<Veiculo>{
    const p = new Promise<Veiculo>((resolve, reject) => {
      this.vService.update(veiculo)
          .subscribe({
            next: veiculoSave =>{
            if(veiculoSave != undefined){
              MemoreCacheUtil.save(KEY_VEICULO, veiculoSave.id, veiculoSave);

              resolve(veiculoSave);
            }
            else{
              reject('Erro ao atualizar o veículo');
            }
          },
          error : erro =>{
            reject(erro);
          }
        });

    });

    return p
  }

  getById(id: number): Promise<Veiculo>{
    const p = new Promise<Veiculo>((resolve, reject) => {
      let retorno  = MemoreCacheUtil.getItem(KEY_VEICULO, id, null);

      if(retorno==null){
        this.vService.getById(id)
            .subscribe({
              next : veiculoSave=>{
                if(veiculoSave != undefined){
                  resolve(veiculoSave);
                }
                else{
                  reject('Erro ao buscar o veículo');
                }
              },
              error : erro =>{
                reject(erro);
              }
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
            .subscribe({
              next: veiculos=>{
              if(veiculos!=undefined){
                MemoreCacheUtil.saveList(KEY_VEICULO, veiculos);
                resolve(veiculos);
              }
              else
                reject('Erro ao carregar lista');
            },
            error : erro =>{
              reject(erro);
            }
          });
    });

    return p
  }
}
