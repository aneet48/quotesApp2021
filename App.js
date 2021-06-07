import * as React from 'react';
import Route from './src/Route';

import ThemeManager, {useTheme} from './src/theme';

export default function App() {
  return (
    <ThemeManager>
      <Route />
    </ThemeManager>
  );
}
