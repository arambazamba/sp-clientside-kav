import { SPList } from "./SPList";

export default class MockHttpClient {
  private static _items: SPList[] = [
    { Title: "Mock List 1", Id: "1" },
    { Title: "Mock List 2", Id: "2" },
    { Title: "Mock List 3", Id: "3" },
    { Title: "Mock List 4", Id: "4" },
    { Title: "Mock List 5", Id: "5" },
  ];

  public static get(restUrl: string, options?: any): Promise<SPList[]> {
    return new Promise<SPList[]>((resolve) => {
      resolve(MockHttpClient._items);
    });
  }
}
