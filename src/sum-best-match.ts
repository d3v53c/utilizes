import find from 'lodash/find'
import maxBy from 'lodash/maxBy'
import mean from 'lodash/mean'
import { findBestMatch } from 'string-similarity'

export interface Rating {
  target: string;
  rating: number;
}
export interface BestMatch {
  ratings: Rating[];
  bestMatch: Rating;
}

export const sumBestMatch = (mainStrings: string[], targetStrings: string[]) => {

  const
    allMainRatings = mainStrings.map(str => findBestMatch(str, targetStrings).ratings),
    ratings: Rating[] = targetStrings.map(target => ({
      target,
      rating: mean(allMainRatings.map(rates => find(rates, { target }).rating))
    }))

  return <BestMatch>{
    ratings,
    bestMatch: maxBy(ratings, 'rating')
  }

}

export default sumBestMatch