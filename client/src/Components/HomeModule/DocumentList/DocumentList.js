import React from 'react';
import './documentList.scss';

import DocumentCard from './../DocumentCard/DocumentCard.js';


class DocumentList extends React.Component {
  render() {
    return (
      <div className="col-md-12 col-sm-12 col-12 docWrap">
      {[1,2,3,4,5,6,7,8].map(items => (
        <div className="docList">
        <DocumentCard
          title="Document Title Here"
          domain="Web Development"
          cardText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap"
          author="Pratik Singh"
          />
        </div>
      ))}
      </div>
    );
  }
}

export default DocumentList;
