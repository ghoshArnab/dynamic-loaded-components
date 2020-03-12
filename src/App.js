import React from 'react';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Button , Link } from './components'


function App() {
  return (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab>Default tab</Tab>
          <Tab>Button</Tab>
          <Tab>Link</Tab>
        </TabList>

        <TabPanel>
          <h2> blank default tab</h2>
        </TabPanel>
        <TabPanel>
          <h2>Button control with nested dynamically imported components</h2>
          <Button />
        </TabPanel>

        <TabPanel>
          <h2>Plain link control</h2>
          <Link />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
