import ListBooks from '../example/Book';
import Title from '../example/Title';
import LastActivitiesListWidget from './lastActivitiesList/LastActivitiesListWidget';

export default function DashboardLayout() {
  return (
    <div className='flex h-screen text-black bg-white'>
      <div className='w-[90px]'>nav</div>
      <div className='w-7/12 border border-sky-500'>
        <div className='h-3/4 border border-sky-500'>
          <div className='bg-light_grey '>
            <h1>Bienvenue</h1>
            Voici un résumé de vos dépenses mensuelles
            <ListBooks />
            <Title />
          </div>
        </div>
        <div>down</div>
      </div>
      <div className='border border-sky-500 w-5/12 p-7'>
        <LastActivitiesListWidget />
      </div>
    </div>
  );
}
