import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

  transform(hero: Hero ): string {
    if(!hero.id && !hero.alt_img) {
      return 'assets/no.image.png'
    }
    if(hero.alt_img) return hero.alt_img // retorna una url amb la imatge i descarta la de la base de dades ( opció dinàmica)

    return `assets/heroes/${hero.id}.jpg`
  }

}
