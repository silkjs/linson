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

## 探讨

### 数据请求

后端自定义返回结构，可以在拦截器里统一处理公共逻辑（比如根据 code 码判断成功和失败，然后程序进入合适的后续流程，错误提示等）

部分错误的后续处理需要依据错误消息（是否有必要）

登录接口（1:密码错误;2:需要换有验证码的登录接口）
