import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {myItem} from "./item.interface";

@Injectable()

export class ItemsService {
  constructor(private http: HttpClient) {
  }
  private getAllItems () {
    return this.http.get('')
  }
  public allItems$ () {
    return this.getAllItems()
  }

  private setItem (item: myItem) {
    return this.http.post('', item)
  }

  public setItem$ (item: myItem) {
    return this.setItem(item)
  }

}
