import { useState } from "react";
import { Select, Form, Button } from "antd";

const { Option } = Select;

function Main() {

  const [tags, setTags] = useState({ domain: [], skills: [] });
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [backspacePressed, setBackspacePressed] = useState(false);

  function handleTagChange(fieldName, newTags) {
    const uniqueTags = [];
    const existingTags = tags[fieldName].map((tag) => tag.toLowerCase());

    newTags.forEach((tag) => {
      const normalizedTag = tag.toLowerCase();
      if (!existingTags.includes(normalizedTag)) {
        uniqueTags.push(tag);
        existingTags.push(normalizedTag);
      }else{
        // alert("Already Existing Tag...");
      }
    });

    setTags({ ...tags, [fieldName]: [...tags[fieldName], ...uniqueTags] });
    form.setFieldsValue({ [fieldName]: [...tags[fieldName], ...uniqueTags] });
  }

  const handleKeyDown = (e, fieldName) => {
    if (e.keyCode === 13) {
      setOpen(false);
    } else if (e.keyCode === 8 && tags[fieldName].length && !e.target.value) {
      const newTags = tags[fieldName].slice(0, -1);
      setTags({ ...tags, [fieldName]: newTags });
      form.setFieldsValue({ [fieldName]: newTags });
    }
  };
  
  const handleKeyUp = (e, fieldName) => {
    if (e.keyCode === 8 && backspacePressed) {
      // Backspace key is released and was pressed before
      const newTags = tags[fieldName].slice(0, -1); 
      setTags({ ...tags, [fieldName]: newTags });
      setBackspacePressed(false);
    }
  }

  const handleTagDeselect = (tag, fieldName) => {
    const updatedTags = tags[fieldName].filter(t => t !== tag);
    setTags({ ...tags, [fieldName]: updatedTags });
  }

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div>
    <Form
      name='basic'
      style={{ maxWidth: 600 }}
      autoComplete="off"
      form={form}
      onFinish={onFinish}
    >
      <Form.Item label="Domain" name="domain">
        <Select
          mode="tags"
          style={{ width: "100%" }}
          value={tags.domain}
          tokenSeparators={[',']}
          open={open}
          onDropdownVisibleChange={() => setOpen(false)}
          onChange={(newTags)=>handleTagChange('domain', newTags)}
          onKeyDown={(e)=>handleKeyDown(e, 'domain')}
          onKeyUp={(e)=>handleKeyUp(e, 'domain')}
          onDeselect={(tag)=>handleTagDeselect(tag, 'domain')}
        >
          {tags.domain.map((tag) => (
            <Option key={tag} value={tag}>
              {tag}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label="Skills" name="skills">
        <Select
          mode="tags"
          style={{ width: "100%" }}
          value={tags.domain}
          tokenSeparators={[',']}
          open={open}
          onDropdownVisibleChange={() => setOpen(false)}
          onChange={(newTags)=>handleTagChange('skills', newTags)}
          onKeyDown={(e)=>handleKeyDown(e, 'skills')}
          onKeyUp={(e)=>handleKeyUp(e, 'skills')}
          onDeselect={(tag)=>handleTagDeselect(tag, 'skills')}
        >
          {tags.skills.map((tag) => (
            <Option key={tag} value={tag}>
              {tag}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
}

export default Main;