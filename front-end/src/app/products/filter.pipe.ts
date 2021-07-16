import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,args:number): any {
    if(value.length >args){
      return value.substr(0,args)+ '...'
    }
    return value
  }

}
