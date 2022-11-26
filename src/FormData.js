import { Stack, Button, Row, Col, Form } from "react-bootstrap";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
export const FormData = ({ values, handleChange, errors }) => {
  return (
    <>
      <Row>
        <Col xs={12} md={4}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter"
              onChange={handleChange}
              value={values.name}
              name="name"
              isInvalid={errors.name ? true : false}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={4}>
          <Form.Group className="mb-3" controlId="dateofbirth">
            <Form.Label>Date of Birth*</Form.Label>
            <Form.Control
              placeholder="DD/MM/YYYY"
              onChange={handleChange}
              value={values.dateOfBirth}
              name="dateOfBirth"
              isInvalid={errors.dateOfBirth ? true : false}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={4}>
          <Form.Group className="mb-3" controlId="mobile" name="mobile">
            <Form.Label>Mobile*</Form.Label>
            <Form.Control
              placeholder="Enter"
              onChange={handleChange}
              value={values.mobile}
              isInvalid={errors.mobile ? true : false}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <Form.Group className="mb-3" controlId="occupation">
            <Form.Label>Occupation*</Form.Label>
            <Form.Select
              onChange={handleChange}
              value={values.occupation}
              name="occupation"
              isInvalid={errors.occupation ? true : false}
            >
              <option>Select</option>
              <option value="SE-1">SE-1</option>
              <option value="SE-2">SE-2</option>
              <option value="Team Leader">Team Leader</option>
              <option value="Project Manager">Project Manager</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs={12} md={4}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter"
              onChange={handleChange}
              value={values.email}
              name="email"
              isInvalid={errors.email ? true : false}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={4}>
          <Form.Group className="mb-3" controlId="gender">
            <Form.Label>Gender</Form.Label>
            <Form.Select
              onChange={handleChange}
              value={values.gender}
              name="gender"
            >
              <option>Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female </option>
              <option value="Others">Others</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <Form.Group className="mb-3" controlId="annual">
            <Form.Label>Annaul Income*</Form.Label>
            <Form.Control
              name="annualIncome"
              onChange={handleChange}
              value={values.annualIncome}
              isInvalid={errors.annualIncome ? true : false}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={4}>
          <Form.Group className="mb-3" controlId="gst">
            <Form.Label>GST Type</Form.Label>
            <Form.Control
              placeholder="Enter"
              name="gstType"
              onChange={handleChange}
              value={values.gstType}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={4}>
          <Form.Group className="mb-3" controlId="gstid">
            <Form.Label>
              GST ID Number
              <InfoOutlinedIcon fontSize="small" />
            </Form.Label>
            <Form.Control
              placeholder="Enter"
              name="gstId"
              onChange={handleChange}
              value={values.gstId}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <Form.Group className="mb-3" controlId="nationality">
            <Form.Label>Nationality</Form.Label>
            <Form.Select
              name="nationality"
              onChange={handleChange}
              value={values.nationality}
            >
              <option>Select</option>
              <option value="India">India</option>
              <option value="China">Pakistan</option>
              <option value="China">China</option>
              <option value="Sri lanka">Sri lanka</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs={12} md={4}>
          <Form.Group className="mb-3" controlId="aadhaar">
            <Form.Label>Enter the last 4 digits of Aadhaar Number </Form.Label>
            <Form.Control
              placeholder="Enter"
              name="aadhaar"
              onChange={handleChange}
              value={values.aadhaar}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={4}>
          <Form.Group className="mb-3" controlId="reasons">
            <Form.Label>Reason for probability</Form.Label>
            <Form.Select
              name="reason"
              onChange={handleChange}
              value={values.reason}
            >
              <option>Select</option>
              <option>Default select</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Stack direction="horizontal" gap={3}>
          <div className="bg-light ">
            <Button variant="outline-primary">Back</Button>
          </div>
          <div className="bg-light  ms-auto">
            <Button variant="outline-primary" disabled>
              save as draft
            </Button>
          </div>
          <div className="bg-light ">
            <Button
              style={{ "background-color": "darkblue", border: "darkblue" }}
              type="submit"
            >
              Next
            </Button>
          </div>
        </Stack>
      </Row>
    </>
  );
};
