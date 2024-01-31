import { Resolver, Arg, Query } from 'type-graphql';
import { Like } from 'typeorm';
import Book from '../entities/book';

@Resolver(Book)
class BookResolver {
  @Query(() => [Book])
  async tags(@Arg('title', { nullable: true }) title: string) {
    return Book.find({
      where: { title: title ? Like(`%${title}%`) : undefined },
      order: { id: 'desc' },
    });
  }
}

export default BookResolver;
