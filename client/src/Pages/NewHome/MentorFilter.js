import React, { Component } from 'react';
import './MentorFilter.scss';

const filterConfig = [
  {
    label: "Job Type",
    value: "jobType",
    filters: [
      {
        label: "Hourly",
        value: "hourly"
      },
      {
        label: "Fixed Price",
        value: "fixedprice",
      }
    ]
  },
  {
    label: "Experience Level",
    value: "experienceLevel",
    filters: [
      {
        label: 'Beginner Level',
        value: 'beginnerLevel'
      },
      {
        label: 'Intermediate Level',
        value: 'intermediate Level'
      },
      {
        label: 'Expert Level',
        value: 'expertLevel'
      }
    ]
  },
  {
    label: "Project period",
    value: "projectPeriod",
    filters: [
      {
        label: 'Less Than a week',
        value: 'lessThanAWeek'
      },
      {
        label: 'Less Than a Month',
        value: 'lessThanAMonth'
      },
      {
        label: '1-3 Months',
        value: '1-3Months'
      },
      {
        label: 'More Than 3 Months',
        value: 'moreThan3Months'
      }
    ]
  },
]

class MentorFilter extends Component {
  render() {
    return (
      <div className="mentor_filter_container">
        <div className="card-body">
          <div className="">
            <div className="custom-controls-stacked  my-3">
              {
                filterConfig.map((item, i) => {
                  return (
                    <div className="custom-control-title" key={i}>
                      <div className="fill-control-head">{item.label}</div>
                      <div className="custom-control-data">
                        {
                          item.filters.map((subItem, index) => {
                            return (
                              <div className="custom-control-item" key={index}>
                                <label className="custom-control fill-checkbox">
                                  <input type="checkbox" onChange={()=>this.props.onChangeFilter(item, subItem)} className="fill-control-input" />
                                  <span className="fill-control-indicator" />
                                  <span className="fill-control-description">{subItem.label}</span>
                                </label>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  )
                })
              }
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MentorFilter;