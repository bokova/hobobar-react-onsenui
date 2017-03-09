import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button, BackButton} from 'react-onsenui';
import InputsPage from './InputsPage'

export default class FormsPage extends React.Component {
  pushPage() {
    this.props.navigator.pushPage({component: InputsPage});
  }

  popPage() {
    this.props.navigator.popPage();
  }

  renderToolbar() {
    return (
      <Toolbar>
      // back takes you back to the camera plugin
        <div className="left"><BackButton>Back</BackButton></div>
        <div className="center">Forms page</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <p style={{textAlign: 'center'}}>
        You arrived here from the camera plugin
        <br />
        Confirm the picture, take another one (back) or cancel altogether
        </p>
        <p style={{textAlign: 'center'}}>
          <Button onClick={this.popPage.bind(this)}>Cancel</Button>
          <Button onClick={this.pushPage.bind(this)}>Next</Button>
        </p>
      </Page>
    );
  }

}