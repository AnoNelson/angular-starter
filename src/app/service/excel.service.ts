import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import * as XLSX from 'xlsx';
import * as FileSaver from "file-saver";

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  data: any = "";
  isLoginSubject = new Subject<any>();
  excel = this.isLoginSubject.asObservable();
  constructor() { }

  excelread(e): any {
    this.data = "";
    let file: any
    let returndata: any;
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


  exportExcel(csvData: any, fileName: string): any {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    let ws = XLSX.utils.json_to_sheet(csvData);
    ws["A1"].s = {
      font: {
        name: "宋体",
        sz: 24,
        bold: true,
        color: { rgb: "#0066B2" },
      },
    };
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, {
      bookType: "xlsx",
      type: "array"
    });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  }
}