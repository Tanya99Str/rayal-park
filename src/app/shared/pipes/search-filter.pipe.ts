import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterBySearch',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {

  transform(data: any, search: string): any {
    if (!search) {
      return data;
    }
    return data.filter((el) => {
      return el.username.indexOf(search.toLowerCase()) > -1;
    });
  }

}
