import Typography from '@/components/commons/typography/Typography';

export default function ActivityEntryWidgetSample() {
  return (
    <div className='flex justify-between p-2 border border-b-black mb-4'>
      <div>
        <img alt='' src='/car.svg' width={35} height={35} />
      </div>
      <div className='flex flex-col'>
        <div>
          <Typography className='poppins-bold text-dark_green'>
            Trajet voiture chez Denis
          </Typography>
        </div>
        <div>
          <Typography className='text-xs text-dark_green'>
            11 septembre 2023
          </Typography>
        </div>
      </div>
      <div className='flex flex-col text-right'>
        <div>
          <Typography className='text-medium_blue poppins-bold text-lg'>
            54 Kg
          </Typography>
        </div>
        <div>
          <Typography className='text-medium_blue'>CO2</Typography>
        </div>
      </div>
    </div>
  );
}
