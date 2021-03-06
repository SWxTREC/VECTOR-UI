import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ModelService {
    data: {};

    constructor(private http: HttpClient) { }

    submitSinglePointRequest( payload: any, id?: string ) {
        const url = id ? '/singlepoint/' + id : '/singlepoint';
        return this.http.post<any>( environment.vectorApi + url , payload);
    }

    submitGeometryFile( name: string, file?: any ) {
        if ( file ) {
            const formData = new FormData();
            formData.append('file', file);
            return this.http.post<any>( environment.vectorApi + '/geometry', formData );
        } else {
            return this.http.post<any>( environment.vectorApi + '/geometry/' + name, {});
        }
    }

    getImage( id: string ) {
        return this.http.get<any>( environment.vectorApi + '/image/' + id, { responseType: 'blob' as 'json' } );
    }
}
