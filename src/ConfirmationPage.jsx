import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button, BackButton} from 'react-onsenui';
import MainPage from './MainPage'


export default class ConfirmationPage extends React.Component {
  pushPage() {
    this.props.navigator.pushPage({component: MainPage});
  }

  popPage() {
    this.props.navigator.popPage();
  }

  renderToolbar() {
    return (
      <Toolbar>
      // back takes you back to the camera plugin
        <div className="left"><BackButton>Back</BackButton></div>
        <div className="center">Confirmation page</div>

      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <p style={{textAlign: 'center'}}>
        Confirms: The data has been saved to the server
        </p>
        <p style={{textAlign: 'center'}}>
¸          <Button onClick={this.pushPage.bind(this)}>Done</Button>
        </p>
      </Page>
    );
  }

}