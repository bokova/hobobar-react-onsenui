import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button, BackButton} from 'react-onsenui';
import ConfirmationPage from './ConfirmationPage'

export default class InputsPage extends React.Component {
  pushPage() {
    this.props.navigator.pushPage({component: ConfirmationPage});
  }

  popPage() {
    this.props.navigator.popPage();
  }

  renderToolbar() {
    return (
      <Toolbar>
      // back takes you back to the camera plugin
        <div className="left"><BackButton>Back</BackButton></div>
        <div className="center">Inputs page</div>

      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <p style={{textAlign: 'center'}}>
        All the inputfields and dropdowns to describe the tree go here
        </p>
        <p style={{textAlign: 'center'}}>
          <Button onClick={this.popPage.bind(this)}>Cancel</Button>
          <Button onClick={this.pushPage.bind(this)}>Save</Button>
        </p>
      </Page>
    );
  }

}