import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function LoginModalForm(props) {
  const { setMessage } = props;
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (form.email && form.password) {
      setMessage("");
      return navigate("/feed");
    }
    return setMessage("Isi email sama password dulu kak.");
  };

  return (
    <Form onSubmit={handleOnSubmit} method="POST">
      <Form.Group className="mb-3" controlId="email">
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleOnChange}
          value={form.email}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleOnChange}
          value={form.password}
        />
      </Form.Group>
      <Button type="submit" className="w-100 mt-4 p-2">
        Login
      </Button>
    </Form>
  );
}
