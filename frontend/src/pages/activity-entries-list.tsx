import { useQuery } from '@apollo/client';
import { LIST_ACTIVITY_ENTRIES } from '@/graphql/activity-entry/queries/activity-entry.queries';
import {
  ActivityEntriesQuery,
  ActivityEntriesQueryVariables,
} from '@/graphql/generated/schema';

export default function ActivityEntriesList() {
  const { data } = useQuery<
    ActivityEntriesQuery,
    ActivityEntriesQueryVariables
  >(LIST_ACTIVITY_ENTRIES, {
    fetchPolicy: 'no-cache',
  });
  return (
    <main className={`overflow-x-auto p-24`}>
      <table className='table'>
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Date</th>
            <th>Footprint</th>
          </tr>
        </thead>
        <tbody>
          {data?.activityEntries.map((activity) => (
            <tr key={activity.id}>
              <td>{activity.category.name}</td>
              <td>{activity.name}</td>
              <td>{activity.createdAt}</td>
              <td>{activity.input}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
