import React from 'react'
import {Navbar, Text, Link} from "@nextui-org/react";

const index = () => {
  const collapseItems = [
    "Projects",
    "About",
    "Services",
    "Contact",
    "Feedback"
  ];

  return (
    <>
        <Navbar variant="floating">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Content>
          {/* <Navbar.Toggle aria-label="toggle navigation" /> */}
          <Navbar.Brand>
          {/* <Examples.AcmeLogo /> */}
          <Text b color="inherit" hideIn="xs">
            TJC
          </Text>
          </Navbar.Brand>
        </Navbar.Content>
        <Navbar.Content enableCursorHighlight activeColor="warning" hideIn="xs" variant="highlight">
          <Navbar.Link href="#">Projects</Navbar.Link>
          <Navbar.Link isActive href="#">
            About
          </Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
            <Navbar.Item>
              //
            </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse>
        {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={`${item}-${index}`}
              activeColor="warning"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default index