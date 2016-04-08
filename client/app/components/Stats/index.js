import React, { Component } from 'react'
import Modal from 'react-modal';
import { polygon } from 'turf'
import Map from '../Map'
import Header from '../Header'
import Histogram from './chart'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import regionToCoords from '../Map/regionToCoords'
import searchHotProjectsInRegion from './searchHotProjects'
import searchFeatures from './searchFeatures'
import style from './style.css'


const hotProjectsModalStyles = {
  overlay: {
    backgroundColor: 'rgba(60,60,60, 0.5)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '350px',
    maxWidth: '512px',
    borderRadius: '4px',
    paddingTop: '25px',
    paddingBottom: '35px',
    paddingLeft: '35px',
    paddingRight: '35px'
  }
}

class Stats extends Component {
  state = {
    features: [],
    hotProjects: [],
    hotProjectsModalOpen: false,
    updating: false
  }

  render() {
    var contributors = {}
    var features = this.state.features
    if (this.props.stats.timeFilter !== null) {
      features = features.filter(feature =>
        feature.properties._timestamp >= this.props.stats.timeFilter[0]
        &&
        feature.properties._timestamp <= this.props.stats.timeFilter[1]
      )
    }
    if (this.props.stats.experienceFilter !== null) {
      features = features.filter(feature =>
        feature.properties._userExperience >= this.props.stats.experienceFilter[0]
        &&
        feature.properties._userExperience <= this.props.stats.experienceFilter[1]
      )
    }
    features.forEach(f => {
      contributors[f.properties._uid] = true
    })
    const numContribuors = Object.keys(contributors).length
    // todo: loading animation if region is not yet fully loaded
    return (
      <div id="stats">
        <ul className="metrics">
          <li><span className="number">{features.length}</span><br/><span className="descriptor">Buildings</span></li>
          <li><span className="number"><a className="link" onClick={::this.openHotModal}>{this.state.hotProjects.length}</a></span><br/><span className="descriptor">HOT Projects</span></li>
          <li><span className="number">{numContribuors}</span><br/><span className="descriptor">Contributors</span></li>
        </ul>
        {this.state.updating ? 'updating…' : ''}

        <Modal
          isOpen={this.state.hotProjectsModalOpen}
          onRequestClose={::this.closeHotModal}
          style={hotProjectsModalStyles}>
          <h3>HOT Projects</h3>
          <ul className="hot-projects">
          {this.state.hotProjects.map(p =>
            <li key={p.id}><a className="link" href={"http://tasks.hotosm.org/project/"+p.id}>{'#'+p.id+' '+p.properties.name}</a></li>
          )}
          </ul>
        </Modal>
        <Histogram key={this.props.mode} data={this.state.features} mode={this.props.mode}/>
      </div>
    )
  }

  componentDidMount() {
    if (this.props.map.region) {
      ::this.update(this.props.map.region)
    }
  }

  componentWillReceiveProps(nextProps) {
    // check for changed map parameters
    if (nextProps.map.region !== this.props.map.region) {
      ::this.update(nextProps.map.region)
    }
    // todo: reset time/experience filter when changing mode from recency to experience or vv
  }

  update(region) {
    region = polygon(regionToCoords(region))
    this.setState({ updating: true })
    searchFeatures(region, function(err, data) {
      this.setState({
        features: data.features,
        updating: false
      })
    }.bind(this))
    const hotProjects = searchHotProjectsInRegion(region)
    this.setState({ hotProjects })
  }


  openHotModal() {
    this.setState({ hotProjectsModalOpen: true });
  }

  closeHotModal() {
    this.setState({ hotProjectsModalOpen: false });
  }

}


function mapStateToProps(state) {
  return {
    map: state.map,
    stats: state.stats
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stats)