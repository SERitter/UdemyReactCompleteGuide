import { useRouteError } from 'react-router-dom';

import PageContent from '../components/PageContent';
import MainNavigation from '../components/MainNavigation';

export default function Error() {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    // message = JSON.parse(error.data).message;

    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'These are not the files you are looking for.';
    message = 'The droids could not find your lightsaber.';
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
