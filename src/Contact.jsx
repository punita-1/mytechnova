import React from "react";

import styled, { createGlobalStyle } from "styled-components";
// import img from 'C:/Users/punit/mytechnova2024project/public/images/contactus.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url('public/images//download.png');
    background-size: cover; 
    background-repeat: no-repeat; 
    margin: 0; /* Reset default margin */
    padding: 0; /* Reset default padding */
    
  }
`;

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

    input {
      width: 40rem;
      margin: auto;
      border-radius: 4px;
      font-size:14px;
    }

    // textarea{
    //   font-size:14px;
    // }

    // h2{
    //   size:10px;
    // }


    .container {
      margin-top: -3rem;
      text-align: center;
      background-color: rgb(226 218 218 / 35%);
      border: 1px solid #0a58ca;
      border-radius: 10px;
      padding: 1rem;
      max-width: 42rem;
      font-size: 16px;

      .contact-form {
        margin: auto;
        .contact-inputs input[type="text"],
        .contact-inputs input[type="email"],
        .contact-inputs textarea {
        text-transform: none;
        }

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            border-radius: 6px;
            max-width:100%;
            height:45px;
            padding:10px;

            &:hover {
              background-color: ${({ theme }) => theme.colors.blue};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: white
              transform: scale(0.9);
            }
          }
        }
      }
    }

    .common-heading {
      color: white;
      font-size:30px;
      opacity:0.5;
      margin:14px;
    }


    .input-group-text {
      font-size: 21px; /* Increase the font size of the icon */
    }

    .form-control::placeholder {
      font-size: 15px; /* Increase the font size of the placeholder */
    }

   
  `;

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="container">
          <h2 style={{color:'rgb(0 0 0)' }} className="common-heading">Feel Free to Contact us</h2>
          <div className="contact-form">
            <form action="#" method="POST" className="contact-inputs">
              <div className="input-group mb-3 col-10" style={{ height: '39px' }}>
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1" style={{ height: '100%' }}>
                    <i className="bi bi-person-fill" style={{ lineHeight: '26px' }}></i>
                  </span>
                </div>
                <input type="text" className="form-control" placeholder="Name" aria-describedby="basic-addon1" style={{ height: '100%' }} />
              </div>
              <div className="input-group mb-3 col-10" style={{ height: '39px' }}>
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1" style={{ height: '100%' }}>
                    <i className="bi bi-envelope-at-fill" style={{ lineHeight: '26px' }}></i>
                  </span>
                </div>
                <input type="email" className="form-control" placeholder="Email" aria-describedby="basic-addon1" style={{ height: '100%' }} />
              </div>
              <textarea name="message" cols="20" rows="6" autoComplete="off" placeholder="Write your message here." className="form-control" required></textarea>
              <input type="submit" value="Send" style={{backgroundColor:"#0d6efd"}}/>
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Contact;