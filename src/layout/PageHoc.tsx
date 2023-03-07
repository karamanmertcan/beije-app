import React from 'react';

import Page from '../components/Page';

const PageHoc =
  (Component: React.ComponentType, pageProps?: any) => (props: any) =>
    (
      <Page {...pageProps}>
        <Component {...props} />
      </Page>
    );

export default PageHoc;
