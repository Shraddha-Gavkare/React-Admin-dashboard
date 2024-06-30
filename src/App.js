import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Dashboard from './pages/Dashboard';
import Tables from './components/Tables/Tables';
import Charts from './components/Charts/Charts';
import CalendarComponent from './components/Calendar/Calendar';
import Kanban from './components/Kanban/Kanban';
import Settings from './pages/Settings';
import { ThemeContext } from './context/ThemeContext';

const App = () => {
  const { darkMode } = React.useContext(ThemeContext);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Sidebar />
        <main style={{ marginLeft: 240, padding: '20px' }}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/tables" component={Tables} />
            <Route path="/charts" component={Charts} />
            <Route path="/calendar" component={CalendarComponent} />
            <Route path="/kanban" component={Kanban} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </main>
      </Router>
    </ThemeProvider>
  );
};

export default App;
