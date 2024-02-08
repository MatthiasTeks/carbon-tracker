import { Arg, Authorized, Int, Query, Resolver } from 'type-graphql';
import { Like } from 'typeorm';
import { GraphQLError } from 'graphql';
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

  @Authorized()
  @Query(() => ActivityEntry)
  async getActivityEntryById(@Arg('activityEntryId', () => Int) id: number) {
    const activityEntry = await ActivityEntry.findOne({
      where: { id },
      relations: { category: true },
    });
    if (!activityEntry) throw new GraphQLError('Not found');
    return activityEntry;
  }
}
