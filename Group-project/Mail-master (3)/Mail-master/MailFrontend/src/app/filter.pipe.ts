import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './student';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(students: Student[], search: string): Student[] {
    if (search === undefined) {
      return students;
    } else {
      return students.filter((value,index,array) => {
        return value.name.toLowerCase().includes(search.toLowerCase());
      });
    }
  }

}
