import Typography from '@/components/commons/typography/Typography';
import ActivityEntryWidgetSample from './ActivityEntryWidgetSample';

export default function LastActivitiesListWidget() {
  const entriesNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className='flex flex-col bg-light_grey  p-7 h-full rounded-xl shadow-xl'>
      <div className='mb-6 flex justify-between align-center'>
        <Typography variant='heading'>Dernières dépenses</Typography>
        <div className='cursor-pointer'>
          <img src='/button-plus.svg' alt='' />
        </div>
      </div>
      <div className='flex flex-col'>
        {entriesNumber.map((entry) => {
          return <ActivityEntryWidgetSample key={entry} />;
        })}
      </div>
    </div>
  );
}
