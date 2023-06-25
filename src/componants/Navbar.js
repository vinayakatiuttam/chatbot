import React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

// import tailwindConfig from "../../tailwind.config";
import "./navbar.css";

export default function () {
  return (
    <>
      <div>
        <div className="row">
          <div className="col-4 bg-primary">sidebar</div>
          <div className="col-8">
            <div className="row">
              <div className="col-8">
                <FormControl fullWidth sx={{ m: 1 }}>
                  <div className="flex d-flex justify-content-center align-items-center ">
                    <i className="bi bi-search width-30px color_black"></i>
                    <OutlinedInput
                      className="border_none"
                      id="outlined-adornment-amount"
                      startAdornment={
                        <InputAdornment position="start">
                          <i className=" bi bi-search"></i>
                        </InputAdornment>
                      }
                      label="Amount"
                    />
                  </div>
                </FormControl>
              </div>
              <div className="col-4">
                <div className="bell">
                  {/* <i className="bi bi-bell"></i> */}
                  <svg src="bell.svg"></svg>
                </div>
                <div className="two">
                  <div className="hr-parent">
                    <div className="hr-child">
                      <h5 className="hr-child-h5">HR</h5>
                    </div>
                  </div>
                  <div className="HR">
                    <h5>Harshit Raja</h5>
                  </div>
                </div>
                <div>
                  <i className="bi bi-chevron-down"></i>
                </div>
              </div>
            </div>
            <div className="Reactangle">
              <h3>chatbot</h3>
            </div>
            <div className="horizontalbox">
              <div className="vertical1 d-flex ">
                <div className="dropdown1 font-family-lato">
                  Display Personalization <div className="icon"></div>
                </div>
                <div className="dropdown2">
                  Language & Chat<i class="bi bi-chevron-down"></i>
                </div>
                <div className="dropdown3">
                  Email settings<i class="bi bi-chevron-down"></i>
                </div>
                <div className="dropdown4">
                  Admin setting <i class="bi bi-chevron-down"></i>
                </div>

                {/* <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    /> */}
                {/* <Stack spacing={2}>
  <Item>Item 1</Item>
  <Item>Item 2</Item>
  <Item>Item 3</Item>
</Stack> */}
              </div>
              <div className="vertical2">
                <div className="phone_nav d-flex justify-content-between">
                  <div className="right_phone_nav">kashfksh</div>
                  <div className="left_phone_nav">oiasfjoi</div>
                </div>
                <div className="attach-file"><i class="bi bi-paperclip"></i></div>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <div className="flex d-flex justify-content-center align-items-center ">
                    <i className="bi bi-search width-30px color_black"></i>
                    <OutlinedInput
                      className="border_none"
                      id="outlined-adornment-amount"
                      startAdornment={
                        <InputAdornment position="start">
                          <i className=" bi bi-search"></i>
                        </InputAdornment>
                      }
                      label="Amount"
                    />
                  </div>
                </FormControl>
                <div className="glob"><i class="bi bi-globe"></i></div>
              </div>
              
            </div>
            <div className="endbox d-flex ">
            <div className="chatting-logo"><div className="chatting-style-logo"></div>
            
            </div>
            <div className="last-min-container d-flex h-28px;
    w-120px"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
