import * as React from "react";

import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Heading,
  Text,
  Link,
} from "@react-email/components";

export const EmailTemplate = ({ name, email, message }) => (
  <Html lang="en">
    <Head>
      <title>Message from {name}</title>
    </Head>
    <Preview>New message from aymengherdaine.com</Preview>
    <Body>
      <Container style={container}>
        <Link href="https://aymengherdaine.com" target="_blank">
          <Heading as="h1" style={logo}>
            A<span style={title_dotte}>.</span>
          </Heading>
        </Link>

        <Text style={message_style}>{message}</Text>

        <Heading as="h2">{name}</Heading>

        <Heading as="h3">{email}</Heading>
      </Container>
    </Body>
  </Html>
);

// Email styling
const container = {
  margin: "0 auto",
  padding: "50px 60px",
  borderRadius: "15px",
  backgroundColor: "#0a111c",
  color: "#e2e2e2",
};

const logo = {
  textAlign: "center",
  color: "#e2e2e2",
  fontSize: "3.5rem",
  margin: "0 auto",
  borderBottom: "1px solid #73355b",
};

const title_dotte = {
  color: "#73355b",
};

const message_style = {
  fontSize: "1.2rem",
  lineHeight: "1.8rem",
};
