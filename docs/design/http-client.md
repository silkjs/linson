# HttpClient

```typescript
interface IHttpClient {
  get<T>(url: string): Observable<T>;
  get<T>(
    url: string,
    params: Record<string, string | number | boolean | ReadonlyArray<string | number | boolean>>
  ): Observable<T>;
  post<T>(url: string): Observable<T>;
  post<T>(url: string, body: Record<string, any>): Observable<T>;
  delete<T>(url: string): Observable<T>;
}
```
