import React from "react";
import "../styles/new.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const data = [];

function Flowchart() {
  return (
    <>
      <div>
        <Navbar />

        <div className="header">
          <h3>FlowChart</h3>
        </div>

        <section>
          <img src="./images/7.png" />

          {/* <div className="article">
          <p>User Stories / Reasoning</p>
          <p>Why?:</p>

          <p>
            Users will join the page anticipating the release of a erc20 token
            and be able to invest early before the price goes up. Users will
            also be able to sign up to the email listing and socials for
            updates.
          </p>

          <p>
            Landing page: Witness the countdown with the tens of thousands of
            people all around the world to be a part of history of a token
            launch that may become the next big trending crypto. 
            
            </p><p>

            Users will be
            able to participate in a chat with everyone that is connected to the
            page hyping up the coin. 
            </p><p>
            Users will see a single button to connect
            the wallet and sign in via google or email and password. Once user
            signs in the chat will become available 
            </p><p>
            
            Roadmap: Users will be able
            to see an interactive roadmap of the project's goals and deadlines.
            </p><p>

            Newsletter: Users will be able to click a button to sign up for
            email updates. Footer: Users will be able to see all socials and
            contact information.


          </p>
      
          <p>
          Users will be able to see all socials and contact information.
          </p>
        </div>

 
      
      </section> */}

          <Footer />
        </section>
      </div>
    </>
  );
}

export default Flowchart;
