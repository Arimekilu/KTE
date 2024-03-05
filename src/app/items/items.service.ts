import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {myItem} from "./item.interface";
import {map, Observable} from "rxjs";

@Injectable()

export class ItemsService {
  constructor(private http: HttpClient) {
  }

  private getItemById (id: string): Observable<myItem> {
    return this.http.get<myItem>(`https://autorepair-c20c6-default-rtdb.europe-west1.firebasedatabase.app/items/${id}.json`).pipe(
      map((response) => {
        return {
          ...response,
          id: id
        }
      })
    )
  }

  public getItemById$ (id: string) {
    return this.getItemById(id)
  }

  private getAllItems (): Observable<myItem[]> {
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

  private deleteItem (id: string) {
    return this.http.delete(`https://autorepair-c20c6-default-rtdb.europe-west1.firebasedatabase.app/items/${id}.json`)
  }

  public deleteItem$ (id: string) {
    return this.deleteItem(id)
  }

}
