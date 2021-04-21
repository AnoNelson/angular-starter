import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import * as XLSX from 'xlsx';
import { excelName } from '../authentication/app.constant';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  data:any = "";
  isLoginSubject = new Subject<any>();
  excel = this.isLoginSubject.asObservable();
  constructor() { }

excelread(e):any{
    this.data = "";
    let  file:any
    let returndata:any;
     file = e.target.files[0];
     console.log(file)
     const fileReader = new FileReader();
     const rABS = !!fileReader.readAsBinaryString;
     fileReader.readAsArrayBuffer(file);
 
     fileReader.onload = async (e) => {
       const bufferArray = e.target.result;
       const wb: XLSX.WorkBook = XLSX.read(bufferArray, { type: 'buffer' });
       const wsname: string = wb.SheetNames[0];
       const ws: XLSX.WorkSheet = wb.Sheets[wsname];
       const data = await XLSX.utils.sheet_to_json(ws);
       this.isLoginSubject.next(data);
       returndata = data;
   }
 }
}
