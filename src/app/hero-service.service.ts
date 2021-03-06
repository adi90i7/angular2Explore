import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock.heroesList';

@Injectable()
export class HeroServiceService {

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

}
