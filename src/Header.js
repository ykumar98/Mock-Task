import { DropdownButton, Container, Navbar, Nav, Stack } from "react-bootstrap";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { logo } from "./data";
export const Header = () => (
  <Navbar bg="light">
    <img
      src={logo}
      width="160"
      height="50"
      className="d-inline-block align-top"
      alt="#"
    />
    <Container>
      <Nav>
        <Stack direction="horizontal" gap={3}>
          <Nav.Link href="#home">
            <p id="p">Proposal</p>
          </Nav.Link>
          <NavigateNextOutlinedIcon />
          <Navbar.Brand>Create Proposal </Navbar.Brand>
        </Stack>
      </Nav>
    </Container>
    <Stack direction="horizontal" gap={3}>
      <NotificationsOutlinedIcon />
      <AccountCircleIcon />
      <DropdownButton
        variant="outline-secondary"
        title="Hentry Wilson"
        id="input-group-dropdown-1"
      ></DropdownButton>
    </Stack>
  </Navbar>
);
