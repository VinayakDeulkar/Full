import logo from './logo.svg';
import './App.css';
import LoadingButton from './Components/LoadingButton';
import Loading from './Components/Loading';
import Posts from './Components/Posts';
import { Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item lg={3}/>
        <Grid item lg={6}>
          <LoadingButton/>
          <Loading/>
          <Posts/>
        </Grid>
        <Grid item lg={3}/>
      </Grid>
      
    </div>
  );
}

export default App;
