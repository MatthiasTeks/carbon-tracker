import { Resolver, Arg, Query } from "type-graphql";
import { Book } from "../entities/book";
import { Like } from "typeorm";

@Resolver(Book)
class BookResolver {
    @Query(() => [Book])
    async tags(@Arg("title", { nullable: true }) title: string) {
        return await Book.find({
            where: { title: title ? Like(`%${title}%`) : undefined },
            order: { id: "desc" },
        });
    }
}

export default BookResolver