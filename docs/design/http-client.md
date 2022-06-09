# HttpClient

## 使用案例

- 请求前后的拦截器
- 统一错误处理
- 请求队列
  - 错误弹窗是否阻塞强求队列
- 管道流的使用

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
