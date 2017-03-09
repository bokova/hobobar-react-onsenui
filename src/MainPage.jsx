import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button} from 'react-onsenui';

import ContactsPage from './ContactsPage'
import FormsPage from './FormsPage'
import InputsPage from './InputsPage'

export default class MainPage extends React.Component {
  pushPage() {
    this.props.navigator.pushPage({component: ContactsPage});
  }
  capture() {
    this.props.navigator.pushPage({component: FormsPage});
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className="center">Map page</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <p style={{textAlign: 'center'}}>
          <Button onClick={this.pushPage.bind(this)}>Credits page</Button>
          <Button onClick={this.capture.bind(this)}>Take a picture</Button>

        </p>
      </Page>
    );
  }

}