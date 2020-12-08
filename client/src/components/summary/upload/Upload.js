import React from 'react';
import { connect } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import { Button, Container, Form } from 'react-bootstrap';

export const Upload = () => {
  const handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  };

  return (
    <Container className="bg-light my-4 py-4 d-flex flex-column justify-content-center ">
      <h1 className="mb-3" style={{ textAlign: 'center' }}>
        Summary upload
      </h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Editor
          apiKey="6a26puulunw6qsj3xvaxpt9hi12s2y5xhpo6phzako15hbbj"
          initialValue="<p>Enter your summary here</p>"
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

        <Button className="mt-4" variant="primary" type="submit">
          Upload
        </Button>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
