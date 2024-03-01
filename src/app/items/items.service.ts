import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {myItem} from "./item.interface";
import {map} from "rxjs";

@Injectable()

export class ItemsService {
  constructor(private http: HttpClient) {
  }
  private getAllItems () {
    return this.http.get('https://autorepair-c20c6-default-rtdb.europe-west1.firebasedatabase.app/items.json').pipe(
      map((response: { [key: string]: any }) => {
        return Object.keys(response).map((key) => ({
          ...response[key],
          id: key,
        }));
      })
    );
  }
  public allItems$ () {
    return this.getAllItems()
  }

  private setItem (item: myItem) {
    return this.http.post('https://autorepair-c20c6-default-rtdb.europe-west1.firebasedatabase.app/items.json', item)
  }

  public setItem$ (item: myItem) {
    return this.setItem(item)
  }

}
