import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import { Button, Container, Form } from 'react-bootstrap';
import Select from 'react-select';

export const Upload = () => {
  const handleEditorChange = (content, editor) => {
    setSummary({ ...summary, summaryText: content });
  };
  const [summary, setSummary] = useState({
    title: '',
    category: '',
    summaryText: '<p>Enter your summary here</p>',
  });
  const [categories, setCategories] = useState([
    {
      label: 'Administration',
      value: 'administration',
    },
    {
      label: 'Social Work',
      value: 'socialWork',
    },
    {
      label: 'Accounting',
      value: 'accounting',
    },
    {
      label: 'Humanities',
      value: 'humanities',
    },
    {
      label: 'Engineering',
      value: 'engineering',
    },
    {
      label: 'Medical Studies',
      value: 'medicalStudies',
    },
    {
      label: 'Education',
      value: 'education',
    },
    {
      label: 'Architecture',
      value: 'architecture',
    },
    {
      label: 'Computer Science',
      value: 'computerScience',
    },
    {
      label: 'Psychology',
      value: 'psychology',
    },
    {
      label: 'Social Sciences',
      value: 'socialSciences',
    },
    {
      label: 'Communication',
      value: 'communication',
    },
  ]);

  const onChange = (e) => {
    setSummary({ ...summary, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (summary.category === '' || summary.title === '') {
      console.log('no cat||title');
    }
    console.log(summary);
  };
  return (
    <Container className="bg-light my-4 py-4 d-flex flex-column justify-content-center ">
      <h1 className="mb-3" style={{ textAlign: 'center' }}>
        Summary upload
      </h1>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Group controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            type="text"
            name="title"
            value={summary.title}
            onChange={(e) => onChange(e)}
            placeholder="Enter summary title"
          />
        </Form.Group>

        <Editor
          apiKey="6a26puulunw6qsj3xvaxpt9hi12s2y5xhpo6phzako15hbbj"
          initialValue="<p>Enter your summary here</p>"
          name="summary"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor directionality',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
            ],
            toolbar:
              'undo redo | formatselect  fontselect fontsizeselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify ltr rtl | \
                bullist numlist outdent indent | removeformat | help ',
            font_formats:
              'Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n',
            fontsize_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt',
          }}
          onEditorChange={(content) => handleEditorChange(content)}
        />
        <Form.Group className="mt-4" controlId="formBasicTitle">
          <Form.Label>Select Category</Form.Label>
          <Select options={categories} />
        </Form.Group>

        <Button className="mt-4 w-100" variant="primary" type="submit">
          Upload
        </Button>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
