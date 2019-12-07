import React from 'react';
import './tabContent.scss';
import MentorList from './../MentorList/MentorList.js';
import MentorSort from './../MentorSort/MentorSort.js';
import BlogContainer from './../BlogContainer/BlogContainer.js';
import ProjectCard from './../ProjectCardFlat/ProjectCardFlat.js';
import ProjectCategoryForm from './../ProjectCategory/ProjectCategory.js';
import DocumentList from './../DocumentList/DocumentList.js';
import StickyOverLay from '../../Common/StickyOverLay/StickyOverLay';
import MentorVotes from '../MentorList/MentorVotes';

class TabContent extends React.Component {
  constructor(props) {
    super(props);
    let mentorList = [
      {
        title: 'Vikas Sheelvant',
        designation: 'Senior Developer',
        skills: 'HTML, CSS, JS, React js',
        abouttMentor: 'abcdfiowenroiemni32kmre ewr32er32ef fewfd23r32 f ewr32',
        rate: '50',
        domain: 'Web Development'
      },
      {
        title: 'Nidhun PV',
        designation: 'Lead Developer',
        skills: 'HTML, CSS, JS, React js',
        abouttMentor: 'abcdfiowenroiemni32kmre ewr32er32ef fewfd23r32 f ewr32',
        rate: '80',
        domain: 'AWS Development'
      },
      {
        title: 'Bhuvanesh Reddy',
        designation: 'Senior Developer',
        skills: 'HTML, CSS, JS, React js',
        abouttMentor: 'abcdfiowenroiemni32kmre ewr32er32ef fewfd23r32 f ewr32',
        rate: '30',
        domain: 'AWS Development'
      }
    ]
    this.state = {
      mentorList,
      filteredMentorList: mentorList
    }
    this.filterMentors = this.filterMentors.bind(this);
    this.onChangeDomain = this.onChangeDomain.bind(this);
  }

  filterMentors(value) {
    let priceFilteredData = this.state.mentorList.filter((item) =>
      item.rate <= value 
    );

    this.setState({
      filteredMentorList: priceFilteredData
    });
  }

  onChangeDomain(e) {
    let domainFilteredData = this.state.mentorList.filter((item) =>
      item.domain === e.target.value 
    );

    this.setState({
      filteredMentorList: domainFilteredData
    });
  }

  render() {
    return (
      <div className="tab-content col-md-9 col-sm-9 col-12 offset-md-1 offset-sm-1 mt-2" id="pills-tabContent">
        {/* <SectionTabs /> */}
        <div className="tab-pane fade show active col-10 col-sm-11 offset-1" id="pills-mentors" role="tabpanel" aria-labelledby="pills-mentor-tab">
          <div className="row mt-2 mb-4">
            <MentorSort 
              filterMentors = { this.filterMentors } 
              onChangeDomain= { this.onChangeDomain }/>
            <MentorList mentorList = { this.state.filteredMentorList }/>
            <StickyOverLay>
              <MentorVotes />
            </StickyOverLay>
          </div>
        </div>

        <div className="tab-pane fade" id="pills-document" role="tabpanel" aria-labelledby="pills-document-tab">
          <div className="row mt-2 mb-4">
            <DocumentList />
          </div>
        </div>

        <div className="tab-pane fade" id="pills-blog" role="tabpanel" aria-labelledby="pills-blog-tab">
          <div className="row mt-2 mb-4">
            <BlogContainer />
          </div>
        </div>

        <div className="tab-pane fade" id="pills-project" role="tabpanel" aria-labelledby="pills-project-tab">
          <div className="row mt-2 mb-4">
            <ProjectCategoryForm />
            <ProjectCard
              title="Project Title Here"
              cardText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap."
            />
          </div>
        </div>

      </div>
      )
  }
}

export default TabContent;
