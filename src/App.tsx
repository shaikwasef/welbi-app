import { useCallback } from 'react';
import {CircularProgress} from '@mui/material';

import { ErrorComponent } from './components';
import { apiEndPoints } from './helpers/api-helper';
import useApiGet from './helpers/hooks/use-api-get';
import { IApiError} from './interfaces';

import './App.css';

export function App() {
  // const [reposData, error, loading] = useApi<IRepo>(
  //   apiEndPoints.LOCAL_HOST_REPOS_API
  // );

  // const getComponent = useCallback(
  //   (data: IRepo[], loader: boolean, apiError: IApiError | undefined) => {
  //     if (loader) {
  //       return <CircularProgress className="loaderClass" />;
  //     }
  //     if (apiError) {
  //       return <ErrorComponent error={apiError} />;
  //     }
  //     return <RepositoryContainer repos={sortByDate(data)} />;
  //   },
  //   []
  // );

  return <div>hi</div>;
}
