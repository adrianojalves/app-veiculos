import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export class ErrorUtil {
  public static handleError(error: HttpErrorResponse)
  {
    if (error.status && error.status === 0) {
      return throwError(() => new Error("Erro interno do sistema."));
    }
    else{
      return throwError(() => new Error("Erro na requisição da api"));
    }
  }
}
