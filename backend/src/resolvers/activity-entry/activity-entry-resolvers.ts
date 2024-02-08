import { Arg, Authorized, Int, Query, Resolver } from 'type-graphql';
import { Like } from 'typeorm';
import ActivityEntry from '../../entities/activity-entry/activity-entry';

@Resolver(ActivityEntry)
export default class ActivityEntryResolver {
  @Authorized()
  @Query(() => [ActivityEntry])
  async activityEntries(
    @Arg('categoryId', () => Int, { nullable: true }) categoryId?: number,
    @Arg('name', { nullable: true }) name?: string,
  ) {
    return ActivityEntry.find({
      relations: { category: true },
      where: {
        name: name ? Like(`%${name}%`) : undefined,
        category: {
          id: categoryId,
        },
      },
    });
  }
}
