import React from "react";
// import styled from "styled-components";

// const Contact = () => {
//   const Wrapper = styled.section`
//   padding: 9rem 0 5rem 0;

//   .container {
//     margin-top: 6rem;
//     text-align: center;

//     .contact-form {
//       max-width: 50rem;
//       margin: auto;

//       .contact-inputs input[type="text"],
//       .contact-inputs input[type="email"],
//       .contact-inputs textarea {
//         text-transform: none;
//       }

//       .contact-inputs {
//         display: flex;
//         flex-direction: column;
//         gap: 3rem;

//         input[type="submit"] {
//           cursor: pointer;
//           transition: all 0.2s;

//           &:hover {
//             background-color: ${({ theme }) => theme.colors.white};
//             border: 1px solid ${({ theme }) => theme.colors.btn};
//             color: ${({ theme }) => theme.colors.btn};
//             transform: scale(0.9);
//           }
//         }
//       }
//     }
//   }
// `;
//   return (<Wrapper>
//     <h2 className="common-heading">Feel Free to Contact us</h2>
//     <div className="container">
//       <div className="contact-form">
//         <form action="#" method="POST" className="contact-inputs">
//           <input type="text" name="Username" placeholder="Username" autoComplete="off" required />
//           <input type="email" name="Email" placeholder="Email" autoComplete="off" required />
//           <textarea name="message" cols='30' rows='6' autoComplete="off" required></textarea>
//           <input type="submit" value='send' />
//         </form>
//       </div>
//     </div>
//   </Wrapper>
//   );
// };

// export default Contact;
// import React from "react";
import styled, { createGlobalStyle } from "styled-components";
// import img from 'C:/Users/punit/mytechnova2024project/public/images/contactus.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${img}); /* Set background image for the entire page */
    background-size: cover; /* Cover the entire viewport */
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
    }

    textarea {
      width: 40rem;
      margin: auto;
      border-radius: 4px;
    }

    .container {
      margin-top: -3rem;
      text-align: center;
      background-color: rgba(226, 218, 218, 0.7);
      border: 1px solid #0a58ca;
      border-radius: 10px;
      padding: 2rem;
      max-width: 50rem;

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
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            border-radius: 10px;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }

    .common-heading {
      color: white;
    }

    @media (max-width: 768px) {
      .container {
        padding: 2rem
        width: 40rem; /* Adjust padding for mobile view */
        height:65rem;
      }

      input{
        width: 40rem;
        margin: auto;
      border-radius: 4px;
      }

      textarea {
        width: 40rem;
        margin: auto;
        border-radius: 4px;
      }
    }
  `;

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="container">
          <h2 style={{color: 'black'}} className="common-heading">Feel Free to Contact us</h2>
          <div className="contact-form">
            <form action="#" method="POST" className="contact-inputs">
              <input type="text" name="Username" placeholder="Username" autoComplete="off" required />
              <input type="email" name="Email" placeholder="Email" autoComplete="off" required />
              <textarea name="message" cols="30" rows="6" autoComplete="off" placeholder="Write your message here." required></textarea>
              <input type="submit" value="send" />
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Contact;