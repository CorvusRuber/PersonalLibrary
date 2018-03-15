import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { MESSAGES } from "../../../environments/environment";
import { Observable } from "rxjs/Rx";

@Injectable()
export class TranslationService {
  private static i18nObj: any = {};
  private static resources = MESSAGES;
  private localization: any;
  private static images = "";
  private fetchedJson: any = null;


  constructor(private http: HttpClient) {
    this.getTranslate().subscribe(res => TranslationService.i18nObj = res);
  }

  public getI18N(): any {
    return TranslationService.i18nObj;
  }

  loadResources() {
    return this.http.get(TranslationService.resources)
      .map((data: Response) => data)
      .toPromise();
  }

  private getTranslate() {
    return this.http.get(TranslationService.resources)
      .map((result: Response) => result.json())
      .do((data) => {
        this.fetchedJson = data;
      })
      .catch(res => {
        this.fetchedJson = "";
        return Observable.of(this.fetchedJson);
      });
  }

}
