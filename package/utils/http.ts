import { Observable, of } from "rxjs";

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

interface HttpClientAjaxOptions {
  url: string;
  method: "GET" | "POST" | "DELETE";
  options: {
    body?: any;
    headers?: Record<string, string | string[]>;
    params?: Record<string, string | number | boolean | ReadonlyArray<string | number | boolean>>;
  };
}
type HttpClientAjax = (options: HttpClientAjaxOptions) => any;

export interface HttpClientOptions {
  ajax: HttpClientAjax;
  intercept?: (request: HttpClientAjax) => Observable<HttpClientAjax>;
}

export class HttpClient {
  private readonly ajax: HttpClientAjax;
  private readonly intercept: HttpClientOptions["intercept"];
  constructor(options: HttpClientOptions) {
    this.ajax = options.ajax;
    this.intercept = options.intercept;
  }

  get<T>(url: string, options: Omit<HttpClientAjaxOptions["options"], "body"> = {}): Observable<T> {
    return this.ajax({
      url,
      method: "GET",
      options,
    });
  }

  post<T>(url: string, options: Omit<HttpClientAjaxOptions["options"], "params"> = {}): Observable<T> {
    return this.ajax({
      url,
      method: "POST",
      options,
    });
  }

  delete<T>(url: string, options: Omit<HttpClientAjaxOptions["options"], "params"> = {}): Observable<T> {
    return this.ajax({
      url,
      method: "DELETE",
      options,
    });
  }
}
