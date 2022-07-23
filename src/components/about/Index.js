import React from 'react'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';


const About = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1 className="heading">Developed and Designed by Harshit Goyal</h1>
        <div style={{ display: "flex" }}>
          <Link to="/hj">
            <Button style={{ color: "black" }} onClick={() => window.open("", '_blank')}>
              <GitHubIcon />
            </Button>
          </Link>
          <Button style={{ color: "black" }} onClick={() => window.open("", '_blank')}>
            <TwitterIcon />
          </Button>
          <Button style={{ color: "black" }} onClick={() => window.open("", '_blank')}>
            <LinkedInIcon />
          </Button>
          <Button style={{ color: "black" }} onClick={() => window.open("", '_blank')}>
            <FacebookIcon />
          </Button>
        </div>
      </div>

    </div>
  )
}

export default About