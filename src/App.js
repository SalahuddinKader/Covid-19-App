import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import style from './App.module.css';
import { fetchData } from './api';
class App extends Component {
  state = {
    data: {},
    country: '',
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={style.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <footer className="footer">
          <p>@ Salahuddin kader</p>
        </footer>
      </div>
    );
  }
}

export default App;
