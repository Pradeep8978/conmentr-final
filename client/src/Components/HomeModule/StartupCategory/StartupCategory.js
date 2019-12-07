import React from 'react';
import { withFormik, Form, Field } from 'formik';
// import Yup from 'yup';
import './startupCategory.scss';

const ProjectCategory = ({
  values,
  errors,
  touched,
  isSubmitting
}) => (
  <div className="projForm col-md-12 col-sm-12 pl-0 pr-0 col-12 mb-3">
    <Form className="card">
      <div className="row">
        <div className="col-1 ml-auto">
           <a className="btn btn-trans" type="button" data-toggle="collapse" href="#startupSortForm" aria-expanded="false" aria-controls="startupSortForm"><i className="fa fa-bars"></i></a>
        </div>
      </div>
      <div id="startupSortForm" className="collapse">
        <div className="row">
          <div className="col-md-4 col-sm-4 col-12">
            <h6>Job Type</h6>
            <label className="col-12">
              <Field type="checkbox" name="hourly" checked={values.hourly}/>
              Hourly
            </label>
            <label className="col-12">
              <Field type="checkbox" name="fixedPrice" checked={values.fixedPrice}/>
              Fixed Price
            </label>
          </div>
          <div className="col-md-4 col-sm-4 col-12">
            <h6>Experience Level</h6>
            <label className="col-12">
              <Field type="checkbox" name="beginner" checked={values.beginner}/>
              Beginner
            </label>
            <label className="col-12">
              <Field type="checkbox" name="intermediate" checked={values.intermediate}/>
              Intermediate
            </label>
            <label className="col-12">
              <Field type="checkbox" name="expert" checked={values.expert}/>
              Expert
            </label>
          </div>
          <div className="col-md-4 col-sm-4 col-12">
            <h6>Project Period</h6>
            <label className="col-12">
              <Field type="checkbox" name="week" checked={values.week}/>
              Less than a week
            </label>
            <label className="col-12">
              <Field type="checkbox" name="month" checked={values.month}/>
              Less than a month
            </label>
            <label className="col-12">
              <Field type="checkbox" name="three" checked={values.three}/>
              1-3 months
            </label>
          </div>
          <div className="col-md-4 col-sm-4 col-12">
            <h6>Category</h6>
            <label className="col-12">
              <Field type="checkbox" name="week" checked={values.week}/>
              Category1
            </label>
            <label className="col-12">
              <Field type="checkbox" name="month" checked={values.month}/>
              Category2
            </label>
            <label className="col-12">
              <Field type="checkbox" name="three" checked={values.three}/>
              Category3
            </label>
          </div>
          <div className="col-md-4 col-sm-4 col-12">
            <h6>Location</h6>
            <label className="col-12">
              <Field type="checkbox" name="week" checked={values.week}/>
              Category1
            </label>
            <label className="col-12">
              <Field type="checkbox" name="month" checked={values.month}/>
              Category2
            </label>
            <label className="col-12">
              <Field type="checkbox" name="three" checked={values.three}/>
              Category3
            </label>
          </div>
        </div>
        <div className="row">
          <button className="btn btn-primary-color ml-auto mr-3" disabled={isSubmitting}>Sort</button>
        </div>
      </div>
    </Form>
  </div>
)

const ProjectCategoryForm = withFormik({
  mapPropsToValues({ hourly, fixedPrice, beginner, intermediate, expert, week, month, three}) {
    return {
      hourly: hourly || '',
      fixedPrice: fixedPrice || '',
      beginner: beginner || '',
      intermediate: intermediate || '',
      expert: expert || '',
      week: week || '',
      month: month || '',
      three: three || ''
    }
  },
  handleSubmit(values, {resetForm}) {
        console.log(values);
  }
})(ProjectCategory)

export default ProjectCategoryForm;
