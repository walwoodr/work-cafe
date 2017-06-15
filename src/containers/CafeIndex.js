// Libs
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

// Actions
import { loadingApp, appLoaded, viewingComponent } from '../actions/app_state_actions';

// Components
import IndexCafe from '../components/IndexCafe';

// Styles
import '../styles/cafeIndex.css';

export class CafeIndex extends React.Component {
  componentWillMount(){
    if (this.props.cafes.length === 0 ) {
      this.props.viewingComponent("search");
      this.props.history.push("/search");
    }
  }

  render(){
    var divClass
    if (this.props.app_state.viewingComponent === "cafeIndex"){
      divClass = "cafes-index-full"
    } else {
      divClass = "cafes-index-min"
    }

    var groupSize = 3;
    var cafeHTML = this.props.cafes.map((cafe) => {
        return <IndexCafe cafe={cafe} key={cafe.id} viewingComponent={this.props.viewingComponent.bind(null, "cafe")} />;
    }).reduce(function(r, element, index) {
        index % groupSize === 0 && r.push([]);
        r[r.length - 1].push(element);
        return r;
    }, []).map(function(rowContent, index) {
        return <div className="row" key={index}><div className="index-row">{rowContent}</div></div>;
    });

    return (

      <div className={divClass}>
        {cafeHTML}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {cafes: state.cafes, app_state: state.app_state}
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadingApp: loadingApp,
    appLoaded: appLoaded,
    viewingComponent: viewingComponent
  }, dispatch)
}

const ConnectedCafeIndex = withRouter(connect(mapStateToProps, mapDispatchToProps)(CafeIndex));

export default ConnectedCafeIndex;
