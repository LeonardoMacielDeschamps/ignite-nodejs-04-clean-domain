import { Entity } from '../../core/entities/entity'
import { Slug } from './value-objects/slug'

interface QuestionProps {
  slug: Slug
  title: string
  content: string
  authorId: string
}

export class Question extends Entity<QuestionProps> {

}