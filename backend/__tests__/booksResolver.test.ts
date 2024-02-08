import { execute } from '../jest.setup';
import Book from '../src/entities/book';
import getNewUser from './helpers/getNewUser';
import getBooksQuery from './operations/getBooks';

describe('Books resolver', () => {
  it('can get a list of books', async () => {
    await Book.create({ title: 'title1', author: 'author1' }).save();
    await Book.create({ title: 'title2', author: 'author2' }).save();

    const res = await execute(getBooksQuery, null, await getNewUser());
    expect(res).toMatchSnapshot();
  });
});
