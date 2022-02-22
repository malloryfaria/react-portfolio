import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center">
        <MDBRow>
          <MDBCol md="6">
          </MDBCol>
          <MDBCol md="6">
            <h6 className="footer-title">Get in touch</h6>
            <ul>
              <li className="list-unstyled">
              <a href="mailto:mallory.faria@gmail.com">mallory.faria@gmail.com</a>
              </li>
              <li className="list-unstyled">
              <a href="https://github.com/malloryfaria">GitHub</a>
              </li>
              <li className="list-unstyled">
              <a href="https://www.linkedin.com/in/malloryfaria/">LinkedIn</a>
              </li>
              <li className="list-unstyled">
              <a href="https://stackoverflow.com/users/14356874/mallory">StackOverflow</a>
              </li>
              
            </ul>
          </MDBCol>
        </MDBRow>
        
      </MDBContainer>
      <h6>&copy; {new Date().getFullYear()} Copyright</h6>
    </MDBFooter>
  );
}

export default FooterPage;
