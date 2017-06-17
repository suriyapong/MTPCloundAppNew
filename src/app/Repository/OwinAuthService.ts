import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class OwinAuthService {
  private baseUrl = '';
  private token ='';
  private userName ='';
  constructor(private http: Http) { }

  public SetBaseUrl(url:string){
    this.baseUrl = url;     
  }
  private SaveToken(token:string){
    this.token = token;
  }

  public GetToken():string{
      return  this.token;
  }
  private SaveUserName(userName:string){
    this.userName = userName;
  }
  public GetUserName():string{
      return  this.userName;
  }

  public SignIn(userName: string, password: string): Observable<string> {
        let url = this.baseUrl + "/Token";
        let body = 'username=' + userName
            + '&password=' + password
            + '&grant_type=password'
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        let options = new RequestOptions({ headers: headers });
      
        return this.http.post(url, body, options)
            .map(response => {
                let au = response.json();
                this.token = au.access_token;
                this.userName =  au.userName; 

                return au.userName;
            });
    }

    public SignUp(email :string,password :string,confirmPassword :string):Observable<boolean>{
     
    let url = this.baseUrl + '/api/Account/Register';
    let body =JSON.stringify({
                  Email:email,
                  Password:password,
                  ConfirmPassword:confirmPassword
                });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
   
    return this.http.post(url,body,options)
                    .map(response => response.status === 200);    
  }
  
  public SignOut():Observable<boolean>{
       this.SaveToken('');
       return Observable.of(true);
  }
  
  public GenerateHeaders():Headers{
      return new Headers({ 'Authorization': 'Bearer ' + this.token });
  }    

}